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
import { BUSINESS } from "@/lib/business-config.ts";
import { CITY_DISPLAY_NAMES } from "@/lib/content-engine/content-pools.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
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
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;

// Default OG image for kitchen pages (used when hero has no image)
const KITCHEN_OG_IMAGE = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80";

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

/**
 * Pure token substitution. Replaces `{tokenName}` with values from the tokens
 * map. Unknown tokens are left untouched so nothing is silently dropped.
 */
function substituteTokens(template: string, tokens: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, tokenName: string) => {
    return Object.prototype.hasOwnProperty.call(tokens, tokenName)
      ? tokens[tokenName]
      : match;
  });
}

// ─── Kitchen page type detection ──────────────────────────────────────────────

type KitchenPageType = "locality" | "layout" | "material" | "cost";

function getKitchenPageType(slug: string): KitchenPageType {
  if (MODULAR_KITCHEN_LAYOUT_REGISTRY.some((l) => l.slug === slug)) return "layout";
  if (MODULAR_KITCHEN_MATERIAL_REGISTRY.some((m) => m.slug === slug)) return "material";
  if (MODULAR_KITCHEN_COST_REGISTRY.some((c) => c.slug === slug)) return "cost";
  return "locality";
}

// ─── Kitchen SEO metadata (page-type aware) ───────────────────────────────────

type KitchenMeta = { title: string; description: string };

function buildKitchenMeta(slug: string, localityName: string): KitchenMeta {
  const pageType = getKitchenPageType(slug);

  if (pageType === "layout") {
    const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
    const name = layout?.name ?? localityName;
    return {
      title: truncate(`${name} | Design, Cost & Ideas | FurniRevive`, MAX_TITLE_LENGTH),
      description: truncate(
        `Discover ${layout?.shortName ?? name} modular kitchen designs — ideal layouts, pricing, space requirements and installation options for Delhi NCR homes.`,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  if (pageType === "material") {
    const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
    const name = mat?.name ?? localityName;
    return {
      title: truncate(`${name} | Cost, Benefits & Design Ideas | FurniRevive`, MAX_TITLE_LENGTH),
      description: truncate(
        `Explore ${mat?.shortName ?? name} modular kitchens — pricing, finishes, durability, advantages and design ideas for modern homes in Delhi NCR.`,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  if (pageType === "cost") {
    const cost = MODULAR_KITCHEN_COST_REGISTRY.find((c) => c.slug === slug);
    const name = cost?.name ?? localityName;
    return {
      title: truncate(`${name} | Price Guide | FurniRevive`, MAX_TITLE_LENGTH),
      description: truncate(
        `Compare modular kitchen costs in Delhi NCR — pricing by material, layout and budget, with expert guidance from FurniRevive.`,
        MAX_DESCRIPTION_LENGTH,
      ),
    };
  }

  // Locality (default)
  return {
    title: truncate(
      `Modular Kitchen in ${localityName} | Custom Design & Installation | FurniRevive`,
      MAX_TITLE_LENGTH,
    ),
    description: truncate(
      `Looking for a modular kitchen in ${localityName}? FurniRevive designs and installs custom modular kitchens with premium materials, transparent pricing and professional installation.`,
      MAX_DESCRIPTION_LENGTH,
    ),
  };
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
    const tokens: Record<string, string> = {
      service: service.name,
      serviceLower: service.name.toLowerCase(),
      locality: locality.name,
      city: cityDisplayName,
      titleModifier: service.seo.titleModifier,
      brand: BUSINESS.name,
      phone: BUSINESS.phone,
      displayPhone: BUSINESS.displayPhone,
      keyword1: service.seo.metaKeywords[0] ?? "",
      keyword2: service.seo.metaKeywords[1] ?? "",
    };
    pageTitle = truncate(substituteTokens(service.seo.titleTemplate, tokens), MAX_TITLE_LENGTH);
    description = truncate(substituteTokens(service.seo.metaTemplate, tokens), MAX_DESCRIPTION_LENGTH);
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
    areaServed: {
      "@type": "Place",
      name: `${locality.name}, ${cityDisplayName}`,
    },
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
