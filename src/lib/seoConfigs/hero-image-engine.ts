/**
 * Hero Image Engine — FurniRevive SEO
 *
 * Pure functions only. Registry injected as a default parameter for testability.
 * Scoring constants read from HERO_MATCH_WEIGHTS — never scattered numeric literals.
 *
 * Fallback cascade (always returns a result when registry is non-empty):
 *   1. Locality match (localitySlugs contains current slug fragment)
 *   2. City match (cityKeys contains current cityKey)
 *   3. Service match (services contains serviceKey)
 *   4. Any record (highest priority)
 *   5. null — only if registry is empty
 *
 * Tie-breaking: score DESC → priority DESC → id ASC (fully deterministic)
 */

import { localitySlugToIndex } from "./metadata-formatter.ts";
import {
  HERO_IMAGE_REGISTRY,
  HERO_MATCH_WEIGHTS,
  type HeroImageRecord,
  type HeroScene,
  type CoverageReport,
  type ValidationCode,
  type ValidationIssue,
  type ValidationResult,
} from "./hero-image-registry.ts";
import type { SeoServiceKey } from "./service-config.ts";
import { getLocalityInfo } from "./localities.ts";

// ─── Internal helpers ─────────────────────────────────────────────────────────

/** Deterministic hash — same pattern as rest of codebase */
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h = h & h;
  }
  return Math.abs(h);
}

/** Converts "sofa-repair" → "Sofa Repair", "living-room" → "Living Room" */
function humanise(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ─── Scoring ──────────────────────────────────────────────────────────────────

function scoreRecord(
  record: HeroImageRecord,
  serviceKey: SeoServiceKey,
  localityFragment: string,
  cityKey: string,
  isPremiumLocality: boolean,
): number {
  let score = 0;

  // Locality match — highest value signal
  if (
    record.localitySlugs.some(
      (s) => localityFragment.includes(s) || s.includes(localityFragment),
    )
  ) {
    score += HERO_MATCH_WEIGHTS.locality;
  }

  // City match
  if (record.cityKeys.includes(cityKey)) {
    score += HERO_MATCH_WEIGHTS.city;
  }

  // Service match
  if (record.services.includes(serviceKey)) {
    score += HERO_MATCH_WEIGHTS.service;
  }

  // Premium boost
  if (isPremiumLocality && record.isPremium) {
    score += HERO_MATCH_WEIGHTS.premium;
  }

  // Style match — premium localities prefer luxury/contemporary, others prefer modern/minimal/traditional
  if (isPremiumLocality) {
    if (record.style === "luxury" || record.style === "contemporary") {
      score += HERO_MATCH_WEIGHTS.style;
    }
  } else {
    if (
      record.style === "modern" ||
      record.style === "minimal" ||
      record.style === "traditional"
    ) {
      score += HERO_MATCH_WEIGHTS.style;
    }
  }

  // Furniture type match — record.furnitureType appears in serviceKey
  if (serviceKey.includes(record.furnitureType)) {
    score += HERO_MATCH_WEIGHTS.furniture;
  }

  return score;
}

// ─── Selection ────────────────────────────────────────────────────────────────

type ScoredCandidate = { record: HeroImageRecord; score: number };

/**
 * Points within which a candidate still enters the diversity rotation pool.
 * Candidates with score >= topScore - DIVERSITY_TOLERANCE rotate alongside
 * the top scorer so that different localities get different images even when
 * no single image is a perfect match for every locality in a city.
 *
 * 15 is chosen deliberately:
 *   - city match = 30, service match = 25 → a city-tagged image beats a
 *     generic service-only image by exactly 30 pts. With tolerance=15 the
 *     generic images do NOT join the Gurgaon pool — city specificity is preserved.
 *   - style bonus = 10 → two equal-city images that differ only by style DO
 *     share the pool, giving visual diversity without sacrificing relevance.
 */
const DIVERSITY_TOLERANCE = 15;

function selectBest(candidates: ScoredCandidate[], localityIndex: number): HeroImageRecord | null {
  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    // Score DESC
    if (b.score !== a.score) return b.score - a.score;
    // Priority ASC (lower number = higher priority)
    if (a.record.priority !== b.record.priority)
      return a.record.priority - b.record.priority;
    // ID ASC (stable deterministic fallback)
    return a.record.id.localeCompare(b.record.id);
  });

  // Build a diversity pool: all candidates within DIVERSITY_TOLERANCE of the
  // top score. Same locality always resolves to the same image (deterministic
  // via localityIndex). Different localities with the same top score spread
  // across the whole pool for visual variety.
  const topScore = candidates[0].score;
  const pool = candidates.filter((c) => c.score >= topScore - DIVERSITY_TOLERANCE);
  return pool[localityIndex % pool.length].record;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Select the best hero image for a given service + locality slug.
 * Returns null only when the registry is empty.
 */
export function getHeroImage(
  serviceKey: SeoServiceKey,
  slug: string,
  registry: Record<string, HeroImageRecord> = HERO_IMAGE_REGISTRY,
): HeroImageRecord | null {
  const entries = Object.values(registry);
  if (entries.length === 0) return null;

  const localityInfo = getLocalityInfo(slug);
  const cityKey = localityInfo.cityKey;
  const localityFragment = slug;

  // Premium locality detection — conservative default, expandable later
  const isPremiumLocality = false;

  const scored: ScoredCandidate[] = entries.map((record) => ({
    record,
    score: scoreRecord(record, serviceKey, localityFragment, cityKey, isPremiumLocality),
  }));

  // Derive a deterministic index from the locality slug so tied candidates
  // resolve to different images across localities without any randomness.
  const localityIndex = localitySlugToIndex(slug);
  return selectBest(scored, localityIndex);
}

// ─── Metadata generation (deterministic from structured fields) ───────────────

const ALT_TEMPLATES = [
  (ft: string, style: string, locality: string) =>
    `Professional ${style} ${ft} repair service in ${locality}`,
  (ft: string, _style: string, locality: string) =>
    `${humanise(ft)} repair and restoration in ${locality} by expert technicians`,
  (ft: string, style: string, locality: string) =>
    `Expert ${ft} repair for ${style} furniture in ${locality}`,
  (ft: string, style: string, locality: string) =>
    `${humanise(style)} ${ft} repair service — doorstep home visits in ${locality}`,
] as const;

const TITLE_TEMPLATES = [
  (ft: string, locality: string) => `${humanise(ft)} Repair in ${locality}`,
  (ft: string, locality: string) => `Expert ${humanise(ft)} Repair — ${locality}`,
  (ft: string, locality: string) => `${locality} ${humanise(ft)} Repair Service`,
  (ft: string, locality: string) => `Professional ${humanise(ft)} Repair ${locality}`,
] as const;

const CAPTION_TEMPLATES = [
  (ft: string, _style: string, locality: string) =>
    `Doorstep ${ft} repair service in ${locality}. Same-day home visits available.`,
  (ft: string, style: string, locality: string) =>
    `Expert ${style} ${ft} restoration in ${locality} — 6-month warranty on all repairs.`,
  (ft: string, _style: string, locality: string) =>
    `${humanise(ft)} repair specialists serving ${locality} and surrounding areas.`,
  (ft: string, style: string, locality: string) =>
    `Quality ${style} furniture repair in ${locality}. Free inspection. Transparent pricing.`,
] as const;

/** Generate SEO-optimised alt text for a hero image */
export function generateHeroAlt(
  record: HeroImageRecord,
  localityName: string,
): string {
  const idx = hash(record.id + localityName) % ALT_TEMPLATES.length;
  return ALT_TEMPLATES[idx](record.furnitureType, record.style, localityName);
}

/** Generate a short title for the hero image */
export function generateHeroTitle(
  record: HeroImageRecord,
  localityName: string,
): string {
  const idx = hash(record.id + localityName) % TITLE_TEMPLATES.length;
  return TITLE_TEMPLATES[idx](record.furnitureType, localityName);
}

/** Generate a natural-language caption for the hero section */
export function generateHeroCaption(
  record: HeroImageRecord,
  localityName: string,
): string {
  const idx = hash(record.id + localityName) % CAPTION_TEMPLATES.length;
  return CAPTION_TEMPLATES[idx](record.furnitureType, record.style, localityName);
}

// ─── Coverage Report ─────────────────────────────────────────────────────────

/**
 * Counts the distribution of scene attributes across the registry.
 * Advisory only — does not affect Hero Engine selection.
 * Data-driven: iterates over record.scene keys, so adding new HeroScene
 * fields automatically extends the report without changing this function.
 */
export function generateHeroCoverageReport(
  registry: Record<string, HeroImageRecord> = HERO_IMAGE_REGISTRY,
): CoverageReport {
  const raw: Partial<{ [K in keyof HeroScene]: Record<string, number> }> = {};

  for (const record of Object.values(registry)) {
    for (const _key of Object.keys(record.scene)) {
      const key = _key as keyof HeroScene;
      const value = record.scene[key];
      if (raw[key] === undefined) {
        raw[key] = {};
      }
      const bucket = raw[key];
      bucket[value] = (bucket[value] ?? 0) + 1;
    }
  }

  return raw as CoverageReport;
}

// ─── Registry Validator ──────────────────────────────────────────────────────

const VALID_SCENE_VALUES = {
  windowPlacement: ["left", "right", "behind", "hidden"],
  furniturePosition: ["left", "center", "right"],
  flooring: ["wood", "herringbone", "marble", "parquet"],
  coffeeTable: ["modern", "round", "rectangular", "none"],
  plantType: ["tall", "small", "hanging", "none"],
  wallTreatment: ["plain", "texture", "art", "none"],
} as const;

/**
 * Validates all records in the registry for data integrity.
 * Returns a structured ValidationResult — errors block builds, warnings are advisory.
 * Run before each TypeScript/build check after adding new records.
 */
export function validateHeroRegistry(
  registry: Record<string, HeroImageRecord> = HERO_IMAGE_REGISTRY,
): ValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  function addError(code: ValidationCode, heroId: string, message: string) {
    errors.push({ severity: "error", code, heroId, message });
  }
  function addWarning(code: ValidationCode, heroId: string, message: string) {
    warnings.push({ severity: "warning", code, heroId, message });
  }

  const seenFileIds = new Map<string, string>(); // fileId → first heroId
  const seenUrls = new Map<string, string>(); // url → first heroId

  for (const [key, record] of Object.entries(registry)) {
    // DUPLICATE_ID check
    if (record.id !== key) {
      addError(
        "DUPLICATE_ID",
        key,
        `Record id "${record.id}" does not match registry key "${key}"`,
      );
    }

    // DUPLICATE_FILE_ID
    const prevFileId = seenFileIds.get(record.fileId);
    if (prevFileId !== undefined) {
      addError(
        "DUPLICATE_FILE_ID",
        key,
        `fileId "${record.fileId}" already used by "${prevFileId}"`,
      );
    } else {
      seenFileIds.set(record.fileId, key);
    }

    // DUPLICATE_URL
    const prevUrl = seenUrls.get(record.url);
    if (prevUrl !== undefined) {
      addError("DUPLICATE_URL", key, `url already used by "${prevUrl}"`);
    } else {
      seenUrls.set(record.url, key);
    }

    // MISSING_FIELD
    if (!record.fileId) addError("MISSING_FIELD", key, "fileId is empty");
    if (!record.url) addError("MISSING_FIELD", key, "url is empty");
    if (!record.createdAt) addError("MISSING_FIELD", key, "createdAt is empty");
    if (record.services.length === 0)
      addError("MISSING_FIELD", key, "services array is empty");
    if (!record.furnitureType)
      addError("MISSING_FIELD", key, "furnitureType is empty");

    // INVALID_DIMENSIONS
    if (record.width <= 0 || record.height <= 0) {
      addError(
        "INVALID_DIMENSIONS",
        key,
        `width=${record.width} height=${record.height} must both be > 0`,
      );
    }

    // INVALID_VERSION
    if (record.version < 1) {
      addError(
        "INVALID_VERSION",
        key,
        `version=${record.version} must be >= 1`,
      );
    }

    // INVALID_STATUS
    if (
      record.status !== "approved" &&
      record.status !== "pending-replacement"
    ) {
      addError(
        "INVALID_STATUS",
        key,
        `status="${record.status}" is not a valid value`,
      );
    }

    // INVALID_PRIORITY
    if (record.priority < 1 || record.priority > 10) {
      addWarning(
        "INVALID_PRIORITY",
        key,
        `priority=${record.priority} is outside expected range 1–10`,
      );
    }

    // INVALID_SCENE_VALUE
    for (const _field of Object.keys(VALID_SCENE_VALUES)) {
      const field = _field as keyof typeof VALID_SCENE_VALUES;
      const value = record.scene[field];
      const valid = VALID_SCENE_VALUES[field] as readonly string[];
      if (!valid.includes(value)) {
        addError(
          "INVALID_SCENE_VALUE",
          key,
          `scene.${field}="${value}" is not a valid value`,
        );
      }
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}
