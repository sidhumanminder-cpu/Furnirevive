export type RenovationType = "renovation" | "remodeling" | "makeover";

export type KitchenRenovationEntry = {
  urlSlug: string;
  renovationType: RenovationType;
  localitySlug: string;
  localityName: string;
  citySlug: "delhi" | "gurgaon" | "noida" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceMin: number;
  priceMax: number;
  nearbyLocalities: string[];
};

type RawLocality = {
  slug: string;
  name: string;
  city: KitchenRenovationEntry["citySlug"];
  cityName: string;
  aff: KitchenRenovationEntry["affluence"];
  nearby: string[];
};

const RAW: RawLocality[] = [
  { slug: "greater-kailash",             name: "Greater Kailash",       city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","hauz-khas","lajpat-nagar","defence-colony","south-extension"] },
  { slug: "vasant-kunj",                 name: "Vasant Kunj",           city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","hauz-khas","green-park","janakpuri","dwarka-delhi"] },
  { slug: "hauz-khas",                   name: "Hauz Khas",             city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","vasant-kunj","green-park","defence-colony"] },
  { slug: "defence-colony",              name: "Defence Colony",        city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","hauz-khas","south-extension"] },
  { slug: "south-extension",             name: "South Extension",       city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","defence-colony","greater-kailash"] },
  { slug: "green-park",                  name: "Green Park",            city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","defence-colony","greater-kailash"] },
  { slug: "dwarka-delhi",                name: "Dwarka",                city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["janakpuri","rohini","vasant-kunj"] },
  { slug: "rohini",                      name: "Rohini",                city: "delhi",     cityName: "Delhi",     aff: "mid",        nearby: ["dwarka-delhi","janakpuri"] },
  { slug: "janakpuri",                   name: "Janakpuri",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["dwarka-delhi","rohini","vasant-kunj"] },
  { slug: "lajpat-nagar",                name: "Lajpat Nagar",         city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["south-extension","defence-colony","green-park","greater-kailash"] },
  { slug: "dlf-phase-gurgaon",           name: "DLF Phase 1-5",        city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon"] },
  { slug: "golf-course-road-gurgaon",    name: "Golf Course Road",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon"] },
  { slug: "golf-course-extension-gurgaon", name: "Golf Course Extension", city: "gurgaon", cityName: "Gurgaon",  aff: "high",       nearby: ["golf-course-road-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon"] },
  { slug: "sushant-lok-gurgaon",         name: "Sushant Lok",           city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","sohna-road-gurgaon"] },
  { slug: "sohna-road-gurgaon",          name: "Sohna Road",            city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sushant-lok-gurgaon","nirvana-country-gurgaon"] },
  { slug: "nirvana-country-gurgaon",     name: "Nirvana Country",       city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-150-noida",            name: "Noida Sector 150",      city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-137-noida","sector-100-noida","sector-78-noida"] },
  { slug: "sector-137-noida",            name: "Noida Sector 137",      city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-150-noida","sector-100-noida","sector-62-noida"] },
  { slug: "sector-62-noida",             name: "Noida Sector 62",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-100-noida","sector-137-noida"] },
  { slug: "sector-100-noida",            name: "Noida Sector 100",      city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-150-noida","sector-62-noida","sector-78-noida"] },
  { slug: "sector-78-noida",             name: "Noida Sector 78",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-62-noida","sector-100-noida","sector-150-noida"] },
  { slug: "indirapuram",                 name: "Indirapuram",           city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["vaishali-ghaziabad"] },
  { slug: "vaishali-ghaziabad",          name: "Vaishali",              city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram"] },
  { slug: "sector-15-faridabad",         name: "Faridabad Sector 15",   city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-21c-faridabad"] },
  { slug: "sector-21c-faridabad",        name: "Sector 21C Faridabad",  city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad"] },
  // ─── Rollout Group 2 ───────────────────────────────────────────────────────
  // Delhi (9)
  { slug: "pitampura",                  name: "Pitampura",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","rohini","paschim-vihar"] },
  { slug: "punjabi-bagh",               name: "Punjabi Bagh",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["rajouri-garden","pitampura","paschim-vihar"] },
  { slug: "rajouri-garden",             name: "Rajouri Garden",        city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","janakpuri","paschim-vihar"] },
  { slug: "mayur-vihar",                name: "Mayur Vihar",           city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["paschim-vihar","lajpat-nagar","kalkaji"] },
  { slug: "paschim-vihar",              name: "Paschim Vihar",         city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["punjabi-bagh","pitampura","rohini"] },
  { slug: "kalkaji",                    name: "Kalkaji",               city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["greater-kailash","lajpat-nagar","mayur-vihar"] },
  { slug: "malviya-nagar",              name: "Malviya Nagar",         city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","safdarjung-enclave"] },
  { slug: "vasant-vihar",               name: "Vasant Vihar",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","safdarjung-enclave","malviya-nagar"] },
  { slug: "safdarjung-enclave",         name: "Safdarjung Enclave",    city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["green-park","hauz-khas","malviya-nagar"] },
  // Gurgaon (7)
  { slug: "sector-57-gurgaon",          name: "Sector 57 Gurgaon",    city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-56-gurgaon","sushant-lok-gurgaon","golf-course-road-gurgaon"] },
  { slug: "sector-67-gurgaon",          name: "Sector 67 Gurgaon",    city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","nirvana-country-gurgaon","sector-57-gurgaon"] },
  { slug: "sector-82-gurgaon",          name: "Sector 82 Gurgaon",    city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-83-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon"] },
  { slug: "sector-83-gurgaon",          name: "Sector 83 Gurgaon",    city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","palam-vihar-gurgaon","sohna-road-gurgaon"] },
  { slug: "palam-vihar-gurgaon",        name: "Palam Vihar",           city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sector-82-gurgaon","sector-83-gurgaon","dwarka-delhi"] },
  { slug: "sector-56-gurgaon",          name: "Sector 56 Gurgaon",    city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sushant-lok-gurgaon","sector-57-gurgaon","golf-course-road-gurgaon"] },
  { slug: "mg-road-gurgaon",            name: "MG Road Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","sector-56-gurgaon","sushant-lok-gurgaon"] },
  // Noida (6)
  { slug: "sector-50-noida",            name: "Noida Sector 50",      city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-62-noida","sector-137-noida","sector-76-noida"] },
  { slug: "sector-18-noida",            name: "Noida Sector 18",      city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-50-noida","sector-62-noida","sector-93-noida"] },
  { slug: "sector-93-noida",            name: "Noida Sector 93",      city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-94-noida","sector-78-noida"] },
  { slug: "sector-76-noida",            name: "Noida Sector 76",      city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-62-noida","sector-107-noida"] },
  { slug: "sector-107-noida",           name: "Noida Sector 107",     city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-100-noida","sector-150-noida","greater-noida-west"] },
  { slug: "greater-noida-west",         name: "Greater Noida West",   city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-137-noida","sector-150-noida"] },
  // Faridabad (3)
  { slug: "nit-faridabad",              name: "NIT Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","sector-21c-faridabad","old-faridabad"] },
  { slug: "neharpar-faridabad",         name: "Neharpar Faridabad",   city: "faridabad", cityName: "Faridabad", aff: "mid-high",   nearby: ["nit-faridabad","sector-15-faridabad","sector-21c-faridabad"] },
  { slug: "old-faridabad",              name: "Old Faridabad",         city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["nit-faridabad","sector-21c-faridabad","sector-15-faridabad"] },
  // ─── Rollout Group 3 ───────────────────────────────────────────────────────
  { slug: "saket-delhi",              name: "Saket",                  city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","malviya-nagar","green-park","vasant-kunj"] },
  { slug: "panchsheel-park-delhi",    name: "Panchsheel Park",        city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["hauz-khas","green-park","vasant-kunj","greater-kailash"] },
  { slug: "model-town-delhi",         name: "Model Town",             city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["pitampura","rohini","civil-lines-delhi"] },
  { slug: "krishna-nagar-delhi",      name: "Krishna Nagar",          city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["mayur-vihar","lajpat-nagar","kalkaji"] },
  { slug: "vasundhara-enclave-delhi", name: "Vasundhara Enclave",     city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["mayur-vihar","lajpat-nagar","kalkaji"] },
  { slug: "sector-44-gurgaon",        name: "Sector 44 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-45-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-45-gurgaon",        name: "Sector 45 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-44-gurgaon","golf-course-road-gurgaon","sector-46-gurgaon"] },
  { slug: "sector-46-gurgaon",        name: "Sector 46 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["sector-45-gurgaon","golf-course-road-gurgaon","sector-47-gurgaon"] },
  { slug: "sector-54-gurgaon",        name: "Sector 54 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sector-53-gurgaon","dlf-phase-gurgaon"] },
  { slug: "sector-55-gurgaon",        name: "Sector 55 Gurgaon",      city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["sector-54-gurgaon","golf-course-road-gurgaon","sector-56-gurgaon"] },
  { slug: "sector-110-noida",         name: "Noida Sector 110",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-100-noida","sector-119-noida","sector-137-noida"] },
  { slug: "sector-119-noida",         name: "Noida Sector 119",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-137-noida","sector-150-noida"] },
  { slug: "sector-128-noida",         name: "Noida Sector 128",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-137-noida","sector-150-noida","sector-100-noida"] },
  { slug: "sector-44-noida",          name: "Noida Sector 44",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-50-noida","sector-62-noida","sector-45-noida"] },
  { slug: "sector-45-noida",          name: "Noida Sector 45",        city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-44-noida","sector-50-noida","sector-62-noida"] },
  { slug: "sector-93a-noida",         name: "Noida Sector 93A",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-93-noida","sector-137-noida","sector-150-noida"] },
  // Noida — Expressway belt & gap fills (27)
  { slug: "expressway-corridor-noida", name: "Noida Expressway Corridor", city: "noida", cityName: "Noida", aff: "ultra-high", nearby: ["sector-100-noida","sector-150-noida","sector-137-noida"] },
  { slug: "sector-47-noida",          name: "Noida Sector 47",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-50-noida","sector-62-noida","sector-44-noida"] },
  { slug: "sector-71-noida",          name: "Noida Sector 71",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-62-noida","sector-50-noida"] },
  { slug: "sector-72-noida",          name: "Noida Sector 72",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-71-noida","sector-73-noida","sector-62-noida"] },
  { slug: "sector-73-noida",          name: "Noida Sector 73",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-74-noida","sector-62-noida"] },
  { slug: "sector-74-noida",          name: "Noida Sector 74",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-73-noida","sector-75-noida","sector-78-noida"] },
  { slug: "sector-75-noida",          name: "Noida Sector 75",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-74-noida","sector-76-noida","sector-78-noida"] },
  { slug: "sector-77-noida",          name: "Noida Sector 77",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-76-noida","sector-78-noida","sector-79-noida"] },
  { slug: "sector-79-noida",          name: "Noida Sector 79",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-77-noida","sector-78-noida","sector-80-noida"] },
  { slug: "sector-92-noida",          name: "Noida Sector 92",        city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-93-noida","sector-100-noida","sector-62-noida"] },
  { slug: "sector-94-noida",          name: "Noida Sector 94",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-93-noida","sector-96-noida","sector-100-noida"] },
  { slug: "sector-96-noida",          name: "Noida Sector 96",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-94-noida","sector-97-noida","sector-100-noida"] },
  { slug: "sector-97-noida",          name: "Noida Sector 97",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-96-noida","sector-98-noida","sector-100-noida"] },
  { slug: "sector-98-noida",          name: "Noida Sector 98",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-97-noida","sector-99-noida","sector-100-noida"] },
  { slug: "sector-99-noida",          name: "Noida Sector 99",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-98-noida","sector-100-noida","sector-107-noida"] },
  { slug: "sector-104-noida",         name: "Noida Sector 104",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-100-noida","sector-99-noida"] },
  { slug: "sector-113-noida",         name: "Noida Sector 113",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-124-noida","expressway-corridor-noida"] },
  { slug: "sector-117-noida",         name: "Noida Sector 117",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-118-noida","sector-137-noida","sector-143-noida"] },
  { slug: "sector-118-noida",         name: "Noida Sector 118",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-117-noida","sector-119-noida","sector-137-noida"] },
  { slug: "sector-120-noida",         name: "Noida Sector 120",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-119-noida","sector-121-noida","sector-137-noida"] },
  { slug: "sector-121-noida",         name: "Noida Sector 121",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-120-noida","sector-122-noida","sector-137-noida"] },
  { slug: "sector-122-noida",         name: "Noida Sector 122",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-121-noida","sector-123-noida","sector-137-noida"] },
  { slug: "sector-124-noida",         name: "Noida Sector 124",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-113-noida","expressway-corridor-noida"] },
  { slug: "sector-125-noida",         name: "Noida Sector 125",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-124-noida","sector-126-noida","expressway-corridor-noida"] },
  { slug: "sector-126-noida",         name: "Noida Sector 126",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-137-noida","expressway-corridor-noida"] },
  { slug: "sector-134-noida",         name: "Noida Sector 134",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-135-noida","sector-133-noida","sector-137-noida"] },
  { slug: "sector-135-noida",         name: "Noida Sector 135",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-134-noida","sector-136-noida","sector-137-noida"] },
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
  { slug: "vasundhara-ghaziabad",     name: "Vasundhara Ghaziabad",   city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["indirapuram","vaishali-ghaziabad","kaushambi-ghaziabad"] },
  { slug: "kaushambi-ghaziabad",      name: "Kaushambi Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["vaishali-ghaziabad","indirapuram","vasundhara-ghaziabad"] },
  { slug: "raj-nagar-ghaziabad",      name: "Raj Nagar Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","vasundhara-ghaziabad","vaishali-ghaziabad"] },
  { slug: "sector-86-faridabad",      name: "Sector 86 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-85-faridabad","sector-87-faridabad"] },
  { slug: "sector-88-faridabad",      name: "Sector 88 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-86-faridabad","sector-89-faridabad"] },
  { slug: "sector-89-faridabad",      name: "Sector 89 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-88-faridabad","sector-90-faridabad","neharpar-faridabad"] },
  { slug: "sector-90-faridabad",      name: "Sector 90 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-89-faridabad","sector-91-faridabad","neharpar-faridabad"] },
  { slug: "sector-91-faridabad",      name: "Sector 91 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-90-faridabad","sector-92-faridabad","neharpar-faridabad"] },
  { slug: "sector-92-faridabad",      name: "Sector 92 Faridabad",    city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-91-faridabad","sector-93-faridabad","neharpar-faridabad"] },
  // Chandigarh (15)
  { slug: "sector-17-chandigarh",  name: "Sector 17 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-22-chandigarh","sector-21-chandigarh"] },
  { slug: "sector-22-chandigarh",  name: "Sector 22 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-21-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-34-chandigarh",  name: "Sector 34 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-35-chandigarh","sector-43-chandigarh"] },
  { slug: "sector-35-chandigarh",  name: "Sector 35 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-34-chandigarh","sector-36-chandigarh"] },
  { slug: "sector-43-chandigarh",  name: "Sector 43 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-44-chandigarh","sector-45-chandigarh"] },
  { slug: "sector-44-chandigarh",  name: "Sector 44 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-43-chandigarh","sector-45-chandigarh"] },
  { slug: "sector-45-chandigarh",  name: "Sector 45 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-44-chandigarh","sector-46-chandigarh"] },
  { slug: "sector-46-chandigarh",  name: "Sector 46 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-45-chandigarh","sector-47-chandigarh"] },
  { slug: "sector-47-chandigarh",  name: "Sector 47 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-46-chandigarh","phase-1-mohali"] },
  { slug: "sector-36-chandigarh",  name: "Sector 36 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-35-chandigarh","sector-37-chandigarh"] },
  { slug: "sector-37-chandigarh",  name: "Sector 37 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-36-chandigarh","sector-38-chandigarh"] },
  { slug: "sector-38-chandigarh",  name: "Sector 38 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-37-chandigarh","sector-43-chandigarh"] },
  { slug: "sector-21-chandigarh",  name: "Sector 21 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-22-chandigarh","sector-20-chandigarh"] },
  { slug: "manimajra-chandigarh",  name: "Manimajra Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid",        nearby: ["sector-47-chandigarh","sector-8-panchkula"] },
  // Mohali (20)
  { slug: "phase-1-mohali",        name: "Phase 1 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-2-mohali","sector-46-chandigarh"] },
  { slug: "phase-3b2-mohali",      name: "Phase 3B2 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-4-mohali","sector-67-mohali"] },
  { slug: "phase-7-mohali",        name: "Phase 7 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-6-mohali","sector-66-mohali"] },
  { slug: "sector-66-mohali",      name: "Sector 66 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-70-mohali","it-city-mohali"] },
  { slug: "sector-70-mohali",      name: "Sector 70 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","aerocity-mohali"] },
  { slug: "aerocity-mohali",       name: "Aerocity Mohali",       city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-68-mohali"] },
  { slug: "it-city-mohali",        name: "IT City Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-70-mohali"] },
  { slug: "sector-71-mohali",      name: "Sector 71 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-70-mohali","aerocity-mohali"] },
  { slug: "sector-76-mohali",      name: "Sector 76 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-77-mohali","aerocity-mohali"] },
  { slug: "sector-82-mohali",      name: "Sector 82 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["aerocity-mohali","sector-81-mohali"] },
  { slug: "sector-85-mohali",      name: "Sector 85 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["new-chandigarh-mohali","kharar-mohali"] },
  { slug: "zirakpur-mohali",       name: "Zirakpur Mohali",       city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["dhakoli-panchkula","aerocity-mohali"] },
  { slug: "new-chandigarh-mohali", name: "New Chandigarh Mohali", city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["kharar-mohali","sector-85-mohali"] },
  { slug: "kharar-mohali",         name: "Kharar Mohali",         city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["sunny-enclave-mohali","new-chandigarh-mohali"] },
  { slug: "sunny-enclave-mohali",  name: "Sunny Enclave Mohali",  city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["kharar-mohali","sector-85-mohali"] },
  { slug: "phase-5-mohali",        name: "Phase 5 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-4-mohali","phase-6-mohali"] },
  { slug: "phase-10-mohali",       name: "Phase 10 Mohali",       city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-9-mohali","phase-11-mohali"] },
  { slug: "sector-68-mohali",      name: "Sector 68 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["aerocity-mohali","sector-69-mohali"] },
  { slug: "derabassi-mohali",      name: "Derabassi Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["zirakpur-mohali","lalru-mohali"] },
  // Panchkula (15)
  { slug: "sector-5-panchkula",    name: "Sector 5 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-7-panchkula","sector-4-panchkula"] },
  { slug: "sector-7-panchkula",    name: "Sector 7 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-8-panchkula","sector-9-panchkula"] },
  { slug: "sector-8-panchkula",    name: "Sector 8 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-7-panchkula","sector-9-panchkula"] },
  { slug: "sector-9-panchkula",    name: "Sector 9 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-8-panchkula","sector-10-panchkula"] },
  { slug: "sector-10-panchkula",   name: "Sector 10 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-9-panchkula","sector-11-panchkula"] },
  { slug: "sector-11-panchkula",   name: "Sector 11 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-10-panchkula","mdc-sector-5-panchkula"] },
  { slug: "sector-12-panchkula",   name: "Sector 12 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-11-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-15-panchkula",   name: "Sector 15 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["sector-12-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-17-panchkula",   name: "Sector 17 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-15-panchkula","mdc-sector-5-panchkula"] },
  { slug: "mdc-sector-4-panchkula",name: "MDC Sector 4 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-5-panchkula","sector-12-panchkula"] },
  { slug: "mdc-sector-5-panchkula",name: "MDC Sector 5 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-4-panchkula","sector-11-panchkula"] },
  { slug: "sector-20-panchkula",   name: "Sector 20 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["dhakoli-panchkula","sector-21-panchkula"] },
  { slug: "sector-21-panchkula",   name: "Sector 21 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["sector-20-panchkula","dhakoli-panchkula"] },
  { slug: "kalka-panchkula",       name: "Kalka Panchkula",       city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["pinjore-panchkula","sector-15-panchkula"] },
  { slug: "dhakoli-panchkula",     name: "Dhakoli Panchkula",     city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["zirakpur-mohali","sector-20-panchkula"] },
];

const CITY_MULT: Record<KitchenRenovationEntry["citySlug"], number> = { delhi: 1.1, gurgaon: 1.25, noida: 1.0, faridabad: 0.88, ghaziabad: 0.85, chandigarh: 1.05, mohali: 1.0, panchkula: 1.0 };

const RENO_MIN: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 2.5, "high": 1.8, "mid-high": 1.2, "mid": 0.9 };
const RENO_MAX: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 6.0, "high": 4.5, "mid-high": 3.0, "mid": 2.2 };
const BASE_RENO = 150000;

const REMOD_MIN: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 1.5, "high": 1.1, "mid-high": 0.8, "mid": 0.6 };
const REMOD_MAX: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 3.5, "high": 2.5, "mid-high": 1.8, "mid": 1.3 };
const BASE_REMOD = 120000;

const MAKE_MIN: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 0.8, "high": 0.6, "mid-high": 0.4, "mid": 0.3 };
const MAKE_MAX: Record<KitchenRenovationEntry["affluence"], number> = { "ultra-high": 2.0, "high": 1.5, "mid-high": 1.0, "mid": 0.8 };
const BASE_MAKE = 80000;

function rnd(n: number): number { return Math.round(n / 5000) * 5000; }

type PriceBands = { minMult: Record<KitchenRenovationEntry["affluence"], number>; maxMult: Record<KitchenRenovationEntry["affluence"], number>; base: number };

const PRICE_CONFIG: Record<RenovationType, PriceBands> = {
  renovation: { minMult: RENO_MIN, maxMult: RENO_MAX, base: BASE_RENO },
  remodeling:  { minMult: REMOD_MIN, maxMult: REMOD_MAX, base: BASE_REMOD },
  makeover:    { minMult: MAKE_MIN, maxMult: MAKE_MAX, base: BASE_MAKE },
};

const SLUG_PREFIX: Record<RenovationType, string> = {
  renovation: "modular-kitchen-renovation",
  remodeling: "kitchen-remodeling",
  makeover:   "kitchen-makeover",
};

function buildEntry(raw: RawLocality, type: RenovationType): KitchenRenovationEntry {
  const { minMult, maxMult, base } = PRICE_CONFIG[type];
  const cm = CITY_MULT[raw.city];
  return {
    urlSlug: `${SLUG_PREFIX[type]}-${raw.slug}`,
    renovationType: type,
    localitySlug: raw.slug,
    localityName: raw.name,
    citySlug: raw.city,
    cityName: raw.cityName,
    affluence: raw.aff,
    priceMin: rnd(base * minMult[raw.aff] * cm),
    priceMax: rnd(base * maxMult[raw.aff] * cm),
    nearbyLocalities: raw.nearby,
  };
}

const TYPES: RenovationType[] = ["renovation", "remodeling", "makeover"];

export const KITCHEN_RENOVATION_REGISTRY: KitchenRenovationEntry[] = RAW.flatMap((raw) =>
  TYPES.map((type) => buildEntry(raw, type))
);

// ── FAQ builder ────────────────────────────────────────────────────────────────

const RENO_FAQS = (e: KitchenRenovationEntry) => [
  { q: `What does a full modular kitchen renovation in ${e.localityName} include?`, a: `A full renovation covers complete demolition of the existing kitchen layout, replacement of all cabinetry, countertops, backsplash, flooring, plumbing fixtures, and electrical points. In ${e.localityName} we handle end-to-end project management so you receive a brand-new kitchen.` },
  { q: `Do I need any permits for kitchen renovation in ${e.cityName}?`, a: `Structural changes and electrical/plumbing rerouting in ${e.cityName} may require society NOC or municipal approval. Our team verifies applicable regulations in ${e.localityName} and helps obtain necessary permissions before work begins.` },
  { q: `How long does a kitchen renovation take in ${e.localityName}?`, a: `A complete kitchen renovation in ${e.localityName} typically takes 12–18 working days depending on scope, material lead times, and the size of the kitchen. We share a day-wise schedule before kick-off.` },
  { q: `Can load-bearing walls be altered during renovation?`, a: `Structural changes in ${e.localityName} properties require a structural engineer's assessment. We coordinate this evaluation and proceed only with written approval from the relevant authority or building society.` },
  { q: `What is the approximate cost of kitchen renovation in ${e.localityName}?`, a: `For ${e.localityName}, kitchen renovation pricing starts from ₹${(e.priceMin / 100000).toFixed(1)} lakh and can go up to ₹${(e.priceMax / 100000).toFixed(1)} lakh depending on size, finishes, and appliances chosen.` },
  { q: `Do you provide warranty on kitchen renovation work in ${e.cityName}?`, a: `Yes. All renovation work in ${e.cityName} carries a 1-year on-site service warranty on workmanship and a manufacturer warranty on hardware fittings, countertops, and modular components.` },
] as const;

const REMOD_FAQS = (e: KitchenRenovationEntry) => [
  { q: `What is the difference between kitchen remodeling and full renovation in ${e.localityName}?`, a: `Remodeling is a partial upgrade — we retain the existing structure and plumbing positions while replacing cabinets, countertops, and finishes. It is less disruptive and more budget-friendly than a full renovation for ${e.localityName} homeowners.` },
  { q: `What parts of the kitchen stay unchanged during remodeling?`, a: `During a remodel in ${e.localityName} we typically keep existing plumbing lines, main electrical circuits, and the floor slab intact. Only surfaces, cabinets, and fixtures are replaced or upgraded.` },
  { q: `How long does kitchen remodeling take in ${e.localityName}?`, a: `Kitchen remodeling in ${e.localityName} is completed in 7–10 working days. Because we work within the existing layout, there is minimal debris and faster installation.` },
  { q: `Will the plumbing need to be changed during remodeling in ${e.cityName}?`, a: `Plumbing changes during a remodel in ${e.cityName} are limited to fixture replacements (sink, tap) at existing points. If you need inlet/drain rerouting, that is quoted separately and adds 1–2 extra days.` },
  { q: `What is the estimated cost for kitchen remodeling in ${e.localityName}?`, a: `Kitchen remodeling in ${e.localityName} is priced between ₹${(e.priceMin / 100000).toFixed(1)} lakh and ₹${(e.priceMax / 100000).toFixed(1)} lakh, depending on cabinet material, countertop choice, and appliance upgrades.` },
  { q: `Can I stay at home during kitchen remodeling in ${e.localityName}?`, a: `Most homeowners in ${e.localityName} remain at home during remodeling. Work is contained to the kitchen zone, dust sheets are used, and daily clean-up is done at the end of each shift.` },
] as const;

const MAKE_FAQS = (e: KitchenRenovationEntry) => [
  { q: `What finish options are available for a kitchen makeover in ${e.localityName}?`, a: `For a kitchen makeover in ${e.localityName} we offer membrane, acrylic, PU paint, and laminate finishes for cabinet shutters. Countertop options include compact laminate, tile overlay, and thin-profile quartz.` },
  { q: `Can I upgrade just the hardware during a kitchen makeover?`, a: `Absolutely. In ${e.localityName} a hardware-only makeover — replacing handles, hinges, and drawer channels — is the most cost-effective refresh and can be done in a single day without dismantling anything.` },
  { q: `How long does a kitchen makeover take in ${e.localityName}?`, a: `A kitchen makeover in ${e.localityName} is completed in 3–5 working days. Surface prep, shutter replacement, and hardware installation can be done without heavy civil work.` },
  { q: `Is a kitchen makeover cost-effective compared to full renovation in ${e.cityName}?`, a: `Yes. A makeover in ${e.cityName} costs 40–60 % less than a full renovation while delivering a visually refreshed kitchen. It is ideal when the cabinet carcasses and plumbing are still in good condition.` },
  { q: `What is the price range for a kitchen makeover in ${e.localityName}?`, a: `Kitchen makeover costs in ${e.localityName} range from ₹${(e.priceMin / 100000).toFixed(1)} lakh to ₹${(e.priceMax / 100000).toFixed(1)} lakh depending on the number of shutters, countertop area, and finish quality selected.` },
  { q: `Will a kitchen makeover add resale value to my property in ${e.localityName}?`, a: `A refreshed kitchen consistently improves perceived value in ${e.localityName}'s property market. Updated finishes and modern hardware make a strong first impression without the time and cost of a full renovation.` },
] as const;

const FAQ_BUILDERS: Record<RenovationType, (e: KitchenRenovationEntry) => readonly { q: string; a: string }[]> = {
  renovation: RENO_FAQS,
  remodeling: REMOD_FAQS,
  makeover:   MAKE_FAQS,
};

export function buildRenovationFaqs(entry: KitchenRenovationEntry): readonly { q: string; a: string }[] {
  return FAQ_BUILDERS[entry.renovationType](entry);
}

// ── Helpers ────────────────────────────────────────────────────────────────────

const BY_SLUG = new Map<string, KitchenRenovationEntry>(
  KITCHEN_RENOVATION_REGISTRY.map((e) => [e.urlSlug, e])
);

export function getRenovationEntry(urlSlug: string): KitchenRenovationEntry | undefined {
  return BY_SLUG.get(urlSlug);
}

export function getRenovationsByLocality(localitySlug: string): KitchenRenovationEntry[] {
  return KITCHEN_RENOVATION_REGISTRY.filter((e) => e.localitySlug === localitySlug);
}
