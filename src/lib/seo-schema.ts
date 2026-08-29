/**
 * JSON-LD structured data builders for FurniRevive SEO pages.
 *
 * Each builder returns a plain object (or null if required fields are absent).
 * buildSchemas() orchestrates all builders and wraps the result in a single @graph.
 *
 * Architecture:
 * - Returns objects (not strings) for easy testing and composition
 * - Single @graph output → one <script> tag per page
 * - Defensive guards: builders return null if required fields are missing
 * - @id anchors allow entities to cross-reference each other
 */

import type { SeoPageData } from "@/lib/seo-constants.ts";
import { BRAND_NAME, PHONE_NUMBER, SITE_URL } from "@/lib/seo-constants.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

/**
 * Maps service keys to their real category hub URL.
 * Only include services that have an actual published hub page.
 * Adding a new hub page = one entry here, no other changes needed.
 */
const CATEGORY_HUB_URLS: Partial<Record<SeoServiceKey, string>> = {
  "modular-kitchen": "/modular-kitchen",
} as const;

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Delhi",
  addressRegion: "Delhi",
  addressCountry: "IN",
} as const;

// ─── Individual builders ────────────────────────────────────────────────────

export function buildLocalBusinessSchema(baseUrl: string): Record<string, unknown> {
  const id = `${baseUrl}#business`;
  return {
    "@type": "LocalBusiness",
    "@id": id,
    name: BRAND_NAME,
    telephone: PHONE_NUMBER,
    url: baseUrl,
    address: ADDRESS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function buildServiceSchema(
  page: SeoPageData,
  baseUrl: string,
): Record<string, unknown> | null {
  if (!page.slug || !page.h1) return null;

  const pageUrl = `${baseUrl}/${page.slug}`;
  const businessId = `${baseUrl}#business`;

  const areaServed =
    page.localAreasSection?.areas && page.localAreasSection.areas.length > 0
      ? page.localAreasSection.areas.map((area) => ({
          "@type": "City",
          name: area,
        }))
      : [{ "@type": "City", name: "Delhi" }];

  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: page.h1,
    description: page.metaDescription,
    url: pageUrl,
    provider: { "@id": businessId },
    areaServed,
  };
}

export function buildWebPageSchema(
  page: SeoPageData,
  baseUrl: string,
): Record<string, unknown> | null {
  if (!page.slug || !page.title) return null;

  const pageUrl = `${baseUrl}/${page.slug}`;
  const businessId = `${baseUrl}#business`;

  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.metaDescription,
    isPartOf: { "@id": baseUrl },
    about: { "@id": businessId },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };
}

export function buildBreadcrumbSchema(
  page: SeoPageData,
  baseUrl: string,
): Record<string, unknown> | null {
  if (!page.slug) return null;

  const pageUrl = `${baseUrl}/${page.slug}`;
  const items: Record<string, unknown>[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
  ];

  // Only emit an intermediate category crumb when a real hub page exists for this service.
  // Keyed by serviceKey (stable) not display text — label still comes from page.category.
  const categoryHubPath =
    page.serviceKey ? CATEGORY_HUB_URLS[page.serviceKey] : undefined;

  if (categoryHubPath) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.category ?? page.h1,
      item: `${baseUrl}${categoryHubPath}`,
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      name: page.h1,
      item: pageUrl,
    });
  } else {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.h1,
      item: pageUrl,
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildFAQSchema(
  page: SeoPageData,
): Record<string, unknown> | null {
  if (!page.faqs || page.faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Orchestrator ───────────────────────────────────────────────────────────

/**
 * Builds a single JSON-LD @graph object for the given page.
 * Returns null if page has no slug (safety guard).
 */
export function buildSchemas(
  page: SeoPageData,
  baseUrl: string = SITE_URL,
): { "@context": string; "@graph": Record<string, unknown>[] } | null {
  if (!page.slug) return null;

  const builders = [
    buildLocalBusinessSchema(baseUrl),
    buildServiceSchema(page, baseUrl),
    buildWebPageSchema(page, baseUrl),
    buildBreadcrumbSchema(page, baseUrl),
    buildFAQSchema(page),
  ];

  const graph = builders.filter(
    (schema): schema is Record<string, unknown> => schema !== null,
  );

  if (graph.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
