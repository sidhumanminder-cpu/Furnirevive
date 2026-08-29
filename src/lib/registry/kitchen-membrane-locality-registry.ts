/**
 * Kitchen Material × Locality Registry — Membrane
 * URL pattern: /membrane-modular-kitchen-{locality-slug}
 */

export type KitchenMembraneLocalityEntry = {
  urlSlug: string;
  localitySlug: string;
  localityName: string;
  materialSlug: "membrane";
  materialName: "Membrane";
  citySlug: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad";
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceMin: number;
  priceMax: number;
  nearby: string[];
  layoutCrossLink: string;
};

const CITY_MULT: Record<string, number> = {
  delhi: 1.1, gurgaon: 1.25, noida: 1.0, faridabad: 0.88, ghaziabad: 0.85,
};
const AFF_MIN: Record<string, number> = { "ultra-high": 2.2, high: 1.8, "mid-high": 1.4, mid: 1.1 };
const AFF_MAX: Record<string, number> = { "ultra-high": 4.5, high: 3.5, "mid-high": 2.8, mid: 2.2 };
const BASE = 150000;
function rnd(n: number) { return Math.round(n / 10000) * 10000; }
function price(city: string, aff: string) {
  const cm = CITY_MULT[city] ?? 1.0;
  return { min: rnd(BASE * cm * AFF_MIN[aff]), max: rnd(BASE * cm * AFF_MAX[aff]) };
}
type Raw = { slug: string; name: string; city: KitchenMembraneLocalityEntry["citySlug"]; cityName: string; aff: KitchenMembraneLocalityEntry["affluence"]; nearby: string[] };

const RAW: Raw[] = [
  { slug: "greater-kailash",  name: "Greater Kailash",   city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","hauz-khas","lajpat-nagar"] },
  { slug: "vasant-kunj",      name: "Vasant Kunj",        city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","hauz-khas","green-park"] },
  { slug: "hauz-khas",        name: "Hauz Khas",          city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","vasant-kunj","green-park"] },
  { slug: "defence-colony",   name: "Defence Colony",     city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","hauz-khas"] },
  { slug: "south-extension",  name: "South Extension",    city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","defence-colony"] },
  { slug: "green-park",       name: "Green Park",         city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","defence-colony"] },
  { slug: "dwarka-delhi",     name: "Dwarka",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["janakpuri","rohini"] },
  { slug: "rohini",           name: "Rohini",             city: "delhi",     cityName: "Delhi",     aff: "mid",        nearby: ["dwarka-delhi","janakpuri"] },
  { slug: "janakpuri",        name: "Janakpuri",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["dwarka-delhi","rohini"] },
  { slug: "lajpat-nagar",     name: "Lajpat Nagar",       city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["south-extension","defence-colony","green-park"] },
  { slug: "dlf-phase-gurgaon",             name: "DLF Phase 1-5",         city: "gurgaon", cityName: "Gurgaon", aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sushant-lok-gurgaon"] },
  { slug: "golf-course-road-gurgaon",      name: "Golf Course Road",      city: "gurgaon", cityName: "Gurgaon", aff: "ultra-high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon"] },
  { slug: "golf-course-extension-gurgaon", name: "Golf Course Extension", city: "gurgaon", cityName: "Gurgaon", aff: "high",       nearby: ["golf-course-road-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon"] },
  { slug: "sushant-lok-gurgaon",           name: "Sushant Lok",           city: "gurgaon", cityName: "Gurgaon", aff: "high",       nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","sohna-road-gurgaon"] },
  { slug: "sohna-road-gurgaon",            name: "Sohna Road",            city: "gurgaon", cityName: "Gurgaon", aff: "mid-high",   nearby: ["sushant-lok-gurgaon","nirvana-country-gurgaon"] },
  { slug: "nirvana-country-gurgaon",       name: "Nirvana Country",       city: "gurgaon", cityName: "Gurgaon", aff: "high",       nearby: ["golf-course-extension-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-150-noida", name: "Noida Sector 150",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-137-noida","sector-100-noida"] },
  { slug: "sector-137-noida", name: "Noida Sector 137",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-150-noida","sector-100-noida"] },
  { slug: "sector-62-noida",  name: "Noida Sector 62",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-100-noida"] },
  { slug: "sector-100-noida", name: "Noida Sector 100",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-150-noida","sector-62-noida"] },
  { slug: "sector-78-noida",  name: "Noida Sector 78",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-62-noida","sector-100-noida"] },
  { slug: "indirapuram",        name: "Indirapuram",        city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high", nearby: ["vaishali-ghaziabad"] },
  { slug: "vaishali-ghaziabad", name: "Vaishali",           city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high", nearby: ["indirapuram"] },
  { slug: "sector-15-faridabad",  name: "Faridabad Sector 15",  city: "faridabad", cityName: "Faridabad", aff: "mid", nearby: ["sector-21c-faridabad"] },
  { slug: "sector-21c-faridabad", name: "Sector 21C Faridabad", city: "faridabad", cityName: "Faridabad", aff: "mid", nearby: ["sector-15-faridabad"] },
  // rolloutGroup 2 — new 25 localities
  { slug: "pitampura",               name: "Pitampura",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","rohini","paschim-vihar"] },
  { slug: "punjabi-bagh",            name: "Punjabi Bagh",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["rajouri-garden","pitampura","paschim-vihar"] },
  { slug: "rajouri-garden",          name: "Rajouri Garden",        city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","janakpuri","paschim-vihar"] },
  { slug: "mayur-vihar",             name: "Mayur Vihar",           city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["paschim-vihar","lajpat-nagar","kalkaji"] },
  { slug: "paschim-vihar",           name: "Paschim Vihar",         city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","pitampura","rohini"] },
  { slug: "kalkaji",                 name: "Kalkaji",               city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["greater-kailash","lajpat-nagar","mayur-vihar"] },
  { slug: "malviya-nagar",           name: "Malviya Nagar",         city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","safdarjung-enclave"] },
  { slug: "vasant-vihar",            name: "Vasant Vihar",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","safdarjung-enclave","malviya-nagar"] },
  { slug: "safdarjung-enclave",      name: "Safdarjung Enclave",    city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["green-park","hauz-khas","malviya-nagar"] },
  { slug: "sector-57-gurgaon",       name: "Sector 57 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-56-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-67-gurgaon",       name: "Sector 67 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","nirvana-country-gurgaon","sector-57-gurgaon"] },
  { slug: "sector-82-gurgaon",       name: "Sector 82 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-83-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon"] },
  { slug: "sector-83-gurgaon",       name: "Sector 83 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon"] },
  { slug: "palam-vihar-gurgaon",     name: "Palam Vihar",           city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","sector-83-gurgaon","dwarka-delhi"] },
  { slug: "sector-56-gurgaon",       name: "Sector 56 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sushant-lok-gurgaon","sector-57-gurgaon","golf-course-road-gurgaon"] },
  { slug: "mg-road-gurgaon",         name: "MG Road Gurgaon",       city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","sector-56-gurgaon","sushant-lok-gurgaon"] },
  { slug: "sector-50-noida",         name: "Noida Sector 50",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-62-noida","sector-137-noida","sector-76-noida"] },
  { slug: "sector-18-noida",         name: "Noida Sector 18",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-50-noida","sector-62-noida","sector-93-noida"] },
  { slug: "sector-93-noida",         name: "Noida Sector 93",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-78-noida","sector-50-noida"] },
  { slug: "sector-76-noida",         name: "Noida Sector 76",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-62-noida","sector-107-noida"] },
  { slug: "sector-107-noida",        name: "Noida Sector 107",      city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-100-noida","sector-150-noida","greater-noida-west"] },
  { slug: "greater-noida-west",      name: "Greater Noida West",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-137-noida","sector-150-noida"] },
  { slug: "nit-faridabad",           name: "NIT Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","sector-21c-faridabad","old-faridabad"] },
  { slug: "neharpar-faridabad",      name: "Neharpar Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "mid-high",   nearby: ["nit-faridabad","sector-15-faridabad","sector-21c-faridabad"] },
  { slug: "old-faridabad",           name: "Old Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["nit-faridabad","sector-21c-faridabad","sector-15-faridabad"] },
  // rolloutGroup 3 — 25 new localities
  { slug: "saket-delhi",              name: "Saket",                  city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","malviya-nagar","green-park"] },
  { slug: "panchsheel-park-delhi",    name: "Panchsheel Park",        city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","green-park","vasant-kunj"] },
  { slug: "model-town-delhi",         name: "Model Town",             city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["pitampura","rohini","civil-lines-delhi"] },
  { slug: "krishna-nagar-delhi",      name: "Krishna Nagar",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["mayur-vihar","preet-vihar-delhi","laxmi-nagar"] },
  { slug: "vasundhara-enclave-delhi", name: "Vasundhara Enclave",     city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["mayur-vihar","patparganj","ip-extension"] },
  { slug: "sector-44-gurgaon",        name: "Sector 44 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-45-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-45-gurgaon",        name: "Sector 45 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-44-gurgaon","golf-course-road-gurgaon","sector-46-gurgaon"] },
  { slug: "sector-46-gurgaon",        name: "Sector 46 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-45-gurgaon","golf-course-road-gurgaon","sector-47-gurgaon"] },
  { slug: "sector-47-gurgaon",        name: "Sector 47 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-46-gurgaon","sector-48-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-50-gurgaon",        name: "Sector 50 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-49-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-54-gurgaon",        name: "Sector 54 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-53-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-55-gurgaon",        name: "Sector 55 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-54-gurgaon","golf-course-road-gurgaon","sector-56-gurgaon"] },
  { slug: "sector-110-noida",         name: "Noida Sector 110",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-119-noida","sector-137-noida"] },
  { slug: "sector-119-noida",         name: "Noida Sector 119",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-137-noida","sector-150-noida"] },
  { slug: "sector-128-noida",         name: "Noida Sector 128",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-137-noida","sector-150-noida","sector-100-noida"] },
  { slug: "sector-44-noida",          name: "Noida Sector 44",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-50-noida","sector-62-noida","sector-45-noida"] },
  { slug: "sector-45-noida",          name: "Noida Sector 45",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-44-noida","sector-50-noida","sector-62-noida"] },
  { slug: "sector-93a-noida",         name: "Noida Sector 93A",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-93-noida","sector-137-noida","sector-150-noida"] },
  { slug: "vasundhara-ghaziabad",     name: "Vasundhara Ghaziabad",   city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["indirapuram","vaishali-ghaziabad","kaushambi-ghaziabad"] },
  { slug: "kaushambi-ghaziabad",      name: "Kaushambi Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["vaishali-ghaziabad","indirapuram","vasundhara-ghaziabad"] },
  { slug: "raj-nagar-ghaziabad",      name: "Raj Nagar Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","vasundhara-ghaziabad","vaishali-ghaziabad"] },
  { slug: "sector-86-faridabad",      name: "Sector 86 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-85-faridabad","sector-87-faridabad"] },
  { slug: "sector-88-faridabad",      name: "Sector 88 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-86-faridabad","sector-89-faridabad"] },
  { slug: "sector-89-faridabad",      name: "Sector 89 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-88-faridabad","sector-90-faridabad","neharpar-faridabad"] },
  { slug: "sector-90-faridabad",      name: "Sector 90 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-89-faridabad","sector-91-faridabad","neharpar-faridabad"] },
];

function makeEntry(r: Raw): KitchenMembraneLocalityEntry {
  const { min, max } = price(r.city, r.aff);
  return {
    urlSlug: `membrane-modular-kitchen-${r.slug}`,
    localitySlug: r.slug,
    localityName: r.name,
    materialSlug: "membrane",
    materialName: "Membrane",
    citySlug: r.city,
    cityName: r.cityName,
    affluence: r.aff,
    priceMin: min,
    priceMax: max,
    nearby: r.nearby,
    layoutCrossLink: `l-shape-modular-kitchen-${r.slug}`,
  };
}

export const KITCHEN_MEMBRANE_LOCALITY_REGISTRY: readonly KitchenMembraneLocalityEntry[] =
  RAW.map(makeEntry);

export function getMembraneLocalityEntry(urlSlug: string): KitchenMembraneLocalityEntry | undefined {
  return KITCHEN_MEMBRANE_LOCALITY_REGISTRY.find((e) => e.urlSlug === urlSlug);
}

function fmt(n: number) {
  return n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
}

export function buildMembraneLocalityFaqs(e: KitchenMembraneLocalityEntry) {
  const { localityName, cityName, priceMin, priceMax } = e;
  return [
    {
      q: `How much does a membrane modular kitchen cost in ${localityName}?`,
      a: `Membrane modular kitchens in ${localityName} typically range from ${fmt(priceMin)} to ${fmt(priceMax)} depending on layout size, profile routing complexity, and hardware selection. Membrane sits at a mid-range price point — more affordable than acrylic yet more premium than basic laminate — making it an excellent value choice for homeowners in ${localityName} who want a refined finish without stretching to a top-tier budget.`,
    },
    {
      q: `What is a membrane finish kitchen and is it suitable for ${localityName} homes?`,
      a: `A membrane kitchen uses a PVC or thermofoil membrane that is vacuum-pressed and heat-bonded over an MDF shutter base. The result is a seamless wrapped surface with absolutely no joint lines on the shutter face, giving it a clean, furniture-grade appearance. The soft-touch matte finish is fingerprint-resistant and easy to wipe clean — ideal for the dust and humidity conditions common in ${cityName}. The 3D profile routing option allows for subtle grooves and bevels that add visual depth without compromising the jointless surface.`,
    },
    {
      q: `Do you install membrane modular kitchens in ${localityName}, ${cityName}?`,
      a: `Yes. FurniRevive designs and installs membrane modular kitchens across ${localityName} and the wider ${cityName} region. Our process covers a free site measurement, 3D design presentation, factory-finished manufacturing, and end-to-end installation — typically completed within 2–4 weeks from design sign-off.`,
    },
    {
      q: `How does membrane compare to acrylic and laminate finishes for a ${localityName} kitchen?`,
      a: `Membrane sits squarely between laminate and acrylic in both price and finish quality. Laminate is the most budget-friendly but shows visible edge strips and joints. Acrylic delivers a high-gloss mirror-like finish at a premium cost. Membrane bridges this gap: its wrapped surface eliminates joint lines on the shutter face, the soft-touch matte texture feels luxurious, and the 3D profile routing capability allows designer detailing that flat laminate cannot replicate — all at a price point accessible to most ${localityName} homeowners.`,
    },
    {
      q: `What warranty do membrane kitchens come with in ${localityName}?`,
      a: `All membrane kitchens installed by FurniRevive in ${localityName} carry a 10-year structural warranty on the carcass, a 5-year warranty on membrane shutter delamination and finish, and a 5-year hardware warranty. We also provide 6 months of free post-installation support for any adjustments or snag fixes.`,
    },
  ] as const;
}
