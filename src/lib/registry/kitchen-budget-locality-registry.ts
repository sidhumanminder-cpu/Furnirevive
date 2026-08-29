export type KitchenBudgetLocalityEntry = {
  urlSlug: string;
  localitySlug: string;
  localityName: string;
  budgetTier: "affordable" | "low-cost";
  citySlug: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad";
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceMin: number;
  priceMax: number;
  nearby: string[];
};

// ─── Price formula constants ──────────────────────────────────────────────────

const AFFORDABLE_BASE = 130_000;
const LOW_COST_BASE = 85_000;

const CITY_MULT: Record<string, number> = {
  delhi: 1.1,
  gurgaon: 1.25,
  noida: 1.0,
  faridabad: 0.88,
  ghaziabad: 0.85,
};

const AFF_MIN: Record<string, number> = {
  "ultra-high": 1.8,
  high: 1.5,
  "mid-high": 1.2,
  mid: 1.0,
};

const AFF_MAX: Record<string, number> = {
  "ultra-high": 3.2,
  high: 2.6,
  "mid-high": 2.0,
  mid: 1.6,
};

const rnd = (n: number) => Math.round(n / 10_000) * 10_000;

// ─── Raw locality seed data ───────────────────────────────────────────────────

type RawLocality = {
  slug: string;
  name: string;
  city: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad";
  cityName: string;
  aff: "ultra-high" | "high" | "mid-high" | "mid";
  nearby: string[];
};

const RAW: RawLocality[] = [
  { slug: "greater-kailash",              name: "Greater Kailash",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","hauz-khas","lajpat-nagar","defence-colony","south-extension","green-park","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "vasant-kunj",                  name: "Vasant Kunj",              city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","hauz-khas","green-park","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "hauz-khas",                    name: "Hauz Khas",                city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","vasant-kunj","green-park","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "defence-colony",               name: "Defence Colony",           city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","hauz-khas","greater-kailash","south-extension","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "south-extension",              name: "South Extension",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","defence-colony","green-park","greater-kailash","hauz-khas","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "green-park",                   name: "Green Park",               city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","defence-colony","greater-kailash","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "dwarka-delhi",                 name: "Dwarka",                   city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["janakpuri","rohini","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","dlf-phase-gurgaon"] },
  { slug: "rohini",                       name: "Rohini",                   city: "delhi",     cityName: "Delhi",     aff: "mid",        nearby: ["dwarka-delhi","janakpuri","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","sector-62-noida"] },
  { slug: "janakpuri",                    name: "Janakpuri",                city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["dwarka-delhi","rohini","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","dlf-phase-gurgaon"] },
  { slug: "lajpat-nagar",                 name: "Lajpat Nagar",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["south-extension","defence-colony","green-park","greater-kailash","hauz-khas","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "dlf-phase-gurgaon",            name: "DLF Phase 1-5",            city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","vasant-kunj","dwarka-delhi","janakpuri","hauz-khas","green-park"] },
  { slug: "golf-course-road-gurgaon",     name: "Golf Course Road",         city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon","sohna-road-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "golf-course-extension-gurgaon",name: "Golf Course Extension",    city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-road-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon","dlf-phase-gurgaon","sohna-road-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "sushant-lok-gurgaon",          name: "Sushant Lok",              city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","sohna-road-gurgaon","golf-course-road-gurgaon","nirvana-country-gurgaon","vasant-kunj","hauz-khas","dwarka-delhi","green-park","janakpuri"] },
  { slug: "sohna-road-gurgaon",           name: "Sohna Road",               city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sushant-lok-gurgaon","nirvana-country-gurgaon","golf-course-extension-gurgaon","dlf-phase-gurgaon","golf-course-road-gurgaon","vasant-kunj","hauz-khas","dwarka-delhi","janakpuri","green-park"] },
  { slug: "nirvana-country-gurgaon",      name: "Nirvana Country",          city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","golf-course-road-gurgaon","sushant-lok-gurgaon","sohna-road-gurgaon","dlf-phase-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "sector-150-noida",             name: "Noida Sector 150",         city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-137-noida","sector-100-noida","sector-78-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-137-noida",             name: "Noida Sector 137",         city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-150-noida","sector-100-noida","sector-78-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-62-noida",              name: "Noida Sector 62",          city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-100-noida",             name: "Noida Sector 100",         city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-150-noida","sector-137-noida","sector-62-noida","sector-78-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-78-noida",              name: "Noida Sector 78",          city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-62-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "indirapuram",                  name: "Indirapuram",              city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["vaishali-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","lajpat-nagar","sector-15-faridabad","sector-21c-faridabad","greater-kailash"] },
  { slug: "vaishali-ghaziabad",           name: "Vaishali",                 city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","lajpat-nagar","sector-15-faridabad","sector-21c-faridabad","greater-kailash"] },
  { slug: "sector-15-faridabad",          name: "Faridabad Sector 15",      city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-21c-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida","green-park","hauz-khas"] },
  { slug: "sector-21c-faridabad",         name: "Sector 21C Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida","green-park","hauz-khas"] },
  // rolloutGroup 2
  { slug: "pitampura",               name: "Pitampura",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","rohini","paschim-vihar","rajouri-garden","janakpuri","dwarka-delhi","lajpat-nagar","greater-kailash","hauz-khas","green-park"] },
  { slug: "punjabi-bagh",            name: "Punjabi Bagh",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["rajouri-garden","pitampura","paschim-vihar","janakpuri","dwarka-delhi","rohini","lajpat-nagar","hauz-khas","green-park","greater-kailash"] },
  { slug: "rajouri-garden",          name: "Rajouri Garden",        city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","janakpuri","paschim-vihar","dwarka-delhi","rohini","pitampura","lajpat-nagar","hauz-khas","green-park","greater-kailash"] },
  { slug: "mayur-vihar",             name: "Mayur Vihar",           city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["paschim-vihar","lajpat-nagar","kalkaji","greater-kailash","hauz-khas","defence-colony","south-extension","green-park","sector-62-noida","vasant-kunj"] },
  { slug: "paschim-vihar",           name: "Paschim Vihar",         city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","pitampura","rohini","dwarka-delhi","janakpuri","rajouri-garden","lajpat-nagar","hauz-khas","green-park","greater-kailash"] },
  { slug: "kalkaji",                 name: "Kalkaji",               city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["greater-kailash","lajpat-nagar","mayur-vihar","defence-colony","south-extension","hauz-khas","green-park","vasant-kunj","dwarka-delhi","janakpuri"] },
  { slug: "malviya-nagar",           name: "Malviya Nagar",         city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","safdarjung-enclave","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri"] },
  { slug: "vasant-vihar",            name: "Vasant Vihar",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","safdarjung-enclave","malviya-nagar","greater-kailash","hauz-khas","defence-colony","south-extension","green-park","lajpat-nagar","dwarka-delhi"] },
  { slug: "safdarjung-enclave",      name: "Safdarjung Enclave",    city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["green-park","hauz-khas","malviya-nagar","vasant-kunj","greater-kailash","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri"] },
  { slug: "sector-57-gurgaon",       name: "Sector 57 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-56-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon","dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","mg-road-gurgaon","sector-67-gurgaon","vasant-kunj"] },
  { slug: "sector-67-gurgaon",       name: "Sector 67 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","nirvana-country-gurgaon","sector-57-gurgaon","dlf-phase-gurgaon","golf-course-road-gurgaon","sushant-lok-gurgaon","sohna-road-gurgaon","sector-56-gurgaon","mg-road-gurgaon","vasant-kunj"] },
  { slug: "sector-82-gurgaon",       name: "Sector 82 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-83-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon","dlf-phase-gurgaon","golf-course-extension-gurgaon","golf-course-road-gurgaon","sushant-lok-gurgaon","nirvana-country-gurgaon","dwarka-delhi","janakpuri"] },
  { slug: "sector-83-gurgaon",       name: "Sector 83 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon","dlf-phase-gurgaon","golf-course-extension-gurgaon","golf-course-road-gurgaon","sushant-lok-gurgaon","nirvana-country-gurgaon","dwarka-delhi","janakpuri"] },
  { slug: "palam-vihar-gurgaon",     name: "Palam Vihar",           city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","sector-83-gurgaon","dwarka-delhi","sohna-road-gurgaon","dlf-phase-gurgaon","golf-course-extension-gurgaon","sushant-lok-gurgaon","janakpuri","rohini","sector-56-gurgaon"] },
  { slug: "sector-56-gurgaon",       name: "Sector 56 Gurgaon",     city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sushant-lok-gurgaon","sector-57-gurgaon","golf-course-road-gurgaon","dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","mg-road-gurgaon","sector-67-gurgaon","vasant-kunj"] },
  { slug: "mg-road-gurgaon",         name: "MG Road Gurgaon",       city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","sector-56-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon","sector-57-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","vasant-kunj","hauz-khas"] },
  { slug: "sector-50-noida",         name: "Noida Sector 50",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-62-noida","sector-137-noida","sector-76-noida","sector-100-noida","sector-78-noida","sector-150-noida","sector-18-noida","sector-93-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-18-noida",         name: "Noida Sector 18",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-50-noida","sector-62-noida","sector-93-noida","sector-100-noida","sector-137-noida","sector-150-noida","sector-76-noida","sector-78-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-93-noida",         name: "Noida Sector 93",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-78-noida","sector-50-noida","sector-137-noida","sector-150-noida","sector-62-noida","sector-76-noida","sector-18-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-76-noida",         name: "Noida Sector 76",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-62-noida","sector-107-noida","sector-100-noida","sector-137-noida","sector-150-noida","sector-50-noida","sector-18-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-107-noida",        name: "Noida Sector 107",      city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-100-noida","sector-150-noida","greater-noida-west","sector-137-noida","sector-62-noida","sector-78-noida","sector-76-noida","sector-50-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "greater-noida-west",      name: "Greater Noida West",    city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-137-noida","sector-150-noida","sector-100-noida","sector-62-noida","sector-78-noida","sector-76-noida","sector-50-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "nit-faridabad",           name: "NIT Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","sector-21c-faridabad","old-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida"] },
  { slug: "neharpar-faridabad",      name: "Neharpar Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "mid-high",   nearby: ["nit-faridabad","sector-15-faridabad","sector-21c-faridabad","old-faridabad","lajpat-nagar","south-extension","indirapuram","vaishali-ghaziabad","sector-62-noida","greater-kailash"] },
  { slug: "old-faridabad",           name: "Old Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["nit-faridabad","sector-21c-faridabad","sector-15-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida"] },
  // rolloutGroup 3
  { slug: "saket-delhi",              name: "Saket",                  city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","malviya-nagar","green-park","vasant-kunj","defence-colony","south-extension","lajpat-nagar","greater-kailash","janakpuri","dwarka-delhi"] },
  { slug: "panchsheel-park-delhi",    name: "Panchsheel Park",        city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","green-park","vasant-kunj","greater-kailash","defence-colony","south-extension","lajpat-nagar","malviya-nagar","safdarjung-enclave","janakpuri"] },
  { slug: "model-town-delhi",         name: "Model Town",             city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["pitampura","rohini","civil-lines-delhi","punjabi-bagh","paschim-vihar","rajouri-garden","janakpuri","dwarka-delhi","lajpat-nagar","hauz-khas"] },
  { slug: "krishna-nagar-delhi",      name: "Krishna Nagar",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["mayur-vihar","lajpat-nagar","kalkaji","greater-kailash","hauz-khas","defence-colony","south-extension","green-park","sector-62-noida","vasant-kunj"] },
  { slug: "vasundhara-enclave-delhi", name: "Vasundhara Enclave",     city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["mayur-vihar","lajpat-nagar","kalkaji","greater-kailash","sector-62-noida","hauz-khas","defence-colony","south-extension","green-park","vasant-kunj"] },
  { slug: "sector-44-gurgaon",        name: "Sector 44 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-45-gurgaon","dlf-phase-gurgaon","sector-46-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","hauz-khas","vasant-kunj"] },
  { slug: "sector-45-gurgaon",        name: "Sector 45 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-44-gurgaon","golf-course-road-gurgaon","sector-46-gurgaon","dlf-phase-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","hauz-khas","vasant-kunj"] },
  { slug: "sector-46-gurgaon",        name: "Sector 46 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-45-gurgaon","golf-course-road-gurgaon","sector-47-gurgaon","dlf-phase-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","hauz-khas","vasant-kunj"] },
  { slug: "sector-54-gurgaon",        name: "Sector 54 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-53-gurgaon","dlf-phase-gurgaon","sector-55-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","hauz-khas","vasant-kunj"] },
  { slug: "sector-55-gurgaon",        name: "Sector 55 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-54-gurgaon","golf-course-road-gurgaon","sector-56-gurgaon","dlf-phase-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","hauz-khas","vasant-kunj"] },
  { slug: "sector-110-noida",         name: "Noida Sector 110",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-119-noida","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-119-noida",         name: "Noida Sector 119",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-137-noida","sector-150-noida","sector-100-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-128-noida",         name: "Noida Sector 128",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-137-noida","sector-150-noida","sector-100-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-44-noida",          name: "Noida Sector 44",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-50-noida","sector-62-noida","sector-45-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  { slug: "sector-45-noida",          name: "Noida Sector 45",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-44-noida","sector-50-noida","sector-62-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  { slug: "sector-93a-noida",         name: "Noida Sector 93A",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-93-noida","sector-137-noida","sector-150-noida","sector-100-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "vasundhara-ghaziabad",     name: "Vasundhara Ghaziabad",   city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["indirapuram","vaishali-ghaziabad","kaushambi-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","lajpat-nagar","greater-kailash","sector-15-faridabad"] },
  { slug: "kaushambi-ghaziabad",      name: "Kaushambi Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["vaishali-ghaziabad","indirapuram","vasundhara-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","lajpat-nagar","greater-kailash","sector-15-faridabad"] },
  { slug: "raj-nagar-ghaziabad",      name: "Raj Nagar Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","vasundhara-ghaziabad","vaishali-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","lajpat-nagar","greater-kailash","sector-15-faridabad","sector-21c-faridabad"] },
  { slug: "sector-86-faridabad",      name: "Sector 86 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-85-faridabad","sector-87-faridabad","sector-88-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-88-faridabad",      name: "Sector 88 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-86-faridabad","sector-89-faridabad","sector-87-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-89-faridabad",      name: "Sector 89 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-88-faridabad","sector-90-faridabad","neharpar-faridabad","sector-86-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-90-faridabad",      name: "Sector 90 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-89-faridabad","sector-91-faridabad","neharpar-faridabad","sector-88-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-91-faridabad",      name: "Sector 91 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-90-faridabad","sector-92-faridabad","neharpar-faridabad","sector-89-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-92-faridabad",      name: "Sector 92 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-91-faridabad","sector-93-faridabad","neharpar-faridabad","sector-90-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
];

// ─── Build entries ────────────────────────────────────────────────────────────

function buildEntry(r: RawLocality, tier: "affordable" | "low-cost"): KitchenBudgetLocalityEntry {
  const base = tier === "affordable" ? AFFORDABLE_BASE : LOW_COST_BASE;
  const cm = CITY_MULT[r.city];
  const priceMin = rnd(base * cm * AFF_MIN[r.aff]);
  const priceMax = rnd(base * cm * AFF_MAX[r.aff]);
  const prefix = tier === "affordable" ? "affordable" : "low-cost";
  return {
    urlSlug: `${prefix}-modular-kitchen-${r.slug}`,
    localitySlug: r.slug,
    localityName: r.name,
    budgetTier: tier,
    citySlug: r.city,
    cityName: r.cityName,
    affluence: r.aff,
    priceMin,
    priceMax,
    nearby: r.nearby,
  };
}

export const KITCHEN_BUDGET_LOCALITY_REGISTRY: readonly KitchenBudgetLocalityEntry[] = [
  ...RAW.map((r) => buildEntry(r, "affordable")),
  ...RAW.map((r) => buildEntry(r, "low-cost")),
] as const;

// ─── Lookup helper ────────────────────────────────────────────────────────────

export function getBudgetLocalityEntry(urlSlug: string): KitchenBudgetLocalityEntry | undefined {
  return KITCHEN_BUDGET_LOCALITY_REGISTRY.find((e) => e.urlSlug === urlSlug);
}

// ─── FAQ builder ─────────────────────────────────────────────────────────────

export function buildBudgetLocalityFaqs(
  e: KitchenBudgetLocalityEntry,
): readonly { readonly q: string; readonly a: string }[] {
  const fmt = (n: number) =>
    `₹${(n / 100_000).toFixed(1).replace(/\.0$/, "")} lakh`;
  const range = `${fmt(e.priceMin)}–${fmt(e.priceMax)}`;

  if (e.budgetTier === "affordable") {
    return [
      {
        q: `What does an affordable modular kitchen cost in ${e.localityName}, ${e.cityName}?`,
        a: `For a standard 8–10 ft parallel or L-shaped kitchen in ${e.localityName}, an affordable modular kitchen typically falls in the ${range} range. This covers laminate or membrane-finish shutters, mid-range hardware (soft-close hinges, drawer channels), 18 mm BWP plywood carcasses, and basic granite or quartz countertops. Final pricing depends on layout complexity and the number of accessories.`,
      },
      {
        q: `Which finishes are used in affordable modular kitchens in ${e.localityName}?`,
        a: `Affordable kitchens in ${e.localityName} most commonly use laminate (matte, gloss, or woodgrain) and membrane-pressed finishes on MDF shutters. These finishes are durable, easy to clean, and significantly more economical than acrylic or lacquered glass. Membrane profiles also allow for subtle 3D textures that lift the overall look without adding major cost.`,
      },
      {
        q: `What hardware quality can I expect in this price range?`,
        a: `At the affordable tier, you receive mid-range hardware — typically Hettich or equivalent soft-close hinges, tandem box drawer systems, and channel-based cutlery organizers. Full-extension soft-close drawers and magic-corner units are available as upgrades. This hardware is robust enough for daily family use and generally carries a 5–10-year manufacturer warranty.`,
      },
      {
        q: `Is a 10-year warranty included with affordable modular kitchens in ${e.localityName}?`,
        a: `Yes. Reputable modular kitchen brands operating in ${e.localityName} and the wider ${e.cityName} market offer a 10-year structural warranty on the carcass and a 1–2-year service warranty on hardware and finish. Always confirm warranty terms in writing before signing, and verify whether the warranty covers on-site visits or only part replacement.`,
      },
    ] as const;
  }

  // low-cost tier
  return [
    {
      q: `How much does a low-cost modular kitchen cost in ${e.localityName}, ${e.cityName}?`,
      a: `A low-cost modular kitchen in ${e.localityName} is typically priced between ${range} for a standard 8–10 ft layout. This price bracket uses laminate shutters on MDF or commercial-ply carcasses, standard (non-soft-close) hardware, and basic stone or tile countertops. It is ideal for rental homes, second kitchens, or buyers who prioritise function over premium aesthetics.`,
    },
    {
      q: `What finishes are used in low-cost modular kitchens in ${e.localityName}?`,
      a: `Low-cost kitchens in ${e.localityName} primarily use economy laminate finishes — solid colours or simple woodgrain patterns bonded onto MDF or HMR board shutters. These are practical and easy to wipe clean, though they may show wear faster than membrane or acrylic finishes over a 7–10-year horizon. Edge-banding quality is the most visible differentiator at this price point; insist on laser or EVA-glued edges.`,
    },
    {
      q: `What are the honest trade-offs of choosing a low-cost modular kitchen?`,
      a: `At the low-cost tier in ${e.localityName} you get functional cabinetry and a clean, modular look — but with standard (not soft-close) hinges and channels, thinner countertop slabs, and fewer internal accessories (pull-outs, magic corners, and tall-unit organisers are typically add-ons). Carcass material may be commercial ply rather than BWP, which matters in humid kitchens. You will not get premium brand hardware, and finish options are more limited.`,
    },
    {
      q: `What do I get and what is excluded in a low-cost modular kitchen package in ${e.localityName}?`,
      a: `A typical low-cost package in ${e.localityName} (${range}) includes base and wall cabinets, standard laminate shutters, one countertop slab, a basic sink cutout, and standard hinges and channels. Excluded are: soft-close hardware, internal drawer organisers, a chimney or hob, electrical work, plumbing, installation of appliances, and premium accessories like tandem drawers or wicker baskets. Always request a detailed BOQ (bill of quantities) to compare quotes accurately.`,
    },
  ] as const;
}
