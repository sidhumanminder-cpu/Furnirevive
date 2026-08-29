import type { GeneratorType } from "./market-registry.ts";

export const CITY_REGISTRY_VERSION = 1;

export type CityEntry = {
  readonly slug: string;
  readonly displayName: string;
  readonly marketSlug: string;
  readonly state: string;
  readonly canonicalKitchenSlug: string;
  readonly pricingMultiplier: number;
  readonly nearbyCities: readonly string[];
  readonly enabledGenerators: readonly GeneratorType[];
  readonly isActive: boolean;
};

export const CITY_REGISTRY: readonly CityEntry[] = [
  {
    slug: "delhi",
    displayName: "Delhi",
    marketSlug: "delhi-ncr",
    state: "Delhi",
    canonicalKitchenSlug: "modular-kitchen-delhi",
    pricingMultiplier: 1.1,
    nearbyCities: ["gurgaon", "noida", "ghaziabad", "faridabad"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "gurgaon",
    displayName: "Gurgaon",
    marketSlug: "delhi-ncr",
    state: "Haryana",
    canonicalKitchenSlug: "modular-kitchen-gurgaon",
    pricingMultiplier: 1.25,
    nearbyCities: ["delhi", "faridabad", "noida"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "noida",
    displayName: "Noida",
    marketSlug: "delhi-ncr",
    state: "Uttar Pradesh",
    canonicalKitchenSlug: "modular-kitchen-noida",
    pricingMultiplier: 1.0,
    nearbyCities: ["delhi", "ghaziabad", "gurgaon"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "ghaziabad",
    displayName: "Ghaziabad",
    marketSlug: "delhi-ncr",
    state: "Uttar Pradesh",
    canonicalKitchenSlug: "modular-kitchen-ghaziabad",
    pricingMultiplier: 0.85,
    nearbyCities: ["noida", "delhi", "faridabad"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "repair"],
    isActive: true,
  },
  {
    slug: "faridabad",
    displayName: "Faridabad",
    marketSlug: "delhi-ncr",
    state: "Haryana",
    canonicalKitchenSlug: "modular-kitchen-faridabad",
    pricingMultiplier: 0.88,
    nearbyCities: ["delhi", "noida", "gurgaon"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "repair"],
    isActive: true,
  },
  {
    slug: "chandigarh",
    displayName: "Chandigarh",
    marketSlug: "chandigarh-tricity",
    state: "Chandigarh (UT)",
    canonicalKitchenSlug: "modular-kitchen-chandigarh",
    pricingMultiplier: 1.05,
    nearbyCities: ["mohali", "panchkula"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "mohali",
    displayName: "Mohali",
    marketSlug: "chandigarh-tricity",
    state: "Punjab",
    canonicalKitchenSlug: "modular-kitchen-mohali",
    pricingMultiplier: 1.0,
    nearbyCities: ["chandigarh", "panchkula"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "panchkula",
    displayName: "Panchkula",
    marketSlug: "chandigarh-tricity",
    state: "Haryana",
    canonicalKitchenSlug: "modular-kitchen-panchkula",
    pricingMultiplier: 1.0,
    nearbyCities: ["chandigarh", "mohali"],
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
] as const;

export function getCityBySlug(slug: string): CityEntry | undefined {
  return CITY_REGISTRY.find((c) => c.slug === slug && c.isActive);
}

export function getCitiesByMarket(marketSlug: string): readonly CityEntry[] {
  return CITY_REGISTRY.filter((c) => c.marketSlug === marketSlug && c.isActive);
}

/** Convenience: get pricingMultiplier for a city slug, falls back to 1.0 */
export function getCityPricingMultiplier(citySlug: string): number {
  return getCityBySlug(citySlug)?.pricingMultiplier ?? 1.0;
}
