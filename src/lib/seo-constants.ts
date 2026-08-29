export const PHONE_NUMBER = "+919217999355";
export const PHONE_DISPLAY = "+91 92179 99355";
export const WHATSAPP_NUMBER = "919217999355";
export const BRAND_NAME = "FurniRevive";
export const WEBSITE_URL = "https://furniturerevive.com";
export const SITE_URL = "https://furnirevive.com";

/**
 * Canonical list of all cities FurniRevive serves.
 * Used in footer "Popular Cities" column and NearMeSection "Also available in" links.
 * Add new cities here once — both places update automatically.
 */
export const POPULAR_CITIES = [
  { key: "delhi", label: "Delhi", href: "/sofa-repair-delhi" },
  { key: "chandigarh", label: "Chandigarh", href: "/sofa-repair-chandigarh" },
  { key: "mohali", label: "Mohali", href: "/sofa-repair-mohali" },
  { key: "panchkula", label: "Panchkula", href: "/sofa-repair-panchkula" },
  { key: "gurgaon", label: "Gurgaon", href: "/sofa-repair-gurgaon" },
  { key: "noida", label: "Noida", href: "/sofa-repair-noida" },
  { key: "ghaziabad", label: "Ghaziabad", href: "/sofa-repair-ghaziabad" },
  { key: "faridabad", label: "Faridabad", href: "/sofa-repair-faridabad" },
] as const;

export const SERVICE_AREAS = [
  "Delhi",
  "Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
  "Greater Noida",
  "Dwarka",
  "Rohini",
  "Vasant Kunj",
  "Saket",
  "South Delhi",
  "East Delhi",
  "Lajpat Nagar",
  "Greater Kailash",
  "Pitampura",
  "Janakpuri",
  "Rajouri Garden",
  "Nehru Place",
  "Preet Vihar",
  "Vasant Vihar",
] as const;

export const TRICITY_SERVICE_AREAS = [
  "Chandigarh Sector 17",
  "Chandigarh Sector 22",
  "Chandigarh Sector 34",
  "Chandigarh Sector 35",
  "Chandigarh Sector 43",
  "Chandigarh Sector 44",
  "Chandigarh Sector 45",
  "Manimajra",
  "Phase 1 Mohali",
  "Phase 3B2 Mohali",
  "Sector 66 Mohali",
  "Sector 68 Mohali",
  "Aerocity Mohali",
  "New Chandigarh",
  "Kharar",
  "Sector 9 Panchkula",
  "Sector 11 Panchkula",
  "Sector 15 Panchkula",
  "Sector 20 Panchkula",
  "Sector 21 Panchkula",
  "Pinjore",
  "Zirakpur",
] as const;

export const NOIDA_SERVICE_AREAS = [
  "Noida Sector 18",
  "Noida Sector 62",
  "Noida Sector 137",
  "Noida Sector 50",
  "Noida Sector 76",
  "Greater Noida West",
  "Greater Noida",
  "Indirapuram",
  "Vaishali",
  "Crossings Republik",
  "Ghaziabad",
] as const;

export const GURGAON_SERVICE_AREAS = [
  "DLF Phase 1",
  "DLF Phase 2",
  "DLF Phase 4",
  "Sohna Road",
  "Golf Course Road",
  "Sector 56",
  "Sector 57",
  "MG Road",
  "Cyber City",
  "South City",
  "Manesar",
] as const;

export const FARIDABAD_SERVICE_AREAS = [
  "NIT Faridabad",
  "Sector 15 Faridabad",
  "Sector 16 Faridabad",
  "Sector 21C Faridabad",
  "Old Faridabad",
  "Neharpar",
  "BPTP",
  "Palwal",
] as const;

export const GHAZIABAD_SERVICE_AREAS = [
  "Indirapuram",
  "Vaishali",
  "Raj Nagar Extension",
  "Crossings Republik",
  "Kaushambi",
  "Vasundhara",
  "Mohan Nagar",
  "Sahibabad",
] as const;

export type SeoPageData = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  /** 40-60 word AI-overview-optimised summary shown near the top of the page */
  quickAnswer?: string;
  intro: string[];
  whyChoose: { title: string; description: string }[];
  process: { step: string; description: string }[];
  benefits: string[];
  contentSections: { heading: string; body: string[] }[];
  /** Optional comparison section rendered between benefits and repair results */
  comparisonSection?: {
    heading: string;
    rows: { label: string; value: string }[];
    conclusion: string[];
  };
  /** Optional local areas served section with area chips */
  localAreasSection?: {
    heading: string;
    areas: string[];
  };
  /** Optional "near you" context block for local-intent pages */
  nearMeSection?: {
    heading: string;
    content: string;
    /** STEP 2: Micro-location signals paragraph */
    microLocationContent?: string;
    /** STEP 6: Short trust signal chips (e.g. "starting ₹999") */
    trustSignals?: string[];
  };
  /** Optional static before/after showcase image (CDN URL) */
  showcaseImage?: {
    heading: string;
    imageUrl: string;
    altText: string;
    caption?: string;
  };
  /** Optional before/after/technician image gallery for CRO & trust */
  repairImages?: {
    src: string;
    alt: string;
    caption: string;
    type: "before" | "after" | "technician";
  }[];
  /** Optional price table for high-impact pages */
  priceTable?: {
    heading?: string;
    rows: { service: string; price: string }[];
  };
  /** Optional "signs you need repair" bullet list */
  repairSigns?: string[];
  /** Optional customer testimonials for high-priority pages */
  testimonials?: {
    name: string;
    location: string;
    rating: number;
    text: string;
    service?: string;
  }[];
  /** Optional structured signs section (title + description per sign) */
  signs?: { title: string; description: string }[];
  /** Optional structured services section */
  services?: { title: string; description: string }[];
  /** Optional structured pricing section */
  pricing?: {
    intro: string;
    items: { label: string; price: string }[];
    note: string;
  };
  /** Optional repair-vs-replace comparison section */
  repairVsReplace?: {
    intro: string;
    repairPoints: string[];
    replacePoints: string[];
  };
  /** Optional hyper-local areas section with intro and outro */
  localAreas?: {
    intro: string;
    areas: string[];
    outro: string;
  };
  /** Optional top-level trust signal chips */
  trustSignals?: string[];
  /** Optional freshness / last-verified stamp */
  freshness?: string;
  /** Breadcrumb middle tier — e.g. "Sofa Repair", "Chair Repair", "Leather Sofa Repair" */
  category?: string;
  /** Optional city key for the smart NearMeSection component */
  cityKey?: "noida" | "delhi" | "gurgaon" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";
  /**
   * Page type — drives which SEO sections the template renders.
   * When absent, resolvePageType() in location-graph.ts derives it from cityKey/serviceKey/slug.
   */
  pageType?: import("@/lib/seoConfigs/location-graph.ts").PageType;
  /**
   * Canonical service identifier — stable across URL changes and display label rewrites.
   * Used by ServiceAvailabilitySection and URL helpers.
   * When absent, resolveServiceKey() attempts to derive it from the slug.
   */
  serviceKey?: import("@/lib/seoConfigs/service-config.ts").SeoServiceKey;
  /** Optional CTA button text variants */
  ctaVariants?: string[];
  faqs: { question: string; answer: string }[];
  relatedPages: { label: string; href: string; curated?: boolean }[];
  /** Optional grouped related pages for better UX — renders categorised sections instead of flat list */
  relatedPageGroups?: { heading: string; pages: { label: string; href: string; curated?: boolean }[] }[];
  keywords: string[];
  /**
   * Hero image resolved by the programmatic pipeline (createSeoPage → composePage → getHeroImage).
   * Resolved exactly once. Passed in from the page component via spread merge — never resolved here.
   * Optional — existing SeoPageData objects that don't set this are unaffected.
   */
  hero?: import("@/lib/seoConfigs/hero-image-registry.ts").HeroImageRecord | null;
};
