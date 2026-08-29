import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireAdmin } from "./helpers";

// Shared validators
const repairTypeValidator = v.union(
  v.literal("sofa"),
  v.literal("leather"),
  v.literal("recliner"),
  v.literal("furniture"),
  v.literal("upholstery")
);

const problemTypeValidator = v.union(
  v.literal("sagging"),
  v.literal("tear"),
  v.literal("broken-frame"),
  v.literal("spring"),
  v.literal("polish"),
  v.literal("mechanism"),
  v.literal("other")
);

const intentTypeValidator = v.union(
  v.literal("near_me"),
  v.literal("cost"),
  v.literal("urgency"),
  v.literal("type"),
  v.literal("gallery")
);

// ─── Admin Queries ───

/** Get all case studies (admin only) */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const studies = await ctx.db
      .query("repairCaseStudies")
      .order("desc")
      .collect();

    return await Promise.all(
      studies.map(async (study) => {
        const beforeUrl = await ctx.storage.getUrl(study.beforeImageId);
        const afterUrl = await ctx.storage.getUrl(study.afterImageId);
        return { ...study, beforeUrl, afterUrl };
      })
    );
  },
});

/** Generate upload URL for case study images */
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

/** Create a new case study */
export const create = mutation({
  args: {
    repairType: repairTypeValidator,
    problemType: problemTypeValidator,
    location: v.string(),
    intentType: intentTypeValidator,
    beforeImageId: v.id("_storage"),
    afterImageId: v.id("_storage"),
    altTextBefore: v.string(),
    altTextAfter: v.string(),
    problem: v.string(),
    solution: v.string(),
    materialsUsed: v.optional(v.string()),
    costMin: v.number(),
    costMax: v.number(),
    timeTaken: v.string(),
    heading: v.string(),
    pageSlugs: v.array(v.string()),
    isFeatured: v.boolean(),
    displayOrder: v.number(),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    return await ctx.db.insert("repairCaseStudies", args);
  },
});

/** Update an existing case study */
export const update = mutation({
  args: {
    id: v.id("repairCaseStudies"),
    repairType: v.optional(repairTypeValidator),
    problemType: v.optional(problemTypeValidator),
    location: v.optional(v.string()),
    intentType: v.optional(intentTypeValidator),
    beforeImageId: v.optional(v.id("_storage")),
    afterImageId: v.optional(v.id("_storage")),
    altTextBefore: v.optional(v.string()),
    altTextAfter: v.optional(v.string()),
    problem: v.optional(v.string()),
    solution: v.optional(v.string()),
    materialsUsed: v.optional(v.string()),
    costMin: v.optional(v.number()),
    costMax: v.optional(v.number()),
    timeTaken: v.optional(v.string()),
    heading: v.optional(v.string()),
    pageSlugs: v.optional(v.array(v.string())),
    isFeatured: v.optional(v.boolean()),
    displayOrder: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const { id, ...updates } = args;

    const existing = await ctx.db.get(id);
    if (!existing) {
      throw new ConvexError({
        message: "Case study not found",
        code: "NOT_FOUND",
      });
    }

    // Filter out undefined values
    const cleanUpdates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        cleanUpdates[key] = value;
      }
    }

    await ctx.db.patch(id, cleanUpdates);
  },
});

/** Delete a case study and its images */
export const remove = mutation({
  args: { id: v.id("repairCaseStudies") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const study = await ctx.db.get(args.id);
    if (!study) {
      throw new ConvexError({
        message: "Case study not found",
        code: "NOT_FOUND",
      });
    }

    // Delete stored images
    await ctx.storage.delete(study.beforeImageId);
    await ctx.storage.delete(study.afterImageId);
    await ctx.db.delete(args.id);
  },
});

// ─── Public Queries (for SEO pages) ───

/** Get case studies for a specific page slug with auto-matching fallback */
export const getForPage = query({
  args: { pageSlug: v.string() },
  handler: async (ctx, args) => {
    const slug = args.pageSlug.toLowerCase();

    // 1. Direct match: case studies explicitly assigned to this page
    const allStudies = await ctx.db
      .query("repairCaseStudies")
      .order("asc")
      .collect();

    const directMatches = allStudies.filter((s) =>
      s.pageSlugs.includes(slug)
    );

    if (directMatches.length >= 2) {
      return await resolveUrls(ctx, directMatches.slice(0, 3));
    }

    // 2. Auto-match by intent type derived from slug
    const intentType = deriveIntentType(slug);
    const repairType = deriveRepairType(slug);

    // Collect candidates excluding already-matched ones
    const directIds = new Set(directMatches.map((s) => s._id));
    const candidates = allStudies.filter((s) => !directIds.has(s._id));

    // Score and rank candidates
    const scored = candidates.map((study) => {
      let score = 0;
      if (intentType && study.intentType === intentType) score += 3;
      if (repairType && study.repairType === repairType) score += 2;
      if (study.isFeatured) score += 1;
      return { study, score };
    });

    scored.sort((a, b) => b.score - a.score || a.study.displayOrder - b.study.displayOrder);

    const combined = [
      ...directMatches,
      ...scored.filter((s) => s.score > 0).map((s) => s.study),
    ];

    // Return up to 3 unique results
    const seen = new Set<string>();
    const results = [];
    for (const study of combined) {
      if (!seen.has(study._id) && results.length < 3) {
        seen.add(study._id);
        results.push(study);
      }
    }

    return await resolveUrls(ctx, results);
  },
});

// ─── Helpers ───

/** Derive intent type from a page slug */
function deriveIntentType(slug: string): string | null {
  if (slug.includes("near-me")) return "near_me";
  if (slug.includes("cost") || slug.includes("affordable") || slug.includes("price")) return "cost";
  if (slug.includes("same-day") || slug.includes("urgent")) return "urgency";
  if (slug.includes("gallery") || slug.includes("before-after") || slug.includes("photos")) return "gallery";
  return "type";
}

/** Derive repair type from a page slug */
function deriveRepairType(slug: string): string | null {
  if (slug.includes("leather")) return "leather";
  if (slug.includes("recliner")) return "recliner";
  if (slug.includes("upholstery")) return "upholstery";
  if (slug.includes("sofa")) return "sofa";
  if (slug.includes("furniture") || slug.includes("carpenter")) return "furniture";
  return null;
}

type StorageCtx = { storage: { getUrl: (id: string) => Promise<string | null> } };

/** Resolve storage IDs to URLs for an array of case studies */
async function resolveUrls<T extends { beforeImageId: string; afterImageId: string }>(
  ctx: StorageCtx,
  studies: T[]
) {
  return await Promise.all(
    studies.map(async (study) => {
      const beforeUrl = await ctx.storage.getUrl(study.beforeImageId);
      const afterUrl = await ctx.storage.getUrl(study.afterImageId);
      return { ...study, beforeUrl, afterUrl };
    })
  );
}
