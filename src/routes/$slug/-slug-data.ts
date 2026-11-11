import { notFound, redirect } from "@tanstack/react-router";
import { RETIRED_SLUG_REDIRECTS } from "@/lib/seo-pages/retired-slugs.ts";
import { canonicalSlug } from "@/lib/seoConfigs/canonical-overrides.ts";

const ORIGIN = "https://furnirevive.com";

export type SlugHead = {
  canonical: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  jsonLd?: unknown;
};

/** Hub pages: same title, description and schema the hub frame sets in the browser. */
async function hubHead(slug: string): Promise<SlugHead | null> {
  const { getHubTarget, SERVICE_HUB_CONFIG } = await import(
    "@/pages/services/service-hub/_lib/hub-config.ts"
  );
  const target = getHubTarget(slug);
  if (!target) return null;
  const [{ buildFaqs, buildHubSchema }, { BUSINESS }] = await Promise.all([
    import("@/pages/services/service-hub/_components/HubSections.tsx"),
    import("@/lib/business-config.ts"),
  ]);
  const config = SERVICE_HUB_CONFIG[target.service];
  const area = target.area.label;
  return {
    canonical: `${ORIGIN}/${target.slug}`,
    title: `${config.name} in ${area} | ${config.headlinePrice} | FurniRevive`,
    description: `${config.name} in ${area}: doorstep service, ${config.headlinePrice}, free inspection, 6-month warranty. Call ${BUSINESS.displayPhone}.`,
    jsonLd: buildHubSchema(target, buildFaqs(target)),
  };
}

/** Registry repair pages: same title and description the registry template builds. */
async function repairHead(slug: string): Promise<SlugHead | null | undefined> {
  const { getRepairRegistryPage } = await import("@/lib/registry/repair-pages.ts");
  const pageDef = getRepairRegistryPage(`/${slug}`);
  if (!pageDef) return undefined;
  const [{ LOCALITY_REGISTRY }, { COMMERCIAL_LOCALITY_REGISTRY }, { SERVICE_REGISTRY }] =
    await Promise.all([
      import("@/lib/registry/locality-registry.ts"),
      import("@/lib/registry/commercial-locality-registry.ts"),
      import("@/lib/registry/service-registry.ts"),
    ]);
  const locality =
    LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality) ??
    COMMERCIAL_LOCALITY_REGISTRY.find((l) => l.slug === pageDef.locality);
  const service = SERVICE_REGISTRY.find((s) => s.slug === pageDef.service);
  if (!locality || !service) return null;
  const [{ buildRegistryTitle, buildRegistryDescription }, { CITY_DISPLAY_NAMES }, { BUSINESS }] =
    await Promise.all([
      import("@/components/registry-page-template.tsx"),
      import("@/lib/content-engine/content-pools.ts"),
      import("@/lib/business-config.ts"),
    ]);
  return {
    canonical: `${ORIGIN}/${canonicalSlug(slug)}`,
    title: buildRegistryTitle(service, locality.name, CITY_DISPLAY_NAMES[locality.city]),
    description: buildRegistryDescription(
      service,
      service.name.toLowerCase(),
      locality.name,
      BUSINESS.name,
      BUSINESS.displayPhone,
    ),
  };
}

/** Kitchen registry pages: the page's own template sets the rest of its tags in the browser. */
async function kitchenHead(slug: string): Promise<SlugHead | null> {
  const { generatePages } = await import("@/lib/registry/generate-pages.ts");
  const exists = generatePages().some((p) => p.urlPath === `/${slug}`);
  return exists ? { canonical: `${ORIGIN}/${canonicalSlug(slug)}` } : null;
}

/** Legacy SEO pages: same tags the SEO page template sets in the browser. */
async function legacyHead(slug: string): Promise<SlugHead | null> {
  const { hasSeoPage } = await import("@/lib/seo-pages/slug-index.ts");
  if (!hasSeoPage(slug)) return null;
  const { loadSeoPage } = await import("@/lib/seo-pages/group-loaders.ts");
  const data = await loadSeoPage(slug);
  if (!data) return null;
  const [{ buildSchemas }, { getUniqueFaq }] = await Promise.all([
    import("@/lib/seo-schema.ts"),
    import("@/lib/seo-pages/content-uniqueness.ts"),
  ]);
  const faqs = data.isHubPage === true ? data.faqs : [...data.faqs, getUniqueFaq(data.slug)];
  return {
    canonical: `${ORIGIN}/${canonicalSlug(data.slug)}`,
    title: data.title,
    description: data.metaDescription,
    keywords: data.keywords.length > 0 ? data.keywords.join(", ") : undefined,
    jsonLd: buildSchemas({ ...data, faqs }) ?? undefined,
  };
}

/**
 * Resolves a top-level slug the way the page does: redirects retired and
 * mixed-case slugs, throws notFound() for unknown ones, and returns the tags.
 */
export async function loadSlugHead(slug: string): Promise<SlugHead> {
  const lowerSlug = slug.toLowerCase();
  if (slug !== lowerSlug) throw redirect({ href: `/${lowerSlug}`, statusCode: 301 });
  const retiredTarget = RETIRED_SLUG_REDIRECTS[lowerSlug];
  if (retiredTarget) throw redirect({ href: `/${retiredTarget}`, statusCode: 301 });

  const hub = await hubHead(slug);
  if (hub) return hub;
  const repair = await repairHead(slug);
  if (repair === null) throw notFound();
  if (repair) return repair;
  const page = slug.includes("kitchen") ? await kitchenHead(slug) : await legacyHead(slug);
  if (!page) throw notFound();
  return page;
}

/** head() tags for the loaded slug. */
export function slugHeadTags(head: SlugHead | undefined) {
  if (!head) return { meta: [], links: [] };
  const meta: Array<Record<string, unknown>> = [];
  if (head.title) {
    meta.push({ title: head.title }, { property: "og:title", content: head.title });
  }
  if (head.description) {
    meta.push(
      { name: "description", content: head.description },
      { property: "og:description", content: head.description },
    );
  }
  if (head.keywords) meta.push({ name: "keywords", content: head.keywords });
  meta.push({ property: "og:url", content: head.canonical });
  if (head.jsonLd) meta.push({ "script:ld+json": head.jsonLd });
  return { meta, links: [{ rel: "canonical", href: head.canonical }] };
}
