/**
 * Kitchen Material Registry
 * Defines all modular kitchen material/finish types for the Kitchen SEO cluster.
 * Each entry maps to a page at /modular-kitchen-{slug}.
 */

export type KitchenMaterialEntry = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  finish: string;
  durability: "low" | "medium" | "high" | "very-high";
  maintenance: "low" | "medium" | "high";
  costMin: number;
  costMax: number;
  bestFor: string;
  pros: readonly string[];
  cons: readonly string[];
  galleryFilter: string;
  status: "published" | "draft";
  /** Affluence buckets this material is recommended for (milestone-227) */
  recommendedForAffluence: readonly ("luxury" | "premium" | "mid" | "budget")[];
};

export const MODULAR_KITCHEN_MATERIAL_REGISTRY: readonly KitchenMaterialEntry[] = [
  {
    id: "kmat_acrylic",
    slug: "acrylic",
    name: "Acrylic Modular Kitchen",
    shortName: "Acrylic",
    finish: "High-gloss reflective",
    durability: "medium",
    maintenance: "medium",
    costMin: 1200,
    costMax: 2200,
    bestFor: "Modern kitchens needing a bright, premium look",
    pros: ["Mirror-like gloss", "Wide colour range", "Easy to clean"],
    cons: ["Scratches visible", "Fades in direct sunlight"],
    galleryFilter: "acrylic",
    status: "published",
    recommendedForAffluence: ["luxury", "premium", "mid"],
  },
  {
    id: "kmat_laminate",
    slug: "laminate",
    name: "Laminate Modular Kitchen",
    shortName: "Laminate",
    finish: "Matte or semi-gloss texture",
    durability: "high",
    maintenance: "low",
    costMin: 700,
    costMax: 1400,
    bestFor: "Budget-conscious buyers wanting durable and low-maintenance kitchens",
    pros: ["Cost-effective", "Wide designs", "Scratch-resistant"],
    cons: ["Less premium look than acrylic", "Edges can peel"],
    galleryFilter: "laminate",
    status: "published",
    recommendedForAffluence: ["mid", "budget"],
  },
  {
    id: "kmat_pu",
    slug: "pu",
    name: "PU Finish Modular Kitchen",
    shortName: "PU Finish",
    finish: "Ultra-smooth paint-grade sheen",
    durability: "high",
    maintenance: "low",
    costMin: 1500,
    costMax: 2800,
    bestFor: "Premium kitchens needing a furniture-paint-grade finish",
    pros: ["Smooth satin finish", "Highly durable", "UV-resistant"],
    cons: ["Higher cost", "Limited colour variety vs laminate"],
    galleryFilter: "pu",
    status: "published",
    recommendedForAffluence: ["luxury", "premium"],
  },
  {
    id: "kmat_membrane",
    slug: "membrane",
    name: "Membrane Modular Kitchen",
    shortName: "Membrane",
    finish: "Soft-touch matte wrap",
    durability: "medium",
    maintenance: "medium",
    costMin: 900,
    costMax: 1800,
    bestFor: "Modern matte-look kitchens with 3D profile doors",
    pros: ["3D routing possible", "Soft-touch feel", "No joint lines"],
    cons: ["Peeling in high humidity", "Heat-sensitive"],
    galleryFilter: "membrane",
    status: "published",
    recommendedForAffluence: ["premium", "mid"],
  },
  {
    id: "kmat_veneer",
    slug: "veneer",
    name: "Veneer Modular Kitchen",
    shortName: "Veneer",
    finish: "Natural wood grain",
    durability: "medium",
    maintenance: "medium",
    costMin: 1800,
    costMax: 3500,
    bestFor: "Warm, natural wood-look luxury kitchens",
    pros: ["Real wood aesthetics", "Premium look", "Unique grain patterns"],
    cons: ["Moisture-sensitive", "Needs periodic polish"],
    galleryFilter: "veneer",
    status: "published",
    recommendedForAffluence: ["luxury", "premium"],
  },
  {
    id: "kmat_pvc",
    slug: "pvc",
    name: "PVC Modular Kitchen",
    shortName: "PVC",
    finish: "Waterproof solid colour",
    durability: "very-high",
    maintenance: "low",
    costMin: 600,
    costMax: 1200,
    bestFor: "High-moisture kitchens and small budgets needing waterproof cabinets",
    pros: ["100% waterproof", "Termite-proof", "Very affordable"],
    cons: ["Less premium look", "Limited designs"],
    galleryFilter: "pvc",
    status: "published",
    recommendedForAffluence: ["mid", "budget"],
  },
  {
    id: "kmat_glass",
    slug: "glass",
    name: "Glass Modular Kitchen",
    shortName: "Glass",
    finish: "Transparent or frosted glass panels",
    durability: "medium",
    maintenance: "high",
    costMin: 2000,
    costMax: 4000,
    bestFor: "Luxury open-display kitchens with a contemporary look",
    pros: ["Elegant look", "Easy to wipe", "Open display effect"],
    cons: ["Fingerprints visible", "Fragile", "High cost"],
    galleryFilter: "glass",
    status: "published",
    recommendedForAffluence: ["luxury"],
  },
  {
    id: "kmat_stainless_steel",
    slug: "stainless-steel",
    name: "Stainless Steel Modular Kitchen",
    shortName: "Stainless Steel",
    finish: "Brushed or mirror-polished metal",
    durability: "very-high",
    maintenance: "medium",
    costMin: 2500,
    costMax: 5000,
    bestFor: "Commercial-grade or minimalist all-metal luxury kitchens",
    pros: ["Extremely durable", "Hygienic", "Heat-resistant"],
    cons: ["Shows scratches over time", "Expensive", "Cold aesthetic"],
    galleryFilter: "stainless-steel",
    status: "published",
    recommendedForAffluence: ["luxury"],
  },
] as const;
