/**
 * Additive enrichment for thin legacy city pages.
 *
 * Everything here comes from existing data: the NCR-wide furniture price table and
 * symptom list already on furniture-repair-delhi, plus LOCALITY_REGISTRY
 * (propertyType, landmarks, names, servicePriority) and the city response times.
 * Nothing is invented and no testimonials are added (the pool is tied to Delhi
 * localities). Existing fields are never replaced.
 */

import type { SeoPageData } from "@/lib/seo-constants.ts";
import type { CityKey, ClusterKey, LocalityEntry } from "@/lib/registry/types.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { RESPONSE_TIMES } from "@/lib/content-engine/content-pools.ts";

export type CityEnrichmentOptions = {
  city: CityKey;
  /** Narrows to specific clusters (e.g. South Delhi); omit for the whole city */
  clusters?: readonly ClusterKey[];
  /** Display name used in headings, e.g. "Noida" or "South Delhi" */
  label: string;
  /** Lowercase service noun for running copy, e.g. "furniture repair" */
  serviceNoun: string;
  /**
   * Page to copy the NCR-wide price table and symptom list from (furniture-repair-delhi).
   * Passed in by the caller to avoid a circular import. Omit for non-furniture pages.
   */
  furnitureSource?: Pick<SeoPageData, "priceTable" | "repairSigns">;
  /** Areas listed first in the areas section (each needs a real page to link to) */
  pinnedAreas?: readonly string[];
  /** Which extra FAQ set to append; every answer quotes an existing price-table row or sitewide fact */
  faqSet?: "furniture" | "upholstery";
  /** Extra sections appended after the registry-built ones (e.g. real satellite-page links) */
  extraSections?: { heading: string; body: string[] }[];
};

const MAX_AREAS = 24;
const MAX_CLUSTERS = 4;
const MAX_LANDMARKS = 5;

function joinNames(names: readonly string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function areaLocalities({ city, clusters }: CityEnrichmentOptions): LocalityEntry[] {
  return LOCALITY_REGISTRY.filter(
    (l) => l.status === "published" && l.city === city && (!clusters || clusters.includes(l.cluster)),
  ).sort((a, b) => b.servicePriority - a.servicePriority || a.name.localeCompare(b.name));
}

/** "southDelhi" → "South Delhi" (avoids importing the hub config, which would create an import cycle). */
const clusterName = (key: string): string => key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

/** Cluster names with locality counts, largest first, e.g. "Noida Sectors (146 localities)". */
function clusterBreakdown(localities: readonly LocalityEntry[]): string[] {
  const counts = new Map<ClusterKey, number>();
  for (const l of localities) counts.set(l.cluster, (counts.get(l.cluster) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_CLUSTERS)
    .map(([cluster, n]) => `${clusterName(cluster)} (${n} localities)`);
}

const titleCase = (t: string): string => t.replace(/\b\w/g, (c) => c.toUpperCase());

function distinctLandmarks(localities: readonly LocalityEntry[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const l of localities) {
    for (const mark of l.landmarks) {
      if (seen.has(mark.toLowerCase())) continue;
      seen.add(mark.toLowerCase());
      out.push(mark);
      break; // one per locality so names spread across the area
    }
    if (out.length === MAX_LANDMARKS) break;
  }
  return out;
}

type Faq = { question: string; answer: string };

/** Furniture FAQs. Prices are the rows of the furniture-repair-delhi price table; symptoms are its repair signs. */
export function buildFurnitureFaqs(label: string, localityCount: number): Faq[] {
  const response = RESPONSE_TIMES_BY_LABEL(label);
  return [
    { question: `How much does sofa foam replacement cost in ${label}?`, answer: `Sofa foam replacement in ${label} typically costs ₹1,200–₹3,500 per seat, depending on foam density and seat size. Re-upholstering a seat costs ₹2,000–₹4,500, and spring replacement ₹800–₹2,000. You approve the quote before any work starts.` },
    { question: `What does bed repair cost in ${label}?`, answer: `Bed frame repair in ${label} costs ₹1,199–₹5,000 depending on the damage. Hydraulic bed storage repair is ₹2,000–₹5,000. Our technician confirms the exact amount at the free doorstep inspection.` },
    { question: `How much do dining table and wardrobe repairs cost in ${label}?`, answer: `Dining table repair costs ₹999–₹3,500. Wardrobe hinge and door repair costs ₹500–₹2,000. Both are done at your home in ${label}.` },
    { question: `What does furniture polishing or refinishing cost in ${label}?`, answer: `Polishing and refinishing starts at ₹799 and can go up to ₹20,000 for large or heavily damaged pieces. The range depends on the size of the piece, the wood and the finish you want.` },
    { question: `Can you repair recliners in ${label}?`, answer: `Yes. Recliner mechanism repair costs ₹1,499–₹3,500 and motor replacement ₹3,000–₹6,000. We repair both manual and motorised recliners at your home.` },
    { question: `How much does chair repair cost in ${label}?`, answer: `Chair repair, including hydraulic and wheel problems, costs ₹599–₹1,500. An office chair gas lift replacement costs ₹800–₹1,500.` },
    { question: `How can I tell if my furniture needs repair?`, answer: "Common signs are furniture that wobbles or feels unsafe, drawers that stick or jam, wardrobe doors that will not latch, visible cracks in wood, torn or faded upholstery, a bed frame that creaks or drops slats, and uneven table legs. If you see any of these, book a free inspection." },
    { question: `How quickly can a technician reach me in ${label}?`, answer: `Our technicians typically arrive within ${response}. Book before noon for same-day service. Every job comes with a 6-month warranty.` },
    { question: `How many localities do you cover in ${label}?`, answer: `We currently list ${localityCount} localities in ${label}, and the service works the same way in all of them: free doorstep inspection, fixed quote, repair at home. If your area is not listed, call us and we will confirm.` },
  ];
}

/** Upholstery FAQs. Prices are the rows of the sofa-upholstery-delhi price table. */
export function buildUpholsteryFaqs(label: string): Faq[] {
  return [
    { question: `What is the price difference between cotton, velvet and rexine upholstery in ${label}?`, answer: "For a 3-seater, cotton or linen reupholstery costs ₹3,999–₹6,999, velvet or microfiber ₹5,999–₹9,999, and rexine or faux leather ₹4,999–₹8,999. Genuine leather is ₹14,999–₹29,999." },
    { question: "How much does L-shape sofa upholstery cost?", answer: "L-shape and couch upholstery costs ₹7,999–₹18,999, depending on the size, the fabric and whether the foam also needs replacing." },
    { question: "Can you reupholster a single armchair?", answer: "Yes. Single armchair reupholstery costs ₹2,999–₹6,999 depending on the fabric and the chair's shape." },
    { question: "How much does foam replacement cost during upholstery?", answer: "Foam replacement costs ₹1,500–₹4,000 per seat. We check the foam when the old fabric comes off and tell you before adding it to the quote." },
    { question: `How fast can your team reach me in ${label}?`, answer: `Our technicians typically arrive within ${RESPONSE_TIMES_BY_LABEL(label)} for the inspection. Book before noon for same-day service.` },
    { question: "Is there a warranty on reupholstery work?", answer: "Yes. Every job carries a 6-month warranty on workmanship." },
    { question: "Where can I see fabric options before I decide?", answer: "We carry 500+ fabric options including leather, velvet and rexine. Share photos of your sofa on WhatsApp for a quick estimate, then choose your fabric at the doorstep inspection." },
  ];
}

const RESPONSE_TIMES_BY_LABEL = (label: string): string =>
  RESPONSE_TIMES[(label === "South Delhi" ? "delhi" : label.toLowerCase()) as CityKey];

export function buildCitySections(
  localities: readonly LocalityEntry[],
  opts: CityEnrichmentOptions,
): { heading: string; body: string[] }[] {
  if (localities.length === 0) return [];
  const { label, serviceNoun, city } = opts;
  const clusters = clusterBreakdown(localities);
  const landmarks = distinctLandmarks(localities);
  const response = RESPONSE_TIMES[city];

  const sections = [
    {
      heading: `${titleCase(serviceNoun)} Coverage Across ${label}`,
      body: [
        `Our ${label} work covers ${localities.length} localities${clusters.length > 1 ? `, with the largest areas being ${joinNames(clusters)}` : ""}. Our technicians plan tools, materials and access for the kind of property they are visiting.`,
      ],
    },
  ];
  if (landmarks.length > 0) {
    sections.push({
      heading: `Where We Work Across ${label}`,
      body: [
        `Bookings in ${label} come from neighbourhoods close to ${joinNames(landmarks)}, among many others. Wherever you are in ${label}, the free doorstep inspection and fixed quote work the same way.`,
      ],
    });
  }
  sections.push({
    heading: `How Fast We Reach ${label}`,
    body: [
      `For ${serviceNoun} in ${label}, our technicians typically arrive within ${response}. Book before noon for same-day service, and every job carries a 6-month warranty.`,
    ],
  });
  return sections;
}

export function enrichCityPage(page: SeoPageData, opts: CityEnrichmentOptions): SeoPageData {
  const localities = areaLocalities(opts);
  const extra = buildCitySections(localities, opts);
  const enriched: SeoPageData = {
    ...page,
    contentSections: [...page.contentSections, ...extra, ...(opts.extraSections ?? [])],
  };
  if (opts.faqSet === "furniture") enriched.faqs = [...page.faqs, ...buildFurnitureFaqs(opts.label, localities.length)];
  if (opts.faqSet === "upholstery") enriched.faqs = [...page.faqs, ...buildUpholsteryFaqs(opts.label)];
  if (!opts.furnitureSource) return enriched;

  const { priceTable, repairSigns } = opts.furnitureSource;
  return {
    ...enriched,
    priceTable: priceTable && {
      heading: `Furniture Repair Cost in ${opts.label} — 2026 Price Guide`,
      rows: priceTable.rows,
    },
    repairSigns,
    localAreasSection: page.localAreasSection ?? {
      heading: `Areas We Serve in ${opts.label}`,
      areas: [...new Set([...(opts.pinnedAreas ?? []), ...localities.map((l) => l.name)])].slice(0, MAX_AREAS),
    },
  };
}

/** Real satellite pages for Faridabad (each slug is checked against the registry in tests). */
export const FARIDABAD_SPECIALTY_PAGES = [
  { slug: "imported-furniture-repair-faridabad", label: "imported furniture repair", summary: "European, Italian and American pieces restored at your doorstep" },
  { slug: "italian-sofa-repair-faridabad", label: "Italian sofa repair", summary: "Natuzzi, Poliform, Flexform and imported Italian leather sofas" },
  { slug: "designer-furniture-repair-faridabad", label: "designer furniture repair", summary: "bespoke pieces repaired while keeping the original design intent" },
  { slug: "custom-furniture-repair-faridabad", label: "custom furniture repair", summary: "handmade, custom-built and modified furniture" },
  { slug: "luxury-furniture-restoration-faridabad", label: "luxury furniture restoration", summary: "designer, heritage and imported furniture in premium villas and residences" },
  { slug: "luxury-sofa-restoration-faridabad", label: "luxury sofa restoration", summary: "Italian leather and imported fabric sofas, cushion rebuilding and frame strengthening" },
  { slug: "wooden-furniture-restoration-faridabad", label: "wooden furniture restoration", summary: "teak, sheesham, rosewood and veneer, including water damage repair and refinishing" },
] as const;

export const FARIDABAD_SPECIALTY_SECTION = {
  heading: "Brand-Specific & Specialty Furniture Repair in Faridabad",
  body: [
    "Some pieces need more than a standard repair. We have dedicated pages for specialty work in Faridabad, each with its own details and pricing guidance:",
    ...FARIDABAD_SPECIALTY_PAGES.map((p) => `<a href="/${p.slug}">${p.label.charAt(0).toUpperCase()}${p.label.slice(1)} in Faridabad</a>: ${p.summary}.`),
    "Not sure which applies to your piece? Send photos on WhatsApp and we will point you to the right service before you book.",
  ],
};
