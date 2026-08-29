export type KitchenPriceRangeLocalityEntry = {
  urlSlug: string;
  localitySlug: string;
  localityName: string;
  priceCap: "1-lakh" | "1-5-lakh" | "2-lakh" | "3-lakh";
  priceCapLabel: string;
  priceCapValue: number;
  citySlug: "delhi" | "gurgaon" | "noida" | "faridabad" | "ghaziabad" | "chandigarh" | "mohali" | "panchkula";
  cityName: string;
  affluence: "ultra-high" | "high" | "mid-high" | "mid";
  priceFrom: number;
  nearby: string[];
};

// ---------------------------------------------------------------------------
// Price-cap definitions
// ---------------------------------------------------------------------------

const PRICE_CAPS = [
  { priceCap: "1-lakh",   priceCapLabel: "₹1 Lakh",   priceCapValue: 100000, urlSegment: "1-lakh"   },
  { priceCap: "1-5-lakh", priceCapLabel: "₹1.5 Lakh", priceCapValue: 150000, urlSegment: "1-5-lakh" },
  { priceCap: "2-lakh",   priceCapLabel: "₹2 Lakh",   priceCapValue: 200000, urlSegment: "2-lakh"   },
  { priceCap: "3-lakh",   priceCapLabel: "₹3 Lakh",   priceCapValue: 300000, urlSegment: "3-lakh"   },
] as const satisfies {
  priceCap: KitchenPriceRangeLocalityEntry["priceCap"];
  priceCapLabel: string;
  priceCapValue: number;
  urlSegment: string;
}[];

// ---------------------------------------------------------------------------
// Raw locality definitions
// ---------------------------------------------------------------------------

const RAW_LOCALITIES = [
  { slug: "greater-kailash",               name: "Greater Kailash",         city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["vasant-kunj","hauz-khas","lajpat-nagar","defence-colony","south-extension","green-park","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "vasant-kunj",                   name: "Vasant Kunj",              city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","hauz-khas","green-park","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "hauz-khas",                     name: "Hauz Khas",                city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["greater-kailash","vasant-kunj","green-park","defence-colony","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "defence-colony",                name: "Defence Colony",           city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","green-park","hauz-khas","greater-kailash","south-extension","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "south-extension",               name: "South Extension",          city: "delhi",     cityName: "Delhi",     aff: "ultra-high", nearby: ["lajpat-nagar","defence-colony","green-park","greater-kailash","hauz-khas","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "green-park",                    name: "Green Park",               city: "delhi",     cityName: "Delhi",     aff: "high",       nearby: ["hauz-khas","vasant-kunj","defence-colony","greater-kailash","south-extension","lajpat-nagar","dwarka-delhi","janakpuri","rohini","dlf-phase-gurgaon"] },
  { slug: "dwarka-delhi",                  name: "Dwarka",                   city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["janakpuri","rohini","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","dlf-phase-gurgaon"] },
  { slug: "rohini",                        name: "Rohini",                   city: "delhi",     cityName: "Delhi",     aff: "mid",        nearby: ["dwarka-delhi","janakpuri","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","sector-62-noida"] },
  { slug: "janakpuri",                     name: "Janakpuri",                city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["dwarka-delhi","rohini","vasant-kunj","hauz-khas","green-park","greater-kailash","defence-colony","south-extension","lajpat-nagar","dlf-phase-gurgaon"] },
  { slug: "lajpat-nagar",                  name: "Lajpat Nagar",             city: "delhi",     cityName: "Delhi",     aff: "mid-high",   nearby: ["south-extension","defence-colony","green-park","greater-kailash","hauz-khas","vasant-kunj","dwarka-delhi","janakpuri","rohini","sector-62-noida"] },
  { slug: "dlf-phase-gurgaon",             name: "DLF Phase 1-5",            city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["golf-course-road-gurgaon","sushant-lok-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sohna-road-gurgaon","vasant-kunj","dwarka-delhi","janakpuri","hauz-khas","green-park"] },
  { slug: "golf-course-road-gurgaon",      name: "Golf Course Road",         city: "gurgaon",   cityName: "Gurgaon",   aff: "ultra-high", nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon","sohna-road-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "golf-course-extension-gurgaon", name: "Golf Course Extension",    city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-road-gurgaon","nirvana-country-gurgaon","sushant-lok-gurgaon","dlf-phase-gurgaon","sohna-road-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "sushant-lok-gurgaon",           name: "Sushant Lok",              city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["dlf-phase-gurgaon","golf-course-extension-gurgaon","sohna-road-gurgaon","golf-course-road-gurgaon","nirvana-country-gurgaon","vasant-kunj","hauz-khas","dwarka-delhi","green-park","janakpuri"] },
  { slug: "sohna-road-gurgaon",            name: "Sohna Road",               city: "gurgaon",   cityName: "Gurgaon",   aff: "mid-high",   nearby: ["sushant-lok-gurgaon","nirvana-country-gurgaon","golf-course-extension-gurgaon","dlf-phase-gurgaon","golf-course-road-gurgaon","vasant-kunj","hauz-khas","dwarka-delhi","janakpuri","green-park"] },
  { slug: "nirvana-country-gurgaon",       name: "Nirvana Country",          city: "gurgaon",   cityName: "Gurgaon",   aff: "high",       nearby: ["golf-course-extension-gurgaon","golf-course-road-gurgaon","sushant-lok-gurgaon","sohna-road-gurgaon","dlf-phase-gurgaon","vasant-kunj","hauz-khas","green-park","dwarka-delhi","janakpuri"] },
  { slug: "sector-150-noida",              name: "Noida Sector 150",         city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-137-noida","sector-100-noida","sector-78-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-137-noida",              name: "Noida Sector 137",         city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-150-noida","sector-100-noida","sector-78-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-62-noida",               name: "Noida Sector 62",          city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-100-noida",              name: "Noida Sector 100",         city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-150-noida","sector-137-noida","sector-62-noida","sector-78-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-78-noida",               name: "Noida Sector 78",          city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-62-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "indirapuram",                   name: "Indirapuram",              city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["vaishali-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","lajpat-nagar","sector-15-faridabad","sector-21c-faridabad","greater-kailash"] },
  { slug: "vaishali-ghaziabad",            name: "Vaishali",                 city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","sector-150-noida","lajpat-nagar","sector-15-faridabad","sector-21c-faridabad","greater-kailash"] },
  { slug: "sector-15-faridabad",           name: "Faridabad Sector 15",      city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-21c-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida","green-park","hauz-khas"] },
  { slug: "sector-21c-faridabad",          name: "Sector 21C Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida","green-park","hauz-khas"] },
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
  { slug: "sector-93a-noida",         name: "Noida Sector 93A",       city: "noida",     cityName: "Noida",     aff: "ultra-high", nearby: ["sector-93-noida","sector-137-noida","sector-150-noida","sector-100-noida","sector-62-noida","sector-78-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  // Noida — Expressway belt & gap fills (27)
  { slug: "expressway-corridor-noida", name: "Noida Expressway Corridor", city: "noida", cityName: "Noida", aff: "ultra-high", nearby: ["sector-100-noida","sector-150-noida","sector-137-noida","sector-128-noida","sector-110-noida","sector-119-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  { slug: "sector-47-noida",          name: "Noida Sector 47",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-50-noida","sector-62-noida","sector-44-noida","sector-45-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  { slug: "sector-71-noida",          name: "Noida Sector 71",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-62-noida","sector-50-noida","sector-78-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-72-noida",          name: "Noida Sector 72",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-71-noida","sector-73-noida","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-73-noida",          name: "Noida Sector 73",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-72-noida","sector-74-noida","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-74-noida",          name: "Noida Sector 74",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-73-noida","sector-75-noida","sector-78-noida","sector-76-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-75-noida",          name: "Noida Sector 75",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-74-noida","sector-76-noida","sector-78-noida","sector-77-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-77-noida",          name: "Noida Sector 77",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-76-noida","sector-78-noida","sector-79-noida","sector-75-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-79-noida",          name: "Noida Sector 79",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-77-noida","sector-78-noida","sector-80-noida","sector-76-noida","sector-100-noida","sector-137-noida","indirapuram","lajpat-nagar","greater-kailash","vaishali-ghaziabad"] },
  { slug: "sector-92-noida",          name: "Noida Sector 92",        city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-93-noida","sector-100-noida","sector-62-noida","sector-93a-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony"] },
  { slug: "sector-94-noida",          name: "Noida Sector 94",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-93-noida","sector-96-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-96-noida",          name: "Noida Sector 96",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-94-noida","sector-97-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-97-noida",          name: "Noida Sector 97",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-96-noida","sector-98-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-98-noida",          name: "Noida Sector 98",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-97-noida","sector-99-noida","sector-100-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-99-noida",          name: "Noida Sector 99",        city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-98-noida","sector-100-noida","sector-107-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-104-noida",         name: "Noida Sector 104",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-107-noida","sector-100-noida","sector-99-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","vaishali-ghaziabad"] },
  { slug: "sector-113-noida",         name: "Noida Sector 113",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-110-noida","sector-124-noida","expressway-corridor-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-117-noida",         name: "Noida Sector 117",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-118-noida","sector-137-noida","sector-143-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-118-noida",         name: "Noida Sector 118",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-117-noida","sector-119-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-120-noida",         name: "Noida Sector 120",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-119-noida","sector-121-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-121-noida",         name: "Noida Sector 121",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-120-noida","sector-122-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-122-noida",         name: "Noida Sector 122",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-121-noida","sector-123-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-124-noida",         name: "Noida Sector 124",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-113-noida","expressway-corridor-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-125-noida",         name: "Noida Sector 125",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-124-noida","sector-126-noida","expressway-corridor-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension"] },
  { slug: "sector-126-noida",         name: "Noida Sector 126",       city: "noida",     cityName: "Noida",     aff: "high",       nearby: ["sector-125-noida","sector-137-noida","expressway-corridor-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-134-noida",         name: "Noida Sector 134",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-135-noida","sector-133-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  { slug: "sector-135-noida",         name: "Noida Sector 135",       city: "noida",     cityName: "Noida",     aff: "mid-high",   nearby: ["sector-134-noida","sector-136-noida","sector-137-noida","sector-150-noida","indirapuram","lajpat-nagar","greater-kailash","defence-colony","south-extension","vaishali-ghaziabad"] },
  // Greater Noida (16 localities)
  { slug: "sector-alpha-1-greater-noida",   name: "Alpha 1 Greater Noida",   city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-2-greater-noida","sector-beta-1-greater-noida","pari-chowk-greater-noida","knowledge-park-1-greater-noida","sector-gamma-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-alpha-2-greater-noida",   name: "Alpha 2 Greater Noida",   city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-2-greater-noida","knowledge-park-3-greater-noida","knowledge-park-2-greater-noida","sector-gamma-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-beta-1-greater-noida",    name: "Beta 1 Greater Noida",    city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-2-greater-noida","sector-gamma-greater-noida","pari-chowk-greater-noida","knowledge-park-1-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-beta-2-greater-noida",    name: "Beta 2 Greater Noida",    city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-beta-1-greater-noida","sector-alpha-2-greater-noida","sector-gamma-greater-noida","pari-chowk-greater-noida","knowledge-park-2-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-gamma-greater-noida",     name: "Gamma Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-beta-1-greater-noida","sector-delta-greater-noida","sector-alpha-1-greater-noida","pari-chowk-greater-noida","sector-pi-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-delta-greater-noida",     name: "Delta Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-gamma-greater-noida","sector-pi-greater-noida","sector-xu-greater-noida","omaxe-greater-noida","sector-zeta-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-pi-greater-noida",        name: "Pi Greater Noida",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-gamma-greater-noida","sector-delta-greater-noida","pari-chowk-greater-noida","omaxe-greater-noida","knowledge-park-1-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-xu-greater-noida",        name: "Xu Greater Noida",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-delta-greater-noida","sector-pi-greater-noida","sector-zeta-greater-noida","omaxe-greater-noida","tech-zone-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "sector-zeta-greater-noida",      name: "Zeta Greater Noida",      city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-xu-greater-noida","omaxe-greater-noida","tech-zone-greater-noida","sector-delta-greater-noida","sector-pi-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "omaxe-greater-noida",            name: "Omaxe Greater Noida",     city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-zeta-greater-noida","sector-delta-greater-noida","pari-chowk-greater-noida","sector-pi-greater-noida","tech-zone-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "knowledge-park-1-greater-noida", name: "Knowledge Park 1",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-2-greater-noida","sector-alpha-1-greater-noida","pari-chowk-greater-noida","sector-beta-1-greater-noida","sector-pi-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "knowledge-park-2-greater-noida", name: "Knowledge Park 2",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-1-greater-noida","knowledge-park-3-greater-noida","sector-alpha-2-greater-noida","sector-beta-2-greater-noida","sector-alpha-1-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "knowledge-park-3-greater-noida", name: "Knowledge Park 3",        city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["knowledge-park-2-greater-noida","sector-alpha-2-greater-noida","pari-chowk-greater-noida","sector-beta-2-greater-noida","sector-alpha-1-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "pari-chowk-greater-noida",       name: "Pari Chowk Greater Noida",city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-alpha-1-greater-noida","sector-beta-1-greater-noida","knowledge-park-1-greater-noida","sector-pi-greater-noida","omaxe-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "tech-zone-greater-noida",        name: "Tech Zone Greater Noida", city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["sector-zeta-greater-noida","omaxe-greater-noida","sector-xu-greater-noida","sector-delta-greater-noida","sector-pi-greater-noida","greater-noida-west","sector-137-noida","sector-150-noida","indirapuram","vaishali-ghaziabad"] },
  { slug: "gaur-city-2-greater-noida",      name: "Gaur City 2 Greater Noida",city: "noida", cityName: "Greater Noida", aff: "mid-high", nearby: ["greater-noida-west","sector-107-noida","sector-137-noida","sector-150-noida","sector-100-noida","sector-62-noida","indirapuram","vaishali-ghaziabad","lajpat-nagar","greater-kailash"] },
  { slug: "nit-faridabad",           name: "NIT Faridabad",           city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["sector-15-faridabad","sector-21c-faridabad","old-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida"] },
  { slug: "neharpar-faridabad",      name: "Neharpar Faridabad",      city: "faridabad", cityName: "Faridabad", aff: "mid-high",   nearby: ["nit-faridabad","sector-15-faridabad","sector-21c-faridabad","old-faridabad","lajpat-nagar","south-extension","indirapuram","vaishali-ghaziabad","sector-62-noida","greater-kailash"] },
  { slug: "old-faridabad",           name: "Old Faridabad",           city: "faridabad", cityName: "Faridabad", aff: "mid",        nearby: ["nit-faridabad","sector-21c-faridabad","sector-15-faridabad","lajpat-nagar","south-extension","defence-colony","indirapuram","vaishali-ghaziabad","greater-kailash","sector-62-noida"] },
  { slug: "vasundhara-ghaziabad",    name: "Vasundhara Ghaziabad",    city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["indirapuram","vaishali-ghaziabad","kaushambi-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","lajpat-nagar","greater-kailash","sector-15-faridabad"] },
  { slug: "kaushambi-ghaziabad",     name: "Kaushambi Ghaziabad",     city: "ghaziabad", cityName: "Ghaziabad", aff: "high",       nearby: ["vaishali-ghaziabad","indirapuram","vasundhara-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","sector-137-noida","lajpat-nagar","greater-kailash","sector-15-faridabad"] },
  { slug: "raj-nagar-ghaziabad",     name: "Raj Nagar Ghaziabad",     city: "ghaziabad", cityName: "Ghaziabad", aff: "mid-high",   nearby: ["indirapuram","vasundhara-ghaziabad","vaishali-ghaziabad","sector-62-noida","sector-78-noida","sector-100-noida","lajpat-nagar","greater-kailash","sector-15-faridabad","sector-21c-faridabad"] },
  { slug: "sector-86-faridabad",     name: "Sector 86 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-85-faridabad","sector-87-faridabad","sector-88-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-88-faridabad",     name: "Sector 88 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["neharpar-faridabad","sector-86-faridabad","sector-89-faridabad","sector-87-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-89-faridabad",     name: "Sector 89 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-88-faridabad","sector-90-faridabad","neharpar-faridabad","sector-86-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-90-faridabad",     name: "Sector 90 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-89-faridabad","sector-91-faridabad","neharpar-faridabad","sector-88-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-91-faridabad",     name: "Sector 91 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-90-faridabad","sector-92-faridabad","neharpar-faridabad","sector-89-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },
  { slug: "sector-92-faridabad",     name: "Sector 92 Faridabad",     city: "faridabad", cityName: "Faridabad", aff: "high",       nearby: ["sector-91-faridabad","sector-93-faridabad","neharpar-faridabad","sector-90-faridabad","sector-15-faridabad","sector-21c-faridabad","nit-faridabad","indirapuram","lajpat-nagar","greater-kailash"] },

  // ─── Chandigarh (15 localities) ───────────────────────────────────────────
  { slug: "sector-17-chandigarh",  name: "Sector 17 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-22-chandigarh","sector-34-chandigarh","sector-35-chandigarh","sector-43-chandigarh","sector-21-chandigarh","sector-20-chandigarh","phase-1-mohali"] },
  { slug: "sector-22-chandigarh",  name: "Sector 22 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-17-chandigarh","sector-34-chandigarh","sector-35-chandigarh","sector-43-chandigarh","sector-21-chandigarh","sector-20-chandigarh","phase-1-mohali"] },
  { slug: "sector-34-chandigarh",  name: "Sector 34 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "high",       nearby: ["sector-35-chandigarh","sector-36-chandigarh","sector-22-chandigarh","sector-43-chandigarh","sector-38-chandigarh","sector-17-chandigarh","phase-1-mohali"] },
  { slug: "sector-35-chandigarh",  name: "Sector 35 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-34-chandigarh","sector-36-chandigarh","sector-44-chandigarh","sector-43-chandigarh","sector-38-chandigarh","sector-22-chandigarh","phase-1-mohali"] },
  { slug: "sector-43-chandigarh",  name: "Sector 43 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-44-chandigarh","sector-45-chandigarh","sector-34-chandigarh","sector-38-chandigarh","sector-47-chandigarh","sector-35-chandigarh","phase-1-mohali"] },
  { slug: "sector-44-chandigarh",  name: "Sector 44 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-43-chandigarh","sector-45-chandigarh","sector-46-chandigarh","sector-34-chandigarh","sector-38-chandigarh","sector-47-chandigarh","phase-1-mohali"] },
  { slug: "sector-45-chandigarh",  name: "Sector 45 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-44-chandigarh","sector-46-chandigarh","sector-47-chandigarh","sector-43-chandigarh","sector-38-chandigarh","sector-34-chandigarh","phase-1-mohali"] },
  { slug: "sector-46-chandigarh",  name: "Sector 46 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-45-chandigarh","sector-47-chandigarh","sector-44-chandigarh","sector-43-chandigarh","phase-1-mohali","sector-38-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-47-chandigarh",  name: "Sector 47 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-46-chandigarh","sector-45-chandigarh","sector-44-chandigarh","sector-43-chandigarh","phase-1-mohali","sector-38-chandigarh","sector-34-chandigarh"] },
  { slug: "sector-20-chandigarh",  name: "Sector 20 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-21-chandigarh","sector-22-chandigarh","sector-17-chandigarh","sector-34-chandigarh","sector-35-chandigarh","sector-46-chandigarh","sector-47-chandigarh"] },
  { slug: "sector-21-chandigarh",  name: "Sector 21 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-22-chandigarh","sector-20-chandigarh","sector-17-chandigarh","sector-34-chandigarh","sector-35-chandigarh","sector-46-chandigarh","sector-47-chandigarh"] },
  { slug: "manimajra-chandigarh",  name: "Manimajra Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid",        nearby: ["sector-35-chandigarh","sector-43-chandigarh","sector-22-chandigarh","sector-17-chandigarh","phase-1-mohali","aerocity-mohali","sector-47-chandigarh"] },
  { slug: "sector-36-chandigarh",  name: "Sector 36 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-35-chandigarh","sector-37-chandigarh","sector-34-chandigarh","sector-38-chandigarh","sector-43-chandigarh","sector-22-chandigarh","sector-17-chandigarh"] },
  { slug: "sector-38-chandigarh",  name: "Sector 38 Chandigarh",  city: "chandigarh", cityName: "Chandigarh", aff: "mid-high",   nearby: ["sector-37-chandigarh","sector-36-chandigarh","sector-43-chandigarh","sector-34-chandigarh","sector-35-chandigarh","phase-1-mohali","sector-47-chandigarh"] },

  // ─── Mohali (20 localities) ───────────────────────────────────────────────
  { slug: "phase-1-mohali",        name: "Phase 1 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-3b2-mohali","sector-66-mohali","sector-47-chandigarh","sector-46-chandigarh","phase-5-mohali","aerocity-mohali","sector-43-chandigarh"] },
  { slug: "phase-3b2-mohali",      name: "Phase 3B2 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-1-mohali","phase-7-mohali","sector-66-mohali","phase-5-mohali","sector-70-mohali","aerocity-mohali","it-city-mohali"] },
  { slug: "phase-5-mohali",        name: "Phase 5 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["phase-7-mohali","phase-3b2-mohali","phase-1-mohali","sector-66-mohali","phase-10-mohali","aerocity-mohali","sector-70-mohali"] },
  { slug: "phase-7-mohali",        name: "Phase 7 Mohali",        city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-5-mohali","phase-3b2-mohali","phase-10-mohali","sector-66-mohali","sector-70-mohali","aerocity-mohali","phase-1-mohali"] },
  { slug: "phase-10-mohali",       name: "Phase 10 Mohali",       city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["phase-5-mohali","phase-7-mohali","phase-1-mohali","phase-3b2-mohali","sector-66-mohali","sector-70-mohali","aerocity-mohali"] },
  { slug: "aerocity-mohali",       name: "Aerocity Mohali",       city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["sector-66-mohali","sector-68-mohali","it-city-mohali","phase-1-mohali","sector-70-mohali","sector-82-mohali","sector-47-chandigarh"] },
  { slug: "it-city-mohali",        name: "IT City Mohali",        city: "mohali",     cityName: "Mohali",     aff: "high",       nearby: ["aerocity-mohali","sector-66-mohali","sector-68-mohali","sector-70-mohali","sector-82-mohali","phase-1-mohali","sector-71-mohali"] },
  { slug: "sector-66-mohali",      name: "Sector 66 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-70-mohali","sector-71-mohali","phase-7-mohali","it-city-mohali","aerocity-mohali","sector-68-mohali","phase-1-mohali"] },
  { slug: "sector-68-mohali",      name: "Sector 68 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["aerocity-mohali","sector-66-mohali","sector-70-mohali","sector-76-mohali","sector-82-mohali","it-city-mohali","sector-71-mohali"] },
  { slug: "sector-70-mohali",      name: "Sector 70 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-66-mohali","sector-71-mohali","it-city-mohali","aerocity-mohali","sector-68-mohali","sector-76-mohali","sector-82-mohali"] },
  { slug: "sector-71-mohali",      name: "Sector 71 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-70-mohali","sector-66-mohali","it-city-mohali","aerocity-mohali","sector-68-mohali","sector-76-mohali","sector-82-mohali"] },
  { slug: "sector-76-mohali",      name: "Sector 76 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["sector-82-mohali","aerocity-mohali","sector-68-mohali","sector-70-mohali","sector-66-mohali","it-city-mohali","sector-71-mohali"] },
  { slug: "sector-82-mohali",      name: "Sector 82 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["aerocity-mohali","sector-76-mohali","sector-68-mohali","sector-66-mohali","sector-70-mohali","zirakpur-mohali","it-city-mohali"] },
  { slug: "sector-85-mohali",      name: "Sector 85 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["new-chandigarh-mohali","kharar-mohali","sunny-enclave-mohali","sector-90-mohali","sector-66-mohali","aerocity-mohali","phase-1-mohali"] },
  { slug: "sector-90-mohali",      name: "Sector 90 Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["new-chandigarh-mohali","sector-85-mohali","kharar-mohali","sunny-enclave-mohali","sector-66-mohali","aerocity-mohali","phase-1-mohali"] },
  { slug: "zirakpur-mohali",       name: "Zirakpur Mohali",       city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["dhakoli-panchkula","aerocity-mohali","sector-20-panchkula","sector-21-panchkula","sector-66-mohali","sector-82-mohali","derabassi-mohali"] },
  { slug: "kharar-mohali",         name: "Kharar Mohali",         city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["sunny-enclave-mohali","new-chandigarh-mohali","sector-85-mohali","sector-90-mohali","phase-1-mohali","sector-66-mohali","zirakpur-mohali"] },
  { slug: "sunny-enclave-mohali",  name: "Sunny Enclave Mohali",  city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["kharar-mohali","new-chandigarh-mohali","sector-85-mohali","sector-90-mohali","phase-1-mohali","sector-66-mohali","aerocity-mohali"] },
  { slug: "new-chandigarh-mohali", name: "New Chandigarh Mohali", city: "mohali",     cityName: "Mohali",     aff: "mid-high",   nearby: ["kharar-mohali","sunny-enclave-mohali","sector-85-mohali","sector-90-mohali","phase-1-mohali","sector-66-mohali","aerocity-mohali"] },
  { slug: "derabassi-mohali",      name: "Derabassi Mohali",      city: "mohali",     cityName: "Mohali",     aff: "mid",        nearby: ["zirakpur-mohali","kharar-mohali","sunny-enclave-mohali","aerocity-mohali","sector-66-mohali","new-chandigarh-mohali","sector-82-mohali"] },

  // ─── Panchkula (15 localities) ────────────────────────────────────────────
  { slug: "sector-5-panchkula",    name: "Sector 5 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-7-panchkula","sector-8-panchkula","sector-9-panchkula","sector-11-panchkula","sector-12-panchkula","mdc-sector-5-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-7-panchkula",    name: "Sector 7 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-5-panchkula","sector-8-panchkula","sector-9-panchkula","sector-10-panchkula","sector-11-panchkula","mdc-sector-5-panchkula","mdc-sector-4-panchkula"] },
  { slug: "sector-8-panchkula",    name: "Sector 8 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "high",       nearby: ["sector-7-panchkula","sector-9-panchkula","sector-10-panchkula","sector-5-panchkula","sector-11-panchkula","mdc-sector-4-panchkula","sector-12-panchkula"] },
  { slug: "sector-9-panchkula",    name: "Sector 9 Panchkula",    city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-8-panchkula","sector-10-panchkula","sector-11-panchkula","sector-7-panchkula","sector-5-panchkula","mdc-sector-5-panchkula","sector-15-panchkula"] },
  { slug: "sector-10-panchkula",   name: "Sector 10 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-9-panchkula","sector-11-panchkula","sector-12-panchkula","mdc-sector-5-panchkula","mdc-sector-4-panchkula","sector-15-panchkula","sector-7-panchkula"] },
  { slug: "sector-11-panchkula",   name: "Sector 11 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-10-panchkula","sector-12-panchkula","mdc-sector-4-panchkula","mdc-sector-5-panchkula","sector-15-panchkula","sector-17-panchkula","sector-9-panchkula"] },
  { slug: "sector-12-panchkula",   name: "Sector 12 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-11-panchkula","sector-15-panchkula","mdc-sector-4-panchkula","mdc-sector-5-panchkula","sector-10-panchkula","sector-17-panchkula","sector-7-panchkula"] },
  { slug: "sector-15-panchkula",   name: "Sector 15 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-12-panchkula","sector-17-panchkula","mdc-sector-4-panchkula","sector-11-panchkula","sector-20-panchkula","sector-21-panchkula","sector-10-panchkula"] },
  { slug: "sector-17-panchkula",   name: "Sector 17 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-15-panchkula","sector-12-panchkula","mdc-sector-4-panchkula","sector-11-panchkula","sector-7-panchkula","sector-5-panchkula","sector-20-panchkula"] },
  { slug: "sector-20-panchkula",   name: "Sector 20 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["dhakoli-panchkula","zirakpur-mohali","sector-21-panchkula","sector-17-panchkula","sector-9-panchkula","sector-10-panchkula","manimajra-chandigarh"] },
  { slug: "sector-21-panchkula",   name: "Sector 21 Panchkula",   city: "panchkula",  cityName: "Panchkula",  aff: "mid-high",   nearby: ["sector-20-panchkula","zirakpur-mohali","dhakoli-panchkula","sector-17-panchkula","sector-10-panchkula","sector-9-panchkula","manimajra-chandigarh"] },
  { slug: "mdc-sector-4-panchkula",name: "MDC Sector 4 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-5-panchkula","sector-11-panchkula","sector-12-panchkula","sector-15-panchkula","sector-10-panchkula","sector-7-panchkula","sector-5-panchkula"] },
  { slug: "mdc-sector-5-panchkula",name: "MDC Sector 5 Panchkula",city: "panchkula",  cityName: "Panchkula",  aff: "ultra-high", nearby: ["mdc-sector-4-panchkula","sector-12-panchkula","sector-15-panchkula","sector-11-panchkula","sector-17-panchkula","sector-8-panchkula","sector-7-panchkula"] },
  { slug: "dhakoli-panchkula",     name: "Dhakoli Panchkula",     city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["zirakpur-mohali","sector-20-panchkula","sector-21-panchkula","manimajra-chandigarh","sector-17-panchkula","aerocity-mohali","sector-9-panchkula"] },
  { slug: "kalka-panchkula",       name: "Kalka Panchkula",       city: "panchkula",  cityName: "Panchkula",  aff: "mid",        nearby: ["sector-5-panchkula","sector-7-panchkula","sector-8-panchkula","sector-9-panchkula","sector-11-panchkula","sector-12-panchkula","mdc-sector-5-panchkula"] },
] as const satisfies {
  slug: string;
  name: string;
  city: KitchenPriceRangeLocalityEntry["citySlug"];
  cityName: string;
  aff: KitchenPriceRangeLocalityEntry["affluence"];
  nearby: string[];
}[];

// ---------------------------------------------------------------------------
// Helper: priceFrom computation
// ---------------------------------------------------------------------------

function computePriceFrom(priceCapValue: number): number {
  return Math.round((priceCapValue * 0.65) / 10000) * 10000;
}

// ---------------------------------------------------------------------------
// Build the 100-entry registry
// ---------------------------------------------------------------------------

export const KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY: readonly KitchenPriceRangeLocalityEntry[] =
  RAW_LOCALITIES.flatMap((loc) =>
    PRICE_CAPS.map(
      (cap): KitchenPriceRangeLocalityEntry => ({
        urlSlug: `modular-kitchen-under-${cap.urlSegment}-${loc.slug}`,
        localitySlug: loc.slug,
        localityName: loc.name,
        priceCap: cap.priceCap,
        priceCapLabel: cap.priceCapLabel,
        priceCapValue: cap.priceCapValue,
        citySlug: loc.city,
        cityName: loc.cityName,
        affluence: loc.aff,
        priceFrom: computePriceFrom(cap.priceCapValue),
        nearby: [...loc.nearby],
      }),
    ),
  );

// ---------------------------------------------------------------------------
// Lookup helper
// ---------------------------------------------------------------------------

export function getPriceRangeLocalityEntry(
  urlSlug: string,
): KitchenPriceRangeLocalityEntry | undefined {
  return KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY.find((e) => e.urlSlug === urlSlug);
}

// ---------------------------------------------------------------------------
// FAQ builder
// ---------------------------------------------------------------------------

export function buildPriceRangeLocalityFaqs(
  e: KitchenPriceRangeLocalityEntry,
): { q: string; a: string }[] {
  const { localityName, cityName, priceCapLabel, priceCapValue, priceFrom, priceCap } = e;
  const priceFromFmt = `₹${(priceFrom / 100000).toFixed(1).replace(/\.0$/, "")} Lakh`;
  const priceCapFmt = priceCapLabel;

  // ── ₹1 Lakh ──────────────────────────────────────────────────────────────
  if (priceCap === "1-lakh") {
    return [
      {
        q: `What kind of modular kitchen can I realistically get under ${priceCapFmt} in ${localityName}, ${cityName}?`,
        a: `Under ${priceCapFmt} in ${localityName} you can get a well-built straight (single-wall) kitchen — typically 6–8 ft of base cabinets with a laminate finish, a single-bowl stainless-steel sink, and standard hinges and channels. An L-shaped layout, soft-close hardware, or stone countertops will push costs beyond this budget. We are honest about the constraints so you can plan realistically.`,
      },
      {
        q: `Which finishes and materials are available for a ${priceCapFmt} kitchen in ${localityName}?`,
        a: `At this price point the practical choice is an 18 mm pre-laminated or BWR-grade plywood carcass with a laminate shutter. Laminate is durable, easy to clean, and available in dozens of solid colours and wood-grain textures. Membrane or acrylic finishes cost more and are not viable within ${priceCapFmt} in ${localityName}.`,
      },
      {
        q: `What is the minimum price for a modular kitchen in ${localityName} and what does it cover?`,
        a: `Starting prices in ${localityName} are around ${priceFromFmt}, which covers a compact straight kitchen (roughly 6 ft) with laminate shutters, basic hinges, and a standard countertop. Installation, site preparation, and GST are included. Extra fittings such as pull-out baskets or a chimney are charged separately.`,
      },
      {
        q: `Is a ${priceCapFmt} modular kitchen a good idea for a ${localityName} flat, or should I stretch the budget?`,
        a: `If your kitchen is a compact straight layout (6–8 ft wall), a ${priceCapFmt} build is entirely practical in ${localityName}. For anything larger or if you want an L-shape, we recommend looking at the ₹1.5 Lakh or ₹2 Lakh options, where the additional cost buys meaningfully better hardware and layout flexibility. We never oversell a budget that will not deliver a kitchen you will be happy with.`,
      },
    ] as const;
  }

  // ── ₹1.5 Lakh ────────────────────────────────────────────────────────────
  if (priceCap === "1-5-lakh") {
    return [
      {
        q: `What layout options are possible for a modular kitchen under ${priceCapFmt} in ${localityName}, ${cityName}?`,
        a: `A ${priceCapFmt} budget in ${localityName} opens up an L-shaped layout in addition to a straight kitchen. You can fit 10–12 linear ft of cabinetry across both walls, giving you noticeably more storage and counter space. A parallel (galley) layout is possible in longer kitchens but may need a modest budget top-up depending on the exact scope.`,
      },
      {
        q: `Which finishes are available for a ${priceCapFmt} kitchen in ${localityName}?`,
        a: `At ${priceCapFmt} in ${localityName} you have a comfortable choice between matte or texture laminates and membrane-wrapped MDF shutters. Membrane adds a slight tactile premium and routed profiles for a furniture look. Acrylic high-gloss shutters are technically possible but tight at this ceiling; we recommend factoring in soft-close hinges and channels first.`,
      },
      {
        q: `Does a ${priceCapFmt} kitchen in ${localityName} include soft-close hardware?`,
        a: `Soft-close hinges and drawer channels are optional at this budget. We can include soft-close on all shutters and 2–3 drawers within ${priceCapFmt} if you prioritise it over upper cabinets or a few pull-out accessories. We will lay out the trade-offs clearly so you decide what matters most for your ${localityName} kitchen.`,
      },
      {
        q: `What is the starting price for a modular kitchen in ${localityName} and what is covered?`,
        a: `Prices for this category start at ${priceFromFmt} in ${localityName}, covering an L-shaped or straight kitchen in laminate finish with standard hardware, a granite or engineered countertop, and installation. GST and site-level adjustments are included. Premium accessories, chimney, and hob are quoted separately.`,
      },
    ] as const;
  }

  // ── ₹2 Lakh ──────────────────────────────────────────────────────────────
  if (priceCap === "2-lakh") {
    return [
      {
        q: `What layouts and finishes does a ${priceCapFmt} modular kitchen cover in ${localityName}, ${cityName}?`,
        a: `Under ${priceCapFmt} in ${localityName} you can comfortably design an L-shaped or parallel kitchen up to about 14 linear ft with laminate, membrane, or entry-level acrylic shutters. Mid-range soft-close hardware, 2–4 pull-out baskets, a quartz countertop (optional upgrade), and a coordinated backsplash tile are all within scope.`,
      },
      {
        q: `Is a quartz countertop included in a ${priceCapFmt} kitchen in ${localityName}?`,
        a: `A quartz countertop is available as an upgrade at the ${priceCapFmt} level in ${localityName}. Standard granite or engineered stone is the default; quartz adds roughly ₹8,000–₹15,000 depending on the slab chosen but fits within the overall ceiling without significant trade-offs elsewhere. We will show you the exact cost split at your site visit.`,
      },
      {
        q: `What quality of hardware can I expect at ${priceCapFmt} in ${localityName}?`,
        a: `At ${priceCapFmt} in ${localityName} we use mid-range hardware from brands such as Hettich or equivalent — soft-close hinges on all shutters, soft-close drawer channels, and tandem boxes for deep drawers. Pantry pull-outs and corner solutions such as a magic corner or half-and-half unit are available as paid add-ons that fit comfortably in this budget.`,
      },
      {
        q: `What is the minimum price for a modular kitchen in ${localityName} under this range?`,
        a: `Starting prices in ${localityName} for this category are around ${priceFromFmt}, which covers an L-shape layout in laminate or membrane finish, standard soft-close hardware, and a granite countertop with installation and GST. Upgrading to acrylic shutters or quartz countertops is quoted separately at your free site survey.`,
      },
    ] as const;
  }

  // ── ₹3 Lakh ──────────────────────────────────────────────────────────────
  return [
    {
      q: `What can I get in a modular kitchen under ${priceCapFmt} in ${localityName}, ${cityName}?`,
      a: `A ${priceCapFmt} budget in ${localityName} gives you full design freedom — straight, L-shape, parallel, U-shape, or island configurations are all on the table. You can combine acrylic high-gloss, PU-painted, or membrane shutters, premium Hettich or Hafele hardware throughout, a quartz or Corian countertop, and a full suite of accessories including tall-unit pantries and custom corner solutions.`,
    },
    {
      q: `Which premium finishes are available for a ${priceCapFmt} kitchen in ${localityName}?`,
      a: `At ${priceCapFmt} in ${localityName} the primary finish options are acrylic (high-gloss, scratch-resistant), PU-painted MDF (ultra-smooth, paint-matched), and membrane in textured or matte profiles. You can also combine finishes — for example, acrylic shutters with a PU island — for a designer look. All finishes use moisture-resistant 18 mm ply carcasses with edge-banding.`,
    },
    {
      q: `Does a ${priceCapFmt} kitchen in ${localityName} include full customisation?`,
      a: `Yes. At this budget in ${localityName} we offer end-to-end customisation: layout, shutter finish, internal fittings, lighting pelmets, appliance housing, and coordinated wall panelling if required. Our designer will produce a detailed 3D render of your kitchen before production begins. Every cabinet is made-to-measure for your specific kitchen dimensions.`,
    },
    {
      q: `What is the starting price for a ${priceCapFmt} modular kitchen in ${localityName}?`,
      a: `This premium category starts at ${priceFromFmt} in ${localityName} and covers a fully designed kitchen with acrylic or PU shutters, premium soft-close hardware, a quartz countertop, and professional installation including GST. The upper end of the ${priceCapFmt} ceiling allows for additional accessories, tall units, and appliance integration. A free detailed quote is provided after your site measurement.`,
    },
  ] as const;
}
