/**
 * Tests for generatePages() and buildRegistryUrl() from the registry pipeline.
 *
 * Uses vi.mock to isolate from the real LOCALITY_REGISTRY/SERVICE_REGISTRY,
 * ensuring tests don't depend on the current registry state.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";

// ─── Test fixtures ──────────────────────────────────────────────────────────

const PUBLISHED_LOCALITY: LocalityEntry = {
  id: "loc_test_published",
  slug: "vasant-vihar",
  name: "Vasant Vihar",
  cluster: "southDelhi",
  city: "delhi",
  propertyType: "premium residential area with luxury villas and embassies",
  affluence: "high",
  premiumLevel: 4,
  density: "sparse",
  housingAge: "established",
  landmarks: ["Vasant Vihar Market", "Priya Cinema"],
  nearby: ["Munirka", "RK Puram", "Shantipath"],
  servicePriority: 5,
  contentVersion: 1,
  contentWeight: 100,
  searchPriority: 5,
  status: "published",
};

const DRAFT_LOCALITY: LocalityEntry = {
  id: "loc_test_draft",
  slug: "rohini-sector-9",
  name: "Rohini Sector 9",
  cluster: "northDelhi",
  city: "delhi",
  propertyType: "DDA residential colony with multi-storey flats",
  affluence: "mid",
  premiumLevel: 2,
  density: "dense",
  housingAge: "established",
  landmarks: ["Rohini West Metro"],
  nearby: ["Rohini Sector 8", "Rohini Sector 7"],
  servicePriority: 3,
  contentVersion: 1,
  contentWeight: 70,
  searchPriority: 3,
  status: "draft",
};

const GURGAON_PUBLISHED_LOCALITY: LocalityEntry = {
  id: "loc_test_gurgaon",
  slug: "dlf-phase-1",
  name: "DLF Phase 1",
  cluster: "dlfGurgaon",
  city: "gurgaon",
  propertyType: "premium gated villa community in DLF",
  affluence: "ultra-high",
  premiumLevel: 5,
  density: "sparse",
  housingAge: "mid-age",
  landmarks: ["DLF City Court", "DLF Golf Course"],
  nearby: ["DLF Phase 2", "DLF Phase 3", "Sushant Lok"],
  servicePriority: 5,
  contentVersion: 1,
  contentWeight: 100,
  searchPriority: 5,
  status: "published",
};

const MOCK_SERVICES: ServiceEntry[] = [
  {
    id: "svc_sofa_repair",
    slug: "sofa-repair",
    name: "Sofa Repair",
    description: "Professional sofa repair",
    modules: ["hero:v1", "intro:v1", "pricing:v1", "repair-types:v1", "brands:v1", "faq:v1", "nearby:v1", "servicehub:v1", "cta:v1"],
    internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
    keywords: ["sofa repair"],
    seo: { titleModifier: "Same-Day Sofa Repair at Home", metaKeywords: ["foam replacement", "spring repair"], synonyms: ["sofa reupholstery", "couch repair"], commercialTerms: ["sofa repair cost", "sofa repair price"], titleTemplate: "{service} in {locality}, {city} | {titleModifier} | {brand}", metaTemplate: "Need {serviceLower} in {locality}? {brand} provides same-day doorstep service, {keyword1}, {keyword2}, transparent pricing and a 6-month warranty. Call {displayPhone}." },
    features: { luxurySection: false, beforeAfterGallery: false, reviews: true, pricingCalculator: false, aiSummary: false },
  },
  {
    id: "svc_recliner_repair",
    slug: "recliner-repair",
    name: "Recliner Repair",
    description: "Specialist recliner repair",
    modules: ["hero:v1", "intro:v1", "pricing:v1", "repair-types:v1", "brands:v1", "faq:v1", "nearby:v1", "servicehub:v1", "cta:v1"],
    internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
    keywords: ["recliner repair"],
    seo: { titleModifier: "Electric & Manual Recliner Specialists", metaKeywords: ["motor repair", "mechanism repair"], synonyms: ["electric recliner repair", "recliner mechanism fix"], commercialTerms: ["recliner repair cost", "recliner repair price"], titleTemplate: "{service} in {locality}, {city} | {titleModifier} | {brand}", metaTemplate: "Need {serviceLower} in {locality}? {brand} provides same-day doorstep service, {keyword1}, {keyword2}, transparent pricing and a 6-month warranty. Call {displayPhone}." },
    features: { luxurySection: false, beforeAfterGallery: false, reviews: true, pricingCalculator: false, aiSummary: false },
  },
  {
    id: "svc_furniture_repair",
    slug: "furniture-repair",
    name: "Furniture Repair",
    description: "Comprehensive furniture repair",
    modules: ["hero:v1", "intro:v1", "pricing:v1", "repair-types:v1", "brands:v1", "faq:v1", "nearby:v1", "servicehub:v1", "cta:v1"],
    internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
    keywords: ["furniture repair"],
    seo: { titleModifier: "All Furniture Repaired at Home", metaKeywords: ["wooden furniture repair", "sofa repair"], synonyms: ["home furniture repair", "carpenter service"], commercialTerms: ["furniture repair cost", "furniture repair price"], titleTemplate: "{service} in {locality}, {city} | {titleModifier} | {brand}", metaTemplate: "Need {serviceLower} in {locality}? {brand} provides same-day doorstep service, {keyword1}, {keyword2}, transparent pricing and a 6-month warranty. Call {displayPhone}." },
    features: { luxurySection: false, beforeAfterGallery: false, reviews: true, pricingCalculator: false, aiSummary: false },
  },
  {
    id: "svc_sofa_upholstery",
    slug: "sofa-upholstery",
    name: "Sofa Upholstery",
    description: "Full sofa reupholstery service",
    modules: ["hero:v1", "intro:v1", "pricing:v1", "repair-types:v1", "brands:v1", "faq:v1", "nearby:v1", "servicehub:v1", "cta:v1"],
    internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
    keywords: ["sofa upholstery"],
    seo: { titleModifier: "Premium Fabric & Leather Reupholstery", metaKeywords: ["fabric change", "foam replacement"], synonyms: ["sofa fabric change", "sofa cover change"], commercialTerms: ["sofa upholstery cost", "sofa reupholstery price"], titleTemplate: "{service} in {locality}, {city} | {titleModifier} | {brand}", metaTemplate: "Need {serviceLower} in {locality}? {brand} provides same-day doorstep service, {keyword1}, {keyword2}, transparent pricing and a 6-month warranty. Call {displayPhone}." },
    features: { luxurySection: false, beforeAfterGallery: false, reviews: true, pricingCalculator: false, aiSummary: false },
  },
];

// ─── Tests for buildRegistryUrl (pure function, no mocking needed) ─────────

describe("buildRegistryUrl", () => {
  // Import directly — this function doesn't depend on registries
  let buildRegistryUrl: typeof import("@/lib/registry/generate-pages.ts").buildRegistryUrl;

  beforeEach(async () => {
    const mod = await import("@/lib/registry/generate-pages.ts");
    buildRegistryUrl = mod.buildRegistryUrl;
  });

  it("sofa-repair + any slug → /sofa-repair-{slug}", () => {
    expect(buildRegistryUrl("sofa-repair", "vasant-vihar", "delhi")).toBe("/sofa-repair-vasant-vihar");
    expect(buildRegistryUrl("sofa-repair", "rohini-sector-9", "gurgaon")).toBe("/sofa-repair-rohini-sector-9");
  });

  it("recliner-repair → /recliner-repair-{slug}", () => {
    expect(buildRegistryUrl("recliner-repair", "lajpat-nagar", "delhi")).toBe("/recliner-repair-lajpat-nagar");
    expect(buildRegistryUrl("recliner-repair", "dlf-phase-1", "gurgaon")).toBe("/recliner-repair-dlf-phase-1");
  });

  it("furniture-repair → /furniture-repair-{slug}", () => {
    expect(buildRegistryUrl("furniture-repair", "sector-62", "noida")).toBe("/furniture-repair-sector-62");
    expect(buildRegistryUrl("furniture-repair", "indirapuram", "ghaziabad")).toBe("/furniture-repair-indirapuram");
  });

  it("sofa-upholstery + city delhi → /sofa-upholstery-{slug}-delhi", () => {
    expect(buildRegistryUrl("sofa-upholstery", "vasant-vihar", "delhi")).toBe("/sofa-upholstery-vasant-vihar-delhi");
    expect(buildRegistryUrl("sofa-upholstery", "lajpat-nagar", "delhi")).toBe("/sofa-upholstery-lajpat-nagar-delhi");
  });

  it("sofa-upholstery + city gurgaon → /sofa-upholstery-{slug} (no -delhi suffix)", () => {
    expect(buildRegistryUrl("sofa-upholstery", "dlf-phase-1", "gurgaon")).toBe("/sofa-upholstery-dlf-phase-1");
  });

  it("sofa-upholstery + city noida → /sofa-upholstery-{slug} (no suffix)", () => {
    expect(buildRegistryUrl("sofa-upholstery", "sector-62", "noida")).toBe("/sofa-upholstery-sector-62");
  });

  it("all URLs start with /", () => {
    const slugs = ["vasant-vihar", "sector-62", "dlf-phase-1"];
    const services = ["sofa-repair", "recliner-repair", "furniture-repair", "sofa-upholstery"] as const;
    const cities = ["delhi", "gurgaon", "noida"] as const;

    for (const service of services) {
      for (const slug of slugs) {
        for (const city of cities) {
          expect(buildRegistryUrl(service, slug, city)).toMatch(/^\//);
        }
      }
    }
  });
});

// ─── Tests for generatePages (requires mocked registries) ──────────────────

describe("generatePages", () => {
  describe("all-draft registry → empty array", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("returns empty array when all localities are draft", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [DRAFT_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();
      expect(pages).toHaveLength(0);
    });
  });

  describe("one published locality × 4 services → 4 pages", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("returns 4 pages for one published locality with 4 services", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [PUBLISHED_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();
      expect(pages).toHaveLength(4);
    });
  });

  describe("mixed draft + published → only published pages returned", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("filters out draft localities", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [PUBLISHED_LOCALITY, DRAFT_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();

      // Only published locality generates pages: 1 locality × 4 services = 4
      expect(pages).toHaveLength(4);
      for (const page of pages) {
        expect(page.locality).toBe(PUBLISHED_LOCALITY.slug);
      }
    });
  });

  describe("page shape and field correctness", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("each returned page has urlPath, service, locality, city, intent fields", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [PUBLISHED_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();

      for (const page of pages) {
        expect(page).toHaveProperty("urlPath");
        expect(page).toHaveProperty("service");
        expect(page).toHaveProperty("locality");
        expect(page).toHaveProperty("city");
        expect(page).toHaveProperty("intent");

        expect(typeof page.urlPath).toBe("string");
        expect(typeof page.service).toBe("string");
        expect(typeof page.locality).toBe("string");
        expect(typeof page.city).toBe("string");
        expect(typeof page.intent).toBe("string");
      }
    });

    it("intent is always 'repair' in milestone 1 scope", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [PUBLISHED_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();

      for (const page of pages) {
        expect(page.intent).toBe("repair");
      }
    });
  });

  describe("URL patterns match buildRegistryUrl output", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("each page's urlPath matches buildRegistryUrl(service, locality, city)", async () => {
      vi.doMock("@/lib/registry/locality-registry.ts", () => ({
        LOCALITY_REGISTRY: [PUBLISHED_LOCALITY, GURGAON_PUBLISHED_LOCALITY],
      }));
      vi.doMock("@/lib/registry/service-registry.ts", () => ({
        SERVICE_REGISTRY: MOCK_SERVICES,
      }));

      const { generatePages, buildRegistryUrl } = await import("@/lib/registry/generate-pages.ts");
      const pages = generatePages();

      for (const page of pages) {
        const expectedUrl = buildRegistryUrl(page.service, page.locality, page.city);
        expect(page.urlPath).toBe(expectedUrl);
      }
    });
  });
});

// ─── Tests for canGeneratePage (business rules) ─────────────────────────────

describe("canGeneratePage", () => {
  let canGeneratePage: typeof import("@/lib/registry/business-rules.ts").canGeneratePage;
  const dummyService = MOCK_SERVICES[0];

  beforeEach(async () => {
    const mod = await import("@/lib/registry/business-rules.ts");
    canGeneratePage = mod.canGeneratePage;
  });

  it("status: 'published' → true", () => {
    const locality = { ...PUBLISHED_LOCALITY, status: "published" as const };
    expect(canGeneratePage(locality, dummyService)).toBe(true);
  });

  it("status: 'draft' → false", () => {
    const locality = { ...PUBLISHED_LOCALITY, status: "draft" as const };
    expect(canGeneratePage(locality, dummyService)).toBe(false);
  });

  it("status: 'noindex' → false", () => {
    const locality = { ...PUBLISHED_LOCALITY, status: "noindex" as const };
    expect(canGeneratePage(locality, dummyService)).toBe(false);
  });

  it("status: 'deprecated' → false", () => {
    const locality = { ...PUBLISHED_LOCALITY, status: "deprecated" as const };
    expect(canGeneratePage(locality, dummyService)).toBe(false);
  });
});

// ─── Registry immutability ──────────────────────────────────────────────────

describe("registry immutability", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("generatePages() does not mutate LOCALITY_REGISTRY or SERVICE_REGISTRY", async () => {
    const localityRegistry = [PUBLISHED_LOCALITY, DRAFT_LOCALITY];
    const serviceRegistry = [...MOCK_SERVICES];

    const localityLengthBefore = localityRegistry.length;
    const serviceLengthBefore = serviceRegistry.length;
    const localityRefsBefore = localityRegistry.map((l) => l);
    const serviceRefsBefore = serviceRegistry.map((s) => s);

    vi.doMock("@/lib/registry/locality-registry.ts", () => ({
      LOCALITY_REGISTRY: localityRegistry,
    }));
    vi.doMock("@/lib/registry/service-registry.ts", () => ({
      SERVICE_REGISTRY: serviceRegistry,
    }));

    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    generatePages();

    // Length unchanged
    expect(localityRegistry).toHaveLength(localityLengthBefore);
    expect(serviceRegistry).toHaveLength(serviceLengthBefore);

    // References unchanged
    for (let i = 0; i < localityRegistry.length; i++) {
      expect(localityRegistry[i]).toBe(localityRefsBefore[i]);
    }
    for (let i = 0; i < serviceRegistry.length; i++) {
      expect(serviceRegistry[i]).toBe(serviceRefsBefore[i]);
    }
  });
});
