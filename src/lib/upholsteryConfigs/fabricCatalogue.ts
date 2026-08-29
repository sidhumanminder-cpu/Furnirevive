/**
 * Fabric Catalogue — FurniRevive Upholstery
 *
 * Typed data only. No JSX. No rendering logic.
 * Reusable across web, PDFs, emails, and future apps.
 */

export type FabricProperty =
  | "durable"
  | "soft"
  | "easy-clean"
  | "pet-friendly"
  | "stain-resistant"
  | "luxury"
  | "breathable"
  | "water-resistant"
  | "scratch-resistant";

export type FabricEntry = {
  id: string;
  name: string;
  /** Short descriptor for use in headings */
  tagline: string;
  /** Price per running metre in INR */
  priceRangeMin: number;
  priceRangeMax: number;
  /** Human-readable price range e.g. "₹180–₹350/metre" */
  priceDisplay: string;
  /** Typical warranty offered */
  warrantyYears: number;
  /** High-level durability (1–5) */
  durability: 1 | 2 | 3 | 4 | 5;
  /** Key attributes */
  properties: FabricProperty[];
  /** Best for these use cases */
  bestFor: string[];
  /** Avoid for these situations */
  avoidFor: string[];
  /** Care instructions */
  careInstructions: string[];
  /** One-line summary for comparison tables */
  summary: string;
  /** Tailwind bg class used for colour swatch */
  swatchClass: string;
};

export const FABRIC_CATALOGUE: FabricEntry[] = [
  {
    id: "velvet",
    name: "Velvet",
    tagline: "Luxurious feel, rich colours",
    priceRangeMin: 350,
    priceRangeMax: 800,
    priceDisplay: "₹350–₹800/metre",
    warrantyYears: 3,
    durability: 3,
    properties: ["luxury", "soft"],
    bestFor: ["luxury living rooms", "formal settings", "accent sofas", "master bedrooms"],
    avoidFor: ["homes with pets", "high-traffic family areas", "humid climates"],
    careInstructions: [
      "Vacuum weekly with upholstery attachment",
      "Brush pile direction with soft brush",
      "Blot spills immediately — never rub",
      "Professional dry-clean annually",
    ],
    summary: "Premium look, moderate durability — ideal for showpiece furniture.",
    swatchClass: "bg-purple-700",
  },
  {
    id: "linen",
    name: "Linen",
    tagline: "Natural, breathable, timeless",
    priceRangeMin: 200,
    priceRangeMax: 450,
    priceDisplay: "₹200–₹450/metre",
    warrantyYears: 2,
    durability: 3,
    properties: ["breathable", "soft"],
    bestFor: ["temperate climates", "Scandinavian interiors", "reading chairs", "occasional sofas"],
    avoidFor: ["outdoor use", "high-humidity rooms", "homes with young children"],
    careInstructions: [
      "Vacuum regularly to prevent dust buildup",
      "Spot-clean with mild detergent and cold water",
      "Avoid direct sunlight to prevent fading",
      "Professional clean for deep stains",
    ],
    summary: "Natural look and breathability — best for moderate-use seating.",
    swatchClass: "bg-amber-100",
  },
  {
    id: "leatherette",
    name: "Leatherette",
    tagline: "Easy-clean, pet-friendly, durable",
    priceRangeMin: 180,
    priceRangeMax: 400,
    priceDisplay: "₹180–₹400/metre",
    warrantyYears: 3,
    durability: 5,
    properties: ["easy-clean", "pet-friendly", "stain-resistant", "water-resistant", "scratch-resistant"],
    bestFor: ["families with children", "pet owners", "rental properties", "high-traffic sofas"],
    avoidFor: ["luxury formal settings", "outdoor prolonged exposure"],
    careInstructions: [
      "Wipe with damp cloth after use",
      "Use mild soap solution for stains",
      "Condition every 6 months to prevent cracking",
      "Avoid sharp objects and direct heat",
    ],
    summary: "Most practical and easy-clean — top choice for busy households.",
    swatchClass: "bg-stone-700",
  },
  {
    id: "suede",
    name: "Suede",
    tagline: "Soft, sophisticated, tactile",
    priceRangeMin: 300,
    priceRangeMax: 650,
    priceDisplay: "₹300–₹650/metre",
    warrantyYears: 2,
    durability: 2,
    properties: ["soft", "luxury"],
    bestFor: ["bedroom sofas", "low-traffic seating", "designer interiors"],
    avoidFor: ["homes with pets", "humid environments", "kitchens or dining areas"],
    careInstructions: [
      "Brush regularly with suede brush",
      "Blot liquid spills immediately",
      "Use suede protector spray every 3 months",
      "Professional cleaning recommended annually",
    ],
    summary: "Ultra-soft and stylish — requires careful maintenance.",
    swatchClass: "bg-orange-200",
  },
  {
    id: "chenille",
    name: "Chenille",
    tagline: "Plush texture, premium appearance",
    priceRangeMin: 280,
    priceRangeMax: 600,
    priceDisplay: "₹280–₹600/metre",
    warrantyYears: 3,
    durability: 4,
    properties: ["soft", "durable", "luxury"],
    bestFor: ["living room sofas", "premium settings", "cold climates"],
    avoidFor: ["homes with cats (snags easily)", "high-humidity rooms"],
    careInstructions: [
      "Vacuum with low-suction setting weekly",
      "Blot spills — avoid rubbing",
      "Use upholstery brush to restore pile",
      "Professional clean every 12–18 months",
    ],
    summary: "Plush, durable, and premium — great for main living room sofas.",
    swatchClass: "bg-teal-600",
  },
  {
    id: "jacquard",
    name: "Jacquard",
    tagline: "Woven patterns, distinctive style",
    priceRangeMin: 250,
    priceRangeMax: 550,
    priceDisplay: "₹250–₹550/metre",
    warrantyYears: 3,
    durability: 4,
    properties: ["durable", "stain-resistant"],
    bestFor: ["statement sofas", "traditional interiors", "formal drawing rooms"],
    avoidFor: ["minimalist modern decor", "light-coloured room schemes"],
    careInstructions: [
      "Vacuum weekly to remove surface dust",
      "Spot-clean gently with upholstery cleaner",
      "Test any cleaner on hidden area first",
      "Avoid prolonged direct sunlight",
    ],
    summary: "Intricate woven patterns — adds character to traditional interiors.",
    swatchClass: "bg-yellow-700",
  },
  {
    id: "microfiber",
    name: "Microfiber",
    tagline: "Highly durable, stain-resistant, pet-safe",
    priceRangeMin: 150,
    priceRangeMax: 300,
    priceDisplay: "₹150–₹300/metre",
    warrantyYears: 4,
    durability: 5,
    properties: ["durable", "easy-clean", "pet-friendly", "stain-resistant", "scratch-resistant"],
    bestFor: ["pet owners", "families with children", "everyday-use sofas"],
    avoidFor: ["luxury or formal settings"],
    careInstructions: [
      "Wipe with dry or slightly damp microfiber cloth",
      "Use rubbing alcohol for stubborn stains",
      "Vacuum regularly to remove pet hair",
      "Machine wash removable covers on gentle cycle",
    ],
    summary: "Best value for pet households — extremely tough and easy to maintain.",
    swatchClass: "bg-blue-400",
  },
  {
    id: "polyester",
    name: "Polyester",
    tagline: "Affordable, versatile, colour-fast",
    priceRangeMin: 80,
    priceRangeMax: 200,
    priceDisplay: "₹80–₹200/metre",
    warrantyYears: 2,
    durability: 3,
    properties: ["easy-clean", "stain-resistant", "water-resistant"],
    bestFor: ["rental properties", "budget reupholstery", "guest rooms"],
    avoidFor: ["premium or luxury settings"],
    careInstructions: [
      "Machine washable in most cases",
      "Wipe spills with damp cloth",
      "Vacuum regularly",
      "Avoid high heat when drying",
    ],
    summary: "Budget-friendly and colour-fast — ideal for rental and secondary sofas.",
    swatchClass: "bg-gray-400",
  },
  {
    id: "bouclé",
    name: "Bouclé",
    tagline: "Trendy loop texture, designer look",
    priceRangeMin: 400,
    priceRangeMax: 900,
    priceDisplay: "₹400–₹900/metre",
    warrantyYears: 2,
    durability: 3,
    properties: ["luxury", "soft"],
    bestFor: ["designer interiors", "accent chairs", "statement pieces"],
    avoidFor: ["homes with pets (loops snag)", "high-traffic daily-use sofas"],
    careInstructions: [
      "Vacuum gently with brush attachment",
      "Avoid rubbing or pulling loops",
      "Blot spills carefully",
      "Professional clean recommended",
    ],
    summary: "Trending designer texture — best for feature furniture, low daily use.",
    swatchClass: "bg-stone-200",
  },
];

/** Fabrics recommended for Delhi NCR climate and usage patterns */
export const NCR_RECOMMENDED_FABRICS = [
  "leatherette",
  "microfiber",
  "chenille",
  "jacquard",
] as const;
