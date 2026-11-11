/**
 * local-context.ts
 *
 * Pure, deterministic builder for a "what we see in <locality>" block.
 * One function serves every locality page family:
 *   - registry pages        (via content-engine/modules/local-context.ts)
 *   - written / programmatic / upholstery pages (via LocalityNearMeSection)
 *
 * Rules:
 * - No imports, no React, no network. Plain data in, plain data out.
 * - No invented facts: no prices, no response times, no named societies, no
 *   claims of past jobs. Only hedged, true-in-general statements keyed to the
 *   locality's housing type, service type, city, and its own landmark / nearby names.
 * - Landmarks are only used when `landmarksReliable` is true.
 */

export type LocalContextInput = {
  /** Page slug – used only as a deterministic variant seed */
  slug: string;
  /** Locality display name, e.g. "Jor Bagh", "Sector 72" */
  name: string;
  /** Display city, e.g. "Delhi" */
  city: string;
  cityKey: string;
  /** Service key or slug, e.g. "sofa-repair", "recliner-repair", "sofa-upholstery" */
  serviceKey: string;
  /** Human-readable housing description (any noun phrase) */
  propertyType: string;
  housingAge?: "new" | "mid-age" | "established" | "heritage";
  density?: "sparse" | "medium" | "dense" | "very-dense";
  affluence?: "budget" | "mid" | "mid-high" | "high" | "ultra-high";
  landmarks: readonly string[];
  /** false when landmarks are generic zone defaults, not specific to this locality */
  landmarksReliable: boolean;
  adjacent: readonly string[];
};

export type LocalContext = {
  heading: string;
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
};

type Profile = "highrise" | "dda" | "builderfloor" | "independent" | "market" | "mixed";
type Group = "sofa" | "upholstery" | "recliner" | "furniture" | "chair";

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function pickV<T>(arr: readonly T[], seed: string, salt: number): T {
  return arr[(hash(seed) + salt * 7919) % arr.length];
}

function group(serviceKey: string): Group {
  const k = serviceKey.toLowerCase();
  if (/upholster/.test(k)) return "upholstery";
  if (/recliner/.test(k)) return "recliner";
  if (/office/.test(k)) return "chair";
  if (/furniture/.test(k)) return "furniture";
  return "sofa";
}

const GROUP: Record<Group, { item: string; label: string; jobs: string }> = {
  sofa: {
    item: "sofa",
    label: "sofa repair",
    jobs: "seat foam replacement, spring and webbing repair, leather or fabric re-covering and wooden frame repair",
  },
  upholstery: {
    item: "sofa",
    label: "sofa upholstery",
    jobs: "re-covering in fabric, leather or velvet, cushion and foam refilling and frame reinforcement",
  },
  recliner: {
    item: "recliner",
    label: "recliner repair",
    jobs: "recliner mechanism and motor repair, cushion and foam replacement and leather or fabric patching",
  },
  furniture: {
    item: "furniture",
    label: "furniture repair",
    jobs: "wooden frame and joint repair, polishing and refinishing and upholstery touch-ups",
  },
  chair: {
    item: "office chair",
    label: "office chair repair",
    jobs: "gas-lift and hydraulic cylinder replacement, caster and armrest repair and seat foam or mesh replacement",
  },
};

function profile(i: LocalContextInput): Profile {
  const t = i.propertyType.toLowerCase();
  if (/\bdda\b/.test(t) && !/high-rise|gated/.test(t)) return "dda";
  if (/high-rise|gated|societ|township|tower|apartment complex|integrated/.test(t)) return "highrise";
  if (/builder floor/.test(t)) return "builderfloor";
  if (/independent|bungalow|kothi|villa|heritage|estate/.test(t) || i.housingAge === "heritage") return "independent";
  if (/market|commercial|coaching|hub|bazaar|old city|institutional/.test(t) || i.density === "very-dense") return "market";
  return "mixed";
}

// ── Paragraph 1: how the furniture is used / what wears ─────────────────────
const P1: Record<Profile, readonly string[]> = {
  highrise: [
    "Homes in {name} ({pt}) are often compact, and the main {item} is used every day by the whole family. The calls we get most are for {jobs} on pieces that have simply been used hard.",
    "In {name} ({pt}) the living-room {item} usually doubles as the family's everyday seat. That wear shows up as sagging cushions, loose frames and tired covers, and the work is typically {jobs}.",
    "Many households in {name} ({pt}) bought their {item} when they moved in, so ageing foam and worn covers are the usual reasons people call. The fix is normally {jobs}.",
  ],
  dda: [
    "Homes in {name} ({pt}) tend to keep furniture for many years, so a good {item} is repaired and kept rather than replaced. After that many years of use, {jobs} are the usual jobs.",
    "In {name} ({pt}) families often hold on to solid, well-built {item}s that outlast their foam and fabric. That is why most requests here are for {jobs} rather than a new purchase.",
    "Furniture in {name} ({pt}) is commonly passed between rooms and generations. The frames are usually still sound; what needs attention is {jobs}.",
  ],
  builderfloor: [
    "Builder-floor homes in {name} ({pt}) often have a single large {item} in a mid-sized living room, used daily. Typical repairs are {jobs}.",
    "In {name} ({pt}) a {item} usually serves a joint family and sees heavy use. We are most often asked for {jobs}.",
    "Households in {name} ({pt}) tend to repair rather than replace a {item} that still has a good frame. The common work is {jobs}.",
  ],
  independent: [
    "Homes in {name} ({pt}) often have larger, heavier and older {item}s, sometimes in solid wood or good leather. Pieces like these are worth restoring, and the work is typically {jobs}.",
    "In {name} ({pt}) many pieces are bigger and better built than modern flat-pack furniture, so repair is usually the better choice. We are asked mostly for {jobs}.",
    "Because homes in {name} ({pt}) are spacious, {item}s tend to be large and used across several rooms. Typical work includes {jobs}.",
  ],
  market: [
    "Around {name} ({pt}) space is tight and furniture works hard, so wear builds up quickly. The usual repairs are {jobs}.",
    "In {name} ({pt}) a {item} often serves more than one purpose in a small room. That heavy use leads to {jobs}.",
    "Households and small businesses in {name} ({pt}) get a lot of use from every {item}, so repairs are practical and frequent: {jobs}.",
  ],
  mixed: [
    "Homes in {name} ({pt}) vary a lot, but the reasons people call about a {item} are consistent: {jobs}.",
    "In {name} ({pt}) most {item} problems come from daily use over several years, and the usual fix is {jobs}.",
    "Across {name} ({pt}) we are mostly asked about {jobs} on {item}s that are otherwise worth keeping.",
  ],
};

// ── Paragraph 2: access and logistics ───────────────────────────────────────
const P2: Record<Profile, readonly string[]> = {
  highrise: [
    "Most societies ask visitors to register at the gate, so share your society name and tower or block when you book. Our team handles gate passes and sign-in, and repairs are done inside your flat, so nothing needs to go down the lift.",
    "Gated societies usually have entry rules for service visits. Give us the society name, tower and flat number when you book and we will take care of the formalities. The repair happens at home with no pickup.",
    "In high-rise buildings the lift and entry process can slow a visit, so we ask for your tower and floor in advance and plan around it. Repairs are completed on site.",
  ],
  dda: [
    "Many DDA flats are on upper floors with stairs and no lift. Tell us your floor when you book so the technician arrives ready to carry tools up. The repair is done in your flat, so the {item} stays where it is.",
    "Flats in {name} often have narrow stairwells, which makes moving a {item} out difficult. That is why the repair is done on site, in your living room, with no carrying down the stairs.",
    "Share your block, floor and whether there is a lift when you book. The technician works inside your flat and the {item} does not have to leave the building.",
  ],
  builderfloor: [
    "Builder floors usually mean stairs and a shared entrance. Tell us which floor you are on when you book and we plan the visit accordingly. The repair is done at home, so the {item} does not have to be carried out.",
    "On an upper floor, moving a heavy {item} is the hardest part, so we do the work in your home. Share your floor and a nearby landmark to help the technician find you.",
    "Because access in builder floors can be tight, we repair on site instead of taking the {item} away. Mention your floor and any parking limits when you book.",
  ],
  independent: [
    "Independent houses and bungalows make access easy, and the technician can work in the room where the {item} sits. For older or heavy pieces we inspect first and explain what is practical before any work starts.",
    "With larger homes, repairs are done in place, and pieces that are heavy or fragile never need to be moved. We look at the frame and covering first and suggest the right repair before starting.",
    "Share a few photos of the {item} when you book so we can come prepared for the right materials. The work is done at your home.",
  ],
  market: [
    "Lanes near {name} can be narrow and parking limited, so give us a nearby landmark or market name when you book. The work is done on site, so there is no need to carry the {item} anywhere.",
    "Tell us the nearest market, lane or gate when you book so the technician can reach you without delay. Repairs are completed at your home or shop.",
    "Space around {name} is tight, so we bring compact tools and repair in the room where the {item} sits. A landmark and floor number help us find you quickly.",
  ],
  mixed: [
    "Share your address, a photo of the problem and a convenient time, and the technician comes to your home. Most {item} repairs are completed on site, so there is no pickup or workshop wait.",
    "Book by call or WhatsApp with your locality and a photo of the issue. The technician visits, inspects the {item} and repairs it at your home.",
    "Send a photo and your address when you book. We inspect at your home and do the repair there, with no need to move the {item}.",
  ],
};

const AFFLUENT = [
  "Pieces in {name} are often finished in imported fabric or designer leather, so we check the material and match the finish before work begins.",
  "Where furniture is high-end, a close match of leather grain, fabric pattern and stitching matters, and we confirm it with you before starting.",
];
const VALUE = [
  "Many households here prefer to repair rather than replace, since a repair usually costs less than buying a new {item}.",
  "Repairing a sound {item} is usually more economical than replacing it, which is why most calls from {name} are repair jobs.",
];

const CITY_LINE: Record<string, string> = {
  delhi: "Delhi's hot summers and monsoon humidity are hard on foam, leather and wood, which is why cracked leather and loosened joints are such common requests.",
  gurgaon: "Heat, dust and air-conditioned rooms all take a toll on leather and foam, so peeling covers and flattened cushions come up often in Gurgaon homes.",
  noida: "Across Noida's newer sectors and older colonies alike, summer heat and monsoon damp wear down leather, foam and wooden joints faster than most people expect.",
  ghaziabad: "Hot summers and humid monsoons across Ghaziabad shorten the life of foam and leather, so many repairs come down to ageing materials rather than damage.",
  faridabad: "Hot summers and monsoon humidity in Faridabad are tough on cushions, leather and wood, which is behind most of the repairs we are asked about.",
};
const CITY_FALLBACK = "Seasonal heat and humidity wear down foam, leather and wood, which is behind most of the repairs people ask us about.";

function fill(t: string, v: Record<string, string>): string {
  return t.replace(/\{(\w+)\}/g, (_, k: string) => v[k] ?? "");
}
function list(a: readonly string[], n: number): string {
  const x = a.slice(0, n);
  if (x.length <= 1) return x.join("");
  return `${x.slice(0, -1).join(", ")} and ${x[x.length - 1]}`;
}

export function buildLocalContext(i: LocalContextInput): LocalContext {
  const g = GROUP[group(i.serviceKey)];
  const p = profile(i);
  const seed = `${i.slug}|${i.serviceKey}`;
  const v = { name: i.name, pt: i.propertyType, item: g.item, jobs: g.jobs, city: i.city };

  const p1 = fill(pickV(P1[p], seed, 1), v);
  const p2 = fill(pickV(P2[p], seed, 2), v);
  const high = i.affluence === "high" || i.affluence === "ultra-high";
  const extra = high
    ? fill(pickV(AFFLUENT, seed, 3), v)
    : fill(pickV(VALUE, seed, 3), v);
  const cityLine = CITY_LINE[i.cityKey] ?? CITY_FALLBACK;

  const adj = i.adjacent.filter((a) => a && a !== i.name);
  const lm = i.landmarksReliable ? i.landmarks.filter(Boolean) : [];
  const cover: string[] = [];
  if (adj.length >= 2) {
    cover.push(
      pickV(
        [
          `We also serve nearby areas such as ${list(adj, 3)}, so neighbours across this part of ${i.city} can book the same ${g.label} service.`,
          `Our technicians cover ${i.name} along with ${list(adj, 3)} and the surrounding streets.`,
          `If you are in ${list(adj, 2)} or anywhere around ${i.name}, the same ${g.label} visit is available.`,
        ],
        seed,
        4,
      ),
    );
  }
  if (lm.length >= 1) {
    cover.push(
      pickV(
        [
          `If you are not sure how to describe your address, a nearby landmark such as ${list(lm, 2)} helps the technician reach you faster.`,
          `Landmarks like ${list(lm, 2)} are useful when you share your location for the booking.`,
        ],
        seed,
        5,
      ),
    );
  }

  const paragraphs = [`${p1} ${cityLine}`, `${p2} ${extra}`];
  if (cover.length) paragraphs.push(cover.join(" "));

  const q2: Record<Profile, { question: string; answer: string }> = {
    highrise: {
      question: `I live in a society in ${i.name}. Will the technician need a gate pass?`,
      answer:
        "Many societies ask visitors to register at the gate. Share your society name, tower or block when you book and our team handles the entry formalities, so you do not have to wait at the gate.",
    },
    dda: {
      question: `Can the ${g.item} be repaired inside my flat in ${i.name}?`,
      answer: `Yes. Repairs are done at your home, so the ${g.item} does not have to be carried down the stairs. Tell us your floor and whether there is a lift so we can plan the visit.`,
    },
    builderfloor: {
      question: `Can you repair a ${g.item} on an upper floor in ${i.name}?`,
      answer: `Yes. We repair on site, so nothing has to be carried down. Share your floor and any parking limits when you book.`,
    },
    independent: {
      question: `Do you handle older or heavy ${g.item}s in ${i.name}?`,
      answer: `Yes. We inspect the frame and covering first, explain what is practical, and then repair at your home so heavy pieces never need to be moved.`,
    },
    market: {
      question: `Can you visit a home or shop in a narrow lane near ${i.name}?`,
      answer: `Yes. Share the nearest market, lane or landmark when you book so the technician can reach you; repairs are done on site.`,
    },
    mixed: {
      question: `How do I book ${g.label} in ${i.name}?`,
      answer: `Call or WhatsApp with your locality, a photo of the problem and a convenient time. We confirm the visit and repair the ${g.item} at your home.`,
    },
  };

  const faqs = [
    {
      question: `Do you offer ${g.label} at home in ${i.name}?`,
      answer: `Yes. Our technicians visit ${i.name}${adj.length ? ` and nearby areas including ${list(adj, 3)}` : ""} and repair on site, with no pickup or workshop wait.`,
    },
    q2[p],
    {
      question: `Is there a ${g.label} service near ${i.name}?`,
      answer: `Yes. FurniRevive comes to your home in ${i.name}, so there is no shop or workshop to visit. Call or WhatsApp with your location and a photo, and we confirm the visit.`,
    },
  ];

  return {
    heading: `${g.label.charAt(0).toUpperCase()}${g.label.slice(1)} in ${i.name}: what we see locally`,
    paragraphs,
    faqs,
  };
}
