/**
 * Content Engine — Near-Me Module
 *
 * Produces a NearMeSectionData wrapping the locality slug + service label.
 * The renderer calls LocalityNearMeSection with these props — no content
 * generation happens here; the existing legacy engine handles it at render time.
 * Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { NearMeSectionData } from "../types.ts";

export function buildNearMe(
  locality: LocalityEntry,
  service: ServiceEntry,
): NearMeSectionData {
  return {
    id: `${service.slug}-${locality.slug}-near-me`,
    type: "near-me",
    version: "v1",
    props: {
      localitySlug: locality.slug,
      serviceLabel: service.name,
      isCorporate: service.capabilities?.audience?.corporate ?? false,
    },
  };
}
