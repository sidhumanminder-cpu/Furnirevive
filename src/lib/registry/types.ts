/**
 * Registry types for the registry-first programmatic SEO architecture.
 *
 * Guiding principle: when there is a choice between preserving backward
 * compatibility and reducing code duplication, always preserve backward
 * compatibility. This initiative optimises future scalability, not
 * existing production pages.
 *
 * All registry objects are plain serialisable data — no functions, no
 * imports, no logic. Logic lives in business-rules.ts and generate-pages.ts.
 */

// ─── City ────────────────────────────────────────────────────────────────────

export type CityKey = "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";

export type ClusterKey =
  | "southDelhi"
  | "westDelhi"
  | "northDelhi"
  | "eastDelhi"
  | "centralDelhi"
  | "dwarka"
  | "dlfGurgaon"
  | "sohnaRoadGurgaon"
  | "newGurgaon"
  | "centralGurgaon"
  | "noidaSectors"
  | "greaterNoidaWest"
  | "greaterNoida"
  | "indirapuram"
  | "greaterFaridabad"
  | "oldFaridabad"
  | "noida-commercial"
  | "ghaziabad-commercial"
  | "faridabad-commercial"
  | "sectorsChandigarh"
  | "mohali"
  | "panchkula";

// ─── Locality ────────────────────────────────────────────────────────────────

export type AffluenceLevel = "budget" | "mid" | "mid-high" | "high" | "ultra-high";
export type DensityLevel = "sparse" | "medium" | "dense" | "very-dense";
export type HousingAgeCategory = "new" | "mid-age" | "established" | "heritage";
export type PageStatus = "published" | "draft" | "noindex" | "deprecated";
export type ContentWeight = 100 | 90 | 70 | 50;
export type SearchPriority = 1 | 2 | 3 | 4 | 5;

export type LocalityEntry = {
  /** Stable unique ID — never changes even if slug changes */
  id: string;
  /** URL slug fragment, e.g. "vasant-vihar" */
  slug: string;
  /** Display name, e.g. "Vasant Vihar" */
  name: string;
  /** Cluster this locality belongs to */
  cluster: ClusterKey;
  /** City key */
  city: CityKey;
  /** Human-readable property description used in content generation */
  propertyType: string;
  /** Affluence of the locality — drives pricing tone in content */
  affluence: AffluenceLevel;
  /** 1 (low) to 5 (ultra-premium) — controls luxury module visibility */
  premiumLevel: 1 | 2 | 3 | 4 | 5;
  /** Population/housing density */
  density: DensityLevel;
  /** Approximate age of predominant housing stock */
  housingAge: HousingAgeCategory;
  /** Notable landmarks near this locality */
  landmarks: readonly string[];
  /** Adjacent areas for internal linking and NearbyAreas component */
  nearby: readonly string[];
  /** Relative priority for crawling and expansion */
  servicePriority: SearchPriority;
  /** Content version — increment to trigger content refresh in future */
  contentVersion: number;
  /**
   * Controls page depth: 100 = full content, 90 = near-full,
   * 70 = standard, 50 = condensed
   */
  contentWeight: ContentWeight;
  /** 1 (low demand) to 5 (high demand) — for future automation */
  searchPriority: SearchPriority;
  /** Lifecycle status of this locality's pages */
  status: PageStatus;
  /**
   * Wave assignment for staged SEO rollout.
   * 1 = highest priority (premium/high-demand), 2 = mid-priority, 3 = remaining.
   * Optional: existing registry entries without this field are treated as wave 1.
   */
  launchWave?: 1 | 2 | 3;
  /**
   * Services to exclude for this locality because they are already covered by
   * legacy pages. The engine will skip generating pages for these services.
   * Example: ["sofa-repair"] if sofa-repair-{slug} already exists in legacy.
   */
  excludeServices?: readonly ServiceSlug[];
};

// ─── Service Capabilities ─────────────────────────────────────────────────────

export type ImageCollectionKey = "sofa" | "recliner" | "upholstery" | "office-chair" | "furniture";

export type ContentProfile =
  | "sofa-residential"
  | "recliner-residential"
  | "furniture-residential"
  | "upholstery-residential"
  | "office-chair-corporate"
  | "office-furniture-corporate";

export type ServiceCapabilities = {
  audience: {
    residential: boolean;
    corporate: boolean;
  };
  business: {
    amc: boolean;
    bulkRepair: boolean;
    gst: boolean;
    weekendService: boolean;
  };
  logistics: {
    emergency: boolean;
    pickupDelivery: boolean;
    onsite: boolean;
  };
  content: {
    heroCollection: ImageCollectionKey;
    industryAware: boolean;
    relationshipGraph: boolean;
  };
};

// ─── Service ─────────────────────────────────────────────────────────────────

export type ServiceSlug =
  | "sofa-repair"
  | "recliner-repair"
  | "furniture-repair"
  | "sofa-upholstery"
  | "office-chair-repair"
  | "office-furniture-repair"
  | "modular-kitchen";

export type PageIntent =
  | "repair"
  | "cost"
  | "near-me"
  | "same-day"
  | "luxury"
  | "commercial"
  | "brand";

/** Versioned module identifier, e.g. "hero:v1" */
export type ModuleId = `${"hero" | "intro" | "process" | "pricing" | "repair-types" | "brands" | "faq" | "nearby" | "pyramid-links" | "servicehub" | "cta" | "near-me" | "why-choose" | "comparison" | "reviews" | "before-after" | "luxury" | "testimonials" | "topical-authority" | "blog-links" | "services-grid" | "material-options" | "repair-times" | "service-coverage" | "industries" | "quick-answers" | "kitchen-hero" | "kitchen-intro" | "kitchen-layouts-grid" | "kitchen-materials-grid" | "kitchen-pricing" | "kitchen-process" | "kitchen-faq" | "kitchen-cta" | "kitchen-why-choose" | "kitchen-reviews" | "kitchen-comparison" | "kitchen-brands" | "kitchen-locality-snapshot" | "kitchen-locality-stats"}:v${number}`;

/**
 * A module entry in a service's modules array.
 * String shorthand = required: true (backward compatible).
 * Object form allows marking a module optional.
 */
export type ModuleEntry =
  | ModuleId
  | { id: ModuleId; required: false };

export type InternalLinkStrategy = {
  nearby: boolean;
  sameService: boolean;
  siblingServices: boolean;
  parentCluster: boolean;
  cityHub: boolean;
};

export type FeatureFlags = {
  luxurySection: boolean;
  beforeAfterGallery: boolean;
  reviews: boolean;
  pricingCalculator: boolean;
  aiSummary: boolean;
};

export type ServiceSeo = {
  /** High-CTR string appended to title and H1, e.g. "Same-Day Sofa Repair at Home" */
  titleModifier: string;
  /** 2+ secondary terms for meta description interpolation */
  metaKeywords: readonly string[];
  /** Alternate service terms for richer meta copy */
  synonyms: readonly string[];
  /** Commercial intent terms */
  commercialTerms: readonly string[];
  /**
   * Title template with tokens:
   * {service} {serviceLower} {locality} {city} {titleModifier} {brand}
   */
  titleTemplate: string;
  /**
   * Meta description template with tokens:
   * {service} {serviceLower} {locality} {city} {titleModifier} {brand}
   * {phone} {displayPhone} {keyword1} {keyword2}
   */
  metaTemplate: string;
};

export type ServiceEntry = {
  /** Stable unique ID */
  id: string;
  /** URL slug, e.g. "sofa-repair" */
  slug: ServiceSlug;
  /** Display name */
  name: string;
  /** Human-readable description */
  description: string;
  /** Ordered list of content modules for this service (versioned) */
  modules: readonly ModuleEntry[];
  /** Internal linking rules */
  internalLinkStrategy: InternalLinkStrategy;
  /** SEO keywords for this service */
  keywords: readonly string[];
  /** SEO metadata configuration */
  seo: ServiceSeo;
  /** Feature flags — controls optional modules */
  features: FeatureFlags;
  /** Grouped capability flags — drives module branching without service.slug checks */
  readonly capabilities?: ServiceCapabilities;
  /** Content profile key — modules select copy blocks from this */
  readonly contentProfile?: ContentProfile;
  /**
   * URL pattern for the service's city hub pages.
   * Tokens: {city}, {service}.
   * If absent, falls back to "/{service}-{city}".
   * Example for modular kitchen: "/modular-kitchen-{city}"
   */
  readonly cityHubPattern?: string;
};

// ─── City Registry ────────────────────────────────────────────────────────────

export type ClusterEntry = {
  key: ClusterKey;
  name: string;
  city: CityKey;
  /** Locality slugs in this cluster */
  localitySlugs: readonly string[];
};

export type CityEntry = {
  key: CityKey;
  name: string;
  clusters: readonly ClusterKey[];
};

// ─── Generated Page ───────────────────────────────────────────────────────────

export type PageDefinition = {
  service: ServiceSlug;
  locality: string;
  city: CityKey;
  intent: PageIntent;
  /** Canonical URL path, e.g. "/sofa-repair-kamla-nagar" */
  urlPath: string;
};

// ─── Validation ───────────────────────────────────────────────────────────────

export type RegistryValidationResult = {
  valid: boolean;
  totalPages: number;
  errors: string[];
  warnings: string[];
};
