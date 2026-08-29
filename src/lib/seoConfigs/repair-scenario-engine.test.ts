/**
 * repair-scenario-engine.test.ts
 *
 * Tests for the Repair Scenario Engine subsystem.
 *
 * Key invariants:
 * - Unknown localities return null (never placeholder content)
 * - Service isolation: same locality + different service = different section headings
 * - Output is deterministic for same inputs
 * - No duplicate section keys in output
 * - SSR-safe: no DOM/window access
 */

import { describe, it, expect } from "vitest";
import {
  getRepairScenario,
  resolveLocalityKey,
  type RepairScenarioOutput,
} from "./repair-scenario-engine.ts";

// ─── resolveLocalityKey ───────────────────────────────────────────────────────

describe("resolveLocalityKey", () => {
  it("resolves a standard locality page slug", () => {
    expect(resolveLocalityKey("sofa-repair-pitampura")).toBe("pitampura");
  });

  it("resolves with a different service prefix", () => {
    expect(resolveLocalityKey("leather-sofa-repair-rohini")).toBe("rohini");
  });

  it("resolves multi-word locality slugs", () => {
    expect(resolveLocalityKey("sofa-repair-greater-kailash")).toBe("greater-kailash");
    expect(resolveLocalityKey("sofa-repair-dlf-phase-5")).toBe("dlf-phase-5");
    expect(resolveLocalityKey("sofa-repair-lajpat-nagar")).toBe("lajpat-nagar");
  });

  it("returns null for city-level slugs", () => {
    expect(resolveLocalityKey("sofa-repair-delhi")).toBeNull();
    expect(resolveLocalityKey("sofa-repair-noida")).toBeNull();
    expect(resolveLocalityKey("sofa-repair-gurgaon")).toBeNull();
  });

  it("returns null for non-locality slugs", () => {
    expect(resolveLocalityKey("blog-post-about-cats")).toBeNull();
    expect(resolveLocalityKey("about-us")).toBeNull();
    expect(resolveLocalityKey("")).toBeNull();
  });

  it("does not confuse similar locality names", () => {
    // dlf-phase-5 should not match dlf-phase-1
    const result = resolveLocalityKey("sofa-repair-dlf-phase-5");
    expect(result).toBe("dlf-phase-5");
    expect(result).not.toBe("dlf-phase-1");
  });
});

// ─── getRepairScenario — null cases ──────────────────────────────────────────

describe("getRepairScenario — null returns", () => {
  it("returns null for an unknown locality", () => {
    expect(getRepairScenario("sofa-repair", "sofa-repair-imaginary-colony-xyz")).toBeNull();
  });

  it("returns null for a city-level slug", () => {
    expect(getRepairScenario("sofa-repair", "sofa-repair-delhi")).toBeNull();
  });

  it("returns null for a locality with no profile (known fragment, no REPAIR_SCENARIO_PROFILES entry)", () => {
    // bptp is in KNOWN_LOCALITY_FRAGMENTS but not yet in REPAIR_SCENARIO_PROFILES
    const result = getRepairScenario("sofa-repair", "sofa-repair-bptp");
    expect(result).toBeNull();
  });

  it("never returns placeholder or empty-string content", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-imaginary-xyz");
    expect(result).toBeNull();
  });
});

// ─── getRepairScenario — known locality ──────────────────────────────────────

describe("getRepairScenario — known locality", () => {
  it("returns a non-null output for pitampura + sofa-repair", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
  });

  it("returns a non-null output for rohini + sofa-repair", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-rohini");
    expect(result).not.toBeNull();
  });

  it("returns a non-null output for greater-kailash + leather-sofa-repair", () => {
    const result = getRepairScenario("leather-sofa-repair", "leather-sofa-repair-greater-kailash");
    expect(result).not.toBeNull();
  });

  it("populates at least commonRepairs and causes for all profiled localities", () => {
    const slugs = [
      "sofa-repair-pitampura",
      "sofa-repair-rohini",
      "sofa-repair-greater-kailash",
      "sofa-repair-dwarka",
      "sofa-repair-janakpuri",
      "sofa-repair-indirapuram",
      "sofa-repair-lajpat-nagar",
      "sofa-repair-vasant-kunj",
    ];
    for (const slug of slugs) {
      const result = getRepairScenario("sofa-repair", slug);
      expect(result, `Expected non-null for ${slug}`).not.toBeNull();
      expect(result!.commonRepairs, `Expected commonRepairs for ${slug}`).toBeDefined();
      expect(result!.causes, `Expected causes for ${slug}`).toBeDefined();
    }
  });

  it("all section items are non-empty strings", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
    for (const section of Object.values(result!)) {
      if (!section) continue;
      expect(section.heading.length).toBeGreaterThan(0);
      expect(section.items.length).toBeGreaterThan(0);
      for (const item of section.items) {
        expect(typeof item).toBe("string");
        expect(item.length).toBeGreaterThan(0);
      }
    }
  });
});

// ─── Service isolation invariant ─────────────────────────────────────────────

describe("Service isolation", () => {
  it("same locality + different service = different section headings", () => {
    const sofaResult = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    const reclineResult = getRepairScenario("recliner-repair", "recliner-repair-pitampura");

    expect(sofaResult).not.toBeNull();
    expect(reclineResult).not.toBeNull();

    // Section headings should differ because service display name is different
    const sofaHeading = sofaResult!.commonRepairs?.heading ?? "";
    const reclineHeading = reclineResult!.commonRepairs?.heading ?? "";
    expect(sofaHeading).not.toBe(reclineHeading);
  });

  it("locality data (items) remains the same across services", () => {
    // The commonRepairs items come from the profile, not the service
    const sofaResult = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    const reclineResult = getRepairScenario("recliner-repair", "recliner-repair-pitampura");

    expect(sofaResult!.commonRepairs?.items).toEqual(reclineResult!.commonRepairs?.items);
  });

  it("maintenance section heading changes with service", () => {
    const sofaResult = getRepairScenario("sofa-repair", "sofa-repair-rohini");
    const leatherResult = getRepairScenario("leather-sofa-repair", "leather-sofa-repair-rohini");

    expect(sofaResult!.maintenance?.heading).not.toBe(leatherResult!.maintenance?.heading);
  });
});

// ─── Determinism ─────────────────────────────────────────────────────────────

describe("Determinism", () => {
  it("produces identical output for identical inputs", () => {
    const result1 = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    const result2 = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    expect(JSON.stringify(result1)).toBe(JSON.stringify(result2));
  });

  it("different localities produce different outputs", () => {
    const pitampura = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    const gk = getRepairScenario("sofa-repair", "sofa-repair-greater-kailash");
    expect(JSON.stringify(pitampura)).not.toBe(JSON.stringify(gk));
  });
});

// ─── Output structure ─────────────────────────────────────────────────────────

describe("Output structure", () => {
  it("has no duplicate section keys", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
    const keys = Object.keys(result!);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });

  it("only contains valid RepairScenarioOutput keys", () => {
    const validKeys = new Set([
      "commonRepairs",
      "causes",
      "furnitureTypes",
      "technicianInsights",
      "materials",
      "maintenance",
      "repairVsReplace",
    ]);
    const result = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    expect(result).not.toBeNull();
    for (const key of Object.keys(result!)) {
      expect(validKeys.has(key)).toBe(true);
    }
  });

  it("returns null rather than an empty object when no sections are populated", () => {
    // An unknown slug should return null, not {}
    const result = getRepairScenario("sofa-repair", "totally-unknown-xyz");
    expect(result).toBeNull();
  });
});

// ─── SERVICE_SECTION_POLICY regression ───────────────────────────────────────

describe("SERVICE_SECTION_POLICY — section count by service", () => {
  // Use pitampura (fully profiled) as the reference locality
  const SOFA_SLUG = "sofa-repair-pitampura";
  const RECLINER_SLUG = "recliner-repair-pitampura";
  const LEATHER_SLUG = "leather-sofa-repair-pitampura";
  const WOODEN_SLUG = "wooden-sofa-repair-pitampura";

  it("sofa-repair returns 7 sections", () => {
    const result = getRepairScenario("sofa-repair", SOFA_SLUG);
    expect(result).not.toBeNull();
    expect(Object.keys(result!).length).toBe(7);
  });

  it("sofa-repair output includes all 3 profileOnly sections", () => {
    const result = getRepairScenario("sofa-repair", SOFA_SLUG);
    expect(result!.commonRepairs).toBeDefined();
    expect(result!.causes).toBeDefined();
    expect(result!.furnitureTypes).toBeDefined();
  });

  it("recliner-repair returns exactly 4 sections", () => {
    const result = getRepairScenario("recliner-repair", RECLINER_SLUG);
    expect(result).not.toBeNull();
    expect(Object.keys(result!).length).toBe(4);
  });

  it("recliner-repair output has only always sections", () => {
    const result = getRepairScenario("recliner-repair", RECLINER_SLUG);
    expect(result!.technicianInsights).toBeDefined();
    expect(result!.materials).toBeDefined();
    expect(result!.maintenance).toBeDefined();
    expect(result!.repairVsReplace).toBeDefined();
    expect(result!.commonRepairs).toBeUndefined();
    expect(result!.causes).toBeUndefined();
    expect(result!.furnitureTypes).toBeUndefined();
  });

  it("leather-sofa-repair returns exactly 4 sections", () => {
    const result = getRepairScenario("leather-sofa-repair", LEATHER_SLUG);
    expect(result).not.toBeNull();
    expect(Object.keys(result!).length).toBe(4);
  });

  it("leather-sofa-repair excludes profileOnly sections", () => {
    const result = getRepairScenario("leather-sofa-repair", LEATHER_SLUG);
    expect(result!.commonRepairs).toBeUndefined();
    expect(result!.causes).toBeUndefined();
    expect(result!.furnitureTypes).toBeUndefined();
  });

  it("wooden-sofa-repair returns exactly 4 sections", () => {
    const result = getRepairScenario("wooden-sofa-repair", WOODEN_SLUG);
    expect(result).not.toBeNull();
    expect(Object.keys(result!).length).toBe(4);
  });

  it("switching service for same locality removes exactly 3 sections", () => {
    const sofaResult = getRepairScenario("sofa-repair", SOFA_SLUG);
    const reclineResult = getRepairScenario("recliner-repair", RECLINER_SLUG);
    expect(sofaResult).not.toBeNull();
    expect(reclineResult).not.toBeNull();
    const sofaKeys = new Set(Object.keys(sofaResult!));
    const reclineKeys = new Set(Object.keys(reclineResult!));
    const removed = [...sofaKeys].filter((k) => !reclineKeys.has(k));
    expect(removed.sort()).toEqual(["causes", "commonRepairs", "furnitureTypes"]);
  });
});

// ─── SSR safety ──────────────────────────────────────────────────────────────

describe("SSR safety", () => {
  it("does not access window or document", () => {
    // If this test runs in a non-browser environment (Node/Vitest), it should not throw
    expect(() => {
      getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    }).not.toThrow();
  });

  it("runs synchronously with no async operations", () => {
    const result = getRepairScenario("sofa-repair", "sofa-repair-pitampura");
    // If this were a Promise, expect(result).not.toBeNull() would pass on the Promise object
    // Verify it's a plain object
    expect(result).not.toBeInstanceOf(Promise);
  });
});
