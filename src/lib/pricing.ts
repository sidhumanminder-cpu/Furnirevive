/**
 * Shared pricing utilities for all kitchen templates.
 * Single source of truth for price calculations across hub, renovation, budget, and price-range generators.
 */

export type CitySlug = "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad";
export type AffluenceLevel = "ultra-high" | "high" | "mid-high" | "mid" | "budget";

const CITY_MULT: Record<CitySlug, number> = {
  delhi: 1.1, gurgaon: 1.25, noida: 1.0, faridabad: 0.88, ghaziabad: 0.85,
};
const AFF_MIN: Record<AffluenceLevel, number> = {
  "ultra-high": 2.2, "high": 1.8, "mid-high": 1.4, "mid": 1.1, "budget": 0.8,
};
const AFF_MAX: Record<AffluenceLevel, number> = {
  "ultra-high": 4.5, "high": 3.5, "mid-high": 2.8, "mid": 2.2, "budget": 1.5,
};

const BASE_KITCHEN = 160000;
const BASE_RENOVATION = 35000;

function rnd(n: number) { return Math.round(n / 10000) * 10000; }

/** Kitchen installation price range (min/max) for a city + affluence combination */
export function calculateKitchenPrice(city: CitySlug, affluence: AffluenceLevel) {
  const cm = CITY_MULT[city];
  return { min: rnd(BASE_KITCHEN * cm * AFF_MIN[affluence]), max: rnd(BASE_KITCHEN * cm * AFF_MAX[affluence]) };
}

/** Renovation price range */
export function calculateRenovationPrice(city: CitySlug, affluence: AffluenceLevel) {
  const cm = CITY_MULT[city];
  return {
    min: rnd(BASE_RENOVATION * cm * AFF_MIN[affluence] * 0.5),
    max: rnd(BASE_RENOVATION * cm * AFF_MAX[affluence] * 0.8),
  };
}

/** Budget tier price range (used in budget/affordable pages) */
export function calculateBudgetRange(city: CitySlug, tier: "affordable" | "low-cost" | "mid" | "premium") {
  const base = CITY_MULT[city] * BASE_KITCHEN;
  const ranges = {
    "affordable": { min: rnd(base * 0.5), max: rnd(base * 0.9) },
    "low-cost":   { min: rnd(base * 0.6), max: rnd(base * 1.0) },
    "mid":        { min: rnd(base * 1.0), max: rnd(base * 1.8) },
    "premium":    { min: rnd(base * 1.8), max: rnd(base * 3.5) },
  };
  return ranges[tier];
}

/** Format price for display: ₹1.6L, ₹80K, etc. */
export function fmtPrice(n: number): string {
  return n >= 100000
    ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L`
    : `₹${(n / 1000).toFixed(0)}K`;
}
