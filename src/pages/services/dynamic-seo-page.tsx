import { lazy, use } from "react";
import { useParams, Navigate } from "@/lib/router-compat.tsx";
import NotFound from "@/pages/NotFound.tsx";
import { hasSeoPage } from "@/lib/seo-pages/slug-index.ts";
import { loadSeoPage } from "@/lib/seo-pages/group-loaders.ts";
import { getRepairRegistryPage } from "@/lib/registry/repair-pages.ts";
import { getHubTarget } from "@/pages/services/service-hub/_lib/hub-config.ts";
import { RETIRED_SLUG_REDIRECTS } from "@/lib/seo-pages/retired-slugs.ts";

// Each page family loads on demand so a visitor only downloads the code for the page they open.
const SeoPageTemplate = lazy(() => import("@/components/seo-page-template.tsx"));
const ServiceHubPage = lazy(() => import("@/pages/services/service-hub/page.tsx"));
const RepairRegistryPage = lazy(() => import("@/pages/services/repair-registry-page.tsx"));
// Kitchen pages (6,000+ registry entries) are only reached from kitchen slugs
const KitchenRegistryPage = lazy(() => import("@/pages/services/registry-page.tsx"));

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

  const redirectTarget = RETIRED_SLUG_REDIRECTS[lowerSlug];
  if (redirectTarget) {
    return <Navigate to={`/${redirectTarget}`} replace />;
  }

  // 0. Service hub pages (city / cluster level) take precedence at their existing URLs
  if (getHubTarget(slug)) {
    return <ServiceHubPage slug={slug} />;
  }

  // 1. Check registry-first pages (new programmatic SEO architecture)
  const pathname = `/${slug}`;
  if (getRepairRegistryPage(pathname)) {
    return <RepairRegistryPage />;
  }
  // Every kitchen registry URL contains "kitchen"; no legacy page does, so they can skip the legacy lookup.
  if (slug.includes("kitchen")) {
    return <KitchenRegistryPage />;
  }

  // 2. Fall through to legacy SEO pages — unchanged behaviour
  // Unknown slugs show the 404 without loading any page group
  if (!hasSeoPage(slug)) {
    return <NotFound />;
  }

  return <LegacySeoPage slug={slug} />;
}

/** Loads only this slug's page group, then renders the page. Suspends (App-level fallback) while loading. */
function LegacySeoPage({ slug }: { slug: string }) {
  const pageData = use(loadSeoPage(slug));
  return pageData ? <SeoPageTemplate data={pageData} /> : <NotFound />;
}
