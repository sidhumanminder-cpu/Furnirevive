import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { buildFaqs, buildHubSchema } from "../_components/HubSections.tsx";
import ProtectedHubGrid from "../_components/ProtectedHubGrid.tsx";
import {
  HUB_SERVICES,
  SERVICE_HUB_CONFIG,
  getHubHero,
  getHubLocalities,
  getHubTarget,
  getProtectTarget,
  groupByCluster,
} from "./hub-config.ts";
import { HERO_IMAGE_REGISTRY } from "@/lib/seoConfigs/hero-image-registry.ts";

const words = (s: string) => s.split(/\s+/);

const REPLACE = words(
  "recliner-repair-noida recliner-repair-ghaziabad recliner-repair-faridabad recliner-repair-gurgaon recliner-repair-south-delhi recliner-repair-west-delhi recliner-repair-dwarka sofa-repair-east-delhi sofa-repair-west-delhi furniture-repair-south-delhi furniture-repair-west-delhi furniture-repair-east-delhi sofa-upholstery-noida sofa-upholstery-gurgaon sofa-upholstery-north-delhi sofa-upholstery-faridabad",
);
const CREATE = words(
  "sofa-repair-north-delhi sofa-repair-central-delhi sofa-upholstery-ghaziabad sofa-upholstery-south-delhi sofa-upholstery-west-delhi sofa-upholstery-east-delhi sofa-upholstery-central-delhi sofa-upholstery-dwarka recliner-repair-north-delhi recliner-repair-east-delhi recliner-repair-central-delhi furniture-repair-north-delhi furniture-repair-central-delhi",
);
const PROTECT = words(
  "sofa-repair-delhi sofa-repair-noida furniture-repair-delhi sofa-repair-ghaziabad furniture-repair-gurgaon sofa-repair-gurgaon sofa-repair-faridabad furniture-repair-ghaziabad furniture-repair-faridabad furniture-repair-noida sofa-upholstery-delhi sofa-repair-dwarka furniture-repair-dwarka recliner-repair-delhi sofa-repair-south-delhi",
);
const HOLD = HUB_SERVICES.flatMap((s) => ["chandigarh", "mohali", "panchkula"].map((c) => `${s}-${c}`));

const render = (slug: string) =>
  renderToString(
    <MemoryRouter>
      <ProtectedHubGrid slug={slug} />
    </MemoryRouter>,
  );

describe("service hub routing", () => {
  it("covers 16 REPLACE + 13 CREATE + 15 PROTECT + 12 HOLD", () => {
    expect([REPLACE.length, CREATE.length, PROTECT.length, HOLD.length]).toEqual([16, 13, 15, 12]);
  });

  it.each([...REPLACE, ...CREATE])("%s renders the new hub template", (slug) => {
    expect(getHubTarget(slug)).toBeDefined();
    expect(getProtectTarget(slug)).toBeUndefined();
  });

  it.each(PROTECT)("%s keeps its existing page and only gains the locality grid", (slug) => {
    expect(getHubTarget(slug)).toBeUndefined();
    expect(getProtectTarget(slug)).toBeDefined();
    expect(render(slug)).toContain("data-hub-locality-grid");
  });

  it.each(HOLD)("%s is untouched (no hub, no grid)", (slug) => {
    expect(getHubTarget(slug)).toBeUndefined();
    expect(getProtectTarget(slug)).toBeUndefined();
    expect(render(slug)).toBe("");
  });

  it("groups protected city pages by cluster with a per-cluster cap", () => {
    const html = render("sofa-repair-noida");
    expect(html).toContain("Sofa Repair in Noida Sectors");
    expect(html).toContain("Sofa Repair in Greater Noida");
    expect((html.match(/href="/g) ?? []).length).toBeLessThanOrEqual(60);
  });

  it("caps a protected cluster page at 60 links", () => {
    expect((render("sofa-repair-south-delhi").match(/href="/g) ?? []).length).toBe(60);
  });
});

describe("hub locality grouping", () => {
  it("groups Noida by cluster", () => {
    const target = getHubTarget("recliner-repair-noida");
    expect(target).toBeDefined();
    if (!target) return;
    const clusters = groupByCluster(getHubLocalities(target.service, target.area)).map((g) => g.cluster);
    expect(clusters).toEqual(expect.arrayContaining(["noidaSectors", "greaterNoida", "indirapuram", "greaterNoidaWest"]));
  });
});

describe("hub schema", () => {
  it("uses the service's own price and the city-level address", () => {
    const target = getHubTarget("recliner-repair-gurgaon");
    expect(target).toBeDefined();
    if (!target) return;
    const business = buildHubSchema(target, buildFaqs(target))["@graph"][0];
    expect(JSON.stringify(business)).toContain("from ₹1,499");
    expect(JSON.stringify(business)).not.toContain("₹599");
    expect(JSON.stringify(business)).toContain("Gurugram");
  });
});

describe("hub hero images", () => {
  it.each([...REPLACE, ...CREATE])("%s shows an image of the right furniture", (slug) => {
    const target = getHubTarget(slug);
    expect(target).toBeDefined();
    if (!target) return;
    const hero = getHubHero(target);
    expect(hero).not.toBeNull();
    const expected = target.service === "recliner-repair" ? "recliner" : target.service === "furniture-repair" ? "furniture" : "sofa";
    expect(hero?.furnitureType).toBe(expected);
    expect(hero?.tags).not.toContain("home-theater");
    expect(hero?.tags).not.toContain("gaming-chair");
    expect(SERVICE_HUB_CONFIG[target.service]).toBeDefined();
    expect(HERO_IMAGE_REGISTRY[hero?.id ?? ""]).toBeDefined();
  });
});

describe("hub intro and case studies", () => {
  it("builds the intro only from real registry landmarks", async () => {
    const { buildAreaIntro } = await import("../_components/HubSections.tsx");
    const { getHubLandmarks, getHubTarget, HUB_SERVICES } = await import("./hub-config.ts");
    const { LOCALITY_REGISTRY } = await import("@/lib/registry/locality-registry.ts");
    const all = new Set(LOCALITY_REGISTRY.flatMap((l) => l.landmarks));
    for (const service of HUB_SERVICES) {
      const target = getHubTarget(`${service}-noida`) ?? getHubTarget(`${service}-gurgaon`);
      if (!target) continue;
      const marks = getHubLandmarks(service, target.area);
      expect(marks.length).toBeGreaterThan(0);
      for (const m of marks) expect(all.has(m)).toBe(true);
      expect(buildAreaIntro(target)).toContain(marks[0]);
    }
  });

  it("gives different intros to different hubs", async () => {
    const { buildAreaIntro } = await import("../_components/HubSections.tsx");
    const { getHubTarget } = await import("./hub-config.ts");
    const a = getHubTarget("recliner-repair-gurgaon");
    const b = getHubTarget("furniture-repair-west-delhi");
    if (!a || !b) throw new Error("missing hub targets");
    expect(buildAreaIntro(a).replace(a.area.label, "X")).not.toEqual(buildAreaIntro(b).replace(b.area.label, "X"));
  });
});
