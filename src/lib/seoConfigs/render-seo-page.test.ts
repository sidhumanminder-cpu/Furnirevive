/**
 * Page Renderer — Tests
 */

import { describe, it, expect } from "vitest";
import { renderSeoPage, type RenderedSeoPage } from "./render-seo-page.ts";
import type { ResolvedSeoPage, CompositionManifest } from "./page-composition-engine.ts";
import type { HeroImageRecord } from "./hero-image-registry.ts";

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const MANIFEST: CompositionManifest = {
  compositionVersion: 1,
  generatedAt: "2026-07-18T10:00:00.000Z",
  engines: { hero: 1, gallery: 1, faq: 1, authority: 1, repairScenario: 1, nearbyAreas: 1 },
};

const HERO: HeroImageRecord = {
  id: "hero-001",
  fileId: "file_abc123",
  url: "https://hercules-cdn.com/file_abc123",
  width: 1792,
  height: 1024,
  version: 1,
  createdAt: "2026-07-18",
  status: "approved",
  services: ["sofa-repair"],
  furnitureType: "sofa",
  colors: ["grey"],
  style: "modern",
  roomType: "living-room",
  cityKeys: [],
  localitySlugs: [],
  isPremium: false,
  orientation: "landscape",
  priority: 1,
  scene: {
    windowPlacement: "left",
    furniturePosition: "center",
    flooring: "wood",
    coffeeTable: "none",
    plantType: "none",
    wallTreatment: "plain",
  },
};

function makePage(overrides: Partial<ResolvedSeoPage> = {}): ResolvedSeoPage {
  return {
    slug: "sofa-repair-rohini",
    serviceKey: "sofa-repair",
    hero: HERO,
    gallery: [],
    faqs: [{ intentGroup: "pricing", question: "How much does repair cost?", answer: "Starts at ₹999." }],
    authorityLinks: [],
    repairScenario: { commonRepairs: { heading: "Common Repairs", items: ["Foam replacement"] } },
    nearbyAreas: [{ name: "Pitampura", slug: "pitampura", href: "/sofa-repair-pitampura" }],
    manifest: MANIFEST,
    ...overrides,
  };
}

// ─── Test 1: Complete page renders ────────────────────────────────────────────

describe("renderSeoPage — complete page", () => {
  it("does not throw", () => {
    expect(() => renderSeoPage(makePage())).not.toThrow();
  });

  it("returns all 9 fields", () => {
    const result: RenderedSeoPage = renderSeoPage(makePage());
    expect(result.slug).toBeDefined();
    expect(result.serviceKey).toBeDefined();
    expect(result.hero).toBeDefined();
    expect(result.gallery).toBeDefined();
    expect(result.faqs).toBeDefined();
    expect(result.authorityLinks).toBeDefined();
    expect(result.repairScenario).toBeDefined();
    expect(result.nearbyAreas).toBeDefined();
    expect(result.manifest).toBeDefined();
  });

  it("preserves slug value", () => {
    expect(renderSeoPage(makePage()).slug).toBe("sofa-repair-rohini");
  });

  it("preserves serviceKey value", () => {
    expect(renderSeoPage(makePage()).serviceKey).toBe("sofa-repair");
  });

  it("preserves manifest", () => {
    const result = renderSeoPage(makePage());
    expect(result.manifest.compositionVersion).toBe(1);
    expect(result.manifest.generatedAt).toBe("2026-07-18T10:00:00.000Z");
  });
});

// ─── Test 2: Null hero ────────────────────────────────────────────────────────

describe("renderSeoPage — null hero", () => {
  it("does not throw when hero is null", () => {
    expect(() => renderSeoPage(makePage({ hero: null }))).not.toThrow();
  });

  it("output hero is null", () => {
    expect(renderSeoPage(makePage({ hero: null })).hero).toBeNull();
  });
});

// ─── Test 3: Null repairScenario ──────────────────────────────────────────────

describe("renderSeoPage — null repairScenario", () => {
  it("does not throw when repairScenario is null", () => {
    expect(() => renderSeoPage(makePage({ repairScenario: null }))).not.toThrow();
  });

  it("output repairScenario is null", () => {
    expect(renderSeoPage(makePage({ repairScenario: null })).repairScenario).toBeNull();
  });
});

// ─── Test 4: Empty arrays ─────────────────────────────────────────────────────

describe("renderSeoPage — empty arrays", () => {
  const page = makePage({ gallery: [], faqs: [], authorityLinks: [], nearbyAreas: [] });

  it("gallery passes through as empty array", () => {
    expect(renderSeoPage(page).gallery).toHaveLength(0);
  });

  it("faqs passes through as empty array", () => {
    expect(renderSeoPage(page).faqs).toHaveLength(0);
  });

  it("authorityLinks passes through as empty array", () => {
    expect(renderSeoPage(page).authorityLinks).toHaveLength(0);
  });

  it("nearbyAreas passes through as empty array", () => {
    expect(renderSeoPage(page).nearbyAreas).toHaveLength(0);
  });
});

// ─── Test 5: Input immutability ───────────────────────────────────────────────

describe("renderSeoPage — input immutability", () => {
  it("does not mutate the input page", () => {
    const page = makePage();
    const slugBefore = page.slug;
    const serviceKeyBefore = page.serviceKey;
    const faqsLengthBefore = page.faqs.length;
    const nearbyAreasLengthBefore = page.nearbyAreas.length;

    renderSeoPage(page);

    expect(page.slug).toBe(slugBefore);
    expect(page.serviceKey).toBe(serviceKeyBefore);
    expect(page.faqs.length).toBe(faqsLengthBefore);
    expect(page.nearbyAreas.length).toBe(nearbyAreasLengthBefore);
    expect(page.hero?.id).toBe(HERO.id);
  });
});

// ─── Test 6: Idempotence ──────────────────────────────────────────────────────

describe("renderSeoPage — idempotence", () => {
  it("two calls with the same input produce deep-equal output", () => {
    const page = makePage();
    const first = renderSeoPage(page);
    const second = renderSeoPage(page);

    expect(first.slug).toBe(second.slug);
    expect(first.serviceKey).toBe(second.serviceKey);
    expect(first.hero?.id).toBe(second.hero?.id);
    expect(first.gallery).toEqual(second.gallery);
    expect(first.faqs).toEqual(second.faqs);
    expect(first.authorityLinks).toEqual(second.authorityLinks);
    expect(first.nearbyAreas).toEqual(second.nearbyAreas);
    expect(first.manifest).toEqual(second.manifest);
  });
});
