/**
 * Kitchen Snapshot Builder — milestone-227
 *
 * Renders the Quick Locality Guide card (kitchen-locality-snapshot) and
 * Locality Statistics strip (kitchen-locality-stats) from a LocalityProfile.
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
  KitchenLocalitySnapshotSectionData,
  KitchenLocalityStatsSectionData,
} from "../types.ts";

// ─── Property type labels ────────────────────────────────────────────────────

const PROPERTY_TYPE_LABELS: Record<KitchenLocalityEntry["localityType"], readonly string[]> = {
  villa: ["Independent Houses", "Villas", "Builder Floors"],
  apartments: ["Apartments", "Builder Floors", "Flats"],
  mixed: ["Apartments", "Villas", "Builder Floors"],
};

// ─── Snapshot builder ────────────────────────────────────────────────────────

export function buildKitchenLocalitySnapshot(
  locality: LocalityEntry,
  service: ServiceEntry,
  profile: Readonly<LocalityProfile>,
): KitchenLocalitySnapshotSectionData {
  const kLoc = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === locality.slug);
  const localityType = kLoc?.localityType ?? "mixed";
  const propertyTypes = PROPERTY_TYPE_LABELS[localityType];

  const recommendedLayouts = profile.recommendedLayouts
    .map((slug) => {
      const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
      return layout
        ? ({ name: layout.shortName, slug: slug as string, href: `/modular-kitchen-${slug}` } as const)
        : null;
    })
    .filter((l) => l !== null);

  const recommendedMaterials = profile.recommendedMaterials
    .map((slug) => {
      const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
      return mat
        ? ({ name: mat.shortName, slug: slug as string, href: `/modular-kitchen-${slug}` } as const)
        : null;
    })
    .filter((m) => m !== null);

  return {
    id: `${service.slug}-${locality.slug}-kitchen-snapshot`,
    type: "kitchen-locality-snapshot",
    version: "v1",
    props: {
      localityName: locality.name,
      areaProfile: kLoc?.propertyType ?? "",
      landmarks: (kLoc?.landmarks ?? []).slice(0, 3),
      nearby: (kLoc?.nearby ?? []).slice(0, 3),
      propertyTypes,
      recommendedLayouts,
      recommendedMaterials,
      budgetRange: profile.budgetRange,
      installationDays: profile.installationDays,
    },
  };
}

// ─── Stats builder ───────────────────────────────────────────────────────────

export function buildKitchenLocalityStats(
  locality: LocalityEntry,
  service: ServiceEntry,
  profile: Readonly<LocalityProfile>,
): KitchenLocalityStatsSectionData {
  const kLoc = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === locality.slug);
  const localityType = kLoc?.localityType ?? "mixed";
  const propertyTypes = PROPERTY_TYPE_LABELS[localityType];

  const topMaterialSlug = profile.recommendedMaterials[0];
  const topMat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === topMaterialSlug);
  const topLayoutSlug = profile.recommendedLayouts[0];
  const topLayout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === topLayoutSlug);

  return {
    id: `${service.slug}-${locality.slug}-kitchen-stats`,
    type: "kitchen-locality-stats",
    version: "v1",
    props: {
      servingTypes: [...propertyTypes],
      popularBudget: profile.budgetRange,
      recommendedFinish: topMat?.shortName ?? "Laminate",
      recommendedLayout: topLayout?.shortName ?? "L-Shape",
      installationDays: profile.installationDays,
    },
  };
}
