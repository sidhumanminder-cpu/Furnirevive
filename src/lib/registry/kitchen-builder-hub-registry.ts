/**
 * Builder Hub Registry — Batch 6 Phase A
 * 12 builder hubs at /{builder}-modular-kitchen
 * Tier A (92–95): dlf, m3m, ats, godrej
 * Tier B (85–90): emaar, tata, mahagun, ireo
 * Tier C (78–84): supertech, gaur, saya, bptp
 */

export type BuilderTier = "A" | "B" | "C";

export type KitchenBuilderHubEntry = {
  urlSlug: string;
  builderSlug: string;
  builderName: string;
  builderFullName: string;
  builderTier: BuilderTier;
  builderAuthorityScore: number;
  citySlug: "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad";
  cityName: string;
  projectSlugs: string[];
  priceMin: number;
  priceMax: number;
  typicalKitchenSizes: string[];
  recommendedLayouts: { slug: string; label: string }[];
  recommendedMaterials: { slug: string; label: string }[];
  whyCustom: string;
  nearbyBuilders: string[];
};

export const KITCHEN_BUILDER_HUB_REGISTRY: KitchenBuilderHubEntry[] = [
  // ─── Tier A ───────────────────────────────────────────────────────────────

  {
    urlSlug: "dlf-modular-kitchen",
    builderSlug: "dlf",
    builderName: "DLF",
    builderFullName: "DLF Limited",
    builderTier: "A",
    builderAuthorityScore: 95,
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    projectSlugs: [
      "dlf-the-crest",
      "dlf-camellias",
      "dlf-magnolias",
      "dlf-aralias",
    ],
    priceMin: 180000,
    priceMax: 800000,
    typicalKitchenSizes: ["10–14 running feet", "Open-plan 180–220 sq ft", "Island + parallel 250+ sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "u-shape", label: "U-Shape" },
      { slug: "parallel", label: "Parallel / Island" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "pu", label: "PU Finish" },
      { slug: "glass", label: "Glass" },
    ],
    whyCustom: "DLF apartments are built to large footprints with open kitchen concepts — standard off-the-shelf modules rarely fit. Custom modular kitchens are measured and CNC-cut to exact DLF slab dimensions, ensuring zero gaps, full use of corner space, and a finish that matches the apartment's premium interiors.",
    nearbyBuilders: ["m3m", "emaar", "ireo"],
  },

  {
    urlSlug: "m3m-modular-kitchen",
    builderSlug: "m3m",
    builderName: "M3M",
    builderFullName: "M3M India",
    builderTier: "A",
    builderAuthorityScore: 92,
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    projectSlugs: [
      "m3m-golf-estate",
      "m3m-merlin",
      "m3m-heights",
    ],
    priceMin: 160000,
    priceMax: 700000,
    typicalKitchenSizes: ["9–13 running feet", "Open-plan 150–200 sq ft", "Island kitchen 200–240 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
      { slug: "u-shape", label: "U-Shape" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "pu", label: "PU Finish" },
      { slug: "membrane", label: "Membrane" },
    ],
    whyCustom: "M3M residences feature high-ceiling open kitchens with non-standard slab cuts. Tall units up to 2400mm are often required to use the full wall height. Custom modular kitchens are designed with M3M-specific ceiling heights, beam positions, and utility shaft locations to achieve a seamless, furniture-grade result.",
    nearbyBuilders: ["dlf", "emaar", "tata"],
  },

  {
    urlSlug: "ats-modular-kitchen",
    builderSlug: "ats",
    builderName: "ATS",
    builderFullName: "ATS Infrastructure",
    builderTier: "A",
    builderAuthorityScore: 90,
    citySlug: "noida",
    cityName: "Noida",
    projectSlugs: [
      "ats-pristine",
      "ats-greens",
      "ats-one-hamlet",
    ],
    priceMin: 140000,
    priceMax: 550000,
    typicalKitchenSizes: ["8–12 running feet", "Semi-open 120–170 sq ft", "L-shape 140–180 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "straight", label: "Straight" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "laminate", label: "Laminate" },
      { slug: "membrane", label: "Membrane" },
    ],
    whyCustom: "ATS apartments have well-defined kitchen bays that benefit significantly from custom-fitted modules. The standard 2–3 BHK kitchen in ATS Pristine or ATS Greens measures 8–12 running feet, making an L-shape or straight modular kitchen the ideal solution for maximising storage without wasting even a centimetre.",
    nearbyBuilders: ["godrej", "mahagun", "supertech"],
  },

  {
    urlSlug: "godrej-modular-kitchen",
    builderSlug: "godrej",
    builderName: "Godrej",
    builderFullName: "Godrej Properties",
    builderTier: "A",
    builderAuthorityScore: 90,
    citySlug: "noida",
    cityName: "Noida",
    projectSlugs: [
      "godrej-woods",
      "godrej-south-estate",
    ],
    priceMin: 150000,
    priceMax: 600000,
    typicalKitchenSizes: ["8–13 running feet", "Open-plan 140–180 sq ft", "L-shape 130–170 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "u-shape", label: "U-Shape" },
      { slug: "straight", label: "Straight" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "pu", label: "PU Finish" },
      { slug: "laminate", label: "Laminate" },
    ],
    whyCustom: "Godrej Properties residences across Noida and Delhi are known for their thoughtful space planning. Kitchen areas are designed for efficiency, and a well-fitted modular kitchen — with custom heights matching Godrej's slab-to-ceiling dimensions — dramatically improves both storage and aesthetics in these homes.",
    nearbyBuilders: ["ats", "mahagun", "emaar"],
  },

  // ─── Tier B ───────────────────────────────────────────────────────────────

  {
    urlSlug: "emaar-modular-kitchen",
    builderSlug: "emaar",
    builderName: "Emaar",
    builderFullName: "Emaar India",
    builderTier: "B",
    builderAuthorityScore: 88,
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    projectSlugs: [
      "emaar-palm-drive",
    ],
    priceMin: 160000,
    priceMax: 650000,
    typicalKitchenSizes: ["10–14 running feet", "Open-plan 160–200 sq ft", "Island kitchen 220+ sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
      { slug: "u-shape", label: "U-Shape" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "pu", label: "PU Finish" },
      { slug: "glass", label: "Glass" },
    ],
    whyCustom: "Emaar India properties in Gurgaon feature large open-plan kitchen zones that are difficult to fit with stock modules. The open kitchen concept common in Emaar Palm Drive benefits from custom-sized island units and tall cabinets designed to match the apartment's European-inspired interior language.",
    nearbyBuilders: ["dlf", "m3m", "ireo"],
  },

  {
    urlSlug: "tata-modular-kitchen",
    builderSlug: "tata",
    builderName: "Tata",
    builderFullName: "Tata Housing",
    builderTier: "B",
    builderAuthorityScore: 86,
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    projectSlugs: [
      "tata-primanti",
    ],
    priceMin: 150000,
    priceMax: 580000,
    typicalKitchenSizes: ["9–13 running feet", "Semi-open 140–180 sq ft", "L-shape 150–190 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "u-shape", label: "U-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "membrane", label: "Membrane" },
      { slug: "laminate", label: "Laminate" },
    ],
    whyCustom: "Tata Housing projects like Primanti in Gurgaon are designed for quality-conscious buyers who want lasting build quality. Custom modular kitchens aligned with Tata's superior construction standards — using BWR ply, CNC-cut modules, and premium hardware — are a natural complement to these thoughtfully built homes.",
    nearbyBuilders: ["m3m", "emaar", "dlf"],
  },

  {
    urlSlug: "mahagun-modular-kitchen",
    builderSlug: "mahagun",
    builderName: "Mahagun",
    builderFullName: "Mahagun India",
    builderTier: "B",
    builderAuthorityScore: 85,
    citySlug: "noida",
    cityName: "Noida",
    projectSlugs: [
      "mahagun-moderne",
      "mahagun-mezzaria",
    ],
    priceMin: 130000,
    priceMax: 500000,
    typicalKitchenSizes: ["8–12 running feet", "Closed 110–150 sq ft", "Semi-open 140–180 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "straight", label: "Straight" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "laminate", label: "Laminate" },
      { slug: "acrylic", label: "Acrylic" },
      { slug: "membrane", label: "Membrane" },
    ],
    whyCustom: "Mahagun projects cater to a wide range of budgets — from mid-range Moderne to premium Mezzaria. The kitchen dimensions vary significantly between unit types. A custom modular kitchen fitted precisely to your Mahagun unit's slab dimensions ensures no dead space, better ventilation access, and a professional finish from day one.",
    nearbyBuilders: ["ats", "godrej", "supertech"],
  },

  {
    urlSlug: "ireo-modular-kitchen",
    builderSlug: "ireo",
    builderName: "Ireo",
    builderFullName: "Ireo Private Limited",
    builderTier: "B",
    builderAuthorityScore: 85,
    citySlug: "gurgaon",
    cityName: "Gurgaon",
    projectSlugs: [
      "ireo-victory-valley",
    ],
    priceMin: 160000,
    priceMax: 620000,
    typicalKitchenSizes: ["10–14 running feet", "Open-plan 160–200 sq ft", "L-shape 150–200 sq ft"],
    recommendedLayouts: [
      { slug: "l-shape", label: "L-Shape" },
      { slug: "u-shape", label: "U-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "acrylic", label: "Acrylic" },
      { slug: "pu", label: "PU Finish" },
      { slug: "glass", label: "Glass" },
    ],
    whyCustom: "Ireo Victory Valley residences are designed around premium living, with generous kitchen bays meant for full custom fit-outs. The large open kitchen concept in these Gurgaon apartments requires carefully measured modular units, island extensions, and tall cabinetry — all achievable with a custom FurniRevive installation.",
    nearbyBuilders: ["dlf", "m3m", "emaar"],
  },

  // ─── Tier C ───────────────────────────────────────────────────────────────

  {
    urlSlug: "supertech-modular-kitchen",
    builderSlug: "supertech",
    builderName: "Supertech",
    builderFullName: "Supertech Limited",
    builderTier: "C",
    builderAuthorityScore: 82,
    citySlug: "noida",
    cityName: "Noida",
    projectSlugs: [
      "supertech-capetown",
      "supertech-ecovillage",
    ],
    priceMin: 90000,
    priceMax: 380000,
    typicalKitchenSizes: ["7–10 running feet", "Compact 90–130 sq ft", "L-shape 110–150 sq ft"],
    recommendedLayouts: [
      { slug: "straight", label: "Straight" },
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "laminate", label: "Laminate" },
      { slug: "membrane", label: "Membrane" },
      { slug: "acrylic", label: "Acrylic" },
    ],
    whyCustom: "Supertech apartments across Noida are popular first-home purchases. Compact kitchen layouts in 2 BHK and 3 BHK units benefit greatly from custom modular kitchens that squeeze every centimetre of storage from a 7–10 ft kitchen bay — something pre-made furniture simply cannot deliver.",
    nearbyBuilders: ["ats", "mahagun", "gaur"],
  },

  {
    urlSlug: "gaur-modular-kitchen",
    builderSlug: "gaur",
    builderName: "Gaur",
    builderFullName: "Gaursons India",
    builderTier: "C",
    builderAuthorityScore: 80,
    citySlug: "ghaziabad",
    cityName: "Ghaziabad",
    projectSlugs: [
      "gaur-city",
      "gaur-cascades",
    ],
    priceMin: 80000,
    priceMax: 320000,
    typicalKitchenSizes: ["7–10 running feet", "Compact 85–120 sq ft", "L-shape 100–140 sq ft"],
    recommendedLayouts: [
      { slug: "straight", label: "Straight" },
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "laminate", label: "Laminate" },
      { slug: "membrane", label: "Membrane" },
      { slug: "acrylic", label: "Acrylic" },
    ],
    whyCustom: "Gaur City and Gaur Cascades are among Ghaziabad's largest township projects with thousands of apartments across multiple phases. A modular kitchen custom-fitted to your Gaur unit dimensions — with correct chimney cutouts, utility shaft allowances, and exact slab clearances — ensures a professional kitchen from possession day.",
    nearbyBuilders: ["supertech", "saya", "ats"],
  },

  {
    urlSlug: "saya-modular-kitchen",
    builderSlug: "saya",
    builderName: "Saya",
    builderFullName: "Saya Group",
    builderTier: "C",
    builderAuthorityScore: 79,
    citySlug: "ghaziabad",
    cityName: "Ghaziabad",
    projectSlugs: [
      "saya-gold-avenue",
    ],
    priceMin: 85000,
    priceMax: 340000,
    typicalKitchenSizes: ["7–10 running feet", "Compact 90–130 sq ft", "Semi-open 120–160 sq ft"],
    recommendedLayouts: [
      { slug: "straight", label: "Straight" },
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "laminate", label: "Laminate" },
      { slug: "acrylic", label: "Acrylic" },
      { slug: "membrane", label: "Membrane" },
    ],
    whyCustom: "Saya Gold Avenue is a prominent high-rise township in Ghaziabad with a large resident community. The kitchen areas in these apartments are compact but well-proportioned for modular fit-outs. A custom kitchen designed specifically for Saya Gold Avenue's slab dimensions avoids the gaps and compromises of generic furniture.",
    nearbyBuilders: ["gaur", "supertech", "bptp"],
  },

  {
    urlSlug: "bptp-modular-kitchen",
    builderSlug: "bptp",
    builderName: "BPTP",
    builderFullName: "BPTP Limited",
    builderTier: "C",
    builderAuthorityScore: 78,
    citySlug: "faridabad",
    cityName: "Faridabad",
    projectSlugs: [
      "bptp-parklands",
    ],
    priceMin: 75000,
    priceMax: 300000,
    typicalKitchenSizes: ["7–9 running feet", "Compact 80–120 sq ft", "L-shape 95–130 sq ft"],
    recommendedLayouts: [
      { slug: "straight", label: "Straight" },
      { slug: "l-shape", label: "L-Shape" },
      { slug: "parallel", label: "Parallel" },
    ],
    recommendedMaterials: [
      { slug: "laminate", label: "Laminate" },
      { slug: "membrane", label: "Membrane" },
      { slug: "acrylic", label: "Acrylic" },
    ],
    whyCustom: "BPTP Parklands in Faridabad is a large township that has attracted thousands of first-time homeowners. The compact kitchen bays in BPTP's 2 BHK and 3 BHK layouts benefit from a precisely measured modular kitchen — maximising every inch of storage and achieving a clean, professional look that pre-made furniture cannot match.",
    nearbyBuilders: ["gaur", "saya", "supertech"],
  },
];

export function getBuilderHubEntry(builderSlug: string): KitchenBuilderHubEntry | undefined {
  return KITCHEN_BUILDER_HUB_REGISTRY.find((e) => e.builderSlug === builderSlug);
}

export function buildBuilderHubFaqs(entry: KitchenBuilderHubEntry): readonly { q: string; a: string }[] {
  const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
  return [
    {
      q: `How much does a modular kitchen cost in a ${entry.builderName} apartment?`,
      a: `A modular kitchen in a ${entry.builderName} apartment typically ranges from ${fmt(entry.priceMin)} to ${fmt(entry.priceMax)} depending on the unit size, finish (laminate, acrylic, PU), hardware grade, and accessories. The starting price covers a standard straight or L-shape with laminate shutters and BWR ply carcass. A free detailed quote is provided after a site measurement visit.`,
    },
    {
      q: `What is the most popular kitchen layout for ${entry.builderName} apartments?`,
      a: `The most popular layout for ${entry.builderName} apartments is the ${entry.recommendedLayouts[0]?.label ?? "L-Shape"} — it fits the typical kitchen bay dimensions well and provides good counter and storage space. For larger premium units, a ${entry.recommendedLayouts[1]?.label ?? "U-Shape"} or parallel layout with an island extension is increasingly popular.`,
    },
    {
      q: `Which kitchen finish is best for a ${entry.builderName} home?`,
      a: `For ${entry.builderName} homes, we recommend ${entry.recommendedMaterials[0]?.label ?? "acrylic"} for a premium, easy-clean surface, or ${entry.recommendedMaterials[1]?.label ?? "laminate"} for the best value. ${entry.builderTier === "A" ? `${entry.recommendedMaterials[2]?.label ?? "PU finish"} is also popular in the higher-end ${entry.builderName} projects for its furniture-grade satin sheen.` : "Laminate is the most practical and durable everyday choice for most residents."}`,
    },
    {
      q: `How long does it take to install a modular kitchen in a ${entry.builderName} apartment?`,
      a: `Installation typically takes 10–14 days from the date of factory dispatch. We visit your ${entry.builderName} apartment for a free site measurement, produce 3D designs within 48 hours of approval, and schedule manufacturing. Possession-ready installations can be planned before you move in to avoid living in a construction site.`,
    },
    {
      q: `Does FurniRevive have experience with ${entry.builderName} apartment kitchens?`,
      a: `Yes. FurniRevive has completed modular kitchen installations in ${entry.builderName} projects and is familiar with the typical slab dimensions, beam positions, utility shaft locations, and ceiling heights common in these apartments. This allows us to design kitchens that fit perfectly without on-site cutting or adjustments.`,
    },
  ] as const;
}
