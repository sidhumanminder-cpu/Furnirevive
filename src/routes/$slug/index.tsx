import { createFileRoute } from "@tanstack/react-router";
import DynamicSeoPage from "@/pages/services/dynamic-seo-page.tsx";
import { withDataTags } from "@/lib/head-data.ts";
import { pageHead } from "./-index.head";
import { loadSlugHead, slugHeadTags } from "./-slug-data.ts";

// Found pages are indexable; these fallbacks only applied to the old client-side 404.
const NOT_FOUND_ONLY = new Set(["robots", "prerender-status-code"]);

export const Route = createFileRoute("/$slug/")({
  staticData: { ownCanonical: true },
  loader: ({ params }) => loadSlugHead(params.slug),
  head: ({ params, loaderData }) => {
    const base = pageHead(params);
    const tags = slugHeadTags(loaderData);
    const meta = (base.meta ?? []).filter(
      (tag) => !(typeof tag.name === "string" && NOT_FOUND_ONLY.has(tag.name)),
    );
    return { ...withDataTags({ meta }, tags.meta), links: tags.links };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DynamicSeoPage />
  );
}
