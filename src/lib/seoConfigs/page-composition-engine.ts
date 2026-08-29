/**
 * Page Composition Engine — FurniRevive SEO
 *
 * composePage(SeoPageData) → ResolvedSeoPage
 *
 * Deterministically resolves every dynamic asset for a new SEO page:
 *   hero image, gallery images, FAQs, authority links, repair scenario, nearby areas.
 *
 * Architecture rules:
 * - Pure data layer — no rendering, no routing, no registry mutation, no filesystem writes
 * - Each resolver is wrapped with resolveOrDefault() — composePage() never throws
 * - Engine version constants are the single source of truth for manifest.engines
 * - Registry override always wins over derived value (reserved for future override map)
 */

import type { SeoPageData } from "@/lib/seo-constants.ts";
import { getHeroImage } from "./hero-image-engine.ts";
import type { HeroImageRecord } from "./hero-image-registry.ts";
import { getGalleryImages } from "./gallery-engine.ts";
import type { GalleryMatch } from "./gallery-engine.ts";
import { selectFaqs } from "./faq-engine.ts";
import type { SelectedFaq } from "./faq-engine.ts";
import { getAuthorityLinks } from "./authority-engine.ts";
import type { AuthorityMatch } from "./authority-engine.ts";
import { getRepairScenario } from "./repair-scenario-engine.ts";
import type { RepairScenarioOutput } from "./repair-scenario-engine.ts";
import { getLocalityInfo } from "./localities.ts";
import { getExistingNeighbourLinks } from "./location-graph.ts";
import { resolveServiceKey } from "./location-graph.ts";

// ─── Engine Version Constants ────────────────────────────────────────────────
// These are the single source of truth. Bump one constant when its engine
// ships a breaking change; the manifest version follows automatically.

export const HERO_ENGINE_VERSION = 1 as const;
export const GALLERY_ENGINE_VERSION = 1 as const;
export const FAQ_ENGINE_VERSION = 1 as const;
export const AUTHORITY_ENGINE_VERSION = 1 as const;
export const REPAIR_SCENARIO_ENGINE_VERSION = 1 as const;
export const NEARBY_AREAS_ENGINE_VERSION = 1 as const;

export const COMPOSITION_VERSION = 1 as const;

// ─── Types ───────────────────────────────────────────────────────────────────

export type CompositionManifest = {
  compositionVersion: typeof COMPOSITION_VERSION;
  generatedAt: string;
  engines: {
    hero: typeof HERO_ENGINE_VERSION;
    gallery: typeof GALLERY_ENGINE_VERSION;
    faq: typeof FAQ_ENGINE_VERSION;
    authority: typeof AUTHORITY_ENGINE_VERSION;
    repairScenario: typeof REPAIR_SCENARIO_ENGINE_VERSION;
    nearbyAreas: typeof NEARBY_AREAS_ENGINE_VERSION;
  };
};

export type NearbyAreaLink = {
  name: string;
  slug: string;
  href: string;
};

export type ResolvedSeoPage = {
  /** Original input slug */
  slug: string;
  /** Resolved service key (null if slug does not map to a known service) */
  serviceKey: string | null;
  /** Hero image record — null when registry has no matching image */
  hero: HeroImageRecord | null;
  /** Gallery before/after images — empty array when registry is empty */
  gallery: GalleryMatch[];
  /** Selected FAQ items — empty array on resolution failure */
  faqs: SelectedFaq[];
  /** Topical authority links — empty array when none qualify */
  authorityLinks: AuthorityMatch[];
  /** Repair scenario sections — null when no profile matches */
  repairScenario: RepairScenarioOutput | null;
  /** Nearby area links that have existing pages */
  nearbyAreas: NearbyAreaLink[];
  /** Composition provenance */
  manifest: CompositionManifest;
};

// ─── Internal helper ─────────────────────────────────────────────────────────

/**
 * Wraps a resolver so that any thrown exception returns the fallback value.
 * This is the single pattern used for every resolver in composePage().
 */
function resolveOrDefault<T>(resolver: () => T, fallback: T): T {
  try {
    return resolver();
  } catch {
    return fallback;
  }
}

// ─── Composition Engine ──────────────────────────────────────────────────────

/**
 * Resolves all dynamic assets for a new SEO page.
 * Never throws — each resolver is guarded by resolveOrDefault().
 */
export function composePage(data: SeoPageData): ResolvedSeoPage {
  const { slug } = data;

  const serviceKey = resolveOrDefault(() => resolveServiceKey(data), null);

  const hero = resolveOrDefault<HeroImageRecord | null>(() => {
    if (!serviceKey) return null;
    return getHeroImage(serviceKey, slug) ?? null;
  }, null);

  const gallery = resolveOrDefault<GalleryMatch[]>(() => {
    if (!serviceKey) return [];
    return getGalleryImages(serviceKey, slug) ?? [];
  }, []);

  const faqs = resolveOrDefault<SelectedFaq[]>(() => {
    const info = getLocalityInfo(slug);
    return selectFaqs(info);
  }, []);

  const authorityLinks = resolveOrDefault<AuthorityMatch[]>(() => {
    if (!serviceKey) return [];
    // Suppress on Tricity pages — no Tricity authority records exist yet, so engine
    // surfaces Delhi-specific pages (wrong geography for Mohali/Chandigarh/Panchkula visitors)
    const tricityKeys = ["chandigarh", "mohali", "panchkula"];
    if (tricityKeys.some((k) => slug.includes(k))) return [];
    // Cast is safe: serviceKey was resolved via resolveServiceKey which only
    // returns values from SeoServiceKey union.
    return getAuthorityLinks(serviceKey as Parameters<typeof getAuthorityLinks>[0], slug) ?? [];
  }, []);

  const repairScenario = resolveOrDefault<RepairScenarioOutput | null>(() => {
    if (!serviceKey) return null;
    return getRepairScenario(serviceKey as Parameters<typeof getRepairScenario>[0], slug);
  }, null);

  const nearbyAreas = resolveOrDefault<NearbyAreaLink[]>(() => {
    if (!serviceKey) return [];
    return getExistingNeighbourLinks(slug, serviceKey as Parameters<typeof getExistingNeighbourLinks>[1]);
  }, []);

  const manifest: CompositionManifest = {
    compositionVersion: COMPOSITION_VERSION,
    generatedAt: new Date().toISOString(),
    engines: {
      hero: HERO_ENGINE_VERSION,
      gallery: GALLERY_ENGINE_VERSION,
      faq: FAQ_ENGINE_VERSION,
      authority: AUTHORITY_ENGINE_VERSION,
      repairScenario: REPAIR_SCENARIO_ENGINE_VERSION,
      nearbyAreas: NEARBY_AREAS_ENGINE_VERSION,
    },
  };

  return {
    slug,
    serviceKey,
    hero,
    gallery,
    faqs,
    authorityLinks,
    repairScenario,
    nearbyAreas,
    manifest,
  };
}
