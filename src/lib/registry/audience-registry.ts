/**
 * AUDIENCE_REGISTRY
 *
 * Reusable audience definitions. Modules use these to vary CTA wording,
 * testimonials, pricing notes, FAQs and trust badges without hardcoding
 * service slugs.
 */

export type AudienceKey =
  | "residential"
  | "corporate"
  | "luxury"
  | "hospitality"
  | "government"
  | "institutional";

export type AudienceEntry = {
  key: AudienceKey;
  name: string;
  description: string;
};

export const AUDIENCE_REGISTRY: readonly AudienceEntry[] = [
  {
    key: "residential",
    name: "Residential",
    description: "Homeowners and tenants seeking home furniture repair and upholstery services.",
  },
  {
    key: "corporate",
    name: "Corporate",
    description: "Businesses, startups, co-working spaces and offices needing commercial furniture repair.",
  },
  {
    key: "luxury",
    name: "Luxury",
    description: "High-net-worth clients requiring premium restoration of luxury and designer furniture.",
  },
  {
    key: "hospitality",
    name: "Hospitality",
    description: "Hotels, resorts and restaurants needing bulk furniture repair and maintenance.",
  },
  {
    key: "government",
    name: "Government",
    description: "Government offices and institutions requiring furniture repair with GST billing.",
  },
  {
    key: "institutional",
    name: "Institutional",
    description: "Schools, hospitals, banks and other institutions needing large-scale furniture repair.",
  },
];
