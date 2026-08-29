/**
 * Registry validation utilities.
 *
 * Structural validation only — no HTML rendering, no SEO auditing.
 *
 * Used by:
 * - Unit tests (validate-registry.test.ts)
 * - npm run seo:validate (cross-system URL duplicate detection)
 */

import { LOCALITY_REGISTRY } from "./locality-registry.ts";
import { SERVICE_REGISTRY } from "./service-registry.ts";
import { generatePages } from "./generate-pages.ts";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";
import type { RegistryValidationResult } from "./types.ts";

// ─── Cross-system duplicate detection ────────────────────────────────────────

export type CrossSystemDuplicate = {
  url: string;
  registrySource: "programmatic" | "legacy";
  legacySlug?: string;
};

export type SemanticDuplicatePair = {
  slugA: string;
  slugB: string;
  pattern: string;
  affectedUrls: string[];
};

export type CrossSystemValidationResult = {
  /** URLs that appear in BOTH the programmatic registry AND the legacy batch system */
  exactCrossSystemDuplicates: CrossSystemDuplicate[];
  /** Locality slug pairs that are likely the same place under different naming conventions */
  semanticDuplicateCandidates: SemanticDuplicatePair[];
};

/**
 * Detects duplicate URLs that exist in both the programmatic registry
 * and the legacy SEO batch system, and warns about semantic slug duplicates.
 *
 * Exact cross-system duplicates are ERRORS (build should fail).
 * Semantic duplicates are WARNINGS only (two differently-named slugs may
 * occasionally represent genuinely different places).
 */
export function validateCrossSystemUrls(): CrossSystemValidationResult {
  // --- Collect all URLs from the new programmatic registry ---
  const registryPages = generatePages();
  const registryUrlSet = new Set(registryPages.map((p) => p.urlPath));

  // --- Collect all slugs from the legacy batch system ---
  // Legacy pages use `slug` as the path segment (no leading slash)
  const legacySlugs = ALL_SEO_PAGES.map((p) => p.slug);
  const legacyUrlSet = new Set(legacySlugs.map((s) => `/${s}`));

  // --- Exact cross-system duplicates ---
  const exactCrossSystemDuplicates: CrossSystemDuplicate[] = [];
  for (const url of registryUrlSet) {
    if (legacyUrlSet.has(url)) {
      exactCrossSystemDuplicates.push({
        url,
        registrySource: "programmatic",
        legacySlug: url.slice(1),
      });
    }
  }

  // --- Semantic duplicate detection ---
  // Collect all unique locality slugs across both systems
  const registryLocalitySlugs = new Set(LOCALITY_REGISTRY.map((l) => l.slug));

  // Extract locality slugs implied by legacy batch URLs.
  // Legacy URLs follow patterns like: /sofa-repair-{locality}, /recliner-repair-{locality}, etc.
  const servicePrefix = /^(sofa-repair|recliner-repair|furniture-repair|sofa-upholstery|office-chair-repair)-(.+)$/;
  const legacyLocalitySlugs = new Set<string>();
  for (const slug of legacySlugs) {
    const m = servicePrefix.exec(slug);
    if (m) legacyLocalitySlugs.add(m[2]);
  }

  const allLocalitySlugs = new Set([...registryLocalitySlugs, ...legacyLocalitySlugs]);
  const slugArray = Array.from(allLocalitySlugs);

  const semanticDuplicateCandidates: SemanticDuplicatePair[] = [];
  const reported = new Set<string>();

  for (const slugA of slugArray) {
    // Pattern 1: {city}-sector-{N}  ↔  sector-{N}-{city}
    const cityFirst = /^([a-z]+(?:-[a-z]+)*)-sector-(\d+)$/.exec(slugA);
    if (cityFirst) {
      const [, city, num] = cityFirst;
      const slugB = `sector-${num}-${city}`;
      if (allLocalitySlugs.has(slugB)) {
        const key = [slugA, slugB].sort().join("|");
        if (!reported.has(key)) {
          reported.add(key);
          semanticDuplicateCandidates.push({
            slugA,
            slugB,
            pattern: "{city}-sector-{N} ↔ sector-{N}-{city}",
            affectedUrls: buildAffectedUrls(slugA, slugB, legacySlugs, registryUrlSet),
          });
        }
      }
    }

    // Pattern 2: known spelling variants — check all slugs for close matches
    // chhatarpur ↔ chattarpur  (double-h vs single-h)
    if (slugA.includes("chh")) {
      const slugB = slugA.replace(/chh/g, "ch");
      if (slugB !== slugA && allLocalitySlugs.has(slugB)) {
        const key = [slugA, slugB].sort().join("|");
        if (!reported.has(key)) {
          reported.add(key);
          semanticDuplicateCandidates.push({
            slugA,
            slugB,
            pattern: "chh ↔ ch spelling variant",
            affectedUrls: buildAffectedUrls(slugA, slugB, legacySlugs, registryUrlSet),
          });
        }
      }
    }

    // Pattern 3: crossings ↔ crossing  (plural/singular)
    if (slugA.includes("crossings-")) {
      const slugB = slugA.replace("crossings-", "crossing-");
      // Also handle crossings-republik vs crossing-republik-ghaziabad
      const slugBWithCity = slugA.replace("crossings-", "crossing-") + "-ghaziabad";
      for (const candidate of [slugB, slugBWithCity]) {
        if (allLocalitySlugs.has(candidate)) {
          const key = [slugA, candidate].sort().join("|");
          if (!reported.has(key)) {
            reported.add(key);
            semanticDuplicateCandidates.push({
              slugA,
              slugB: candidate,
              pattern: "crossings- ↔ crossing- spelling variant",
              affectedUrls: buildAffectedUrls(slugA, candidate, legacySlugs, registryUrlSet),
            });
          }
        }
      }
    }
  }

  return { exactCrossSystemDuplicates, semanticDuplicateCandidates };
}

/** Build the list of live URLs affected by a semantic duplicate pair. */
function buildAffectedUrls(slugA: string, slugB: string, legacySlugs: string[], registryUrlSet: Set<string>): string[] {
  const affected: string[] = [];
  for (const s of legacySlugs) {
    if (s.endsWith(`-${slugA}`) || s.endsWith(`-${slugB}`)) {
      affected.push(`/${s}`);
    }
  }
  const servicePrefix = /^(sofa-repair|recliner-repair|furniture-repair|sofa-upholstery|office-chair-repair)/;
  for (const url of registryUrlSet) {
    const slug = url.slice(1);
    const m = servicePrefix.exec(slug);
    if (m) {
      const loc = slug.slice(m[1].length + 1);
      if (loc === slugA || loc === slugB) {
        if (!affected.includes(url)) affected.push(url);
      }
    }
  }
  return affected.sort();
}

/**
 * Validates the registry and generated page set.
 *
 * Checks:
 * 1. No duplicate locality IDs
 * 2. No duplicate locality slugs
 * 3. No duplicate service IDs
 * 4. No duplicate service slugs
 * 5. No duplicate generated URLs
 * 6. All locality cluster references are non-empty strings
 * 7. All locality city references are valid CityKey values
 */
export function validateRegistry(): RegistryValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Locality ID uniqueness
  const localityIds = LOCALITY_REGISTRY.map((l) => l.id);
  const dupLocalityIds = findDuplicates(localityIds);
  dupLocalityIds.forEach((id) => errors.push(`Duplicate locality id: "${id}"`));

  // 2. Locality slug uniqueness
  const localitySlugs = LOCALITY_REGISTRY.map((l) => l.slug);
  const dupLocalitySlugs = findDuplicates(localitySlugs);
  dupLocalitySlugs.forEach((slug) => errors.push(`Duplicate locality slug: "${slug}"`));

  // 3. Service ID uniqueness
  const serviceIds = SERVICE_REGISTRY.map((s) => s.id);
  const dupServiceIds = findDuplicates(serviceIds);
  dupServiceIds.forEach((id) => errors.push(`Duplicate service id: "${id}"`));

  // 4. Service slug uniqueness
  const serviceSlugs = SERVICE_REGISTRY.map((s) => s.slug);
  const dupServiceSlugs = findDuplicates(serviceSlugs);
  dupServiceSlugs.forEach((slug) => errors.push(`Duplicate service slug: "${slug}"`));

  // 5. Locality field completeness
  for (const locality of LOCALITY_REGISTRY) {
    if (!locality.id || locality.id.trim() === "") {
      errors.push(`Locality "${locality.slug}" has empty id`);
    }
    if (!locality.cluster || locality.cluster.trim() === "") {
      errors.push(`Locality "${locality.slug}" has empty cluster`);
    }
    if (!locality.city || locality.city.trim() === "") {
      errors.push(`Locality "${locality.slug}" has empty city`);
    }
    if (locality.landmarks.length === 0) {
      warnings.push(`Locality "${locality.slug}" has no landmarks`);
    }
    if (locality.nearby.length === 0) {
      warnings.push(`Locality "${locality.slug}" has no nearby areas`);
    }
  }

  // 6. Generated URL uniqueness
  const pages = generatePages();
  const urls = pages.map((p) => p.urlPath);
  const dupUrls = findDuplicates(urls);
  dupUrls.forEach((url) => errors.push(`Duplicate generated URL: "${url}"`));

  const totalPages = pages.length;

  return {
    valid: errors.length === 0,
    totalPages,
    errors,
    warnings,
  };
}

function findDuplicates(arr: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const item of arr) {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  }
  return Array.from(duplicates);
}
