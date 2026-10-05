import { getPageBySlug } from "@/lib/seo-pages/registry.ts";

/** Routes that exist in App.tsx but are not in the SEO page registry. */
const EXTRA_ROUTES = new Set(["office-chair-repair-gurgaon"]);

const CITY_SUFFIXES = ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "south-delhi"] as const;

const slugify = (s: string): string =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const pageExists = (slug: string): boolean => EXTRA_ROUTES.has(slug) || getPageBySlug(slug) !== undefined;

/** "sofa-repair-gurgaon" -> { prefix: "sofa-repair", city: "gurgaon" } */
function splitPageSlug(slug: string): { prefix: string; city: string } | null {
  for (const city of CITY_SUFFIXES) {
    if (slug.endsWith(`-${city}`)) return { prefix: slug.slice(0, -(city.length + 1)), city };
  }
  return null;
}

/**
 * Finds the real page for an area pill. Explicit links win; otherwise tries the
 * service-prefixed slug ("sofa-repair-sector-46-gurgaon"). Returns null when no page
 * exists so the caller renders plain text instead of a dead link.
 */
export function resolveAreaHref(
  area: string,
  pageSlug: string,
  explicit?: Record<string, string>,
): string | null {
  const direct = explicit?.[area];
  if (direct) return pageExists(direct) ? `/${direct}` : null;

  const parts = splitPageSlug(pageSlug);
  if (!parts) return null;
  const base = slugify(area);
  const candidates = [`${parts.prefix}-${base}`, `${parts.prefix}-${base}-${parts.city}`];
  const hit = candidates.find((c) => c !== pageSlug && pageExists(c));
  return hit ? `/${hit}` : null;
}
