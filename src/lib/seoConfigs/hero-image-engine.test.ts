import { describe, it, expect } from "vitest";
import {
  getHeroImage,
  generateHeroAlt,
  generateHeroTitle,
  generateHeroCaption,
  generateHeroCoverageReport,
  validateHeroRegistry,
} from "./hero-image-engine.ts";
import type { HeroImageRecord } from "./hero-image-registry.ts";
import type { SeoServiceKey } from "./service-config.ts";

function makeRecord(
  id: string,
  overrides: Partial<HeroImageRecord> = {},
): HeroImageRecord {
  return {
    id,
    fileId: `file_${id}`,
    url: `https://hercules-cdn.com/file_${id}`,
    width: 1920,
    height: 1080,
    version: 1,
    createdAt: "2026-07-18",
    status: "approved",
    services: ["sofa-repair"],
    furnitureType: "sofa",
    colors: ["beige"],
    style: "modern",
    cityKeys: ["delhi"],
    localitySlugs: [],
    isPremium: false,
    roomType: "living-room",
    orientation: "landscape",
    priority: 5,
    scene: {
      windowPlacement: "left",
      furniturePosition: "center",
      flooring: "wood",
      coffeeTable: "modern",
      plantType: "tall",
      wallTreatment: "plain",
    },
    ...overrides,
  } satisfies HeroImageRecord;
}

describe("hero-image-engine", () => {
  it("locality match beats city match", () => {
    const recordA = makeRecord("a", {
      localitySlugs: ["pitampura"],
      cityKeys: [],
    });
    const recordB = makeRecord("b", {
      localitySlugs: [],
      cityKeys: ["delhi"],
    });

    const result = getHeroImage("sofa-repair", "sofa-repair-pitampura", {
      a: recordA,
      b: recordB,
    });

    expect(result).toBe(recordA);
  });

  it("city match beats service match", () => {
    const recordA = makeRecord("a", {
      localitySlugs: [],
      cityKeys: ["delhi"],
      services: [],
    });
    const recordB = makeRecord("b", {
      localitySlugs: [],
      cityKeys: [],
      services: ["sofa-repair"],
    });

    const result = getHeroImage("sofa-repair", "sofa-repair-rohini", {
      a: recordA,
      b: recordB,
    });

    expect(result).toBe(recordA);
  });

  it("fallback returns something when no exact match", () => {
    const record = makeRecord("a", {
      localitySlugs: [],
      cityKeys: [],
      services: ["sofa-repair"],
    });

    const result = getHeroImage("sofa-repair", "sofa-repair-karol-bagh", {
      a: record,
    });

    expect(result).not.toBeNull();
  });

  it("empty registry returns null", () => {
    const result = getHeroImage("sofa-repair", "sofa-repair-pitampura", {});

    expect(result).toBeNull();
  });

  it("determinism — same inputs always return same record", () => {
    const registry: Record<string, HeroImageRecord> = {
      x: makeRecord("x", { localitySlugs: ["pitampura"], priority: 3 }),
      y: makeRecord("y", { localitySlugs: ["pitampura"], priority: 7 }),
      z: makeRecord("z", { localitySlugs: ["pitampura"], priority: 1 }),
    };

    const first = getHeroImage("sofa-repair", "sofa-repair-pitampura", registry);
    const second = getHeroImage("sofa-repair", "sofa-repair-pitampura", registry);

    expect(first).not.toBeNull();
    expect(second).not.toBeNull();
    expect(first!.id).toBe(second!.id);
  });

  it("generateHeroAlt never returns empty string", () => {
    const records = [
      makeRecord("r1", { furnitureType: "sofa" }),
      makeRecord("r2", { furnitureType: "dining-chair" }),
      makeRecord("r3", { furnitureType: "recliner" }),
    ];

    for (const record of records) {
      const alt = generateHeroAlt(record, "Pitampura");
      expect(alt).toBeTruthy();
      expect(alt.length).toBeGreaterThan(0);
    }
  });

  it("generateHeroCaption is deterministic and contains localityName", () => {
    const record = makeRecord("cap1", { furnitureType: "office-chair" });

    const first = generateHeroCaption(record, "Rohini");
    const second = generateHeroCaption(record, "Rohini");

    expect(first).toBe(second);
    expect(first).toContain("Rohini");
  });

  // ─── generateHeroCoverageReport ──────────────────────────────────────────────

  it("coverage report correctly counts scene attributes across a mock registry", () => {
    const registry: Record<string, HeroImageRecord> = {
      r1: makeRecord("r1", {
        scene: {
          windowPlacement: "left",
          furniturePosition: "center",
          flooring: "wood",
          coffeeTable: "modern",
          plantType: "tall",
          wallTreatment: "plain",
        },
      }),
      r2: makeRecord("r2", {
        url: "https://hercules-cdn.com/file_r2",
        fileId: "file_r2",
        scene: {
          windowPlacement: "right",
          furniturePosition: "center",
          flooring: "wood",
          coffeeTable: "none",
          plantType: "small",
          wallTreatment: "art",
        },
      }),
      r3: makeRecord("r3", {
        url: "https://hercules-cdn.com/file_r3",
        fileId: "file_r3",
        scene: {
          windowPlacement: "left",
          furniturePosition: "right",
          flooring: "marble",
          coffeeTable: "modern",
          plantType: "tall",
          wallTreatment: "plain",
        },
      }),
    };

    const report = generateHeroCoverageReport(registry);

    expect(report.windowPlacement?.["left"]).toBe(2);
    expect(report.windowPlacement?.["right"]).toBe(1);
    expect(report.flooring?.["wood"]).toBe(2);
    expect(report.flooring?.["marble"]).toBe(1);
    expect(report.plantType?.["tall"]).toBe(2);
    expect(report.plantType?.["small"]).toBe(1);
  });

  it("coverage report on empty registry returns empty object", () => {
    const report = generateHeroCoverageReport({});

    expect(Object.keys(report)).toHaveLength(0);
  });

  // ─── validateHeroRegistry ────────────────────────────────────────────────────

  it("clean registry returns valid: true with no errors or warnings", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001"),
    };

    const result = validateHeroRegistry(registry);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it("DUPLICATE_ID detected when record.id does not match registry key", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-WRONG"),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("DUPLICATE_ID");
  });

  it("DUPLICATE_FILE_ID detected", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", { fileId: "file_shared" }),
      "hero-002": makeRecord("hero-002", {
        fileId: "file_shared",
        url: "https://hercules-cdn.com/file_r2",
      }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("DUPLICATE_FILE_ID");
  });

  it("DUPLICATE_URL detected", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", {
        url: "https://hercules-cdn.com/file_same",
      }),
      "hero-002": makeRecord("hero-002", {
        fileId: "file_r2",
        url: "https://hercules-cdn.com/file_same",
      }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("DUPLICATE_URL");
  });

  it("INVALID_DIMENSIONS detected for width or height <= 0", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", { width: 0, height: 1024 }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("INVALID_DIMENSIONS");
  });

  it("INVALID_VERSION detected for version < 1", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", { version: 0 }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("INVALID_VERSION");
  });

  it("INVALID_STATUS detected for unknown status value", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", {
        status: "unknown-status" as HeroImageRecord["status"],
      }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("INVALID_STATUS");
  });

  it("INVALID_PRIORITY detected as warning for priority out of 1–10 range", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", { priority: 99 }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.warnings.map((w) => w.code);
    expect(codes).toContain("INVALID_PRIORITY");
    // Warnings should not affect valid when there are no errors
    expect(result.valid).toBe(true);
  });

  it("INVALID_SCENE_VALUE detected for unknown scene field value", () => {
    const registry: Record<string, HeroImageRecord> = {
      "hero-001": makeRecord("hero-001", {
        scene: {
          windowPlacement: "diagonal" as HeroImageRecord["scene"]["windowPlacement"],
          furniturePosition: "center",
          flooring: "wood",
          coffeeTable: "modern",
          plantType: "tall",
          wallTreatment: "plain",
        },
      }),
    };

    const result = validateHeroRegistry(registry);

    const codes = result.errors.map((e) => e.code);
    expect(codes).toContain("INVALID_SCENE_VALUE");
  });
});
