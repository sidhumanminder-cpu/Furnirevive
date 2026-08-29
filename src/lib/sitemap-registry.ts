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
