/**
 * Tests that sitemap URL generation logic is consistent with generatePages().
 *
 * Ensures:
 * - Every page's urlPath equals buildRegistryUrl(service, locality, city)
 * - No duplicate URLs
 * - All URLs start with /
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";

// ─── Test fixtures ──────────────────────────────────────────────────────────

const PUBLISHED_LOCALITIES: LocalityEntry[] = [
  {
    id: "loc_sitemap_delhi",
    slug: "green-park",
    name: "Green Park",
    cluster: "southDelhi",
    city: "delhi",
    propertyType: "established residential colony with DDA flats and independent houses",
    affluence: "mid-high",
    premiumLevel: 3,
    density: "medium",
    housingAge: "established",
    landmarks: ["Green Park Metro", "Deer Park"],
    nearby: ["Hauz Khas", "Safdarjung Enclave", "SDA"],
    servicePriority: 4,
    contentVersion: 1,
    contentWeight: 90,
    searchPriority: 4,
    status: "published",
  },
  {
    id: "loc_sitemap_gurgaon",
    slug: "golf-course-road",
    name: "Golf Course Road",
    cluster: "dlfGurgaon",
    city: "gurgaon",
    propertyType: "premium high-rise gated communities and luxury apartments",
    affluence: "ultra-high",
    premiumLevel: 5,
    density: "medium",
    housingAge: "new",
    landmarks: ["DLF Golf Course", "Cyber Hub"],
    nearby: ["DLF Phase 5", "Sector 42", "Sector 54"],
    servicePriority: 5,
    contentVersion: 1,
    contentWeight: 100,
    searchPriority: 5,
    status: "published",
  },
];

const MOCK_SERVICES: ServiceEntry[] = [
  {
    id: "svc_sofa_repair",
    slug: "sofa-repair",
    name: "Sofa Repair",
    description: "Professional sofa repair",
    modules: ["hero:v1", "cta:v1"],
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
    modules: ["hero:v1", "cta:v1"],
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
    modules: ["hero:v1", "cta:v1"],
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
    modules: ["hero:v1", "cta:v1"],
    internalLinkStrategy: { nearby: true, sameService: true, siblingServices: true, parentCluster: true, cityHub: true },
    keywords: ["sofa upholstery"],
    seo: { titleModifier: "Premium Fabric & Leather Reupholstery", metaKeywords: ["fabric change", "foam replacement"], synonyms: ["sofa fabric change", "sofa cover change"], commercialTerms: ["sofa upholstery cost", "sofa reupholstery price"], titleTemplate: "{service} in {locality}, {city} | {titleModifier} | {brand}", metaTemplate: "Need {serviceLower} in {locality}? {brand} provides same-day doorstep service, {keyword1}, {keyword2}, transparent pricing and a 6-month warranty. Call {displayPhone}." },
    features: { luxurySection: false, beforeAfterGallery: false, reviews: true, pricingCalculator: false, aiSummary: false },
  },
];

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("sitemap URL parity with generatePages()", () => {
  beforeEach(() => {
    vi.resetModules();

    vi.doMock("@/lib/registry/locality-registry.ts", () => ({
      LOCALITY_REGISTRY: PUBLISHED_LOCALITIES,
    }));
    vi.doMock("@/lib/registry/service-registry.ts", () => ({
      SERVICE_REGISTRY: MOCK_SERVICES,
    }));
  });

  it("every page's urlPath equals buildRegistryUrl(service, locality, city)", async () => {
    const { generatePages, buildRegistryUrl } = await import("@/lib/registry/generate-pages.ts");
    const pages = generatePages();

    expect(pages.length).toBeGreaterThan(0);

    for (const page of pages) {
      const expectedUrl = buildRegistryUrl(page.service, page.locality, page.city);
      expect(page.urlPath).toBe(expectedUrl);
    }
  });

  it("no duplicate URLs in generatePages() output", async () => {
    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    const pages = generatePages();

    const urls = pages.map((p) => p.urlPath);
    const uniqueUrls = new Set(urls);

    expect(uniqueUrls.size).toBe(urls.length);
  });

  it("all URLs start with /", async () => {
    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    const pages = generatePages();

    for (const page of pages) {
      expect(page.urlPath).toMatch(/^\//);
    }
  });

  it("generates correct number of pages (2 localities × 4 services = 8)", async () => {
    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    const pages = generatePages();
    expect(pages).toHaveLength(8);
  });

  it("Delhi upholstery URL has -delhi suffix, Gurgaon upholstery does not", async () => {
    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    const pages = generatePages();

    const delhiUpholstery = pages.find(
      (p) => p.service === "sofa-upholstery" && p.city === "delhi"
    );
    const gurgaonUpholstery = pages.find(
      (p) => p.service === "sofa-upholstery" && p.city === "gurgaon"
    );

    expect(delhiUpholstery).toBeDefined();
    expect(delhiUpholstery!.urlPath).toMatch(/-delhi$/);

    expect(gurgaonUpholstery).toBeDefined();
    expect(gurgaonUpholstery!.urlPath).not.toMatch(/-delhi$/);
    expect(gurgaonUpholstery!.urlPath).not.toMatch(/-gurgaon$/);
  });
});
