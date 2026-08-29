/**
 * Content Engine — Brands Module
 *
 * Deterministic, side-effect-free. Lists the brands serviced in this locality.
 * Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { BrandsSectionData } from "../types.ts";
import { BRANDS } from "../content-pools.ts";

const OFFICE_CHAIR_BRANDS = [
  { name: "Herman Miller" },
  { name: "Steelcase" },
  { name: "Featherlite" },
  { name: "HNI India" },
  { name: "Godrej Interio" },
  { name: "Durian" },
  { name: "Haworth" },
  { name: "Wipro Furniture" },
  { name: "IKEA" },
  { name: "Humanscale" },
];

const OFFICE_FURNITURE_BRANDS = [
  { name: "Godrej Interio" },
  { name: "Featherlite" },
  { name: "Durian" },
  { name: "Herman Miller" },
  { name: "Steelcase" },
  { name: "IKEA" },
  { name: "HNI India" },
  { name: "Wipro Furniture" },
  { name: "Haworth" },
  { name: "Humanscale" },
];

export function buildBrands(locality: LocalityEntry, service: ServiceEntry): BrandsSectionData {
  const brands =
    service.slug === "office-furniture-repair"
      ? OFFICE_FURNITURE_BRANDS
      : service.capabilities?.audience?.corporate
        ? OFFICE_CHAIR_BRANDS
        : BRANDS.map((brand) => ({
            name: brand.name,
            ...(brand.note ? { note: brand.note } : {}),
          }));

  return {
    id: `${service.slug}-${locality.slug}-brands`,
    type: "brands",
    version: "v1",
    props: {
      heading: `Brands We Service in ${locality.name}`,
      brands,
    },
  };
}
