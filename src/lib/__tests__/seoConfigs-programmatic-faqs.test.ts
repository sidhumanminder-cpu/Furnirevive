import { describe, expect, it } from "vitest";
import { composePage } from "@/lib/seoConfigs/page-composition-engine.ts";
import { UPHOLSTERY_FAQS } from "@/lib/upholsteryConfigs/upholsteryFaqs.ts";
import type { SeoPageData } from "@/lib/seo-constants.ts";

const faqsFor = (service: string): string[] => {
  const data = { slug: `${service}-sector-67-gurgaon`, serviceKey: service } as unknown as SeoPageData;
  return composePage(data).faqs.map((f) => `${f.question} ${f.answer}`);
};
const pricing = (service: string): string =>
  faqsFor(service).find((f) => /^How much/i.test(f)) ?? "";

describe("programmatic FAQ pipeline is service-aware", () => {
  it("recliner and furniture pages no longer return identical FAQs", () => {
    expect(faqsFor("recliner-repair")).not.toEqual(faqsFor("furniture-repair"));
    expect(faqsFor("sofa-repair")).not.toEqual(faqsFor("recliner-repair"));
  });

  it("uses the real headline price for each service", () => {
    expect(pricing("sofa-repair")).toContain("₹500");
    expect(pricing("recliner-repair")).toContain("₹1,499");
    expect(pricing("furniture-repair")).toContain("₹599");
    expect(pricing("sofa-upholstery")).toContain("₹2,000");
  });

  it("recliner and furniture FAQs do not carry sofa-only wording or the stale ₹999 headline", () => {
    for (const s of ["recliner-repair", "furniture-repair"]) {
      const all = faqsFor(s).join(" ");
      expect(all).not.toMatch(/reupholster imported designer sofas/i);
      expect(all).not.toContain("₹999");
    }
  });

  it("upholstery route pool prices per seat and never says sofa repair at ₹999", () => {
    const cost = UPHOLSTERY_FAQS.find((f) => /cost/i.test(f.question));
    expect(cost?.answer).toContain("₹2,000 per seat");
    expect(UPHOLSTERY_FAQS.map((f) => f.answer).join(" ")).not.toContain("₹999");
  });
});
