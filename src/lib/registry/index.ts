/**
 * Registry barrel export.
 * Single import point for all registry modules.
 */

export { LOCALITY_REGISTRY } from "./locality-registry.ts";
export { SERVICE_REGISTRY } from "./service-registry.ts";
export { GEO_CITY_REGISTRY, CLUSTER_REGISTRY } from "./cluster-city-registry.ts";
export { MARKET_REGISTRY, MARKET_REGISTRY_VERSION, getMarketByCitySlug, getMarketBySlug, getMarketFromPathname } from "./market-registry.ts";
export { CITY_REGISTRY, CITY_REGISTRY_VERSION, getCityBySlug, getCitiesByMarket, getCityPricingMultiplier } from "./city-registry.ts";
export { DIMENSION_REGISTRY, DIMENSION_REGISTRY_VERSION, getDimensionsByGeneratorKey, getDimensionBySlug } from "./dimension-registry.ts";
export { canGeneratePage } from "./business-rules.ts";
export { generatePages, buildRegistryUrl } from "./generate-pages.ts";
export { validateRegistry } from "./validate-registry.ts";
export * from "./audience-registry.ts";
export * from "./industry-registry.ts";
export * from "./repair-registry.ts";
export * from "./relationship-graph.ts";
export * from "./commercial-locality-registry.ts";
export { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "./kitchen-locality-registry.ts";
export { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "./kitchen-layout-registry.ts";
export { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "./kitchen-material-registry.ts";
export { MODULAR_KITCHEN_COST_REGISTRY } from "./kitchen-cost-registry.ts";
export type { KitchenLocalityEntry } from "./kitchen-locality-registry.ts";
export type { KitchenLayoutEntry } from "./kitchen-layout-registry.ts";
export type { KitchenMaterialEntry } from "./kitchen-material-registry.ts";
export type { KitchenCostEntry } from "./kitchen-cost-registry.ts";
export { KITCHEN_EDITORIAL_REGISTRY, getEditorialEntry } from "./kitchen-editorial-registry.ts";
export { KITCHEN_LOCALITY_HUB_REGISTRY, getLocalityHubEntry, getLayoutsForLocality, buildHubFaqs } from "./kitchen-locality-hub-registry.ts";
export type { KitchenLocalityHubEntry } from "./kitchen-locality-hub-registry.ts";
export { KITCHEN_MATERIAL_LOCALITY_REGISTRY, getMaterialLocalityEntry, buildMaterialLocalityFaqs } from "./kitchen-material-locality-registry.ts";
export type { KitchenMaterialLocalityEntry } from "./kitchen-material-locality-registry.ts";
export { KITCHEN_LAMINATE_LOCALITY_REGISTRY, getLaminateLocalityEntry, buildLaminateLocalityFaqs } from "./kitchen-laminate-locality-registry.ts";
export type { KitchenLaminateLocalityEntry } from "./kitchen-laminate-locality-registry.ts";
export { KITCHEN_GLASS_LOCALITY_REGISTRY, getGlassLocalityEntry, buildGlassLocalityFaqs } from "./kitchen-glass-locality-registry.ts";
export type { KitchenGlassLocalityEntry } from "./kitchen-glass-locality-registry.ts";
export { KITCHEN_PU_LOCALITY_REGISTRY, getPuLocalityEntry, buildPuLocalityFaqs } from "./kitchen-pu-locality-registry.ts";
export type { KitchenPuLocalityEntry } from "./kitchen-pu-locality-registry.ts";
export { KITCHEN_MEMBRANE_LOCALITY_REGISTRY, getMembraneLocalityEntry, buildMembraneLocalityFaqs } from "./kitchen-membrane-locality-registry.ts";
export type { KitchenMembraneLocalityEntry } from "./kitchen-membrane-locality-registry.ts";
export { KITCHEN_BUDGET_LOCALITY_REGISTRY, getBudgetLocalityEntry, buildBudgetLocalityFaqs } from "./kitchen-budget-locality-registry.ts";
export type { KitchenBudgetLocalityEntry } from "./kitchen-budget-locality-registry.ts";
export { KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY, getPriceRangeLocalityEntry, buildPriceRangeLocalityFaqs } from "./kitchen-price-range-locality-registry.ts";
export type { KitchenPriceRangeLocalityEntry } from "./kitchen-price-range-locality-registry.ts";
export { KITCHEN_BUILDER_HUB_REGISTRY, getBuilderHubEntry, buildBuilderHubFaqs } from "./kitchen-builder-hub-registry.ts";
export type { KitchenBuilderHubEntry, BuilderTier } from "./kitchen-builder-hub-registry.ts";
export { KITCHEN_PROJECT_REGISTRY, getProjectEntry, getProjectsByBuilder, buildProjectFaqs } from "./kitchen-project-registry.ts";
export type { KitchenProjectEntry, ProjectPageType, ProjectTier, PossessionStatus } from "./kitchen-project-registry.ts";
export { KITCHEN_RENOVATION_REGISTRY, getRenovationEntry, getRenovationsByLocality, buildRenovationFaqs } from "./kitchen-renovation-registry.ts";
export type { KitchenRenovationEntry, RenovationType } from "./kitchen-renovation-registry.ts";
export { KITCHEN_DIMENSION_REGISTRY, getDimensionEntry, buildDimensionFaqs } from "./kitchen-dimension-registry.ts";
export type { KitchenDimensionEntry, DimensionCategory, DimensionStatus } from "./kitchen-dimension-registry.ts";
export { KITCHEN_GUIDE_REGISTRY, getGuideEntry, buildGuideFaqs } from "./kitchen-guide-registry.ts";
export type { KitchenGuideEntry, GuideCategory, GuideStatus } from "./kitchen-guide-registry.ts";
export { KITCHEN_REPAIR_REGISTRY, getRepairEntry, buildRepairFaqs } from "./kitchen-repair-registry.ts";
export type { KitchenRepairEntry, RepairDomain, RepairIntent, RepairSeverity, RepairUrgency, RepairStatus, RepairPageKind } from "./kitchen-repair-registry.ts";
export { KITCHEN_LAYOUT_LOCALITY_REGISTRY, getLayoutLocalityEntry } from "./kitchen-layout-locality-registry.ts";
export type { KitchenLayoutLocalityEntry } from "./kitchen-layout-locality-registry.ts";
export type { KitchenEditorialEntry, EditorialCategory } from "./kitchen-editorial-registry.ts";

/**
 * Thin lookup helper — keeps PAGE_MAP implementation out of call sites.
 * Returns the PageDefinition for a canonical pathname (e.g. "/sofa-repair-naraina"),
 * or undefined if the path is not a registry page.
 *
 * Encapsulated here so future changes (caching, validation, lazy init) only
 * touch this file.
 */
import { generatePages } from "./generate-pages.ts";
import type { PageDefinition } from "./types.ts";

const _pageMap = new Map<string, PageDefinition>(
  generatePages().map((p) => [p.urlPath, p]),
);

export function getRegistryPage(pathname: string): PageDefinition | undefined {
  return _pageMap.get(pathname);
}

export type {
  LocalityEntry,
  ServiceEntry,
  CityEntry,
  ClusterEntry,
  PageDefinition,
  RegistryValidationResult,
  CityKey,
  ClusterKey,
  ServiceSlug,
  PageIntent,
  ModuleId,
  AffluenceLevel,
  DensityLevel,
  HousingAgeCategory,
  PageStatus,
  ContentWeight,
  SearchPriority,
  InternalLinkStrategy,
  FeatureFlags,
} from "./types.ts";

// Run editorial link matrix validation in dev
import "@/lib/registry/kitchen-editorial-link-matrix.ts";
// Run dimension registry validation in dev
import "@/lib/registry/validate-dimension-registry.ts";
