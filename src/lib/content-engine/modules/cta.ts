/**
 * Content Engine — CTA Module
 *
 * Deterministic, side-effect-free. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { CtaSectionData } from "../types.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

export function buildCta(locality: LocalityEntry, service: ServiceEntry): CtaSectionData {
  const isCorporate = service.capabilities?.audience?.corporate === true;

  return {
    id: `${service.slug}-${locality.slug}-cta`,
    type: "cta",
    version: "v1",
    props: {
      heading: isCorporate
        ? `Book Office Chair Repair in ${locality.name}`
        : `Book ${service.name} in ${locality.name} Today`,
      subheading: isCorporate
        ? "On-site service at your office. GST invoice. Same-day repairs available. AMC contracts for ongoing maintenance."
        : "Free doorstep inspection. Same-day service available. 6-month warranty on all repairs.",
      phoneNumber: PHONE_NUMBER,
      whatsappNumber: WHATSAPP_NUMBER,
      localityName: locality.name,
    },
  };
}
