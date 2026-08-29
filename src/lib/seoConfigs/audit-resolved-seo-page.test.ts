/**
 * QA Auditor — Tests
 */

import { describe, it, expect } from "vitest";
import { auditResolvedSeoPage } from "./audit-resolved-seo-page.ts";
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
    gallery: [
      { id: "img-001", record: {} as never, score: 10 },
      { id: "img-002", record: {} as never, score: 8 },
    ],
    faqs: [
      { intentGroup: "pricing", question: "How much does repair cost?", answer: "Starts at ₹999." },
      { intentGroup: "booking_process", question: "How long does repair take?", answer: "Usually 1–2 hours." },
    ],
    authorityLinks: [
      { record: { slug: "sofa-repair-delhi", displayName: "Sofa Repair Delhi", tier: 1, services: ["sofa-repair"], topics: ["foam"], cityKeys: ["delhi"] } as never, score: 90, mention: "See our Delhi page." },
    ],
    repairScenario: { commonRepairs: { heading: "Common Repairs", items: ["Foam replacement"] } },
    nearbyAreas: [
      { name: "Pitampura", slug: "pitampura", href: "/sofa-repair-pitampura" },
      { name: "Shalimar Bagh", slug: "shalimar-bagh", href: "/sofa-repair-shalimar-bagh" },
    ],
    manifest: MANIFEST,
    ...overrides,
  };
}

// ─── Test 1: Valid page passes ────────────────────────────────────────────────

describe("auditResolvedSeoPage — valid page", () => {
  it("does not throw", () => {
    expect(() => auditResolvedSeoPage(makePage())).not.toThrow();
  });

  it("returns valid=true", () => {
    expect(auditResolvedSeoPage(makePage()).valid).toBe(true);
  });

  it("returns zero errors", () => {
    expect(auditResolvedSeoPage(makePage()).errors).toHaveLength(0);
  });

  it("returns an AuditResult with errors and warnings arrays", () => {
    const result = auditResolvedSeoPage(makePage());
    expect(Array.isArray(result.errors)).toBe(true);
    expect(Array.isArray(result.warnings)).toBe(true);
  });
});

// ─── Test 2: Duplicate FAQ questions ─────────────────────────────────────────

describe("auditResolvedSeoPage — duplicate FAQ questions", () => {
  const page = makePage({
    faqs: [
      { intentGroup: "pricing", question: "How much does repair cost?", answer: "Starts at ₹999." },
      { intentGroup: "pricing", question: "How much does repair cost?", answer: "Different answer." },
    ],
  });

  it("returns valid=false", () => {
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes DUPLICATE_FAQ_QUESTION error", () => {
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "DUPLICATE_FAQ_QUESTION")).toBe(true);
  });
});

// ─── Test 3: Duplicate gallery IDs ────────────────────────────────────────────

describe("auditResolvedSeoPage — duplicate gallery IDs", () => {
  const page = makePage({
    gallery: [
      { id: "img-001", record: {} as never, score: 10 },
      { id: "img-001", record: {} as never, score: 8 },
    ],
  });

  it("returns valid=false", () => {
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes DUPLICATE_GALLERY_ID error", () => {
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "DUPLICATE_GALLERY_ID")).toBe(true);
  });
});

// ─── Test 4: Duplicate nearby area hrefs ─────────────────────────────────────

describe("auditResolvedSeoPage — duplicate nearby area hrefs", () => {
  const page = makePage({
    nearbyAreas: [
      { name: "Pitampura", slug: "pitampura", href: "/sofa-repair-pitampura" },
      { name: "Pitampura Again", slug: "pitampura", href: "/sofa-repair-pitampura" },
    ],
  });

  it("returns valid=false", () => {
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes DUPLICATE_NEARBY_HREF error", () => {
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "DUPLICATE_NEARBY_HREF")).toBe(true);
  });
});

// ─── Test 5: Missing slug ─────────────────────────────────────────────────────

describe("auditResolvedSeoPage — missing slug", () => {
  it("returns valid=false for empty slug", () => {
    expect(auditResolvedSeoPage(makePage({ slug: "" })).valid).toBe(false);
  });

  it("includes MISSING_SLUG error for empty slug", () => {
    const { errors } = auditResolvedSeoPage(makePage({ slug: "" }));
    expect(errors.some((e) => e.code === "MISSING_SLUG")).toBe(true);
  });

  it("includes MISSING_SLUG error for whitespace-only slug", () => {
    const { errors } = auditResolvedSeoPage(makePage({ slug: "   " }));
    expect(errors.some((e) => e.code === "MISSING_SLUG")).toBe(true);
  });
});

// ─── Test 6: Missing manifest ─────────────────────────────────────────────────

describe("auditResolvedSeoPage — missing manifest", () => {
  it("returns valid=false when manifest is null", () => {
    const page = makePage({ manifest: null as unknown as CompositionManifest });
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes MISSING_MANIFEST error", () => {
    const page = makePage({ manifest: null as unknown as CompositionManifest });
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "MISSING_MANIFEST")).toBe(true);
  });
});

// ─── Test 7: Empty href in nearbyAreas ────────────────────────────────────────

describe("auditResolvedSeoPage — empty href in nearbyAreas", () => {
  const page = makePage({
    nearbyAreas: [{ name: "Pitampura", slug: "pitampura", href: "" }],
  });

  it("returns valid=false", () => {
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes EMPTY_NEARBY_HREF error", () => {
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "EMPTY_NEARBY_HREF")).toBe(true);
  });
});

// ─── Test 8: Null hero passes ─────────────────────────────────────────────────

describe("auditResolvedSeoPage — null hero", () => {
  it("does not produce a hero-related error when hero is null", () => {
    const { errors } = auditResolvedSeoPage(makePage({ hero: null }));
    const heroErrors = errors.filter((e) => e.field.startsWith("hero"));
    expect(heroErrors).toHaveLength(0);
  });

  it("valid=true when only hero is null (all else valid)", () => {
    expect(auditResolvedSeoPage(makePage({ hero: null })).valid).toBe(true);
  });
});

// ─── Test 9: Self-link in authorityLinks ─────────────────────────────────────

describe("auditResolvedSeoPage — self-link in authorityLinks", () => {
  const page = makePage({
    slug: "sofa-repair-sector-47-gurgaon",
    authorityLinks: [
      {
        record: { slug: "sofa-repair-sector-47-gurgaon", displayName: "Sofa Repair Sector 47", tier: 5, services: ["sofa-repair"], topics: [], cityKeys: ["gurgaon"] } as never,
        score: 80,
        mention: "See this page.",
      },
    ],
  });

  it("returns valid=false", () => {
    expect(auditResolvedSeoPage(page).valid).toBe(false);
  });

  it("includes SELF_LINK_IN_AUTHORITY error", () => {
    const { errors } = auditResolvedSeoPage(page);
    expect(errors.some((e) => e.code === "SELF_LINK_IN_AUTHORITY")).toBe(true);
  });
});
