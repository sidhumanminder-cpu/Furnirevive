/**
 * gallery-registry.test.ts
 *
 * Data integrity tests for GALLERY_REGISTRY.
 * These tests pass trivially when the registry is empty (correct behaviour).
 * They become meaningful protection as real images are added.
 */

import { describe, it, expect } from "vitest";
import {
  GALLERY_REGISTRY,
  type GalleryImageRecord,
} from "./gallery-registry.ts";
import { SEO_SERVICE_CONFIG } from "./service-config.ts";
// LocalitySlug is validated against REPAIR_SCENARIO_PROFILES keys
import { REPAIR_SCENARIO_PROFILES } from "./repair-scenarios.ts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const entries = Object.entries(GALLERY_REGISTRY) as [string, GalleryImageRecord][];
const validServiceKeys = new Set(Object.keys(SEO_SERVICE_CONFIG));
const validLocalitySlugs = new Set(Object.keys(REPAIR_SCENARIO_PROFILES));

// ─── Key / ID integrity ─────────────────────────────────────────────────────

describe("Registry keys match internal id fields", () => {
  for (const [key, record] of entries) {
    it(`${key}: key === record.id`, () => {
      expect(record.id).toBe(key);
    });
  }

  it("passes trivially when registry is empty", () => {
    // Always true — documents that an empty registry is valid
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Uniqueness ──────────────────────────────────────────────────────────────

describe("All IDs are unique", () => {
  it("Set of IDs has same size as entries length", () => {
    const ids = entries.map(([, r]) => r.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

describe("No duplicate beforeUrl", () => {
  it("every beforeUrl is unique across the registry", () => {
    const urls = entries.map(([, r]) => r.beforeUrl);
    const unique = new Set(urls);
    expect(unique.size).toBe(urls.length);
  });
});

describe("No duplicate afterUrl", () => {
  it("every afterUrl is unique across the registry", () => {
    const urls = entries.map(([, r]) => r.afterUrl);
    const unique = new Set(urls);
    expect(unique.size).toBe(urls.length);
  });
});

// ─── Required fields ─────────────────────────────────────────────────────────

describe("Required fields are present and non-empty", () => {
  for (const [key, record] of entries) {
    it(`${key}: id is a non-empty string`, () => {
      expect(typeof record.id).toBe("string");
      expect(record.id.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: beforeUrl is a non-empty string`, () => {
      expect(typeof record.beforeUrl).toBe("string");
      expect(record.beforeUrl.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: afterUrl is a non-empty string`, () => {
      expect(typeof record.afterUrl).toBe("string");
      expect(record.afterUrl.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: furnitureType is a non-empty string`, () => {
      expect(typeof record.furnitureType).toBe("string");
      expect(record.furnitureType.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: damageType is a non-empty string`, () => {
      expect(typeof record.damageType).toBe("string");
      expect(record.damageType.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: material is a non-empty string`, () => {
      expect(typeof record.material).toBe("string");
      expect(record.material.trim().length).toBeGreaterThan(0);
    });

    it(`${key}: services is a non-empty array`, () => {
      expect(Array.isArray(record.services)).toBe(true);
      expect(record.services.length).toBeGreaterThan(0);
    });

    it(`${key}: repairTypes is a non-empty array`, () => {
      expect(Array.isArray(record.repairTypes)).toBe(true);
      expect(record.repairTypes.length).toBeGreaterThan(0);
    });

    it(`${key}: localityTags is an array`, () => {
      expect(Array.isArray(record.localityTags)).toBe(true);
    });
  }

  it("passes trivially when registry is empty", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Priority range ──────────────────────────────────────────────────────────

describe("Priority is within 1–100", () => {
  for (const [key, record] of entries) {
    it(`${key}: priority is >= 1 and <= 100`, () => {
      expect(record.priority).toBeGreaterThanOrEqual(1);
      expect(record.priority).toBeLessThanOrEqual(100);
    });
  }

  it("passes trivially when registry is empty", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Services validation ─────────────────────────────────────────────────────

describe("Services are valid SeoServiceKey values", () => {
  for (const [key, record] of entries) {
    it(`${key}: all services are valid`, () => {
      for (const service of record.services) {
        expect(
          validServiceKeys.has(service),
          `"${service}" is not a valid SeoServiceKey`,
        ).toBe(true);
      }
    });
  }

  it("passes trivially when registry is empty", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Locality tags validation ────────────────────────────────────────────────

describe("Locality tags are valid LocalitySlug values", () => {
  for (const [key, record] of entries) {
    it(`${key}: all localityTags are valid`, () => {
      for (const tag of record.localityTags) {
        expect(
          validLocalitySlugs.has(tag),
          `"${tag}" is not a valid LocalitySlug`,
        ).toBe(true);
      }
    });
  }

  it("passes trivially when registry is empty", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── repairTypes non-empty ───────────────────────────────────────────────────

describe("repairTypes is non-empty", () => {
  for (const [key, record] of entries) {
    it(`${key}: repairTypes.length > 0`, () => {
      expect(record.repairTypes.length).toBeGreaterThan(0);
    });
  }

  it("passes trivially when registry is empty", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── completedAt ISO 8601 validation ─────────────────────────────────────────

describe("completedAt is valid ISO 8601 if present", () => {
  for (const [key, record] of entries) {
    if (record.completedAt !== undefined) {
      it(`${key}: completedAt parses as a valid date`, () => {
        const parsed = new Date(record.completedAt as string);
        expect(!isNaN(parsed.getTime())).toBe(true);
      });
    }
  }

  it("passes trivially when registry is empty or no completedAt fields exist", () => {
    expect(entries.length).toBeGreaterThanOrEqual(0);
  });
});
