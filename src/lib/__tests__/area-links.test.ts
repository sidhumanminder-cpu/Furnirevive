import { describe, expect, it } from "vitest";
import { resolveAreaHref } from "@/lib/area-links.ts";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";

describe("resolveAreaHref", () => {
  it("derives a link from the service prefix when the page exists", () => {
    expect(resolveAreaHref("Sector 46", "sofa-repair-gurgaon")).toBe("/sofa-repair-sector-46-gurgaon");
    expect(resolveAreaHref("DLF Phase 1", "sofa-repair-gurgaon")).toBe("/sofa-repair-dlf-phase-1");
  });
  it("returns null when no page exists, so the pill stays plain text", () => {
    expect(resolveAreaHref("Cyber City", "sofa-repair-gurgaon")).toBeNull();
    expect(resolveAreaHref("Anywhere", "unknown-page")).toBeNull();
  });
  it("honours explicit links only when the target exists", () => {
    expect(resolveAreaHref("X", "sofa-repair-gurgaon", { X: "chair-repair-gurgaon" })).toBe("/chair-repair-gurgaon");
    expect(resolveAreaHref("X", "sofa-repair-gurgaon", { X: "office-chair-repair-gurgaon" })).toBe("/office-chair-repair-gurgaon");
    expect(resolveAreaHref("X", "sofa-repair-gurgaon", { X: "no-such-page" })).toBeNull();
  });
  it("the areas added to the hubs all resolve to real pages", () => {
    const added: Record<string, string[]> = {
      "sofa-repair-gurgaon": ["Sector 46", "Palam Vihar", "DLF Gurgaon", "Chair Repair Gurgaon", "Office Chair Repair Gurgaon"],
      "furniture-repair-gurgaon": getPageBySlug("furniture-repair-gurgaon")?.localAreasSection?.areas ?? [],
      "sofa-repair-south-delhi": getPageBySlug("sofa-repair-south-delhi")?.localAreasSection?.areas ?? [],
    };
    for (const [slug, areas] of Object.entries(added)) {
      const sec = getPageBySlug(slug)?.localAreasSection;
      expect(sec, slug).toBeDefined();
      expect(areas.length).toBeGreaterThan(0);
      for (const area of areas) expect(resolveAreaHref(area, slug, sec!.links), `${slug}: ${area}`).not.toBeNull();
    }
  });
});
