import { createSeoPage } from "@/lib/seoConfigs/create-seo-page.ts";
import { auditResolvedSeoPage } from "@/lib/seoConfigs/audit-resolved-seo-page.ts";
import { buildPageData } from "@/lib/seoConfigs/create-seo-page.ts";
import UpholsterySeoPageTemplateV1 from "@/components/upholstery-seo-page-template.tsx";
import { UPHOLSTERY_FAQS } from "@/lib/upholsteryConfigs/upholsteryFaqs.ts";

const SERVICE = "sofa-upholstery" as const;
const LOCALITY = "kamla-nagar" as const;

const resolvedPage = createSeoPage({ service: SERVICE, locality: LOCALITY });
const auditResult = auditResolvedSeoPage(resolvedPage);
if (!auditResult.valid) {
  if (import.meta.env.DEV) {
    console.warn(`[SEO Audit] sofa-upholstery-kamla-nagar-delhi — ${auditResult.errors.length} error(s):`, auditResult.errors);
  } else {
    console.error(`[SEO Audit] sofa-upholstery-kamla-nagar-delhi — audit failed:`, auditResult.errors);
  }
}
const pageData = {
  ...buildPageData(SERVICE, LOCALITY, resolvedPage),
  faqs: UPHOLSTERY_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
};

export default function SofaUpholsteryKamlaNagarDelhi() {
  return <UpholsterySeoPageTemplateV1 data={pageData} templateVersion="v1" />;
}
