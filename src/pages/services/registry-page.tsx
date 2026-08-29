import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { generatePages } from "@/lib/registry/generate-pages.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "@/lib/registry/commercial-locality-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "@/lib/registry/kitchen-cost-registry.ts";
import { KITCHEN_LAYOUT_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-layout-locality-registry.ts";
import { KITCHEN_LOCALITY_HUB_REGISTRY } from "@/lib/registry/kitchen-locality-hub-registry.ts";
import { KITCHEN_MATERIAL_LOCALITY_REGISTRY, buildMaterialLocalityFaqs } from "@/lib/registry/kitchen-material-locality-registry.ts";
import { KITCHEN_LAMINATE_LOCALITY_REGISTRY, buildLaminateLocalityFaqs } from "@/lib/registry/kitchen-laminate-locality-registry.ts";
import { KITCHEN_GLASS_LOCALITY_REGISTRY, buildGlassLocalityFaqs } from "@/lib/registry/kitchen-glass-locality-registry.ts";
import { KITCHEN_PU_LOCALITY_REGISTRY, buildPuLocalityFaqs } from "@/lib/registry/kitchen-pu-locality-registry.ts";
import { KITCHEN_MEMBRANE_LOCALITY_REGISTRY, buildMembraneLocalityFaqs } from "@/lib/registry/kitchen-membrane-locality-registry.ts";
import { KITCHEN_BUDGET_LOCALITY_REGISTRY, buildBudgetLocalityFaqs } from "@/lib/registry/kitchen-budget-locality-registry.ts";
import { KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY, buildPriceRangeLocalityFaqs } from "@/lib/registry/kitchen-price-range-locality-registry.ts";
import { KITCHEN_BUILDER_HUB_REGISTRY, buildBuilderHubFaqs } from "@/lib/registry/kitchen-builder-hub-registry.ts";
import { KITCHEN_PROJECT_REGISTRY, buildProjectFaqs } from "@/lib/registry/kitchen-project-registry.ts";
import { KITCHEN_RENOVATION_REGISTRY, buildRenovationFaqs } from "@/lib/registry/kitchen-renovation-registry.ts";
import { KITCHEN_DIMENSION_REGISTRY, buildDimensionFaqs } from "@/lib/registry/kitchen-dimension-registry.ts";
import { KITCHEN_GUIDE_REGISTRY, buildGuideFaqs } from "@/lib/registry/kitchen-guide-registry.ts";
import { KITCHEN_REPAIR_REGISTRY, buildRepairFaqs } from "@/lib/registry/kitchen-repair-registry.ts";
import KitchenBuilderHubTemplate from "@/pages/modular-kitchen/_components/KitchenBuilderHubTemplate.tsx";
import KitchenProjectTemplate from "@/pages/modular-kitchen/_components/KitchenProjectTemplate.tsx";
import KitchenRenovationTemplate from "@/pages/modular-kitchen/_components/KitchenRenovationTemplate.tsx";
import DimensionTemplate from "@/pages/modular-kitchen/_components/DimensionTemplate.tsx";
import KitchenGuideTemplate from "@/pages/modular-kitchen/_components/KitchenGuideTemplate.tsx";
import KitchenRepairTemplate from "@/pages/modular-kitchen/_components/KitchenRepairTemplate.tsx";
import { buildPageSections, auditPageSections } from "@/lib/content-engine/index.ts";
import RegistryPageTemplate from "@/components/registry-page-template.tsx";
import KitchenProgrammaticTemplate from "@/pages/modular-kitchen/_components/KitchenProgrammaticTemplate.tsx";
import KitchenLocalityHubTemplate from "@/pages/modular-kitchen/_components/KitchenLocalityHubTemplate.tsx";
import KitchenMaterialLocalityTemplate from "@/pages/modular-kitchen/_components/KitchenMaterialLocalityTemplate.tsx";
import KitchenBudgetLocalityTemplate from "@/pages/modular-kitchen/_components/KitchenBudgetLocalityTemplate.tsx";
import KitchenPriceRangeLocalityTemplate from "@/pages/modular-kitchen/_components/KitchenPriceRangeLocalityTemplate.tsx";
import NotFound from "@/pages/NotFound.tsx";
import type { PageDefinition, LocalityEntry } from "@/lib/registry/types.ts";

/**
 * Resolves a LocalityEntry-compatible object for modular kitchen pages.
 * Kitchen registries have a subset of LocalityEntry fields; this fills defaults
 * for fields only used by repair content modules (which kitchen never calls).
 */
function resolveKitchenLocality(slug: string): LocalityEntry | undefined {
  // 1. Kitchen locality pages
  const kLoc = MODULAR_KITCHEN_LOCALITY_REGISTRY.find((l) => l.slug === slug);
  if (kLoc) {
    return {
      id: kLoc.id,
      slug: kLoc.slug,
      name: kLoc.name,
      cluster: "southDelhi", // unused by kitchen modules — default required by type
      city: kLoc.city,
      propertyType: kLoc.propertyType,
      affluence: kLoc.affluence,
      premiumLevel: kLoc.premiumLevel,
      density: "medium",
      housingAge: "established",
      landmarks: kLoc.landmarks,
      nearby: kLoc.nearby,
      servicePriority: 3,
      contentVersion: 1,
      contentWeight: 90,
      searchPriority: 3,
      status: kLoc.status,
    };
  }

  // 2. Layout pages
  const kLayout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
  if (kLayout) {
    return {
      id: kLayout.id,
      slug: kLayout.slug,
      name: kLayout.name,
      cluster: "southDelhi",
      city: "delhi",
      propertyType: kLayout.description,
      affluence: "mid-high",
      premiumLevel: 3,
      density: "medium",
      housingAge: "established",
      landmarks: [],
      nearby: [],
      servicePriority: 4,
      contentVersion: 1,
      contentWeight: 90,
      searchPriority: 4,
      status: kLayout.status,
    };
  }

  // 3. Material pages
  const kMat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
  if (kMat) {
    return {
      id: kMat.id,
      slug: kMat.slug,
      name: kMat.name,
      cluster: "southDelhi",
      city: "delhi",
      propertyType: kMat.bestFor,
      affluence: "mid-high",
      premiumLevel: 3,
      density: "medium",
      housingAge: "established",
      landmarks: [],
      nearby: [],
      servicePriority: 4,
      contentVersion: 1,
      contentWeight: 90,
      searchPriority: 4,
      status: kMat.status,
    };
  }

  // 4. Cost pages
  const kCost = MODULAR_KITCHEN_COST_REGISTRY.find((c) => c.slug === slug);
  if (kCost) {
    return {
      id: kCost.id,
      slug: kCost.slug,
      name: kCost.name,
      cluster: "southDelhi",
      city: "delhi",
      propertyType: kCost.description,
      affluence: "mid-high",
      premiumLevel: 3,
      density: "medium",
      housingAge: "established",
      landmarks: [],
      nearby: [],
      servicePriority: 4,
      contentVersion: 1,
      contentWeight: 90,
      searchPriority: 4,
      status: kCost.status,
    };
  }

  return undefined;
}

export default function RegistryPage() {
  const { pathname } = useLocation();

  // PAGE_MAP derived from LOCALITY_REGISTRY. useMemo with no deps computes once
  // per component mount — stable in production, and correctly re-evaluates after
  // HMR updates the registry module in dev.
  const pageMap = useMemo(
    () => new Map<string, PageDefinition>(generatePages().map((p) => [p.urlPath, p])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const pageDef = pageMap.get(pathname);
  if (!pageDef) return <NotFound />;

  // Layout × locality pages
  if (pageDef.service === "modular-kitchen") {
    const layoutLocalityEntry = KITCHEN_LAYOUT_LOCALITY_REGISTRY.find(
      (e) => e.urlSlug === pageDef.locality,
    );
    if (layoutLocalityEntry) {
      return <KitchenProgrammaticTemplate entry={layoutLocalityEntry} />;
    }
    // Locality hub pages
    const hubEntry = KITCHEN_LOCALITY_HUB_REGISTRY.find(
      (e) => e.urlSlug === pageDef.locality,
    );
    if (hubEntry) {
      return <KitchenLocalityHubTemplate entry={hubEntry} />;
    }
    // Material × locality pages (Batch 3a — acrylic)
    const materialLocalityEntry = KITCHEN_MATERIAL_LOCALITY_REGISTRY.find(
      (e) => e.urlSlug === pageDef.locality,
    );
    if (materialLocalityEntry) {
      return <KitchenMaterialLocalityTemplate entry={materialLocalityEntry} faqs={buildMaterialLocalityFaqs(materialLocalityEntry)} />;
    }
    // Material × locality pages (Batch 3b — laminate)
    const laminateEntry = KITCHEN_LAMINATE_LOCALITY_REGISTRY.find(
      (e) => e.urlSlug === pageDef.locality,
    );
    if (laminateEntry) {
      return <KitchenMaterialLocalityTemplate entry={laminateEntry} faqs={buildLaminateLocalityFaqs(laminateEntry)} />;
    }
    // Batch 3c — glass
    const glassEntry = KITCHEN_GLASS_LOCALITY_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (glassEntry) {
      return <KitchenMaterialLocalityTemplate entry={glassEntry} faqs={buildGlassLocalityFaqs(glassEntry)} />;
    }
    // Batch 3d — PU
    const puEntry = KITCHEN_PU_LOCALITY_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (puEntry) {
      return <KitchenMaterialLocalityTemplate entry={puEntry} faqs={buildPuLocalityFaqs(puEntry)} />;
    }
    // Batch 3e — membrane
    const membraneEntry = KITCHEN_MEMBRANE_LOCALITY_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (membraneEntry) {
      return <KitchenMaterialLocalityTemplate entry={membraneEntry} faqs={buildMembraneLocalityFaqs(membraneEntry)} />;
    }
    // Batch 4 — budget (affordable + low-cost)
    const budgetEntry = KITCHEN_BUDGET_LOCALITY_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (budgetEntry) {
      return <KitchenBudgetLocalityTemplate entry={budgetEntry} faqs={buildBudgetLocalityFaqs(budgetEntry)} />;
    }
    // Batch 5 — price-range (under 1L / 1.5L / 2L / 3L)
    const priceRangeEntry = KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (priceRangeEntry) {
      return <KitchenPriceRangeLocalityTemplate entry={priceRangeEntry} faqs={buildPriceRangeLocalityFaqs(priceRangeEntry)} />;
    }
    // Batch 6a — builder hub pages
    const builderHubEntry = KITCHEN_BUILDER_HUB_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (builderHubEntry) {
      return <KitchenBuilderHubTemplate entry={builderHubEntry} faqs={buildBuilderHubFaqs(builderHubEntry)} />;
    }
    // Batch 6b — project pages
    const projectEntry = KITCHEN_PROJECT_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (projectEntry) {
      return <KitchenProjectTemplate entry={projectEntry} faqs={buildProjectFaqs(projectEntry)} />;
    }
    // Batch 7 — renovation pages
    const renovationEntry = KITCHEN_RENOVATION_REGISTRY.find((e) => e.urlSlug === pageDef.locality);
    if (renovationEntry) {
      return <KitchenRenovationTemplate entry={renovationEntry} faqs={buildRenovationFaqs(renovationEntry)} />;
    }
    // Dimension Engine — style + finish pages (section 17+)
    const dimensionEntry = KITCHEN_DIMENSION_REGISTRY.find((e) => e.slug === pageDef.locality);
    if (dimensionEntry) {
      return <DimensionTemplate entry={dimensionEntry} faqs={buildDimensionFaqs(dimensionEntry)} />;
    }
    // Batch 8 — Comparison & Buying Guide pages
    const guideEntry = KITCHEN_GUIDE_REGISTRY.find((e) => e.slug === pageDef.locality);
    if (guideEntry) {
      return <KitchenGuideTemplate entry={guideEntry} faqs={buildGuideFaqs(guideEntry)} />;
    }
    // Batch 9 — Kitchen Repair & Problem pages
    const repairEntry = KITCHEN_REPAIR_REGISTRY.find((e) => e.slug === pageDef.locality);
    if (repairEntry) {
      return <KitchenRepairTemplate entry={repairEntry} faqs={buildRepairFaqs(repairEntry)} />;
    }
  }

  let locality: LocalityEntry | undefined;

  if (pageDef.service === "modular-kitchen") {
    // Kitchen pages resolve from kitchen-specific registries
    locality = resolveKitchenLocality(pageDef.locality);
  } else {
    // Commercial localities live in a separate registry. CommercialLocalityEntry
    // extends LocalityEntry, so the cast is safe for content generation.
    locality =
      LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality) ??
      (COMMERCIAL_LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality) as LocalityEntry | undefined);
  }

  const service = SERVICE_REGISTRY.find((s) => s.slug === pageDef.service);
  if (!locality || !service) return <NotFound />;

  const sections = buildPageSections(locality, service);

  if (import.meta.env.DEV) {
    const audit = auditPageSections(sections, locality, service);
    if (!audit.valid) {
      console.warn(`[registry-page] SEO audit failed for ${audit.pageId}`, audit.errors);
    }
  }

  return <RegistryPageTemplate sections={sections} locality={locality} service={service} />;
}
