/**
 * Kitchen Layout Registry
 * Defines all modular kitchen layout types for the Kitchen SEO cluster.
 * Each entry maps to a page at /modular-kitchen-{slug}.
 */

export type KitchenLayoutEntry = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  bestFor: string;
  minSqFt: number;
  maxSqFt: number;
  costMin: number;
  costMax: number;
  galleryFilter: string;
  status: "published" | "draft";
  /** Locality types this layout is recommended for (milestone-227) */
  recommendedFor: readonly ("villa" | "apartments" | "mixed")[];
};

export const MODULAR_KITCHEN_LAYOUT_REGISTRY: readonly KitchenLayoutEntry[] = [
  {
    id: "klayout_l_shape",
    slug: "l-shape",
    name: "L-Shape Modular Kitchen",
    shortName: "L-Shape",
    description: "Two perpendicular walls forming an L, ideal for corner utilisation",
    bestFor: "Medium kitchens with two adjacent walls and efficient workflow",
    minSqFt: 80,
    maxSqFt: 150,
    costMin: 150000,
    costMax: 500000,
    galleryFilter: "l-shape",
    status: "published",
    recommendedFor: ["villa", "apartments", "mixed"],
  },
  {
    id: "klayout_u_shape",
    slug: "u-shape",
    name: "U-Shape Modular Kitchen",
    shortName: "U-Shape",
    description: "Three-wall layout providing maximum storage and counter space",
    bestFor: "Large kitchens needing maximum storage and counter space",
    minSqFt: 120,
    maxSqFt: 200,
    costMin: 200000,
    costMax: 650000,
    galleryFilter: "u-shape",
    status: "published",
    recommendedFor: ["villa", "mixed"],
  },
  {
    id: "klayout_parallel",
    slug: "parallel",
    name: "Parallel Modular Kitchen",
    shortName: "Parallel",
    description: "Two parallel countertops facing each other, efficient for linear cooking zones",
    bestFor: "Long narrow kitchens with high cooking frequency",
    minSqFt: 80,
    maxSqFt: 140,
    costMin: 130000,
    costMax: 420000,
    galleryFilter: "parallel",
    status: "published",
    recommendedFor: ["apartments"],
  },
  {
    id: "klayout_straight",
    slug: "straight",
    name: "Straight Modular Kitchen",
    shortName: "Straight",
    description: "Single-wall layout, compact and minimalist",
    bestFor: "Small apartments and studio flats",
    minSqFt: 40,
    maxSqFt: 80,
    costMin: 80000,
    costMax: 250000,
    galleryFilter: "straight",
    status: "published",
    recommendedFor: ["apartments"],
  },
  {
    id: "klayout_island",
    slug: "island",
    name: "Island Modular Kitchen",
    shortName: "Island",
    description: "Central island counter with seating, open and social kitchen design",
    bestFor: "Large open-plan homes and luxury villas",
    minSqFt: 180,
    maxSqFt: 400,
    costMin: 350000,
    costMax: 1200000,
    galleryFilter: "island",
    status: "published",
    recommendedFor: ["villa"],
  },
  {
    id: "klayout_peninsula",
    slug: "peninsula",
    name: "Peninsula Modular Kitchen",
    shortName: "Peninsula",
    description: "Connected island on one end, provides extra counter without full island footprint",
    bestFor: "Medium-large kitchens that need extra counter without a full island",
    minSqFt: 140,
    maxSqFt: 250,
    costMin: 250000,
    costMax: 750000,
    galleryFilter: "peninsula",
    status: "published",
    recommendedFor: ["villa", "mixed"],
  },
] as const;
