/**
 * Content Engine — Quick Answers Module
 *
 * Concise answers to the top 5 questions customers ask.
 * Designed for AI search extraction and featured snippet capture.
 * Branched by service capabilities. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { QuickAnswersSectionData } from "../types.ts";
import { PHONE_NUMBER } from "@/lib/seo-constants.ts";

function buildCorporateAnswers(locality: LocalityEntry): Array<{ question: string; answer: string }> {
  return [
    {
      question: `Do you repair office chairs at the office premises in ${locality.name}?`,
      answer: `Yes. FurniRevive provides on-site office chair repair directly at your office in ${locality.name}. Our technicians carry all common parts and tools — no need to transport chairs.`,
    },
    {
      question: "How much does gas lift replacement cost?",
      answer: "Gas lift (pneumatic cylinder) replacement starts at ₹500. The total cost depends on the chair brand and cylinder size. Most replacements are completed in under 2 hours on-site.",
    },
    {
      question: "Do you provide a GST invoice for office chair repairs?",
      answer: "Yes. FurniRevive provides a proper GST invoice for all corporate repair orders, suitable for company reimbursement and accounting.",
    },
    {
      question: "Do you repair ergonomic chairs?",
      answer: "Yes. We repair all ergonomic chair brands including Herman Miller, Featherlite, Godrej, Wipro, and local brands. Repairs include tilt mechanism, mesh replacement, armrest, and foam.",
    },
    {
      question: "Do you offer Annual Maintenance Contracts (AMC) for office furniture?",
      answer: `Yes. FurniRevive offers corporate AMC plans for offices in ${locality.name} covering scheduled inspections, priority repairs and bulk repair discounts. Call ${PHONE_NUMBER} to discuss a custom plan.`,
    },
  ];
}

export function buildQuickAnswers(locality: LocalityEntry, service: ServiceEntry): QuickAnswersSectionData {
  const answers = service.capabilities?.audience?.corporate
    ? buildCorporateAnswers(locality)
    : [
        {
          question: `How quickly can you repair furniture in ${locality.name}?`,
          answer: `FurniRevive provides same-day doorstep furniture repair in ${locality.name}. Technicians typically arrive within 1–3 hours of booking.`,
        },
        {
          question: "Is there a warranty on repairs?",
          answer: "Yes. All repairs come with a 6-month warranty on workmanship and parts.",
        },
      ];

  return {
    id: `${service.slug}-${locality.slug}-quick-answers`,
    type: "quick-answers",
    version: "v1",
    props: {
      heading: "Quick Answers",
      answers,
    },
  };
}
