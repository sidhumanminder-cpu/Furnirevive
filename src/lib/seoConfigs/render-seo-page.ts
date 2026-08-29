/**
 * Page Renderer — FurniRevive SEO
 *
 * renderSeoPage(page: ResolvedSeoPage) → RenderedSeoPage
 *
 * Pure deterministic transform. Accepts only ResolvedSeoPage.
 * No registry lookups. No engine calls. No image selection.
 * No FAQ generation. No mutation. Never throws.
 *
 * Nulls and empty arrays remain valid — they pass through unchanged.
 * The output shape is consumed directly by the SEO page component.
 */

import type {
  ResolvedSeoPage,
  CompositionManifest,
  NearbyAreaLink,
} from "./page-composition-engine.ts";
import type { HeroImageRecord } from "./hero-image-registry.ts";
import type { GalleryMatch } from "./gallery-engine.ts";
import type { SelectedFaq } from "./faq-engine.ts";
import type { AuthorityMatch } from "./authority-engine.ts";
import type { RepairScenarioOutput } from "./repair-scenario-engine.ts";

// ─── Output type ──────────────────────────────────────────────────────────────

/**
 * The rendered shape consumed by the SEO page component.
 * Mirrors every section of ResolvedSeoPage — no fields added, none removed.
 * Fields are re-typed as readonly to signal this is an output, not a mutable object.
 */
export type RenderedSeoPage = {
  readonly slug: string;
  readonly serviceKey: string | null;
  readonly hero: HeroImageRecord | null;
  readonly gallery: readonly GalleryMatch[];
  readonly faqs: readonly SelectedFaq[];
  readonly authorityLinks: readonly AuthorityMatch[];
  readonly repairScenario: RepairScenarioOutput | null;
  readonly nearbyAreas: readonly NearbyAreaLink[];
  readonly manifest: CompositionManifest;
};

// ─── Renderer ─────────────────────────────────────────────────────────────────

/**
 * Transforms a ResolvedSeoPage into a RenderedSeoPage.
 *
 * Pure function — no side effects, no external dependencies, no mutation.
 * Deterministic: same input always produces the same output.
 * Never throws.
 */
export function renderSeoPage(page: ResolvedSeoPage): RenderedSeoPage {
  return {
    slug: page.slug,
    serviceKey: page.serviceKey,
    hero: page.hero,
    gallery: page.gallery,
    faqs: page.faqs,
    authorityLinks: page.authorityLinks,
    repairScenario: page.repairScenario,
    nearbyAreas: page.nearbyAreas,
    manifest: page.manifest,
  };
}
