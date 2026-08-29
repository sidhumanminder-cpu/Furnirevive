/**
 * JSON-LD structured data builders.
 *
 * Three reusable atomic builders (Article, FAQPage, BreadcrumbList)
 * plus one kitchen-specific composite helper (buildEditorialSchemas).
 *
 * Each builder returns a JSON-LD string ready to inject as
 * <script type="application/ld+json">.
 */

export type ArticleJsonLdOptions = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  publisherName?: string;
  publisherUrl?: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

/** Generates Article JSON-LD string. */
export function buildArticleJsonLd(opts: ArticleJsonLdOptions): string {
  const publisher = {
    "@type": "Organization",
    name: opts.publisherName ?? "FurniRevive",
    url: opts.publisherUrl ?? "https://furnirevive.com",
  };
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    publisher,
    author: publisher,
  });
}

/** Generates FAQPage JSON-LD string from an array of Q&A pairs. */
export function buildFAQJsonLd(faqs: readonly FaqItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  });
}

/** Generates BreadcrumbList JSON-LD string from an ordered array of crumbs. */
export function buildBreadcrumbJsonLd(
  crumbs: readonly BreadcrumbItem[],
  origin = "https://furnirevive.com",
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.href.startsWith("http") ? crumb.href : `${origin}${crumb.href}`,
    })),
  });
}

export type EditorialSchemasOptions = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  breadcrumbs: readonly BreadcrumbItem[];
  /** Omit or pass empty array to skip FAQPage schema */
  faqs?: readonly FaqItem[];
};

/**
 * Kitchen-specific composite helper.
 * Returns an array of JSON-LD strings: [Article, BreadcrumbList, FAQPage?]
 * Inject each as a separate <script type="application/ld+json"> tag.
 */
export function buildEditorialSchemas(opts: EditorialSchemasOptions): string[] {
  const schemas: string[] = [
    buildArticleJsonLd({
      title: opts.title,
      description: opts.description,
      url: opts.url,
      datePublished: opts.datePublished,
      dateModified: opts.dateModified,
    }),
    buildBreadcrumbJsonLd(opts.breadcrumbs),
  ];
  if (opts.faqs && opts.faqs.length > 0) {
    schemas.push(buildFAQJsonLd(opts.faqs));
  }
  return schemas;
}
