import { describe, expect, it } from "vitest";
import { buildSeoPageData } from "@/lib/seoConfigs/create-seo-page.ts";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";
import type { LocalitySlug } from "@/lib/seoConfigs/repair-scenarios.ts";

const A = "sector-67-gurgaon" as LocalitySlug;
const B = "adarsh-nagar-delhi" as LocalitySlug;
const intro = (svc: Parameters<typeof buildSeoPageData>[0], l: LocalitySlug) => buildSeoPageData(svc, l).intro.join(" ");
const normalise = (t: string, l: LocalitySlug) => t.split(getLocalityInfo(`sofa-repair-${l}`).name).join("X");

describe("programmatic locality intro and nearby areas", () => {
  it("different localities produce different intro text beyond the name", () => {
    const a = normalise(intro("sofa-repair", A), A);
    const b = normalise(intro("sofa-repair", B), B);
    expect(a).not.toEqual(b);
  });

  it("names a real landmark, the property type and response time", () => {
    const info = getLocalityInfo(`sofa-repair-${A}`);
    const text = intro("recliner-repair", A);
    expect(text).toContain(info.propertyType);
    const named = info.landmarks.filter((l) => !info.propertyType.toLowerCase().includes(l.toLowerCase()));
    for (const l of named.slice(0, 2)) expect(text).toContain(l);
    expect(text).toContain(info.propertyType);
    expect(text).toContain(info.responseTime);
  });

  it("lists only real adjacent areas in a nearby-areas section", () => {
    const info = getLocalityInfo(`furniture-repair-${A}`);
    const section = buildSeoPageData("furniture-repair", A).contentSections[0];
    expect(section.body.join(" ")).toContain(info.adjacentAreas[0]);
    expect(info.adjacentAreas.slice(0, 6).some((x) => section.body[0].includes(x))).toBe(true);
  });
});

describe("programmatic whyChoose, process and benefits", () => {
  const strip = (t: string, l: LocalitySlug) => t.split(getLocalityInfo(`sofa-repair-${l}`).name).join("X");
  const text = (l: LocalitySlug) => {
    const d = buildSeoPageData("sofa-repair", l);
    return strip(JSON.stringify([d.whyChoose, d.process]), l);
  };

  it("whyChoose and process differ between localities beyond the name", () => {
    expect(text(A)).not.toEqual(text(B));
  });

  it("uses real property type, neighbour and response time", () => {
    const info = getLocalityInfo(`sofa-repair-${A}`);
    const d = buildSeoPageData("sofa-repair", A);
    expect(d.whyChoose[0].description).toContain(info.propertyType);
    expect(d.whyChoose[0].description).toContain(info.adjacentAreas[0]);
    expect(d.process[1].description).toContain(info.responseTime);
  });

  it("keeps benefits as sitewide claims, identical across localities", () => {
    expect(buildSeoPageData("sofa-repair", A).benefits).toEqual(buildSeoPageData("sofa-repair", B).benefits);
  });
});
