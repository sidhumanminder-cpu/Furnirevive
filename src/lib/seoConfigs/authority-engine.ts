/**
 * Topical Authority Engine — FurniRevive SEO
 *
 * Scores and selects topically relevant authority page links for a given page.
 * Distinct from Pyramid Links (hierarchy) and Nearby Areas (geography).
 * Provides semantic cross-links with contextual prose sentences.
 *
 * Scoring formula per candidate:
 *   tier_bonus[tier]    (1→50, 2→30, 3→20, 4→10, 5→5)
 *   + service match     +40 per matching service (capped at 1 match)
 *   + topic match       +30 per matching topic (capped at 2 matches)
 *   + city match        +20 if any cityKey matches current page's city
 */

import { AUTHORITY_REGISTRY, type AuthorityPageRecord, type AuthorityTopic } from "./authority-registry.ts";
import type { SeoServiceKey } from "./service-config.ts";
import { getLocalityInfo } from "./localities.ts";

// ─── Hash helper (deterministic) ─────────────────────────────────────────────

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h = h & h;
  }
  return Math.abs(h);
}

// ─── Tier bonus map ──────────────────────────────────────────────────────────

const TIER_BONUS: Record<number, number> = { 1: 50, 2: 30, 3: 20, 4: 10, 5: 5 };

// ─── Service-to-topics mapping ───────────────────────────────────────────────

const SERVICE_TOPICS: Record<SeoServiceKey, AuthorityTopic[]> = {
  "sofa-repair": ["foam", "upholstery", "sagging", "spring", "frame", "comparison", "buy-vs-repair"],
  "leather-sofa-repair": ["leather", "upholstery", "comparison"],
  "sofa-upholstery": ["upholstery", "leather", "comparison", "buy-vs-repair"],
  "foam-replacement": ["foam", "sagging", "comparison"],
  "recliner-repair": ["recliner", "leather", "maintenance", "comparison"],
  "furniture-repair": ["wood", "maintenance", "comparison", "buy-vs-repair"],
  "chair-repair": ["wood", "maintenance", "comparison"],
  "furniture-polish": ["wood", "maintenance"],
  "wooden-sofa-repair": ["wood", "frame", "maintenance"],
  "sofa-spring-repair": ["spring", "sagging", "frame"],
  "sofa-frame-repair": ["frame", "wood", "spring"],
  "modular-kitchen": [],
};

// ─── Template pools ──────────────────────────────────────────────────────────

const TOPIC_TEMPLATES: Record<AuthorityTopic, readonly string[]> = {
  foam: [
    "Many homeowners dealing with sagging cushions review {{LINK}} options before deciding whether to repair or replace.",
    "Customers facing seat depression often compare {{LINK}} solutions to understand material and labour costs.",
    "Before booking a repair, many residents check {{LINK}} to weigh foam quality against replacement timelines.",
    "When cushions lose their support, comparing {{LINK}} against full replacement helps homeowners make an informed choice.",
  ],
  upholstery: [
    "When only the fabric has worn out, {{LINK}} can be a more cost-effective solution than full sofa replacement.",
    "Customers whose frame is intact but fabric is torn often explore {{LINK}} as a targeted fix.",
    "For worn or faded covers, {{LINK}} restores appearance without replacing the entire structure.",
    "Homeowners with structurally sound sofas frequently find that {{LINK}} extends usable life by several years.",
  ],
  pricing: [
    "Before booking, many homeowners review {{LINK}} to understand current material and labour differences.",
    "Customers comparing repair services often consult {{LINK}} to set a realistic budget before calling.",
    "Understanding {{LINK}} helps residents evaluate quotes and avoid overpaying for standard repairs.",
    "Reviewing {{LINK}} first gives homeowners a clear benchmark when comparing local service providers.",
  ],
  maintenance: [
    "Regular servicing can significantly extend furniture life — {{LINK}} covers what to check between repairs.",
    "Customers who have repaired once often bookmark {{LINK}} to avoid the same issue recurring.",
    "Understanding {{LINK}} helps homeowners protect their investment long after the repair visit.",
    "Periodic checks described in {{LINK}} can prevent minor wear from becoming a costly structural problem.",
  ],
  comparison: [
    "Customers comparing options often consult {{LINK}} before deciding which service fits their situation.",
    "When weighing repair against replacement, {{LINK}} provides a practical breakdown of both paths.",
    "Many residents review {{LINK}} to understand which repair type addresses their specific problem.",
    "Homeowners uncertain about the best approach frequently find {{LINK}} a useful starting point.",
  ],
  "buy-vs-repair": [
    "When deciding whether to repair or replace, {{LINK}} provides a practical cost and longevity comparison.",
    "Customers on the fence about replacing their sofa often find that {{LINK}} shifts the calculation toward repair.",
    "Reviewing {{LINK}} helps homeowners weigh replacement cost against a quality repair that extends life by 5–8 years.",
    "Before purchasing a new sofa, many residents check {{LINK}} to see whether repair delivers better long-term value.",
  ],
  leather: [
    "Leather furniture requires specialist care — {{LINK}} covers the repair methods and materials used.",
    "Customers with cracked or peeling leather often compare {{LINK}} options before booking a technician.",
    "Understanding {{LINK}} helps homeowners distinguish between surface treatment and full panel replacement.",
    "For leather sofas showing age, {{LINK}} outlines which repair approach preserves the original finish best.",
  ],
  wood: [
    "Wooden frames and joints need specialist attention — {{LINK}} covers the common failure points and fixes.",
    "Customers with wobbly joints or cracked frames often review {{LINK}} to understand structural repair options.",
    "For furniture with solid wood frames, {{LINK}} explains which repairs restore strength without compromising appearance.",
    "Homeowners comparing carpentry and upholstery repairs often find {{LINK}} useful for scoping the right service.",
  ],
  spring: [
    "Broken or loose springs affect seating comfort directly — {{LINK}} covers diagnosis and repair options.",
    "Customers feeling uneven support often compare {{LINK}} solutions before deciding between spring replacement and foam work.",
    "For sofas with sagging seats caused by spring failure, {{LINK}} explains what replacement involves.",
    "Reviewing {{LINK}} helps homeowners understand whether spring repair or full base overhaul is the right call.",
  ],
  frame: [
    "A damaged frame compromises the entire sofa — {{LINK}} covers structural repair options and timelines.",
    "Customers with visible frame cracks or joint failures often consult {{LINK}} before booking a structural repair.",
    "For sofas with broken or bent frames, {{LINK}} outlines what can be reinforced versus what requires replacement.",
    "Understanding {{LINK}} helps homeowners decide whether frame repair is cost-effective versus investing in a new piece.",
  ],
  recliner: [
    "Recliner mechanisms need specialist handling — {{LINK}} covers motor, spring, and cable repair options.",
    "Customers with stuck or noisy recliners often compare {{LINK}} options to understand parts and labour costs.",
    "Before booking a recliner technician, many homeowners review {{LINK}} to diagnose the specific failure point.",
    "For recliners that won't lock or extend fully, {{LINK}} explains the most common causes and repair approaches.",
  ],
  sagging: [
    "Seat sagging is often caused by foam compression or spring failure — {{LINK}} explains the diagnostic process.",
    "Customers experiencing visible seat depression usually find that {{LINK}} helps identify whether foam or springs need attention.",
    "For sofas that have lost their shape, reviewing {{LINK}} helps homeowners understand whether repair or replacement makes more sense.",
    "Comparing {{LINK}} options first helps residents avoid over-spending on a full re-upholstery when only the core needs replacing.",
  ],
};

// ─── Scoring ─────────────────────────────────────────────────────────────────

function scoreRecord(
  record: AuthorityPageRecord,
  serviceKey: SeoServiceKey,
  currentCityKey: string,
  currentTopics: AuthorityTopic[],
): number {
  let score = TIER_BONUS[record.tier] ?? 0;

  // +40 for service match (capped at 1)
  if (record.services.includes(serviceKey)) {
    score += 40;
  }

  // +30 per topic match (capped at 2)
  let topicMatches = 0;
  for (const topic of currentTopics) {
    if (record.topics.includes(topic)) {
      topicMatches++;
      if (topicMatches >= 2) break;
    }
  }
  score += topicMatches * 30;

  // +20 for city match
  if (record.cityKeys.includes(currentCityKey)) {
    score += 20;
  }

  return score;
}

// ─── Mention generation ──────────────────────────────────────────────────────

export function generateMention(record: AuthorityPageRecord, currentSlug: string): string {
  // Pick primary topic from the record's first topic
  const primaryTopic = record.topics[0];
  const pool = TOPIC_TEMPLATES[primaryTopic];
  const index = hash(currentSlug + record.slug) % pool.length;
  const template = pool[index];

  // Replace {{LINK}} with the display name — component splits on {{LINK}} to insert React <Link>
  return template.replace("{{LINK}}", record.displayName);
}

// ─── Main export ─────────────────────────────────────────────────────────────

export type AuthorityMatch = {
  record: AuthorityPageRecord;
  score: number;
  mention: string;
};

export function getAuthorityLinks(
  serviceKey: SeoServiceKey,
  slug: string,
  options?: {
    limit?: number;
    excludeHrefs?: Set<string>;
  },
): AuthorityMatch[] | null {
  const limit = options?.limit ?? 4;
  const excludeHrefs = options?.excludeHrefs ?? new Set<string>();

  // Derive current page's city from slug
  const localityInfo = getLocalityInfo(slug);
  const currentCityKey = localityInfo.cityKey;

  // Derive current topics from service key
  const currentTopics = SERVICE_TOPICS[serviceKey] ?? [];

  // Score all registry candidates
  const scored: Array<{ record: AuthorityPageRecord; score: number }> = [];

  for (const key of Object.keys(AUTHORITY_REGISTRY)) {
    const record = AUTHORITY_REGISTRY[key];

    // Exclude self
    if (record.slug === slug) continue;

    // Exclude already-linked hrefs
    if (excludeHrefs.has("/" + record.slug)) continue;

    const score = scoreRecord(record, serviceKey, currentCityKey, currentTopics);
    scored.push({ record, score });
  }

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  // Take top N
  const top = scored.slice(0, limit);

  if (top.length === 0) return null;

  // Build AuthorityMatch results with mention strings
  return top.map(({ record, score }) => ({
    record,
    score,
    mention: generateMention(record, slug),
  }));
}
