/**
 * Topical Authority Registry — FurniRevive SEO
 *
 * Each record is fully self-contained. The engine derives scoring, grouping, and routing.
 * Adding the 300th record is identical to adding the 30th — no structural changes needed.
 *
 * Tier meanings:
 *   1 = Apex authority (city-level service hub)
 *   2 = Cross-service authority (specialty + upholstery + material)
 *   3 = Cost / pricing guides
 *   4 = City cluster hubs (Gurgaon, Noida, Faridabad, Ghaziabad)
 *   5 = Locality pages and future blog/buying guides
 */

import type { SeoServiceKey } from "./service-config.ts";
import { ALL_SEO_PAGES } from "../seo-pages/registry.ts";

export type AuthorityTier = 1 | 2 | 3 | 4 | 5;

export type AuthorityTopic =
  | "foam"
  | "upholstery"
  | "pricing"
  | "maintenance"
  | "comparison"
  | "buy-vs-repair"
  | "leather"
  | "wood"
  | "spring"
  | "frame"
  | "recliner"
  | "sagging";

export type AuthorityCluster =
  | "sofa"
  | "chair"
  | "furniture"
  | "leather"
  | "recliner"
  | "carpenter"
  | "kitchen";

export type AuthorityLinkRole =
  | "hub"
  | "commercial"
  | "supporting"
  | "locality"
  | "cost"
  | "blog";

export type AuthorityPageRecord = {
  slug: string;
  displayName: string;
  tier: AuthorityTier;
  services: SeoServiceKey[];
  topics: AuthorityTopic[];
  cityKeys: string[];
  /** 0–100. Drives link selection ranking. Higher = more likely to be linked to. */
  authorityScore: number;
  /** Topical cluster for same-cluster link boosting */
  cluster: AuthorityCluster;
  /** Role in the linking hierarchy */
  linkRole: AuthorityLinkRole;
  /** Primary keyword — used as anchor text in engine-generated links */
  primaryKeyword: string;
  /** Override weight. Default 0. Set higher for strategic pages that must rank above score. */
  manualPriority: number;
  /** Optional business vertical tag (e.g. "kitchen") for cross-vertical grouping. */
  businessVertical?: string;
};

// ─── Registry ─────────────────────────────────────────────────────────────────

export const AUTHORITY_REGISTRY: Record<string, AuthorityPageRecord> = {
  // ── Tier 1 — Apex authority pages ──────────────────────────────────────────

  "sofa-repair-delhi": {
    slug: "sofa-repair-delhi",
    displayName: "Sofa Repair Delhi",
    tier: 1,
    services: ["sofa-repair", "leather-sofa-repair", "sofa-upholstery", "foam-replacement", "sofa-spring-repair", "sofa-frame-repair"],
    topics: ["foam", "upholstery", "leather", "spring", "frame", "sagging", "comparison", "buy-vs-repair"],
    cityKeys: ["delhi"],
    authorityScore: 95,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair delhi",
    manualPriority: 0,
  },
  "furniture-repair-delhi": {
    slug: "furniture-repair-delhi",
    displayName: "Furniture Repair Delhi",
    tier: 1,
    services: ["furniture-repair", "chair-repair", "wooden-sofa-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison", "buy-vs-repair"],
    cityKeys: ["delhi"],
    authorityScore: 90,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair delhi",
    manualPriority: 0,
  },
  "recliner-repair-delhi": {
    slug: "recliner-repair-delhi",
    displayName: "Recliner Repair Delhi",
    tier: 1,
    services: ["recliner-repair", "leather-sofa-repair"],
    topics: ["recliner", "leather", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 88,
    cluster: "recliner",
    linkRole: "hub",
    primaryKeyword: "recliner repair delhi",
    manualPriority: 0,
  },
  "chair-repair-delhi": {
    slug: "chair-repair-delhi",
    displayName: "Chair Repair Delhi",
    tier: 1,
    services: ["chair-repair", "furniture-repair"],
    topics: ["maintenance", "wood", "comparison", "buy-vs-repair"],
    cityKeys: ["delhi"],
    authorityScore: 82,
    cluster: "chair",
    linkRole: "hub",
    primaryKeyword: "chair repair delhi",
    manualPriority: 0,
  },

  // ── Tier 2 — Service authority pages ───────────────────────────────────────

  "foam-replacement-delhi": {
    slug: "sofa-foam-replacement-delhi",
    displayName: "Sofa Foam Replacement Delhi",
    tier: 2,
    services: ["foam-replacement", "sofa-repair"],
    topics: ["foam", "sagging", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 82,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "sofa foam replacement delhi",
    manualPriority: 0,
  },
  "sofa-upholstery-delhi": {
    slug: "sofa-upholstery-delhi",
    displayName: "Sofa Upholstery Delhi",
    tier: 2,
    services: ["sofa-upholstery", "sofa-repair", "leather-sofa-repair"],
    topics: ["upholstery", "leather", "comparison", "buy-vs-repair"],
    cityKeys: ["delhi"],
    authorityScore: 84,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "sofa upholstery delhi",
    manualPriority: 0,
  },
  "leather-sofa-repair-delhi": {
    slug: "leather-sofa-repair-delhi",
    displayName: "Leather Sofa Repair Delhi",
    tier: 2,
    services: ["leather-sofa-repair", "sofa-repair", "recliner-repair"],
    topics: ["leather", "upholstery", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 85,
    cluster: "leather",
    linkRole: "commercial",
    primaryKeyword: "leather sofa repair delhi",
    manualPriority: 0,
  },
  "sofa-spring-repair-delhi": {
    slug: "sofa-spring-repair-delhi",
    displayName: "Sofa Spring Repair Delhi",
    tier: 2,
    services: ["sofa-spring-repair", "sofa-repair"],
    topics: ["spring", "sagging", "frame", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 72,
    cluster: "sofa",
    linkRole: "supporting",
    primaryKeyword: "sofa spring repair delhi",
    manualPriority: 0,
  },
  "sofa-frame-repair-delhi": {
    slug: "sofa-frame-repair-delhi",
    displayName: "Sofa Frame Repair Delhi",
    tier: 2,
    services: ["sofa-frame-repair", "sofa-repair", "wooden-sofa-repair"],
    topics: ["frame", "wood", "spring", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 70,
    cluster: "sofa",
    linkRole: "supporting",
    primaryKeyword: "sofa frame repair delhi",
    manualPriority: 0,
  },
  "wooden-sofa-repair-delhi": {
    slug: "wooden-sofa-repair-delhi",
    displayName: "Wooden Sofa Repair Delhi",
    tier: 2,
    services: ["wooden-sofa-repair", "sofa-repair", "furniture-repair"],
    topics: ["wood", "frame", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 68,
    cluster: "furniture",
    linkRole: "supporting",
    primaryKeyword: "wooden sofa repair delhi",
    manualPriority: 0,
  },
  "sofa-repair-near-me": {
    slug: "sofa-repair-near-me",
    displayName: "Sofa Repair Near Me",
    tier: 2,
    services: ["sofa-repair", "furniture-repair", "recliner-repair"],
    topics: ["comparison", "buy-vs-repair", "maintenance"],
    cityKeys: ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"],
    authorityScore: 80,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "sofa repair near me",
    manualPriority: 0,
  },
  "furniture-polish-delhi": {
    slug: "furniture-polish-delhi",
    displayName: "Furniture Polish Delhi",
    tier: 2,
    services: ["furniture-polish", "furniture-repair", "wooden-sofa-repair"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 72,
    cluster: "furniture",
    linkRole: "commercial",
    primaryKeyword: "furniture polish delhi",
    manualPriority: 0,
  },
  "carpenter-home-service-delhi": {
    slug: "carpenter-home-service-delhi",
    displayName: "Carpenter Home Service Delhi",
    tier: 2,
    services: ["furniture-repair", "chair-repair", "furniture-polish"],
    topics: ["maintenance", "wood", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 75,
    cluster: "carpenter",
    linkRole: "commercial",
    primaryKeyword: "carpenter home service delhi",
    manualPriority: 0,
  },
  "dining-chair-repair-delhi": {
    slug: "dining-chair-repair-delhi",
    displayName: "Dining Chair Repair Delhi",
    tier: 2,
    services: ["chair-repair", "furniture-repair"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 68,
    cluster: "chair",
    linkRole: "commercial",
    primaryKeyword: "dining chair repair delhi",
    manualPriority: 0,
  },
  "office-chair-repair-delhi": {
    slug: "office-chair-repair-delhi",
    displayName: "Office Chair Repair Delhi",
    tier: 2,
    services: ["chair-repair", "furniture-repair"],
    topics: ["maintenance", "comparison", "wood"],
    cityKeys: ["delhi"],
    authorityScore: 74,
    cluster: "chair",
    linkRole: "commercial",
    primaryKeyword: "office chair repair delhi",
    manualPriority: 0,
  },
  "dining-table-repair-delhi": {
    slug: "dining-table-repair-delhi",
    displayName: "Dining Table Repair Delhi",
    tier: 2,
    services: ["furniture-repair", "wooden-sofa-repair"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 70,
    cluster: "furniture",
    linkRole: "commercial",
    primaryKeyword: "dining table repair delhi",
    manualPriority: 0,
  },
  "same-day-sofa-repair-delhi": {
    slug: "same-day-sofa-repair-delhi",
    displayName: "Same Day Sofa Repair Delhi",
    tier: 2,
    services: ["sofa-repair", "foam-replacement"],
    topics: ["comparison", "maintenance", "sagging"],
    cityKeys: ["delhi"],
    authorityScore: 76,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "same day sofa repair delhi",
    manualPriority: 0,
  },
  "doorstep-sofa-repair-delhi": {
    slug: "doorstep-sofa-repair-delhi",
    displayName: "Doorstep Sofa Repair Delhi",
    tier: 2,
    services: ["sofa-repair", "furniture-repair"],
    topics: ["comparison", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 73,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "doorstep sofa repair delhi",
    manualPriority: 0,
  },
  "office-furniture-repair-delhi": {
    slug: "office-furniture-repair-delhi",
    displayName: "Office Furniture Repair Delhi",
    tier: 2,
    services: ["furniture-repair", "chair-repair"],
    topics: ["maintenance", "wood", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 71,
    cluster: "furniture",
    linkRole: "commercial",
    primaryKeyword: "office furniture repair delhi",
    manualPriority: 0,
  },
  "furniture-repair-near-me": {
    slug: "furniture-repair-near-me",
    displayName: "Furniture Repair Near Me",
    tier: 2,
    services: ["furniture-repair", "chair-repair", "furniture-polish"],
    topics: ["comparison", "maintenance", "buy-vs-repair"],
    cityKeys: ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"],
    authorityScore: 78,
    cluster: "furniture",
    linkRole: "commercial",
    primaryKeyword: "furniture repair near me",
    manualPriority: 0,
  },
  "carpenter-near-me": {
    slug: "carpenter-near-me",
    displayName: "Carpenter Near Me",
    tier: 2,
    services: ["furniture-repair", "chair-repair", "furniture-polish"],
    topics: ["maintenance", "wood", "comparison"],
    cityKeys: ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"],
    authorityScore: 76,
    cluster: "carpenter",
    linkRole: "commercial",
    primaryKeyword: "carpenter near me",
    manualPriority: 0,
  },
  "sofa-upholstery-near-me": {
    slug: "sofa-upholstery-near-me",
    displayName: "Sofa Upholstery Near Me",
    tier: 2,
    services: ["sofa-upholstery", "sofa-repair", "leather-sofa-repair"],
    topics: ["upholstery", "leather", "comparison", "buy-vs-repair"],
    cityKeys: ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"],
    authorityScore: 75,
    cluster: "sofa",
    linkRole: "commercial",
    primaryKeyword: "sofa upholstery near me",
    manualPriority: 0,
  },
  "same-day-furniture-repair-delhi": {
    slug: "same-day-furniture-repair-delhi",
    displayName: "Same Day Furniture Repair Delhi",
    tier: 2,
    services: ["furniture-repair", "sofa-repair"],
    topics: ["comparison", "maintenance", "wood"],
    cityKeys: ["delhi"],
    authorityScore: 72,
    cluster: "furniture",
    linkRole: "commercial",
    primaryKeyword: "same day furniture repair delhi",
    manualPriority: 0,
  },

  // ── Tier 3 — Cost / pricing guides ─────────────────────────────────────────

  "sofa-repair-cost-delhi": {
    slug: "sofa-repair-cost-delhi",
    displayName: "Sofa Repair Cost Delhi",
    tier: 3,
    services: ["sofa-repair", "foam-replacement", "sofa-upholstery", "leather-sofa-repair"],
    topics: ["pricing", "foam", "upholstery", "leather", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 75,
    cluster: "sofa",
    linkRole: "cost",
    primaryKeyword: "sofa repair cost delhi",
    manualPriority: 0,
  },
  "sofa-foam-replacement-cost-delhi": {
    slug: "sofa-foam-replacement-cost-delhi",
    displayName: "Sofa Foam Replacement Cost Delhi",
    tier: 3,
    services: ["foam-replacement", "sofa-repair"],
    topics: ["pricing", "foam", "sagging", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 65,
    cluster: "sofa",
    linkRole: "cost",
    primaryKeyword: "sofa foam replacement cost delhi",
    manualPriority: 0,
  },
  "leather-sofa-repair-cost-delhi": {
    slug: "leather-sofa-repair-cost-delhi",
    displayName: "Leather Sofa Repair Cost Delhi",
    tier: 3,
    services: ["leather-sofa-repair", "sofa-repair", "sofa-upholstery"],
    topics: ["pricing", "leather", "upholstery", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 68,
    cluster: "leather",
    linkRole: "cost",
    primaryKeyword: "leather sofa repair cost delhi",
    manualPriority: 0,
  },
  "recliner-repair-cost-delhi": {
    slug: "recliner-repair-cost-delhi",
    displayName: "Recliner Repair Cost Delhi",
    tier: 3,
    services: ["recliner-repair", "leather-sofa-repair"],
    topics: ["pricing", "recliner", "leather", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 65,
    cluster: "recliner",
    linkRole: "cost",
    primaryKeyword: "recliner repair cost delhi",
    manualPriority: 0,
  },
  "sofa-upholstery-cost-delhi": {
    slug: "sofa-upholstery-cost-delhi",
    displayName: "Sofa Upholstery Cost Delhi",
    tier: 3,
    services: ["sofa-upholstery", "sofa-repair", "foam-replacement"],
    topics: ["pricing", "upholstery", "foam", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 63,
    cluster: "sofa",
    linkRole: "cost",
    primaryKeyword: "sofa upholstery cost delhi",
    manualPriority: 0,
  },
  "furniture-repair-cost-delhi": {
    slug: "furniture-repair-cost-delhi",
    displayName: "Furniture Repair Cost Delhi",
    tier: 3,
    services: ["furniture-repair", "chair-repair", "furniture-polish"],
    topics: ["pricing", "wood", "maintenance", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 66,
    cluster: "furniture",
    linkRole: "cost",
    primaryKeyword: "furniture repair cost delhi",
    manualPriority: 0,
  },

  // ── Tier 4 — City cluster hubs ─────────────────────────────────────────────

  "sofa-repair-gurgaon": {
    slug: "sofa-repair-gurgaon",
    displayName: "Sofa Repair Gurgaon",
    tier: 4,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement", "sofa-upholstery"],
    topics: ["foam", "upholstery", "leather", "comparison", "buy-vs-repair"],
    cityKeys: ["gurgaon"],
    authorityScore: 78,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair gurgaon",
    manualPriority: 0,
  },
  "sofa-repair-noida": {
    slug: "sofa-repair-noida",
    displayName: "Sofa Repair Noida",
    tier: 4,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement", "sofa-upholstery"],
    topics: ["foam", "upholstery", "leather", "comparison", "buy-vs-repair"],
    cityKeys: ["noida"],
    authorityScore: 76,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair noida",
    manualPriority: 0,
  },
  "sofa-repair-faridabad": {
    slug: "sofa-repair-faridabad",
    displayName: "Sofa Repair Faridabad",
    tier: 4,
    services: ["sofa-repair", "furniture-repair", "foam-replacement"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["faridabad"],
    authorityScore: 65,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair faridabad",
    manualPriority: 0,
  },
  "sofa-repair-ghaziabad": {
    slug: "sofa-repair-ghaziabad",
    displayName: "Sofa Repair Ghaziabad",
    tier: 4,
    services: ["sofa-repair", "furniture-repair", "foam-replacement"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["ghaziabad"],
    authorityScore: 68,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair ghaziabad",
    manualPriority: 0,
  },
  "recliner-repair-gurgaon": {
    slug: "recliner-repair-gurgaon",
    displayName: "Recliner Repair Gurgaon",
    tier: 4,
    services: ["recliner-repair", "leather-sofa-repair"],
    topics: ["recliner", "leather", "maintenance", "pricing"],
    cityKeys: ["gurgaon"],
    authorityScore: 65,
    cluster: "recliner",
    linkRole: "hub",
    primaryKeyword: "recliner repair gurgaon",
    manualPriority: 0,
  },
  "recliner-repair-noida": {
    slug: "recliner-repair-noida",
    displayName: "Recliner Repair Noida",
    tier: 4,
    services: ["recliner-repair", "leather-sofa-repair"],
    topics: ["recliner", "leather", "maintenance", "pricing"],
    cityKeys: ["noida"],
    authorityScore: 63,
    cluster: "recliner",
    linkRole: "hub",
    primaryKeyword: "recliner repair noida",
    manualPriority: 0,
  },
  "furniture-repair-gurgaon": {
    slug: "furniture-repair-gurgaon",
    displayName: "Furniture Repair Gurgaon",
    tier: 4,
    services: ["furniture-repair", "wooden-sofa-repair", "chair-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["gurgaon"],
    authorityScore: 62,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair gurgaon",
    manualPriority: 0,
  },
  "furniture-repair-noida": {
    slug: "furniture-repair-noida",
    displayName: "Furniture Repair Noida",
    tier: 4,
    services: ["furniture-repair", "wooden-sofa-repair", "chair-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["noida"],
    authorityScore: 60,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair noida",
    manualPriority: 0,
  },
  "furniture-repair-ghaziabad": {
    slug: "furniture-repair-ghaziabad",
    displayName: "Furniture Repair Ghaziabad",
    tier: 4,
    services: ["furniture-repair", "wooden-sofa-repair", "chair-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["ghaziabad"],
    authorityScore: 62,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair ghaziabad",
    manualPriority: 0,
  },
  "furniture-repair-faridabad": {
    slug: "furniture-repair-faridabad",
    displayName: "Furniture Repair Faridabad",
    tier: 4,
    services: ["furniture-repair", "wooden-sofa-repair", "chair-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["faridabad"],
    authorityScore: 60,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair faridabad",
    manualPriority: 0,
  },

  // ── Tier 4 — Chandigarh Tricity city hubs ─────────────────────────────────

  "sofa-repair-chandigarh": {
    slug: "sofa-repair-chandigarh",
    displayName: "Sofa Repair Chandigarh",
    tier: 4,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement", "sofa-upholstery"],
    topics: ["foam", "upholstery", "leather", "comparison", "buy-vs-repair"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 72,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa repair chandigarh",
    manualPriority: 0,
  },
  "recliner-repair-chandigarh": {
    slug: "recliner-repair-chandigarh",
    displayName: "Recliner Repair Chandigarh",
    tier: 4,
    services: ["recliner-repair", "leather-sofa-repair"],
    topics: ["recliner", "leather", "maintenance", "pricing"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 68,
    cluster: "recliner",
    linkRole: "hub",
    primaryKeyword: "recliner repair chandigarh",
    manualPriority: 0,
  },
  "furniture-repair-chandigarh": {
    slug: "furniture-repair-chandigarh",
    displayName: "Furniture Repair Chandigarh",
    tier: 4,
    services: ["furniture-repair", "wooden-sofa-repair", "chair-repair", "furniture-polish"],
    topics: ["wood", "maintenance", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 65,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "furniture repair chandigarh",
    manualPriority: 0,
  },
  "sofa-upholstery-chandigarh": {
    slug: "sofa-upholstery-chandigarh",
    displayName: "Sofa Upholstery Chandigarh",
    tier: 4,
    services: ["sofa-upholstery", "sofa-repair"],
    topics: ["upholstery", "leather", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 65,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "sofa upholstery chandigarh",
    manualPriority: 0,
  },
  "office-chair-repair-chandigarh": {
    slug: "office-chair-repair-chandigarh",
    displayName: "Office Chair Repair Chandigarh",
    tier: 4,
    services: ["chair-repair"],
    topics: ["maintenance", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 60,
    cluster: "chair",
    linkRole: "hub",
    primaryKeyword: "office chair repair chandigarh",
    manualPriority: 0,
  },
  "same-day-sofa-repair-chandigarh": {
    slug: "same-day-sofa-repair-chandigarh",
    displayName: "Same Day Sofa Repair Chandigarh",
    tier: 4,
    services: ["sofa-repair"],
    topics: ["foam", "maintenance"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 58,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "same day sofa repair chandigarh",
    manualPriority: 0,
  },
  "doorstep-sofa-repair-chandigarh": {
    slug: "doorstep-sofa-repair-chandigarh",
    displayName: "Doorstep Sofa Repair Chandigarh",
    tier: 4,
    services: ["sofa-repair"],
    topics: ["foam", "maintenance"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 56,
    cluster: "sofa",
    linkRole: "hub",
    primaryKeyword: "doorstep sofa repair chandigarh",
    manualPriority: 0,
  },
  "leather-sofa-repair-chandigarh": {
    slug: "leather-sofa-repair-chandigarh",
    displayName: "Leather Sofa Repair Chandigarh",
    tier: 4,
    services: ["leather-sofa-repair", "sofa-repair", "sofa-upholstery"],
    topics: ["leather", "upholstery", "maintenance"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 62,
    cluster: "leather",
    linkRole: "hub",
    primaryKeyword: "leather sofa repair chandigarh",
    manualPriority: 0,
  },
  "carpenter-home-service-chandigarh": {
    slug: "carpenter-home-service-chandigarh",
    displayName: "Carpenter Home Service Chandigarh",
    tier: 4,
    services: ["furniture-repair"],
    topics: ["wood", "maintenance"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 55,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "carpenter home service chandigarh",
    manualPriority: 0,
  },
  "sofa-repair-cost-chandigarh": {
    slug: "sofa-repair-cost-chandigarh",
    displayName: "Sofa Repair Cost Chandigarh",
    tier: 4,
    services: ["sofa-repair"],
    topics: ["pricing", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 55,
    cluster: "sofa",
    linkRole: "cost",
    primaryKeyword: "sofa repair cost chandigarh",
    manualPriority: 0,
  },
  "recliner-repair-cost-chandigarh": {
    slug: "recliner-repair-cost-chandigarh",
    displayName: "Recliner Repair Cost Chandigarh",
    tier: 4,
    services: ["recliner-repair"],
    topics: ["pricing", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 52,
    cluster: "recliner",
    linkRole: "cost",
    primaryKeyword: "recliner repair cost chandigarh",
    manualPriority: 0,
  },
  "furniture-repair-cost-chandigarh": {
    slug: "furniture-repair-cost-chandigarh",
    displayName: "Furniture Repair Cost Chandigarh",
    tier: 4,
    services: ["furniture-repair"],
    topics: ["pricing", "comparison"],
    cityKeys: ["chandigarh", "mohali", "panchkula"],
    authorityScore: 52,
    cluster: "furniture",
    linkRole: "cost",
    primaryKeyword: "furniture repair cost chandigarh",
    manualPriority: 0,
  },

  // ── Tier 5 — High-value locality pages ─────────────────────────────────────

  "sofa-repair-south-delhi": {
    slug: "sofa-repair-south-delhi",
    displayName: "Sofa Repair South Delhi",
    tier: 5,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement"],
    topics: ["foam", "leather", "upholstery", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 55,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair south delhi",
    manualPriority: 0,
  },
  "sofa-repair-west-delhi": {
    slug: "sofa-repair-west-delhi",
    displayName: "Sofa Repair West Delhi",
    tier: 5,
    services: ["sofa-repair", "furniture-repair", "foam-replacement"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 52,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair west delhi",
    manualPriority: 0,
  },
  "sofa-repair-dwarka": {
    slug: "sofa-repair-dwarka",
    displayName: "Sofa Repair Dwarka",
    tier: 5,
    services: ["sofa-repair", "foam-replacement", "leather-sofa-repair"],
    topics: ["foam", "leather", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 60,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair dwarka",
    manualPriority: 0,
  },
  "sofa-repair-rohini": {
    slug: "sofa-repair-rohini",
    displayName: "Sofa Repair Rohini",
    tier: 5,
    services: ["sofa-repair", "foam-replacement", "furniture-repair"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 56,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair rohini",
    manualPriority: 0,
  },
  "sofa-repair-lajpat-nagar": {
    slug: "sofa-repair-lajpat-nagar",
    displayName: "Sofa Repair Lajpat Nagar",
    tier: 5,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement"],
    topics: ["foam", "leather", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 57,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair lajpat nagar",
    manualPriority: 0,
  },
  "sofa-repair-vasant-kunj": {
    slug: "sofa-repair-vasant-kunj",
    displayName: "Sofa Repair Vasant Kunj",
    tier: 5,
    services: ["sofa-repair", "leather-sofa-repair", "foam-replacement"],
    topics: ["foam", "leather", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 56,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair vasant kunj",
    manualPriority: 0,
  },
  "sofa-repair-greater-kailash": {
    slug: "sofa-repair-greater-kailash",
    displayName: "Sofa Repair Greater Kailash",
    tier: 5,
    services: ["sofa-repair", "leather-sofa-repair", "sofa-upholstery"],
    topics: ["leather", "upholstery", "comparison"],
    cityKeys: ["delhi"],
    authorityScore: 58,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair greater kailash",
    manualPriority: 0,
  },
  "sofa-repair-pitampura": {
    slug: "sofa-repair-pitampura",
    displayName: "Sofa Repair Pitampura",
    tier: 5,
    services: ["sofa-repair", "foam-replacement", "furniture-repair"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["delhi"],
    authorityScore: 55,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair pitampura",
    manualPriority: 0,
  },
  "sofa-repair-indirapuram-ghaziabad": {
    slug: "sofa-repair-indirapuram-ghaziabad",
    displayName: "Sofa Repair Indirapuram Ghaziabad",
    tier: 5,
    services: ["sofa-repair", "foam-replacement", "furniture-repair"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["ghaziabad"],
    authorityScore: 58,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair indirapuram",
    manualPriority: 0,
  },
  "sofa-repair-greater-noida": {
    slug: "sofa-repair-greater-noida",
    displayName: "Sofa Repair Greater Noida",
    tier: 5,
    services: ["sofa-repair", "foam-replacement", "furniture-repair"],
    topics: ["foam", "comparison", "maintenance"],
    cityKeys: ["noida"],
    authorityScore: 57,
    cluster: "sofa",
    linkRole: "locality",
    primaryKeyword: "sofa repair greater noida",
    manualPriority: 0,
  },

  // ── Kitchen Cluster ──────────────────────────────────────────────────────────

  // Tier 1 — Kitchen City Hubs
  "modular-kitchen-delhi": {
    slug: "modular-kitchen-delhi",
    displayName: "Modular Kitchen Delhi",
    tier: 1,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 92,
    cluster: "kitchen",
    linkRole: "hub",
    primaryKeyword: "modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "modular-kitchen-gurgaon": {
    slug: "modular-kitchen-gurgaon",
    displayName: "Modular Kitchen Gurgaon",
    tier: 1,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["gurgaon"],
    authorityScore: 78,
    cluster: "kitchen",
    linkRole: "hub",
    primaryKeyword: "modular kitchen gurgaon",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "modular-kitchen-noida": {
    slug: "modular-kitchen-noida",
    displayName: "Modular Kitchen Noida",
    tier: 1,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["noida"],
    authorityScore: 76,
    cluster: "kitchen",
    linkRole: "hub",
    primaryKeyword: "modular kitchen noida",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "modular-kitchen-faridabad": {
    slug: "modular-kitchen-faridabad",
    displayName: "Modular Kitchen Faridabad",
    tier: 1,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["faridabad"],
    authorityScore: 65,
    cluster: "kitchen",
    linkRole: "hub",
    primaryKeyword: "modular kitchen faridabad",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "modular-kitchen-ghaziabad": {
    slug: "modular-kitchen-ghaziabad",
    displayName: "Modular Kitchen Ghaziabad",
    tier: 1,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["ghaziabad"],
    authorityScore: 68,
    cluster: "kitchen",
    linkRole: "hub",
    primaryKeyword: "modular kitchen ghaziabad",
    manualPriority: 0,
    businessVertical: "kitchen",
  },

  // Tier 2 — Commercial
  "modular-kitchen-cost-delhi": {
    slug: "modular-kitchen-cost-delhi",
    displayName: "Modular Kitchen Cost Delhi",
    tier: 2,
    services: ["modular-kitchen"],
    topics: ["pricing"],
    cityKeys: ["delhi"],
    authorityScore: 80,
    cluster: "kitchen",
    linkRole: "cost",
    primaryKeyword: "modular kitchen cost delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "modular-kitchen-near-me": {
    slug: "modular-kitchen-near-me",
    displayName: "Modular Kitchen Near Me",
    tier: 2,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi", "gurgaon", "noida", "faridabad", "ghaziabad"],
    authorityScore: 75,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "modular kitchen near me",
    manualPriority: 0,
    businessVertical: "kitchen",
  },

  // Tier 3 — Layout Pages (Delhi only)
  "l-shape-modular-kitchen-delhi": {
    slug: "l-shape-modular-kitchen-delhi",
    displayName: "L-Shape Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 72,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "l shape modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "u-shape-modular-kitchen-delhi": {
    slug: "u-shape-modular-kitchen-delhi",
    displayName: "U-Shape Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 70,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "u shape modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "parallel-modular-kitchen-delhi": {
    slug: "parallel-modular-kitchen-delhi",
    displayName: "Parallel Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 68,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "parallel modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "island-modular-kitchen-delhi": {
    slug: "island-modular-kitchen-delhi",
    displayName: "Island Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 66,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "island modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "straight-modular-kitchen-delhi": {
    slug: "straight-modular-kitchen-delhi",
    displayName: "Straight Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 62,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "straight modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "peninsula-modular-kitchen-delhi": {
    slug: "peninsula-modular-kitchen-delhi",
    displayName: "Peninsula Modular Kitchen Delhi",
    tier: 3,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 60,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "peninsula modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },

  // Tier 4 — Material Pages (Delhi only)
  "acrylic-modular-kitchen-delhi": {
    slug: "acrylic-modular-kitchen-delhi",
    displayName: "Acrylic Modular Kitchen Delhi",
    tier: 4,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 65,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "acrylic modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "laminate-modular-kitchen-delhi": {
    slug: "laminate-modular-kitchen-delhi",
    displayName: "Laminate Modular Kitchen Delhi",
    tier: 4,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 63,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "laminate modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },
  "pu-modular-kitchen-delhi": {
    slug: "pu-modular-kitchen-delhi",
    displayName: "PU Modular Kitchen Delhi",
    tier: 4,
    services: ["modular-kitchen"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 61,
    cluster: "kitchen",
    linkRole: "commercial",
    primaryKeyword: "pu modular kitchen delhi",
    manualPriority: 0,
    businessVertical: "kitchen",
  },

  // ── Bridge Cluster — cross-vertical home interiors gateway ──────────────────

  /**
   * Bridge page: Furniture → Home Interiors → Kitchen
   * Sits between the furniture-repair cluster and the kitchen cluster.
   * Registered as "furniture" cluster so furniture locality pages pick it up via
   * same-cluster preference; kitchen pages pick it up via CROSS_CLUSTER_RULES.
   */
  "home-interiors-delhi": {
    slug: "home-interiors-delhi",
    displayName: "Home Interiors Delhi",
    tier: 2,
    services: ["furniture-repair"],
    topics: [],
    cityKeys: ["delhi"],
    authorityScore: 78,
    cluster: "furniture",
    linkRole: "hub",
    primaryKeyword: "home interiors delhi",
    manualPriority: 0,
    businessVertical: "home-interiors",
  },
} satisfies Record<string, AuthorityPageRecord>;

// ─── Validation ────────────────────────────────────────────────────────────────

const VALID_CLUSTERS = new Set<string>(["sofa", "chair", "furniture", "leather", "recliner", "carpenter", "kitchen"]);
const VALID_LINK_ROLES = new Set<string>(["hub", "commercial", "supporting", "locality", "cost", "blog"]);

/** DEV-only registry health check. Throws on hard errors; warns on soft issues. */
export function validateRegistry(): void {
  const records = Object.values(AUTHORITY_REGISTRY);
  const allPageSlugs = new Set(ALL_SEO_PAGES.map((p: { slug: string }) => p.slug));

  // ── Hard error checks ────────────────────────────────────────────────────
  const duplicateSlugs: string[] = [];
  const seenSlugs = new Set<string>();
  for (const record of records) {
    if (seenSlugs.has(record.slug)) {
      duplicateSlugs.push(record.slug);
    }
    seenSlugs.add(record.slug);
  }

  const invalidClusters = records.filter((r) => !VALID_CLUSTERS.has(r.cluster)).map((r) => r.slug);
  const invalidRoles = records.filter((r) => !VALID_LINK_ROLES.has(r.linkRole)).map((r) => r.slug);

  const hardErrors: string[] = [];
  if (duplicateSlugs.length > 0) hardErrors.push(`Duplicate slugs: ${duplicateSlugs.join(", ")}`);
  if (invalidClusters.length > 0) hardErrors.push(`Invalid clusters on: ${invalidClusters.join(", ")}`);
  if (invalidRoles.length > 0) hardErrors.push(`Invalid linkRoles on: ${invalidRoles.join(", ")}`);

  if (hardErrors.length > 0) {
    throw new Error(`[Authority Registry] Hard validation errors:\n${hardErrors.join("\n")}`);
  }

  // ── Soft warning checks ──────────────────────────────────────────────────
  const missingSlugs = records.filter((r) => !allPageSlugs.has(r.slug)).map((r) => r.slug);

  const keywordCounts: Record<string, string[]> = {};
  for (const record of records) {
    const kw = record.primaryKeyword;
    if (!keywordCounts[kw]) keywordCounts[kw] = [];
    keywordCounts[kw].push(record.slug);
  }
  const duplicateKeywords = Object.entries(keywordCounts)
    .filter(([, slugs]) => slugs.length > 1)
    .map(([kw, slugs]) => `"${kw}" (${slugs.join(", ")})`);

  // Orphan: no other record shares any service key with this record
  const orphanSlugs = records
    .filter((record) => {
      const others = records.filter((r) => r.slug !== record.slug);
      return !others.some((other) =>
        record.services.some((svc) => other.services.includes(svc))
      );
    })
    .map((r) => r.slug);

  // ── Health report ────────────────────────────────────────────────────────
  const fmt = (ok: boolean, label: string, count: number) =>
    `${ok ? "✓" : "⚠"} ${label}: ${count}`;

  console.group("Authority Registry Health Report");
  console.log(fmt(true, "Records", records.length));
  console.log(fmt(duplicateSlugs.length === 0, "Duplicate slugs", duplicateSlugs.length));
  console.log(fmt(invalidClusters.length === 0, "Invalid clusters", invalidClusters.length));
  console.log(fmt(invalidRoles.length === 0, "Invalid roles", invalidRoles.length));
  if (missingSlugs.length > 0) {
    console.warn(`⚠ Slugs missing from ALL_SEO_PAGES (${missingSlugs.length}): ${missingSlugs.join(", ")}`);
  } else {
    console.log("✓ Slugs missing from ALL_SEO_PAGES: 0");
  }
  if (duplicateKeywords.length > 0) {
    console.warn(`⚠ Duplicate keywords (${duplicateKeywords.length}): ${duplicateKeywords.join("; ")}`);
  } else {
    console.log("✓ Duplicate keywords: 0");
  }
  if (orphanSlugs.length > 0) {
    console.warn(`⚠ Orphan nodes (${orphanSlugs.length}): ${orphanSlugs.join(", ")}`);
  } else {
    console.log("✓ Orphan nodes: 0");
  }
  console.groupEnd();
}

// Auto-run in development
if (import.meta.env.DEV) {
  validateRegistry();
}
