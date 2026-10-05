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
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { generatePages } from "@/lib/registry/generate-pages.ts";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";

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

/** Lowercase display name → registry entries (built once; registry order preserved) */
const LOCALITY_BY_NAME: ReadonlyMap<string, readonly LocalityEntry[]> = (() => {
  const map = new Map<string, LocalityEntry[]>();
  for (const entry of LOCALITY_REGISTRY) {
    const key = entry.name.trim().toLowerCase();
    const list = map.get(key);
    if (list) list.push(entry);
    else map.set(key, [entry]);
  }
  return map;
})();

/**
 * Resolve the real registered slug for a nearby locality name.
 * Prefers a same-city match; falls back to slugify when the name is unregistered.
 */
function resolveAreaSlug(name: string, city: CityKey): string {
  const matches = LOCALITY_BY_NAME.get(name.trim().toLowerCase());
  if (!matches || matches.length === 0) return slugify(name);
  return (matches.find((m) => m.city === city) ?? matches[0]).slug;
}

function nearbyHref(serviceSlug: ServiceSlug, city: CityKey, name: string): string {
  const areaSlug = resolveAreaSlug(name, city);
  // Sofa upholstery in Delhi uses the "-delhi" suffixed pattern.
  if (serviceSlug === "sofa-upholstery" && city === "delhi") {
    return `/sofa-upholstery-${areaSlug}-delhi`;
  }
  // All other services (and sofa-upholstery outside Delhi) share the base pattern.
  return `/${serviceSlug}-${areaSlug}`;
}

/** Every real page path (registry + hand-authored). Built lazily to avoid import cycles. */
let validPaths: Set<string> | null = null;
function pageExists(href: string): boolean {
  if (!validPaths) {
    validPaths = new Set<string>();
    for (const p of generatePages()) validPaths.add(p.urlPath);
    for (const p of ALL_SEO_PAGES) validPaths.add(p.slug.startsWith("/") ? p.slug : `/${p.slug}`);
  }
  return validPaths.has(href);
}

type NearbyArea = { name: string; href: string };

/**
 * Keeps the original neighbours that have a real page, then backfills with the
 * next-closest localities in the same city (same cluster first, then most shared
 * neighbours) so the section keeps its usual link count without dead links.
 */
function backfillNearby(
  locality: LocalityEntry,
  service: ServiceEntry,
  nearbyNames: string[],
  ctx: PageContext,
): NearbyArea[] {
  const target = nearbyNames.length;
  const used = new Set<string>([nearbyHref(service.slug, locality.city, locality.slug)]);
  const areas: NearbyArea[] = [];
  const push = (displayName: string, href: string) => {
    used.add(href);
    areas.push({ name: getVariedLinkLabel(displayName, areas.length, ctx), href });
  };

  for (const name of nearbyNames) {
    const href = nearbyHref(service.slug, locality.city, name);
    if (used.has(href) || !pageExists(href)) continue;
    push(COMMERCIAL_SLUG_TO_NAME[name] ?? slugToDisplayName(name), href);
  }
  if (areas.length >= target) return areas;

  const own = new Set(locality.nearby.map((n) => n.trim().toLowerCase()));
  const shared = (e: LocalityEntry) => e.nearby.filter((n) => own.has(n.trim().toLowerCase())).length;
  const pool = LOCALITY_REGISTRY.filter((e) => e.city === locality.city && e.slug !== locality.slug)
    .map((e) => ({ e, score: (e.cluster === locality.cluster ? 100 : 0) + shared(e) * 5 - e.servicePriority }))
    .sort((a, b) => b.score - a.score);
  for (const { e } of pool) {
    if (areas.length >= target) break;
    const href = nearbyHref(service.slug, locality.city, e.slug);
    if (!used.has(href) && pageExists(href)) push(e.name, href);
  }
  return areas;
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
      areas: backfillNearby(locality, service, nearbyNames, ctx),
    },
  };
}
