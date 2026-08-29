/**
 * Types for the Modular Kitchen Cost pages (city-specific cost guides).
 * Consumed by KitchenCostPageTemplate and per-city cost content files.
 */

export type KitchenCostPricingTier = {
  tier: "budget" | "mid" | "premium";
  label: string; // e.g. "Budget"
  range: string; // e.g. "₹80,000–₹1,50,000"
  features: string[];
};

export type KitchenCostTestimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type KitchenCostFaq = {
  q: string;
  a: string;
};

export type KitchenCostContent = {
  city: "gurgaon" | "noida" | "faridabad" | "ghaziabad" | "delhi";
  cityDisplayName: string;
  slug: string; // e.g. "cost-gurgaon"
  pageTitle: string;
  metaDescription: string;
  canonical: string;
  heroHeading: string;
  heroSubtitle: string;
  heroImage: string;
  pricingTiers: KitchenCostPricingTier[];
  testimonials: KitchenCostTestimonial[];
  faqs: KitchenCostFaq[];
  labourMultiplier?: number; // relative to Delhi base (1.0). Gurgaon=1.1, others=0.9
};
