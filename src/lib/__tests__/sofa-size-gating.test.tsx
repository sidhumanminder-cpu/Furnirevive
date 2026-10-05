import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { sofaSizePricingDecision, sofaSizeLocality } from "@/lib/seoConfigs/sofa-size-gating.ts";
import { SOFA_SIZE_PRICES } from "@/lib/seoConfigs/pricing-data.ts";
import SofaSizePricing from "@/components/seo/SofaSizePricing.tsx";
import { getPageBySlug } from "@/lib/seo-pages/registry.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

const page = (slug: string): SeoPageData => {
  const p = getPageBySlug(slug);
  if (!p) throw new Error(`missing ${slug}`);
  return p;
};
const stub = (over: Partial<SeoPageData>): SeoPageData => ({ ...page("sofa-repair-delhi"), ...over });

describe("sofa size pricing gating", () => {
  it("shows for sofa-repair pages", () => {
    expect(sofaSizePricingDecision(page("sofa-repair-delhi"))).toBe("show");
    expect(sofaSizePricingDecision(page("sofa-repair-saket"))).toBe("show");
  });
  it("does not show for recliner or furniture pages", () => {
    expect(sofaSizePricingDecision(page("recliner-repair-delhi"))).toBe("not-sofa-repair");
    expect(sofaSizePricingDecision(page("furniture-repair-delhi"))).toBe("not-sofa-repair");
  });
  it("skips tricity cities", () => {
    for (const cityKey of ["chandigarh", "mohali", "panchkula"] as const) {
      expect(sofaSizePricingDecision(stub({ cityKey }))).toBe("tricity");
    }
  });
  it("skips when a seater or L-shape row already exists (also for the widened label)", () => {
    const wide = stub({ priceTable: { rows: [{ service: "L-Shaped / Corner / Sectional Sofa Repair", price: "₹1" }] } });
    expect(sofaSizePricingDecision(wide)).toBe("has-size-rows");
    const withRow = stub({ priceTable: { rows: [{ service: "3 Seater Sofa Repair", price: "₹1" }] } });
    const withL = stub({ priceTable: { rows: [{ service: "L-Shape Sofa Repair", price: "₹1" }] } });
    const without = stub({ priceTable: { rows: [{ service: "Foam Replacement", price: "₹1" }] } });
    expect(sofaSizePricingDecision(withRow)).toBe("has-size-rows");
    expect(sofaSizePricingDecision(withL)).toBe("has-size-rows");
    expect(sofaSizePricingDecision(without)).toBe("show");
  });
  it("derives the locality from the H1, else Delhi NCR", () => {
    expect(sofaSizeLocality(stub({ h1: "Sofa Repair in Sector 49" }))).toBe("Sector 49");
    expect(sofaSizeLocality(stub({ h1: "Sofa Repair in Noida — Doorstep" }))).toBe("Noida");
    expect(sofaSizeLocality(stub({ h1: "Sofa fixing" }))).toBe("Delhi NCR");
  });
  it("renders the heading, all five rows and the prefilled WhatsApp link", () => {
    const html = renderToString(<SofaSizePricing locality="Saket" />).replace(/<!-- -->/g, "");
    expect(html).toContain("Sofa Repair Cost in Saket by Sofa Size");
    expect(html).toContain("₹999 onwards");
    expect(html).toContain("Sofa Frame Repair");
    expect(html).toContain("L-Shaped / Corner / Sectional Sofa Repair");
    expect(html).toContain("Sofa-Cum-Bed Repair");
    expect(html.match(/<tr/g)?.length).toBe(1 + SOFA_SIZE_PRICES.length);
    expect(SOFA_SIZE_PRICES).toHaveLength(8);
    expect(html).toContain("I%20need%20a%20sofa%20repair%20quote%20in%20Saket");
  });
});
