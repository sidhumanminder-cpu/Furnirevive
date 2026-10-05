/**
 * Content Engine — Before/After Module
 *
 * Emits a case-study section only for services that have real case studies.
 * Every other service returns null, so no placeholder or foreign-service
 * content is ever shown. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { BeforeAfterSectionData } from "../types.ts";

const SERVICES_WITH_CASE_STUDIES = ["sofa-repair", "recliner-repair", "furniture-repair", "sofa-upholstery"] as const;
// furniture-repair and sofa-upholstery have no studies of their own; the UI shows
// sofa/recliner work under a general heading with honest per-photo labels.

export function buildBeforeAfter(
  locality: LocalityEntry,
  service: ServiceEntry,
): BeforeAfterSectionData | null {
  const match = SERVICES_WITH_CASE_STUDIES.find((s) => s === service.slug);
  if (!match) return null;
  return {
    id: `${service.slug}-${locality.slug}-before-after`,
    type: "before-after",
    version: "v1",
    props: { service: match, pageSlug: `${service.slug}-${locality.slug}`, cityName: locality.city },
  };
}
