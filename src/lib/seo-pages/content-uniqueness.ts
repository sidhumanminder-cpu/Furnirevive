/**
 * @deprecated Import from "@/lib/content-engine/content-uniqueness.ts" directly.
 *
 * This shim exists so legacy SEO pages continue to work while the shared
 * library lives in the content engine. It adapts the old slug-based
 * signatures to the new PageContext signatures.
 */

import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import type { LocalityEntry } from "@/lib/registry/types.ts";
import {
  getIntroOpener as _getIntroOpener,
  getMicroLocalContext as _getMicroLocalContext,
  getRotatedBadges as _getRotatedBadges,
  getUniqueSentence as _getUniqueSentence,
  getSectionOrder as _getSectionOrder,
  getUniqueFaq as _getUniqueFaq,
  getVariedLinkLabel as _getVariedLinkLabel,
} from "@/lib/content-engine/content-uniqueness.ts";
import type { SectionOrderVariant } from "@/lib/content-engine/content-uniqueness.ts";
export type { SectionOrderVariant };

// Stub ServiceEntry for legacy callers that only have a slug
function extractServiceSlug(slug: string): "sofa-repair" | "recliner-repair" | "furniture-repair" | "sofa-upholstery" {
  if (slug.includes("sofa-upholstery")) return "sofa-upholstery";
  if (slug.includes("sofa-repair")) return "sofa-repair";
  if (slug.includes("recliner-repair")) return "recliner-repair";
  return "furniture-repair";
}

function extractServiceName(slug: string): string {
  if (slug.includes("sofa-upholstery")) return "Sofa Upholstery";
  if (slug.includes("sofa-repair")) return "Sofa Repair";
  if (slug.includes("recliner-repair")) return "Recliner Repair";
  return "Furniture Repair";
}

function slugToContext(slug: string) {
  let locality: LocalityEntry;
  let cityDisplay = "Delhi";

  try {
    const info = getLocalityInfo(slug);
    if (info?.name && info?.city) {
      cityDisplay = info.city;
      // Construct a minimal LocalityEntry for legacy compatibility
      locality = {
        id: `legacy_${slug}`,
        slug: info.name.toLowerCase().replace(/\s+/g, "-"),
        name: info.name,
        cluster: "southDelhi",
        city: (info.cityKey ?? "delhi") as LocalityEntry["city"],
        propertyType: "",
        affluence: "mid",
        premiumLevel: 2,
        density: "medium",
        housingAge: "established",
        landmarks: [],
        nearby: [],
        servicePriority: 3,
        contentVersion: 1,
        contentWeight: 70,
        searchPriority: 3,
        status: "published",
      };
    } else {
      locality = {
        id: `legacy_${slug}`,
        slug,
        name: "Delhi NCR",
        cluster: "southDelhi",
        city: "delhi",
        propertyType: "",
        affluence: "mid",
        premiumLevel: 2,
        density: "medium",
        housingAge: "established",
        landmarks: [],
        nearby: [],
        servicePriority: 3,
        contentVersion: 1,
        contentWeight: 70,
        searchPriority: 3,
        status: "published",
      };
    }
  } catch {
    locality = {
      id: `legacy_${slug}`,
      slug,
      name: "Delhi NCR",
      cluster: "southDelhi",
      city: "delhi",
      propertyType: "",
      affluence: "mid",
      premiumLevel: 2,
      density: "medium",
      housingAge: "established",
      landmarks: [],
      nearby: [],
      servicePriority: 3,
      contentVersion: 1,
      contentWeight: 70,
      searchPriority: 3,
      status: "published",
    };
  }

  const serviceSlug = extractServiceSlug(slug);
  return {
    locality,
    service: {
      id: `legacy_${serviceSlug}`,
      slug: serviceSlug,
      name: extractServiceName(slug),
      description: "",
      modules: [] as never[],
      internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
      keywords: [] as never[],
      seo: {
        titleModifier: "",
        metaKeywords: [] as never[],
        synonyms: [] as never[],
        commercialTerms: [] as never[],
        titleTemplate: "",
        metaTemplate: "",
      },
      features: { luxurySection: false, beforeAfterGallery: false, reviews: false, pricingCalculator: false, aiSummary: false },
    },
    city: cityDisplay,
    slug,
  };
}

export function getIntroOpener(slug: string): string {
  return _getIntroOpener(slugToContext(slug));
}

export function getMicroLocalContext(slug: string): string {
  return _getMicroLocalContext(slugToContext(slug));
}

export function getRotatedBadges(slug: string) {
  return _getRotatedBadges(slugToContext(slug));
}

export function getUniqueSentence(slug: string): string {
  return _getUniqueSentence(slugToContext(slug));
}

export function getSectionOrder(slug: string): SectionOrderVariant {
  return _getSectionOrder(slugToContext(slug));
}

export function getUniqueFaq(slug: string): { question: string; answer: string } {
  return _getUniqueFaq(slugToContext(slug));
}

export function getVariedLinkLabel(label: string, index: number, slug: string): string {
  return _getVariedLinkLabel(label, index, slugToContext(slug));
}
