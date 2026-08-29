/**
 * locality-profile-engine.ts
 *
 * Produces a LocalityProfile for any kitchen locality slug by:
 *  1. Joining against the sofa repair locality registry (rich data: propertyType, landmarks, adjacentAreas)
 *  2. Falling back to an affluence-derived description when no rich match exists
 *
 * Used by kitchen locality templates to add genuine local differentiation.
 * Never fabricates landmarks or property facts — only uses verified data.
 */

import { getLocalityData } from "@/lib/seoConfigs/localities.ts";

// ─── Supplementary enrichment for kitchen localities not in the sofa repair registry ──
// Verified property context for localities added in kitchen rollout groups 2 & 3.
// Never fabricate — only use real, verifiable data for each area.
type EnrichmentEntry = {
  propertyType: string;
  landmarks: string[];
  adjacentAreas: string[];
};

const KITCHEN_LOCALITY_ENRICHMENT: Record<string, EnrichmentEntry> = {
  // ── Delhi ────────────────────────────────────────────────────────────────
  "dwarka-delhi": {
    propertyType: "large planned sub-city with DDA sectors, high-rise apartments, and modern housing societies",
    landmarks: ["Dwarka Sector 10 Metro", "Dwarka Sector 21 Metro", "Ambience Mall Vasant Kunj"],
    adjacentAreas: ["Janakpuri", "Uttam Nagar", "Palam", "Dwarka Expressway", "Najafgarh", "Sector 12 Dwarka"],
  },
  "south-extension": {
    propertyType: "prestigious South Delhi shopping and residential colony with independent houses and premium builder floors",
    landmarks: ["South Extension Part 1 Market", "South Extension Part 2 Market", "Lajpat Nagar Metro"],
    adjacentAreas: ["Lajpat Nagar", "Defence Colony", "Greater Kailash", "Andrews Ganj", "Jangpura", "Kailash Colony"],
  },
  "saket-delhi": {
    propertyType: "upscale South Delhi residential and commercial hub with multi-storey apartments and premium housing complexes",
    landmarks: ["Select Citywalk Mall", "DLF South Court", "Saket Metro"],
    adjacentAreas: ["Greater Kailash", "Malviya Nagar", "Vasant Kunj", "Hauz Khas", "Green Park", "Panchsheel Park"],
  },
  "panchsheel-park-delhi": {
    propertyType: "premium South Delhi residential enclave with independent houses and lush green surroundings",
    landmarks: ["Panchsheel Park Market", "Hauz Khas Village", "Shahpur Jat"],
    adjacentAreas: ["Hauz Khas", "Green Park", "Gulmohar Park", "Safdarjung Enclave", "Greater Kailash", "Saket"],
  },
  "malviya-nagar": {
    propertyType: "well-established South Delhi colony with independent houses, builder floors, and a busy market hub",
    landmarks: ["Malviya Nagar Metro", "Hauz Khas Village", "Select Citywalk Mall"],
    adjacentAreas: ["Hauz Khas", "Vasant Kunj", "Safdarjung Enclave", "Saket", "Green Park", "Shivalik"],
  },
  "kalkaji": {
    propertyType: "established South Delhi locality with multi-storey apartments, builder floors, and a strong commercial presence",
    landmarks: ["Kalkaji Temple", "Nehru Place Metro", "Govindpuri Metro"],
    adjacentAreas: ["Greater Kailash", "Lajpat Nagar", "Govindpuri", "Tughlakabad", "Okhla", "Nehru Place"],
  },
  "model-town-delhi": {
    propertyType: "affluent North Delhi planned colony with spacious independent houses, large plots, and tree-lined avenues",
    landmarks: ["Model Town Metro", "Azadpur Mandi", "Delhi University North Campus"],
    adjacentAreas: ["Pitampura", "Rohini", "Civil Lines", "Adarsh Nagar", "Shalimar Bagh", "Kingsway Camp"],
  },
  "pitampura": {
    propertyType: "densely developed North-West Delhi locality with multi-storey apartments, builder floors, and DDA housing",
    landmarks: ["Pitampura TV Tower", "Kohat Enclave Metro", "Netaji Subhash Place Metro"],
    adjacentAreas: ["Rohini", "Shalimar Bagh", "Ashok Vihar", "Punjabi Bagh", "Paschim Vihar", "Wazirpur"],
  },
  "punjabi-bagh": {
    propertyType: "established West Delhi residential colony with large independent houses, builder floors, and premium apartments",
    landmarks: ["Punjabi Bagh Metro", "Club Road Market", "Rajouri Garden Metro"],
    adjacentAreas: ["Rajouri Garden", "Pitampura", "Paschim Vihar", "Madipur", "Tagore Garden", "Janakpuri"],
  },
  "rajouri-garden": {
    propertyType: "busy West Delhi residential and commercial hub with builder floors, multi-storey apartments, and active markets",
    landmarks: ["Rajouri Garden Metro", "TDI Mall", "West Gate Mall"],
    adjacentAreas: ["Punjabi Bagh", "Janakpuri", "Paschim Vihar", "Tagore Garden", "Patel Nagar", "Madipur"],
  },
  "mayur-vihar": {
    propertyType: "planned East Delhi locality with DDA flats, multi-storey apartments, and gated housing societies",
    landmarks: ["Mayur Vihar Phase 1 Metro", "Akshardham Temple", "New Ashok Nagar Metro"],
    adjacentAreas: ["Patparganj", "Vasudhara Enclave", "IP Extension", "Preet Vihar", "Anand Vihar", "Laxmi Nagar"],
  },
  "paschim-vihar": {
    propertyType: "planned West Delhi locality with DDA housing blocks, multi-storey apartments, and modern residential complexes",
    landmarks: ["Paschim Vihar West Metro", "Paschim Vihar East Metro", "Outer Ring Road"],
    adjacentAreas: ["Punjabi Bagh", "Pitampura", "Rohini", "Janakpuri", "Tikri Kalan", "Peeragarhi"],
  },
  "krishna-nagar-delhi": {
    propertyType: "established East Delhi residential locality with independent houses, flats, and active neighbourhood markets",
    landmarks: ["Krishna Nagar Metro", "Laxmi Nagar Market", "Nirman Vihar Metro"],
    adjacentAreas: ["Mayur Vihar", "Preet Vihar", "Laxmi Nagar", "Gandhi Nagar", "Vivek Vihar", "Anand Vihar"],
  },
  "vasundhara-enclave-delhi": {
    propertyType: "modern East Delhi residential enclave with mid-to-high-rise apartments and planned housing complexes",
    landmarks: ["Mayur Vihar Phase 3 Metro", "Patparganj Industrial Area", "DND Flyover"],
    adjacentAreas: ["Mayur Vihar", "Patparganj", "IP Extension", "Kondli", "Khichripur", "Anand Vihar"],
  },
  // ── Gurgaon ───────────────────────────────────────────────────────────────
  "dlf-phase-gurgaon": {
    propertyType: "Gurgaon's most premium residential address — large villas, luxury apartments, and DLF's flagship developments across Phases 1–5",
    landmarks: ["DLF Cyber Hub", "MG Road Metro", "Ambience Mall Gurgaon"],
    adjacentAreas: ["Golf Course Road", "Sushant Lok", "MG Road", "Sector 26", "Sector 43", "Sector 54"],
  },
  "golf-course-road-gurgaon": {
    propertyType: "premium Gurgaon corridor lined with luxury residential towers, villas, and high-end gated communities",
    landmarks: ["DLF Cyber City", "Sector 54 Chowk Metro", "The Oberoi Gurgaon"],
    adjacentAreas: ["DLF Phase 1-5", "Golf Course Extension", "Sushant Lok", "Sector 43", "Sector 54", "Sector 55"],
  },
  "golf-course-extension-gurgaon": {
    propertyType: "newer Gurgaon residential belt with premium high-rise apartments, plotted developments, and gated townships",
    landmarks: ["Vatika Chowk", "Sohna Elevated Highway", "Nirvana Country"],
    adjacentAreas: ["Golf Course Road", "Nirvana Country", "Sushant Lok", "Sector 67", "Sector 79", "Southern Peripheral Road"],
  },
  "sushant-lok-gurgaon": {
    propertyType: "well-established Gurgaon residential colony with independent houses, villas, and premium builder floors close to MG Road",
    landmarks: ["Sushant Lok Market", "Huda City Centre Metro", "MG Road"],
    adjacentAreas: ["DLF Phase 1-5", "Golf Course Road", "Sector 43", "Sector 56", "Palam Vihar", "Golf Course Extension"],
  },
  "sohna-road-gurgaon": {
    propertyType: "rapidly developed mid-to-premium residential corridor with high-rise apartments and integrated townships along SPR",
    landmarks: ["Raheja Mall", "Southern Peripheral Road", "Vatika Chowk"],
    adjacentAreas: ["Sushant Lok", "Golf Course Extension", "Nirvana Country", "Sector 48", "Sector 67", "Sector 83"],
  },
  "nirvana-country-gurgaon": {
    propertyType: "premium gated township on Golf Course Extension Road with villas, townhouses, and luxury apartments",
    landmarks: ["Nirvana Country Club", "Southern Peripheral Road", "Vatika Chowk"],
    adjacentAreas: ["Golf Course Extension", "Sushant Lok", "Golf Course Road", "Sector 50", "Sector 56", "Sector 67"],
  },
  "mg-road-gurgaon": {
    propertyType: "Gurgaon's first commercial and residential spine — premium apartments, corporate offices, and high-street retail",
    landmarks: ["MG Road Metro", "MGF Metropolitan Mall", "Sahara Mall"],
    adjacentAreas: ["DLF Phase 1-5", "Sushant Lok", "Sector 26", "Sector 27", "Sector 28", "Sector 43"],
  },
  "sector-44-gurgaon": {
    propertyType: "premium Golf Course Road sector with luxury residential complexes and corporate campuses near Cyber City",
    landmarks: ["DLF Cyber City", "Golf Course Road", "Sector 44 Metro"],
    adjacentAreas: ["Golf Course Road", "Sector 45 Gurgaon", "DLF Phase 1-5", "Sector 43", "Sector 53", "Cyber Hub"],
  },
  "sector-45-gurgaon": {
    propertyType: "upscale Gurgaon sector with premium residential towers and proximity to Golf Course Road amenities",
    landmarks: ["Golf Course Road", "Sector 44 Metro", "DLF Cyber Hub"],
    adjacentAreas: ["Sector 44 Gurgaon", "Golf Course Road", "Sector 46 Gurgaon", "DLF Phase 1-5", "Sector 54"],
  },
  "sector-46-gurgaon": {
    propertyType: "established Gurgaon residential sector with independent houses, builder floors, and high-rise apartments along Golf Course Road",
    landmarks: ["Sector 46 Market", "Golf Course Road", "HUDA Metro"],
    adjacentAreas: ["Sector 45 Gurgaon", "Golf Course Road", "Sector 47 Gurgaon", "Sector 50 Gurgaon", "DLF Phase 4"],
  },
  "sector-47-gurgaon": {
    propertyType: "upmarket Gurgaon sector with gated residential societies, villas, and proximity to Golf Course Road",
    landmarks: ["Sector 47 Market", "Golf Course Road", "Sohna Road Junction"],
    adjacentAreas: ["Sector 46 Gurgaon", "Golf Course Road", "Sector 48 Gurgaon", "Sushant Lok", "Sector 50"],
  },
  "sector-50-gurgaon": {
    propertyType: "well-developed Gurgaon residential sector with premium apartments and gated societies near Golf Course Road and Sushant Lok",
    landmarks: ["Sushant Lok Market", "Huda City Centre Metro", "Golf Course Road"],
    adjacentAreas: ["Sector 49 Gurgaon", "Sushant Lok", "Golf Course Road", "Sector 56 Gurgaon", "Sector 46 Gurgaon"],
  },
  "sector-56-gurgaon": {
    propertyType: "popular Gurgaon residential sector with multi-storey apartments and gated communities near Golf Course Road",
    landmarks: ["Sector 56 Market", "Golf Course Road", "Sushant Lok"],
    adjacentAreas: ["Sushant Lok", "Sector 57 Gurgaon", "Golf Course Road", "Sector 55 Gurgaon", "Sector 50 Gurgaon"],
  },
  "sector-57-gurgaon": {
    propertyType: "established Gurgaon residential sector with premium apartments, plotted houses, and good connectivity to Golf Course Road",
    landmarks: ["Sector 57 Market", "Golf Course Road", "Rapid Metro Gurgaon"],
    adjacentAreas: ["Sector 56 Gurgaon", "Sushant Lok", "Golf Course Road", "Golf Course Extension", "Sector 58"],
  },
  "sector-82-gurgaon": {
    propertyType: "new Gurgaon growth corridor with large-format residential societies, high-rise towers, and planned infrastructure",
    landmarks: ["NH-48 Gurgaon", "IMT Manesar Highway", "Palam Vihar Extension"],
    adjacentAreas: ["Sector 83 Gurgaon", "Palam Vihar", "Sohna Road", "Sector 81", "Sector 84", "Dwarka Expressway"],
  },
  "sector-83-gurgaon": {
    propertyType: "developing Gurgaon sector with modern residential townships and affordable-to-mid housing along Dwarka Expressway",
    landmarks: ["Dwarka Expressway", "NH-48", "Palam Vihar Market"],
    adjacentAreas: ["Sector 82 Gurgaon", "Palam Vihar", "Sector 84", "Sector 85", "Dwarka Expressway", "IMT Manesar Road"],
  },
  "palam-vihar-gurgaon": {
    propertyType: "well-established Gurgaon residential colony with independent houses, builder floors, and DDA-style housing near Dwarka border",
    landmarks: ["Palam Vihar Market", "Dwarka Sector 21 Metro", "NH-48"],
    adjacentAreas: ["Sector 82 Gurgaon", "Sector 83 Gurgaon", "Dwarka Delhi", "Sector 23 Gurgaon", "Sector 7 Gurgaon"],
  },
  // ── Noida ─────────────────────────────────────────────────────────────────
  "sector-18-noida": {
    propertyType: "Noida's primary commercial and residential hub with premium apartments, Atta Market, and strong metro connectivity",
    landmarks: ["Atta Market", "Noida City Centre Metro", "The Great India Place Mall"],
    adjacentAreas: ["Sector 50", "Sector 37", "Sector 44", "Sector 27", "Sector 25A", "Sector 16A"],
  },
  "sector-44-noida": {
    propertyType: "premium Noida sector with large independent bungalows, spacious plotted houses, and upmarket residential character",
    landmarks: ["Noida City Centre Metro", "Atta Market Sector 18", "Sector 44 Market"],
    adjacentAreas: ["Sector 45", "Sector 50", "Sector 37", "Sector 18", "Sector 51", "Sector 25A"],
  },
  "sector-45-noida": {
    propertyType: "upscale Noida sector with premium plotted houses, villas, and well-maintained residential streets near Sector 18",
    landmarks: ["Noida City Centre Metro", "Sector 45 Market", "Atta Market"],
    adjacentAreas: ["Sector 44", "Sector 50", "Sector 37", "Sector 62", "Sector 18", "Sector 46"],
  },
  "sector-50-noida": {
    propertyType: "established Noida sector with multi-storey societies, premium apartments, and a well-developed residential community",
    landmarks: ["Sector 50 Market", "Botanical Garden Metro", "Atta Market Sector 18"],
    adjacentAreas: ["Sector 62", "Sector 137", "Sector 76", "Sector 18", "Sector 44", "Sector 45"],
  },
  "sector-62-noida": {
    propertyType: "prominent Noida IT and residential sector with corporate campuses, premium apartments, and high-rise housing societies",
    landmarks: ["Sector 62 Metro", "Fortis Hospital", "HCL Tech Campus"],
    adjacentAreas: ["Sector 78", "Sector 100", "Sector 50", "Indirapuram", "Sector 63", "Vaishali"],
  },
  "sector-76-noida": {
    propertyType: "developing Noida sector along Noida Expressway with modern residential high-rises and gated apartment complexes",
    landmarks: ["Noida Expressway", "Sector 76 Market", "Botanical Garden Metro"],
    adjacentAreas: ["Sector 78", "Sector 62", "Sector 107", "Sector 100", "Sector 137", "Sector 79"],
  },
  "sector-78-noida": {
    propertyType: "modern Noida residential sector with premium high-rise societies and gated developments along the Expressway belt",
    landmarks: ["Noida Expressway", "Fortis Hospital", "Sector 76 Market"],
    adjacentAreas: ["Sector 62", "Sector 100", "Sector 76", "Sector 79", "Sector 93", "Sector 137"],
  },
  "sector-93-noida": {
    propertyType: "established Noida Expressway sector with premium residential towers and well-integrated gated communities",
    landmarks: ["Noida Expressway", "Logix City Centre", "Sector 18 Atta Market"],
    adjacentAreas: ["Sector 100", "Sector 78", "Sector 50", "Sector 137", "Sector 93A", "Sector 94"],
  },
  "sector-93a-noida": {
    propertyType: "upscale Noida Expressway sector with luxury residential towers including Jaypee Greens and premium high-rise societies",
    landmarks: ["Jaypee Greens Golf Course", "Noida Expressway", "Sector 128 Junction"],
    adjacentAreas: ["Sector 93", "Sector 137", "Sector 150", "Sector 128", "Sector 100", "Sector 94"],
  },
  "sector-100-noida": {
    propertyType: "premium Noida Expressway corridor with luxury residential complexes, plotted developments, and high-rise societies",
    landmarks: ["Botanical Garden Metro", "Noida Expressway", "DLF Mall of India"],
    adjacentAreas: ["Sector 150", "Sector 137", "Sector 62", "Sector 76", "Sector 128", "Sector 93"],
  },
  "sector-107-noida": {
    propertyType: "modern Noida sector with contemporary high-rise apartments and growing residential infrastructure along the Expressway",
    landmarks: ["Noida Expressway", "Sector 137 Junction", "Greater Noida West Connector"],
    adjacentAreas: ["Sector 100", "Sector 150", "Greater Noida West", "Sector 137", "Sector 119", "Sector 110"],
  },
  "sector-110-noida": {
    propertyType: "premium Noida Expressway sector with luxury residential projects and well-planned gated communities",
    landmarks: ["Noida Expressway", "Sector 137 Junction", "DLF Mall of India"],
    adjacentAreas: ["Sector 100", "Sector 119", "Sector 137", "Sector 150", "Sector 107", "Sector 128"],
  },
  "sector-119-noida": {
    propertyType: "Noida Expressway residential sector with modern high-rise apartments and well-connected gated societies",
    landmarks: ["Noida Expressway", "Sector 137 Junction", "Lotus 300 Complex"],
    adjacentAreas: ["Sector 110", "Sector 137", "Sector 150", "Sector 128", "Sector 100", "Sector 120"],
  },
  "sector-128-noida": {
    propertyType: "upscale Noida Expressway sector anchored by Jaypee Greens — premium villas, plotted homes, and luxury apartments",
    landmarks: ["Jaypee Greens Golf Course", "Noida Expressway", "Sector 128 Junction"],
    adjacentAreas: ["Sector 137", "Sector 150", "Sector 93A", "Sector 100", "Sector 129", "Sector 130"],
  },
  "sector-137-noida": {
    propertyType: "modern Noida Expressway sector with premium high-rise societies, corporate campuses, and gated township living",
    landmarks: ["Sector 137 Metro", "Noida Expressway", "Jaypee Greens"],
    adjacentAreas: ["Sector 150", "Sector 100", "Sector 128", "Sector 119", "Sector 107", "Sector 136"],
  },
  "sector-150-noida": {
    propertyType: "premium Noida Expressway township destination with large-format luxury residential projects and sports-centric living",
    landmarks: ["Noida Expressway", "Sector 148 Metro", "Sector 137 Junction"],
    adjacentAreas: ["Sector 137", "Sector 100", "Sector 128", "Greater Noida West", "Sector 143", "Sector 151"],
  },
  "greater-noida-west": {
    propertyType: "rapidly growing township belt west of Greater Noida with large integrated societies, high-rise apartments, and modern amenities",
    landmarks: ["Gaur City Mall", "Noida Extension Metro", "NH-9"],
    adjacentAreas: ["Sector 107 Noida", "Sector 137 Noida", "Crossing Republik", "Raj Nagar Extension", "Wave City", "Gaur City"],
  },
  // ── Ghaziabad ─────────────────────────────────────────────────────────────
  "vaishali-ghaziabad": {
    propertyType: "premium Ghaziabad township with well-planned multi-storey apartments and modern residential societies close to Delhi border",
    landmarks: ["Vaishali Metro", "Wave Cinema", "Shipra Mall"],
    adjacentAreas: ["Indirapuram", "Kaushambi", "Vasundhara", "Sector 62 Noida", "Vasundhara Enclave Delhi", "Patparganj"],
  },
  "kaushambi-ghaziabad": {
    propertyType: "well-established Ghaziabad township bordering Delhi with multi-storey apartments, shopping centres, and metro connectivity",
    landmarks: ["Kaushambi Metro", "Ansal Plaza", "Shipra Mall"],
    adjacentAreas: ["Vaishali", "Indirapuram", "Vasundhara", "Anand Vihar Delhi", "Vasundhara Enclave", "Patparganj"],
  },
  "raj-nagar-ghaziabad": {
    propertyType: "established Ghaziabad residential colony with independent houses, builder floors, and active neighbourhood markets",
    landmarks: ["Raj Nagar Market", "Ghaziabad Railway Station", "Raj Nagar Extension"],
    adjacentAreas: ["Indirapuram", "Vasundhara", "Vaishali", "Kavi Nagar", "Shalimar Garden", "Raj Nagar Extension"],
  },
  // ── Faridabad ─────────────────────────────────────────────────────────────
  "sector-15-faridabad": {
    propertyType: "central Faridabad sector with mixed residential and commercial development — independent houses, DDA flats, and active markets",
    landmarks: ["Sector 15 Market Faridabad", "BPTP Park Centria", "Faridabad Railway Station"],
    adjacentAreas: ["Sector 21C", "NIT Faridabad", "Old Faridabad", "Sector 16", "Sector 14", "Ballabhgarh"],
  },
  "sector-21c-faridabad": {
    propertyType: "established Faridabad residential sector with independent houses, builder floors, and mid-segment apartment blocks near the old city core",
    landmarks: ["Sector 21C Market", "Faridabad Railway Station", "NHPC Colony"],
    adjacentAreas: ["Sector 15 Faridabad", "NIT Faridabad", "Old Faridabad", "Sector 16", "Sector 21D", "NHPC Colony"],
  },
  "nit-faridabad": {
    propertyType: "NIT (New Industrial Township) — Faridabad's largest residential township with DDA-style flats, multi-storey blocks, and established colony infrastructure",
    landmarks: ["NIT Market Faridabad", "Faridabad Metro", "Crown Interiorz Mall"],
    adjacentAreas: ["Sector 15 Faridabad", "Sector 21C", "Old Faridabad", "Sector 16", "Ballabhgarh", "Greater Faridabad"],
  },
  "neharpar-faridabad": {
    propertyType: "new Faridabad residential belt across the canal — rapidly developed with premium apartments, gated societies, and modern amenities",
    landmarks: ["Bata Chowk Faridabad", "Neharpar Metro", "BPTP Township"],
    adjacentAreas: ["NIT Faridabad", "Sector 15", "Sector 21C", "Sector 86", "Sector 88", "Greater Faridabad"],
  },
  "old-faridabad": {
    propertyType: "historic Faridabad city core with traditional residential neighbourhoods, independent houses, and longstanding commercial markets",
    landmarks: ["Old Faridabad Railway Station", "Raja Nahar Singh Palace", "Sector 12 Market"],
    adjacentAreas: ["NIT Faridabad", "Sector 21C", "Sector 15", "Ballabhgarh", "Sector 9", "Sector 12"],
  },
  "sector-86-faridabad": {
    propertyType: "modern Neharpar Faridabad sector with newly built residential societies, premium apartments, and planned township infrastructure",
    landmarks: ["Neharpar Expressway", "BPTP Park Serene", "Sector 85 Market"],
    adjacentAreas: ["Neharpar Faridabad", "Sector 85", "Sector 87", "Sector 88 Faridabad", "Greater Faridabad", "Sector 89"],
  },
  "sector-88-faridabad": {
    propertyType: "premium Neharpar Faridabad sector with mid-to-high-end residential projects and gated housing societies",
    landmarks: ["Neharpar Expressway", "BPTP Green Oaks", "Sector 88 Market"],
    adjacentAreas: ["Sector 86 Faridabad", "Sector 89 Faridabad", "Sector 87", "Neharpar Faridabad", "Sector 90", "Greater Faridabad"],
  },
  "sector-89-faridabad": {
    propertyType: "developing Neharpar Faridabad sector with modern high-rise residential projects and growing civic infrastructure",
    landmarks: ["Neharpar Expressway", "Sector 89 Market", "BPTP Projects"],
    adjacentAreas: ["Sector 88 Faridabad", "Sector 90 Faridabad", "Sector 86 Faridabad", "Neharpar", "Sector 87", "Greater Faridabad"],
  },
  "sector-90-faridabad": {
    propertyType: "newer Neharpar Faridabad sector with large-format residential societies and modern apartment developments",
    landmarks: ["Neharpar Expressway", "Sector 91 Market", "NH-48 Faridabad"],
    adjacentAreas: ["Sector 89 Faridabad", "Sector 91", "Sector 88 Faridabad", "Neharpar", "Greater Faridabad", "Ballabhgarh"],
  },
};

// ─── Tricity enrichment (Chandigarh / Mohali / Panchkula) ───────────────────
const TRICITY_LOCALITY_ENRICHMENT: Record<string, EnrichmentEntry> = {
  // ── Chandigarh ──────────────────────────────────────────────────────────────
  "sector-17-chandigarh": {
    propertyType: "Chandigarh's central commercial and civic hub — Sector 17 is the city's main shopping plaza with government offices, banks, and surrounding mid-to-premium residential sectors",
    landmarks: ["Sector 17 Plaza", "Punjab & Haryana High Court", "Rose Garden"],
    adjacentAreas: ["Sector 22 Chandigarh", "Sector 16 Chandigarh", "Sector 21 Chandigarh", "Sector 34 Chandigarh"],
  },
  "sector-22-chandigarh": {
    propertyType: "established Chandigarh residential and commercial sector with markets, schools, and well-maintained housing",
    landmarks: ["Sector 22 Market", "Sector 22 Bus Stand", "Guru Nanak Public School"],
    adjacentAreas: ["Sector 17 Chandigarh", "Sector 21 Chandigarh", "Sector 34 Chandigarh", "Sector 23 Chandigarh"],
  },
  "sector-34-chandigarh": {
    propertyType: "major Chandigarh commercial and residential sector with large market complexes, education institutions, and mid-premium housing",
    landmarks: ["Sector 34 Market", "PGI Hospital", "Sector 34 Bus Terminal"],
    adjacentAreas: ["Sector 35 Chandigarh", "Sector 33 Chandigarh", "Sector 36 Chandigarh", "Sector 37 Chandigarh"],
  },
  "sector-35-chandigarh": {
    propertyType: "established Chandigarh residential sector close to PGI Hospital with independent houses, apartments, and active neighbourhood markets",
    landmarks: ["Sector 35 Market", "PGI Chandigarh", "Sector 34 Market"],
    adjacentAreas: ["Sector 34 Chandigarh", "Sector 36 Chandigarh", "Sector 44 Chandigarh", "Sector 45 Chandigarh"],
  },
  "sector-43-chandigarh": {
    propertyType: "well-connected Chandigarh residential sector near the railway station with mid-to-premium apartments and housing societies",
    landmarks: ["Chandigarh Railway Station", "Sector 43 Bus Stand", "Elante Mall"],
    adjacentAreas: ["Sector 44 Chandigarh", "Sector 45 Chandigarh", "Sector 34 Chandigarh", "Industrial Area Phase 1"],
  },
  "sector-44-chandigarh": {
    propertyType: "established Chandigarh residential sector with well-maintained housing, schools, and proximity to the railway station",
    landmarks: ["Chandigarh Railway Station", "Elante Mall", "Sector 44 Market"],
    adjacentAreas: ["Sector 43 Chandigarh", "Sector 45 Chandigarh", "Sector 34 Chandigarh", "Sector 46 Chandigarh"],
  },
  "sector-45-chandigarh": {
    propertyType: "residential Chandigarh sector with apartment complexes and independent houses, close to IT Park and commercial zones",
    landmarks: ["Elante Mall", "IT Park Chandigarh", "Sector 45 Market"],
    adjacentAreas: ["Sector 44 Chandigarh", "Sector 46 Chandigarh", "Sector 47 Chandigarh", "Phase 1 Mohali"],
  },
  "sector-46-chandigarh": {
    propertyType: "well-developed Chandigarh residential sector with independent houses and apartments near major commercial and IT corridors",
    landmarks: ["IT Park Chandigarh", "Elante Mall", "Sector 46 Market"],
    adjacentAreas: ["Sector 45 Chandigarh", "Sector 47 Chandigarh", "Phase 1 Mohali", "Sector 44 Chandigarh"],
  },
  "sector-47-chandigarh": {
    propertyType: "established Chandigarh residential sector with apartments and independent houses in a quiet, well-serviced neighbourhood",
    landmarks: ["Sector 47 Market", "IT Park Chandigarh", "Chandigarh Golf Club"],
    adjacentAreas: ["Sector 46 Chandigarh", "Phase 1 Mohali", "Sector 48 Chandigarh", "Sector 45 Chandigarh"],
  },
  "sector-20-chandigarh": {
    propertyType: "established Chandigarh residential sector with independent houses and a quiet, well-planned neighbourhood character",
    landmarks: ["Sector 20 Market", "Sector 17 Plaza", "Chandigarh Golf Club"],
    adjacentAreas: ["Sector 21 Chandigarh", "Sector 22 Chandigarh", "Sector 19 Chandigarh"],
  },
  "sector-21-chandigarh": {
    propertyType: "established Chandigarh residential sector adjacent to the city's commercial hub with independent houses and housing societies",
    landmarks: ["Sector 17 Plaza", "Sector 22 Market", "Rose Garden"],
    adjacentAreas: ["Sector 22 Chandigarh", "Sector 20 Chandigarh", "Sector 17 Chandigarh", "Sector 34 Chandigarh"],
  },
  "manimajra-chandigarh": {
    propertyType: "densely populated Chandigarh township on the Delhi-side boundary with older residential colonies, independent houses, and multi-storey apartments",
    landmarks: ["Manimajra Market", "Manimajra Bus Stand", "Chandigarh-Ambala Highway"],
    adjacentAreas: ["Sector 43 Chandigarh", "Panchkula Sector 5", "Sector 44 Chandigarh", "IT Park Chandigarh"],
  },
  "sector-36-chandigarh": {
    propertyType: "mixed residential and commercial Chandigarh sector with apartments, markets, and educational institutions",
    landmarks: ["Sector 36 Market", "PGI Chandigarh", "Sector 34 Bus Terminal"],
    adjacentAreas: ["Sector 35 Chandigarh", "Sector 37 Chandigarh", "Sector 34 Chandigarh"],
  },
  "sector-37-chandigarh": {
    propertyType: "residential Chandigarh sector with apartments and independent houses in a planned, well-serviced neighbourhood",
    landmarks: ["Sector 37 Market", "PGI Chandigarh", "Sector 38 Market"],
    adjacentAreas: ["Sector 36 Chandigarh", "Sector 38 Chandigarh", "Sector 35 Chandigarh"],
  },
  "sector-38-chandigarh": {
    propertyType: "well-established Chandigarh residential sector with independent houses and apartments close to major markets and IT corridors",
    landmarks: ["Sector 38 Market", "IT Park Chandigarh", "Chandigarh Golf Club"],
    adjacentAreas: ["Sector 37 Chandigarh", "Sector 43 Chandigarh", "Sector 47 Chandigarh", "Phase 1 Mohali"],
  },
  // ── Mohali ──────────────────────────────────────────────────────────────────
  "phase-1-mohali": {
    propertyType: "one of Mohali's oldest and most established planned phases with independent houses, spacious plots, and premium residential character close to Chandigarh border",
    landmarks: ["Phase 1 Market Mohali", "PCA Cricket Stadium", "Sector 47 Chandigarh Border"],
    adjacentAreas: ["Phase 3B2 Mohali", "Sector 66 Mohali", "Sector 47 Chandigarh", "Sector 46 Chandigarh"],
  },
  "phase-3b2-mohali": {
    propertyType: "established Mohali residential phase with premium independent houses, builder floors, and proximity to commercial and IT zones",
    landmarks: ["PCA Cricket Stadium", "Phase 3B2 Market", "IT City Mohali"],
    adjacentAreas: ["Phase 1 Mohali", "Phase 7 Mohali", "Phase 5 Mohali", "Sector 66 Mohali"],
  },
  "phase-5-mohali": {
    propertyType: "well-developed Mohali residential phase with independent houses and apartments in a mature neighbourhood close to Chandigarh",
    landmarks: ["Phase 5 Market Mohali", "PCA Cricket Stadium", "Fortis Hospital Mohali"],
    adjacentAreas: ["Phase 7 Mohali", "Phase 3B2 Mohali", "Phase 10 Mohali", "Sector 66 Mohali"],
  },
  "phase-7-mohali": {
    propertyType: "established Mohali residential phase with mid-to-premium apartments, independent houses, and proximity to Chandigarh's commercial zones",
    landmarks: ["Phase 7 Market Mohali", "Fortis Hospital Mohali", "Phase 5 Mohali Market"],
    adjacentAreas: ["Phase 5 Mohali", "Phase 10 Mohali", "Phase 3B2 Mohali", "Sector 66 Mohali"],
  },
  "phase-10-mohali": {
    propertyType: "developing Mohali residential phase with multi-storey apartment complexes and plotted housing in a growing neighbourhood",
    landmarks: ["Phase 10 Market Mohali", "Fortis Hospital Mohali", "Sector 66 Mohali"],
    adjacentAreas: ["Phase 5 Mohali", "Phase 7 Mohali", "Sector 66 Mohali", "Sector 70 Mohali"],
  },
  "aerocity-mohali": {
    propertyType: "rapidly developed commercial and residential corridor adjacent to Chandigarh International Airport with premium apartments, hotels, and corporate offices",
    landmarks: ["Chandigarh International Airport", "Aerocity Commercial Hub", "IT City Mohali"],
    adjacentAreas: ["IT City Mohali", "Sector 66 Mohali", "Sector 68 Mohali", "Phase 1 Mohali"],
  },
  "it-city-mohali": {
    propertyType: "Mohali's dedicated IT and business township with premium residential towers, corporate campuses, and modern gated communities",
    landmarks: ["IT City Mohali Hub", "Chandigarh International Airport", "Aerocity Mohali"],
    adjacentAreas: ["Aerocity Mohali", "Sector 66 Mohali", "Sector 68 Mohali", "Sector 70 Mohali"],
  },
  "sector-66-mohali": {
    propertyType: "established Mohali residential and commercial sector with mid-to-premium apartments, markets, and proximity to IT zones",
    landmarks: ["Sector 66 Market Mohali", "IT City Mohali", "Aerocity Mohali"],
    adjacentAreas: ["Sector 70 Mohali", "Sector 71 Mohali", "Phase 7 Mohali", "Aerocity Mohali"],
  },
  "sector-68-mohali": {
    propertyType: "mid-to-premium Mohali residential sector with multi-storey apartments and gated societies near Aerocity and IT corridors",
    landmarks: ["Aerocity Mohali", "Sector 68 Market", "IT City Mohali"],
    adjacentAreas: ["Aerocity Mohali", "Sector 66 Mohali", "Sector 70 Mohali", "Sector 76 Mohali"],
  },
  "sector-70-mohali": {
    propertyType: "developing Mohali residential sector with modern apartments and housing societies along the Aerocity and IT City belt",
    landmarks: ["IT City Mohali", "Aerocity Mohali", "Sector 70 Market"],
    adjacentAreas: ["Sector 66 Mohali", "Sector 71 Mohali", "Aerocity Mohali", "Sector 68 Mohali"],
  },
  "sector-71-mohali": {
    propertyType: "growing Mohali residential sector with new apartment complexes and plotted developments near the IT and Aerocity corridor",
    landmarks: ["Sector 71 Market Mohali", "IT City Mohali", "Aerocity Mohali"],
    adjacentAreas: ["Sector 70 Mohali", "Sector 66 Mohali", "IT City Mohali", "Sector 76 Mohali"],
  },
  "sector-76-mohali": {
    propertyType: "developing Mohali residential sector with modern housing societies and proximity to Aerocity and the Zirakpur belt",
    landmarks: ["Aerocity Mohali", "Sector 76 Market", "Zirakpur Highway"],
    adjacentAreas: ["Sector 82 Mohali", "Aerocity Mohali", "Sector 68 Mohali", "Zirakpur"],
  },
  "sector-82-mohali": {
    propertyType: "fast-developing Mohali residential sector with large apartment societies and gated communities near Aerocity and Zirakpur",
    landmarks: ["Aerocity Mohali", "Zirakpur Highway", "Sector 82 Market"],
    adjacentAreas: ["Aerocity Mohali", "Sector 76 Mohali", "Zirakpur", "Sector 68 Mohali"],
  },
  "sector-85-mohali": {
    propertyType: "newer Mohali residential sector with mid-segment apartment complexes and plotted developments north of the city",
    landmarks: ["New Chandigarh (Mullanpur)", "Kharar Highway", "Sector 85 Market"],
    adjacentAreas: ["New Chandigarh Mohali", "Kharar Mohali", "Sector 90 Mohali", "Sunny Enclave Mohali"],
  },
  "sector-90-mohali": {
    propertyType: "developing Mohali residential sector with newly built apartments and plotted developments close to New Chandigarh",
    landmarks: ["New Chandigarh (Mullanpur)", "Kharar Highway", "Sector 90 Market"],
    adjacentAreas: ["New Chandigarh Mohali", "Sector 85 Mohali", "Kharar Mohali", "Sunny Enclave Mohali"],
  },
  "new-chandigarh-mohali": {
    propertyType: "greenfield township being developed as Chandigarh's planned extension — large plotted developments, premium residential projects, and rapidly growing infrastructure",
    landmarks: ["New Chandigarh Master Plan Area", "Mullanpur", "IVY Hospital Mohali"],
    adjacentAreas: ["Kharar Mohali", "Sector 85 Mohali", "Sector 90 Mohali", "Sunny Enclave Mohali"],
  },
  "kharar-mohali": {
    propertyType: "rapidly growing suburban township on the Chandigarh-Ropar highway with affordable-to-mid housing societies and plotted developments",
    landmarks: ["Kharar Bus Stand", "Sunny Enclave Kharar", "Chandigarh-Ropar Highway"],
    adjacentAreas: ["New Chandigarh Mohali", "Sector 85 Mohali", "Sunny Enclave Mohali", "Zirakpur"],
  },
  "zirakpur-mohali": {
    propertyType: "fast-growing satellite township on the Chandigarh-Delhi highway with high-rise apartments, commercial complexes, and a large migrant professional population",
    landmarks: ["VIP Road Zirakpur", "Chandigarh-Delhi Highway NH7", "Zirakpur Chowk"],
    adjacentAreas: ["Sector 82 Mohali", "Panchkula", "Aerocity Mohali", "Derabassi"],
  },
  "sunny-enclave-mohali": {
    propertyType: "established affordable residential colony in Kharar-Mohali with independent houses, builder floors, and compact apartment developments",
    landmarks: ["Sunny Enclave Market", "Kharar Bus Stand", "Chandigarh-Ropar Highway"],
    adjacentAreas: ["Kharar Mohali", "New Chandigarh Mohali", "Sector 85 Mohali"],
  },
  // ── Panchkula ───────────────────────────────────────────────────────────────
  "sector-5-panchkula": {
    propertyType: "established Panchkula residential sector close to Chandigarh border with well-maintained independent houses and apartments",
    landmarks: ["Sector 5 Market Panchkula", "Panchkula Bus Stand", "Mansa Devi Temple"],
    adjacentAreas: ["Sector 6 Panchkula", "Sector 7 Panchkula", "Manimajra Chandigarh", "Sector 4 Panchkula"],
  },
  "sector-7-panchkula": {
    propertyType: "well-developed Panchkula residential sector with independent houses and apartments near Panchkula's civic and commercial core",
    landmarks: ["Sector 7 Market Panchkula", "Panchkula Bus Stand", "Mini Secretariat Panchkula"],
    adjacentAreas: ["Sector 5 Panchkula", "Sector 6 Panchkula", "Sector 8 Panchkula", "Sector 11 Panchkula"],
  },
  "sector-10-panchkula": {
    propertyType: "established Panchkula residential sector with well-planned independent houses and proximity to Chandigarh border and commercial areas",
    landmarks: ["Sector 10 Market Panchkula", "Mini Secretariat Panchkula", "Mansa Devi Temple"],
    adjacentAreas: ["Sector 11 Panchkula", "Sector 9 Panchkula", "Sector 7 Panchkula", "Sector 12 Panchkula"],
  },
  "sector-11-panchkula": {
    propertyType: "one of Panchkula's most sought-after residential sectors with spacious independent houses, schools, and proximity to Chandigarh",
    landmarks: ["Sector 11 Market Panchkula", "Mansa Devi Temple", "DPS Panchkula"],
    adjacentAreas: ["Sector 10 Panchkula", "Sector 12 Panchkula", "Sector 7 Panchkula", "Sector 15 Panchkula"],
  },
  "sector-12-panchkula": {
    propertyType: "premium Panchkula residential sector with large independent houses, well-maintained streets, and proximity to the Shivalik foothills",
    landmarks: ["Sector 12 Market Panchkula", "Mansa Devi Temple", "Pinjore Gardens"],
    adjacentAreas: ["Sector 11 Panchkula", "Sector 10 Panchkula", "Sector 15 Panchkula", "Kalka Road"],
  },
  "sector-15-panchkula": {
    propertyType: "established Panchkula residential and commercial sector with multi-storey apartments, shops, and good connectivity to Chandigarh",
    landmarks: ["Sector 15 Market Panchkula", "Panchkula Bus Stand", "Mansa Devi Temple"],
    adjacentAreas: ["Sector 11 Panchkula", "Sector 12 Panchkula", "Sector 20 Panchkula", "Sector 7 Panchkula"],
  },
  "sector-20-panchkula": {
    propertyType: "newer Panchkula residential sector with mid-to-premium apartment complexes and plotted developments in a growing area",
    landmarks: ["Sector 20 Market Panchkula", "Panchkula Extension", "Kalka Road"],
    adjacentAreas: ["Sector 15 Panchkula", "Sector 21 Panchkula", "Sector 12 Panchkula"],
  },
  "sector-21-panchkula": {
    propertyType: "developing Panchkula residential sector with new apartment projects and plotted housing in the city's expanding zone",
    landmarks: ["Panchkula Extension", "Kalka Road", "Sector 20 Market Panchkula"],
    adjacentAreas: ["Sector 20 Panchkula", "Sector 25 Panchkula", "Sector 15 Panchkula"],
  },
  "sector-25-panchkula": {
    propertyType: "rapidly developing Panchkula sector on the city's outer belt with new residential projects and plotted developments",
    landmarks: ["Kalka Road", "Panchkula Extension", "Sector 20 Market Panchkula"],
    adjacentAreas: ["Sector 21 Panchkula", "Sector 20 Panchkula", "Kalka"],
  },
};

export type LocalityProfile = {
  /** True if data came from the verified sofa repair registry or supplementary enrichment */
  isRich: boolean;
  propertyContext: string;
  typicalKitchenContext: string;
  landmarks: string[];
  adjacentAreas: string[];
};

// ─── Affluence-derived fallback descriptions ──────────────────────────────────
// Used when the locality slug is not in the sofa repair registry.
// Written to be accurate for the segment, not locality-specific.
const AFF_PROPERTY_CONTEXT: Record<string, string> = {
  "ultra-high":
    "premium residential enclave with large independent houses, bungalows, and luxury apartment complexes",
  high: "established residential locality with independent houses, builder floors, and quality apartment complexes",
  "mid-high":
    "modern residential locality with builder floors, multi-storey apartments, and contemporary housing societies",
  mid: "residential locality with DDA flats, builder floors, and mid-segment apartment complexes",
};

const AFF_KITCHEN_CONTEXT: Record<string, string> = {
  "ultra-high":
    "Homes in this segment typically have spacious kitchens of 120–200 sq ft with open or semi-open layouts. Buyers here prioritise premium finishes, custom storage, and high-end hardware.",
  high: "Homes in this segment typically have kitchens of 90–150 sq ft. Buyers balance quality finishes with practical storage and tend to invest in durable, well-designed cabinetry.",
  "mid-high":
    "Homes in this segment typically have kitchens of 75–120 sq ft. Buyers look for a clean modern aesthetic, good storage efficiency, and value for money on materials.",
  mid: "Homes in this segment typically have compact kitchens of 60–90 sq ft. Buyers prioritise smart storage, easy maintenance, and cost-effective finishes that hold up over time.",
};

// ─── Per-material suitability copy ────────────────────────────────────────────
// Intent-specific content answering "why this material for this locality?"
// Indexed by materialSlug. These are written once per intent — not per locality.
export type MaterialSuitability = {
  headline: string;
  body: string;
};

const MATERIAL_SUITABILITY: Record<string, (localityName: string, aff: string) => MaterialSuitability> = {
  glass: (localityName, aff) => ({
    headline: `Why Glass Kitchens Suit ${localityName} Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `Glass kitchen shutters are a natural fit for ${localityName}'s premium homes. The transparent or frosted panels create a boutique hotel aesthetic — ideal for open-plan kitchens where the cooking area is visible from the living space. Back-painted glass lets you match any interior colour scheme precisely, and the non-porous surface wipes clean in seconds, which matters in high-use family kitchens.`
        : `Glass kitchen shutters work well in ${localityName} homes where homeowners want a contemporary upgrade without a full renovation. Frosted glass adds a premium, diffused look while hiding storage clutter. The easy-wipe surface is especially practical for families. Glass is available in back-painted options across any colour, making it versatile for the variety of interior styles common in this locality.`,
  }),
  acrylic: (localityName, aff) => ({
    headline: `Why Acrylic Kitchens Suit ${localityName} Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `High-gloss acrylic is one of the most popular choices in ${localityName}'s premium residences. The mirror-like reflective surface makes kitchens appear larger and brighter — a significant advantage in the open-plan layouts common in this segment. Acrylic is UV-resistant, non-yellowing, and available in 100+ solid and metallic shades to match any designer interior.`
        : `Acrylic is a smart choice for ${localityName} homeowners who want a high-gloss, premium look at a price point that makes sense. The surface is easy to wipe clean, resistant to moisture, and available in a wide range of colours. It delivers a noticeably premium aesthetic relative to its cost — the reason it's consistently the top-selling kitchen finish across Delhi NCR's mid-segment housing.`,
  }),
  laminate: (localityName, _aff) => ({
    headline: `Why Laminate Kitchens Suit ${localityName} Homes`,
    body: `Laminate is the right choice for ${localityName} homeowners who value durability and design variety over a high-gloss look. High-pressure laminate resists scratches, heat, and moisture — making it especially practical for busy family kitchens. With 300+ textures including wood grains, matte solids, and abstract patterns, laminate offers the widest design range of any kitchen finish at the most competitive price point. It's the most forgiving material for day-to-day use.`,
  }),
  pu: (localityName, aff) => ({
    headline: `Why PU Finish Kitchens Suit ${localityName} Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `PU (polyurethane) spray finish is the premium choice for ${localityName}'s high-specification homes. It delivers a furniture-grade satin sheen that no other kitchen finish can match — the same quality used in luxury European cabinetry. PU is spray-applied and hard-cured, making it highly resistant to chips, UV yellowing, and daily wear. Any RAL colour can be matched, making it ideal for bespoke, designer-led kitchens where colour precision matters.`
        : `PU finish gives ${localityName} homeowners the closest thing to a luxury kitchen at a mid-to-premium price. The spray-applied surface is smooth, hard, and consistent in a way that no film-applied finish can replicate. It's particularly popular for contemporary kitchens where a clean, matt or semi-matt look is preferred over high gloss. PU is durable, UV-stable, and available in any colour.`,
  }),
  membrane: (localityName, _aff) => ({
    headline: `Why Membrane Kitchens Suit ${localityName} Homes`,
    body: `Membrane finish is the ideal choice for ${localityName} homeowners who want a soft-touch matte kitchen with 3D routed door profiles — a look that's impossible to achieve with flat-sheet finishes like acrylic or laminate. The PVC membrane wraps continuously around routed grooves with no visible joints, giving a furniture-like quality that reads as premium in any interior. Available in dozens of deep matte and textured colours, it works particularly well in contemporary or transitional kitchen designs.`,
  }),
};

// ─── Main export ──────────────────────────────────────────────────────────────

export function getLocalityProfile(
  localitySlug: string,
  affluence: "ultra-high" | "high" | "mid-high" | "mid",
): LocalityProfile {
  // 1. Check sofa repair registry (verified rich data)
  const richEntry = getLocalityData(localitySlug);
  if (richEntry) {
    return {
      isRich: true,
      propertyContext: richEntry.propertyType,
      typicalKitchenContext: AFF_KITCHEN_CONTEXT[affluence] ?? AFF_KITCHEN_CONTEXT["mid-high"],
      landmarks: richEntry.landmarks ?? [],
      adjacentAreas: richEntry.adjacentAreas ?? [],
    };
  }

  // 2. Check supplementary kitchen enrichment table (verified locality-specific data)
  const suppEntry = KITCHEN_LOCALITY_ENRICHMENT[localitySlug];
  if (suppEntry) {
    return {
      isRich: true,
      propertyContext: suppEntry.propertyType,
      typicalKitchenContext: AFF_KITCHEN_CONTEXT[affluence] ?? AFF_KITCHEN_CONTEXT["mid-high"],
      landmarks: suppEntry.landmarks,
      adjacentAreas: suppEntry.adjacentAreas,
    };
  }

  // 2b. Check Tricity enrichment table (verified locality-specific data)
  const tricityEntry = TRICITY_LOCALITY_ENRICHMENT[localitySlug];
  if (tricityEntry) {
    return {
      isRich: true,
      propertyContext: tricityEntry.propertyType,
      typicalKitchenContext: AFF_KITCHEN_CONTEXT[affluence] ?? AFF_KITCHEN_CONTEXT["mid-high"],
      landmarks: tricityEntry.landmarks,
      adjacentAreas: tricityEntry.adjacentAreas,
    };
  }

  // 3. Fallback: derive from affluence only (generic segment description)
  return {
    isRich: false,
    propertyContext: AFF_PROPERTY_CONTEXT[affluence] ?? AFF_PROPERTY_CONTEXT["mid-high"],
    typicalKitchenContext: AFF_KITCHEN_CONTEXT[affluence] ?? AFF_KITCHEN_CONTEXT["mid-high"],
    landmarks: [],
    adjacentAreas: [],
  };
}

export function getMaterialSuitability(
  materialSlug: string,
  localityName: string,
  affluence: string,
): MaterialSuitability {
  const fn = MATERIAL_SUITABILITY[materialSlug];
  if (fn) return fn(localityName, affluence);
  // Generic fallback
  return {
    headline: `Why Choose This Kitchen Finish in ${localityName}`,
    body: `This kitchen finish is well-suited to ${localityName} homes — combining durability, aesthetics, and practical maintenance for everyday use.`,
  };
}

// ─── Layout suitability copy ──────────────────────────────────────────────────

export type LayoutSuitability = { headline: string; body: string };

const LAYOUT_SUITABILITY: Record<string, (locality: string, aff: string) => LayoutSuitability> = {
  "l-shape": (locality, aff) => ({
    headline: `Why L-Shape Kitchens Work Well in ${locality} Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `The L-shape is the most popular modular kitchen layout in ${locality} — and for good reason. It creates a natural work triangle between the cooking, prep, and wash zones, which reduces unnecessary movement during meal preparation. In the premium homes and apartments of ${locality}, the L-shape allows for generous counter space, an island or breakfast bar on the open side, and tall storage units in the corner — all of which are expected finishes at this address. The layout also works well for open kitchen-dining plans, which are increasingly common in new developments here.`
        : `The L-shape kitchen is ideal for the mid-to-high-segment homes in ${locality}. It fits efficiently into the typical kitchen footprint — usually 80–140 sq ft — without wasting any wall space. The corner junction can be fitted with a carousel or pull-out unit for maximum accessibility, and the open side leaves room for a dining table or counter seating. This layout gives ${locality} homeowners a functional, organised kitchen that doesn't require a large space or budget to execute well.`,
  }),
  "parallel": (locality, aff) => ({
    headline: `Why Parallel Kitchens Suit ${locality} Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `Parallel kitchens are a smart choice for ${locality}'s longer, narrower kitchen spaces. Two facing walls of cabinetry double the storage and prep area compared to a straight layout, with one wall typically dedicated to cooking and the other to storage and appliances. In ${locality}'s premium homes, parallel kitchens are often finished with high-gloss acrylic or PU shutters, stone countertops on both sides, and integrated appliance columns — creating a professional, symmetrical kitchen that looks as good as it functions. The layout also allows two people to cook simultaneously without getting in each other's way.`
        : `The parallel layout maximises every square foot in ${locality}'s typical kitchen footprint. With cabinets on both facing walls, you get significantly more storage and counter space than a straight layout, without needing a larger room. This is the preferred layout for 2BHK and 3BHK apartments in ${locality} where the kitchen is a dedicated room rather than an open-plan space. Laminate or acrylic shutters in neutral tones are the most popular finish here, offering durability and easy maintenance at a practical price point.`,
  }),
  "straight": (locality, aff) => ({
    headline: `Why Straight Kitchens Are a Practical Choice in ${locality}`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `The straight kitchen layout works particularly well in ${locality} homes where the kitchen opens into a larger living or dining area. A single wall of well-designed cabinetry — floor-to-ceiling tall units flanking a central cooking and prep zone — can be both highly functional and visually striking. In ${locality}'s premium properties, straight kitchens are often paired with an island or peninsula for added workspace and a social cooking experience. High-quality finish choices like PU or lacquered glass elevate a straight kitchen into a design feature rather than just a utility space.`
        : `The straight kitchen is the most space-efficient layout for ${locality} homes with compact or galley-style kitchens. All cabinetry, appliances, and the sink run along a single wall, making it easy to plan, install, and maintain. This layout is especially suited to 1BHK and smaller 2BHK apartments in ${locality} where kitchen space is limited. Well-chosen laminate shutters in a light colour palette can make the kitchen feel more open, and a few well-placed tall units will give you far more storage than the footprint suggests.`,
  }),
  "u-shape": (locality, aff) => ({
    headline: `Why U-Shape Kitchens Work in ${locality}'s Larger Homes`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `The U-shape kitchen is the professional's choice — three walls of cabinetry create dedicated zones for cooking, prep, and storage without any workflow conflicts. In ${locality}'s premium villas, builder floors, and large apartments, a U-shape kitchen gives you the most counter space and the most storage of any layout, and it supports the integration of high-end appliances like built-in ovens, warming drawers, and steam ovens. The enclosed three-wall design also provides a clear boundary between the kitchen and the rest of the home, which many ${locality} homeowners prefer for both aesthetics and noise control.`
        : `For ${locality} homes with a generous kitchen footprint, the U-shape layout makes excellent use of three walls — giving you significantly more storage and counter space than an L-shape or straight layout. It works best when the kitchen is at least 100 sq ft. The three zones (cooking, prep, storage) are naturally separated, which makes the kitchen more organised and efficient for daily use. FurniRevive's designers will configure the U-shape specifically for your ${locality} kitchen dimensions to ensure good clearance and ergonomic workflow throughout.`,
  }),
};

export function getLayoutSuitability(
  layoutSlug: string,
  localityName: string,
  affluence: string,
): LayoutSuitability {
  const fn = LAYOUT_SUITABILITY[layoutSlug];
  if (fn) return fn(localityName, affluence);
  return {
    headline: `Why This Kitchen Layout Works in ${localityName}`,
    body: `This kitchen layout is well-suited to ${localityName} homes — providing an efficient workflow, practical storage, and a design that fits the typical kitchen footprint in this area.`,
  };
}

// ─── Scandinavian suitability copy ───────────────────────────────────────────

export type ScandinavianSuitability = { headline: string; body: string };

export function getScandinavianSuitability(
  localityName: string,
  affluence: string,
): ScandinavianSuitability {
  const headline = `Why Scandinavian Kitchens Suit ${localityName} Homes`;

  if (affluence === "ultra-high" || affluence === "high") {
    return {
      headline,
      body: `Scandinavian kitchen design is a natural fit for ${localityName}'s premium homes. The style's core principles — light ash or birch fronts, a white or bone carcass, brushed hardware, and uncluttered open shelving — translate directly into the spacious, well-lit kitchens typical of this address. Concealed storage behind handleless push-to-open doors keeps surfaces clear, which suits the open-plan layouts common in ${localityName}'s larger apartments and independent houses. Natural stone or pale quartz countertops complete the palette. FurniRevive's Scandinavian range uses real-veneer fronts and soft-close European hardware throughout — the same quality expected in any premium ${localityName} renovation.`,
    };
  }

  return {
    headline,
    body: `Scandinavian kitchen design works particularly well in ${localityName} homes because it delivers a clean, modern look without requiring a large budget or an oversized kitchen. The style relies on restraint — light laminate fronts in white, cream, or wood-effect finishes, simple slab-door profiles, and a neutral countertop — which keeps material costs manageable while producing a result that reads as genuinely contemporary. Concealed storage and handleless doors make compact kitchens feel larger and less cluttered. FurniRevive's Scandinavian range for ${localityName} uses the same BWR ply carcass and 10-year warranty structure as our premium ranges, with finishes chosen specifically for this aesthetic.`,
  };
}

// ─── Budget / price-range suitability copy ───────────────────────────────────

export type BudgetSuitability = { headline: string; body: string };

const BUDGET_TIER_COPY: Record<string, (locality: string, aff: string) => BudgetSuitability> = {
  "affordable": (locality, aff) => ({
    headline: `Affordable Modular Kitchens in ${locality} — What to Expect`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `An affordable modular kitchen in ${locality} doesn't mean cutting corners — it means making smart choices. FurniRevive's affordable range for ${locality} uses BWR-grade plywood carcasses (the same structural material as premium builds), CNC-cut modules for precise fitting, and laminate shutters in contemporary finishes. What's different is the hardware tier (quality Indian brands rather than imported Hettich or Blum) and the shutter finish (laminate rather than acrylic or PU). For a renovation or investment property in ${locality}, this is the right balance of quality and cost.`
        : `For ${locality} homeowners working within a defined budget, FurniRevive's affordable modular kitchen range delivers a clean, well-built kitchen at a price point that makes sense for this market. The carcass is BWR ply — the same moisture-resistant material used across all our ranges. Shutters are laminate in a range of contemporary textures and colours. The result is a kitchen that looks good, lasts well, and costs significantly less than an acrylic or PU build — with the same 10-year warranty coverage.`,
  }),
  "low-cost": (locality, aff) => ({
    headline: `Low-Cost Modular Kitchen in ${locality} — Honest Advice`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `If you're looking for a low-cost modular kitchen in ${locality}, FurniRevive will give you an honest picture. Our low-cost range uses a smaller module selection, simpler hardware, and a focused palette of laminate finishes — but the carcass remains BWR ply and the installation standard doesn't change. This tier is most appropriate for service kitchens, rental properties, or second kitchens in ${locality} homes where the primary kitchen has already been renovated. For a main kitchen in ${locality}'s premium properties, we'd recommend stepping up to our affordable or mid-range tier for better long-term satisfaction.`
        : `${locality} homeowners on a tight budget will find FurniRevive's low-cost modular kitchen range a reliable starting point. It uses a standard module set in laminate finish, solid BWR ply carcass, and basic but durable hardware. The range doesn't offer the same flexibility of colour choice or profile options as our higher tiers, but it delivers a clean, functional kitchen that's built to last — with the same professional installation and 10-year warranty that covers all FurniRevive kitchens.`,
  }),
};

// Price-range buckets (modular-kitchen-under-X-locality)
const PRICE_RANGE_COPY: Record<string, (locality: string, aff: string) => BudgetSuitability> = {
  "1-lakh": (locality, _aff) => ({
    headline: `Modular Kitchen Under ₹1 Lakh in ${locality} — Is It Possible?`,
    body: `A full modular kitchen under ₹1 lakh in ${locality} is possible for very compact kitchens (under 60 sq ft) with a straight or basic L-shape layout, laminate shutters, and a focused module selection. FurniRevive's estimate for this budget in ${locality} typically covers a 6–8 module kitchen with a 2-cabinet tall unit and basic countertop. It's best suited to studio apartments, 1BHK kitchens, or service kitchens where the primary need is functional storage and a clean finish. Our designer will visit and tell you exactly what's achievable within this budget for your specific kitchen.`,
  }),
  "1-5-lakh": (locality, aff) => ({
    headline: `Modular Kitchen Between ₹1–1.5 Lakh in ${locality}`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `A ₹1–1.5 lakh budget for a modular kitchen in ${locality} is suitable for a secondary kitchen, staff kitchen, or a compact 1BHK kitchen renovation. In this range, FurniRevive can deliver an L-shape or straight layout in laminate finish with a full set of base and wall cabinets, a 2-door tall unit, and basic countertop. For the main kitchen in a typical ${locality} home, we'd suggest reviewing the ₹2–3 lakh range where material and hardware quality better matches the neighbourhood standard.`
        : `In ${locality}, a ₹1–1.5 lakh budget opens up a practical and well-finished modular kitchen for kitchens up to 80 sq ft. FurniRevive can fit an L-shape or straight layout with full base and wall cabinetry, a tall storage unit, laminate shutters in your choice of texture, and a granite or quartz countertop. This is a popular price point for first-home buyers and apartment renovations in ${locality} who want a clean, properly built kitchen without going to premium finishes.`,
  }),
  "2-lakh": (locality, aff) => ({
    headline: `Modular Kitchen Under ₹2 Lakh in ${locality}`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `A ₹2 lakh budget for a modular kitchen in ${locality} gives FurniRevive room to deliver a well-specified L-shape or parallel kitchen in laminate or entry-level acrylic finish, with soft-close hardware, a full wall cabinet run, and 2 tall units. For ${locality}'s typical kitchen footprint this covers 90–110 sq ft comfortably. It's the right tier for investment properties, rental flats, or a pragmatic renovation where the brief is quality and durability rather than premium aesthetics.`
        : `Under ₹2 lakh, ${locality} homeowners can get a properly specified modular kitchen — L-shape or parallel layout, laminate shutters in contemporary colours, soft-close hinges and drawer slides, full base and wall cabinets, and a durable countertop. FurniRevive's ₹2 lakh kitchens in ${locality} are the most popular choice for 2BHK apartment renovations: enough budget to do it right without crossing into the premium tier.`,
  }),
  "3-lakh": (locality, aff) => ({
    headline: `Modular Kitchen Under ₹3 Lakh in ${locality}`,
    body:
      aff === "ultra-high" || aff === "high"
        ? `A ₹3 lakh budget in ${locality} is where the kitchen starts to look genuinely premium. FurniRevive can deliver a full acrylic or PU kitchen in this range for kitchens up to 120 sq ft — with Hettich or equivalent hardware, tandem drawer systems, tall pantry units, and a quartz countertop. This tier is appropriate for ${locality}'s larger apartments and builder floors where the kitchen is visible from the living area and the finish needs to match the overall interior standard of the home.`
        : `With a ₹3 lakh budget, ${locality} homeowners can get a kitchen that genuinely crosses into premium territory — acrylic shutters, soft-close tandem drawers, Hettich hardware, and a quartz or engineered stone countertop. FurniRevive regularly completes kitchens in this range for 3BHK apartments in ${locality}. The difference over the ₹2 lakh range is immediately visible: better shutter quality, better hardware feel, and more design flexibility in terms of colour and profile.`,
  }),
};

export function getBudgetSuitability(
  budgetTier: string,
  localityName: string,
  affluence: string,
): BudgetSuitability {
  const fn = BUDGET_TIER_COPY[budgetTier] ?? PRICE_RANGE_COPY[budgetTier];
  if (fn) return fn(localityName, affluence);
  return {
    headline: `Budget Modular Kitchen in ${localityName}`,
    body: `FurniRevive offers well-built modular kitchens in ${localityName} at practical price points — BWR ply carcass, quality hardware, and 10-year warranty across all budget tiers.`,
  };
}
