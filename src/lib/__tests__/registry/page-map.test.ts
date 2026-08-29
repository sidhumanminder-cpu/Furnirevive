/**
 * Tests for PAGE_MAP resolution logic.
 *
 * Simulates what registry-page.tsx does at module scope by building
 * a Map from generatePages() output. Tests that published URLs resolve
 * correctly and draft/unknown URLs return undefined.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { LocalityEntry, ServiceEntry, PageDefinition } from "@/lib/registry/types.ts";

// ─── Test fixtures ──────────────────────────────────────────────────────────

const PUBLISHED_LOCALITY: LocalityEntry = {
  id: "loc_map_published",
  slug: "karol-bagh",
  name: "Karol Bagh",
  cluster: "centralDelhi",
  city: "delhi",
  propertyType: "densely packed commercial and residential area with old DDA flats",
  affluence: "mid",
  premiumLevel: 2,
  density: "very-dense",
  housingAge: "heritage",
  landmarks: ["Karol Bagh Metro", "Ajmal Khan Road"],
  nearby: ["Patel Nagar", "Rajendra Place", "Paharganj"],
  servicePriority: 3,
  contentVersion: 1,
  contentWeight: 70,
  searchPriority: 3,
  status: "published",
};

const DRAFT_LOCALITY: LocalityEntry = {
  id: "loc_map_draft",
  slug: "pitampura",
  name: "Pitampura",
  cluster: "northDelhi",
  city: "delhi",
  propertyType: "DDA residential colony",
  affluence: "mid",
  premiumLevel: 2,
  density: "dense",
  housingAge: "established",
  landmarks: ["Pitampura TV Tower"],
  nearby: ["Rohini", "Shalimar Bagh"],
  servicePriority: 2,
  contentVersion: 1,
  contentWeight: 50,
  searchPriority: 2,
  status: "draft",
};

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
];

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("PAGE_MAP resolution", () => {
  let PAGE_MAP: Map<string, PageDefinition>;
  let pages: readonly PageDefinition[];

  beforeEach(async () => {
    vi.resetModules();

    vi.doMock("@/lib/registry/locality-registry.ts", () => ({
      LOCALITY_REGISTRY: [PUBLISHED_LOCALITY, DRAFT_LOCALITY],
    }));
    vi.doMock("@/lib/registry/service-registry.ts", () => ({
      SERVICE_REGISTRY: MOCK_SERVICES,
    }));

    const { generatePages } = await import("@/lib/registry/generate-pages.ts");
    pages = generatePages();
    PAGE_MAP = new Map(pages.map((p) => [p.urlPath, p]));
  });

  it("known published URL resolves to a PageDefinition", () => {
    // Published delhi locality + sofa-repair → /sofa-repair-karol-bagh
    const result = PAGE_MAP.get("/sofa-repair-karol-bagh");
    expect(result).toBeDefined();
    expect(result!.service).toBe("sofa-repair");
    expect(result!.locality).toBe("karol-bagh");
    expect(result!.city).toBe("delhi");
    expect(result!.intent).toBe("repair");
    expect(result!.urlPath).toBe("/sofa-repair-karol-bagh");
  });

  it("another published URL resolves correctly", () => {
    const result = PAGE_MAP.get("/recliner-repair-karol-bagh");
    expect(result).toBeDefined();
    expect(result!.service).toBe("recliner-repair");
    expect(result!.locality).toBe("karol-bagh");
  });

  it("draft locality URL is not in the map (returns undefined)", () => {
    // Draft locality "pitampura" should NOT appear
    const result = PAGE_MAP.get("/sofa-repair-pitampura");
    expect(result).toBeUndefined();
  });

  it("completely unknown URL returns undefined", () => {
    expect(PAGE_MAP.get("/sofa-repair-nonexistent-area")).toBeUndefined();
    expect(PAGE_MAP.get("/unknown-service-karol-bagh")).toBeUndefined();
    expect(PAGE_MAP.get("/")).toBeUndefined();
    expect(PAGE_MAP.get("")).toBeUndefined();
  });

  it("URL count in map equals generatePages().length", () => {
    expect(PAGE_MAP.size).toBe(pages.length);
  });

  it("all entries in the map have valid PageDefinition shape", () => {
    for (const [urlPath, page] of PAGE_MAP) {
      expect(urlPath).toBe(page.urlPath);
      expect(page).toHaveProperty("service");
      expect(page).toHaveProperty("locality");
      expect(page).toHaveProperty("city");
      expect(page).toHaveProperty("intent");
    }
  });
});
