/**
 * Sitemap Registry — FurniRevive
 *
 * Shared types and core page definitions for sitemap generation.
 * Consumed by: generate-sitemap.ts (never by page components or routing).
 *
 * Architecture rule: this file must never import from page registries or page builders.
 * It is the leaf node in the dependency graph.
 */

export type SitemapPriority = "1.0" | "0.9" | "0.8" | "0.7" | "0.6";

export type SitemapChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapCategory = "core" | "seo" | "blog" | "images" | "news";

export type SitemapEntry = {
  slug: string;
  priority: SitemapPriority;
  changefreq: SitemapChangeFreq;
  category: SitemapCategory;
  /** Optional explicit lastmod (ISO 8601 date string, e.g. "2026-07-19").
   * If omitted, the generator uses today's date. */
  lastmod?: string;
};

/** The four static core pages that never live in any SEO page registry. */
export const CORE_PAGES: SitemapEntry[] = [
  { slug: "",        priority: "1.0", changefreq: "weekly",  category: "core" },
  { slug: "contact", priority: "0.7", changefreq: "monthly", category: "core" },
  { slug: "book",    priority: "0.8", changefreq: "monthly", category: "core" },
  { slug: "blog",    priority: "0.8", changefreq: "weekly",  category: "core" },
  { slug: "blog/modular-kitchen", priority: "0.8", changefreq: "weekly", category: "blog" },
];

/** One-time explicit lastmod batch (2026-10-14). Wins over the content hash in generate-sitemap.ts. */
export const EXPLICIT_LASTMOD_DATE = "2026-10-14";
export const EXPLICIT_LASTMOD_PATHS: ReadonlySet<string> = new Set([
  "/areas-we-serve",
  "/sofa-repair-delhi",
  "/sofa-repair-noida",
  "/chair-repair-delhi",
  "/sofa-repair-gurgaon",
  "/carpenter-home-service-delhi",
  "/sofa-repair-ghaziabad",
  "/furniture-repair-delhi",
  "/blog/sofa-repair-cost-delhi",
  "/furniture-repair-gurgaon",
  "/furniture-repair-ghaziabad",
  "/furniture-repair-faridabad",
  "/sofa-repair-faridabad",
  "/furniture-repair-noida",
  "/sofa-repair-cost-delhi",
  "/godrej-furniture-repair-delhi",
  "/chair-repair-gurgaon",
  "/furniture-repair-greater-noida",
  "/sofa-upholstery-delhi",
  "/office-chair-repair-delhi",
  "/sofa-repair-indirapuram-ghaziabad",
  "/blog/sofa-upholstery-cost-delhi",
  "/furniture-repair-price-guide-delhi",
  "/furniture-polish-delhi",
  "/doorstep-sofa-repair-delhi",
  "/blog/furniture-repair-vs-replace",
  "/sofa-repair-rohini",
  "/furniture-repair-dwarka",
  "/furniture-repair-price-list-delhi",
  "/blog/furniture-restoration-vs-repair-vs-refinishing",
  "/same-day-sofa-repair-delhi",
  "/furniture-repair-kirti-nagar",
  "/sofa-foam-replacement-cost-delhi",
  "/sofa-repair-dwarka",
  "/sofa-repair-gurgaon-sector-56",
  "/recliner-repair-delhi",
  "/",
  "/sofa-repair-south-delhi",
  "/sofa-repair-noida-sector-137",
  "/furniture-repair-malviya-nagar",
  "/recliner-sofa-repair-delhi",
  "/sofa-fabric-tear-repair-delhi",
  "/blog/how-to-fix-dining-chair",
  "/carpenter-near-me-delhi",
  "/sofa-foam-replacement-delhi",
  "/dining-table-repair-delhi",
  "/furniture-repair-pitampura",
  "/furniture-repair-lajpat-nagar",
  "/sofa-repair-rajouri-garden",
  "/leather-sofa-repair-delhi",
  "/furniture-repair-indirapuram",
]);
