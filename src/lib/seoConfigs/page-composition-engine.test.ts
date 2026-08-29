/**
 * Page Composition Engine — Tests
 *
 * Success criteria:
 * 1. All 7 fields resolve for a well-known locality + service
 * 2. Manifest shape + engine version literals match exported constants
 * 3. Determinism — identical output on two calls with same input
 * 4. Partial resilience — unknown locality/service returns valid ResolvedSeoPage, no throw
 * 5. Engine version type safety — manifest.engines fields are literal 1, not number
 */

import { describe, it, expect } from "vitest";
import {
  composePage,
  COMPOSITION_VERSION,
  HERO_ENGINE_VERSION,
  GALLERY_ENGINE_VERSION,
  FAQ_ENGINE_VERSION,
  AUTHORITY_ENGINE_VERSION,
  REPAIR_SCENARIO_ENGINE_VERSION,
  NEARBY_AREAS_ENGINE_VERSION,
  type ResolvedSeoPage,
  type CompositionManifest,
} from "./page-composition-engine.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

// ─── Minimal SeoPageData factory ─────────────────────────────────────────────

function makePageData(slug: string): SeoPageData {
  return {
    slug,
    title: "Test Page",
    metaDescription: "Test description",
    h1: "Test H1",
    heroSubtitle: "Test subtitle",
    intro: ["Intro paragraph."],
    whyChoose: [{ title: "Why", description: "Because" }],
    process: [{ step: "Step 1", description: "Do this" }],
    benefits: ["Benefit one"],
    contentSections: [{ heading: "Section", body: ["Body text"] }],
    relatedPages: [],
  } as unknown as SeoPageData;
}

// ─── Test 1: All fields resolve for a known locality + service ────────────────

describe("composePage — known locality", () => {
  const data = makePageData("sofa-repair-rohini");
  let result: ResolvedSeoPage;

  it("returns without throwing", () => {
    expect(() => {
      result = composePage(data);
    }).not.toThrow();
  });

  it("resolves slug", () => {
    result = composePage(data);
    expect(result.slug).toBe("sofa-repair-rohini");
  });

  it("resolves serviceKey", () => {
    result = composePage(data);
    expect(result.serviceKey).toBe("sofa-repair");
  });

  it("resolves hero (HeroImageRecord or null — not undefined)", () => {
    result = composePage(data);
    // hero can be null if no registry match, but must not be undefined
    expect(result.hero).not.toBeUndefined();
  });

  it("resolves gallery as an array", () => {
    result = composePage(data);
    expect(Array.isArray(result.gallery)).toBe(true);
  });

  it("resolves faqs as a non-empty array for a known locality", () => {
    result = composePage(data);
    expect(Array.isArray(result.faqs)).toBe(true);
    expect(result.faqs.length).toBeGreaterThan(0);
  });

  it("resolves authorityLinks as an array", () => {
    result = composePage(data);
    expect(Array.isArray(result.authorityLinks)).toBe(true);
  });

  it("resolves repairScenario (object or null — not undefined)", () => {
    result = composePage(data);
    expect(result.repairScenario).not.toBeUndefined();
  });

  it("resolves nearbyAreas as an array", () => {
    result = composePage(data);
    expect(Array.isArray(result.nearbyAreas)).toBe(true);
  });

  it("attaches a manifest", () => {
    result = composePage(data);
    expect(result.manifest).toBeDefined();
  });
});

// ─── Test 2: Manifest shape and engine version literals ───────────────────────

describe("composePage — manifest", () => {
  const result = composePage(makePageData("sofa-repair-pitampura"));
  const manifest: CompositionManifest = result.manifest;

  it("compositionVersion matches COMPOSITION_VERSION constant", () => {
    expect(manifest.compositionVersion).toBe(COMPOSITION_VERSION);
  });

  it("generatedAt is a valid ISO 8601 string", () => {
    expect(() => new Date(manifest.generatedAt)).not.toThrow();
    expect(new Date(manifest.generatedAt).toISOString()).toBe(manifest.generatedAt);
  });

  it("manifest.engines.hero matches HERO_ENGINE_VERSION", () => {
    expect(manifest.engines.hero).toBe(HERO_ENGINE_VERSION);
  });

  it("manifest.engines.gallery matches GALLERY_ENGINE_VERSION", () => {
    expect(manifest.engines.gallery).toBe(GALLERY_ENGINE_VERSION);
  });

  it("manifest.engines.faq matches FAQ_ENGINE_VERSION", () => {
    expect(manifest.engines.faq).toBe(FAQ_ENGINE_VERSION);
  });

  it("manifest.engines.authority matches AUTHORITY_ENGINE_VERSION", () => {
    expect(manifest.engines.authority).toBe(AUTHORITY_ENGINE_VERSION);
  });

  it("manifest.engines.repairScenario matches REPAIR_SCENARIO_ENGINE_VERSION", () => {
    expect(manifest.engines.repairScenario).toBe(REPAIR_SCENARIO_ENGINE_VERSION);
  });

  it("manifest.engines.nearbyAreas matches NEARBY_AREAS_ENGINE_VERSION", () => {
    expect(manifest.engines.nearbyAreas).toBe(NEARBY_AREAS_ENGINE_VERSION);
  });
});

// ─── Test 3: Determinism ──────────────────────────────────────────────────────

describe("composePage — determinism", () => {
  it("returns structurally identical output on two calls with the same input", () => {
    const data = makePageData("sofa-repair-karol-bagh");
    const first = composePage(data);
    const second = composePage(data);

    expect(first.slug).toBe(second.slug);
    expect(first.serviceKey).toBe(second.serviceKey);
    expect(first.hero?.id).toBe(second.hero?.id);
    expect(first.gallery.length).toBe(second.gallery.length);
    expect(first.faqs.length).toBe(second.faqs.length);
    expect(first.faqs.map((f) => f.question)).toEqual(second.faqs.map((f) => f.question));
    expect(first.authorityLinks.length).toBe(second.authorityLinks.length);
    expect(first.nearbyAreas.length).toBe(second.nearbyAreas.length);
    expect(first.manifest.compositionVersion).toBe(second.manifest.compositionVersion);
    expect(first.manifest.engines).toEqual(second.manifest.engines);
  });
});

// ─── Test 4: Partial resilience ───────────────────────────────────────────────

describe("composePage — partial resilience", () => {
  it("does not throw for an unknown locality slug", () => {
    expect(() => composePage(makePageData("unknown-service-xyz-unknown-area"))).not.toThrow();
  });

  it("returns a valid ResolvedSeoPage for an unknown slug", () => {
    const result = composePage(makePageData("unknown-service-xyz-unknown-area"));
    expect(result).toBeDefined();
    expect(typeof result.slug).toBe("string");
    expect(Array.isArray(result.gallery)).toBe(true);
    expect(Array.isArray(result.faqs)).toBe(true);
    expect(Array.isArray(result.authorityLinks)).toBe(true);
    expect(Array.isArray(result.nearbyAreas)).toBe(true);
    expect(result.manifest).toBeDefined();
  });

  it("hero is null (not undefined) for unknown slug", () => {
    const result = composePage(makePageData("unknown-service-xyz-unknown-area"));
    expect(result.hero).toBeNull();
  });

  it("repairScenario is null (not undefined) for unknown slug", () => {
    const result = composePage(makePageData("unknown-service-xyz-unknown-area"));
    expect(result.repairScenario).toBeNull();
  });
});

// ─── Test 5: Engine version type safety ───────────────────────────────────────

describe("composePage — engine version type safety", () => {
  it("all engine version constants equal 1 (literal, not arbitrary number)", () => {
    // If any constant is bumped, this test acts as a change-detection gate.
    expect(COMPOSITION_VERSION).toBe(1);
    expect(HERO_ENGINE_VERSION).toBe(1);
    expect(GALLERY_ENGINE_VERSION).toBe(1);
    expect(FAQ_ENGINE_VERSION).toBe(1);
    expect(AUTHORITY_ENGINE_VERSION).toBe(1);
    expect(REPAIR_SCENARIO_ENGINE_VERSION).toBe(1);
    expect(NEARBY_AREAS_ENGINE_VERSION).toBe(1);
  });

  it("manifest.engines entries are exactly the value 1, not a wider number", () => {
    const { manifest } = composePage(makePageData("sofa-repair-rohini"));
    // TypeScript guarantees literal typing at compile time;
    // these runtime checks guard against accidental widening at the call site.
    expect(manifest.engines.hero).toStrictEqual(1);
    expect(manifest.engines.gallery).toStrictEqual(1);
    expect(manifest.engines.faq).toStrictEqual(1);
    expect(manifest.engines.authority).toStrictEqual(1);
    expect(manifest.engines.repairScenario).toStrictEqual(1);
    expect(manifest.engines.nearbyAreas).toStrictEqual(1);
  });
});
