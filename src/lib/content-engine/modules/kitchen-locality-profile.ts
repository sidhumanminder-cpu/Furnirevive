/**
 * Kitchen Locality Profile Builder — milestone-227
 *
 * Single source of truth for all page-level business decisions.
 * Called once per locality page render. All builders consume the returned
 * Readonly<LocalityProfile> and never recalculate rules independently.
 *
 * Deterministic: same registry input always produces identical output.
 */

import type { KitchenLocalityEntry } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import type {
  LocalityProfile,
  FaqProfileKey,
  LayoutSlug,
  MaterialSlug,
  InstallationWindow,
  HeroVariant,
  PricingContext,
} from "../types.ts";

// ─── Deterministic hash ──────────────────────────────────────────────────────

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  return ((h % 1000) + 1000) % 1000;
}

// ─── FAQ profile selector ────────────────────────────────────────────────────

function selectFaqProfile(entry: KitchenLocalityEntry): FaqProfileKey {
  const { city, localityType, affluence, averageProjectValue } = entry;
  const isHighEnd = affluence === "ultra-high" || affluence === "high" || averageProjectValue === "luxury" || averageProjectValue === "premium";
  const isMid = affluence === "mid" || affluence === "mid-high" || averageProjectValue === "mid";

  if (city === "delhi") {
    if (isHighEnd) {
      if (localityType === "villa") return "delhi-luxury-villa";
      if (localityType === "apartments") return "delhi-luxury-apartments";
      return "delhi-premium-mixed";
    }
    if (isMid) {
      if (localityType === "apartments") return "delhi-mid-apartments";
      return "delhi-mid-mixed";
    }
    return "delhi-budget";
  }
  if (city === "gurgaon") {
    return isHighEnd ? "gurgaon-luxury" : "gurgaon-mid";
  }
  if (city === "noida") {
    return isHighEnd ? "noida-premium" : "noida-mid";
  }
  if (city === "ghaziabad") return "ghaziabad";
  if (city === "faridabad") return "faridabad";
  return "default";
}

// ─── Layout recommendations ──────────────────────────────────────────────────

function selectRecommendedLayouts(entry: KitchenLocalityEntry): readonly LayoutSlug[] {
  const { localityType } = entry;
  // Filter layouts whose recommendedFor array includes this localityType
  const matching = MODULAR_KITCHEN_LAYOUT_REGISTRY
    .filter((l) => l.status === "published" && l.recommendedFor.includes(localityType))
    .map((l) => l.slug as LayoutSlug);

  // Return top 2, deterministically ordered by registry position
  return matching.slice(0, 2);
}

// ─── Material recommendations ────────────────────────────────────────────────

function selectRecommendedMaterials(entry: KitchenLocalityEntry): readonly MaterialSlug[] {
  const { averageProjectValue } = entry;
  const affluenceBucket: "luxury" | "premium" | "mid" | "budget" =
    averageProjectValue === "luxury" ? "luxury"
    : averageProjectValue === "premium" ? "premium"
    : averageProjectValue === "mid" ? "mid"
    : "budget";

  const matching = MODULAR_KITCHEN_MATERIAL_REGISTRY
    .filter((m) => m.status === "published" && m.recommendedForAffluence.includes(affluenceBucket))
    .map((m) => m.slug as MaterialSlug);

  // Return top 2–3 (3 for luxury, 2 for others), deterministically ordered
  return affluenceBucket === "luxury" ? matching.slice(0, 3) : matching.slice(0, 2);
}

// ─── Budget range ────────────────────────────────────────────────────────────

function selectBudgetRange(entry: KitchenLocalityEntry): string {
  switch (entry.averageProjectValue) {
    case "luxury": return "₹8L – ₹20L+";
    case "premium": return "₹4L – ₹12L";
    case "mid": return "₹1.5L – ₹5L";
    default: return "₹80K – ₹2.5L";
  }
}

// ─── Installation window ─────────────────────────────────────────────────────

function selectInstallationWindow(entry: KitchenLocalityEntry): InstallationWindow {
  switch (entry.averageProjectValue) {
    case "luxury": return "15–20 days";
    case "premium": return "10–15 days";
    default: return "7–10 days";
  }
}

// ─── Hero variant ────────────────────────────────────────────────────────────

function selectHeroVariant(slug: string): HeroVariant {
  const h = slugHash(slug);
  return ((h % 4) + 1) as HeroVariant;
}

// ─── Review variant ──────────────────────────────────────────────────────────

function selectReviewVariant(slug: string): number {
  return slugHash(slug + "review") % 10;
}

// ─── Pricing context ─────────────────────────────────────────────────────────

function selectPricingContext(entry: KitchenLocalityEntry): PricingContext {
  switch (entry.averageProjectValue) {
    case "luxury": return "luxury";
    case "premium": return "premium";
    case "mid": return "mid";
    default: return "budget";
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Derives all page-level decisions for a locality page from the registry entry.
 * Returns an immutable LocalityProfile — builders must not modify it.
 */
export function buildLocalityProfile(entry: KitchenLocalityEntry): Readonly<LocalityProfile> {
  return Object.freeze({
    faqProfile: selectFaqProfile(entry),
    recommendedLayouts: selectRecommendedLayouts(entry),
    recommendedMaterials: selectRecommendedMaterials(entry),
    budgetRange: selectBudgetRange(entry),
    installationDays: selectInstallationWindow(entry),
    heroVariant: selectHeroVariant(entry.slug),
    reviewVariant: selectReviewVariant(entry.slug),
    pricingContext: selectPricingContext(entry),
    profileVersion: 1,
  } satisfies LocalityProfile);
}
