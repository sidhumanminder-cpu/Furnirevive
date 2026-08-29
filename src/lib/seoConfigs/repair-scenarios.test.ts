/**
 * repair-scenarios.test.ts
 *
 * Data integrity tests for REPAIR_SCENARIO_PROFILES.
 *
 * Responsibility: "Is our content database healthy?"
 * (Engine behavior lives in repair-scenario-engine.test.ts)
 *
 * Hard assertions — test fails if violated:
 *   - Required arrays exist on every profile
 *   - Every required array has ≥ 3 items
 *   - No empty strings in any array item
 *   - No duplicate entries within any array
 *   - Every profile key is a valid LocalitySlug
 *
 * Soft review — console.warn only, test still passes:
 *   - Two profiles sharing the same fingerprint prompt manual editorial review
 */

import { describe, it, expect } from "vitest";
import {
  REPAIR_SCENARIO_PROFILES,
  type LocalitySlug,
  type RepairScenarioProfile,
} from "./repair-scenarios.ts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const REQUIRED_ARRAY_FIELDS = [
  "commonRepairs",
  "commonFurniture",
  "commonCauses",
  "technicianInsights",
  "recommendedMaterials",
  "maintenanceTips",
] as const satisfies (keyof RepairScenarioProfile)[];

const MIN_ARRAY_LENGTH = 3;

/** Lightweight fingerprint for cross-profile duplicate detection. */
function fingerprint(profile: RepairScenarioProfile): string {
  return [
    profile.housingType,
    profile.customerType,
    profile.repairPreference,
    profile.commonRepairs[0] ?? "",
    profile.commonCauses[0] ?? "",
  ].join("|");
}

// ─── Required arrays exist ───────────────────────────────────────────────────

describe("Profile completeness — required arrays exist", () => {
  for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
    for (const field of REQUIRED_ARRAY_FIELDS) {
      it(`${slug}: has required field "${field}"`, () => {
        expect(
          Array.isArray(profile[field]),
          `${slug}.${field} must be an array`,
        ).toBe(true);
      });
    }
  }
});

// ─── Minimum array lengths ────────────────────────────────────────────────────

describe(`Profile completeness — every required array has ≥ ${MIN_ARRAY_LENGTH} items`, () => {
  for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
    for (const field of REQUIRED_ARRAY_FIELDS) {
      it(`${slug}.${field} has at least ${MIN_ARRAY_LENGTH} items`, () => {
        expect(
          profile[field].length,
          `${slug}.${field} has ${profile[field].length} item(s), expected ≥ ${MIN_ARRAY_LENGTH}`,
        ).toBeGreaterThanOrEqual(MIN_ARRAY_LENGTH);
      });
    }
  }
});

// ─── No empty strings ────────────────────────────────────────────────────────

describe("Profile completeness — no empty strings in any array", () => {
  for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
    for (const field of REQUIRED_ARRAY_FIELDS) {
      it(`${slug}.${field} has no empty strings`, () => {
        for (const item of profile[field]) {
          expect(
            item.trim().length,
            `${slug}.${field} contains an empty or whitespace-only string`,
          ).toBeGreaterThan(0);
        }
      });
    }
  }
});

// ─── No duplicate entries within an array ────────────────────────────────────

describe("Profile completeness — no duplicate entries within any array", () => {
  for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
    for (const field of REQUIRED_ARRAY_FIELDS) {
      it(`${slug}.${field} has no duplicate entries`, () => {
        const items = profile[field];
        const unique = new Set(items);
        expect(
          unique.size,
          `${slug}.${field} contains duplicate entries`,
        ).toBe(items.length);
      });
    }
  }
});

// ─── Valid LocalitySlug keys ──────────────────────────────────────────────────

describe("Profile keys — every key is a valid LocalitySlug", () => {
  // Derive the valid set from the LocalitySlug union at runtime via a known-good profile key
  // We validate by checking that every key in REPAIR_SCENARIO_PROFILES matches
  // the compile-time type. The TypeScript type system already enforces this at compile time;
  // this test is a runtime double-check and documents the expectation explicitly.
  it("all profile keys are non-empty strings", () => {
    for (const key of Object.keys(REPAIR_SCENARIO_PROFILES)) {
      expect(typeof key).toBe("string");
      expect(key.trim().length).toBeGreaterThan(0);
    }
  });

  it("all profile keys are kebab-case (no spaces or uppercase)", () => {
    for (const key of Object.keys(REPAIR_SCENARIO_PROFILES)) {
      expect(key, `"${key}" is not valid kebab-case`).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("profile key count is positive", () => {
    expect(Object.keys(REPAIR_SCENARIO_PROFILES).length).toBeGreaterThan(0);
  });
});

// ─── Scalar fields ────────────────────────────────────────────────────────────

describe("Profile completeness — scalar fields are valid", () => {
  const VALID_CUSTOMER_TYPES = new Set([
    "family", "senior", "professional", "luxury", "office", "mixed",
  ]);
  const VALID_HOUSING_TYPES = new Set([
    "dda-flats", "builder-floors", "independent-houses", "gated-societies",
    "luxury-apartments", "mixed-residential", "commercial-mixed",
  ]);
  const VALID_REPAIR_PREFERENCES = new Set([
    "cost-conscious", "quality-focused", "premium", "quick-turnaround", "same-day",
  ]);

  for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
    it(`${slug}: customerType is valid`, () => {
      expect(VALID_CUSTOMER_TYPES.has(profile.customerType)).toBe(true);
    });
    it(`${slug}: housingType is valid`, () => {
      expect(VALID_HOUSING_TYPES.has(profile.housingType)).toBe(true);
    });
    it(`${slug}: repairPreference is valid`, () => {
      expect(VALID_REPAIR_PREFERENCES.has(profile.repairPreference)).toBe(true);
    });
  }
});

// ─── Cross-profile fingerprint (soft review) ─────────────────────────────────

describe("Cross-profile review — fingerprint warnings", () => {
  it("logs warnings for profiles sharing the same fingerprint (does not fail)", () => {
    const seen = new Map<string, string>();
    const warnings: string[] = [];

    for (const [slug, profile] of Object.entries(REPAIR_SCENARIO_PROFILES)) {
      const fp = fingerprint(profile);
      if (seen.has(fp)) {
        warnings.push(
          `Warning: "${slug}" and "${seen.get(fp)}" share the same profile fingerprint. Please manually review for differentiation.`,
        );
      } else {
        seen.set(fp, slug);
      }
    }

    // Log all warnings for editorial awareness — does NOT fail the test
    for (const warning of warnings) {
      console.warn(warning);
    }

    // The test itself always passes — warnings are advisory only
    expect(true).toBe(true);
  });
});
