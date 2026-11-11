/**
 * local-guide.ts
 *
 * Pure, deterministic "repair guide" block for locality pages that are short on words.
 * Complements local-context.ts. Same rules: no imports, no invented facts, no prices,
 * no response times, no claims of past jobs. Only hedged, generally-true repair guidance
 * keyed to the locality's housing type, the service and the city.
 */

export type LocalGuideInput = {
  slug: string;
  name: string;
  city: string;
  cityKey: string;
  serviceKey: string;
  propertyType: string;
  housingAge?: "new" | "mid-age" | "established" | "heritage";
  density?: "sparse" | "medium" | "dense" | "very-dense";
};

export type LocalGuide = {
  heading: string;
  intro: string;
  problemsHeading: string;
  problems: { title: string; body: string }[];
  stepsHeading: string;
  steps: string[];
  decideHeading: string;
  decide: string;
  careHeading: string;
  care: string[];
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
function profile(i: LocalGuideInput): Profile {
  const t = i.propertyType.toLowerCase();
  if (/\bdda\b/.test(t) && !/high-rise|gated/.test(t)) return "dda";
  if (/high-rise|gated|societ|township|tower|apartment complex|integrated/.test(t)) return "highrise";
  if (/builder floor/.test(t)) return "builderfloor";
  if (/independent|bungalow|kothi|villa|heritage|estate/.test(t) || i.housingAge === "heritage") return "independent";
  if (/market|commercial|coaching|hub|bazaar|old city|institutional/.test(t) || i.density === "very-dense") return "market";
  return "mixed";
}
function fill(t: string, v: Record<string, string>): string {
  return t.replace(/\{(\w+)\}/g, (_, k: string) => v[k] ?? "");
}

const ITEM: Record<Group, { item: string; label: string }> = {
  sofa: { item: "sofa", label: "sofa repair" },
  upholstery: { item: "sofa", label: "sofa upholstery" },
  recliner: { item: "recliner", label: "recliner repair" },
  furniture: { item: "furniture", label: "furniture repair" },
  chair: { item: "office chair", label: "office chair repair" },
};

const PROBLEMS: Record<Group, readonly { title: string; body: string }[]> = {
  sofa: [
    { title: "Sagging or flattened seat cushions", body: "Seat foam breaks down after years of daily sitting and stops springing back. The usual fix is to replace the foam with a firmer grade and rebuild the cushion so it holds its shape." },
    { title: "A squeaking or wobbling frame", body: "Wooden joints loosen over time as glue dries and screws work free. Re-gluing, re-screwing and adding corner blocks normally makes the frame solid again." },
    { title: "Broken springs or a sagging base", body: "Springs and webbing tire with long use, which is why one seat sinks more than the others. Replacing springs and re-tensioning the webbing restores an even seat." },
    { title: "Torn, cracked or peeling covers", body: "Leather and leatherette crack with heat and friction, and fabric wears at the arms. Depending on the damage, we patch the area or re-cover the panel in a matching material." },
  ],
  upholstery: [
    { title: "Faded, stained or worn fabric", body: "Sun, spills and daily use age a cover long before the frame gives up. Re-covering in a fresh fabric or leather gives the sofa a new look at a lower cost than replacing it." },
    { title: "Cushions that no longer hold their shape", body: "Tired foam and worn cushion covers make a sofa look old even when the frame is sound. Refilling or replacing the foam and re-sewing the covers brings back a clean, firm seat." },
    { title: "Split seams and damaged piping", body: "Seams take the most strain, so stitching and piping fail first. Re-stitching, or replacing the piping during a re-cover, stops the damage from spreading." },
    { title: "A good frame in an outdated style", body: "Many older sofas have solid hardwood frames that outlast newer ones. A new fabric, colour or arm detail can update the look without paying for a new frame." },
  ],
  recliner: [
    { title: "A mechanism that sticks or will not recline", body: "Linkages collect dust and wear at the pivots. Cleaning, lubricating or replacing the worn parts usually restores smooth movement." },
    { title: "A motor or remote that has stopped responding", body: "Power supply, wiring, controller or motor can each be the cause. We test each in turn so only the faulty part is replaced." },
    { title: "A footrest that sags or will not lock", body: "Springs and locking brackets weaken with repeated use. Replacing the worn bracket or spring corrects the footrest without changing the whole mechanism." },
    { title: "Worn headrest and armrest covers", body: "These are the parts that take the most contact, so leather and fabric wear there first. Patching or re-covering the panels brings back a uniform finish." },
  ],
  furniture: [
    { title: "Loose joints in chairs and tables", body: "Wood shrinks and swells with the seasons, which loosens joints over time. Re-gluing and clamping, with reinforcement where needed, makes them firm again." },
    { title: "Scratched or faded polish", body: "Heat, sunlight and daily handling dull a wood finish. Light scratches can be refinished locally, while worn tops may need a fresh polish." },
    { title: "Drawers and doors that stick or sag", body: "Worn hinges, slides and swollen panels are the usual causes. Adjusting or replacing the hardware often fixes the problem without touching the carcass." },
    { title: "Water rings and damaged veneer", body: "Moisture lifts veneer and leaves marks on wood. Depending on how deep the damage goes, we can re-glue, patch or refinish the surface." },
  ],
  chair: [
    { title: "A gas lift that slowly sinks", body: "The cylinder loses pressure with age. Replacing it restores the height adjustment and does not require a new chair." },
    { title: "A wobbly base or noisy casters", body: "Worn casters and loose base parts make a chair unstable. Replacing the caster set and tightening the base is a quick job." },
    { title: "Loose or broken armrests", body: "Armrest screws and brackets work loose with daily use. Re-fixing or replacing the arm pad restores comfort." },
    { title: "Flattened seat foam or torn mesh", body: "Heavy daily use compresses seat foam and strains mesh. Replacing the seat padding or mesh gives the chair a fresh, supportive seat." },
  ],
};

const WHY_HERE: Record<Profile, readonly string[]> = {
  highrise: [
    "In compact apartment homes the main {item} is used nearly every day, so everyday wear is the most common reason people in {name} call us.",
    "Compact layouts in gated societies mean one main seat takes most of the use, which is why wear tends to show up early.",
  ],
  dda: [
    "Many homes in {name} keep their furniture for years, so age-related wear such as loose joints and worn finishes is more common than accident damage.",
    "Well-built older furniture is common in {name}, and the frame is often in better shape than the finish, fittings and covering.",
  ],
  builderfloor: [
    "Builder-floor homes in {name} often have one main seating area that serves the whole household, so wear builds up quickly.",
    "In {name} the main {item} often does double duty for the family and for guests, which speeds up wear.",
  ],
  independent: [
    "Larger, older pieces are common in {name}, and they usually have frames worth keeping, so repair or restoration tends to make more sense than replacement.",
    "In {name} we often see heavy solid-wood furniture where the structure is sound and only the covering or finish needs work.",
  ],
  market: [
    "In busy areas like {name}, furniture is used by more people for more hours, so wear shows up faster.",
    "Small rooms and heavy use around {name} mean a {item} wears faster than one in a spare room.",
  ],
  mixed: [
    "Whatever the home in {name}, the wear that brings people to us usually comes down to a few common problems.",
    "Homes in {name} differ, but most calls come down to a handful of common problems.",
  ],
};

const ACCESS: Record<Profile, string> = {
  highrise: "Share your society, tower and floor so our team can handle the gate entry in advance.",
  dda: "Tell us your block and floor, and whether there is a lift, so the technician arrives prepared.",
  builderfloor: "Tell us which floor you are on and any parking limits, and we plan the visit around them.",
  independent: "Share a few photos of the piece so the technician arrives with the right materials.",
  market: "Give a nearby market or landmark and the lane details so the technician can find you quickly.",
  mixed: "Share your exact address and a nearby landmark so the technician can find you without delay.",
};

const CARE_CITY: Record<string, string> = {
  delhi: "Delhi summers are hot and monsoons humid, so keep leather and wood away from direct sun and damp walls.",
  gurgaon: "Dust and air-conditioned rooms dry out leather, so wipe it regularly and keep it away from AC vents.",
  noida: "Sector homes in Noida see strong summer sun through large windows, so rotate cushions and shade leather from direct light.",
  ghaziabad: "Humid monsoons in Ghaziabad can lift veneer and swell joints, so keep wooden pieces away from damp walls.",
  faridabad: "Hot summers and monsoon damp in Faridabad are hard on foam and wood, so give furniture some air gap from walls.",
};
const CARE_CITY_FALLBACK = "Heat and monsoon humidity wear down foam, leather and wood, so keep furniture out of direct sun and away from damp walls.";

const CARE_GROUP: Record<Group, readonly string[]> = {
  sofa: [
    "Rotate and flip seat cushions every few weeks so wear is spread evenly.",
    "Wipe spills quickly and use a mild cleaner suited to your cover, since harsh chemicals can strip colour.",
    "Condition leather every few months to keep it from drying and cracking.",
  ],
  upholstery: [
    "Vacuum fabric gently every week to stop grit from wearing the fibres.",
    "Treat stains early with a cleaner suited to the fabric.",
    "Rotate cushions regularly so one seat does not take all the wear.",
  ],
  recliner: [
    "Keep the mechanism free of dust and avoid forcing the footrest when it resists.",
    "Do not sit on the footrest or armrest, as this loads parts not designed for body weight.",
    "Condition leather regularly, especially on the headrest and armrests.",
  ],
  furniture: [
    "Use coasters and mats under hot or wet items to protect the finish.",
    "Dust with a soft cloth and avoid harsh polishes that build up on the surface.",
    "Tighten visible screws and joints once or twice a year before they loosen further.",
  ],
  chair: [
    "Do not lean the chair far back beyond its tilt range, as it strains the mechanism.",
    "Clear hair and thread from the caster wheels every few months.",
    "Wipe mesh and upholstery regularly with a damp cloth.",
  ],
};

export function buildLocalGuide(i: LocalGuideInput): LocalGuide {
  const g = group(i.serviceKey);
  const meta = ITEM[g];
  const p = profile(i);
  const seed = `${i.slug}|${i.serviceKey}|guide`;
  const v = { name: i.name, item: meta.item, label: meta.label, city: i.city };

  const why = fill(pickV(WHY_HERE[p], seed, 11), v);
  const probs = PROBLEMS[g];
  // Rotate the starting problem so pages in the same family do not all lead with the same one.
  const start = hash(seed) % probs.length;
  const problems = probs.map((_, k) => probs[(start + k) % probs.length]);

  const steps = [
    `Book by call or WhatsApp with your address in ${i.name}, a photo of the problem and a convenient time.`,
    ACCESS[p],
    `The technician inspects the ${meta.item} at your home and explains which parts are worn and why.`,
    "You receive a clear quote before any work begins, and nothing starts without your approval.",
    `The repair is done on site, usually in one visit, and the technician checks the result with you before leaving.`,
  ];

  const decideOptions = [
    `If the frame is solid and the ${meta.item} is still the right size and style for your home, repair is usually better value than replacement. If the frame is cracked in several places or badly water-damaged, replacement may be the more sensible choice, and we will tell you plainly after inspection.`,
    `Repair makes sense when the structure is sound and the problem is wear to foam, covers, joints or mechanisms. Replacement is worth considering only when the frame itself is failing, and our technician will say so honestly after inspecting it.`,
  ];

  const cityCare = CARE_CITY[i.cityKey] ?? CARE_CITY_FALLBACK;
  const care = [cityCare, ...CARE_GROUP[g]];

  return {
    heading: `A repair guide for ${meta.item} owners in ${i.name}`,
    intro: `${why} Here is what to look for, how a visit works, and how to keep your ${meta.item} in good shape between repairs.`,
    problemsHeading: `Common ${meta.item} problems we fix in ${i.name}`,
    problems,
    stepsHeading: `How a ${meta.label} visit works in ${i.name}`,
    steps,
    decideHeading: `Repair or replace your ${meta.item}?`,
    decide: pickV(decideOptions, seed, 12),
    careHeading: `Care tips for your ${meta.item} in ${i.city}`,
    care,
  };
}
