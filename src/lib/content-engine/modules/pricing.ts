/**
 * Content Engine — Pricing Module
 *
 * Deterministic, side-effect-free. Draws from the shared pricing pools.
 * Domain data only. Adds an affluence note for high / ultra-high localities.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { PricingSectionData } from "../types.ts";
import { PRICING_ITEMS, WHATS_INCLUDED, COST_FACTORS } from "../content-pools.ts";

const OFFICE_CHAIR_PRICING_ITEMS = [
  { service: "Gas Lift Replacement", startingPrice: "₹500", timeEstimate: "1–2 hours", sameDay: true as const },
  { service: "Hydraulic Cylinder Repair", startingPrice: "₹600", timeEstimate: "1–2 hours", sameDay: true as const },
  { service: "Caster Wheel Replacement (set of 5)", startingPrice: "₹300", timeEstimate: "30 mins", sameDay: true as const },
  { service: "Tilt Mechanism Repair", startingPrice: "₹800", timeEstimate: "2–3 hours", sameDay: "usually" as const },
  { service: "Armrest Replacement", startingPrice: "₹400", timeEstimate: "1 hour", sameDay: true as const },
  { service: "Mesh Back Replacement", startingPrice: "₹1,200", timeEstimate: "2–4 hours", sameDay: "usually" as const },
  { service: "Seat Foam Replacement", startingPrice: "₹800", timeEstimate: "2–3 hours", sameDay: "usually" as const },
  { service: "Back Support Repair", startingPrice: "₹600", timeEstimate: "1–2 hours", sameDay: true as const },
  { service: "Base Replacement", startingPrice: "₹600", timeEstimate: "1–2 hours", sameDay: true as const },
  { service: "Executive Chair Full Restoration", startingPrice: "₹3,000", timeEstimate: "2–3 days", sameDay: false as const },
] satisfies Array<{ service: string; startingPrice: string; timeEstimate: string; sameDay: boolean | "usually" }>;

const OFFICE_CHAIR_WHATS_INCLUDED = [
  "Free on-site inspection at your office",
  "Genuine replacement parts",
  "GST invoice provided",
  "6-month warranty on all repairs",
  "Bulk repair discounts available",
  "AMC contracts for ongoing maintenance",
];

const OFFICE_CHAIR_COST_FACTORS = [
  { label: "Chair type", description: "Executive, ergonomic, mesh and gaming chairs have different part costs." },
  { label: "Part availability", description: "Branded parts (Herman Miller, Featherlite, etc.) may cost more than generic replacements." },
  { label: "Quantity", description: "Bulk repairs (10+ chairs) qualify for volume discounts." },
  { label: "On-site vs workshop", description: "On-site office repairs incur a nominal visit charge for orders below ₹1,500." },
];

export function buildPricing(locality: LocalityEntry, service: ServiceEntry): PricingSectionData {
  if (service.capabilities?.audience?.corporate) {
    return {
      id: `${service.slug}-${locality.slug}-pricing`,
      type: "pricing",
      version: "v1",
      props: {
        heading: `${service.name} Pricing in ${locality.name}`,
        items: OFFICE_CHAIR_PRICING_ITEMS.map((item) => ({
          service: item.service,
          startingPrice: item.startingPrice,
          timeEstimate: item.timeEstimate,
          sameDay: item.sameDay,
        })),
        whatsIncluded: OFFICE_CHAIR_WHATS_INCLUDED,
        costFactors: OFFICE_CHAIR_COST_FACTORS,
        showAffluenceNote: false,
      },
    };
  }

  const showAffluenceNote =
    locality.affluence === "high" || locality.affluence === "ultra-high";

  const affluenceNote = showAffluenceNote
    ? `Premium fabric and genuine leather options available for ${locality.propertyType} properties in ${locality.name}.`
    : undefined;

  return {
    id: `${service.slug}-${locality.slug}-pricing`,
    type: "pricing",
    version: "v1",
    props: {
      heading: `${service.name} Pricing in ${locality.name}`,
      items: PRICING_ITEMS.map((item) => ({
        service: item.service,
        startingPrice: item.startingPrice,
        timeEstimate: item.timeEstimate,
        sameDay: item.sameDay,
      })),
      whatsIncluded: WHATS_INCLUDED.map((entry) => entry.label),
      costFactors: COST_FACTORS.map((factor) => ({
        label: factor.label,
        description: factor.description,
      })),
      showAffluenceNote,
      ...(affluenceNote ? { affluenceNote } : {}),
    },
  };
}
