import { describe, expect, it } from "vitest";
import { getSameCityAreaNames, resolveAreaHref } from "@/lib/area-links.ts";
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

describe("resolveAreaHref: service, city and fallback rules", () => {
  it("links city-name pills on locality pages to the city hub", () => {
    expect(resolveAreaHref("Gurgaon", "sofa-repair-sector-49-gurgaon")).toBe("/sofa-repair-gurgaon");
  });
  it("resolves sectors within the same city", () => {
    expect(resolveAreaHref("Sector 18", "sofa-repair-noida")).toBe("/sofa-repair-noida-sector-18");
    expect(resolveAreaHref("Sector 45", "sofa-repair-gurgaon")).toBe("/sofa-repair-gurgaon-sector-45");
  });
  it("checks south-delhi before delhi", () => {
    expect(resolveAreaHref("Saket", "furniture-repair-south-delhi")).toBe("/furniture-repair-saket");
  });
  it("never links a Delhi neighbourhood from a Gurgaon or Noida page", () => {
    expect(resolveAreaHref("Saket", "sofa-repair-gurgaon")).toBeNull();
    expect(resolveAreaHref("Saket", "sofa-repair-noida")).toBeNull();
    expect(resolveAreaHref("Saket", "sofa-repair-sector-49-gurgaon")).toBeNull();
  });
  it("falls back to furniture-repair in the same city only when the service page is missing", () => {
    expect(resolveAreaHref("Vaishali", "sofa-repair-indirapuram-ghaziabad")).toBe("/sofa-repair-vaishali-ghaziabad");
    expect(resolveAreaHref("Indirapuram Ghaziabad", "chair-repair-ghaziabad")?.startsWith("/furniture-repair-")).toBe(true);
  });
  it("never resolves to the page itself", () => {
    for (const [area, slug] of [["Gurgaon", "sofa-repair-gurgaon"], ["Noida", "sofa-repair-noida"], ["Delhi", "sofa-repair-delhi"]] as const) {
      expect(resolveAreaHref(area, slug)).not.toBe(`/${slug}`);
    }
  });
  it("links the added Gurgaon hub areas", () => {
    expect(resolveAreaHref("Cyber City", "sofa-repair-gurgaon", { "Cyber City": "sofa-repair-gurgaon-dlf-cyber-city" })).toBe("/sofa-repair-gurgaon-dlf-cyber-city");
    expect(resolveAreaHref("MG Road", "sofa-repair-gurgaon")).toBeNull();
    expect(resolveAreaHref("Manesar", "sofa-repair-gurgaon")).toBeNull();
  });
});

describe("getSameCityAreaNames", () => {
  const CITY_WORDS = /(noida|ghaziabad|faridabad)/i;
  it("returns only Gurgaon pages, never the page itself, at most 14", () => {
    const slug = "sofa-repair-sector-49-gurgaon";
    const names = getSameCityAreaNames(slug);
    expect(names.length).toBeGreaterThan(0);
    expect(names.length).toBeLessThanOrEqual(14);
    for (const n of names) {
      const href = resolveAreaHref(n, slug);
      expect(href).not.toBeNull();
      expect(href).not.toBe(`/${slug}`);
      expect(href).toMatch(/gurgaon|dlf|sohna|golf|sushant|south-city|palam|dwarka-expressway|emerald|udyog/);
      expect(CITY_WORDS.test(href ?? "")).toBe(false);
    }
    expect(names).not.toContain("Saket");
  });
  it("returns Delhi pages only for a Delhi page", () => {
    const slug = "sofa-repair-hauz-khas-delhi";
    const names = getSameCityAreaNames(slug);
    expect(names.length).toBeGreaterThan(0);
    for (const n of names) expect(CITY_WORDS.test(resolveAreaHref(n, slug) ?? "")).toBe(false);
  });
  it("is stable across calls", () => {
    expect(getSameCityAreaNames("sofa-repair-noida-sector-18")).toEqual(getSameCityAreaNames("sofa-repair-noida-sector-18"));
  });
});

describe("getSameCityAreaNames ordering", () => {
  const slugs = ["sofa-repair-sector-49-gurgaon", "sofa-repair-hauz-khas-delhi", "sofa-repair-noida-sector-18"];
  it("is deterministic, capped at 14 and never includes the page itself", () => {
    for (const s of slugs) {
      const names = getSameCityAreaNames(s);
      expect(names).toEqual(getSameCityAreaNames(s));
      expect(names.length).toBeLessThanOrEqual(14);
      expect(new Set(names).size).toBe(names.length);
      for (const n of names) expect(resolveAreaHref(n, s)).not.toBe(`/${s}`);
    }
  });
  it("has no cross-city names", () => {
    const other = /noida|ghaziabad|faridabad|gurgaon/;
    for (const n of getSameCityAreaNames("sofa-repair-hauz-khas-delhi")) expect(resolveAreaHref(n, "sofa-repair-hauz-khas-delhi") ?? "").not.toMatch(other);
    for (const n of getSameCityAreaNames("sofa-repair-sector-49-gurgaon")) expect(resolveAreaHref(n, "sofa-repair-sector-49-gurgaon") ?? "").not.toMatch(/noida|ghaziabad|faridabad/);
  });
  it("puts real neighbours first", () => {
    expect(getSameCityAreaNames("sofa-repair-hauz-khas-delhi").slice(0, 2)).toEqual(["Green Park", "Safdarjung Enclave"]);
    expect(getSameCityAreaNames("sofa-repair-sector-49-gurgaon").slice(0, 2)).toEqual(["Sector 51", "Sector 53"]);
    expect(getSameCityAreaNames("sofa-repair-sector-49-gurgaon").slice(0, 3)).toContain("Golf Course Extension");
  });
  it("rotates the remainder by slug so different pages get different tails", () => {
    const a = getSameCityAreaNames("sofa-repair-sector-49-gurgaon").slice(5);
    const b = getSameCityAreaNames("sofa-repair-sector-50-gurgaon").slice(5);
    expect(a).not.toEqual(b);
  });
});
