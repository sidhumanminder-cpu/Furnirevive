/**
 * Location Graph — Geographic topology for FurniRevive SEO
 *
 * Architecture position:
 * - This file owns geographic structure (metros → cities → featured localities)
 * - This file owns ALL URL construction (buildCityServiceUrl, buildLocalityServiceUrl)
 * - Locality metadata (adjacent areas, landmarks, response times) lives in localities.ts
 * - Service identity lives in service-config.ts
 * - Components NEVER concatenate URLs themselves — they call helpers from this file
 *
 * Pure functions only. Module-level indexes built once at init for O(1) lookups.
 */

import type { SeoPageData } from "@/lib/seo-constants.ts";
import { SEO_SERVICE_CONFIG, type SeoServiceKey } from "./service-config.ts";
import { type CityKey, getLocalityInfo } from "./localities.ts";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";
import { UPHOLSTERY_PAGE_HREFS } from "@/lib/seo-pages/upholstery-page-hrefs.ts";

// ─── Types ──────────────────────────────────────────────────────────────────

export type PageType = "city" | "locality" | "service" | "hub" | "blog" | "brand" | "pricing";

export type NeighbourLink = {
  name: string;
  /** e.g. "sofa-repair-rohini" */
  slug: string;
  /** e.g. "/sofa-repair-rohini" */
  href: string;
};

export type CityNode = {
  key: CityKey;
  displayName: string;
  /** e.g. "/sofa-repair-noida" */
  slug: string;
  /** Lower = higher priority. Used for stable sort order across all renders. */
  priority: number;
  sortOrder: number;
  /**
   * Curated featured locality slugs for this city.
   * NOT exhaustive — only the most prominent ones for ServiceAvailabilitySection.
   * Full locality data lives in localities.ts.
   */
  featuredLocalitySlugs: string[];
};

export type MetroNode = {
  key: string;
  /** e.g. "Delhi NCR", "Mumbai Metropolitan Region" */
  displayName: string;
  /** Cities sorted by priority ascending */
  cities: CityNode[];
};

export type LocationRelationships = {
  current: { name: string; cityKey: CityKey; slug: string };
  parentCity: CityNode;
  metro: MetroNode;
  /** Neighbouring locality links — from getLocalityInfo().adjacentAreas */
  nearbyLocalities: NeighbourLink[];
  /** Featured locality links for the parent city — from featuredLocalitySlugs */
  featuredLocalities: NeighbourLink[];
  /** Nearby landmarks — from getLocalityInfo().landmarks */
  nearbyLandmarks: string[];
  // relatedCities intentionally omitted — not consumed yet
};

// ─── Graph Data ─────────────────────────────────────────────────────────────

/**
 * LOCATION_GRAPH
 *
 * Geographic only. Contains:
 * - Metro areas
 * - Cities within each metro
 * - Curated featured locality slugs per city
 *
 * Does NOT contain:
 * - Pricing, FAQs, response times, service content
 * - All locality metadata (that lives in localities.ts)
 *
 * To add a new metro (Mumbai, Bangalore, etc.):
 * Add a new MetroNode object here. Zero component changes needed.
 */
export const LOCATION_GRAPH: Record<string, MetroNode> = {
  "delhi-ncr": {
    key: "delhi-ncr",
    displayName: "Delhi NCR",
    cities: [
      {
        key: "delhi",
        displayName: "Delhi",
        slug: "/sofa-repair-delhi",
        priority: 1,
        sortOrder: 1,
        featuredLocalitySlugs: [
          "sofa-repair-rohini",
          "sofa-repair-dwarka",
          "sofa-repair-vasant-kunj",
          "sofa-repair-lajpat-nagar",
          "sofa-repair-greater-kailash",
          "sofa-repair-pitampura",
        ],
      },
      {
        key: "noida",
        displayName: "Noida",
        slug: "/sofa-repair-noida",
        priority: 2,
        sortOrder: 2,
        featuredLocalitySlugs: [
          "sofa-repair-sector-18-noida",
          "sofa-repair-sector-44-noida",
          "sofa-repair-sector-62-noida",
          "sofa-repair-sector-137-noida",
          "sofa-repair-indirapuram",
          "sofa-repair-sector-150-noida",
        ],
      },
      {
        key: "gurgaon",
        displayName: "Gurgaon",
        slug: "/sofa-repair-gurgaon",
        priority: 3,
        sortOrder: 3,
        featuredLocalitySlugs: [
          "sofa-repair-dlf-phase-1-gurgaon",
          "sofa-repair-dlf-phase-5-gurgaon",
          "sofa-repair-golf-course-road-gurgaon",
          "sofa-repair-sohna-road-gurgaon",
          "sofa-repair-cyber-city-gurgaon",
          "sofa-repair-sushant-lok-gurgaon",
        ],
      },
      {
        key: "ghaziabad",
        displayName: "Ghaziabad",
        slug: "/sofa-repair-ghaziabad",
        priority: 4,
        sortOrder: 4,
        featuredLocalitySlugs: [
          "sofa-repair-indirapuram",
          "sofa-repair-vaishali-ghaziabad",
          "sofa-repair-kaushambi-ghaziabad",
          "sofa-repair-raj-nagar-extension",
          "sofa-repair-crossing-republik",
          "sofa-repair-vasundhara-ghaziabad",
        ],
      },
      {
        key: "faridabad",
        displayName: "Faridabad",
        slug: "/sofa-repair-faridabad",
        priority: 5,
        sortOrder: 5,
        featuredLocalitySlugs: [
          "sofa-repair-sector-15-faridabad",
          "sofa-repair-greater-faridabad",
          "sofa-repair-neharpar-faridabad",
          "sofa-repair-bptp-faridabad",
          "sofa-repair-surajkund-faridabad",
          "sofa-repair-old-faridabad",
        ],
      },
    ],
  },
  // Future metros go here:
  // "mumbai": { key: "mumbai", displayName: "Mumbai Metropolitan Region", cities: [...] }
  // "bengaluru": { key: "bengaluru", displayName: "Bengaluru Metropolitan Area", cities: [...] }
  "chandigarh-tricity": {
    key: "chandigarh-tricity",
    displayName: "Chandigarh Tricity",
    cities: [
      {
        key: "chandigarh",
        displayName: "Chandigarh",
        slug: "/sofa-repair-chandigarh",
        priority: 1,
        sortOrder: 1,
        featuredLocalitySlugs: [
          "sofa-repair-sector-17-chandigarh",
          "sofa-repair-sector-22-chandigarh",
          "sofa-repair-sector-35-chandigarh",
          "sofa-repair-sector-43-chandigarh",
          "sofa-repair-sector-44-chandigarh",
          "sofa-repair-manimajra-chandigarh",
        ],
      },
      {
        key: "mohali",
        displayName: "Mohali",
        slug: "/sofa-repair-mohali",
        priority: 2,
        sortOrder: 2,
        featuredLocalitySlugs: [
          "sofa-repair-phase-7-mohali",
          "sofa-repair-phase-10-mohali",
          "sofa-repair-aerocity-mohali",
          "sofa-repair-it-city-mohali",
          "sofa-repair-phase-5-mohali",
          "sofa-repair-zirakpur-mohali",
        ],
      },
      {
        key: "panchkula",
        displayName: "Panchkula",
        slug: "/sofa-repair-panchkula",
        priority: 3,
        sortOrder: 3,
        featuredLocalitySlugs: [
          "sofa-repair-sector-5-panchkula",
          "sofa-repair-mdc-sector-5-panchkula",
          "sofa-repair-sector-8-panchkula",
          "sofa-repair-sector-4-panchkula",
          "sofa-repair-sector-20-panchkula",
          "sofa-repair-dhakoli-panchkula",
        ],
      },
    ],
  },
};

/** Default active metro key */
const DEFAULT_METRO_KEY = "delhi-ncr";

// ─── Module-level indexes (built once, never mutated) ───────────────────────

const _cityIndex = new Map<CityKey, CityNode>();
const _slugToCityIndex = new Map<string, CityKey>();
const _cityToMetroIndex = new Map<CityKey, MetroNode>();

for (const metro of Object.values(LOCATION_GRAPH)) {
  for (const city of metro.cities) {
    _cityIndex.set(city.key, city);
    _cityToMetroIndex.set(city.key, metro);
    for (const localitySlug of city.featuredLocalitySlugs) {
      _slugToCityIndex.set(localitySlug, city.key);
    }
  }
}

// ─── Pure Helper Functions ──────────────────────────────────────────────────

/**
 * Returns the active metro node.
 * @param metroKey - defaults to "delhi-ncr". Pass a different key for future metros.
 */
export function getMetro(metroKey?: string): MetroNode {
  const key = metroKey ?? DEFAULT_METRO_KEY;
  const metro = LOCATION_GRAPH[key];
  if (!metro) throw new Error(`Metro "${key}" not found in LOCATION_GRAPH`);
  return metro;
}

/**
 * Returns a CityNode by key, or undefined if not found.
 */
export function getCityNode(cityKey: CityKey): CityNode | undefined {
  return _cityIndex.get(cityKey);
}

/**
 * Builds a canonical city service page URL.
 * Architecture rule: URL construction always happens here, never in components.
 *
 * @example buildCityServiceUrl("sofa-repair", "noida") → "/sofa-repair-noida"
 * @example buildCityServiceUrl("leather-sofa-repair", "delhi") → "/leather-sofa-repair-delhi"
 */
export function buildCityServiceUrl(serviceKey: SeoServiceKey, cityKey: CityKey): string {
  return `/${serviceKey}-${cityKey}`;
}

/**
 * Builds a canonical locality service page URL.
 * Architecture rule: URL construction always happens here, never in components.
 *
 * @example buildLocalityServiceUrl("sofa-repair", "rohini") → "/sofa-repair-rohini"
 */
export function buildLocalityServiceUrl(serviceKey: SeoServiceKey, localitySlug: string): string {
  // localitySlug may already contain the service prefix — strip it first if so
  const stripped = localitySlug
    .replace(/^sofa-repair-/, "")
    .replace(/^sofa-upholstery-/, "")
    .replace(/^leather-sofa-repair-/, "")
    .replace(/^recliner-repair-/, "")
    .replace(/^furniture-repair-/, "")
    .replace(/^furniture-polish-/, "")
    .replace(/^chair-repair-/, "")
    .replace(/^wooden-sofa-repair-/, "")
    .replace(/^sofa-spring-repair-/, "")
    .replace(/^sofa-frame-repair-/, "")
    .replace(/^foam-replacement-/, "");
  return `/${serviceKey}-${stripped}`;
}

/**
 * O(1) Set of canonical hrefs built lazily on first use from the page registry.
 * Lazy initialization breaks the module evaluation order cycle between
 * location-graph.ts and registry.ts.
 * Registry is the single source of canonical URLs — no reconstruction here.
 * Format: "/sofa-repair-pitampura" (leading slash + page.slug)
 */
let _pageHrefSet: Set<string> | null = null;
function getPageHrefSet(): Set<string> {
  if (_pageHrefSet === null) {
    _pageHrefSet = new Set(ALL_SEO_PAGES.map((p) => `/${p.slug}`));
  }
  return _pageHrefSet;
}

/**
 * Checks whether a canonical href exists in the page registry.
 * Pure O(1) membership check — no normalization, no routing knowledge.
 * Returns false (never throws) for malformed or unknown hrefs.
 *
 * Registry is the single source of truth for canonical URLs.
 *
 * @example pageExists("/sofa-repair-pitampura") → true
 * @example pageExists("/sofa-repair-imaginary-colony") → false
 */
export function pageExists(href: string): boolean {
  return getPageHrefSet().has(href) || UPHOLSTERY_PAGE_HREFS.has(href);
}

/**
 * Returns neighbour links for a locality page, filtered to only registry-verified pages.
 * Pipeline: adjacentAreas → nameToSlug → buildLocalityServiceUrl → pageExists → NeighbourLink[]
 *
 * Benefits:
 * - Never generates 404 links
 * - Zero maintenance: new locality pages auto-appear when added to the registry
 * - adjacentAreas can stay as full geographic data without mirroring SEO coverage
 *
 * @param slug  Current locality page slug (e.g. "sofa-repair-pitampura")
 * @param serviceKey  The service to build URLs for (e.g. "sofa-repair")
 */
export function getExistingNeighbourLinks(
  slug: string,
  serviceKey: SeoServiceKey,
): NeighbourLink[] {
  const info = getLocalityInfo(slug);
  return info.adjacentAreas
    .map((areaName) => {
      const areaSlug = areaName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const href = buildLocalityServiceUrl(serviceKey, areaSlug);
      return { name: areaName, slug: areaSlug, href };
    })
    .filter((link) => pageExists(link.href));
}

/**
 * @deprecated Use getExistingNeighbourLinks(slug, serviceKey) instead.
 * This function uses a hardcoded "sofa-repair" service key and does not validate
 * against the page registry, so it can generate 404 links.
 */
export function getNeighbourLinks(slug: string): NeighbourLink[] {
  return getExistingNeighbourLinks(slug, "sofa-repair");
}

/**
 * Returns featured locality links for a city, capped by maxCount.
 * Reads from CityNode.featuredLocalitySlugs in LOCATION_GRAPH.
 */
export function getFeaturedLocalities(cityKey: CityKey, maxCount = 5): NeighbourLink[] {
  const city = _cityIndex.get(cityKey);
  if (!city) return [];
  return city.featuredLocalitySlugs.slice(0, maxCount).map((localitySlug) => {
    const info = getLocalityInfo(localitySlug);
    return {
      name: info.name,
      slug: localitySlug,
      href: `/${localitySlug}`,
    };
  });
}

/**
 * Returns the full LocationRelationships object for a locality page slug.
 * Powers breadcrumbs, nearby areas, related pages, schema, and future map features.
 */
export function getLocationRelationships(slug: string): LocationRelationships {
  const info = getLocalityInfo(slug);
  const defaultMetro = getMetro();
  const parentCity = _cityIndex.get(info.cityKey) ?? defaultMetro.cities[0];
  const metro = _cityToMetroIndex.get(info.cityKey) ?? defaultMetro;
  return {
    current: { name: info.name, cityKey: info.cityKey, slug },
    parentCity,
    metro,
    nearbyLocalities: getExistingNeighbourLinks(slug, "sofa-repair"),
    featuredLocalities: getFeaturedLocalities(info.cityKey),
    nearbyLandmarks: info.landmarks,
  };
}

// ─── Page Type & Service Key Resolution ─────────────────────────────────────

/**
 * Resolves the PageType from SeoPageData metadata.
 * Resolution order:
 * 1. data.pageType (explicit — highest trust)
 * 2. data.cityKey present → "city"
 * 3. data.serviceKey present → "service"
 * 4. Slug heuristic → if slug matches a known service key prefix → "service"
 * 5. Default → "locality"
 *
 * Named "resolve" not "infer" because we're resolving from metadata, not guessing.
 */
export function resolvePageType(data: SeoPageData & { pageType?: PageType; serviceKey?: SeoServiceKey }): PageType {
  if (data.pageType) return data.pageType;
  if (data.cityKey) return "city";
  if (data.serviceKey) return "service";

  // Heuristic: check if slug matches known service + city pattern
  const SERVICE_SLUG_PREFIXES = Object.keys(SEO_SERVICE_CONFIG) as SeoServiceKey[];
  const CITY_SUFFIXES: CityKey[] = ["delhi", "noida", "gurgaon", "ghaziabad", "faridabad", "chandigarh", "mohali", "panchkula"];

  const isServiceSlug = SERVICE_SLUG_PREFIXES.some((key) => {
    if (data.slug === key) return true;
    return CITY_SUFFIXES.some((city) => data.slug === `${key}-${city}`);
  });

  if (isServiceSlug) return "service";
  return "locality";
}

/**
 * Resolves SeoServiceKey from SeoPageData.
 * Resolution order:
 * 1. data.serviceKey (explicit)
 * 2. Match data.slug against SEO_SERVICE_CONFIG keys (backward-compat fallback)
 * 3. null — caller must handle missing service key gracefully (e.g. skip rendering section)
 *
 * Named "resolve" to emphasise deterministic resolution, not guessing.
 */
export function resolveServiceKey(data: SeoPageData & { serviceKey?: SeoServiceKey }): SeoServiceKey | null {
  if (data.serviceKey) return data.serviceKey;

  // Try slug prefix matching against known service keys
  const SERVICE_KEYS = Object.keys(SEO_SERVICE_CONFIG) as SeoServiceKey[];
  for (const key of SERVICE_KEYS) {
    if (data.slug.startsWith(key)) return key;
  }
  return null;
}
