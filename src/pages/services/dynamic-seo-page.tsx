import { useParams, Navigate } from "react-router-dom";
import SeoPageTemplate from "@/components/seo-page-template.tsx";
import NotFound from "@/pages/NotFound.tsx";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";
import { getRegistryPage } from "@/lib/registry/index.ts";
import RegistryPage from "@/pages/services/registry-page.tsx";

/**
 * Dynamic SEO page component.
 * Looks up page data from the central registry by URL slug.
 * Renders the shared SeoPageTemplate if found, otherwise shows 404.
 * Also normalizes slug to lowercase to avoid duplicate-URL issues with Google.
 *
 * Lookup order:
 *   1. Registry-first pages (getRegistryPage) — new programmatic SEO pages
 *   2. Legacy SEO pages (getPageBySlug) — existing ~760 handcrafted pages
 *   3. NotFound
 */
export default function DynamicSeoPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <NotFound />;
  }

  // Redirect uppercase/mixed-case slugs to their lowercase canonical form
  const lowerSlug = slug.toLowerCase();
  if (slug !== lowerSlug) {
    return <Navigate to={`/${lowerSlug}`} replace />;
  }

  // Explicit retired-slug → primary-slug redirects (duplicate locality consolidation).
  // Each mapping is an exact full-URL slug — no wildcards, no pattern matching.
  // Checked BEFORE normal registry lookup so the retired page is never rendered.
  const RETIRED_SLUG_REDIRECTS: Record<string, string> = {
    // Gurgaon sector sofa-repair (city-first → sector-first format)
    "sofa-repair-gurgaon-sector-43": "sofa-repair-sector-43-gurgaon",
    "sofa-repair-gurgaon-sector-46": "sofa-repair-sector-46-gurgaon",
    "sofa-repair-gurgaon-sector-49": "sofa-repair-sector-49-gurgaon",
    "sofa-repair-gurgaon-sector-50": "sofa-repair-sector-50-gurgaon",
    "sofa-repair-gurgaon-sector-52": "sofa-repair-sector-52-gurgaon",
    "sofa-repair-gurgaon-sector-53": "sofa-repair-sector-53-gurgaon",
    "sofa-repair-gurgaon-sector-54": "sofa-repair-sector-54-gurgaon",
    "sofa-repair-gurgaon-sector-55": "sofa-repair-sector-55-gurgaon",
    "sofa-repair-gurgaon-sector-65": "sofa-repair-sector-65-gurgaon",
    // Gurgaon sector additional services (only where primary is confirmed live)
    "recliner-repair-gurgaon-sector-43": "recliner-repair-sector-43-gurgaon",
    "furniture-repair-gurgaon-sector-46": "furniture-repair-sector-46-gurgaon",
    "sofa-upholstery-gurgaon-sector-46": "sofa-upholstery-sector-46-gurgaon",
    "sofa-upholstery-gurgaon-sector-49": "sofa-upholstery-sector-49-gurgaon",
    "recliner-repair-gurgaon-sector-50": "recliner-repair-sector-50-gurgaon",
    "sofa-upholstery-gurgaon-sector-50": "sofa-upholstery-sector-50-gurgaon",
    "sofa-upholstery-gurgaon-sector-52": "sofa-upholstery-sector-52-gurgaon",
    "sofa-upholstery-gurgaon-sector-53": "sofa-upholstery-sector-53-gurgaon",
    "sofa-upholstery-gurgaon-sector-54": "sofa-upholstery-sector-54-gurgaon",
    "sofa-upholstery-gurgaon-sector-55": "sofa-upholstery-sector-55-gurgaon",
    "recliner-repair-gurgaon-sector-65": "recliner-repair-sector-65-gurgaon",
    "sofa-upholstery-gurgaon-sector-65": "sofa-upholstery-sector-65-gurgaon",
    // Noida sector 100 sofa-repair
    "sofa-repair-noida-sector-100": "sofa-repair-sector-100-noida",
    // Crossings Republik spelling variant (confirmed primary URLs live)
    "sofa-repair-crossings-republik": "sofa-repair-crossing-republik-ghaziabad",
    "furniture-repair-crossings-republik": "furniture-repair-crossing-republik-ghaziabad",
    // Chhatarpur spelling variant (registry confirms sofa-repair-chattarpur is live)
    "sofa-repair-chhatarpur": "sofa-repair-chattarpur",
  };

  const redirectTarget = RETIRED_SLUG_REDIRECTS[lowerSlug];
  if (redirectTarget) {
    return <Navigate to={`/${redirectTarget}`} replace />;
  }

  // 1. Check registry-first pages (new programmatic SEO architecture)
  const pathname = `/${slug}`;
  const registryPage = getRegistryPage(pathname);
  if (registryPage) {
    return <RegistryPage />;
  }

  // 2. Fall through to legacy SEO pages — unchanged behaviour
  const pageData = getPageBySlug(slug);

  if (!pageData) {
    return <NotFound />;
  }

  return <SeoPageTemplate data={pageData} />;
}
