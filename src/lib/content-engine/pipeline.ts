/**
 * Content Engine — Pipeline Runner
 *
 * Pure orchestrator — has no content knowledge. Reads `service.modules`,
 * dispatches to the registered module function for each, and collects results.
 *
 * Unknown module IDs are skipped with a console.warn in development.
 */

import type { LocalityEntry, ModuleEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { PageSections, PageSectionData } from "./types.ts";
import { getSectionOrder, type PageContext, type SectionOrderVariant } from "@/lib/content-engine/content-uniqueness.ts";
import { buildHero } from "./modules/hero.ts";
import { buildIntro } from "./modules/intro.ts";
import { buildPricing } from "./modules/pricing.ts";
import { buildRepairTypes } from "./modules/repair-types.ts";
import { buildBrands } from "./modules/brands.ts";
import { buildFaq } from "./modules/faq.ts";
import { buildNearby } from "./modules/nearby.ts";
import { buildNearMe } from "./modules/near-me.ts";
import { buildPyramidLinks } from "./modules/pyramid-links.ts";
import { buildServiceHub } from "./modules/servicehub.ts";
import { buildCta } from "./modules/cta.ts";
import { buildProcess } from "./modules/process.ts";
import { buildWhyChoose } from "./modules/why-choose.ts";
import { buildComparison } from "./modules/comparison.ts";
import { buildTestimonials } from "./modules/testimonials.ts";
import { buildTopicalAuthority } from "./modules/topical-authority.ts";
import { buildBlogLinks } from "./modules/blog-links.ts";
import { buildServicesGrid } from "./modules/services-grid.ts";
import { buildMaterialOptions } from "./modules/material-options.ts";
import { buildRepairTimes } from "./modules/repair-times.ts";
import { buildServiceCoverage } from "./modules/service-coverage.ts";
import { buildIndustries } from "./modules/industries.ts";
import { buildQuickAnswers } from "./modules/quick-answers.ts";
import {
  buildKitchenHero,
  buildKitchenIntro,
  buildKitchenLayoutsGrid,
  buildKitchenMaterialsGrid,
  buildKitchenPricing,
  buildKitchenProcess,
  buildKitchenFaq,
  buildKitchenCta,
  buildKitchenWhyChoose,
  buildKitchenReviews,
  buildKitchenComparison,
  buildKitchenBrands,
  buildKitchenLocalitySnapshotSection,
  buildKitchenLocalityStatsSection,
} from "./modules/kitchen-stub.ts";

type ModuleBuilder = (locality: LocalityEntry, service: ServiceEntry) => PageSectionData | null;

const MODULE_REGISTRY: Record<string, ModuleBuilder> = {
  hero: buildHero,
  intro: buildIntro,
  process: buildProcess,
  pricing: buildPricing,
  "repair-types": buildRepairTypes,
  brands: buildBrands,
  faq: buildFaq,
  nearby: buildNearby,
  "near-me": buildNearMe,
  "pyramid-links": buildPyramidLinks,
  servicehub: buildServiceHub,
  "why-choose": buildWhyChoose,
  comparison: buildComparison,
  testimonials: buildTestimonials,
  "topical-authority": buildTopicalAuthority,
  "blog-links": buildBlogLinks,
  "services-grid": buildServicesGrid,
  "material-options": buildMaterialOptions,
  "repair-times": buildRepairTimes,
  "service-coverage": buildServiceCoverage,
  industries: buildIndustries,
  "quick-answers": buildQuickAnswers,
  cta: buildCta,
  // Kitchen modules (stubs for M1 — real implementations in M2)
  "kitchen-hero": buildKitchenHero,
  "kitchen-intro": buildKitchenIntro,
  "kitchen-layouts-grid": buildKitchenLayoutsGrid,
  "kitchen-materials-grid": buildKitchenMaterialsGrid,
  "kitchen-pricing": buildKitchenPricing,
  "kitchen-process": buildKitchenProcess,
  "kitchen-faq": buildKitchenFaq,
  "kitchen-cta": buildKitchenCta,
  "kitchen-why-choose": buildKitchenWhyChoose,
  "kitchen-reviews": buildKitchenReviews,
  "kitchen-comparison": buildKitchenComparison,
  "kitchen-brands": buildKitchenBrands,
  "kitchen-locality-snapshot": buildKitchenLocalitySnapshotSection,
  "kitchen-locality-stats": buildKitchenLocalityStatsSection,
} satisfies Record<string, ModuleBuilder>;

/** Extract the ModuleId string from a ModuleEntry (string or object form). */
function getModuleId(entry: ModuleEntry): string {
  return typeof entry === "string" ? entry : entry.id;
}

/**
 * Build an ordered array of SectionData for the given locality + service.
 *
 * The service's `modules` array determines which sections to include and in
 * what order. Unregistered module IDs are skipped (with a dev warning).
 */
/**
 * Reorder module IDs based on the section-order variant.
 * Identifies modules by name prefix (strips ":v1" version suffix).
 */
function reorderModules(modules: readonly ModuleEntry[], variant: SectionOrderVariant): string[] {
  // Normalise to ID strings for reordering
  const ids = modules.map(getModuleId);
  if (variant === "default") return ids;

  const ordered = [...ids];

  const indexOf = (name: string) =>
    ordered.findIndex((id) => id.split(":")[0] === name);

  if (variant === "benefits-first") {
    // Move pricing before intro
    const pricingIdx = indexOf("pricing");
    const introIdx = indexOf("intro");
    if (pricingIdx !== -1 && introIdx !== -1 && pricingIdx > introIdx) {
      const [pricing] = ordered.splice(pricingIdx, 1);
      const newIntroIdx = indexOf("intro");
      ordered.splice(newIntroIdx, 0, pricing);
    }
  } else if (variant === "process-first") {
    // Move brands before repair-types
    const brandsIdx = indexOf("brands");
    const repairIdx = indexOf("repair-types");
    if (brandsIdx !== -1 && repairIdx !== -1 && brandsIdx > repairIdx) {
      const [brands] = ordered.splice(brandsIdx, 1);
      const newRepairIdx = indexOf("repair-types");
      ordered.splice(newRepairIdx, 0, brands);
    }
  }

  return ordered;
}

export function buildPageSections(locality: LocalityEntry, service: ServiceEntry): PageSections {
  const sections: PageSections = [];

  // Determine section order variant and reorder modules accordingly
  const ctx: PageContext = { locality, service, city: locality.city };
  const variant = getSectionOrder(ctx);
  const orderedModules = reorderModules(service.modules, variant);

  for (const entry of orderedModules) {
    // Module IDs are versioned: "hero:v1" → extract name before ":"
    const moduleName = entry.split(":")[0];
    const builder = MODULE_REGISTRY[moduleName];

    if (!builder) {
      if (import.meta.env.DEV) {
        console.warn(`[ContentEngine] Unknown module "${entry}" — skipped.`);
      }
      continue;
    }

    const result = builder(locality, service);
    if (result !== null) sections.push(result);
  }

  return sections;
}
