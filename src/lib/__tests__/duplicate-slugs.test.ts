import { describe, expect, it } from "vitest";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";
import { loadSeoPage } from "@/lib/seo-pages/group-loaders.ts";

// The old single registry kept the LAST entry for a repeated slug. The group loader must do the same.
const DUPLICATED_SLUGS = [
  "furniture-repair-rohini",
  "furniture-repair-dwarka-expressway-gurgaon",
  "sofa-repair-dwarka-expressway-gurgaon",
  "sofa-repair-sector-57-gurgaon",
  "sofa-repair-sector-50-gurgaon",
  "sofa-repair-sector-49-gurgaon",
  "sofa-repair-sector-65-gurgaon",
];

describe("duplicate slugs", () => {
  it.each(DUPLICATED_SLUGS)("%s is served from its last registry entry", async (slug) => {
    const entries = ALL_SEO_PAGES.filter((p) => p.slug === slug);
    expect(entries.length).toBeGreaterThan(1);
    const loaded = await loadSeoPage(slug);
    expect(loaded).toBe(entries[entries.length - 1]);
  });
});
