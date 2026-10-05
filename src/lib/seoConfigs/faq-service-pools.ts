/**
 * Service-specific FAQ sets for locality pages that are not sofa repair.
 * The main sofa pool lives in faq-engine.ts; these keep furniture, recliner,
 * upholstery and chair/corporate pages from showing sofa-only answers.
 */

import type { LocalityInfo } from "./localities.ts";

export type FaqServiceCategory = "sofa" | "furniture" | "recliner" | "upholstery" | "chair" | "corporate";

export type ServiceFaq = { intentGroup: string; question: string; answer: string };

type FaqTemplate = { intentGroup: string; question: (n: string) => string; answer: (i: LocalityInfo) => string };

const FURNITURE: FaqTemplate[] = [
  { intentGroup: "free_inspection", question: (n) => `Is the doorstep inspection free in ${n}?`, answer: (i) => `Yes, FurniRevive offers a completely free doorstep inspection for furniture repair in ${i.name}. Our carpenter visits your home, inspects the furniture piece thoroughly (joints, hinges, legs, panels and finish), and provides a detailed itemised quote — no obligation, no call-out fee. Work only begins after you approve the quote.` },
  { intentGroup: "service_areas", question: (n) => `Which areas near ${n} do you service?`, answer: (i) => `FurniRevive services ${i.name} and all surrounding areas in ${i.city}. We cover a 5–8 km radius from your location with no area surcharge. Adjacent sectors, neighbouring colonies, and nearby townships are all covered under the same price structure. Call 92179 99355 to confirm coverage for your address.` },
  { intentGroup: "pricing", question: (n) => `How much does furniture repair cost in ${n}?`, answer: (i) => `Furniture repair in ${i.name} starts at ₹599 for a minor joint or hardware fix. Wardrobe, bed and table repairs are quoted after a free doorstep inspection, with a fixed price agreed before any work begins and no hidden charges.` },
  { intentGroup: "warranty", question: (n) => `Is there a warranty on furniture repair in ${n}?`, answer: (i) => `Yes. Every furniture repair in ${i.name} carries a written 6-month warranty covering the repaired joints, hardware and finish. If the same fault returns, we revisit and fix it at no extra charge.` },
  { intentGroup: "response_time", question: (n) => `How quickly can a carpenter reach ${n}?`, answer: (i) => `Our carpenters typically reach ${i.name} within ${i.responseTime}. Book before noon for same-day service, or call 92179 99355 for urgent repairs.` },
  { intentGroup: "service_scope", question: (n) => `What furniture do you repair in ${n}?`, answer: (i) => `In ${i.name} we repair beds, wardrobes, dining tables and chairs, cabinets, TV units, bookshelves, sofas and other wooden furniture. That includes loose joints, broken legs, hinges, drawer channels and damaged polish.` },
  { intentGroup: "doorstep", question: (n) => `Can furniture repair be done at home in ${n}?`, answer: (i) => `Yes. Our carpenters bring tools, wood filler, adhesives and hardware to your ${i.propertyType} in ${i.name}. Most repairs finish in one visit, with no pickup and no workshop needed.` },
  { intentGroup: "polish", question: (n) => `Do you polish and refinish wooden furniture in ${n}?`, answer: (i) => `Yes. We sand, fill, stain and refinish wooden furniture in ${i.name} using French polish, melamine or lacquer, matched to the existing colour. Scratches, water marks and faded finishes can all be restored.` },
  { intentGroup: "same_day", question: (n) => `Do you offer same-day furniture repair in ${n}?`, answer: (i) => `Yes. FurniRevive offers same-day furniture repair in ${i.name} for bookings received before noon. Our technicians can reach your address within ${i.responseTime}. The carpenter arrives with tools, wood filler, adhesives and hardware, so most repairs finish in one visit. Call 92179 99355 to confirm availability for your slot.` },
  { intentGroup: "repair_vs_replace", question: (n) => `Is repairing furniture in ${n} cheaper than buying new?`, answer: (i) => `Usually yes. Repair in ${i.name} typically costs a fraction of a new piece, and solid wood furniture is often worth keeping. Our free inspection tells you honestly whether repair or replacement makes more sense.` },
];

const RECLINER: FaqTemplate[] = [
  { intentGroup: "free_inspection", question: (n) => `Is the doorstep inspection free in ${n}?`, answer: (i) => `Yes, FurniRevive offers a completely free doorstep inspection for recliner repair in ${i.name}. Our technician visits your home, checks the recliner thoroughly (mechanism, footrest, motor and wiring if motorised, frame and cushions), and provides a detailed itemised quote — no obligation, no call-out fee. Work only begins after you approve the quote.` },
  { intentGroup: "service_areas", question: (n) => `Which areas near ${n} do you service?`, answer: (i) => `FurniRevive services ${i.name} and all surrounding areas in ${i.city}. We cover a 5–8 km radius from your location with no area surcharge. Adjacent sectors, neighbouring colonies, and nearby townships are all covered under the same price structure. Call 92179 99355 to confirm coverage for your address.` },
  { intentGroup: "pricing", question: (n) => `How much does recliner repair cost in ${n}?`, answer: (i) => `Recliner repair in ${i.name} starts at ₹1,499 for manual mechanism repair and ₹2,499 for motorised recliner motor repair. A free doorstep inspection gives you a fixed quote before any work begins.` },
  { intentGroup: "warranty", question: (n) => `Is there a warranty on recliner repair in ${n}?`, answer: (i) => `Yes. Recliner repairs in ${i.name} carry a 6-month written warranty on the mechanism, motor and parts replaced.` },
  { intentGroup: "response_time", question: (n) => `How quickly can a recliner technician reach ${n}?`, answer: (i) => `Our recliner technicians reach ${i.name} within ${i.responseTime}. Book before noon for same-day service or call 92179 99355.` },
  { intentGroup: "footrest", question: (n) => `My recliner footrest is stuck in ${n}. Can you fix it?`, answer: (i) => `Yes. A stuck footrest or jammed backrest in ${i.name} is usually a bent link, worn cable or seized pivot. We carry replacement parts and usually fix it in one visit.` },
  { intentGroup: "motorised", question: (n) => `Do you repair motorised and electric recliners in ${n}?`, answer: (i) => `Yes. We repair motors, control handsets, wiring and power supply faults on motorised recliners in ${i.name}, including USB charging ports.` },
  { intentGroup: "foam", question: (n) => `Can you replace recliner foam and upholstery in ${n}?`, answer: (i) => `Yes. Sagging seat foam, flat back cushions and torn fabric or leather on recliners in ${i.name} can be replaced at your home with high-density foam and matching material.` },
  { intentGroup: "same_day", question: (n) => `Do you offer same-day recliner repair in ${n}?`, answer: (i) => `Yes. FurniRevive offers same-day recliner repair in ${i.name} for bookings received before noon. Our technicians can reach your address within ${i.responseTime}. The technician arrives with replacement parts and tools, so most mechanism repairs finish in one visit. Call 92179 99355 to confirm availability for your slot.` },
  { intentGroup: "repair_vs_replace", question: (n) => `Is it worth repairing my recliner in ${n}?`, answer: (i) => `Almost always. A quality recliner can usually be restored in ${i.name} for a fraction of the price of a new one. The free inspection gives you a clear cost comparison first.` },
];

const UPHOLSTERY: FaqTemplate[] = [
  { intentGroup: "free_inspection", question: (n) => `Is the doorstep inspection free in ${n}?`, answer: (i) => `Yes, FurniRevive offers a completely free doorstep inspection for sofa upholstery in ${i.name}. Our upholstery craftsman visits your home, inspects the sofa thoroughly (fabric, foam, frame and stitching), shows you fabric swatches, and provides a detailed itemised quote — no obligation, no call-out fee. Work only begins after you approve the quote.` },
  { intentGroup: "service_areas", question: (n) => `Which areas near ${n} do you service?`, answer: (i) => `FurniRevive services ${i.name} and all surrounding areas in ${i.city}. We cover a 5–8 km radius from your location with no area surcharge. Adjacent sectors, neighbouring colonies, and nearby townships are all covered under the same price structure. Call 92179 99355 to confirm coverage for your address.` },
  { intentGroup: "pricing", question: (n) => `How much does sofa upholstery cost in ${n}?`, answer: (i) => `Upholstery in ${i.name} starts at ₹2,000 per seat, depending on fabric, foam condition and sofa size. A free inspection and written quote come before any work begins.` },
  { intentGroup: "fabric", question: (n) => `Which fabric is best for reupholstery in ${n}?`, answer: (i) => `For ${i.name} homes we suggest cotton blends or microfibre for everyday durability, velvet for a premium look and leatherette or leather for easy cleaning. We bring swatches to your home so you can choose.` },
  { intentGroup: "doorstep", question: (n) => `Can upholstery be done at home in ${n}?`, answer: (i) => `Yes. Our craftsmen measure, cut and fit new covers on site in ${i.name}, so there is no pickup and no workshop wait.` },
  { intentGroup: "duration", question: (n) => `How long does reupholstery take in ${n}?`, answer: (i) => `A standard sofa takes 4 to 8 hours and larger sets can take a day or two. We confirm the timeline in ${i.name} before starting.` },
  { intentGroup: "foam", question: (n) => `Can you replace only the fabric and keep the foam in ${n}?`, answer: (i) => `Yes. If the frame and foam in ${i.name} are in good condition we replace only the cover, which is the most economical option. We will tell you honestly if the foam needs replacing too.` },
  { intentGroup: "leather", question: (n) => `Do you reupholster leather and rexine sofas in ${n}?`, answer: (i) => `Yes. We replace worn leather, cracked rexine and peeling leatherette with fresh material in ${i.name}.` },
  { intentGroup: "same_day", question: (n) => `Do you offer same-day sofa upholstery in ${n}?`, answer: (i) => `Yes. FurniRevive offers same-day sofa upholstery in ${i.name} for bookings received before noon. Our technicians can reach your address within ${i.responseTime}. The craftsman arrives with fabric swatches and tools, and smaller jobs can be finished on the same visit. Call 92179 99355 to confirm availability for your slot.` },
  { intentGroup: "response_time", question: (n) => `How quickly can an upholstery technician reach ${n}?`, answer: (i) => `Our upholstery technicians reach ${i.name} within ${i.responseTime}. Book before noon for same-day service or call 92179 99355.` },
  { intentGroup: "repair_vs_replace", question: (n) => `Is re-upholstering a sofa in ${n} cheaper than buying a new one?`, answer: (i) => `Usually yes. Re-upholstering in ${i.name} typically costs a fraction of a new sofa, unless the frame itself is damaged. Our free inspection tells you honestly whether re-upholstering or replacing makes more sense.` },
  { intentGroup: "warranty", question: (n) => `Is there a warranty on upholstery work in ${n}?`, answer: (i) => `Yes. All upholstery in ${i.name} carries a written 6-month warranty on stitching, fitting and materials.` },
];

const CHAIR: FaqTemplate[] = [
  { intentGroup: "pricing", question: (n) => `How much does chair repair cost in ${n}?`, answer: (i) => `Chair repair in ${i.name} starts at ₹599 for a gas lift, caster or armrest fix. Bulk pricing is available for offices, with a free inspection and fixed quote first.` },
  { intentGroup: "warranty", question: (n) => `Is there a warranty on chair repair in ${n}?`, answer: (i) => `Yes. Chair repairs in ${i.name} carry a 6-month warranty on replaced parts and workmanship.` },
  { intentGroup: "response_time", question: (n) => `How quickly can a technician reach ${n}?`, answer: (i) => `Our technicians reach ${i.name} within ${i.responseTime}. Book before noon for same-day service or call 92179 99355.` },
  { intentGroup: "gas_lift", question: (n) => `My office chair keeps sinking in ${n}. Can you fix it?`, answer: (i) => `Yes. A sinking chair in ${i.name} usually needs a new gas lift cylinder, which we replace at your location, often in under an hour.` },
  { intentGroup: "parts", question: (n) => `Which chair parts can you replace in ${n}?`, answer: (i) => `In ${i.name} we replace gas lifts, wheels and casters, armrests, tilt mechanisms, seat foam and torn upholstery on office, dining, gaming and study chairs.` },
  { intentGroup: "commercial", question: (n) => `Do you service offices and bulk chair orders in ${n}?`, answer: (i) => `Yes. We handle office chair repair in ${i.name} with bulk pricing, GST invoices and annual maintenance plans available.` },
  { intentGroup: "repair_vs_replace", question: (n) => `Is repairing a chair in ${n} better than replacing it?`, answer: (i) => `Usually. Most chair faults in ${i.name} come from one worn part, so repair costs far less than a new chair. We tell you honestly if replacement makes sense.` },
];

const POOLS: Record<Exclude<FaqServiceCategory, "sofa">, FaqTemplate[]> = {
  furniture: FURNITURE,
  recliner: RECLINER,
  upholstery: UPHOLSTERY,
  chair: CHAIR,
  corporate: CHAIR,
};

/** Returns the service-specific FAQs for a locality, or null for sofa pages (use the main pool). */
export function getServiceFaqs(info: LocalityInfo, category: FaqServiceCategory, count: number): ServiceFaq[] | null {
  if (category === "sofa") return null;
  return POOLS[category].slice(0, count).map((t) => ({
    intentGroup: t.intentGroup,
    question: t.question(info.name),
    answer: t.answer(info),
  }));
}

/** Maps a programmatic-page service key to its FAQ pool. Unlisted sofa-type services use the main sofa pool. */
export function faqCategoryForService(serviceKey: string | null): FaqServiceCategory {
  switch (serviceKey) {
    case "recliner-repair": return "recliner";
    case "furniture-repair":
    case "furniture-polish": return "furniture";
    case "sofa-upholstery": return "upholstery";
    case "chair-repair": return "chair";
    default: return "sofa";
  }
}
