/**
 * gallery-engine.test.ts
 *
 * Tests for the Before & After Gallery Engine.
 *
 * Key invariants:
 * - Empty registry always returns null
 * - Exact locality match outscores city match
 * - Higher priority wins when scores are otherwise tied
 * - limit option is respected
 * - Scores are deterministic for same inputs
 * - Generated text is never empty and differs appropriately between before/after
 * - JSON-LD is structurally valid
 */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  scoreRecord,
  getGalleryImages,
  generateAlt,
  generateTitle,
  generateCaption,
  generateImageSchema,
} from "./gallery-engine.ts";
import { GALLERY_REGISTRY } from "./gallery-registry.ts";
import type { GalleryImageRecord } from "./gallery-registry.ts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeRecord(overrides: Partial<GalleryImageRecord> = {}): GalleryImageRecord {
  return {
    id: "test-001",
    beforeUrl: "https://example.com/before.jpg",
    afterUrl: "https://example.com/after.jpg",
    services: ["sofa-repair"],
    repairTypes: ["foam-replacement"],
    furnitureType: "sofa",
    damageType: "sagging",
    material: "fabric",
    roomType: "living-room",
    style: "modern",
    localityTags: ["pitampura"],
    cityTags: ["delhi"],
    priority: 50,
    isFeatured: false,
    ...overrides,
  };
}

// ─── scoreRecord ─────────────────────────────────────────────────────────────

describe("scoreRecord", () => {
  it("returns 0 for no service and no locality/city match", () => {
    const record = makeRecord({
      services: ["recliner-repair"],
      localityTags: ["rohini"],
      cityTags: ["noida"],
    });
    // Querying for sofa-repair + pitampura → no overlap
    const score = scoreRecord(record, "sofa-repair", "pitampura", "delhi");
    expect(score).toBe(0);
  });

  it("returns > 0 for service match alone", () => {
    const record = makeRecord({
      services: ["sofa-repair"],
      localityTags: [],
      cityTags: [],
    });
    // Service matches, but no locality or city match
    const score = scoreRecord(record, "sofa-repair", "rohini", "gurgaon");
    expect(score).toBeGreaterThan(0);
  });

  it("returns > 0 for locality match alone", () => {
    const record = makeRecord({
      services: ["recliner-repair"],
      localityTags: ["pitampura"],
      cityTags: [],
    });
    // Locality matches, but service does not
    const score = scoreRecord(record, "sofa-repair", "pitampura", null);
    expect(score).toBeGreaterThan(0);
  });

  it("exact locality score > city-only score", () => {
    const record = makeRecord({
      services: ["sofa-repair"],
      localityTags: ["pitampura"],
      cityTags: ["delhi"],
    });

    const localityScore = scoreRecord(record, "sofa-repair", "pitampura", "delhi");
    const cityOnlyScore = scoreRecord(record, "sofa-repair", "rohini", "delhi");

    expect(localityScore).toBeGreaterThan(cityOnlyScore);
  });

  it("is deterministic — same inputs produce same output", () => {
    const record = makeRecord();
    const score1 = scoreRecord(record, "sofa-repair", "pitampura", "delhi");
    const score2 = scoreRecord(record, "sofa-repair", "pitampura", "delhi");
    expect(score1).toBe(score2);
  });
});

// ─── getGalleryImages — empty registry ──────────────────────────────────────

describe("getGalleryImages with empty registry", () => {
  it("returns null when GALLERY_REGISTRY is empty", () => {
    // The registry starts empty by default
    const result = getGalleryImages("sofa-repair", "sofa-repair-pitampura");
    expect(result).toBeNull();
  });
});

// ─── getGalleryImages — seeded registry ─────────────────────────────────────

describe("getGalleryImages with seeded registry", () => {
  beforeEach(() => {
    GALLERY_REGISTRY["test-locality"] = makeRecord({
      id: "test-locality",
      beforeUrl: "https://example.com/loc-before.jpg",
      afterUrl: "https://example.com/loc-after.jpg",
      localityTags: ["pitampura"],
      cityTags: ["delhi"],
      priority: 80,
    });
    GALLERY_REGISTRY["test-city"] = makeRecord({
      id: "test-city",
      beforeUrl: "https://example.com/city-before.jpg",
      afterUrl: "https://example.com/city-after.jpg",
      localityTags: [],
      cityTags: ["delhi"],
      priority: 50,
    });
    GALLERY_REGISTRY["test-low-priority"] = makeRecord({
      id: "test-low-priority",
      beforeUrl: "https://example.com/low-before.jpg",
      afterUrl: "https://example.com/low-after.jpg",
      localityTags: ["pitampura"],
      cityTags: ["delhi"],
      priority: 20,
    });
  });

  afterEach(() => {
    delete GALLERY_REGISTRY["test-locality"];
    delete GALLERY_REGISTRY["test-city"];
    delete GALLERY_REGISTRY["test-low-priority"];
    // Clean up any extra test records
    for (const key of Object.keys(GALLERY_REGISTRY)) {
      if (key.startsWith("test-")) {
        delete GALLERY_REGISTRY[key];
      }
    }
  });

  it("locality match ranks first", () => {
    const result = getGalleryImages("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
    expect(result!.length).toBeGreaterThan(0);
    // "test-locality" should score higher than "test-city" because of exact locality match
    expect(result![0].id).toBe("test-locality");
  });

  it("higher priority wins ties when scores are equal", () => {
    // Both test-locality (priority 80) and test-low-priority (priority 20) match pitampura
    const result = getGalleryImages("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
    const localityEntries = result!.filter(
      (m) => m.record.localityTags.includes("pitampura"),
    );
    // Higher priority should come first among locality matches
    expect(localityEntries[0].record.priority).toBeGreaterThan(
      localityEntries[1].record.priority,
    );
  });

  it("limit option is respected", () => {
    // Seed additional records to have more than 2
    GALLERY_REGISTRY["test-extra-1"] = makeRecord({
      id: "test-extra-1",
      beforeUrl: "https://example.com/extra1-before.jpg",
      afterUrl: "https://example.com/extra1-after.jpg",
      localityTags: ["pitampura"],
      priority: 60,
    });
    GALLERY_REGISTRY["test-extra-2"] = makeRecord({
      id: "test-extra-2",
      beforeUrl: "https://example.com/extra2-before.jpg",
      afterUrl: "https://example.com/extra2-after.jpg",
      localityTags: ["pitampura"],
      priority: 55,
    });

    const result = getGalleryImages("sofa-repair", "sofa-repair-pitampura", {
      limit: 2,
    });
    expect(result).not.toBeNull();
    expect(result!.length).toBe(2);
  });

  it("featuredOnly only returns featured records", () => {
    GALLERY_REGISTRY["test-featured"] = makeRecord({
      id: "test-featured",
      beforeUrl: "https://example.com/feat-before.jpg",
      afterUrl: "https://example.com/feat-after.jpg",
      localityTags: ["pitampura"],
      priority: 90,
      isFeatured: true,
    });

    const result = getGalleryImages("sofa-repair", "sofa-repair-pitampura", {
      featuredOnly: true,
    });
    expect(result).not.toBeNull();
    for (const match of result!) {
      expect(match.record.isFeatured).toBe(true);
    }
  });
});

// ─── generateAlt ─────────────────────────────────────────────────────────────

describe("generateAlt", () => {
  const record = makeRecord();

  it("before alt contains 'Before repair' and 'FurniRevive'", () => {
    const alt = generateAlt(record, "before");
    expect(alt).toContain("Before repair");
    expect(alt).toContain("FurniRevive");
  });

  it("after alt contains 'After repair' and 'FurniRevive'", () => {
    const alt = generateAlt(record, "after");
    expect(alt).toContain("After repair");
    expect(alt).toContain("FurniRevive");
  });

  it("before and after alt text differ", () => {
    const beforeAlt = generateAlt(record, "before");
    const afterAlt = generateAlt(record, "after");
    expect(beforeAlt).not.toBe(afterAlt);
  });

  it("never returns empty string", () => {
    const beforeAlt = generateAlt(record, "before");
    const afterAlt = generateAlt(record, "after");
    expect(beforeAlt.length).toBeGreaterThan(0);
    expect(afterAlt.length).toBeGreaterThan(0);
  });
});

// ─── generateTitle ───────────────────────────────────────────────────────────

describe("generateTitle", () => {
  const record = makeRecord();

  it("returns a non-empty string", () => {
    const title = generateTitle(record);
    expect(title.length).toBeGreaterThan(0);
  });

  it("contains 'FurniRevive'", () => {
    const title = generateTitle(record);
    expect(title).toContain("FurniRevive");
  });
});

// ─── generateCaption ─────────────────────────────────────────────────────────

describe("generateCaption", () => {
  const record = makeRecord();

  it("returns a non-empty string", () => {
    const caption = generateCaption(record);
    expect(caption.length).toBeGreaterThan(0);
  });

  it("ends with a period", () => {
    const caption = generateCaption(record);
    expect(caption.endsWith(".")).toBe(true);
  });

  it("does not contain any hyphens (humanised)", () => {
    const caption = generateCaption(record);
    expect(caption).not.toContain("-");
  });
});

// ─── generateImageSchema ─────────────────────────────────────────────────────

describe("generateImageSchema", () => {
  const record = makeRecord();

  it("returns @context: 'https://schema.org' and @type: 'ImageObject'", () => {
    const schema = generateImageSchema(record, "before");
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("ImageObject");
  });

  it("before schema url equals record.beforeUrl", () => {
    const schema = generateImageSchema(record, "before");
    expect(schema.url).toBe(record.beforeUrl);
  });

  it("after schema url equals record.afterUrl", () => {
    const schema = generateImageSchema(record, "after");
    expect(schema.url).toBe(record.afterUrl);
  });

  it("does NOT include representativeOfPage", () => {
    const schema = generateImageSchema(record, "before");
    expect("representativeOfPage" in schema).toBe(false);
  });

  it("optional fields omitted when undefined", () => {
    // Record without copyrightHolder, creator, license, completedAt
    const minimalRecord = makeRecord({
      copyrightHolder: undefined,
      creator: undefined,
      license: undefined,
      completedAt: undefined,
    });

    const schema = generateImageSchema(minimalRecord, "before");
    expect("copyrightHolder" in schema).toBe(false);
    expect("creator" in schema).toBe(false);
    expect("license" in schema).toBe(false);
    expect("dateCreated" in schema).toBe(false);
  });
});
