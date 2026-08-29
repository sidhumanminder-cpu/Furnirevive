/**
 * SEO Service Configuration
 *
 * This is the canonical source of truth for SEO service identities.
 * - SEO_SERVICE_CONFIG: defines service identity (key, display name)
 * - SeoServiceKey: derived type — adding a new service here updates the type automatically
 *
 * Architecture rule:
 * - This file defines IDENTITY only (what a service IS)
 * - URL construction lives in location-graph.ts (buildCityServiceUrl, buildLocalityServiceUrl)
 * - Components never concatenate URLs themselves
 */

export const SEO_SERVICE_CONFIG = {
  "sofa-repair": { displayName: "Sofa Repair" },
  "recliner-repair": { displayName: "Recliner Repair" },
  "leather-sofa-repair": { displayName: "Leather Sofa Repair" },
  "sofa-upholstery": { displayName: "Sofa Upholstery" },
  "foam-replacement": { displayName: "Foam Replacement" },
  "furniture-repair": { displayName: "Furniture Repair" },
  "chair-repair": { displayName: "Chair Repair" },
  "furniture-polish": { displayName: "Furniture Polish" },
  "wooden-sofa-repair": { displayName: "Wooden Sofa Repair" },
  "sofa-spring-repair": { displayName: "Sofa Spring Repair" },
  "sofa-frame-repair": { displayName: "Sofa Frame Repair" },
  "modular-kitchen": { displayName: "Modular Kitchen" },
} as const;

export type SeoServiceKey = keyof typeof SEO_SERVICE_CONFIG;
