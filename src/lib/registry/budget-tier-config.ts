/**
 * Budget Tier Configuration
 * Single source of truth for all budget-driven kitchen page content.
 * Edit here to update pricing/content across all 50 budget locality pages.
 */

export type BudgetTier = "affordable" | "low-cost";

export type BudgetTierConfig = {
  tier: BudgetTier;
  label: string;              // "Affordable" | "Low Cost"
  urlPrefix: string;          // "affordable-modular-kitchen" | "low-cost-modular-kitchen"
  basePrice: number;
  tagline: string;
  hardwareTier: string;
  finishes: string[];
  layouts: string[];          // recommended layout slugs (for cross-links)
  layoutLabels: string[];
  materials: string[];        // recommended material slugs
  materialLabels: string[];
  typicalCustomers: string[];
  upgradePrice: number;       // how much more for next tier
  upgradeBenefit: string;
  tradeOffVsAbove: {
    above: string;
    pros: string[];
    cons: string[];
  };
};

export const BUDGET_TIER_CONFIG: Record<BudgetTier, BudgetTierConfig> = {
  "affordable": {
    tier: "affordable",
    label: "Affordable",
    urlPrefix: "affordable-modular-kitchen",
    basePrice: 130000,
    tagline: "Quality finish, smart storage, reasonable price",
    hardwareTier: "Mid-range (Hettich / Ebco)",
    finishes: ["Laminate", "Membrane"],
    layouts: ["l-shape", "straight", "parallel"],
    layoutLabels: ["L-Shape", "Straight", "Parallel"],
    materials: ["laminate", "membrane"],
    materialLabels: ["Laminate", "Membrane"],
    typicalCustomers: [
      "First-home buyers",
      "Small families in 2BHK apartments",
      "Apartment owners upgrading from builder kitchens",
      "Young couples setting up their first home",
    ],
    upgradePrice: 50000,
    upgradeBenefit: "Upgrade to acrylic shutters, soft-close on all drawers, and premium Hettich hardware",
    tradeOffVsAbove: {
      above: "Acrylic / PU Kitchen (~₹1.8L+)",
      pros: [
        "40–50% lower upfront cost",
        "Faster delivery (laminate stock always available)",
        "Easier to repair individual shutters",
        "Wide colour and texture range",
      ],
      cons: [
        "Less glossy finish compared to acrylic",
        "Fewer premium hardware options",
        "Limited 3D profile routing",
      ],
    },
  },

  "low-cost": {
    tier: "low-cost",
    label: "Low Cost",
    urlPrefix: "low-cost-modular-kitchen",
    basePrice: 85000,
    tagline: "Functional, durable, and honest pricing",
    hardwareTier: "Standard (Ebco / Dorset)",
    finishes: ["Laminate"],
    layouts: ["straight", "l-shape"],
    layoutLabels: ["Straight", "Small L-Shape"],
    materials: ["laminate"],
    materialLabels: ["Laminate"],
    typicalCustomers: [
      "Rental property owners",
      "Studio and 1BHK apartment owners",
      "Budget renovations with fixed spend",
      "Resale property upgrades",
    ],
    upgradePrice: 45000,
    upgradeBenefit: "Upgrade to membrane shutters, mid-range hardware, and additional tall unit storage",
    tradeOffVsAbove: {
      above: "Affordable Kitchen (~₹1.3L)",
      pros: [
        "30–35% lower cost",
        "Quicker turnaround",
        "Straightforward, functional design",
        "Easy maintenance",
      ],
      cons: [
        "Standard hardware only",
        "Limited to laminate finishes",
        "Basic module sizes",
        "Fewer customisation options",
      ],
    },
  },
};
