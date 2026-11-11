import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import { CITY_DISPLAY_NAMES } from "@/lib/content-engine/content-pools.ts";
import { buildLocalContext } from "@/lib/seoConfigs/local-context.ts";
import type { LocalContextSectionData } from "../types.ts";

export function buildLocalContextSection(
  locality: LocalityEntry,
  service: ServiceEntry,
): LocalContextSectionData | null {
  // Homes-oriented copy: skip corporate services and commercial localities.
  if (service.capabilities?.audience?.corporate || "buildingType" in locality) return null;
  const ctx = buildLocalContext({
    slug: locality.slug,
    name: locality.name,
    city: CITY_DISPLAY_NAMES[locality.city] ?? locality.city,
    cityKey: locality.city,
    serviceKey: service.slug,
    propertyType: locality.propertyType,
    housingAge: locality.housingAge,
    density: locality.density,
    affluence: locality.affluence,
    landmarks: locality.landmarks,
    landmarksReliable: true,
    adjacent: locality.nearby,
  });
  return { id: `local-context-${locality.slug}`, type: "local-context", version: "v1", props: ctx };
}
