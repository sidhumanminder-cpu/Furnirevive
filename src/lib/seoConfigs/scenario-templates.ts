/**
 * Scenario Templates — converts structured RepairScenarioProfile data into renderable sections.
 *
 * Architecture rules:
 * - Each function takes (profile, serviceKey) and returns ScenarioSection | null
 * - No locality-specific strings live here — all locality data enters through profile
 * - Service-specific wording comes from serviceDisplayName derived from serviceKey
 * - Returns null when the profile lacks sufficient data for a meaningful section
 * - No JSX, no HTML — pure data output consumed by presentation components
 */

import type { RepairScenarioProfile } from "./repair-scenarios.ts";
import { SEO_SERVICE_CONFIG, type SeoServiceKey } from "./service-config.ts";

// ─── Output type ──────────────────────────────────────────────────────────────

export type ScenarioSection = {
  heading: string;
  items: string[];
};

// ─── Internal helpers ─────────────────────────────────────────────────────────

function serviceName(serviceKey: SeoServiceKey): string {
  return SEO_SERVICE_CONFIG[serviceKey].displayName;
}

// ─── Builder functions ────────────────────────────────────────────────────────

/**
 * Common repair problems for this locality and service combination.
 * Returns null if fewer than 2 common repairs are defined.
 */
export function buildCommonRepairsSection(
  profile: RepairScenarioProfile,
  serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.commonRepairs.length < 2) return null;
  return {
    heading: `Common ${serviceName(serviceKey)} Problems in This Area`,
    items: profile.commonRepairs,
  };
}

/**
 * Why these damage patterns occur — climate, usage, housing type.
 * Returns null if fewer than 2 causes are defined.
 */
export function buildCausesSection(
  profile: RepairScenarioProfile,
  _serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.commonCauses.length < 2) return null;
  return {
    heading: "Why These Problems Occur",
    items: profile.commonCauses,
  };
}

/**
 * Furniture types most frequently seen in this locality.
 * Returns null if fewer than 2 furniture types are defined.
 */
export function buildFurnitureTypesSection(
  profile: RepairScenarioProfile,
  serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.commonFurniture.length < 2) return null;
  return {
    heading: `Furniture We Frequently Repair in This Area`,
    items: profile.commonFurniture,
  };
}

/**
 * Technician observations specific to this locality.
 * Returns null if fewer than 2 insights are defined.
 */
export function buildTechnicianInsightsSection(
  profile: RepairScenarioProfile,
  serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.technicianInsights.length < 2) return null;
  return {
    heading: `${serviceName(serviceKey)} Technician Notes for This Area`,
    items: profile.technicianInsights,
  };
}

/**
 * Materials that perform best given local climate and housing conditions.
 * Returns null if fewer than 2 materials are defined.
 */
export function buildMaterialsSection(
  profile: RepairScenarioProfile,
  _serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.recommendedMaterials.length < 2) return null;
  return {
    heading: "Materials We Recommend for This Area",
    items: profile.recommendedMaterials,
  };
}

/**
 * Preventive maintenance advice relevant to this locality's conditions.
 * Returns null if fewer than 2 tips are defined.
 */
export function buildMaintenanceSection(
  profile: RepairScenarioProfile,
  serviceKey: SeoServiceKey,
): ScenarioSection | null {
  if (profile.maintenanceTips.length < 2) return null;
  return {
    heading: `${serviceName(serviceKey)} Maintenance Tips for This Area`,
    items: profile.maintenanceTips,
  };
}

/**
 * Repair vs replace guidance based on customer type and repair preference.
 * Returns null for luxury/premium profiles where replace-vs-repair logic differs significantly.
 */
export function buildRepairVsReplaceSection(
  profile: RepairScenarioProfile,
  serviceKey: SeoServiceKey,
): ScenarioSection | null {
  const { customerType, repairPreference, housingType } = profile;

  // Build contextual advice based on profile characteristics
  const items: string[] = [];

  if (repairPreference === "cost-conscious") {
    items.push(
      `Repairing is almost always more economical than replacing — a full ${serviceName(serviceKey).toLowerCase()} including foam and fabric typically costs 20–35% of a new sofa`,
    );
    items.push(
      "If the wooden or metal frame is structurally sound, repair extends sofa life by 5–10 years",
    );
  } else if (repairPreference === "quality-focused" || repairPreference === "premium") {
    items.push(
      `Quality ${serviceName(serviceKey).toLowerCase()} restores original comfort and appearance — especially valuable for furniture with good frames`,
    );
    items.push(
      "Premium materials used in repair (high-density foam, genuine leather) often outlast the original components",
    );
  } else {
    items.push(
      `${serviceName(serviceKey)} is worth pursuing when the frame is intact — which covers the majority of sofas we inspect`,
    );
    items.push(
      "Replacement makes sense only when the wooden frame has termite damage or structural collapse beyond repair",
    );
  }

  if (customerType === "family") {
    items.push(
      "For family sofas with heavy daily use, a foam and fabric upgrade during repair provides a noticeably better result than the original factory specification",
    );
  } else if (customerType === "luxury" || customerType === "professional") {
    items.push(
      "Designer or imported sofas are particularly worth repairing — replacement cost for equivalent quality is significantly higher",
    );
  }

  if (housingType === "dda-flats" || housingType === "mixed-residential") {
    items.push(
      "Standard-market sofas purchased 5–10 years ago are typically the best candidates for repair — the frame quality from that era is often better than current budget alternatives",
    );
  }

  if (items.length < 2) return null;

  return {
    heading: "Repair or Replace? What We See in This Area",
    items,
  };
}
