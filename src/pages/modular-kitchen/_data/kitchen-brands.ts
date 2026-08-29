export interface BrandCard {
  id: string;
  name: string;
  origin: string;
  typicalUse: string;
  benefits: string[];
  tier: "premium" | "value";
  tagline: string;
}

export const HARDWARE_BRANDS: BrandCard[] = [
  {
    id: "blum",
    name: "Blum",
    origin: "Austria",
    typicalUse: "Hinges, drawer systems, lift-up mechanisms",
    benefits: [
      "BLUMOTION soft-close on every hinge",
      "LEGRABOX and TANDEMBOX drawer systems",
      "Industry-leading 10-year hardware warranty",
      "Silent, precise movement after thousands of cycles",
    ],
    tier: "premium",
    tagline: "The benchmark for premium kitchen hardware",
  },
  {
    id: "hettich",
    name: "Hettich",
    origin: "Germany",
    typicalUse: "Hinges, drawer runners, sliding systems",
    benefits: [
      "InnoTech and ArciTech drawer systems",
      "Soft-close integrated into runners",
      "Excellent value-to-performance ratio",
      "Widely used in mid-range and premium kitchens",
    ],
    tier: "premium",
    tagline: "German engineering, widely trusted across India",
  },
  {
    id: "hafele",
    name: "Häfele",
    origin: "Germany",
    typicalUse: "Full hardware range — hinges, handles, lighting, storage systems",
    benefits: [
      "Complete kitchen hardware ecosystem",
      "Pull-outs, corner units, and tall unit fittings",
      "Integrated LED lighting systems",
      "Strong service network across Delhi NCR",
    ],
    tier: "premium",
    tagline: "End-to-end hardware solutions for modern kitchens",
  },
  {
    id: "ebco",
    name: "Ebco",
    origin: "India",
    typicalUse: "Hinges, drawer channels, cabinet fittings",
    benefits: [
      "Reliable everyday performance",
      "Cost-effective for budget and mid-range kitchens",
      "Wide availability for easy future replacements",
      "Soft-close options available",
    ],
    tier: "value",
    tagline: "Dependable Indian hardware, proven in millions of kitchens",
  },
];
