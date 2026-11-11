/**
 * sofa-service-topics.ts
 * Shared copy for the "Sofa repairs we do" section on every sofa-repair-* page.
 * Prices and times are NOT written here: they come from pricing-data.ts via priceKey / timeKey.
 */
export type SofaTopic = {
  id: string;
  heading: string;
  body: string;
  /** Must match PRICING_ITEMS[].service exactly */
  priceKey: string;
  /** Must match REPAIR_TIMES[].service exactly */
  timeKey: string;
};

export type SofaSymptom = { symptom: string; fix: string; priceKey: string };

export const SOFA_SYMPTOMS: readonly SofaSymptom[] = [
  { symptom: "The seat sags or has a dip that does not bounce back", fix: "Foam replacement, with a spring check", priceKey: "Cushion Foam Replacement" },
  { symptom: "Cushions go flat within weeks of fluffing", fix: "Higher-density foam", priceKey: "Cushion Foam Replacement" },
  { symptom: "The seat creaks, bounces unevenly or you can feel springs", fix: "Spring or webbing repair", priceKey: "Spring Repair" },
  { symptom: "A torn seam or a small tear in the fabric", fix: "Stitching or patch repair", priceKey: "Sofa Stitching / Tear Repair" },
  { symptom: "Leather is cracking, peeling or fading", fix: "Leather repair and re-colouring", priceKey: "Leather Sofa Repair" },
  { symptom: "The frame wobbles, a joint is loose or a leg is broken", fix: "Wooden frame repair", priceKey: "Wooden Frame Repair" },
  { symptom: "The recliner is stuck, will not recline or the motor is silent", fix: "Recliner mechanism repair", priceKey: "Recliner Mechanism Repair" },
  { symptom: "The fabric is worn all over, or you want a fresh look", fix: "Re-upholstery or fabric replacement", priceKey: "Full Upholstery" },
];

export const SOFA_TOPICS: readonly SofaTopic[] = [
  {
    id: "leather",
    heading: "Leather sofa repair",
    body:
      "Genuine leather usually cracks and fades when it dries out, and those faults can be filled, re-coloured and sealed. Bonded or PU leather behaves differently: once the top layer starts peeling it cannot be patched for long, and a new cover on the same frame is the lasting fix. We check which type you have during the free inspection and tell you honestly which repair makes sense.",
    priceKey: "Leather Sofa Repair",
    timeKey: "Leather Repair",
  },
  {
    id: "fabric",
    heading: "Fabric sofa repair and fabric change",
    body:
      "Torn seams, worn armrests, pulled threads and stained seat panels are repaired on site. Small tears are stitched or patched. When a panel is too worn to save, we replace just that panel with matching or contrast fabric, which costs far less than a full sofa fabric change.",
    priceKey: "Sofa Stitching / Tear Repair",
    timeKey: "Stitching / Tear Repair",
  },
  {
    id: "wooden-frame",
    heading: "Wooden sofa and frame repair",
    body:
      "A wobbling sofa, a cracked arm or a broken leg usually means a joint has loosened or the frame has split. We re-glue and re-fix joints, reinforce weak corners and replace broken slats or legs. Wooden-arm and wooden-frame sofas are repaired in the same visit, and the sofa stays in your home.",
    priceKey: "Wooden Frame Repair",
    timeKey: "Wooden Frame Repair",
  },
  {
    id: "recliner",
    heading: "Recliner sofa repair",
    body:
      "Manual recliners fail at the handle, cable or linkage. Electric recliners fail at the motor, remote, control box or power supply. A footrest that will not close, a seat that will not tilt or a silent motor are all diagnosed on site, and most are fixed without taking the recliner away.",
    priceKey: "Recliner Mechanism Repair",
    timeKey: "Recliner Repair",
  },
  {
    id: "foam",
    heading: "Sofa foam and cushion replacement",
    body:
      "Sagging seats and flat cushions come from foam that has broken down, not from the cover. We replace the foam with a density that suits how the sofa is used, such as 32D or 40D or HR foam for heavy daily use, and refit the cover so it looks tailored again. Foam density affects both comfort and cost, so we show you the options.",
    priceKey: "Cushion Foam Replacement",
    timeKey: "Foam Replacement",
  },
  {
    id: "springs",
    heading: "Sofa spring and webbing repair",
    body:
      "If the seat feels uneven, creaks, or you can feel metal under the cushion, the springs or the webbing that holds them have loosened or snapped. We re-tension or replace the springs and webbing so the seat is firm and even again, which also protects the new foam.",
    priceKey: "Spring Repair",
    timeKey: "Spring Repair",
  },
  {
    id: "l-shape",
    heading: "L-shaped and sectional sofa repair",
    body:
      "Large L-shaped and sectional sofas are hard to move, so we repair them where they stand, one section at a time. The corner unit, chaise and each seat can be re-foamed, re-stitched or re-covered separately, which keeps the cost down.",
    priceKey: "Full Upholstery",
    timeKey: "Full Upholstery",
  },
  {
    id: "upholstery",
    heading: "Sofa re-upholstery and cover change",
    body:
      "If the frame is sound but the cover is tired, a sofa cover change or full re-upholstery with new fabric or leather on the same frame gives you a sofa that looks new. You choose the material and colour, and we refresh the foam at the same time if it is worn.",
    priceKey: "Fabric Replacement",
    timeKey: "Fabric Replacement",
  },
];

/** Existing city-level pages to link to. Only slugs that exist as live pages. */
export type RelatedLink = { label: string; slug: string };
export const SOFA_RELATED_LINKS: Readonly<Record<string, readonly RelatedLink[]>> = {
  delhi: [
    { label: "Leather sofa repair in Delhi", slug: "leather-sofa-repair-delhi" },
    { label: "Recliner repair in Delhi", slug: "recliner-repair-delhi" },
    { label: "Sofa foam replacement in Delhi", slug: "sofa-foam-replacement-delhi" },
    { label: "Sofa upholstery in Delhi", slug: "sofa-upholstery-delhi" },
    { label: "Furniture repair in Delhi", slug: "furniture-repair-delhi" },
    { label: "Chair repair in Delhi", slug: "chair-repair-delhi" },
  ],
  noida: [
    { label: "Leather sofa repair in Noida", slug: "leather-sofa-repair-noida" },
    { label: "Recliner repair in Noida", slug: "recliner-repair-noida" },
    { label: "Sofa foam replacement in Noida", slug: "sofa-foam-replacement-noida" },
    { label: "Sofa upholstery in Noida", slug: "sofa-upholstery-noida" },
    { label: "Furniture repair in Noida", slug: "furniture-repair-noida" },
  ],
  gurgaon: [
    { label: "Leather sofa repair in Gurgaon", slug: "leather-sofa-repair-gurgaon" },
    { label: "Recliner repair in Gurgaon", slug: "recliner-repair-gurgaon" },
    { label: "Sofa foam replacement in Gurgaon", slug: "sofa-foam-replacement-gurgaon" },
    { label: "Sofa upholstery in Gurgaon", slug: "sofa-upholstery-gurgaon" },
    { label: "Furniture repair in Gurgaon", slug: "furniture-repair-gurgaon" },
    { label: "Chair repair in Gurgaon", slug: "chair-repair-gurgaon" },
  ],
  ghaziabad: [
    { label: "Leather sofa repair in Ghaziabad", slug: "leather-sofa-repair-ghaziabad" },
    { label: "Recliner repair in Ghaziabad", slug: "recliner-repair-ghaziabad" },
    { label: "Furniture repair in Ghaziabad", slug: "furniture-repair-ghaziabad" },
  ],
  faridabad: [
    { label: "Leather sofa repair in Faridabad", slug: "leather-sofa-repair-faridabad" },
    { label: "Recliner repair in Faridabad", slug: "recliner-repair-faridabad" },
    { label: "Sofa foam replacement in Faridabad", slug: "sofa-foam-replacement-faridabad" },
    { label: "Sofa upholstery in Faridabad", slug: "sofa-upholstery-faridabad" },
    { label: "Furniture repair in Faridabad", slug: "furniture-repair-faridabad" },
    { label: "Chair repair in Faridabad", slug: "chair-repair-faridabad" },
  ],
};

/** Cost block: only uses prices from pricing-data.ts (passed in) plus the recent-job range already shown on the site. */
export const SOFA_COST_FACTORS: readonly string[] = [
  "The number of seats and whether it is a 2-seater, 3-seater, L-shape or sectional",
  "The fabric or leather you choose, from everyday fabrics to velvet, suede and genuine leather",
  "Whether the foam and springs also need replacing",
  "The condition of the frame underneath",
];

export type SofaFaq = { q: string; a: string };

export type SofaFaqContext = {
  locality: string;
  /** "gurgaon" for Gurgaon pages, otherwise any other value */
  cityKey?: string;
  upholsteryPrice: string | null;
  fabricPrice: string | null;
  upholsteryTime: string | null;
};

export function buildSofaFaqs(c: SofaFaqContext): SofaFaq[] {
  const faqs: SofaFaq[] = [
    {
      q: `Can my sofa be repaired at home in ${c.locality}?`,
      a: `Yes. Every repair is done at your home in ${c.locality}, so the sofa does not need to go to a workshop. Send photos on WhatsApp, we do a free inspection first, and a 6-month warranty covers the work.`,
    },
    {
      q: `Is there a sofa repair shop near me in ${c.locality}?`,
      a: `We are a doorstep service rather than a shop. A technician comes to your address in ${c.locality} with the tools and materials, and most repairs are finished in one visit.`,
    },
    {
      q: `How much does a sofa cover or fabric change cost in ${c.locality}?`,
      a:
        `${c.upholsteryPrice ? `Full re-upholstery starts from ${c.upholsteryPrice}` : "Full re-upholstery is quoted after inspection"}` +
        `${c.fabricPrice ? ` and fabric replacement from ${c.fabricPrice}` : ""}. ` +
        "The final price depends on the number of seats, the fabric or leather you choose and whether the foam also needs replacing. Send photos on WhatsApp for a free estimate.",
    },
    {
      q: "How long does a full sofa re-upholstery take?",
      a: `${c.upholsteryTime ? `Usually ${c.upholsteryTime}.` : "Usually a day or two."} Smaller jobs such as a torn seam or a single cushion are often finished the same day.`,
    },
    {
      q: "Can a leather sofa that is peeling or cracking be repaired?",
      a: "Cracked or faded genuine leather can usually be filled, re-coloured and sealed. If the top layer of bonded or PU leather is peeling, a patch will not last, and a new cover on the same frame is the better fix. We tell you which applies at the free inspection.",
    },
    {
      q: "Can a recliner motor or mechanism be fixed at home?",
      a: "In most cases, yes. Handle, cable, linkage, motor and remote faults are diagnosed and fixed on site. If a part has to be ordered for an imported model, we tell you the extra time upfront.",
    },
    {
      q: "Can an L-shaped or sectional sofa be repaired without moving it?",
      a: "Yes. We repair them where they stand, one section at a time, so you do not need to move or dismantle the whole sofa.",
    },
  ];
  if (c.cityKey === "gurgaon") {
    faqs.splice(1, 0, {
      q: `Do you repair sofas in Gurugram as well as Gurgaon, including ${c.locality}?`,
      a: `Yes. Gurgaon and Gurugram are the same city, and we repair sofas at home across it, including ${c.locality}. Send photos on WhatsApp for a free estimate.`,
    });
  }
  return faqs;
}
