/**
 * Content Engine — Why Choose Module
 *
 * Generates trust-building "Why Choose FurniRevive" items from business
 * config + service-specific additions. Domain data only — no JSX, no CSS.
 */

import { BUSINESS } from "@/lib/business-config.ts";
import type { CityKey, LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { WhyChooseSectionData, WhyChooseItem } from "../types.ts";

const TRICITY_KEYS: ReadonlySet<CityKey> = new Set(["chandigarh", "mohali", "panchkula"]);

/** Base items derived from BUSINESS config — apply to all services */
function getBaseItems(cityKey: CityKey): WhyChooseItem[] {
  const regionLabel = TRICITY_KEYS.has(cityKey) ? "the Tricity region" : "Delhi NCR";

  return [
    {
      title: "Same-Day Doorstep Service",
      description: `Technicians reach your door within 1–2 hours. No workshop drop-off, no waiting — repairs happen at your home.`,
    },
    {
      title: "Experienced Technicians",
      description: `${BUSINESS.foundingYear > 0 ? `Since ${BUSINESS.foundingYear}, over` : "Over"} 10,000 repairs completed across ${regionLabel} by trained craftsmen.`,
    },
    {
      title: "Transparent Pricing",
      description: `Free doorstep inspection before any work begins. Pricing from ₹599 — no hidden charges, no surprises.`,
    },
    {
      title: "6-Month Warranty",
      description: `Every repair is backed by a 6-month written warranty on parts and workmanship.`,
    },
    {
      title: "Genuine Materials",
      description: `High-density foam, genuine leather, and certified fabric — no cheap substitutes, ever.`,
    },
    {
      title: "Service Across Delhi NCR",
      description: `Coverage across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Local technicians, faster response.`,
    },
  ];
}

/** Corporate-specific items — replace BASE_ITEMS entirely for corporate audience */
const CORPORATE_ITEMS: WhyChooseItem[] = [
  {
    title: "On-Site Service at Your Office",
    description: "Technicians come directly to your office with all parts. No need to move or ship chairs — repairs happen at your premises with zero disruption.",
  },
  {
    title: "Bulk Repair for 10–200+ Chairs",
    description: "We handle large corporate orders in a single visit. Dedicated account manager, priority scheduling, and 15% bulk discount from 10 chairs.",
  },
  {
    title: "GST Invoice on Every Job",
    description: "Fully GST-registered business. Itemised tax invoice emailed within 24 hours — GSTIN included for easy expense reimbursement.",
  },
  {
    title: "AMC Plans Available",
    description: "Annual Maintenance Contracts include quarterly preventive inspections, priority breakdown response, and discounted parts pricing.",
  },
  {
    title: "Fast 1–2 Hour Response",
    description: "For urgent chair breakdowns, technicians reach your office in 1–2 hours during business hours, Monday to Saturday.",
  },
  {
    title: "All Major Brands Serviced",
    description: "Herman Miller, Steelcase, Featherlite, Godrej Interio, Durian, HNI, Haworth, and all unbranded office chairs — any model, any fault.",
  },
];

/** Service-specific extra items */
const SERVICE_EXTRAS: Partial<Record<string, WhyChooseItem>> = {
  "sofa-upholstery": {
    title: "300+ Fabric & Leather Options",
    description: `Choose from over 300 fabric and leather swatches — brought to your home for selection before any work starts.`,
  },
  "recliner-repair": {
    title: "Recliner-Specialist Technicians",
    description: `Dedicated recliner technicians trained on all major brands — Lazy Boy, Durian, Godrej, and more.`,
  },
};

export function buildWhyChoose(
  locality: LocalityEntry,
  service: ServiceEntry,
): WhyChooseSectionData {
  const baseItems = getBaseItems(locality.city);
  const items = service.capabilities?.audience?.corporate
    ? CORPORATE_ITEMS
    : (() => { const extra = SERVICE_EXTRAS[service.slug]; return extra ? [...baseItems, extra] : baseItems; })();

  return {
    id: `${service.slug}-${locality.slug}-why-choose`,
    type: "why-choose",
    version: "v1",
    props: {
      heading: `Why Choose ${BUSINESS.name} for ${service.name} in ${locality.name}?`,
      items,
    },
  };
}
