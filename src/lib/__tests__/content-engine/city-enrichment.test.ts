import { describe, expect, it } from "vitest";
import { furnitureRepairNoida, furnitureRepairGhaziabad, furnitureRepairFaridabad } from "@/lib/seo-location-pages/ncr-hubs.ts";
import { furnitureRepairSouthDelhi } from "@/lib/seo-pages/delhi-micro-location-pages.ts";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";
import { FARIDABAD_SPECIALTY_PAGES } from "@/lib/seo-location-pages/city-enrichment.ts";
import { sofaUpholsteryDelhi, furnitureRepairDelhi } from "@/lib/seo-service-pages.ts";

const FURNITURE = [furnitureRepairNoida, furnitureRepairGhaziabad, furnitureRepairFaridabad, furnitureRepairSouthDelhi];

describe("legacy city page enrichment", () => {
  it("furniture pages reuse the Delhi price table rows exactly, retitled per city", () => {
    for (const p of FURNITURE) {
      expect(p.priceTable?.rows).toEqual(furnitureRepairDelhi.priceTable?.rows);
      expect(p.priceTable?.heading).toMatch(/^Furniture Repair Cost in .+ — 2026 Price Guide$/);
    }
    expect(furnitureRepairNoida.priceTable?.heading).toContain("Noida");
  });

  it("furniture pages reuse the generic repair signs", () => {
    for (const p of FURNITURE) expect(p.repairSigns).toEqual(furnitureRepairDelhi.repairSigns);
  });

  it("adds no testimonials to any of the five pages", () => {
    for (const p of [...FURNITURE, sofaUpholsteryDelhi]) expect(p.testimonials ?? []).toHaveLength(0);
  });

  it("keeps sofa-upholstery-delhi's existing price table", () => {
    expect(sofaUpholsteryDelhi.priceTable).toBeDefined();
  });

  it("appends city-specific sections and keeps the originals", () => {
    const headings = furnitureRepairNoida.contentSections.map((s) => s.heading);
    expect(headings).toContain("Furniture Repair Coverage Across Noida");
    expect(headings[0]).toBe("Furniture Repair Services We Offer in Noida");
    expect(furnitureRepairNoida.contentSections.map((s) => s.body.join(" ")).join(" ")).toMatch(/1–2 hours/);
  });

  it("different cities get different section text", () => {
    const a = JSON.stringify(furnitureRepairNoida.contentSections.slice(-3));
    const b = JSON.stringify(furnitureRepairGhaziabad.contentSections.slice(-3));
    expect(a).not.toEqual(b);
  });

  it("adds distinct FAQs without duplicating existing questions", () => {
    for (const p of [...FURNITURE, sofaUpholsteryDelhi]) {
      const qs = p.faqs.map((f) => f.question.toLowerCase());
      expect(new Set(qs).size).toBe(qs.length);
    }
    expect(furnitureRepairNoida.faqs.length).toBe(7 + 9);
    expect(sofaUpholsteryDelhi.faqs.length).toBe(12 + 7);
  });

  it("only Faridabad gets the specialty section, and every link resolves to a real page", () => {
    const has = (p: typeof furnitureRepairNoida) => p.contentSections.some((s) => /Brand-Specific/.test(s.heading));
    expect(has(furnitureRepairFaridabad)).toBe(true);
    for (const p of [furnitureRepairNoida, furnitureRepairGhaziabad, furnitureRepairSouthDelhi, sofaUpholsteryDelhi]) expect(has(p)).toBe(false);
    for (const sp of FARIDABAD_SPECIALTY_PAGES) expect(getPageBySlug(sp.slug)).toBeDefined();
  });
});
