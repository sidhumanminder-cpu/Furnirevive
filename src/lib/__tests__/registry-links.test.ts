import { describe, expect, it } from "vitest";
import { buildPyramidLinks } from "@/lib/content-engine/modules/pyramid-links.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import { pageExistsAt, resolveCityHub } from "@/lib/registry/link-verify.ts";

const locality = (slug: string) => LOCALITY_REGISTRY.find((l) => l.slug === slug)!;
const service = (slug: string) => SERVICE_REGISTRY.find((s) => s.slug === slug)!;

describe("pyramid-links verification", () => {
  it("only links to real pages, never to itself, never twice", () => {
    for (const [loc, svc] of [["jor-bagh", "sofa-repair"], ["mg-road-gurgaon", "sofa-upholstery"], ["crossings-republik", "furniture-repair"]]) {
      const links = buildPyramidLinks(locality(loc), service(svc)).props.links.map((l) => l.href);
      expect(new Set(links).size).toBe(links.length);
      for (const href of links) expect(pageExistsAt(href), href).toBe(true);
      expect(links).not.toContain(svc === "sofa-upholstery" ? `/${svc}-${loc}` : `/${svc}-${loc}`);
    }
  });
  it("keeps Ghaziabad areas off Noida hubs", () => {
    const links = buildPyramidLinks(locality("crossings-republik"), service("sofa-repair")).props.links.map((l) => l.href);
    expect(links[0]).toBe("/sofa-repair-ghaziabad");
    expect(links).not.toContain("/sofa-repair-noida");
  });
});

describe("resolveCityHub", () => {
  it("uses the service's own hub, else a sibling hub, else null", () => {
    expect(resolveCityHub("sofa-repair", "gurgaon")).toBe("/sofa-repair-gurgaon");
    expect(resolveCityHub("office-furniture-repair", "noida")).toBe("/furniture-repair-noida");
    expect(resolveCityHub("sofa-repair", "nowhere")).toBeNull();
  });
});
