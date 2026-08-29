/**
 * Content Engine — Service Hub Module
 *
 * Deterministic, side-effect-free. Produces links to the other registry
 * services at city level so a locality page can cross-link to sibling services.
 * The current service is excluded. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { ServiceHubSectionData } from "../types.ts";
import {
  REGISTRY_SERVICE_SLUGS,
  SERVICE_DISPLAY_NAMES,
  SERVICE_DESCRIPTIONS,
  CITY_DISPLAY_NAMES,
  cityLevelServiceHref,
} from "../content-pools.ts";

export function buildServiceHub(locality: LocalityEntry, service: ServiceEntry): ServiceHubSectionData {
  const cityName = CITY_DISPLAY_NAMES[locality.city];

  const services = REGISTRY_SERVICE_SLUGS
    .filter((slug) => slug !== service.slug)
    .map((slug) => ({
      name: SERVICE_DISPLAY_NAMES[slug],
      href: cityLevelServiceHref(slug, locality.city),
      description: SERVICE_DESCRIPTIONS[slug],
    }));

  return {
    id: `${service.slug}-${locality.slug}-servicehub`,
    type: "servicehub",
    version: "v1",
    props: {
      heading: `Our ${cityName} Furniture Services`,
      services,
    },
  };
}
