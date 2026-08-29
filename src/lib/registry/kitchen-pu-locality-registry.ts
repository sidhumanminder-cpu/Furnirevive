/**
 * Kitchen Material × Locality Registry — Batch 3d (PU Finish)
 * URL pattern: /pu-modular-kitchen-{locality-slug}
 */

export type KitchenPuLocalityEntry = {
  urlSlug: string;
  localitySlug: string;
  localityName: string;
  materialSlug: "pu";
  materialName: "PU Finish";
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
const BASE = 195000;
function rnd(n: number) { return Math.round(n / 10000) * 10000; }
function price(city: string, aff: string) {
  const cm = CITY_MULT[city] ?? 1.0;
  return { min: rnd(BASE * cm * AFF_MIN[aff]), max: rnd(BASE * cm * AFF_MAX[aff]) };
}
type Raw = { slug: string; name: string; city: KitchenPuLocalityEntry["citySlug"]; cityName: string; aff: KitchenPuLocalityEntry["affluence"]; nearby: string[] };

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
];

function makeEntry(r: Raw): KitchenPuLocalityEntry {
  const { min, max } = price(r.city, r.aff);
  return {
    urlSlug: `pu-modular-kitchen-${r.slug}`,
    localitySlug: r.slug,
    localityName: r.name,
    materialSlug: "pu",
    materialName: "PU Finish",
    citySlug: r.city,
    cityName: r.cityName,
    affluence: r.aff,
    priceMin: min,
    priceMax: max,
    nearby: r.nearby,
    layoutCrossLink: `l-shape-modular-kitchen-${r.slug}`,
  };
}

export const KITCHEN_PU_LOCALITY_REGISTRY: readonly KitchenPuLocalityEntry[] = RAW.map(makeEntry);

export function getPuLocalityEntry(urlSlug: string): KitchenPuLocalityEntry | undefined {
  return KITCHEN_PU_LOCALITY_REGISTRY.find((e) => e.urlSlug === urlSlug);
}

function fmt(n: number) {
  return n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1000).toFixed(0)}K`;
}

export function buildPuLocalityFaqs(e: KitchenPuLocalityEntry) {
  const { localityName, cityName, priceMin, priceMax } = e;
  return [
    {
      q: `How much does a PU finish modular kitchen cost in ${localityName}?`,
      a: `PU finish modular kitchens in ${localityName} range from ${fmt(priceMin)} to ${fmt(priceMax)} depending on size, layout, and hardware. PU is a premium finish — positioned between acrylic and glass — offering a furniture-grade satin sheen at a competitive price. FurniRevive provides a free site visit and transparent quote.`,
    },
    {
      q: `What makes PU finish a good choice for kitchens in ${localityName}?`,
      a: `PU (polyurethane) is applied via a professional spray process delivering a smooth, pore-free, paint-grade satin sheen. It is UV-resistant — will not yellow or chalk over years — and the hard-cured coating resists chips, scratches, and daily kitchen wear. It also supports custom RAL colour matching, making it ideal for designer interiors in ${localityName}.`,
    },
    {
      q: `Do you install PU modular kitchens in ${localityName}, ${cityName}?`,
      a: `Yes. FurniRevive designs and installs PU finish modular kitchens across ${localityName} and the wider ${cityName} region. Our team handles measurement, 3D design, factory spray-paint manufacturing, delivery, and installation — typically completed within 3–5 weeks.`,
    },
    {
      q: `What warranty do PU finish kitchens come with in ${localityName}?`,
      a: `All PU kitchens installed by FurniRevive in ${localityName} carry a 10-year structural warranty on the carcass, 5-year PU shutter warranty against peeling or significant colour fade, and 5-year hardware warranty. We also provide 6 months of free post-installation support.`,
    },
  ] as const;
}
