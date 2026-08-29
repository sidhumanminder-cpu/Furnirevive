import { createSeoPage } from "@/lib/seoConfigs/create-seo-page.ts";
import { auditResolvedSeoPage } from "@/lib/seoConfigs/audit-resolved-seo-page.ts";
import { renderSeoPage } from "@/lib/seoConfigs/render-seo-page.ts";
import { buildPageData } from "@/lib/seoConfigs/create-seo-page.ts";
import ProgrammaticSeoPageTemplate from "@/components/programmatic-seo-page-template.tsx";

const SERVICE = "recliner-repair" as const;
const LOCALITY = "sector-110-gurgaon" as const;

const resolvedPage = createSeoPage({ service: SERVICE, locality: LOCALITY });
const auditResult = auditResolvedSeoPage(resolvedPage);
if (!auditResult.valid) {
  if (import.meta.env.DEV) {
    console.warn(`[SEO Audit] recliner-repair-sector-110-gurgaon — ${auditResult.errors.length} error(s):`, auditResult.errors);
  } else {
    console.error(`[SEO Audit] recliner-repair-sector-110-gurgaon — audit failed:`, auditResult.errors);
  }
}
const _renderedPage = renderSeoPage(resolvedPage);
const pageData = buildPageData(SERVICE, LOCALITY, resolvedPage);

export default function ReclineRepairSector110Gurgaon() {
  return <ProgrammaticSeoPageTemplate data={pageData} />;
}
