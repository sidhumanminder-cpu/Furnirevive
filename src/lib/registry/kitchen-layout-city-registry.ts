/**
 * Kitchen Layout × City Registry
 * 6 layouts × 5 cities = 30 programmatic SEO pages.
 * URL pattern: /{layout}-modular-kitchen-{city}
 * e.g. /l-shape-modular-kitchen-delhi
 */

export type KitchenLayoutCityEntry = {
  id: string;
  slug: string;
  layoutSlug: string;
  citySlug: string;
  layoutName: string;
  cityName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  priceMin: number;
  priceMax: number;
  layoutDescription: string;
  bestFor: string;
  minSqFt: number;
  maxSqFt: number;
  cityApartmentTypes: string;
  whyThisCityPoints: readonly string[];
  relatedLayouts: readonly string[];
  sameCities: readonly string[];
  faqs: readonly { q: string; a: string }[];
};

// City price multipliers relative to baseline (Noida = 1.0)
const CITY_MULTIPLIERS: Record<string, number> = {
  delhi: 1.1,
  gurgaon: 1.25,
  noida: 1.0,
  faridabad: 0.88,
  ghaziabad: 0.85,
};

const CITY_DISPLAY: Record<string, { name: string; apartmentTypes: string; whyPoints: string[] }> = {
  delhi: {
    name: "Delhi",
    apartmentTypes: "South Delhi villas, DDA flats, and North Delhi builder floors",
    whyPoints: [
      "Delhi kitchens frequently have space constraints that demand efficient layouts",
      "High-quality craftsmanship expectations from South Delhi clientele",
      "Wide range of housing types from DDA flats to independent bungalows",
      "Metro connectivity means swift delivery and installation across all zones",
    ],
  },
  gurgaon: {
    name: "Gurgaon",
    apartmentTypes: "DLF high-rises, Sohna Road societies, and Golf Course Road villas",
    whyPoints: [
      "Gurgaon apartments and villas typically have dedicated open kitchen spaces",
      "Premium hardware expectations from Golf Course Road and DLF clientele",
      "Modern open-plan layouts widely adopted in new Gurgaon constructions",
      "Corporate expat community demands international-grade kitchen quality",
    ],
  },
  noida: {
    name: "Noida",
    apartmentTypes: "Sector 150 towers, Indirapuram apartments, and Greater Noida societies",
    whyPoints: [
      "Noida's newer residential towers support larger dedicated kitchen areas",
      "IT professional clientele values both aesthetics and functional storage",
      "Greater Noida and Sector 150 projects frequently specify premium finishes",
      "Proximity to manufacturing hubs keeps modular kitchen costs competitive",
    ],
  },
  faridabad: {
    name: "Faridabad",
    apartmentTypes: "NIT independent houses, Neharpar apartments, and Sector builder floors",
    whyPoints: [
      "Faridabad independent houses offer flexible kitchen dimensions for all layouts",
      "Growing Neharpar developments increasingly adopting modular kitchen concepts",
      "Competitive pricing advantage without compromising on quality or warranty",
      "Ballabhgarh and Old Faridabad areas have strong demand for kitchen upgrades",
    ],
  },
  ghaziabad: {
    name: "Ghaziabad",
    apartmentTypes: "Indirapuram societies, Vaishali apartments, and Raj Nagar Extension projects",
    whyPoints: [
      "Ghaziabad's high-density apartment stock demands space-efficient kitchen designs",
      "Indirapuram and Vaishali residents are experienced modular kitchen buyers",
      "Affordable pricing brackets make full kitchen upgrades accessible to mid-income buyers",
      "Crossings Republik and Raj Nagar Extension have youngest housing stock in the NCR",
    ],
  },
};

const LAYOUT_DATA: Record<string, {
  shortName: string;
  description: string;
  bestFor: string;
  minSqFt: number;
  maxSqFt: number;
  baseCostMin: number;
  baseCostMax: number;
}> = {
  "l-shape": {
    shortName: "L-Shape",
    description: "Two adjacent walls forming an L — the most popular layout in Indian homes for efficient corner utilisation and natural work triangle.",
    bestFor: "Medium kitchens (80–150 sq ft) with two adjacent walls and open dining areas",
    minSqFt: 80,
    maxSqFt: 150,
    baseCostMin: 150000,
    baseCostMax: 500000,
  },
  "u-shape": {
    shortName: "U-Shape",
    description: "Three connected walls wrapping the cook on three sides — maximum storage and counter space for serious cooking households.",
    bestFor: "Large kitchens (120–200 sq ft) that need maximum storage and multiple work zones",
    minSqFt: 120,
    maxSqFt: 200,
    baseCostMin: 200000,
    baseCostMax: 650000,
  },
  "parallel": {
    shortName: "Parallel",
    description: "Two parallel countertops facing each other — highly efficient for linear workflow and ideal for homes where two people cook together.",
    bestFor: "Long narrow kitchens (80–140 sq ft) with high cooking frequency",
    minSqFt: 80,
    maxSqFt: 140,
    baseCostMin: 130000,
    baseCostMax: 420000,
  },
  "straight": {
    shortName: "Straight",
    description: "Single-wall compact layout — everything in a clean line, ideal for studio apartments and compact city homes.",
    bestFor: "Small kitchens and studio apartments (40–80 sq ft)",
    minSqFt: 40,
    maxSqFt: 80,
    baseCostMin: 80000,
    baseCostMax: 250000,
  },
  "island": {
    shortName: "Island",
    description: "A central island counter — the ultimate open-plan kitchen statement for luxury villas and large homes.",
    bestFor: "Luxury open-plan homes (180–400 sq ft kitchen) with social cooking lifestyle",
    minSqFt: 180,
    maxSqFt: 400,
    baseCostMin: 350000,
    baseCostMax: 1200000,
  },
  "peninsula": {
    shortName: "Peninsula",
    description: "An island attached on one end — extra counter and seating without needing the full footprint of a standalone island.",
    bestFor: "Medium-large kitchens (140–250 sq ft) needing extra counter and breakfast bar",
    minSqFt: 140,
    maxSqFt: 250,
    baseCostMin: 250000,
    baseCostMax: 750000,
  },
};

const ALL_LAYOUTS = ["l-shape", "u-shape", "parallel", "straight", "island", "peninsula"];
const ALL_CITIES = ["delhi", "gurgaon", "noida", "faridabad", "ghaziabad"];

function fmtLakh(n: number): string {
  if (n >= 100000) return `\u20B9${(n / 100000).toFixed(1).replace(".0", "")} lakh`;
  return `\u20B9${(n / 1000).toFixed(0)}K`;
}

function buildFaqs(
  layoutName: string,
  cityName: string,
  priceMin: number,
  priceMax: number,
  minSqFt: number,
  maxSqFt: number,
): readonly { q: string; a: string }[] {
  const fmt = (n: number) =>
    n >= 100000 ? `\u20B9${(n / 100000).toFixed(1).replace(".0", "")} lakh` : `\u20B9${n.toLocaleString()}`;
  return [
    {
      q: `What is the cost of a ${layoutName} modular kitchen in ${cityName}?`,
      a: `A ${layoutName} modular kitchen in ${cityName} typically costs between ${fmt(priceMin)} and ${fmt(priceMax)} depending on size, material finish, and hardware brand. Budget builds with laminate shutters start lower; premium PU or glass finishes go higher.`,
    },
    {
      q: `What kitchen size is ideal for a ${layoutName} layout?`,
      a: `The ${layoutName} layout works best in kitchens between ${minSqFt} and ${maxSqFt} sq ft. Our designers will visit your home and recommend the optimal configuration for your exact dimensions.`,
    },
    {
      q: `How long does installation take in ${cityName}?`,
      a: `Most ${layoutName} kitchen installations in ${cityName} are completed in 7–12 working days, including site preparation, cabinet fitting, countertop installation, and final hardware adjustment.`,
    },
    {
      q: `Does FurniRevive offer a warranty on ${layoutName} kitchens in ${cityName}?`,
      a: `Yes. All FurniRevive modular kitchens come with a 10-year structural warranty on the cabinet carcass and a 1-year service warranty on hardware. This applies to all installations across ${cityName}.`,
    },
    {
      q: `Can a ${layoutName} kitchen be customised for my apartment in ${cityName}?`,
      a: `Absolutely. Our design team makes a free home visit, takes precise measurements, and creates a 3D design specific to your kitchen's dimensions. Every ${layoutName} kitchen is built to your exact specifications.`,
    },
  ] as const;
}

function buildEntry(layoutSlug: string, citySlug: string): KitchenLayoutCityEntry {
  const layout = LAYOUT_DATA[layoutSlug];
  const city = CITY_DISPLAY[citySlug];
  const mult = CITY_MULTIPLIERS[citySlug];
  const slug = `${layoutSlug}-modular-kitchen-${citySlug}`;
  const priceMin = Math.round((layout.baseCostMin * mult) / 10000) * 10000;
  const priceMax = Math.round((layout.baseCostMax * mult) / 10000) * 10000;

  const priceMinFmt = fmtLakh(priceMin);

  return {
    id: `klc_${layoutSlug.replace(/-/g, "_")}_${citySlug}`,
    slug,
    layoutSlug,
    citySlug,
    layoutName: layout.shortName,
    cityName: city.name,
    h1: `${layout.shortName} Modular Kitchen in ${city.name}`,
    metaTitle: `${layout.shortName} Modular Kitchen in ${city.name} | Cost, Design & Installation`,
    metaDescription: `${layout.shortName} modular kitchen in ${city.name} — custom design, transparent pricing from ${priceMinFmt}, 10-year warranty. Free home visit for ${city.apartmentTypes}.`,
    heroSubtext: `Custom ${layout.shortName.toLowerCase()} modular kitchens for ${city.apartmentTypes}. Transparent pricing from ${priceMinFmt} to ${fmtLakh(priceMax)}, 10-year structural warranty.`,
    priceMin,
    priceMax,
    layoutDescription: layout.description,
    bestFor: layout.bestFor,
    minSqFt: layout.minSqFt,
    maxSqFt: layout.maxSqFt,
    cityApartmentTypes: city.apartmentTypes,
    whyThisCityPoints: city.whyPoints,
    relatedLayouts: ALL_LAYOUTS.filter((l) => l !== layoutSlug),
    sameCities: ALL_CITIES.filter((c) => c !== citySlug),
    faqs: buildFaqs(layout.shortName, city.name, priceMin, priceMax, layout.minSqFt, layout.maxSqFt),
  };
}

export const KITCHEN_LAYOUT_CITY_REGISTRY: readonly KitchenLayoutCityEntry[] = ALL_LAYOUTS.flatMap((layoutSlug) =>
  ALL_CITIES.map((citySlug) => buildEntry(layoutSlug, citySlug))
);

export function getLayoutCityEntry(slug: string): KitchenLayoutCityEntry | undefined {
  return KITCHEN_LAYOUT_CITY_REGISTRY.find((e) => e.slug === slug);
}
