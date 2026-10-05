import { describe, expect, it } from "vitest";
import { buildIntro, landmarkPhrase } from "@/lib/content-engine/modules/intro.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import type { LocalityEntry } from "@/lib/registry/types.ts";

const service = SERVICE_REGISTRY.find((s) => s.slug === "sofa-repair");
const base = LOCALITY_REGISTRY.find((l) => l.landmarks.length >= 2);

const text = (l: LocalityEntry) => JSON.stringify(buildIntro(l, service!));

describe("intro landmarks", () => {
  it("fixtures exist", () => {
    expect(service).toBeDefined();
    expect(base).toBeDefined();
  });

  it("names two landmarks when a locality has two or more", () => {
    const l = base!;
    const out = text(l);
    expect(out).toContain(`${l.landmarks[0]} and ${l.landmarks[1]}`);
  });

  it("renders differently for 2 landmarks than for 1", () => {
    const l = base!;
    const one = { ...l, landmarks: [l.landmarks[0]] };
    expect(text(l)).not.toBe(text(one));
    expect(text(one)).toContain(`With ${l.landmarks[0]} nearby`);
    expect(text(one)).not.toContain(`${l.landmarks[0]} and`);
  });

  it("single-landmark and no-landmark wording is unchanged", () => {
    expect(landmarkPhrase({ landmarks: ["Metro Station"] })).toBe("Metro Station");
    expect(landmarkPhrase({ landmarks: [] })).toBeUndefined();
  });

  it("only uses landmarks from the locality's own data", () => {
    const l = base!;
    expect(landmarkPhrase(l)).toBe(`${l.landmarks[0]} and ${l.landmarks[1]}`);
  });
});
