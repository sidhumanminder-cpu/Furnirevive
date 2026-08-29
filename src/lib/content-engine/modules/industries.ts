/**
 * Content Engine — Industries Module
 *
 * Renders the list of industries served at this commercial locality.
 * Only activated for services with capabilities.content.industryAware === true.
 * Falls back gracefully if no industry data is available.
 * Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { IndustriesSectionData } from "../types.ts";
import { INDUSTRY_REGISTRY } from "@/lib/registry/industry-registry.ts";

// Default industries shown when locality has no specific industry list
const DEFAULT_CORPORATE_INDUSTRIES = [
  "it", "coworking", "bank", "government", "hospital",
] as const;

export function buildIndustries(locality: LocalityEntry, service: ServiceEntry): IndustriesSectionData {
  // Determine which industries to show. CommercialLocalityEntry may have an `industries` field.
  // We check safely — LocalityEntry doesn't have this field, but CommercialLocalityEntry does.
  const localityIndustries: readonly string[] =
    "industries" in locality && Array.isArray((locality as { industries?: unknown }).industries)
      ? (locality as { industries: string[] }).industries
      : DEFAULT_CORPORATE_INDUSTRIES;

  const items = INDUSTRY_REGISTRY.filter((entry) =>
    localityIndustries.includes(entry.key)
  ).map((entry) => ({
    key: entry.key,
    name: entry.name,
    description: entry.description,
    icon: entry.icon,
  }));

  return {
    id: `${service.slug}-${locality.slug}-industries`,
    type: "industries",
    version: "v1",
    props: {
      heading: `Industries We Serve in ${locality.name}`,
      items,
    },
  };
}
