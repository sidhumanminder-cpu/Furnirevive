import { delhiContent } from "@/content/modular-kitchen/cities/delhi.ts";
import { gurgaonContent } from "@/content/modular-kitchen/cities/gurgaon.ts";
import { noidaContent } from "@/content/modular-kitchen/cities/noida.ts";
import { faridabadContent } from "@/content/modular-kitchen/cities/faridabad.ts";
import { ghaziabadContent } from "@/content/modular-kitchen/cities/ghaziabad.ts";
import { chandigarhContent } from "@/content/modular-kitchen/cities/chandigarh.ts";
import { mohaliContent } from "@/content/modular-kitchen/cities/mohali.ts";
import { panchkulaContent } from "@/content/modular-kitchen/cities/panchkula.ts";
import { tricityContent } from "@/content/modular-kitchen/cities/tricity.ts";
import type { CityContent } from "@/content/modular-kitchen/cities/types.ts";
import type { KitchenLocalityEntry } from "./kitchen-locality-registry.ts";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "./kitchen-locality-registry.ts";

export type KitchenCityEntry = {
  slug: string;
  city: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad" | "chandigarh" | "mohali" | "panchkula" | "tricity";
  content: CityContent;
  galleryFilter: "delhi" | "gurgaon" | "all";
  layoutIds: string[];
  featuredProjects?: string[];
};

export const KITCHEN_CITY_REGISTRY: readonly KitchenCityEntry[] = [
  {
    slug: "delhi",
    city: "delhi",
    content: delhiContent,
    galleryFilter: "delhi",
    layoutIds: ["l-shape", "parallel", "u-shape"],
  },
  {
    slug: "gurgaon",
    city: "gurgaon",
    content: gurgaonContent,
    galleryFilter: "gurgaon",
    layoutIds: ["island", "u-shape", "l-shape"],
  },
  {
    slug: "noida",
    city: "noida",
    content: noidaContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "parallel", "u-shape"],
  },
  {
    slug: "faridabad",
    city: "faridabad",
    content: faridabadContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "straight", "parallel"],
  },
  {
    slug: "ghaziabad",
    city: "ghaziabad",
    content: ghaziabadContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "parallel", "u-shape"],
  },
  {
    slug: "chandigarh",
    city: "chandigarh",
    content: chandigarhContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "parallel", "u-shape"],
  },
  {
    slug: "mohali",
    city: "mohali",
    content: mohaliContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "parallel", "u-shape"],
  },
  {
    slug: "panchkula",
    city: "panchkula",
    content: panchkulaContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "straight", "parallel"],
  },
  {
    slug: "tricity",
    city: "tricity",
    content: tricityContent,
    galleryFilter: "all",
    layoutIds: ["l-shape", "parallel", "u-shape", "straight"],
  },
] as const;

export function getLocalitiesForCity(city: KitchenCityEntry["city"]): readonly KitchenLocalityEntry[] {
  if (city === "tricity") {
    return MODULAR_KITCHEN_LOCALITY_REGISTRY.filter(
      (loc) => (loc.city === "chandigarh" || loc.city === "mohali" || loc.city === "panchkula") && loc.status === "published"
    );
  }
  return MODULAR_KITCHEN_LOCALITY_REGISTRY.filter((loc) => loc.city === city && loc.status === "published");
}
