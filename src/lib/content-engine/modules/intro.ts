/**
 * Content Engine — Intro Module
 *
 * Deterministic, side-effect-free. Produces locality-specific prose derived
 * from meaningful locality attributes (propertyType, housingAge, affluence,
 * landmarks). Domain data only.
 *
 * Depth: contentWeight <= 70 → 2 paragraphs + 4 key facts;
 *        contentWeight >= 90 → 3 paragraphs + 5 key facts.
 */

import type { LocalityEntry, ServiceEntry, HousingAgeCategory, AffluenceLevel } from "@/lib/registry/types.ts";
import type { IntroSectionData } from "../types.ts";
import { CITY_DISPLAY_NAMES, RESPONSE_TIMES } from "../content-pools.ts";
import { getIntroOpener, getMicroLocalContext } from "../content-uniqueness.ts";

function housingAgePhrase(age: HousingAgeCategory): string {
  switch (age) {
    case "new":
      return "a newer, fast-growing residential area";
    case "mid-age":
      return "a well-settled residential area";
    case "established":
      return "a long-established neighbourhood";
    case "heritage":
      return "a heritage neighbourhood with older housing stock";
  }
}

function affluenceParagraph(
  locality: LocalityEntry,
  service: ServiceEntry,
  cityName: string,
): string {
  const svc = service.name.toLowerCase();
  switch (locality.affluence) {
    case "high":
    case "ultra-high":
      return `Homes in ${locality.name} often feature premium and imported furniture, so our senior technicians carry genuine leather, designer-grade fabrics, and specialist materials to match original finishes. Every ${svc} job is handled with care and backed by a 6-month written warranty.`;
    case "budget":
      return `We keep ${svc} in ${locality.name} affordable and transparent — fixed prices agreed after a free inspection, with no hidden charges. Most repairs cost a fraction of buying new, so your furniture serves you for years more.`;
    case "mid":
    case "mid-high":
    default:
      return `Households across ${locality.name} choose FurniRevive for dependable ${svc} that balances quality and value. Our technicians arrive fully equipped, quote a price upfront, and complete most repairs in a single ${cityName} visit.`;
  }
}

function buildParagraphs(
  locality: LocalityEntry,
  service: ServiceEntry,
  cityName: string,
  full: boolean,
): string[] {
  const svc = service.name.toLowerCase();

  // Paragraph 1 — service overview
  const overview = `FurniRevive brings professional ${svc} directly to your home in ${locality.name}, ${cityName}. From foam and spring issues to fabric, leather, and frame work, our trained technicians diagnose and repair on-site — so you never have to move your furniture to a workshop.`;

  // Paragraph 2 — locality context
  const landmark = locality.landmarks[0];
  const localityContext = `${locality.name} is ${housingAgePhrase(locality.housingAge)} known for its ${locality.propertyType}.${
    landmark ? ` With ${landmark} nearby, we serve the area regularly and reach most addresses in ${RESPONSE_TIMES[locality.city]}.` : ` We serve the area regularly and reach most addresses in ${RESPONSE_TIMES[locality.city]}.`
  }`;

  if (!full) {
    return [overview, localityContext];
  }

  // Paragraph 3 — why choose us / affluence-specific
  return [overview, localityContext, affluenceParagraph(locality, service, cityName)];
}

function buildKeyFacts(
  locality: LocalityEntry,
  service: ServiceEntry,
  full: boolean,
): string[] {
  const svc = service.name.toLowerCase();
  const affluenceFact: Record<AffluenceLevel, string> = {
    budget: "Save up to 70% versus buying new furniture",
    mid: "Transparent pricing from ₹599 with no hidden charges",
    "mid-high": "Wide range of fabric, foam, and leather options",
    high: "Premium and genuine-leather materials available",
    "ultra-high": "Specialist handling for imported and designer pieces",
  };

  const facts = [
    `Technician reaches ${locality.name} in ${RESPONSE_TIMES[locality.city]}`,
    "Free doorstep inspection with no obligation",
    "6-month written warranty on every repair",
    affluenceFact[locality.affluence],
  ];

  if (full) {
    facts.push(`Doorstep ${svc} for ${locality.propertyType}`);
  }

  return facts;
}

function buildCorporateParagraphs(locality: LocalityEntry): string[] {
  const landmark = locality.landmarks[0];
  return [
    `FurniRevive provides professional office chair repair directly at your workplace in ${locality.name}. From sinking gas lifts and broken caster wheels to torn mesh panels and worn executive chair leather, our technicians diagnose and fix on-site — no shipping, no downtime.`,
    `${locality.name} is home to a growing cluster of corporate offices, startups, and co-working spaces.${landmark ? ` With ${landmark} nearby, we serve the area regularly and reach most offices in ${RESPONSE_TIMES[locality.city]}.` : ` We serve the area regularly and reach most offices in ${RESPONSE_TIMES[locality.city]}.`} Our technicians carry a full parts kit — gas lifts, casters, foam, mesh panels, and armrest components — for same-visit repairs.`,
    `Offices across ${locality.name} trust FurniRevive for bulk chair maintenance, AMC contracts, and urgent one-off repairs. We issue GST invoices for every job and offer 15% bulk discounts for orders of 10 or more chairs.`,
  ];
}

function buildCorporateKeyFacts(locality: LocalityEntry): string[] {
  return [
    `Technician reaches ${locality.name} in ${RESPONSE_TIMES[locality.city]}`,
    "Free on-site inspection with no obligation",
    "GST invoice provided for every repair",
    "Bulk discount — 15% off for 10+ chairs",
    "AMC plans available for ongoing maintenance",
  ];
}

function buildFurnitureParagraphs(locality: LocalityEntry): string[] {
  const landmark = locality.landmarks[0];
  return [
    `FurniRevive provides professional office furniture repair directly at your workplace in ${locality.name}. From scratched executive desks and wobbly workstations to damaged conference tables and broken storage cabinets, our technicians diagnose and fix on-site — no moving, no downtime.`,
    `${locality.name} is home to a growing cluster of corporate offices, startups, and co-working spaces.${landmark ? ` With ${landmark} nearby, we serve the area regularly and reach most offices in ${RESPONSE_TIMES[locality.city]}.` : ` We serve the area regularly and reach most offices in ${RESPONSE_TIMES[locality.city]}.`} Our technicians carry a complete toolkit — wood fillers, veneer sheets, hardware, laminate, and structural reinforcement materials — for same-visit repairs.`,
    `Offices across ${locality.name} trust FurniRevive for bulk furniture maintenance, AMC contracts, and urgent one-off repairs. We issue GST invoices for every job and offer 15% bulk discounts for orders covering 10 or more furniture pieces.`,
  ];
}

function buildFurnitureKeyFacts(locality: LocalityEntry): string[] {
  return [
    `Technician reaches ${locality.name} in ${RESPONSE_TIMES[locality.city]}`,
    "Free on-site inspection with no obligation",
    "GST invoice provided for every repair",
    "Bulk discount — 15% off for 10+ furniture pieces",
    "AMC plans available for ongoing office furniture maintenance",
  ];
}

export function buildIntro(locality: LocalityEntry, service: ServiceEntry): IntroSectionData {
  const cityName = CITY_DISPLAY_NAMES[locality.city];
  const full = locality.contentWeight >= 90;
  const ctx = { locality, service, city: cityName };

  const isFurniture = service.slug === "office-furniture-repair";

  const paragraphs = isFurniture
    ? buildFurnitureParagraphs(locality)
    : service.capabilities?.audience?.corporate
      ? buildCorporateParagraphs(locality)
      : [getIntroOpener(ctx), getMicroLocalContext(ctx), ...buildParagraphs(locality, service, cityName, full)];

  const keyFacts = isFurniture
    ? buildFurnitureKeyFacts(locality)
    : service.capabilities?.audience?.corporate
      ? buildCorporateKeyFacts(locality)
      : buildKeyFacts(locality, service, full);

  return {
    id: `${service.slug}-${locality.slug}-intro`,
    type: "intro",
    version: "v1",
    props: {
      heading: `Professional ${service.name} Service in ${locality.name}`,
      paragraphs,
      keyFacts,
    },
  };
}
