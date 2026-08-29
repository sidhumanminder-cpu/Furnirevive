/**
 * Kitchen Content Modules — Milestone 2
 *
 * Real, deterministic module builders for the Modular Kitchen SEO cluster.
 * Every builder receives the adapted (locality, service) pair — the `locality`
 * object is produced by resolveKitchenLocality() and its `slug` matches the
 * original kitchen registry slug, so we can detect the page type from it.
 *
 * Hard rules:
 * - Deterministic: same inputs → same output (no randomness, no Date()).
 * - Domain data only — no CSS, no UI hints.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "@/lib/registry/kitchen-cost-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import type { KitchenLocalityEntry } from "@/lib/registry/kitchen-locality-registry.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { WHY_CHOOSE_CARDS } from "@/pages/modular-kitchen/_data/kitchen-why-choose.ts";
import type { WhyChooseCard } from "@/pages/modular-kitchen/_data/kitchen-why-choose.ts";
import { COMPARISON_ROWS, COMPARISON_OPTIONS, COMPARISON_FOOTNOTE } from "@/pages/modular-kitchen/_data/kitchen-comparison.ts";
import { HARDWARE_BRANDS } from "@/pages/modular-kitchen/_data/kitchen-brands.ts";
import { KITCHEN_REVIEWS } from "@/pages/modular-kitchen/_data/kitchen-reviews.ts";
import { buildLocalityProfile } from "./kitchen-locality-profile.ts";
import { buildKitchenFaqFromProfile } from "./kitchen-faq-builder.ts";
import { buildKitchenLocalitySnapshot, buildKitchenLocalityStats } from "./kitchen-snapshot-builder.ts";
import { buildKitchenLayoutsGridFromProfile, buildKitchenMaterialsGridFromProfile } from "./kitchen-recommendation-builder.ts";
import type {
  KitchenHeroSectionData,
  KitchenIntroSectionData,
  KitchenLayoutsGridSectionData,
  KitchenLayoutItem,
  KitchenMaterialsGridSectionData,
  KitchenMaterialItem,
  KitchenPricingSectionData,
  KitchenPricingRow,
  KitchenProcessSectionData,
  KitchenFaqSectionData,
  KitchenCtaSectionData,
  KitchenWhyChooseSectionData,
  KitchenReviewsSectionData,
  KitchenComparisonSectionData,
  KitchenBrandsSectionData,
  KitchenLocalitySnapshotSectionData,
  KitchenLocalityStatsSectionData,
} from "../types.ts";

// ─── Fallback locality for non-locality page types ───────────────────────────

const FALLBACK_LOCALITY: KitchenLocalityEntry = {
  id: "fallback",
  slug: "fallback",
  name: "Delhi NCR",
  city: "delhi",
  propertyType: "",
  affluence: "mid",
  premiumLevel: 2,
  landmarks: [],
  nearby: [],
  priority: 50,
  status: "published",
  rolloutGroup: 1,
  recommendedStyle: "modern",
  priorityScore: 50,
  tier: "tier2",
  localityType: "mixed",
  averageProjectValue: "mid",
};

// ─── Page-type detection ───────────────────────────────────────────────────

type KitchenPageType = "locality" | "layout" | "material" | "cost";

function getKitchenPageType(slug: string): KitchenPageType {
  if (MODULAR_KITCHEN_LAYOUT_REGISTRY.some((l) => l.slug === slug)) return "layout";
  if (MODULAR_KITCHEN_MATERIAL_REGISTRY.some((m) => m.slug === slug)) return "material";
  if (MODULAR_KITCHEN_COST_REGISTRY.some((c) => c.slug === slug)) return "cost";
  return "locality";
}

/** Returns the full KitchenLocalityEntry for a locality page, or undefined for layout/material/cost pages. */
function getKitchenLocality(slug: string): KitchenLocalityEntry | undefined {
  return MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === slug);
}

// ─── Deterministic hash rotation ────────────────────────────────────────────

const HERO_IMAGES = [
  "https://hercules-cdn.com/file_GoyMqLfjKEiS94UoQgcuAzlj", // premium villa kitchen C
  "https://hercules-cdn.com/file_w2FSVjzzp2yO9Kw92NvttlzL", // DSLR award-winning D
  "https://hercules-cdn.com/file_rAsfdNyOjPSfpeWcQQ0zj6Fr", // DSLR award-winning E
  "https://hercules-cdn.com/file_bEyqt1YZGAd7E6AHMzz915BC", // high-gloss acrylic F
] as const;

/** Dedicated hero images for each layout page — slug → CDN URL */
const LAYOUT_HERO_IMAGES: Record<string, string> = {
  "l-shape":   "https://hercules-cdn.com/file_kcWs3I3r503Bb8cEHdfBB8fo",
  "u-shape":   "https://hercules-cdn.com/file_lhlCPHMXg1s5C4UjHD8he0sV",
  "parallel":  "https://hercules-cdn.com/file_VGfRXBlsXw8FD7Hc1uzlZEwp",
  "straight":  "https://hercules-cdn.com/file_v8Irf28DaqCTDBPwFkcEA3YW",
  "island":    "https://hercules-cdn.com/file_djsOu8mcj70UG6FryEc21TlC",
  "peninsula": "https://hercules-cdn.com/file_D9FGFjhsA6mz93B2pf0pQic0",
};

/** Dedicated hero images for each material page — slug → CDN URL */
const MATERIAL_HERO_IMAGES: Record<string, string> = {
  "acrylic":         "https://hercules-cdn.com/file_IloMTm7xkcZJkWwsCCR0OfUs",
  "laminate":        "https://hercules-cdn.com/file_vtmk6xG3eXfLqwBp6sAeflWr",
  "pu":              "https://hercules-cdn.com/file_igHnChlrLBP8QHjiD50g6l7b",
  "membrane":        "https://hercules-cdn.com/file_KbLdVBRE4LYFiPamNqexMnxl",
  "veneer":          "https://hercules-cdn.com/file_bJ8OfIcFlNvSc6fWcfYMlxld",
  "pvc":             "https://hercules-cdn.com/file_58yHQTGmGFfzAhHc9lCctyE5",
  "glass":           "https://hercules-cdn.com/file_zPPi8vvUMRn2uha1ODXLdXUq",
  "stainless-steel": "https://hercules-cdn.com/file_gl5ZGkrN9xOrIYcF6JNq7AOT",
};

function pickByHash(arr: readonly string[], key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (Math.imul(31, h) + key.charCodeAt(i)) | 0;
  return arr[((h % arr.length) + arr.length) % arr.length];
}

// ─── Small formatting helpers ────────────────────────────────────────────────

const CITY_LABELS: Record<string, string> = {
  delhi: "Delhi",
  gurgaon: "Gurgaon",
  noida: "Noida",
  ghaziabad: "Ghaziabad",
  faridabad: "Faridabad",
  chandigarh: "Chandigarh",
  mohali: "Mohali",
  panchkula: "Panchkula",
};

function cityLabel(city: string): string {
  return CITY_LABELS[city] ?? city;
}

/** Format a rupee amount into a lakh-based short label, e.g. 150000 → "1.5L". */
function toLakh(amount: number): string {
  return (amount / 100000).toFixed(1);
}

const TRUST_BADGES = [
  "10-Year Warranty",
  "Free Design Consultation",
  "Premium Hardware",
  "Pan-India Service",
];

// ─── buildKitchenHero ────────────────────────────────────────────────────────

export function buildKitchenHero(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenHeroSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const name = locality.name;
  const kLoc = getKitchenLocality(locality.slug);
  const locCity = cityLabel(kLoc?.city ?? "delhi");

  let headline: string;
  let subheadline: string;

  if (pageType === "layout") {
    headline = `${name} for ${locCity} Homes — Custom Design`;
    subheadline = `Planning a ${name.toLowerCase()}? Get a fully custom design tailored to your space with free design consultation, transparent pricing, and a 10-year warranty.`;
  } else if (pageType === "material") {
    headline = `${name} — Kitchen Cabinets & Finishes`;
    subheadline = `Discover everything about a ${name.toLowerCase()} — finish, durability, cost, and whether it's the right choice for your home. Free design consultation across ${locCity}.`;
  } else if (pageType === "cost") {
    headline = `${name} — Transparent Pricing Guide`;
    subheadline = `A clear, no-nonsense breakdown of modular kitchen pricing so you know exactly what your budget buys. Free design consultation and a fixed written quote.`;
  } else {
    const kLoc = getKitchenLocality(locality.slug);
    const locType = kLoc?.localityType ?? "mixed";
    const projValue = kLoc?.averageProjectValue ?? "mid";
    headline = `Modular Kitchen in ${name} — Custom Design & Installation`;

    if (projValue === "luxury" || projValue === "premium") {
      if (locType === "villa") {
        subheadline = `Bespoke modular kitchens for ${name}'s independent homes and villas. Island layouts, imported hardware, and luxury finishes — free design consultation and 10-year warranty.`;
      } else if (locType === "apartments") {
        subheadline = `Premium modular kitchen design for ${name} apartments. Space-optimised layouts, soft-close hardware, and quality finishes — free design consultation and 10-year warranty.`;
      } else {
        subheadline = `Bespoke modular kitchen design for premium homes in ${name}. Free design consultation, 10-year warranty, and installation by certified craftsmen.`;
      }
    } else if (projValue === "budget") {
      subheadline = `Affordable modular kitchen in ${name} starting from ₹80,000. No hidden costs, local delivery, and a written 5-year warranty.`;
    } else {
      // mid
      if (locType === "apartments") {
        subheadline = `Custom modular kitchen for ${name} apartments. Compact layouts, smart storage, and quality finishes — free design consultation and transparent pricing from ₹80,000.`;
      } else {
        subheadline = `Transform your kitchen with a fully custom modular kitchen in ${name}. Free design consultation, transparent pricing from ₹80,000, and a 10-year warranty.`;
      }
    }
  }

  return {
    id: `${service.slug}-${locality.slug}-kitchen-hero`,
    type: "kitchen-hero",
    version: "v1",
    props: {
      headline,
      subheadline,
      localityName: name,
      cityLabel: locCity,
      trustBadges: [...TRUST_BADGES],
      imageUrl:
        pageType === "layout"
          ? (LAYOUT_HERO_IMAGES[locality.slug] ?? pickByHash(HERO_IMAGES, locality.slug))
          : pageType === "material"
          ? (MATERIAL_HERO_IMAGES[locality.slug] ?? pickByHash(HERO_IMAGES, locality.slug))
          : pickByHash(HERO_IMAGES, locality.slug),
      imageAlt: `${headline} — FurniRevive modular kitchen`,
    },
  };
}

// ─── buildKitchenIntro ────────────────────────────────────────────────────────

export function buildKitchenIntro(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenIntroSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const name = locality.name;
  const kLocIntro = getKitchenLocality(locality.slug);
  const introCity = cityLabel(kLocIntro?.city ?? "delhi");

  let heading: string;
  let paragraphs: string[];
  let keyFacts: string[];

  if (pageType === "layout") {
    const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === locality.slug);
    const desc = layout?.description ?? "";
    const bestFor = layout?.bestFor ?? "";
    const sizeRange = layout ? `${layout.minSqFt}–${layout.maxSqFt} sq ft` : "";
    const costRange = layout ? `₹${toLakh(layout.costMin)}L – ₹${toLakh(layout.costMax)}L` : "";
    heading = `About the ${name}`;
    paragraphs = [
      `The ${name.toLowerCase()} is defined by ${desc.toLowerCase()}. It is one of the most popular modular kitchen configurations for ${introCity} homes because it balances workflow, storage, and the reality of Indian apartment sizes.`,
      `This layout is best suited for ${bestFor.toLowerCase()}. Typically it works well in kitchens of around ${sizeRange}, though the exact fit depends on your door and window positions, plumbing points, and how you cook day to day.`,
      `A well-planned ${name.toLowerCase()} keeps the sink, hob, and refrigerator within an efficient working triangle while maximising usable counter and cabinet space. Our designers plan every centimetre around your habits before a single panel is cut.`,
    ];
    keyFacts = [
      `Ideal kitchen size: ${sizeRange}`,
      `Best for: ${bestFor}`,
      `Typical price range: ${costRange}`,
      "Available in every finish — acrylic, laminate, PU, membrane and more",
      "Free design consultation so you can see the layout before you commit",
    ];
  } else if (pageType === "material") {
    const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === locality.slug);
    const finish = mat?.finish ?? "";
    const durability = mat?.durability ?? "medium";
    const maintenance = mat?.maintenance ?? "medium";
    const bestFor = mat?.bestFor ?? "";
    const costRange = mat ? `₹${mat.costMin} – ₹${mat.costMax} per sq ft` : "";
    heading = `About ${name}`;
    paragraphs = [
      `A ${name.toLowerCase()} is finished in a ${finish.toLowerCase()}, giving it a distinctive look and feel among modular kitchen options. It is a popular choice for homeowners who want the right balance of aesthetics, durability, and budget.`,
      `In terms of performance, this material offers ${durability.replace("-", " ")} durability with ${maintenance} maintenance needs. That makes it especially suited for ${bestFor.toLowerCase()}.`,
      `Shutter material only affects the visible surface — the carcass underneath is always made from moisture-resistant BWR plywood. That means you can choose ${name.toLowerCase()} for its looks while keeping the structural integrity of your kitchen the same.`,
    ];
    keyFacts = [
      `Finish: ${finish}`,
      `Durability: ${durability.replace("-", " ")}`,
      `Maintenance: ${maintenance}`,
      `Cost: ${costRange}`,
      `Best for: ${bestFor}`,
    ];
  } else if (pageType === "cost") {
    const cost = MODULAR_KITCHEN_COST_REGISTRY.find((c) => c.slug === locality.slug);
    const desc = cost?.description ?? "";
    const audience = cost?.targetAudience ?? "";
    heading = `${name} — What Your Budget Buys`;
    paragraphs = [
      `This guide covers ${desc.toLowerCase()}. Modular kitchen pricing in ${introCity} varies widely, so understanding what drives the cost helps you spend your budget where it matters most.`,
      `It is written for ${audience.toLowerCase()}. The biggest factors are kitchen size, shutter material, hardware brand, countertop choice, and any appliances or tall units you add.`,
      `Whatever your budget, the cabinet carcass, professional installation, and warranty stay the same — you upgrade by choosing better finishes, smarter storage, and premium fittings. A free design consultation gives you a fixed quote before you decide.`,
    ];
    keyFacts = [
      "Carcass in moisture-resistant BWR plywood as standard",
      "Choose your shutter material to match your budget",
      "Granite or quartz countertop included in most quotes",
      "Professional installation and warranty always included",
      "Free design consultation and a fixed written quote — no surprises",
    ];
  } else {
    const kLoc = getKitchenLocality(locality.slug);
    const locType = kLoc?.localityType ?? "mixed";
    const projValue = kLoc?.averageProjectValue ?? "mid";
    const nearby = locality.nearby.slice(0, 3);
    const nearbyText =
      nearby.length > 0
        ? `We also serve nearby areas including ${nearby.join(", ")}`
        : "We serve homes across the surrounding neighbourhoods";

    heading = `Modular Kitchens in ${name}`;

    // Vary paragraph 2 by localityType
    const p2ByType: Record<string, string> = {
      villa: `FurniRevive designs and installs custom modular kitchens for ${name}'s independent houses and villas. With more space to work with, we can incorporate island layouts, full-height cabinets, and statement finishes that transform the kitchen into the heart of the home.`,
      apartments: `FurniRevive designs and installs custom modular kitchens for ${name}'s apartment homes. Our designers specialise in maximising every centimetre — parallel layouts, tall storage units, and pull-out systems that make compact kitchens work harder.`,
      mixed: `FurniRevive designs, manufactures, and installs custom modular kitchens for ${name} and the wider ${cityLabel(locality.city)} region. Every kitchen is built to order — you choose the layout, the finish, and the hardware, and our designers plan it around how your family actually cooks.`,
    };

    paragraphs = [
      `${name} is ${locality.propertyType}. Homes here range from compact apartments to spacious independent houses, and a well-designed modular kitchen makes the most of whatever space you have.`,
      p2ByType[locType] ?? p2ByType.mixed,
      `${nearbyText}. From the first free home visit to final installation, you get a single accountable team, transparent pricing, and a 10-year structural warranty.`,
    ];

    // Vary keyFacts by projValue
    const layoutRec = locType === "villa"
      ? "Island or U-shape layouts ideal for larger spaces"
      : locType === "apartments"
      ? "L-shape or parallel layouts optimised for compact kitchens"
      : "All layouts available — L-shape, parallel, U-shape and more";

    keyFacts = [
      nearby.length > 0
        ? `Serving ${name} and nearby ${nearby[0]}`
        : `Serving ${name} and surrounding areas`,
      "Free design consultation",
      layoutRec,
      projValue === "luxury" || projValue === "premium"
        ? "Blum, Hettich, Hafele hardware options available"
        : "All materials available — acrylic, laminate, PU and more",
      "10-year structural warranty",
    ];
  }

  return {
    id: `${service.slug}-${locality.slug}-kitchen-intro`,
    type: "kitchen-intro",
    version: "v1",
    props: { heading, paragraphs, keyFacts },
  };
}

// ─── buildKitchenLayoutsGrid ─────────────────────────────────────────────────

/** Thin orchestrator wrapper — delegates to profile-based builder. */
export function buildKitchenLayoutsGrid(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenLayoutsGridSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const kLoc = getKitchenLocality(locality.slug);
  const profile = kLoc
    ? buildLocalityProfile(kLoc)
    : buildLocalityProfile(FALLBACK_LOCALITY);
  return buildKitchenLayoutsGridFromProfile(locality, service, profile, pageType);
}

// ─── buildKitchenMaterialsGrid ───────────────────────────────────────────────

/** Thin orchestrator wrapper — delegates to profile-based builder. */
export function buildKitchenMaterialsGrid(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenMaterialsGridSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const kLoc = getKitchenLocality(locality.slug);
  const profile = kLoc
    ? buildLocalityProfile(kLoc)
    : buildLocalityProfile(FALLBACK_LOCALITY);
  return buildKitchenMaterialsGridFromProfile(locality, service, profile, pageType);
}

// ─── buildKitchenPricing ─────────────────────────────────────────────────────

const STANDARD_PRICING_ROWS: readonly KitchenPricingRow[] = [
  { label: "Straight / Single Wall", priceRange: "₹80,000 – ₹2,50,000", note: "40–80 sq ft" },
  { label: "L-Shape Kitchen", priceRange: "₹1,50,000 – ₹5,00,000", note: "80–150 sq ft" },
  { label: "Parallel Kitchen", priceRange: "₹1,30,000 – ₹4,20,000", note: "80–140 sq ft" },
  { label: "U-Shape Kitchen", priceRange: "₹2,00,000 – ₹6,50,000", note: "120–200 sq ft" },
  { label: "Island Kitchen", priceRange: "₹3,50,000 – ₹12,00,000+", note: "180 sq ft+" },
] as const;

const PRICING_INCLUDED = [
  "Cabinet carcass (BWR plywood)",
  "Shutters in chosen material",
  "Granite/quartz countertop",
  "Soft-close hinges & channels",
  "Basic electrical provision",
  "Professional installation",
];

export function buildKitchenPricing(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenPricingSectionData {
  const pageType = getKitchenPageType(locality.slug);

  let heading: string;
  let disclaimer: string;

  if (pageType === "cost") {
    heading = `${locality.name} — Price Breakdown by Kitchen Type`;
    disclaimer =
      "Prices vary by size, material choice, hardware brand, and appliances. Get a free design consultation and fixed quote for your exact budget.";
  } else if (pageType === "layout") {
    heading = "Modular Kitchen Pricing by Layout";
    disclaimer = `Costs for your ${locality.name.toLowerCase()} depend on size, material, hardware, and appliances. Get a free design consultation and fixed quote.`;
  } else if (pageType === "material") {
    heading = "How Your Material Choice Affects Pricing";
    disclaimer = `The prices below are guide ranges — your ${locality.name.toLowerCase()} finish sits within these depending on size and hardware. Get a free fixed quote.`;
  } else {
    heading = `Modular Kitchen Pricing in ${locality.name}`;
    disclaimer =
      "Prices vary by size, material choice, hardware brand, and appliances. Get a free design consultation and fixed quote.";

    // Append softened pricing context for locality pages
    const kLoc = getKitchenLocality(locality.slug);
    const projValue = kLoc?.averageProjectValue ?? "mid";
    const localityType = kLoc?.localityType ?? "mixed";
    const name = locality.name;
    const contextSentences: Record<string, string> = {
      luxury: `Acrylic and PU finishes are a popular choice among homeowners in ${name} — they complement the premium interiors typically found here.`,
      premium: `Acrylic finishes are popular in ${name} for their clean, modern look within a premium budget.`,
      mid:
        localityType === "apartments"
          ? `Laminate and acrylic are the most popular finishes for apartments in ${name}, offering a good balance of quality and value.`
          : `Laminate and acrylic are the most popular finishes in ${name}, offering a good balance of quality and value.`,
      budget: `Laminate is the most practical and popular finish in ${name}, offering excellent durability at an affordable price.`,
    };
    const ctx = contextSentences[projValue];
    if (ctx) disclaimer = `${disclaimer} ${ctx}`;
  }

  return {
    id: `${service.slug}-${locality.slug}-kitchen-pricing`,
    type: "kitchen-pricing",
    version: "v1",
    props: {
      heading,
      rows: STANDARD_PRICING_ROWS.map((r) => ({ ...r })),
      whatsIncluded: [...PRICING_INCLUDED],
      disclaimer,
    },
  };
}

// ─── buildKitchenProcess ─────────────────────────────────────────────────────

export function buildKitchenProcess(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenProcessSectionData {
  return {
    id: `${service.slug}-${locality.slug}-kitchen-process`,
    type: "kitchen-process",
    version: "v1",
    props: {
      heading: "How Your Modular Kitchen Gets Made",
      subheading: "From design consultation to installation — here's our 5-step process",
      steps: [
        {
          step: 1,
          title: "Free Home Visit & Measurement",
          description:
            "Our kitchen designer visits your home, takes precise measurements, and understands your cooking habits and storage needs.",
        },
        {
          step: 2,
          title: "Design Plan & Material Selection",
          description:
            "We create a detailed design plan for your kitchen with your chosen layout, material, and colour palette. No payment until you're satisfied.",
        },
        {
          step: 3,
          title: "Factory Manufacturing",
          description:
            "Your cabinets are precision-cut at our factory using CNC machines. BWR plywood carcass and your chosen shutter material are assembled under quality control.",
        },
        {
          step: 4,
          title: "Delivery & Site Preparation",
          description:
            "Cabinets are delivered and the site is prepared. Electrical and plumbing points are confirmed with your contractor.",
        },
        {
          step: 5,
          title: "Professional Installation",
          description:
            "Our certified installation team fits your kitchen in 2–4 days depending on size. Final touch-ups, appliance fitting, and a full quality check before handover.",
        },
      ],
    },
  };
}

// ─── buildKitchenFaq ──────────────────────────────────────────────────────────

/** Thin orchestrator wrapper — delegates to profile-based FAQ builder. */
export function buildKitchenFaq(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenFaqSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const kLoc = getKitchenLocality(locality.slug);
  const profile = kLoc
    ? buildLocalityProfile(kLoc)
    : buildLocalityProfile(FALLBACK_LOCALITY);
  return buildKitchenFaqFromProfile(locality, service, profile, pageType);
}

// ─── buildKitchenLocalitySnapshot ────────────────────────────────────────────

/** Renders the Quick Locality Guide card. No-op for non-locality pages (returns null). */
export function buildKitchenLocalitySnapshotSection(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenLocalitySnapshotSectionData | null {
  const pageType = getKitchenPageType(locality.slug);
  if (pageType !== "locality") return null;
  const kLoc = getKitchenLocality(locality.slug);
  if (!kLoc) return null;
  const profile = buildLocalityProfile(kLoc);
  return buildKitchenLocalitySnapshot(locality, service, profile);
}

// ─── buildKitchenLocalityStats ────────────────────────────────────────────────

/** Renders the Locality Statistics strip. No-op for non-locality pages (returns null). */
export function buildKitchenLocalityStatsSection(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenLocalityStatsSectionData | null {
  const pageType = getKitchenPageType(locality.slug);
  if (pageType !== "locality") return null;
  const kLoc = getKitchenLocality(locality.slug);
  if (!kLoc) return null;
  const profile = buildLocalityProfile(kLoc);
  return buildKitchenLocalityStats(locality, service, profile);
}


export function buildKitchenCta(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenCtaSectionData {
  const pageType = getKitchenPageType(locality.slug);
  const heading =
    pageType === "locality"
      ? `Get Your Free Modular Kitchen Design in ${locality.name}`
      : `Get a Free Quote for Your ${locality.name}`;

  return {
    id: `${service.slug}-${locality.slug}-kitchen-cta`,
    type: "kitchen-cta",
    version: "v1",
    props: {
      heading,
      subheading:
        "Book a free home visit. Our designer will measure your kitchen, create a design plan, and give you a fixed quote — all at no cost.",
      phoneNumber: PHONE_NUMBER,
      whatsappNumber: WHATSAPP_NUMBER,
      localityName: locality.name,
    },
  };
}

// ─── buildKitchenWhyChoose ────────────────────────────────────────────────────

export function buildKitchenWhyChoose(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenWhyChooseSectionData {
  return {
    id: `${service.slug}-${locality.slug}-kitchen-why-choose`,
    type: "kitchen-why-choose",
    version: "v1",
    props: {
      heading: "Why Choose FurniRevive for Your Modular Kitchen?",
      cards: WHY_CHOOSE_CARDS.map((c: WhyChooseCard) => ({ ...c })),
    },
  };
}

// ─── buildKitchenReviews ──────────────────────────────────────────────────────

export function buildKitchenReviews(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenReviewsSectionData {
  // Pick 3–4 reviews using hash rotation so each page shows a different set
  const reviewCount = 3;
  const picked = [];
  for (let i = 0; i < reviewCount; i++) {
    picked.push(KITCHEN_REVIEWS[((Math.abs(Math.imul(31, i + locality.slug.charCodeAt(0) + i * 7)) % KITCHEN_REVIEWS.length) + KITCHEN_REVIEWS.length) % KITCHEN_REVIEWS.length]);
  }
  // Deduplicate in case hash collision
  const seen = new Set<string>();
  const deduped = [];
  for (const r of KITCHEN_REVIEWS) {
    if (deduped.length >= reviewCount) break;
    const key = r.id;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push({ ...r });
    }
  }
  // Use a proper hash rotation
  let h = 0;
  for (let i = 0; i < locality.slug.length; i++) h = (Math.imul(31, h) + locality.slug.charCodeAt(i)) | 0;
  const startIdx = ((h % KITCHEN_REVIEWS.length) + KITCHEN_REVIEWS.length) % KITCHEN_REVIEWS.length;
  const selected = [];
  for (let i = 0; i < reviewCount; i++) {
    selected.push({ ...KITCHEN_REVIEWS[(startIdx + i) % KITCHEN_REVIEWS.length] });
  }

  return {
    id: `${service.slug}-${locality.slug}-kitchen-reviews`,
    type: "kitchen-reviews",
    version: "v1",
    props: {
      heading: "What Our Customers Say",
      subheading: `Real reviews from homeowners across ${cityLabel(getKitchenLocality(locality.slug)?.city ?? "delhi")} who've transformed their kitchens with FurniRevive.`,
      items: selected,
    },
  };
}

// ─── buildKitchenComparison ───────────────────────────────────────────────────

export function buildKitchenComparison(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenComparisonSectionData {
  return {
    id: `${service.slug}-${locality.slug}-kitchen-comparison`,
    type: "kitchen-comparison",
    version: "v1",
    props: {
      heading: "Modular Kitchen vs Carpenter-Made vs Semi-Modular",
      subheading:
        "Understanding the differences helps you make the right choice for your home and budget.",
      options: COMPARISON_OPTIONS.map((o) => ({ ...o })),
      rows: COMPARISON_ROWS.map((r) => ({ ...r, values: { ...r.values } })),
      footnote: COMPARISON_FOOTNOTE,
    },
  };
}

// ─── buildKitchenBrands ───────────────────────────────────────────────────────

export function buildKitchenBrands(
  locality: LocalityEntry,
  service: ServiceEntry,
): KitchenBrandsSectionData {
  return {
    id: `${service.slug}-${locality.slug}-kitchen-brands`,
    type: "kitchen-brands",
    version: "v1",
    props: {
      heading: "Hardware We Work With",
      subheading:
        "The quality of your kitchen hardware determines how it feels every day. We work with the world's best — and always explain the difference so you can choose what's right for your budget.",
      brands: HARDWARE_BRANDS.map((b) => ({ ...b, benefits: [...b.benefits] })),
    },
  };
}
