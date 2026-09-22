import { CORE_PAGES, type SitemapEntry } from "../src/lib/sitemap-registry.ts";
import { ALL_BLOG_POSTS } from "../src/lib/blog-data.ts";
import { getAllSlugsForSitemap, getPageBySlug } from "../src/lib/seo-pages/registry.ts";
import { generatePages } from "../src/lib/registry/generate-pages.ts";
import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Step 1 — Build all entries

const blogEntries: SitemapEntry[] = ALL_BLOG_POSTS.map((post) => ({
  slug: `blog/${post.slug}`,
  priority: "0.6",
  changefreq: "monthly",
  category: "blog",
}));

const seoRaw = getAllSlugsForSitemap();
const seoEntries: SitemapEntry[] = seoRaw.map((e) => ({
  slug: e.slug,
  priority: e.priority as SitemapEntry["priority"],
  changefreq: "monthly" as const,
  category: "seo" as const,
}));

// Registry-first pages (new programmatic SEO — repair + kitchen clusters)
// These are served by DynamicSeoPage/RegistryPage but not in the legacy registry.
const registryPages = generatePages();
const registryEntries: SitemapEntry[] = registryPages.map((p) => ({
  slug: p.urlPath.replace(/^\//, ""), // strip leading slash for sitemap slug
  priority: "0.7",
  changefreq: "monthly" as const,
  category: "seo" as const,
}));

// Phase 3 & Phase 2 slugs removed 2026-08-21 (SEO recovery — confirmed 404s).
// Slugs saved to scripts/kitchen-phase2-phase3-slugs.json for future use.

// Phase 1 — Kitchen city hubs, near-me, and directory pages
// These have live routes in App.tsx but were never wired into the sitemap generator.
const kitchenPhase1Entries: SitemapEntry[] = [
  // Core city hubs
  { slug: "modular-kitchen-delhi",    priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-gurgaon",  priority: "0.9", changefreq: "monthly", category: "seo" },
  // National/directory pages
  { slug: "modular-kitchen",          priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-near-me",  priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-designs",  priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-renovation", priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-guide",    priority: "0.7", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-guides",   priority: "0.7", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-localities", priority: "0.7", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-materials", priority: "0.7", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-budget",   priority: "0.7", changefreq: "monthly", category: "seo" },
  // Chandigarh tricity city hubs
  { slug: "modular-kitchen-chandigarh", priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-mohali",   priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-panchkula", priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-tricity",  priority: "0.8", changefreq: "monthly", category: "seo" },
  // Partner pages
  { slug: "kitchen-partner-chandigarh", priority: "0.6", changefreq: "monthly", category: "seo" },
  { slug: "kitchen-partner-tricity",  priority: "0.6", changefreq: "monthly", category: "seo" },
  // Cost city pages (Delhi was missing from the existing cost architecture)
  { slug: "modular-kitchen-cost-delhi", priority: "0.9", changefreq: "monthly", category: "seo" },
  // Design intent pages
  { slug: "open-kitchen-design",              priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "modern-modular-kitchen-designs",   priority: "0.8", changefreq: "monthly", category: "seo" },
  { slug: "small-modular-kitchen-designs",    priority: "0.8", changefreq: "monthly", category: "seo" },
  // National price authority page
  { slug: "modular-kitchen-price",            priority: "0.9", changefreq: "monthly", category: "seo" },
  // Renovation city hubs
  { slug: "modular-kitchen-renovation-delhi",   priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-renovation-gurgaon", priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "modular-kitchen-renovation-noida",   priority: "0.9", changefreq: "monthly", category: "seo" },
  { slug: "kitchen-renovation-cost-delhi",      priority: "0.9", changefreq: "monthly", category: "seo" },
  // G-shape layout authority page
  { slug: "g-shaped-modular-kitchen",           priority: "0.8", changefreq: "monthly", category: "seo" },
  // SEO bridge page between furniture-repair and kitchen clusters
  { slug: "home-interiors-delhi",              priority: "0.7", changefreq: "monthly", category: "seo" },
];

const allEntriesRaw: SitemapEntry[] = [...CORE_PAGES, ...blogEntries, ...seoEntries, ...registryEntries, ...kitchenPhase1Entries];

// Sitemap-only exclusion: FurniRevive has no service partners in Chandigarh, Mohali,
// or Panchkula markets. Pages, routes, and content are NOT deleted — only omitted
// from the generated sitemap until these markets are activated.
// "tricity" covers the two hardcoded Phase 1 hub/partner entries that target this region.
// Do NOT change the existing Path-A modular-kitchen exclusion or dedup logic below.
const TRICITY_EXCLUDED = ["chandigarh", "mohali", "panchkula", "tricity"];

// Deduplicate by canonical URL — keep first occurrence, discard later duplicates.
// This handles cross-registry overlaps within the kitchen cluster (Path B ∩ Path C)
// without modifying any registry or generation logic.
const _seenUrls = new Set<string>();
const allEntries: SitemapEntry[] = allEntriesRaw.filter((e) => {
  if (TRICITY_EXCLUDED.some((term) => e.slug.includes(term))) return false;
  const url = `https://furnirevive.com/${e.slug.trim().toLowerCase().replace(/^\/+|\/+$/g, "")}`;
  if (_seenUrls.has(url)) return false;
  _seenUrls.add(url);
  return true;
});
const dedupRemovedCount = allEntriesRaw.length - allEntries.length;

// Step 2 — Normalize to canonical URL

const BASE_URL = "https://furnirevive.com";

function toCanonicalUrl(slug: string): string {
  const normalized = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, "");
  return normalized === "" ? BASE_URL + "/" : `${BASE_URL}/${normalized}`;
}

// Step 3 — Validate

const errors: string[] = [];

// Check for duplicate canonical URLs
const urlCounts = new Map<string, number>();
for (const entry of allEntries) {
  const url = toCanonicalUrl(entry.slug);
  urlCounts.set(url, (urlCounts.get(url) ?? 0) + 1);
}
for (const [url, count] of urlCounts) {
  if (count > 1) {
    errors.push(`Duplicate URL: ${url} (${count} entries)`);
  }
}

// Check for uppercase letters in slug
for (const entry of allEntries) {
  if (entry.slug !== entry.slug.toLowerCase()) {
    errors.push(`Invalid slug (uppercase): "${entry.slug}"`);
  }
}

// Check for spaces in slug
for (const entry of allEntries) {
  if (entry.slug.includes(" ")) {
    errors.push(`Invalid slug (spaces): "${entry.slug}"`);
  }
}

// For legacy SEO entries: verify getPageBySlug returns a value
// (registry entries are validated separately by generatePages)
const legacySlugs = new Set(seoEntries.map((e) => e.slug));
for (const entry of seoEntries) {
  if (!legacySlugs.has(entry.slug)) continue;
  const page = getPageBySlug(entry.slug);
  if (!page) {
    errors.push(`Unregistered SEO page: "${entry.slug}"`);
  }
}

if (errors.length > 0) {
  console.error(`✗ Sitemap validation failed\n`);
  console.error(`  Errors (${errors.length}):`);
  for (const err of errors) {
    console.error(`    - ${err}`);
  }
  console.error(`\nAborting. Fix these before regenerating.`);
  process.exit(1);
}

// Step 4 — Sort

const sorted: SitemapEntry[] = [
  ...allEntries.filter((e) => e.category === "core"),
  ...allEntries.filter((e) => e.category === "blog").sort((a, b) => a.slug.localeCompare(b.slug)),
  ...allEntries.filter((e) => e.category === "seo").sort((a, b) => a.slug.localeCompare(b.slug)),
];

// Step 6 — Build XML

function loadExistingLastmods(sitemapPath: string): Map<string, string> {
  const map = new Map<string, string>();
  try {
    const raw = readFileSync(sitemapPath, "utf-8");
    // Match each <url> block and extract loc + lastmod from it
    const urlBlockRe = /<url>([\s\S]*?)<\/url>/g;
    const locRe = /<loc>(.*?)<\/loc>/;
    const lastmodRe = /<lastmod>(.*?)<\/lastmod>/;
    let match: RegExpExecArray | null;
    while ((match = urlBlockRe.exec(raw)) !== null) {
      const block = match[1];
      const locMatch = locRe.exec(block);
      const lastmodMatch = lastmodRe.exec(block);
      if (locMatch && lastmodMatch) {
        map.set(locMatch[1].trim(), lastmodMatch[1].trim());
      }
    }
  } catch {
    // File doesn't exist or is unreadable — start with an empty map
  }
  return map;
}

function buildXml(entries: SitemapEntry[]): string {
  const today = new Date().toISOString().split("T")[0];
  const sitemapPath = resolve(import.meta.dirname ?? ".", "../public/sitemap.xml");
  const existingLastmods = loadExistingLastmods(sitemapPath);

  const urls = entries
    .map((e) => {
      const url = toCanonicalUrl(e.slug);
      // Priority order:
      // 1. explicit lastmod on the entry
      // 2. lastmod from the existing sitemap for this URL
      // 3. today (fallback for new URLs)
      const lastmod = e.lastmod ?? existingLastmods.get(url) ?? today;
      return `  <url><loc>${url}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority><lastmod>${lastmod}</lastmod></url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urls}\n\n</urlset>\n`;
}

const xml = buildXml(sorted);

// Step 6 — Write XML or output to stdout

printSummary();

const outputPath = resolve(import.meta.dirname ?? ".", "../public/sitemap.xml");

if (process.argv.includes("--check")) {
  let existing = "";
  try {
    existing = readFileSync(outputPath, "utf-8");
  } catch {
    // File doesn't exist — treat as stale
  }

  if (existing === xml) {
    printSummary();
    console.log(`✓ Sitemap is up to date.`);
    process.exit(0);
  } else {
    console.error(`✗ Sitemap is stale. Run: pnpm generate-sitemap`);
    process.exit(1);
  }
}

// Step 6 — Write XML

writeFileSync(outputPath, xml, "utf-8");

// Step 7 — Print summary

printSummary();

function printSummary(): void {
  const coreCount = allEntries.filter((e) => e.category === "core").length;
  const blogCount = allEntries.filter((e) => e.category === "blog").length;
  const seoCount = seoEntries.length;
  const registryCount = registryEntries.length;
  const manualKitchenCount = kitchenPhase1Entries.length;
  const totalCount = sorted.length;

  // Count duplicates (should be 0 if we passed validation)
  const dupCount = [...urlCounts.values()].filter((c) => c > 1).length;

  // Count invalid slugs
  const invalidCount = allEntries.filter(
    (e) => e.slug !== e.slug.toLowerCase() || e.slug.includes(" ")
  ).length;

  const pad = (label: string, value: number): string => {
    const numStr = String(value);
    const spaces = Math.max(1, 20 - label.length - numStr.length);
    return `  ${label}${" ".repeat(spaces)}${numStr}`;
  };

  console.log(`✓ Sitemap generated\n`);
  console.log(pad("Core pages:", coreCount));
  console.log(pad("Blog pages:", blogCount));
  console.log(pad("Legacy SEO pages:", seoCount));
  console.log(pad("Registry pages:", registryCount));
  console.log(pad("Manual kitchen pages:", manualKitchenCount));
  console.log("");
  console.log(pad("Total URLs:", totalCount));
  console.log(pad("Dedup removed:", dedupRemovedCount));
  console.log(pad("Duplicates:", dupCount));
  console.log(pad("Invalid slugs:", invalidCount));
  console.log("");
  console.log(`  Output: public/sitemap.xml`);
}
