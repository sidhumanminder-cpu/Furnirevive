import { allSeoSlugs, EXTRA_SLUG_COPIES, hasSeoPage } from "@/lib/seo-pages/slug-index.ts";
import { SEO_SERVICE_CONFIG, type SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";
import { getExistingNeighbourLinks } from "@/lib/seoConfigs/location-graph.ts";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import { pageExistsAt } from "@/lib/registry/link-verify.ts";

/** Routes that exist in App.tsx but are not in the SEO page registry. */
const EXTRA_ROUTES = new Set(["office-chair-repair-gurgaon"]);

/** Service prefixes seen in slugs. Longest match wins, so "recliner-sofa-repair" beats "sofa-repair". */
const SERVICE_PREFIXES: readonly string[] = [
  ...new Set([
    ...Object.keys(SEO_SERVICE_CONFIG),
    "sofa-repair",
    "recliner-repair",
    "recliner-sofa-repair",
    "furniture-repair",
    "sofa-upholstery",
    "leather-sofa-repair",
    "chair-repair",
    "office-chair-repair",
    "office-furniture-repair",
  ]),
].sort((a, b) => b.length - a.length);

/** Sub-regions of Delhi are checked before "delhi" so "south-delhi" is not read as "delhi". */
const DELHI_REGIONS = ["south-delhi", "east-delhi", "west-delhi", "north-delhi", "central-delhi"] as const;
const CITY_NAMES = ["greater-noida", ...DELHI_REGIONS, "delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "chandigarh", "mohali", "panchkula"] as const;
type CityName = (typeof CITY_NAMES)[number];

const FALLBACK_SERVICE = "furniture-repair";

const slugify = (s: string): string =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const pageExists = (slug: string): boolean => EXTRA_ROUTES.has(slug) || hasSeoPage(slug);

const isCityName = (base: string): boolean => (CITY_NAMES as readonly string[]).includes(base);

/** Collapses Delhi sub-regions to "delhi"; other cities stay as they are. */
const canonicalCity = (city: CityName): string => (city.endsWith("delhi") ? "delhi" : city);

function findServicePrefix(slug: string): string | null {
  return SERVICE_PREFIXES.find((p) => slug.startsWith(`${p}-`)) ?? null;
}

/** City from the slug suffix first, then from a city token inside the slug. */
function findCity(rest: string): CityName | null {
  const suffix = CITY_NAMES.find((c) => rest === c || rest.endsWith(`-${c}`));
  if (suffix) return suffix;
  return CITY_NAMES.find((c) => rest.startsWith(`${c}-`) || rest.includes(`-${c}-`)) ?? null;
}

/** "sofa-repair-sector-49-gurgaon" -> { prefix: "sofa-repair", city: "gurgaon" }. No city token means Delhi. */
function splitPageSlug(slug: string): { prefix: string; city: string } | null {
  const prefix = findServicePrefix(slug);
  if (!prefix) return null;
  const city = findCity(slug.slice(prefix.length + 1));
  // No city word in the slug: ask the locality data (e.g. "dlf-phase-1" is Gurgaon), defaulting to Delhi.
  return { prefix, city: city ? canonicalCity(city) : getLocalityInfo(slug.slice(prefix.length + 1)).cityKey };
}

/** Drops the page's own city word from an area ("noida-sector-18" -> "sector-18"). */
function baseVariants(base: string, city: string): string[] {
  const stripped = base.startsWith(`${city}-`) ? base.slice(city.length + 1) : base.endsWith(`-${city}`) ? base.slice(0, -(city.length + 1)) : base;
  return stripped === base || !stripped ? [base] : [base, stripped];
}

/** City a city-less slug belongs to (unknown localities default to Delhi); stops cross-city bare links. */
const targetCity = (slug: string): string => getLocalityInfo(slug).cityKey;

/** Candidate slugs for one service, in resolution order. */
function candidatesFor(svc: string, bases: string[], city: string): string[] {
  const out: string[] = [];
  for (const base of bases) {
    out.push(`${svc}-${base}-${city}`, `${svc}-${city}-${base}`);
    // Bare form carries no city word, so it may only point at a city hub or a page of the same city.
    if (isCityName(base) || targetCity(`${svc}-${base}`) === city) out.push(`${svc}-${base}`);
  }
  return out;
}

/**
 * Finds the real page for an area pill. Explicit links win; otherwise looks for the same service in
 * the same city, then falls back to furniture-repair in that city. Returns null when no page exists
 * so the caller renders plain text instead of a dead link.
 */
export function resolveAreaHref(
  area: string,
  pageSlug: string,
  explicit?: Record<string, string>,
): string | null {
  const direct = explicit?.[area];
  // Explicit links may point at generated registry pages too, not only hand-written ones
  if (direct) return pageExists(direct) || pageExistsAt(direct) ? `/${direct}` : null;

  const parts = splitPageSlug(pageSlug);
  if (!parts) return null;
  const bases = baseVariants(slugify(area), parts.city);
  const services = parts.prefix === FALLBACK_SERVICE ? [parts.prefix] : [parts.prefix, FALLBACK_SERVICE];
  const candidates = services.flatMap((svc) => candidatesFor(svc, bases, parts.city));
  const hit = candidates.find((c) => c !== pageSlug && pageExists(c));
  return hit ? `/${hit}` : null;
}

/** Words that mark a page as a topic page (pricing, problems, near-me...) rather than a locality page. */
const NON_LOCALITY_WORDS = /(^|-)(cost|price|prices|pricing|near|me|repair|upholstery|service|services|best|cheap|same|day|home|doorstep|emergency|leather|fabric|wooden|chair|recliner|sofa|furniture|foam|spring|frame|polish|kitchen|modular|office|hotel|restaurant|clinic|society|apartment|villa|dining|bed|table|wardrobe|cane|rexine|velvet|l-shape|corner|sectional|cum|warranty|free|inspection|quote|review|reviews|vs|how|why|what|before|after|gallery|results|case|study|cases|photos|work|pickup|delivery|team|technician|technicians)(-|$)/;

const toDisplayName = (base: string): string =>
  base.split("-").map((w) => (w === "dlf" || w === "bptp" || w === "nit" || w === "mg" ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(" ");

const VAGUE_NAMES = new Set(["new", "expressway", "extension", "cantt", "east", "west", "north", "south", "central", "old", "greater"]);

type CityPage = { slug: string; name: string };
let cityIndex: Map<string, CityPage[]> | null = null;

/** Index of locality pages by "service|city", built once from the registry. */
function getCityIndex(): Map<string, CityPage[]> {
  if (cityIndex) return cityIndex;
  const index = new Map<string, CityPage[]>();
  for (const slug of [...allSeoSlugs(), ...EXTRA_SLUG_COPIES]) {
    const parts = splitPageSlug(slug);
    if (!parts) continue;
    const rest = slug.slice(parts.prefix.length + 1);
    if (isCityName(rest) || rest.length === 0) continue;
    const base = baseVariants(rest, parts.city).at(-1) ?? rest;
    if (NON_LOCALITY_WORDS.test(base)) continue;
    // Vague one-word remainders ("new", "expressway", "cantt") need the city to make sense.
    const label = VAGUE_NAMES.has(base) ? rest : base;
    const key = `${parts.prefix}|${parts.city}`;
    const list = index.get(key) ?? [];
    list.push({ slug, name: toDisplayName(label) });
    index.set(key, list);
  }
  cityIndex = index;
  return index;
}

/** Small stable string hash (FNV-1a) so the rotation never changes between builds. */
function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) h = Math.imul(h ^ slug.charCodeAt(i), 16777619);
  return h >>> 0;
}

const rotate = <T>(list: T[], by: number): T[] => {
  if (list.length === 0) return list;
  const k = by % list.length;
  return [...list.slice(k), ...list.slice(0, k)];
};

/** Service key the neighbour graph understands, or null for services it does not cover. */
const asServiceKey = (prefix: string): SeoServiceKey | null => (prefix in SEO_SERVICE_CONFIG ? (prefix as SeoServiceKey) : null);

/**
 * Display names of other locality pages in the same city and service, for the fallback area list.
 * Order: 1) real neighbours from the location graph, 2) related pages of the page, 3) all other
 * same-city pages alphabetically, rotated by a hash of the slug so inbound links spread evenly.
 * Only names that resolve back to a real link are returned.
 */
export function getSameCityAreaNames(
  pageSlug: string,
  limit = 14,
  relatedPages: readonly { href: string }[] = [],
): string[] {
  const parts = splitPageSlug(pageSlug);
  if (!parts) return [];
  const pool = (getCityIndex().get(`${parts.prefix}|${parts.city}`) ?? []).filter((p) => p.slug !== pageSlug);
  const bySlug = new Map(pool.map((p) => [p.slug, p]));
  const serviceKey = asServiceKey(parts.prefix);

  const neighbours = serviceKey ? getExistingNeighbourLinks(pageSlug, serviceKey).map((n) => n.href.replace(/^\//, "")) : [];
  const related = relatedPages.map((r) => r.href.replace(/^\//, ""));
  const rest = [...pool].sort((a, b) => a.name.localeCompare(b.name)).map((p) => p.slug);

  const ordered = [...neighbours, ...related, ...rotate(rest, hashSlug(pageSlug))];
  const names: string[] = [];
  const seen = new Set<string>();
  for (const slug of ordered) {
    const page = bySlug.get(slug);
    if (!page || seen.has(slug) || names.includes(page.name)) continue;
    seen.add(slug);
    if (resolveAreaHref(page.name, pageSlug) !== `/${slug}`) continue;
    names.push(page.name);
    if (names.length >= limit) break;
  }
  return names;
}

/** City a slug ends in ("sofa-foam-replacement-noida" -> "noida"), or undefined. Used where setting cityKey would switch on other sections. */
export function cityFromSlugSuffix(slug: string): "noida" | "gurgaon" | "ghaziabad" | "faridabad" | undefined {
  const m = slug.match(/-(noida|gurgaon|ghaziabad|faridabad)$/);
  return m ? (m[1] as "noida" | "gurgaon" | "ghaziabad" | "faridabad") : undefined;
}

/**
 * Link target for a Service Areas pill: the same-service page first, then that area's sofa-repair
 * page, else null (plain pill). Never returns the current page or a kitchen/tricity page.
 */
export function resolveServiceAreaHref(area: string, pageSlug: string): string | null {
  const same = resolveAreaHref(area, pageSlug);
  if (same) return same;
  const slug = `sofa-repair-${slugify(area)}`;
  if (slug === pageSlug || /kitchen|chandigarh|mohali|panchkula|tricity|zirakpur/.test(slug)) return null;
  return pageExists(slug) ? `/${slug}` : null;
}
