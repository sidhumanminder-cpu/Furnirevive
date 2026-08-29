/**
 * Dimension Registry Validator
 *
 * Runs in dev mode only. Checks KITCHEN_DIMENSION_REGISTRY for:
 *  1. Duplicate slugs within the registry
 *  2. URL collisions with existing generatePages() routes
 *  3. crossLinks[] entries that don't resolve to a known page URL
 *  4. Duplicate searchIntent values
 *
 * Logs console.warn for each violation — never throws in production.
 * Called from src/lib/registry/index.ts (same pattern as editorial link matrix).
 */

import { KITCHEN_DIMENSION_REGISTRY } from "./kitchen-dimension-registry.ts";
import { generatePages } from "./generate-pages.ts";

function runValidation(): void {
  if (!import.meta.env.DEV) return;

  const violations: string[] = [];

  // Build a set of all known page URL paths (excluding dimension entries themselves,
  // since they are "draft" and not in generatePages() yet — we check for future collisions)
  const existingUrls = new Set<string>(generatePages().map((p) => p.urlPath));

  // Check 1: duplicate slugs within KITCHEN_DIMENSION_REGISTRY
  const seenSlugs = new Map<string, number>();
  for (const entry of KITCHEN_DIMENSION_REGISTRY) {
    const count = (seenSlugs.get(entry.slug) ?? 0) + 1;
    seenSlugs.set(entry.slug, count);
  }
  for (const [slug, count] of seenSlugs.entries()) {
    if (count > 1) {
      violations.push(`[dimension-registry] Duplicate slug "${slug}" appears ${count} times`);
    }
  }

  // Check 2: URL collision with existing generatePages() routes
  // Only published entries would register routes, but we check all to catch
  // pre-publication conflicts early
  for (const entry of KITCHEN_DIMENSION_REGISTRY) {
    const url = `/${entry.slug}`;
    if (existingUrls.has(url)) {
      violations.push(
        `[dimension-registry] Slug "${entry.slug}" collides with an existing route at ${url}`,
      );
    }
  }

  // Check 3: crossLinks[] resolve to known pages
  // Build a union of all URLs including dimension entries' own potential URLs
  const dimensionUrls = new Set<string>(
    KITCHEN_DIMENSION_REGISTRY.map((e) => `/${e.slug}`),
  );
  const allKnownUrls = new Set<string>([...existingUrls, ...dimensionUrls]);

  for (const entry of KITCHEN_DIMENSION_REGISTRY) {
    for (const crossLink of entry.crossLinks) {
      const url = `/${crossLink}`;
      if (!allKnownUrls.has(url)) {
        violations.push(
          `[dimension-registry] Entry "${entry.slug}" has crossLink "${crossLink}" that doesn't resolve to any known page`,
        );
      }
    }
  }

  // Check 4: duplicate searchIntent values
  const seenIntents = new Map<string, string>();
  for (const entry of KITCHEN_DIMENSION_REGISTRY) {
    const existing = seenIntents.get(entry.searchIntent);
    if (existing) {
      violations.push(
        `[dimension-registry] Duplicate searchIntent "${entry.searchIntent}" on "${entry.slug}" and "${existing}"`,
      );
    } else {
      seenIntents.set(entry.searchIntent, entry.slug);
    }
  }

  if (violations.length > 0) {
    console.warn(
      `[validate-dimension-registry] ${violations.length} violation(s) found:\n` +
        violations.map((v) => `  • ${v}`).join("\n"),
    );
  }
}

runValidation();
