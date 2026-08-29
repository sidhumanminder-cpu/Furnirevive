import { CheckCircle2, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { PHONE_NUMBER, WHATSAPP_NUMBER, POPULAR_CITIES } from "@/lib/seo-constants.ts";

// ─── City configuration ────────────────────────────────────────────────────

export type CityKey = "noida" | "delhi" | "gurgaon" | "ghaziabad" | "faridabad" | "chandigarh" | "mohali" | "panchkula";

type CityConfig = {
  /** Display name of the city */
  name: string;
  /** Alternate name / colloquial name if any */
  altName?: string;
  /** 12–20 unique localities / areas to display as chips */
  localities: string[];
  /** 2–4 key landmarks or recognisable areas mentioned in prose */
  landmarks: string[];
  /** Key residential society names for trust-building prose */
  residentialSocieties: string[];
  /** Commercial property types prominent in this city */
  commercialTypes: string[];
  /** Technician response time promise */
  responseTime: string;
  /** Short city descriptor used in para 1 */
  cityCharacter: string;
  /** Customer scenarios specific to this city */
  customerScenarios: string;
  /** Service page slugs for internal links: upholstery, foam, recliner, furniture-repair */
  serviceLinks: {
    upholstery: string;
    foam: string;
    recliner: string;
    furnitureRepair: string;
    pricing: string;
  };
  /** 6 city-specific FAQs */
  faqs: { question: string; answer: string }[];
};

export const CITY_CONFIGS: Record<CityKey, CityConfig> = {
  noida: {
    name: "Noida",
    localities: [
      "Sector 18", "Sector 62", "Sector 76", "Sector 93", "Sector 137",
      "Sector 150", "Noida Extension", "Greater Noida West", "Gaur City",
      "Supertech Eco Village", "Knowledge Park", "Pari Chowk",
      "ATS Pristine", "Mahagun Moderne", "Jaypee Greens", "Sector 44",
      "Sector 75", "Sector 120",
    ],
    landmarks: ["DLF Mall of India (Sector 18)", "Botanical Garden Metro", "Atta Market", "Logix City Centre"],
    residentialSocieties: ["Mahagun Moderne", "Gaur City 1 & 2", "ATS Pristine", "Supertech Eco Village", "Le Grand"],
    commercialTypes: ["offices in Sector 62 & Sector 63", "restaurants near Sector 18", "hotels along the Expressway", "cafes in Sector 76"],
    responseTime: "2–4 hours",
    cityCharacter: "high-rise apartment city with gated societies spanning Sectors 1–168, Greater Noida, and Noida Extension",
    customerScenarios: "high-rise societies, IT professionals and gated communities",
    serviceLinks: {
      upholstery: "/sofa-upholstery-noida",
      foam: "/sofa-foam-replacement-noida",
      recliner: "/recliner-repair-noida",
      furnitureRepair: "/furniture-repair-noida",
      pricing: "/sofa-repair-cost-delhi",
    },
    faqs: [
      {
        question: "Do you offer same-day sofa repair near me in Noida?",
        answer: "Yes — FurniRevive offers same-day doorstep sofa repair in Noida when booked before noon. Technicians are stationed across Noida sectors for a 2–4 hour response. Call +91 92179 99355 to confirm a same-day slot at your sector.",
      },
      {
        question: "Which Noida sectors do you cover for sofa repair?",
        answer: "We cover all Noida sectors (1–168), Greater Noida (Knowledge Park, Alpha, Beta, Pari Chowk, Jaypee sectors), and Noida Extension (Gaur City, ATS Pristine, Supertech Eco Village, Ace City, Mahagun Moderne).",
      },
      {
        question: "Do you repair sofas in high-rise apartments in Noida?",
        answer: "Yes. Our technicians are trained for high-rise apartment work. We carry background verification documents, coordinate with building security, lay protective sheeting, and complete all repairs inside your apartment without disruption.",
      },
      {
        question: "Can you repair leather sofas in Noida?",
        answer: "Absolutely. Leather sofa repair — crack filling, colour restoration, and deep conditioning — is available across all Noida sectors. Leather repair starts at ₹1,500 with free doorstep inspection.",
      },
      {
        question: "Do you repair recliners in Noida?",
        answer: "Yes. Manual recliner mechanism repair starts at ₹1,499 and motorised recliner repair starts at ₹2,499. Our technicians carry spare parts for most common recliner mechanisms and cover all Noida sectors and Noida Extension.",
      },
      {
        question: "Is furniture pickup available in Noida?",
        answer: "For large sectional sofas or pieces requiring workshop-level work, furniture pickup and drop-back is available across Noida. However, 95% of repairs are completed at your doorstep in a single visit — no pickup required.",
      },
    ],
  },

  delhi: {
    name: "Delhi",
    localities: [
      "Lajpat Nagar", "Dwarka", "Janakpuri", "Pitampura", "Rohini",
      "Punjabi Bagh", "Greater Kailash", "Vasant Kunj", "Saket",
      "South Delhi", "East Delhi", "Preet Vihar", "Rajouri Garden",
      "Nehru Place", "Vasant Vihar", "Karol Bagh", "Mayur Vihar",
      "Connaught Place",
    ],
    landmarks: ["Connaught Place", "Lajpat Nagar Market", "Saket Malls", "Nehru Place"],
    residentialSocieties: ["DDA flats", "builder floors in South Delhi", "independent houses in Vasant Kunj", "apartments in Dwarka sectors"],
    commercialTypes: ["offices in Connaught Place & Nehru Place", "restaurants in Hauz Khas & Saket", "hotels near Aerocity", "cafes in South Delhi"],
    responseTime: "2–4 hours",
    cityCharacter: "sprawling metro with diverse housing — from DDA flats and builder floors to luxury apartments and independent bungalows",
    customerScenarios: "apartments, government colonies and independent houses",
    serviceLinks: {
      upholstery: "/sofa-upholstery-delhi",
      foam: "/sofa-foam-replacement-delhi",
      recliner: "/recliner-repair-delhi",
      furnitureRepair: "/furniture-repair-delhi",
      pricing: "/sofa-repair-cost-delhi",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Delhi?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Delhi areas including South Delhi, East Delhi, West Delhi, Dwarka, Rohini, and Vasant Kunj. Technicians arrive within 2–4 hours. Call +91 92179 99355.",
      },
      {
        question: "Which Delhi areas do you cover for sofa repair?",
        answer: "We cover all Delhi localities — Lajpat Nagar, Dwarka, Janakpuri, Pitampura, Rohini, Punjabi Bagh, Greater Kailash, Vasant Kunj, Saket, Preet Vihar, Rajouri Garden, Mayur Vihar, Karol Bagh, and beyond.",
      },
      {
        question: "Do you repair sofas in Delhi builder floors and DDA flats?",
        answer: "Yes. Builder floors, DDA flats, independent houses, and apartments — we service all property types across Delhi. Our technicians work neatly on-site with full cleanup included.",
      },
      {
        question: "How quickly can you repair my sofa in Delhi?",
        answer: "Book before noon and your sofa is repaired the same day. FurniRevive technicians are stationed across Delhi for 2–4 hour response. For urgent jobs, call directly rather than booking online.",
      },
      {
        question: "Do you repair office sofas and commercial furniture in Delhi?",
        answer: "Yes. We handle office sofa repair, reception area seating, restaurant booth cushions, and hotel room furniture across Delhi's commercial zones — Connaught Place, Nehru Place, Aerocity, and beyond. Bulk pricing available.",
      },
      {
        question: "Is furniture pickup available in Delhi?",
        answer: "Pickup and drop-back is available for large pieces. However, the vast majority of Delhi sofa repairs are completed entirely at your doorstep in a single visit — no transport, no wait.",
      },
    ],
  },

  gurgaon: {
    name: "Gurgaon",
    altName: "Gurugram",
    localities: [
      "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
      "Golf Course Road", "Golf Course Extension", "Sohna Road", "MG Road",
      "Sector 56", "Sector 57", "Sector 50", "South City",
      "Cyber City", "Manesar", "New Gurgaon", "Dwarka Expressway",
      "Vatika City", "Palam Vihar",
    ],
    landmarks: ["Cyber City", "Ambience Mall", "MGF Metropolitan Mall", "Huda City Centre Metro"],
    residentialSocieties: ["DLF villas", "Emaar Palm Hills", "Ireo Grand Arch", "Vatika City", "Ardee City"],
    commercialTypes: ["offices in Cyber City & DLF Cyber Hub", "restaurants on MG Road", "hotels near Golf Course Road", "co-working spaces in Udyog Vihar"],
    responseTime: "2–4 hours",
    cityCharacter: "premium corporate city with luxury villas, golf-course facing apartments, and rapid-expansion sectors along Sohna Road and Dwarka Expressway",
    customerScenarios: "luxury apartments, villas and corporate offices",
    serviceLinks: {
      upholstery: "/sofa-upholstery-gurgaon",
      foam: "/sofa-foam-replacement-gurgaon",
      recliner: "/recliner-repair-gurgaon",
      furnitureRepair: "/furniture-repair-gurgaon",
      pricing: "/sofa-repair-cost-delhi",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Gurgaon and Gurugram?",
        answer: "Yes — FurniRevive provides same-day doorstep sofa repair across all Gurgaon localities including DLF Phases, Golf Course Road, Sohna Road, MG Road, Cyber City, and New Gurgaon. Call +91 92179 99355.",
      },
      {
        question: "Do you repair sofas in DLF villas and premium societies?",
        answer: "Yes. Our technicians are experienced with premium Gurgaon properties — DLF villas, Emaar communities, and golf-course facing apartments. We carry ID documentation and follow all gated community protocols.",
      },
      {
        question: "How quickly can you reach my home in Gurgaon for sofa repair?",
        answer: "Technicians stationed across Gurgaon respond within 2–4 hours. Book before noon for same-day sofa repair at your address — DLF Phase 1–5, Golf Course Road, Sohna Road, or any Gurgaon sector.",
      },
      {
        question: "Do you repair leather and imported sofas in Gurgaon?",
        answer: "Yes. Gurgaon homes frequently feature Italian leather sofas, imported sectionals, and designer recliners. Our specialists use material-matched techniques for Natuzzi, Chateau d'Ax, and other premium brands.",
      },
      {
        question: "Can you repair sofas in offices and commercial spaces in Gurgaon?",
        answer: "Yes. We service office sofas, reception seating, and lounge furniture across Gurgaon's corporate zones — Cyber City, DLF Cyber Hub, Udyog Vihar, and Golf Course Road. Bulk corporate pricing available.",
      },
      {
        question: "Is furniture pickup available in Gurgaon?",
        answer: "Pickup is available for large pieces or complex structural work. Most Gurgaon repairs — including DLF villa and apartment jobs — are fully completed at your doorstep in a single visit.",
      },
    ],
  },

  ghaziabad: {
    name: "Ghaziabad",
    localities: [
      "Indirapuram", "Vaishali", "Kaushambi", "Raj Nagar Extension",
      "Crossing Republik", "Vasundhara", "Wave City", "Ahinsa Khand",
      "Shakti Khand", "Niti Khand", "Sahibabad", "Pratap Vihar",
      "Vijay Nagar", "Mohan Nagar", "Shalimar Garden", "Govindpuram",
    ],
    landmarks: ["Shipra Mall", "Pacific Mall Ghaziabad", "Raj Nagar District Centre", "Noida-Ghaziabad Border"],
    residentialSocieties: ["Ahinsa Khand societies", "Vaishali Sectors 1–6", "Crossing Republik townships", "Vasundhara sectors"],
    commercialTypes: ["offices in Kaushambi", "restaurants in Indirapuram", "hotels near NH-9", "showrooms in Raj Nagar"],
    responseTime: "2–4 hours",
    cityCharacter: "fast-growing NCR city with established residential zones in Indirapuram and Vaishali, and expanding new-development areas like Raj Nagar Extension and Wave City",
    customerScenarios: "apartments, townships and commercial offices",
    serviceLinks: {
      upholstery: "/sofa-upholstery-delhi",
      foam: "/sofa-foam-replacement-delhi",
      recliner: "/recliner-repair-ghaziabad",
      furnitureRepair: "/furniture-repair-ghaziabad",
      pricing: "/sofa-repair-cost-delhi",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Ghaziabad?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Ghaziabad areas including Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension, Crossing Republik, and Vasundhara. Technicians respond within 2–4 hours.",
      },
      {
        question: "Which Ghaziabad areas do you cover for sofa repair?",
        answer: "We cover all major Ghaziabad localities — Indirapuram (Ahinsa Khand, Shakti Khand, Niti Khand), Vaishali Sectors 1–6, Kaushambi, Vasundhara, Raj Nagar Extension, Crossing Republik, Wave City, and Sahibabad.",
      },
      {
        question: "How quickly can you reach my home in Ghaziabad?",
        answer: "FurniRevive technicians respond within 2–4 hours across Ghaziabad. Book before noon for same-day sofa repair. Call +91 92179 99355 directly for urgent same-day slot confirmation.",
      },
      {
        question: "Do you repair sofas in Indirapuram apartments?",
        answer: "Yes. Indirapuram is one of our highest-demand Ghaziabad zones. We regularly service Ahinsa Khand, Shakti Khand, and Niti Khand societies with same-day availability. Technicians are familiar with all building access protocols.",
      },
      {
        question: "Can you repair wooden and traditional sofas in Ghaziabad?",
        answer: "Yes. Sheesham and teak sofa sets common in Ghaziabad homes are repaired at your doorstep — joint reinforcement, spring replacement, and full re-upholstery. Most jobs completed in 2–4 hours.",
      },
      {
        question: "Is furniture pickup available in Ghaziabad?",
        answer: "Pickup and delivery is available for large or complex pieces. However, most Ghaziabad sofa repairs — foam replacement, re-upholstery, recliner mechanism — are completed entirely at your home in one visit.",
      },
    ],
  },

  faridabad: {
    name: "Faridabad",
    localities: [
      "NIT Faridabad", "Sector 15", "Sector 16", "Sector 21",
      "Greenfield Colony", "BPTP Parklands", "Greater Faridabad",
      "Neharpar", "Surajkund", "Ballabgarh", "Old Faridabad",
      "Sector 86", "Sector 88", "Ashoka Enclave",
    ],
    landmarks: ["Surajkund Crafts Mela Ground", "Crown Interiorz Mall", "YMCA Chowk", "Badkhal Lake area"],
    residentialSocieties: ["BPTP Parklands", "Omaxe World Street", "Ashoka Enclave", "Ansal Sushant City", "Greenfield Colony"],
    commercialTypes: ["industrial offices in Sector 24–31", "restaurants in Surajkund", "hotels near Highway 19", "showrooms in NIT"],
    responseTime: "2–4 hours",
    cityCharacter: "industrial and residential city with established NIT sectors, modern Greater Faridabad townships, and growing Neharpar belt",
    customerScenarios: "residential sectors and family homes",
    serviceLinks: {
      upholstery: "/sofa-upholstery-delhi",
      foam: "/sofa-foam-replacement-delhi",
      recliner: "/recliner-repair-faridabad",
      furnitureRepair: "/furniture-repair-faridabad",
      pricing: "/sofa-repair-cost-delhi",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Faridabad?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Faridabad areas including NIT sectors, Greater Faridabad, BPTP, Neharpar, Ballabgarh, and Surajkund. Technicians respond within 2–4 hours.",
      },
      {
        question: "Which Faridabad areas do you cover for sofa repair?",
        answer: "We cover all Faridabad — NIT sectors (1–89), Greater Faridabad (Sectors 75–89, Neharpar), BPTP Parklands, Ballabgarh, Surajkund, Ashoka Enclave, Greenfield Colony, and Old Faridabad.",
      },
      {
        question: "Do you repair sheesham and traditional sofas in Faridabad?",
        answer: "Yes. Faridabad homes frequently have sheesham and teak sofa sets. We do full joint repair, spring replacement, and re-upholstery at your doorstep. Traditional sofa restoration is a core part of our Faridabad service.",
      },
      {
        question: "How quickly can you reach my home in Faridabad?",
        answer: "Technicians respond within 2–4 hours across Faridabad. Book before noon for same-day sofa repair. Call +91 92179 99355 for urgent same-day slot confirmation — online booking may not always reflect real-time availability.",
      },
      {
        question: "Do you repair sofas in BPTP and Greater Faridabad?",
        answer: "Yes. BPTP Parklands, Greater Faridabad, and Neharpar are well-covered Faridabad zones. Our technicians are familiar with society access protocols in these residential complexes.",
      },
      {
        question: "Is furniture pickup available in Faridabad?",
        answer: "Furniture pickup is available for large or structurally complex pieces. Most Faridabad repairs — foam replacement, fabric change, recliner mechanism, frame repair — are completed at your doorstep in a single 2–4 hour visit.",
      },
    ],
  },
  chandigarh: {
    name: "Chandigarh",
    localities: [
      "Sector 7", "Sector 8", "Sector 9", "Sector 11", "Sector 15",
      "Sector 17", "Sector 22", "Sector 34", "Sector 35", "Sector 37",
      "Sector 44", "Sector 46", "Industrial Area Phase 1", "Industrial Area Phase 2",
      "Manimajra", "Burail", "Daria", "Mauli Jagran",
    ],
    landmarks: ["Sector 17 Plaza", "Elante Mall", "Rock Garden", "Sukhna Lake"],
    residentialSocieties: ["Sector 15 housing board", "Sector 44 apartments", "Manimajra residential zones", "Sector 9 bungalows"],
    commercialTypes: ["offices in Sector 34 & 35", "restaurants in Sector 17", "hotels near Sector 22", "showrooms in Industrial Area"],
    responseTime: "2–4 hours",
    cityCharacter: "planned city with wide-sector housing, bungalows in premium sectors, and modern apartment complexes across Phase 1 & 2",
    customerScenarios: "sector homes, government bungalows, and apartment residents",
    serviceLinks: {
      upholstery: "/sofa-upholstery-chandigarh",
      foam: "/sofa-repair-chandigarh",
      recliner: "/recliner-repair-chandigarh",
      furnitureRepair: "/furniture-repair-chandigarh",
      pricing: "/sofa-repair-cost-chandigarh",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Chandigarh?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Chandigarh sectors including Sector 7, 8, 9, 15, 17, 22, 34, 35, 44, and Industrial Area. Technicians respond within 2–4 hours. Call +91 92179 99355.",
      },
      {
        question: "Which Chandigarh sectors do you cover for sofa repair?",
        answer: "We cover all Chandigarh sectors (1–56), Industrial Area Phase 1 & 2, Manimajra, Burail, and Mauli Jagran. Government housing, bungalows, and apartment complexes are all serviced.",
      },
      {
        question: "Do you repair sofas in Chandigarh government bungalows and sector homes?",
        answer: "Yes. Our technicians are experienced with all Chandigarh property types — government sector bungalows, Housing Board flats, and private apartments. We bring all tools on-site for clean, in-home repairs.",
      },
      {
        question: "How quickly can you reach my home in Chandigarh for sofa repair?",
        answer: "Technicians stationed across Chandigarh respond within 2–4 hours. Book before noon for same-day sofa repair. Call +91 92179 99355 for urgent slot confirmation.",
      },
      {
        question: "Do you repair leather sofas and recliners in Chandigarh?",
        answer: "Yes. Leather sofa crack filling, colour restoration, and recliner mechanism repair are all available across Chandigarh sectors. Most repairs are completed at your doorstep in a single visit.",
      },
      {
        question: "Is furniture pickup available in Chandigarh?",
        answer: "Pickup and drop-back is available for large or complex pieces. However, the majority of Chandigarh sofa repairs — foam replacement, re-upholstery, frame repair — are completed entirely at your home in one visit.",
      },
    ],
  },

  mohali: {
    name: "Mohali",
    altName: "SAS Nagar",
    localities: [
      "Phase 1", "Phase 2", "Phase 3A", "Phase 3B", "Phase 4",
      "Phase 5", "Phase 6", "Phase 7", "Phase 10", "Phase 11",
      "Sector 68", "Sector 70", "Sector 71", "Aerocity Mohali",
      "IT City Mohali", "Sunny Enclave", "Kharar", "Zirakpur",
    ],
    landmarks: ["PCA Stadium", "Mohali IT Park", "Aerocity Mohali", "ISBT Mohali"],
    residentialSocieties: ["Omaxe New Chandigarh", "Ansal API", "DLF Hyde Park", "Wave Estate", "Sunny Enclave"],
    commercialTypes: ["IT offices in IT City & Phase 8", "restaurants in Phase 5 & 7", "hotels near Aerocity", "showrooms in Phase 10"],
    responseTime: "2–4 hours",
    cityCharacter: "rapidly growing tech-and-residential satellite city with planned phases, IT parks, and modern gated societies",
    customerScenarios: "IT professionals, township residents, and commercial offices",
    serviceLinks: {
      upholstery: "/sofa-upholstery-mohali",
      foam: "/sofa-repair-mohali",
      recliner: "/recliner-repair-mohali",
      furnitureRepair: "/furniture-repair-mohali",
      pricing: "/sofa-repair-cost-mohali",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Mohali?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Mohali phases including Phase 1–11, Aerocity, IT City, Sunny Enclave, Kharar, and Zirakpur. Technicians respond within 2–4 hours. Call +91 92179 99355.",
      },
      {
        question: "Which Mohali phases and areas do you cover for sofa repair?",
        answer: "We cover all Mohali phases (1–11), Sectors 68–80, Aerocity, IT City, Wave Estate, DLF Hyde Park, Omaxe New Chandigarh, Sunny Enclave, Kharar, and Zirakpur.",
      },
      {
        question: "How quickly can you reach my home in Mohali?",
        answer: "FurniRevive technicians respond within 2–4 hours across all Mohali phases. Book before noon for same-day sofa repair. Call +91 92179 99355 for urgent same-day slot confirmation.",
      },
      {
        question: "Do you repair sofas in Mohali IT park offices and gated societies?",
        answer: "Yes. IT parks in Phase 8 & IT City, and gated societies like Wave Estate and DLF Hyde Park are fully covered. We carry verification documents and follow all building access protocols.",
      },
      {
        question: "Do you repair leather sofas and recliners in Mohali?",
        answer: "Yes. Leather sofa repair and recliner mechanism repair are available across all Mohali phases. Most repairs are completed at your doorstep in a single 2–4 hour visit.",
      },
      {
        question: "Is furniture pickup available in Mohali?",
        answer: "Furniture pickup is available for large or structurally complex pieces. Most Mohali sofa repairs are completed entirely at your home — foam replacement, re-upholstery, and recliner repairs included.",
      },
    ],
  },

  panchkula: {
    name: "Panchkula",
    localities: [
      "Sector 1", "Sector 4", "Sector 5", "Sector 6", "Sector 7",
      "Sector 8", "Sector 9", "Sector 10", "Sector 11", "Sector 12",
      "Sector 15", "Sector 17", "Sector 20", "Sector 21",
      "MDC Sector 4", "MDC Sector 5", "Kalka", "Pinjore", "Dhakoli",
    ],
    landmarks: ["Chhatbir Zoo road", "MDC Sector 5 bungalows", "Panchkula Bus Stand", "Morni Hills road"],
    residentialSocieties: ["MDC Sector 4 & 5 bungalows", "Sector 8 apartments", "Sector 20 housing societies", "Kalka residential areas"],
    commercialTypes: ["offices in Sector 20 & 21", "restaurants in Sector 10 & 11", "hotels near Sector 15", "showrooms in MDC Sector 5"],
    responseTime: "2–4 hours",
    cityCharacter: "well-planned satellite city of Chandigarh with premium MDC bungalow sectors, mid-range residential sectors, and the Pinjore-Kalka industrial belt",
    customerScenarios: "sector bungalow residents, apartment dwellers, and MDC area homeowners",
    serviceLinks: {
      upholstery: "/sofa-upholstery-panchkula",
      foam: "/sofa-repair-panchkula",
      recliner: "/recliner-repair-panchkula",
      furnitureRepair: "/furniture-repair-panchkula",
      pricing: "/sofa-repair-cost-panchkula",
    },
    faqs: [
      {
        question: "Do you offer sofa repair at home in Panchkula?",
        answer: "Yes — FurniRevive provides doorstep sofa repair across all Panchkula sectors including Sector 1–21, MDC Sector 4 & 5, Kalka, Pinjore, and Dhakoli. Technicians respond within 2–4 hours. Call +91 92179 99355.",
      },
      {
        question: "Which Panchkula sectors do you cover for sofa repair?",
        answer: "We cover all Panchkula sectors (1–21), MDC Sector 4 & 5, Kalka, Pinjore, and Dhakoli. Bungalows, housing board flats, and private apartment complexes are all serviced.",
      },
      {
        question: "Do you repair sofas in MDC Sector 4 and 5 bungalows in Panchkula?",
        answer: "Yes. MDC Sector 4 & 5 are premium bungalow areas and among our most-served zones in Panchkula. We handle high-end upholstery, leather sofas, and designer recliners with full on-site repair.",
      },
      {
        question: "How quickly can you reach my home in Panchkula for sofa repair?",
        answer: "Technicians stationed in Panchkula respond within 2–4 hours. Book before noon for same-day sofa repair. Call +91 92179 99355 for urgent slot confirmation.",
      },
      {
        question: "Do you repair leather sofas and recliners in Panchkula?",
        answer: "Yes. Leather sofa crack filling, colour restoration, and motorised recliner repair are all available across Panchkula sectors. Starting at ₹1,499 with free doorstep inspection.",
      },
      {
        question: "Is furniture pickup available in Panchkula?",
        answer: "Pickup and drop-back is available for large pieces. However, most Panchkula sofa repairs — including MDC bungalow jobs — are fully completed at your doorstep in a single visit with no transport required.",
      },
    ],
  },
};

// ─── Service configuration ─────────────────────────────────────────────────

type ServiceConfig = {
  para1: (cityName: string, cityCharacter: string, customerScenarios: string) => string;
  whatsappText: string;
  faqs: (cityName: string) => { question: string; answer: string }[];
  crossCityLinkKey: keyof CityConfig["serviceLinks"] | null;
};

const SERVICE_CONFIG: Record<string, ServiceConfig> = {
  "Sofa Upholstery": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for sofa upholstery near you in ${cityName}? FurniRevive provides doorstep sofa reupholstery and upholstery restoration across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} refresh worn or outdated sofas without transporting them to a workshop. Our technicians bring the required fabric, foam, tools, and equipment directly to your doorstep, making it easy to replace damaged fabric, refresh cushions, change sofa colours, and restore the overall appearance of your furniture. We work with fabric sofas, leather sofas, sectional sofas, recliners, wooden sofas, sofa-cum-beds, and other upholstered seating. Depending on the condition of the sofa, the service can include fabric replacement, leatherette replacement, foam replacement, cushion restoration, stitching, webbing or spring work, and complete sofa reupholstery. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for sofa upholstery near me.",
    crossCityLinkKey: "upholstery",
    faqs: (cityName) => [
      { question: `How much does sofa upholstery cost in ${cityName}?`, answer: `Sofa upholstery in ${cityName} starts at ₹3,500 for a standard 2-seater with fabric replacement. Full reupholstery of a 3-seater sectional with premium fabric can range from ₹8,000–₹18,000 depending on fabric choice, foam replacement, and structural work needed. FurniRevive provides a free doorstep inspection and detailed quote before any work begins.` },
      { question: `Can sofa upholstery be done at home in ${cityName}?`, answer: `Yes — FurniRevive's sofa upholstery service is entirely doorstep-based in ${cityName}. Our technicians carry fabric rolls, foam sheets, tools, and equipment to your home. No transportation, no workshop delay. Most jobs are completed in a single visit.` },
      { question: `Which fabric is best for sofa reupholstery in ${cityName}?`, answer: `For ${cityName} homes, we recommend cotton-polyester blends for everyday sofas (durable, easy to clean), leatherette for a premium look without leather maintenance, and velvet or chenille for decorative sofas in living rooms. Our team helps you choose fabric based on your usage, children or pets in the home, and budget.` },
      { question: `Can you replace only the sofa fabric without changing the foam?`, answer: `Yes. If your sofa frame and foam are in good condition, we can replace only the fabric cover. This is the most cost-effective upholstery option. During the doorstep inspection, our technician assesses whether the existing foam needs replacement or can be reused.` },
      { question: `How long does sofa reupholstery take in ${cityName}?`, answer: `Standard sofa reupholstery takes 4–8 hours depending on the sofa size and complexity. A simple 2-seater fabric change can be done in 3–4 hours. Larger sectionals or recliners with structural work may take a full day. In most cases, the sofa is ready to use on the same day.` },
      { question: `Do you reupholster leather and rexine sofas in ${cityName}?`, answer: `Yes. We replace worn leather, cracked rexine, and peeling leatherette with fresh material across all sofa types in ${cityName}. We carry a range of leatherette finishes — matte, glossy, pebbled — and can match existing furniture where possible.` },
    ],
  },
  "Sofa Foam Replacement": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for sofa foam replacement near you in ${cityName}? FurniRevive provides doorstep sofa foam replacement across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} restore sagging, sunken, or uncomfortable cushions without moving their sofa to a workshop. Our technicians arrive with a range of foam densities — from soft comfort foam to high-resilience HR foam — and cut, shape, and fit new foam on-site to match your sofa's original dimensions. We also replace cushion covers, fibrefill, and Dacron wrapping where needed. If your sofa sits low, feels lumpy, or has lost its original firmness, foam replacement is the most cost-effective restoration. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for sofa foam replacement near me.",
    crossCityLinkKey: null,
    faqs: (cityName) => [
      { question: `How much does sofa foam replacement cost in ${cityName}?`, answer: `Sofa foam replacement in ${cityName} starts at ₹1,200 per cushion. Full sofa foam replacement for a 3-seater (seat cushions + back cushions) typically costs ₹4,000–₹9,000 depending on foam density, sofa size, and number of cushions. FurniRevive provides a free doorstep inspection and itemised quote before any work begins.` },
      { question: `How do I know if my sofa needs foam replacement?`, answer: `Common signs include: cushions that sag or sink when you sit, sofa seats that have lost their bounce, visible indentations that do not spring back, or seats that feel noticeably harder or softer than they used to. If your sofa frame is solid but the seating is uncomfortable, foam replacement typically restores it to near-new condition.` },
      { question: `What foam density is best for sofa cushions?`, answer: `For regular home use, 32–40 density HR (high-resilience) foam is recommended — it is firm enough for good support but soft enough for extended sitting. We carry densities from 28D (soft) to 50D (extra firm) and help you choose based on your seating preference, sofa style, and whether it is for everyday use or occasional seating.` },
      { question: `Can you replace foam without reupholstering the sofa in ${cityName}?`, answer: `Yes. If your fabric cover is in good condition, we remove the existing cover carefully, replace the foam, and refit the same cover. No upholstery work is required unless the cover is damaged. This keeps costs low and avoids unnecessary fabric changes.` },
      { question: `How long does sofa foam replacement take?`, answer: `Foam replacement for a standard 3-seater takes 2–4 hours at your doorstep. We cut foam on-site to exact dimensions, fit it, and refit the covers in a single visit. The sofa is ready to use immediately after completion.` },
      { question: `Is sofa foam replacement available same day in ${cityName}?`, answer: `Yes — FurniRevive offers same-day foam replacement across ${cityName} when booked before noon. Technicians carry foam stock in multiple densities for most standard sofa sizes. Call +91 92179 99355 to confirm a same-day slot.` },
    ],
  },
  "Sofa Polishing": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for sofa polishing near you in ${cityName}? FurniRevive provides doorstep sofa polishing and wooden frame restoration across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} revive the finish of wooden-frame sofas without transporting them to a workshop. Our craftsmen sand, fill, and refinish exposed wooden frames — sheesham, teak, mango wood, or painted wood — using French polish, melamine, or matte/gloss lacquer finishes. We also clean and condition leather and rexine upholstery as part of the service. If your sofa frame is scratched, faded, or has peeling varnish, a doorstep polishing service restores its appearance at a fraction of replacement cost. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for sofa polishing near me.",
    crossCityLinkKey: null,
    faqs: (cityName) => [
      { question: `How much does sofa polishing cost in ${cityName}?`, answer: `Sofa polishing in ${cityName} starts at ₹1,500 for a basic wooden-frame sofa. Full French polish restoration of a large sheesham sofa typically costs ₹3,500–₹8,000 depending on wood type, finish, and the extent of damage. FurniRevive provides a free doorstep inspection and quote before any work begins.` },
      { question: `Can sofa polishing be done at home in ${cityName}?`, answer: `Yes — FurniRevive's sofa polishing is entirely doorstep-based. Our craftsmen carry sanding tools, wood fillers, stains, and polish to your home. Protective sheeting is laid to protect your flooring during the process. No transport required.` },
      { question: `Which polish finish is available for wooden sofas?`, answer: `We offer French polish (traditional, high-gloss, suitable for sheesham and teak), melamine finish (durable, moisture-resistant, suitable for modern wood sofas), matte lacquer (contemporary look, low sheen), and wood stain plus varnish for natural wood tones. Our craftsman recommends the best finish based on wood type and existing furniture in your home.` },
      { question: `Can scratches and dents on sofa frames be repaired before polishing?`, answer: `Yes. Surface scratches are sanded smooth before polishing. Deeper dents or chips are filled with wood filler, sanded, and blended into the surrounding finish. Structural cracks in joints are repaired as part of the process if required.` },
      { question: `How long does sofa polishing take?`, answer: `Standard sofa polishing takes 4–8 hours at your doorstep depending on the size of the frame, the finish chosen, and the extent of restoration required. French polish requires multiple thin coats with drying time between each layer. The sofa may need 12–24 hours before heavy use after polishing.` },
      { question: `Do you also polish leather and rexine sofa surfaces?`, answer: `Yes. As part of the service, leather and rexine panels are cleaned, conditioned, and surface-treated. For cracked or peeling leather, we can apply colour-matched conditioner to restore suppleness and appearance. Full leather restoration is also available as a standalone service.` },
    ],
  },
  "Recliner Repair": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for recliner repair near you in ${cityName}? FurniRevive provides doorstep recliner repair across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} fix stuck, broken, or malfunctioning recliners without moving them to a workshop. Our technicians repair manual recliner mechanisms, motorised recliner motors, recliner frames, broken footrests, sagging seat foam, and worn upholstery — all at your doorstep. We carry spare parts for most common recliner mechanisms and can diagnose electrical faults in powered recliners on-site. From a simple mechanism adjustment to a complete foam and fabric restoration, our team handles all recliner types — single-seater, two-seater, and sectional recliners. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for recliner repair near me.",
    crossCityLinkKey: "recliner",
    faqs: (cityName) => [
      { question: `How much does recliner repair cost in ${cityName}?`, answer: `Recliner repair in ${cityName} starts at ₹1,499 for manual mechanism repair and ₹2,499 for motorised recliner motor repair. Full restoration including mechanism, foam, and upholstery can range from ₹5,000–₹15,000 depending on the recliner type and extent of damage. Free doorstep inspection before any work begins.` },
      { question: `Can you repair motorised and electric recliners in ${cityName}?`, answer: `Yes. FurniRevive repairs motorised recliners — motor replacement, wiring faults, USB charging port issues, control handset problems, and power supply failures. We carry spare motors and control units for most common electric recliner brands available in India.` },
      { question: `My recliner footrest is stuck or will not close — can you fix it?`, answer: `Yes. Stuck or jammed footrests are one of the most common recliner issues we fix. The problem is usually a bent mechanism link, worn cable, or seized pivot point. Our technician diagnoses and repairs the mechanism at your doorstep in most cases within 1–2 hours.` },
      { question: `Can you replace recliner foam and upholstery in ${cityName}?`, answer: `Yes. Sagging seat foam, flat back cushions, and worn or torn upholstery can all be replaced at your doorstep. We stock high-density HR foam and a range of fabric and leatherette options to match or refresh your recliner's appearance.` },
      { question: `Do you repair recliners in all parts of ${cityName}?`, answer: `Yes — FurniRevive covers all localities in ${cityName} for recliner repair. Technicians respond within 2–4 hours across residential and commercial areas. Book before noon for same-day recliner repair. Call +91 92179 99355 for urgent slot confirmation.` },
      { question: `Is it worth repairing a recliner or should I buy a new one?`, answer: `In most cases, repair is significantly more cost-effective. A quality recliner that cost ₹20,000–₹80,000 can typically be fully restored for ₹3,000–₹12,000. Mechanism repair alone — which fixes most functional issues — costs ₹1,499–₹3,500. Our technician provides an honest assessment during the free inspection.` },
    ],
  },
  "Recliner Upholstery": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for recliner upholstery near you in ${cityName}? FurniRevive provides doorstep recliner reupholstery across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} restore or completely change the fabric and cushioning of their recliners without transporting them to a workshop. Our technicians replace leatherette, fabric, velvet, and leather covers, along with seat foam, back cushions, and armrest padding — all on-site. Whether your recliner has peeling leatherette, torn fabric, or flat, uncomfortable cushions, a doorstep upholstery service restores its appearance and comfort. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for recliner upholstery near me.",
    crossCityLinkKey: "recliner",
    faqs: (cityName) => [
      { question: `How much does recliner upholstery cost in ${cityName}?`, answer: `Recliner upholstery in ${cityName} starts at ₹3,000 for fabric replacement on a single-seater. Full reupholstery of a large powered recliner with leatherette and foam replacement can range from ₹7,000–₹18,000 depending on size, material choice, and cushion work needed. Free doorstep inspection and quote provided.` },
      { question: `Can recliner upholstery be done at home in ${cityName}?`, answer: `Yes — FurniRevive's recliner upholstery service is entirely doorstep-based. Our technicians bring fabric, foam, tools, and upholstery materials to your home. The recliner mechanism is protected during the process and tested after completion. No transport required.` },
      { question: `Which fabric works best for recliner reupholstery?`, answer: `For recliners, we recommend leatherette (durable, easy to clean, available in dozens of colours), microfibre fabric (soft, stain-resistant, suitable for families with children), and bonded leather for a premium look. Our team helps you choose based on your usage and the existing furniture in your room.` },
      { question: `Can you replace only the recliner seat cushion without changing the whole cover?`, answer: `Yes. If only the seat foam is sagging while the fabric remains in good condition, we can open the seat, replace the foam, and restitch the cover. This targeted approach keeps costs lower than full reupholstery.` },
      { question: `How long does recliner upholstery take?`, answer: `Standard recliner reupholstery takes 4–8 hours at your doorstep. A full leatherette replacement on a large powered recliner may take a full day. In most cases, the recliner is ready to use the same day. Same-day slots available when booked before noon.` },
      { question: `Do you reupholster recliners in all parts of ${cityName}?`, answer: `Yes — FurniRevive covers all localities in ${cityName} for recliner upholstery. Technicians respond within 2–4 hours. Call +91 92179 99355 to confirm availability and book a same-day slot.` },
    ],
  },
  "Chair Repair": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for chair repair near you in ${cityName}? FurniRevive provides doorstep chair repair across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} fix dining chairs, office chairs, wooden chairs, and upholstered chairs without transporting them to a workshop. Our technicians repair loose joints and wobbly legs, replace broken rungs and stretchers, fix cracked wooden frames, reglue and reinforce chair structures, replace seat foam and cushions, and restore upholstery — all at your doorstep. We handle all chair types: sheesham dining chairs, cane chairs, upholstered accent chairs, bar stools, and wooden armchairs. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for chair repair near me.",
    crossCityLinkKey: null,
    faqs: (cityName) => [
      { question: `How much does chair repair cost in ${cityName}?`, answer: `Chair repair in ${cityName} starts at ₹500 for a single joint repair or leg tightening. Full structural repair of a dining chair (joints, legs, rungs) typically costs ₹1,200–₹3,000. Chair upholstery and foam replacement adds ₹800–₹2,500 depending on fabric and cushion size. Free doorstep inspection before any work begins.` },
      { question: `Can wooden chair legs and joints be repaired at home in ${cityName}?`, answer: `Yes — all joint repairs, leg replacements, and structural work are done at your doorstep. Our craftsmen carry wood glue, dowels, replacement hardware, and clamps. Loose joints are cleaned, reglued, and clamped, and the chair is ready to use after the adhesive cures.` },
      { question: `Do you repair loose and wobbly chair joints?`, answer: `Yes. Wobbly joints are typically caused by dried or failed wood glue in the mortise-and-tenon joints. Our technician disassembles the loose joints, cleans out old adhesive, applies fresh wood glue, and clamps the joint for proper bonding. In most cases the chair is fully stable after repair.` },
      { question: `Can you repair dining chairs and matching sets in ${cityName}?`, answer: `Yes. We regularly repair full dining sets — 4, 6, or 8 chairs in one visit. Matching repairs across a set ensure consistent finish and structural integrity. Bulk pricing is available for set repairs.` },
      { question: `Do you repair office chairs in ${cityName}?`, answer: `Yes. Office chair repair — including gas cylinder replacement, broken armrest repair, caster replacement, seat foam replacement, and mesh back repair — is available across ${cityName}. Most office chair repairs are completed in under 2 hours at your doorstep.` },
      { question: `Can you reupholster chairs as part of the repair?`, answer: `Yes. Seat and back cushion replacement, fabric reupholstery, and foam replacement can be combined with structural repair in a single visit. Our technician provides a combined quote covering both repair and upholstery work.` },
    ],
  },
  "Chair Upholstery": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for chair upholstery near you in ${cityName}? FurniRevive provides doorstep chair reupholstery across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} restore or completely change the fabric and cushioning on dining chairs, armchairs, accent chairs, bar stools, and office chairs without transporting them to a workshop. Our technicians replace fabric covers, leather or leatherette panels, seat foam, and back cushion padding on-site. Whether your chairs have worn fabric, peeling leatherette, or flat uncomfortable cushions, a doorstep upholstery service restores their appearance and comfort. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for chair upholstery near me.",
    crossCityLinkKey: null,
    faqs: (cityName) => [
      { question: `How much does chair upholstery cost in ${cityName}?`, answer: `Chair upholstery in ${cityName} starts at ₹600 per chair for a basic fabric seat replacement. Full reupholstery of an upholstered dining chair with new fabric and foam typically costs ₹1,500–₹3,500 per chair. Bulk pricing is available for dining sets of 4–8 chairs. Free doorstep inspection and quote before any work begins.` },
      { question: `Can chair upholstery be done at home in ${cityName}?`, answer: `Yes — FurniRevive's chair upholstery is entirely doorstep-based. Our technicians bring fabric rolls, foam, tools, and stapling equipment to your home. A full dining set can typically be reupholstered in a single visit. No transport required.` },
      { question: `Which fabric works best for dining chair upholstery?`, answer: `For dining chairs, we recommend leatherette (easy to clean, wipe-proof, great for families with children), microfibre fabric (soft, stain-resistant), and cotton-polyester blends for a traditional look. Velvet is popular for accent chairs. Our team helps you choose based on the room setting and your usage requirements.` },
      { question: `Can you reupholster a full dining set in one visit in ${cityName}?`, answer: `Yes — a standard 6-chair dining set reupholstery is typically completed in 4–6 hours at your doorstep. All chairs are done in one visit, ensuring consistent fabric and finish across the set. Bulk pricing is available for sets.` },
      { question: `Can you replace only the seat foam without changing the fabric?`, answer: `Yes. If the fabric is intact but the seat cushion has flattened, we open the seat base, replace the foam, and restitch or re-tack the existing fabric. This targeted approach keeps costs lower than full reupholstery.` },
      { question: `Do you reupholster antique and wooden chairs in ${cityName}?`, answer: `Yes. Antique chairs, sheesham carved chairs, and heirloom wooden armchairs are reupholstered with care for the existing structure. Our craftsmen work around decorative woodwork and use period-appropriate or customer-chosen fabrics for the upholstery.` },
    ],
  },
  "Furniture Repair": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for furniture repair near you in ${cityName}? FurniRevive provides doorstep furniture repair across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} fix sofas, chairs, recliners, beds, cabinets, wardrobes, and other wooden furniture without transporting pieces to a workshop. Our craftsmen handle structural repairs (loose joints, broken legs, cracked frames), upholstery (fabric and foam replacement), polishing and refinishing (French polish, melamine, lacquer), and hardware replacement — all at your doorstep. We bring all tools, materials, and spare parts needed to complete most jobs in a single visit. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for furniture repair near me.",
    crossCityLinkKey: "furnitureRepair",
    faqs: (cityName) => [
      { question: `How much does furniture repair cost in ${cityName}?`, answer: `Furniture repair in ${cityName} starts at ₹500 for a minor joint or hardware repair. Sofa repairs start at ₹800, chair repairs at ₹500, and wooden furniture polishing from ₹1,500. FurniRevive provides a free doorstep inspection and itemised quote before any work begins.` },
      { question: `What types of furniture do you repair in ${cityName}?`, answer: `We repair sofas (all types), recliners, dining chairs, armchairs, office chairs, wooden beds, wardrobes, cabinets, coffee tables, bookshelves, TV units, and other wooden furniture. Upholstery, foam replacement, structural repair, polishing, and hardware replacement are all available as standalone or combined services.` },
      { question: `Can furniture repair be done at home in ${cityName}?`, answer: `Yes — FurniRevive's entire service is doorstep-based. Our craftsmen carry tools, foam, fabric, wood fillers, adhesives, polishes, and hardware to your home. Protective sheeting is laid during work. No transport required for most jobs.` },
      { question: `How quickly can you repair my furniture in ${cityName}?`, answer: `Technicians respond within 2–4 hours across ${cityName}. Book before noon for same-day service. For urgent repairs, call +91 92179 99355 directly. Most furniture repairs — sofa foam replacement, joint repair, upholstery — are completed in a single 2–4 hour visit.` },
      { question: `Do you repair antique and imported furniture in ${cityName}?`, answer: `Yes. Antique wooden furniture restoration, imported sofa repair, and heirloom piece restoration are available. Our craftsmen use material-appropriate techniques and finishes. Structural assessments are provided during the free doorstep inspection.` },
      { question: `Do you repair office and commercial furniture in ${cityName}?`, answer: `Yes. Office chairs, reception sofas, conference seating, restaurant furniture, and hotel room furniture are all serviced across ${cityName}. Bulk pricing is available for commercial orders. Same-day availability for urgent commercial repair requirements.` },
    ],
  },
  "Furniture Polishing": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `Looking for furniture polishing near you in ${cityName}? FurniRevive provides doorstep furniture polishing and wood refinishing across ${cityName} — a ${cityCharacter} — helping ${customerScenarios} restore the finish of wooden furniture without moving pieces to a workshop. Our craftsmen sand, fill, stain, and refinish all types of wooden furniture — sheesham, teak, mango wood, pine, MDF, and painted wood — using French polish, melamine, matte lacquer, or gloss lacquer. We handle sofas, chairs, dining tables, wardrobes, beds, cabinets, and any other wooden furniture requiring refinishing or restoration. Same-day slots available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for furniture polishing near me.",
    crossCityLinkKey: null,
    faqs: (cityName) => [
      { question: `How much does furniture polishing cost in ${cityName}?`, answer: `Furniture polishing in ${cityName} starts at ₹1,500 for a small wooden piece like a coffee table or chair. Polishing a full dining table costs ₹3,000–₹6,000. A full bedroom set (wardrobe plus bed plus side tables) refinishing typically costs ₹8,000–₹18,000 depending on wood type, finish, and repair needed. Free inspection and quote before any work begins.` },
      { question: `Can furniture polishing be done at home in ${cityName}?`, answer: `Yes — FurniRevive's furniture polishing is entirely doorstep-based. Our craftsmen carry sanding tools, stains, wood fillers, and polish to your home. Protective floor sheeting is laid before any sanding or polishing begins. No transport required.` },
      { question: `Which polish finish is best for wooden furniture?`, answer: `French polish gives the traditional high-gloss finish best suited for sheesham and teak antiques. Melamine finish is more durable, moisture-resistant, and better for modern furniture in regular use. Matte lacquer gives a contemporary low-sheen look. Our craftsman recommends the best finish based on wood type, usage, and existing furniture.` },
      { question: `Can scratches, watermarks, and stains on wooden furniture be fixed with polishing?`, answer: `Yes. Surface scratches and light watermarks are removed through sanding before the new finish is applied. Deeper dents are filled with wood filler, sanded smooth, and blended into the surrounding finish. Severe watermarks or heat marks may require full strip and refinish, which our team can assess during the free inspection.` },
      { question: `How long does furniture polishing take in ${cityName}?`, answer: `Polishing a single item (a chair or small table) takes 3–5 hours. A full dining set takes 6–10 hours. Bedroom set refinishing may take 2 days for multi-coat French polish with drying time between coats. The timeline and drying requirements are communicated before work begins.` },
      { question: `Do you polish both old antique furniture and modern wooden furniture?`, answer: `Yes. We restore antique sheesham and teak furniture using traditional French polish techniques, and refinish modern furniture (MDF, engineered wood, painted wood) with contemporary melamine or lacquer finishes. Our craftsmen select the appropriate technique for each piece.` },
    ],
  },
  "Sofa Repair": {
    para1: (cityName, cityCharacter, customerScenarios) =>
      `FurniRevive technicians are stationed across ${cityName} — a ${cityCharacter} — so skilled help is always close at hand. We serve ${customerScenarios}, bringing all foam, fabric, springs, and tools directly to your door. Our team repairs fabric sofas, leather sofas, recliners, wooden sofas, sofa cum beds, and upholstery at your doorstep — no transport needed, no workshop wait. Same-day slots are available six days a week.`,
    whatsappText: "Hi! I'd like to get a quotation for sofa repair near me.",
    crossCityLinkKey: null,
    faqs: () => [],
  },
};

function getServiceConfig(serviceLabel: string): ServiceConfig {
  return SERVICE_CONFIG[serviceLabel] ?? SERVICE_CONFIG["Sofa Repair"];
}

// ─── Component ─────────────────────────────────────────────────────────────

export interface NearMeSectionProps {
  city: CityKey;
  serviceLabel?: string;
}

const TRUST_SIGNALS = [
  "5,000+ Sofas Repaired",
  "10+ Years Experience",
  "Same-Day Home Visits",
  "6-Month Warranty",
  "Free Inspection",
  "WhatsApp Booking",
] as const;

export default function NearMeSection({ city, serviceLabel = "Sofa Repair" }: NearMeSectionProps) {
  const cfg = CITY_CONFIGS[city];
  const svcCfg = getServiceConfig(serviceLabel);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(svcCfg.whatsappText)}`;
  if (!cfg) return null;

  const faqs =
    serviceLabel === "Sofa Repair"
      ? cfg.faqs
      : svcCfg.faqs(cfg.name);

  const crossCityLinks = POPULAR_CITIES.filter((c) => c.key !== city).map((c) => {
    const targetCityConfig = CITY_CONFIGS[c.key as CityKey];
    const href =
      svcCfg.crossCityLinkKey && targetCityConfig
        ? targetCityConfig.serviceLinks[svcCfg.crossCityLinkKey]
        : c.href;
    return { key: c.key, label: c.label, href };
  });

  return (
    <section
      className="py-12 lg:py-18 bg-primary/5"
      aria-labelledby={`near-me-heading-${city}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 */}
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="size-6 text-primary shrink-0 mt-1" aria-hidden="true" />
          <h2
            id={`near-me-heading-${city}`}
            className="text-2xl sm:text-3xl font-serif font-bold"
          >
            {serviceLabel} Near Me in {cfg.name}
          </h2>
        </div>

        {/* Response time — surfaced early */}
        <p className="ml-9 mb-5 text-sm font-semibold text-primary flex items-center gap-2">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          Technicians reach most {cfg.name} locations within {cfg.responseTime}.
        </p>

        {/* Para 1 — service-specific */}
        <p className="text-foreground/90 leading-relaxed text-base lg:text-lg ml-9 mb-4">
          {svcCfg.para1(cfg.name, cfg.cityCharacter, cfg.customerScenarios)}
        </p>

        {/* Para 2 — coverage breadth */}
        <p className="text-foreground/90 leading-relaxed text-base lg:text-lg ml-9 mb-5">
          Our {cfg.name} coverage spans every residential and commercial property type — gated
          apartment societies, independent houses, {cfg.residentialSocieties.slice(0, 2).join(", ")},
          and more. We also serve{" "}
          {cfg.commercialTypes.join(", ")}, where upholstery maintenance is a regular requirement.
          From a quick foam replacement in a studio apartment to a full sectional restoration in a
          villa, our doorstep service handles it all. See our{" "}
          <Link to={cfg.serviceLinks.furnitureRepair} className="text-primary underline underline-offset-2 hover:text-primary/80">
            furniture repair service in {cfg.name}
          </Link>{" "}
          for the complete scope.
        </p>

        {/* Trust signal chips */}
        <div className="flex flex-wrap gap-2.5 ml-9 mb-8" role="list" aria-label="Service highlights">
          {TRUST_SIGNALS.map((signal) => (
            <span
              key={signal}
              role="listitem"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
            >
              <CheckCircle2 className="size-3.5" aria-hidden="true" />
              {signal}
            </span>
          ))}
        </div>

        {/* Areas We Serve */}
        <div className="ml-9 mb-8">
          <h3 className="text-base font-semibold text-foreground mb-3">
            Areas We Serve in {cfg.name}
          </h3>
          <div
            className="flex flex-wrap gap-2"
            role="list"
            aria-label={`Areas covered in ${cfg.name}`}
          >
            {cfg.localities.map((area) => (
              <span
                key={area}
                role="listitem"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/60 border border-border rounded-full text-sm text-foreground"
              >
                <MapPin className="size-3 text-primary" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Landmark / local trust prose */}
        <p className="text-foreground/80 leading-relaxed text-base italic ml-9 mb-8">
          Fastest response near {cfg.landmarks.join(", ")}. Our locally stationed technicians
          complete{" "}
          <Link to={cfg.serviceLinks.upholstery} className="text-primary underline underline-offset-2 not-italic hover:text-primary/80">
            sofa upholstery
          </Link>
          ,{" "}
          <Link to={cfg.serviceLinks.foam} className="text-primary underline underline-offset-2 not-italic hover:text-primary/80">
            foam replacement
          </Link>
          , and{" "}
          <Link to={cfg.serviceLinks.recliner} className="text-primary underline underline-offset-2 not-italic hover:text-primary/80">
            recliner repair
          </Link>{" "}
          jobs every day across {cfg.name} homes — apartments, villas, offices, restaurants,
          cafes, and hotels alike. Transparent{" "}
          <Link to={cfg.serviceLinks.pricing} className="text-primary underline underline-offset-2 not-italic hover:text-primary/80">
            pricing
          </Link>{" "}
          starting ₹800 with a free doorstep inspection before any work begins.
        </p>

        {/* FAQs */}
        <div className="ml-9">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Frequently Asked Questions — {cfg.name}
          </h3>
          <dl className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-lg border border-border bg-background px-5 py-4"
              >
                <dt className="font-semibold text-foreground text-sm mb-1.5">
                  {faq.question}
                </dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* CTA strip */}
        <div className="ml-9 mt-8 flex flex-wrap gap-3">
          <a href={`tel:${PHONE_NUMBER}`} aria-label={`Call FurniRevive for ${serviceLabel} in ${cfg.name}`}>
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp FurniRevive for ${serviceLabel} in ${cfg.name}`}
          >
            <span className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#20bd5a] transition-colors">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </span>
          </a>
        </div>

        {/* Cross-city authority links */}
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Also available in
          </p>
          <div className="flex flex-wrap gap-2">
            {crossCityLinks.map((c) => (
              <Link
                key={c.key}
                to={c.href}
                className="text-sm text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
              >
                {serviceLabel} {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
