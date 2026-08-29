/**
 * Locality config system for LocalityNearMeSection.
 *
 * getLocalityInfo(slug) returns display-ready locality data for any SEO page slug.
 * - Named locality slugs → look up from KNOWN_LOCALITIES
 * - Noida sector slugs  → generated algorithmically from sector number
 * - All other slugs     → parsed generically (city from suffix, locality from prefix)
 */

export type CityKey = "noida" | "delhi" | "gurgaon" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";

export type LocalityInfo = {
  /** Display name e.g. "Sector 134" or "Rohini" */
  name: string;
  /** City display name e.g. "Noida" */
  city: string;
  cityKey: CityKey;
  /** Property type description for prose e.g. "high-rise gated communities" */
  propertyType: string;
  /** 6–10 nearby areas shown in the areas grid */
  adjacentAreas: string[];
  /** 2–3 landmarks used in the italic paragraph */
  landmarks: string[];
  /** Technician response promise */
  responseTime: string;
  /** Parent city service page e.g. "/sofa-repair-noida" */
  parentServiceSlug: string;
};

// ─── Noida sector helpers ─────────────────────────────────────────────────

function noidaSectorPropertyType(n: number): string {
  if (n >= 120) return "high-rise gated societies along the Noida Expressway belt";
  if (n >= 70) return "residential societies and apartment complexes";
  if (n >= 40) return "established sectors with mixed residential and commercial properties";
  return "older residential colonies and independent houses";
}

function noidaSectorLandmarks(n: number): string[] {
  if (n >= 140) return ["Noida Expressway", "DLF Mall of India (Sector 18)", "Greater Noida Border"];
  if (n >= 100) return ["Botanical Garden Metro", "Logix City Centre", "Atta Market"];
  if (n >= 60) return ["Atta Market", "Sector 62 Tech Park", "Botanical Garden Metro"];
  if (n >= 30) return ["Sector 18 Market", "DND Flyway", "Noida City Centre Metro"];
  return ["Sector 18 Market", "Noida Stadium", "DND Flyway"];
}

function noidaAdjacentSectors(n: number): string[] {
  const nearby = [n - 6, n - 3, n + 3, n + 6]
    .filter((x) => x > 0 && x <= 168)
    .map((x) => `Sector ${x}`);
  // Add contextual areas based on zone
  if (n >= 130) nearby.push("Noida Extension", "Greater Noida West", "Gaur City");
  else if (n >= 90) nearby.push("Sector 137", "Sector 150", "Noida Extension");
  else if (n >= 60) nearby.push("Sector 44", "Sector 93", "Sector 18");
  else nearby.push("Greater Noida", "Sector 44", "Sector 62");
  return nearby.slice(0, 8);
}

/** Build a LocalityInfo for a Noida sector number */
function buildNoidaSectorInfo(sectorNum: number): LocalityInfo {
  return {
    name: `Sector ${sectorNum}`,
    city: "Noida",
    cityKey: "noida",
    propertyType: noidaSectorPropertyType(sectorNum),
    adjacentAreas: noidaAdjacentSectors(sectorNum),
    landmarks: noidaSectorLandmarks(sectorNum),
    responseTime: "2–4 hours",
    parentServiceSlug: "/sofa-repair-noida",
  };
}

// ─── Known named localities ────────────────────────────────────────────────

/**
 * Keyed by slug fragments that appear in the URL.
 * Matching is done with includes() so partial keys work across slugs.
 * More-specific keys should come first in the lookup.
 */
const KNOWN_LOCALITY_FRAGMENTS: Array<[string, LocalityInfo]> = [
  // ── Noida Extension / Greater Noida West ──
  ["gaur-city", { name: "Gaur City", city: "Noida", cityKey: "noida", propertyType: "large integrated township with gated societies", adjacentAreas: ["Noida Extension", "Sector 4 Greater Noida West", "Sector 16C Greater Noida West", "Crossing Republik", "Raj Nagar Extension", "Wave City", "Sector 1 Greater Noida West"], landmarks: ["Gaur City Mall", "Noida Extension Metro", "NH-9"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-noida" }],
  ["ats-pristine", { name: "ATS Pristine", city: "Noida", cityKey: "noida", propertyType: "premium gated society", adjacentAreas: ["Noida Extension", "Gaur City", "Mahagun Moderne", "Sector 137", "Sector 143", "Supertech Eco Village", "Ace City"], landmarks: ["Gaur City Mall", "Crossing Republik", "NH-9"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-noida" }],
  ["mahagun", { name: "Mahagun Moderne", city: "Noida", cityKey: "noida", propertyType: "premium high-rise residential complex", adjacentAreas: ["Noida Extension", "Gaur City", "ATS Pristine", "Sector 137", "Sector 143", "Supertech Eco Village", "Sector 16C Greater Noida West"], landmarks: ["Gaur City Mall", "NH-9", "Noida Extension Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-noida" }],
  ["knowledge-park", { name: "Knowledge Park", city: "Greater Noida", cityKey: "noida", propertyType: "mixed residential and institutional locality", adjacentAreas: ["Alpha 1", "Alpha 2", "Beta 1", "Beta 2", "Gamma 1", "Pari Chowk", "Sector 150 Noida"], landmarks: ["Pari Chowk", "Yamuna Expressway", "Greater Noida West Connector"], responseTime: "3–5 hours", parentServiceSlug: "/sofa-repair-noida" }],
  ["pari-chowk", { name: "Pari Chowk", city: "Greater Noida", cityKey: "noida", propertyType: "residential and commercial hub", adjacentAreas: ["Knowledge Park", "Alpha 1", "Beta 1", "Jaypee Greens", "Sector 150 Noida", "Gamma 1", "Delta 1"], landmarks: ["Pari Chowk Flyover", "Yamuna Expressway", "Greater Noida-Noida Link Road"], responseTime: "3–5 hours", parentServiceSlug: "/sofa-repair-noida" }],
  ["jaypee-greens", { name: "Jaypee Greens", city: "Greater Noida", cityKey: "noida", propertyType: "premium integrated township", adjacentAreas: ["Sector 128 Noida", "Sector 129 Noida", "Pari Chowk", "Knowledge Park", "Sector 150 Noida", "Alpha 1", "Sector 44 Noida"], landmarks: ["Jaypee Greens Golf Course", "Yamuna Expressway", "Sector 128 Noida"], responseTime: "3–5 hours", parentServiceSlug: "/sofa-repair-noida" }],

  // ── Delhi — North ──
  // IMPORTANT: "mukherjee-nagar" must appear before "nagar" fragments; "hudson-lane" standalone; ordering is specificity-first.
  ["kamla-nagar",     { name: "Kamla Nagar",     city: "Delhi", cityKey: "delhi", propertyType: "vibrant residential and commercial locality near Delhi University North Campus with flats and independent floors", adjacentAreas: ["Civil Lines", "GTB Nagar", "Shakti Nagar", "Model Town", "Mukherjee Nagar", "Delhi University North Campus", "Azadpur"], landmarks: ["Kamla Nagar Market", "Delhi University North Gate", "GTB Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["civil-lines",     { name: "Civil Lines",     city: "Delhi", cityKey: "delhi", propertyType: "prestigious North Delhi enclave with spacious bungalows, government residences, and heritage structures", adjacentAreas: ["Kamla Nagar", "Tis Hazari", "Kashmere Gate", "Ashok Vihar", "Shakti Nagar", "Model Town", "Mukherjee Nagar"], landmarks: ["Civil Lines Metro", "St. Stephen's Hospital", "Roshanara Club"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["mukherjee-nagar", { name: "Mukherjee Nagar", city: "Delhi", cityKey: "delhi", propertyType: "densely populated residential and coaching hub with flats and PG accommodations near Delhi University", adjacentAreas: ["Kamla Nagar", "GTB Nagar", "Model Town", "Adarsh Nagar", "Azadpur", "Shalimar Bagh", "Pitampura"], landmarks: ["GTB Nagar Metro", "Delhi University North Campus", "Mukherjee Nagar Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["gtb-nagar",       { name: "GTB Nagar",       city: "Delhi", cityKey: "delhi", propertyType: "established residential locality near Delhi University with mix of flats, student accommodations, and independent houses", adjacentAreas: ["Kamla Nagar", "Mukherjee Nagar", "Hudson Lane", "Civil Lines", "Adarsh Nagar", "Model Town", "Delhi University North Campus"], landmarks: ["GTB Nagar Metro", "Delhi University North Campus", "Kamla Nagar Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["adarsh-nagar",    { name: "Adarsh Nagar",    city: "Delhi", cityKey: "delhi", propertyType: "well-established North Delhi residential colony with DDA flats and independent houses", adjacentAreas: ["Azadpur", "Mukherjee Nagar", "GTB Nagar", "Shalimar Bagh", "Model Town", "Jahangirpuri", "Keshav Puram"], landmarks: ["Adarsh Nagar Metro", "Azadpur Mandi", "Azadpur Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["gujranwala-town", { name: "Gujranwala Town", city: "Delhi", cityKey: "delhi", propertyType: "compact North Delhi colony with builder floors and independent houses near Ashok Vihar", adjacentAreas: ["Ashok Vihar", "Keshav Puram", "Punjabi Bagh", "Shakti Nagar", "Wazirpur", "Rohini", "Pitampura"], landmarks: ["Ashok Vihar Phase 1 Market", "Wazirpur Metro", "Ring Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["keshav-puram",    { name: "Keshav Puram",    city: "Delhi", cityKey: "delhi", propertyType: "residential locality with DDA flats and independent floors between Pitampura and Ashok Vihar", adjacentAreas: ["Pitampura", "Ashok Vihar", "Punjabi Bagh", "Wazirpur", "Gujranwala Town", "Paschim Vihar", "Rohini"], landmarks: ["Keshav Puram Industrial Area", "Ashok Vihar Metro", "Wazirpur Depot"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["derawal-nagar",   { name: "Derawal Nagar",   city: "Delhi", cityKey: "delhi", propertyType: "quiet North Delhi residential neighbourhood with independent houses and flats near Model Town", adjacentAreas: ["Model Town", "Shakti Nagar", "Kamla Nagar", "GTB Nagar", "Adarsh Nagar", "Azadpur", "Mukherjee Nagar"], landmarks: ["Model Town Metro", "Azadpur Mandi", "GTB Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["shakti-nagar",    { name: "Shakti Nagar",    city: "Delhi", cityKey: "delhi", propertyType: "established residential colony with independent houses and flats near Kamla Nagar", adjacentAreas: ["Kamla Nagar", "Civil Lines", "Derawal Nagar", "GTB Nagar", "Mukherjee Nagar", "Model Town", "Azadpur"], landmarks: ["Kamla Nagar Market", "Delhi University North Gate", "Civil Lines Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["hudson-lane",     { name: "Hudson Lane",     city: "Delhi", cityKey: "delhi", propertyType: "upscale boutique shopping and residential lane near Delhi University North Campus with premium flats", adjacentAreas: ["GTB Nagar", "Kamla Nagar", "Mukherjee Nagar", "Civil Lines", "Model Town", "Delhi University North Campus", "Derawal Nagar"], landmarks: ["Hudson Lane Market", "GTB Nagar Metro", "Delhi University North Campus"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["rohini", { name: "Rohini", city: "Delhi", cityKey: "delhi", propertyType: "DDA flats and residential sectors", adjacentAreas: ["Pitampura", "Shalimar Bagh", "Prashant Vihar", "Ashok Vihar", "Sector 9 Rohini", "Sector 11 Rohini", "Sector 24 Rohini"], landmarks: ["Rohini West Metro", "Rithala Metro", "District Centre Rohini"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["pitampura", { name: "Pitampura", city: "Delhi", cityKey: "delhi", propertyType: "established residential colony with flats and independent houses", adjacentAreas: ["Rohini", "Shalimar Bagh", "Ashok Vihar", "Netaji Subhash Place", "Shakurpur", "Keshav Puram", "Wazirpur"], landmarks: ["Pitampura TV Tower", "Netaji Subhash Place Metro", "Unity One Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["shalimar-bagh", { name: "Shalimar Bagh", city: "Delhi", cityKey: "delhi", propertyType: "planned residential colony", adjacentAreas: ["Pitampura", "Rohini", "Ashok Vihar", "Prashant Vihar", "Wazirpur", "Azadpur", "Model Town"], landmarks: ["Shalimar Bagh Market", "Shalimar Bagh Metro", "Pitampura Tower"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["ashok-vihar", { name: "Ashok Vihar", city: "Delhi", cityKey: "delhi", propertyType: "planned residential colony with DDA flats and independent houses", adjacentAreas: ["Rohini", "Pitampura", "Shalimar Bagh", "Punjabi Bagh", "Paschim Vihar", "Wazirpur", "Shakurpur"], landmarks: ["Ashok Vihar Phase 1 Market", "Ashok Vihar Metro", "Ring Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["model-town", { name: "Model Town", city: "Delhi", cityKey: "delhi", propertyType: "well-established residential colony with independent houses and flats", adjacentAreas: ["Shalimar Bagh", "Pitampura", "Rohini", "Azadpur", "Jahangirpuri", "Mukherjee Nagar", "Gtb Nagar"], landmarks: ["Model Town Metro", "Model Town Market", "Delhi University North Campus"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],

  // ── Delhi — West ──
  // IMPORTANT: "dwarka-expressway-gurgaon" must be checked before "dwarka" to prevent
  // the Gurgaon Dwarka Expressway slug from matching the Delhi Dwarka entry first.
  // More specific fragment always goes before less specific fragment in this ordered map.
  ["dwarka-expressway-gurgaon", { name: "Dwarka Expressway", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential corridor with large gated township projects along the expressway", adjacentAreas: ["Sector 72 Gurgaon", "Sector 73 Gurgaon", "Sector 76 Gurgaon", "Sector 77 Gurgaon", "Sector 82 Gurgaon", "Sector 83 Gurgaon", "New Gurgaon"], landmarks: ["Dwarka Expressway", "Kherki Daula Toll", "ISBT Sector 10 Dwarka"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dwarka", { name: "Dwarka", city: "Delhi", cityKey: "delhi", propertyType: "large DDA residential sectors", adjacentAreas: ["Sector 4 Dwarka", "Sector 6 Dwarka", "Sector 10 Dwarka", "Sector 13 Dwarka", "Janakpuri", "Uttam Nagar", "Palam"], landmarks: ["Dwarka Sector 21 Metro", "Bharat Darshan Park", "Sector 10 Market Dwarka"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["janakpuri", { name: "Janakpuri", city: "Delhi", cityKey: "delhi", propertyType: "planned residential colony with DDA flats and independent houses", adjacentAreas: ["Dwarka", "Uttam Nagar", "Rajouri Garden", "Vikaspuri", "Punjabi Bagh", "Tilak Nagar", "Pashchim Vihar"], landmarks: ["Janakpuri West Metro", "Janakpuri District Centre", "City Square Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["rajouri-garden", { name: "Rajouri Garden", city: "Delhi", cityKey: "delhi", propertyType: "mixed residential colony", adjacentAreas: ["Janakpuri", "Punjabi Bagh", "Tagore Garden", "Vikaspuri", "Tilak Nagar", "Moti Nagar", "Patel Nagar"], landmarks: ["Rajouri Garden Metro", "Rajouri Garden Market", "R.G. Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["punjabi-bagh", { name: "Punjabi Bagh", city: "Delhi", cityKey: "delhi", propertyType: "affluent residential colony with independent houses and flats", adjacentAreas: ["Rajouri Garden", "Pitampura", "Shalimar Bagh", "Moti Nagar", "Patel Nagar", "Paschim Vihar", "Madipur"], landmarks: ["Punjabi Bagh Club", "Punjabi Bagh Metro", "Vishal Mega Mart Punjabi Bagh"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["paschim-vihar", { name: "Paschim Vihar", city: "Delhi", cityKey: "delhi", propertyType: "large planned residential colony with DDA flats and builder floors", adjacentAreas: ["Punjabi Bagh", "Shalimar Bagh", "Rohini", "Pitampura", "Peera Garhi", "Madipur", "Rajouri Garden"], landmarks: ["Paschim Vihar East Metro", "Paschim Vihar Market", "Punjabi Bagh Club"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["tilak-nagar", { name: "Tilak Nagar", city: "Delhi", cityKey: "delhi", propertyType: "densely populated residential colony with flats and independent houses", adjacentAreas: ["Janakpuri", "Rajouri Garden", "Vikaspuri", "Subhash Nagar", "Tagore Garden", "Moti Nagar", "Patel Nagar"], landmarks: ["Tilak Nagar Metro", "Tilak Nagar Market", "Subhash Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["vikaspuri", { name: "Vikaspuri", city: "Delhi", cityKey: "delhi", propertyType: "established residential colony with DDA flats and independent houses", adjacentAreas: ["Janakpuri", "Tilak Nagar", "Uttam Nagar", "Dwarka", "Subhash Nagar", "Paschim Vihar", "Rajouri Garden"], landmarks: ["Vikaspuri Market", "Janakpuri West Metro", "Uttam Nagar East Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["uttam-nagar", { name: "Uttam Nagar", city: "Delhi", cityKey: "delhi", propertyType: "large residential colony with affordable flats and independent houses", adjacentAreas: ["Vikaspuri", "Dwarka", "Janakpuri", "Bindapur", "Kakrola", "Nawada", "Palam"], landmarks: ["Uttam Nagar East Metro", "Uttam Nagar West Metro", "V3S East Centre Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],

  // ── Delhi — South ──
  // IMPORTANT: greater-kailash-1/2/3 must precede "greater-kailash" (substring rule)
  ["greater-kailash-3", { name: "Greater Kailash 3", city: "Delhi", cityKey: "delhi", propertyType: "upscale South Delhi colony with independent houses and multi-storey apartments", adjacentAreas: ["Greater Kailash 1", "Greater Kailash 2", "Malviya Nagar", "Saket", "Chirag Enclave", "Kailash Colony", "Nehru Place"], landmarks: ["M-Block GK Market", "Saket Metro", "Select Citywalk Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["greater-kailash-2", { name: "Greater Kailash 2", city: "Delhi", cityKey: "delhi", propertyType: "premium South Delhi colony with independent floors and apartments near GK-2 M Block Market", adjacentAreas: ["Greater Kailash 1", "Greater Kailash 3", "Malviya Nagar", "Saket", "Kailash Colony", "Chirag Enclave", "Nehru Place"], landmarks: ["GK-2 M Block Market", "Saket Metro", "Select Citywalk Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["greater-kailash-1", { name: "Greater Kailash 1", city: "Delhi", cityKey: "delhi", propertyType: "premier South Delhi colony with large independent houses and premium builder floors", adjacentAreas: ["Greater Kailash 2", "Lajpat Nagar", "Defence Colony", "Kailash Colony", "Malviya Nagar", "Nehru Place", "South Extension"], landmarks: ["GK-1 M Block Market", "Nehru Place", "Lajpat Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["greater-kailash", { name: "Greater Kailash", city: "Delhi", cityKey: "delhi", propertyType: "premium South Delhi colony with independent houses and apartments", adjacentAreas: ["Lajpat Nagar", "Defence Colony", "Kailash Colony", "Malviya Nagar", "Saket", "Nehru Place", "Chirag Enclave"], landmarks: ["M-Block GK Market", "GK-1 M Block Market", "Nehru Place"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["defence-colony", { name: "Defence Colony", city: "Delhi", cityKey: "delhi", propertyType: "upscale planned residential colony with large independent houses and builder floors", adjacentAreas: ["Greater Kailash 1", "Lajpat Nagar", "Andrews Ganj", "South Extension", "Jangpura", "Kailash Colony", "Maharani Bagh"], landmarks: ["Defence Colony Market", "Lajpat Nagar Metro", "South Extension Part 1"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["maharani-bagh", { name: "Maharani Bagh", city: "Delhi", cityKey: "delhi", propertyType: "exclusive South Delhi enclave with large independent houses and bungalows", adjacentAreas: ["Friends Colony", "New Friends Colony", "Lajpat Nagar", "Defence Colony", "Ashram", "Andrews Ganj", "Jangpura"], landmarks: ["Maharani Bagh Park", "Lajpat Nagar Metro", "Moolchand Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  // IMPORTANT: "new-friends-colony" must precede "friends-colony" (substring rule)
  ["new-friends-colony", { name: "New Friends Colony", city: "Delhi", cityKey: "delhi", propertyType: "affluent South Delhi colony with premium independent houses and bungalows", adjacentAreas: ["Friends Colony", "Maharani Bagh", "Lajpat Nagar", "Defence Colony", "Ashram", "Jangpura", "Andrews Ganj"], landmarks: ["New Friends Colony Market", "Moolchand Metro", "Lajpat Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["friends-colony", { name: "Friends Colony", city: "Delhi", cityKey: "delhi", propertyType: "upscale South Delhi residential colony with independent houses", adjacentAreas: ["New Friends Colony", "Maharani Bagh", "Lajpat Nagar", "Defence Colony", "Andrews Ganj", "Ashram", "Jangpura"], landmarks: ["Friends Colony Market", "Moolchand Metro", "Lajpat Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["green-park", { name: "Green Park", city: "Delhi", cityKey: "delhi", propertyType: "prime South Delhi colony with a mix of independent houses and apartments", adjacentAreas: ["Hauz Khas", "Safdarjung Enclave", "Gulmohar Park", "Panchsheel Park", "Greater Kailash", "Saket", "Sarvapriya Vihar"], landmarks: ["Green Park Metro", "Hauz Khas Village", "IIT Delhi"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["hauz-khas", { name: "Hauz Khas", city: "Delhi", cityKey: "delhi", propertyType: "prestigious South Delhi enclave with heritage village, independent houses and premium apartments", adjacentAreas: ["Green Park", "Safdarjung Enclave", "Gulmohar Park", "Panchsheel Park", "Greater Kailash", "SDA", "Saket"], landmarks: ["Hauz Khas Village", "Deer Park", "Green Park Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["safdarjung-enclave", { name: "Safdarjung Enclave", city: "Delhi", cityKey: "delhi", propertyType: "well-established South Delhi colony with independent houses and government bungalows near AIIMS", adjacentAreas: ["Vasant Vihar", "Green Park", "Hauz Khas", "Gulmohar Park", "Panchsheel Park", "AIIMS area", "Munirka"], landmarks: ["Safdarjung Enclave Market", "AIIMS Metro", "Safdarjung Hospital"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["panchsheel-park", { name: "Panchsheel Park", city: "Delhi", cityKey: "delhi", propertyType: "premium South Delhi residential enclave with independent houses and lush green surroundings", adjacentAreas: ["Hauz Khas", "Green Park", "Gulmohar Park", "Safdarjung Enclave", "Greater Kailash", "Shahpur Jat", "Saket"], landmarks: ["Panchsheel Park Market", "Hauz Khas Village", "Shahpur Jat"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["gulmohar-park", { name: "Gulmohar Park", city: "Delhi", cityKey: "delhi", propertyType: "leafy South Delhi colony with independent houses near Hauz Khas and IIT Delhi", adjacentAreas: ["Hauz Khas", "Green Park", "Panchsheel Park", "Safdarjung Enclave", "Yusuf Sarai", "Greater Kailash", "IIT Delhi area"], landmarks: ["Gulmohar Park Market", "Hauz Khas Village", "IIT Delhi Gate"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["vasant-kunj", { name: "Vasant Kunj", city: "Delhi", cityKey: "delhi", propertyType: "upmarket residential locality with apartments and independent houses", adjacentAreas: ["Vasant Vihar", "Saket", "Mehrauli", "Sultanpur", "Kapashera", "Chhattarpur", "Ambiance Mall Road"], landmarks: ["Ambience Mall Vasant Kunj", "Vasant Kunj Metro", "DLF Promenade Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["vasant-vihar", { name: "Vasant Vihar", city: "Delhi", cityKey: "delhi", propertyType: "premium residential colony with large independent houses", adjacentAreas: ["Vasant Kunj", "Safdarjung Enclave", "Shanti Niketan", "Anand Niketan", "Munirka", "RK Puram", "Westend"], landmarks: ["Vasant Vihar Market", "DLF Promenade Mall", "Vasant Kunj Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["saket", { name: "Saket", city: "Delhi", cityKey: "delhi", propertyType: "upscale residential locality with multi-storey apartments", adjacentAreas: ["Greater Kailash", "Malviya Nagar", "Vasant Kunj", "Hauz Khas", "Green Park", "Panchsheel Park", "Sheikh Sarai"], landmarks: ["Select Citywalk Mall", "DLF South Court", "Saket Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["lajpat-nagar", { name: "Lajpat Nagar", city: "Delhi", cityKey: "delhi", propertyType: "established residential locality with DDA flats and multi-storey apartments", adjacentAreas: ["Greater Kailash", "Defence Colony", "Andrews Ganj", "Jangpura", "Kailash Colony", "Bhogal", "Maharani Bagh"], landmarks: ["Lajpat Nagar Market", "Lajpat Nagar Metro", "Moolchand Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["south-delhi", { name: "South Delhi", city: "Delhi", cityKey: "delhi", propertyType: "premium residential zones including independent houses and luxury apartments", adjacentAreas: ["Saket", "Greater Kailash", "Vasant Kunj", "Hauz Khas", "Malviya Nagar", "Panchsheel Park", "Green Park"], landmarks: ["Select Citywalk Mall", "Hauz Khas Village", "Nehru Place"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],

  // ── Delhi — East ──
  ["preet-vihar", { name: "Preet Vihar", city: "Delhi", cityKey: "delhi", propertyType: "residential colony with multi-storey apartments", adjacentAreas: ["Mayur Vihar", "Laxmi Nagar", "Patparganj", "Nirman Vihar", "Anand Vihar", "Vikas Marg", "Karkarduma"], landmarks: ["Preet Vihar Metro", "Preet Vihar Market", "Anand Vihar Bus Terminal"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["mayur-vihar", { name: "Mayur Vihar", city: "Delhi", cityKey: "delhi", propertyType: "residential locality with apartments and builder floors", adjacentAreas: ["Preet Vihar", "Patparganj", "Vasundhara Ghaziabad", "Kondli", "Mandawali", "Trilokpuri", "Laxmi Nagar"], landmarks: ["Mayur Vihar Phase-1 Metro", "Central Market Mayur Vihar", "Akshardham Temple"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["east-delhi", { name: "East Delhi", city: "Delhi", cityKey: "delhi", propertyType: "residential colonies with flats, builder floors, and DDA housing", adjacentAreas: ["Preet Vihar", "Mayur Vihar", "Patparganj", "Laxmi Nagar", "Shahdara", "Vivek Vihar", "Anand Vihar"], landmarks: ["Anand Vihar Metro", "Akshardham Temple", "Preet Vihar Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],

  // ── Delhi — Central ──
  ["karol-bagh", { name: "Karol Bagh", city: "Delhi", cityKey: "delhi", propertyType: "dense residential locality with multi-storey apartments", adjacentAreas: ["Patel Nagar", "Rajendra Nagar", "Paharganj", "Moti Nagar", "Desh Bandhu Gupta Road", "Saraswati Vihar", "West Patel Nagar"], landmarks: ["Karol Bagh Metro", "Ajmal Khan Road Market", "Yashwant Place"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],
  ["nehru-place", { name: "Nehru Place", city: "Delhi", cityKey: "delhi", propertyType: "commercial and residential mixed locality", adjacentAreas: ["Greater Kailash", "Kailash Colony", "Govindpuri", "Okhla", "Mohan Estate", "Jasola", "Chirag Enclave"], landmarks: ["Nehru Place Market", "Nehru Place Metro", "HDFC Bank Tower"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-delhi" }],

  // ── Gurgaon ──
  ["dlf-phase-1", { name: "DLF Phase 1", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium villas and builder floors", adjacentAreas: ["DLF Phase 2", "DLF Phase 3", "DLF City", "Sushant Lok", "Golf Course Road", "MG Road", "Sector 26 Gurgaon"], landmarks: ["Ambience Mall", "MG Road Metro", "Golf Course Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dlf-phase-2", { name: "DLF Phase 2", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential enclave with independent floors", adjacentAreas: ["DLF Phase 1", "DLF Phase 3", "DLF Phase 4", "Sushant Lok", "Golf Course Road", "Sector 42 Gurgaon", "Sector 43 Gurgaon"], landmarks: ["Ambience Mall", "MG Road", "DLF Cyber City"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dlf-phase-3", { name: "DLF Phase 3", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential area with luxury apartments", adjacentAreas: ["DLF Phase 2", "DLF Phase 4", "DLF Phase 5", "Golf Course Road", "Sushant Lok", "Sector 24 Gurgaon", "Sector 43 Gurgaon"], landmarks: ["Cyber City", "DLF Cyber Hub", "Udyog Vihar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dlf-phase-4", { name: "DLF Phase 4", city: "Gurgaon", cityKey: "gurgaon", propertyType: "luxury residential enclave with villas and penthouses", adjacentAreas: ["DLF Phase 3", "DLF Phase 5", "Golf Course Road", "Sector 44 Gurgaon", "Sector 56 Gurgaon", "Sushant Lok 2", "South City 1"], landmarks: ["Golf Course Road", "Ambience Mall", "Huda City Centre Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dlf-phase-5", { name: "DLF Phase 5", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium gated community with luxury apartments", adjacentAreas: ["DLF Phase 4", "Golf Course Road", "Golf Course Extension", "Sector 53 Gurgaon", "Sector 54 Gurgaon", "South City 2", "Nirvana Country"], landmarks: ["Golf Course Road", "Gold Souk Mall", "Sector 55-56 Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sushant-lok", { name: "Sushant Lok", city: "Gurgaon", cityKey: "gurgaon", propertyType: "large planned residential township", adjacentAreas: ["DLF Phase 1", "DLF Phase 2", "South City 1", "Sector 41 Gurgaon", "Sector 43 Gurgaon", "MG Road", "Golf Course Road"], landmarks: ["Galleria DLF", "MG Road Metro", "DLF Saket"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["golf-course-extension", { name: "Golf Course Extension", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium gated societies and luxury apartments along Golf Course Extension Road", adjacentAreas: ["Sector 56 Gurgaon", "Sector 57 Gurgaon", "Sector 58 Gurgaon", "Sector 59 Gurgaon", "Sector 60 Gurgaon", "Sector 61 Gurgaon", "Sector 66 Gurgaon"], landmarks: ["Golf Course Extension Road", "Sector 55-56 Metro", "Gold Souk Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-51-gurgaon", { name: "Sector 51", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with gated apartment complexes", adjacentAreas: ["Sector 49 Gurgaon", "Sector 50 Gurgaon", "Sector 56 Gurgaon", "Sector 57 Gurgaon", "Sector 58 Gurgaon", "Golf Course Extension Gurgaon", "Nirvana Country Gurgaon"], landmarks: ["Golf Course Road", "Sector 55-56 Metro", "Nirvana Country"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-59-gurgaon", { name: "Sector 59", city: "Gurgaon", cityKey: "gurgaon", propertyType: "modern residential sector with gated societies along Golf Course Extension", adjacentAreas: ["Sector 56 Gurgaon", "Sector 57 Gurgaon", "Sector 58 Gurgaon", "Sector 60 Gurgaon", "Sector 61 Gurgaon", "Golf Course Extension Gurgaon", "Sector 65 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Sector 55-56 Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-60-gurgaon", { name: "Sector 60", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with luxury apartment complexes", adjacentAreas: ["Sector 57 Gurgaon", "Sector 58 Gurgaon", "Sector 59 Gurgaon", "Sector 61 Gurgaon", "Sector 62 Gurgaon", "Golf Course Extension Gurgaon", "Sector 65 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-61-gurgaon", { name: "Sector 61", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential sector with builder floors and gated societies", adjacentAreas: ["Sector 58 Gurgaon", "Sector 59 Gurgaon", "Sector 60 Gurgaon", "Sector 62 Gurgaon", "Sector 63 Gurgaon", "Golf Course Extension Gurgaon", "Sector 66 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-62-gurgaon", { name: "Sector 62", city: "Gurgaon", cityKey: "gurgaon", propertyType: "mixed residential sector with apartments and independent floors", adjacentAreas: ["Sector 59 Gurgaon", "Sector 60 Gurgaon", "Sector 61 Gurgaon", "Sector 63 Gurgaon", "Sector 64 Gurgaon", "Golf Course Extension Gurgaon", "Sector 65 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-63-gurgaon", { name: "Sector 63", city: "Gurgaon", cityKey: "gurgaon", propertyType: "emerging residential sector with new apartment developments", adjacentAreas: ["Sector 60 Gurgaon", "Sector 61 Gurgaon", "Sector 62 Gurgaon", "Sector 64 Gurgaon", "Sector 65 Gurgaon", "Golf Course Extension Gurgaon", "Sector 66 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Sohna Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-64-gurgaon", { name: "Sector 64", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with gated communities along the southern belt", adjacentAreas: ["Sector 61 Gurgaon", "Sector 62 Gurgaon", "Sector 63 Gurgaon", "Sector 65 Gurgaon", "Sector 66 Gurgaon", "Golf Course Extension Gurgaon", "Sector 68 Gurgaon"], landmarks: ["Southern Peripheral Road", "Golf Course Extension Road", "Sohna Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-66-gurgaon", { name: "Sector 66", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with modern gated apartment complexes", adjacentAreas: ["Sector 63 Gurgaon", "Sector 64 Gurgaon", "Sector 65 Gurgaon", "Sector 67 Gurgaon", "Sector 68 Gurgaon", "Golf Course Extension Gurgaon", "Sector 70 Gurgaon"], landmarks: ["Southern Peripheral Road", "Golf Course Extension Road", "Sohna Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-67-gurgaon", { name: "Sector 67", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential sector with luxury villas and independent floors on Golf Course Extension Road", adjacentAreas: ["Sector 65 Gurgaon", "Sector 66 Gurgaon", "Sector 68 Gurgaon", "Sector 69 Gurgaon", "Golf Course Extension Gurgaon", "Southern Peripheral Road", "Emaar Palm Drive Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Emaar Business District"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-68-gurgaon", { name: "Sector 68", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with apartments and gated societies near Sohna Road", adjacentAreas: ["Sector 65 Gurgaon", "Sector 66 Gurgaon", "Sector 67 Gurgaon", "Sector 69 Gurgaon", "Sector 70 Gurgaon", "Sector 71 Gurgaon", "Golf Course Extension Gurgaon"], landmarks: ["Sohna Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-69-gurgaon", { name: "Sector 69", city: "Gurgaon", cityKey: "gurgaon", propertyType: "developing residential sector with new apartment projects near Sohna Road", adjacentAreas: ["Sector 66 Gurgaon", "Sector 67 Gurgaon", "Sector 68 Gurgaon", "Sector 70 Gurgaon", "Sector 71 Gurgaon", "Golf Course Extension Gurgaon", "New Gurgaon"], landmarks: ["Sohna Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-70-gurgaon", { name: "Sector 70", city: "Gurgaon", cityKey: "gurgaon", propertyType: "modern residential sector with premium gated societies on the Sohna Road–SPR corridor", adjacentAreas: ["Sector 67 Gurgaon", "Sector 68 Gurgaon", "Sector 69 Gurgaon", "Sector 71 Gurgaon", "Sector 72 Gurgaon", "Golf Course Extension Gurgaon", "New Gurgaon"], landmarks: ["Sohna Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-71-gurgaon", { name: "Sector 71", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with mid-segment and premium apartments near Dwarka Expressway", adjacentAreas: ["Sector 68 Gurgaon", "Sector 69 Gurgaon", "Sector 70 Gurgaon", "Sector 72 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Golf Course Extension Gurgaon"], landmarks: ["Dwarka Expressway", "Sohna Road", "NH-48"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  // ── Batch B — Sectors 82–90 + New Residential ──
  // IMPORTANT: "sector-82a-gurgaon" must appear before "sector-82-gurgaon" (substring rule)
  ["sector-82a-gurgaon",  { name: "Sector 82A",       city: "Gurgaon", cityKey: "gurgaon", propertyType: "sub-sector of 82 with mid-segment gated apartment projects near Dwarka Expressway", adjacentAreas: ["Sector 82 Gurgaon", "Sector 83 Gurgaon", "Sector 84 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 88 Gurgaon", "Sector 99 Gurgaon"], landmarks: ["Dwarka Expressway", "Kherki Daula Toll", "NH-48"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-82-gurgaon",   { name: "Sector 82",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "large residential sector with gated societies along the Dwarka Expressway corridor", adjacentAreas: ["Sector 81 Gurgaon", "Sector 82A Gurgaon", "Sector 83 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 84 Gurgaon", "Sector 88 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-83-gurgaon",   { name: "Sector 83",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "emerging residential sector with new apartment developments near Dwarka Expressway", adjacentAreas: ["Sector 82 Gurgaon", "Sector 82A Gurgaon", "Sector 84 Gurgaon", "Sector 85 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 88 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-84-gurgaon",   { name: "Sector 84",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with affordable and mid-segment apartments near IMT Manesar", adjacentAreas: ["Sector 82 Gurgaon", "Sector 83 Gurgaon", "Sector 85 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 86 Gurgaon", "Sector 88 Gurgaon"], landmarks: ["NH-48", "Dwarka Expressway", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-85-gurgaon",   { name: "Sector 85",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "developing residential sector with township projects in New Gurgaon", adjacentAreas: ["Sector 83 Gurgaon", "Sector 84 Gurgaon", "Sector 86 Gurgaon", "Sector 87 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 88 Gurgaon"], landmarks: ["NH-48", "Dwarka Expressway", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-86-gurgaon",   { name: "Sector 86",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "modern residential sector with gated communities in New Gurgaon", adjacentAreas: ["Sector 84 Gurgaon", "Sector 85 Gurgaon", "Sector 87 Gurgaon", "Sector 88 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 89 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Extension"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-87-gurgaon",   { name: "Sector 87",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "fast-growing residential sector with premium high-rise projects near Dwarka Expressway", adjacentAreas: ["Sector 85 Gurgaon", "Sector 86 Gurgaon", "Sector 88 Gurgaon", "Sector 89 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 90 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Extension"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-88-gurgaon",   { name: "Sector 88",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential sector with gated societies along Dwarka Expressway", adjacentAreas: ["Sector 82 Gurgaon", "Sector 84 Gurgaon", "Sector 87 Gurgaon", "Sector 89 Gurgaon", "Sector 90 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-89-gurgaon",   { name: "Sector 89",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with affordable housing projects near Dwarka Expressway", adjacentAreas: ["Sector 87 Gurgaon", "Sector 88 Gurgaon", "Sector 90 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 99 Gurgaon", "Palam Vihar"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Extension"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-90-gurgaon",   { name: "Sector 90",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "growing residential sector with high-rise apartments along Dwarka Expressway", adjacentAreas: ["Sector 88 Gurgaon", "Sector 89 Gurgaon", "Sector 99 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Palam Vihar", "Sector 102 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["new-residential-gurgaon", { name: "New Residential Gurgaon", city: "Gurgaon", cityKey: "gurgaon", propertyType: "cluster of newly developed sectors with modern apartment societies beyond Sector 80", adjacentAreas: ["Sector 82 Gurgaon", "Sector 84 Gurgaon", "Sector 85 Gurgaon", "Sector 86 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Manesar"], landmarks: ["Dwarka Expressway", "Kherki Daula Toll", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  // ── Batch D — Premium Townships ──
  ["vipul-world-gurgaon",        { name: "Vipul World",          city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium township with luxury high-rise apartments and landscaped greens on Sohna Road", adjacentAreas: ["Sector 48 Gurgaon", "Sector 49 Gurgaon", "Sohna Road", "Sector 50 Gurgaon", "Nirvana Country", "South City 2", "Golf Course Extension Gurgaon"], landmarks: ["Sohna Road", "Omaxe Gurgaon Mall", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["central-park-gurgaon",       { name: "Central Park",         city: "Gurgaon", cityKey: "gurgaon", propertyType: "ultra-luxury residential township with resort-style amenities on Golf Course Road", adjacentAreas: ["DLF Phase 5", "Golf Course Road", "Sector 48 Gurgaon", "Nirvana Country", "Sector 50 Gurgaon", "South City 2", "Sohna Road"], landmarks: ["Golf Course Road", "DLF Golf Course", "Sector 55-56 Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["tata-raisina-gurgaon",       { name: "Tata Raisina Residency", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium Tata Housing gated township on Golf Course Extension Road", adjacentAreas: ["Sector 59 Gurgaon", "Sector 60 Gurgaon", "Golf Course Extension Gurgaon", "Sector 62 Gurgaon", "Sohna Road", "Vatika City", "Sector 65 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["emaar-palm-drive-gurgaon",   { name: "Emaar Palm Drive",     city: "Gurgaon", cityKey: "gurgaon", propertyType: "Emaar's premium gated colony with villas and floors on Golf Course Extension Road", adjacentAreas: ["Sector 66 Gurgaon", "Sector 65 Gurgaon", "Golf Course Extension Gurgaon", "Sector 68 Gurgaon", "Sohna Road", "Southern Peripheral Road", "Sector 70 Gurgaon"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Emaar Business District"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["emaar-marbella-gurgaon",     { name: "Emaar Marbella",       city: "Gurgaon", cityKey: "gurgaon", propertyType: "Emaar's ultra-luxury villa township with Spanish-inspired architecture on Golf Course Extension Road", adjacentAreas: ["Sector 66 Gurgaon", "Emaar Palm Drive Gurgaon", "Golf Course Extension Gurgaon", "Sector 65 Gurgaon", "Sohna Road", "Sector 70 Gurgaon", "Southern Peripheral Road"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Emaar Business District"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["orchid-petals-gurgaon",      { name: "Orchid Petals",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium high-rise residential township with rooftop amenities on Sohna Road", adjacentAreas: ["Sector 49 Gurgaon", "Sohna Road", "Sector 48 Gurgaon", "Vipul World Gurgaon", "Golf Course Extension Gurgaon", "Sector 51 Gurgaon", "South City 2"], landmarks: ["Sohna Road", "Vatika City Centre", "Omaxe Gurgaon Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["bestech-park-view-gurgaon",  { name: "Bestech Park View",    city: "Gurgaon", cityKey: "gurgaon", propertyType: "Bestech Group's premium township with multiple residential towers on Sohna Road", adjacentAreas: ["Sector 49 Gurgaon", "Sector 57 Gurgaon", "Sohna Road", "Golf Course Extension Gurgaon", "Sector 48 Gurgaon", "Vatika City", "Sector 50 Gurgaon"], landmarks: ["Sohna Road", "Vatika City Centre", "Omaxe Gurgaon Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["vatika-city-gurgaon",        { name: "Vatika City",          city: "Gurgaon", cityKey: "gurgaon", propertyType: "Vatika Group's self-contained integrated township on Sohna Road with multiple premium sectors", adjacentAreas: ["Sector 49 Gurgaon", "Sohna Road", "Sector 56 Gurgaon", "Sector 57 Gurgaon", "Golf Course Extension Gurgaon", "Nirvana Country", "Sector 48 Gurgaon"], landmarks: ["Vatika City Centre", "Sohna Road", "Omaxe Gurgaon Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["richmond-park-gurgaon",      { name: "Richmond Park",        city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium low-rise gated community with independent floors on Golf Course Extension Road", adjacentAreas: ["Sector 65 Gurgaon", "Golf Course Extension Gurgaon", "Sector 66 Gurgaon", "Emaar Palm Drive Gurgaon", "Southern Peripheral Road", "Sector 68 Gurgaon", "Sohna Road"], landmarks: ["Golf Course Extension Road", "Southern Peripheral Road", "Vatika City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["hamilton-court-gurgaon",     { name: "Hamilton Court",       city: "Gurgaon", cityKey: "gurgaon", propertyType: "boutique premium residential development with spacious apartments on Golf Course Road", adjacentAreas: ["DLF Phase 4", "DLF Phase 5", "Golf Course Road", "Sector 56 Gurgaon", "Sector 57 Gurgaon", "Nirvana Country", "Sector 50 Gurgaon"], landmarks: ["Golf Course Road", "DLF Golf Course", "Sector 54 Chowk Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  // ── Batch C ──
  // NOTE: sector-102-gurgaon before sector-10x to avoid substring match issues with sector-10
  ["sector-111-gurgaon", { name: "Sector 111", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium high-rise residential sector along Dwarka Expressway near Delhi border", adjacentAreas: ["Sector 110 Gurgaon", "Sector 109 Gurgaon", "Sector 104 Gurgaon", "Dwarka Expressway Gurgaon", "Palam Vihar", "Sector 99 Gurgaon", "Sector 112 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Delhi–Gurgaon border"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-110-gurgaon", { name: "Sector 110", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential sector with luxury high-rises close to Delhi on Dwarka Expressway", adjacentAreas: ["Sector 109 Gurgaon", "Sector 111 Gurgaon", "Sector 104 Gurgaon", "Dwarka Expressway Gurgaon", "Palam Vihar", "Sector 99 Gurgaon", "Sector 102 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-109-gurgaon", { name: "Sector 109", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with gated high-rise townships on Dwarka Expressway", adjacentAreas: ["Sector 102 Gurgaon", "Sector 104 Gurgaon", "Sector 110 Gurgaon", "Dwarka Expressway Gurgaon", "Palam Vihar", "Sector 99 Gurgaon", "Sector 108 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Extension"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-104-gurgaon", { name: "Sector 104", city: "Gurgaon", cityKey: "gurgaon", propertyType: "emerging residential sector with luxury apartment projects near Dwarka Expressway", adjacentAreas: ["Sector 99 Gurgaon", "Sector 102 Gurgaon", "Sector 103 Gurgaon", "Sector 109 Gurgaon", "Dwarka Expressway Gurgaon", "Palam Vihar", "Sector 110 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-102-gurgaon", { name: "Sector 102", city: "Gurgaon", cityKey: "gurgaon", propertyType: "developing residential sector with mid and premium-segment apartments on Dwarka Expressway", adjacentAreas: ["Sector 99 Gurgaon", "Sector 103 Gurgaon", "Sector 104 Gurgaon", "Sector 109 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 90 Gurgaon", "Palam Vihar"], landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-99-gurgaon",  { name: "Sector 99",  city: "Gurgaon", cityKey: "gurgaon", propertyType: "fast-growing residential sector with affordable and mid-segment gated societies on Dwarka Expressway", adjacentAreas: ["Sector 90 Gurgaon", "Sector 95 Gurgaon", "Sector 102 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Palam Vihar", "Sector 89 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-95-gurgaon",  { name: "Sector 95",  city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with affordable housing and township projects near Dwarka Expressway", adjacentAreas: ["Sector 90 Gurgaon", "Sector 93 Gurgaon", "Sector 99 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 92 Gurgaon", "Sector 91 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-48", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-93-gurgaon",  { name: "Sector 93",  city: "Gurgaon", cityKey: "gurgaon", propertyType: "growing residential sector with gated apartment communities in New Gurgaon", adjacentAreas: ["Sector 91 Gurgaon", "Sector 92 Gurgaon", "Sector 95 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 90 Gurgaon", "Manesar"], landmarks: ["NH-48", "Dwarka Expressway", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-92-gurgaon",  { name: "Sector 92",  city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with new apartment projects in the New Gurgaon zone", adjacentAreas: ["Sector 91 Gurgaon", "Sector 93 Gurgaon", "Sector 95 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 90 Gurgaon", "Sector 88 Gurgaon"], landmarks: ["NH-48", "Dwarka Expressway", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-91-gurgaon",  { name: "Sector 91",  city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential sector with affordable and mid-segment societies in New Gurgaon", adjacentAreas: ["Sector 90 Gurgaon", "Sector 92 Gurgaon", "Sector 93 Gurgaon", "New Gurgaon", "Dwarka Expressway Gurgaon", "Sector 88 Gurgaon", "Sector 89 Gurgaon"], landmarks: ["NH-48", "Dwarka Expressway", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  // ── Batch A ──
  ["sector-72-gurgaon", { name: "Sector 72", city: "Gurgaon", cityKey: "gurgaon", propertyType: "fast-developing residential sector with affordable and mid-segment apartments", adjacentAreas: ["Sector 70 Gurgaon", "Sector 71 Gurgaon", "Sector 73 Gurgaon", "Sector 74 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 81 Gurgaon"], landmarks: ["Dwarka Expressway", "Kherki Daula", "NH-8"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-73-gurgaon", { name: "Sector 73", city: "Gurgaon", cityKey: "gurgaon", propertyType: "emerging residential sector with township projects near Dwarka Expressway", adjacentAreas: ["Sector 71 Gurgaon", "Sector 72 Gurgaon", "Sector 74 Gurgaon", "Sector 75 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 82 Gurgaon"], landmarks: ["Dwarka Expressway", "Kherki Daula Toll", "NH-8"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-74-gurgaon", { name: "Sector 74", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with gated societies along Dwarka Expressway corridor", adjacentAreas: ["Sector 72 Gurgaon", "Sector 73 Gurgaon", "Sector 75 Gurgaon", "Sector 76 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 82 Gurgaon", "New Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-75-gurgaon", { name: "Sector 75", city: "Gurgaon", cityKey: "gurgaon", propertyType: "mixed residential sector with mid-premium township projects", adjacentAreas: ["Sector 73 Gurgaon", "Sector 74 Gurgaon", "Sector 76 Gurgaon", "Sector 77 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 82 Gurgaon", "Sector 83 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "Sheetla Mata Mandir"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-76-gurgaon", { name: "Sector 76", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with luxury towers along Dwarka Expressway", adjacentAreas: ["Sector 74 Gurgaon", "Sector 75 Gurgaon", "Sector 77 Gurgaon", "Sector 78 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 83 Gurgaon", "Sector 84 Gurgaon"], landmarks: ["Dwarka Expressway", "Vatika India Next", "NH-8"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-77-gurgaon", { name: "Sector 77", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with affordable and mid-range housing near Dwarka Expressway", adjacentAreas: ["Sector 75 Gurgaon", "Sector 76 Gurgaon", "Sector 78 Gurgaon", "Sector 79 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 84 Gurgaon", "Sector 85 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "Sheetla Mata Mandir"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-78-gurgaon", { name: "Sector 78", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential township sector with gated housing along Dwarka Expressway", adjacentAreas: ["Sector 76 Gurgaon", "Sector 77 Gurgaon", "Sector 79 Gurgaon", "Sector 80 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 85 Gurgaon", "Sector 86 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "Vatika India Next"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-79-gurgaon", { name: "Sector 79", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with affordable apartment projects near NH-8 and Dwarka Expressway", adjacentAreas: ["Sector 77 Gurgaon", "Sector 78 Gurgaon", "Sector 80 Gurgaon", "Sector 81 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 86 Gurgaon", "Sector 87 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "IMT Manesar Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-80-gurgaon", { name: "Sector 80", city: "Gurgaon", cityKey: "gurgaon", propertyType: "emerging residential sector near NH-8 with mid-income housing", adjacentAreas: ["Sector 78 Gurgaon", "Sector 79 Gurgaon", "Sector 81 Gurgaon", "Sector 82 Gurgaon", "Dwarka Expressway Gurgaon", "Sector 87 Gurgaon", "New Gurgaon"], landmarks: ["NH-8", "Dwarka Expressway", "IFFCO Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-81-gurgaon", { name: "Sector 81", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with township projects near Dwarka Expressway and NH-8", adjacentAreas: ["Sector 79 Gurgaon", "Sector 80 Gurgaon", "Sector 82 Gurgaon", "Sector 83 Gurgaon", "Dwarka Expressway Gurgaon", "New Gurgaon", "Sector 88 Gurgaon"], landmarks: ["Dwarka Expressway", "NH-8", "Kherki Daula Toll"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["golf-course", { name: "Golf Course Road", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium high-rise apartments and villas", adjacentAreas: ["DLF Phase 4", "DLF Phase 5", "Sector 54 Gurgaon", "Sector 56 Gurgaon", "Golf Course Extension", "South City 2", "Sohna Road"], landmarks: ["Gold Souk Mall", "Sector 55-56 Metro", "Golflinks"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sohna-road", { name: "Sohna Road", city: "Gurgaon", cityKey: "gurgaon", propertyType: "rapidly developing corridor with gated apartment complexes", adjacentAreas: ["Sector 48 Gurgaon", "Sector 49 Gurgaon", "Golf Course Extension", "Vatika City", "Badshahpur", "Sector 57 Gurgaon", "Subash Nagar"], landmarks: ["Vatika City Centre", "Omaxe Gurgaon Mall", "Badshahpur Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["cyber-city", { name: "Cyber City", city: "Gurgaon", cityKey: "gurgaon", propertyType: "corporate hub with adjacent premium residential zones", adjacentAreas: ["Udyog Vihar", "DLF Phase 2", "DLF Phase 3", "Sector 25 Gurgaon", "Sector 26 Gurgaon", "MG Road", "NH-48"], landmarks: ["DLF Cyber Hub", "Huda City Centre Metro", "Rapid Metro Cyber City"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["nirvana-country", { name: "Nirvana Country", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium gated township", adjacentAreas: ["DLF Phase 5", "Golf Course Road", "South City 2", "Sector 50 Gurgaon", "Sector 51 Gurgaon", "Sohna Road", "Vatika City"], landmarks: ["Golf Course Road", "Sector 55-56 Metro", "Omaxe Gurgaon Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["new-gurgaon", { name: "New Gurgaon", city: "Gurgaon", cityKey: "gurgaon", propertyType: "newly developed residential sectors", adjacentAreas: ["Sector 76 Gurgaon", "Sector 78 Gurgaon", "Sector 82 Gurgaon", "Sector 84 Gurgaon", "Dwarka Expressway", "Palam Vihar", "Manesar"], landmarks: ["Dwarka Expressway", "Kherki Daula Toll", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["dwarka-expressway", { name: "Dwarka Expressway", city: "Gurgaon", cityKey: "gurgaon", propertyType: "modern high-rise societies along the expressway", adjacentAreas: ["Sector 99 Gurgaon", "Sector 102 Gurgaon", "Sector 103 Gurgaon", "Palam Vihar", "New Gurgaon", "Sector 84 Gurgaon", "Sector 88 Gurgaon"], landmarks: ["Dwarka Expressway", "Sheetla Mata Mandir", "IMT Manesar"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],

  // ── Ghaziabad ──
  ["indirapuram", { name: "Indirapuram", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "high-density residential township with apartment societies", adjacentAreas: ["Vaishali", "Kaushambi", "Vasundhara", "Ahinsa Khand 1", "Ahinsa Khand 2", "Shakti Khand", "Niti Khand"], landmarks: ["Shipra Mall", "Mahagun Metro Mall", "Vaishali Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],
  ["vaishali", { name: "Vaishali", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "residential sectors with apartments and independent houses", adjacentAreas: ["Indirapuram", "Kaushambi", "Vasundhara", "Sector 1 Vaishali", "Sector 4 Vaishali", "Dilshad Garden Delhi", "Anand Vihar Delhi"], landmarks: ["Vaishali Metro", "Pacific Mall Ghaziabad", "Vaishali Sector 3 Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],
  ["kaushambi", { name: "Kaushambi", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "mixed residential and commercial township", adjacentAreas: ["Vaishali", "Indirapuram", "Sahibabad", "Anand Vihar Delhi", "Patparganj Delhi", "Vasundhara", "Sector 4 Vaishali"], landmarks: ["Kaushambi Metro", "Kaushambi Market", "Anand Vihar Railway Station"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],
  ["raj-nagar-extension", { name: "Raj Nagar Extension", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "rapidly growing township with gated apartment societies", adjacentAreas: ["Crossing Republik", "Wave City", "Raj Nagar", "Govindpuram", "Sector 1 Vasundhara", "Mohan Nagar", "Vijay Nagar"], landmarks: ["Raj Nagar District Centre", "NH-58", "Mohan Nagar Metro"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],
  ["crossing-republik", { name: "Crossing Republik", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "integrated township with large gated communities", adjacentAreas: ["Raj Nagar Extension", "Wave City", "Vasundhara", "Vijay Nagar", "Govindpuram", "Mohan Nagar", "NH-58 corridor"], landmarks: ["Crossing Republik Township Gate", "NH-58", "Raj Nagar District Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],
  ["vasundhara-ghaziabad", { name: "Vasundhara", city: "Ghaziabad", cityKey: "ghaziabad", propertyType: "planned township with residential sectors", adjacentAreas: ["Indirapuram", "Kaushambi", "Vaishali", "Sector 1 Vasundhara", "Sector 4 Vasundhara", "Sahibabad", "Mayur Vihar Delhi"], landmarks: ["Vaishali Metro", "Pacific Mall", "Kaushambi Business District"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-ghaziabad" }],

  // ── Faridabad ──
  ["bptp", { name: "BPTP Parklands", city: "Faridabad", cityKey: "faridabad", propertyType: "premium gated residential township", adjacentAreas: ["Greater Faridabad", "Neharpar", "Sector 86 Faridabad", "Sector 88 Faridabad", "Sector 89 Faridabad", "Surajkund", "Sector 81 Faridabad"], landmarks: ["BPTP Central Market", "Surajkund Road", "Highway 19"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-faridabad" }],
  ["neharpar", { name: "Neharpar", city: "Faridabad", cityKey: "faridabad", propertyType: "growing residential zone with modern apartment societies", adjacentAreas: ["Greater Faridabad", "BPTP Parklands", "Sector 86 Faridabad", "Sector 88 Faridabad", "Ballabgarh", "Sector 75 Faridabad", "Sector 78 Faridabad"], landmarks: ["Highway 19", "Surajkund Road", "BPTP Arena Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-faridabad" }],
  ["greater-faridabad", { name: "Greater Faridabad", city: "Faridabad", cityKey: "faridabad", propertyType: "modern residential sectors along Highway 19", adjacentAreas: ["BPTP Parklands", "Neharpar", "Sector 81 Faridabad", "Sector 82 Faridabad", "Sector 84 Faridabad", "Ballabgarh", "Surajkund"], landmarks: ["Highway 19", "Surajkund Mela Ground", "Omaxe World Street"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-faridabad" }],
  ["old-faridabad", { name: "Old Faridabad", city: "Faridabad", cityKey: "faridabad", propertyType: "established residential area with independent houses and older flats", adjacentAreas: ["NIT Faridabad", "Sector 15 Faridabad", "Sector 21 Faridabad", "Sector 16 Faridabad", "Sector 8 Faridabad", "Sector 9 Faridabad", "Crown Interiorz area"], landmarks: ["Faridabad Railway Station", "Crown Interiorz Mall", "YMCA Chowk"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-faridabad" }],
  ["surajkund", { name: "Surajkund", city: "Faridabad", cityKey: "faridabad", propertyType: "prestigious residential and resort locality", adjacentAreas: ["Greater Faridabad", "Sector 37 Faridabad", "Mewat Road", "Saket South Delhi", "Tughlakabad Delhi", "Badarpur", "Sector 44 Faridabad"], landmarks: ["Surajkund Crafts Mela Ground", "Crown Interiorz Mall", "Surajkund International Resort"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-faridabad" }],
  ["south-city-1", { name: "South City 1", city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential township with independent floors and gated societies", adjacentAreas: ["Sushant Lok", "DLF Phase 2", "South City 2", "Sector 41 Gurgaon", "Sector 47 Gurgaon", "Golf Course Road", "NH-48"], landmarks: ["South City 1 Market", "Golf Course Road", "NH-48"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["south-city-2", { name: "South City 2", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential township with gated societies and luxury apartments", adjacentAreas: ["South City 1", "Nirvana Country", "Golf Course Road", "Sector 49 Gurgaon", "Sector 50 Gurgaon", "Sohna Road", "Golf Course Extension"], landmarks: ["Golf Course Road", "Nirvana Country Gate", "Omaxe Gurgaon Mall"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["palam-vihar", { name: "Palam Vihar", city: "Gurgaon", cityKey: "gurgaon", propertyType: "established planned township with independent houses and residential plots", adjacentAreas: ["Dwarka Expressway", "New Gurgaon", "Sector 99 Gurgaon", "Sector 102 Gurgaon", "Palam Vihar Extension", "Dwarka Delhi", "Sector 110 Gurgaon"], landmarks: ["Palam Vihar Market", "Dwarka Expressway", "Sheetla Mata Mandir"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-40-gurgaon", { name: "Sector 40", city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential sector with DDA-style flats and builder floors near HUDA City Centre", adjacentAreas: ["Sector 39 Gurgaon", "Sector 41 Gurgaon", "Sector 42 Gurgaon", "South City 1", "HUDA City Centre", "Golf Course Road"], landmarks: ["HUDA City Centre Metro", "Sector 40 Market", "Golf Course Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-41-gurgaon", { name: "Sector 41", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with independent houses and gated societies near Golf Course Road", adjacentAreas: ["Sector 40 Gurgaon", "Sector 42 Gurgaon", "South City 1", "DLF Phase 1", "Golf Course Road", "Sector 44 Gurgaon"], landmarks: ["Golf Course Road", "South City 1 Market", "HUDA City Centre"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-44-gurgaon", { name: "Sector 44", city: "Gurgaon", cityKey: "gurgaon", propertyType: "well-established residential sector with DLF apartments and builder floors near Golf Course Road", adjacentAreas: ["Sector 41 Gurgaon", "Sector 45 Gurgaon", "DLF Phase 1", "DLF Phase 2", "Golf Course Road", "MG Road"], landmarks: ["DLF Cyber City", "Golf Course Road", "MG Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-45-gurgaon", { name: "Sector 45", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential sector with premium apartments and independent floors near Golf Course Road", adjacentAreas: ["Sector 44 Gurgaon", "Sector 46 Gurgaon", "DLF Phase 2", "South City 1", "Golf Course Road", "Sushant Lok"], landmarks: ["Golf Course Road", "South City 1", "DLF Phase 2 Gate"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-46-gurgaon", { name: "Sector 46", city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential sector with mix of independent houses and apartment complexes", adjacentAreas: ["Sector 45 Gurgaon", "Sector 47 Gurgaon", "South City 1", "Sushant Lok", "Golf Course Road", "NH-48"], landmarks: ["Sector 46 Market", "Golf Course Road", "NH-48"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-47-gurgaon", { name: "Sector 47", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with luxury villas, builder floors and gated societies", adjacentAreas: ["Sector 46 Gurgaon", "Sector 48 Gurgaon", "South City 1", "Sushant Lok", "Golf Course Road", "Sector 50 Gurgaon"], landmarks: ["Golf Course Road", "Malibu Towne", "NH-48"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-48-gurgaon", { name: "Sector 48", city: "Gurgaon", cityKey: "gurgaon", propertyType: "residential sector with high-rise apartments and gated societies near Sohna Road", adjacentAreas: ["Sector 47 Gurgaon", "Sector 49 Gurgaon", "Nirvana Country", "South City 2", "Sohna Road", "Golf Course Extension"], landmarks: ["Sohna Road", "Nirvana Country Gate", "Sector 48 Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-52-gurgaon", { name: "Sector 52", city: "Gurgaon", cityKey: "gurgaon", propertyType: "established residential sector with apartments and independent floors near IFFCO Chowk Metro Station", adjacentAreas: ["Sector 51 Gurgaon", "Sector 53 Gurgaon", "DLF Phase 4", "Golf Course Extension", "IFFCO Chowk", "MG Road"], landmarks: ["Sector 52 Metro Station", "IFFCO Chowk", "MG Road"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-53-gurgaon", { name: "Sector 53", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale residential sector with premium builder floors and gated communities near Golf Course Road", adjacentAreas: ["Sector 52 Gurgaon", "Sector 54 Gurgaon", "DLF Phase 4", "Golf Course Road", "DLF Phase 5", "Golf Course Extension"], landmarks: ["Golf Course Road", "DLF Phase 4 Gate", "Sector 53 Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-54-gurgaon", { name: "Sector 54", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium residential sector with luxury apartments and villas along Golf Course Road", adjacentAreas: ["Sector 53 Gurgaon", "Sector 55 Gurgaon", "DLF Phase 5", "Golf Course Road", "DLF Phase 4", "Sector 56 Gurgaon"], landmarks: ["Sector 54 Chowk Metro", "Golf Course Road", "DLF Magnolias"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["sector-55-gurgaon", { name: "Sector 55", city: "Gurgaon", cityKey: "gurgaon", propertyType: "growing residential sector with modern apartments near Golf Course Extension Road", adjacentAreas: ["Sector 54 Gurgaon", "Sector 56 Gurgaon", "DLF Phase 5", "Golf Course Road", "Golf Course Extension", "Sector 57 Gurgaon"], landmarks: ["Golf Course Road", "Golf Course Extension Road", "Sector 56 Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["malibu-towne", { name: "Malibu Towne", city: "Gurgaon", cityKey: "gurgaon", propertyType: "upscale self-contained township with independent floors, villas and gated societies on Sohna Road", adjacentAreas: ["Sector 47 Gurgaon", "South City 1", "Sector 48 Gurgaon", "Sohna Road", "Golf Course Road", "Nirvana Country"], landmarks: ["Malibu Towne Club", "Sohna Road", "South City 1 Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["ardee-city", { name: "Ardee City", city: "Gurgaon", cityKey: "gurgaon", propertyType: "planned residential township with gated societies and independent floors near Sector 52 on Sohna Road", adjacentAreas: ["Sector 52 Gurgaon", "Sector 51 Gurgaon", "DLF Phase 4", "Sohna Road", "Golf Course Extension", "South City 1"], landmarks: ["Ardee City Mall", "Sohna Road", "DLF Phase 4 Gate"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
  ["heritage-city-gurgaon", { name: "Heritage City", city: "Gurgaon", cityKey: "gurgaon", propertyType: "premium integrated township with plotted development and gated villas near MG Road", adjacentAreas: ["Sector 25 Gurgaon", "MG Road", "DLF Phase 1", "Sector 27 Gurgaon", "Sikanderpur", "IFFCO Chowk"], landmarks: ["MG Road", "IFFCO Chowk", "Heritage City Market"], responseTime: "2–4 hours", parentServiceSlug: "/sofa-repair-gurgaon" }],
];

// ─── Slug parser ──────────────────────────────────────────────────────────

function detectCityFromSlug(slug: string): { cityKey: CityKey; cityName: string } {
  if (slug.includes("gurgaon") || slug.includes("gurugram")) return { cityKey: "gurgaon", cityName: "Gurgaon" };
  if (slug.includes("ghaziabad")) return { cityKey: "ghaziabad", cityName: "Ghaziabad" };
  if (slug.includes("faridabad")) return { cityKey: "faridabad", cityName: "Faridabad" };
  if (slug.includes("noida") || slug.includes("greater-noida")) return { cityKey: "noida", cityName: "Noida" };
  if (slug.includes("panchkula")) return { cityKey: "panchkula", cityName: "Panchkula" };
  if (slug.includes("mohali")) return { cityKey: "mohali", cityName: "Mohali" };
  if (slug.includes("chandigarh")) return { cityKey: "chandigarh", cityName: "Chandigarh" };
  return { cityKey: "delhi", cityName: "Delhi" };
}

function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((w) => {
      if (["in", "of", "at", "the", "a", "an", "and"].includes(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

function extractLocalityName(slug: string, cityName: string): string {
  // Strip service prefix (sofa-repair-, furniture-repair-, recliner-repair-, etc.)
  let locality = slug
    .replace(/^(sofa|furniture|recliner|chair|bed|table|dining|office|wooden|leather|fabric|upholstery)-repair-/, "")
    .replace(/^(sofa-upholstery|foam-replacement|recliner-motor|sofa-cum-bed)-/, "");
  // Strip city suffix
  locality = locality
    .replace(/-noida$/, "")
    .replace(/-delhi$/, "")
    .replace(/-gurgaon$/, "")
    .replace(/-gurugram$/, "")
    .replace(/-ghaziabad$/, "")
    .replace(/-faridabad$/, "");
  // Clean trailing city name if embedded
  locality = locality.replace(new RegExp(`-?${cityName.toLowerCase()}-?`, "g"), " ").trim();
  return toTitleCase(locality) || cityName;
}

// ─── Main export ──────────────────────────────────────────────────────────

/**
 * Returns the raw LocalityInfo for an exact locality slug key (e.g. "hauz-khas").
 * Used by kitchen locality templates to enrich pages with verified property context.
 * Returns null if the slug is not in the known locality registry.
 */
export function getLocalityData(localitySlug: string): LocalityInfo | null {
  for (const [fragment, info] of KNOWN_LOCALITY_FRAGMENTS) {
    if (fragment === localitySlug) return info;
  }
  return null;
}

/** Returns locality info for any SEO page slug. Never throws. */
export function getLocalityInfo(slug: string): LocalityInfo {
  // 1. Check known locality fragments (most specific match wins)
  for (const [fragment, info] of KNOWN_LOCALITY_FRAGMENTS) {
    if (slug.includes(fragment)) return info;
  }

  // 2. Noida sector pattern: sector-{N}-noida OR noida-sector-{N}
  const sectorMatch =
    slug.match(/sector-(\d+)-noida/) ??
    slug.match(/noida-sector-(\d+)/) ??
    slug.match(/sector-(\d+[a-z]?)-noida/);
  if (sectorMatch) {
    const n = parseInt(sectorMatch[1], 10);
    if (!isNaN(n)) return buildNoidaSectorInfo(n);
  }

  // 3. Gurgaon sector pattern: sector-{N}-gurgaon
  const gurSectorMatch = slug.match(/sector-(\d+)-gurgaon/);
  if (gurSectorMatch) {
    const n = parseInt(gurSectorMatch[1], 10);
    if (!isNaN(n)) {
      // Use "Sector N Gurgaon" format so slugification produces "sector-n-gurgaon"
      // which matches registered page slugs → pageExists() returns true automatically
      // for any new sector page added to the registry.
      const adjacent = [n - 4, n - 2, n + 2, n + 4]
        .filter((x) => x > 0)
        .map((x) => `Sector ${x} Gurgaon`);
      adjacent.push("Golf Course Extension Gurgaon", "Sohna Road Gurgaon", "New Gurgaon");
      return {
        name: `Sector ${n}`,
        city: "Gurgaon",
        cityKey: "gurgaon",
        propertyType: "residential sector with apartments and builder floors",
        adjacentAreas: adjacent.slice(0, 8),
        landmarks: ["Cyber City", "Ambience Mall", "MG Road Metro"],
        responseTime: "2–4 hours",
        parentServiceSlug: "/sofa-repair-gurgaon",
      };
    }
  }

  // 4. Faridabad sector pattern
  const farSectorMatch = slug.match(/sector-(\d+[a-z]?)-faridabad/);
  if (farSectorMatch) {
    const n = parseInt(farSectorMatch[1], 10);
    const sectorName = `Sector ${farSectorMatch[1].toUpperCase()}`;
    return {
      name: sectorName,
      city: "Faridabad",
      cityKey: "faridabad",
      propertyType: "residential sector with independent houses and flats",
      adjacentAreas: [`Sector ${n - 2} Faridabad`, `Sector ${n + 2} Faridabad`, `Sector ${n + 4} Faridabad`, "NIT Faridabad", "Old Faridabad", "Greater Faridabad", "BPTP Parklands"],
      landmarks: ["Crown Interiorz Mall", "YMCA Chowk", "Highway 19"],
      responseTime: "2–4 hours",
      parentServiceSlug: "/sofa-repair-faridabad",
    };
  }

  // 5. Generic fallback — parse city and locality from slug
  const { cityKey, cityName } = detectCityFromSlug(slug);
  const localityName = extractLocalityName(slug, cityName);

  const defaultAdjacentMap: Record<CityKey, string[]> = {
    noida: ["Sector 18", "Sector 44", "Sector 62", "Sector 93", "Sector 137", "Greater Noida", "Noida Extension"],
    delhi: ["South Delhi", "East Delhi", "Dwarka", "Rohini", "Vasant Kunj", "Lajpat Nagar", "Karol Bagh"],
    gurgaon: ["DLF Phase 1", "DLF Phase 3", "Golf Course Road", "Sohna Road", "Cyber City", "MG Road", "Sector 56"],
    ghaziabad: ["Indirapuram", "Vaishali", "Kaushambi", "Raj Nagar Extension", "Vasundhara", "Crossing Republik", "Sahibabad"],
    faridabad: ["NIT Faridabad", "Old Faridabad", "Greater Faridabad", "BPTP Parklands", "Neharpar", "Ballabgarh", "Surajkund"],
    chandigarh: ["Sector 7", "Sector 8", "Sector 9", "Sector 15", "Sector 17", "Sector 22", "Sector 34", "Sector 35", "Sector 44", "Manimajra", "Mohali", "Panchkula"],
    mohali: ["Phase 1", "Phase 2", "Phase 3A", "Phase 3B", "Phase 5", "Phase 7", "Phase 10", "Aerocity", "Kharar", "Zirakpur", "Chandigarh"],
    panchkula: ["Sector 1", "Sector 4", "Sector 5", "Sector 6", "Sector 7", "Sector 8", "Sector 10", "Sector 11", "Sector 20", "MDC Sector 4", "Chandigarh", "Mohali"],
  };

  const defaultLandmarksMap: Record<CityKey, string[]> = {
    noida: ["Botanical Garden Metro", "Atta Market", "DLF Mall of India"],
    delhi: ["Connaught Place", "Saket Malls", "Nehru Place"],
    gurgaon: ["Cyber City", "Ambience Mall", "Huda City Centre Metro"],
    ghaziabad: ["Shipra Mall", "Pacific Mall Ghaziabad", "Raj Nagar District Centre"],
    faridabad: ["Crown Interiorz Mall", "YMCA Chowk", "Surajkund Crafts Mela Ground"],
    chandigarh: ["Sector 17 Plaza", "Elante Mall", "Chandigarh Railway Station"],
    mohali: ["Mohali Cricket Stadium", "Aerocity", "Mohali IT Park"],
    panchkula: ["Panchkula Bus Stand", "Sector 5 Market", "Mansa Devi Temple"],
  };

  const parentSlugMap: Record<CityKey, string> = {
    noida: "/sofa-repair-noida",
    delhi: "/sofa-repair-delhi",
    gurgaon: "/sofa-repair-gurgaon",
    ghaziabad: "/sofa-repair-ghaziabad",
    faridabad: "/sofa-repair-faridabad",
    chandigarh: "/sofa-repair-chandigarh",
    mohali: "/sofa-repair-mohali",
    panchkula: "/sofa-repair-panchkula",
  };

  return {
    name: localityName,
    city: cityName,
    cityKey,
    propertyType: "residential locality",
    adjacentAreas: defaultAdjacentMap[cityKey],
    landmarks: defaultLandmarksMap[cityKey],
    responseTime: "2–4 hours",
    parentServiceSlug: parentSlugMap[cityKey],
  };
}
