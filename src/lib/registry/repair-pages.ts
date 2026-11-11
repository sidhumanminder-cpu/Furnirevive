/**
 * Repair-service page definitions (residential + commercial), without any kitchen data.
 * Kept separate from generate-pages.ts so non-kitchen routes never load the kitchen registries.
 */
import { LOCALITY_REGISTRY } from "./locality-registry.ts";
import { SERVICE_REGISTRY } from "./service-registry.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "./commercial-locality-registry.ts";
import { canGeneratePage } from "./business-rules.ts";
import type { PageDefinition, ServiceSlug } from "./types.ts";

/**
 * Builds the canonical URL path for a given service + locality slug + city.
 * Must match the URL patterns used by legacy pages exactly.
 */
export function buildRegistryUrl(service: ServiceSlug, localitySlug: string, city: string): string {
  if (service === "sofa-upholstery") {
    // Delhi upholstery pages use -delhi suffix; others use bare slug
    if (city === "delhi") {
      return `/sofa-upholstery-${localitySlug}-delhi`;
    }
    return `/sofa-upholstery-${localitySlug}`;
  }
  if (service === "modular-kitchen") {
    // All kitchen pages: /modular-kitchen-{slug}
    return `/modular-kitchen-${localitySlug}`;
  }
  // All repair services: /service-slug-locality-slug
  return `/${service}-${localitySlug}`;
}

/**
 * Generates the full set of page definitions for all published registry
 * localities × all services, filtered by business rules.
 *
 * Returns a flat array of PageDefinition objects.
 * Only the "repair" intent is generated in Milestone 1 scope.
 * Additional intents (cost, near-me, etc.) can be added later.
 */
export function generateRepairPages(): PageDefinition[] {
  const pages: PageDefinition[] = [];

  for (const locality of LOCALITY_REGISTRY) {
    for (const service of SERVICE_REGISTRY) {
      // modular-kitchen has dedicated generation paths (sections 1–19 below).
      // Skipping here eliminates 604 phantom 404s and 363 duplicate sitemap entries.
      if (service.slug === "modular-kitchen") continue;
      if (!canGeneratePage(locality, service)) {
        continue;
      }

      const urlPath = buildRegistryUrl(service.slug, locality.slug, locality.city);

      pages.push({
        service: service.slug,
        locality: locality.slug,
        city: locality.city,
        intent: "repair",
        urlPath,
      });
    }
  }

  // Commercial B2B cluster: iterate all corporate-audience services over each
  // commercial locality. Adding a new B2B service to SERVICE_REGISTRY is the
  // only change needed to generate pages for all commercial localities.
  const commercialServices = SERVICE_REGISTRY.filter(
    (s) => s.capabilities?.audience.corporate && !s.capabilities?.audience.residential,
  );

  for (const service of commercialServices) {
    for (const locality of COMMERCIAL_LOCALITY_REGISTRY) {
      if (!canGeneratePage(locality, service)) {
        continue;
      }

      // URL: /office-chair-repair-{slug}, /office-furniture-repair-{slug}, etc.
      const urlPath = `/${service.slug}-${locality.slug}`;

      pages.push({
        service: service.slug,
        locality: locality.slug,
        city: locality.city,
        intent: "repair",
        urlPath,
      });
    }
  }

  return pages;
}

let repairPageMap: Map<string, PageDefinition> | null = null;

/** Looks up a repair (non-kitchen) registry page by pathname. */
export function getRepairRegistryPage(pathname: string): PageDefinition | undefined {
  repairPageMap ??= new Map(generateRepairPages().map((p) => [p.urlPath, p]));
  return repairPageMap.get(pathname);
}
