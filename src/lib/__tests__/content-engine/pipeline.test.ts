/**
 * Tests for buildPageSections() from the content engine pipeline.
 *
 * Uses a realistic LocalityEntry fixture and the real SERVICE_REGISTRY's
 * sofa-repair service to verify correct section generation.
 */

import { describe, it, expect } from "vitest";
import { buildPageSections } from "@/lib/content-engine/pipeline.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import type { LocalityEntry } from "@/lib/registry/types.ts";

// ─── Test fixtures ──────────────────────────────────────────────────────────

const TEST_LOCALITY: LocalityEntry = {
  id: "loc_pipeline_test",
  slug: "lajpat-nagar",
  name: "Lajpat Nagar",
  cluster: "southDelhi",
  city: "delhi",
  propertyType: "established residential locality with DDA flats and multi-storey apartments near South Delhi markets",
  affluence: "mid-high",
  premiumLevel: 3,
  density: "dense",
  housingAge: "established",
  landmarks: ["Lajpat Nagar Market", "Lajpat Nagar Metro", "Moolchand Metro"],
  nearby: ["Greater Kailash 1", "Defence Colony", "Andrews Ganj", "Jangpura", "Kailash Colony", "Maharani Bagh"],
  servicePriority: 4,
  contentVersion: 1,
  contentWeight: 90,
  searchPriority: 4,
  status: "published",
};

// Get the sofa-repair service (which has 9 modules)
const SOFA_REPAIR_SERVICE = SERVICE_REGISTRY.find((s) => s.slug === "sofa-repair")!;

// Expected section types in order
const EXPECTED_SECTION_TYPES = [
  "hero",
  "intro",
  "pricing",
  "repair-types",
  "brands",
  "faq",
  "nearby",
  "servicehub",
  "cta",
] as const;

// UI smell words that should never appear in prop key names
const UI_SMELL_WORDS = [
  "class",
  "variant",
  "layout",
  "theme",
  "color",
  "style",
  "size",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "grid",
  "flex",
  "col",
  "row",
];

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("buildPageSections", () => {
  const sections = buildPageSections(TEST_LOCALITY, SOFA_REPAIR_SERVICE);

  it("returns exactly 9 sections (one per module in sofa-repair service)", () => {
    expect(sections).toHaveLength(9);
  });

  it("section types match expected types in correct order", () => {
    const types = sections.map((s) => s.type);
    expect(types).toEqual(EXPECTED_SECTION_TYPES);
  });

  it("each section has id, type, version, and props fields", () => {
    for (const section of sections) {
      expect(section).toHaveProperty("id");
      expect(section).toHaveProperty("type");
      expect(section).toHaveProperty("version");
      expect(section).toHaveProperty("props");

      expect(typeof section.id).toBe("string");
      expect(section.id.length).toBeGreaterThan(0);
      expect(typeof section.type).toBe("string");
      expect(section.version).toBe("v1");
      expect(typeof section.props).toBe("object");
      expect(section.props).not.toBeNull();
    }
  });

  describe("domain-data-only invariant (no UI smell words in prop keys)", () => {
    it("no prop key names contain CSS/UI smell words", () => {
      for (const section of sections) {
        assertNoUiSmellKeys(section.props, `section "${section.type}"`);
      }
    });
  });

  it("props values are plain data (no functions, no JSX)", () => {
    for (const section of sections) {
      assertPlainData(section.props, `section "${section.type}".props`);
    }
  });

  it("registry immutability: LocalityEntry is unchanged after buildPageSections()", () => {
    // Capture a snapshot before
    const localityBefore = JSON.parse(JSON.stringify(TEST_LOCALITY));

    // Run pipeline again
    buildPageSections(TEST_LOCALITY, SOFA_REPAIR_SERVICE);

    // Verify no mutation
    expect(TEST_LOCALITY).toEqual(localityBefore);
  });

  it("each section id is unique", () => {
    const ids = sections.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Recursively checks that no keys in an object contain UI smell words.
 */
function assertNoUiSmellKeys(obj: unknown, path: string): void {
  if (obj === null || obj === undefined) return;
  if (typeof obj !== "object") return;

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      assertNoUiSmellKeys(obj[i], `${path}[${i}]`);
    }
    return;
  }

  for (const key of Object.keys(obj as Record<string, unknown>)) {
    const keyLower = key.toLowerCase();
    for (const smell of UI_SMELL_WORDS) {
      expect(
        keyLower.includes(smell),
        `UI smell word "${smell}" found in key "${key}" at ${path}.${key}`
      ).toBe(false);
    }
    assertNoUiSmellKeys((obj as Record<string, unknown>)[key], `${path}.${key}`);
  }
}

/**
 * Recursively checks that all values are plain data (string, number,
 * boolean, null, array, object) — no functions, no Symbols, no JSX.
 */
function assertPlainData(value: unknown, path: string): void {
  if (value === null || value === undefined) return;

  const type = typeof value;

  if (type === "function") {
    throw new Error(`Function found at ${path}`);
  }
  if (type === "symbol") {
    throw new Error(`Symbol found at ${path}`);
  }

  // Check for JSX (React elements have $$typeof symbol)
  if (type === "object" && value !== null) {
    const record = value as Record<string | symbol, unknown>;
    if (Symbol.for("react.element") in record || "$$typeof" in record) {
      throw new Error(`JSX element found at ${path}`);
    }
  }

  if (type === "string" || type === "number" || type === "boolean") return;

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      assertPlainData(value[i], `${path}[${i}]`);
    }
    return;
  }

  if (type === "object") {
    for (const key of Object.keys(value as Record<string, unknown>)) {
      assertPlainData((value as Record<string, unknown>)[key], `${path}.${key}`);
    }
  }
}
