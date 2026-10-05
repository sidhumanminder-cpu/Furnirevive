import type { SeoPageData } from "@/lib/seo-constants.ts";
import { resolveServiceKey } from "@/lib/seoConfigs/location-graph.ts";

const TRICITY = new Set(["chandigarh", "mohali", "panchkula"]);
/** Price rows that already give per-size tiers, e.g. "3 Seater Sofa Repair" or "L-Shape Sofa". */
const SIZE_ROW = /^\s*(single|1|2|3)[\s-]*seater|^\s*l[\s-]*shape/i;

export type SofaSizeDecision = "show" | "not-sofa-repair" | "tricity" | "has-size-rows";

/** Decides whether a page gets the "Sofa Repair Cost by Sofa Size" block, and why not if it doesn't. */
export function sofaSizePricingDecision(data: SeoPageData): SofaSizeDecision {
  const isSofaRepair = resolveServiceKey(data) === "sofa-repair" || data.slug.startsWith("sofa-repair-");
  if (!isSofaRepair) return "not-sofa-repair";
  if (data.cityKey && TRICITY.has(data.cityKey)) return "tricity";
  if (data.priceTable?.rows.some((r) => SIZE_ROW.test(r.service))) return "has-size-rows";
  return "show";
}

/** Place name for the heading: the "in X" part of the H1, else "Delhi NCR". */
export function sofaSizeLocality(data: SeoPageData): string {
  const match = data.h1.match(/\bin\s+(.+?)(?:\s+[—–|]|$)/i);
  return match ? match[1].trim() : "Delhi NCR";
}
