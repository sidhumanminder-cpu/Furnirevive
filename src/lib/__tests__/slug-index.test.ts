import { describe, expect, it } from "vitest";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";
import { EXTRA_SLUG_COPIES, SLUG_GROUP, allSeoSlugs, hasSeoPage } from "@/lib/seo-pages/slug-index.ts";
import { GROUP_FILES } from "@/lib/seo-pages/group-files.ts";
import { loadSeoPage } from "@/lib/seo-pages/group-loaders.ts";

// If this fails, run: node --import tsx scripts/gen-slug-index.ts
describe("slug-index matches the real registry", () => {
  const realSlugs = new Set(ALL_SEO_PAGES.map((p) => p.slug));

  it("has no missing and no extra slugs", () => {
    const indexed = new Set(allSeoSlugs());
    expect([...realSlugs].filter((s) => !indexed.has(s))).toEqual([]);
    expect([...indexed].filter((s) => !realSlugs.has(s))).toEqual([]);
  });

  it("has no duplicate slugs", () => {
    const slugs = allSeoSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("lists exactly the registry's repeated slugs as extra copies", () => {
    const seen = new Set<string>();
    const extras: string[] = [];
    for (const p of ALL_SEO_PAGES) {
      if (seen.has(p.slug)) extras.push(p.slug);
      seen.add(p.slug);
    }
    expect([...EXTRA_SLUG_COPIES].sort()).toEqual(extras.sort());
  });

  it("points every slug at the group that holds its page", () => {
    for (const [group, pages] of Object.entries(GROUP_FILES)) {
      for (const page of pages) {
        // A slug repeated across groups is indexed to the group whose copy the site renders
        if (SLUG_GROUP[page.slug] === group) continue;
        expect(realSlugs.has(page.slug)).toBe(true);
      }
    }
    for (const slug of allSeoSlugs()) {
      const group = SLUG_GROUP[slug];
      expect(GROUP_FILES[group]?.some((p) => p.slug === slug), slug).toBe(true);
    }
  });

  it("loads the same page the old registry lookup returned", async () => {
    const lastBySlug = new Map(ALL_SEO_PAGES.map((p) => [p.slug, p]));
    for (const slug of ["sofa-repair-sector-72-gurgaon", "furniture-repair-gurgaon", "sofa-repair-hauz-khas-delhi", "sofa-repair-sector-49-gurgaon"]) {
      if (!lastBySlug.has(slug)) continue;
      expect(await loadSeoPage(slug)).toBe(lastBySlug.get(slug));
    }
  });

  it("unknown slugs are absent and load nothing", async () => {
    expect(hasSeoPage("definitely-not-a-page")).toBe(false);
    expect(await loadSeoPage("definitely-not-a-page")).toBeUndefined();
  });
});
