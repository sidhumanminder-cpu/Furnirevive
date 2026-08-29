/**
 * generatePages()
 *
 * Derives the full set of page definitions from LOCALITY_REGISTRY ×
 * SERVICE_REGISTRY, filtered by BUSINESS_RULES.
 *
 * This is the single source of truth for:
 * - Dynamic routes (Milestone 3)
 * - Sitemap entries for new registry pages (Milestone 4)
 * - Internal link generation
 *
 * IMPORTANT: This generates ONLY new registry pages. The existing ~760 legacy
 * pages are not represented here and must not be touched.
 *
 * URL construction rules (matches existing legacy URL patterns):
 * - sofa-repair:      /sofa-repair-{slug}
 * - recliner-repair:  /recliner-repair-{slug}
 * - furniture-repair: /furniture-repair-{slug}
 * - sofa-upholstery:  /sofa-upholstery-{slug}-delhi  (Delhi only)
 *                     /sofa-upholstery-{slug}          (Gurgaon/other)
 * - office-chair-repair: /office-chair-repair-{slug}  (all cities, no suffix)
 */

import { LOCALITY_REGISTRY } from "./locality-registry.ts";
import { SERVICE_REGISTRY } from "./service-registry.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "./commercial-locality-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "./kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "./kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "./kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "./kitchen-cost-registry.ts";
import { KITCHEN_LAYOUT_LOCALITY_REGISTRY } from "./kitchen-layout-locality-registry.ts";
import { KITCHEN_LOCALITY_HUB_REGISTRY } from "./kitchen-locality-hub-registry.ts";
import { KITCHEN_MATERIAL_LOCALITY_REGISTRY } from "./kitchen-material-locality-registry.ts";
import { KITCHEN_LAMINATE_LOCALITY_REGISTRY } from "./kitchen-laminate-locality-registry.ts";
import { KITCHEN_GLASS_LOCALITY_REGISTRY } from "./kitchen-glass-locality-registry.ts";
import { KITCHEN_PU_LOCALITY_REGISTRY } from "./kitchen-pu-locality-registry.ts";
import { KITCHEN_MEMBRANE_LOCALITY_REGISTRY } from "./kitchen-membrane-locality-registry.ts";
import { KITCHEN_BUDGET_LOCALITY_REGISTRY } from "./kitchen-budget-locality-registry.ts";
import { KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY } from "./kitchen-price-range-locality-registry.ts";
import { KITCHEN_BUILDER_HUB_REGISTRY } from "./kitchen-builder-hub-registry.ts";
import { KITCHEN_PROJECT_REGISTRY } from "./kitchen-project-registry.ts";
import { KITCHEN_RENOVATION_REGISTRY } from "./kitchen-renovation-registry.ts";
import { KITCHEN_DIMENSION_REGISTRY } from "./kitchen-dimension-registry.ts";
import { KITCHEN_GUIDE_REGISTRY } from "./kitchen-guide-registry.ts";
import { KITCHEN_REPAIR_REGISTRY } from "./kitchen-repair-registry.ts";
import { canGeneratePage } from "./business-rules.ts";
import type { PageDefinition, ServiceSlug } from "./types.ts";

/**
 * Builds the canonical URL path for a given service + locality slug + city.
 * Must match the URL patterns used by legacy pages exactly.
 */
export function buildRegistryUrl(service: ServiceSlug, localitySlug: string, city: string): string {
  if (service === "sofa-upholstery") {
    // Delhi upholstery pages use -delhi suffix; others use bare slug
    if (city === "delhi") {
      return `/sofa-upholstery-${localitySlug}-delhi`;
    }
    return `/sofa-upholstery-${localitySlug}`;
  }
  if (service === "modular-kitchen") {
    // All kitchen pages: /modular-kitchen-{slug}
    return `/modular-kitchen-${localitySlug}`;
  }
  // All repair services: /service-slug-locality-slug
  return `/${service}-${localitySlug}`;
}

/**
 * Generates the full set of page definitions for all published registry
 * localities × all services, filtered by business rules.
 *
 * Returns a flat array of PageDefinition objects.
 * Only the "repair" intent is generated in Milestone 1 scope.
 * Additional intents (cost, near-me, etc.) can be added later.
 */
export function generatePages(): readonly PageDefinition[] {
  const pages: PageDefinition[] = [];

  for (const locality of LOCALITY_REGISTRY) {
    for (const service of SERVICE_REGISTRY) {
      if (!canGeneratePage(locality, service)) {
        continue;
      }

      const urlPath = buildRegistryUrl(service.slug, locality.slug, locality.city);

      pages.push({
        service: service.slug,
        locality: locality.slug,
        city: locality.city,
        intent: "repair",
        urlPath,
      });
    }
  }

  // Commercial B2B cluster: iterate all corporate-audience services over each
  // commercial locality. Adding a new B2B service to SERVICE_REGISTRY is the
  // only change needed to generate pages for all commercial localities.
  const commercialServices = SERVICE_REGISTRY.filter(
    (s) => s.capabilities?.audience.corporate && !s.capabilities?.audience.residential,
  );

  for (const service of commercialServices) {
    for (const locality of COMMERCIAL_LOCALITY_REGISTRY) {
      if (!canGeneratePage(locality, service)) {
        continue;
      }

      // URL: /office-chair-repair-{slug}, /office-furniture-repair-{slug}, etc.
      const urlPath = `/${service.slug}-${locality.slug}`;

      pages.push({
        service: service.slug,
        locality: locality.slug,
        city: locality.city,
        intent: "repair",
        urlPath,
      });
    }
  }

  // ── Modular Kitchen cluster ──────────────────────────────────────────────
  // Pages generated from 4 separate kitchen registries; repair cluster untouched.

  // 1. Kitchen locality pages (top 15 by priority, status: published)
  const publishedKitchenLocalities = [...MODULAR_KITCHEN_LOCALITY_REGISTRY]
    .filter((l) => l.status === "published")
    .sort((a, b) => a.priority - b.priority);

  for (const locality of publishedKitchenLocalities) {
    pages.push({
      service: "modular-kitchen",
      locality: locality.slug,
      city: locality.city,
      intent: "repair",
      urlPath: `/modular-kitchen-${locality.slug}`,
    });
  }

  // 2. Kitchen layout pages
  for (const layout of MODULAR_KITCHEN_LAYOUT_REGISTRY) {
    if (layout.status !== "published") continue;
    pages.push({
      service: "modular-kitchen",
      locality: layout.slug,
      city: "delhi", // city hub context — layout pages are pan-NCR
      intent: "repair",
      urlPath: `/modular-kitchen-${layout.slug}`,
    });
  }

  // 3. Kitchen material pages
  for (const material of MODULAR_KITCHEN_MATERIAL_REGISTRY) {
    if (material.status !== "published") continue;
    pages.push({
      service: "modular-kitchen",
      locality: material.slug,
      city: "delhi",
      intent: "repair",
      urlPath: `/modular-kitchen-${material.slug}`,
    });
  }

  // 4. Kitchen cost pages
  for (const cost of MODULAR_KITCHEN_COST_REGISTRY) {
    if (cost.status !== "published") continue;
    pages.push({
      service: "modular-kitchen",
      locality: cost.slug,
      city: "delhi",
      intent: "cost",
      urlPath: `/modular-kitchen-${cost.slug}`,
    });
  }

  // 5. Kitchen layout × locality pages (Batch 1 — 100 pages)
  for (const entry of KITCHEN_LAYOUT_LOCALITY_REGISTRY) {
    pages.push({
      service: "modular-kitchen",
      locality: entry.urlSlug, // urlSlug used as locality key so registry-page can look it up
      city: entry.citySlug,
      intent: "repair",
      urlPath: `/${entry.urlSlug}`,
    });
  }

  // 6. Kitchen locality hub pages (Batch 2a — 25 pages)
  for (const entry of KITCHEN_LOCALITY_HUB_REGISTRY) {
    pages.push({
      service: "modular-kitchen",
      locality: entry.urlSlug,
      city: entry.citySlug,
      intent: "repair",
      urlPath: `/${entry.urlSlug}`,
    });
  }

  // 7. Kitchen material × locality pages (Batch 3a — 25 acrylic pages)
  for (const entry of KITCHEN_MATERIAL_LOCALITY_REGISTRY) {
    pages.push({
      service: "modular-kitchen",
      locality: entry.urlSlug,
      city: entry.citySlug,
      intent: "repair",
      urlPath: `/${entry.urlSlug}`,
    });
  }

  // 8. Kitchen material × locality pages (Batch 3b — 25 laminate pages)
  for (const entry of KITCHEN_LAMINATE_LOCALITY_REGISTRY) {
    pages.push({
      service: "modular-kitchen",
      locality: entry.urlSlug,
      city: entry.citySlug,
      intent: "repair",
      urlPath: `/${entry.urlSlug}`,
    });
  }

  // 9. Batch 3c — glass (25 pages)
  for (const entry of KITCHEN_GLASS_LOCALITY_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 10. Batch 3d — PU (25 pages)
  for (const entry of KITCHEN_PU_LOCALITY_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 11. Batch 3e — membrane (25 pages)
  for (const entry of KITCHEN_MEMBRANE_LOCALITY_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 12. Batch 4 — budget: affordable + low-cost (50 pages)
  for (const entry of KITCHEN_BUDGET_LOCALITY_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 13. Batch 5 — price-range: under 1L/1.5L/2L/3L × 25 localities (100 pages)
  for (const entry of KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 14. Batch 6a — builder hub pages (12 pages)
  for (const entry of KITCHEN_BUILDER_HUB_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 15. Batch 6b — project pages (75 pages)
  for (const entry of KITCHEN_PROJECT_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 16. Batch 7 — renovation pages (75 pages)
  for (const entry of KITCHEN_RENOVATION_REGISTRY) {
    pages.push({ service: "modular-kitchen", locality: entry.urlSlug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.urlSlug}` });
  }
  // 17. Dimension Engine — style + finish × locality (section 17+)
  // Only "published" entries are registered as routes; "draft" entries skip routing
  for (const entry of KITCHEN_DIMENSION_REGISTRY) {
    if (entry.status !== "published") continue;
    pages.push({ service: "modular-kitchen", locality: entry.slug, city: entry.citySlug, intent: "repair", urlPath: `/${entry.slug}` });
  }

  // 18. Batch 8 — Comparison & Buying Guide pages (22 live)
  for (const entry of KITCHEN_GUIDE_REGISTRY) {
    if (entry.status !== "published") continue;
    pages.push({ service: "modular-kitchen", locality: entry.slug, city: "delhi", intent: "repair", urlPath: `/${entry.slug}` });
  }

  // 19. Batch 9 — Kitchen Repair & Problem pages (46 pages)
  for (const entry of KITCHEN_REPAIR_REGISTRY) {
    if (entry.status !== "published") continue;
    pages.push({ service: "modular-kitchen", locality: entry.slug, city: "delhi", intent: "repair", urlPath: `/${entry.slug}` });
  }

  return pages;
}
