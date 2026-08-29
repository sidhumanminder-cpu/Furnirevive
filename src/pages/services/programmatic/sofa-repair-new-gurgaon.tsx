/**
 * Programmatic SEO Page — Sofa Repair in New Gurgaon
 *
 * Pipeline:
 *   createSeoPage()          ← hero resolved exactly once here (via composePage → getHeroImage)
 *       ↓
 *   auditResolvedSeoPage()   ← fails visibly in dev, resilient in prod
 *       ↓
 *   renderSeoPage()          ← pure ResolvedSeoPage → RenderedSeoPage transform
 *       ↓
 *   buildSeoPageData()       ← static data builder (unchanged, no hero logic)
 *   + spread merge           ← hero copied from resolvedPage (single source of truth)
 *       ↓
 *   SeoPageTemplate
 *
 * To create the next programmatic page: copy this file, change SERVICE and LOCALITY,
 * add a <Route> in App.tsx. That is the complete process.
 */

import { createSeoPage } from "@/lib/seoConfigs/create-seo-page.ts";
import { auditResolvedSeoPage } from "@/lib/seoConfigs/audit-resolved-seo-page.ts";
import { renderSeoPage } from "@/lib/seoConfigs/render-seo-page.ts";
import { buildPageData } from "@/lib/seoConfigs/create-seo-page.ts";
import ProgrammaticSeoPageTemplate from "@/components/programmatic-seo-page-template.tsx";

// ─── Pipeline ─────────────────────────────────────────────────────────────────

const SERVICE = "sofa-repair" as const;
const LOCALITY = "new-gurgaon" as const;

// Step 1 — Resolve all dynamic assets via the composition engine.
// getHeroImage() is called exactly once inside composePage(), which is called inside createSeoPage().
// No other file in this pipeline calls getHeroImage().
const resolvedPage = createSeoPage({ service: SERVICE, locality: LOCALITY });

// Step 2 — Audit before rendering. Errors logged, page still renders.
const auditResult = auditResolvedSeoPage(resolvedPage);
if (!auditResult.valid) {
  if (import.meta.env.DEV) {
    console.warn(
      `[SEO Audit] sofa-repair-new-gurgaon — ${auditResult.errors.length} error(s):`,
      auditResult.errors,
    );
  } else {
    console.error(`[SEO Audit] sofa-repair-new-gurgaon — audit failed:`, auditResult.errors);
  }
}

// Step 3 — Pure transform: ResolvedSeoPage → RenderedSeoPage.
// _renderedPage retained for future direct template integration.
const _renderedPage = renderSeoPage(resolvedPage);

// Step 4 — Build static SeoPageData, then merge the already-resolved hero.
const pageData = buildPageData(SERVICE, LOCALITY, resolvedPage);

// ─── Component ────────────────────────────────────────────────────────────────

export default function SofaRepairNewGurgaon() {
  return <ProgrammaticSeoPageTemplate data={pageData} />;
}
