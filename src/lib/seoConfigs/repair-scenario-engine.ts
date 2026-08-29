/**
 * Repair Scenario Engine — combines locality profile + service identity → structured content.
 *
 * Architecture:
 *   Page slug
 *     ↓ resolveLocalityKey()          [slug parsing lives here only]
 *   Locality slug
 *     ↓ REPAIR_SCENARIO_PROFILES      [locality data]
 *   RepairScenarioProfile
 *     + SEO_SERVICE_CONFIG            [service identity]
 *     ↓ SCENARIO_BUILDERS registry    [ordered template pipeline]
 *   RepairScenarioOutput
 *
 * Rules:
 * - resolveLocalityKey() is the single place for slug→locality extraction
 * - getRepairScenario() returns null if no profile exists — no placeholder, no generic filler
 * - SCENARIO_BUILDERS controls render order; adding a section = one line in the registry
 * - Pure functions only — no side effects, SSR-safe, deterministic
 */

import type { SeoServiceKey } from "./service-config.ts";
import {
  REPAIR_SCENARIO_PROFILES,
  type LocalitySlug,
  type RepairScenarioProfile,
} from "./repair-scenarios.ts";
import {
  type ScenarioSection,
  buildCommonRepairsSection,
  buildCausesSection,
  buildFurnitureTypesSection,
  buildTechnicianInsightsSection,
  buildMaterialsSection,
  buildMaintenanceSection,
  buildRepairVsReplaceSection,
} from "./scenario-templates.ts";

// ─── Output type ──────────────────────────────────────────────────────────────

/**
 * Typed output with explicit fields for autocomplete and compile-time safety.
 * All fields are optional — only sections with data are populated.
 */
export type RepairScenarioOutput = {
  commonRepairs?: ScenarioSection;
  causes?: ScenarioSection;
  furnitureTypes?: ScenarioSection;
  technicianInsights?: ScenarioSection;
  materials?: ScenarioSection;
  maintenance?: ScenarioSection;
  repairVsReplace?: ScenarioSection;
};

// ─── Builder registry ─────────────────────────────────────────────────────────

/**
 * Ordered registry of section builders.
 * Controls render order. Adding an eighth section = one line here.
 * Each tuple: [RepairScenarioOutput key, builder function]
 */
type SectionKey = keyof RepairScenarioOutput;
type BuilderFn = (p: RepairScenarioProfile, s: SeoServiceKey) => ScenarioSection | null;
type BuilderEntry = [SectionKey, BuilderFn];

const SCENARIO_BUILDERS: BuilderEntry[] = [
  ["commonRepairs",      buildCommonRepairsSection],
  ["causes",             buildCausesSection],
  ["furnitureTypes",     buildFurnitureTypesSection],
  ["technicianInsights", buildTechnicianInsightsSection],
  ["materials",          buildMaterialsSection],
  ["maintenance",        buildMaintenanceSection],
  ["repairVsReplace",    buildRepairVsReplaceSection],
];

// ─── Service section policy ───────────────────────────────────────────────────

/**
 * Controls which sections are eligible to render for a given service.
 *
 * "always"      — render for any service whenever profile data is present.
 *                 These sections are service-agnostic (materials, insights, etc.)
 *
 * "profileOnly" — render only when profile data exists for this specific service.
 *                 Today, commonRepairs/furnitureTypes/causes are sofa-centric arrays,
 *                 so they only render for sofa-repair.
 *                 When a profile gains service-specific overrides (Option B path),
 *                 those sections become eligible for that service automatically —
 *                 no changes to this policy required.
 */
const SERVICE_SECTION_POLICY: Record<SectionKey, "always" | "profileOnly"> = {
  commonRepairs:      "profileOnly",
  causes:             "profileOnly",
  furnitureTypes:     "profileOnly",
  technicianInsights: "always",
  materials:          "always",
  maintenance:        "always",
  repairVsReplace:    "always",
};

/**
 * Returns true if a section should be attempted for this service + profile combination.
 * "profileOnly" sections are only attempted for sofa-repair today.
 * Option B path: add service-specific arrays to the profile and this check stays unchanged.
 */
function sectionEligible(key: SectionKey, serviceKey: SeoServiceKey): boolean {
  if (SERVICE_SECTION_POLICY[key] === "always") return true;
  // profileOnly: only sofa-repair carries the sofa-centric arrays today.
  // Future: check whether profile has a service-specific override for this key.
  return serviceKey === "sofa-repair";
}

// ─── Locality key resolver ────────────────────────────────────────────────────

/**
 * Known locality fragment keys — mirrors the keys in KNOWN_LOCALITY_FRAGMENTS.
 * Listed longest-first so more specific keys match before shorter substrings.
 * e.g. "greater-kailash" before "kailash", "dlf-phase-5" before "dlf-phase"
 *
 * This is the SINGLE place where slug → locality key extraction lives.
 * If URL format changes, only this function needs updating.
 */
const LOCALITY_FRAGMENT_KEYS: LocalitySlug[] = [
  // Noida special sectors
  "sector-62-noida",
  // Named localities — longest first to avoid substring collisions
  "vasundhara-ghaziabad",
  "raj-nagar-extension",
  "crossing-republik",
  "dwarka-expressway",
  "nirvana-country",
  "greater-faridabad",
  "greater-kailash",
  "knowledge-park",
  "jaypee-greens",
  "ats-pristine",
  "cyber-city",
  "golf-course",
  "sushant-lok",
  "dlf-phase-5",
  "dlf-phase-4",
  "dlf-phase-3",
  "dlf-phase-2",
  "dlf-phase-1",
  "south-delhi",
  "vasant-vihar",
  "vasant-kunj",
  "shalimar-bagh",
  "nehru-place",
  "lajpat-nagar",
  "rajouri-garden",
  "punjabi-bagh",
  "karol-bagh",
  "east-delhi",
  "mayur-vihar",
  "preet-vihar",
  "pari-chowk",
  "new-gurgaon",
  "sohna-road",
  "old-faridabad",
  "indirapuram",
  "kaushambi",
  "vaishali",
  "gaur-city",
  "mahagun",
  "janakpuri",
  "pitampura",
  "dwarka",
  "rohini",
  "saket",
  "neharpar",
  "bptp",
  "surajkund",
];

/**
 * Resolves a page slug to a LocalitySlug key.
 * Single responsibility: slug parsing. All other code uses the resolved key.
 *
 * @example resolveLocalityKey("sofa-repair-pitampura") → "pitampura"
 * @example resolveLocalityKey("leather-sofa-repair-greater-kailash") → "greater-kailash"
 * @example resolveLocalityKey("sofa-repair-delhi") → null (city page, not locality)
 * @example resolveLocalityKey("blog-post-abc") → null (no matching locality)
 */
export function resolveLocalityKey(slug: string): LocalitySlug | null {
  for (const key of LOCALITY_FRAGMENT_KEYS) {
    if (slug.includes(key)) return key;
  }
  return null;
}

// ─── Engine ───────────────────────────────────────────────────────────────────

/**
 * Returns structured repair scenario content for a given service + page slug.
 *
 * Returns null when:
 * - The slug doesn't resolve to a known locality
 * - No profile exists for that locality in REPAIR_SCENARIO_PROFILES
 *
 * Never returns placeholder or generic filler content.
 * All outputs are deterministic for the same inputs.
 *
 * @param serviceKey  The service this page is for (e.g. "sofa-repair")
 * @param slug        The page slug (e.g. "sofa-repair-pitampura")
 */
export function getRepairScenario(
  serviceKey: SeoServiceKey,
  slug: string,
): RepairScenarioOutput | null {
  const localityKey = resolveLocalityKey(slug);
  if (!localityKey) return null;

  const profile = REPAIR_SCENARIO_PROFILES[localityKey];
  if (!profile) return null;

  const output: RepairScenarioOutput = {};

  for (const [key, builder] of SCENARIO_BUILDERS) {
    if (!sectionEligible(key, serviceKey)) continue;
    const section = builder(profile, serviceKey);
    if (section !== null) {
      (output as Record<string, ScenarioSection>)[key] = section;
    }
  }

  // Return null if no sections were populated (e.g. all builders returned null)
  if (Object.keys(output).length === 0) return null;

  return output;
}
