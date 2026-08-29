/**
 * location-graph.test.ts
 *
 * Regression test suite for the Location Graph subsystem.
 *
 * Key invariant tested:
 *   buildLocalityServiceUrl(serviceKey, localitySlug) must produce the exact
 *   same format as the canonical href stored in the page registry.
 *   Any URL-format drift will cause pageExists() to silently return false,
 *   breaking the registry-gated NearbyAreasSection.
 */

import { describe, it, expect } from "vitest";
import {
  buildLocalityServiceUrl,
  buildCityServiceUrl,
  pageExists,
  getExistingNeighbourLinks,
  getFeaturedLocalities,
  resolveServiceKey,
  resolvePageType,
} from "./location-graph.ts";
import { ALL_SEO_PAGES } from "@/lib/seo-pages/registry.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

// ─── resolveServiceKey ───────────────────────────────────────────────────────

describe("resolveServiceKey", () => {
  it("returns explicit serviceKey when provided", () => {
    expect(
      resolveServiceKey({ slug: "anything", title: "", metaDescription: "", h1: "", relatedPages: [], serviceKey: "leather-sofa-repair" } as unknown as SeoPageData)
    ).toBe("leather-sofa-repair");
  });

  it("infers from slug prefix when no explicit key", () => {
    expect(
      resolveServiceKey({ slug: "sofa-repair-rohini", title: "", metaDescription: "", h1: "", relatedPages: [] } as unknown as SeoPageData)
    ).toBe("sofa-repair");
  });

  it("returns null for an unresolvable slug", () => {
    expect(
      resolveServiceKey({ slug: "blog-post-about-cats", title: "", metaDescription: "", h1: "", relatedPages: [] } as unknown as SeoPageData)
    ).toBeNull();
  });
});

// ─── resolvePageType ─────────────────────────────────────────────────────────

describe("resolvePageType", () => {
  it("returns explicit pageType when provided", () => {
    expect(
      resolvePageType({ slug: "anything", title: "", metaDescription: "", h1: "", relatedPages: [], pageType: "blog" } as unknown as SeoPageData)
    ).toBe("blog");
  });

  it("returns 'city' when cityKey is present", () => {
    expect(
      resolvePageType({ slug: "sofa-repair-delhi", title: "", metaDescription: "", h1: "", relatedPages: [], cityKey: "delhi" } as unknown as SeoPageData)
    ).toBe("city");
  });

  it("returns 'service' when serviceKey is present", () => {
    expect(
      resolvePageType({ slug: "leather-sofa-repair-delhi", title: "", metaDescription: "", h1: "", relatedPages: [], serviceKey: "leather-sofa-repair" } as unknown as SeoPageData)
    ).toBe("service");
  });

  it("defaults to 'locality' for a standard locality slug", () => {
    expect(
      resolvePageType({ slug: "sofa-repair-rohini", title: "", metaDescription: "", h1: "", relatedPages: [] } as unknown as SeoPageData)
    ).toBe("locality");
  });
});

// ─── buildLocalityServiceUrl ─────────────────────────────────────────────────

describe("buildLocalityServiceUrl", () => {
  it("builds correct href for sofa-repair", () => {
    expect(buildLocalityServiceUrl("sofa-repair", "pitampura")).toBe("/sofa-repair-pitampura");
  });

  it("builds correct href for leather-sofa-repair", () => {
    expect(buildLocalityServiceUrl("leather-sofa-repair", "rohini")).toBe("/leather-sofa-repair-rohini");
  });

  it("strips existing service prefix to avoid double-prefixing", () => {
    expect(buildLocalityServiceUrl("sofa-repair", "sofa-repair-rohini")).toBe("/sofa-repair-rohini");
  });

  /**
   * REGISTRY FORMAT INVARIANT
   *
   * Every sofa-repair locality page in the registry must be reachable via
   * buildLocalityServiceUrl("sofa-repair", localitySlug).
   *
   * If this test fails, a URL format change has caused a drift between
   * buildLocalityServiceUrl() and the registry canonical hrefs, which will
   * silently break all registry-gated internal links.
   */
  it("output matches canonical registry href format for sofa-repair locality pages", () => {
    const sofaLocalityPages = ALL_SEO_PAGES.filter(
      (p) => p.slug.startsWith("sofa-repair-") && !["sofa-repair-delhi", "sofa-repair-noida", "sofa-repair-gurgaon", "sofa-repair-ghaziabad", "sofa-repair-faridabad"].includes(p.slug)
    );

    // Test a representative sample (first 10) to keep the suite fast
    const sample = sofaLocalityPages.slice(0, 10);
    for (const page of sample) {
      const localityPart = page.slug.replace(/^sofa-repair-/, "");
      const built = buildLocalityServiceUrl("sofa-repair", localityPart);
      expect(built).toBe(`/${page.slug}`);
    }
  });
});

// ─── buildCityServiceUrl ─────────────────────────────────────────────────────

describe("buildCityServiceUrl", () => {
  it("builds correct href for a city", () => {
    expect(buildCityServiceUrl("sofa-repair", "noida")).toBe("/sofa-repair-noida");
  });

  it("builds correct href for leather-sofa-repair in delhi", () => {
    expect(buildCityServiceUrl("leather-sofa-repair", "delhi")).toBe("/leather-sofa-repair-delhi");
  });
});

// ─── pageExists ──────────────────────────────────────────────────────────────

describe("pageExists", () => {
  it("returns true for a known registry page", () => {
    // Pick the first page in the registry as a known-good href
    const firstPage = ALL_SEO_PAGES[0];
    expect(pageExists(`/${firstPage.slug}`)).toBe(true);
  });

  it("returns false for a page that does not exist", () => {
    expect(pageExists("/sofa-repair-imaginary-colony-xyz-9999")).toBe(false);
  });

  it("returns false for a malformed href", () => {
    expect(pageExists("")).toBe(false);
    expect(pageExists("not-a-href")).toBe(false);
    expect(pageExists("/")).toBe(false);
  });

  it("is case-sensitive (registry hrefs are lowercase)", () => {
    const firstPage = ALL_SEO_PAGES[0];
    const upper = `/${firstPage.slug.toUpperCase()}`;
    // Only assert false if the slug actually has lowercase letters
    if (upper !== `/${firstPage.slug}`) {
      expect(pageExists(upper)).toBe(false);
    }
  });
});

// ─── getExistingNeighbourLinks ───────────────────────────────────────────────

describe("getExistingNeighbourLinks", () => {
  it("returns only registry-verified neighbours", () => {
    // sofa-repair-pitampura exists; verify all returned links also exist
    const links = getExistingNeighbourLinks("sofa-repair-pitampura", "sofa-repair");
    for (const link of links) {
      expect(pageExists(link.href)).toBe(true);
    }
  });

  it("silently excludes non-existent neighbours (mixed registry scenario)", () => {
    // sofa-repair-rohini has adjacentAreas including some that may not exist
    const links = getExistingNeighbourLinks("sofa-repair-rohini", "sofa-repair");
    // All returned links must exist
    for (const link of links) {
      expect(pageExists(link.href)).toBe(true);
    }
    // Should never throw — just return fewer links
    expect(Array.isArray(links)).toBe(true);
  });

  it("returns empty array when no neighbours exist in the registry", () => {
    // Use a slug whose adjacentAreas are all fictional
    // getLocalityInfo falls back gracefully for unknown slugs
    const links = getExistingNeighbourLinks("sofa-repair-totally-unknown-area", "sofa-repair");
    expect(links).toEqual([]);
  });

  it("never returns a link that would 404", () => {
    const links = getExistingNeighbourLinks("sofa-repair-rohini", "sofa-repair");
    const hrefs = links.map((l) => l.href);
    const allExist = hrefs.every((href) => pageExists(href));
    expect(allExist).toBe(true);
  });
});

// ─── getFeaturedLocalities ───────────────────────────────────────────────────

describe("getFeaturedLocalities", () => {
  it("returns featured localities for delhi", () => {
    const result = getFeaturedLocalities("delhi");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((l) => typeof l.name === "string")).toBe(true);
    expect(result.every((l) => l.href.startsWith("/"))).toBe(true);
  });

  it("respects maxCount", () => {
    const result = getFeaturedLocalities("noida", 3);
    expect(result.length).toBeLessThanOrEqual(3);
  });

  it("returns empty array for unknown city key", () => {
    const result = getFeaturedLocalities("mumbai" as unknown as "delhi");
    expect(result).toEqual([]);
  });
});
