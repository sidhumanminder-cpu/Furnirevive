/**
 * Page Creation Pipeline — Tests
 *
 * Tests for createSeoPage() — the public entry point for page creation.
 *
 * Success criteria:
 * 1. Valid input resolves without throwing
 * 2. Output satisfies structural completeness contract (all 9 fields, correct types)
 * 3. Unknown locality/service edge case — handled gracefully (no throw)
 * 4. Reserved fields (variant, overrides) accepted and silently ignored
 * 5. Idempotence — two calls with same input produce deep-equal output
 *    (except manifest.generatedAt which is intentionally variable)
 */

import { describe, it, expect } from "vitest";
import { createSeoPage, type CreateSeoPageInput } from "./create-seo-page.ts";
import type { ResolvedSeoPage } from "./page-composition-engine.ts";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function assertStructuralCompleteness(result: ResolvedSeoPage) {
  // slug
  expect(typeof result.slug).toBe("string");
  expect(result.slug.length).toBeGreaterThan(0);

  // serviceKey — string or null, never undefined
  expect(result.serviceKey === null || typeof result.serviceKey === "string").toBe(true);

  // hero — HeroImageRecord or null, never undefined
  expect(result.hero !== undefined).toBe(true);

  // gallery — always an array
  expect(Array.isArray(result.gallery)).toBe(true);

  // faqs — always an array
  expect(Array.isArray(result.faqs)).toBe(true);

  // authorityLinks — always an array
  expect(Array.isArray(result.authorityLinks)).toBe(true);

  // repairScenario — object or null, never undefined
  expect(result.repairScenario !== undefined).toBe(true);

  // nearbyAreas — always an array
  expect(Array.isArray(result.nearbyAreas)).toBe(true);

  // manifest — always present
  expect(result.manifest).toBeDefined();
  expect(typeof result.manifest.compositionVersion).toBe("number");
  expect(typeof result.manifest.generatedAt).toBe("string");
  expect(result.manifest.engines).toBeDefined();
}

// ─── Test 1: Valid input resolves ─────────────────────────────────────────────

describe("createSeoPage — valid input", () => {
  const input: CreateSeoPageInput = { service: "sofa-repair", locality: "rohini" };

  it("does not throw", () => {
    expect(() => createSeoPage(input)).not.toThrow();
  });

  it("returns a defined result", () => {
    const result = createSeoPage(input);
    expect(result).toBeDefined();
  });

  it("slug is derived from service + locality", () => {
    const result = createSeoPage(input);
    expect(result.slug).toBe("sofa-repair-rohini");
  });

  it("serviceKey resolves correctly", () => {
    const result = createSeoPage(input);
    expect(result.serviceKey).toBe("sofa-repair");
  });
});

// ─── Test 2: Structural completeness ─────────────────────────────────────────

describe("createSeoPage — structural completeness", () => {
  const inputs: CreateSeoPageInput[] = [
    { service: "sofa-repair", locality: "rohini" },
    { service: "recliner-repair", locality: "dlf-phase-1" },
    { service: "leather-sofa-repair", locality: "sector-62-noida" },
    { service: "sofa-repair", locality: "cyber-city" },
  ];

  for (const input of inputs) {
    it(`all 9 fields present and correct types for ${input.service} × ${input.locality}`, () => {
      assertStructuralCompleteness(createSeoPage(input));
    });
  }
});

// ─── Test 3: Resilience ───────────────────────────────────────────────────────

describe("createSeoPage — resilience", () => {
  it("does not throw for an edge-case locality (gaur-city, no major repair profile)", () => {
    expect(() => createSeoPage({ service: "furniture-repair", locality: "gaur-city" })).not.toThrow();
  });

  it("returns structurally complete output for edge-case locality", () => {
    assertStructuralCompleteness(createSeoPage({ service: "furniture-repair", locality: "gaur-city" }));
  });

  it("does not throw for a service with no exact hero match (foam-replacement)", () => {
    expect(() => createSeoPage({ service: "foam-replacement", locality: "indirapuram" })).not.toThrow();
  });

  it("returns structurally complete output for foam-replacement locality", () => {
    assertStructuralCompleteness(createSeoPage({ service: "foam-replacement", locality: "indirapuram" }));
  });
});

// ─── Test 4: Reserved fields accepted and silently ignored ────────────────────

describe("createSeoPage — reserved fields", () => {
  it("accepts variant field without throwing", () => {
    expect(() =>
      createSeoPage({ service: "sofa-repair", locality: "pitampura", variant: "default" })
    ).not.toThrow();
  });

  it("accepts overrides field without throwing", () => {
    expect(() =>
      createSeoPage({ service: "sofa-repair", locality: "pitampura", overrides: { title: "Custom Title" } })
    ).not.toThrow();
  });

  it("variant does not alter output", () => {
    const base = createSeoPage({ service: "sofa-repair", locality: "pitampura" });
    const withVariant = createSeoPage({ service: "sofa-repair", locality: "pitampura", variant: "default" });
    expect(base.slug).toBe(withVariant.slug);
    expect(base.serviceKey).toBe(withVariant.serviceKey);
    expect(base.hero?.id).toBe(withVariant.hero?.id);
    expect(base.faqs.length).toBe(withVariant.faqs.length);
  });

  it("overrides does not alter output (reserved, not applied)", () => {
    const base = createSeoPage({ service: "sofa-repair", locality: "pitampura" });
    const withOverrides = createSeoPage({
      service: "sofa-repair",
      locality: "pitampura",
      overrides: { title: "Overridden Title" },
    });
    expect(base.slug).toBe(withOverrides.slug);
    expect(base.hero?.id).toBe(withOverrides.hero?.id);
    expect(base.faqs.length).toBe(withOverrides.faqs.length);
  });
});

// ─── Test 5: Idempotence ──────────────────────────────────────────────────────

describe("createSeoPage — idempotence", () => {
  it("two calls with the same input produce deep-equal output (except generatedAt)", () => {
    const input: CreateSeoPageInput = { service: "sofa-repair", locality: "karol-bagh" };
    const first = createSeoPage(input);
    const second = createSeoPage(input);

    expect(first.slug).toBe(second.slug);
    expect(first.serviceKey).toBe(second.serviceKey);
    expect(first.hero?.id).toBe(second.hero?.id);
    expect(first.gallery.length).toBe(second.gallery.length);
    expect(first.faqs.length).toBe(second.faqs.length);
    expect(first.faqs.map((f) => f.question)).toEqual(second.faqs.map((f) => f.question));
    expect(first.faqs.map((f) => f.answer)).toEqual(second.faqs.map((f) => f.answer));
    expect(first.authorityLinks.length).toBe(second.authorityLinks.length);
    expect(first.nearbyAreas.length).toBe(second.nearbyAreas.length);
    expect(first.nearbyAreas.map((a) => a.href)).toEqual(second.nearbyAreas.map((a) => a.href));
    // Manifest engines and compositionVersion are identical
    expect(first.manifest.compositionVersion).toBe(second.manifest.compositionVersion);
    expect(first.manifest.engines).toEqual(second.manifest.engines);
    // generatedAt is intentionally variable — not compared
  });
});
