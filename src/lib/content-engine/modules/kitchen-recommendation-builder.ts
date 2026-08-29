/**
 * Kitchen Recommendation Builder — milestone-227
 *
 * Renders the kitchen-layouts-grid and kitchen-materials-grid section data
 * with locality-specific headings and highlighted recommendations.
 *
 * Pure renderer — contains no business-rule decisions.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { KitchenLocalityEntry } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import type {
  LocalityProfile,
  KitchenLayoutsGridSectionData,
  KitchenMaterialsGridSectionData,
  KitchenLayoutItem,
  KitchenMaterialItem,
} from "../types.ts";

function toLakh(amount: number): string {
  return (amount / 100000).toFixed(1);
}

// ─── Locality-specific heading generators ────────────────────────────────────

function buildLayoutsHeading(locality: LocalityEntry, kLoc: KitchenLocalityEntry | undefined): string {
  const name = locality.name;
  const localityType = kLoc?.localityType ?? "mixed";
  if (localityType === "apartments") return `Recommended Kitchen Layouts for Apartments in ${name}`;
  if (localityType === "villa") return `Popular Kitchen Layouts for Homes in ${name}`;
  return `Popular Kitchen Layouts in ${name}`;
}

function buildMaterialsHeading(locality: LocalityEntry, kLoc: KitchenLocalityEntry | undefined): string {
  const name = locality.name;
  const localityType = kLoc?.localityType ?? "mixed";
  if (localityType === "apartments") return `Popular Kitchen Finishes for Apartments in ${name}`;
  return `Popular Kitchen Finishes in ${name}`;
}

// ─── Layouts grid builder ────────────────────────────────────────────────────

export function buildKitchenLayoutsGridFromProfile(
  locality: LocalityEntry,
  service: ServiceEntry,
  profile: Readonly<LocalityProfile>,
  pageType: "locality" | "layout" | "material" | "cost",
): KitchenLayoutsGridSectionData {
  const kLoc = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === locality.slug);

  const heading =
    pageType === "locality"
      ? buildLayoutsHeading(locality, kLoc)
      : "All Modular Kitchen Layout Options";

  // For locality pages: recommended layouts first, then remaining in registry order
  let orderedLayouts = [...MODULAR_KITCHEN_LAYOUT_REGISTRY];
  if (pageType === "locality") {
    const recommended = profile.recommendedLayouts;
    orderedLayouts = [
      ...orderedLayouts.filter((l) => recommended.includes(l.slug as typeof recommended[number])),
      ...orderedLayouts.filter((l) => !recommended.includes(l.slug as typeof recommended[number])),
    ];
  }

  const layouts: KitchenLayoutItem[] = orderedLayouts.map((layout) => ({
    name: layout.name,
    slug: layout.slug,
    description: layout.description,
    bestFor: layout.bestFor,
    costRange: `₹${toLakh(layout.costMin)}L – ₹${toLakh(layout.costMax)}L`,
    href: `/modular-kitchen-${layout.slug}`,
  }));

  return {
    id: `${service.slug}-${locality.slug}-kitchen-layouts-grid`,
    type: "kitchen-layouts-grid",
    version: "v1",
    props: { heading, layouts },
  };
}

// ─── Materials grid builder ──────────────────────────────────────────────────

export function buildKitchenMaterialsGridFromProfile(
  locality: LocalityEntry,
  service: ServiceEntry,
  profile: Readonly<LocalityProfile>,
  pageType: "locality" | "layout" | "material" | "cost",
): KitchenMaterialsGridSectionData {
  const kLoc = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === locality.slug);

  const heading =
    pageType === "material"
      ? "Compare All Kitchen Cabinet Materials"
      : pageType === "locality"
      ? buildMaterialsHeading(locality, kLoc)
      : "Kitchen Cabinet Materials & Finishes";

  // For locality pages: recommended materials first, then remaining in registry order
  let orderedMaterials = [...MODULAR_KITCHEN_MATERIAL_REGISTRY];
  if (pageType === "locality") {
    const recommended = profile.recommendedMaterials;
    orderedMaterials = [
      ...orderedMaterials.filter((m) => recommended.includes(m.slug as typeof recommended[number])),
      ...orderedMaterials.filter((m) => !recommended.includes(m.slug as typeof recommended[number])),
    ];
  }

  const materials: KitchenMaterialItem[] = orderedMaterials.map((mat) => ({
    name: mat.name,
    slug: mat.slug,
    finish: mat.finish,
    durability: mat.durability,
    costRange: `₹${mat.costMin} – ₹${mat.costMax}/sq ft`,
    pros: [...mat.pros],
    href: `/modular-kitchen-${mat.slug}`,
  }));

  return {
    id: `${service.slug}-${locality.slug}-kitchen-materials-grid`,
    type: "kitchen-materials-grid",
    version: "v1",
    props: { heading, materials },
  };
}
