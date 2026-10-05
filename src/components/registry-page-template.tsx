import { useEffect, Fragment, lazy, Suspense } from "react";
import { useLocation, Link } from "react-router-dom";
import KitchenGalleryPreview from "@/pages/modular-kitchen/_components/KitchenGalleryPreview.tsx";
import { PREVIEW_GALLERY, getRootGallery } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";
import { ChevronRight, Home } from "lucide-react";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import SectionRenderer from "@/components/registry/SectionRenderer.tsx";
import StickyContactBar from "@/components/registry/StickyContactBar.tsx";
import { BUSINESS, BUSINESS_ADDRESS, BUSINESS_AREA_SERVED, BUSINESS_GEO } from "@/lib/business-config.ts";
import { CITY_DISPLAY_NAMES } from "@/lib/content-engine/content-pools.ts";
import { isCityRedundant } from "@/lib/seoConfigs/metadata-formatter.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import type { KitchenLocalityEntry } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "@/lib/registry/kitchen-cost-registry.ts";
import type {
  PageSections,
  HeroSectionData,
  FaqSectionData,
  KitchenFaqSectionData,
  KitchenHeroSectionData,
  PricingSectionData,
  RepairTypesSectionData,
} from "@/lib/content-engine/index.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";


const PremiumKitchenGallery = lazy(() => import("@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx"));

type RegistryPageTemplateProps = {
  sections: PageSections;
  locality: LocalityEntry;
  service: ServiceEntry;
};

const CANONICAL_ORIGIN = "https://furnirevive.com";
// Hard ceilings — Google's own display limits. Never exceed these.
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;
// Preferred internal budgets — safety margin below the hard ceilings so
// normal generated text is never at risk of being cut by Google itself.
const TITLE_BUDGET = 65;
const BRANDED_TITLE_BUDGET = 60;
const DESCRIPTION_BUDGET = 155;

// Default OG image for kitchen pages (used when hero has no image)
const KITCHEN_OG_IMAGE = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";

/**
 * Defensive safety net only — normal generated titles/descriptions should
 * fit within TITLE_BUDGET/DESCRIPTION_BUDGET via graceful segment-dropping
 * and never reach this function. If it does fire, cut at a word boundary
 * (not mid-word or mid-phone-number) and warn in DEV so regressions surface.
 */
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  if (import.meta.env.DEV) {
    console.warn(`[registry-page-template] truncate() fired unexpectedly on: "${text}" (${text.length} > ${max})`);
  }
  const hardCut = text.slice(0, max - 1);
  const lastSpace = hardCut.lastIndexOf(" ");
  // Only cut at the space if it doesn't throw away more than ~15 chars —
  // otherwise a hard cut is closer to the intended length.
  const cut = lastSpace > max - 16 ? hardCut.slice(0, lastSpace) : hardCut;
  return `${cut.trimEnd()}…`;
}

/**
 * Kitchen page type detection.
 */

type KitchenPageType = "locality" | "layout" | "material" | "cost";

function getKitchenPageType(slug: string): KitchenPageType {
  if (MODULAR_KITCHEN_LAYOUT_REGISTRY.some((l) => l.slug === slug)) return "layout";
  if (MODULAR_KITCHEN_MATERIAL_REGISTRY.some((m) => m.slug === slug)) return "material";
  if (MODULAR_KITCHEN_COST_REGISTRY.some((c) => c.slug === slug)) return "cost";
  return "locality";
}

// ─── Kitchen SEO metadata (page-type aware) ───────────────────────────────────

type KitchenMeta = { title: string; description: string };

/**
 * Builds a title from ordered segments, dropping the least essential segment
 * (from the end) until it fits the preferred budget. Falls back to the hard
 * ceiling truncate() only if every segment has already been dropped and the
 * remaining text is still oversized (extremely long real-world names).
 */
function degradeTitle(segments: readonly string[], budget: number, hardMax: number): string {
  for (let keep = segments.length; keep >= 1; keep--) {
    const candidate = segments.slice(0, keep).join(" | ");
    if (candidate.length <= budget) return candidate;
  }
  return truncate(segments.join(" | "), hardMax);
}

/**
 * Builds a description from ordered segments (joined with a space),
 * dropping the least essential trailing segment until it fits the
 * preferred budget. Falls back to truncate() only as a last resort.
 */
function degradeDescription(segments: readonly string[], budget: number, hardMax: number): string {
  for (let keep = segments.length; keep >= 1; keep--) {
    const candidate = segments.slice(0, keep).join(" ");
    if (candidate.length <= budget) return candidate;
  }
  return truncate(segments.join(" "), hardMax);
}

function buildKitchenMeta(slug: string, localityName: string): KitchenMeta {
  const pageType = getKitchenPageType(slug);

  if (pageType === "layout") {
    const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
    const name = layout?.name ?? localityName;
    const shortName = layout?.shortName ?? name;
    return {
      title: degradeTitle([`${name} Modular Kitchen`, "Design, Cost & Ideas", "FurniRevive"], TITLE_BUDGET, MAX_TITLE_LENGTH),
      description: degradeDescription(
        [
          `Discover ${shortName} modular kitchen designs —`,
          "ideal layouts, pricing, space requirements and installation options",
          "for Delhi NCR homes.",
        ],
        DESCRIPTION_BUDGET,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  if (pageType === "material") {
    const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
    const name = mat?.name ?? localityName;
    const shortName = mat?.shortName ?? name;
    return {
      title: degradeTitle([`${name} Modular Kitchen`, "Cost, Benefits & Design Ideas", "FurniRevive"], TITLE_BUDGET, MAX_TITLE_LENGTH),
      description: degradeDescription(
        [
          `Explore ${shortName} modular kitchens —`,
          "pricing, finishes, durability, advantages and design ideas",
          "for modern homes in Delhi NCR.",
        ],
        DESCRIPTION_BUDGET,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  if (pageType === "cost") {
    const cost = MODULAR_KITCHEN_COST_REGISTRY.find((c) => c.slug === slug);
    const name = cost?.name ?? localityName;
    return {
      title: degradeTitle([`${name} Modular Kitchen`, "Price Guide", "FurniRevive"], TITLE_BUDGET, MAX_TITLE_LENGTH),
      description: degradeDescription(
        [
          "Compare modular kitchen costs in Delhi NCR —",
          "pricing by material, layout and budget,",
          "with expert guidance from FurniRevive.",
        ],
        DESCRIPTION_BUDGET,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  // Locality (default) — branch by tier/localityType/averageProjectValue so
  // the 800+ locality pages don't all share one identical title/description.
  // IMPORTANT: the displayed name always comes from the caller-supplied
  // localityName, never re-derived from a registry .find() — kitchen-locality-registry.ts
  // has ~29 duplicate-slug/different-name pairs (e.g. golf-course-road-gurgaon), and
  // re-deriving the name here would silently give one page another page's name.
  const kLoc: KitchenLocalityEntry | undefined = MODULAR_KITCHEN_LOCALITY_REGISTRY.find(
    (l) => l.slug === slug,
  );
  const locType = kLoc?.localityType ?? "mixed";
  const projValue = kLoc?.averageProjectValue ?? "mid";
  const landmark = kLoc?.landmarks[0];

  let titleSuffix: string;
  let buildDescSegments: (landmarkFragment: string) => readonly string[];

  if (projValue === "luxury" || projValue === "premium") {
    if (locType === "villa") {
      titleSuffix = "Luxury Villa Design";
      buildDescSegments = (lf) => [
        `Bespoke modular kitchens for ${localityName}'s independent homes and villas${lf}.`,
        "Island layouts, imported hardware, luxury finishes —",
        "free design consultation.",
      ];
    } else if (locType === "apartments") {
      titleSuffix = "Premium Apartment Design";
      buildDescSegments = (lf) => [
        `Premium modular kitchen design for ${localityName} apartments${lf}.`,
        "Space-optimised layouts, soft-close hardware, quality finishes —",
        "free design consultation.",
      ];
    } else {
      titleSuffix = "Premium Design & Installation";
      buildDescSegments = (lf) => [
        `Bespoke modular kitchen design for premium homes in ${localityName}${lf}.`,
        "Free design consultation, 10-year warranty,",
        "certified installation.",
      ];
    }
  } else if (projValue === "budget") {
    titleSuffix = "Budget-Friendly Design";
    buildDescSegments = (lf) => [
      `Affordable modular kitchen in ${localityName}${lf} from ₹80,000.`,
      "No hidden costs, local delivery,",
      "written 5-year warranty.",
    ];
  } else if (locType === "apartments") {
    // mid + apartments
    titleSuffix = "Apartment Design";
    buildDescSegments = (lf) => [
      `Custom modular kitchen for ${localityName} apartments${lf}.`,
      "Compact layouts, smart storage,",
      "transparent pricing from ₹80,000.",
    ];
  } else {
    // mid + villa/mixed
    titleSuffix = "Custom Design & Installation";
    buildDescSegments = (lf) => [
      `Transform your kitchen with a fully custom modular kitchen in ${localityName}${lf}.`,
      "Transparent pricing from ₹80,000",
      "and a 10-year warranty.",
    ];
  }

  // Try with the landmark fragment first (extra specificity); if the locality
  // name is long enough that even the shortest segment set still needs the
  // hard-ceiling safety net, drop the landmark fragment entirely and retry —
  // preferred over letting truncate() cut mid-word.
  const landmarkFragment = landmark ? `, near ${landmark}` : "";
  let description = degradeDescription(buildDescSegments(landmarkFragment), DESCRIPTION_BUDGET, MAX_DESCRIPTION_LENGTH);
  if (landmarkFragment && description.endsWith("…")) {
    description = degradeDescription(buildDescSegments(""), DESCRIPTION_BUDGET, MAX_DESCRIPTION_LENGTH);
  }

  return {
    title: degradeTitle([`${localityName} Modular Kitchen`, titleSuffix, "FurniRevive"], TITLE_BUDGET, MAX_TITLE_LENGTH),
    description,
  };
}

// ─── Non-kitchen (repair service) SEO metadata — graceful degradation ────────

/**
 * Title cascade: try with city (unless redundant with locality name) + short
 * benefit, then drop city, then drop benefit. Never touches titleModifier —
 * that also feeds the on-page H1 via content-engine/modules/hero.ts and must
 * stay untouched. Uses the dedicated shortTitleBenefit field instead.
 */
export function buildRegistryTitle(service: ServiceEntry, localityName: string, cityDisplayName: string): string {
  const benefit = service.seo.shortTitleBenefit ?? service.seo.titleModifier;
  const locationWithCity = isCityRedundant(localityName, cityDisplayName)
    ? localityName
    : `${localityName}, ${cityDisplayName}`;

  // Furniture repair titles always keep the brand and stay within BRANDED_TITLE_BUDGET;
  // the benefit is the first segment dropped so the brand is never truncated.
  if (service.slug === "furniture-repair") {
    const branded = [
      `${service.name} in ${locationWithCity} – ${benefit} | ${BUSINESS.name}`,
      `${service.name} in ${locationWithCity} | ${BUSINESS.name}`,
      `${service.name} in ${localityName} | ${BUSINESS.name}`,
    ];
    const fit = branded.find((c) => c.length <= BRANDED_TITLE_BUDGET);
    if (fit) return fit;
    // Very long locality names: allow up to the standard budget rather than lose the brand.
    const longFit = branded[2];
    if (longFit.length <= TITLE_BUDGET) return longFit;
    const compact = `Furniture Repair, ${localityName} | ${BUSINESS.name}`;
    if (compact.length <= MAX_TITLE_LENGTH) return compact;
  }

  const candidates = [
    `${service.name} in ${locationWithCity} – ${benefit}`,
    `${service.name} in ${localityName} – ${benefit}`,
    `${service.name} in ${locationWithCity}`,
    `${service.name} in ${localityName}`,
  ];
  for (const c of candidates) {
    if (c.length <= TITLE_BUDGET) return c;
  }
  return truncate(candidates[candidates.length - 1], MAX_TITLE_LENGTH);
}

/**
 * Description cascade: full benefit body, then drop the second keyword,
 * then collapse to a short generic body. The opening question and the
 * phone number are always kept intact — the phone number must never be
 * cut mid-digit.
 */
export function buildRegistryDescription(
  service: ServiceEntry,
  serviceLower: string,
  localityName: string,
  brand: string,
  displayPhone: string,
): string {
  const keyword1 = service.seo.metaKeywords[0] ?? "";
  const keyword2 = service.seo.metaKeywords[1] ?? "";
  const isCorporate = service.capabilities?.audience?.corporate === true;

  const candidates = isCorporate
    ? [
        `Need ${serviceLower} in ${localityName}? ${brand} provides on-site corporate repair — ${keyword1}, ${keyword2}, GST billing & AMC. Call ${displayPhone}.`,
        `Need ${serviceLower} in ${localityName}? On-site corporate repair, ${keyword1}, GST billing & AMC. Call ${displayPhone}.`,
        `Need ${serviceLower} in ${localityName}? On-site repair with GST billing & AMC. Call ${displayPhone}.`,
      ]
    : [
        `Need ${serviceLower} in ${localityName}? ${brand} provides same-day doorstep service, ${keyword1} & ${keyword2}, free inspection, warranty. Call ${displayPhone}.`,
        `Need ${serviceLower} in ${localityName}? ${brand} provides same-day doorstep service, ${keyword1}, free inspection & warranty. Call ${displayPhone}.`,
        `Need ${serviceLower} in ${localityName}? Doorstep service, free inspection & warranty. Call ${displayPhone}.`,
      ];

  for (const c of candidates) {
    if (c.length <= DESCRIPTION_BUDGET) return c;
  }
  return truncate(candidates[candidates.length - 1], MAX_DESCRIPTION_LENGTH);
}

// ─── Breadcrumb helpers ────────────────────────────────────────────────────────

type BreadcrumbItem = { name: string; href: string | null };

function buildKitchenBreadcrumbs(
  slug: string,
  localityName: string,
  cityDisplayName: string,
): BreadcrumbItem[] {
  const pageType = getKitchenPageType(slug);
  const base: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Modular Kitchens", href: "/modular-kitchen" },
  ];

  if (pageType === "locality") {
    const entry = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === slug);
    const city = entry?.city ?? "delhi";
    return [
      ...base,
      { name: cityDisplayName, href: `/modular-kitchen-${city}` },
      { name: localityName, href: null },
    ];
  }

  if (pageType === "layout") {
    const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
    return [
      ...base,
      { name: "Layouts", href: null },
      { name: layout?.shortName ?? localityName, href: null },
    ];
  }

  if (pageType === "material") {
    const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
    return [
      ...base,
      { name: "Materials", href: null },
      { name: mat?.shortName ?? localityName, href: null },
    ];
  }

  // cost
  const cost = MODULAR_KITCHEN_COST_REGISTRY.find((c) => c.slug === slug);
  return [
    ...base,
    { name: "Costs", href: null },
    { name: cost?.shortName ?? localityName, href: null },
  ];
}

// ─── Visible Breadcrumb component ─────────────────────────────────────────────

function KitchenBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="bg-stone-900/80 backdrop-blur-sm text-white/70 text-xs">
      <ol className="max-w-5xl mx-auto px-4 py-2 flex items-center flex-wrap gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 text-white/40 shrink-0" />}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {i === 0 ? <Home className="h-3 w-3" /> : item.name}
              </Link>
            ) : (
              <span className="text-white/90 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── City hub URL builder ──────────────────────────────────────────────────────

function buildCityHubUrl(service: ServiceEntry, locality: LocalityEntry): string {
  if (service.cityHubPattern) {
    return `${CANONICAL_ORIGIN}${service.cityHubPattern
      .replace("{city}", locality.city)
      .replace("{service}", service.slug)}`;
  }
  // Repair fallback: /{service}-{city}
  const isCorporate = service.capabilities?.audience?.corporate === true;
  if (isCorporate) return `${CANONICAL_ORIGIN}/office-chair-repair-${locality.city}`;
  return `${CANONICAL_ORIGIN}/${service.slug}-${locality.city}`;
}

// ─── Main template ─────────────────────────────────────────────────────────────

export default function RegistryPageTemplate({
  sections,
  locality,
  service,
}: RegistryPageTemplateProps) {
  const location = useLocation();

  const hero = sections.find((s): s is HeroSectionData => s.type === "hero");
  const kitchenHero = sections.find((s): s is KitchenHeroSectionData => s.type === "kitchen-hero");
  const faq = sections.find((s): s is FaqSectionData => s.type === "faq");
  const kitchenFaq = sections.find((s): s is KitchenFaqSectionData => s.type === "kitchen-faq");

  const isCorporate = service.capabilities?.audience?.corporate === true;
  const isKitchen = service.slug === "modular-kitchen";
  const pricing = sections.find((s): s is PricingSectionData => s.type === "pricing");
  const repairTypes = sections.find((s): s is RepairTypesSectionData => s.type === "repair-types");

  // ─── HomeServicesSection: page type + visibility ───────────────────────────
  const kitchenPageTypeForCrossLink: "locality" | "layout" | "material" | "cost" | "hub" | "city" | undefined =
    isKitchen ? getKitchenPageType(locality.slug) : undefined;

  // Only show cross-service section on kitchen pages to preserve topical authority on repair pages
  const showCrossLinkSection = isKitchen;

  const cityDisplayName = CITY_DISPLAY_NAMES[locality.city];
  const canonicalHref = `${CANONICAL_ORIGIN}${location.pathname}`;

  // ─── SEO metadata ─────────────────────────────────────────────────────────────
  let pageTitle: string;
  let description: string;

  if (isKitchen) {
    const meta = buildKitchenMeta(locality.slug, locality.name);
    pageTitle = meta.title;
    description = meta.description;
  } else {
    pageTitle = buildRegistryTitle(service, locality.name, cityDisplayName);
    description = buildRegistryDescription(
      service,
      service.name.toLowerCase(),
      locality.name,
      BUSINESS.name,
      BUSINESS.displayPhone,
    );
  }

  // OG image: use kitchen hero image if available, else business default
  const ogImage = kitchenHero?.props.imageUrl || hero?.props.imageUrl || KITCHEN_OG_IMAGE;

  // ─── JSON-LD: LocalBusiness ────────────────────────────────────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    priceRange: BUSINESS.priceRange,
    openingHours: BUSINESS.openingHours,
    sameAs: [BUSINESS.whatsappUrl],
    serviceType: service.name,
    address: BUSINESS_ADDRESS,
    geo: BUSINESS_GEO,
    areaServed: [
      { "@type": "Place", name: `${locality.name}, ${cityDisplayName}` },
      ...BUSINESS_AREA_SERVED,
    ],
  };

  // ─── JSON-LD: FAQPage (repair faq OR kitchen-faq) ─────────────────────────
  const activeFaq = faq ?? kitchenFaq;
  const faqSchema =
    activeFaq && activeFaq.props.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: activeFaq.props.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  // ─── JSON-LD: OfferCatalog (corporate) ────────────────────────────────────
  const offerCatalogSchema =
    isCorporate && pricing && pricing.props.items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: `Office Chair Repair Services — ${locality.name}`,
          itemListElement: pricing.props.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.service },
            price: item.startingPrice.replace("₹", "").replace(",", ""),
            priceCurrency: "INR",
            seller: { "@type": "LocalBusiness", name: "FurniRevive" },
          })),
        }
      : null;

  // ─── JSON-LD: ItemList (corporate) ────────────────────────────────────────
  const itemListSchema =
    isCorporate && repairTypes && repairTypes.props.problems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Office Chair Types We Repair — ${locality.name}`,
          itemListElement: repairTypes.props.problems.map((problem, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: problem.label,
          })),
        }
      : null;

  // ─── JSON-LD: BreadcrumbList ───────────────────────────────────────────────
  const cityHubUrl = buildCityHubUrl(service, locality);
  let breadcrumbItems: { name: string; item: string }[];

  if (isKitchen) {
    const crumbs = buildKitchenBreadcrumbs(locality.slug, locality.name, cityDisplayName);
    breadcrumbItems = crumbs.map((c) => ({
      name: c.name,
      item: c.href ? `${CANONICAL_ORIGIN}${c.href}` : canonicalHref,
    }));
  } else {
    breadcrumbItems = [
      { name: "Home", item: `${CANONICAL_ORIGIN}/` },
      { name: `${cityDisplayName} ${service.name}`, item: cityHubUrl },
      { name: locality.name, item: canonicalHref },
    ];
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  // ─── Kitchen breadcrumb items for visible nav ──────────────────────────────
  const kitchenBreadcrumbItems = isKitchen
    ? buildKitchenBreadcrumbs(locality.slug, locality.name, cityDisplayName)
    : null;

  // ─── useEffect: title, meta, canonical, OG, Twitter ──────────────────────
  useEffect(() => {
    document.title = pageTitle;

    function setMeta(selector: string, attr: string, value: string) {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    }

    function setOrCreateMeta(name: string, content: string, property = false) {
      const attr = property ? "property" : "name";
      const existing = document.querySelector(`meta[${attr}="${name}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const el = document.createElement("meta");
        el.setAttribute(attr, name);
        el.setAttribute("content", content);
        document.head.appendChild(el);
      }
    }

    // Standard meta
    setMeta('meta[name="description"]', "content", description);

    // Open Graph
    setOrCreateMeta("og:title", pageTitle, true);
    setOrCreateMeta("og:description", description, true);
    setOrCreateMeta("og:url", canonicalHref, true);
    setOrCreateMeta("og:image", ogImage, true);
    setOrCreateMeta("og:type", "website", true);

    // Twitter
    setOrCreateMeta("twitter:card", "summary_large_image");
    setOrCreateMeta("twitter:title", pageTitle);
    setOrCreateMeta("twitter:description", description);
    setOrCreateMeta("twitter:image", ogImage);

    // Canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = existingCanonical === null;
    const canonicalEl = (existingCanonical ?? document.createElement("link")) as HTMLLinkElement;
    const previousCanonical = existingCanonical?.getAttribute("href") ?? null;
    canonicalEl.setAttribute("rel", "canonical");
    canonicalEl.setAttribute("href", canonicalHref);
    if (createdCanonical) document.head.appendChild(canonicalEl);

    return () => {
      if (createdCanonical) canonicalEl.remove();
      else if (previousCanonical !== null) canonicalEl.setAttribute("href", previousCanonical);
    };
  }, [pageTitle, description, canonicalHref, ogImage]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD: LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {offerCatalogSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      )}
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}

      <Navbar />

      <main className="flex-1 pb-16 md:pb-14">
        {sections.map((s) => (
          <Fragment key={s.id}>
            <SectionRenderer section={s} hideBookOnline={isKitchen} />
            {/* Visible breadcrumb rendered immediately after the kitchen-hero section */}
            {isKitchen && s.type === "kitchen-hero" && kitchenBreadcrumbItems && (
              <KitchenBreadcrumb items={kitchenBreadcrumbItems} />
            )}
            {/* Cross-service section after kitchen-reviews (kitchen pages) */}
            {isKitchen && s.type === "kitchen-reviews" && showCrossLinkSection && (
              <HomeServicesSection
                service="modular-kitchen"
                pageType={kitchenPageTypeForCrossLink}
                cityName={cityDisplayName}
              />
            )}
            {/* Cross-service section after testimonials (repair pages) */}
            {!isKitchen && s.type === "testimonials" && showCrossLinkSection && (
              <HomeServicesSection
                service="repair"
                pageType="locality"
                cityName={cityDisplayName}
              />
            )}
            {isKitchen && s.type === "kitchen-intro" && (() => {
              const kpt = getKitchenPageType(locality.slug);
              if (kpt === "locality") {
                return <KitchenGalleryPreview images={PREVIEW_GALLERY} />;
              }
              // layout and material pages: check if registry entry has galleryFilter
              const layoutEntry = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === locality.slug);
              const materialEntry = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === locality.slug);
              const galleryFilter = layoutEntry?.galleryFilter ?? materialEntry?.galleryFilter;
              if (!galleryFilter) return null;
              return (
                <Suspense fallback={null}>
                  <PremiumKitchenGallery
                    images={getRootGallery()}
                    pageType={kpt as "layout" | "material"}
                    filter={galleryFilter}
                  />
                </Suspense>
              );
            })()}
          </Fragment>
        ))}

      </main>

      <><KitchenTrustStrip /><Footer /></>
      <StickyContactBar hideBookOnline={isKitchen} />
    </div>
  );
}
