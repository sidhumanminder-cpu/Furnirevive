import { useLocation } from "@/lib/router-compat.tsx";
import { getRepairRegistryPage } from "@/lib/registry/repair-pages.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "@/lib/registry/commercial-locality-registry.ts";
import { buildPageSections, auditPageSections } from "@/lib/content-engine/index.ts";
import RegistryPageTemplate from "@/components/registry-page-template.tsx";
import NotFound from "@/pages/NotFound.tsx";
import type { LocalityEntry } from "@/lib/registry/types.ts";

/** Registry-driven repair, upholstery and office pages (everything except modular kitchen). */
export default function RepairRegistryPage() {
  const { pathname } = useLocation();
  const pageDef = getRepairRegistryPage(pathname);
  if (!pageDef) return <NotFound />;

  // Commercial localities live in a separate registry. CommercialLocalityEntry
  // extends LocalityEntry, so the cast is safe for content generation.
  const locality =
    LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality) ??
    (COMMERCIAL_LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality) as LocalityEntry | undefined);
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
