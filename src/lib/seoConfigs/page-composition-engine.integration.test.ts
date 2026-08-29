/**
 * Page Composition Engine — Integration Test
 *
 * End-to-end "system health" test: verifies that all engines resolve correctly
 * together for a well-known locality + service combination.
 *
 * Assertions are structural (shape over counts) to stay stable as content grows.
 */

import { describe, it, expect } from "vitest";
import { composePage, type ResolvedSeoPage } from "./page-composition-engine.ts";
import {
  COMPOSITION_VERSION,
  HERO_ENGINE_VERSION,
  GALLERY_ENGINE_VERSION,
  FAQ_ENGINE_VERSION,
  AUTHORITY_ENGINE_VERSION,
  REPAIR_SCENARIO_ENGINE_VERSION,
  NEARBY_AREAS_ENGINE_VERSION,
} from "./page-composition-engine.ts";
import { validateHeroRegistry } from "./hero-image-engine.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

// ─── Test input ───────────────────────────────────────────────────────────────

const INPUT: SeoPageData = {
  slug: "sofa-repair-rohini",
  title: "Sofa Repair in Rohini — Doorstep Service",
  metaDescription: "Professional sofa repair in Rohini. Same-day doorstep service.",
  h1: "Sofa Repair in Rohini",
  heroSubtitle: "Same-day doorstep sofa repair",
  intro: ["Expert sofa repair at your doorstep in Rohini."],
  whyChoose: [{ title: "Experienced", description: "10+ years" }],
  process: [{ step: "Book", description: "Call or WhatsApp" }],
  benefits: ["Free inspection"],
  contentSections: [{ heading: "Our Services", body: ["Full repair."] }],
  relatedPages: [],
} as unknown as SeoPageData;

// ─── Integration suite ────────────────────────────────────────────────────────

describe("composePage() — end-to-end integration (sofa-repair × rohini)", () => {
  let result: ResolvedSeoPage;

  it("resolves without throwing", () => {
    expect(() => {
      result = composePage(INPUT);
    }).not.toThrow();
  });

  // Re-resolve for subsequent assertions (result may not be assigned if first test fails)
  const getResult = () => composePage(INPUT);

  // ── Hero ──────────────────────────────────────────────────────────────────

  it("hero is a non-null HeroImageRecord with id, url, fileId", () => {
    const { hero } = getResult();
    expect(hero).not.toBeNull();
    expect(typeof hero?.id).toBe("string");
    expect(hero?.id.length).toBeGreaterThan(0);
    expect(typeof hero?.url).toBe("string");
    expect(hero?.url.startsWith("https://")).toBe(true);
    expect(typeof hero?.fileId).toBe("string");
    expect(hero?.fileId.startsWith("file_")).toBe(true);
  });

  // ── Gallery ───────────────────────────────────────────────────────────────

  it("gallery is an array", () => {
    const { gallery } = getResult();
    expect(Array.isArray(gallery)).toBe(true);
  });

  it("every gallery entry (if any) has id and record fields", () => {
    const { gallery } = getResult();
    for (const entry of gallery) {
      expect(typeof entry.id).toBe("string");
      expect(entry.record).toBeDefined();
    }
  });

  // ── FAQs ──────────────────────────────────────────────────────────────────

  it("faqs is an array", () => {
    const { faqs } = getResult();
    expect(Array.isArray(faqs)).toBe(true);
  });

  it("every FAQ has a non-empty question string", () => {
    const { faqs } = getResult();
    for (const faq of faqs) {
      expect(typeof faq.question).toBe("string");
      expect(faq.question.trim().length).toBeGreaterThan(0);
    }
  });

  it("every FAQ has a non-empty answer string", () => {
    const { faqs } = getResult();
    for (const faq of faqs) {
      expect(typeof faq.answer).toBe("string");
      expect(faq.answer.trim().length).toBeGreaterThan(0);
    }
  });

  it("faqs resolves non-empty for a known locality", () => {
    const { faqs } = getResult();
    expect(faqs.length).toBeGreaterThan(0);
  });

  // ── Authority links ───────────────────────────────────────────────────────

  it("authorityLinks is an array", () => {
    const { authorityLinks } = getResult();
    expect(Array.isArray(authorityLinks)).toBe(true);
  });

  it("every authority link has record and mention fields", () => {
    const { authorityLinks } = getResult();
    for (const link of authorityLinks) {
      expect(link.record).toBeDefined();
      expect(typeof link.mention).toBe("string");
      expect(link.mention.trim().length).toBeGreaterThan(0);
    }
  });

  // ── Repair scenario ───────────────────────────────────────────────────────

  it("repairScenario is null or an object (never undefined)", () => {
    const { repairScenario } = getResult();
    expect(repairScenario).not.toBeUndefined();
    if (repairScenario !== null) {
      expect(typeof repairScenario).toBe("object");
      expect(Object.keys(repairScenario).length).toBeGreaterThan(0);
    }
  });

  it("repairScenario resolves a non-null value for sofa-repair-rohini", () => {
    const { repairScenario } = getResult();
    expect(repairScenario).not.toBeNull();
  });

  // ── Nearby areas ──────────────────────────────────────────────────────────

  it("nearbyAreas is an array", () => {
    const { nearbyAreas } = getResult();
    expect(Array.isArray(nearbyAreas)).toBe(true);
  });

  it("every nearby area has non-empty name and href strings", () => {
    const { nearbyAreas } = getResult();
    for (const area of nearbyAreas) {
      expect(typeof area.name).toBe("string");
      expect(area.name.trim().length).toBeGreaterThan(0);
      expect(typeof area.href).toBe("string");
      expect(area.href.trim().length).toBeGreaterThan(0);
    }
  });

  // ── Manifest ──────────────────────────────────────────────────────────────

  it("manifest.compositionVersion equals COMPOSITION_VERSION", () => {
    const { manifest } = getResult();
    expect(manifest.compositionVersion).toBe(COMPOSITION_VERSION);
  });

  it("manifest.generatedAt is a valid ISO 8601 string", () => {
    const { manifest } = getResult();
    expect(typeof manifest.generatedAt).toBe("string");
    const parsed = new Date(manifest.generatedAt);
    expect(isNaN(parsed.getTime())).toBe(false);
    expect(parsed.toISOString()).toBe(manifest.generatedAt);
  });

  it("manifest.engines.hero equals HERO_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.hero).toBe(HERO_ENGINE_VERSION);
  });

  it("manifest.engines.gallery equals GALLERY_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.gallery).toBe(GALLERY_ENGINE_VERSION);
  });

  it("manifest.engines.faq equals FAQ_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.faq).toBe(FAQ_ENGINE_VERSION);
  });

  it("manifest.engines.authority equals AUTHORITY_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.authority).toBe(AUTHORITY_ENGINE_VERSION);
  });

  it("manifest.engines.repairScenario equals REPAIR_SCENARIO_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.repairScenario).toBe(REPAIR_SCENARIO_ENGINE_VERSION);
  });

  it("manifest.engines.nearbyAreas equals NEARBY_AREAS_ENGINE_VERSION", () => {
    expect(getResult().manifest.engines.nearbyAreas).toBe(NEARBY_AREAS_ENGINE_VERSION);
  });

  // ── Hero registry validator ───────────────────────────────────────────────

  it("validateHeroRegistry() returns valid=true with zero errors", () => {
    const validation = validateHeroRegistry();
    expect(validation.valid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  // ── Input immutability ────────────────────────────────────────────────────

  it("composePage() does not mutate its input", () => {
    const inputCopy = JSON.parse(JSON.stringify(INPUT)) as typeof INPUT;
    composePage(INPUT);
    expect(INPUT.slug).toBe(inputCopy.slug);
    expect(INPUT.title).toBe(inputCopy.title);
    expect(INPUT.metaDescription).toBe(inputCopy.metaDescription);
    expect(INPUT.h1).toBe(inputCopy.h1);
    expect(INPUT.intro).toEqual(inputCopy.intro);
    expect(INPUT.benefits).toEqual(inputCopy.benefits);
  });
});
