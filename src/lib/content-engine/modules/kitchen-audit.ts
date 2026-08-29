/**
 * Kitchen Locality Audit — milestone-227
 *
 * DEV-ONLY utility: gated behind import.meta.env.DEV.
 * Zero production bundle impact — only called from browser console.
 *
 * Usage (browser console on any locality page, in dev mode):
 *   import('/src/lib/content-engine/modules/kitchen-audit.ts').then(m => m.auditLocalityPages())
 *
 * Or call auditLocalityPages() directly if already imported.
 */

import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import { buildLocalityProfile } from "./kitchen-locality-profile.ts";
import type { FaqProfileKey, LayoutSlug, MaterialSlug } from "../types.ts";

// ─── Report types ─────────────────────────────────────────────────────────────

export type PageDifferentiationReport = {
  slug: string;
  name: string;
  city: string;
  faqProfile: FaqProfileKey;
  recommendedLayouts: readonly LayoutSlug[];
  recommendedMaterials: readonly MaterialSlug[];
  budgetRange: string;
  installationDays: string;
  heroVariant: number;
  reviewVariant: number;
  pricingContext: string;
  profileVersion: number;
};

export type DistributionBucket = {
  key: string;
  count: number;
  percentage: string;
  pages: string[];
};

export type DistributionReport = {
  faqProfiles: DistributionBucket[];
  layoutCombinations: DistributionBucket[];
  materialCombinations: DistributionBucket[];
  installationWindows: DistributionBucket[];
  pricingContexts: DistributionBucket[];
  warnings: string[];
};

// ─── Core audit function ──────────────────────────────────────────────────────

export function auditLocalityPages(): {
  pages: PageDifferentiationReport[];
  distribution: DistributionReport;
} {
  if (!import.meta.env.DEV) {
    console.warn("[kitchen-audit] auditLocalityPages() is only available in development mode.");
    return { pages: [], distribution: { faqProfiles: [], layoutCombinations: [], materialCombinations: [], installationWindows: [], pricingContexts: [], warnings: [] } };
  }

  const pages: PageDifferentiationReport[] = MODULAR_KITCHEN_LOCALITY_REGISTRY.map((entry) => {
    const profile = buildLocalityProfile(entry);
    return {
      slug: entry.slug,
      name: entry.name,
      city: entry.city,
      faqProfile: profile.faqProfile,
      recommendedLayouts: profile.recommendedLayouts,
      recommendedMaterials: profile.recommendedMaterials,
      budgetRange: profile.budgetRange,
      installationDays: profile.installationDays,
      heroVariant: profile.heroVariant,
      reviewVariant: profile.reviewVariant,
      pricingContext: profile.pricingContext,
      profileVersion: profile.profileVersion,
    };
  });

  const total = pages.length;

  function makeBuckets(keyFn: (p: PageDifferentiationReport) => string): DistributionBucket[] {
    const map = new Map<string, string[]>();
    for (const p of pages) {
      const k = keyFn(p);
      const arr = map.get(k) ?? [];
      arr.push(p.slug);
      map.set(k, arr);
    }
    return Array.from(map.entries())
      .map(([key, slugs]) => ({
        key,
        count: slugs.length,
        percentage: `${((slugs.length / total) * 100).toFixed(1)}%`,
        pages: slugs,
      }))
      .sort((a, b) => b.count - a.count);
  }

  const faqProfiles = makeBuckets((p) => p.faqProfile);
  const layoutCombinations = makeBuckets((p) => p.recommendedLayouts.join(" + "));
  const materialCombinations = makeBuckets((p) => p.recommendedMaterials.join(" + "));
  const installationWindows = makeBuckets((p) => p.installationDays);
  const pricingContexts = makeBuckets((p) => p.pricingContext);

  const THRESHOLD = 50;
  const warnings: string[] = [];

  for (const b of faqProfiles) {
    const pct = (b.count / total) * 100;
    if (pct > THRESHOLD) warnings.push(`FAQ profile "${b.key}" covers ${b.percentage} of pages (>${THRESHOLD}% threshold)`);
  }
  for (const b of layoutCombinations) {
    const pct = (b.count / total) * 100;
    if (pct > THRESHOLD) warnings.push(`Layout combo "${b.key}" covers ${b.percentage} of pages (>${THRESHOLD}% threshold)`);
  }

  const distribution: DistributionReport = { faqProfiles, layoutCombinations, materialCombinations, installationWindows, pricingContexts, warnings };

  // Console output
  console.group("[kitchen-audit] Page Differentiation Summary");
  console.log(`Total pages audited: ${total}`);
  console.log("\nFAQ Profile Distribution:");
  faqProfiles.forEach((b) => console.log(`  ${b.key.padEnd(30)} ${String(b.count).padStart(4)} pages  (${b.percentage})`));
  console.log("\nLayout Recommendation Combos:");
  layoutCombinations.forEach((b) => console.log(`  ${b.key.padEnd(30)} ${String(b.count).padStart(4)} pages  (${b.percentage})`));
  console.log("\nMaterial Recommendation Combos:");
  materialCombinations.forEach((b) => console.log(`  ${b.key.padEnd(30)} ${String(b.count).padStart(4)} pages  (${b.percentage})`));
  console.log("\nInstallation Windows:");
  installationWindows.forEach((b) => console.log(`  ${b.key.padEnd(20)} ${String(b.count).padStart(4)} pages  (${b.percentage})`));
  if (warnings.length > 0) {
    console.warn("\n⚠ Distribution Warnings:");
    warnings.forEach((w) => console.warn("  " + w));
  } else {
    console.log("\n✅ All distribution checks passed (no combo > 50%)");
  }
  console.groupEnd();

  return { pages, distribution };
}
