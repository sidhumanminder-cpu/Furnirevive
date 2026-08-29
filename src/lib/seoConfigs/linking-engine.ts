/**
 * Internal Authority Linking Engine — FurniRevive SEO
 *
 * Selects related page links intelligently based on the authority registry.
 * Merges engine picks with curated static relatedPages.
 *
 * Merge order:
 *   1. Curated static links (relatedPages where curated === true) — always first
 *   2. Engine picks (cluster → authority → geographic → cost/supporting)
 *   3. Ordinary static relatedPages — fill remaining slots
 *   4. Dedupe by slug, no self-links, trim to maxLinks
 *
 * All selection is filtered by minAuthorityScore to avoid weak recommendations.
 * Sort order is deterministic: manualPriority DESC → authorityScore DESC → slug ASC
 */

import type { AuthorityPageRecord, AuthorityLinkRole } from "./authority-registry.ts";
import { AUTHORITY_REGISTRY } from "./authority-registry.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

// ─── Configuration ────────────────────────────────────────────────────────────

export type LinkingOptions = {
  maxLinks: number;
  curatedReserve: number;
  minAuthorityScore: number;
};

export type LinkingResult = {
  links: { label: string; href: string }[];
  debug: {
    engineLinks: string[];
    curatedLinks: string[];
    staticLinks: string[];
    droppedLinks: string[];
  };
};

export const LINK_ROLE_DEFAULTS: Record<AuthorityLinkRole, LinkingOptions> = {
  hub:        { maxLinks: 7, curatedReserve: 2, minAuthorityScore: 50 },
  commercial: { maxLinks: 7, curatedReserve: 2, minAuthorityScore: 50 },
  locality:   { maxLinks: 5, curatedReserve: 1, minAuthorityScore: 40 },
  cost:       { maxLinks: 6, curatedReserve: 2, minAuthorityScore: 50 },
  supporting: { maxLinks: 6, curatedReserve: 2, minAuthorityScore: 50 },
  blog:       { maxLinks: 6, curatedReserve: 2, minAuthorityScore: 40 },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Deterministic sort: manualPriority DESC → authorityScore DESC → slug ASC
 */
function sortByAuthority(a: AuthorityPageRecord, b: AuthorityPageRecord): number {
  if (b.manualPriority !== a.manualPriority) return b.manualPriority - a.manualPriority;
  if (b.authorityScore !== a.authorityScore) return b.authorityScore - a.authorityScore;
  return a.slug.localeCompare(b.slug);
}

function allRecords(): AuthorityPageRecord[] {
  return Object.values(AUTHORITY_REGISTRY);
}

function hrefFromSlug(slug: string): string {
  return `/${slug}`;
}

// ─── Individual pickers ───────────────────────────────────────────────────────

/**
 * Pages in the same topical cluster, excluding the source page.
 */
export function pickClusterLinks(
  source: AuthorityPageRecord,
  minScore: number,
  max: number,
): AuthorityPageRecord[] {
  return allRecords()
    .filter(
      (r) =>
        r.slug !== source.slug &&
        r.cluster === source.cluster &&
        r.authorityScore >= minScore,
    )
    .sort(sortByAuthority)
    .slice(0, max);
}

/**
 * Cross-cluster hub and commercial pages with high authority.
 */
export function pickAuthorityLinks(
  source: AuthorityPageRecord,
  minScore: number,
  max: number,
): AuthorityPageRecord[] {
  return allRecords()
    .filter(
      (r) =>
        r.slug !== source.slug &&
        r.cluster !== source.cluster &&
        (r.linkRole === "hub" || r.linkRole === "commercial") &&
        r.authorityScore >= minScore,
    )
    .sort(sortByAuthority)
    .slice(0, max);
}

/**
 * Pages sharing at least one cityKey with the source page.
 */
export function pickGeographicLinks(
  source: AuthorityPageRecord,
  minScore: number,
  max: number,
): AuthorityPageRecord[] {
  const sourceCities = new Set(source.cityKeys);
  return allRecords()
    .filter(
      (r) =>
        r.slug !== source.slug &&
        r.authorityScore >= minScore &&
        r.cityKeys.some((c) => sourceCities.has(c)),
    )
    .sort(sortByAuthority)
    .slice(0, max);
}

/**
 * Single highest-authority page in the same cluster for inline CTAs.
 */
export function pickContextualCTA(
  source: AuthorityPageRecord,
): AuthorityPageRecord | null {
  const candidates = allRecords()
    .filter(
      (r) =>
        r.slug !== source.slug &&
        r.cluster === source.cluster &&
        (r.linkRole === "hub" || r.linkRole === "commercial"),
    )
    .sort(sortByAuthority);
  return candidates[0] ?? null;
}

// ─── Orchestrator ─────────────────────────────────────────────────────────────

/**
 * Build the final merged related-links list for a page.
 *
 * @param sourceRecord  Registry entry for the current page
 * @param pageData      Full SeoPageData (for static relatedPages)
 * @param opts          Optional overrides (falls back to LINK_ROLE_DEFAULTS)
 */
export function buildRelatedLinks(
  sourceRecord: AuthorityPageRecord,
  pageData: SeoPageData,
  opts?: Partial<LinkingOptions>,
): LinkingResult {
  const defaults = LINK_ROLE_DEFAULTS[sourceRecord.linkRole];
  const { maxLinks, curatedReserve, minAuthorityScore } = { ...defaults, ...opts };

  const staticRelated = pageData.relatedPages ?? [];

  // Step 1: Curated links — always kept, up to curatedReserve slots
  const curatedStatic = staticRelated.filter((r) => r.curated === true);
  const curatedLinks = curatedStatic.slice(0, curatedReserve);
  const usedSlugs = new Set<string>([
    sourceRecord.slug,
    ...curatedLinks.map((l) => l.href.replace(/^\//, "")),
  ]);

  // Step 2: Engine picks — cluster → authority → geographic → cost/supporting
  const engineCandidates: AuthorityPageRecord[] = [];

  // Cluster picks (high weight)
  for (const r of pickClusterLinks(sourceRecord, minAuthorityScore, maxLinks)) {
    if (!usedSlugs.has(r.slug)) engineCandidates.push(r);
  }
  // Authority picks (cross-cluster hubs)
  for (const r of pickAuthorityLinks(sourceRecord, minAuthorityScore, maxLinks)) {
    if (!usedSlugs.has(r.slug)) engineCandidates.push(r);
  }
  // Geographic picks
  for (const r of pickGeographicLinks(sourceRecord, minAuthorityScore, maxLinks)) {
    if (!usedSlugs.has(r.slug)) engineCandidates.push(r);
  }

  // Dedupe engine candidates and sort deterministically
  const seen = new Set<string>();
  const dedupedEngine = engineCandidates.filter((r) => {
    if (seen.has(r.slug)) return false;
    seen.add(r.slug);
    return true;
  });
  dedupedEngine.sort(sortByAuthority);

  // Fill engine slots: maxLinks - curatedReserve slots available
  const engineSlots = maxLinks - curatedLinks.length;
  const engineLinks = dedupedEngine.slice(0, engineSlots);
  for (const r of engineLinks) usedSlugs.add(r.slug);

  // Step 3: Ordinary static relatedPages — fill remaining slots
  const remainingSlots = maxLinks - curatedLinks.length - engineLinks.length;
  const ordinaryStatic = staticRelated
    .filter((r) => !r.curated && !usedSlugs.has(r.href.replace(/^\//, "")))
    .slice(0, remainingSlots);
  for (const r of ordinaryStatic) usedSlugs.add(r.href.replace(/^\//, ""));

  // Compile final list
  const finalLinks: { label: string; href: string }[] = [
    ...curatedLinks.map(({ label, href }) => ({ label, href })),
    ...engineLinks.map((r) => ({ label: r.displayName, href: hrefFromSlug(r.slug) })),
    ...ordinaryStatic.map(({ label, href }) => ({ label, href })),
  ];

  // Dropped links (static links that didn't make it)
  const allStaticSlugs = staticRelated.map((r) => r.href.replace(/^\//, ""));
  const finalSlugs = new Set(finalLinks.map((l) => l.href.replace(/^\//, "")));
  const droppedLinks = allStaticSlugs.filter((s) => !finalSlugs.has(s));

  // Dev logging
  if (import.meta.env.DEV) {
    console.group(`[linking-engine] ${sourceRecord.slug}`);
    console.log("  engine:  ", engineLinks.map((r) => r.slug).join(", ") || "(none)");
    console.log("  curated: ", curatedLinks.map((l) => l.href).join(", ") || "(none)");
    console.log("  static:  ", ordinaryStatic.map((l) => l.href).join(", ") || "(none)");
    if (droppedLinks.length > 0) {
      console.log("  dropped: ", droppedLinks.join(", "));
    }
    console.groupEnd();
  }

  return {
    links: finalLinks,
    debug: {
      engineLinks: engineLinks.map((r) => r.slug),
      curatedLinks: curatedLinks.map((l) => l.href),
      staticLinks: ordinaryStatic.map((l) => l.href),
      droppedLinks,
    },
  };
}
