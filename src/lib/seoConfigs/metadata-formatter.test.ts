import { describe, it, expect } from "vitest";
import {
  isCityRedundant,
  formatTitle,
  formatH1,
  formatHeroSubtitle,
  formatMetaDescription,
  formatSchemaName,
  formatHeroAlt,
  localitySlugToIndex,
  BENEFITS,
  HERO_SUBTITLE_TEMPLATES,
} from "./metadata-formatter.ts";

// ─── isCityRedundant ─────────────────────────────────────────────────────────

describe("isCityRedundant", () => {
  it("returns true when city is embedded in locality name", () => {
    expect(isCityRedundant("New Gurgaon", "Gurgaon")).toBe(true);
    expect(isCityRedundant("Greater Noida", "Noida")).toBe(true);
    expect(isCityRedundant("South Delhi", "Delhi")).toBe(true);
  });

  it("returns false when city is not embedded in locality name", () => {
    expect(isCityRedundant("Rohini", "Delhi")).toBe(false);
    expect(isCityRedundant("Indirapuram", "Ghaziabad")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isCityRedundant("new gurgaon", "Gurgaon")).toBe(true);
    expect(isCityRedundant("NEW GURGAON", "gurgaon")).toBe(true);
  });
});

// ─── formatTitle ─────────────────────────────────────────────────────────────

describe("formatTitle", () => {
  it("suppresses city when redundant", () => {
    const title = formatTitle("Sofa Repair", "New Gurgaon", "Gurgaon", 0);
    expect(title).toContain("New Gurgaon");
    expect(title).not.toContain("New Gurgaon, Gurgaon");
  });

  it("includes city when not redundant", () => {
    const title = formatTitle("Sofa Repair", "Rohini", "Delhi", 0);
    expect(title).toContain("Rohini, Delhi");
  });

  it("produces different benefits for different localityIndex values", () => {
    const title0 = formatTitle("Sofa Repair", "Rohini", "Delhi", 0);
    const title1 = formatTitle("Sofa Repair", "Rohini", "Delhi", 1);
    expect(title0).not.toBe(title1);
  });

  it("produces same benefit for same localityIndex", () => {
    const titleA = formatTitle("Sofa Repair", "Rohini", "Delhi", 5);
    const titleB = formatTitle("Sofa Repair", "Rohini", "Delhi", 5);
    expect(titleA).toBe(titleB);
  });

  it("rotates through all 8 benefits", () => {
    const titles = Array.from({ length: 8 }, (_, i) =>
      formatTitle("Sofa Repair", "Rohini", "Delhi", i),
    );
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(8);
  });

  it("follows the pattern: {Service} in {Location} – {Benefit}", () => {
    const title = formatTitle("Sofa Repair", "Rohini", "Delhi", 0);
    expect(title).toBe(`Sofa Repair in Rohini, Delhi – ${BENEFITS[0]}`);
  });
});

// ─── formatH1 ────────────────────────────────────────────────────────────────

describe("formatH1", () => {
  it("never includes city — only service and locality", () => {
    const h1 = formatH1("Sofa Repair", "Rohini");
    expect(h1).toBe("Sofa Repair in Rohini");
    expect(h1).not.toContain("Delhi");
  });

  it("follows the pattern: {Service} in {Location}", () => {
    expect(formatH1("Recliner Repair", "Sector 56")).toBe(
      "Recliner Repair in Sector 56",
    );
  });
});

// ─── formatHeroSubtitle ──────────────────────────────────────────────────────

describe("formatHeroSubtitle", () => {
  it("rotates across 3 templates for indices 0, 1, 2", () => {
    const s0 = formatHeroSubtitle("Sofa Repair", "Rohini", "sofa", 0);
    const s1 = formatHeroSubtitle("Sofa Repair", "Rohini", "sofa", 1);
    const s2 = formatHeroSubtitle("Sofa Repair", "Rohini", "sofa", 2);
    expect(s0).not.toBe(s1);
    expect(s1).not.toBe(s2);
    expect(s0).not.toBe(s2);
  });

  it("index 3 wraps to template 0", () => {
    const s0 = formatHeroSubtitle("Sofa Repair", "Rohini", "sofa", 0);
    const s3 = formatHeroSubtitle("Sofa Repair", "Rohini", "sofa", 3);
    expect(s3).toBe(s0);
  });

  it("includes service, locality, and furnitureType in output", () => {
    const subtitle = formatHeroSubtitle(
      "Sofa Repair",
      "Rohini",
      "sofa",
      0,
    );
    expect(subtitle).toContain("Sofa Repair");
    expect(subtitle).toContain("Rohini");
    // Template 0 uses {service} and {locality} but not {furnitureType}
    // Template 1 uses {furnitureType}
    const subtitle1 = formatHeroSubtitle(
      "Sofa Repair",
      "Rohini",
      "sofa",
      1,
    );
    expect(subtitle1).toContain("sofa");
    expect(subtitle1).toContain("Rohini");
  });

  it("matches the expected template structure", () => {
    const subtitle = formatHeroSubtitle("Sofa Repair", "Sector 14", "sofa", 0);
    expect(subtitle).toBe(
      HERO_SUBTITLE_TEMPLATES[0]
        .replace("{service}", "Sofa Repair")
        .replace("{locality}", "Sector 14")
        .replace("{furnitureType}", "sofa"),
    );
  });
});

// ─── formatMetaDescription ───────────────────────────────────────────────────

describe("formatMetaDescription", () => {
  const testCases = [
    { service: "Sofa Repair", locality: "Rohini", index: 0 },
    { service: "Sofa Repair", locality: "Rohini", index: 1 },
    { service: "Sofa Repair", locality: "Rohini", index: 2 },
    { service: "Recliner Repair", locality: "Sector 56", index: 0 },
    { service: "Furniture Repair", locality: "Indirapuram", index: 1 },
    { service: "Foam Replacement", locality: "DLF Phase 3", index: 2 },
  ];

  it.each(testCases)(
    "template for $service/$locality (index $index) is 145–160 characters",
    ({ service, locality, index }) => {
      const desc = formatMetaDescription(service, locality, index);
      expect(desc.length).toBeGreaterThanOrEqual(145);
      expect(desc.length).toBeLessThanOrEqual(160);
    },
  );

  it("locality name appears in output", () => {
    const desc = formatMetaDescription("Sofa Repair", "Rohini", 0);
    expect(desc).toContain("Rohini");
  });

  it("service name appears in output", () => {
    const desc = formatMetaDescription("Sofa Repair", "Rohini", 0);
    expect(desc).toContain("Sofa Repair");
  });

  it("rotates across 3 templates", () => {
    const d0 = formatMetaDescription("Sofa Repair", "Rohini", 0);
    const d1 = formatMetaDescription("Sofa Repair", "Rohini", 1);
    const d2 = formatMetaDescription("Sofa Repair", "Rohini", 2);
    expect(d0).not.toBe(d1);
    expect(d1).not.toBe(d2);
  });
});

// ─── formatSchemaName ────────────────────────────────────────────────────────

describe("formatSchemaName", () => {
  it("matches formatH1 output exactly", () => {
    const h1 = formatH1("Sofa Repair", "Rohini");
    const schema = formatSchemaName("Sofa Repair", "Rohini");
    expect(schema).toBe(h1);
  });

  it("follows the pattern: {Service} in {Location}", () => {
    expect(formatSchemaName("Chair Repair", "Dwarka")).toBe(
      "Chair Repair in Dwarka",
    );
  });
});

// ─── formatHeroAlt ───────────────────────────────────────────────────────────

describe("formatHeroAlt", () => {
  it("contains furnitureType", () => {
    const alt = formatHeroAlt("sofa", "Rohini");
    expect(alt).toContain("sofa");
  });

  it("contains localityName", () => {
    const alt = formatHeroAlt("recliner", "Sector 56");
    expect(alt).toContain("Sector 56");
  });

  it("follows the expected pattern", () => {
    expect(formatHeroAlt("sofa", "Rohini")).toBe(
      "Technician repairing a sofa at a customer's home in Rohini",
    );
  });
});

// ─── localitySlugToIndex ─────────────────────────────────────────────────────

describe("localitySlugToIndex", () => {
  it("same slug always returns same number", () => {
    const a = localitySlugToIndex("rohini");
    const b = localitySlugToIndex("rohini");
    expect(a).toBe(b);
  });

  it("different slugs may produce different numbers", () => {
    const a = localitySlugToIndex("rohini");
    const b = localitySlugToIndex("sector-56");
    // These slugs have different char code sums
    expect(a).not.toBe(b);
  });

  it("returns a non-negative integer", () => {
    const values = [
      localitySlugToIndex("rohini"),
      localitySlugToIndex("sector-56"),
      localitySlugToIndex("greater-noida"),
      localitySlugToIndex(""),
    ];
    for (const v of values) {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(v)).toBe(true);
    }
  });

  it("returns 0 for empty string", () => {
    expect(localitySlugToIndex("")).toBe(0);
  });
});
