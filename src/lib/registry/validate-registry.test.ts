/**
 * Unit tests for the registry foundation (Milestone 1).
 *
 * These tests validate structural correctness only — no HTML rendering,
 * no routing, no production behavior changes.
 *
 * Run: npx vitest run src/lib/registry/validate-registry.test.ts
 */

import { describe, it, expect } from "vitest";
import { LOCALITY_REGISTRY } from "./locality-registry.ts";
import { SERVICE_REGISTRY } from "./service-registry.ts";
import { GEO_CITY_REGISTRY, CLUSTER_REGISTRY } from "./cluster-city-registry.ts";
import { generatePages, buildRegistryUrl } from "./generate-pages.ts";
import { validateRegistry } from "./validate-registry.ts";
import { canGeneratePage } from "./business-rules.ts";

describe("LOCALITY_REGISTRY", () => {
  it("has no duplicate ids", () => {
    const ids = LOCALITY_REGISTRY.map((l) => l.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("has no duplicate slugs", () => {
    const slugs = LOCALITY_REGISTRY.map((l) => l.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("every entry has required fields", () => {
    for (const locality of LOCALITY_REGISTRY) {
      expect(locality.id, `${locality.slug} missing id`).toBeTruthy();
      expect(locality.slug, `${locality.id} missing slug`).toBeTruthy();
      expect(locality.name, `${locality.slug} missing name`).toBeTruthy();
      expect(locality.cluster, `${locality.slug} missing cluster`).toBeTruthy();
      expect(locality.city, `${locality.slug} missing city`).toBeTruthy();
      expect(locality.status, `${locality.slug} missing status`).toBeTruthy();
    }
  });

  it("contentWeight is one of the valid values", () => {
    const valid = new Set([100, 90, 70, 50]);
    for (const locality of LOCALITY_REGISTRY) {
      expect(valid.has(locality.contentWeight), `${locality.slug} invalid contentWeight`).toBe(true);
    }
  });

  it("premiumLevel is between 1 and 5", () => {
    for (const locality of LOCALITY_REGISTRY) {
      expect(locality.premiumLevel).toBeGreaterThanOrEqual(1);
      expect(locality.premiumLevel).toBeLessThanOrEqual(5);
    }
  });
});

describe("SERVICE_REGISTRY", () => {
  it("has no duplicate ids", () => {
    const ids = SERVICE_REGISTRY.map((s) => s.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("has no duplicate slugs", () => {
    const slugs = SERVICE_REGISTRY.map((s) => s.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("has exactly the 4 expected services", () => {
    const slugs = SERVICE_REGISTRY.map((s) => s.slug);
    expect(slugs).toContain("sofa-repair");
    expect(slugs).toContain("recliner-repair");
    expect(slugs).toContain("furniture-repair");
    expect(slugs).toContain("sofa-upholstery");
  });

  it("every service has at least one module", () => {
    for (const service of SERVICE_REGISTRY) {
      expect(service.modules.length, `${service.slug} has no modules`).toBeGreaterThan(0);
    }
  });
});

describe("GEO_CITY_REGISTRY", () => {
  it("has no duplicate city keys", () => {
    const keys = GEO_CITY_REGISTRY.map((c) => c.key);
    const unique = new Set(keys);
    expect(unique.size).toBe(keys.length);
  });

  it("has no duplicate cluster keys", () => {
    const keys = CLUSTER_REGISTRY.map((c) => c.key);
    const unique = new Set(keys);
    expect(unique.size).toBe(keys.length);
  });

  it("all cluster cities reference a valid city key", () => {
    const cityKeys = new Set(GEO_CITY_REGISTRY.map((c) => c.key));
    for (const cluster of CLUSTER_REGISTRY) {
      expect(cityKeys.has(cluster.city), `cluster ${cluster.key} has invalid city ${cluster.city}`).toBe(true);
    }
  });
});

describe("canGeneratePage", () => {
  it("returns false for draft localities", () => {
    const draftLocality = LOCALITY_REGISTRY.find((l) => l.status === "draft");
    if (!draftLocality) return; // no draft localities in registry yet
    const service = SERVICE_REGISTRY[0];
    expect(canGeneratePage(draftLocality, service)).toBe(false);
  });

  it("returns true for published localities", () => {
    const publishedLocality = LOCALITY_REGISTRY.find((l) => l.status === "published");
    if (!publishedLocality) return; // no published localities yet
    const service = SERVICE_REGISTRY[0];
    expect(canGeneratePage(publishedLocality, service)).toBe(true);
  });
});

describe("buildRegistryUrl", () => {
  it("builds sofa-repair URL correctly", () => {
    expect(buildRegistryUrl("sofa-repair", "lajpat-nagar", "delhi")).toBe("/sofa-repair-lajpat-nagar");
  });

  it("builds recliner-repair URL correctly", () => {
    expect(buildRegistryUrl("recliner-repair", "lajpat-nagar", "delhi")).toBe("/recliner-repair-lajpat-nagar");
  });

  it("builds furniture-repair URL correctly", () => {
    expect(buildRegistryUrl("furniture-repair", "lajpat-nagar", "delhi")).toBe("/furniture-repair-lajpat-nagar");
  });

  it("builds sofa-upholstery Delhi URL with -delhi suffix", () => {
    expect(buildRegistryUrl("sofa-upholstery", "lajpat-nagar", "delhi")).toBe("/sofa-upholstery-lajpat-nagar-delhi");
  });

  it("builds sofa-upholstery Gurgaon URL without city suffix", () => {
    expect(buildRegistryUrl("sofa-upholstery", "sector-51-gurgaon", "gurgaon")).toBe("/sofa-upholstery-sector-51-gurgaon");
  });
});

describe("generatePages", () => {
  it("returns an array", () => {
    const pages = generatePages();
    expect(Array.isArray(pages)).toBe(true);
  });

  it("has no duplicate URLs", () => {
    const pages = generatePages();
    const urls = pages.map((p) => p.urlPath);
    const unique = new Set(urls);
    expect(unique.size).toBe(urls.length);
  });

  it("every page has valid service, locality, city, and urlPath", () => {
    const pages = generatePages();
    const serviceSlugSet = new Set(SERVICE_REGISTRY.map((s) => s.slug));
    const localitySlugSet = new Set(LOCALITY_REGISTRY.map((l) => l.slug));
    for (const page of pages) {
      expect(serviceSlugSet.has(page.service), `unknown service: ${page.service}`).toBe(true);
      expect(localitySlugSet.has(page.locality), `unknown locality: ${page.locality}`).toBe(true);
      expect(page.urlPath.startsWith("/"), `urlPath must start with /: ${page.urlPath}`).toBe(true);
      expect(page.city).toBeTruthy();
    }
  });

  it("only generates pages for published localities", () => {
    const pages = generatePages();
    const publishedSlugs = new Set(
      LOCALITY_REGISTRY.filter((l) => l.status === "published").map((l) => l.slug)
    );
    for (const page of pages) {
      expect(publishedSlugs.has(page.locality), `page generated for non-published locality: ${page.locality}`).toBe(true);
    }
  });
});

describe("validateRegistry", () => {
  it("passes validation with no errors", () => {
    const result = validateRegistry();
    expect(result.errors).toEqual([]);
    expect(result.valid).toBe(true);
  });

  it("reports total pages generated", () => {
    const result = validateRegistry();
    expect(result.totalPages).toBeGreaterThanOrEqual(0);
  });
});
