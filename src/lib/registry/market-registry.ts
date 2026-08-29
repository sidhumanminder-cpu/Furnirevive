export const MARKET_REGISTRY_VERSION = 1;

export type GeneratorType =
  | "hub" | "layout" | "material" | "style" | "finish"
  | "budget" | "renovation" | "commercial" | "repair";

export type MarketEntry = {
  readonly slug: string;
  readonly displayName: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly primaryCity: string;
  readonly cities: readonly string[];
  readonly defaultCurrency: string;
  readonly defaultPhone: string;
  readonly schemaAreaServed: readonly string[];
  readonly breadcrumbsLabel: string;
  readonly footerLabel: string;
  readonly enabledGenerators: readonly GeneratorType[];
  readonly isActive: boolean;
};

export const MARKET_REGISTRY: readonly MarketEntry[] = [
  {
    slug: "delhi-ncr",
    displayName: "Delhi NCR",
    shortName: "Delhi NCR",
    tagline: "Premium Modular Kitchen Design & Installation across Delhi NCR",
    primaryCity: "delhi",
    cities: ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"],
    defaultCurrency: "INR",
    defaultPhone: "+91-9876543210",
    schemaAreaServed: ["Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"],
    breadcrumbsLabel: "Delhi NCR",
    footerLabel: "Delhi NCR",
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
  {
    slug: "chandigarh-tricity",
    displayName: "Chandigarh Tricity",
    shortName: "Tricity",
    tagline: "Premium Modular Kitchen Design & Installation across Chandigarh, Mohali & Panchkula",
    primaryCity: "chandigarh",
    cities: ["chandigarh", "mohali", "panchkula"],
    defaultCurrency: "INR",
    defaultPhone: "+91-9876543210",
    schemaAreaServed: ["Chandigarh", "Mohali", "Panchkula"],
    breadcrumbsLabel: "Chandigarh Tricity",
    footerLabel: "Chandigarh, Mohali & Panchkula",
    enabledGenerators: ["hub", "layout", "material", "style", "finish", "budget", "renovation", "commercial", "repair"],
    isActive: true,
  },
] as const;

export function getMarketByCitySlug(citySlug: string): MarketEntry | undefined {
  return MARKET_REGISTRY.find((m) => m.isActive && (m.cities as readonly string[]).includes(citySlug));
}

export function getMarketBySlug(slug: string): MarketEntry | undefined {
  return MARKET_REGISTRY.find((m) => m.slug === slug);
}

export function getMarketFromPathname(pathname: string): MarketEntry {
  const tricityMarket = MARKET_REGISTRY.find((m) => m.slug === "chandigarh-tricity")!;
  const delhiMarket = MARKET_REGISTRY.find((m) => m.slug === "delhi-ncr")!;
  if (
    pathname.includes("-chandigarh") || pathname.includes("chandigarh-") ||
    pathname.includes("-mohali") || pathname.includes("mohali-") ||
    pathname.includes("-panchkula") || pathname.includes("panchkula-") ||
    pathname.includes("tricity")
  ) {
    return tricityMarket;
  }
  return delhiMarket;
}
