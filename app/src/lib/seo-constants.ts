export const PHONE_NUMBER = "+919217999355";
export const PHONE_DISPLAY = "+91 92179 99355";
export const WHATSAPP_NUMBER = "919217999355";
export const BRAND_NAME = "Furniture Revive";
export const WEBSITE_URL = "https://furniturerevive.com";

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
  /** Optional CTA button text variants */
  ctaVariants?: string[];
  faqs: { question: string; answer: string }[];
  relatedPages: { label: string; href: string }[];
  /** Optional grouped related pages for better UX — renders categorised sections instead of flat list */
  relatedPageGroups?: { heading: string; pages: { label: string; href: string }[] }[];
  keywords: string[];
};
