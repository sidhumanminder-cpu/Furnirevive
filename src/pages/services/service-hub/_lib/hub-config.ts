import type { CityKey, ClusterKey, LocalityEntry } from "@/lib/registry/types.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { getRegistryPage } from "@/lib/registry/index.ts";
import { buildRegistryUrl } from "@/lib/registry/generate-pages.ts";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";
import { CITY_DISPLAY_NAMES, RESPONSE_TIMES } from "@/lib/content-engine/content-pools.ts";
import type { FaqServiceCategory } from "@/lib/seoConfigs/faq-service-pools.ts";
import { getHeroImage } from "@/lib/seoConfigs/hero-image-engine.ts";
import { HERO_IMAGE_REGISTRY, type HeroImageRecord } from "@/lib/seoConfigs/hero-image-registry.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

export type HubService = "sofa-repair" | "recliner-repair" | "furniture-repair" | "sofa-upholstery";

export type PriceRow = { item: string; price: string };

export type ServiceHubConfig = {
  slug: HubService;
  name: string;
  /** Lowercase noun used in running copy */
  noun: string;
  heroKey: SeoServiceKey;
  faqCategory: FaqServiceCategory;
  /** Short headline price used in titles and meta descriptions */
  headlinePrice: string;
  priceRows: readonly PriceRow[];
  priceNote: string;
};

// Prices below are the owner-confirmed figures already used in the FAQ pools.
// Furniture and upholstery intentionally show only their headline price: other
// figures on those pages are inconsistent and are not repeated here.
export const SERVICE_HUB_CONFIG: Record<HubService, ServiceHubConfig> = {
  "sofa-repair": {
    slug: "sofa-repair",
    name: "Sofa Repair",
    noun: "sofa repair",
    heroKey: "sofa-repair",
    faqCategory: "sofa",
    headlinePrice: "from ₹500",
    priceRows: [
      { item: "Basic cushion work", price: "From ₹500" },
      { item: "Foam replacement (per seat)", price: "₹999 – ₹2,500" },
      { item: "Frame repair", price: "From ₹1,500" },
      { item: "Leather sofa repair", price: "From ₹1,500" },
      { item: "Sofa spring repair", price: "From ₹2,000" },
      { item: "Fabric re-upholstery (per seat)", price: "From ₹2,000" },
      { item: "Full set restoration", price: "From ₹8,000" },
    ],
    priceNote: "Every quote is fixed after a free doorstep inspection, with no hidden charges.",
  },
  "recliner-repair": {
    slug: "recliner-repair",
    name: "Recliner Repair",
    noun: "recliner repair",
    heroKey: "recliner-repair",
    faqCategory: "recliner",
    headlinePrice: "from ₹1,499",
    priceRows: [
      { item: "Manual recliner mechanism repair", price: "From ₹1,499" },
      { item: "Motorised recliner motor repair", price: "From ₹2,499" },
    ],
    priceNote: "A free doorstep inspection gives you a fixed quote before any work begins.",
  },
  "furniture-repair": {
    slug: "furniture-repair",
    name: "Furniture Repair",
    noun: "furniture repair",
    heroKey: "furniture-repair",
    faqCategory: "furniture",
    headlinePrice: "from ₹599",
    priceRows: [{ item: "Minor joint or hardware fix", price: "From ₹599" }],
    priceNote:
      "Wardrobe, bed and table repairs are quoted after a free doorstep inspection, with a fixed price agreed before any work begins.",
  },
  "sofa-upholstery": {
    slug: "sofa-upholstery",
    name: "Sofa Upholstery",
    noun: "sofa upholstery",
    heroKey: "sofa-upholstery",
    faqCategory: "upholstery",
    headlinePrice: "₹2,000 per seat",
    priceRows: [{ item: "Sofa upholstery", price: "From ₹2,000 per seat" }],
    priceNote: "Final price depends on fabric, foam condition and sofa size. A written quote comes before any work begins.",
  },
};

export const HUB_SERVICES = Object.keys(SERVICE_HUB_CONFIG) as HubService[];

// ─── Areas ───────────────────────────────────────────────────────────────────

export type HubArea =
  | { kind: "city"; key: string; city: CityKey; label: string; clusters: readonly ClusterKey[] | null }
  | { kind: "cluster"; key: string; city: CityKey; label: string; clusters: readonly ClusterKey[] };

const CITY_AREAS: readonly HubArea[] = (
  ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"] as const
).map((city) => ({
  kind: "city" as const,
  key: city,
  city,
  label: CITY_DISPLAY_NAMES[city],
  clusters: null,
}));

type ClusterArea = Extract<HubArea, { kind: "cluster" }>;

const CLUSTER_AREAS: readonly ClusterArea[] = [
  { kind: "cluster", key: "south-delhi", city: "delhi", label: "South Delhi", clusters: ["southDelhi"] },
  { kind: "cluster", key: "west-delhi", city: "delhi", label: "West Delhi", clusters: ["westDelhi"] },
  { kind: "cluster", key: "north-delhi", city: "delhi", label: "North Delhi", clusters: ["northDelhi"] },
  { kind: "cluster", key: "east-delhi", city: "delhi", label: "East Delhi", clusters: ["eastDelhi"] },
  { kind: "cluster", key: "central-delhi", city: "delhi", label: "Central Delhi", clusters: ["centralDelhi"] },
  { kind: "cluster", key: "dwarka", city: "delhi", label: "Dwarka", clusters: ["dwarka"] },
];

const AREA_BY_KEY = new Map<string, HubArea>([...CITY_AREAS, ...CLUSTER_AREAS].map((a) => [a.key, a]));

export const CLUSTER_LABELS: Record<string, string> = {
  southDelhi: "South Delhi",
  westDelhi: "West Delhi",
  northDelhi: "North Delhi",
  eastDelhi: "East Delhi",
  centralDelhi: "Central Delhi",
  dwarka: "Dwarka",
  dlfGurgaon: "DLF and Golf Course Road",
  sohnaRoadGurgaon: "Sohna Road",
  newGurgaon: "New Gurgaon",
  centralGurgaon: "Central Gurgaon",
  noidaSectors: "Noida Sectors",
  greaterNoida: "Greater Noida",
  greaterNoidaWest: "Greater Noida West",
  indirapuram: "Indirapuram",
  greaterFaridabad: "Greater Faridabad",
  oldFaridabad: "Old Faridabad",
};

// ─── Targets ─────────────────────────────────────────────────────────────────

export type HubTarget = { slug: string; service: HubService; area: HubArea };

// Pages whose template is replaced by the new hub (REPLACE) or newly built (CREATE).
const HUB_SLUGS: readonly string[] = [
  // REPLACE
  "recliner-repair-noida", "recliner-repair-ghaziabad", "sofa-repair-east-delhi", "furniture-repair-south-delhi",
  "recliner-repair-faridabad", "recliner-repair-gurgaon", "sofa-upholstery-noida", "sofa-upholstery-gurgaon",
  "sofa-upholstery-north-delhi", "recliner-repair-south-delhi", "recliner-repair-west-delhi",
  "recliner-repair-dwarka", "sofa-repair-west-delhi", "sofa-upholstery-faridabad", "furniture-repair-west-delhi",
  "furniture-repair-east-delhi",
  // CREATE
  "sofa-repair-north-delhi", "sofa-repair-central-delhi", "sofa-upholstery-ghaziabad", "sofa-upholstery-south-delhi",
  "sofa-upholstery-west-delhi", "sofa-upholstery-east-delhi", "sofa-upholstery-central-delhi",
  "sofa-upholstery-dwarka", "recliner-repair-north-delhi", "recliner-repair-east-delhi",
  "recliner-repair-central-delhi", "furniture-repair-north-delhi", "furniture-repair-central-delhi",
];

// Established, well-ranking pages: keep their content and only add the locality grid.
const PROTECT_SLUGS: readonly string[] = [
  "sofa-repair-delhi", "sofa-repair-noida", "furniture-repair-delhi", "sofa-repair-ghaziabad",
  "furniture-repair-gurgaon", "sofa-repair-gurgaon", "sofa-repair-faridabad", "furniture-repair-ghaziabad",
  "furniture-repair-faridabad", "furniture-repair-noida", "sofa-upholstery-delhi", "sofa-repair-dwarka",
  "furniture-repair-dwarka", "recliner-repair-delhi", "sofa-repair-south-delhi",
];

function parseSlug(slug: string): HubTarget | null {
  const service = HUB_SERVICES.find((s) => slug.startsWith(`${s}-`));
  if (!service) return null;
  const area = AREA_BY_KEY.get(slug.slice(service.length + 1));
  return area ? { slug, service, area } : null;
}

function buildTargets(slugs: readonly string[]): ReadonlyMap<string, HubTarget> {
  const entries: [string, HubTarget][] = [];
  for (const slug of slugs) {
    const target = parseSlug(slug);
    if (target) entries.push([slug, target]);
  }
  return new Map(entries);
}

const HUB_TARGETS = buildTargets(HUB_SLUGS);
const PROTECT_TARGETS = buildTargets(PROTECT_SLUGS);

export const getHubTarget = (slug: string): HubTarget | undefined => HUB_TARGETS.get(slug);
export const getProtectTarget = (slug: string): HubTarget | undefined => PROTECT_TARGETS.get(slug);

/** True if a hub-style page exists at this slug (new hub, protected page or legacy page). */
export function hubPageExists(slug: string): boolean {
  return HUB_TARGETS.has(slug) || PROTECT_TARGETS.has(slug) || getPageBySlug(slug) !== undefined;
}

// ─── Localities ──────────────────────────────────────────────────────────────

export type HubLocality = { entry: LocalityEntry; href: string };

function localityPageExists(href: string): boolean {
  return getRegistryPage(href) !== undefined || getPageBySlug(href.slice(1)) !== undefined;
}

/** Published localities for the area that have a live page for this service, best first. */
export function getHubLocalities(service: HubService, area: HubArea): HubLocality[] {
  return LOCALITY_REGISTRY.filter(
    (l) => l.status === "published" && l.city === area.city && (!area.clusters || area.clusters.includes(l.cluster)),
  )
    .map((entry) => ({ entry, href: buildRegistryUrl(service, entry.slug, entry.city) }))
    .filter(({ href }) => localityPageExists(href))
    .sort((a, b) => b.entry.servicePriority - a.entry.servicePriority || a.entry.name.localeCompare(b.entry.name));
}

const MAX_HUB_LANDMARKS = 3;

/**
 * Real landmark names from the area's own localities (registry data only).
 * Walks localities best-first and takes one landmark each, so the names come
 * from different parts of the area rather than one neighbourhood.
 */
export function getHubLandmarks(service: HubService, area: HubArea): string[] {
  const seen = new Set<string>();
  const picked: string[] = [];
  // Round-robin over clusters (largest first) so names come from different parts of the area
  const queues = groupByCluster(getHubLocalities(service, area)).map((g) => g.items.map((i) => i.entry));
  for (let round = 0; picked.length < MAX_HUB_LANDMARKS && round < 5; round++) {
    for (const queue of queues) {
      const entry = queue[round];
      const landmark = entry?.landmarks.find((l) => !seen.has(l.toLowerCase()));
      if (!landmark) continue;
      seen.add(landmark.toLowerCase());
      picked.push(landmark);
      if (picked.length === MAX_HUB_LANDMARKS) break;
    }
  }
  return picked;
}

/** "A, B and C" / "A and B" / "A" / "". */
export function joinNames(names: readonly string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

export function groupByCluster(items: readonly HubLocality[]): { cluster: ClusterKey; items: HubLocality[] }[] {
  const groups = new Map<ClusterKey, HubLocality[]>();
  for (const item of items) {
    const list = groups.get(item.entry.cluster) ?? [];
    list.push(item);
    groups.set(item.entry.cluster, list);
  }
  return [...groups.entries()]
    .map(([cluster, list]) => ({ cluster, items: list.sort((a, b) => a.entry.name.localeCompare(b.entry.name)) }))
    .sort((a, b) => b.items.length - a.items.length);
}

// ─── Cross-links ─────────────────────────────────────────────────────────────

export type HubLink = { label: string; href: string };

/** Slug of the hub for a cluster, e.g. "south-delhi" for southDelhi. */
function clusterAreaKey(cluster: ClusterKey): string | undefined {
  return CLUSTER_AREAS.find((a) => a.clusters.includes(cluster))?.key;
}

export function getClusterHubLink(service: HubService, cluster: ClusterKey): HubLink | null {
  const key = clusterAreaKey(cluster);
  if (!key) return null;
  const slug = `${service}-${key}`;
  return hubPageExists(slug) ? { label: `${SERVICE_HUB_CONFIG[service].name} ${AREA_BY_KEY.get(key)?.label ?? ""}`, href: `/${slug}` } : null;
}

export function getSiblingLinks(target: HubTarget): HubLink[] {
  const links: HubLink[] = [];
  // Same area, other services
  for (const service of HUB_SERVICES) {
    const slug = `${service}-${target.area.key}`;
    if (service !== target.service && hubPageExists(slug)) {
      links.push({ label: `${SERVICE_HUB_CONFIG[service].name} ${target.area.label}`, href: `/${slug}` });
    }
  }
  // Same service, other Delhi clusters
  if (target.area.kind === "cluster") {
    for (const area of CLUSTER_AREAS) {
      const slug = `${target.service}-${area.key}`;
      if (area.key !== target.area.key && hubPageExists(slug)) {
        links.push({ label: `${SERVICE_HUB_CONFIG[target.service].name} ${area.label}`, href: `/${slug}` });
      }
    }
  }
  return links;
}

export const responseTimeFor = (city: CityKey): string => RESPONSE_TIMES[city];
export const cityDisplayFor = (city: CityKey): string => CITY_DISPLAY_NAMES[city];

// ─── Hero images ─────────────────────────────────────────────────────────────

/** Furniture type each hub service must show; stops sofa photos on furniture/recliner hubs. */
const HERO_FURNITURE_TYPE: Record<HubService, string> = {
  "sofa-repair": "sofa",
  "sofa-upholstery": "sofa",
  "recliner-repair": "recliner",
  "furniture-repair": "furniture",
};

// Images that are a poor fit for hubs: a baked-in filename caption, a home-theatre
// scene, and a gaming-chair image.
const HERO_EXCLUDED_IDS: ReadonlySet<string> = new Set(["hero-086", "hero-087", "hero-088", "hero-089"]);

/** Hero image for a hub, chosen by the normal scoring engine from a service-correct pool. */
export function getHubHero(target: HubTarget): HeroImageRecord | null {
  const type = HERO_FURNITURE_TYPE[target.service];
  const pool = Object.fromEntries(
    Object.entries(HERO_IMAGE_REGISTRY).filter(([id, r]) => r.furnitureType === type && !HERO_EXCLUDED_IDS.has(id)),
  );
  return getHeroImage(SERVICE_HUB_CONFIG[target.service].heroKey, target.slug, pool);
}
