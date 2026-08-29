/**
 * Kitchen Material × City Registry
 * 3 materials × 5 cities = 15 programmatic SEO pages.
 * URL pattern: /{material}-modular-kitchen-{city}
 * e.g. /acrylic-modular-kitchen-delhi
 */

export type KitchenMaterialCityEntry = {
  id: string;
  slug: string;
  materialSlug: string;
  citySlug: string;
  materialName: string;
  cityName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtext: string;
  priceMin: number;
  priceMax: number;
  materialDescription: string;
  finishOptions: readonly string[];
  bestFor: string;
  durability: string;
  maintenance: string;
  cityApartmentTypes: string;
  whyThisCityPoints: readonly string[];
  relatedMaterials: readonly string[];
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
      "Delhi homeowners prefer high-gloss and premium-finish kitchens to match contemporary interiors",
      "High-quality craftsmanship expectations from South Delhi and Lutyens Zone clientele",
      "Wide range of housing types — DDA flats to independent bungalows — suits every budget tier",
      "Metro connectivity ensures swift delivery and installation across all zones of Delhi",
    ],
  },
  gurgaon: {
    name: "Gurgaon",
    apartmentTypes: "DLF high-rises, Sohna Road societies, and Golf Course Road villas",
    whyPoints: [
      "Gurgaon's premium apartment stock demands international-grade kitchen finish quality",
      "Corporate expat and C-suite clientele routinely opt for high-end finishes like PU and acrylic",
      "Open-plan kitchens in new Gurgaon constructions showcase material quality more prominently",
      "Golf Course Road and DLF Phase 5 projects frequently specify premium countertop materials",
    ],
  },
  noida: {
    name: "Noida",
    apartmentTypes: "Sector 150 towers, Indirapuram apartments, and Greater Noida societies",
    whyPoints: [
      "Noida's growing IT professional base values both aesthetics and durable low-maintenance finishes",
      "Greater Noida and Sector 150 luxury projects increasingly specify premium shutter finishes",
      "Proximity to manufacturing hubs keeps modular kitchen material costs competitive in Noida",
      "Newer residential towers have larger kitchen footprints, making finish quality more impactful",
    ],
  },
  faridabad: {
    name: "Faridabad",
    apartmentTypes: "NIT independent houses, Neharpar apartments, and Sector builder floors",
    whyPoints: [
      "Faridabad's growing Neharpar township has strong demand for affordable yet stylish finishes",
      "Independent house owners appreciate the design flexibility of laminate and acrylic options",
      "Competitive pricing makes full kitchen makeovers with premium finishes accessible here",
      "Ballabhgarh and Old Faridabad areas are witnessing a strong kitchen renovation wave",
    ],
  },
  ghaziabad: {
    name: "Ghaziabad",
    apartmentTypes: "Indirapuram societies, Vaishali apartments, and Raj Nagar Extension projects",
    whyPoints: [
      "Ghaziabad apartment owners favour low-maintenance finishes due to high-density living conditions",
      "Indirapuram and Vaishali residents are experienced modular kitchen buyers seeking value-for-money",
      "Crossings Republik and Raj Nagar Extension have the youngest housing stock — prime for kitchen upgrades",
      "Affordable pricing brackets make full kitchen upgrades with quality finishes accessible to all",
    ],
  },
};

const MATERIAL_DATA: Record<string, {
  displayName: string;
  description: string;
  finishOptions: string[];
  bestFor: string;
  durability: string;
  maintenance: string;
  baseCostMin: number;
  baseCostMax: number;
  relatedMaterials: string[];
  faqs: (priceMin: number, priceMax: number, cityName: string) => readonly { q: string; a: string }[];
}> = {
  acrylic: {
    displayName: "Acrylic",
    description: "Acrylic shutters feature a mirror-like high-gloss surface achieved by bonding an acrylic sheet over MDF board. The result is a reflective, smooth finish that makes kitchens appear larger and more luxurious — the most popular premium finish in urban Indian homes.",
    finishOptions: ["High-gloss mirror", "Metallic gloss", "Solid colour gloss", "Multicolour panels"],
    bestFor: "Modern kitchens needing a bright, premium look with wide colour selection",
    durability: "Medium (3–5 years with care; vulnerable to direct scratches)",
    maintenance: "Medium (wipe with soft microfibre; avoid abrasive cleaners)",
    baseCostMin: 150000,
    baseCostMax: 300000,
    relatedMaterials: ["laminate", "pu"],
    faqs: (priceMin, priceMax, cityName) => [
      {
        q: `How much does an acrylic modular kitchen cost in ${cityName}?`,
        a: `An acrylic modular kitchen in ${cityName} typically costs between ₹${(priceMin / 100000).toFixed(1)}L and ₹${(priceMax / 100000).toFixed(1)}L for a standard 10-running-foot kitchen. The price varies based on cabinet configuration, hardware brand, and countertop material. FurniRevive offers free in-home design consultation with a transparent quotation.`,
      },
      {
        q: "How durable is acrylic finish on modular kitchen shutters?",
        a: "Acrylic shutters are moderately durable under normal use. The gloss surface can show fine scratches over time if cleaned with abrasive materials. With a soft microfibre cloth and mild cleaner, acrylic kitchens retain their mirror-like finish for 5–8 years. They are not suitable near direct heat sources.",
      },
      {
        q: "What colours are available in acrylic modular kitchens?",
        a: "Acrylic is available in an extensive palette — from clean whites and off-whites to bold reds, blues, and blacks, plus metallic shades like champagne and graphite. FurniRevive stocks over 40 acrylic shutter colours. Custom colours can also be sourced on request.",
      },
      {
        q: "Does acrylic kitchen look good in small apartments?",
        a: "Yes — the reflective gloss surface of acrylic shutters creates an illusion of space, making it ideal for compact apartments in high-rise buildings. Light colours like white and ivory work best for small kitchens. The high-gloss finish also brightens the kitchen under artificial lighting.",
      },
      {
        q: "Can acrylic kitchen shutters be repaired if scratched or chipped?",
        a: "Minor surface scratches on acrylic shutters can be buffed out using automotive polish in most cases. Deeper chips or peeling at edges require shutter replacement. FurniRevive offers post-installation service to address such issues under warranty.",
      },
    ],
  },
  laminate: {
    displayName: "Laminate",
    description: "Laminate shutters are made by pressing a high-pressure laminate (HPL) sheet over an MDF or plywood board. They offer excellent scratch resistance, a wide range of textures and patterns, and the lowest maintenance requirement of any kitchen finish — making them the most popular choice across all budget segments in India.",
    finishOptions: ["Matte texture", "Woodgrain texture", "Semi-gloss", "Anti-fingerprint matte", "Stone-effect"],
    bestFor: "Budget-conscious buyers wanting durable, low-maintenance kitchens with wide design choices",
    durability: "High (8–12 years; scratch-resistant surface)",
    maintenance: "Low (wipe with damp cloth; no special care needed)",
    baseCostMin: 90000,
    baseCostMax: 200000,
    relatedMaterials: ["acrylic", "pu"],
    faqs: (priceMin, priceMax, cityName) => [
      {
        q: `What is the cost of a laminate modular kitchen in ${cityName}?`,
        a: `A laminate modular kitchen in ${cityName} typically costs between ₹${(priceMin / 100000).toFixed(1)}L and ₹${(priceMax / 100000).toFixed(1)}L for a standard 10-running-foot kitchen. Laminate is the most cost-effective premium-finish option available. FurniRevive provides free home visits and transparent itemised quotations.`,
      },
      {
        q: "How durable is laminate finish compared to acrylic and PU?",
        a: "Laminate has the best durability among common kitchen finishes. High-pressure laminate (HPL) is scratch-resistant, impact-resistant, and maintains its appearance for 8–12 years with regular wiping. Unlike acrylic, it does not show fingerprints or minor scratches as prominently.",
      },
      {
        q: "What textures and patterns are available in laminate modular kitchens?",
        a: "Laminate is available in matte, semi-gloss, woodgrain, stone-effect, concrete-look, and anti-fingerprint textures. FurniRevive stocks over 80 laminate designs from leading brands like Greenlam, Merino, and Century. Both solid colours and realistic wood/stone patterns are available.",
      },
      {
        q: "Do laminate kitchen edges peel over time?",
        a: "Laminate edges can peel if the edge banding is of poor quality or improperly applied. FurniRevive uses PVC or ABS edge banding bonded under heat for all laminate shutters. With quality edge treatment and proper care, laminate kitchens do not peel for years.",
      },
      {
        q: "Which is better for Indian kitchens — laminate or acrylic?",
        a: "Laminate is better suited for practical, everyday Indian cooking due to higher scratch resistance and lower maintenance. Acrylic is preferred when a high-gloss premium look is the priority. For mixed-use kitchens with heavy cooking, laminate with woodgrain or matte texture is the most popular choice.",
      },
    ],
  },
  pu: {
    displayName: "PU Finish",
    description: "PU (polyurethane) finish is a paint-grade sheen applied directly on MDF shutters using a spray booth process. It delivers a smooth, ultra-even surface that mimics furniture-grade paint — offering a softer, more sophisticated look than acrylic gloss. PU is the preferred choice in luxury homes and premium renovations across the NCR.",
    finishOptions: ["Satin sheen", "Semi-matte PU", "High-gloss PU", "Two-tone PU"],
    bestFor: "Premium kitchens needing a furniture-paint-grade, soft-sheen finish with high durability",
    durability: "High (10–15 years; UV-resistant, moisture-resistant)",
    maintenance: "Low (smooth surface; easy to wipe; UV-resistant coating prevents yellowing)",
    baseCostMin: 180000,
    baseCostMax: 400000,
    relatedMaterials: ["acrylic", "laminate"],
    faqs: (priceMin, priceMax, cityName) => [
      {
        q: `What does a PU finish modular kitchen cost in ${cityName}?`,
        a: `A PU finish modular kitchen in ${cityName} typically costs between ₹${(priceMin / 100000).toFixed(1)}L and ₹${(priceMax / 100000).toFixed(1)}L for a standard 10-running-foot kitchen. PU is priced higher than laminate due to the spray-booth application process, but offers superior finish quality. FurniRevive provides free design consultation with detailed pricing.`,
      },
      {
        q: "How is PU finish different from acrylic and laminate for kitchen shutters?",
        a: "PU finish is a spray-applied polyurethane paint that gives MDF shutters a smooth, even paint-grade surface. Unlike acrylic (bonded sheet) or laminate (pressed sheet), PU is applied as a liquid coating. The result is a softer, more sophisticated sheen — closer to premium furniture paint than gloss sheet materials.",
      },
      {
        q: "How long does a PU finish kitchen last?",
        a: "PU finish kitchens typically last 10–15 years with normal care. The UV-resistant topcoat prevents yellowing and colour fade even in sunny kitchens. PU is more resistant to moisture and heat than acrylic, making it a durable premium choice for Indian cooking environments.",
      },
      {
        q: "Is PU finish kitchen easy to clean?",
        a: "Yes. The ultra-smooth PU surface is very easy to clean — oil splatter and kitchen grime wipe off with a damp cloth. The surface does not absorb stains. Avoid harsh chemical cleaners that can degrade the topcoat over time.",
      },
      {
        q: "Can PU finish be applied in custom colours?",
        a: "PU finish can be matched to almost any RAL or Asian Paints colour using a spray-booth process. While the standard range includes popular whites, greys, and earthy tones, custom colour matching is available from FurniRevive. Two-tone combinations (upper cabinets one colour, lower cabinets another) are also popular.",
      },
    ],
  },
};

const ALL_MATERIALS = ["acrylic", "laminate", "pu"];
const ALL_CITIES = ["delhi", "gurgaon", "noida", "faridabad", "ghaziabad"];

function roundTo5k(n: number): number {
  return Math.round(n / 5000) * 5000;
}

function buildEntry(materialSlug: string, citySlug: string): KitchenMaterialCityEntry {
  const mat = MATERIAL_DATA[materialSlug];
  const city = CITY_DISPLAY[citySlug];
  const multiplier = CITY_MULTIPLIERS[citySlug];
  const priceMin = roundTo5k(mat.baseCostMin * multiplier);
  const priceMax = roundTo5k(mat.baseCostMax * multiplier);
  const slug = `${materialSlug}-modular-kitchen-${citySlug}`;

  return {
    id: `kmc_${materialSlug}_${citySlug}`,
    slug,
    materialSlug,
    citySlug,
    materialName: mat.displayName,
    cityName: city.name,
    h1: `${mat.displayName} Modular Kitchen in ${city.name}`,
    metaTitle: `${mat.displayName} Modular Kitchen in ${city.name} | Price, Designs & Installation`,
    metaDescription: `Get a ${mat.displayName.toLowerCase()} modular kitchen in ${city.name} from ₹${(priceMin / 100000).toFixed(1)}L. Custom designs for ${city.apartmentTypes}. Free design consultation, 10-year warranty.`,
    heroSubtext: `Custom ${mat.displayName.toLowerCase()} modular kitchens for ${city.apartmentTypes}. Transparent pricing from ₹${(priceMin / 100000).toFixed(1)} lakh to ₹${(priceMax / 100000).toFixed(1)} lakh, 10-year structural warranty.`,
    priceMin,
    priceMax,
    materialDescription: mat.description,
    finishOptions: mat.finishOptions,
    bestFor: mat.bestFor,
    durability: mat.durability,
    maintenance: mat.maintenance,
    cityApartmentTypes: city.apartmentTypes,
    whyThisCityPoints: city.whyPoints,
    relatedMaterials: mat.relatedMaterials,
    sameCities: ALL_CITIES.filter((c) => c !== citySlug),
    faqs: mat.faqs(priceMin, priceMax, city.name),
  };
}

export const KITCHEN_MATERIAL_CITY_REGISTRY: readonly KitchenMaterialCityEntry[] =
  ALL_MATERIALS.flatMap((m) => ALL_CITIES.map((c) => buildEntry(m, c)));

export function getMaterialCityEntry(slug: string): KitchenMaterialCityEntry | undefined {
  return KITCHEN_MATERIAL_CITY_REGISTRY.find((e) => e.slug === slug);
}
