/**
 * Page Creation Pipeline — FurniRevive SEO
 *
 * createSeoPage(input: CreateSeoPageInput) → ResolvedSeoPage
 *
 * Public entry point for creating a new SEO page.
 * Derives SeoPageData from existing registries (SEO_SERVICE_CONFIG + getLocalityInfo),
 * then delegates to composePage() for asset resolution.
 *
 * Behavioral guarantee:
 * - Always returns a structurally valid ResolvedSeoPage
 * - Never throws because of missing optional data
 * - Reserved fields (variant, overrides) are silently accepted and ignored
 *
 * Architecture rules:
 * - No rendering, no routing, no publishing, no registry mutation, no filesystem writes
 * - All string values derived from existing registries — no manual formatting logic invented here
 * - Structural contract: hero/repairScenario may be null; arrays are always arrays
 */

import { composePage, type ResolvedSeoPage } from "./page-composition-engine.ts";
import { SEO_SERVICE_CONFIG, type SeoServiceKey } from "./service-config.ts";
import { getLocalityInfo, type LocalityInfo } from "./localities.ts";
import type { LocalitySlug } from "./repair-scenarios.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";
import {
  formatTitle,
  formatH1,
  formatHeroSubtitle,
  formatMetaDescription,
  formatUpholsteryTitle,
  formatUpholsteryMetaDescription,
  localitySlugToIndex,
} from "./metadata-formatter.ts";

// ─── Input type ───────────────────────────────────────────────────────────────

export type CreateSeoPageInput = {
  service: SeoServiceKey;
  locality: LocalitySlug;
  /** Reserved — accepted and silently ignored. Future: page variant selector. */
  variant?: "default";
  /** Reserved — accepted and silently ignored. Future: field-level overrides. */
  overrides?: Partial<SeoPageData>;
};

// ─── Slug builder ─────────────────────────────────────────────────────────────

/**
 * Derives the locality page slug from service key and locality slug.
 * Follows the existing site convention: "{service}-{locality}"
 * e.g. service="sofa-repair" locality="rohini" → "sofa-repair-rohini"
 */
function buildSlug(service: SeoServiceKey, locality: LocalitySlug): string {
  return `${service}-${locality}`;
}

// ─── Locality-specific copy (real LocalityInfo data only) ──────────────────────

const MAX_LANDMARKS = 2;
const MAX_NEARBY_AREAS = 6;

/** "A and B" / "A" / "" — only landmarks that exist and aren't already named in the property type. */
function joinLandmarks(info: LocalityInfo): string {
  const type = info.propertyType.toLowerCase();
  return info.landmarks
    .filter((l) => !type.includes(l.toLowerCase()))
    .slice(0, MAX_LANDMARKS)
    .join(" and ");
}

/** Second intro paragraph built from the locality's property type, landmarks and response time. */
function buildLocalityIntro(info: LocalityInfo, serviceName: string): string {
  const landmarks = joinLandmarks(info);
  const nearLandmarks = landmarks ? `, with many jobs close to ${landmarks}` : "";
  return `Our ${serviceName.toLowerCase()} work in ${info.name} covers the ${info.propertyType}${nearLandmarks}. Technicians are usually at your door within ${info.responseTime}.`;
}

/** Doorstep item that names the locality's property type and a real neighbouring area. */
function buildDoorstepText(info: LocalityInfo): string {
  const neighbour = info.adjacentAreas[0];
  const alsoCovering = neighbour ? `, and nearby ${neighbour} too` : "";
  return `We come to you in ${info.name}, across the ${info.propertyType}${alsoCovering} — no transportation needed.`;
}

/** "Areas we serve near X" section from the locality's real adjacent areas. */
function buildNearbySection(info: LocalityInfo, serviceName: string): { heading: string; body: string[] }[] {
  const areas = info.adjacentAreas.slice(0, MAX_NEARBY_AREAS);
  if (areas.length === 0) return [];
  return [
    {
      heading: `${serviceName} Near ${info.name}`,
      body: [
        `Along with ${info.name}, our technicians also cover ${areas.join(", ")}. Customers in these neighbouring areas get the same free doorstep inspection, fixed quote and 6-month warranty.`,
      ],
    },
  ];
}

// ─── SeoPageData builder ──────────────────────────────────────────────────────

/**
 * Derives a minimal SeoPageData from existing registries.
 * Exported for page components that need SeoPageData alongside ResolvedSeoPage.
 */
export function buildSeoPageData(service: SeoServiceKey, locality: LocalitySlug): SeoPageData {
  const slug = buildSlug(service, locality);
  const info = getLocalityInfo(slug);
  const serviceConfig = SEO_SERVICE_CONFIG[service];
  const serviceName = serviceConfig.displayName;
  const localityIndex = localitySlugToIndex(locality);
  // furnitureType inferred from service key: "sofa-repair" → "sofa", "recliner-repair" → "recliner", etc.
  const furnitureType = service.replace(/-repair$/, "").replace(/-/g, " ");

  // ── Sofa-upholstery metadata override ────────────────────────────────────
  // Targets "Sofa Reupholstery" (higher-volume variant) in title/H1/meta
  // while keeping "Sofa Upholstery" in URLs and registries.
  // All other services use the standard formatters below.
  const isUpholstery = service === "sofa-upholstery";
  const location = `${info.name}, ${info.city}`;
  const title = isUpholstery
    ? formatUpholsteryTitle(info.name, info.city)
    : formatTitle(serviceName, info.name, info.city, localityIndex);
  const h1 = isUpholstery
    ? `Sofa Reupholstery in ${location}`
    : formatH1(serviceName, info.name);
  const metaDescription = isUpholstery
    ? formatUpholsteryMetaDescription(location)
    : formatMetaDescription(serviceName, info.name, localityIndex);

  return {
    slug,
    title,
    metaDescription,
    h1,
    heroSubtitle: formatHeroSubtitle(serviceName, info.name, furnitureType, localityIndex),
    intro: [
      `FurniRevive offers expert ${serviceName.toLowerCase()} in ${info.name}, ${info.city}. Our trained technicians visit your home, assess the damage, and restore your furniture — all in one visit.`,
      buildLocalityIntro(info, serviceName),
    ],
    whyChoose: [
      { title: "Doorstep Service", description: buildDoorstepText(info) },
      { title: "Free Inspection", description: "Honest assessment before any work begins." },
      { title: "6-Month Warranty", description: "Every repair is backed by a written warranty." },
    ],
    process: [
      { step: "Book", description: "Call or WhatsApp 92179 99355 to schedule your visit." },
      { step: "Inspect", description: `Our technician visits your home, typically within ${info.responseTime}, for a free assessment.` },
      { step: "Repair", description: `We complete the ${serviceName.toLowerCase()} at your doorstep.` },
    ],
    benefits: [
      "Same-day home visits",
      "Free doorstep inspection",
      "6-month written warranty",
      "5,000+ sofas repaired",
      "10+ years experience",
    ],
    contentSections: buildNearbySection(info, serviceName),
    relatedPages: [],
    faqs: [],
  } as unknown as SeoPageData;
}

// ─── Merged page data builder ─────────────────────────────────────────────────

/**
 * Single merge point for all pipeline fields into SeoPageData.
 * Use this in every programmatic page component instead of manual spreads.
 * Add new pipeline-resolved fields here once — they propagate to all pages automatically.
 */
export function buildPageData(
  service: SeoServiceKey,
  locality: LocalitySlug,
  resolved: ResolvedSeoPage,
): SeoPageData {
  return {
    ...buildSeoPageData(service, locality),
    hero: resolved.hero,
    faqs: resolved.faqs,
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Creates a fully composed SEO page from a service + locality pair.
 *
 * Always returns a structurally valid ResolvedSeoPage — never throws.
 * Reserved fields (variant, overrides) are accepted and silently ignored.
 */
export function createSeoPage(input: CreateSeoPageInput): ResolvedSeoPage {
  // Reserved fields are destructured to acknowledge them without use.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { service, locality, variant: _variant, overrides: _overrides } = input;

  try {
    const pageData = buildSeoPageData(service, locality);
    return composePage(pageData);
  } catch {
    // Last-resort fallback: composePage() should never throw (resolveOrDefault wraps
    // all resolvers), but if buildSeoPageData itself errors, return a minimal valid shape.
    const slug = buildSlug(service, locality);
    return composePage({
      slug,
      title: slug,
      metaDescription: slug,
      h1: slug,
      heroSubtitle: slug,
      intro: [],
      whyChoose: [],
      process: [],
      benefits: [],
      contentSections: [],
      relatedPages: [],
      faqs: [],
    } as unknown as SeoPageData);
  }
}
