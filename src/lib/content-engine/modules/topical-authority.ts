/**
 * Content Engine — Topical Authority Module
 *
 * Wraps the existing authority-engine scoring logic.
 * Maps registry ServiceSlug → SeoServiceKey, runs scoring,
 * returns top 5 authority links as domain data.
 * Domain data only — no JSX, no CSS.
 */

import { hashCode } from "../content-uniqueness.ts";
import { getAuthorityLinks } from "@/lib/seoConfigs/authority-engine.ts";
import type { LocalityEntry, ServiceEntry, ServiceSlug } from "@/lib/registry/types.ts";
import type { TopicalAuthoritySectionData, TopicalAuthorityLink } from "../types.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

// Map registry ServiceSlug → SeoServiceKey used by the authority engine
const SERVICE_SLUG_MAP: Record<ServiceSlug, SeoServiceKey> = {
  "sofa-repair": "sofa-repair",
  "recliner-repair": "recliner-repair",
  "furniture-repair": "furniture-repair",
  "sofa-upholstery": "sofa-upholstery",
  "office-chair-repair": "chair-repair",
  "office-furniture-repair": "chair-repair",
  // Kitchen uses its own topical authority in M2; stub maps to furniture-repair
  "modular-kitchen": "furniture-repair",
};

const SECTION_TITLES = [
  "Related Repair Guides",
  "Helpful Resources",
  "Explore More Services",
  "Useful References",
] as const;

export function buildTopicalAuthority(
  locality: LocalityEntry,
  service: ServiceEntry,
): TopicalAuthoritySectionData {
  const key = `${service.slug}-${locality.slug}`;
  const seoServiceKey = SERVICE_SLUG_MAP[service.slug];

  const matches = getAuthorityLinks(seoServiceKey, locality.slug, {
    limit: 5,
    excludeHrefs: new Set([`/${service.slug}-${locality.slug}`]),
  });

  const links: TopicalAuthorityLink[] = (matches ?? []).map((m) => ({
    displayName: m.record.displayName,
    href: `/${m.record.slug}`,
    mention: m.mention,
  }));

  const titleIdx = hashCode(key) % SECTION_TITLES.length;

  return {
    id: `${service.slug}-${locality.slug}-topical-authority`,
    type: "topical-authority",
    version: "v1",
    props: {
      heading: SECTION_TITLES[titleIdx],
      links,
    },
  };
}
