/**
 * Cross-Cluster Authority Audit — FurniRevive SEO
 *
 * DEV-only utility. Generates a structured report verifying the three-layer
 * internal authority linking system is correctly wired:
 *
 *   Furniture Repair → Home Interiors Delhi → Modular Kitchen Delhi
 *
 * Checks:
 *   1. Kitchen hub inbound coverage — every kitchen city hub has ≥1 inbound
 *      cross-cluster link from a furniture locality page.
 *   2. Furniture-to-kitchen bridge output — all furniture locality pages that
 *      should emit a kitchen link actually do.
 *   3. Kitchen-to-furniture bridge output — all kitchen locality pages that
 *      should emit a furniture bridge link actually do.
 *   4. Cross-cluster budget compliance — no locality page exceeds the 1-link
 *      cap per CROSS_CLUSTER_RULES.
 *   5. Orphan kitchen hubs — kitchen hubs with zero inbound authority from
 *      any cluster.
 *
 * Auto-runs in DEV via the module side-effect at the bottom of this file.
 * Tree-shaken in production builds (import.meta.env.DEV guard).
 *
 * Usage (manual):
 *   import { generateCrossClusterReport } from "@/lib/seoConfigs/authority-audit.ts";
 *   const report = generateCrossClusterReport();
 *   console.table(report.kitchenHubCoverage);
 */

import { AUTHORITY_REGISTRY } from "./authority-registry.ts";
import {
  CROSS_CLUSTER_RULES,
  SERVICE_CLUSTER_MAP,
  buildDerivedRelatedLinks,
  deriveLocalityRecord,
  PROGRAMMATIC_RELATED_LINKS_MODE,
} from "./derived-authority.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "../registry/kitchen-locality-registry.ts";
import { LOCALITY_REGISTRY } from "../registry/locality-registry.ts";

// ─── Report types ─────────────────────────────────────────────────────────────

export type HubCoverageRow = {
  /** Slug of the kitchen city hub */
  hubSlug: string;
  /** Display name */
  hubName: string;
  /** Number of locality pages that link inbound to this hub via cross-cluster */
  inboundCount: number;
  /** Whether the minimum coverage threshold (≥1) is met */
  covered: boolean;
};

export type BridgeOutputRow = {
  /** Locality page slug */
  pageSlug: string;
  /** Source cluster */
  cluster: string;
  /** Whether a cross-cluster bridge link was emitted */
  hasBridgeLink: boolean;
  /** The bridge link href if present */
  bridgeLinkHref: string | null;
  /** Total links in the final list */
  totalLinks: number;
};

export type BudgetViolationRow = {
  pageSlug: string;
  cluster: string;
  crossClusterCount: number;
  maxAllowed: number;
};

export type CrossClusterReport = {
  /** Mode the engine ran in */
  mode: string;
  /** Kitchen hub inbound coverage (check 1 + 5) */
  kitchenHubCoverage: HubCoverageRow[];
  /** Furniture→Kitchen bridge output per furniture locality (check 2) */
  furnitureToKitchenOutput: BridgeOutputRow[];
  /** Kitchen→Furniture bridge output per kitchen locality (check 3) */
  kitchenToFurnitureOutput: BridgeOutputRow[];
  /** Pages exceeding per-rule cross-cluster link budget (check 4) */
  budgetViolations: BudgetViolationRow[];
  /** Summary counts */
  summary: {
    kitchenHubsCovered: number;
    kitchenHubsTotal: number;
    kitchenHubsUncovered: number;
    furnitureLocalitiesWithBridge: number;
    furnitureLocalitiesTotalSampled: number;
    kitchenLocalitiesWithBridge: number;
    kitchenLocalitiesTotalSampled: number;
    budgetViolations: number;
  };
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** All kitchen hub slugs from the authority registry */
function getKitchenHubs(): { slug: string; displayName: string }[] {
  return Object.values(AUTHORITY_REGISTRY).filter(
    (r) => r.cluster === "kitchen" && r.linkRole === "hub",
  );
}

/** All furniture cluster hub slugs (including bridge page) */
function getFurnitureHubs(): { slug: string; displayName: string }[] {
  return Object.values(AUTHORITY_REGISTRY).filter(
    (r) => r.cluster === "furniture" && r.linkRole === "hub",
  );
}

/**
 * Derives the cluster for a service key, matching the same logic as
 * deriveLocalityRecord so this audit uses the same source of truth.
 */
function clusterForService(serviceKey: string): string {
  return SERVICE_CLUSTER_MAP[serviceKey as keyof typeof SERVICE_CLUSTER_MAP]
    ?? serviceKey.split("-")[0];
}

/**
 * Returns cross-cluster link hrefs from a final links list.
 * A cross-cluster link is one that points to a cluster different from sourceCluster.
 */
function extractCrossClusterHrefs(
  links: { label: string; href: string }[],
  sourceCluster: string,
): string[] {
  return links
    .map((l) => l.href)
    .filter((href) => {
      const slug = href.replace(/^\//, "");
      const record = AUTHORITY_REGISTRY[slug];
      return record !== undefined && record.cluster !== sourceCluster;
    });
}

/**
 * Sample up to `limit` furniture locality pages from LOCALITY_REGISTRY
 * (uses "furniture-repair" service key as representative).
 */
function sampleFurnitureLocalities(limit: number) {
  return LOCALITY_REGISTRY.filter((l) => l.status === "published").slice(0, limit);
}

/**
 * Sample up to `limit` kitchen locality pages from MODULAR_KITCHEN_LOCALITY_REGISTRY.
 */
function sampleKitchenLocalities(limit: number) {
  return MODULAR_KITCHEN_LOCALITY_REGISTRY.filter((l) => l.status === "published").slice(0, limit);
}

// ─── Core report generator ────────────────────────────────────────────────────

/**
 * Generates the cross-cluster authority report.
 *
 * @param furnitureSampleSize - Max furniture locality pages to sample (default 20)
 * @param kitchenSampleSize   - Max kitchen locality pages to sample (default 20)
 */
export function generateCrossClusterReport(
  furnitureSampleSize = 20,
  kitchenSampleSize = 20,
): CrossClusterReport {
  const mode = PROGRAMMATIC_RELATED_LINKS_MODE;

  // ── Check 2: Furniture → Kitchen bridge output ────────────────────────────
  const furnitureLocalities = sampleFurnitureLocalities(furnitureSampleSize);
  const furnitureToKitchenOutput: BridgeOutputRow[] = [];
  const inboundKitchenHubCounts: Record<string, number> = {};

  for (const locality of furnitureLocalities) {
    const serviceKey = "furniture-repair" as const;
    const cluster = clusterForService(serviceKey);
    const record = deriveLocalityRecord(
      locality.slug,
      `Furniture Repair ${locality.name}`,
      serviceKey,
      locality.city,
      locality.name,
    );
    const { links } = buildDerivedRelatedLinks(record, [], 12);
    const crossHrefs = extractCrossClusterHrefs(links, cluster);

    for (const href of crossHrefs) {
      const slug = href.replace(/^\//, "");
      inboundKitchenHubCounts[slug] = (inboundKitchenHubCounts[slug] ?? 0) + 1;
    }

    furnitureToKitchenOutput.push({
      pageSlug: locality.slug,
      cluster,
      hasBridgeLink: crossHrefs.length > 0,
      bridgeLinkHref: crossHrefs[0] ?? null,
      totalLinks: links.length,
    });
  }

  // ── Check 3: Kitchen → Furniture bridge output ────────────────────────────
  const kitchenLocalities = sampleKitchenLocalities(kitchenSampleSize);
  const kitchenToFurnitureOutput: BridgeOutputRow[] = [];

  for (const locality of kitchenLocalities) {
    const serviceKey = "modular-kitchen" as const;
    const cluster = clusterForService(serviceKey);
    const record = deriveLocalityRecord(
      locality.slug,
      `Modular Kitchen ${locality.name}`,
      serviceKey,
      locality.city,
      locality.name,
    );
    const { links } = buildDerivedRelatedLinks(record, [], 12);
    const crossHrefs = extractCrossClusterHrefs(links, cluster);

    kitchenToFurnitureOutput.push({
      pageSlug: locality.slug,
      cluster,
      hasBridgeLink: crossHrefs.length > 0,
      bridgeLinkHref: crossHrefs[0] ?? null,
      totalLinks: links.length,
    });
  }

  // ── Check 1 + 5: Kitchen hub inbound coverage ─────────────────────────────
  const kitchenHubs = getKitchenHubs();
  const kitchenHubCoverage: HubCoverageRow[] = kitchenHubs.map((hub) => ({
    hubSlug: hub.slug,
    hubName: hub.displayName,
    inboundCount: inboundKitchenHubCounts[hub.slug] ?? 0,
    covered: (inboundKitchenHubCounts[hub.slug] ?? 0) > 0,
  }));

  // ── Check 4: Budget violations ────────────────────────────────────────────
  const budgetViolations: BudgetViolationRow[] = [];
  const maxPerCluster: Record<string, number> = {};
  for (const rule of CROSS_CLUSTER_RULES) {
    const existing = maxPerCluster[rule.sourceCluster] ?? 0;
    maxPerCluster[rule.sourceCluster] = existing + rule.maxLinks;
  }

  // Check furniture localities
  for (const row of furnitureToKitchenOutput) {
    const max = maxPerCluster[row.cluster] ?? 1;
    const { links } = buildDerivedRelatedLinks(
      deriveLocalityRecord(
        row.pageSlug,
        row.pageSlug,
        "furniture-repair",
        "delhi",
        row.pageSlug,
      ),
      [],
      12,
    );
    const crossCount = extractCrossClusterHrefs(links, row.cluster).length;
    if (crossCount > max) {
      budgetViolations.push({
        pageSlug: row.pageSlug,
        cluster: row.cluster,
        crossClusterCount: crossCount,
        maxAllowed: max,
      });
    }
  }

  // Check kitchen localities
  for (const row of kitchenToFurnitureOutput) {
    const max = maxPerCluster[row.cluster] ?? 1;
    const { links } = buildDerivedRelatedLinks(
      deriveLocalityRecord(
        row.pageSlug,
        row.pageSlug,
        "modular-kitchen",
        "delhi",
        row.pageSlug,
      ),
      [],
      12,
    );
    const crossCount = extractCrossClusterHrefs(links, row.cluster).length;
    if (crossCount > max) {
      budgetViolations.push({
        pageSlug: row.pageSlug,
        cluster: row.cluster,
        crossClusterCount: crossCount,
        maxAllowed: max,
      });
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  const summary = {
    kitchenHubsCovered: kitchenHubCoverage.filter((r) => r.covered).length,
    kitchenHubsTotal: kitchenHubCoverage.length,
    kitchenHubsUncovered: kitchenHubCoverage.filter((r) => !r.covered).length,
    furnitureLocalitiesWithBridge: furnitureToKitchenOutput.filter((r) => r.hasBridgeLink).length,
    furnitureLocalitiesTotalSampled: furnitureToKitchenOutput.length,
    kitchenLocalitiesWithBridge: kitchenToFurnitureOutput.filter((r) => r.hasBridgeLink).length,
    kitchenLocalitiesTotalSampled: kitchenToFurnitureOutput.length,
    budgetViolations: budgetViolations.length,
  };

  return {
    mode,
    kitchenHubCoverage,
    furnitureToKitchenOutput,
    kitchenToFurnitureOutput,
    budgetViolations,
    summary,
  };
}

// ─── DEV auto-run ─────────────────────────────────────────────────────────────

if (import.meta.env.DEV) {
  const report = generateCrossClusterReport();

  console.group("[authority-audit] Cross-Cluster Authority Report");
  console.log(`  Mode: ${report.mode}`);
  console.log(
    `  Kitchen hubs covered: ${report.summary.kitchenHubsCovered}/${report.summary.kitchenHubsTotal}`,
  );
  console.log(
    `  Furniture→Kitchen bridge: ${report.summary.furnitureLocalitiesWithBridge}/${report.summary.furnitureLocalitiesTotalSampled} pages`,
  );
  console.log(
    `  Kitchen→Furniture bridge: ${report.summary.kitchenLocalitiesWithBridge}/${report.summary.kitchenLocalitiesTotalSampled} pages`,
  );
  console.log(`  Budget violations: ${report.summary.budgetViolations}`);

  if (report.summary.kitchenHubsUncovered > 0) {
    console.warn("  ⚠ Uncovered kitchen hubs:");
    console.table(report.kitchenHubCoverage.filter((r) => !r.covered));
  }

  if (report.summary.budgetViolations > 0) {
    console.warn("  ⚠ Budget violations:");
    console.table(report.budgetViolations);
  }

  console.groupEnd();
}
