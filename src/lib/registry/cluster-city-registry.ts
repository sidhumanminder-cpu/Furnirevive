/**
 * CLUSTER_CITY_REGISTRY (formerly city-registry.ts)
 *
 * Hierarchical mapping of cities → clusters → locality slugs.
 * Plain serialisable data only.
 *
 * Cluster locality slugs here must match the slug field in LOCALITY_REGISTRY.
 */

import type { CityEntry, ClusterEntry } from "./types.ts";

export const CLUSTER_REGISTRY: readonly ClusterEntry[] = [
  // ── Delhi ────────────────────────────────────────────────────────────────
  {
    key: "southDelhi",
    name: "South Delhi",
    city: "delhi",
    localitySlugs: [],
  },
  {
    key: "westDelhi",
    name: "West Delhi",
    city: "delhi",
    localitySlugs: [],
  },
  {
    key: "northDelhi",
    name: "North Delhi",
    city: "delhi",
    localitySlugs: [],
  },
  {
    key: "eastDelhi",
    name: "East Delhi",
    city: "delhi",
    localitySlugs: [],
  },
  {
    key: "centralDelhi",
    name: "Central Delhi",
    city: "delhi",
    localitySlugs: [],
  },
  {
    key: "dwarka",
    name: "Dwarka",
    city: "delhi",
    localitySlugs: [],
  },
  // ── Gurgaon ──────────────────────────────────────────────────────────────
  {
    key: "dlfGurgaon",
    name: "DLF Gurgaon",
    city: "gurgaon",
    localitySlugs: [],
  },
  {
    key: "sohnaRoadGurgaon",
    name: "Sohna Road Gurgaon",
    city: "gurgaon",
    localitySlugs: [],
  },
  {
    key: "newGurgaon",
    name: "New Gurgaon",
    city: "gurgaon",
    localitySlugs: [],
  },
  {
    key: "centralGurgaon",
    name: "Central Gurgaon",
    city: "gurgaon",
    localitySlugs: [],
  },
  // ── Noida ────────────────────────────────────────────────────────────────
  {
    key: "noidaSectors",
    name: "Noida Sectors",
    city: "noida",
    localitySlugs: [],
  },
  {
    key: "greaterNoidaWest",
    name: "Greater Noida West",
    city: "noida",
    localitySlugs: [],
  },
  {
    key: "greaterNoida",
    name: "Greater Noida",
    city: "noida",
    localitySlugs: [],
  },
  {
    key: "indirapuram",
    name: "Indirapuram",
    city: "ghaziabad",
    localitySlugs: [],
  },
  // ── Faridabad ────────────────────────────────────────────────────────────
  {
    key: "greaterFaridabad",
    name: "Greater Faridabad",
    city: "faridabad",
    localitySlugs: [],
  },
  {
    key: "oldFaridabad",
    name: "Old Faridabad",
    city: "faridabad",
    localitySlugs: [],
  },
  // ── Chandigarh Tricity ────────────────────────────────────────────────────
  {
    key: "sectorsChandigarh",
    name: "Chandigarh Sectors",
    city: "chandigarh",
    localitySlugs: [],
  },
  {
    key: "mohali",
    name: "Mohali",
    city: "mohali",
    localitySlugs: [],
  },
  {
    key: "panchkula",
    name: "Panchkula",
    city: "panchkula",
    localitySlugs: [],
  },
];

/** Legacy CITY_REGISTRY from types.ts CityEntry — kept for backward compat */
export const GEO_CITY_REGISTRY: readonly CityEntry[] = [
  {
    key: "delhi",
    name: "Delhi",
    clusters: ["southDelhi", "westDelhi", "northDelhi", "eastDelhi", "centralDelhi", "dwarka"],
  },
  {
    key: "gurgaon",
    name: "Gurgaon",
    clusters: ["dlfGurgaon", "sohnaRoadGurgaon", "newGurgaon", "centralGurgaon"],
  },
  {
    key: "noida",
    name: "Noida",
    clusters: ["noidaSectors", "greaterNoidaWest", "greaterNoida"],
  },
  {
    key: "ghaziabad",
    name: "Ghaziabad",
    clusters: ["indirapuram"],
  },
  {
    key: "faridabad",
    name: "Faridabad",
    clusters: ["greaterFaridabad", "oldFaridabad"],
  },
  {
    key: "chandigarh",
    name: "Chandigarh",
    clusters: ["sectorsChandigarh"],
  },
  {
    key: "mohali",
    name: "Mohali",
    clusters: ["mohali"],
  },
  {
    key: "panchkula",
    name: "Panchkula",
    clusters: ["panchkula"],
  },
];
