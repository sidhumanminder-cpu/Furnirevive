/**
 * Content Engine — Nearby Areas Module
 *
 * Deterministic, side-effect-free. Maps a locality's adjacent areas to
 * canonical locality + service URLs for internal linking. Domain data only.
 */

import type { LocalityEntry, ServiceEntry, ServiceSlug, CityKey } from "@/lib/registry/types.ts";
import type { NearbySectionData } from "../types.ts";
import { getVariedLinkLabel, type PageContext } from "@/lib/content-engine/content-uniqueness.ts";
import { RELATIONSHIP_GRAPH } from "@/lib/registry/relationship-graph.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "@/lib/registry/commercial-locality-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";

/** Slug→canonical display name lookup built from the commercial registry */
const COMMERCIAL_SLUG_TO_NAME: Record<string, string> = Object.fromEntries(
  COMMERCIAL_LOCALITY_REGISTRY.map((e) => [e.slug, e.name]),
);

/** Convert a raw slug to title case (e.g. "noida-sector-16" → "Noida Sector 16") */
function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Lowercase and replace runs of whitespace with hyphens */
function slugify(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function nearbyHref(serviceSlug: ServiceSlug, city: CityKey, name: string): string {
  const areaSlug = slugify(name);
  // Sofa upholstery in Delhi uses the "-delhi" suffixed pattern.
  if (serviceSlug === "sofa-upholstery" && city === "delhi") {
    return `/sofa-upholstery-${areaSlug}-delhi`;
  }
  // All other services (and sofa-upholstery outside Delhi) share the base pattern.
  return `/${serviceSlug}-${areaSlug}`;
}

export function buildNearby(locality: LocalityEntry, service: ServiceEntry): NearbySectionData {
  const ctx: PageContext = { locality, service, city: locality.city };

  // For corporate services, use the RELATIONSHIP_GRAPH for commercial neighbours.
  // Fall back to locality.nearby for residential services.
  const nearbyNames: string[] = (() => {
    if (service.capabilities?.content?.relationshipGraph) {
      const node = RELATIONSHIP_GRAPH[locality.slug];
      if (node && node.neighbours.length > 0) {
        return [...node.neighbours];
      }
    }
    return [...locality.nearby];
  })();

  // Sort by searchDemandScore (highest first) for better SEO internal-link value
  const scoreMap = new Map(MODULAR_KITCHEN_LOCALITY_REGISTRY.map(e => [e.slug, e.searchDemandScore ?? 0]));
  nearbyNames.sort((a, b) => (scoreMap.get(b) ?? 0) - (scoreMap.get(a) ?? 0));

  return {
    id: `${service.slug}-${locality.slug}-nearby`,
    type: "nearby",
    version: "v1",
    props: {
      heading: service.capabilities?.audience?.corporate
        ? `Office Chair Repair in Nearby Commercial Areas`
        : `${service.name} in Areas Near ${locality.name}`,
      areas: nearbyNames.map((name, index) => {
        const displayName = COMMERCIAL_SLUG_TO_NAME[name] ?? slugToDisplayName(name);
        return {
          name: getVariedLinkLabel(displayName, index, ctx),
          href: nearbyHref(service.slug, locality.city, name),
        };
      }),
    },
  };
}
