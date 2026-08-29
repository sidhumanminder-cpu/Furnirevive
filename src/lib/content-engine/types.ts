/**
 * Content Engine — Section Data Types
 *
 * These types describe the DOMAIN DATA produced by the content engine.
 *
 * Hard rules (do not break):
 * - `props` contains domain data ONLY. No CSS class names, no layout hints,
 *   no component variants, no renderer flags, no UI implementation details.
 * - `SectionData` is a plain serialisable object — no JSX, no React imports,
 *   no routing code, no template references.
 *
 * Renderers consume these types elsewhere; the engine never imports a renderer.
 */

// ─── Section identifiers ───────────────────────────────────────────────────

export type SectionId =
  | "hero"
  | "intro"
  | "process"
  | "pricing"
  | "repair-types"
  | "brands"
  | "faq"
  | "nearby"
  | "near-me"
  | "pyramid-links"
  | "servicehub"
  | "cta"
  | "reviews"
  | "before-after"
  | "luxury"
  | "why-choose"
  | "comparison"
  | "testimonials"
  | "topical-authority"
  | "blog-links"
  | "services-grid"
  | "material-options"
  | "repair-times"
  | "service-coverage"
  | "industries"
  | "quick-answers"
  | "kitchen-hero"
  | "kitchen-intro"
  | "kitchen-layouts-grid"
  | "kitchen-materials-grid"
  | "kitchen-pricing"
  | "kitchen-process"
  | "kitchen-faq"
  | "kitchen-cta"
  | "kitchen-why-choose"
  | "kitchen-reviews"
  | "kitchen-comparison"
  | "kitchen-brands"
  | "kitchen-locality-snapshot"
  | "kitchen-locality-stats";

// ─── Generic section envelope ──────────────────────────────────────────────

export type SectionData<TId extends SectionId, TProps> = {
  /** Stable, deterministic identifier for this section instance */
  id: string;
  /** Discriminant — which section this is */
  type: TId;
  /** Content schema version */
  version: "v1";
  /** Domain data only */
  props: TProps;
};

// ─── Section prop types (domain data only) ─────────────────────────────────

export type HeroProps = {
  /** e.g. "Sofa Repair in Lajpat Nagar" */
  headline: string;
  /** 1–2 sentence value proposition */
  subheadline: string;
  localityName: string;
  serviceName: string;
  /** Display city name, e.g. "Delhi" */
  cityName: string;
  /** e.g. "1–2 hours" */
  responseTime: string;
  /** e.g. ["Free Inspection", "6-Month Warranty", "Same-Day Service"] */
  trustBadges: string[];
  /** CDN URL for the hero showcase image. Empty string if no image available. */
  imageUrl: string;
  /** SEO alt text for the hero image */
  imageAlt: string;
};

export type IntroProps = {
  heading: string;
  /** 2–3 paragraphs, locality-specific */
  paragraphs: string[];
  /** 3–5 bullet facts about the service in this locality */
  keyFacts: string[];
};

export type PricingItemData = {
  service: string;
  startingPrice: string;
  timeEstimate: string;
  sameDay: boolean | "usually";
};

export type PricingCostFactor = {
  label: string;
  description: string;
};

export type PricingProps = {
  heading: string;
  items: PricingItemData[];
  whatsIncluded: string[];
  costFactors: PricingCostFactor[];
  /** true when affluence is "high" or "ultra-high" */
  showAffluenceNote: boolean;
  /** present only when showAffluenceNote is true */
  affluenceNote?: string;
};

export type RepairTypesProps = {
  heading: string;
  problems: { label: string }[];
};

export type BrandsProps = {
  heading: string;
  brands: { name: string; note?: string }[];
};

export type FaqProps = {
  heading: string;
  faqs: { question: string; answer: string }[];
};

export type NearbyProps = {
  heading: string;
  /** href = canonical URL for that locality + service */
  areas: { name: string; href: string }[];
};

export type PyramidLink = {
  label: string;
  href: string;
};

export type PyramidLinksProps = {
  heading: string;
  links: PyramidLink[];
};

export type ServiceHubProps = {
  heading: string;
  services: { name: string; href: string; description: string }[];
};

export type CtaProps = {
  heading: string;
  subheading: string;
  phoneNumber: string;
  whatsappNumber: string;
  localityName: string;
};

export type NearMeProps = {
  /** Locality slug — used by renderer to call getLocalityInfo */
  localitySlug: string;
  /** Service display name for labels, e.g. "Sofa Repair" */
  serviceLabel: string;
  /** When true, renderer uses B2B / corporate copy variants */
  isCorporate?: boolean;
};

export type NearMeSectionData = SectionData<"near-me", NearMeProps>;

// ─── Concrete section data types ───────────────────────────────────────────

export type HeroSectionData = SectionData<"hero", HeroProps>;
export type IntroSectionData = SectionData<"intro", IntroProps>;
export type PricingSectionData = SectionData<"pricing", PricingProps>;
export type RepairTypesSectionData = SectionData<"repair-types", RepairTypesProps>;
export type BrandsSectionData = SectionData<"brands", BrandsProps>;
export type FaqSectionData = SectionData<"faq", FaqProps>;
export type NearbySectionData = SectionData<"nearby", NearbyProps>;
export type PyramidLinksSectionData = SectionData<"pyramid-links", PyramidLinksProps>;
export type ServiceHubSectionData = SectionData<"servicehub", ServiceHubProps>;
export type CtaSectionData = SectionData<"cta", CtaProps>;

export type WhyChooseItem = {
  title: string;
  description: string;
};

export type WhyChooseProps = {
  heading: string;
  items: WhyChooseItem[];
};

export type WhyChooseSectionData = SectionData<"why-choose", WhyChooseProps>;

export type ComparisonRow = {
  aspect: string;
  repair: string;
  replace: string;
};

export type ComparisonProps = {
  heading: string;
  subheading: string;
  rows: ComparisonRow[];
  conclusion: string;
};

export type ComparisonSectionData = SectionData<"comparison", ComparisonProps>;

export type TestimonialItem = {
  name: string;
  location: string;
  rating: 4 | 5;
  text: string;
  /** Optional service label, e.g. "Sofa Repair" */
  service?: string;
  /** ISO date string for schema markup, e.g. "2024-11-15" */
  datePublished?: string;
};

export type TestimonialsProps = {
  heading: string;
  items: TestimonialItem[];
};

export type TestimonialsSectionData = SectionData<"testimonials", TestimonialsProps>;

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type ProcessProps = {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
};

export type ProcessSectionData = SectionData<"process", ProcessProps>;

// ─── Topical Authority ────────────────────────────────────────────────────

export type TopicalAuthorityLink = {
  displayName: string;
  href: string;
  mention: string;
};

export type TopicalAuthorityProps = {
  heading: string;
  links: TopicalAuthorityLink[];
};

export type TopicalAuthoritySectionData = SectionData<"topical-authority", TopicalAuthorityProps>;

// ─── Blog Links ──────────────────────────────────────────────────────────────

export type BlogLinkItem = {
  title: string;
  href: string;
  excerpt: string;
  imageUrl?: string;
};

export type BlogLinksProps = {
  heading: string;
  posts: BlogLinkItem[];
};

export type BlogLinksSectionData = SectionData<"blog-links", BlogLinksProps>;

// ─── Services Grid ──────────────────────────────────────────────────────────

export type ServicesGridItem = {
  name: string;
  slug: string;
  description: string;
};

export type ServicesGridProps = {
  heading: string;
  localityName: string;
  items: ServicesGridItem[];
};

export type ServicesGridSectionData = SectionData<"services-grid", ServicesGridProps>;

// ─── Material Options ───────────────────────────────────────────────────────

export type MaterialGroup = {
  category: string;
  items: string[];
};

export type MaterialOptionsProps = {
  heading: string;
  groups: MaterialGroup[];
};

export type MaterialOptionsSectionData = SectionData<"material-options", MaterialOptionsProps>;

// ─── Repair Times ───────────────────────────────────────────────────────────

export type RepairTimeItem = {
  service: string;
  time: string;
  sameDay: "yes" | "usually" | "no";
};

export type RepairTimesProps = {
  heading: string;
  items: RepairTimeItem[];
};

export type RepairTimesSectionData = SectionData<"repair-times", RepairTimesProps>;

// ─── Service Coverage ───────────────────────────────────────────────────────

export type CoverageItem = {
  label: string;
};

export type ServiceCoverageProps = {
  heading: string;
  localityName: string;
  coverageTypes: CoverageItem[];
};

export type ServiceCoverageSectionData = SectionData<"service-coverage", ServiceCoverageProps>;

// ─── Industries ─────────────────────────────────────────────────────────────

export type IndustryItem = {
  key: string;
  name: string;
  description: string;
  icon: string;
};

export type IndustriesProps = {
  heading: string;
  items: IndustryItem[];
};

export type IndustriesSectionData = SectionData<"industries", IndustriesProps>;

// ─── Quick Answers ───────────────────────────────────────────────────────────

export type QuickAnswer = {
  question: string;
  answer: string;
};

export type QuickAnswersProps = {
  heading: string;
  answers: QuickAnswer[];
};

export type QuickAnswersSectionData = SectionData<"quick-answers", QuickAnswersProps>;

// ─── Kitchen (Modular Kitchen SEO cluster) ─────────────────────────────────

export type KitchenHeroProps = {
  headline: string;
  subheadline: string;
  localityName: string;
  cityLabel?: string;
  trustBadges: string[];
  imageUrl: string;
  imageAlt: string;
};

export type KitchenIntroProps = {
  heading: string;
  paragraphs: string[];
  keyFacts: string[];
};

export type KitchenLayoutItem = {
  name: string;
  slug: string;
  description: string;
  bestFor: string;
  costRange: string;
  href: string;
};

export type KitchenLayoutsGridProps = {
  heading: string;
  layouts: KitchenLayoutItem[];
};

export type KitchenMaterialItem = {
  name: string;
  slug: string;
  finish: string;
  durability: string;
  costRange: string;
  pros: string[];
  href: string;
};

export type KitchenMaterialsGridProps = {
  heading: string;
  materials: KitchenMaterialItem[];
};

export type KitchenPricingRow = {
  label: string;
  priceRange: string;
  note: string;
};

export type KitchenPricingProps = {
  heading: string;
  rows: KitchenPricingRow[];
  whatsIncluded: string[];
  disclaimer: string;
};

export type KitchenProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type KitchenProcessProps = {
  heading: string;
  subheading: string;
  steps: KitchenProcessStep[];
};

export type KitchenFaqProps = {
  heading: string;
  faqs: { question: string; answer: string }[];
};

export type KitchenCtaProps = {
  heading: string;
  subheading: string;
  phoneNumber: string;
  whatsappNumber: string;
  localityName: string;
};

export type KitchenHeroSectionData = SectionData<"kitchen-hero", KitchenHeroProps>;
export type KitchenIntroSectionData = SectionData<"kitchen-intro", KitchenIntroProps>;
export type KitchenLayoutsGridSectionData = SectionData<"kitchen-layouts-grid", KitchenLayoutsGridProps>;
export type KitchenMaterialsGridSectionData = SectionData<"kitchen-materials-grid", KitchenMaterialsGridProps>;
export type KitchenPricingSectionData = SectionData<"kitchen-pricing", KitchenPricingProps>;
export type KitchenProcessSectionData = SectionData<"kitchen-process", KitchenProcessProps>;
export type KitchenFaqSectionData = SectionData<"kitchen-faq", KitchenFaqProps>;
export type KitchenCtaSectionData = SectionData<"kitchen-cta", KitchenCtaProps>;

// ─── Kitchen Authority Modules (M4.5) ──────────────────────────────────────

export type KitchenWhyChooseCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type KitchenWhyChooseProps = {
  heading: string;
  cards: KitchenWhyChooseCard[];
};

export type KitchenWhyChooseSectionData = SectionData<"kitchen-why-choose", KitchenWhyChooseProps>;

export type KitchenReviewItem = {
  id: string;
  name: string;
  area: string;
  kitchenType: string;
  stars: 5 | 4;
  text: string;
  budgetRange?: string;
  homeType: string;
};

export type KitchenReviewsProps = {
  heading: string;
  subheading: string;
  items: KitchenReviewItem[];
};

export type KitchenReviewsSectionData = SectionData<"kitchen-reviews", KitchenReviewsProps>;

export type KitchenComparisonOption = {
  id: string;
  label: string;
};

export type KitchenComparisonRow = {
  id: string;
  feature: string;
  values: Record<string, "yes" | "no" | "partial">;
};

export type KitchenComparisonProps = {
  heading: string;
  subheading: string;
  options: KitchenComparisonOption[];
  rows: KitchenComparisonRow[];
  footnote: string;
};

export type KitchenComparisonSectionData = SectionData<"kitchen-comparison", KitchenComparisonProps>;

export type KitchenBrandCard = {
  id: string;
  name: string;
  origin: string;
  typicalUse: string;
  benefits: string[];
  tier: "premium" | "value";
  tagline: string;
};

export type KitchenBrandsProps = {
  heading: string;
  subheading: string;
  brands: KitchenBrandCard[];
};

export type KitchenBrandsSectionData = SectionData<"kitchen-brands", KitchenBrandsProps>;

// ─── LocalityProfile (milestone-227) ──────────────────────────────────────

export type FaqProfileKey =
  | "delhi-luxury-villa"
  | "delhi-luxury-apartments"
  | "delhi-premium-mixed"
  | "delhi-mid-apartments"
  | "delhi-mid-mixed"
  | "delhi-budget"
  | "gurgaon-luxury"
  | "gurgaon-mid"
  | "noida-premium"
  | "noida-mid"
  | "ghaziabad"
  | "faridabad"
  | "default";

export type LayoutSlug = "l-shape" | "u-shape" | "parallel" | "straight" | "island" | "peninsula";
export type MaterialSlug = "acrylic" | "laminate" | "pu" | "membrane" | "veneer" | "pvc" | "glass" | "stainless-steel";
export type BudgetRange = string;
export type InstallationWindow = "7–10 days" | "10–15 days" | "15–20 days";
export type HeroVariant = 1 | 2 | 3 | 4;
export type PricingContext = "luxury" | "premium" | "mid" | "budget";

/** Computed once per page by buildLocalityProfile(). All builders consume this. Never mutated. */
export type LocalityProfile = {
  readonly faqProfile: FaqProfileKey;
  readonly recommendedLayouts: readonly LayoutSlug[];
  readonly recommendedMaterials: readonly MaterialSlug[];
  readonly budgetRange: BudgetRange;
  readonly installationDays: InstallationWindow;
  readonly heroVariant: HeroVariant;
  readonly reviewVariant: number;
  readonly pricingContext: PricingContext;
  /** Increment when algorithm changes — enables audit comparison over time */
  readonly profileVersion: number;
};

// ─── Kitchen Locality Snapshot (milestone-227) ────────────────────────────

export type KitchenLocalitySnapshotItem = {
  readonly name: string;
  readonly slug: string;
  readonly href: string;
};

export type KitchenLocalitySnapshotProps = {
  readonly localityName: string;
  readonly areaProfile: string;
  readonly landmarks: readonly string[];
  readonly nearby: readonly string[];
  readonly propertyTypes: readonly string[];
  readonly recommendedLayouts: readonly KitchenLocalitySnapshotItem[];
  readonly recommendedMaterials: readonly KitchenLocalitySnapshotItem[];
  readonly budgetRange: string;
  readonly installationDays: string;
};

export type KitchenLocalitySnapshotSectionData = SectionData<"kitchen-locality-snapshot", KitchenLocalitySnapshotProps>;

// ─── Kitchen Locality Stats (milestone-227) ───────────────────────────────

export type KitchenLocalityStatsProps = {
  readonly servingTypes: readonly string[];
  readonly popularBudget: string;
  readonly recommendedFinish: string;
  readonly recommendedLayout: string;
  readonly installationDays: string;
};

export type KitchenLocalityStatsSectionData = SectionData<"kitchen-locality-stats", KitchenLocalityStatsProps>;

// ─── Union of all possible sections ────────────────────────────────────────

/** Discriminated union on `type` across every section the engine can produce */
export type PageSectionData =
  | HeroSectionData
  | IntroSectionData
  | ProcessSectionData
  | PricingSectionData
  | RepairTypesSectionData
  | BrandsSectionData
  | FaqSectionData
  | NearbySectionData
  | NearMeSectionData
  | PyramidLinksSectionData
  | ServiceHubSectionData
  | CtaSectionData
  | WhyChooseSectionData
  | ComparisonSectionData
  | TestimonialsSectionData
  | TopicalAuthoritySectionData
  | BlogLinksSectionData
  | ServicesGridSectionData
  | MaterialOptionsSectionData
  | RepairTimesSectionData
  | ServiceCoverageSectionData
  | IndustriesSectionData
  | QuickAnswersSectionData
  | KitchenHeroSectionData
  | KitchenIntroSectionData
  | KitchenLayoutsGridSectionData
  | KitchenMaterialsGridSectionData
  | KitchenPricingSectionData
  | KitchenProcessSectionData
  | KitchenFaqSectionData
  | KitchenCtaSectionData
  | KitchenWhyChooseSectionData
  | KitchenReviewsSectionData
  | KitchenComparisonSectionData
  | KitchenBrandsSectionData
  | KitchenLocalitySnapshotSectionData
  | KitchenLocalityStatsSectionData;

/** Ordered list of sections that make up a page */
export type PageSections = PageSectionData[];
