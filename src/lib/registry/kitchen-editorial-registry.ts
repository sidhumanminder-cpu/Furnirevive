/**
 * Kitchen Editorial Registry
 * Defines all modular kitchen editorial/guide pages as first-class nodes.
 * Used by pyramid-links engine for bidirectional linking; does NOT store page content.
 */

/** Priority order for bidirectional links: comparison > planning > budget */
export type EditorialCategory = "comparison" | "planning" | "budget";

export type KitchenEditorialEntry = {
  /** URL slug — full slug, maps to /{slug} */
  slug: string;
  type: "editorial";
  /** Category controls link priority (comparison > planning > budget) */
  category: EditorialCategory;
  /** Short name for link labels (e.g. "Acrylic vs Laminate") */
  name: string;
  /** Href of parent page for breadcrumb and upward linking */
  parent: string;
  /** Layout slugs from MODULAR_KITCHEN_LAYOUT_REGISTRY this page is relevant to */
  relatedLayouts: readonly string[];
  /** Material slugs from MODULAR_KITCHEN_MATERIAL_REGISTRY this page is relevant to */
  relatedMaterials: readonly string[];
  /** Cost page slugs from MODULAR_KITCHEN_COST_REGISTRY this page is relevant to */
  relatedCostPages: readonly string[];
  /** Slugs of semantically related editorial pages (from this registry) */
  relatedEditorials: readonly string[];
  /** Whether this page has an FAQ section — controls FAQPage JSON-LD generation */
  hasFAQ: boolean;
};

export const KITCHEN_EDITORIAL_REGISTRY: readonly KitchenEditorialEntry[] = [
  // ─── COMPARISON GUIDES ────────────────────────────────────────────────────
  {
    slug: "acrylic-vs-laminate-modular-kitchen",
    type: "editorial",
    category: "comparison",
    name: "Acrylic vs Laminate",
    parent: "/modular-kitchen",
    relatedLayouts: [],
    relatedMaterials: ["acrylic", "laminate"],
    relatedCostPages: ["cost-delhi", "cost-per-sqft"],
    relatedEditorials: [
      "l-shape-vs-u-shape-modular-kitchen",
      "modular-vs-semi-modular-kitchen",
      "modular-kitchen-under-50000",
    ],
    hasFAQ: true,
  },
  {
    slug: "l-shape-vs-u-shape-modular-kitchen",
    type: "editorial",
    category: "comparison",
    name: "L-Shape vs U-Shape",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "u-shape"],
    relatedMaterials: [],
    relatedCostPages: ["cost-delhi", "2-lakh"],
    relatedEditorials: [
      "acrylic-vs-laminate-modular-kitchen",
      "modular-vs-semi-modular-kitchen",
      "modular-kitchen-for-small-flat",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-vs-semi-modular-kitchen",
    type: "editorial",
    category: "comparison",
    name: "Modular vs Semi-Modular",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "straight"],
    relatedMaterials: ["laminate", "pvc"],
    relatedCostPages: ["cost-delhi", "1-lakh"],
    relatedEditorials: [
      "acrylic-vs-laminate-modular-kitchen",
      "l-shape-vs-u-shape-modular-kitchen",
      "modular-kitchen-under-50000",
    ],
    hasFAQ: true,
  },

  // ─── PLANNING GUIDES ──────────────────────────────────────────────────────
  {
    slug: "modular-kitchen-for-small-flat",
    type: "editorial",
    category: "planning",
    name: "Small Flat Kitchen Guide",
    parent: "/modular-kitchen",
    relatedLayouts: ["straight", "parallel", "l-shape"],
    relatedMaterials: ["laminate", "pvc"],
    relatedCostPages: ["cost-delhi", "1-lakh"],
    relatedEditorials: [
      "modular-kitchen-10x8",
      "modular-kitchen-10x10",
      "modular-kitchen-under-50000",
    ],
    hasFAQ: true,
  },
  {
    slug: "2bhk-modular-kitchen-design",
    type: "editorial",
    category: "planning",
    name: "2BHK Kitchen Design",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "straight", "parallel"],
    relatedMaterials: ["acrylic", "laminate"],
    relatedCostPages: ["cost-delhi", "2-lakh"],
    relatedEditorials: [
      "3bhk-modular-kitchen-cost",
      "modular-kitchen-10x10",
      "modular-kitchen-for-small-flat",
    ],
    hasFAQ: true,
  },

  // ─── BUDGET GUIDES ────────────────────────────────────────────────────────
  {
    slug: "3bhk-modular-kitchen-cost",
    type: "editorial",
    category: "budget",
    name: "3BHK Kitchen Cost Guide",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "u-shape", "island"],
    relatedMaterials: ["acrylic", "pu", "veneer"],
    relatedCostPages: ["cost-delhi", "2-lakh", "luxury"],
    relatedEditorials: [
      "2bhk-modular-kitchen-design",
      "modular-kitchen-10x12",
      "modular-kitchen-under-3-lakh",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-kitchen-10x8",
    type: "editorial",
    category: "budget",
    name: "10×8 Kitchen Guide",
    parent: "/modular-kitchen",
    relatedLayouts: ["straight", "parallel", "l-shape"],
    relatedMaterials: ["laminate", "pvc", "membrane"],
    relatedCostPages: ["cost-delhi", "1-lakh"],
    relatedEditorials: [
      "modular-kitchen-10x10",
      "modular-kitchen-for-small-flat",
      "modular-kitchen-under-50000",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-kitchen-10x10",
    type: "editorial",
    category: "budget",
    name: "10×10 Kitchen Guide",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "u-shape", "parallel"],
    relatedMaterials: ["acrylic", "laminate"],
    relatedCostPages: ["cost-delhi", "2-lakh"],
    relatedEditorials: [
      "modular-kitchen-10x8",
      "modular-kitchen-10x12",
      "2bhk-modular-kitchen-design",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-kitchen-10x12",
    type: "editorial",
    category: "budget",
    name: "10×12 Kitchen Guide",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "u-shape"],
    relatedMaterials: ["acrylic", "pu", "laminate"],
    relatedCostPages: ["cost-delhi", "2-lakh", "luxury"],
    relatedEditorials: [
      "modular-kitchen-10x10",
      "3bhk-modular-kitchen-cost",
      "modular-kitchen-under-3-lakh",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-kitchen-under-50000",
    type: "editorial",
    category: "budget",
    name: "Under ₹50,000 Kitchen",
    parent: "/modular-kitchen",
    relatedLayouts: ["straight", "parallel"],
    relatedMaterials: ["pvc", "laminate"],
    relatedCostPages: ["cost-delhi", "1-lakh"],
    relatedEditorials: [
      "modular-kitchen-for-small-flat",
      "modular-kitchen-10x8",
      "modular-vs-semi-modular-kitchen",
    ],
    hasFAQ: true,
  },
  {
    slug: "modular-kitchen-under-3-lakh",
    type: "editorial",
    category: "budget",
    name: "Under ₹3 Lakh Kitchen",
    parent: "/modular-kitchen",
    relatedLayouts: ["l-shape", "u-shape"],
    relatedMaterials: ["acrylic", "laminate", "membrane"],
    relatedCostPages: ["cost-delhi", "2-lakh"],
    relatedEditorials: [
      "3bhk-modular-kitchen-cost",
      "modular-kitchen-10x12",
      "2bhk-modular-kitchen-design",
    ],
    hasFAQ: true,
  },
] as const;

/** Look up an editorial entry by slug */
export function getEditorialEntry(slug: string): KitchenEditorialEntry | undefined {
  return KITCHEN_EDITORIAL_REGISTRY.find((e) => e.slug === slug);
}
