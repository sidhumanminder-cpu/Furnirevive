/**
 * Generic Dimension Registry — kitchen-dimension-registry.ts
 *
 * Single registry for ALL kitchen dimension types (style, finish, colour, brand…).
 * Each entry is differentiated by `category` + `dimensionValue` + `localitySlug`.
 *
 * Quality Gate — before adding a new dimension:
 *  1. Unique search intent (not covered by existing layout / material / budget pages)
 *  2. Meaningful monthly search demand (>100/mo nationally)
 *  3. Linkable to ≥3 existing registry pages (creates authority graph edges)
 *  4. Supports ≥5 distinct content sections not shared with other dimensions
 *  5. Distinct FAQ set (≥5 questions not answered on hub pages)
 *  6. Fits in authority graph without cannibalising existing pages
 *
 * searchDemandPriority reference:
 *  Material=100, Layout=95, Budget=92, Style=75, Finish=70, Colour=65, Brand=60
 */

export type DimensionCategory = "style" | "finish";
export type DimensionStatus = "published" | "draft" | "experimental";

export type KitchenDimensionEntry = {
  category: DimensionCategory;
  slug: string;
  displayName: string;
  dimensionValue: string;
  dimensionLabel: string;
  localitySlug: string;
  localityName: string;
  citySlug: "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceMin: number;
  priceMax: number;
  searchIntent: string;
  priority: number;
  pageType: "dimension-locality";
  templateVariant: DimensionCategory;
  authorityScore: number;
  searchDemandPriority: number;
  crossLinks: string[];
  status: DimensionStatus;
  nearby: string[];
};

// ---------------------------------------------------------------------------
// Raw locality seeds (rolloutGroup:1 — same 25 as other registries)
// ---------------------------------------------------------------------------

type RawLocality = {
  slug: string;
  name: string;
  city: "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";
  cityName: string;
  aff: "ultra-high" | "high" | "mid-high" | "mid";
  nearby: string[];
};

const RAW_LOCALITIES: readonly RawLocality[] = [
  // Delhi (10)
  { slug: "greater-kailash", name: "Greater Kailash", city: "delhi", cityName: "Delhi", aff: "ultra-high", nearby: ["vasant-kunj","hauz-khas","lajpat-nagar","defence-colony","south-extension"] },
  { slug: "vasant-kunj", name: "Vasant Kunj", city: "delhi", cityName: "Delhi", aff: "high", nearby: ["greater-kailash","hauz-khas","green-park","janakpuri","dwarka-delhi"] },
  { slug: "hauz-khas", name: "Hauz Khas", city: "delhi", cityName: "Delhi", aff: "high", nearby: ["greater-kailash","vasant-kunj","green-park","defence-colony"] },
  { slug: "defence-colony", name: "Defence Colony", city: "delhi", cityName: "Delhi", aff: "ultra-high", nearby: ["lajpat-nagar","green-park","hauz-khas","south-extension"] },
  { slug: "south-extension", name: "South Extension", city: "delhi", cityName: "Delhi", aff: "ultra-high", nearby: ["lajpat-nagar","defence-colony","green-park","greater-kailash"] },
  { slug: "green-park", name: "Green Park", city: "delhi", cityName: "Delhi", aff: "high", nearby: ["hauz-khas","vasant-kunj","defence-colony","greater-kailash"] },
  { slug: "dwarka-delhi", name: "Dwarka", city: "delhi", cityName: "Delhi", aff: "mid-high", nearby: ["janakpuri","rohini","vasant-kunj"] },
  { slug: "rohini", name: "Rohini", city: "delhi", cityName: "Delhi", aff: "mid", nearby: ["dwarka-delhi","janakpuri"] },
  { slug: "janakpuri", name: "Janakpuri", city: "delhi", cityName: "Delhi", aff: "mid-high", nearby: ["dwarka-delhi","rohini","vasant-kunj"] },
  { slug: "lajpat-nagar", name: "Lajpat Nagar", city: "delhi", cityName: "Delhi", aff: "mid-high", nearby: ["south-extension","defence-colony","green-park","greater-kailash"] },
  // Gurgaon (6)
  { slug: "dlf-phase-gurgaon", name: "DLF Phase 1-5", city: "gurgaon", cityName: "Gurgaon", aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon"] },
  { slug: "golf-course-road-gurgaon", name: "Golf Course Road", city: "gurgaon", cityName: "Gurgaon", aff: "ultra-high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon"] },
  { slug: "golf-course-extension-gurgaon", name: "Golf Course Extension", city: "gurgaon", cityName: "Gurgaon", aff: "high", nearby: ["golf-course-road-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon"] },
  { slug: "sushant-lok-gurgaon", name: "Sushant Lok", city: "gurgaon", cityName: "Gurgaon", aff: "high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","sohna-road-gurgaon"] },
  { slug: "sohna-road-gurgaon", name: "Sohna Road", city: "gurgaon", cityName: "Gurgaon", aff: "mid-high", nearby: ["sushant-lok-gurgaon","nirvana-country-gurgaon"] },
  { slug: "nirvana-country-gurgaon", name: "Nirvana Country", city: "gurgaon", cityName: "Gurgaon", aff: "ultra-high", nearby: ["golf-course-road-gurgaon","golf-course-extension-gurgaon","sushant-lok-gurgaon"] },
  // Noida (5)
  { slug: "sector-150-noida", name: "Sector 150", city: "noida", cityName: "Noida", aff: "high", nearby: ["sector-137-noida","sector-100-noida","sector-78-noida"] },
  { slug: "sector-137-noida", name: "Sector 137", city: "noida", cityName: "Noida", aff: "mid-high", nearby: ["sector-150-noida","sector-100-noida","sector-78-noida"] },
  { slug: "sector-62-noida", name: "Sector 62", city: "noida", cityName: "Noida", aff: "high", nearby: ["sector-100-noida","sector-78-noida","indirapuram"] },
  { slug: "sector-100-noida", name: "Sector 100", city: "noida", cityName: "Noida", aff: "high", nearby: ["sector-150-noida","sector-62-noida","sector-78-noida"] },
  { slug: "sector-78-noida", name: "Sector 78", city: "noida", cityName: "Noida", aff: "mid-high", nearby: ["sector-100-noida","sector-62-noida","sector-137-noida"] },
  // Ghaziabad (2)
  { slug: "indirapuram", name: "Indirapuram", city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high", nearby: ["sector-62-noida","vaishali-ghaziabad","sector-78-noida"] },
  { slug: "vaishali-ghaziabad", name: "Vaishali", city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high", nearby: ["indirapuram","sector-62-noida"] },
  // Faridabad (2)
  { slug: "sector-15-faridabad", name: "Sector 15", city: "faridabad", cityName: "Faridabad", aff: "mid-high", nearby: ["sector-21c-faridabad"] },
  { slug: "sector-21c-faridabad", name: "Sector 21C", city: "faridabad", cityName: "Faridabad", aff: "mid", nearby: ["sector-15-faridabad"] },
  // Delhi — rollout group 2 (7)
  { slug: "saket-delhi",              name: "Saket",              city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","malviya-nagar","green-park","vasant-kunj"] },
  { slug: "panchsheel-park-delhi",    name: "Panchsheel Park",    city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","green-park","vasant-kunj","greater-kailash"] },
  { slug: "model-town-delhi",         name: "Model Town",         city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["pitampura","rohini","civil-lines-delhi"] },
  { slug: "krishna-nagar-delhi",      name: "Krishna Nagar",      city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["mayur-vihar","lajpat-nagar","kalkaji"] },
  { slug: "vasundhara-enclave-delhi", name: "Vasundhara Enclave", city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["mayur-vihar","lajpat-nagar","kalkaji"] },
  // Gurgaon — rollout group 2 (5)
  { slug: "sector-44-gurgaon",        name: "Sector 44 Gurgaon",  city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-45-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-45-gurgaon",        name: "Sector 45 Gurgaon",  city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-44-gurgaon","golf-course-road-gurgaon","sector-46-gurgaon"] },
  { slug: "sector-46-gurgaon",        name: "Sector 46 Gurgaon",  city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-45-gurgaon","golf-course-road-gurgaon","sector-47-gurgaon"] },
  { slug: "sector-54-gurgaon",        name: "Sector 54 Gurgaon",  city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-53-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-55-gurgaon",        name: "Sector 55 Gurgaon",  city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-54-gurgaon","golf-course-road-gurgaon","sector-56-gurgaon"] },
  // Noida — rollout group 2 (6)
  { slug: "sector-110-noida",         name: "Noida Sector 110",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-119-noida","sector-137-noida"] },
  { slug: "sector-119-noida",         name: "Noida Sector 119",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-137-noida","sector-150-noida"] },
  { slug: "sector-128-noida",         name: "Noida Sector 128",   city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-137-noida","sector-150-noida","sector-100-noida"] },
  { slug: "sector-44-noida",          name: "Noida Sector 44",    city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-50-noida","sector-62-noida","sector-45-noida"] },
  { slug: "sector-45-noida",          name: "Noida Sector 45",    city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-44-noida","sector-50-noida","sector-62-noida"] },
  { slug: "sector-93a-noida",         name: "Noida Sector 93A",   city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-93-noida","sector-137-noida","sector-150-noida"] },
  // Noida — Expressway belt & gap fills (27)
  { slug: "expressway-corridor-noida", name: "Noida Expressway Corridor", city: "noida", cityName: "Noida", aff: "ultra-high", nearby: ["sector-100-noida","sector-150-noida","sector-137-noida"] },
  { slug: "sector-47-noida",          name: "Noida Sector 47",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-50-noida","sector-62-noida","sector-44-noida"] },
  { slug: "sector-71-noida",          name: "Noida Sector 71",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-62-noida","sector-50-noida"] },
  { slug: "sector-72-noida",          name: "Noida Sector 72",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-71-noida","sector-73-noida","sector-62-noida"] },
  { slug: "sector-73-noida",          name: "Noida Sector 73",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-74-noida","sector-62-noida"] },
  { slug: "sector-74-noida",          name: "Noida Sector 74",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-73-noida","sector-75-noida","sector-78-noida"] },
  { slug: "sector-75-noida",          name: "Noida Sector 75",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-74-noida","sector-76-noida","sector-78-noida"] },
  { slug: "sector-77-noida",          name: "Noida Sector 77",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-76-noida","sector-78-noida","sector-79-noida"] },
  { slug: "sector-79-noida",          name: "Noida Sector 79",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-77-noida","sector-78-noida","sector-80-noida"] },
  { slug: "sector-92-noida",          name: "Noida Sector 92",    city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-93-noida","sector-100-noida","sector-62-noida"] },
  { slug: "sector-94-noida",          name: "Noida Sector 94",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-93-noida","sector-96-noida","sector-100-noida"] },
  { slug: "sector-96-noida",          name: "Noida Sector 96",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-94-noida","sector-97-noida","sector-100-noida"] },
  { slug: "sector-97-noida",          name: "Noida Sector 97",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-96-noida","sector-98-noida","sector-100-noida"] },
  { slug: "sector-98-noida",          name: "Noida Sector 98",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-97-noida","sector-99-noida","sector-100-noida"] },
  { slug: "sector-99-noida",          name: "Noida Sector 99",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-98-noida","sector-100-noida","sector-107-noida"] },
  { slug: "sector-104-noida",         name: "Noida Sector 104",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-100-noida","sector-99-noida"] },
  { slug: "sector-113-noida",         name: "Noida Sector 113",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-124-noida","expressway-corridor-noida"] },
  { slug: "sector-117-noida",         name: "Noida Sector 117",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-118-noida","sector-137-noida","sector-143-noida"] },
  { slug: "sector-118-noida",         name: "Noida Sector 118",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-117-noida","sector-119-noida","sector-137-noida"] },
  { slug: "sector-120-noida",         name: "Noida Sector 120",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-119-noida","sector-121-noida","sector-137-noida"] },
  { slug: "sector-121-noida",         name: "Noida Sector 121",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-120-noida","sector-122-noida","sector-137-noida"] },
  { slug: "sector-122-noida",         name: "Noida Sector 122",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-121-noida","sector-123-noida","sector-137-noida"] },
  { slug: "sector-124-noida",         name: "Noida Sector 124",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-113-noida","expressway-corridor-noida"] },
  { slug: "sector-125-noida",         name: "Noida Sector 125",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-124-noida","sector-126-noida","expressway-corridor-noida"] },
  { slug: "sector-126-noida",         name: "Noida Sector 126",   city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-137-noida","expressway-corridor-noida"] },
  { slug: "sector-134-noida",         name: "Noida Sector 134",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-135-noida","sector-133-noida","sector-137-noida"] },
  { slug: "sector-135-noida",         name: "Noida Sector 135",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-134-noida","sector-136-noida","sector-137-noida"] },
  // Greater Noida (16 localities)
  { slug: "sector-alpha-1-greater-noida",   name: "Alpha 1 Greater Noida",   city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-2-greater-noida","sector-beta-1-greater-noida","pari-chowk-greater-noida"] },
  { slug: "sector-alpha-2-greater-noida",   name: "Alpha 2 Greater Noida",   city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-2-greater-noida","knowledge-park-3-greater-noida"] },
  { slug: "sector-beta-1-greater-noida",    name: "Beta 1 Greater Noida",    city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-2-greater-noida","sector-gamma-greater-noida"] },
  { slug: "sector-beta-2-greater-noida",    name: "Beta 2 Greater Noida",    city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-beta-1-greater-noida","sector-alpha-2-greater-noida","sector-gamma-greater-noida"] },
  { slug: "sector-gamma-greater-noida",     name: "Gamma Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-beta-1-greater-noida","sector-delta-greater-noida","sector-alpha-1-greater-noida"] },
  { slug: "sector-delta-greater-noida",     name: "Delta Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-gamma-greater-noida","sector-pi-greater-noida","sector-xu-greater-noida"] },
  { slug: "sector-pi-greater-noida",        name: "Pi Greater Noida",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-gamma-greater-noida","sector-delta-greater-noida","pari-chowk-greater-noida"] },
  { slug: "sector-xu-greater-noida",        name: "Xu Greater Noida",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-delta-greater-noida","sector-pi-greater-noida","sector-zeta-greater-noida"] },
  { slug: "sector-zeta-greater-noida",      name: "Zeta Greater Noida",      city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-xu-greater-noida","omaxe-greater-noida","tech-zone-greater-noida"] },
  { slug: "omaxe-greater-noida",            name: "Omaxe Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-zeta-greater-noida","sector-delta-greater-noida","pari-chowk-greater-noida"] },
  { slug: "knowledge-park-1-greater-noida", name: "Knowledge Park 1",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-2-greater-noida","sector-alpha-1-greater-noida","pari-chowk-greater-noida"] },
  { slug: "knowledge-park-2-greater-noida", name: "Knowledge Park 2",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-1-greater-noida","knowledge-park-3-greater-noida","sector-alpha-2-greater-noida"] },
  { slug: "knowledge-park-3-greater-noida", name: "Knowledge Park 3",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-2-greater-noida","sector-alpha-2-greater-noida","pari-chowk-greater-noida"] },
  { slug: "pari-chowk-greater-noida",       name: "Pari Chowk Greater Noida",city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-1-greater-noida","knowledge-park-1-greater-noida"] },
  { slug: "tech-zone-greater-noida",        name: "Tech Zone Greater Noida", city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-zeta-greater-noida","omaxe-greater-noida","sector-xu-greater-noida"] },
  { slug: "gaur-city-2-greater-noida",      name: "Gaur City 2 Greater Noida",city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["greater-noida-west","sector-107-noida","sector-137-noida"] },
  // Ghaziabad — rollout group 2 (3)
  { slug: "vasundhara-ghaziabad",     name: "Vasundhara Ghaziabad",  city: "ghaziabad", cityName: "Ghaziabad", aff: "high",    nearby: ["indirapuram","vaishali-ghaziabad","kaushambi-ghaziabad"] },
  { slug: "kaushambi-ghaziabad",      name: "Kaushambi Ghaziabad",   city: "ghaziabad", cityName: "Ghaziabad", aff: "high",    nearby: ["vaishali-ghaziabad","indirapuram","vasundhara-ghaziabad"] },
  { slug: "raj-nagar-ghaziabad",      name: "Raj Nagar Ghaziabad",   city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",nearby: ["indirapuram","vasundhara-ghaziabad","vaishali-ghaziabad"] },
  // Faridabad — rollout group 2 (7)
  { slug: "sector-86-faridabad",      name: "Sector 86 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["neharpar-faridabad","sector-85-faridabad","sector-87-faridabad"] },
  { slug: "sector-88-faridabad",      name: "Sector 88 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["neharpar-faridabad","sector-86-faridabad","sector-89-faridabad"] },
  { slug: "sector-89-faridabad",      name: "Sector 89 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["sector-88-faridabad","sector-90-faridabad","neharpar-faridabad"] },
  { slug: "sector-90-faridabad",      name: "Sector 90 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["sector-89-faridabad","sector-91-faridabad","neharpar-faridabad"] },
  { slug: "sector-91-faridabad",      name: "Sector 91 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["sector-90-faridabad","sector-92-faridabad","neharpar-faridabad"] },
  { slug: "sector-92-faridabad",      name: "Sector 92 Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "high",     nearby: ["sector-91-faridabad","sector-93-faridabad","neharpar-faridabad"] },
  // Chandigarh (15)
  { slug: "sector-17-chandigarh",  name: "Sector 17 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-22-chandigarh","sector-21-chandigarh","sector-15-chandigarh"] },
  { slug: "sector-22-chandigarh",  name: "Sector 22 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-21-chandigarh","sector-23-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-34-chandigarh",  name: "Sector 34 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-35-chandigarh","sector-43-chandigarh","sector-36-chandigarh"] },
  { slug: "sector-35-chandigarh",  name: "Sector 35 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-34-chandigarh","sector-36-chandigarh","sector-37-chandigarh"] },
  { slug: "sector-43-chandigarh",  name: "Sector 43 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-44-chandigarh","sector-45-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-44-chandigarh",  name: "Sector 44 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-43-chandigarh","sector-45-chandigarh","sector-46-chandigarh"] },
  { slug: "sector-45-chandigarh",  name: "Sector 45 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-44-chandigarh","sector-46-chandigarh","sector-47-chandigarh"] },
  { slug: "sector-46-chandigarh",  name: "Sector 46 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-45-chandigarh","sector-47-chandigarh","sector-48-chandigarh"] },
  { slug: "sector-47-chandigarh",  name: "Sector 47 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-46-chandigarh","sector-48-chandigarh","phase-1-mohali"] },
  { slug: "sector-36-chandigarh",  name: "Sector 36 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-35-chandigarh","sector-37-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-37-chandigarh",  name: "Sector 37 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-36-chandigarh","sector-38-chandigarh","sector-35-chandigarh"] },
  { slug: "sector-38-chandigarh",  name: "Sector 38 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-37-chandigarh","sector-43-chandigarh","it-city-mohali"] },
  { slug: "sector-21-chandigarh",  name: "Sector 21 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-22-chandigarh","sector-20-chandigarh","sector-17-chandigarh"] },
  { slug: "sector-20-chandigarh",  name: "Sector 20 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-21-chandigarh","sector-22-chandigarh","sector-19-chandigarh"] },
  { slug: "manimajra-chandigarh",  name: "Manimajra Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid",        nearby: ["sector-47-chandigarh","sector-8-panchkula","sector-48-chandigarh"] },
  // Mohali (20)
  { slug: "phase-1-mohali",        name: "Phase 1 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-2-mohali","sector-46-chandigarh","sector-47-chandigarh"] },
  { slug: "phase-3b2-mohali",      name: "Phase 3B2 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-4-mohali","sector-67-mohali","phase-3b1-mohali"] },
  { slug: "phase-7-mohali",        name: "Phase 7 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-6-mohali","phase-8-mohali","sector-66-mohali"] },
  { slug: "sector-66-mohali",      name: "Sector 66 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-70-mohali","sector-67-mohali","it-city-mohali"] },
  { slug: "sector-70-mohali",      name: "Sector 70 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-71-mohali","aerocity-mohali"] },
  { slug: "aerocity-mohali",       name: "Aerocity Mohali",       city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-68-mohali","sector-77-mohali"] },
  { slug: "it-city-mohali",        name: "IT City Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-70-mohali","sector-71-mohali"] },
  { slug: "sector-71-mohali",      name: "Sector 71 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-70-mohali","sector-72-mohali","aerocity-mohali"] },
  { slug: "sector-76-mohali",      name: "Sector 76 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-77-mohali","sector-78-mohali","aerocity-mohali"] },
  { slug: "sector-82-mohali",      name: "Sector 82 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["aerocity-mohali","sector-81-mohali","sector-83-mohali"] },
  { slug: "sector-85-mohali",      name: "Sector 85 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-86-mohali","new-chandigarh-mohali","kharar-mohali"] },
  { slug: "sector-90-mohali",      name: "Sector 90 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["sector-89-mohali","new-chandigarh-mohali","sector-91-mohali"] },
  { slug: "zirakpur-mohali",       name: "Zirakpur Mohali",       city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["dhakoli-panchkula","sector-20-panchkula","aerocity-mohali"] },
  { slug: "new-chandigarh-mohali", name: "New Chandigarh Mohali", city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["kharar-mohali","sector-85-mohali","sector-38-chandigarh"] },
  { slug: "kharar-mohali",         name: "Kharar Mohali",         city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["sunny-enclave-mohali","new-chandigarh-mohali","sector-85-mohali"] },
  { slug: "sunny-enclave-mohali",  name: "Sunny Enclave Mohali",  city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["kharar-mohali","sector-85-mohali","new-chandigarh-mohali"] },
  { slug: "phase-5-mohali",        name: "Phase 5 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-4-mohali","phase-6-mohali","sector-65-mohali"] },
  { slug: "phase-10-mohali",       name: "Phase 10 Mohali",       city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-9-mohali","phase-11-mohali","sector-64-mohali"] },
  { slug: "sector-68-mohali",      name: "Sector 68 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["aerocity-mohali","sector-69-mohali","sector-70-mohali"] },
  { slug: "derabassi-mohali",      name: "Derabassi Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["zirakpur-mohali","lalru-mohali","banur-mohali"] },
  // Panchkula (15)
  { slug: "sector-5-panchkula",    name: "Sector 5 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-6-panchkula","sector-7-panchkula","sector-4-panchkula"] },
  { slug: "sector-7-panchkula",    name: "Sector 7 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-6-panchkula","sector-8-panchkula","sector-9-panchkula"] },
  { slug: "sector-8-panchkula",    name: "Sector 8 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-7-panchkula","sector-9-panchkula","sector-10-panchkula"] },
  { slug: "sector-9-panchkula",    name: "Sector 9 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-8-panchkula","sector-10-panchkula","sector-11-panchkula"] },
  { slug: "sector-10-panchkula",   name: "Sector 10 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-9-panchkula","sector-11-panchkula","sector-12-panchkula"] },
  { slug: "sector-11-panchkula",   name: "Sector 11 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-10-panchkula","sector-12-panchkula","mdc-sector-5-panchkula"] },
  { slug: "sector-12-panchkula",   name: "Sector 12 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-11-panchkula","sector-15-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-15-panchkula",   name: "Sector 15 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["sector-12-panchkula","sector-17-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-17-panchkula",   name: "Sector 17 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-15-panchkula","sector-20-panchkula","mdc-sector-5-panchkula"] },
  { slug: "mdc-sector-4-panchkula",name: "MDC Sector 4 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-5-panchkula","sector-12-panchkula","sector-15-panchkula"] },
  { slug: "mdc-sector-5-panchkula",name: "MDC Sector 5 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-4-panchkula","sector-11-panchkula","sector-12-panchkula"] },
  { slug: "sector-20-panchkula",   name: "Sector 20 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["dhakoli-panchkula","zirakpur-mohali","sector-21-panchkula"] },
  { slug: "sector-21-panchkula",   name: "Sector 21 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["sector-20-panchkula","zirakpur-mohali","dhakoli-panchkula"] },
  { slug: "kalka-panchkula",       name: "Kalka Panchkula",       city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["pinjore-panchkula","sector-15-panchkula","morni-road-panchkula"] },
  { slug: "dhakoli-panchkula",     name: "Dhakoli Panchkula",     city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["zirakpur-mohali","sector-20-panchkula","baltana-mohali"] },
] as const;

// ---------------------------------------------------------------------------
// Dimension configs
// ---------------------------------------------------------------------------

const STYLE_CONFIGS = [
  { dimensionValue: "modern", dimensionLabel: "Modern Style", searchDemandPriority: 75, authorityScore: 7 },
  { dimensionValue: "contemporary", dimensionLabel: "Contemporary Style", searchDemandPriority: 75, authorityScore: 7 },
  { dimensionValue: "minimalist", dimensionLabel: "Minimalist Style", searchDemandPriority: 75, authorityScore: 7 },
  { dimensionValue: "scandinavian", dimensionLabel: "Scandinavian Style", searchDemandPriority: 75, authorityScore: 7 },
] as const;

const FINISH_CONFIGS = [
  { dimensionValue: "high-gloss", dimensionLabel: "High Gloss Finish", searchDemandPriority: 70, authorityScore: 6 },
  { dimensionValue: "matte-finish", dimensionLabel: "Matte Finish", searchDemandPriority: 70, authorityScore: 6 },
  { dimensionValue: "textured", dimensionLabel: "Textured Finish", searchDemandPriority: 70, authorityScore: 6 },
  { dimensionValue: "dual-tone", dimensionLabel: "Dual-Tone Finish", searchDemandPriority: 70, authorityScore: 6 },
] as const;

// ---------------------------------------------------------------------------
// Price formula
// ---------------------------------------------------------------------------

const CITY_MULT: Record<string, number> = { delhi: 1.1, gurgaon: 1.25, noida: 1.0, ghaziabad: 0.85, faridabad: 0.88, chandigarh: 1.05, mohali: 1.0, panchkula: 1.0 };
const AFF_MIN: Record<string, number> = { "ultra-high": 2.2, high: 1.8, "mid-high": 1.4, mid: 1.1 };
const AFF_MAX: Record<string, number> = { "ultra-high": 4.5, high: 3.5, "mid-high": 2.8, mid: 2.2 };

function computePrice(base: number, city: string, aff: string): { min: number; max: number } {
  const mult = CITY_MULT[city] ?? 1;
  return {
    min: Math.round(base * mult * (AFF_MIN[aff] ?? 1)),
    max: Math.round(base * mult * (AFF_MAX[aff] ?? 2)),
  };
}

// ---------------------------------------------------------------------------
// Build function
// ---------------------------------------------------------------------------

function buildDimensionRegistry(): KitchenDimensionEntry[] {
  const entries: KitchenDimensionEntry[] = [];

  for (const loc of RAW_LOCALITIES) {
    for (const cfg of STYLE_CONFIGS) {
      const { min, max } = computePrice(180_000, loc.city, loc.aff);
      entries.push({
        category: "style",
        slug: `${cfg.dimensionValue}-modular-kitchen-${loc.slug}`,
        displayName: `${cfg.dimensionLabel} Modular Kitchen`,
        dimensionValue: cfg.dimensionValue,
        dimensionLabel: cfg.dimensionLabel,
        localitySlug: loc.slug,
        localityName: loc.name,
        citySlug: loc.city,
        cityName: loc.cityName,
        affluence: loc.aff,
        priceMin: min,
        priceMax: max,
        searchIntent: `${cfg.dimensionValue} modular kitchen ${loc.name.toLowerCase()}`,
        priority: 0.75,
        pageType: "dimension-locality",
        templateVariant: "style",
        authorityScore: cfg.authorityScore,
        searchDemandPriority: cfg.searchDemandPriority,
        crossLinks: [
          `modular-kitchen-${loc.slug}`,
          `l-shape-modular-kitchen-${loc.slug}`,
          `acrylic-modular-kitchen-${loc.slug}`,
        ],
        status: "published",
        nearby: [...loc.nearby],
      });
    }

    for (const cfg of FINISH_CONFIGS) {
      const { min, max } = computePrice(170_000, loc.city, loc.aff);
      entries.push({
        category: "finish",
        slug: `${cfg.dimensionValue}-modular-kitchen-${loc.slug}`,
        displayName: `${cfg.dimensionLabel} Modular Kitchen`,
        dimensionValue: cfg.dimensionValue,
        dimensionLabel: cfg.dimensionLabel,
        localitySlug: loc.slug,
        localityName: loc.name,
        citySlug: loc.city,
        cityName: loc.cityName,
        affluence: loc.aff,
        priceMin: min,
        priceMax: max,
        searchIntent: `${cfg.dimensionValue} modular kitchen ${loc.name.toLowerCase()}`,
        priority: 0.75,
        pageType: "dimension-locality",
        templateVariant: "finish",
        authorityScore: cfg.authorityScore,
        searchDemandPriority: cfg.searchDemandPriority,
        crossLinks: [
          `modular-kitchen-${loc.slug}`,
          `l-shape-modular-kitchen-${loc.slug}`,
          `acrylic-modular-kitchen-${loc.slug}`,
        ],
        status: "published",
        nearby: [...loc.nearby],
      });
    }
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const KITCHEN_DIMENSION_REGISTRY: readonly KitchenDimensionEntry[] = buildDimensionRegistry();

export function getDimensionEntry(urlSlug: string): KitchenDimensionEntry | undefined {
  return KITCHEN_DIMENSION_REGISTRY.find((e) => e.slug === urlSlug);
}

// ---------------------------------------------------------------------------
// FAQ builder
// ---------------------------------------------------------------------------

function fmt(n: number): string {
  return n >= 100_000 ? `₹${(n / 100_000).toFixed(1).replace(".0", "")}L` : `₹${(n / 1_000).toFixed(0)}K`;
}

const STYLE_DESCRIPTIONS: Record<string, { look: string; materials: string; maintenance: string }> = {
  modern: {
    look: "Clean lines, handleless cabinets, neutral palettes (white, grey, beige) with metallic or glass accents. Emphasises a sleek, uncluttered aesthetic.",
    materials: "Acrylic and PU finish shutters work best — they deliver the high-sheen reflective look central to modern design. Laminate in solid colours is the budget-friendly alternative.",
    maintenance: "Modern kitchens with acrylic or PU shutters wipe clean easily. Handleless profiles accumulate less grease than traditional hardware.",
  },
  contemporary: {
    look: "A blend of modern and classic influences — subtle textures, warm tones, mixed materials (wood + lacquer), and understated hardware.",
    materials: "Laminate and membrane finish offer the warm, layered look of contemporary design at mid-range price points. Acrylic works for feature shutters.",
    maintenance: "Laminate is highly durable and scratch-resistant. Contemporary kitchens age well because the palette is less trend-sensitive than pure modern.",
  },
  minimalist: {
    look: "Maximum restraint — minimal hardware, concealed storage, monochrome or dual-tone palette, and recessed LED lighting. Every surface earns its place.",
    materials: "PU and acrylic shutters in matt white or off-white are the canonical minimalist choice. Handleless profiles are almost mandatory for this style.",
    maintenance: "Minimalist kitchens are easier to clean precisely because there is less visual noise — fewer crevices and no ornamental hardware to trap grease.",
  },
  scandinavian: {
    look: "Light woods (birch, ash, oak-effect), white or pale-grey carcasses, functional hardware in brushed steel or brass, and natural textures.",
    materials: "Wood-grain laminate shutters combined with solid-colour acrylic or membrane accents create the signature Scandi warmth. Avoid high-gloss — the style calls for soft sheen.",
    maintenance: "Wood-grain laminate is robust and hides minor scratches better than high-gloss finishes — ideal for busy family kitchens.",
  },
};

const FINISH_DESCRIPTIONS: Record<string, { look: string; durability: string; maintenance: string; bestFor: string }> = {
  "high-gloss": {
    look: "Mirror-like surface that reflects light and makes a kitchen feel larger. Available in white, black, grey, and bold accent colours.",
    durability: "Acrylic and PU high-gloss shutters are scratch-resistant and waterproof when properly sealed. Avoid abrasive cleaners.",
    maintenance: "Wipe with a soft microfibre cloth — streak-free cleaning takes about 2 minutes per door. Fingerprints show easily but clean off instantly.",
    bestFor: "Apartments with limited natural light, open-plan living areas, and homeowners who prefer a premium, hotel-lobby aesthetic.",
  },
  "matte-finish": {
    look: "Soft, velvety surface with no reflection. Creates a sophisticated, understated look in any colour. Very on-trend for 2024–25.",
    durability: "Matte laminate and PU are highly durable and forgiving — small scratches are far less visible than on gloss surfaces.",
    maintenance: "Easier to keep looking clean than gloss — no fingerprint marks, minor smudges blend into the matte texture.",
    bestFor: "Busy family kitchens, homes with children, and any design scheme that values understatement over drama.",
  },
  textured: {
    look: "Wood-grain, stone-effect, linen, or geometric embossed patterns that add tactile depth to shutter fronts.",
    durability: "Textured laminates are among the most durable shutter surfaces — the embossed pattern disguises minor wear and impact marks.",
    maintenance: "Textured surfaces require a soft brush for deep grooves, but overall maintenance effort is lower than smooth gloss.",
    bestFor: "Kitchens that need to feel warm and lived-in, or where natural materials like wood or stone are used elsewhere in the home.",
  },
  "dual-tone": {
    look: "Two contrasting or complementary colours — typically lighter upper cabinets with darker base units, or a contrast island.",
    durability: "Same as single-colour shutters — durability depends on the finish type chosen (laminate, acrylic, or PU) not the colour combination.",
    maintenance: "No additional maintenance vs single-colour kitchens. The visual break actually makes the kitchen feel easier to keep tidy.",
    bestFor: "Larger kitchens (12+ running feet), open-plan layouts, and homeowners who want a custom designer look without a custom price.",
  },
};

export function buildDimensionFaqs(entry: KitchenDimensionEntry): readonly { q: string; a: string }[] {
  const priceRange = `${fmt(entry.priceMin)}–${fmt(entry.priceMax)} depending on size, materials, and hardware selections`;

  if (entry.category === "style") {
    const desc = STYLE_DESCRIPTIONS[entry.dimensionValue];
    return [
      { q: `What does a ${entry.dimensionLabel} modular kitchen look like?`, a: desc?.look ?? "" },
      { q: `How much does a ${entry.dimensionLabel} modular kitchen cost in ${entry.localityName}?`, a: priceRange },
      { q: `Which materials work best for a ${entry.dimensionLabel} kitchen in ${entry.localityName}?`, a: desc?.materials ?? "" },
      { q: `Is a ${entry.dimensionLabel} kitchen easy to maintain?`, a: desc?.maintenance ?? "" },
      { q: `How long does installation take in ${entry.localityName}?`, a: "Typically 10–14 days from final design approval to handover, including site prep, carcass installation, and shutter fitting." },
      { q: `Does FurniRevive offer free design consultation for ${entry.dimensionLabel} kitchens in ${entry.localityName}?`, a: "Yes — free home visit, 3D design in 48 hours, no obligation." },
    ];
  }

  // finish category
  const desc = FINISH_DESCRIPTIONS[entry.dimensionValue];
  return [
    { q: `What does a ${entry.dimensionLabel} modular kitchen look like?`, a: desc?.look ?? "" },
    { q: `How much does a ${entry.dimensionLabel} modular kitchen cost in ${entry.localityName}?`, a: priceRange },
    { q: `How durable is a ${entry.dimensionLabel} kitchen in ${entry.localityName}?`, a: desc?.durability ?? "" },
    { q: `Is a ${entry.dimensionLabel} kitchen easy to maintain?`, a: desc?.maintenance ?? "" },
    { q: `Who is a ${entry.dimensionLabel} kitchen best for?`, a: desc?.bestFor ?? "" },
    { q: `Does FurniRevive offer free design consultation for ${entry.dimensionLabel} kitchens in ${entry.localityName}?`, a: "Yes — free home visit, 3D design in 48 hours, no obligation." },
  ];
}
