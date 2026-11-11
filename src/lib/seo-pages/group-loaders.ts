import type { SeoPageData } from "@/lib/seo-constants.ts";
import { SLUG_GROUP, type SeoGroupId } from "./slug-index.ts";

type GroupModule = { PAGES: SeoPageData[] };

// One dynamic import per group so a page view downloads only its own group.
const GROUP_LOADERS: Record<SeoGroupId, () => Promise<GroupModule>> = {
  "hubs": () => import("./groups/hubs.ts"),
  "hubs-ncr": () => import("./groups/hubs-ncr.ts"),
  "hubs-tricity": () => import("./groups/hubs-tricity.ts"),
  "other-1": () => import("./groups/other-1.ts"),
  "other-2": () => import("./groups/other-2.ts"),
  "other-3": () => import("./groups/other-3.ts"),
  "delhi-1": () => import("./groups/delhi-1.ts"),
  "delhi-2": () => import("./groups/delhi-2.ts"),
  "delhi-3": () => import("./groups/delhi-3.ts"),
  "delhi-4": () => import("./groups/delhi-4.ts"),
  "noida-1": () => import("./groups/noida-1.ts"),
  "noida-2": () => import("./groups/noida-2.ts"),
  "gurgaon-1": () => import("./groups/gurgaon-1.ts"),
  "gurgaon-2": () => import("./groups/gurgaon-2.ts"),
  "gurgaon-3": () => import("./groups/gurgaon-3.ts"),
  "faridabad": () => import("./groups/faridabad.ts"),
  "tricity": () => import("./groups/tricity.ts"),
};

const pageCache = new Map<string, Promise<SeoPageData | undefined>>();
const groupCache = new Map<SeoGroupId, Promise<Map<string, SeoPageData>>>();

function loadGroup(id: SeoGroupId): Promise<Map<string, SeoPageData>> {
  const cached = groupCache.get(id);
  if (cached) return cached;
  const promise = GROUP_LOADERS[id]().then((m) => {
    const map = new Map<string, SeoPageData>();
    // Later entries win, matching the old single-registry lookup
    for (const page of m.PAGES) map.set(page.slug, page);
    return map;
  });
  groupCache.set(id, promise);
  return promise;
}

/** Loads one legacy SEO page by slug. Resolves undefined (and loads nothing) when the slug is unknown. */
export function loadSeoPage(slug: string): Promise<SeoPageData | undefined> {
  const cached = pageCache.get(slug);
  if (cached) return cached;
  const group = Object.hasOwn(SLUG_GROUP, slug) ? SLUG_GROUP[slug] : undefined;
  const promise = group ? loadGroup(group).then((map) => map.get(slug)) : Promise.resolve(undefined);
  pageCache.set(slug, promise);
  return promise;
}
