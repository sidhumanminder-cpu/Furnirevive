import LocalityNearMeSection from "@/components/seo/LocalityNearMeSection.tsx";
import type { NearMeSectionData } from "@/lib/content-engine/index.ts";
import { resolveAreaHref } from "@/lib/area-links.ts";
import { nearbyHref } from "@/lib/content-engine/modules/nearby.ts";
import { registryCityOf, resolveCityHub } from "@/lib/registry/link-verify.ts";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import type { CityKey, ServiceSlug } from "@/lib/registry/types.ts";

/** City hubs end in the city name ("/sofa-repair-south-delhi" is Delhi). */
const cityFromHub = (href: string): string | undefined =>
  ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad", "chandigarh", "mohali", "panchkula"].find((c) => href.endsWith(`-${c}`));

const cityLabel = (city: string): string => city.charAt(0).toUpperCase() + city.slice(1);

/**
 * Registry renderer for the near-me module.
 * Wraps the existing LocalityNearMeSection with registry section data.
 * showFaqs is false because the registry pipeline has a dedicated faq:v1 module.
 * Links are verified against the locality's own registry city: an area chip links only when
 * its page exists in that city, and the hub link uses that city's hub (never a Delhi fallback).
 */
export default function NearMeRegistrySection({ section }: { section: NearMeSectionData }) {
  const { localitySlug, serviceLabel, isCorporate, serviceSlug, city, nearby } = section.props;

  if (!serviceSlug || !city) {
    return <LocalityNearMeSection slug={localitySlug} serviceLabel={serviceLabel} isCorporate={isCorporate} showFaqs={false} />;
  }

  const selfHref = nearbyHref(serviceSlug as ServiceSlug, city as CityKey, localitySlug);
  const pageSlug = selfHref.slice(1);
  // Generic locality data falls back to Delhi areas; use the registry's own neighbours instead.
  const areas = getLocalityInfo(localitySlug).cityKey === city ? undefined : nearby;
  const resolveArea = (area: string): string | null => {
    const href = resolveAreaHref(area, pageSlug);
    if (!href || href === selfHref) return null;
    const hitCity = registryCityOf(href) ?? cityFromHub(href);
    // Hand-authored pages with no known city are only trusted on Delhi pages
    return hitCity ? (hitCity === city ? href : null) : city === "delhi" ? href : null;
  };

  return (
    <LocalityNearMeSection
      slug={localitySlug}
      serviceLabel={serviceLabel}
      isCorporate={isCorporate}
      showFaqs={false}
      verified={{ areas, hubHref: resolveCityHub(serviceSlug, city), cityLabel: cityLabel(city), pageSlug, resolveArea }}
    />
  );
}
