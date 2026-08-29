/**
 * Content Engine — FAQ Selector
 *
 * Selects FAQs for a locality page working natively with `LocalityEntry`
 * (the registry type), NOT the legacy `LocalityInfo`.
 *
 * Determinism: given the same `LocalityEntry` and service, this always
 * produces identical output. No randomness, no `Date.now()`, no slug hashing.
 *
 * - Content depth is driven by `locality.contentWeight`.
 * - Eligibility is driven by meaningful locality attributes (a derived profile).
 * - Answer variant is chosen from `locality.contentWeight % 3`.
 */

import type { LocalityEntry, ServiceSlug } from "@/lib/registry/types.ts";
import type { LocalityInfo } from "@/lib/seoConfigs/localities.ts";
import { FAQ_POOL_DYNAMIC } from "@/lib/seoConfigs/faq-engine.ts";
import { CITY_DISPLAY_NAMES, RESPONSE_TIMES } from "./content-pools.ts";

export type SelectedFaq = { question: string; answer: string };

export type LocalityFaqProfile = {
  isPremium: boolean;
  isHighRise: boolean;
  isDDA: boolean;
  isFamilyResidential: boolean;
  hasLuxuryFurniture: boolean;
};

// ─── Profile derivation (meaningful locality attributes only) ──────────────

export function buildLocalityProfile(locality: LocalityEntry): LocalityFaqProfile {
  const name = locality.name.toLowerCase();
  const property = locality.propertyType.toLowerCase();

  const isPremium =
    locality.affluence === "high" ||
    locality.affluence === "ultra-high" ||
    locality.premiumLevel >= 4;

  const isHighRise =
    property.includes("apartment") ||
    property.includes("high-rise") ||
    property.includes("high rise") ||
    property.includes("gated") ||
    property.includes("society") ||
    property.includes("societies");

  const isDDA =
    property.includes("dda") ||
    property.includes("flats") ||
    name.includes("rohini") ||
    name.includes("dwarka") ||
    name.includes("pitampura");

  const isFamilyResidential =
    isDDA ||
    property.includes("residential") ||
    property.includes("colony");

  const hasLuxuryFurniture =
    isPremium &&
    (property.includes("villa") ||
      property.includes("penthouse") ||
      locality.premiumLevel === 5);

  return {
    isPremium,
    isHighRise,
    isDDA,
    isFamilyResidential,
    hasLuxuryFurniture,
  };
}

// ─── Depth mapping ─────────────────────────────────────────────────────────

function faqCountForWeight(contentWeight: LocalityEntry["contentWeight"]): number {
  switch (contentWeight) {
    case 100:
      return 8;
    case 90:
      return 7;
    case 70:
      return 6;
    case 50:
      return 5;
  }
}

// ─── LocalityInfo bridge ───────────────────────────────────────────────────

/**
 * Build a minimal `LocalityInfo`-compatible object so the dynamic FAQ answer
 * functions (which expect `LocalityInfo`) can render their text.
 */
function toLocalityInfo(locality: LocalityEntry, service: ServiceSlug): LocalityInfo {
  return {
    name: locality.name,
    city: CITY_DISPLAY_NAMES[locality.city],
    cityKey: locality.city,
    propertyType: locality.propertyType,
    adjacentAreas: [...locality.nearby],
    landmarks: [...locality.landmarks],
    responseTime: RESPONSE_TIMES[locality.city],
    parentServiceSlug: `/${service}-${locality.city}`,
  };
}

// ─── Selection ─────────────────────────────────────────────────────────────

type PoolEntry = (typeof FAQ_POOL_DYNAMIC)[number];

function isEligible(entry: PoolEntry, profile: LocalityFaqProfile): boolean {
  if (entry.signals === "always") return true;
  // Signals may reference "isOffice", which this engine does not model — treat
  // any unmodelled signal as false.
  const flags: Record<string, boolean> = {
    isPremium: profile.isPremium,
    isHighRise: profile.isHighRise,
    isDDA: profile.isDDA,
    isFamilyResidential: profile.isFamilyResidential,
    hasLuxuryFurniture: profile.hasLuxuryFurniture,
    isOffice: false,
  };
  return entry.signals.some((signal) => flags[signal] === true);
}

/**
 * Deterministically select FAQs for a locality + service.
 *
 * Count derives from `locality.contentWeight`. Eligible FAQs are sorted by
 * `baseScore` (desc), then alphabetically by `intentGroup` for a stable
 * tie-break. One FAQ per intent group. The answer variant index is
 * `contentWeight % 3`.
 */
export function selectFaqs(locality: LocalityEntry, service: ServiceSlug): SelectedFaq[] {
  const profile = buildLocalityProfile(locality);
  const count = faqCountForWeight(locality.contentWeight);
  const info = toLocalityInfo(locality, service);
  const answerIndex = (locality.contentWeight % 3) as 0 | 1 | 2;

  const eligible = FAQ_POOL_DYNAMIC.filter((entry) => isEligible(entry, profile));

  const sorted = [...eligible].sort((a, b) => {
    const scoreDiff = (b.baseScore ?? 1) - (a.baseScore ?? 1);
    if (scoreDiff !== 0) return scoreDiff;
    return a.intentGroup.localeCompare(b.intentGroup);
  });

  const selected: SelectedFaq[] = [];
  const usedGroups = new Set<string>();

  for (const entry of sorted) {
    if (selected.length >= count) break;
    if (usedGroups.has(entry.intentGroup)) continue;
    usedGroups.add(entry.intentGroup);

    const answerFn = entry.answers[answerIndex];
    selected.push({
      question: entry.question(info),
      answer: answerFn(info),
    });
  }

  return selected;
}

// ─── Office Chair FAQ Selection (B2B) ────────────────────────────────────────

type OfficeAnswerVariants = [string, string, string];

type OfficeFaqTemplate = {
  question: (name: string) => string;
  answers: OfficeAnswerVariants;
};

function buildOfficeTemplates(locality: LocalityEntry): OfficeFaqTemplate[] {
  const { name } = locality;
  return [
    {
      question: (n) => `How much does office chair repair cost in ${n}?`,
      answers: [
        `Office chair repair in ${name} starts at ₹500 for a gas lift replacement and ₹300 for a set of 5 caster wheels. Hydraulic cylinder repair is ₹600–₹900. Armrest repair starts at ₹400. Mesh back panel repair ranges ₹800–₹1,500. FurniRevive provides a free inspection and GST invoice for all corporate clients.`,
        `Pricing for office chair repair in ${name}: gas lift ₹500–₹700, caster wheels (set of 5) ₹300–₹500, hydraulic cylinder ₹600–₹900, armrest padding ₹400–₹700, mesh back repair ₹800–₹1,500, full executive chair restoration ₹2,000–₹4,000. All prices include GST invoice and 6-month warranty.`,
        `Office chair repair cost in ${name} depends on the fault: gas lift sinking starts at ₹500, caster wheel replacement ₹300 for a set, hydraulic issues ₹600, armrest repairs ₹400. Bulk orders of 10+ chairs get a 15% discount. Free doorstep inspection — no obligation to proceed.`,
      ],
    },
    {
      question: (n) => `Do you provide on-site office chair repair at our office in ${n}?`,
      answers: [
        `Yes — FurniRevive provides fully on-site office chair repair in ${name}. Our technician arrives at your office with all parts: gas lifts, caster wheels, armrest foam, mesh panels, and hydraulic cylinders. No need to move or ship chairs. Same-day service available.`,
        `Absolutely. We specialise in on-site corporate chair repair across ${name}. Technicians are dispatched with a full parts kit and reach most offices in ${name} within 1–2 hours of booking. We handle everything from single chairs to bulk repair orders of 50+ chairs.`,
        `FurniRevive's on-site service is designed specifically for offices in ${name}. We send a trained technician directly to your premises — zero disruption to your team. Parts are stocked for all common chair brands. GST invoice is provided for every repair.`,
      ],
    },
    {
      question: (n) => `Do you offer bulk office chair repair for corporates in ${n}?`,
      answers: [
        `Yes. FurniRevive offers bulk repair programmes for offices with 10 or more chairs in ${name}. Bulk orders receive a 15% discount, priority scheduling, and a dedicated account manager. We can repair up to 50 chairs in a single visit.`,
        `We regularly serve corporates, co-working spaces, and BPOs in ${name} with bulk chair repair. Orders of 10+ chairs qualify for discounted rates. We also offer AMC (Annual Maintenance Contracts) covering quarterly inspections and on-demand repairs.`,
        `Bulk repair in ${name}: FurniRevive handles 10–200+ chair repair projects for offices, hotels, and institutions. Volume pricing applies from 10 chairs onwards. Request a quote via WhatsApp with your chair count and fault description for a same-day estimate.`,
      ],
    },
    {
      question: (n) => `Do you provide GST invoice for office chair repair in ${n}?`,
      answers: [
        `Yes — GST invoice is provided for every office chair repair job in ${name}. We are a GST-registered business. The invoice includes itemised repair line items, HSN code, and GSTIN for easy expense reimbursement and accounting.`,
        `FurniRevive provides proper GST-compliant tax invoices for all corporate chair repair work in ${name}. Invoices are emailed within 24 hours of job completion and include full repair details for auditing.`,
        `All office chair repairs in ${name} come with a GST invoice. Share your company GSTIN at the time of booking and we will include it on the invoice. We support both B2B and direct billing.`,
      ],
    },
    {
      question: (n) => `How quickly can a technician reach our office in ${n}?`,
      answers: [
        `For offices in ${name}, FurniRevive technicians typically arrive within 1–2 hours of booking during business hours. Emergency same-day slots are available. We service ${name} Monday to Saturday, 9 AM to 7 PM.`,
        `Most corporate clients in ${name} get a technician on-site within 1–2 hours. Pre-scheduled visits (next morning) are also available. For large bulk orders, we coordinate a dedicated time window to minimise disruption.`,
        `Response time in ${name} is typically 1–2 hours for urgent same-day repairs. For planned maintenance, book a slot and we confirm a 1-hour arrival window. Weekend service is available by prior appointment.`,
      ],
    },
    {
      question: (n) => `What office chair brands do you repair in ${n}?`,
      answers: [
        `FurniRevive repairs all major office chair brands in ${name} including Herman Miller, Steelcase, HNI, Godrej Interio, Featherlite, Durian, and local brands. We stock universal gas lifts, casters, and armrest components compatible with most chair models.`,
        `We service all chair brands at offices in ${name} — from budget chairs to premium ergonomic brands like Herman Miller and Steelcase. Gas lifts, casters, mesh panels, armrests, and tilt mechanisms are covered across all makes.`,
        `Any brand, any model. FurniRevive technicians in ${name} are trained on Herman Miller, Featherlite, Godrej Interio, Durian, IKEA, and unbranded office chairs. If parts are non-standard, we source them or fabricate compatible replacements.`,
      ],
    },
    {
      question: (n) => `Do you offer AMC plans for office chairs in ${n}?`,
      answers: [
        `Yes — FurniRevive offers Annual Maintenance Contracts (AMC) for office chairs in ${name}. AMC plans cover quarterly inspections, priority same-day repair response, and discounted parts pricing. Ideal for offices with 20+ chairs.`,
        `Our AMC plans for ${name} offices include scheduled preventive maintenance, unlimited service calls, and replacement parts at cost. Plans start at ₹99 per chair per year for 20+ chairs. Contact us for a custom quote.`,
        `For ongoing chair maintenance in ${name}, FurniRevive's AMC programme provides peace of mind — quarterly checkups, prompt breakdown response, and no surprise repair bills. AMC pricing is negotiated based on your total chair count.`,
      ],
    },
  ];
}

/**
 * Select 7 B2B-appropriate office chair FAQs for a locality.
 *
 * Uses a `slugVariant` approach: `(locality.contentWeight ?? 50) % 3` picks
 * between 3 answer variants per question. No pool/scoring — static array with
 * locality interpolation.
 */
export function selectOfficeFaqs(locality: LocalityEntry): SelectedFaq[] {
  const v = (locality.contentWeight ?? 50) % 3;
  const templates = buildOfficeTemplates(locality);

  return templates.map((t) => ({
    question: t.question(locality.name),
    answer: t.answers[v],
  }));
}

// ─── Office Furniture FAQ Selection (B2B) ───────────────────────────────────

type OfficeFurnitureAnswerVariants = [string, string, string];

type OfficeFurnitureFaqTemplate = {
  question: (name: string) => string;
  answers: OfficeFurnitureAnswerVariants;
};

function buildOfficeFurnitureTemplates(locality: LocalityEntry): OfficeFurnitureFaqTemplate[] {
  const { name } = locality;
  return [
    {
      question: (n) => `What types of office furniture do you repair in ${n}?`,
      answers: [
        `FurniRevive repairs all types of office furniture in ${name} — executive desks, modular workstations, conference tables, reception desks, office cabinets, partitions, and storage units. Our technicians handle surface damage, structural issues, hardware failures, and veneer or laminate repairs on-site.`,
        `We service the full range of office furniture at workplaces in ${name}: desks (executive and modular), conference tables, reception counters, filing cabinets, bookshelves, partitions, and custom-built office pieces. Both wood and metal furniture are covered.`,
        `Office furniture repair in ${name} covers executive desks, workstations, conference tables, reception desks, cabinets, storage units, and partition systems. Whether it's a scratched surface, broken drawer, or wobbly leg — our technicians fix it on-site at your office.`,
      ],
    },
    {
      question: (n) => `Do you provide GST invoice for office furniture repair in ${n}?`,
      answers: [
        `Yes — GST invoice is provided for every office furniture repair job in ${name}. We are a GST-registered business. The invoice includes itemised repair line items, HSN code, and GSTIN for easy expense reimbursement and accounting.`,
        `FurniRevive provides proper GST-compliant tax invoices for all corporate furniture repair work in ${name}. Invoices are emailed within 24 hours of job completion and include full repair details for auditing.`,
        `All office furniture repairs in ${name} come with a GST invoice. Share your company GSTIN at the time of booking and we will include it on the invoice. We support both B2B and direct billing.`,
      ],
    },
    {
      question: (n) => `Do you offer AMC plans for office furniture in ${n}?`,
      answers: [
        `Yes — FurniRevive offers Annual Maintenance Contracts (AMC) for office furniture in ${name}. AMC plans cover quarterly inspections, priority same-day repair response, and discounted parts and materials pricing. Ideal for offices with 20+ furniture pieces.`,
        `Our AMC plans for ${name} offices cover desks, workstations, conference tables, cabinets, and all other office furniture. Plans include scheduled preventive maintenance, unlimited service calls, and materials at cost. Contact us for a custom quote.`,
        `For ongoing furniture maintenance in ${name}, FurniRevive's AMC programme provides peace of mind — quarterly checkups, prompt breakdown response, and no surprise repair bills. AMC pricing is negotiated based on your total furniture inventory.`,
      ],
    },
    {
      question: (n) => `Do you provide on-site office furniture repair in ${n}?`,
      answers: [
        `Yes — FurniRevive provides fully on-site office furniture repair in ${name}. Our technicians arrive at your office with all tools and materials: wood fillers, veneer, laminates, hardware, and structural components. No need to move heavy desks or tables. Same-day service available.`,
        `Absolutely. We specialise in on-site corporate furniture repair across ${name}. Technicians are dispatched with a complete toolkit and reach most offices within 1–2 hours of booking. We handle everything from single desk repair to full office furniture overhauls.`,
        `FurniRevive's on-site service is designed specifically for workplaces in ${name}. We send trained technicians directly to your premises — zero disruption to your team. All common materials are stocked. GST invoice is provided for every repair.`,
      ],
    },
    {
      question: (n) => `Do you offer bulk office furniture repair for corporates in ${n}?`,
      answers: [
        `Yes. FurniRevive offers bulk repair programmes for offices with 10 or more furniture pieces in ${name}. Bulk orders receive a 15% discount, priority scheduling, and a dedicated account manager. We can repair multiple workstations, desks, and tables in a single visit.`,
        `We regularly serve corporates, co-working spaces, and institutions in ${name} with bulk furniture repair. Orders of 10+ pieces qualify for discounted rates. We also offer AMC contracts covering quarterly inspections and on-demand repairs for all office furniture.`,
        `Bulk furniture repair in ${name}: FurniRevive handles 10–100+ piece repair projects for offices, hotels, and institutions. Volume pricing applies from 10 pieces onwards. Request a quote via WhatsApp with your furniture inventory and damage description for a same-day estimate.`,
      ],
    },
    {
      question: (n) => `What office furniture brands do you service in ${n}?`,
      answers: [
        `FurniRevive services all major office furniture brands in ${name} including Godrej Interio, Featherlite, Steelcase, Herman Miller, Durian, IKEA, Wipro Furniture, Haworth, and Humanscale. We also repair unbranded and custom-made office furniture.`,
        `We service all furniture brands at offices in ${name} — from budget modular setups to premium brands like Herman Miller and Steelcase. Desks, workstations, conference tables, and cabinets from any manufacturer are covered.`,
        `Any brand, any model. FurniRevive technicians in ${name} are trained on Godrej Interio, Featherlite, Durian, Steelcase, IKEA, HNI India, and custom-made furniture. If replacement hardware is non-standard, we source compatible parts.`,
      ],
    },
    {
      question: (n) => `What warranty do you offer on office furniture repair in ${n}?`,
      answers: [
        `FurniRevive provides a 6-month written warranty on all office furniture repairs in ${name}. This covers workmanship and materials used. If any repair fails within the warranty period, we re-fix it at no additional charge.`,
        `All office furniture repairs in ${name} come with a 6-month warranty covering parts and labour. The warranty document is included with your GST invoice. For AMC clients, the warranty extends to the full contract duration.`,
        `Every repair we complete at offices in ${name} carries a 6-month warranty. If a repaired desk, table, or cabinet develops the same issue within 6 months, we return and fix it free of charge. No questions asked.`,
      ],
    },
  ];
}

/**
 * Select 7 B2B-appropriate office furniture FAQs for a locality.
 *
 * Uses a `slugVariant` approach: `(locality.contentWeight ?? 50) % 3` picks
 * between 3 answer variants per question. No pool/scoring — static array with
 * locality interpolation.
 */
export function selectOfficeFurnitureFaqs(locality: LocalityEntry): SelectedFaq[] {
  const v = (locality.contentWeight ?? 50) % 3;
  const templates = buildOfficeFurnitureTemplates(locality);

  return templates.map((t) => ({
    question: t.question(locality.name),
    answer: t.answers[v],
  }));
}
