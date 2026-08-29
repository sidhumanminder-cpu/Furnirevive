/**
 * Derived Authority — FurniRevive SEO
 *
 * Extends the authority registry with derived locality records for programmatic
 * pages (~500–600 locality pages). Provides an additive related-links engine
 * that enhances editorial relatedPages with hierarchy, geography, and authority
 * signals without replacing manually curated links.
 *
 * Mode control:
 *   PROGRAMMATIC_RELATED_LINKS_MODE env var (VITE_PROGRAMMATIC_RELATED_LINKS_MODE)
 *   - "legacy"  : use existing priorityScore() logic only
 *   - "hybrid"  : legacy + derived authority (default, shipped state)
 *   - "derived" : derived authority only (no legacy)
 */

import type { SeoServiceKey } from "./service-config.ts";
import type { AuthorityPageRecord } from "./authority-registry.ts";
import { AUTHORITY_REGISTRY } from "./authority-registry.ts";
import { getExistingNeighbourLinks } from "./location-graph.ts";

// ─── Shared interface ─────────────────────────────────────────────────────────

/**
 * Minimal interface satisfied by both AuthorityPageRecord (manual registry)
 * and DerivedLocalityRecord (programmatic). Engine functions work against
 * this abstraction so either type can be passed interchangeably.
 */
export type AuthorityNode = {
  slug: string;
  displayName: string;
  authorityScore: number;
  cluster: string;
  linkRole: string;
  primaryKeyword: string;
};

// ─── Derived locality record ──────────────────────────────────────────────────

export type DerivedLocalityTier = "sector" | "locality";

export type DerivedLocalityRecord = AuthorityNode & {
  /** Whether this is a named sector (e.g. Sector 56) or a named locality (e.g. Rohini) */
  tier: DerivedLocalityTier;
  /** Resolved href for the parent city service hub (e.g. /sofa-repair-gurgaon) */
  parentHubHref: string;
  /** Resolved href for the Delhi apex hub (e.g. /sofa-repair-delhi) */
  apexHubHref: string;
  /** City key (e.g. "gurgaon") */
  cityKey: string;
  /** Resolved service key (e.g. "sofa-repair") */
  serviceKey: SeoServiceKey;
};

// ─── Runtime mode ────────────────────────────────────────────────────────────

export type ProgrammaticLinksMode = "legacy" | "hybrid" | "derived";

/**
 * Controlled via VITE_PROGRAMMATIC_RELATED_LINKS_MODE env var.
 * Defaults to "hybrid" — legacy editorial links + derived authority injections.
 * Set to "legacy" to revert, "derived" to test full authority-driven output.
 */
export const PROGRAMMATIC_RELATED_LINKS_MODE: ProgrammaticLinksMode =
  (import.meta.env.VITE_PROGRAMMATIC_RELATED_LINKS_MODE as ProgrammaticLinksMode | undefined) ?? "hybrid";

// ─── Link allocation config ───────────────────────────────────────────────────

/**
 * Slot budget for each derived link category.
 * Tuning this object is the only change needed to adjust allocation strategy.
 */
export const PROGRAMMATIC_LINK_RULES = {
  /** Parent city hub (e.g. Sofa Repair Gurgaon) — always injected */
  parent: 1,
  /** Delhi apex hub (e.g. Sofa Repair Delhi) — always injected */
  apex: 1,
  /** Sibling localities from getExistingNeighbourLinks */
  siblings: 2,
  /** Cross-cluster commercial picks from AUTHORITY_REGISTRY */
  commercial: 2,
  /** Cost page pick from AUTHORITY_REGISTRY */
  cost: 1,
} as const;

// ─── Cross-cluster rules ──────────────────────────────────────────────────────

export type CrossClusterRule = {
  /** Source cluster that triggers this rule */
  sourceCluster: string;
  /** Target cluster to link into */
  targetCluster: string;
  /** Maximum links to inject from this rule (hard cap) */
  maxLinks: number;
  /**
   * Role of the target page to pick from AUTHORITY_REGISTRY.
   * Engine resolves the highest-authority matching record dynamically — no slug hard-coding.
   */
  targetRole: AuthorityPageRecord["linkRole"];
};

/**
 * Cross-cluster bridge rules.
 * Bridge chain: Furniture → Home Interiors (hub, furniture cluster) → Kitchen (hub, kitchen cluster)
 *
 * Each rule injects max 1 link at step 7 (lowest priority, only survives trim if budget allows).
 * The engine picks the highest-authority AUTHORITY_REGISTRY record that matches
 * targetCluster + targetRole, excluding self, parentHub, and apexHub.
 */
export const CROSS_CLUSTER_RULES: CrossClusterRule[] = [
  // Furniture locality pages → link to Kitchen apex hub (via home-interiors bridge resolved dynamically)
  {
    sourceCluster: "furniture",
    targetCluster: "kitchen",
    maxLinks: 1,
    targetRole: "hub",
  },
  // Kitchen locality pages → link back to Furniture hub (home-interiors-delhi bridge)
  {
    sourceCluster: "kitchen",
    targetCluster: "furniture",
    maxLinks: 1,
    targetRole: "hub",
  },
] as const;

// ─── Service hub registry ────────────────────────────────────────────────────

/**
 * Verified parent hub hrefs for each service × city combination.
 * Only city/service pairs with a real page in ALL_SEO_PAGES are included.
 * Hub resolution MUST use this registry — not string concatenation.
 */
export const SERVICE_HUB_REGISTRY: Partial<Record<SeoServiceKey, Partial<Record<string, string>>>> = {
  "modular-kitchen": {
    delhi: "/modular-kitchen-delhi",
    gurgaon: "/modular-kitchen-gurgaon",
    noida: "/modular-kitchen-noida",
    faridabad: "/modular-kitchen-faridabad",
    ghaziabad: "/modular-kitchen-ghaziabad",
  },
  "sofa-repair": {
    delhi: "/sofa-repair-delhi",
    gurgaon: "/sofa-repair-gurgaon",
    noida: "/sofa-repair-noida",
    faridabad: "/sofa-repair-faridabad",
    ghaziabad: "/sofa-repair-ghaziabad",
  },
  "furniture-repair": {
    delhi: "/furniture-repair-delhi",
    gurgaon: "/furniture-repair-gurgaon",
    noida: "/furniture-repair-noida",
    faridabad: "/furniture-repair-faridabad",
    ghaziabad: "/furniture-repair-ghaziabad",
  },
  "recliner-repair": {
    delhi: "/recliner-repair-delhi",
    gurgaon: "/recliner-repair-gurgaon",
    noida: "/recliner-repair-noida",
  },
  "leather-sofa-repair": {
    delhi: "/leather-sofa-repair-delhi",
  },
  "sofa-upholstery": {
    delhi: "/sofa-upholstery-delhi",
  },
  "foam-replacement": {
    delhi: "/foam-replacement-delhi",
  },
  "chair-repair": {
    delhi: "/chair-repair-delhi",
  },
  "furniture-polish": {
    delhi: "/furniture-polish-delhi",
  },
  "wooden-sofa-repair": {
    delhi: "/wooden-sofa-repair-delhi",
  },
  "sofa-spring-repair": {
    delhi: "/sofa-spring-repair-delhi",
  },
  "sofa-frame-repair": {
    delhi: "/sofa-frame-repair-delhi",
  },
} satisfies Partial<Record<SeoServiceKey, Partial<Record<string, string>>>>;

/**
 * The universal Delhi apex hub for each service cluster.
 * When the parent hub IS the Delhi hub (cityKey === "delhi"), apex falls back
 * to the broader "furniture-repair-delhi".
 */
const APEX_HUB_REGISTRY: Partial<Record<SeoServiceKey, string>> = {
  "modular-kitchen": "/modular-kitchen-delhi",
  "sofa-repair": "/sofa-repair-delhi",
  "furniture-repair": "/furniture-repair-delhi",
  "recliner-repair": "/recliner-repair-delhi",
  "leather-sofa-repair": "/leather-sofa-repair-delhi",
  "sofa-upholstery": "/sofa-upholstery-delhi",
  "foam-replacement": "/foam-replacement-delhi",
  "chair-repair": "/chair-repair-delhi",
  "furniture-polish": "/furniture-polish-delhi",
  "wooden-sofa-repair": "/wooden-sofa-repair-delhi",
  "sofa-spring-repair": "/sofa-spring-repair-delhi",
  "sofa-frame-repair": "/sofa-frame-repair-delhi",
};

// ─── Core functions ───────────────────────────────────────────────────────────

/**
 * Derives a DerivedLocalityRecord for a programmatic locality page.
 *
 * @param slug         The page slug (e.g. "sofa-repair-sector-56-gurgaon")
 * @param displayName  Human-readable page title (e.g. "Sofa Repair Sector 56 Gurgaon")
 * @param serviceKey   Resolved service key for this page
 * @param cityKey      City key (e.g. "gurgaon")
 * @param localityName Locality display name (e.g. "Sector 56" or "Rohini")
 */
export function deriveLocalityRecord(
  slug: string,
  displayName: string,
  serviceKey: SeoServiceKey,
  cityKey: string,
  localityName: string,
): DerivedLocalityRecord {
  // Tier detection: sector names start with "Sector " (e.g. "Sector 56")
  const tier: DerivedLocalityTier = localityName.startsWith("Sector ") ? "sector" : "locality";

  // Hub resolution via registry — not string concatenation
  const parentHubHref = SERVICE_HUB_REGISTRY[serviceKey]?.[cityKey] ?? `/sofa-repair-delhi`;
  const rawApexHref = APEX_HUB_REGISTRY[serviceKey] ?? "/sofa-repair-delhi";
  // If parent IS the apex (Delhi pages), fall back to furniture-repair-delhi to avoid duplication
  const apexHubHref = rawApexHref === parentHubHref ? "/furniture-repair-delhi" : rawApexHref;

  return {
    slug,
    displayName,
    tier,
    parentHubHref,
    apexHubHref,
    cityKey,
    serviceKey,
    authorityScore: tier === "sector" ? 45 : 50,
    cluster: SERVICE_CLUSTER_MAP[serviceKey] ?? serviceKey.split("-")[0],
    linkRole: "locality",
    primaryKeyword: displayName.toLowerCase(),
  };
}

/**
 * Maps service keys to their canonical authority cluster.
 * Required for services whose key prefix differs from the cluster name
 * (e.g. "modular-kitchen" → "kitchen").
 */
export const SERVICE_CLUSTER_MAP: Partial<Record<SeoServiceKey, string>> = {
  "modular-kitchen": "kitchen",
} as const;

// ─── Priority weights ─────────────────────────────────────────────────────────

const PRIORITY_WEIGHT = {
  parentHub: 100,
  apexHub: 95,
  existingStatic: 80,
  sibling: 70,
  commercial: 60,
  cost: 50,
  /** Step 7 — cross-cluster bridge; lowest priority, trimmed first if over budget */
  crossCluster: 30,
} as const;

type WeightedLink = {
  label: string;
  href: string;
  priority: number;
};

// ─── Derived related links builder ───────────────────────────────────────────

export type DerivedLinksResult = {
  links: { label: string; href: string }[];
  debug: {
    mode: ProgrammaticLinksMode;
    tier: DerivedLocalityTier;
    parentHub: string;
    apexHub: string;
    existingCount: number;
    injectedCount: number;
    finalCount: number;
  };
};

/**
 * Builds the final related-links list for a programmatic locality page
 * in hybrid or derived mode.
 *
 * In hybrid mode:
 *   - Existing editorial relatedPages are ALWAYS preserved (priority 80)
 *   - Parent hub and apex hub are guaranteed injections (priority 100 / 95)
 *   - Sibling localities, commercial, and cost picks augment from AUTHORITY_REGISTRY
 *   - Dedupe → priority sort → trim only if over maxLinks
 *
 * Returns both the final links and a debug object for DEV logging and testing.
 */
export function buildDerivedRelatedLinks(
  record: DerivedLocalityRecord,
  existingRelatedPages: { label: string; href: string }[],
  maxLinks = 12,
): DerivedLinksResult {
  const mode = PROGRAMMATIC_RELATED_LINKS_MODE;
  const selfHref = `/${record.slug}`;

  // Accumulate all candidates with priority weights
  const candidates: WeightedLink[] = [];

  // ── 1. Existing static relatedPages (always first in hybrid) ─────────────
  if (mode === "hybrid" || mode === "legacy") {
    for (const link of existingRelatedPages) {
      if (link.href !== selfHref) {
        candidates.push({ label: link.label, href: link.href, priority: PRIORITY_WEIGHT.existingStatic });
      }
    }
  }

  // In legacy mode, skip all derived injections
  if (mode === "legacy") {
    const deduped = dedupeByHref(candidates).slice(0, maxLinks);
    return {
      links: deduped.map(({ label, href }) => ({ label, href })),
      debug: {
        mode,
        tier: record.tier,
        parentHub: record.parentHubHref,
        apexHub: record.apexHubHref,
        existingCount: existingRelatedPages.length,
        injectedCount: 0,
        finalCount: deduped.length,
      },
    };
  }

  // ── 2. Parent hub (guaranteed, priority 100) ──────────────────────────────
  const parentLabel = AUTHORITY_REGISTRY[record.parentHubHref.replace(/^\//, "")]?.displayName
    ?? formatHrefAsLabel(record.parentHubHref);
  candidates.push({ label: parentLabel, href: record.parentHubHref, priority: PRIORITY_WEIGHT.parentHub });

  // ── 3. Apex hub (guaranteed, priority 95) ─────────────────────────────────
  const apexLabel = AUTHORITY_REGISTRY[record.apexHubHref.replace(/^\//, "")]?.displayName
    ?? formatHrefAsLabel(record.apexHubHref);
  candidates.push({ label: apexLabel, href: record.apexHubHref, priority: PRIORITY_WEIGHT.apexHub });

  // ── 4. Sibling localities via getExistingNeighbourLinks ──────────────────
  const siblings = getExistingNeighbourLinks(record.slug, record.serviceKey);
  let siblingCount = 0;
  for (const sibling of siblings) {
    if (siblingCount >= PROGRAMMATIC_LINK_RULES.siblings) break;
    if (sibling.href !== selfHref) {
      candidates.push({ label: sibling.name, href: sibling.href, priority: PRIORITY_WEIGHT.sibling });
      siblingCount++;
    }
  }

  // ── 5. Commercial picks from AUTHORITY_REGISTRY ──────────────────────────
  const commercialPicks = pickAuthorityByRole(record, "commercial", PROGRAMMATIC_LINK_RULES.commercial);
  for (const pick of commercialPicks) {
    candidates.push({ label: pick.displayName, href: `/${pick.slug}`, priority: PRIORITY_WEIGHT.commercial });
  }

  // ── 6. Cost pick from AUTHORITY_REGISTRY ─────────────────────────────────
  const costPicks = pickAuthorityByRole(record, "cost", PROGRAMMATIC_LINK_RULES.cost);
  for (const pick of costPicks) {
    candidates.push({ label: pick.displayName, href: `/${pick.slug}`, priority: PRIORITY_WEIGHT.cost });
  }

  // ── 7. Cross-cluster bridge (final, lowest priority) ─────────────────────
  // Picks the highest-authority AUTHORITY_REGISTRY record matching targetCluster + targetRole.
  // Budget hard cap: maxLinks per rule (always 1 per the CROSS_CLUSTER_RULES declaration).
  // Only survives final trim if link budget allows — never displaces intra-cluster links.
  const crossClusterLinks = pickCrossClusterLinks(record);
  for (const link of crossClusterLinks) {
    candidates.push({ label: link.label, href: link.href, priority: PRIORITY_WEIGHT.crossCluster });
  }

  // ── Dedupe by href, priority sort, trim ──────────────────────────────────
  const existingHrefs = new Set(existingRelatedPages.map((l) => l.href));
  const deduped = dedupeByHref(candidates).filter((l) => l.href !== selfHref);
  // Priority sort: higher priority first; within same priority, preserve insertion order
  deduped.sort((a, b) => b.priority - a.priority);

  const finalLinks = deduped.slice(0, maxLinks);

  // Count injected: links NOT in original existingRelatedPages
  const injected = finalLinks.filter((l) => !existingHrefs.has(l.href));

  if (import.meta.env.DEV) {
    const parentRecord = AUTHORITY_REGISTRY[record.parentHubHref.replace(/^\//, "")];
    const apexRecord = AUTHORITY_REGISTRY[record.apexHubHref.replace(/^\//, "")];
    console.group(`[derived-authority] ${record.displayName}`);
    console.log(`  Tier:     ${record.tier}`);
    console.log(`  Parent:   ${parentRecord?.displayName ?? record.parentHubHref}`);
    console.log(`  Apex:     ${apexRecord?.displayName ?? record.apexHubHref}`);
    console.log(`  Injected: ${injected.length} | Existing: ${existingRelatedPages.length} | Final: ${finalLinks.length}`);
    console.groupEnd();
  }

  return {
    links: finalLinks.map(({ label, href }) => ({ label, href })),
    debug: {
      mode,
      tier: record.tier,
      parentHub: record.parentHubHref,
      apexHub: record.apexHubHref,
      existingCount: existingRelatedPages.length,
      injectedCount: injected.length,
      finalCount: finalLinks.length,
    },
  };
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

/** Deduplicate a WeightedLink array by href, keeping the first (highest priority) occurrence */
function dedupeByHref(links: WeightedLink[]): WeightedLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

/** Convert an href like "/sofa-repair-delhi" to "Sofa Repair Delhi" as a fallback label */
function formatHrefAsLabel(href: string): string {
  return href
    .replace(/^\//, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Pick AUTHORITY_REGISTRY records by linkRole for a given derived locality page.
 * Prefers records sharing the same cluster, then by authorityScore DESC.
 */
function pickAuthorityByRole(
  record: DerivedLocalityRecord,
  role: AuthorityPageRecord["linkRole"],
  max: number,
): AuthorityPageRecord[] {
  const selfSlug = record.slug;
  const selfHref = `/${selfSlug}`;
  const selfParentHref = record.parentHubHref;
  const selfApexHref = record.apexHubHref;

  return Object.values(AUTHORITY_REGISTRY)
    .filter(
      (r) =>
        r.linkRole === role &&
        `/${r.slug}` !== selfHref &&
        `/${r.slug}` !== selfParentHref &&
        `/${r.slug}` !== selfApexHref,
    )
    .sort((a, b) => {
      // Same cluster first, then higher authority score
      const aCluster = a.cluster === record.cluster ? 1 : 0;
      const bCluster = b.cluster === record.cluster ? 1 : 0;
      if (bCluster !== aCluster) return bCluster - aCluster;
      return b.authorityScore - a.authorityScore;
    })
    .slice(0, max);
}

/**
 * Step 7 — Cross-cluster bridge link picker.
 *
 * For each CROSS_CLUSTER_RULES rule where sourceCluster matches the record's cluster,
 * picks up to rule.maxLinks AUTHORITY_REGISTRY records from the targetCluster with
 * the specified targetRole, sorted by authorityScore DESC.
 *
 * Excludes self, parentHub, and apexHub to avoid self-links and duplicates.
 * Returns at most one { label, href } per matching rule.
 */
function pickCrossClusterLinks(
  record: DerivedLocalityRecord,
): { label: string; href: string }[] {
  const selfHref = `/${record.slug}`;
  const results: { label: string; href: string }[] = [];

  for (const rule of CROSS_CLUSTER_RULES) {
    if (rule.sourceCluster !== record.cluster) continue;

    const picks = Object.values(AUTHORITY_REGISTRY)
      .filter(
        (r) =>
          r.cluster === rule.targetCluster &&
          r.linkRole === rule.targetRole &&
          `/${r.slug}` !== selfHref &&
          `/${r.slug}` !== record.parentHubHref &&
          `/${r.slug}` !== record.apexHubHref,
      )
      .sort((a, b) => b.authorityScore - a.authorityScore)
      .slice(0, rule.maxLinks);

    for (const pick of picks) {
      results.push({ label: pick.displayName, href: `/${pick.slug}` });
    }
  }

  return results;
}
