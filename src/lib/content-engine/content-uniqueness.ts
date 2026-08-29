/**
 * Content Uniqueness Utilities — shared library for deterministic per-page variation.
 *
 * Used by BOTH the registry-first content engine AND the legacy SEO engine.
 * Single source of truth — improve here, both systems benefit.
 *
 * All functions are pure and deterministic: same PageContext → same output every time.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";

// ─── PageContext ───────────────────────────────────────────────────────────────

export type PageContext = {
  locality: LocalityEntry;
  service: ServiceEntry;
  /** Display city name, e.g. "Delhi" */
  city: string;
  /** Optional page slug for legacy callers */
  slug?: string;
};

// ─── Internal helpers ──────────────────────────────────────────────────────────

/** Simple deterministic hash from a string to a positive integer */
export function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/** Pick an element deterministically using locality+service key */
export function pick<T>(arr: readonly T[], ctx: PageContext, salt = 0): T {
  const key = `${ctx.locality.slug}-${ctx.service.slug}`;
  return arr[((hashCode(key) + salt) % arr.length + arr.length) % arr.length];
}

// ─── Location & service helpers ────────────────────────────────────────────────

function locationLabel(ctx: PageContext): string {
  return `${ctx.locality.name}, ${ctx.city}`;
}

function serviceLabel(ctx: PageContext): string {
  return ctx.service.name.toLowerCase();
}

// ─── STEP 1 — Intro variation opener ──────────────────────────────────────────

const INTRO_PATTERNS = [
  (svc: string, loc: string) =>
    `Looking for reliable ${svc} in ${loc}? You've come to the right place.`,
  (_svc: string, loc: string) =>
    `Dealing with sagging cushions, scratched surfaces, or broken joints in your ${loc} home? You're not alone — and the fix is easier than you think.`,
  (_svc: string, loc: string) =>
    `In ${loc}, furniture bears the brunt of daily family life and Delhi NCR's harsh seasonal swings. Professional repair keeps your favourite pieces going strong.`,
  (_svc: string, loc: string) =>
    `${loc} homes are known for quality furniture that reflects the neighbourhood's character. When wear sets in, expert repair — not costly replacement — is the smarter path.`,
  (svc: string, loc: string) =>
    `Every month, hundreds of ${loc} families save thousands of rupees by choosing professional ${svc} over buying new furniture.`,
  (_svc: string, loc: string) =>
    `Delhi NCR's extreme summers, humid monsoons, and dry winters accelerate furniture wear in ${loc} homes — making timely professional repair essential.`,
  (svc: string, loc: string) =>
    `Why spend tens of thousands on replacement when expert ${svc} in ${loc} can restore your furniture to like-new condition at a fraction of the cost?`,
  (svc: string, loc: string) =>
    `Trusted by thousands of families across ${loc}, FurniRevive is the go-to choice for dependable, quality ${svc} with a warranty you can count on.`,
  (_svc: string, loc: string) =>
    `Life in ${loc} means your furniture works overtime — from morning chai on the sofa to late-night work at the dining table. When it starts showing signs of wear, professional repair is the answer.`,
  (svc: string, loc: string) =>
    `Choosing ${svc} in ${loc} over buying new isn't just budget-friendly — it's an eco-conscious decision that keeps quality furniture out of landfills.`,
] as const;

export function getIntroOpener(ctx: PageContext): string {
  const loc = locationLabel(ctx);
  const svc = serviceLabel(ctx);
  const fn = pick(INTRO_PATTERNS, ctx);
  return fn(svc, loc);
}

// ─── STEP 2 — Micro-local context paragraph ───────────────────────────────────

const MICRO_CONTEXTS: ((loc: string) => string)[] = [
  (loc) =>
    `Homes in ${loc} often deal with furniture wear caused by seasonal humidity changes, heavy daily use, and the compact apartment layouts typical of Delhi NCR.`,
  (loc) =>
    `Apartments in ${loc} typically require space-efficient repair solutions — our craftsmen work neatly inside your home without moving heavy furniture out.`,
  (loc) =>
    `Families in ${loc} frequently discover that well-built older furniture is worth restoring rather than replacing, saving both money and sentimental value.`,
  (loc) =>
    `The residential communities of ${loc} feature a mix of solid-wood heritage pieces and modern flat-pack furniture, both of which our craftsmen restore with equal expertise.`,
  (loc) =>
    `With rising furniture prices across Delhi NCR, residents in ${loc} increasingly turn to professional repair as the smart, economical alternative to buying new.`,
  (loc) =>
    `${loc}'s growing population of young families means furniture gets intensive daily use — making periodic professional maintenance a practical necessity.`,
  (loc) =>
    `Whether you live in a high-rise tower or a builder floor in ${loc}, our doorstep repair service eliminates the hassle of transporting bulky furniture to a workshop.`,
  (loc) =>
    `The air-conditioned interiors common in ${loc} homes can accelerate leather cracking and fabric fading, issues our specialists address with climate-appropriate materials.`,
];

export function getMicroLocalContext(ctx: PageContext): string {
  const loc = locationLabel(ctx);
  return pick(MICRO_CONTEXTS, ctx, 3)(loc);
}

// ─── STEP 3 — Rotated trust badges ────────────────────────────────────────────

type BadgeSet = readonly { label: string; icon: "star" | "clock" | "shield" | "award" | "wrench" | "tag" | "search" | "leaf" }[];

const BADGE_SETS: BadgeSet[] = [
  [
    { label: "4.8 Star Rated", icon: "star" },
    { label: "Same-Day Service", icon: "clock" },
    { label: "6-Month Warranty", icon: "shield" },
    { label: "10,000+ Repairs Done", icon: "award" },
  ],
  [
    { label: "Doorstep Repair", icon: "wrench" },
    { label: "Starting ₹599", icon: "tag" },
    { label: "6-Month Warranty", icon: "shield" },
    { label: "Expert Craftsmen", icon: "award" },
  ],
  [
    { label: "Free Inspection", icon: "search" },
    { label: "Same-Day Service", icon: "clock" },
    { label: "Transparent Pricing", icon: "tag" },
    { label: "10,000+ Repairs Done", icon: "award" },
  ],
  [
    { label: "4.8 Star Rated", icon: "star" },
    { label: "Doorstep Repair", icon: "wrench" },
    { label: "Starting ₹599", icon: "tag" },
    { label: "6-Month Warranty", icon: "shield" },
  ],
  [
    { label: "Expert Craftsmen", icon: "award" },
    { label: "Free Inspection", icon: "search" },
    { label: "Same-Day Service", icon: "clock" },
    { label: "Eco-Friendly Choice", icon: "leaf" },
  ],
  [
    { label: "10,000+ Repairs Done", icon: "award" },
    { label: "Transparent Pricing", icon: "tag" },
    { label: "Doorstep Repair", icon: "wrench" },
    { label: "4.8 Star Rated", icon: "star" },
  ],
];

export function getRotatedBadges(ctx: PageContext): BadgeSet[number] extends infer B ? B[] : never {
  return [...pick(BADGE_SETS, ctx, 7)] as { label: string; icon: "star" | "clock" | "shield" | "award" | "wrench" | "tag" | "search" | "leaf" }[];
}

// ─── STEP 4 — Unique sentence per page ────────────────────────────────────────

const UNIQUE_SENTENCES: ((svc: string, loc: string) => string)[] = [
  (svc, loc) =>
    `Most ${svc} jobs in ${loc} are completed within 2–4 hours at your doorstep.`,
  (_svc, loc) =>
    `Popular in ${loc} homes, L-shape sofas often require specialised frame repair that our craftsmen handle routinely.`,
  (_svc, loc) =>
    `Families in ${loc} save an average of ₹15,000–₹40,000 per piece by choosing repair over replacement.`,
  (svc, loc) =>
    `Our ${loc} team completes over 50 ${svc} appointments every month across the area.`,
  (_svc, loc) =>
    `Repeat bookings from ${loc} residents account for over 40% of our work — a testament to lasting repair quality.`,
  (svc, loc) =>
    `Weekend appointments are our most popular slots for ${svc} in ${loc}, so we recommend booking early.`,
  (_svc, loc) =>
    `Over 70% of our ${loc} customers tell us they wish they had called for repair sooner instead of living with the damage.`,
  (svc, loc) =>
    `${loc} residents consistently rate our ${svc} 4.8 out of 5 stars for quality and professionalism.`,
  (_svc, loc) =>
    `Our craftsmen arrive with 200+ hardware items, 400+ fabric swatches, and professional tools — fully equipped for any ${loc} repair.`,
  (svc, loc) =>
    `Emergency ${svc} in ${loc} is available with priority same-day slots for urgent damage.`,
  (_svc, loc) =>
    `Climate-induced furniture damage peaks during monsoon and winter in ${loc} — our busiest seasons for repair bookings.`,
  (svc, loc) =>
    `First-time customers in ${loc} often bundle multiple ${svc} items in one visit to save on per-piece costs.`,
];

export function getUniqueSentence(ctx: PageContext): string {
  const loc = locationLabel(ctx);
  const svc = serviceLabel(ctx);
  return pick(UNIQUE_SENTENCES, ctx, 11)(svc, loc);
}

// ─── STEP 5 — Section order variant ───────────────────────────────────────────

export type SectionOrderVariant = "default" | "benefits-first" | "process-first";

export function getSectionOrder(ctx: PageContext): SectionOrderVariant {
  const key = `${ctx.locality.slug}-${ctx.service.slug}`;
  const v = hashCode(key) % 3;
  if (v === 1) return "benefits-first";
  if (v === 2) return "process-first";
  return "default";
}

// ─── STEP 6 — Unique FAQ per page ─────────────────────────────────────────────

const UNIQUE_FAQS: ((svc: string, loc: string) => { question: string; answer: string })[] = [
  (svc, loc) => ({
    question: `How quickly can you start ${svc} after I book in ${loc}?`,
    answer: `For bookings made before noon, we can usually send a craftsman the same day. Afternoon bookings are typically served the next morning. Emergency slots are available for urgent damage — call us directly for the fastest response.`,
  }),
  (_svc, loc) => ({
    question: `Do you bring all materials for the repair in ${loc}?`,
    answer: `Yes, our craftsmen arrive with professional tools, high-density foam, 400+ fabric swatches, hardware items, wood adhesives, and leather treatment kits. Most repairs are completed in a single visit without any follow-up needed.`,
  }),
  (_svc, loc) => ({
    question: `Can I get multiple furniture items repaired in one visit in ${loc}?`,
    answer: `Absolutely. We encourage multi-item appointments — sofa cushion work, wardrobe hinge fixing, dining chair tightening, and bed frame repair can all be done in a single visit. You receive one consolidated quote and save on per-item costs.`,
  }),
  (svc, loc) => ({
    question: `Is ${svc} in ${loc} safe for children and pets at home?`,
    answer: `Yes, our repair process is safe. We use low-VOC adhesives, non-toxic finishes, and clean up all debris thoroughly after completion. Most repairs are ready for immediate use, though fresh polish may need 24 hours to cure fully.`,
  }),
  (_svc, loc) => ({
    question: `What if I'm not satisfied with the repair in ${loc}?`,
    answer: `Customer satisfaction is our priority. If you're not happy with any aspect of the repair, our craftsman will address your concerns on the spot. Our 6-month warranty also covers any issues that arise after the visit — we return and fix it free.`,
  }),
  (svc, loc) => ({
    question: `Do you provide ${svc} on weekends and holidays in ${loc}?`,
    answer: `Yes, we operate 7 days a week including Saturdays and Sundays. Holiday availability may vary, but we try to accommodate bookings whenever possible. Weekend slots fill up fast, so early booking is recommended.`,
  }),
  (_svc, loc) => ({
    question: `How do I get an estimate for repair in ${loc}?`,
    answer: `Simply share photos of the damaged furniture via WhatsApp or our booking form. We provide a preliminary estimate within minutes. For an accurate quote, our technician visits your home for a free on-site inspection — no obligation to proceed.`,
  }),
  (svc, loc) => ({
    question: `Is it better to repair or replace my old furniture in ${loc}?`,
    answer: `In most cases, professional ${svc} saves 50–70% compared to buying new. If the frame and structure are solid, repair is almost always the better financial and environmental choice. Our free inspection gives you an honest assessment.`,
  }),
];

export function getUniqueFaq(ctx: PageContext): { question: string; answer: string } {
  const loc = locationLabel(ctx);
  const svc = serviceLabel(ctx);
  return pick(UNIQUE_FAQS, ctx, 17)(svc, loc);
}

// ─── STEP 7 — Varied internal link text ───────────────────────────────────────

const LINK_PREFIXES = [
  "",
  "Explore: ",
  "See also: ",
  "Learn more — ",
  "Check out: ",
  "Related: ",
] as const;

export function getVariedLinkLabel(label: string, index: number, ctx: PageContext): string {
  const key = `${ctx.locality.slug}-${ctx.service.slug}`;
  if ((index + hashCode(key)) % 3 !== 0) return label;

  const costSwaps: Record<string, string> = {
    "sofa repair cost Delhi": "cost of sofa repair in Delhi",
    "Sofa Repair Cost Guide": "sofa repair pricing guide",
    "Upholstery Cost Guide": "upholstery pricing guide",
  };
  if (costSwaps[label]) return costSwaps[label];

  const prefix = pick(LINK_PREFIXES, ctx, index);
  return prefix ? `${prefix}${label}` : label;
}
