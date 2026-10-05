import { describe, expect, it } from "vitest";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { getEffectiveContentWeight } from "@/lib/registry/effective-content-weight.ts";

describe("getEffectiveContentWeight", () => {
  it("never lowers any locality's content depth", () => {
    const lowered = LOCALITY_REGISTRY.filter((l) => getEffectiveContentWeight(l) < l.contentWeight);
    expect(lowered).toEqual([]);
  });

  it("leaves tier 100 untouched and never assigns 100 from demand alone", () => {
    for (const l of LOCALITY_REGISTRY) {
      const eff = getEffectiveContentWeight(l);
      if (l.contentWeight === 100) expect(eff).toBe(100);
      else expect(eff).toBeLessThan(100);
    }
  });

  it("raises high-demand shallow localities and keeps low-demand ones as they are", () => {
    expect(getEffectiveContentWeight({ contentWeight: 70, searchPriority: 4 })).toBe(90);
    expect(getEffectiveContentWeight({ contentWeight: 50, searchPriority: 3 })).toBe(70);
    expect(getEffectiveContentWeight({ contentWeight: 70, searchPriority: 2 })).toBe(70);
    expect(getEffectiveContentWeight({ contentWeight: 90, searchPriority: 1 })).toBe(90);
  });
});
