/**
 * Intent-Driven FAQ Engine for FurniRevive locality pages.
 *
 * 60 FAQs across 25 intent groups. Each FAQ has 3 answer variants.
 * selectFaqs() scores and picks 7 FAQs based on locality profile.
 *
 * GSC Integration — pass real Search Console impression data as gscBoosts.
 * Keys are intentGroup strings, values are multipliers (e.g. 1.5 = 50% priority boost).
 *
 * Example usage:
 *   selectFaqs(info, { gscBoosts: { "leather_repair": 1.8, "pricing": 1.3 } })
 *
 * When you have GSC data for a specific page slug, pass the boosts via
 * the page-specific config or SeoPageData to evolve content with real user searches.
 */

import type { LocalityInfo } from "./localities.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export type IntentGroup =
  | "pricing"
  | "free_inspection"
  | "warranty"
  | "same_day"
  | "response_time"
  | "foam_replacement"
  | "cushion_refilling"
  | "spring_repair"
  | "frame_repair"
  | "upholstery"
  | "leather_repair"
  | "fabric_repair"
  | "recliner_repair"
  | "sofa_cum_bed"
  | "wooden_repair"
  | "apartment_service"
  | "office_repair"
  | "commercial"
  | "booking_process"
  | "whatsapp_booking"
  | "service_areas"
  | "technician_visit"
  | "repair_vs_replace"
  | "furniture_care"
  | "after_service";

export type LocalityProfile = {
  isPremium: boolean;
  isOffice: boolean;
  isHighRise: boolean;
  isDDA: boolean;
  isFamilyResidential: boolean;
  hasLuxuryFurniture: boolean;
  cityKey: string;
  localityName: string;
  city: string;
  responseTime: string;
};

export type FaqEntry = {
  intentGroup: IntentGroup;
  question: (info: LocalityInfo) => string;
  /** 3 answer variants — must differ structurally, not just in vocabulary */
  answers: [string, string, string];
  /** Profile boolean keys that boost this FAQ, or "always" for universally relevant FAQs */
  signals: Array<keyof Pick<LocalityProfile, "isPremium" | "isOffice" | "isHighRise" | "isDDA" | "isFamilyResidential" | "hasLuxuryFurniture">> | "always";
  /** Base score multiplier — higher = more likely to be selected (default 1) */
  baseScore?: number;
};

export type SelectedFaq = {
  intentGroup: IntentGroup;
  question: string;
  answer: string;
};

// ─── Profile builder ──────────────────────────────────────────────────────────

export function buildProfile(info: LocalityInfo): LocalityProfile {
  const n = info.name.toLowerCase();
  const p = info.propertyType.toLowerCase();
  const landmarks = info.landmarks.map((l) => l.toLowerCase()).join(" ");

  const isPremium =
    p.includes("premium") ||
    p.includes("luxury") ||
    p.includes("villa") ||
    p.includes("penthouse") ||
    n.includes("dlf") ||
    n.includes("golf course") ||
    n.includes("nirvana") ||
    n.includes("jaypee") ||
    n.includes("vasant vihar") ||
    n.includes("greater kailash") ||
    n.includes("vasant kunj");

  const isOffice =
    n.includes("sector 62") ||
    n.includes("sector 63") ||
    n.includes("sector 58") ||
    n.includes("cyber city") ||
    n.includes("udyog vihar") ||
    n.includes("tech park") ||
    landmarks.includes("tech park") ||
    landmarks.includes("cyber hub") ||
    landmarks.includes("cyber city") ||
    p.includes("corporate") ||
    p.includes("commercial hub");

  const isHighRise =
    p.includes("high-rise") ||
    p.includes("high rise") ||
    p.includes("gated") ||
    p.includes("tower") ||
    p.includes("apartment") ||
    p.includes("society") ||
    p.includes("societies");

  const isDDA =
    p.includes("dda") ||
    p.includes("flats") ||
    n.includes("rohini") ||
    n.includes("dwarka") ||
    n.includes("pitampura") ||
    n.includes("shalimar bagh") ||
    n.includes("janakpuri");

  const isFamilyResidential =
    isDDA ||
    n.includes("rohini") ||
    n.includes("pitampura") ||
    n.includes("indirapuram") ||
    n.includes("vaishali") ||
    n.includes("kaushambi") ||
    n.includes("vasundhara") ||
    n.includes("raj nagar") ||
    n.includes("crossing republik") ||
    n.includes("mayur vihar") ||
    n.includes("preet vihar") ||
    p.includes("residential colony") ||
    p.includes("independent houses");

  const hasLuxuryFurniture =
    isPremium &&
    (p.includes("luxury") ||
      p.includes("villa") ||
      p.includes("penthouse") ||
      n.includes("dlf phase 5") ||
      n.includes("dlf phase 4") ||
      n.includes("jaypee") ||
      n.includes("vasant vihar"));

  return {
    isPremium,
    isOffice,
    isHighRise,
    isDDA,
    isFamilyResidential,
    hasLuxuryFurniture,
    cityKey: info.cityKey,
    localityName: info.name,
    city: info.city,
    responseTime: info.responseTime,
  };
}

// ─── Deterministic hash (matches LocalityNearMeSection) ──────────────────────

function slugHash(slug: string): number {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) & 0xff;
  return h;
}

// ─── FAQ Pool ─────────────────────────────────────────────────────────────────

export const FAQ_POOL: FaqEntry[] = [
  // ── PRICING (3) ────────────────────────────────────────────────────────────
  {
    intentGroup: "pricing",
    baseScore: 2,
    signals: "always",
    question: (i) => `How much does sofa repair cost in ${i.name}?`,
    answers: [
      `Sofa repair cost in ${(info => info.name)({ ...({} as LocalityInfo) })} starts at ₹999 for basic cushion work. Foam replacement is ₹999–₹2,500 per seat, fabric re-upholstery from ₹3,000, leather sofa repair from ₹1,500, and full set restoration from ₹8,000. FurniRevive provides a free doorstep inspection before any work begins — no obligation, no hidden charges.`,
      `Prices for sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} vary by damage type. Cushion foam replacement starts at ₹999, sofa spring repair at ₹2,000, frame repair at ₹1,500, and leather crack restoration at ₹1,500. All quotes are fixed-price with zero surprise fees after the free inspection.`,
      `FurniRevive's sofa repair rates in ${(info => info.name)({ ...({} as LocalityInfo) })} begin at ₹999. A 3-seater fabric upholstery costs ₹6,000–₹12,000 and full leatherette replacement ₹9,000–₹18,000. Call 92179 99355 for an exact quote — the doorstep inspection is always free.`,
    ],
  },
  {
    intentGroup: "pricing",
    baseScore: 2,
    signals: "always",
    question: (i) => `What is the sofa repair price range for a 3+1+1 set in ${i.name}?`,
    answers: [
      `A complete 3+1+1 sofa set restoration in ${(info => info.name)({ ...({} as LocalityInfo) })} costs ₹14,000–₹22,000 depending on fabric choice. This includes new foam across all seats, full fabric re-upholstery, spring retensioning, and frame reinforcement — all at your doorstep. The inspection and quote are free with no commitment required.`,
      `For a 3+1+1 sofa set in ${(info => info.name)({ ...({} as LocalityInfo) })}, full restoration typically runs ₹12,000–₹20,000 — far below the ₹40,000–₹90,000 cost of a comparable new set. We replace foam, re-upholster with 500+ fabric choices, and repair springs and frame in one visit. Book a free inspection to get an exact price.`,
      `Restoring a 3+1+1 sofa set in ${(info => info.name)({ ...({} as LocalityInfo) })} with FurniRevive usually costs ₹13,000–₹22,000 for standard fabric. Premium or velvet options add ₹2,000–₹4,000. We save you 60–70% compared to buying new furniture, and every job includes a 6-month written warranty.`,
    ],
  },
  {
    intentGroup: "pricing",
    baseScore: 1.8,
    signals: "always",
    question: (i) => `Is sofa repair in ${i.name} cheaper than buying a new sofa?`,
    answers: [
      `Yes — sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} costs 60–70% less than buying a comparable new set. A full restoration including foam, fabric, springs, and frame costs ₹13,000–₹22,000 versus ₹40,000–₹90,000 for a new 3+1+1. You also avoid delivery hassles, disposal fees, and break-in time with a new piece.`,
      `In most cases, repair is significantly cheaper than replacement in ${(info => info.name)({ ...({} as LocalityInfo) })}. Custom sofas and high-quality imported frames are especially worth repairing — the frame and spring structure can last decades with new foam and fabric. FurniRevive's prices start at ₹999, and our free inspection gives you a clear cost comparison before you decide.`,
      `Repairing your sofa in ${(info => info.name)({ ...({} as LocalityInfo) })} is almost always the better financial choice. Our technicians assess the frame condition honestly during the free inspection — if the frame is beyond repair, we'll tell you. Otherwise, a full restoration at ₹13,000–₹22,000 saves you ₹20,000–₹70,000 over a new purchase.`,
    ],
  },

  // ── FREE_INSPECTION (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "free_inspection",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Is the doorstep inspection free in ${i.name}?`,
    answers: [
      `Yes, FurniRevive offers a completely free doorstep inspection in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our technician visits your home, diagnoses the sofa thoroughly, and provides a detailed itemised quote — no obligation, no call-out fee. Repair work only begins after you approve the quote.`,
      `Our inspection in ${(info => info.name)({ ...({} as LocalityInfo) })} is 100% free with zero commitment. A trained technician arrives at your address, examines the foam, springs, frame, fabric, and mechanism (for recliners), then presents a transparent fixed-price quote. You decide whether to proceed — there is no pressure.`,
      `FurniRevive's doorstep assessment in ${(info => info.name)({ ...({} as LocalityInfo) })} costs nothing. We check every component — from hidden frame cracks to spring tension — and give you a written quote on the spot. If you choose not to repair, you pay nothing. Call 92179 99355 or WhatsApp to schedule your free inspection.`,
    ],
  },
  {
    intentGroup: "free_inspection",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `How do I book a free sofa inspection near me in ${i.name}?`,
    answers: [
      `To book a free sofa inspection in ${(info => info.name)({ ...({} as LocalityInfo) })}, call 92179 99355 or WhatsApp us at +91 92179 99355 with your address and sofa issue. We'll confirm a slot — usually the same day or next morning. Our technician arrives fully equipped to inspect and, if you agree to the quote, complete the repair on the same visit.`,
      `Booking a free inspection in ${(info => info.name)({ ...({} as LocalityInfo) })} takes two minutes. WhatsApp a photo of your sofa to +91 92179 99355, tell us your approximate location in ${(info => info.name)({ ...({} as LocalityInfo) })}, and we'll confirm a time slot within the hour. Most inspections in ${(info => info.name)({ ...({} as LocalityInfo) })} are done the same day.`,
      `You can schedule a free doorstep inspection in ${(info => info.name)({ ...({} as LocalityInfo) })} by calling or WhatsApp-ing FurniRevive at 92179 99355. Mention your society/building name and the type of sofa issue — the technician comes prepared with tools and materials to quote accurately and often complete the repair in the same visit.`,
    ],
  },

  // ── WARRANTY (2) ──────────────────────────────────────────────────────────
  {
    intentGroup: "warranty",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Is there a warranty on sofa repair in ${i.name}?`,
    answers: [
      `Every sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive comes with a 6-month written warranty. This covers foam compression, fabric stitching, spring tension, frame joints, and recliner mechanisms. If the same problem recurs within the warranty period, we return and fix it at zero cost.`,
      `Yes — FurniRevive provides a 6-month warranty on all sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })}. The warranty is written and covers the specific work done: whether foam replacement, re-upholstery, spring repair, or frame tightening. Our warranty gives you full peace of mind with no follow-up cost if a covered issue reappears.`,
      `All repairs completed in ${(info => info.name)({ ...({} as LocalityInfo) })} are backed by a 6-month written warranty. It applies to every job — from a single cushion foam replacement to a full 5-seater restoration. Contact us within the warranty period for any covered issue and our technician returns for free.`,
    ],
  },
  {
    intentGroup: "warranty",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `What does the sofa repair warranty cover in ${i.name}?`,
    answers: [
      `The 6-month warranty on sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })} covers workmanship and materials: foam compression, fabric stitching failures, spring retensioning, frame joint separation, and recliner mechanism issues. It does not cover new accidental damage or pet scratches caused after the repair.`,
      `FurniRevive's warranty for repairs in ${(info => info.name)({ ...({} as LocalityInfo) })} covers all repaired components for 6 months — including foam, springs, frame, upholstery stitching, and leather patches. If any repaired part develops the same issue within the warranty window, we fix it for free on a return visit.`,
      `Our 6-month warranty in ${(info => info.name)({ ...({} as LocalityInfo) })} covers every part we touched: cushion foam, spring webbing, fabric or leather, and structural frame repairs. Cosmetic damage from new accidents is excluded, but any failure in our workmanship or materials is fully covered at no additional charge.`,
    ],
  },

  // ── SAME_DAY (3) ──────────────────────────────────────────────────────────
  {
    intentGroup: "same_day",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Do you offer same-day sofa repair in ${i.name}?`,
    answers: [
      `Yes — FurniRevive offers same-day sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} for bookings received before noon. Our technicians are stationed across ${(info => info.city)({ ...({} as LocalityInfo) })} and can reach your address within ${(info => info.responseTime)({ ...({} as LocalityInfo) })}. Call 92179 99355 to confirm availability for your slot.`,
      `Same-day doorstep sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is available when you book early in the day. WhatsApp us photos of the damage at +91 92179 99355 and we'll confirm a same-day slot. For urgent jobs, calling directly is faster than the online form.`,
      `FurniRevive provides same-day sofa repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} subject to technician availability. Pre-noon bookings are almost always accommodated on the same day. The technician arrives with foam, fabric, springs, and tools — so the repair is completed in one visit, typically in 2–4 hours.`,
    ],
  },
  {
    intentGroup: "same_day",
    baseScore: 1.3,
    signals: "always",
    question: (i) => `How quickly can I get sofa repair at my home in ${i.name}?`,
    answers: [
      `You can get sofa repair at your home in ${(info => info.name)({ ...({} as LocalityInfo) })} as quickly as the same day for pre-noon bookings. Our nearest technician reaches your address within ${(info => info.responseTime)({ ...({} as LocalityInfo) })} and carries everything needed for most repairs in a single visit.`,
      `Most homeowners in ${(info => info.name)({ ...({} as LocalityInfo) })} get a technician at their door within ${(info => info.responseTime)({ ...({} as LocalityInfo) })} of booking. Same-day slots are available most days — WhatsApp +91 92179 99355 with your sofa issue and address to confirm the earliest slot.`,
      `Home sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is available the same day when you book before noon. Our technician arrives in ${(info => info.responseTime)({ ...({} as LocalityInfo) })}, inspects for free, presents a fixed quote, and completes the repair immediately upon your approval — no second visit needed for most jobs.`,
    ],
  },
  {
    intentGroup: "same_day",
    baseScore: 1.2,
    signals: ["isHighRise", "isOffice"],
    question: (i) => `Can you do urgent same-day sofa repair for my apartment in ${i.name}?`,
    answers: [
      `Yes — urgent same-day sofa repair is available for apartments in ${(info => info.name)({ ...({} as LocalityInfo) })}. Call 92179 99355 directly for urgent slots. Our technician navigates building access procedures and brings all equipment in a compact kit that fits in the lift — no disruption to neighbours or building rules.`,
      `FurniRevive handles urgent apartment sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })} same-day when booked before noon. We're familiar with society gate procedures and carry identification for entry. The repair is done entirely inside your flat — no need to move the sofa out.`,
      `For urgent apartment sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, call 92179 99355 rather than using the online form — our team can often fit in late bookings for high-rise residents. We bring everything needed and complete the work in your living room, usually in 2–4 hours.`,
    ],
  },

  // ── RESPONSE_TIME (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "response_time",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `How long does a sofa technician take to reach ${i.name}?`,
    answers: [
      `A FurniRevive sofa technician typically reaches ${(info => info.name)({ ...({} as LocalityInfo) })} within ${(info => info.responseTime)({ ...({} as LocalityInfo) })} of booking. Our technicians are based across ${(info => info.city)({ ...({} as LocalityInfo) })} so we avoid long cross-city travel times. Call 92179 99355 to check exact availability for your area.`,
      `Our nearest sofa technician reaches your address in ${(info => info.name)({ ...({} as LocalityInfo) })} within ${(info => info.responseTime)({ ...({} as LocalityInfo) })} in most cases. For early-morning bookings, the technician often arrives within 1–2 hours. WhatsApp +91 92179 99355 with your pincode or society name for the most accurate estimate.`,
      `FurniRevive stations technicians across ${(info => info.city)({ ...({} as LocalityInfo) })} to keep response times short. For ${(info => info.name)({ ...({} as LocalityInfo) })}, the typical door-to-door time is ${(info => info.responseTime)({ ...({} as LocalityInfo) })}. We'll confirm the exact window when you book.`,
    ],
  },
  {
    intentGroup: "response_time",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `Is there a sofa repair technician near me in ${i.name}?`,
    answers: [
      `Yes — FurniRevive has sofa repair technicians serving ${(info => info.name)({ ...({} as LocalityInfo) })} and nearby areas. Our local technicians are stationed within ${(info => info.city)({ ...({} as LocalityInfo) })} and can reach your address in ${(info => info.responseTime)({ ...({} as LocalityInfo) })}. No need to transport your sofa to a workshop — we come to you.`,
      `FurniRevive's sofa technicians cover ${(info => info.name)({ ...({} as LocalityInfo) })} as part of our ${(info => info.city)({ ...({} as LocalityInfo) })} service network. You'll get a trained craftsman at your door in ${(info => info.responseTime)({ ...({} as LocalityInfo) })} — fully equipped with foam grades, fabric samples, spring stock, and repair tools.`,
      `Our sofa repair technicians are local to ${(info => info.city)({ ...({} as LocalityInfo) })} and regularly serve ${(info => info.name)({ ...({} as LocalityInfo) })}. A technician near you is available most days and can reach your address within ${(info => info.responseTime)({ ...({} as LocalityInfo) })} of booking. Call 92179 99355 to confirm the nearest available slot.`,
    ],
  },

  // ── FOAM_REPLACEMENT (3) ──────────────────────────────────────────────────
  {
    intentGroup: "foam_replacement",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Do you do foam replacement for sofas near me in ${i.name}?`,
    answers: [
      `Yes — foam replacement is one of FurniRevive's most common services in ${(info => info.name)({ ...({} as LocalityInfo) })}. We stock 32D and 40D high-resilience foam and replace compressed or sagging foam on-site. Cushion foam replacement starts at ₹999 per seat and is completed in 1–2 hours at your home.`,
      `FurniRevive provides doorstep foam replacement in ${(info => info.name)({ ...({} as LocalityInfo) })} using high-density foam sourced from certified suppliers. We match the exact density to your sofa's original spec — 32D for standard use, 36D for households with children or pets, and 40D heavy-duty for recliners. No workshop visit required.`,
      `Foam replacement near me in ${(info => info.name)({ ...({} as LocalityInfo) })} is available from FurniRevive at ₹999 per seat and up. Our technician strips the old compressed foam, measures and cuts fresh foam to shape, and re-fits it in the original cover. The job is done at your home in under 2 hours for most sofas.`,
    ],
  },
  {
    intentGroup: "foam_replacement",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `What foam density do you use for sofa repairs in ${i.name}?`,
    answers: [
      `FurniRevive uses 32D foam for light to moderate use, 36D for homes with children and pets, and 40D high-density foam for recliners and heavily used sofas in ${(info => info.name)({ ...({} as LocalityInfo) })}. We never use recycled or substandard foam — all foam is sourced from certified manufacturers. The right density is selected after inspecting your sofa and lifestyle.`,
      `We carry three foam grades for sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })}: standard (32D), comfort-plus (36D for kids and pets), and heavy-duty (40D for daily-use recliners and premium sofas). Our technician will recommend the correct grade during the free inspection based on the original sofa construction.`,
      `For sofa foam replacement in ${(info => info.name)({ ...({} as LocalityInfo) })}, FurniRevive uses genuine high-density foam in 32D, 36D, and 40D grades. We do not use scrap or recycled foam under any circumstance. The density selection is matched to usage patterns — families with young children typically benefit from 36D for durability and resilience.`,
    ],
  },
  {
    intentGroup: "foam_replacement",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `My sofa cushions are flat after years of use in ${i.name}. Can you refill them?`,
    answers: [
      `Yes — flat sofa cushions are a very common problem in ${(info => info.name)({ ...({} as LocalityInfo) })} and one FurniRevive handles daily. We open the cushion cover, remove the compressed old foam, cut and fit new high-density foam to the original dimensions, and re-close the cover. The cushion returns to its original height and firmness.`,
      `Flat cushions in ${(info => info.name)({ ...({} as LocalityInfo) })} are typically caused by foam losing its cell structure after 4–7 years. FurniRevive replaces the foam on-site — no need to send cushions to a workshop. The job takes about 30–45 minutes per cushion and costs ₹999–₹2,500 depending on size and foam grade.`,
      `FurniRevive can restore your flat sofa cushions in ${(info => info.name)({ ...({} as LocalityInfo) })} same day. Our technician arrives with foam in multiple grades, cuts it to size at your home, and re-fits it inside the original cover. If the cover fabric is also worn, we can replace it in the same visit — all done without moving the sofa.`,
    ],
  },

  // ── CUSHION_REFILLING (2) ─────────────────────────────────────────────────
  {
    intentGroup: "cushion_refilling",
    baseScore: 0.9,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you refill sofa cushions at home in ${i.name}?`,
    answers: [
      `FurniRevive refills sofa cushions at your home in ${(info => info.name)({ ...({} as LocalityInfo) })} — no need to remove or transport your sofa. Our technician unzips or carefully opens each cushion cover, replaces the compressed foam with fresh high-density foam, and seals it neatly. The process takes about 30–60 minutes per cushion and starts at ₹999.`,
      `Yes — all sofa cushion refilling work in ${(info => info.name)({ ...({} as LocalityInfo) })} is done at your doorstep. We carry multiple foam densities (32D, 36D, 40D) and cut the foam to exact size on-site. Most cushion refilling jobs in ${(info => info.name)({ ...({} as LocalityInfo) })} are completed within 1–2 hours at a cost of ₹999–₹2,500 per seat.`,
      `Sofa cushion refilling at home in ${(info => info.name)({ ...({} as LocalityInfo) })} is a core FurniRevive service. We replace worn foam inside your existing cushion covers — keeping your sofa's look while restoring full comfort. Prices start at ₹999 per seat with a free inspection to assess the right foam density for your household.`,
    ],
  },
  {
    intentGroup: "cushion_refilling",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `How long does cushion foam replacement take in ${i.name}?`,
    answers: [
      `Cushion foam replacement in ${(info => info.name)({ ...({} as LocalityInfo) })} typically takes 30–45 minutes per cushion. A standard 3-seater sofa with 3 seat and 3 back cushions is usually done in 2–3 hours. The technician works inside your living room — there's no need to vacate or move the sofa.`,
      `For a single-seat replacement in ${(info => info.name)({ ...({} as LocalityInfo) })}, expect around 30–45 minutes. A complete 5-seater foam refill (all seats and backs) takes 3–4 hours. FurniRevive's technician works cleanly and quietly — no dust, loud tools, or disruption to the rest of your home.`,
      `Most foam refilling jobs in ${(info => info.name)({ ...({} as LocalityInfo) })} are completed in a single 2–4 hour visit. Individual cushion work is faster — about 30 minutes each. Our technician brings pre-measured foam blocks and cuts to fit on-site, so there's no wait for a custom order.`,
    ],
  },

  // ── SPRING_REPAIR (3) ─────────────────────────────────────────────────────
  {
    intentGroup: "spring_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you repair broken sofa springs in ${i.name}?`,
    answers: [
      `Yes — sofa spring repair is a speciality at FurniRevive and one of the top requests in ${(info => info.name)({ ...({} as LocalityInfo) })}. We replace broken sinuous springs, re-tension sagging spring webbing, and reinforce spring clips and corner brackets — all at your doorstep. Spring repair typically costs ₹2,000–₹5,000 depending on the number of broken springs.`,
      `FurniRevive repairs broken and sagging sofa springs at your home in ${(info => info.name)({ ...({} as LocalityInfo) })}. Whether the springs have snapped, lost tension, or become noisy, our technician diagnoses the type of spring system (sinuous, coil, or webbing) and repairs or replaces only what's damaged. Most spring repairs are done in 1–3 hours.`,
      `Sofa spring repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive covers all spring types: sinuous (zigzag) springs, coil springs, and elastic webbing. We retension or replace broken units, reinforce the base frame, and test the seating before completing the job. Call 92179 99355 to book a same-day spring repair.`,
    ],
  },
  {
    intentGroup: "spring_repair",
    baseScore: 0.9,
    signals: ["isDDA", "isFamilyResidential"],
    question: (i) => `My sofa makes a noise when I sit on it in ${i.name}. Is it the springs?`,
    answers: [
      `A creaking or squeaking sofa in ${(info => info.name)({ ...({} as LocalityInfo) })} is usually caused by loose spring clips, worn webbing, or a cracked frame joint. FurniRevive's technician performs a free doorstep diagnosis in ${(info => info.name)({ ...({} as LocalityInfo) })} — we identify the exact source and fix it on the same visit. Spring and frame repairs start at ₹2,000.`,
      `Noise from a sofa in ${(info => info.name)({ ...({} as LocalityInfo) })} typically points to spring movement or a loose frame joint. Our technician can identify the issue in minutes during the free inspection — and in most cases, fix it the same day. We stock replacement spring clips, webbing, and corner brackets for on-site repairs.`,
      `If your sofa is noisy when you sit in ${(info => info.name)({ ...({} as LocalityInfo) })}, it's likely a spring or frame issue. FurniRevive diagnoses this during the free inspection — no charge to identify the problem. Spring retensioning or clip replacement starts at ₹2,000 and is usually done in under 2 hours.`,
    ],
  },
  {
    intentGroup: "spring_repair",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `How much does sofa spring repair cost in ${i.name}?`,
    answers: [
      `Sofa spring repair in ${(info => info.name)({ ...({} as LocalityInfo) })} costs ₹2,000–₹5,000 depending on the spring type and how many need replacement. Sinuous spring replacement is ₹2,000–₹3,500, while full spring base rebuilds run ₹4,000–₹7,000. The free inspection gives you an exact fixed price before work starts.`,
      `Spring repair costs in ${(info => info.name)({ ...({} as LocalityInfo) })} vary by damage extent. Retensioning existing springs costs ₹2,000–₹3,000; replacing broken sinuous springs runs ₹2,500–₹4,000; a full spring system rebuild costs ₹5,000–₹8,000. All prices include labour, parts, and the 6-month warranty.`,
      `FurniRevive charges ₹2,000–₹7,000 for sofa spring repair in ${(info => info.name)({ ...({} as LocalityInfo) })} depending on the number of broken or worn springs and the repair method. The doorstep inspection is free and the price quote is binding — you'll never pay more than agreed.`,
    ],
  },

  // ── FRAME_REPAIR (2) ──────────────────────────────────────────────────────
  {
    intentGroup: "frame_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isHighRise"],
    question: (i) => `Can you fix a wobbly or broken sofa frame in ${i.name}?`,
    answers: [
      `Yes — FurniRevive performs sofa frame repair in ${(info => info.name)({ ...({} as LocalityInfo) })} at your doorstep. We tighten loose joints, replace cracked wooden slats, re-glue corner blocks, and reinforce the base structure. Frame repairs start at ₹1,500 and are usually completed in 1–3 hours in your living room.`,
      `Wobbly sofa frames in ${(info => info.name)({ ...({} as LocalityInfo) })} are typically caused by loose corner joints or cracked base slats. FurniRevive's technician sands, reglues, and re-bolts joints as needed, and adds bracket reinforcements to prevent repeat failure. The job is done at your home — no need to send the sofa to a workshop.`,
      `Sofa frame repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive covers joint tightening, slat replacement, corner bracket fitting, and base reinforcement. A wobbly sofa becomes stable and safe again in one visit. Prices start at ₹1,500 with the free inspection confirming exact repair scope.`,
    ],
  },
  {
    intentGroup: "frame_repair",
    baseScore: 0.8,
    signals: ["isDDA", "isFamilyResidential"],
    question: (i) => `How long does a sofa frame repair take in ${i.name}?`,
    answers: [
      `A typical sofa frame repair in ${(info => info.name)({ ...({} as LocalityInfo) })} takes 1–3 hours depending on the damage. Loose joint tightening is the quickest — under an hour. Replacing broken slats and adding corner brackets takes 2–3 hours. Complex frame rebuilds may need two visits if custom parts are required.`,
      `Most frame repairs in ${(info => info.name)({ ...({} as LocalityInfo) })} are completed in a single 2–3 hour visit. Our technicians carry standard slat stock and bracket hardware for on-site repairs without special orders. If a non-standard part is needed, we source it and return within 48 hours.`,
      `FurniRevive completes straightforward sofa frame repair in ${(info => info.name)({ ...({} as LocalityInfo) })} in 1–2 hours. More complex structural rebuilds — where multiple joints are compromised — take 3–4 hours. All work is done at your home with no disruption to the sofa fabric or upholstery unless you request it.`,
    ],
  },

  // ── UPHOLSTERY (3) ────────────────────────────────────────────────────────
  {
    intentGroup: "upholstery",
    baseScore: 1,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `Do you offer full sofa upholstery replacement in ${i.name}?`,
    answers: [
      `Yes — FurniRevive provides complete sofa upholstery replacement in ${(info => info.name)({ ...({} as LocalityInfo) })} at your doorstep. We carry 500+ fabric swatches including velvet, chenille, linen, leatherette, and rexine. The old cover is removed, new foam is fitted if needed, and fresh fabric is applied — all in one visit. Full upholstery for a 3-seater starts at ₹6,000.`,
      `Full upholstery replacement in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive transforms an old sofa completely. Our technician brings fabric samples to your home, you choose from 500+ options, and the work is done on-site. Prices start at ₹6,000 for a 3-seater and ₹14,000 for a full 3+1+1 set including foam.`,
      `FurniRevive's upholstery service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers full fabric replacement, partial re-covering, and arm/back panel replacement. We do the work at your home — no transport, no wait. Upholstery fabric options include standard, premium, and designer grades with prices quoted after the free inspection.`,
    ],
  },
  {
    intentGroup: "upholstery",
    baseScore: 1.2,
    signals: ["hasLuxuryFurniture", "isPremium"],
    question: (i) => `Can you reupholster imported or designer sofas in ${i.name}?`,
    answers: [
      `Yes — FurniRevive has experience with imported Italian, Turkish, and European sofas in ${(info => info.name)({ ...({} as LocalityInfo) })}. We work with premium fabrics and leatherettes that match original finishes, and our senior technicians handle complex frame shapes and tufting patterns carefully. Contact us with photos of your sofa for a specialist assessment.`,
      `Imported and designer sofa reupholstery in ${(info => info.name)({ ...({} as LocalityInfo) })} is handled by FurniRevive's senior craftsmen. We inspect the frame construction, identify the original fabric type, and source a matching or upgraded replacement. Our team has restored high-end sofas from brands like Natuzzi, Ashley, and custom Italian pieces.`,
      `FurniRevive reupholsters premium and imported sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} with care. We carry high-grade Italian-style fabrics, genuine leather, and premium leatherettes. For rare or complex designs, we request photos in advance to ensure we bring the right materials for a single-visit restoration.`,
    ],
  },
  {
    intentGroup: "upholstery",
    baseScore: 0.8,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `How much does sofa upholstery cost in ${i.name}?`,
    answers: [
      `Sofa upholstery cost in ${(info => info.name)({ ...({} as LocalityInfo) })} starts at ₹3,000 for a single-seater and ₹6,000 for a 3-seater in standard fabric. Full 3+1+1 set reupholstery costs ₹14,000–₹22,000 with new foam included. Premium and velvet fabrics add ₹2,000–₹5,000. The free inspection confirms the final price before work begins.`,
      `Re-upholstery prices in ${(info => info.name)({ ...({} as LocalityInfo) })} depend on fabric choice and sofa size. Standard fabric upholstery: ₹6,000–₹12,000 for a 3-seater. Velvet or chenille: ₹9,000–₹16,000. Leatherette: ₹8,000–₹14,000. All prices include labour, foam if needed, and a 6-month warranty.`,
      `The cost of sofa upholstery in ${(info => info.name)({ ...({} as LocalityInfo) })} ranges from ₹3,000 for partial jobs to ₹22,000 for a complete 5-seater set restoration. FurniRevive brings over 500 fabric samples to your home — you choose the grade and colour, and we quote a fixed price on the spot. No hidden charges.`,
    ],
  },

  // ── LEATHER_REPAIR (3) ────────────────────────────────────────────────────
  {
    intentGroup: "leather_repair",
    baseScore: 1,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `Do you repair leather sofas near me in ${i.name}?`,
    answers: [
      `Yes — FurniRevive provides leather sofa repair near me in ${(info => info.name)({ ...({} as LocalityInfo) })} including crack filling, colour restoration, deep conditioning, and panel replacement. We work with genuine leather, semi-aniline leather, and PU/leatherette. Prices start at ₹1,500 for minor crack repair and ₹4,000 for full colour restoration.`,
      `Leather sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is available at your doorstep from FurniRevive. Whether it's peeling leatherette, cracked genuine leather, faded colour, or deep scratches, our craftsmen restore the surface on-site. Leather repair starts at ₹1,500 with a free inspection to assess the exact damage.`,
      `FurniRevive's leather sofa repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers crack sealing, leather bonding, colour-matched dye application, and panel reupholstery. We distinguish between genuine leather, semi-aniline, and PU leatherette to apply the right restoration technique. Call 92179 99355 to book a free leather assessment.`,
    ],
  },
  {
    intentGroup: "leather_repair",
    baseScore: 1.2,
    signals: ["hasLuxuryFurniture"],
    question: (i) => `My leather sofa is peeling badly in ${i.name}. Can it be restored?`,
    answers: [
      `Peeling leather or leatherette is very common in ${(info => info.name)({ ...({} as LocalityInfo) })} due to humidity and UV exposure. If it is genuine leather, FurniRevive applies a colour-matched leather conditioner and filler to stop peeling and restore the surface. If it's PU leatherette, full panel reupholstery is the most durable solution. We assess the exact type during the free inspection.`,
      `Severely peeling leather sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} can be restored through reupholstery — replacing the outer cover with fresh leatherette or genuine leather while keeping the original frame and foam. This typically costs ₹8,000–₹18,000 for a 3-seater and is much cheaper than buying a new sofa. WhatsApp us photos for a quick estimate.`,
      `FurniRevive can restore peeling sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} through leather bonding (for minor peeling) or full panel replacement (for widespread peeling). We carry colour-matched leather dyes and premium-grade leatherette in 50+ shades. Send us photos via WhatsApp +91 92179 99355 and our technician will advise the best restoration option.`,
    ],
  },
  {
    intentGroup: "leather_repair",
    baseScore: 0.9,
    signals: ["isPremium"],
    question: (i) => `Do you offer leather sofa colour restoration in ${i.name}?`,
    answers: [
      `Yes — FurniRevive offers leather colour restoration in ${(info => info.name)({ ...({} as LocalityInfo) })}. We use professional-grade leather dyes that are colour-matched to your sofa and applied in multiple coats for a durable, natural finish. Colour restoration starts at ₹2,500 and can dramatically improve a faded or sun-damaged leather sofa.`,
      `Leather colour restoration in ${(info => info.name)({ ...({} as LocalityInfo) })} is available from FurniRevive for genuine leather and semi-aniline sofas. We clean the surface, apply a colour filler to cracks, then build up colour with flexible leather dyes in 2–3 coats. The result is a refreshed finish that's close to the original showroom look.`,
      `FurniRevive's leather restoration service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers fading, discolouration, and uneven tones caused by sunlight and cleaning. We carry over 40 standard leather dye shades and can mix custom colours. Prices start at ₹2,500 with a free inspection to confirm the leather type and condition.`,
    ],
  },

  // ── FABRIC_REPAIR (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "fabric_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you repair torn or damaged sofa fabric in ${i.name}?`,
    answers: [
      `Yes — torn and worn fabric sofas are among the most common repairs FurniRevive handles in ${(info => info.name)({ ...({} as LocalityInfo) })}. We do colour-matched fabric patching for small tears and full re-upholstery for widespread damage. Fabric repair starts at ₹1,000 for minor stitching and ₹3,000 for partial panel replacement.`,
      `FurniRevive repairs torn sofa fabric in ${(info => info.name)({ ...({} as LocalityInfo) })} using colour-matched patches for localised damage or full fabric replacement for extensive wear. We carry chenille, linen, velvet, and other common sofa fabric types. The technician assesses the damage during the free inspection and suggests the most cost-effective fix.`,
      `Torn sofa fabric in ${(info => info.name)({ ...({} as LocalityInfo) })} can be fixed through professional stitching, patch application, or full panel re-upholstery depending on damage extent. FurniRevive handles all three — prices start at ₹1,000 for a small tear repair and go up to ₹12,000 for a 3-seater full fabric replacement.`,
    ],
  },
  {
    intentGroup: "fabric_repair",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `Can you repair pet-damaged sofa fabric in ${i.name}?`,
    answers: [
      `Yes — pet damage is one of the most common sofa repair requests in ${(info => info.name)({ ...({} as LocalityInfo) })}. FurniRevive repairs claw marks, scratch damage, and chewed fabric using colour-matched patches or full re-upholstery. We also offer pet-resistant fabric upgrades (tightly woven chenille or microfibre) that resist future claw damage.`,
      `FurniRevive specialises in pet-damaged sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })}. Claw tear repairs start at ₹1,500 for patching and ₹4,000 for panel replacement. We carry pet-friendly fabric options — including stain-resistant and claw-resistant weaves — so you can prevent the same damage from recurring.`,
      `Pet claw damage and scratches on sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} are easily repaired by FurniRevive. For light scratches, we blend in colour-matched dye or fabric filler. For torn panels, we replace just the damaged section — keeping costs low. We also recommend durable replacement fabrics that withstand claw contact better than standard weaves.`,
    ],
  },

  // ── RECLINER_REPAIR (3) ───────────────────────────────────────────────────
  {
    intentGroup: "recliner_repair",
    baseScore: 1,
    signals: ["isPremium", "isOffice", "isHighRise"],
    question: (i) => `Do you repair recliners near me in ${i.name}?`,
    answers: [
      `Yes — recliner repair near me in ${(info => info.name)({ ...({} as LocalityInfo) })} is available from FurniRevive at your doorstep. We service manual recliners (handle/spring mechanism), motorised recliners (motor and remote), and massage recliners (motor, heat element, and remote). Recliner mechanism repair starts at ₹1,499.`,
      `FurniRevive provides doorstep recliner repair in ${(info => info.name)({ ...({} as LocalityInfo) })} for all brands and types. Whether the handle is stiff, the motor is silent, the footrest won't retract, or the recliner is stuck in one position, our technician diagnoses and fixes the issue on-site. Prices start at ₹1,499 for manual mechanism work.`,
      `Recliner repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive covers the full mechanism: recliner handle, release cable, tilt springs, footrest linkage, motor, and remote control. All work is done at your home. Manual recliner repair starts at ₹1,499; motorised recliner repair starts at ₹2,499.`,
    ],
  },
  {
    intentGroup: "recliner_repair",
    baseScore: 1,
    signals: ["isPremium", "isOffice"],
    question: (i) => `My recliner sofa is stuck and won't close in ${i.name}. What should I do?`,
    answers: [
      `A stuck recliner in ${(info => info.name)({ ...({} as LocalityInfo) })} is usually caused by a broken release cable, bent linkage, or jammed footrest spring. Do not force it — you can bend the mechanism further. Call FurniRevive at 92179 99355 for a same-day recliner repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our technician diagnoses and usually fixes it in 1–2 hours.`,
      `A recliner stuck in the open position in ${(info => info.name)({ ...({} as LocalityInfo) })} typically means the cable or tilt spring has failed. FurniRevive repairs this at your home — we carry common cable lengths and replacement spring sets for major brands. Call 92179 99355 to book a same-day recliner repair and our technician will reach you within ${(info => info.responseTime)({ ...({} as LocalityInfo) })}.`,
      `If your recliner won't close in ${(info => info.name)({ ...({} as LocalityInfo) })}, the footrest linkage or release spring is likely broken. FurniRevive's recliner technicians cover all brands — La-Z-Boy, Durian, HomeTown, and Chinese-brand sofas. WhatsApp a photo of the stuck mechanism to +91 92179 99355 for a quick pre-visit diagnosis.`,
    ],
  },
  {
    intentGroup: "recliner_repair",
    baseScore: 0.9,
    signals: ["isPremium"],
    question: (i) => `Do you repair motorised and massage recliners in ${i.name}?`,
    answers: [
      `Yes — FurniRevive repairs motorised and massage recliners in ${(info => info.name)({ ...({} as LocalityInfo) })}. We diagnose motor faults, remote control issues, USB charging port failures, heat element problems, and wiring faults. Motorised recliner repair starts at ₹2,499 and massage mechanism repair at ₹2,999.`,
      `Motorised recliner repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is a specialist service FurniRevive provides at your doorstep. Whether the motor is silent, slow, or making noise, our technician tests the motor, wiring, and remote. We carry replacement motors for common brands and can typically complete the repair in one visit.`,
      `FurniRevive's recliner repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers both manual and motorised models. For massage recliners, we repair vibration motors, heating elements, and remote control faults. We service all major brands. Call 92179 99355 for a same-day motorised recliner technician in ${(info => info.name)({ ...({} as LocalityInfo) })}.`,
    ],
  },

  // ── SOFA_CUM_BED (2) ──────────────────────────────────────────────────────
  {
    intentGroup: "sofa_cum_bed",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Do you repair sofa cum beds in ${i.name}?`,
    answers: [
      `Yes — sofa cum bed repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is one of FurniRevive's regular services. We fix pull-out mechanisms, replace broken hinges and latches, repair foam on both sofa and bed sides, and re-upholster the entire unit. Sofa cum bed repair starts at ₹1,500 for mechanism work.`,
      `FurniRevive repairs sofa cum beds at your doorstep in ${(info => info.name)({ ...({} as LocalityInfo) })}. Common issues we fix include: stuck pull-out mechanism, broken centre hinge, sunken sleeping foam, and torn fabric on the fold-out section. Prices start at ₹1,500 with a free inspection to assess all components.`,
      `Sofa cum bed repair in ${(info => info.name)({ ...({} as LocalityInfo) })} covers the full unit — mechanism, hinges, foam, and fabric. FurniRevive technicians are experienced with single-fold, bi-fold, and pull-out click-clack mechanisms. Mechanism repair starts at ₹1,500; full foam and upholstery restoration for both sofa and bed sides starts at ₹6,000.`,
    ],
  },
  {
    intentGroup: "sofa_cum_bed",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `My sofa cum bed mechanism is broken in ${i.name}. Can you fix it?`,
    answers: [
      `Yes — a broken sofa cum bed mechanism in ${(info => info.name)({ ...({} as LocalityInfo) })} is typically caused by a snapped hinge pin, bent frame rail, or a worn locking latch. FurniRevive repairs all three — we carry common spare parts and custom-cut replacements. Mechanism repair costs ₹1,500–₹3,500 and is done in under 2 hours.`,
      `Sofa cum bed mechanism repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive covers stuck hinges, broken click-clack latches, bent pull-out rails, and misaligned frames. Our technician diagnoses the fault during the free inspection and repairs it on-site. Most mechanism repairs are completed in 1–2 hours.`,
      `A stuck or broken sofa cum bed mechanism in ${(info => info.name)({ ...({} as LocalityInfo) })} is fixable in most cases without replacing the entire unit. FurniRevive repairs hinge pins, locking arms, and slide rails at your home. Call 92179 99355 for a same-day sofa cum bed repair technician in ${(info => info.name)({ ...({} as LocalityInfo) })}.`,
    ],
  },

  // ── WOODEN_REPAIR (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "wooden_repair",
    baseScore: 0.9,
    signals: ["isPremium", "isDDA"],
    question: (i) => `Do you repair wooden sofas in ${i.name}?`,
    answers: [
      `Yes — wooden sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is available from FurniRevive at your doorstep. We repair loose joints, cracked wooden arms, broken legs, and sagging bases. We also refinish and polish wooden surfaces to restore their original look. Wooden sofa repair starts at ₹1,500.`,
      `FurniRevive repairs wooden sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} including sheesham, teak, mango wood, and engineered wood frames. Common repairs include joint re-gluing, screw tightening, broken arm replacement, and leg repair. All work is done at your home — no need to send the sofa to a carpenter's workshop.`,
      `Wooden sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} by FurniRevive covers structural and cosmetic issues. We fix cracked wood, loose joints, broken legs, and sagging bases. We also re-upholster the cushion section and restore the wooden frame finish in the same visit. Prices start at ₹1,500 for basic structural repair.`,
    ],
  },
  {
    intentGroup: "wooden_repair",
    baseScore: 0.8,
    signals: ["isPremium"],
    question: (i) => `Can you repair antique or heritage wooden sofas in ${i.name}?`,
    answers: [
      `Yes — FurniRevive handles antique and heritage wooden sofa restoration in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our senior craftsmen are experienced with period joinery — mortise-and-tenon joints, period upholstery tacks, and traditional frame construction. We restore the structure while preserving the original design and finish wherever possible.`,
      `Antique wooden sofa restoration in ${(info => info.name)({ ...({} as LocalityInfo) })} is a specialist service FurniRevive offers. We assess the wood type and original construction, repair or replicate damaged joinery, and re-upholster with period-appropriate fabrics if required. Contact us with photos for a specialist assessment before booking.`,
      `FurniRevive has experience restoring older and heritage wooden sofas in ${(info => info.name)({ ...({} as LocalityInfo) })}. Whether it is a family heirloom or a vintage design piece, our craftsmen approach the repair conservatively — stabilising the frame and re-upholstering without altering the original silhouette. WhatsApp photos to +91 92179 99355 for an assessment.`,
    ],
  },

  // ── APARTMENT_SERVICE (2) ─────────────────────────────────────────────────
  {
    intentGroup: "apartment_service",
    baseScore: 1,
    signals: ["isHighRise"],
    question: (i) => `Do you service apartments and high-rise societies in ${i.name}?`,
    answers: [
      `Yes — apartment and high-rise society sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is FurniRevive's core service. Our technicians carry compact kits that fit in lifts and work entirely within your flat. We're familiar with society security procedures and carry identification for gate entry. Same-day service available for bookings before noon.`,
      `FurniRevive regularly services apartments in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our technicians are trained to work in flat environments — no excessive noise, no mess, no wide tools that can't navigate corridors or lifts. All repair materials are brought in a single compact carry bag. Just let security know we're expected and we handle the rest.`,
      `Sofa repair in high-rise apartments in ${(info => info.name)({ ...({} as LocalityInfo) })} is straightforward with FurniRevive. We work fully within your living room — the sofa never leaves the flat. Our technician follows your building's security sign-in process and completes the job cleanly. Book before noon for same-day service.`,
    ],
  },
  {
    intentGroup: "apartment_service",
    baseScore: 0.8,
    signals: ["isHighRise"],
    question: (i) => `Can you repair a sofa on the 15th floor of a tower in ${i.name}?`,
    answers: [
      `Absolutely — FurniRevive repairs sofas on any floor in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our technicians carry all tools and materials in a compact bag that fits in standard flat lifts. No large equipment is needed for most sofa repairs. We operate in towers, penthouses, and basement-level apartments equally.`,
      `Floor level is no issue for sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. FurniRevive's technicians carry lightweight kit bags and work inside your flat entirely. Whether you're on the 3rd floor or the 30th, the service is identical — the sofa stays in place and the repair is done at home.`,
      `Our sofa repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers every floor level without additional charges. Foam, fabric, springs, and tools are all carried in compact bags. The technician uses your building's lift and security entry. Repair is completed inside your flat — no need to bring the sofa down.`,
    ],
  },

  // ── OFFICE_REPAIR (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "office_repair",
    baseScore: 1,
    signals: ["isOffice"],
    question: (i) => `Do you repair office sofas and reception furniture in ${i.name}?`,
    answers: [
      `Yes — FurniRevive provides office sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} for reception areas, lounges, cabin sofas, and conference room seating. We work during business hours or evenings to avoid disrupting operations. Office repair rates are the same as residential — starting at ₹999.`,
      `FurniRevive's office sofa repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} covers reception leather sofas, lounge fabric seating, and boardroom upholstery. Our technicians work discreetly and quickly — most office sofa repairs are completed in 1–2 hours without disrupting regular business activity.`,
      `Office and commercial sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is available from FurniRevive seven days a week, including early-morning and after-hours slots. We handle reception couches, waiting area sofas, and cabin recliners. Priority slots are available for urgent repairs — call 92179 99355 to arrange.`,
    ],
  },
  {
    intentGroup: "office_repair",
    baseScore: 0.9,
    signals: ["isOffice"],
    question: (i) => `Can you repair multiple office sofas in one visit in ${i.name}?`,
    answers: [
      `Yes — FurniRevive handles bulk office sofa repairs in ${(info => info.name)({ ...({} as LocalityInfo) })} in a single visit. For 5 or more units, we send a two-technician team to complete the work efficiently. Volume pricing is available for offices needing recurring maintenance. Call 92179 99355 to discuss your office's requirements.`,
      `For offices with multiple sofas in ${(info => info.name)({ ...({} as LocalityInfo) })}, FurniRevive offers scheduled bulk repair visits. A two-person team can typically handle 8–10 sofas per day. We work around your office schedule — early morning, lunch hours, or after closing. Contact us for a site visit and volume quote.`,
      `FurniRevive provides commercial sofa repair programmes for offices in ${(info => info.name)({ ...({} as LocalityInfo) })}. We assess all seating, prioritise urgent repairs, and provide a phased quote for budgeting. Multi-unit jobs receive volume pricing and a single-invoice arrangement for easy procurement.`,
    ],
  },

  // ── COMMERCIAL (2) ────────────────────────────────────────────────────────
  {
    intentGroup: "commercial",
    baseScore: 0.8,
    signals: ["isOffice"],
    question: (i) => `Do you repair sofas for restaurants and hotels in ${i.name}?`,
    answers: [
      `Yes — FurniRevive provides commercial sofa repair for restaurants, cafés, hotels, and co-working spaces in ${(info => info.name)({ ...({} as LocalityInfo) })}. We handle high-use commercial upholstery that wears faster than residential pieces. We work during off-peak hours to minimise business disruption.`,
      `Commercial furniture repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is a specialist offering from FurniRevive. We restore restaurant booth seating, hotel lobby sofas, café bench upholstery, and co-working lounge furniture. Our commercial-grade fabrics and leatherettes are more durable than residential options and come with appropriate cleaning recommendations.`,
      `FurniRevive repairs commercial sofas and seating in ${(info => info.name)({ ...({} as LocalityInfo) })} for restaurants, hotels, and hospitality businesses. We use commercial-grade upholstery materials that resist heavy use and are easy to clean. Call 92179 99355 to arrange an after-hours commercial repair visit.`,
    ],
  },
  {
    intentGroup: "commercial",
    baseScore: 0.7,
    signals: ["isOffice"],
    question: (i) => `Do you offer bulk sofa repair contracts for businesses in ${i.name}?`,
    answers: [
      `Yes — FurniRevive offers annual maintenance contracts (AMC) for businesses in ${(info => info.name)({ ...({} as LocalityInfo) })} covering regular sofa inspection, foam replacement, fabric touch-ups, and mechanism service. AMC pricing is available for offices, hotels, and co-working spaces with 10 or more units. Call 92179 99355 for a custom quote.`,
      `Business sofa maintenance contracts in ${(info => info.name)({ ...({} as LocalityInfo) })} are available from FurniRevive. We offer quarterly inspection and repair visits for offices, hotels, and retail spaces — keeping all seating in optimal condition year-round. Volume pricing reduces per-unit costs significantly compared to ad-hoc repairs.`,
      `FurniRevive provides commercial sofa maintenance programmes for businesses in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our contracts include scheduled inspections, priority same-day emergency repair slots, and end-of-year reports on furniture condition. Contact us for pricing based on your fleet size.`,
    ],
  },

  // ── BOOKING_PROCESS (2) ───────────────────────────────────────────────────
  {
    intentGroup: "booking_process",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `How do I book sofa repair in ${i.name}?`,
    answers: [
      `Booking sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} with FurniRevive takes 2 minutes. Call 92179 99355 or WhatsApp +91 92179 99355 with your address and a description of the sofa problem. We'll confirm a same-day or next-morning slot. The technician arrives for a free inspection and completes the repair in one visit upon your approval.`,
      `To book a sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, WhatsApp a photo of the damage to +91 92179 99355. Our team reviews the photo, estimates the repair type, and confirms an appointment slot — usually the same day. Alternatively, call 92179 99355 directly for the fastest confirmation.`,
      `Booking FurniRevive for sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} is simple: call 92179 99355, tell us your locality within ${(info => info.name)({ ...({} as LocalityInfo) })}, and describe the sofa issue. We'll confirm the nearest available slot, which is often the same day. The inspection is free and no payment is needed until you approve the repair quote.`,
    ],
  },
  {
    intentGroup: "booking_process",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `Do I need to move my sofa to get it repaired in ${i.name}?`,
    answers: [
      `No — FurniRevive's doorstep sofa repair service in ${(info => info.name)({ ...({} as LocalityInfo) })} means your sofa stays exactly where it is. Our technician brings all foam, fabric, tools, and spare parts to your home. The entire repair is done in your living room — no transport, no workshop, no waiting weeks for your sofa to return.`,
      `You never need to move your sofa for repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. FurniRevive comes to you — with foam, fabric swatches, spring stock, and tools. We work in-flat and leave your home tidy. The only thing that moves is the technician's equipment bag, not your sofa.`,
      `Your sofa stays in your home throughout the entire repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. FurniRevive provides fully doorstep service — the technician arrives with a self-contained kit and completes foam replacement, re-upholstery, spring repair, or frame work right in your living room. No loading, no transport, no risk of damage in transit.`,
    ],
  },

  // ── WHATSAPP_BOOKING (2) ──────────────────────────────────────────────────
  {
    intentGroup: "whatsapp_booking",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `Can I book sofa repair via WhatsApp in ${i.name}?`,
    answers: [
      `Yes — WhatsApp booking is the most popular way to book sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. Send a photo of your sofa damage to +91 92179 99355, tell us your address in ${(info => info.name)({ ...({} as LocalityInfo) })}, and we'll confirm a time slot in minutes. No app download required — just your regular WhatsApp.`,
      `WhatsApp FurniRevive at +91 92179 99355 to book sofa repair near you in ${(info => info.name)({ ...({} as LocalityInfo) })}. Our team reviews photos quickly and can confirm same-day availability without a phone call. Share your sofa issue, preferred time, and society/building name for the fastest confirmation.`,
      `For sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, WhatsApp is the fastest booking method. Send photos to +91 92179 99355 — our team responds in minutes with a slot confirmation. You'll also receive the technician's contact number before the visit so you can coordinate entry with your building security.`,
    ],
  },
  {
    intentGroup: "whatsapp_booking",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `What information do I need to share when booking by WhatsApp in ${i.name}?`,
    answers: [
      `When booking sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} via WhatsApp, share: 1) a photo of the damage, 2) your society/street name in ${(info => info.name)({ ...({} as LocalityInfo) })}, 3) sofa type (fabric/leather/recliner), and 4) your preferred time. That's all — we'll confirm the slot and send you the technician's contact number.`,
      `To book via WhatsApp (+91 92179 99355) for sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, simply send a photo of the sofa, your approximate location within ${(info => info.name)({ ...({} as LocalityInfo) })}, and a brief description of the problem. We'll confirm availability and share the technician's estimated arrival time.`,
      `For a WhatsApp sofa repair booking in ${(info => info.name)({ ...({} as LocalityInfo) })}, message +91 92179 99355 with: a close-up photo of the damage, your building/society name, and your preferred slot (morning/afternoon/evening). Our team will confirm within minutes. No lengthy forms or prior quotations needed.`,
    ],
  },

  // ── SERVICE_AREAS (3) ─────────────────────────────────────────────────────
  {
    intentGroup: "service_areas",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `Which areas near ${i.name} do you service?`,
    answers: [
      `FurniRevive services ${(info => info.name)({ ...({} as LocalityInfo) })} and all surrounding areas in ${(info => info.city)({ ...({} as LocalityInfo) })}. We cover a 5–8 km radius from your location with no area surcharge. Adjacent sectors, neighbouring colonies, and nearby townships are all covered under the same price structure.`,
      `Our sofa repair service covers ${(info => info.name)({ ...({} as LocalityInfo) })} and nearby localities throughout ${(info => info.city)({ ...({} as LocalityInfo) })}. There are no extra charges for adjacent areas — if you're within our ${(info => info.city)({ ...({} as LocalityInfo) })} service zone, standard rates apply. Call 92179 99355 to confirm coverage for a specific address.`,
      `FurniRevive covers ${(info => info.name)({ ...({} as LocalityInfo) })} and the surrounding ${(info => info.city)({ ...({} as LocalityInfo) })} areas under a single, consistent pricing structure. Our technicians don't charge extra for travelling between sectors or neighbouring colonies. Confirm your specific address by calling 92179 99355 or WhatsApp-ing +91 92179 99355.`,
    ],
  },
  {
    intentGroup: "service_areas",
    baseScore: 1,
    signals: "always",
    question: (i) => `Do you charge extra for coming to ${i.name} vs. other areas?`,
    answers: [
      `No — FurniRevive does not charge a location surcharge for ${(info => info.name)({ ...({} as LocalityInfo) })} or any area within ${(info => info.city)({ ...({} as LocalityInfo) })}. Repair prices are fixed based on work done, not where you live. The free inspection is also free of call-out charges.`,
      `There are no area-based surcharges for sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. FurniRevive charges the same rates across all localities in ${(info => info.city)({ ...({} as LocalityInfo) })} — no premium for distance, no weekend markups, no hidden travel fees. The price you're quoted is the price you pay.`,
      `FurniRevive's sofa repair pricing in ${(info => info.name)({ ...({} as LocalityInfo) })} is area-neutral. We don't apply location premiums to any ${(info => info.city)({ ...({} as LocalityInfo) })} address — whether you're in a central locality or a newer sector on the outskirts. Fixed, transparent pricing is standard across all our service areas.`,
    ],
  },
  {
    intentGroup: "service_areas",
    baseScore: 0.9,
    signals: "always",
    question: (i) => `Do you cover all of ${i.city} for sofa repair?`,
    answers: [
      `FurniRevive covers all of ${(info => info.city)({ ...({} as LocalityInfo) })} for sofa repair — including ${(info => info.name)({ ...({} as LocalityInfo) })} and every sector, colony, and township in the city. Our technicians are distributed across the city so no area waits excessively long. Call 92179 99355 to confirm availability for your specific address.`,
      `Yes — our sofa repair service covers all of ${(info => info.city)({ ...({} as LocalityInfo) })} with technicians stationed strategically to minimise response times. From central localities to outer sectors, every address in ${(info => info.city)({ ...({} as LocalityInfo) })} including ${(info => info.name)({ ...({} as LocalityInfo) })} gets the same standard of service and pricing.`,
      `FurniRevive provides complete coverage across ${(info => info.city)({ ...({} as LocalityInfo) })} — no locality is out of our service area. Whether you are in ${(info => info.name)({ ...({} as LocalityInfo) })} or a neighbouring area, our technician reaches you with the same ${(info => info.responseTime)({ ...({} as LocalityInfo) })} response time and at the same rates.`,
    ],
  },

  // ── TECHNICIAN_VISIT (2) ──────────────────────────────────────────────────
  {
    intentGroup: "technician_visit",
    baseScore: 1,
    signals: ["isHighRise", "isOffice"],
    question: (i) => `What happens during the sofa technician's visit in ${i.name}?`,
    answers: [
      `During a FurniRevive technician visit in ${(info => info.name)({ ...({} as LocalityInfo) })}, the technician arrives with foam samples, fabric swatches, spring stock, and tools. First, a free inspection is done: every component is checked — foam, springs, frame, fabric, and mechanism (recliners). A transparent, itemised quote is presented. If you approve, repair begins immediately. Most repairs are completed in the same 2–4 hour visit.`,
      `A FurniRevive technician visit in ${(info => info.name)({ ...({} as LocalityInfo) })} follows a consistent process: arrival with full equipment, free sofa inspection, presentation of a fixed quote, and — upon approval — immediate repair. The technician cleans up before leaving. You receive a 6-month warranty card on completion.`,
      `When FurniRevive visits your home in ${(info => info.name)({ ...({} as LocalityInfo) })}, the technician: 1) inspects the sofa thoroughly, 2) explains the diagnosis in plain language, 3) presents a fixed itemised quote, 4) starts work upon your approval, and 5) cleans up on completion. No pressure, no surprise costs, no second visit needed for most repairs.`,
    ],
  },
  {
    intentGroup: "technician_visit",
    baseScore: 0.8,
    signals: ["isHighRise"],
    question: (i) => `Are your technicians background-verified in ${i.name}?`,
    answers: [
      `Yes — all FurniRevive technicians serving ${(info => info.name)({ ...({} as LocalityInfo) })} are background-verified and carry company ID cards. You can request to see the technician's ID on arrival. We also send the technician's name and photo via WhatsApp before the visit so you know exactly who to expect.`,
      `FurniRevive verifies the background of all technicians before they enter customer homes in ${(info => info.name)({ ...({} as LocalityInfo) })}. Every technician carries a company-issued photo ID. For society buildings, we provide the technician's details in advance for gate registration.`,
      `All our sofa repair technicians in ${(info => info.name)({ ...({} as LocalityInfo) })} are trained, uniformed, and background-checked. We share the technician's name and contact number with you before the visit. For added security, our office can confirm the technician's details via call if you have any concerns.`,
    ],
  },

  // ── REPAIR_VS_REPLACE (2) ─────────────────────────────────────────────────
  {
    intentGroup: "repair_vs_replace",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `How do I know if my sofa is worth repairing or should be replaced in ${i.name}?`,
    answers: [
      `The key factor for sofa repair vs. replacement in ${(info => info.name)({ ...({} as LocalityInfo) })} is the frame condition. If the hardwood or engineered wood frame is structurally sound, repair is almost always worth it — even if foam, springs, and fabric need replacing. FurniRevive's free inspection assesses the frame first. If the frame is beyond repair, we tell you honestly.`,
      `For sofa owners in ${(info => info.name)({ ...({} as LocalityInfo) })}, the repair-vs-replace decision comes down to frame quality and budget. A solid frame can be fully restored — new foam, springs, and fabric — for ₹12,000–₹22,000, saving 60–70% over a new sofa. FurniRevive's free inspection gives you an honest assessment with no sales pressure to repair.`,
      `FurniRevive technicians in ${(info => info.name)({ ...({} as LocalityInfo) })} give honest repair-vs-replace guidance during the free inspection. A sofa with a strong frame is almost always worth repairing. A sofa with a badly warped or termite-damaged frame may not hold future repairs — in that case, we'll advise replacement rather than take your money on a repair that won't last.`,
    ],
  },
  {
    intentGroup: "repair_vs_replace",
    baseScore: 1,
    signals: "always",
    question: (i) => `My sofa is 10 years old in ${i.name}. Is it still worth repairing?`,
    answers: [
      `A 10-year-old sofa in ${(info => info.name)({ ...({} as LocalityInfo) })} is often very worth repairing — quality hardwood and metal frames last 20–30 years. The components that typically fail — foam, springs, fabric — are all replaceable. A full restoration typically costs ₹12,000–₹22,000 and the result feels like a new sofa without the disruption of buying one.`,
      `Age alone is not a reason to replace a sofa in ${(info => info.name)({ ...({} as LocalityInfo) })}. A 10-year-old quality sofa with a sound frame can be fully restored — new foam, springs, and fabric — for 30–40% of the replacement cost. FurniRevive's free inspection confirms whether the frame is good before any work begins.`,
      `FurniRevive regularly restores 10–15 year old sofas in ${(info => info.name)({ ...({} as LocalityInfo) })} to like-new condition. Older sofas often have better-quality frames than newer budget pieces. If the frame is solid, a full restoration — foam, springs, fabric — is cost-effective and gives you another 8–12 years of life from the same sofa.`,
    ],
  },

  // ── FURNITURE_CARE (2) ────────────────────────────────────────────────────
  {
    intentGroup: "furniture_care",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `How can I make my repaired sofa last longer in ${i.name}?`,
    answers: [
      `After sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, FurniRevive recommends: vacuum cushions weekly, rotate seat cushions every 2–3 months, avoid sitting on armrests, and keep the sofa out of direct sunlight. For fabric sofas, use a fabric protector spray every 6 months. For leather, apply leather conditioner quarterly to prevent cracking.`,
      `To extend your sofa's life after repair in ${(info => info.name)({ ...({} as LocalityInfo) })}: avoid prolonged sunlight exposure which fades fabric and dries leather; use sofa covers if you have pets; clean spills immediately with a dry cloth; and don't jump on or overload the seating area beyond its design weight. Following these habits can double your sofa's post-repair lifespan.`,
      `Post-repair sofa care in ${(info => info.name)({ ...({} as LocalityInfo) })} is simple: vacuum weekly, rotate cushions monthly, keep pets from scratching the sides, and wipe spills immediately. FurniRevive's warranty covers manufacturing defects, but following basic care guidelines ensures the repair lasts its full potential lifespan of 8–12 years.`,
    ],
  },
  {
    intentGroup: "furniture_care",
    baseScore: 0.6,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `How do I clean and maintain a leather sofa in ${i.name}?`,
    answers: [
      `To maintain a leather sofa in ${(info => info.name)({ ...({} as LocalityInfo) })}: dust weekly with a dry microfibre cloth, clean spills immediately with a slightly damp cloth (no soaking), apply a leather conditioner every 3–4 months to prevent cracking, and keep the sofa away from heating vents and direct sunlight. For deep cleaning, use a pH-neutral leather cleaner — avoid household detergents.`,
      `Leather sofa maintenance in ${(info => info.name)({ ...({} as LocalityInfo) })} requires consistent light care. Wipe down with a dry cloth weekly; condition with a leather cream quarterly. Avoid direct sunlight which dries and cracks leather, and don't use harsh cleaning products. For minor scratches, leather conditioner rubbed in circular motions often reduces visibility significantly.`,
      `For leather sofas in ${(info => info.name)({ ...({} as LocalityInfo) })}: clean monthly with a dedicated leather soap; apply leather conditioner every 3 months; use arm covers in high-friction zones; and have a professional restoration done every 2–3 years to maintain colour and suppleness. FurniRevive can provide a leather maintenance service alongside any repair visit.`,
    ],
  },

  // ── AFTER_SERVICE (2) ─────────────────────────────────────────────────────
  {
    intentGroup: "after_service",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `What if I'm not satisfied with the sofa repair in ${i.name}?`,
    answers: [
      `FurniRevive stands behind every repair in ${(info => info.name)({ ...({} as LocalityInfo) })} with a 6-month written warranty. If you are not satisfied with the work or the same issue recurs within the warranty period, we return and fix it free of charge. Call 92179 99355 or WhatsApp to raise a warranty claim — we respond and schedule a return visit within 48 hours.`,
      `If the sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })} doesn't meet your expectations, contact us within 6 months and we'll arrange a free return visit to address your concerns. Our goal is to leave every customer in ${(info => info.name)({ ...({} as LocalityInfo) })} fully satisfied — we treat warranty requests as a priority, not a burden.`,
      `Post-repair concerns in ${(info => info.name)({ ...({} as LocalityInfo) })} are covered under FurniRevive's 6-month warranty. If the work quality is unsatisfactory or the repair fails, WhatsApp +91 92179 99355 with a description and photos. We'll schedule a return visit within 48 hours at zero cost. Customer satisfaction is the basis of our local reputation.`,
    ],
  },
  {
    intentGroup: "after_service",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `Do you provide a receipt or warranty card after sofa repair in ${i.name}?`,
    answers: [
      `Yes — FurniRevive provides a written warranty card and digital receipt after every sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}. The warranty card specifies the work done, materials used, and the 6-month coverage period. The digital receipt is sent via WhatsApp for easy reference if you need to raise a warranty claim.`,
      `After sofa repair in ${(info => info.name)({ ...({} as LocalityInfo) })}, FurniRevive sends a digital invoice via WhatsApp and issues a written 6-month warranty for the specific repair work completed. Keep the warranty document for reference — it's your proof of coverage if a warranty claim is needed.`,
      `Every completed repair in ${(info => info.name)({ ...({} as LocalityInfo) })} comes with a WhatsApp digital receipt and a 6-month warranty document. The warranty specifies what's covered and for how long. If you ever need a follow-up, share the warranty document number when contacting us and we'll prioritise your case.`,
    ],
  },
];

// ─── Answer templates with dynamic data ──────────────────────────────────────
// The FAQ_POOL above uses arrow functions in answers but we need to replace
// the placeholder with actual info. Re-build with a factory approach:

type RawFaqEntry = {
  intentGroup: IntentGroup;
  question: (info: LocalityInfo) => string;
  answers: [(info: LocalityInfo) => string, (info: LocalityInfo) => string, (info: LocalityInfo) => string];
  signals: Array<keyof Pick<LocalityProfile, "isPremium" | "isOffice" | "isHighRise" | "isDDA" | "isFamilyResidential" | "hasLuxuryFurniture">> | "always";
  baseScore?: number;
};

/** Internal pool with proper dynamic answer functions */
const DYNAMIC_FAQ_POOL: RawFaqEntry[] = [
  // ── PRICING ──────────────────────────────────────────────────────────────
  {
    intentGroup: "pricing",
    baseScore: 2,
    signals: "always",
    question: (i) => `How much does sofa repair cost in ${i.name}?`,
    answers: [
      (i) => `Sofa repair cost in ${i.name} starts at ₹999 for basic cushion work. Foam replacement is ₹999–₹2,500 per seat, fabric re-upholstery from ₹3,000, leather sofa repair from ₹1,500, and full set restoration from ₹8,000. FurniRevive provides a free doorstep inspection before any work begins — no obligation, no hidden charges.`,
      (i) => `Prices for sofa repair in ${i.name} vary by damage type. Cushion foam replacement starts at ₹999, sofa spring repair at ₹2,000, frame repair at ₹1,500, and leather crack restoration at ₹1,500. All quotes are fixed-price with zero surprise fees after the free inspection.`,
      (i) => `FurniRevive's sofa repair rates in ${i.name} begin at ₹999. A 3-seater fabric upholstery costs ₹6,000–₹12,000 and full leatherette replacement ₹9,000–₹18,000. Call 92179 99355 for an exact quote — the doorstep inspection is always free.`,
    ],
  },
  {
    intentGroup: "pricing",
    baseScore: 2,
    signals: "always",
    question: (i) => `What is the sofa repair price range for a 3+1+1 set in ${i.name}?`,
    answers: [
      (i) => `A complete 3+1+1 sofa set restoration in ${i.name} costs ₹14,000–₹22,000 depending on fabric choice. This includes new foam across all seats, full fabric re-upholstery, spring retensioning, and frame reinforcement — all at your doorstep. The inspection and quote are free with no commitment required.`,
      (i) => `For a 3+1+1 sofa set in ${i.name}, full restoration typically runs ₹12,000–₹20,000 — far below the ₹40,000–₹90,000 cost of a comparable new set. We replace foam, re-upholster with 500+ fabric choices, and repair springs and frame in one visit. Book a free inspection to get an exact price.`,
      (i) => `Restoring a 3+1+1 sofa set in ${i.name} with FurniRevive usually costs ₹13,000–₹22,000 for standard fabric. Premium or velvet options add ₹2,000–₹4,000. We save you 60–70% compared to buying new furniture, and every job includes a 6-month written warranty.`,
    ],
  },
  {
    intentGroup: "pricing",
    baseScore: 1.8,
    signals: "always",
    question: (i) => `Is sofa repair in ${i.name} cheaper than buying a new sofa?`,
    answers: [
      (i) => `Yes — sofa repair in ${i.name} costs 60–70% less than buying a comparable new set. A full restoration including foam, fabric, springs, and frame costs ₹13,000–₹22,000 versus ₹40,000–₹90,000 for a new 3+1+1. You also avoid delivery hassles, disposal fees, and break-in time with a new piece.`,
      (i) => `In most cases, repair is significantly cheaper than replacement in ${i.name}. Custom sofas and high-quality imported frames are especially worth repairing — the frame and spring structure can last decades with new foam and fabric. FurniRevive's prices start at ₹999, and our free inspection gives you a clear cost comparison before you decide.`,
      (i) => `Repairing your sofa in ${i.name} is almost always the better financial choice. Our technicians assess the frame condition honestly during the free inspection — if the frame is beyond repair, we'll tell you. Otherwise, a full restoration at ₹13,000–₹22,000 saves you ₹20,000–₹70,000 over a new purchase.`,
    ],
  },

  // ── FREE_INSPECTION ──────────────────────────────────────────────────────
  {
    intentGroup: "free_inspection",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Is the doorstep inspection free in ${i.name}?`,
    answers: [
      (i) => `Yes, FurniRevive offers a completely free doorstep inspection in ${i.name}. Our technician visits your home, diagnoses the sofa thoroughly, and provides a detailed itemised quote — no obligation, no call-out fee. Repair work only begins after you approve the quote.`,
      (i) => `Our inspection in ${i.name} is 100% free with zero commitment. A trained technician arrives at your address, examines the foam, springs, frame, fabric, and mechanism (for recliners), then presents a transparent fixed-price quote. You decide whether to proceed — there is no pressure.`,
      (i) => `FurniRevive's doorstep assessment in ${i.name} costs nothing. We check every component — from hidden frame cracks to spring tension — and give you a written quote on the spot. If you choose not to repair, you pay nothing. Call 92179 99355 or WhatsApp to schedule your free inspection.`,
    ],
  },
  {
    intentGroup: "free_inspection",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `How do I book a free sofa inspection near me in ${i.name}?`,
    answers: [
      (i) => `To book a free sofa inspection in ${i.name}, call 92179 99355 or WhatsApp us at +91 92179 99355 with your address and sofa issue. We'll confirm a slot — usually the same day or next morning. Our technician arrives fully equipped to inspect and, if you agree to the quote, complete the repair on the same visit.`,
      (i) => `Booking a free inspection in ${i.name} takes two minutes. WhatsApp a photo of your sofa to +91 92179 99355, tell us your approximate location in ${i.name}, and we'll confirm a time slot within the hour. Most inspections in ${i.name} are done the same day.`,
      (i) => `You can schedule a free doorstep inspection in ${i.name} by calling or WhatsApp-ing FurniRevive at 92179 99355. Mention your society/building name and the type of sofa issue — the technician comes prepared with tools and materials to quote accurately and often complete the repair in the same visit.`,
    ],
  },

  // ── WARRANTY ─────────────────────────────────────────────────────────────
  {
    intentGroup: "warranty",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Is there a warranty on sofa repair in ${i.name}?`,
    answers: [
      (i) => `Every sofa repair in ${i.name} by FurniRevive comes with a 6-month written warranty. This covers foam compression, fabric stitching, spring tension, frame joints, and recliner mechanisms. If the same problem recurs within the warranty period, we return and fix it at zero cost.`,
      (i) => `Yes — FurniRevive provides a 6-month warranty on all sofa repairs in ${i.name}. The warranty is written and covers the specific work done: whether foam replacement, re-upholstery, spring repair, or frame tightening. Our warranty gives you full peace of mind with no follow-up cost if a covered issue reappears.`,
      (i) => `All repairs completed in ${i.name} are backed by a 6-month written warranty. It applies to every job — from a single cushion foam replacement to a full 5-seater restoration. Contact us within the warranty period for any covered issue and our technician returns for free.`,
    ],
  },
  {
    intentGroup: "warranty",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `What does the sofa repair warranty cover in ${i.name}?`,
    answers: [
      (i) => `The 6-month warranty on sofa repairs in ${i.name} covers workmanship and materials: foam compression, fabric stitching failures, spring retensioning, frame joint separation, and recliner mechanism issues. It does not cover new accidental damage or pet scratches caused after the repair.`,
      (i) => `FurniRevive's warranty for repairs in ${i.name} covers all repaired components for 6 months — including foam, springs, frame, upholstery stitching, and leather patches. If any repaired part develops the same issue within the warranty window, we fix it for free on a return visit.`,
      (i) => `Our 6-month warranty in ${i.name} covers every part we touched: cushion foam, spring webbing, fabric or leather, and structural frame repairs. Cosmetic damage from new accidents is excluded, but any failure in our workmanship or materials is fully covered at no additional charge.`,
    ],
  },

  // ── SAME_DAY ─────────────────────────────────────────────────────────────
  {
    intentGroup: "same_day",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `Do you offer same-day sofa repair in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive offers same-day sofa repair in ${i.name} for bookings received before noon. Our technicians are stationed across ${i.city} and can reach your address within ${i.responseTime}. Call 92179 99355 to confirm availability for your slot.`,
      (i) => `Same-day doorstep sofa repair in ${i.name} is available when you book early in the day. WhatsApp us photos of the damage at +91 92179 99355 and we'll confirm a same-day slot. For urgent jobs, calling directly is faster than the online form.`,
      (i) => `FurniRevive provides same-day sofa repair service in ${i.name} subject to technician availability. Pre-noon bookings are almost always accommodated on the same day. The technician arrives with foam, fabric, springs, and tools — so the repair is completed in one visit, typically in 2–4 hours.`,
    ],
  },
  {
    intentGroup: "same_day",
    baseScore: 1.3,
    signals: "always",
    question: (i) => `How quickly can I get sofa repair at my home in ${i.name}?`,
    answers: [
      (i) => `You can get sofa repair at your home in ${i.name} as quickly as the same day for pre-noon bookings. Our nearest technician reaches your address within ${i.responseTime} and carries everything needed for most repairs in a single visit.`,
      (i) => `Most homeowners in ${i.name} get a technician at their door within ${i.responseTime} of booking. Same-day slots are available most days — WhatsApp +91 92179 99355 with your sofa issue and address to confirm the earliest slot.`,
      (i) => `Home sofa repair in ${i.name} is available the same day when you book before noon. Our technician arrives in ${i.responseTime}, inspects for free, presents a fixed quote, and completes the repair immediately upon your approval — no second visit needed for most jobs.`,
    ],
  },
  {
    intentGroup: "same_day",
    baseScore: 1.2,
    signals: ["isHighRise", "isOffice"],
    question: (i) => `Can you do urgent same-day sofa repair for my apartment in ${i.name}?`,
    answers: [
      (i) => `Yes — urgent same-day sofa repair is available for apartments in ${i.name}. Call 92179 99355 directly for urgent slots. Our technician navigates building access procedures and brings all equipment in a compact kit that fits in the lift — no disruption to neighbours or building rules.`,
      (i) => `FurniRevive handles urgent apartment sofa repairs in ${i.name} same-day when booked before noon. We're familiar with society gate procedures and carry identification for entry. The repair is done entirely inside your flat — no need to move the sofa out.`,
      (i) => `For urgent apartment sofa repair in ${i.name}, call 92179 99355 rather than using the online form — our team can often fit in late bookings for high-rise residents. We bring everything needed and complete the work in your living room, usually in 2–4 hours.`,
    ],
  },

  // ── RESPONSE_TIME ────────────────────────────────────────────────────────
  {
    intentGroup: "response_time",
    baseScore: 1.5,
    signals: "always",
    question: (i) => `How long does a sofa technician take to reach ${i.name}?`,
    answers: [
      (i) => `A FurniRevive sofa technician typically reaches ${i.name} within ${i.responseTime} of booking. Our technicians are based across ${i.city} so we avoid long cross-city travel times. Call 92179 99355 to check exact availability for your area.`,
      (i) => `Our nearest sofa technician reaches your address in ${i.name} within ${i.responseTime} in most cases. For early-morning bookings, the technician often arrives within 1–2 hours. WhatsApp +91 92179 99355 with your pincode or society name for the most accurate estimate.`,
      (i) => `FurniRevive stations technicians across ${i.city} to keep response times short. For ${i.name}, the typical door-to-door time is ${i.responseTime}. We'll confirm the exact window when you book.`,
    ],
  },
  {
    intentGroup: "response_time",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `Is there a sofa repair technician near me in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive has sofa repair technicians serving ${i.name} and nearby areas. Our local technicians are stationed within ${i.city} and can reach your address in ${i.responseTime}. No need to transport your sofa to a workshop — we come to you.`,
      (i) => `FurniRevive's sofa technicians cover ${i.name} as part of our ${i.city} service network. You'll get a trained craftsman at your door in ${i.responseTime} — fully equipped with foam grades, fabric samples, spring stock, and repair tools.`,
      (i) => `Our sofa repair technicians are local to ${i.city} and regularly serve ${i.name}. A technician near you is available most days and can reach your address within ${i.responseTime} of booking. Call 92179 99355 to confirm the nearest available slot.`,
    ],
  },

  // ── FOAM_REPLACEMENT ─────────────────────────────────────────────────────
  {
    intentGroup: "foam_replacement",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Do you do foam replacement for sofas near me in ${i.name}?`,
    answers: [
      (i) => `Yes — foam replacement is one of FurniRevive's most common services in ${i.name}. We stock 32D and 40D high-resilience foam and replace compressed or sagging foam on-site. Cushion foam replacement starts at ₹999 per seat and is completed in 1–2 hours at your home.`,
      (i) => `FurniRevive provides doorstep foam replacement in ${i.name} using high-density foam sourced from certified suppliers. We match the exact density to your sofa's original spec — 32D for standard use, 36D for households with children or pets, and 40D heavy-duty for recliners. No workshop visit required.`,
      (i) => `Foam replacement near me in ${i.name} is available from FurniRevive at ₹999 per seat and up. Our technician strips the old compressed foam, measures and cuts fresh foam to shape, and re-fits it in the original cover. The job is done at your home in under 2 hours for most sofas.`,
    ],
  },
  {
    intentGroup: "foam_replacement",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `What foam density do you use for sofa repairs in ${i.name}?`,
    answers: [
      (i) => `FurniRevive uses 32D foam for light to moderate use, 36D for homes with children and pets, and 40D high-density foam for recliners and heavily used sofas in ${i.name}. We never use recycled or substandard foam — all foam is sourced from certified manufacturers. The right density is selected after inspecting your sofa and lifestyle.`,
      (i) => `We carry three foam grades for sofa repairs in ${i.name}: standard (32D), comfort-plus (36D for kids and pets), and heavy-duty (40D for daily-use recliners and premium sofas). Our technician will recommend the correct grade during the free inspection based on the original sofa construction.`,
      (i) => `For sofa foam replacement in ${i.name}, FurniRevive uses genuine high-density foam in 32D, 36D, and 40D grades. We do not use scrap or recycled foam under any circumstance. The density selection is matched to usage patterns — families with young children typically benefit from 36D for durability and resilience.`,
    ],
  },
  {
    intentGroup: "foam_replacement",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `My sofa cushions are flat after years of use in ${i.name}. Can you refill them?`,
    answers: [
      (i) => `Yes — flat sofa cushions are a very common problem in ${i.name} and one FurniRevive handles daily. We open the cushion cover, remove the compressed old foam, cut and fit new high-density foam to the original dimensions, and re-close the cover. The cushion returns to its original height and firmness.`,
      (i) => `Flat cushions in ${i.name} are typically caused by foam losing its cell structure after 4–7 years. FurniRevive replaces the foam on-site — no need to send cushions to a workshop. The job takes about 30–45 minutes per cushion and costs ₹999–₹2,500 depending on size and foam grade.`,
      (i) => `FurniRevive can restore your flat sofa cushions in ${i.name} same day. Our technician arrives with foam in multiple grades, cuts it to size at your home, and re-fits it inside the original cover. If the cover fabric is also worn, we can replace it in the same visit — all done without moving the sofa.`,
    ],
  },

  // ── CUSHION_REFILLING ────────────────────────────────────────────────────
  {
    intentGroup: "cushion_refilling",
    baseScore: 0.9,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you refill sofa cushions at home in ${i.name}?`,
    answers: [
      (i) => `FurniRevive refills sofa cushions at your home in ${i.name} — no need to remove or transport your sofa. Our technician unzips or carefully opens each cushion cover, replaces the compressed foam with fresh high-density foam, and seals it neatly. The process takes about 30–60 minutes per cushion and starts at ₹999.`,
      (i) => `Yes — all sofa cushion refilling work in ${i.name} is done at your doorstep. We carry multiple foam densities (32D, 36D, 40D) and cut the foam to exact size on-site. Most cushion refilling jobs in ${i.name} are completed within 1–2 hours at a cost of ₹999–₹2,500 per seat.`,
      (i) => `Sofa cushion refilling at home in ${i.name} is a core FurniRevive service. We replace worn foam inside your existing cushion covers — keeping your sofa's look while restoring full comfort. Prices start at ₹999 per seat with a free inspection to assess the right foam density for your household.`,
    ],
  },
  {
    intentGroup: "cushion_refilling",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `How long does cushion foam replacement take in ${i.name}?`,
    answers: [
      (i) => `Cushion foam replacement in ${i.name} typically takes 30–45 minutes per cushion. A standard 3-seater sofa with 3 seat and 3 back cushions is usually done in 2–3 hours. The technician works inside your living room — there's no need to vacate or move the sofa.`,
      (i) => `For a single-seat replacement in ${i.name}, expect around 30–45 minutes. A complete 5-seater foam refill (all seats and backs) takes 3–4 hours. FurniRevive's technician works cleanly and quietly — no dust, loud tools, or disruption to the rest of your home.`,
      (i) => `Most foam refilling jobs in ${i.name} are completed in a single 2–4 hour visit. Individual cushion work is faster — about 30 minutes each. Our technician brings pre-measured foam blocks and cuts to fit on-site, so there's no wait for a custom order.`,
    ],
  },

  // ── SPRING_REPAIR ────────────────────────────────────────────────────────
  {
    intentGroup: "spring_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you repair broken sofa springs in ${i.name}?`,
    answers: [
      (i) => `Yes — sofa spring repair is a speciality at FurniRevive and one of the top requests in ${i.name}. We replace broken sinuous springs, re-tension sagging spring webbing, and reinforce spring clips and corner brackets — all at your doorstep. Spring repair typically costs ₹2,000–₹5,000 depending on the number of broken springs.`,
      (i) => `FurniRevive repairs broken and sagging sofa springs at your home in ${i.name}. Whether the springs have snapped, lost tension, or become noisy, our technician diagnoses the type of spring system (sinuous, coil, or webbing) and repairs or replaces only what's damaged. Most spring repairs are done in 1–3 hours.`,
      (i) => `Sofa spring repair in ${i.name} by FurniRevive covers all spring types: sinuous (zigzag) springs, coil springs, and elastic webbing. We retension or replace broken units, reinforce the base frame, and test the seating before completing the job. Call 92179 99355 to book a same-day spring repair.`,
    ],
  },
  {
    intentGroup: "spring_repair",
    baseScore: 0.9,
    signals: ["isDDA", "isFamilyResidential"],
    question: (i) => `My sofa makes a noise when I sit on it in ${i.name}. Is it the springs?`,
    answers: [
      (i) => `A creaking or squeaking sofa in ${i.name} is usually caused by loose spring clips, worn webbing, or a cracked frame joint. FurniRevive's technician performs a free doorstep diagnosis in ${i.name} — we identify the exact source and fix it on the same visit. Spring and frame repairs start at ₹2,000.`,
      (i) => `Noise from a sofa in ${i.name} typically points to spring movement or a loose frame joint. Our technician can identify the issue in minutes during the free inspection — and in most cases, fix it the same day. We stock replacement spring clips, webbing, and corner brackets for on-site repairs.`,
      (i) => `If your sofa is noisy when you sit in ${i.name}, it's likely a spring or frame issue. FurniRevive diagnoses this during the free inspection — no charge to identify the problem. Spring retensioning or clip replacement starts at ₹2,000 and is usually done in under 2 hours.`,
    ],
  },
  {
    intentGroup: "spring_repair",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `How much does sofa spring repair cost in ${i.name}?`,
    answers: [
      (i) => `Sofa spring repair in ${i.name} costs ₹2,000–₹5,000 depending on the spring type and how many need replacement. Sinuous spring replacement is ₹2,000–₹3,500, while full spring base rebuilds run ₹4,000–₹7,000. The free inspection gives you an exact fixed price before work starts.`,
      (i) => `Spring repair costs in ${i.name} vary by damage extent. Retensioning existing springs costs ₹2,000–₹3,000; replacing broken sinuous springs runs ₹2,500–₹4,000; a full spring system rebuild costs ₹5,000–₹8,000. All prices include labour, parts, and the 6-month warranty.`,
      (i) => `FurniRevive charges ₹2,000–₹7,000 for sofa spring repair in ${i.name} depending on the number of broken or worn springs and the repair method. The doorstep inspection is free and the price quote is binding — you'll never pay more than agreed.`,
    ],
  },

  // ── FRAME_REPAIR ─────────────────────────────────────────────────────────
  {
    intentGroup: "frame_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isHighRise"],
    question: (i) => `Can you fix a wobbly or broken sofa frame in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive performs sofa frame repair in ${i.name} at your doorstep. We tighten loose joints, replace cracked wooden slats, re-glue corner blocks, and reinforce the base structure. Frame repairs start at ₹1,500 and are usually completed in 1–3 hours in your living room.`,
      (i) => `Wobbly sofa frames in ${i.name} are typically caused by loose corner joints or cracked base slats. FurniRevive's technician sands, reglues, and re-bolts joints as needed, and adds bracket reinforcements to prevent repeat failure. The job is done at your home — no need to send the sofa to a workshop.`,
      (i) => `Sofa frame repair in ${i.name} by FurniRevive covers joint tightening, slat replacement, corner bracket fitting, and base reinforcement. A wobbly sofa becomes stable and safe again in one visit. Prices start at ₹1,500 with the free inspection confirming exact repair scope.`,
    ],
  },
  {
    intentGroup: "frame_repair",
    baseScore: 0.8,
    signals: ["isDDA", "isFamilyResidential"],
    question: (i) => `How long does a sofa frame repair take in ${i.name}?`,
    answers: [
      (i) => `A typical sofa frame repair in ${i.name} takes 1–3 hours depending on the damage. Loose joint tightening is the quickest — under an hour. Replacing broken slats and adding corner brackets takes 2–3 hours. Complex frame rebuilds may need two visits if custom parts are required.`,
      (i) => `Most frame repairs in ${i.name} are completed in a single 2–3 hour visit. Our technicians carry standard slat stock and bracket hardware for on-site repairs without special orders. If a non-standard part is needed, we source it and return within 48 hours.`,
      (i) => `FurniRevive completes straightforward sofa frame repair in ${i.name} in 1–2 hours. More complex structural rebuilds — where multiple joints are compromised — take 3–4 hours. All work is done at your home with no disruption to the sofa fabric or upholstery unless you request it.`,
    ],
  },

  // ── UPHOLSTERY ───────────────────────────────────────────────────────────
  {
    intentGroup: "upholstery",
    baseScore: 1,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `Do you offer full sofa upholstery replacement in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive provides complete sofa upholstery replacement in ${i.name} at your doorstep. We carry 500+ fabric swatches including velvet, chenille, linen, leatherette, and rexine. The old cover is removed, new foam is fitted if needed, and fresh fabric is applied — all in one visit. Full upholstery for a 3-seater starts at ₹6,000.`,
      (i) => `Full upholstery replacement in ${i.name} by FurniRevive transforms an old sofa completely. Our technician brings fabric samples to your home, you choose from 500+ options, and the work is done on-site. Prices start at ₹6,000 for a 3-seater and ₹14,000 for a full 3+1+1 set including foam.`,
      (i) => `FurniRevive's upholstery service in ${i.name} covers full fabric replacement, partial re-covering, and arm/back panel replacement. We do the work at your home — no transport, no wait. Upholstery fabric options include standard, premium, and designer grades with prices quoted after the free inspection.`,
    ],
  },
  {
    intentGroup: "upholstery",
    baseScore: 1.2,
    signals: ["hasLuxuryFurniture", "isPremium"],
    question: (i) => `Can you reupholster imported or designer sofas in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive has experience with imported Italian, Turkish, and European sofas in ${i.name}. We work with premium fabrics and leatherettes that match original finishes, and our senior technicians handle complex frame shapes and tufting patterns carefully. Contact us with photos of your sofa for a specialist assessment.`,
      (i) => `Imported and designer sofa reupholstery in ${i.name} is handled by FurniRevive's senior craftsmen. We inspect the frame construction, identify the original fabric type, and source a matching or upgraded replacement. Our team has restored high-end sofas from brands like Natuzzi, Ashley, and custom Italian pieces.`,
      (i) => `FurniRevive reupholsters premium and imported sofas in ${i.name} with care. We carry high-grade Italian-style fabrics, genuine leather, and premium leatherettes. For rare or complex designs, we request photos in advance to ensure we bring the right materials for a single-visit restoration.`,
    ],
  },
  {
    intentGroup: "upholstery",
    baseScore: 0.8,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `How much does sofa upholstery cost in ${i.name}?`,
    answers: [
      (i) => `Sofa upholstery cost in ${i.name} starts at ₹3,000 for a single-seater and ₹6,000 for a 3-seater in standard fabric. Full 3+1+1 set reupholstery costs ₹14,000–₹22,000 with new foam included. Premium and velvet fabrics add ₹2,000–₹5,000. The free inspection confirms the final price before work begins.`,
      (i) => `Re-upholstery prices in ${i.name} depend on fabric choice and sofa size. Standard fabric upholstery: ₹6,000–₹12,000 for a 3-seater. Velvet or chenille: ₹9,000–₹16,000. Leatherette: ₹8,000–₹14,000. All prices include labour, foam if needed, and a 6-month warranty.`,
      (i) => `The cost of sofa upholstery in ${i.name} ranges from ₹3,000 for partial jobs to ₹22,000 for a complete 5-seater set restoration. FurniRevive brings over 500 fabric samples to your home — you choose the grade and colour, and we quote a fixed price on the spot. No hidden charges.`,
    ],
  },

  // ── LEATHER_REPAIR ───────────────────────────────────────────────────────
  {
    intentGroup: "leather_repair",
    baseScore: 1,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `Do you repair leather sofas near me in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive provides leather sofa repair near me in ${i.name} including crack filling, colour restoration, deep conditioning, and panel replacement. We work with genuine leather, semi-aniline leather, and PU/leatherette. Prices start at ₹1,500 for minor crack repair and ₹4,000 for full colour restoration.`,
      (i) => `Leather sofa repair in ${i.name} is available at your doorstep from FurniRevive. Whether it's peeling leatherette, cracked genuine leather, faded colour, or deep scratches, our craftsmen restore the surface on-site. Leather repair starts at ₹1,500 with a free inspection to assess the exact damage.`,
      (i) => `FurniRevive's leather sofa repair service in ${i.name} covers crack sealing, leather bonding, colour-matched dye application, and panel reupholstery. We distinguish between genuine leather, semi-aniline, and PU leatherette to apply the right restoration technique. Call 92179 99355 to book a free leather assessment.`,
    ],
  },
  {
    intentGroup: "leather_repair",
    baseScore: 1.2,
    signals: ["hasLuxuryFurniture"],
    question: (i) => `My leather sofa is peeling badly in ${i.name}. Can it be restored?`,
    answers: [
      (i) => `Peeling leather or leatherette is very common in ${i.name} due to humidity and UV exposure. If it is genuine leather, FurniRevive applies a colour-matched leather conditioner and filler to stop peeling and restore the surface. If it's PU leatherette, full panel reupholstery is the most durable solution. We assess the exact type during the free inspection.`,
      (i) => `Severely peeling leather sofas in ${i.name} can be restored through reupholstery — replacing the outer cover with fresh leatherette or genuine leather while keeping the original frame and foam. This typically costs ₹8,000–₹18,000 for a 3-seater and is much cheaper than buying a new sofa. WhatsApp us photos for a quick estimate.`,
      (i) => `FurniRevive can restore peeling sofas in ${i.name} through leather bonding (for minor peeling) or full panel replacement (for widespread peeling). We carry colour-matched leather dyes and premium-grade leatherette in 50+ shades. Send us photos via WhatsApp +91 92179 99355 and our technician will advise the best restoration option.`,
    ],
  },
  {
    intentGroup: "leather_repair",
    baseScore: 0.9,
    signals: ["isPremium"],
    question: (i) => `Do you offer leather sofa colour restoration in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive offers leather colour restoration in ${i.name}. We use professional-grade leather dyes that are colour-matched to your sofa and applied in multiple coats for a durable, natural finish. Colour restoration starts at ₹2,500 and can dramatically improve a faded or sun-damaged leather sofa.`,
      (i) => `Leather colour restoration in ${i.name} is available from FurniRevive for genuine leather and semi-aniline sofas. We clean the surface, apply a colour filler to cracks, then build up colour with flexible leather dyes in 2–3 coats. The result is a refreshed finish that's close to the original showroom look.`,
      (i) => `FurniRevive's leather restoration service in ${i.name} covers fading, discolouration, and uneven tones caused by sunlight and cleaning. We carry over 40 standard leather dye shades and can mix custom colours. Prices start at ₹2,500 with a free inspection to confirm the leather type and condition.`,
    ],
  },

  // ── FABRIC_REPAIR ────────────────────────────────────────────────────────
  {
    intentGroup: "fabric_repair",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Can you repair torn or damaged sofa fabric in ${i.name}?`,
    answers: [
      (i) => `Yes — torn and worn fabric sofas are among the most common repairs FurniRevive handles in ${i.name}. We do colour-matched fabric patching for small tears and full re-upholstery for widespread damage. Fabric repair starts at ₹1,000 for minor stitching and ₹3,000 for partial panel replacement.`,
      (i) => `FurniRevive repairs torn sofa fabric in ${i.name} using colour-matched patches for localised damage or full fabric replacement for extensive wear. We carry chenille, linen, velvet, and other common sofa fabric types. The technician assesses the damage during the free inspection and suggests the most cost-effective fix.`,
      (i) => `Torn sofa fabric in ${i.name} can be fixed through professional stitching, patch application, or full panel re-upholstery depending on damage extent. FurniRevive handles all three — prices start at ₹1,000 for a small tear repair and go up to ₹12,000 for a 3-seater full fabric replacement.`,
    ],
  },
  {
    intentGroup: "fabric_repair",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `Can you repair pet-damaged sofa fabric in ${i.name}?`,
    answers: [
      (i) => `Yes — pet damage is one of the most common sofa repair requests in ${i.name}. FurniRevive repairs claw marks, scratch damage, and chewed fabric using colour-matched patches or full re-upholstery. We also offer pet-resistant fabric upgrades (tightly woven chenille or microfibre) that resist future claw damage.`,
      (i) => `FurniRevive specialises in pet-damaged sofa repairs in ${i.name}. Claw tear repairs start at ₹1,500 for patching and ₹4,000 for panel replacement. We carry pet-friendly fabric options — including stain-resistant and claw-resistant weaves — so you can prevent the same damage from recurring.`,
      (i) => `Pet claw damage and scratches on sofas in ${i.name} are easily repaired by FurniRevive. For light scratches, we blend in colour-matched dye or fabric filler. For torn panels, we replace just the damaged section — keeping costs low. We also recommend durable replacement fabrics that withstand claw contact better than standard weaves.`,
    ],
  },

  // ── RECLINER_REPAIR ──────────────────────────────────────────────────────
  {
    intentGroup: "recliner_repair",
    baseScore: 1,
    signals: ["isPremium", "isOffice", "isHighRise"],
    question: (i) => `Do you repair recliners near me in ${i.name}?`,
    answers: [
      (i) => `Yes — recliner repair near me in ${i.name} is available from FurniRevive at your doorstep. We service manual recliners (handle/spring mechanism), motorised recliners (motor and remote), and massage recliners (motor, heat element, and remote). Recliner mechanism repair starts at ₹1,499.`,
      (i) => `FurniRevive provides doorstep recliner repair in ${i.name} for all brands and types. Whether the handle is stiff, the motor is silent, the footrest won't retract, or the recliner is stuck in one position, our technician diagnoses and fixes the issue on-site. Prices start at ₹1,499 for manual mechanism work.`,
      (i) => `Recliner repair in ${i.name} by FurniRevive covers the full mechanism: recliner handle, release cable, tilt springs, footrest linkage, motor, and remote control. All work is done at your home. Manual recliner repair starts at ₹1,499; motorised recliner repair starts at ₹2,499.`,
    ],
  },
  {
    intentGroup: "recliner_repair",
    baseScore: 1,
    signals: ["isPremium", "isOffice"],
    question: (i) => `My recliner sofa is stuck and won't close in ${i.name}. What should I do?`,
    answers: [
      (i) => `A stuck recliner in ${i.name} is usually caused by a broken release cable, bent linkage, or jammed footrest spring. Do not force it — you can bend the mechanism further. Call FurniRevive at 92179 99355 for a same-day recliner repair in ${i.name}. Our technician diagnoses and usually fixes it in 1–2 hours.`,
      (i) => `A recliner stuck in the open position in ${i.name} typically means the cable or tilt spring has failed. FurniRevive repairs this at your home — we carry common cable lengths and replacement spring sets for major brands. Call 92179 99355 to book a same-day recliner repair and our technician will reach you within ${i.responseTime}.`,
      (i) => `If your recliner won't close in ${i.name}, the footrest linkage or release spring is likely broken. FurniRevive's recliner technicians cover all brands — La-Z-Boy, Durian, HomeTown, and Chinese-brand sofas. WhatsApp a photo of the stuck mechanism to +91 92179 99355 for a quick pre-visit diagnosis.`,
    ],
  },
  {
    intentGroup: "recliner_repair",
    baseScore: 0.9,
    signals: ["isPremium"],
    question: (i) => `Do you repair motorised and massage recliners in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive repairs motorised and massage recliners in ${i.name}. We diagnose motor faults, remote control issues, USB charging port failures, heat element problems, and wiring faults. Motorised recliner repair starts at ₹2,499 and massage mechanism repair at ₹2,999.`,
      (i) => `Motorised recliner repair in ${i.name} is a specialist service FurniRevive provides at your doorstep. Whether the motor is silent, slow, or making noise, our technician tests the motor, wiring, and remote. We carry replacement motors for common brands and can typically complete the repair in one visit.`,
      (i) => `FurniRevive's recliner repair service in ${i.name} covers both manual and motorised models. For massage recliners, we repair vibration motors, heating elements, and remote control faults. We service all major brands. Call 92179 99355 for a same-day motorised recliner technician in ${i.name}.`,
    ],
  },

  // ── SOFA_CUM_BED ─────────────────────────────────────────────────────────
  {
    intentGroup: "sofa_cum_bed",
    baseScore: 1,
    signals: ["isFamilyResidential", "isDDA"],
    question: (i) => `Do you repair sofa cum beds in ${i.name}?`,
    answers: [
      (i) => `Yes — sofa cum bed repair in ${i.name} is one of FurniRevive's regular services. We fix pull-out mechanisms, replace broken hinges and latches, repair foam on both sofa and bed sides, and re-upholster the entire unit. Sofa cum bed repair starts at ₹1,500 for mechanism work.`,
      (i) => `FurniRevive repairs sofa cum beds at your doorstep in ${i.name}. Common issues we fix include: stuck pull-out mechanism, broken centre hinge, sunken sleeping foam, and torn fabric on the fold-out section. Prices start at ₹1,500 with a free inspection to assess all components.`,
      (i) => `Sofa cum bed repair in ${i.name} covers the full unit — mechanism, hinges, foam, and fabric. FurniRevive technicians are experienced with single-fold, bi-fold, and pull-out click-clack mechanisms. Mechanism repair starts at ₹1,500; full foam and upholstery restoration for both sofa and bed sides starts at ₹6,000.`,
    ],
  },
  {
    intentGroup: "sofa_cum_bed",
    baseScore: 0.8,
    signals: ["isFamilyResidential"],
    question: (i) => `My sofa cum bed mechanism is broken in ${i.name}. Can you fix it?`,
    answers: [
      (i) => `Yes — a broken sofa cum bed mechanism in ${i.name} is typically caused by a snapped hinge pin, bent frame rail, or a worn locking latch. FurniRevive repairs all three — we carry common spare parts and custom-cut replacements. Mechanism repair costs ₹1,500–₹3,500 and is done in under 2 hours.`,
      (i) => `Sofa cum bed mechanism repair in ${i.name} by FurniRevive covers stuck hinges, broken click-clack latches, bent pull-out rails, and misaligned frames. Our technician diagnoses the fault during the free inspection and repairs it on-site. Most mechanism repairs are completed in 1–2 hours.`,
      (i) => `A stuck or broken sofa cum bed mechanism in ${i.name} is fixable in most cases without replacing the entire unit. FurniRevive repairs hinge pins, locking arms, and slide rails at your home. Call 92179 99355 for a same-day sofa cum bed repair technician in ${i.name}.`,
    ],
  },

  // ── WOODEN_REPAIR ────────────────────────────────────────────────────────
  {
    intentGroup: "wooden_repair",
    baseScore: 0.9,
    signals: ["isPremium", "isDDA"],
    question: (i) => `Do you repair wooden sofas in ${i.name}?`,
    answers: [
      (i) => `Yes — wooden sofa repair in ${i.name} is available from FurniRevive at your doorstep. We repair loose joints, cracked wooden arms, broken legs, and sagging bases. We also refinish and polish wooden surfaces to restore their original look. Wooden sofa repair starts at ₹1,500.`,
      (i) => `FurniRevive repairs wooden sofas in ${i.name} including sheesham, teak, mango wood, and engineered wood frames. Common repairs include joint re-gluing, screw tightening, broken arm replacement, and leg repair. All work is done at your home — no need to send the sofa to a carpenter's workshop.`,
      (i) => `Wooden sofa repair in ${i.name} by FurniRevive covers structural and cosmetic issues. We fix cracked wood, loose joints, broken legs, and sagging bases. We also re-upholster the cushion section and restore the wooden frame finish in the same visit. Prices start at ₹1,500 for basic structural repair.`,
    ],
  },
  {
    intentGroup: "wooden_repair",
    baseScore: 0.8,
    signals: ["isPremium"],
    question: (i) => `Can you repair antique or heritage wooden sofas in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive handles antique and heritage wooden sofa restoration in ${i.name}. Our senior craftsmen are experienced with period joinery — mortise-and-tenon joints, period upholstery tacks, and traditional frame construction. We restore the structure while preserving the original design and finish wherever possible.`,
      (i) => `Antique wooden sofa restoration in ${i.name} is a specialist service FurniRevive offers. We assess the wood type and original construction, repair or replicate damaged joinery, and re-upholster with period-appropriate fabrics if required. Contact us with photos for a specialist assessment before booking.`,
      (i) => `FurniRevive has experience restoring older and heritage wooden sofas in ${i.name}. Whether it is a family heirloom or a vintage design piece, our craftsmen approach the repair conservatively — stabilising the frame and re-upholstering without altering the original silhouette. WhatsApp photos to +91 92179 99355 for an assessment.`,
    ],
  },

  // ── APARTMENT_SERVICE ────────────────────────────────────────────────────
  {
    intentGroup: "apartment_service",
    baseScore: 1,
    signals: ["isHighRise"],
    question: (i) => `Do you service apartments and high-rise societies in ${i.name}?`,
    answers: [
      (i) => `Yes — apartment and high-rise society sofa repair in ${i.name} is FurniRevive's core service. Our technicians carry compact kits that fit in lifts and work entirely within your flat. We're familiar with society security procedures and carry identification for gate entry. Same-day service available for bookings before noon.`,
      (i) => `FurniRevive regularly services apartments in ${i.name}. Our technicians are trained to work in flat environments — no excessive noise, no mess, no wide tools that can't navigate corridors or lifts. All repair materials are brought in a single compact carry bag. Just let security know we're expected and we handle the rest.`,
      (i) => `Sofa repair in high-rise apartments in ${i.name} is straightforward with FurniRevive. We work fully within your living room — the sofa never leaves the flat. Our technician follows your building's security sign-in process and completes the job cleanly. Book before noon for same-day service.`,
    ],
  },
  {
    intentGroup: "apartment_service",
    baseScore: 0.8,
    signals: ["isHighRise"],
    question: (i) => `Can you repair a sofa on the 15th floor of a tower in ${i.name}?`,
    answers: [
      (i) => `Absolutely — FurniRevive repairs sofas on any floor in ${i.name}. Our technicians carry all tools and materials in a compact bag that fits in standard flat lifts. No large equipment is needed for most sofa repairs. We operate in towers, penthouses, and basement-level apartments equally.`,
      (i) => `Floor level is no issue for sofa repair in ${i.name}. FurniRevive's technicians carry lightweight kit bags and work inside your flat entirely. Whether you're on the 3rd floor or the 30th, the service is identical — the sofa stays in place and the repair is done at home.`,
      (i) => `Our sofa repair service in ${i.name} covers every floor level without additional charges. Foam, fabric, springs, and tools are all carried in compact bags. The technician uses your building's lift and security entry. Repair is completed inside your flat — no need to bring the sofa down.`,
    ],
  },

  // ── OFFICE_REPAIR ────────────────────────────────────────────────────────
  {
    intentGroup: "office_repair",
    baseScore: 1,
    signals: ["isOffice"],
    question: (i) => `Do you repair office sofas and reception furniture in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive provides office sofa repair in ${i.name} for reception areas, lounges, cabin sofas, and conference room seating. We work during business hours or evenings to avoid disrupting operations. Office repair rates are the same as residential — starting at ₹999.`,
      (i) => `FurniRevive's office sofa repair service in ${i.name} covers reception leather sofas, lounge fabric seating, and boardroom upholstery. Our technicians work discreetly and quickly — most office sofa repairs are completed in 1–2 hours without disrupting regular business activity.`,
      (i) => `Office and commercial sofa repair in ${i.name} is available from FurniRevive seven days a week, including early-morning and after-hours slots. We handle reception couches, waiting area sofas, and cabin recliners. Priority slots are available for urgent repairs — call 92179 99355 to arrange.`,
    ],
  },
  {
    intentGroup: "office_repair",
    baseScore: 0.9,
    signals: ["isOffice"],
    question: (i) => `Can you repair multiple office sofas in one visit in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive handles bulk office sofa repairs in ${i.name} in a single visit. For 5 or more units, we send a two-technician team to complete the work efficiently. Volume pricing is available for offices needing recurring maintenance. Call 92179 99355 to discuss your office's requirements.`,
      (i) => `For offices with multiple sofas in ${i.name}, FurniRevive offers scheduled bulk repair visits. A two-person team can typically handle 8–10 sofas per day. We work around your office schedule — early morning, lunch hours, or after closing. Contact us for a site visit and volume quote.`,
      (i) => `FurniRevive provides commercial sofa repair programmes for offices in ${i.name}. We assess all seating, prioritise urgent repairs, and provide a phased quote for budgeting. Multi-unit jobs receive volume pricing and a single-invoice arrangement for easy procurement.`,
    ],
  },

  // ── COMMERCIAL ───────────────────────────────────────────────────────────
  {
    intentGroup: "commercial",
    baseScore: 0.8,
    signals: ["isOffice"],
    question: (i) => `Do you repair sofas for restaurants and hotels in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive provides commercial sofa repair for restaurants, cafés, hotels, and co-working spaces in ${i.name}. We handle high-use commercial upholstery that wears faster than residential pieces. We work during off-peak hours to minimise business disruption.`,
      (i) => `Commercial furniture repair in ${i.name} is a specialist offering from FurniRevive. We restore restaurant booth seating, hotel lobby sofas, café bench upholstery, and co-working lounge furniture. Our commercial-grade fabrics and leatherettes are more durable than residential options and come with appropriate cleaning recommendations.`,
      (i) => `FurniRevive repairs commercial sofas and seating in ${i.name} for restaurants, hotels, and hospitality businesses. We use commercial-grade upholstery materials that resist heavy use and are easy to clean. Call 92179 99355 to arrange an after-hours commercial repair visit.`,
    ],
  },
  {
    intentGroup: "commercial",
    baseScore: 0.7,
    signals: ["isOffice"],
    question: (i) => `Do you offer bulk sofa repair contracts for businesses in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive offers annual maintenance contracts (AMC) for businesses in ${i.name} covering regular sofa inspection, foam replacement, fabric touch-ups, and mechanism service. AMC pricing is available for offices, hotels, and co-working spaces with 10 or more units. Call 92179 99355 for a custom quote.`,
      (i) => `Business sofa maintenance contracts in ${i.name} are available from FurniRevive. We offer quarterly inspection and repair visits for offices, hotels, and retail spaces — keeping all seating in optimal condition year-round. Volume pricing reduces per-unit costs significantly compared to ad-hoc repairs.`,
      (i) => `FurniRevive provides commercial sofa maintenance programmes for businesses in ${i.name}. Our contracts include scheduled inspections, priority same-day emergency repair slots, and end-of-year reports on furniture condition. Contact us for pricing based on your fleet size.`,
    ],
  },

  // ── BOOKING_PROCESS ──────────────────────────────────────────────────────
  {
    intentGroup: "booking_process",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `How do I book sofa repair in ${i.name}?`,
    answers: [
      (i) => `Booking sofa repair in ${i.name} with FurniRevive takes 2 minutes. Call 92179 99355 or WhatsApp +91 92179 99355 with your address and a description of the sofa problem. We'll confirm a same-day or next-morning slot. The technician arrives for a free inspection and completes the repair in one visit upon your approval.`,
      (i) => `To book a sofa repair in ${i.name}, WhatsApp a photo of the damage to +91 92179 99355. Our team reviews the photo, estimates the repair type, and confirms an appointment slot — usually the same day. Alternatively, call 92179 99355 directly for the fastest confirmation.`,
      (i) => `Booking FurniRevive for sofa repair in ${i.name} is simple: call 92179 99355, tell us your locality within ${i.name}, and describe the sofa issue. We'll confirm the nearest available slot, which is often the same day. The inspection is free and no payment is needed until you approve the repair quote.`,
    ],
  },
  {
    intentGroup: "booking_process",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `Do I need to move my sofa to get it repaired in ${i.name}?`,
    answers: [
      (i) => `No — FurniRevive's doorstep sofa repair service in ${i.name} means your sofa stays exactly where it is. Our technician brings all foam, fabric, tools, and spare parts to your home. The entire repair is done in your living room — no transport, no workshop, no waiting weeks for your sofa to return.`,
      (i) => `You never need to move your sofa for repair in ${i.name}. FurniRevive comes to you — with foam, fabric swatches, spring stock, and tools. We work in-flat and leave your home tidy. The only thing that moves is the technician's equipment bag, not your sofa.`,
      (i) => `Your sofa stays in your home throughout the entire repair in ${i.name}. FurniRevive provides fully doorstep service — the technician arrives with a self-contained kit and completes foam replacement, re-upholstery, spring repair, or frame work right in your living room. No loading, no transport, no risk of damage in transit.`,
    ],
  },

  // ── WHATSAPP_BOOKING ─────────────────────────────────────────────────────
  {
    intentGroup: "whatsapp_booking",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `Can I book sofa repair via WhatsApp in ${i.name}?`,
    answers: [
      (i) => `Yes — WhatsApp booking is the most popular way to book sofa repair in ${i.name}. Send a photo of your sofa damage to +91 92179 99355, tell us your address in ${i.name}, and we'll confirm a time slot in minutes. No app download required — just your regular WhatsApp.`,
      (i) => `WhatsApp FurniRevive at +91 92179 99355 to book sofa repair near you in ${i.name}. Our team reviews photos quickly and can confirm same-day availability without a phone call. Share your sofa issue, preferred time, and society/building name for the fastest confirmation.`,
      (i) => `For sofa repair in ${i.name}, WhatsApp is the fastest booking method. Send photos to +91 92179 99355 — our team responds in minutes with a slot confirmation. You'll also receive the technician's contact number before the visit so you can coordinate entry with your building security.`,
    ],
  },
  {
    intentGroup: "whatsapp_booking",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `What information do I need to share when booking by WhatsApp in ${i.name}?`,
    answers: [
      (i) => `When booking sofa repair in ${i.name} via WhatsApp, share: 1) a photo of the damage, 2) your society/street name in ${i.name}, 3) sofa type (fabric/leather/recliner), and 4) your preferred time. That's all — we'll confirm the slot and send you the technician's contact number.`,
      (i) => `To book via WhatsApp (+91 92179 99355) for sofa repair in ${i.name}, simply send a photo of the sofa, your approximate location within ${i.name}, and a brief description of the problem. We'll confirm availability and share the technician's estimated arrival time.`,
      (i) => `For a WhatsApp sofa repair booking in ${i.name}, message +91 92179 99355 with: a close-up photo of the damage, your building/society name, and your preferred slot (morning/afternoon/evening). Our team will confirm within minutes. No lengthy forms or prior quotations needed.`,
    ],
  },

  // ── SERVICE_AREAS ────────────────────────────────────────────────────────
  {
    intentGroup: "service_areas",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `Which areas near ${i.name} do you service?`,
    answers: [
      (i) => `FurniRevive services ${i.name} and all surrounding areas in ${i.city}. We cover a 5–8 km radius from your location with no area surcharge. Adjacent sectors, neighbouring colonies, and nearby townships are all covered under the same price structure.`,
      (i) => `Our sofa repair service covers ${i.name} and nearby localities throughout ${i.city}. There are no extra charges for adjacent areas — if you're within our ${i.city} service zone, standard rates apply. Call 92179 99355 to confirm coverage for a specific address.`,
      (i) => `FurniRevive covers ${i.name} and the surrounding ${i.city} areas under a single, consistent pricing structure. Our technicians don't charge extra for travelling between sectors or neighbouring colonies. Confirm your specific address by calling 92179 99355 or WhatsApp-ing +91 92179 99355.`,
    ],
  },
  {
    intentGroup: "service_areas",
    baseScore: 1,
    signals: "always",
    question: (i) => `Do you charge extra for coming to ${i.name} vs. other areas?`,
    answers: [
      (i) => `No — FurniRevive does not charge a location surcharge for ${i.name} or any area within ${i.city}. Repair prices are fixed based on work done, not where you live. The free inspection is also free of call-out charges.`,
      (i) => `There are no area-based surcharges for sofa repair in ${i.name}. FurniRevive charges the same rates across all localities in ${i.city} — no premium for distance, no weekend markups, no hidden travel fees. The price you're quoted is the price you pay.`,
      (i) => `FurniRevive's sofa repair pricing in ${i.name} is area-neutral. We don't apply location premiums to any ${i.city} address — whether you're in a central locality or a newer sector on the outskirts. Fixed, transparent pricing is standard across all our service areas.`,
    ],
  },
  {
    intentGroup: "service_areas",
    baseScore: 0.9,
    signals: "always",
    question: (i) => `Do you cover all of ${i.city} for sofa repair?`,
    answers: [
      (i) => `FurniRevive covers all of ${i.city} for sofa repair — including ${i.name} and every sector, colony, and township in the city. Our technicians are distributed across the city so no area waits excessively long. Call 92179 99355 to confirm availability for your specific address.`,
      (i) => `Yes — our sofa repair service covers all of ${i.city} with technicians stationed strategically to minimise response times. From central localities to outer sectors, every address in ${i.city} including ${i.name} gets the same standard of service and pricing.`,
      (i) => `FurniRevive provides complete coverage across ${i.city} — no locality is out of our service area. Whether you are in ${i.name} or a neighbouring area, our technician reaches you with the same ${i.responseTime} response time and at the same rates.`,
    ],
  },

  // ── TECHNICIAN_VISIT ─────────────────────────────────────────────────────
  {
    intentGroup: "technician_visit",
    baseScore: 1,
    signals: ["isHighRise", "isOffice"],
    question: (i) => `What happens during the sofa technician's visit in ${i.name}?`,
    answers: [
      (i) => `During a FurniRevive technician visit in ${i.name}, the technician arrives with foam samples, fabric swatches, spring stock, and tools. First, a free inspection is done: every component is checked — foam, springs, frame, fabric, and mechanism (recliners). A transparent, itemised quote is presented. If you approve, repair begins immediately. Most repairs are completed in the same 2–4 hour visit.`,
      (i) => `A FurniRevive technician visit in ${i.name} follows a consistent process: arrival with full equipment, free sofa inspection, presentation of a fixed quote, and — upon approval — immediate repair. The technician cleans up before leaving. You receive a 6-month warranty card on completion.`,
      (i) => `When FurniRevive visits your home in ${i.name}, the technician: 1) inspects the sofa thoroughly, 2) explains the diagnosis in plain language, 3) presents a fixed itemised quote, 4) starts work upon your approval, and 5) cleans up on completion. No pressure, no surprise costs, no second visit needed for most repairs.`,
    ],
  },
  {
    intentGroup: "technician_visit",
    baseScore: 0.8,
    signals: ["isHighRise"],
    question: (i) => `Are your technicians background-verified in ${i.name}?`,
    answers: [
      (i) => `Yes — all FurniRevive technicians serving ${i.name} are background-verified and carry company ID cards. You can request to see the technician's ID on arrival. We also send the technician's name and photo via WhatsApp before the visit so you know exactly who to expect.`,
      (i) => `FurniRevive verifies the background of all technicians before they enter customer homes in ${i.name}. Every technician carries a company-issued photo ID. For society buildings, we provide the technician's details in advance for gate registration.`,
      (i) => `All our sofa repair technicians in ${i.name} are trained, uniformed, and background-checked. We share the technician's name and contact number with you before the visit. For added security, our office can confirm the technician's details via call if you have any concerns.`,
    ],
  },

  // ── REPAIR_VS_REPLACE ────────────────────────────────────────────────────
  {
    intentGroup: "repair_vs_replace",
    baseScore: 1.2,
    signals: "always",
    question: (i) => `How do I know if my sofa is worth repairing or should be replaced in ${i.name}?`,
    answers: [
      (i) => `The key factor for sofa repair vs. replacement in ${i.name} is the frame condition. If the hardwood or engineered wood frame is structurally sound, repair is almost always worth it — even if foam, springs, and fabric need replacing. FurniRevive's free inspection assesses the frame first. If the frame is beyond repair, we tell you honestly.`,
      (i) => `For sofa owners in ${i.name}, the repair-vs-replace decision comes down to frame quality and budget. A solid frame can be fully restored — new foam, springs, and fabric — for ₹12,000–₹22,000, saving 60–70% over a new sofa. FurniRevive's free inspection gives you an honest assessment with no sales pressure to repair.`,
      (i) => `FurniRevive technicians in ${i.name} give honest repair-vs-replace guidance during the free inspection. A sofa with a strong frame is almost always worth repairing. A sofa with a badly warped or termite-damaged frame may not hold future repairs — in that case, we'll advise replacement rather than take your money on a repair that won't last.`,
    ],
  },
  {
    intentGroup: "repair_vs_replace",
    baseScore: 1,
    signals: "always",
    question: (i) => `My sofa is 10 years old in ${i.name}. Is it still worth repairing?`,
    answers: [
      (i) => `A 10-year-old sofa in ${i.name} is often very worth repairing — quality hardwood and metal frames last 20–30 years. The components that typically fail — foam, springs, fabric — are all replaceable. A full restoration typically costs ₹12,000–₹22,000 and the result feels like a new sofa without the disruption of buying one.`,
      (i) => `Age alone is not a reason to replace a sofa in ${i.name}. A 10-year-old quality sofa with a sound frame can be fully restored — new foam, springs, and fabric — for 30–40% of the replacement cost. FurniRevive's free inspection confirms whether the frame is good before any work begins.`,
      (i) => `FurniRevive regularly restores 10–15 year old sofas in ${i.name} to like-new condition. Older sofas often have better-quality frames than newer budget pieces. If the frame is solid, a full restoration — foam, springs, fabric — is cost-effective and gives you another 8–12 years of life from the same sofa.`,
    ],
  },

  // ── FURNITURE_CARE ───────────────────────────────────────────────────────
  {
    intentGroup: "furniture_care",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `How can I make my repaired sofa last longer in ${i.name}?`,
    answers: [
      (i) => `After sofa repair in ${i.name}, FurniRevive recommends: vacuum cushions weekly, rotate seat cushions every 2–3 months, avoid sitting on armrests, and keep the sofa out of direct sunlight. For fabric sofas, use a fabric protector spray every 6 months. For leather, apply leather conditioner quarterly to prevent cracking.`,
      (i) => `To extend your sofa's life after repair in ${i.name}: avoid prolonged sunlight exposure which fades fabric and dries leather; use sofa covers if you have pets; clean spills immediately with a dry cloth; and don't jump on or overload the seating area beyond its design weight. Following these habits can double your sofa's post-repair lifespan.`,
      (i) => `Post-repair sofa care in ${i.name} is simple: vacuum weekly, rotate cushions monthly, keep pets from scratching the sides, and wipe spills immediately. FurniRevive's warranty covers manufacturing defects, but following basic care guidelines ensures the repair lasts its full potential lifespan of 8–12 years.`,
    ],
  },
  {
    intentGroup: "furniture_care",
    baseScore: 0.6,
    signals: ["isPremium", "hasLuxuryFurniture"],
    question: (i) => `How do I clean and maintain a leather sofa in ${i.name}?`,
    answers: [
      (i) => `To maintain a leather sofa in ${i.name}: dust weekly with a dry microfibre cloth, clean spills immediately with a slightly damp cloth (no soaking), apply a leather conditioner every 3–4 months to prevent cracking, and keep the sofa away from heating vents and direct sunlight. For deep cleaning, use a pH-neutral leather cleaner — avoid household detergents.`,
      (i) => `Leather sofa maintenance in ${i.name} requires consistent light care. Wipe down with a dry cloth weekly; condition with a leather cream quarterly. Avoid direct sunlight which dries and cracks leather, and don't use harsh cleaning products. For minor scratches, leather conditioner rubbed in circular motions often reduces visibility significantly.`,
      (i) => `For leather sofas in ${i.name}: clean monthly with a dedicated leather soap; apply leather conditioner every 3 months; use arm covers in high-friction zones; and have a professional restoration done every 2–3 years to maintain colour and suppleness. FurniRevive can provide a leather maintenance service alongside any repair visit.`,
    ],
  },

  // ── AFTER_SERVICE ────────────────────────────────────────────────────────
  {
    intentGroup: "after_service",
    baseScore: 0.8,
    signals: "always",
    question: (i) => `What if I'm not satisfied with the sofa repair in ${i.name}?`,
    answers: [
      (i) => `FurniRevive stands behind every repair in ${i.name} with a 6-month written warranty. If you are not satisfied with the work or the same issue recurs within the warranty period, we return and fix it free of charge. Call 92179 99355 or WhatsApp to raise a warranty claim — we respond and schedule a return visit within 48 hours.`,
      (i) => `If the sofa repair in ${i.name} doesn't meet your expectations, contact us within 6 months and we'll arrange a free return visit to address your concerns. Our goal is to leave every customer in ${i.name} fully satisfied — we treat warranty requests as a priority, not a burden.`,
      (i) => `Post-repair concerns in ${i.name} are covered under FurniRevive's 6-month warranty. If the work quality is unsatisfactory or the repair fails, WhatsApp +91 92179 99355 with a description and photos. We'll schedule a return visit within 48 hours at zero cost. Customer satisfaction is the basis of our local reputation.`,
    ],
  },
  {
    intentGroup: "after_service",
    baseScore: 0.7,
    signals: "always",
    question: (i) => `Do you provide a receipt or warranty card after sofa repair in ${i.name}?`,
    answers: [
      (i) => `Yes — FurniRevive provides a written warranty card and digital receipt after every sofa repair in ${i.name}. The warranty card specifies the work done, materials used, and the 6-month coverage period. The digital receipt is sent via WhatsApp for easy reference if you need to raise a warranty claim.`,
      (i) => `After sofa repair in ${i.name}, FurniRevive sends a digital invoice via WhatsApp and issues a written 6-month warranty for the specific repair work completed. Keep the warranty document for reference — it's your proof of coverage if a warranty claim is needed.`,
      (i) => `Every completed repair in ${i.name} comes with a WhatsApp digital receipt and a 6-month warranty document. The warranty specifies what's covered and for how long. If you ever need a follow-up, share the warranty document number when contacting us and we'll prioritise your case.`,
    ],
  },
];

// ─── Scorer ───────────────────────────────────────────────────────────────────

function scoreEntry(
  entry: RawFaqEntry,
  profile: LocalityProfile,
  gscBoosts: Record<string, number>,
): number {
  const base = entry.baseScore ?? 1;
  let profileScore: number;

  if (entry.signals === "always") {
    profileScore = base * 2;
  } else {
    const matched = entry.signals.filter(
      (sig) => profile[sig as keyof LocalityProfile] === true,
    ).length;
    profileScore = base * (matched > 0 ? matched + 1 : 0.5);
  }

  const boost = gscBoosts[entry.intentGroup] ?? 1;
  return profileScore * boost;
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Select FAQs for a locality page.
 *
 * @param info         LocalityInfo from getLocalityInfo(slug)
 * @param options.count      Number of FAQs to select (default 7)
 * @param options.gscBoosts  GSC intent multipliers, e.g. { "leather_repair": 1.8 }
 * @param options.seed       Optional extra seed to add to slug hash (for future A/B)
 */
export function selectFaqs(
  info: LocalityInfo,
  options: { count?: number; gscBoosts?: Record<string, number>; seed?: number } = {},
): SelectedFaq[] {
  const { count = 7, gscBoosts = {}, seed = 0 } = options;
  const profile = buildProfile(info);
  const hash = (slugHash(info.parentServiceSlug + info.name) + seed) & 0xff;

  // Score all entries
  const scored = DYNAMIC_FAQ_POOL.map((entry, idx) => ({
    entry,
    score: scoreEntry(entry, profile, gscBoosts),
    idx,
  }));

  // Sort by score desc, use deterministic tie-break via idx
  scored.sort((a, b) => b.score - a.score || a.idx - b.idx);

  // Pick top entries, ensuring no duplicate intentGroup
  const selected: SelectedFaq[] = [];
  const usedGroups = new Set<IntentGroup>();

  for (const { entry, idx } of scored) {
    if (selected.length >= count) break;
    if (usedGroups.has(entry.intentGroup)) continue;
    usedGroups.add(entry.intentGroup);

    const answerVariant = (hash + idx) % 3;
    const answerFn = entry.answers[answerVariant as 0 | 1 | 2];

    selected.push({
      intentGroup: entry.intentGroup,
      question: entry.question(info),
      answer: answerFn(info),
    });
  }

  return selected;
}

// Re-export static pool so external tools can inspect it
export { DYNAMIC_FAQ_POOL as FAQ_POOL_DYNAMIC };
