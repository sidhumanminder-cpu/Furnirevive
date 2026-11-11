/**
 * Link verification shared by the registry modules and area-links.
 * Every helper answers "does this page really exist?" so no section renders a dead link.
 * Built lazily to avoid import cycles with the page registries.
 */
import { generatePages } from "./generate-pages.ts";
import { allSeoSlugs } from "@/lib/seo-pages/slug-index.ts";
import type { CityKey } from "./types.ts";

/** Routes that exist in App.tsx but are not in the SEO page registry. */
const EXTRA_ROUTES = ["/office-chair-repair-gurgaon"];

let validPaths: Set<string> | null = null;
let cityByPath: Map<string, CityKey> | null = null;

function load(): { paths: Set<string>; cities: Map<string, CityKey> } {
  if (!validPaths || !cityByPath) {
    validPaths = new Set<string>(EXTRA_ROUTES);
    cityByPath = new Map<string, CityKey>();
    for (const p of generatePages()) {
      validPaths.add(p.urlPath);
      cityByPath.set(p.urlPath, p.city);
    }
    for (const slug of allSeoSlugs()) validPaths.add(slug.startsWith("/") ? slug : `/${slug}`);
  }
  return { paths: validPaths, cities: cityByPath };
}

const withSlash = (href: string): string => (href.startsWith("/") ? href : `/${href}`);

/** True when the path is a registry page, a hand-authored SEO page or a known route. */
export function pageExistsAt(href: string): boolean {
  return load().paths.has(withSlash(href));
}

/** City a generated registry page belongs to, or undefined for hand-authored pages. */
export function registryCityOf(slugOrPath: string): CityKey | undefined {
  return load().cities.get(withSlash(slugOrPath));
}

/** Hub services to try, best match first, per service family. */
const HUB_FALLBACKS: Record<string, readonly string[]> = {
  "office-chair-repair": ["office-chair-repair", "furniture-repair", "sofa-repair"],
  "office-furniture-repair": ["office-chair-repair", "furniture-repair", "sofa-repair"],
  "sofa-upholstery": ["sofa-upholstery", "furniture-repair", "sofa-repair"],
  "recliner-repair": ["recliner-repair", "furniture-repair", "sofa-repair"],
  "furniture-repair": ["furniture-repair", "sofa-repair"],
  "sofa-repair": ["sofa-repair", "furniture-repair"],
};

/** City hub for a service: the service's own hub, else the nearest service that has one, else null. */
export function resolveCityHub(serviceSlug: string, city: string): string | null {
  const order = HUB_FALLBACKS[serviceSlug] ?? [serviceSlug, "furniture-repair", "sofa-repair"];
  const hit = order.map((s) => `/${s}-${city}`).find(pageExistsAt);
  return hit ?? null;
}
