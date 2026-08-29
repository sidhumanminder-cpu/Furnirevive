/**
 * Content Engine — FAQ Module
 *
 * Deterministic, side-effect-free. Delegates FAQ selection to the FAQ selector,
 * which derives depth and eligibility from meaningful locality attributes.
 * Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { FaqSectionData } from "../types.ts";
import { selectFaqs, selectOfficeFaqs } from "../faq-selector.ts";
import { getUniqueFaq } from "../content-uniqueness.ts";

export function buildFaq(locality: LocalityEntry, service: ServiceEntry): FaqSectionData {
  const city = locality.city;
  const uniqueFaq = getUniqueFaq({ locality, service, city });
  const faqs = service.capabilities?.audience?.corporate
    ? selectOfficeFaqs(locality)
    : [...selectFaqs(locality, service.slug), uniqueFaq];

  return {
    id: `${service.slug}-${locality.slug}-faq`,
    type: "faq",
    version: "v1",
    props: {
      heading: `Frequently Asked Questions — ${service.name} in ${locality.name}`,
      faqs,
    },
  };
}
