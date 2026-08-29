/**
 * Kitchen Blog Recommendation Engine
 *
 * Picks 4 contextually relevant entries from KITCHEN_BLOG_REGISTRY for a given page slug.
 * Architecture mirrors blog-recommendation-engine.ts (furniture/sofa pages).
 *
 * Guarantees:
 * - Always returns exactly MAX_RESULTS entries (falls back to top-scoring if pool is thin).
 * - Fully deterministic: same slug + same registry → identical result every run.
 * - No I/O, no async. Safe to call during render.
 */

import { KITCHEN_BLOG_REGISTRY, type KitchenBlogEntry } from "@/lib/registry/kitchen-blog-registry.ts";

const MAX_RESULTS = 4;

// Scoring weights
const TOKEN_MATCH    = 3; // slug token appears in blog slug
const CATEGORY_MATCH = 2; // blog category aligns with page intent
const KEYWORD_MATCH  = 1; // blog slug contains a domain keyword present in page slug

/** Map common page slug tokens → blog category */
const TOKEN_TO_CATEGORY: Record<string, KitchenBlogEntry["category"]> = {
  "l-shape":    "layouts",
  "u-shape":    "layouts",
  "parallel":   "layouts",
  "straight":   "layouts",
  "island":     "layouts",
  "peninsula":  "layouts",
  "layout":     "layouts",
  "acrylic":    "materials",
  "laminate":   "materials",
  "membrane":   "materials",
  "glass":      "materials",
  "pu":         "materials",
  "material":   "materials",
  "finish":     "materials",
  "cost":       "cost",
  "price":      "cost",
  "budget":     "cost",
  "lakh":       "cost",
  "under":      "cost",
  "delhi":      "city",
  "gurgaon":    "city",
  "noida":      "city",
  "ghaziabad":  "city",
  "faridabad":  "city",
  "renovation": "planning",
  "planning":   "planning",
  "modular":    "planning",
};

function deriveCategory(tokens: string[]): KitchenBlogEntry["category"] | null {
  for (const t of tokens) {
    const cat = TOKEN_TO_CATEGORY[t];
    if (cat) return cat;
  }
  return null;
}

function scoreEntry(entry: KitchenBlogEntry, tokens: string[]): number {
  let score = 0;
  const blogTokens = entry.slug.split("-");

  // Token overlap between page slug and blog slug
  for (const t of tokens) {
    if (t.length > 2 && blogTokens.includes(t)) {
      score += TOKEN_MATCH;
    }
  }

  // Category alignment
  const cat = deriveCategory(tokens);
  if (cat && entry.category === cat) {
    score += CATEGORY_MATCH;
  }

  // Domain keyword presence in blog slug
  const DOMAIN_KEYWORDS = ["kitchen", "modular", "repair", "cost", "renovation", "laminate", "acrylic", "design"];
  for (const kw of DOMAIN_KEYWORDS) {
    if (tokens.includes(kw) && entry.slug.includes(kw)) {
      score += KEYWORD_MATCH;
    }
  }

  return score;
}

/**
 * Returns 4 contextually relevant kitchen blog entries for a given page slug.
 */
export function selectRelatedKitchenBlogs(pageSlug: string): KitchenBlogEntry[] {
  const tokens = pageSlug.toLowerCase().split("-");
  const published = KITCHEN_BLOG_REGISTRY.filter((e) => e.status === "published");

  const scored = published
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .sort((a, b) => b.score - a.score || a.entry.slug.localeCompare(b.entry.slug));

  // Enforce category diversity: max 2 per category
  const categoryCounts = new Map<string, number>();
  const diverse: KitchenBlogEntry[] = [];

  for (const { entry } of scored) {
    const count = categoryCounts.get(entry.category) ?? 0;
    if (count < 2) {
      diverse.push(entry);
      categoryCounts.set(entry.category, count + 1);
    }
    if (diverse.length === MAX_RESULTS) break;
  }

  // Top-up if pool is thin (fallback to raw top scores)
  if (diverse.length < MAX_RESULTS) {
    for (const { entry } of scored) {
      if (!diverse.includes(entry)) {
        diverse.push(entry);
      }
      if (diverse.length === MAX_RESULTS) break;
    }
  }

  return diverse.slice(0, MAX_RESULTS);
}
