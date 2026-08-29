export type GuideCategory = "comparison" | "planning" | "budget";
export type GuideStatus = "published" | "draft";

export type KitchenGuideEntry = {
  slug: string; category: GuideCategory; name: string; h1: string;
  metaTitle: string; metaDesc: string; searchIntent: string;
  relatedMaterials: readonly string[]; relatedLayouts: readonly string[];
  relatedCostPages: readonly string[]; relatedGuides: readonly string[];
  crossLinks: readonly string[]; priority: number; status: GuideStatus;
};

const H1_MAP: Record<GuideCategory, string> = {
  comparison: "Which Is Better for Your Modular Kitchen?",
  planning: "A Complete Guide for Indian Homes",
  budget: "Budget Breakdown & Smart Tips",
};
const DESC_MAP: Record<GuideCategory, string> = {
  comparison: "Pros, cons, durability, pricing and the best choice for your home.",
  planning: "Expert tips covering layout, materials, budget and timelines for Indian homes.",
  budget: "Detailed cost breakdowns, savings tips and smart choices for Indian kitchens.",
};
const INTENT_MAP: Record<GuideCategory, string> = {
  comparison: "User wants to compare",
  planning: "User seeks guidance on",
  budget: "User wants to understand pricing for",
};

function createEntry(
  slug: string, category: GuideCategory, name: string,
  relatedMaterials: readonly string[], relatedLayouts: readonly string[],
  relatedCostPages: readonly string[], relatedGuides: readonly string[],
  crossLinks: readonly string[], priority: number,
): KitchenGuideEntry {
  return {
    slug, category, name, priority, status: "published",
    h1: `${name}: ${H1_MAP[category]}`,
    metaTitle: `${name} Modular Kitchen | FurniRevive`.slice(0, 70),
    metaDesc: `${name} — ${DESC_MAP[category]}`.slice(0, 160),
    searchIntent: `${INTENT_MAP[category]} ${name.toLowerCase()} for their modular kitchen.`,
    relatedMaterials, relatedLayouts, relatedCostPages, relatedGuides, crossLinks,
  };
}

export const KITCHEN_GUIDE_REGISTRY: readonly KitchenGuideEntry[] = [
  // Comparison — Material
  { ...createEntry("acrylic-vs-laminate-modular-kitchen", "comparison", "Acrylic vs Laminate",
    ["acrylic", "laminate"], ["l-shape", "parallel"], ["cost-per-sqft"], ["pu-vs-acrylic-modular-kitchen", "laminate-vs-membrane-modular-kitchen"], ["acrylic-modular-kitchen", "modular-kitchen-delhi"], 5), status: "draft" as const },
  createEntry("pu-vs-acrylic-modular-kitchen", "comparison", "PU vs Acrylic",
    ["pu", "acrylic"], ["u-shape", "island"], ["luxury", "cost-per-sqft"], ["acrylic-vs-laminate-modular-kitchen", "acrylic-vs-pu-modular-kitchen"], ["acrylic-modular-kitchen"], 4),
  createEntry("glass-vs-membrane-modular-kitchen", "comparison", "Glass vs Membrane Finish",
    ["glass", "membrane"], ["straight", "l-shape"], ["cost-per-sqft"], ["laminate-vs-membrane-modular-kitchen"], ["modular-kitchen-delhi"], 3),
  createEntry("acrylic-vs-pu-modular-kitchen", "comparison", "Acrylic vs PU Finish",
    ["acrylic", "pu"], ["l-shape", "u-shape"], ["luxury", "cost-per-sqft"], ["pu-vs-acrylic-modular-kitchen", "acrylic-vs-laminate-modular-kitchen"], ["acrylic-modular-kitchen"], 4),
  createEntry("laminate-vs-membrane-modular-kitchen", "comparison", "Laminate vs Membrane",
    ["laminate", "membrane"], ["parallel", "straight"], ["cost-per-sqft", "1-lakh"], ["acrylic-vs-laminate-modular-kitchen", "glass-vs-membrane-modular-kitchen"], ["modular-kitchen-delhi"], 4),
  // Comparison — Layout
  createEntry("l-shape-vs-parallel-modular-kitchen", "comparison", "L-Shape vs Parallel",
    ["laminate", "acrylic"], ["l-shape", "parallel"], ["cost-per-sqft"], ["straight-vs-parallel-modular-kitchen", "choosing-kitchen-layout-guide"], ["l-shape-modular-kitchen"], 5),
  createEntry("island-vs-u-shape-modular-kitchen", "comparison", "Island vs U-Shape",
    ["acrylic", "pu"], ["island", "u-shape"], ["luxury"], ["l-shape-vs-parallel-modular-kitchen", "choosing-kitchen-layout-guide"], ["modular-kitchen-delhi"], 3),
  createEntry("straight-vs-parallel-modular-kitchen", "comparison", "Straight vs Parallel",
    ["laminate", "membrane"], ["straight", "parallel"], ["cost-per-sqft", "1-lakh"], ["l-shape-vs-parallel-modular-kitchen", "choosing-kitchen-layout-guide"], ["modular-kitchen-delhi"], 4),
  { ...createEntry("modular-vs-semi-modular-kitchen", "comparison", "Modular vs Semi-Modular",
    ["laminate", "pvc"], ["straight", "l-shape"], ["1-lakh", "2-lakh"], ["modular-kitchen-vs-carpenter-made"], ["modular-kitchen-delhi"], 4), status: "draft" as const },
  // Decision
  createEntry("modular-kitchen-vs-carpenter-made", "comparison", "Modular vs Carpenter-Made",
    ["laminate", "pvc", "veneer"], ["l-shape", "straight"], ["cost-per-sqft", "2-lakh"], ["modular-vs-semi-modular-kitchen", "modular-kitchen-buying-guide"], ["modular-kitchen-delhi"], 5),
  createEntry("best-modular-kitchen-material-delhi", "planning", "Best Material for Delhi Climate",
    ["acrylic", "laminate", "pu", "membrane"], ["l-shape", "u-shape"], ["cost-delhi"], ["acrylic-vs-laminate-modular-kitchen", "pu-vs-acrylic-modular-kitchen"], ["modular-kitchen-delhi"], 4),
  createEntry("best-modular-kitchen-for-apartments", "planning", "Best Kitchen for Apartments",
    ["laminate", "acrylic"], ["l-shape", "parallel", "straight"], ["cost-per-sqft", "2-lakh"], ["how-to-plan-modular-kitchen", "choosing-kitchen-layout-guide"], ["l-shape-modular-kitchen"], 4),
  createEntry("best-modular-kitchen-for-villas", "planning", "Best Kitchen for Villas",
    ["acrylic", "pu", "veneer"], ["island", "u-shape"], ["luxury"], ["how-to-plan-modular-kitchen", "island-vs-u-shape-modular-kitchen"], ["modular-kitchen-delhi"], 3),
  createEntry("soft-close-vs-standard-hinges-kitchen", "comparison", "Soft-Close vs Standard Hinges",
    ["laminate", "acrylic"], ["l-shape", "u-shape"], ["cost-per-sqft"], ["modular-kitchen-buying-guide", "modular-kitchen-checklist"], ["modular-kitchen-delhi"], 3),
  createEntry("modular-kitchen-interior-design-tips", "planning", "Interior Design Tips",
    ["acrylic", "glass", "veneer"], ["l-shape", "island", "u-shape"], ["luxury", "cost-per-sqft"], ["how-to-plan-modular-kitchen", "choosing-kitchen-layout-guide"], ["modular-kitchen-delhi", "l-shape-modular-kitchen"], 4),
  // Planning
  createEntry("how-to-plan-modular-kitchen", "planning", "How to Plan a Modular Kitchen",
    ["laminate", "acrylic"], ["l-shape", "u-shape", "parallel"], ["cost-per-sqft"], ["modular-kitchen-buying-guide", "modular-kitchen-checklist"], ["modular-kitchen-delhi", "l-shape-modular-kitchen"], 5),
  createEntry("modular-kitchen-buying-guide", "planning", "Modular Kitchen Buying Guide",
    ["acrylic", "laminate", "pu"], ["l-shape", "parallel"], ["cost-per-sqft", "cost-delhi"], ["how-to-plan-modular-kitchen", "modular-kitchen-checklist"], ["modular-kitchen-delhi", "acrylic-modular-kitchen"], 5),
  createEntry("modular-kitchen-installation-guide", "planning", "Installation Guide",
    ["laminate", "acrylic"], ["l-shape", "straight"], ["cost-per-sqft"], ["how-to-plan-modular-kitchen", "modular-kitchen-checklist"], ["modular-kitchen-delhi"], 3),
  createEntry("modular-kitchen-checklist", "planning", "Kitchen Checklist",
    ["laminate", "acrylic", "pu"], ["l-shape", "u-shape", "parallel"], ["cost-per-sqft"], ["how-to-plan-modular-kitchen", "modular-kitchen-buying-guide"], ["modular-kitchen-delhi"], 4),
  createEntry("choosing-kitchen-layout-guide", "planning", "Choosing the Right Layout",
    ["laminate", "acrylic"], ["l-shape", "u-shape", "parallel", "straight", "island"], ["cost-per-sqft"], ["l-shape-vs-parallel-modular-kitchen", "how-to-plan-modular-kitchen"], ["l-shape-modular-kitchen", "modular-kitchen-delhi"], 5),
  // Budget
  createEntry("modular-kitchen-cost-guide", "budget", "Complete Cost Guide",
    ["laminate", "acrylic", "pu"], ["l-shape", "u-shape", "parallel"], ["cost-per-sqft", "cost-delhi", "1-lakh", "2-lakh", "luxury"], ["how-to-reduce-kitchen-cost", "modular-kitchen-under-2-lakh"], ["modular-kitchen-delhi"], 5),
  createEntry("how-to-reduce-kitchen-cost", "budget", "How to Reduce Kitchen Cost",
    ["laminate", "pvc", "membrane"], ["straight", "l-shape"], ["1-lakh", "2-lakh", "cost-per-sqft"], ["modular-kitchen-cost-guide", "modular-kitchen-under-1-lakh"], ["modular-kitchen-delhi"], 4),
  createEntry("modular-kitchen-under-1-lakh", "budget", "Under \u20B91 Lakh Kitchen",
    ["pvc", "laminate", "membrane"], ["straight"], ["1-lakh"], ["how-to-reduce-kitchen-cost", "modular-kitchen-under-2-lakh"], ["modular-kitchen-delhi"], 4),
  createEntry("modular-kitchen-under-2-lakh", "budget", "Under \u20B92 Lakh Kitchen",
    ["laminate", "membrane", "pvc"], ["straight", "l-shape"], ["2-lakh", "1-lakh"], ["modular-kitchen-under-1-lakh", "modular-kitchen-under-3-lakh"], ["modular-kitchen-delhi"], 4),
  { ...createEntry("modular-kitchen-under-3-lakh", "budget", "Under \u20B93 Lakh Kitchen",
    ["laminate", "acrylic", "membrane"], ["l-shape", "parallel"], ["2-lakh"], ["modular-kitchen-under-2-lakh", "modular-kitchen-cost-guide"], ["modular-kitchen-delhi", "l-shape-modular-kitchen"], 4), status: "draft" as const },
];

export function getGuideEntry(slug: string): KitchenGuideEntry | undefined {
  return KITCHEN_GUIDE_REGISTRY.find((entry) => entry.slug === slug);
}

export function buildGuideFaqs(entry: KitchenGuideEntry): readonly { q: string; a: string }[] {
  const m0 = entry.relatedMaterials[0] ?? "laminate";
  const m1 = entry.relatedMaterials[1] ?? m0;
  const l0 = entry.relatedLayouts[0] ?? "l-shape";
  const l1 = entry.relatedLayouts[1] ?? l0;
  const n = entry.name.toLowerCase();
  const templates: Record<GuideCategory, readonly { q: string; a: string }[]> = {
    comparison: [
      { q: `What is the difference between ${n}?`, a: `They differ in finish quality, durability, maintenance needs and price — each suits different kitchen styles and budgets.` },
      { q: `Which is more durable, ${m0} or ${m1}?`, a: `Durability depends on humidity and daily wear. Compare ${m0} and ${m1} based on your kitchen environment and usage patterns.` },
      { q: `Which option is more budget-friendly?`, a: `Pricing varies by brand and quality tier. One typically offers better value for budget builds while the other suits premium kitchens.` },
      { q: `Does ${m0} work well in ${l0} layouts?`, a: `Yes, ${m0} pairs well with ${l0} kitchens due to its surface properties. Consider your space dimensions and natural lighting.` },
      { q: `How do I decide between ${n}?`, a: `Weigh your budget, kitchen size, maintenance preference and local climate. Visit a FurniRevive showroom to compare samples side by side.` },
    ],
    planning: [
      { q: `How do I get started with ${n}?`, a: `Begin by measuring your kitchen space, setting a realistic budget and shortlisting layouts like ${l0} or ${l1}.` },
      { q: `What materials suit a ${l0} kitchen?`, a: `For ${l0} layouts, ${m0} and ${m1} balance durability, aesthetics and cost effectively for most Indian homes.` },
      { q: `How long does a modular kitchen project take?`, a: `Most installations take 25–45 days from measurement to handover depending on complexity and material availability.` },
      { q: `Do I need a professional designer?`, a: `Professional designers ensure optimal space utilisation and correct measurements. FurniRevive offers free design consultations.` },
      { q: `What common mistakes should I avoid?`, a: `Avoid ignoring the work triangle, prioritising style over function, underestimating storage needs and skipping quality hardware.` },
    ],
    budget: [
      { q: `What does a ${n} typically cost?`, a: `Costs depend on layout, materials and accessories chosen. Our guide covers ${l0} and ${l1} configurations in detail.` },
      { q: `Can I get a ${l0} kitchen within this budget?`, a: `Yes — a ${l0} kitchen is achievable with smart material choices like ${m0} or ${m1} and prioritising essential modules.` },
      { q: `Which materials keep costs low?`, a: `${m0} and ${m1} offer excellent value without compromising on appearance or basic durability for budget-conscious builds.` },
      { q: `How else can I reduce kitchen costs?`, a: `Choose standard cabinet sizes, fewer upper units, affordable finishes and focus spending on high-use zones first.` },
      { q: `Is this budget realistic in Indian metros?`, a: `Yes, with careful planning and the right vendor. FurniRevive offers transparent pricing with no hidden charges across metros.` },
    ],
  };
  return templates[entry.category];
}
