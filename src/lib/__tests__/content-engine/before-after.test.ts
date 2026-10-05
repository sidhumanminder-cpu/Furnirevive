import { describe, expect, it } from "vitest";
import { buildPageSections } from "@/lib/content-engine/pipeline.ts";
import { buildBeforeAfter } from "@/lib/content-engine/modules/before-after.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";

const locality = LOCALITY_REGISTRY[0];
const service = (slug: string) => {
  const s = SERVICE_REGISTRY.find((x) => x.slug === slug);
  if (!s) throw new Error(`missing service ${slug}`);
  return s;
};

describe("before-after section", () => {
  it("is scoped to the page's own service for sofa and recliner", () => {
    expect(buildBeforeAfter(locality, service("sofa-repair"))?.props.service).toBe("sofa-repair");
    expect(buildBeforeAfter(locality, service("recliner-repair"))?.props.service).toBe("recliner-repair");
  });

  it.each(["office-chair-repair", "office-furniture-repair", "modular-kitchen"])(
    "renders nothing for %s (no case studies to show)",
    (slug) => {
      expect(buildBeforeAfter(locality, service(slug))).toBeNull();
      expect(buildPageSections(locality, service(slug)).some((s) => s.type === "before-after")).toBe(false);
    },
  );

  it("furniture and upholstery borrow sofa/recliner studies", () => {
    expect(buildBeforeAfter(locality, service("furniture-repair"))?.props.service).toBe("furniture-repair");
    expect(buildBeforeAfter(locality, service("sofa-upholstery"))?.props.service).toBe("sofa-upholstery");
  });

  it("is included in sofa and recliner page sections", () => {
    for (const slug of ["sofa-repair", "recliner-repair", "furniture-repair", "sofa-upholstery"]) {
      expect(buildPageSections(locality, service(slug)).filter((s) => s.type === "before-after")).toHaveLength(1);
    }
  });
});
