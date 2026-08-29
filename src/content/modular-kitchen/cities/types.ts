export type PricingTier = {
  tier: string;
  range: string;
  features: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type CityLayout = {
  name: string;
  href: string;
  description: string;
  price: string;
};

export type IntroCard = {
  title: string;
  desc: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

export type CityTestimonial = {
  name: string;
  location: string;
  text: string;
  rating: number; // 1–5
};

export type CityStats = {
  projectsCompleted: number;
  averageCompletionDays: number;
  warrantyYears: number;
};

export type FeaturedResourceType = "city-cost" | "per-sqft" | "budget" | "midrange" | "luxury";

export type FeaturedResource = {
  type: FeaturedResourceType;
  url: string;
  title: string;
  description: string;
  priority: number;
  badge?: "Popular" | "Most Viewed" | "Budget" | "Premium";
  analyticsId?: string;
};

export type CityContent = {
  cityName: string; // e.g. "delhi"
  cityDisplayName: string; // e.g. "Delhi"
  heroImage: string;
  pageTitle: string;
  metaDescription: string;
  canonical: string;
  heroHeading: string;
  heroSubtitle: string;
  heroRating: string;
  trustBadges: string[];
  whatsappMessage: string; // URL-encoded text
  introHeading: string;
  introParagraphs: string[];
  introCards: IntroCard[];
  localitiesHeading: string;
  layoutsHeading: string;
  layouts: CityLayout[]; // kept for backward compat, but template now uses MODULAR_KITCHEN_LAYOUT_REGISTRY
  pricingHeading: string;
  pricingNote: string;
  pricingTiers: PricingTier[];
  processSteps: ProcessStep[];
  faqs: CityFaq[];
  ctaHeading: string;
  ctaSubtext: string;
  // New fields (initiative-68 milestone-218)
  testimonials: CityTestimonial[];
  coordinates: { lat: number; lng: number };
  serviceArea: string; // e.g. "Delhi, India"
  featuredResources?: FeaturedResource[]; // pricing & buying guide cards shown on city hub
  featuredLocalities?: string[]; // locality slugs; Popular Searches shows these (defaults to first 6)
  cityStats?: CityStats;
  featuredProjects?: string[]; // reserved for future use
};
