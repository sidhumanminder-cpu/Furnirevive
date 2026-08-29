/**
 * RELATIONSHIP_GRAPH
 *
 * Relationship-based internal linking map.
 * Used by pyramid-links.ts when service.capabilities.content.relationshipGraph is true.
 *
 * Unlike geographic proximity (the `nearby` field on LocalityEntry), this graph
 * models topical/commercial relationships — e.g. business districts that share
 * the same client base, not just the same map quadrant.
 *
 * RelationshipType:
 * - "commercial" — business districts and office zones
 * - "residential" — residential locality clusters (future use)
 * - "industrial"  — industrial estates and manufacturing zones
 */

export type RelationshipType = "commercial" | "residential" | "industrial";

export type RelationshipNode = {
  type: RelationshipType;
  neighbours: readonly string[];
};

export const RELATIONSHIP_GRAPH: Readonly<Record<string, RelationshipNode>> = {
  // ── Delhi commercial hubs ──────────────────────────────────────────────────
  "nehru-place": {
    type: "commercial",
    neighbours: ["okhla-phase-1", "jasola", "mohan-cooperative", "kalkaji-extension", "saket-district-centre"],
  },
  "connaught-place-area": {
    type: "commercial",
    neighbours: ["barakhamba-road", "new-delhi-central", "netaji-subhash-place", "karol-bagh-north", "paharganj"],
  },
  "connaught-place-commercial": {
    type: "commercial",
    neighbours: ["barakhamba-road", "bhikaji-cama-place", "netaji-subhash-place", "aerocity", "ito-delhi"],
  },
  "barakhamba-road": {
    type: "commercial",
    neighbours: ["connaught-place-area", "new-delhi-central", "ito-delhi", "daryaganj", "netaji-subhash-place"],
  },
  "ito-delhi": {
    type: "commercial",
    neighbours: ["barakhamba-road", "daryaganj", "new-delhi-central", "lajpat-nagar-1", "jasola"],
  },
  "netaji-subhash-place": {
    type: "commercial",
    neighbours: ["connaught-place-area", "barakhamba-road", "new-delhi-central", "karol-bagh-north", "paharganj"],
  },
  "jasola": {
    type: "commercial",
    neighbours: ["nehru-place", "okhla-phase-1", "mohan-cooperative", "sarita-vihar", "ito-delhi"],
  },
  "okhla-phase-1": {
    type: "commercial",
    neighbours: ["nehru-place", "jasola", "mohan-cooperative", "okhla-phase-2", "kalkaji-extension"],
  },
  "okhla-phase-2": {
    type: "commercial",
    neighbours: ["okhla-phase-1", "jasola", "mohan-cooperative", "nehru-place", "kalkaji-extension"],
  },
  "mohan-cooperative": {
    type: "commercial",
    neighbours: ["okhla-phase-1", "okhla-phase-2", "jasola", "nehru-place", "sarita-vihar"],
  },
  "aerocity": {
    type: "commercial",
    neighbours: ["bhikaji-cama-place", "saket-district-centre", "new-delhi-central", "netaji-subhash-place", "naraina-industrial-area"],
  },
  "bhikaji-cama-place": {
    type: "commercial",
    neighbours: ["aerocity", "saket-district-centre", "lajpat-nagar-1", "netaji-subhash-place", "new-delhi-central"],
  },
  "saket-district-centre": {
    type: "commercial",
    neighbours: ["bhikaji-cama-place", "aerocity", "nehru-place", "lajpat-nagar-1", "lajpat-nagar-2"],
  },
  "laxmi-nagar-commercial": {
    type: "commercial",
    neighbours: ["ito-delhi", "barakhamba-road", "jasola", "daryaganj", "karkardooma"],
  },
  "naraina-industrial-area": {
    type: "industrial",
    neighbours: ["aerocity", "bhikaji-cama-place", "new-delhi-central", "rajendra-nagar", "karol-bagh-north"],
  },

  // ── Gurgaon commercial hubs ────────────────────────────────────────────────
  "cyber-city": {
    type: "commercial",
    neighbours: ["udyog-vihar-phase-1", "udyog-vihar-phase-2", "golf-course-road", "dlf-phase-1", "gurgaon-sector-44"],
  },
  "udyog-vihar-phase-1": {
    type: "commercial",
    neighbours: ["cyber-city", "udyog-vihar-phase-2", "udyog-vihar-phase-3", "golf-course-road", "gurgaon-sector-18"],
  },
  "udyog-vihar-phase-2": {
    type: "commercial",
    neighbours: ["udyog-vihar-phase-1", "cyber-city", "udyog-vihar-phase-3", "udyog-vihar-phase-4", "golf-course-road"],
  },
  "udyog-vihar-phase-3": {
    type: "commercial",
    neighbours: ["udyog-vihar-phase-2", "udyog-vihar-phase-4", "udyog-vihar-phase-5", "cyber-city", "gurgaon-sector-18"],
  },
  "udyog-vihar-phase-4": {
    type: "commercial",
    neighbours: ["udyog-vihar-phase-3", "udyog-vihar-phase-5", "udyog-vihar-phase-2", "gurgaon-sector-18", "imt-manesar-commercial"],
  },
  "udyog-vihar-phase-5": {
    type: "commercial",
    neighbours: ["udyog-vihar-phase-4", "udyog-vihar-phase-3", "imt-manesar-commercial", "gurgaon-sector-18", "cyber-city"],
  },
  "golf-course-road": {
    type: "commercial",
    neighbours: ["cyber-city", "dlf-phase-1", "gurgaon-sector-44", "gurgaon-sector-32", "golf-course-extension-road"],
  },
  "golf-course-extension-road": {
    type: "commercial",
    neighbours: ["golf-course-road", "gurgaon-sector-44", "sohna-road-commercial", "gurgaon-sector-48", "gurgaon-sector-32"],
  },
  "sohna-road-commercial": {
    type: "commercial",
    neighbours: ["golf-course-extension-road", "gurgaon-sector-48", "gurgaon-sector-44", "imt-manesar-commercial", "gurgaon-sector-32"],
  },
  "imt-manesar-commercial": {
    type: "industrial",
    neighbours: ["udyog-vihar-phase-4", "udyog-vihar-phase-5", "sohna-road-commercial", "gurgaon-sector-18", "cyber-city"],
  },
  "gurgaon-sector-48": {
    type: "commercial",
    neighbours: ["golf-course-extension-road", "sohna-road-commercial", "gurgaon-sector-49", "gurgaon-sector-50", "golf-course-road"],
  },
  "gurgaon-sector-49": {
    type: "commercial",
    neighbours: ["gurgaon-sector-48", "golf-course-extension-road", "gurgaon-sector-50", "sohna-road-commercial", "gurgaon-sector-44"],
  },
  "gurgaon-sector-50": {
    type: "commercial",
    neighbours: ["gurgaon-sector-48", "gurgaon-sector-49", "golf-course-extension-road", "gurgaon-sector-52", "sohna-road-commercial"],
  },
  "gurgaon-sector-52": {
    type: "commercial",
    neighbours: ["gurgaon-sector-50", "gurgaon-sector-53", "sohna-road-commercial", "gurgaon-sector-54", "golf-course-extension-road"],
  },
  "gurgaon-sector-53": {
    type: "commercial",
    neighbours: ["gurgaon-sector-52", "gurgaon-sector-54", "sohna-road-commercial", "golf-course-extension-road", "gurgaon-sector-55"],
  },
  "gurgaon-sector-54": {
    type: "commercial",
    neighbours: ["gurgaon-sector-53", "gurgaon-sector-55", "golf-course-extension-road", "sohna-road-commercial", "gurgaon-sector-56"],
  },
  "gurgaon-sector-55": {
    type: "commercial",
    neighbours: ["gurgaon-sector-54", "gurgaon-sector-56", "gurgaon-sector-53", "sohna-road-commercial", "gurgaon-sector-57"],
  },
  "gurgaon-sector-56": {
    type: "commercial",
    neighbours: ["gurgaon-sector-55", "gurgaon-sector-57", "gurgaon-sector-54", "golf-course-extension-road", "gurgaon-sector-58"],
  },
  "gurgaon-sector-57": {
    type: "commercial",
    neighbours: ["gurgaon-sector-56", "gurgaon-sector-58", "golf-course-extension-road", "sohna-road-commercial", "gurgaon-sector-55"],
  },
  "gurgaon-sector-58": {
    type: "commercial",
    neighbours: ["gurgaon-sector-57", "gurgaon-sector-59", "sohna-road-commercial", "gurgaon-sector-56", "gurgaon-sector-60"],
  },
  "gurgaon-sector-59": {
    type: "commercial",
    neighbours: ["gurgaon-sector-58", "gurgaon-sector-60", "gurgaon-sector-57", "sohna-road-commercial", "gurgaon-sector-61"],
  },
  "gurgaon-sector-60": {
    type: "commercial",
    neighbours: ["gurgaon-sector-59", "gurgaon-sector-61", "gurgaon-sector-58", "sohna-road-commercial", "gurgaon-sector-62"],
  },
  "gurgaon-sector-61": {
    type: "commercial",
    neighbours: ["gurgaon-sector-60", "gurgaon-sector-62", "gurgaon-sector-59", "sohna-road-commercial", "gurgaon-sector-63"],
  },
  "gurgaon-sector-62": {
    type: "commercial",
    neighbours: ["gurgaon-sector-61", "gurgaon-sector-63", "sohna-road-commercial", "gurgaon-sector-60", "gurgaon-sector-64"],
  },
  "gurgaon-sector-63": {
    type: "commercial",
    neighbours: ["gurgaon-sector-62", "gurgaon-sector-64", "sohna-road-commercial", "gurgaon-sector-61", "gurgaon-sector-65"],
  },
  "gurgaon-sector-64": {
    type: "commercial",
    neighbours: ["gurgaon-sector-63", "gurgaon-sector-65", "sohna-road-commercial", "gurgaon-sector-62", "gurgaon-sector-67"],
  },
  "gurgaon-sector-65": {
    type: "commercial",
    neighbours: ["gurgaon-sector-64", "gurgaon-sector-67", "sohna-road-commercial", "gurgaon-sector-63", "imt-manesar-commercial"],
  },
  "gurgaon-sector-67": {
    type: "commercial",
    neighbours: ["gurgaon-sector-65", "gurgaon-sector-64", "sohna-road-commercial", "imt-manesar-commercial", "gurgaon-sector-62"],
  },

  // ── Noida commercial hubs ──────────────────────────────────────────────────
  "film-city-noida": {
    type: "commercial",
    neighbours: ["electronic-city-noida", "noida-sector-16-commercial", "noida-sector-18-commercial", "noida-sector-62-commercial", "noida-sector-63-commercial"],
  },
  "electronic-city-noida": {
    type: "commercial",
    neighbours: ["film-city-noida", "noida-sector-62-commercial", "noida-sector-63-commercial", "knowledge-park-commercial", "nsez-noida"],
  },
  "knowledge-park-commercial": {
    type: "commercial",
    neighbours: ["electronic-city-noida", "nsez-noida", "noida-sector-125-commercial", "noida-sector-132-commercial", "noida-sector-135-commercial"],
  },
  "nsez-noida": {
    type: "industrial",
    neighbours: ["electronic-city-noida", "knowledge-park-commercial", "noida-sector-125-commercial", "noida-sector-142-commercial", "noida-sector-135-commercial"],
  },
  "noida-sector-16-commercial": {
    type: "commercial",
    neighbours: ["film-city-noida", "noida-sector-18-commercial", "noida-sector-62-commercial", "electronic-city-noida", "nsez-noida"],
  },
  "noida-sector-18-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-16-commercial", "noida-sector-62-commercial", "film-city-noida", "electronic-city-noida", "nsez-noida"],
  },
  "noida-sector-62-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-63-commercial", "electronic-city-noida", "film-city-noida", "noida-sector-16-commercial", "noida-sector-18-commercial"],
  },
  "noida-sector-63-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-62-commercial", "electronic-city-noida", "nsez-noida", "noida-sector-125-commercial", "noida-sector-132-commercial"],
  },
  "noida-sector-125-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-132-commercial", "noida-sector-135-commercial", "knowledge-park-commercial", "nsez-noida", "noida-sector-142-commercial"],
  },
  "noida-sector-132-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-125-commercial", "noida-sector-135-commercial", "noida-sector-142-commercial", "knowledge-park-commercial", "nsez-noida"],
  },
  "noida-sector-135-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-132-commercial", "noida-sector-142-commercial", "noida-sector-125-commercial", "knowledge-park-commercial", "nsez-noida"],
  },
  "noida-sector-142-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-135-commercial", "noida-sector-132-commercial", "nsez-noida", "knowledge-park-commercial", "noida-sector-125-commercial"],
  },
  // ── Noida Commercial Sectors (noida-commercial cluster) ──────────────────
  "noida-sector-2-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-3-commercial", "noida-sector-4-commercial", "noida-sector-5-commercial", "film-city-noida", "noida-sector-16-commercial"],
  },
  "noida-sector-3-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-2-commercial", "noida-sector-4-commercial", "noida-sector-6-commercial", "film-city-noida", "noida-sector-16-commercial"],
  },
  "noida-sector-4-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-3-commercial", "noida-sector-5-commercial", "noida-sector-2-commercial", "noida-sector-6-commercial", "noida-sector-16-commercial"],
  },
  "noida-sector-5-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-4-commercial", "noida-sector-6-commercial", "noida-sector-2-commercial", "noida-sector-3-commercial", "film-city-noida"],
  },
  "noida-sector-6-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-5-commercial", "noida-sector-4-commercial", "noida-sector-10-commercial", "noida-sector-11-commercial", "film-city-noida"],
  },
  "noida-sector-10-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-11-commercial", "noida-sector-6-commercial", "noida-sector-16-commercial", "film-city-noida", "electronic-city-noida"],
  },
  "noida-sector-11-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-10-commercial", "noida-sector-6-commercial", "noida-sector-16-commercial", "film-city-noida", "electronic-city-noida"],
  },
  "noida-sector-57-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-58-commercial", "noida-sector-62-commercial", "noida-sector-63-commercial", "electronic-city-noida", "film-city-noida"],
  },
  "noida-sector-58-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-57-commercial", "noida-sector-59-commercial", "noida-sector-62-commercial", "noida-sector-63-commercial", "electronic-city-noida"],
  },
  "noida-sector-59-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-58-commercial", "noida-sector-60-commercial", "noida-sector-62-commercial", "electronic-city-noida", "noida-sector-63-commercial"],
  },
  "noida-sector-60-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-59-commercial", "noida-sector-62-commercial", "noida-sector-63-commercial", "electronic-city-noida", "noida-sector-64-commercial"],
  },
  "noida-sector-64-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-63-commercial", "noida-sector-65-commercial", "electronic-city-noida", "noida-sector-62-commercial", "noida-sector-60-commercial"],
  },
  "noida-sector-65-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-64-commercial", "electronic-city-noida", "noida-sector-63-commercial", "noida-sector-62-commercial", "nsez-noida"],
  },
  "noida-sector-80-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-81-commercial", "noida-sector-82-commercial", "nsez-noida", "knowledge-park-commercial", "noida-sector-125-commercial"],
  },
  "noida-sector-81-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-80-commercial", "noida-sector-82-commercial", "nsez-noida", "noida-sector-83-commercial", "knowledge-park-commercial"],
  },
  "noida-sector-82-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-81-commercial", "noida-sector-83-commercial", "nsez-noida", "noida-sector-80-commercial", "knowledge-park-commercial"],
  },
  "noida-sector-83-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-82-commercial", "nsez-noida", "noida-sector-81-commercial", "knowledge-park-commercial", "noida-sector-90-commercial"],
  },
  "noida-sector-90-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-83-commercial", "nsez-noida", "knowledge-park-commercial", "noida-sector-125-commercial", "noida-sector-82-commercial"],
  },
  "noida-sector-136-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-143b-commercial", "noida-sector-132-commercial", "noida-sector-135-commercial", "knowledge-park-commercial", "noida-sector-142-commercial"],
  },
  "noida-sector-143b-commercial": {
    type: "commercial",
    neighbours: ["noida-sector-136-commercial", "noida-sector-142-commercial", "noida-sector-135-commercial", "noida-sector-132-commercial", "knowledge-park-commercial"],
  },
  // ── Ghaziabad Commercial (ghaziabad-commercial cluster) ──────────────────
  "sahibabad-industrial-area": {
    type: "industrial",
    neighbours: ["site-4-sahibabad", "site-5-sahibabad", "mohan-nagar-commercial", "kaushambi-commercial", "gt-road-ghaziabad"],
  },
  "site-4-sahibabad": {
    type: "industrial",
    neighbours: ["sahibabad-industrial-area", "site-5-sahibabad", "kaushambi-commercial", "mohan-nagar-commercial", "gt-road-ghaziabad"],
  },
  "site-5-sahibabad": {
    type: "industrial",
    neighbours: ["site-4-sahibabad", "sahibabad-industrial-area", "kaushambi-commercial", "mohan-nagar-commercial", "gt-road-ghaziabad"],
  },
  "mohan-nagar-commercial": {
    type: "commercial",
    neighbours: ["sahibabad-industrial-area", "kaushambi-commercial", "indirapuram-commercial", "raj-nagar-commercial", "vaishali-commercial"],
  },
  "kaushambi-commercial": {
    type: "commercial",
    neighbours: ["vaishali-commercial", "sahibabad-industrial-area", "mohan-nagar-commercial", "indirapuram-commercial", "site-4-sahibabad"],
  },
  "vaishali-commercial": {
    type: "commercial",
    neighbours: ["kaushambi-commercial", "indirapuram-commercial", "mohan-nagar-commercial", "raj-nagar-commercial", "sahibabad-industrial-area"],
  },
  "raj-nagar-commercial": {
    type: "commercial",
    neighbours: ["rdc-raj-nagar", "vaishali-commercial", "mohan-nagar-commercial", "sanjay-nagar-commercial", "gt-road-ghaziabad"],
  },
  "rdc-raj-nagar": {
    type: "commercial",
    neighbours: ["raj-nagar-commercial", "sanjay-nagar-commercial", "mohan-nagar-commercial", "vaishali-commercial", "gt-road-ghaziabad"],
  },
  "crossing-republik-commercial": {
    type: "commercial",
    neighbours: ["wave-city-commercial", "indirapuram-commercial", "vaishali-commercial", "raj-nagar-commercial", "mohan-nagar-commercial"],
  },
  "indirapuram-commercial": {
    type: "commercial",
    neighbours: ["vaishali-commercial", "kaushambi-commercial", "mohan-nagar-commercial", "crossing-republik-commercial", "wave-city-commercial"],
  },
  "wave-city-commercial": {
    type: "commercial",
    neighbours: ["crossing-republik-commercial", "indirapuram-commercial", "raj-nagar-commercial", "vaishali-commercial", "gt-road-ghaziabad"],
  },
  "kavi-nagar-industrial-area": {
    type: "industrial",
    neighbours: ["gt-road-ghaziabad", "sanjay-nagar-commercial", "patel-nagar-industrial-area", "loni-road-industrial-area", "bulandshahr-road-industrial-area"],
  },
  "bulandshahr-road-industrial-area": {
    type: "industrial",
    neighbours: ["kavi-nagar-industrial-area", "gt-road-ghaziabad", "patel-nagar-industrial-area", "loni-road-industrial-area", "sanjay-nagar-commercial"],
  },
  "loni-road-industrial-area": {
    type: "industrial",
    neighbours: ["kavi-nagar-industrial-area", "bulandshahr-road-industrial-area", "patel-nagar-industrial-area", "sahibabad-industrial-area", "gt-road-ghaziabad"],
  },
  "patel-nagar-industrial-area": {
    type: "industrial",
    neighbours: ["kavi-nagar-industrial-area", "loni-road-industrial-area", "bulandshahr-road-industrial-area", "gt-road-ghaziabad", "sanjay-nagar-commercial"],
  },
  "sanjay-nagar-commercial": {
    type: "commercial",
    neighbours: ["raj-nagar-commercial", "rdc-raj-nagar", "kavi-nagar-industrial-area", "gt-road-ghaziabad", "patel-nagar-industrial-area"],
  },
  "shalimar-garden-commercial": {
    type: "commercial",
    neighbours: ["sahibabad-industrial-area", "kaushambi-commercial", "vaishali-commercial", "indirapuram-commercial", "mohan-nagar-commercial"],
  },
  "gt-road-ghaziabad": {
    type: "commercial",
    neighbours: ["sahibabad-industrial-area", "kavi-nagar-industrial-area", "sanjay-nagar-commercial", "raj-nagar-commercial", "mohan-nagar-commercial"],
  },
  // ── Faridabad Commercial (faridabad-commercial cluster) ──────────────────
  "imt-faridabad": {
    type: "industrial",
    neighbours: ["dlf-industrial-faridabad", "escorts-industrial-area", "faridabad-sector-24-industrial", "faridabad-sector-25-industrial", "mathura-road-industrial-belt"],
  },
  "faridabad-sector-24-industrial": {
    type: "industrial",
    neighbours: ["faridabad-sector-25-industrial", "old-faridabad-commercial", "bata-chowk-commercial", "escorts-industrial-area", "mathura-road-industrial-belt"],
  },
  "faridabad-sector-25-industrial": {
    type: "industrial",
    neighbours: ["faridabad-sector-24-industrial", "old-faridabad-commercial", "bata-chowk-commercial", "escorts-industrial-area", "mathura-road-industrial-belt"],
  },
  "faridabad-sector-27-commercial": {
    type: "commercial",
    neighbours: ["nhpc-chowk-commercial", "faridabad-sector-31-commercial", "faridabad-sector-32-commercial", "neelam-chowk-commercial", "old-faridabad-commercial"],
  },
  "faridabad-sector-31-commercial": {
    type: "commercial",
    neighbours: ["neelam-chowk-commercial", "faridabad-sector-32-commercial", "faridabad-sector-27-commercial", "nhpc-chowk-commercial", "old-faridabad-commercial"],
  },
  "faridabad-sector-32-commercial": {
    type: "commercial",
    neighbours: ["faridabad-sector-31-commercial", "neelam-chowk-commercial", "bata-chowk-commercial", "nhpc-chowk-commercial", "faridabad-sector-27-commercial"],
  },
  "faridabad-sector-37-industrial": {
    type: "industrial",
    neighbours: ["dlf-industrial-faridabad", "escorts-industrial-area", "faridabad-sector-58-industrial", "mathura-road-industrial-belt", "imt-faridabad"],
  },
  "faridabad-sector-58-industrial": {
    type: "industrial",
    neighbours: ["faridabad-sector-59-industrial", "faridabad-sector-68-industrial", "imt-faridabad", "dlf-industrial-faridabad", "faridabad-sector-81-commercial"],
  },
  "faridabad-sector-59-industrial": {
    type: "industrial",
    neighbours: ["faridabad-sector-58-industrial", "faridabad-sector-68-industrial", "imt-faridabad", "faridabad-sector-81-commercial", "faridabad-sector-85-commercial"],
  },
  "faridabad-sector-68-industrial": {
    type: "industrial",
    neighbours: ["faridabad-sector-59-industrial", "faridabad-sector-58-industrial", "faridabad-sector-81-commercial", "faridabad-sector-85-commercial", "imt-faridabad"],
  },
  "faridabad-sector-81-commercial": {
    type: "commercial",
    neighbours: ["faridabad-sector-85-commercial", "faridabad-sector-68-industrial", "faridabad-sector-59-industrial", "imt-faridabad", "faridabad-sector-58-industrial"],
  },
  "faridabad-sector-85-commercial": {
    type: "commercial",
    neighbours: ["faridabad-sector-81-commercial", "faridabad-sector-68-industrial", "imt-faridabad", "faridabad-sector-59-industrial", "dlf-industrial-faridabad"],
  },
  "mathura-road-industrial-belt": {
    type: "industrial",
    neighbours: ["old-faridabad-commercial", "bata-chowk-commercial", "escorts-industrial-area", "imt-faridabad", "dlf-industrial-faridabad"],
  },
  "bata-chowk-commercial": {
    type: "commercial",
    neighbours: ["old-faridabad-commercial", "neelam-chowk-commercial", "faridabad-sector-24-industrial", "faridabad-sector-25-industrial", "mathura-road-industrial-belt"],
  },
  "neelam-chowk-commercial": {
    type: "commercial",
    neighbours: ["bata-chowk-commercial", "old-faridabad-commercial", "faridabad-sector-31-commercial", "faridabad-sector-32-commercial", "nhpc-chowk-commercial"],
  },
  "old-faridabad-commercial": {
    type: "commercial",
    neighbours: ["bata-chowk-commercial", "neelam-chowk-commercial", "faridabad-sector-24-industrial", "faridabad-sector-25-industrial", "mathura-road-industrial-belt"],
  },
  "ballabgarh-industrial": {
    type: "industrial",
    neighbours: ["mathura-road-industrial-belt", "dlf-industrial-faridabad", "escorts-industrial-area", "imt-faridabad", "faridabad-sector-37-industrial"],
  },
  "dlf-industrial-faridabad": {
    type: "industrial",
    neighbours: ["imt-faridabad", "escorts-industrial-area", "ballabgarh-industrial", "faridabad-sector-37-industrial", "mathura-road-industrial-belt"],
  },
  "escorts-industrial-area": {
    type: "industrial",
    neighbours: ["dlf-industrial-faridabad", "imt-faridabad", "mathura-road-industrial-belt", "ballabgarh-industrial", "faridabad-sector-24-industrial"],
  },
  "nhpc-chowk-commercial": {
    type: "commercial",
    neighbours: ["neelam-chowk-commercial", "faridabad-sector-27-commercial", "faridabad-sector-32-commercial", "bata-chowk-commercial", "old-faridabad-commercial"],
  },
};
