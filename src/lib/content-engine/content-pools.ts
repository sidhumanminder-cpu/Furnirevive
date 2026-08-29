/**
 * Content Engine — Content Pools
 *
 * The domain-data pools that modules draw from. Pure data, no logic beyond
 * simple deterministic construction. No CSS, no presentation details.
 *
 * Existing pools are re-exported from the legacy data files so the engine and
 * the legacy system share a single source of truth.
 */

import type { CityKey, ServiceSlug } from "@/lib/registry/types.ts";

// ─── Re-exported pools (single source of truth) ────────────────────────────

export { PRICING_ITEMS, WHATS_INCLUDED, COST_FACTORS } from "@/lib/seoConfigs/pricing-data.ts";
export { COMMON_PROBLEMS, BRANDS, SERVICES_GRID } from "@/lib/seoConfigs/repair-data.ts";

// ─── City-level pools ──────────────────────────────────────────────────────

/** Technician response promise by city */
export const RESPONSE_TIMES: Record<CityKey, string> = {
  delhi: "1–2 hours",
  gurgaon: "1–3 hours",
  noida: "1–2 hours",
  ghaziabad: "2–3 hours",
  faridabad: "2–3 hours",
  chandigarh: "2–4 hours",
  mohali: "2–4 hours",
  panchkula: "2–4 hours",
};

/** Human-readable city names */
export const CITY_DISPLAY_NAMES: Record<CityKey, string> = {
  delhi: "Delhi",
  gurgaon: "Gurgaon",
  noida: "Noida",
  ghaziabad: "Ghaziabad",
  faridabad: "Faridabad",
  chandigarh: "Chandigarh",
  mohali: "Mohali",
  panchkula: "Panchkula",
};

// ─── Service-level pools ───────────────────────────────────────────────────

/** Stable order of the four registry services */
export const REGISTRY_SERVICE_SLUGS: readonly ServiceSlug[] = [
  "sofa-repair",
  "recliner-repair",
  "furniture-repair",
  "sofa-upholstery",
];

/** Display names for the registry services */
export const SERVICE_DISPLAY_NAMES: Record<ServiceSlug, string> = {
  "sofa-repair": "Sofa Repair",
  "recliner-repair": "Recliner Repair",
  "furniture-repair": "Furniture Repair",
  "sofa-upholstery": "Sofa Upholstery",
  "office-chair-repair": "Office Chair Repair",
  "office-furniture-repair": "Office Furniture Repair",
  "modular-kitchen": "Modular Kitchen",
};

/** Short descriptions for the registry services */
export const SERVICE_DESCRIPTIONS: Record<ServiceSlug, string> = {
  "sofa-repair": "Foam, spring, frame and fabric repair at your doorstep",
  "recliner-repair": "Mechanism, motor and leather recliner repair at home",
  "furniture-repair": "Wooden furniture, beds, wardrobes and antique repair",
  "sofa-upholstery": "Full fabric and leather reupholstery with 300+ options",
  "office-chair-repair": "Gas lift, hydraulic, casters and mesh repair for offices",
  "office-furniture-repair": "Desks, workstations, conference tables and cabinet repair for offices",
  "modular-kitchen": "Custom modular kitchen design and installation in Delhi NCR",
};

/** City-level canonical path for a service, e.g. "/sofa-repair-delhi" */
export function cityLevelServiceHref(slug: ServiceSlug, city: CityKey): string {
  return `/${slug}-${city}`;
}

function siblingsFor(current: ServiceSlug): { name: string; href: string; description: string }[] {
  // Delhi is the default city reference for the shared sibling pool.
  return REGISTRY_SERVICE_SLUGS.filter((slug) => slug !== current).map((slug) => ({
    name: SERVICE_DISPLAY_NAMES[slug],
    href: cityLevelServiceHref(slug, "delhi"),
    description: SERVICE_DESCRIPTIONS[slug],
  }));
}

/**
 * For each registry service, the sibling services a locality page can link to.
 * hrefs default to the Delhi city hub; modules that need a city-specific href
 * build it from `cityLevelServiceHref`.
 */
export const SIBLING_SERVICE_SLUGS = {
  "sofa-repair": siblingsFor("sofa-repair"),
  "recliner-repair": siblingsFor("recliner-repair"),
  "furniture-repair": siblingsFor("furniture-repair"),
  "sofa-upholstery": siblingsFor("sofa-upholstery"),
  "office-chair-repair": siblingsFor("office-chair-repair"),
  "office-furniture-repair": siblingsFor("office-furniture-repair"),
  "modular-kitchen": [], // kitchen does not cross-link to repair siblings in Phase 1
} satisfies Record<ServiceSlug, { name: string; href: string; description: string }[]>;
