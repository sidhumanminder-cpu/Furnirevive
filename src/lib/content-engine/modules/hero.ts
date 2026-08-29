/**
 * Content Engine — Hero Module
 *
 * Deterministic, side-effect-free. Given the same locality + service it always
 * produces identical `HeroSectionData`. Domain data only.
 */

import type { LocalityEntry, ServiceEntry, ServiceSlug } from "@/lib/registry/types.ts";
import type { HeroSectionData } from "../types.ts";
import { CITY_DISPLAY_NAMES, RESPONSE_TIMES } from "../content-pools.ts";
import { getRotatedBadges, hashCode, type PageContext } from "@/lib/content-engine/content-uniqueness.ts";
import { getHeroImage, generateHeroAlt } from "@/lib/seoConfigs/hero-image-engine.ts";
import type { SeoServiceKey } from "@/lib/seoConfigs/service-config.ts";

const OFFICE_CHAIR_HERO_IMAGES: string[] = [
  "https://hercules-cdn.com/file_wj3de1Goxxj5Lj02YFnTDa7w", // open-plan office
  "https://hercules-cdn.com/file_sWTz3QdbCUwSIj3BkPXP8jVR", // technician replacing gas lift
  "https://hercules-cdn.com/file_JOav9LwlWmocZ5MSIz3JsTrU", // premium executive leather chair
  "https://hercules-cdn.com/file_GIgYnLUS5YW4jNqCjiJPZFpK", // conference room chairs
  "https://hercules-cdn.com/file_XrSRbM6fejlTu18xTxknQSbU", // co-working space
  "https://hercules-cdn.com/file_f3gGHDwu2Qi11yCqHqRpzK18", // caster wheel close-up
  "https://hercules-cdn.com/file_mhjIkfw9iH1xczPg6UEwCw92", // corporate technician onsite
  "https://hercules-cdn.com/file_n2sCZ7tP8If3LE62hfwOKT00", // reception area
  "https://hercules-cdn.com/file_T1whVrKQ9DT8aulyXfg1fWHv", // executive cabin
  "https://hercules-cdn.com/file_tQeJsgfGn4AEYcAza5aYyuRo", // bulk repair row
  "https://hercules-cdn.com/file_xI7hwR3DHAoehYF41vUQN7VD", // mesh ergonomic chair
  "https://hercules-cdn.com/file_r81Vut3RevZ5Mun5RqMHNBCe", // before/after restoration
];

const SERVICE_KEY_MAP: Record<ServiceSlug, SeoServiceKey> = {
  "sofa-repair": "sofa-repair",
  "recliner-repair": "recliner-repair",
  "furniture-repair": "furniture-repair",
  "sofa-upholstery": "sofa-upholstery",
  "office-chair-repair": "chair-repair",
  "office-furniture-repair": "chair-repair",
  // Kitchen hero uses a dedicated image path, not the legacy engine.
  // Map to furniture-repair as a fallback (buildHero checks for corporate path first,
  // and kitchen stubs return before reaching this map in M2+).
  "modular-kitchen": "furniture-repair",
};

function buildSubheadline(locality: LocalityEntry, service: ServiceEntry): string {
  const svc = service.name.toLowerCase();
  switch (locality.affluence) {
    case "high":
    case "ultra-high":
      return `Premium ${svc} for discerning homes in ${locality.name}. Expert craftsmanship, genuine materials, and a written 6-month warranty — all at your doorstep.`;
    case "budget":
      return `Affordable, reliable ${svc} in ${locality.name}. Save up to 70% versus buying new, with transparent pricing from ₹599 and same-day service.`;
    case "mid":
    case "mid-high":
    default:
      return `Trusted ${svc} in ${locality.name}. Doorstep service, pricing from ₹599, and a 6-month warranty on every repair.`;
  }
}

function buildCorporateSubheadline(locality: LocalityEntry, service: ServiceEntry): string {
  if (service.slug === "office-furniture-repair") {
    return `Same-day on-site office furniture repair for offices, startups and co-working spaces in ${locality.name}. Desks • Workstations • Conference Tables • Reception Desks • Cabinets. GST invoice provided.`;
  }
  return `Same-day on-site chair repair for offices, startups and co-working spaces in ${locality.name}. Hydraulic • Gas Lift • Wheels • Armrests • Mesh • Executive Chairs. GST invoice provided.`;
}

export function buildHero(locality: LocalityEntry, service: ServiceEntry): HeroSectionData {
  const cityName = CITY_DISPLAY_NAMES[locality.city];
  const ctx: PageContext = { locality, service, city: cityName };

  // Hero image selection — corporate office-chair pages bypass the legacy engine
  // to avoid sofa/living-room images winning on city-score when cityKeys is empty.
  let imageUrl: string;
  let imageAlt: string;
  if (service.capabilities?.audience?.corporate) {
    const idx = Math.abs(hashCode(locality.slug)) % OFFICE_CHAIR_HERO_IMAGES.length;
    imageUrl = OFFICE_CHAIR_HERO_IMAGES[idx];
    imageAlt = `Office chair repair service in ${locality.name} — on-site corporate chair repair`;
  } else {
    const seoServiceKey = SERVICE_KEY_MAP[service.slug];
    const pageSlug = service.slug === "sofa-upholstery"
      ? `sofa-upholstery-${locality.slug}-delhi`
      : `${service.slug}-${locality.slug}`;
    const heroImageRecord = getHeroImage(seoServiceKey, pageSlug);
    imageUrl = heroImageRecord?.url ?? "";
    imageAlt = heroImageRecord ? generateHeroAlt(heroImageRecord, locality.name) : "";
  }

  return {
    id: `${service.slug}-${locality.slug}-hero`,
    type: "hero",
    version: "v1",
    props: {
      headline: service.capabilities?.audience?.corporate
        ? service.slug === "office-furniture-repair"
          ? `${service.name} in ${locality.name} | Same-Day Corporate Furniture Repair | GST Invoice`
          : `${service.name} in ${locality.name} | Same-Day Corporate Chair Repair | GST Invoice`
        : `${service.name} in ${locality.name}, ${cityName} – ${service.seo.titleModifier}`,
      subheadline: service.capabilities?.audience?.corporate
        ? buildCorporateSubheadline(locality, service)
        : buildSubheadline(locality, service),
      localityName: locality.name,
      serviceName: service.name,
      cityName,
      responseTime: RESPONSE_TIMES[locality.city],
      trustBadges: getRotatedBadges(ctx).map((b) => b.label),
      imageUrl,
      imageAlt,
    },
  };
}
