/**
 * Kitchen Cost Registry
 * Defines all modular kitchen cost/budget pages for the Kitchen SEO cluster.
 * Each entry maps to a page at /modular-kitchen-{slug}.
 */

export type KitchenCostEntry = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  budgetMin: number;
  budgetMax: number;
  targetAudience: string;
  status: "published" | "draft";
};

export const MODULAR_KITCHEN_COST_REGISTRY: readonly KitchenCostEntry[] = [
  {
    id: "kcost_delhi",
    slug: "cost-delhi",
    name: "Modular Kitchen Cost in Delhi",
    shortName: "Cost in Delhi",
    description: "Complete pricing guide for modular kitchens in Delhi — budget to luxury",
    budgetMin: 80000,
    budgetMax: 1500000,
    targetAudience: "Delhi homeowners comparing modular kitchen quotes",
    status: "published",
  },
  {
    id: "kcost_per_sqft",
    slug: "cost-per-sqft",
    name: "Modular Kitchen Cost per Sq Ft",
    shortName: "Cost per Sq Ft",
    description: "Per square foot pricing breakdown for modular kitchens by material and finish",
    budgetMin: 600,
    budgetMax: 5000,
    targetAudience: "Homeowners calculating modular kitchen budget by area",
    status: "published",
  },
  {
    id: "kcost_1_lakh",
    slug: "1-lakh",
    name: "\u20B91 Lakh Modular Kitchen",
    shortName: "\u20B91 Lakh",
    description: "Best modular kitchen designs and materials within a \u20B91 lakh budget",
    budgetMin: 80000,
    budgetMax: 130000,
    targetAudience: "Budget buyers needing a complete kitchen under \u20B91 lakh",
    status: "published",
  },
  {
    id: "kcost_2_lakh",
    slug: "2-lakh",
    name: "\u20B92 Lakh Modular Kitchen",
    shortName: "\u20B92 Lakh",
    description: "Premium modular kitchen designs within a \u20B92 lakh budget with upgrade options",
    budgetMin: 150000,
    budgetMax: 250000,
    targetAudience: "Mid-range buyers wanting a quality kitchen under \u20B92 lakh",
    status: "published",
  },
  {
    id: "kcost_luxury",
    slug: "luxury",
    name: "Luxury Modular Kitchen",
    shortName: "Luxury",
    description: "High-end modular kitchen designs with premium materials, imported hardware and custom finishes",
    budgetMin: 500000,
    budgetMax: 0,
    targetAudience: "Premium villa and penthouse owners wanting a luxury kitchen",
    status: "published",
  },
] as const;
