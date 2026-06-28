import { useParams, Navigate } from "react-router-dom";
import SeoPageTemplate from "@/components/seo-page-template.tsx";
import NotFound from "@/pages/NotFound.tsx";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";

/**
 * Dynamic SEO page component.
 * Looks up page data from the central registry by URL slug.
 * Renders the shared SeoPageTemplate if found, otherwise shows 404.
 * Also normalizes slug to lowercase to avoid duplicate-URL issues with Google.
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

  const pageData = getPageBySlug(slug);

  if (!pageData) {
    return <NotFound />;
  }

  return <SeoPageTemplate data={pageData} />;
}
