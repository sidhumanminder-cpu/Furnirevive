/**
 * Content uniqueness utility for SEO pages.
 *
 * Generates per-page content variations deterministically based on the page slug.
 * This ensures every page has unique intro openers, micro-local context,
 * value proposition rotations, unique sentences, FAQs, and link text —
 * WITHOUT modifying any existing page data files.
 *
 * All functions are pure and deterministic: same slug → same output every time.
 */

/** Simple deterministic hash from a string to a positive integer */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/** Pick an element deterministically using slug hash */
function pick<T>(arr: readonly T[], slug: string, salt = 0): T {
  return arr[((hashCode(slug) + salt) % arr.length + arr.length) % arr.length];
}

// ---------------------------------------------------------------------------
// Location & service extraction
// ---------------------------------------------------------------------------

const LOCATION_MAP: Record<string, string> = {
  "south-delhi": "South Delhi",
  "east-delhi": "East Delhi",
  "west-delhi": "West Delhi",
  "north-delhi": "North Delhi",
  "greater-kailash": "Greater Kailash",
  "indirapuram": "Indirapuram",
  "crossing-republik": "Crossing Republik",
  "neharpar": "Neharpar",
  "nit-faridabad": "NIT Faridabad",
  "sohna-road": "Sohna Road",
  "dwarka-expressway": "Dwarka Expressway",
  "greater-noida": "Greater Noida",
  "noida-extension": "Noida Extension",
  "noida": "Noida",
  "gurgaon": "Gurgaon",
  "ghaziabad": "Ghaziabad",
  "faridabad": "Faridabad",
  "delhi": "Delhi",
  "rohini": "Rohini",
  "dwarka": "Dwarka",
  "vasant-kunj": "Vasant Kunj",
  "saket": "Saket",
  "lajpat-nagar": "Lajpat Nagar",
  "defence-colony": "Defence Colony",
  "pitampura": "Pitampura",
  "mayur-vihar": "Mayur Vihar",
  "preet-vihar": "Preet Vihar",
  "sector": "this sector",
};

function extractLocation(slug: string): string {
  // Check longest keys first to match "south-delhi" before "delhi"
  const sorted = Object.entries(LOCATION_MAP).sort(
    (a, b) => b[0].length - a[0].length,
  );
  for (const [key, label] of sorted) {
    if (slug.includes(key)) return label;
  }
  return "Delhi NCR";
}

function extractService(slug: string): string {
  if (slug.includes("sofa-upholstery")) return "sofa upholstery";
  if (slug.includes("sofa-repair")) return "sofa repair";
  if (slug.includes("dining-chair")) return "dining chair repair";
  if (slug.includes("chair-repair")) return "chair repair";
  if (slug.includes("furniture-polish")) return "furniture polishing";
  if (slug.includes("carpenter")) return "carpenter service";
  if (slug.includes("furniture-repair")) return "furniture repair";
  return "furniture repair";
}

// ---------------------------------------------------------------------------
// STEP 1 — Intro variation opener (prepended before existing intro)
// ---------------------------------------------------------------------------

const INTRO_PATTERNS = [
  // 0 – Question-based
  (svc: string, loc: string) =>
    `Looking for reliable ${svc} in ${loc}? You've come to the right place.`,
  // 1 – Problem-based
  (_svc: string, loc: string) =>
    `Dealing with sagging cushions, scratched surfaces, or broken joints in your ${loc} home? You're not alone — and the fix is easier than you think.`,
  // 2 – Local context
  (_svc: string, loc: string) =>
    `In ${loc}, furniture bears the brunt of daily family life and Delhi NCR's harsh seasonal swings. Professional repair keeps your favourite pieces going strong.`,
  // 3 – Premium tone
  (_svc: string, loc: string) =>
    `${loc} homes are known for quality furniture that reflects the neighbourhood's character. When wear sets in, expert repair — not costly replacement — is the smarter path.`,
  // 4 – Statistics
  (svc: string, loc: string) =>
    `Every month, hundreds of ${loc} families save thousands of rupees by choosing professional ${svc} over buying new furniture.`,
  // 5 – Seasonal
  (_svc: string, loc: string) =>
    `Delhi NCR's extreme summers, humid monsoons, and dry winters accelerate furniture wear in ${loc} homes — making timely professional repair essential.`,
  // 6 – Cost-saving
  (svc: string, loc: string) =>
    `Why spend tens of thousands on replacement when expert ${svc} in ${loc} can restore your furniture to like-new condition at a fraction of the cost?`,
  // 7 – Trust
  (svc: string, loc: string) =>
    `Trusted by thousands of families across ${loc}, Furniture Revive is the go-to choice for dependable, quality ${svc} with a warranty you can count on.`,
  // 8 – Lifestyle
  (_svc: string, loc: string) =>
    `Life in ${loc} means your furniture works overtime — from morning chai on the sofa to late-night work at the dining table. When it starts showing signs of wear, professional repair is the answer.`,
  // 9 – Eco
  (svc: string, loc: string) =>
    `Choosing ${svc} in ${loc} over buying new isn't just budget-friendly — it's an eco-conscious decision that keeps quality furniture out of landfills.`,
] as const;

export function getIntroOpener(slug: string): string {
  const loc = extractLocation(slug);
  const svc = extractService(slug);
  const fn = pick(INTRO_PATTERNS, slug);
  return fn(svc, loc);
}

// ---------------------------------------------------------------------------
// STEP 2 — Micro-local context paragraph (inserted after intro)
// ---------------------------------------------------------------------------

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

export function getMicroLocalContext(slug: string): string {
  const loc = extractLocation(slug);
  return pick(MICRO_CONTEXTS, slug, 3)(loc);
}

// ---------------------------------------------------------------------------
// STEP 3 — Rotated value propositions (trust badges)
// ---------------------------------------------------------------------------

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

export function getRotatedBadges(slug: string) {
  return pick(BADGE_SETS, slug, 7);
}

// ---------------------------------------------------------------------------
// STEP 4 — One unique sentence per page (rendered as highlight)
// ---------------------------------------------------------------------------

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

export function getUniqueSentence(slug: string): string {
  const loc = extractLocation(slug);
  const svc = extractService(slug);
  return pick(UNIQUE_SENTENCES, slug, 11)(svc, loc);
}

// ---------------------------------------------------------------------------
// STEP 5 — Section order variant (determines which layout to use)
// ---------------------------------------------------------------------------

export type SectionOrderVariant = "default" | "benefits-first" | "process-first";

export function getSectionOrder(slug: string): SectionOrderVariant {
  const v = hashCode(slug) % 3;
  if (v === 1) return "benefits-first"; // Benefits before Content Sections
  if (v === 2) return "process-first"; // Process before Why Choose
  return "default";
}

// ---------------------------------------------------------------------------
// STEP 6 — Unique FAQ per page (appended to existing FAQs)
// ---------------------------------------------------------------------------

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

export function getUniqueFaq(
  slug: string,
): { question: string; answer: string } {
  const loc = extractLocation(slug);
  const svc = extractService(slug);
  return pick(UNIQUE_FAQS, slug, 17)(svc, loc);
}

// ---------------------------------------------------------------------------
// STEP 7 — Varied internal link text
// ---------------------------------------------------------------------------

const LINK_PREFIXES = [
  "", // no change
  "Explore: ",
  "See also: ",
  "Learn more — ",
  "Check out: ",
  "Related: ",
] as const;

/**
 * Varies the anchor text of related page links based on page slug.
 * Returns the original label or a lightly varied version.
 */
export function getVariedLinkLabel(
  label: string,
  index: number,
  slug: string,
): string {
  // Only vary every 3rd link to keep it natural
  if ((index + hashCode(slug)) % 3 !== 0) return label;

  // Swap word order patterns for common phrases
  const costSwaps: Record<string, string> = {
    "sofa repair cost Delhi": "cost of sofa repair in Delhi",
    "Sofa Repair Cost Guide": "sofa repair pricing guide",
    "Upholstery Cost Guide": "upholstery pricing guide",
  };
  if (costSwaps[label]) return costSwaps[label];

  // Add a subtle prefix for some links
  const prefix = pick(LINK_PREFIXES, slug + String(index), index);
  return prefix ? `${prefix}${label}` : label;
}
