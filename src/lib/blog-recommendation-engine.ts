import { ALL_BLOG_POSTS, type BlogPost } from "@/lib/blog-data.ts";

/**
 * Scoring constants for blog recommendation ranking.
 * Adjust these values based on Search Console and analytics data.
 * No algorithm changes are required — only these constants need updating.
 */

/** Post directly covers the page's primary service type (e.g. sofa, recliner). Strongest signal. */
const SERVICE_MATCH_SCORE = 3;

/** Post targets the same city as the page (e.g. delhi, gurgaon, noida). */
const CITY_MATCH_SCORE = 2;

/** Per-topic overlap between page context and post keywords (e.g. "pricing", "foam"). */
const TOPIC_MATCH_SCORE = 1;

/** Post category aligns with the page's likely user intent. */
const CATEGORY_MATCH_SCORE = 1;

/** Per shared slug token between page slug and post slug (rewards locality-specific posts). */
const TOKEN_MATCH_SCORE = 1;

/** Slug of the universal anchor post — always included in recommendations. Change here if the slug ever changes. */
const UNIVERSAL_ANCHOR_SLUG = "furniture-repair-vs-replace";

/** Minimum score a post must reach to qualify. Universal anchor is exempt. */
const MIN_SCORE = 2;

/** Maximum number of recommendations returned. */
const MAX_RECOMMENDATIONS = 4;

/** Maximum posts per blog category in the final selection (enforces diversity). */
const MAX_PER_CATEGORY = 1;

type PageSignals = {
  tokens: string[];
  serviceKey: string;
  cityKey: string;
  topics: string[];
  categoryHint: string;
};

/** Internal scored result — used in scorePostsForPage() and unit tests. */
export type ScoredPost = {
  post: BlogPost;
  score: number;
  reasons: string[];
};

function deriveSignals(pageSlug: string): PageSignals {
  const tokens = pageSlug.toLowerCase().split("-");

  // Service detection
  const serviceMap: Record<string, string> = {
    sofa: "sofa",
    recliner: "recliner",
    chair: "chair",
    furniture: "furniture",
    wooden: "wooden",
    carpenter: "carpenter",
    polish: "polish",
    upholstery: "upholstery",
  };
  let serviceKey = "";
  for (const token of tokens) {
    if (serviceMap[token]) {
      serviceKey = serviceMap[token];
      break;
    }
  }

  // City detection
  const cityList = ["delhi", "gurgaon", "noida", "faridabad", "ghaziabad", "chandigarh", "mohali", "panchkula"];
  let cityKey = "";
  for (const token of tokens) {
    if (cityList.includes(token)) {
      cityKey = token;
      break;
    }
  }

  // Topic detection
  const topics: string[] = [];
  const topicAdded = new Set<string>();

  for (const token of tokens) {
    if (["cost", "price", "pricing", "rate"].includes(token) && !topicAdded.has("pricing")) {
      topics.push("pricing");
      topicAdded.add("pricing");
    }
    if (token === "foam" && !topicAdded.has("foam")) {
      topics.push("foam");
      topicAdded.add("foam");
    }
    if (token === "leather" && !topicAdded.has("leather")) {
      topics.push("leather");
      topicAdded.add("leather");
    }
    if (token === "spring" && !topicAdded.has("spring")) {
      topics.push("spring");
      topicAdded.add("spring");
    }
    if (token === "frame" && !topicAdded.has("frame")) {
      topics.push("frame");
      topicAdded.add("frame");
    }
    if (token === "upholstery" && !topicAdded.has("upholstery")) {
      topics.push("upholstery");
      topicAdded.add("upholstery");
    }
    if (token === "repair" && !topicAdded.has("repair")) {
      topics.push("repair");
      topicAdded.add("repair");
    }
    if (["restore", "restoration"].includes(token) && !topicAdded.has("restoration")) {
      topics.push("restoration");
      topicAdded.add("restoration");
    }
    if (["replace", "replacement"].includes(token) && !topicAdded.has("replacement")) {
      topics.push("replacement");
      topicAdded.add("replacement");
    }
    if (["maintain", "maintenance", "care"].includes(token) && !topicAdded.has("care")) {
      topics.push("care");
      topicAdded.add("care");
    }
  }

  // Category hint
  let categoryHint = "";
  if (tokens.some(t => ["cost", "price", "pricing"].includes(t))) {
    categoryHint = "Pricing Guide";
  } else if (tokens.includes("repair")) {
    categoryHint = "Repair Guide";
  } else if (tokens.some(t => ["care", "maintain", "maintenance"].includes(t))) {
    categoryHint = "Care Guide";
  }

  return { tokens, serviceKey, cityKey, topics, categoryHint };
}

function scorePost(post: BlogPost, signals: PageSignals): ScoredPost {
  let score = 0;
  const reasons: string[] = [];

  // 1. Service match
  if (signals.serviceKey && post.keywords.includes(signals.serviceKey)) {
    score += SERVICE_MATCH_SCORE;
    reasons.push("service");
  }

  // 2. City match
  if (signals.cityKey && (post.slug.includes(signals.cityKey) || post.keywords.includes(signals.cityKey))) {
    score += CITY_MATCH_SCORE;
    reasons.push("city");
  }

  // 3. Topic match
  for (const topic of signals.topics) {
    if (post.keywords.some(k => k.includes(topic))) {
      score += TOPIC_MATCH_SCORE;
      reasons.push(`topic:${topic}`);
    }
  }

  // 4. Category match
  if (signals.categoryHint && post.category === signals.categoryHint) {
    score += CATEGORY_MATCH_SCORE;
    reasons.push("category");
  }

  // 5. Token overlap (skip trivial tokens of length <= 2)
  for (const token of signals.tokens) {
    if (token.length > 2 && post.slug.includes(token)) {
      score += TOKEN_MATCH_SCORE;
      reasons.push(`token:${token}`);
    }
  }

  return { post, score, reasons };
}

/**
 * Returns 3–4 contextually relevant blog posts for a given SEO page slug.
 *
 * Guarantees:
 * - Always includes the universal anchor post (UNIVERSAL_ANCHOR_SLUG).
 * - Maximum one post per blog category (diversity enforcement).
 * - Minimum score threshold (MIN_SCORE) filters unrelated content. The universal anchor is exempt.
 * - Output is fully deterministic: same pageSlug + same ALL_BLOG_POSTS → identical result every run.
 * - Tie-breaking: score DESC → slug ASC (insertion-order independent).
 * - Returns at most MAX_RECOMMENDATIONS posts.
 * - Runs in O(n) time with respect to the number of blog posts.
 *   Performs no I/O, network requests, or asynchronous operations. Safe to call synchronously during render.
 *
 * @param pageSlug - The slug of the SEO page (e.g. "sofa-repair-sector-49-gurgaon")
 */
export function selectRelatedPosts(pageSlug: string): BlogPost[] {
  const signals = deriveSignals(pageSlug);
  const universalAnchor = ALL_BLOG_POSTS.find(p => p.slug === UNIVERSAL_ANCHOR_SLUG);

  // Score all posts
  const scored = ALL_BLOG_POSTS.map(post => scorePost(post, signals));

  // Remove low scores — but keep universal anchor eligible regardless
  const qualified = scored.filter(sp =>
    sp.post.slug === UNIVERSAL_ANCHOR_SLUG || sp.score >= MIN_SCORE
  );

  // Sort: score DESC → slug ASC (deterministic tie-break)
  qualified.sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug));

  // Enforce category diversity: max MAX_PER_CATEGORY per category
  const categoryCounts = new Map<string, number>();
  const diverse: ScoredPost[] = [];
  for (const sp of qualified) {
    const count = categoryCounts.get(sp.post.category) ?? 0;
    if (count < MAX_PER_CATEGORY) {
      diverse.push(sp);
      categoryCounts.set(sp.post.category, count + 1);
    }
  }

  // Take top 3 (excluding universal anchor for now)
  const top3 = diverse
    .filter(sp => sp.post.slug !== UNIVERSAL_ANCHOR_SLUG)
    .slice(0, MAX_RECOMMENDATIONS - 1);

  // Ensure universal anchor
  const hasAnchor = top3.some(sp => sp.post.slug === UNIVERSAL_ANCHOR_SLUG);
  const result = hasAnchor
    ? top3
    : [...top3, ...(universalAnchor ? [{ post: universalAnchor, score: 0, reasons: ["anchor"] }] : [])];

  return result.map(sp => sp.post);
}

/**
 * Returns the full scored list of all blog posts for a given page slug, with reasons for each score.
 *
 * Intended for debugging, testing, and score inspection only.
 * Do NOT call this function in rendered components — use selectRelatedPosts() instead.
 * Results are not filtered by MIN_SCORE, not diversity-enforced, and do not inject the universal anchor.
 *
 * @param pageSlug - The slug of the SEO page (e.g. "sofa-repair-sector-49-gurgaon")
 */
export function scorePostsForPage(pageSlug: string): ScoredPost[] {
  const signals = deriveSignals(pageSlug);
  return ALL_BLOG_POSTS.map(post => scorePost(post, signals))
    .sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug));
}
