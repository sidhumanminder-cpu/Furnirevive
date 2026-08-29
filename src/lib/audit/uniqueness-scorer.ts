/**
 * Uniqueness Audit Scorer
 *
 * Scores each generated page across content dimensions.
 * All scoring is deterministic (mirrors the content engine logic)
 * without actually calling the full content engine.
 *
 * Scores are 0–100 where 100 = fully unique / locality-specific,
 * 0 = fully static / identical across all pages.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";

export type PageAuditResult = {
  url: string;
  service: string;
  locality: string;
  city: string;
  contentWeight: number;
  affluence: string;
  // Per-dimension uniqueness scores (0-100)
  titleScore: number;
  metaScore: number;
  heroScore: number;
  introScore: number;
  faqScore: number;
  testimonialsScore: number;
  brandsScore: number;
  pricingScore: number;
  whyChooseScore: number;
  servicesGridScore: number;
  internalLinksScore: number;
  // Derived
  overallScore: number;
  duplicateRisk: "Low" | "Medium" | "High";
  thinContentRisk: "Low" | "Medium" | "High";
  needsImprovement: string;
  googleRisk: "Very Low" | "Low" | "Medium" | "High";
};

// --- Scoring weights (must sum to 1.0) ---
const WEIGHTS = {
  title: 0.08,
  meta: 0.08,
  hero: 0.12,
  intro: 0.20,
  faq: 0.15,
  testimonials: 0.07,
  brands: 0.05,
  pricing: 0.05,
  whyChoose: 0.05,
  servicesGrid: 0.05,
  internalLinks: 0.10,
};

/**
 * Title: locality.name + service.name are unique per page → high baseline.
 * Reduced slightly for commercial (fixed corporate suffix).
 */
function scoreTitle(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  return isCorporate ? 88 : 92;
}

/**
 * Meta: same structure as title but slightly more templated.
 */
function scoreMeta(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  return isCorporate ? 85 : 90;
}

/**
 * Hero: varies by locality.name (always), affluence tier (4 variants),
 * and response time (3 city variants). Corporate pages have only 1 subheadline
 * template variant (chairs) or 1 furniture variant → lower.
 */
function scoreHero(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  if (isCorporate) {
    // Corporate hero: fixed subheadline template per service slug, only locality.name varies
    return 65;
  }
  // Residential: affluence drives subheadline (4 tiers), plus landmark in localityContext
  // High/ultra-high get premium copy; budget gets budget copy; mid/mid-high get default
  const hasLandmarks = locality.landmarks && locality.landmarks.length > 0;
  const affluenceVariant = locality.affluence === "high" || locality.affluence === "ultra-high"
    ? 3 : locality.affluence === "budget" ? 2 : 1;
  // 4 trust badge variants * 4 affluence tiers + landmark presence
  return hasLandmarks ? 78 : 72;
}

/**
 * Intro: residential gets getIntroOpener + getMicroLocalContext (locality-driven)
 * + buildParagraphs (propertyType + landmark) → highly unique.
 * Corporate/furniture: 3 fixed paragraphs with only locality.name interpolated
 * → moderate uniqueness.
 */
function scoreIntro(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  if (isCorporate) {
    // 3 paragraphs: only locality.name + response time + first landmark varies
    // paragraph 2 uses landmark[0] if available, paragraph 3 is fixed template
    const hasLandmark = locality.landmarks && locality.landmarks.length > 0;
    return hasLandmark ? 72 : 62;
  }
  // Residential: contentWeight drives depth, propertyType + housingAge + affluence differ
  const full = locality.contentWeight >= 90;
  const hasLandmark = locality.landmarks && locality.landmarks.length > 0;
  if (full && hasLandmark) return 84;
  if (full) return 76;
  if (hasLandmark) return 78;
  return 70;
}

/**
 * FAQ: residential uses a dynamic pool with eligibility flags → moderate variation.
 * Corporate: 7 fixed templates, only locality.name interpolated, 3 answer variants
 * via contentWeight % 3 → lower variation (only 3 distinct versions per FAQ).
 */
function scoreFaq(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  if (isCorporate) {
    // 3 answer variants total (contentWeight % 3). 117 commercial localities → many collisions
    const variant = (locality.contentWeight ?? 50) % 3;
    // All localities sharing variant 0/1/2 get identical FAQ answers
    return 55;
  }
  // Residential: eligibility-based pool selection varies by propertyType profile
  // isPremium + isHighRise + isDDA + isFamilyResidential + hasLuxuryFurniture
  // answerIndex = contentWeight % 3 (3 answer variants)
  // 5–8 FAQs selected from prioritized pool of ~30
  const profile = deriveProfile(locality);
  const diversityScore = (profile.isPremium ? 10 : 0) + (profile.isHighRise ? 8 : 0) +
    (profile.isDDA ? 8 : 0) + (profile.hasLuxuryFurniture ? 10 : 0);
  return 60 + Math.min(diversityScore, 20);
}

function deriveProfile(locality: LocalityEntry) {
  const name = locality.name.toLowerCase();
  const property = locality.propertyType.toLowerCase();
  const isPremium = locality.affluence === "high" || locality.affluence === "ultra-high" || locality.premiumLevel >= 4;
  const isHighRise = property.includes("apartment") || property.includes("high-rise") || property.includes("gated") || property.includes("society");
  const isDDA = property.includes("dda") || property.includes("flats") || name.includes("rohini") || name.includes("dwarka") || name.includes("pitampura");
  const hasLuxuryFurniture = isPremium && (property.includes("villa") || property.includes("penthouse") || locality.premiumLevel === 5);
  return { isPremium, isHighRise, isDDA, hasLuxuryFurniture };
}

/**
 * Testimonials: pool of 26 entries rotated by hashCode of service+slug.
 * Only 3 shown. For corporate: 8 office chair or 6 furniture + 12 residential as padding.
 * Uniqueness is low-moderate — many pages share same testimonials.
 */
function scoreTestimonials(locality: LocalityEntry, service: ServiceEntry): number {
  // Pool sizes: 26 total (12 residential + 8 office-chair + 6 office-furniture)
  // 3 shown per page — 26C3 = 2600 combinations but rotation is deterministic
  // For corporate: 8 or 6 service-matching, so ~6-8 rotation positions → collisions
  const isCorporate = service.capabilities?.audience?.corporate;
  if (isCorporate) {
    const poolSize = service.slug === "office-furniture-repair" ? 6 : 8;
    // 2 from matching pool + 1 from rest; effective rotation window ≈ poolSize/2
    return 45 + Math.min(poolSize * 3, 25);
  }
  // Residential: 12-14 matching pool entries per service type → better rotation
  return 55;
}

/**
 * Brands: fully static per service category.
 * Residential → 1 list. Corporate chair → 1 list. Corporate furniture → 1 list.
 */
function scoreBrands(_locality: LocalityEntry, service: ServiceEntry): number {
  // Heading varies by locality.name → not completely static, but items are fully static
  return 15;
}

/**
 * Pricing: static per service. Heading uses service.name (varies by service, not locality).
 * affluenceNote shown for high/ultra-high residential → small boost.
 */
function scorePricing(locality: LocalityEntry, service: ServiceEntry): number {
  const isCorporate = service.capabilities?.audience?.corporate;
  if (isCorporate) return 12; // Heading uses service.name, all rows identical
  const hasNote = locality.affluence === "high" || locality.affluence === "ultra-high";
  return hasNote ? 22 : 12;
}

/**
 * Why Choose Us: static items per service (corporate vs residential).
 * Heading varies by locality.name.
 */
function scoreWhyChoose(_locality: LocalityEntry, _service: ServiceEntry): number {
  return 18; // heading unique, all items static
}

/**
 * Services Grid: static per service. Heading varies by locality.
 */
function scoreServicesGrid(_locality: LocalityEntry, _service: ServiceEntry): number {
  return 15;
}

/**
 * Internal Links (nearby chips): locality-specific neighbors from relationship graph.
 * Highly unique — each locality has different nearby nodes.
 */
function scoreInternalLinks(locality: LocalityEntry, _service: ServiceEntry): number {
  const nearbyCount = locality.nearby ? locality.nearby.length : 0;
  if (nearbyCount >= 5) return 92;
  if (nearbyCount >= 3) return 82;
  if (nearbyCount >= 1) return 65;
  return 40;
}

function weightedAverage(scores: Record<string, number>): number {
  const weighted =
    scores.title * WEIGHTS.title +
    scores.meta * WEIGHTS.meta +
    scores.hero * WEIGHTS.hero +
    scores.intro * WEIGHTS.intro +
    scores.faq * WEIGHTS.faq +
    scores.testimonials * WEIGHTS.testimonials +
    scores.brands * WEIGHTS.brands +
    scores.pricing * WEIGHTS.pricing +
    scores.whyChoose * WEIGHTS.whyChoose +
    scores.servicesGrid * WEIGHTS.servicesGrid +
    scores.internalLinks * WEIGHTS.internalLinks;
  return Math.round(weighted);
}

function getDuplicateRisk(overall: number, faqScore: number, introScore: number): "Low" | "Medium" | "High" {
  if (overall >= 72 && faqScore >= 60 && introScore >= 72) return "Low";
  if (overall >= 62) return "Medium";
  return "High";
}

function getThinContentRisk(locality: LocalityEntry, overall: number, introScore: number): "Low" | "Medium" | "High" {
  const cw = locality.contentWeight;
  if (cw >= 90 && introScore >= 76 && overall >= 70) return "Low";
  if (cw >= 70 && overall >= 62) return "Medium";
  return "High";
}

function getNeedsImprovement(
  faqScore: number, introScore: number, testimonialsScore: number,
  brandsScore: number, overall: number
): string {
  const issues: string[] = [];
  if (faqScore < 58) issues.push("Diversify FAQ answers");
  if (introScore < 65) issues.push("Deepen intro with landmark context");
  if (testimonialsScore < 48) issues.push("Expand testimonials pool");
  if (overall < 60) issues.push("Overall content needs diversification");
  return issues.length > 0 ? issues.join("; ") : "No";
}

function getGoogleRisk(overall: number, cw: number, isCorporate: boolean): "Very Low" | "Low" | "Medium" | "High" {
  // Corporate pages have fewer variants → slightly higher risk
  const riskScore = overall + (cw >= 90 ? 5 : 0) - (isCorporate ? 8 : 0);
  if (riskScore >= 75) return "Very Low";
  if (riskScore >= 65) return "Low";
  if (riskScore >= 55) return "Medium";
  return "High";
}

export function scorePage(
  locality: LocalityEntry,
  service: ServiceEntry,
  url: string,
): PageAuditResult {
  const titleScore = scoreTitle(locality, service);
  const metaScore = scoreMeta(locality, service);
  const heroScore = scoreHero(locality, service);
  const introScore = scoreIntro(locality, service);
  const faqScore = scoreFaq(locality, service);
  const testimonialsScore = scoreTestimonials(locality, service);
  const brandsScore = scoreBrands(locality, service);
  const pricingScore = scorePricing(locality, service);
  const whyChooseScore = scoreWhyChoose(locality, service);
  const servicesGridScore = scoreServicesGrid(locality, service);
  const internalLinksScore = scoreInternalLinks(locality, service);

  const overallScore = weightedAverage({
    title: titleScore, meta: metaScore, hero: heroScore, intro: introScore,
    faq: faqScore, testimonials: testimonialsScore, brands: brandsScore,
    pricing: pricingScore, whyChoose: whyChooseScore, servicesGrid: servicesGridScore,
    internalLinks: internalLinksScore,
  });

  const isCorporate = !!service.capabilities?.audience?.corporate;

  return {
    url,
    service: service.name,
    locality: locality.name,
    city: locality.city,
    contentWeight: locality.contentWeight,
    affluence: locality.affluence,
    titleScore,
    metaScore,
    heroScore,
    introScore,
    faqScore,
    testimonialsScore,
    brandsScore,
    pricingScore,
    whyChooseScore,
    servicesGridScore,
    internalLinksScore,
    overallScore,
    duplicateRisk: getDuplicateRisk(overallScore, faqScore, introScore),
    thinContentRisk: getThinContentRisk(locality, overallScore, introScore),
    needsImprovement: getNeedsImprovement(faqScore, introScore, testimonialsScore, brandsScore, overallScore),
    googleRisk: getGoogleRisk(overallScore, locality.contentWeight, isCorporate),
  };
}
