/**
 * Content Engine — Pyramid Links Module
 *
 * Generates hierarchical internal links per registry page.
 *
 * Three-layer model:
 *   Layer 0 (apex):  locality → city hub
 *   Layer 1 (mid):   locality → cluster hub (residential) OR city service hub (commercial)
 *   Layer 2 (base):  neighbour links (geographic OR relationship-graph-based)
 *   + service sibling / cross-service link
 *
 * Deterministic: same locality + service → same links every time.
 * Domain data only — no renderer flags in props.
 */

import type { LocalityEntry, ServiceEntry, CityKey, ClusterKey } from "@/lib/registry/types.ts";
import type { PyramidLinksSectionData, PyramidLink } from "../types.ts";
import { hashCode } from "../content-uniqueness.ts";
import { RELATIONSHIP_GRAPH } from "@/lib/registry/relationship-graph.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "@/lib/registry/kitchen-cost-registry.ts";
import { KITCHEN_EDITORIAL_REGISTRY } from "@/lib/registry/kitchen-editorial-registry.ts";
import {
  deriveLocalityRecord,
  buildDerivedRelatedLinks,
  PROGRAMMATIC_RELATED_LINKS_MODE,
} from "@/lib/seoConfigs/derived-authority.ts";

// ─── Cluster hub map (residential) ─────────────────────────────────────────────
// Maps each cluster to its hub URL fragment (used with service prefix).

const CLUSTER_HUB_SLUGS: Partial<Record<ClusterKey, string>> = {
  southDelhi: "south-delhi",
  westDelhi: "west-delhi",
  northDelhi: "north-delhi",
  eastDelhi: "east-delhi",
  centralDelhi: "central-delhi",
  dwarka: "dwarka",
  centralGurgaon: "gurgaon",
  sohnaRoadGurgaon: "gurgaon",
  dlfGurgaon: "gurgaon",
  newGurgaon: "gurgaon",
  noidaSectors: "noida",
  greaterNoidaWest: "noida",
  greaterFaridabad: "faridabad",
  oldFaridabad: "faridabad",
};

// ─── Commercial locality → city hub map ─────────────────────────────────────────
// Commercial localities don't use the residential cluster system.
// This maps each commercial locality slug directly to its city hub slug.

const COMMERCIAL_SLUG_TO_HUB: Readonly<Record<string, string>> = {
  // Delhi commercial
  "nehru-place": "delhi",
  "barakhamba-road": "delhi",
  "jasola": "delhi",
  "okhla-phase-1": "delhi",
  "okhla-phase-2": "delhi",
  "mohan-cooperative": "delhi",
  "aerocity": "delhi",
  "bhikaji-cama-place": "delhi",
  "saket-district-centre": "delhi",
  "netaji-subhash-place": "delhi",
  "ito-delhi": "delhi",
  "laxmi-nagar-commercial": "delhi",
  "naraina-industrial-area": "delhi",
  "delhi-gate-area": "delhi",
  // Gurgaon commercial
  "cyber-city": "gurgaon",
  "udyog-vihar-phase-1": "gurgaon",
  "udyog-vihar-phase-2": "gurgaon",
  "udyog-vihar-phase-3": "gurgaon",
  "udyog-vihar-phase-4": "gurgaon",
  "udyog-vihar-phase-5": "gurgaon",
  "golf-course-road": "gurgaon",
  "golf-course-extension-road": "gurgaon",
  "sohna-road-commercial": "gurgaon",
  "gurgaon-sector-44": "gurgaon",
  "gurgaon-sector-32": "gurgaon",
  "gurgaon-sector-18": "gurgaon",
  "gurgaon-sector-21": "gurgaon",
  "imt-manesar-commercial": "gurgaon",
  // Noida commercial
  "film-city-noida": "noida",
  "electronic-city-noida": "noida",
  "knowledge-park-commercial": "noida",
  "nsez-noida": "noida",
  "noida-sector-62-commercial": "noida",
  "noida-sector-63-commercial": "noida",
  "noida-sector-16-commercial": "noida",
  "noida-sector-18-commercial": "noida",
  "noida-sector-125-commercial": "noida",
  "noida-sector-132-commercial": "noida",
  "noida-sector-135-commercial": "noida",
  "noida-sector-142-commercial": "noida",
};

// ─── City apex anchors (varied) ───────────────────────────────────────────────

const CITY_APEX_ANCHORS: Record<string, readonly string[]> = {
  "sofa-repair-delhi": [
    "sofa repair in Delhi",
    "Delhi sofa repair services",
    "professional sofa repair Delhi",
    "best sofa repair Delhi",
    "trusted sofa repair Delhi",
  ],
  "recliner-repair-delhi": [
    "recliner repair Delhi",
    "Delhi recliner repair services",
    "professional recliner repair Delhi",
    "best recliner repair Delhi",
  ],
  "furniture-repair-delhi": [
    "furniture repair Delhi",
    "Delhi furniture repair services",
    "professional furniture repair Delhi",
    "best furniture repair Delhi",
  ],
  "sofa-upholstery-delhi": [
    "sofa upholstery Delhi",
    "Delhi sofa upholstery services",
    "sofa reupholstery Delhi",
    "fabric sofa change Delhi",
  ],
};

// Office chair city apex anchors
const OFFICE_CHAIR_CITY_ANCHORS: Record<string, readonly string[]> = {
  delhi: [
    "office chair repair Delhi",
    "Delhi office chair repair service",
    "corporate chair repair Delhi",
    "best office chair repair Delhi",
  ],
  gurgaon: [
    "office chair repair Gurgaon",
    "Gurgaon corporate chair repair",
    "office chair repair Cyber City Gurgaon",
    "best office chair repair Gurgaon",
  ],
  noida: [
    "office chair repair Noida",
    "Noida corporate chair repair",
    "office chair repair Sector 62 Noida",
    "best office chair repair Noida",
  ],
  faridabad: ["office chair repair Faridabad", "corporate chair repair Faridabad"],
  ghaziabad: ["office chair repair Ghaziabad", "corporate chair repair Ghaziabad"],
};

function pickAnchor(pool: readonly string[], key: string, salt: number): string {
  const idx = ((hashCode(key) + salt) % pool.length + pool.length) % pool.length;
  return pool[idx];
}

function slugify(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function titleCase(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildServiceUrl(serviceSlug: string, areaSlug: string, city: CityKey): string {
  if (serviceSlug === "sofa-upholstery" && city === "delhi") {
    return `/sofa-upholstery-${areaSlug}-delhi`;
  }
  return `/${serviceSlug}-${areaSlug}`;
}

/** Category priority for editorial back-links (comparison > planning > budget) */
const EDITORIAL_CATEGORY_PRIORITY: Record<string, number> = {
  comparison: 0,
  planning: 1,
  budget: 2,
};

function buildKitchenPyramidLinks(locality: LocalityEntry): PyramidLinksSectionData {
  const slug = locality.slug;

  const isLocality = MODULAR_KITCHEN_LOCALITY_REGISTRY.some((l) => l.slug === slug);
  const isLayout = MODULAR_KITCHEN_LAYOUT_REGISTRY.some((l) => l.slug === slug);
  const isMaterial = MODULAR_KITCHEN_MATERIAL_REGISTRY.some((m) => m.slug === slug);
  const isCost = MODULAR_KITCHEN_COST_REGISTRY.some((c) => c.slug === slug);
  const isEditorial = KITCHEN_EDITORIAL_REGISTRY.some((e) => e.slug === slug);

  // ── Build editorial links first (existing, always preserved) ──────────────
  const editorialLinks: PyramidLink[] = [];

  if (isEditorial) {
    const entry = KITCHEN_EDITORIAL_REGISTRY.find((e) => e.slug === slug);
    if (entry) {
      entry.relatedLayouts.forEach((layoutSlug) => {
        const l = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((x) => x.slug === layoutSlug);
        if (l) editorialLinks.push({ label: l.name, href: `/modular-kitchen-${l.slug}` });
      });
      entry.relatedMaterials.forEach((matSlug) => {
        const m = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((x) => x.slug === matSlug);
        if (m) editorialLinks.push({ label: m.name, href: `/modular-kitchen-${m.slug}` });
      });
      entry.relatedCostPages.forEach((costSlug) => {
        const c = MODULAR_KITCHEN_COST_REGISTRY.find((x) => x.slug === costSlug);
        if (c) editorialLinks.push({ label: c.name, href: `/modular-kitchen-${c.slug}` });
      });
      entry.relatedEditorials.forEach((editSlug) => {
        const e = KITCHEN_EDITORIAL_REGISTRY.find((x) => x.slug === editSlug);
        if (e) editorialLinks.push({ label: e.name, href: `/${e.slug}` });
      });
    }
  } else if (isLocality) {
    // ── For locality pages: use derived authority engine (additive on top of editorial peers) ──
    const entry = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === slug);
    if (entry && PROGRAMMATIC_RELATED_LINKS_MODE !== "legacy") {
      // 1. Build editorial peers (existing links — always preserved, step 1 in merge order)
      const cityPeers = MODULAR_KITCHEN_LOCALITY_REGISTRY.filter(
        (l) => l.city === entry.city && l.slug !== slug && l.status === "published",
      ).slice(0, 3);
      const existingLinks = cityPeers.map((peer) => ({
        label: `Modular Kitchen ${peer.name}`,
        href: `/modular-kitchen-${peer.slug}`,
      }));

      // 2. Derive the locality record (city-aware hub resolution)
      const cityKey = entry.city;
      const derivedRecord = deriveLocalityRecord(
        slug,
        `Modular Kitchen ${entry.name}`,
        "modular-kitchen",
        cityKey,
        entry.name,
      );

      // 3. Build derived links — steps 2-7 injected additively
      const { links: derivedLinks } = buildDerivedRelatedLinks(derivedRecord, existingLinks, 12);

      return {
        id: `modular-kitchen-${slug}-pyramid-links`,
        type: "pyramid-links",
        version: "v1",
        props: {
          heading: "Explore More Modular Kitchen Options",
          links: derivedLinks,
        },
      };
    }

    // Legacy fallback (or if no entry found): original static links
    if (entry) {
      const cityPeers = MODULAR_KITCHEN_LOCALITY_REGISTRY.filter(
        (l) => l.city === entry.city && l.slug !== slug && l.status === "published",
      ).slice(0, 3);
      cityPeers.forEach((peer) =>
        editorialLinks.push({ label: `Modular Kitchen ${peer.name}`, href: `/modular-kitchen-${peer.slug}` }),
      );
    }
    editorialLinks.push({ label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" });
    editorialLinks.push({ label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape" });
    editorialLinks.push({ label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" });
    editorialLinks.push({ label: "Modular Kitchen Cost Delhi", href: "/modular-kitchen-cost-delhi" });
    const contextualEditorial = [...KITCHEN_EDITORIAL_REGISTRY]
      .filter((e) => e.category === "planning" || e.category === "budget")
      .sort((a, b) => EDITORIAL_CATEGORY_PRIORITY[a.category] - EDITORIAL_CATEGORY_PRIORITY[b.category])[0];
    if (contextualEditorial) {
      editorialLinks.push({ label: contextualEditorial.name, href: `/${contextualEditorial.slug}` });
    }
  } else if (isLayout) {
    const otherLayouts = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter((l) => l.slug !== slug).slice(0, 2);
    otherLayouts.forEach((l) => editorialLinks.push({ label: l.name, href: `/modular-kitchen-${l.slug}` }));
    editorialLinks.push({ label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" });
    editorialLinks.push({ label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate" });
    editorialLinks.push({ label: "Modular Kitchen Cost in Delhi", href: "/modular-kitchen-cost-delhi" });
    editorialLinks.push({ label: "Modular Kitchen South Delhi", href: "/modular-kitchen-south-delhi" });
    editorialLinks.push({ label: "Modular Kitchen Greater Kailash", href: "/modular-kitchen-greater-kailash" });
    const relatedEditorials = KITCHEN_EDITORIAL_REGISTRY
      .filter((e) => e.relatedLayouts.includes(slug))
      .sort((a, b) => EDITORIAL_CATEGORY_PRIORITY[a.category] - EDITORIAL_CATEGORY_PRIORITY[b.category])
      .slice(0, 2);
    relatedEditorials.forEach((e) => editorialLinks.push({ label: e.name, href: `/${e.slug}` }));
  } else if (isMaterial) {
    const otherMats = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.slug !== slug).slice(0, 2);
    otherMats.forEach((m) => editorialLinks.push({ label: m.name, href: `/modular-kitchen-${m.slug}` }));
    editorialLinks.push({ label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" });
    editorialLinks.push({ label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape" });
    editorialLinks.push({ label: "Modular Kitchen Cost in Delhi", href: "/modular-kitchen-cost-delhi" });
    editorialLinks.push({ label: "Modular Kitchen South Delhi", href: "/modular-kitchen-south-delhi" });
    editorialLinks.push({ label: "Modular Kitchen DLF Phase Gurgaon", href: "/modular-kitchen-dlf-phase-gurgaon" });
    const relatedEditorials = KITCHEN_EDITORIAL_REGISTRY
      .filter((e) => e.relatedMaterials.includes(slug))
      .sort((a, b) => EDITORIAL_CATEGORY_PRIORITY[a.category] - EDITORIAL_CATEGORY_PRIORITY[b.category])
      .slice(0, 2);
    relatedEditorials.forEach((e) => editorialLinks.push({ label: e.name, href: `/${e.slug}` }));
  } else if (isCost) {
    editorialLinks.push({ label: "L-Shape Modular Kitchen", href: "/modular-kitchen-l-shape" });
    editorialLinks.push({ label: "U-Shape Modular Kitchen", href: "/modular-kitchen-u-shape" });
    editorialLinks.push({ label: "Acrylic Modular Kitchen", href: "/modular-kitchen-acrylic" });
    editorialLinks.push({ label: "Laminate Modular Kitchen", href: "/modular-kitchen-laminate" });
    editorialLinks.push({ label: "Modular Kitchen South Delhi", href: "/modular-kitchen-south-delhi" });
    editorialLinks.push({ label: "Modular Kitchen DLF Phase Gurgaon", href: "/modular-kitchen-dlf-phase-gurgaon" });
    const otherCosts = MODULAR_KITCHEN_COST_REGISTRY.filter((c) => c.slug !== slug).slice(0, 2);
    otherCosts.forEach((c) => editorialLinks.push({ label: c.name, href: `/modular-kitchen-${c.slug}` }));
    const relatedEditorials = KITCHEN_EDITORIAL_REGISTRY
      .filter((e) => e.relatedCostPages.includes(slug))
      .sort((a, b) => EDITORIAL_CATEGORY_PRIORITY[a.category] - EDITORIAL_CATEGORY_PRIORITY[b.category])
      .slice(0, 2);
    relatedEditorials.forEach((e) => editorialLinks.push({ label: e.name, href: `/${e.slug}` }));
  }

  return {
    id: `modular-kitchen-${slug}-pyramid-links`,
    type: "pyramid-links",
    version: "v1",
    props: {
      heading: "Explore More Modular Kitchen Options",
      links: editorialLinks,
    },
  };
}

export function buildPyramidLinks(
  locality: LocalityEntry,
  service: ServiceEntry,
): PyramidLinksSectionData {
  if (service.slug === "modular-kitchen") {
    return buildKitchenPyramidLinks(locality);
  }

  const links: PyramidLink[] = [];
  const key = `${locality.slug}-${service.slug}`;
  const isCorporate = service.capabilities?.audience?.corporate === true;

  // 1. City apex link (Layer 0)
  const apexSlug = `${service.slug}-${locality.city}`;
  let apexAnchors: readonly string[];
  if (isCorporate) {
    apexAnchors = OFFICE_CHAIR_CITY_ANCHORS[locality.city] ?? [`${service.name} ${locality.city}`];
  } else {
    apexAnchors = CITY_APEX_ANCHORS[apexSlug] ?? [`${service.name} ${locality.city}`];
  }
  links.push({
    label: pickAnchor(apexAnchors, key, 0),
    href: buildServiceUrl(service.slug, locality.city, locality.city),
  });

  // 2. Mid-tier hub link (Layer 1)
  {
    if (isCorporate) {
      // Commercial localities: link to city office-chair hub page
      const cityHub = COMMERCIAL_SLUG_TO_HUB[locality.slug] ?? locality.city;
      links.push({
        label: `Office Chair Repair ${titleCase(cityHub)}`,
        href: `/office-chair-repair-${cityHub}`,
      });
    } else {
      // Residential localities: link to cluster hub
      const clusterHubSlug = CLUSTER_HUB_SLUGS[locality.cluster];
      if (clusterHubSlug) {
        links.push({
          label: `${service.name} ${titleCase(clusterHubSlug)}`,
          href: buildServiceUrl(service.slug, clusterHubSlug, locality.city),
        });
      }
    }
  }

  // 3. Cross-service / service sibling link
  if (isCorporate) {
    // Corporate: sibling service at city level (office furniture repair)
    links.push({
      label: `Office Furniture Repair ${titleCase(locality.city)}`,
      href: `/furniture-repair-${locality.city}`,
    });
  } else if (service.slug !== "furniture-repair") {
    // Residential: cross-link to furniture repair
    links.push({
      label: `Furniture Repair ${titleCase(locality.city)}`,
      href: `/furniture-repair-${locality.city}`,
    });
  }

  // 4. Neighbour links (Layer 2 — base)
  if (service.capabilities?.content?.relationshipGraph) {
    // Corporate: use RELATIONSHIP_GRAPH commercial neighbours
    const node = RELATIONSHIP_GRAPH[locality.slug];
    const commercialNeighbours = node?.neighbours.slice(0, 3) ?? [];
    commercialNeighbours.forEach((neighbourSlug) => {
      links.push({
        label: `Office Chair Repair ${neighbourSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}`,
        href: `/office-chair-repair-${neighbourSlug}`,
      });
    });
  } else {
    // Residential: first 3 nearby (geographic proximity)
    const nearbyToLink = locality.nearby.slice(0, 3);
    nearbyToLink.forEach((name) => {
      const areaSlug = slugify(name);
      links.push({
        label: `${service.name} ${name}`,
        href: buildServiceUrl(service.slug, areaSlug, locality.city),
      });
    });
  }

  return {
    id: `${service.slug}-${locality.slug}-pyramid-links`,
    type: "pyramid-links",
    version: "v1",
    props: {
      heading: `More ${service.name} Resources`,
      links,
    },
  };
}
