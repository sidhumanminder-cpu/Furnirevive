import type { SeoPageData } from "@/lib/seo-constants.ts";

// ---------------------------------------------------------------------------
// MOHALI HUB PAGES
// ---------------------------------------------------------------------------

const MOHALI_RELATED_PAGES = [
  { label: "Sofa Repair Mohali", href: "/sofa-repair-mohali" },
  { label: "Recliner Repair Mohali", href: "/recliner-repair-mohali" },
  { label: "Furniture Repair Mohali", href: "/furniture-repair-mohali" },
  { label: "Sofa Upholstery Mohali", href: "/sofa-upholstery-mohali" },
  { label: "Office Chair Repair Mohali", href: "/office-chair-repair-mohali" },
  { label: "Same Day Sofa Repair Mohali", href: "/same-day-sofa-repair-mohali" },
  { label: "Doorstep Sofa Repair Mohali", href: "/doorstep-sofa-repair-mohali" },
  { label: "Leather Sofa Repair Mohali", href: "/leather-sofa-repair-mohali" },
  { label: "Carpenter Home Service Mohali", href: "/carpenter-home-service-mohali" },
  { label: "Sofa Repair Cost Mohali", href: "/sofa-repair-cost-mohali" },
  { label: "Recliner Repair Cost Mohali", href: "/recliner-repair-cost-mohali" },
  { label: "Furniture Repair Cost Mohali", href: "/furniture-repair-cost-mohali" },
  { label: "Sofa Repair Chandigarh", href: "/sofa-repair-chandigarh" },
  { label: "Furniture Repair Chandigarh", href: "/furniture-repair-chandigarh" },
];

function mohaliRelatedExcluding(slug: string) {
  return MOHALI_RELATED_PAGES.filter((p) => p.href !== `/${slug}`);
}

// ── Tier 1 — Core service hubs ─────────────────────────────────────────────

export const sofaRepairMohali: SeoPageData = {
  slug: "sofa-repair-mohali",
  cityKey: "mohali" as const,
  title: "Sofa Repair in Mohali from ₹800 | Same-Day Doorstep Service | FurniRevive",
  metaDescription:
    "Professional sofa repair in Mohali from ₹800. Same-day doorstep service in Phase 1–11, Sector 58–79, Aerocity, IT City, Kharar & Zirakpur. Foam, spring, upholstery, recliner repair. Free inspection. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Sofa repair in Mohali costs ₹800–₹4,500 for most repairs — foam replacement ₹1,200–₹3,500, spring repair ₹800–₹2,000, upholstery ₹2,000–₹4,500 per seat. FurniRevive provides same-day home service across all Mohali phases, Aerocity, IT City, Kharar, and Zirakpur with free inspection and a 6-month written warranty. Call +91 92179 99355.",
  h1: "Sofa Repair in Mohali — Doorstep Service from ₹800",
  heroSubtitle:
    "Mohali's trusted sofa repair — at your doorstep across all phases, Aerocity, IT City, Sunny Enclave, Kharar & Zirakpur. Starting ₹800. Free inspection. 6-month warranty.",
  showcaseImage: {
    heading: "Sofa Repair Before & After — Real Results in Mohali",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Before and after sofa repair in Mohali showing cushion restoration and fabric change by FurniRevive",
    caption: "Sofa Repair Mohali — Fabric & foam restoration | All Phases | Starting ₹800 | FurniRevive",
  },
  intro: [
    "Mohali has rapidly evolved from a quiet satellite town into a modern urban hub with premium apartments in Phase 7, luxury villas near Punjab Cricket Stadium, tech-professional homes in IT City, and contemporary high-rises in Aerocity. These modern interiors feature designer sofas that develop sagging cushions, torn upholstery, and cracked leather after years of daily use. FurniRevive brings expert sofa repair to every corner of Mohali — from Phase 1 to Sector 79.",
    "Our skilled upholstery specialists serve all Mohali localities — Phase 1, 2, 3A, 3B, 4, 5, 6, 7, 8, 9, 10, 11, Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. We arrive with high-density foam, premium fabrics, springs, and professional tools to complete repairs in a single visit at your home. Also serving <a href=\"/sofa-repair-chandigarh\">Chandigarh</a> and Panchkula.",
    "Why spend ₹30,000–₹1,00,000 on a new sofa when expert repair costs ₹800–₹12,000 and makes your existing piece look and feel brand new? Every repair includes a 6-month warranty and transparent pricing — no hidden charges. Check our <a href=\"/sofa-repair-cost-mohali\">sofa repair cost guide for Mohali</a> for detailed pricing.",
    "Mohali's modern construction with central air conditioning means sofas dry out faster indoors, accelerating foam compression and leather surface cracking. Our technicians understand these specific wear patterns in Mohali's high-rise apartments and use materials rated for prolonged indoor climate conditions. Same-day service available when booked before noon — call +91 92179 99355.",
  ],
  whyChoose: [
    { title: "All Mohali Localities Covered", description: "We serve every phase (1–11), all sectors (58–79), Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur — complete Mohali coverage." },
    { title: "Same Day Doorstep Service", description: "Book before noon for same-day sofa repair. Our technicians arrive with all materials — no second visits needed." },
    { title: "Affordable from ₹800", description: "Mohali's most competitive sofa repair rates. Save 50–70% compared to buying new. Transparent quotes with no hidden charges." },
    { title: "Experienced Specialists", description: "10+ years experience handling fabric, leather, rexine, and all sofa materials common in Mohali's modern apartments with expert precision." },
    { title: "High-Rise Friendly", description: "Experienced with Mohali's premium apartments — Aerocity towers, Phase 7 complexes, GMADA flats. We coordinate with society security seamlessly." },
    { title: "6 Month Warranty", description: "Every sofa repair backed by a written 6-month warranty. Any issue within warranty period fixed free at your Mohali home." },
  ],
  process: [
    { step: "Book Your Appointment", description: "Call +91 92179 99355, WhatsApp, or book online. Share photos of the damage for a quick Mohali-specific estimate." },
    { step: "Free Doorstep Inspection", description: "Our specialist visits your Mohali home, inspects the sofa thoroughly, and provides a detailed no-obligation quotation on the spot." },
    { step: "On-Site Repair", description: "Approved? Our craftsmen repair your sofa right at your doorstep with premium materials — foam, fabric, springs, hardware." },
    { step: "Quality Check & Warranty", description: "Final inspection, workspace cleanup, and 6-month warranty card handed over. Your sofa is ready to use immediately." },
  ],
  benefits: [
    "Save 50–70% vs buying a new sofa",
    "Doorstep service across all Mohali phases and sectors",
    "Same-day availability when booked before noon",
    "All sofa types — L-shape, recliner, sectional, sofa cum bed",
    "Fabric, leather, and rexine sofa repair",
    "High-density branded foam (32–40 density)",
    "Frame reinforcement and spring replacement",
    "Recliner mechanism repair — manual and motorised",
    "Apartment and high-rise friendly service",
    "Starting at just ₹800",
    "6-month warranty on all repairs",
    "Free inspection and transparent pricing",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services We Offer in Mohali",
      body: [
        "FurniRevive's Mohali sofa repair covers every issue your sofa can develop. Cushion re-stuffing with Sleepwell and Duraflex branded HR foam (32–40 density) restores sagging seats to factory firmness. Complete fabric re-upholstery with 500+ material options — cotton, velvet, linen, microfibre, rexine, and leatherette — gives your sofa a fresh new look tailored to Mohali's contemporary interiors.",
        "For structural damage, our carpenters handle frame repair, wooden joint reinforcement with industrial adhesives, spring replacement with heavy-gauge steel, and complete frame rebuilding. We also specialise in <a href=\"/leather-sofa-repair-mohali\">leather sofa repair</a> (crack filling, colour restoration, conditioning) and <a href=\"/recliner-repair-mohali\">recliner mechanism repair</a> (manual and motorised). <a href=\"/sofa-upholstery-mohali\">Full sofa upholstery change</a> available with doorstep fabric selection.",
      ],
    },
    {
      heading: "Areas We Serve for Sofa Repair in Mohali",
      body: [
        "We provide doorstep sofa repair across all Mohali localities. Phase 1, Phase 2, Phase 3A, Phase 3B, Phase 4, Phase 5, Phase 6, Phase 7, Phase 8, Phase 9, Phase 10, Phase 11, Sector 58, Sector 60, Sector 66, Sector 67, Sector 68, Sector 69, Sector 70, Sector 71, Sector 74, Sector 76, Sector 78, Sector 79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur.",
        "Whether you live in a GMADA flat near Punjab Cricket Stadium, a luxury apartment in Aerocity, a modern villa in Phase 10, or an independent house in Kharar — our technicians reach you on time with all materials. Also serving <a href=\"/sofa-repair-chandigarh\">Chandigarh</a> and Panchkula with the same quality and pricing.",
      ],
    },
    {
      heading: "Sofa Repair Cost in Mohali — Transparent Pricing",
      body: [
        "Sofa repair in Mohali starts at ₹800 for basic spring fixes. Foam replacement costs ₹1,200–₹3,500 per seat depending on density. Fabric re-upholstery ranges from ₹2,000–₹4,500 per seat. Complete 3-seater sofa restoration: ₹3,000–₹12,000 depending on damage extent and materials chosen.",
        "Professional sofa repair saves Mohali families 50–70% compared to buying new. A sofa costing ₹40,000 new can be fully restored for ₹4,000–₹10,000. We provide a free doorstep inspection and written quote before starting — no hidden charges. For full pricing details see our <a href=\"/sofa-repair-cost-mohali\">Mohali sofa repair cost guide</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Repair Cost in Mohali — 2026 Price Guide",
    rows: [
      { service: "Sofa Foam Replacement (per seat)", price: "₹1,200–₹3,500" },
      { service: "Sofa Spring Repair", price: "₹800–₹2,000" },
      { service: "Sofa Upholstery / Fabric Change (per seat)", price: "₹2,000–₹4,500" },
      { service: "Leather Sofa Repair", price: "₹1,500–₹5,000" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹5,500" },
      { service: "Complete 3-Seater Restoration", price: "₹3,000–₹12,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  faqs: [
    { question: "How much does sofa repair cost in Mohali?", answer: "Sofa repair in Mohali starts at ₹800. Foam replacement ₹1,200–₹3,500, spring repair ₹800–₹2,000, upholstery per seat ₹2,000–₹4,500, recliner repair ₹1,499–₹5,500. Free inspection and written quote at your doorstep. Call +91 92179 99355." },
    { question: "Do you provide sofa repair in all Mohali phases?", answer: "Yes — FurniRevive covers all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Same-day service available across all areas." },
    { question: "Is same-day sofa repair available in Mohali?", answer: "Yes. Book before noon for same-day sofa repair at your Mohali address. Most repairs — foam replacement, spring fixing, upholstery patching — completed in 2–4 hours in a single visit." },
    { question: "Do you serve Chandigarh from Mohali?", answer: "Yes. Our Mohali team extends coverage to all Chandigarh UT sectors and Panchkula. Same pricing and warranty apply across the entire Tricity region." },
    { question: "Do you repair sofas in Mohali high-rise apartments?", answer: "Yes. We regularly work in Mohali's high-rise complexes — Aerocity towers, Phase 7 apartments, GMADA flats. Our team coordinates with society security and works efficiently in apartment spaces." },
  ],
  relatedPages: mohaliRelatedExcluding("sofa-repair-mohali"),
  keywords: [
    "sofa repair mohali",
    "sofa repair near me mohali",
    "sofa repair cost mohali",
    "sofa foam replacement mohali",
    "sofa upholstery mohali",
    "leather sofa repair mohali",
    "recliner repair mohali",
    "sofa repair aerocity mohali",
    "sofa repair phase 7 mohali",
    "sofa repair kharar",
  ],
};

export const reclinerRepairMohali: SeoPageData = {
  slug: "recliner-repair-mohali",
  cityKey: "mohali" as const,
  title: "Recliner Repair in Mohali from ₹1,499 | Manual & Motorised | FurniRevive",
  metaDescription:
    "Expert recliner repair in Mohali from ₹1,499. Manual & motorised recliner mechanism fix, motor replacement, upholstery repair. Same-day doorstep service across all phases, Aerocity, IT City & Kharar. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Recliner repair in Mohali costs ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000, motorised motor replacement ₹2,999–₹5,500, upholstery repair ₹1,500–₹4,000. FurniRevive provides same-day doorstep service across all Mohali phases, Aerocity, and IT City with free inspection and 6-month warranty. Call +91 92179 99355.",
  h1: "Recliner Repair in Mohali — Manual & Motorised from ₹1,499",
  heroSubtitle:
    "Mohali's specialist recliner repair service — mechanism fixes, motor replacements, and upholstery restoration at your doorstep. All major brands covered. Same-day service. 6-month warranty.",
  showcaseImage: {
    heading: "Recliner Repair Before & After — Mohali",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Recliner mechanism repair in Mohali showing motor and upholstery restoration by FurniRevive",
    caption: "Recliner Repair Mohali — Mechanism & upholstery fix | From ₹1,499 | FurniRevive",
  },
  intro: [
    "Mohali's IT professionals and modern families have embraced recliners as essential furniture — from premium La-Z-Boy units in Phase 7 villas to affordable motorised recliners in Aerocity apartments. When the mechanism jams, the motor fails, or the leather deteriorates in Mohali's air-conditioned interiors, you need a specialist — not a general carpenter. FurniRevive is Mohali's dedicated recliner repair service.",
    "We repair all recliner types at your doorstep: manual pull-cable recliners, lever-operated mechanisms, single-motor electric recliners, and dual-motor lift chairs. Our technicians carry replacement motors, actuators, cables, remote units, and upholstery materials for same-day resolution across all Mohali phases, Aerocity, IT City, Kharar, and Zirakpur. Also serving <a href=\"/recliner-repair-chandigarh\">Chandigarh</a>.",
    "Manual recliner repair starts at ₹1,499 and motorised repair from ₹2,999. Every fix includes a 6-month warranty. For full pricing, see our <a href=\"/recliner-repair-cost-mohali\">recliner repair cost guide for Mohali</a>. We also handle <a href=\"/leather-sofa-repair-mohali\">leather upholstery restoration</a> on recliner seats.",
  ],
  whyChoose: [
    { title: "Dedicated Recliner Specialists", description: "Our technicians are trained exclusively on recliner mechanisms — manual, motorised, and dual-motor. Not general carpenters." },
    { title: "All Brands Covered", description: "La-Z-Boy, Eezy, Durian, Nilkamal, HTL, Urban Ladder, and all local brands. We carry brand-specific replacement parts." },
    { title: "Same Day Motor Replacement", description: "Common recliner motors stocked for same-day electrical repair. No waiting weeks for parts to arrive." },
    { title: "Doorstep Service Across Mohali", description: "All phases, sectors, Aerocity, IT City, Kharar, Landran, and Zirakpur covered. We come to you with all tools and parts." },
    { title: "Transparent Pricing", description: "Manual repair from ₹1,499, motorised from ₹2,999. Written quote before work begins. No hidden charges." },
    { title: "6 Month Warranty", description: "All mechanism and motor repairs backed by a written 6-month warranty. Parts and labour both covered." },
  ],
  process: [
    { step: "Describe the Fault", description: "Call +91 92179 99355 or WhatsApp a video of the recliner issue. We identify the likely fault and confirm parts availability." },
    { step: "Doorstep Diagnosis", description: "Our recliner specialist visits your Mohali home, diagnoses the exact issue, and provides a written quote." },
    { step: "On-Site Repair", description: "Mechanism rebuilt, motor replaced, or upholstery restored right at your home. Most repairs completed in 1–3 hours." },
    { step: "Testing & Warranty", description: "Full cycle testing of all positions, cleanup, and 6-month warranty card issued." },
  ],
  benefits: [
    "Manual recliner mechanism repair from ₹1,499",
    "Motorised recliner motor replacement from ₹2,999",
    "Same-day service with common motors in stock",
    "All major recliner brands covered",
    "Pull cable, lever, and remote mechanism fixes",
    "Leather and fabric recliner upholstery repair",
    "Footrest, backrest, and headrest mechanism repair",
    "Actuator and transformer replacement",
    "Full Mohali and Tricity coverage",
    "6-month warranty on parts and labour",
  ],
  contentSections: [
    {
      heading: "Recliner Repair Services in Mohali",
      body: [
        "Our Mohali recliner repair covers every fault type. Manual mechanism issues: broken pull cables, jammed levers, stiff footrests, worn locking pins, and broken side-release handles. Motorised faults: burnt-out lift motors, failed actuators, unresponsive remotes, transformer failures, and overheating cut-outs.",
        "We also handle recliner upholstery problems — cracked leather on headrests and armrests (common in Mohali's air-conditioned apartments where leather dries out), torn fabric on seat panels, and sagging recliner cushion foam. For leather-specific work, see our <a href=\"/leather-sofa-repair-mohali\">leather sofa repair Mohali</a> service.",
      ],
    },
    {
      heading: "Recliner Repair Areas in Mohali",
      body: [
        "Same-day recliner repair across: Phase 1 through 11, Sector 58, 60, 66, 67, 68, 69, 70, 71, 74, 76, 78, 79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Extended same-day coverage to <a href=\"/recliner-repair-chandigarh\">Chandigarh</a> and Panchkula.",
        "Mohali's modern apartment complexes near GMADA office and Punjab Cricket Stadium area have high recliner density — our technicians carry brand-specific parts and navigate society security protocols smoothly.",
      ],
    },
    {
      heading: "Recliner Repair Cost in Mohali",
      body: [
        "Manual recliner repair: ₹1,499–₹3,000 depending on mechanism type. Motorised motor replacement: ₹2,999–₹5,500 depending on brand and motor type. Actuator replacement: ₹2,000–₹3,500. Remote/transformer: ₹800–₹2,000. Upholstery repair on recliners: ₹1,500–₹4,000.",
        "Full recliner sofa set repairs (3-piece with 2 recliners): ₹4,000–₹12,000 depending on faults. Free doorstep diagnosis included. See the full <a href=\"/recliner-repair-cost-mohali\">recliner repair cost breakdown for Mohali</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Recliner Repair Cost in Mohali — 2026 Pricing",
    rows: [
      { service: "Manual Recliner Mechanism Repair", price: "₹1,499–₹3,000" },
      { service: "Motorised Recliner Motor Replacement", price: "₹2,999–₹5,500" },
      { service: "Actuator Replacement", price: "₹2,000–₹3,500" },
      { service: "Remote / Transformer Repair", price: "₹800–₹2,000" },
      { service: "Recliner Upholstery Repair", price: "₹1,500–₹4,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  faqs: [
    { question: "Do you repair motorised recliners in Mohali?", answer: "Yes. We repair all motorised recliners — single-motor, dual-motor, and lift-chair types. Motor replacement, actuator repair, remote sync, and transformer replacement all done at your Mohali doorstep. Starting ₹2,999." },
    { question: "Which recliner brands do you repair in Mohali?", answer: "We repair all brands — La-Z-Boy, Eezy, Durian, Nilkamal, HTL, Urban Ladder, Pepperfry, Royaloak, Godrej Interio, and local unbranded recliners. Brand-specific parts carried for same-day service." },
    { question: "How long does recliner repair take in Mohali?", answer: "Most recliner repairs in Mohali are completed in 1–3 hours at your home. Motor replacement takes 1–2 hours. Mechanism rebuilds take 2–3 hours. Same-day service when booked before noon." },
    { question: "Do you cover Chandigarh for recliner repair?", answer: "Yes. Our recliner repair extends to all Chandigarh UT sectors and Panchkula. Same pricing, warranty, and same-day availability as Mohali." },
  ],
  relatedPages: mohaliRelatedExcluding("recliner-repair-mohali"),
  keywords: [
    "recliner repair mohali",
    "recliner repair near me mohali",
    "motorised recliner repair mohali",
    "recliner mechanism repair mohali",
    "la-z-boy repair mohali",
    "recliner motor replacement mohali",
    "recliner repair aerocity mohali",
    "recliner repair cost mohali",
    "recliner repair kharar",
  ],
};

export const furnitureRepairMohali: SeoPageData = {
  slug: "furniture-repair-mohali",
  cityKey: "mohali" as const,
  title: "Furniture Repair in Mohali from ₹599 | Doorstep Service All Phases | FurniRevive",
  metaDescription:
    "Expert furniture repair in Mohali from ₹599. Sofa, bed, chair, wardrobe, table repair at your doorstep across all phases, Aerocity, IT City, Kharar & Zirakpur. Same-day service. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Furniture repair in Mohali starts at ₹599. Sofa repair from ₹800, bed repair ₹599–₹3,000, chair repair ₹500–₹2,500, wardrobe repair ₹800–₹4,000. FurniRevive provides same-day doorstep service across all Mohali phases, Aerocity, IT City, and Kharar with free inspection and 6-month warranty. Call +91 92179 99355.",
  h1: "Furniture Repair in Mohali — All Types from ₹599",
  heroSubtitle:
    "Complete furniture repair across Mohali — sofas, beds, chairs, tables, wardrobes, and cabinets repaired at your doorstep. Starting ₹599. Free inspection. 6-month warranty.",
  showcaseImage: {
    heading: "Furniture Repair Mohali — Professional Doorstep Restoration",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Professional furniture repair in Mohali showing wardrobe and chair restoration by FurniRevive",
    caption: "Furniture Repair Mohali — All furniture types | Starting ₹599 | FurniRevive",
  },
  intro: [
    "Mohali's rapid urban expansion — from the established Phase 1–5 colonies to the modern high-rises of Phase 10, Aerocity, and IT City — means homes are filled with a mix of solid older furniture and contemporary modular pieces. When any piece develops a fault — loose joints, broken hinges, sagging beds, or chipped polish — professional repair is the practical choice over expensive replacement.",
    "FurniRevive provides comprehensive furniture repair services across all Mohali phases, sectors 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Our team of experienced carpenters, polishers, and upholstery specialists handle every furniture type — wooden, metal, engineered wood, and upholstered pieces. Also serving <a href=\"/furniture-repair-chandigarh\">Chandigarh</a> and Panchkula.",
    "Prices start at just ₹599 for basic repairs and every job comes with a 6-month warranty. Our <a href=\"/carpenter-home-service-mohali\">carpenter home service</a> covers everything from minor hinge replacements to full furniture restoration. Check our <a href=\"/furniture-repair-cost-mohali\">furniture repair cost guide for Mohali</a> for detailed pricing.",
    "Mohali's newer constructions (Phase 7–11, Aerocity) feature modular and engineered-wood furniture that requires specific repair techniques different from solid wood. Our specialists are trained on both — MDF edge banding, laminate repairs, soft-close mechanisms, and traditional joinery.",
  ],
  whyChoose: [
    { title: "Every Furniture Type", description: "Sofas, beds, chairs, dining tables, wardrobes, kitchen cabinets, TV units, bookshelves, office desks — all repaired at your Mohali doorstep." },
    { title: "Skilled Carpenters & Polishers", description: "Our team brings 10+ years of experience with solid wood, engineered wood, MDF, metal, and upholstered furniture repair." },
    { title: "Full Mohali Coverage", description: "All phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, Zirakpur, and extended Tricity." },
    { title: "Affordable from ₹599", description: "Basic repairs start at ₹599. Save 50–70% vs replacement. Transparent pricing with no hidden charges." },
    { title: "Same Day Response", description: "Book before noon for same-day furniture repair. Our carpenters are stationed across Mohali for rapid response." },
    { title: "6 Month Warranty", description: "All furniture repairs backed by a written 6-month warranty. Parts and workmanship both covered." },
  ],
  process: [
    { step: "Share the Problem", description: "Call +91 92179 99355 or WhatsApp photos of your furniture issue. We provide a quick estimate for your Mohali address." },
    { step: "Free Doorstep Inspection", description: "Our carpenter visits your home, inspects the furniture, and provides a detailed written quotation." },
    { step: "On-Site Repair", description: "Once approved, repair is completed at your doorstep with professional tools and premium materials." },
    { step: "Warranty Handover", description: "Quality check, workspace cleanup, and 6-month warranty card issued. Furniture ready for immediate use." },
  ],
  benefits: [
    "Doorstep service across all Mohali phases and sectors",
    "Sofa, bed, chair, table, wardrobe repair",
    "Solid wood joint reinforcement and restoration",
    "Polish and refinishing for wooden furniture",
    "Hydraulic bed storage mechanism repair",
    "Wardrobe hinge, slider, and shutter repair",
    "Upholstery work — fabric, leather, rexine",
    "Office furniture and bulk repair available",
    "Same-day service for urgent requests",
    "Starting at just ₹599",
    "6-month warranty on all repairs",
    "Extended coverage to Chandigarh and Panchkula",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Services in Mohali",
      body: [
        "Our Mohali furniture repair covers the complete range. For beds: headboard fixing, slat replacement, hydraulic storage repair, frame reinforcement, and side rail repair. For chairs: re-gluing loose joints, seat replacement, armrest repair, and office chair gas lift and wheel replacement.",
        "Wardrobes and cabinets: hinge replacement, slider track repair, shelf reinforcement, shutter alignment, soft-close fitting, and lock replacement. Dining tables: leg reinforcement, surface scratches and stains, extension mechanism repair, and complete refinishing. All at your Mohali doorstep. Also see our <a href=\"/sofa-repair-mohali\">dedicated sofa repair service</a> and <a href=\"/office-chair-repair-mohali\">office chair repair</a>.",
      ],
    },
    {
      heading: "Furniture Repair Coverage — All Mohali Areas",
      body: [
        "Full doorstep coverage across: Phase 1, 2, 3A, 3B, 4, 5, 6, 7, 8, 9, 10, 11, Sector 58, 60, 66, 67, 68, 69, 70, 71, 74, 76, 78, 79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Key landmarks served include Punjab Cricket Stadium area, Mohali Railway Station vicinity, and GMADA complex.",
        "Mohali's newer apartments (Phase 7–11, Aerocity) often have modular furniture with soft-close mechanisms and engineered wood that requires specialised handling. Our carpenters are trained on both traditional and modern furniture systems.",
      ],
    },
    {
      heading: "Furniture Repair Pricing in Mohali",
      body: [
        "Basic furniture repairs start at ₹599 in Mohali. Chair repair: ₹500–₹2,500. Bed repair: ₹599–₹3,000. Wardrobe repair: ₹800–₹4,000. Table repair: ₹500–₹3,000. Polish and refinishing: ₹1,500–₹8,000 depending on size. Complete furniture restoration: ₹2,000–₹15,000.",
        "We always provide a free doorstep inspection and written quote before starting work. See our detailed <a href=\"/furniture-repair-cost-mohali\">furniture repair cost guide for Mohali</a> for service-wise pricing breakdowns.",
      ],
    },
  ],
  priceTable: {
    heading: "Furniture Repair Cost in Mohali — 2026 Price Guide",
    rows: [
      { service: "Chair Repair (dining/study)", price: "₹500–₹2,500" },
      { service: "Bed Frame Repair", price: "₹599–₹3,000" },
      { service: "Wardrobe / Cabinet Repair", price: "₹800–₹4,000" },
      { service: "Table Repair (dining/study)", price: "₹500–₹3,000" },
      { service: "Polish & Refinishing", price: "₹1,500–₹8,000" },
      { service: "Sofa Repair", price: "₹800–₹12,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  faqs: [
    { question: "What furniture do you repair in Mohali?", answer: "We repair all furniture — sofas, beds, chairs, dining tables, wardrobes, kitchen cabinets, TV units, bookshelves, office desks, dressing tables, and shoe racks. Wooden, metal, engineered wood, and upholstered pieces all covered." },
    { question: "Do you repair furniture in Aerocity and IT City?", answer: "Yes. Our Mohali coverage fully includes Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur — same pricing and warranty as all other Mohali areas." },
    { question: "How much does furniture repair cost in Mohali?", answer: "Basic furniture repair starts at ₹599. Prices vary by furniture type and damage — chair repair ₹500–₹2,500, bed repair ₹599–₹3,000, wardrobe repair ₹800–₹4,000. Free inspection with written quote provided." },
    { question: "Do you polish and refinish wooden furniture in Mohali?", answer: "Yes. Our polishers handle melamine, PU, French polish, and lacquer finishes on all wooden furniture. Polish and refinishing costs ₹1,500–₹8,000 depending on the piece size and finish type." },
    { question: "Can you repair modular furniture in Mohali apartments?", answer: "Yes. We specialise in modular furniture repairs common in Mohali's newer apartments — soft-close hinges, MDF edge banding, laminate panels, drawer channels, and modular wardrobe systems." },
  ],
  relatedPages: mohaliRelatedExcluding("furniture-repair-mohali"),
  keywords: [
    "furniture repair mohali",
    "furniture repair near me mohali",
    "carpenter mohali",
    "furniture repair cost mohali",
    "wardrobe repair mohali",
    "bed repair mohali",
    "chair repair mohali",
    "furniture polish mohali",
    "furniture repair aerocity mohali",
    "furniture repair kharar",
  ],
};

export const sofaUpholsteryMohali: SeoPageData = {
  slug: "sofa-upholstery-mohali",
  cityKey: "mohali" as const,
  title: "Sofa Upholstery in Mohali from ₹2,000/seat | 500+ Fabrics | FurniRevive",
  metaDescription:
    "Professional sofa upholstery in Mohali from ₹2,000 per seat. 500+ fabric options — cotton, velvet, linen, microfibre, leatherette. Doorstep fabric selection and on-site re-upholstery across all phases. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Sofa upholstery in Mohali costs ₹2,000–₹4,500 per seat. Full 3-seater re-upholstery ₹6,000–₹15,000 depending on fabric. 500+ materials available — cotton, velvet, linen, microfibre, rexine, leatherette. FurniRevive provides doorstep fabric selection and on-site upholstery across all Mohali phases. Call +91 92179 99355.",
  h1: "Sofa Upholstery in Mohali — 500+ Fabrics from ₹2,000/seat",
  heroSubtitle:
    "Transform your sofa with premium re-upholstery — 500+ fabrics brought to your Mohali doorstep. Cotton, velvet, linen, microfibre, leatherette. Professional on-site fitting. 6-month warranty.",
  showcaseImage: {
    heading: "Sofa Upholstery Mohali — Fabric Selection & Transformation",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Sofa upholstery fabric change in Mohali showing before and after re-upholstery by FurniRevive",
    caption: "Sofa Upholstery Mohali — 500+ fabric options | From ₹2,000/seat | FurniRevive",
  },
  intro: [
    "Mohali's modern apartments and villas demand interiors that match their contemporary architecture. After years of daily use, even premium sofas look tired — faded fabric, pilling, stains, and worn-out textures detract from your living room's appeal. Professional re-upholstery transforms these sofas completely, and FurniRevive brings 500+ fabric options directly to your Mohali doorstep for on-site selection and fitting.",
    "Our upholstery specialists serve all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. We handle everything from single-panel patch repairs to complete sofa set re-upholstery — all done at your home in a single visit.",
    "Materials include premium cotton, Italian velvet, Belgian linen, high-grade microfibre, breathable leatherette, and genuine leather. Prices start at ₹2,000 per seat for standard fabrics. Every re-upholstery includes foam inspection and replacement recommendation if needed — see our <a href=\"/sofa-repair-mohali\">sofa repair service</a> for combined packages. Also serving <a href=\"/sofa-upholstery-chandigarh\">Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "500+ Fabric Options", description: "Cotton, velvet, linen, microfibre, rexine, leatherette, and genuine leather — all brought to your doorstep for easy comparison and selection." },
    { title: "Doorstep Fabric Selection", description: "No showroom visits needed. Our specialist brings swatch books to your Mohali home, helping you choose the perfect material and colour." },
    { title: "On-Site Fitting", description: "Complete re-upholstery done at your home in a single visit. Your sofa never leaves your living room." },
    { title: "Modern Interior Matching", description: "We recommend fabrics that complement Mohali's contemporary apartment interiors — minimalist tones, textured neutrals, and statement velvets." },
    { title: "Combined Foam + Upholstery", description: "Re-upholstering without replacing compressed foam wastes money. We inspect and recommend foam replacement where needed." },
    { title: "6 Month Warranty", description: "Stitching, fitting, and fabric durability covered under written 6-month warranty. Loose seams or premature wear addressed free." },
  ],
  process: [
    { step: "Consultation Call", description: "Call +91 92179 99355 or WhatsApp. Describe your sofa type and share photos. We confirm a doorstep consultation slot." },
    { step: "Doorstep Fabric Selection", description: "Our specialist visits with 500+ fabric swatches. You choose material, colour, and pattern with expert guidance." },
    { step: "On-Site Re-Upholstery", description: "Our team removes old fabric, inspects foam and frame, and fits new upholstery right at your Mohali home." },
    { step: "Final Fitting & Warranty", description: "Seam check, cushion fitting, cleanup, and 6-month warranty card issued." },
  ],
  benefits: [
    "500+ fabric options at your doorstep",
    "Cotton, velvet, linen, microfibre, leatherette",
    "Complete sofa set re-upholstery in one visit",
    "Foam inspection included free",
    "Panel repairs and patch work available",
    "Cushion cover stitching and replacement",
    "L-shape and sectional sofa upholstery",
    "Recliner upholstery restoration",
    "Contemporary fabric recommendations for Mohali interiors",
    "Starting ₹2,000 per seat",
    "Full Mohali coverage including Aerocity and IT City",
    "6-month warranty on all work",
  ],
  contentSections: [
    {
      heading: "Sofa Upholstery Services in Mohali",
      body: [
        "Our Mohali sofa upholstery service covers: complete sofa set re-upholstery (3+1+1, L-shape, sectional), single-panel replacement and patch repair, cushion cover stitching and replacement, piping and welt cord replacement, armrest and backrest panel repair, and recliner seat upholstery restoration.",
        "We work with all sofa types — standard 3-seaters, L-shape sectionals, modular configurations, recliners, sofa cum beds, and diwan sets. Whether you want an exact fabric match or a complete style transformation to suit Mohali's modern living spaces, our specialists guide you through the selection process at your home.",
      ],
    },
    {
      heading: "Coverage for Sofa Upholstery in Mohali",
      body: [
        "Doorstep upholstery service across: all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Key areas near Punjab Cricket Stadium, Mohali Railway Station, and GMADA office all served with priority response.",
        "Mohali's premium apartments in Phase 7 and Aerocity often have designer sofas that benefit from luxury fabric upgrades — Italian velvet, Belgian linen, and premium leatherette that complement modern interior themes without the cost of a new sofa.",
      ],
    },
    {
      heading: "Sofa Upholstery Cost in Mohali",
      body: [
        "Standard upholstery per seat: ₹2,000–₹4,500 depending on fabric chosen. Full 3-seater: ₹6,000–₹13,500. Full 3+1+1 set: ₹10,000–₹22,000. L-shape sectional: ₹8,000–₹20,000. Premium fabrics (Italian velvet, Belgian linen, genuine leather) cost more per seat.",
        "Our pricing includes professional removal of old fabric, foam inspection report, precision fitting, and seam finishing. Combined foam + upholstery packages available at discounted rates — see <a href=\"/sofa-repair-cost-mohali\">full cost guide</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Upholstery Cost in Mohali — 2026 Pricing",
    rows: [
      { service: "Upholstery Per Seat (standard fabric)", price: "₹2,000–₹4,500" },
      { service: "Full 3-Seater Re-upholstery", price: "₹6,000–₹13,500" },
      { service: "Full 3+1+1 Set", price: "₹10,000–₹22,000" },
      { service: "L-Shape Sectional Upholstery", price: "₹8,000–₹20,000" },
      { service: "Cushion Cover Stitching", price: "₹500–₹1,500" },
      { service: "Panel Patch Repair", price: "₹800–₹2,000" },
    ],
  },
  faqs: [
    { question: "How much does sofa upholstery cost in Mohali?", answer: "Sofa upholstery in Mohali costs ₹2,000–₹4,500 per seat for standard fabrics. Full 3-seater: ₹6,000–₹13,500. Premium materials like velvet and genuine leather cost more. Free doorstep fabric selection included." },
    { question: "Do you bring fabric samples to my Mohali home?", answer: "Yes. Our upholstery specialist brings 500+ fabric swatches to your Mohali home for on-the-spot selection. No showroom visit needed. You can compare materials, colours, and textures in your own lighting." },
    { question: "How long does sofa re-upholstery take in Mohali?", answer: "Single sofa: 3–5 hours. Full set (3+1+1): 6–8 hours. Most jobs completed in a single day at your home. Larger sets may require a second visit. Your sofa is ready to use immediately after completion." },
    { question: "Can you match my existing sofa fabric?", answer: "In most cases, yes. We carry a wide range of fabrics and can match colour, texture, and pattern closely. For discontinued fabrics, we recommend the closest available alternative from our 500+ options." },
  ],
  relatedPages: mohaliRelatedExcluding("sofa-upholstery-mohali"),
  keywords: [
    "sofa upholstery mohali",
    "sofa fabric change mohali",
    "sofa re-upholstery cost mohali",
    "sofa cover change mohali",
    "upholstery near me mohali",
    "sofa cloth change mohali",
    "sofa upholstery aerocity mohali",
    "sofa upholstery phase 7 mohali",
  ],
};

// ── Tier 2 — Commercial hubs ───────────────────────────────────────────────

export const officeChairRepairMohali: SeoPageData = {
  slug: "office-chair-repair-mohali",
  cityKey: "mohali" as const,
  title: "Office Chair Repair in Mohali from ₹500 | Gas Lift, Wheels, Armrest | FurniRevive",
  metaDescription:
    "Office chair repair in Mohali from ₹500. Gas lift replacement, wheel repair, armrest fix, seat foam change. Doorstep service across IT City, Aerocity, all phases. Bulk corporate rates. Call +91 92179 99355.",
  h1: "Office Chair Repair in Mohali — Gas Lift, Wheels & More from ₹500",
  heroSubtitle:
    "Professional office chair repair across Mohali's IT City, Aerocity offices, and all phases. Gas lift, wheels, armrests, tilt mechanism, and seat foam — repaired at your office or home. Bulk rates available.",
  showcaseImage: {
    heading: "Office Chair Repair Mohali — Corporate & Home Office",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Office chair gas lift and wheel repair in Mohali by FurniRevive",
    caption: "Office Chair Repair Mohali — Gas lift, wheels, armrest | From ₹500 | FurniRevive",
  },
  intro: [
    "Mohali's IT City, Phase 8B Industrial Area, Aerocity commercial complexes, and the rapidly growing co-working spaces mean thousands of office chairs are in daily use — and they wear out predictably. Sinking gas lifts, broken wheels, loose armrests, and compressed seat foam are the most common faults. FurniRevive repairs all of these at your Mohali office or home.",
    "We serve corporate offices in IT City (Infosys, Quark, other tech companies), startups in Aerocity, co-working spaces across Mohali phases, and home offices throughout the region. Bulk repair rates available for offices with 10+ chairs — significant savings compared to buying new.",
    "Single chair repair starts at ₹500. Gas lift replacement from ₹800. All repairs done on-site with minimal disruption to your workday. Also see our broader <a href=\"/furniture-repair-mohali\">furniture repair service</a> for desks, conference tables, and other office furniture. Corporate offices in <a href=\"/office-chair-repair-chandigarh\">Chandigarh IT Park</a> also covered.",
  ],
  whyChoose: [
    { title: "IT Belt Specialist", description: "We serve Mohali's entire IT corridor — IT City, Aerocity, Phase 8B. Familiar with corporate office protocols, bulk scheduling, and minimal-disruption repair." },
    { title: "Bulk Corporate Rates", description: "10+ chairs repaired at discounted rates. Ideal for IT companies, co-working spaces, and corporate offices across Mohali." },
    { title: "Minimal Disruption", description: "Repairs done at your office during working hours. Each chair takes 15–45 minutes. No need to send chairs out or disrupt operations." },
    { title: "All Chair Types", description: "Mesh ergonomic, leather executive, fabric task chairs, drafting stools, gaming chairs — all mechanisms and brands covered." },
    { title: "Genuine Replacement Parts", description: "Gas lifts, casters, armrest pads, and tilt mechanisms sourced from quality manufacturers. Not generic low-grade parts." },
    { title: "Same Day Turnaround", description: "Book before noon for same-day office chair repair. Most single-chair repairs completed in under 45 minutes." },
  ],
  process: [
    { step: "Report the Fault", description: "Call +91 92179 99355 or email. Describe chair issues and quantity. For bulk orders, we schedule a site visit." },
    { step: "On-Site Assessment", description: "Our technician assesses each chair, identifies required parts, and provides a per-chair quote." },
    { step: "Same-Day Repair", description: "Gas lift replaced, wheels swapped, armrests fixed, or foam changed — all done at your office desk." },
    { step: "Testing & Invoice", description: "Each repaired chair tested for height adjustment, tilt, and stability. GST invoice provided for corporate accounts." },
  ],
  benefits: [
    "Gas lift cylinder replacement from ₹800",
    "Caster wheel replacement (set of 5) from ₹400",
    "Armrest pad replacement and repair",
    "Tilt mechanism and synchro lock repair",
    "Seat foam replacement for compressed cushions",
    "Mesh panel repair and replacement",
    "Bulk rates for corporate offices (10+ chairs)",
    "On-site repair with minimal disruption",
    "All brands — Featherlite, Godrej, HNI, IKEA, generic",
    "Same-day turnaround available",
  ],
  contentSections: [
    {
      heading: "Office Chair Repair Services in Mohali",
      body: [
        "Common office chair repairs we handle: gas lift (pneumatic cylinder) replacement when the chair won't hold height, caster wheel replacement for broken or non-rolling wheels, armrest pad replacement and height-adjustment mechanism repair, tilt mechanism repair (synchro-tilt, multi-lock, knee-tilt), seat foam replacement for compressed cushions, and mesh panel repair for torn or sagging backs.",
        "We also repair executive leather chairs — peeling armrests, cracked seat panels, and worn headrests. For ergonomic chairs used by Mohali's tech professionals, we recalibrate lumbar support mechanisms and replace worn tension springs. All work done at your Mohali office or home.",
      ],
    },
    {
      heading: "Areas Served — Office Chair Repair Mohali",
      body: [
        "We cover all Mohali commercial zones: IT City (Quark City campus, Infosys, tech startups), Phase 8B Industrial Area, Aerocity commercial towers, and all office spaces across phases. Also serve co-working spaces and startup hubs throughout Mohali.",
        "Home office repairs available across all residential phases (1–11), Sector 58–79, Sunny Enclave, Kharar, and Zirakpur. Extended to <a href=\"/office-chair-repair-chandigarh\">Chandigarh IT Park</a> and Panchkula commercial areas.",
      ],
    },
    {
      heading: "Office Chair Repair Pricing in Mohali",
      body: [
        "Gas lift replacement: ₹800–₹1,800 (Class 3 or 4 depending on chair weight rating). Caster wheels (set of 5): ₹400–₹1,200. Armrest replacement: ₹500–₹2,000 per arm. Tilt mechanism: ₹600–₹2,500. Seat foam: ₹800–₹2,000. Mesh panel: ₹1,000–₹3,000.",
        "Bulk corporate pricing: 15–25% discount on per-chair rates for 10+ chair orders. AMC (Annual Maintenance Contract) available for offices with 50+ chairs. Contact +91 92179 99355 for custom corporate quotes.",
      ],
    },
  ],
  priceTable: {
    heading: "Office Chair Repair Cost in Mohali — 2026",
    rows: [
      { service: "Gas Lift Replacement", price: "₹800–₹1,800" },
      { service: "Caster Wheels (set of 5)", price: "₹400–₹1,200" },
      { service: "Armrest Replacement (per arm)", price: "₹500–₹2,000" },
      { service: "Tilt Mechanism Repair", price: "₹600–₹2,500" },
      { service: "Seat Foam Replacement", price: "₹800–₹2,000" },
      { service: "Mesh Panel Repair", price: "₹1,000–₹3,000" },
    ],
  },
  faqs: [
    { question: "Do you offer bulk office chair repair in Mohali?", answer: "Yes. We offer 15–25% discounted rates for 10+ chairs. IT City offices, Aerocity companies, and corporate spaces can book bulk repair with same-day turnaround. GST invoice provided." },
    { question: "How long does gas lift replacement take?", answer: "Gas lift replacement takes 15–30 minutes per chair. Done at your office desk. No need to move the chair anywhere." },
    { question: "Do you repair ergonomic chairs in Mohali?", answer: "Yes. We repair all ergonomic chairs — mesh back, synchro-tilt, adjustable lumbar, headrest mechanisms, and tension springs. Brands include Featherlite, Godrej, HNI, Herman Miller, Steelcase, and others." },
    { question: "Do you serve IT City companies?", answer: "Yes. We regularly service offices in IT City — Quark City, Infosys campus, and other tech companies. Bulk rates and AMC contracts available. Same-day service for urgent chair failures." },
  ],
  relatedPages: mohaliRelatedExcluding("office-chair-repair-mohali"),
  keywords: [
    "office chair repair mohali",
    "office chair repair near me mohali",
    "gas lift replacement mohali",
    "chair wheel repair mohali",
    "office chair repair IT city mohali",
    "bulk chair repair mohali",
    "office chair repair aerocity mohali",
  ],
};

export const sameDaySofaRepairMohali: SeoPageData = {
  slug: "same-day-sofa-repair-mohali",
  cityKey: "mohali" as const,
  title: "Same Day Sofa Repair in Mohali | Book Before Noon | FurniRevive",
  metaDescription:
    "Same-day sofa repair in Mohali — book before noon, repaired by evening. Foam, spring, upholstery, leather, recliner repair. All phases, Aerocity, IT City & Kharar. Starting ₹800. Call +91 92179 99355.",
  h1: "Same Day Sofa Repair in Mohali — Book Before Noon",
  heroSubtitle:
    "Urgent sofa repair in Mohali with same-day completion. Book before noon — our technician arrives within 4 hours with all materials. Foam, spring, upholstery, and recliner repairs completed in a single visit.",
  showcaseImage: {
    heading: "Same Day Sofa Repair Mohali — Fast Turnaround",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Same-day sofa repair service in Mohali with rapid doorstep turnaround by FurniRevive",
    caption: "Same Day Sofa Repair Mohali — Book before noon | Starting ₹800 | FurniRevive",
  },
  intro: [
    "Expecting guests at your Aerocity apartment tonight? Housewarming at your new Phase 10 flat? Can't sit comfortably on a sagging sofa? FurniRevive's same-day sofa repair in Mohali guarantees your sofa is fixed before the day ends — book before noon and our technician arrives within 4 hours with all materials needed for a single-visit repair.",
    "Same-day availability covers all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, and Kharar. We carry pre-cut foam, spring hardware, common fabrics, and recliner parts so there's no waiting for materials. Most repairs — foam replacement, spring fixing, upholstery patching — are completed in 2–4 hours.",
    "Starting at ₹800 with the same quality, materials, and 6-month warranty as our scheduled service. Same-day is simply about speed — not cutting corners. For more complex repairs that take longer, see our standard <a href=\"/sofa-repair-mohali\">sofa repair service</a>. For pricing details, check the <a href=\"/sofa-repair-cost-mohali\">Mohali cost guide</a>. Also available as <a href=\"/same-day-sofa-repair-chandigarh\">same-day in Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "Guaranteed Same-Day Arrival", description: "Book before noon — our technician arrives within 4 hours. No next-day waiting. Your sofa is fixed today." },
    { title: "Single Visit Completion", description: "We carry all common materials — foam, springs, fabric, hardware, recliner parts. No second visits for most repairs." },
    { title: "Full Mohali Coverage", description: "Same-day available across all phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, and Zirakpur." },
    { title: "No Compromise on Quality", description: "Same branded materials, same skilled craftsmen, same 6-month warranty as our scheduled service. Speed ≠ shortcuts." },
    { title: "Ideal for Mohali Professionals", description: "IT professionals with tight schedules, new home move-ins, festival prep, sudden sofa failures — same-day handles it all." },
    { title: "Transparent Same-Day Pricing", description: "Starting ₹800. No rush surcharge. Same rates as our regular service. Free inspection included." },
  ],
  process: [
    { step: "Call Before Noon", description: "Call +91 92179 99355 before noon. Share photos of the damage. We confirm same-day slot and provide an estimate." },
    { step: "Technician Arrives (2–4 hrs)", description: "Our specialist reaches your Mohali home within 4 hours with all required materials and tools." },
    { step: "Repair Completed Same Day", description: "Foam replaced, springs fixed, upholstery patched, or recliner mechanism repaired — all in a single visit." },
    { step: "Use Your Sofa Tonight", description: "Quality check, cleanup, warranty card. Your sofa is ready for use immediately." },
  ],
  benefits: [
    "Guaranteed same-day service when booked before noon",
    "Technician arrives within 4 hours of booking",
    "All common repair materials carried on-site",
    "Most repairs completed in 2–4 hours",
    "No rush surcharge — same rates as scheduled service",
    "Foam, spring, upholstery, and recliner repairs",
    "Full Mohali coverage — all phases, Aerocity, IT City",
    "Same branded materials and 6-month warranty",
    "Perfect for working professionals and urgent needs",
    "Starting at ₹800",
  ],
  contentSections: [
    {
      heading: "Same-Day Sofa Repairs Available in Mohali",
      body: [
        "Repairs we complete same-day: sofa foam replacement (1–2 hours per sofa), spring repair and replacement (1–2 hours), upholstery patching and panel replacement (2–3 hours), recliner mechanism repair (1–3 hours), leather crack filling and conditioning (2–3 hours), and minor frame fixes (1–2 hours).",
        "For major repairs — complete frame rebuilding, full sofa set re-upholstery (3+1+1), or multiple recliner motor replacements — we may require a scheduled appointment for best results. These typically take 4–8 hours and benefit from advance material preparation.",
      ],
    },
    {
      heading: "Same-Day Coverage Areas in Mohali",
      body: [
        "Same-day sofa repair guaranteed in: all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, and Sunny Enclave when booked before noon. Extended same-day coverage to Kharar, Landran, and Zirakpur when booked before 11 AM.",
        "Mohali's compact geography means our technicians can reach any Phase or Sector quickly. The Punjab Cricket Stadium area, GMADA zone, and Mohali Railway Station vicinity all fall within our fastest-response zone.",
      ],
    },
    {
      heading: "Same-Day vs Scheduled — Which to Choose",
      body: [
        "Choose same-day when: you need the sofa fixed urgently (guests arriving, festival, broken mechanism making sofa unusable), the repair is straightforward (foam, spring, patch, recliner mechanism), and you can book before noon.",
        "Choose scheduled when: you want a complete re-upholstery with fabric selection (needs consultation visit first), multiple pieces need repair on the same day, or you prefer a specific time slot. Scheduled appointments can be booked for any time including evenings and weekends.",
      ],
    },
  ],
  priceTable: {
    heading: "Same-Day Sofa Repair Pricing — Mohali 2026",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹1,200–₹3,500" },
      { service: "Spring Repair", price: "₹800–₹2,000" },
      { service: "Upholstery Patch Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Fix", price: "₹1,499–₹5,500" },
      { service: "Leather Crack Repair", price: "₹1,500–₹4,000" },
      { service: "Frame Minor Repair", price: "₹1,000–₹3,000" },
    ],
  },
  faqs: [
    { question: "How do I book same-day sofa repair in Mohali?", answer: "Call +91 92179 99355 before noon. Share photos of the damage. We confirm availability and dispatch a technician within 4 hours to your Mohali address." },
    { question: "Is there an extra charge for same-day service in Mohali?", answer: "No. Same-day sofa repair in Mohali is priced the same as our scheduled service. No rush surcharge. Same materials, same warranty." },
    { question: "What if I call after noon?", answer: "If you call after noon, we try for same-day if a technician is available in your area. Otherwise, we schedule for the earliest next-day slot. Morning calls guarantee same-day." },
    { question: "Do you cover Aerocity and IT City for same-day?", answer: "Yes. Aerocity and IT City are within our priority same-day zone. Technicians are frequently in this area due to high demand from professionals living here." },
  ],
  relatedPages: mohaliRelatedExcluding("same-day-sofa-repair-mohali"),
  keywords: [
    "same day sofa repair mohali",
    "urgent sofa repair mohali",
    "sofa repair today mohali",
    "emergency sofa repair mohali",
    "fast sofa repair near me mohali",
    "sofa repair same day aerocity",
  ],
};

export const doorstepSofaRepairMohali: SeoPageData = {
  slug: "doorstep-sofa-repair-mohali",
  cityKey: "mohali" as const,
  title: "Doorstep Sofa Repair in Mohali | Home Service All Phases | FurniRevive",
  metaDescription:
    "Doorstep sofa repair in Mohali — we come to your home. No transport, no workshop. Foam, spring, upholstery, leather repair at your doorstep across all phases, Aerocity, IT City & Kharar. From ₹800. Call +91 92179 99355.",
  h1: "Doorstep Sofa Repair in Mohali — We Come to You",
  heroSubtitle:
    "No transport, no workshop, no waiting. FurniRevive's doorstep sofa repair brings expert craftsmen, tools, and materials directly to your Mohali home. Complete repair in a single visit.",
  showcaseImage: {
    heading: "Doorstep Sofa Repair Mohali — At Your Home",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Doorstep sofa repair service in Mohali with technician working at customer home by FurniRevive",
    caption: "Doorstep Sofa Repair Mohali — No transport needed | From ₹800 | FurniRevive",
  },
  intro: [
    "Why struggle to transport a heavy sofa out of your 12th-floor Aerocity apartment or navigate it through a Phase 7 society gate when expert repair can happen right in your drawing room? FurniRevive's doorstep sofa repair in Mohali brings everything needed — skilled craftsmen, professional tools, premium materials — directly to your home. Your sofa never leaves your living room.",
    "We serve all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Whether you live in a ground-floor kothi in Phase 3A or a 20th-floor apartment in Aerocity, our team works neatly and efficiently in your space.",
    "Doorstep repair eliminates transportation damage risk, workshop waiting time, and the hassle of moving heavy furniture through lifts and narrow corridors. Starting at ₹800. For full pricing, see our <a href=\"/sofa-repair-cost-mohali\">cost guide</a>. For same-day urgency, see <a href=\"/same-day-sofa-repair-mohali\">same-day service</a>. Also available as <a href=\"/doorstep-sofa-repair-chandigarh\">doorstep service in Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "Zero Transportation Hassle", description: "Your sofa stays in your home. No awkward manoeuvring through lifts and corridors, no risk of transportation damage, no waiting at workshops." },
    { title: "Single Visit Completion", description: "Inspection, quote, repair, and warranty — all handled in one visit at your Mohali home. Most repairs done in 2–4 hours." },
    { title: "High-Rise Apartment Friendly", description: "Experienced with Mohali's premium towers — Aerocity high-rises, Phase 7 and Phase 10 complexes. Society coordination, lift usage, and neat in-apartment work." },
    { title: "Complete Material Kit", description: "Technicians carry foam, fabric swatches, springs, hardware, and recliner parts. No second visits for common repairs." },
    { title: "Safe for Premium Sofas", description: "Imported leather sofas, oversized L-shapes, and heavy recliners are risky to move. Doorstep repair eliminates all handling damage risk." },
    { title: "Same Price as Workshop", description: "Doorstep service costs the same as our workshop rate. From ₹800. No convenience surcharge." },
  ],
  process: [
    { step: "Book a Home Visit", description: "Call +91 92179 99355 or WhatsApp photos of your sofa damage. We schedule a visit at your convenience." },
    { step: "Doorstep Inspection", description: "Our specialist arrives at your Mohali home, lays protective sheets, and inspects your sofa thoroughly." },
    { step: "On-the-Spot Repair", description: "Repair completed right there — foam replacement, spring fix, upholstery work, recliner mechanism rebuild — all at your home." },
    { step: "Cleanup & Warranty", description: "Work area cleaned spotless, furniture repositioned, and 6-month warranty card issued. Ready for immediate use." },
  ],
  benefits: [
    "No need to transport heavy sofas anywhere",
    "Complete repair at your home in one visit",
    "No transportation damage risk",
    "No workshop waiting time (days or weeks)",
    "High-rise apartment and villa friendly service",
    "Protective dust sheets and full cleanup included",
    "Same pricing as workshop rates",
    "All sofa types — L-shape, recliner, sectional",
    "Full Mohali doorstep coverage",
    "From ₹800 with 6-month warranty",
  ],
  contentSections: [
    {
      heading: "Why Doorstep Sofa Repair Makes Sense in Mohali",
      body: [
        "Mohali's rapid vertical growth means most residents live in apartments — Phase 7, 10, 11 towers, Aerocity high-rises, and GMADA complexes near Punjab Cricket Stadium. Moving a large sofa through lifts, corridors, and security gates is logistically nightmarish and risks damage. Doorstep repair eliminates this entirely.",
        "Workshop-based repair also means your sofa is gone for days — sometimes weeks during busy season. With doorstep service, your sofa is repaired and usable within hours. No disruption to your daily life or your living room setup. Ideal for busy IT professionals who can't afford days without their furniture.",
      ],
    },
    {
      heading: "Doorstep Coverage — All Mohali Areas",
      body: [
        "We provide doorstep sofa repair in: all Mohali phases (1–11), Sector 58, 60, 66, 67, 68, 69, 70, 71, 74, 76, 78, 79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Key landmarks include Punjab Cricket Stadium area, Mohali Railway Station, and GMADA complex.",
        "Our technicians are experienced with all building types — GMADA flats, modern high-rises with strict society protocols, independent villas in Sunny Enclave, and ground-floor houses in older phases. They carry photo ID and coordinate with security as needed.",
      ],
    },
    {
      heading: "What We Bring to Your Doorstep",
      body: [
        "Every doorstep visit includes: professional tool kit (upholstery staple guns, foam cutters, sewing machines, spring tools), pre-cut foam slabs in multiple densities (32D, 36D, 40D), fabric swatch books (500+ options), common springs and hardware, recliner mechanism parts, protective floor and furniture sheets, and cleaning supplies.",
        "For full re-upholstery requiring a specific fabric choice, we conduct a separate consultation visit with swatches before the repair day. See our <a href=\"/sofa-upholstery-mohali\">sofa upholstery Mohali</a> service for details.",
      ],
    },
  ],
  priceTable: {
    heading: "Doorstep Sofa Repair Cost — Mohali 2026",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹1,200–₹3,500" },
      { service: "Spring Repair", price: "₹800–₹2,000" },
      { service: "Upholstery Repair (per seat)", price: "₹2,000–₹4,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹5,500" },
      { service: "Leather Repair", price: "₹1,500–₹5,000" },
      { service: "Frame Repair", price: "₹1,500–₹4,000" },
    ],
  },
  faqs: [
    { question: "Do you really repair sofas at home in Mohali?", answer: "Yes. All repairs happen at your Mohali home — foam replacement, spring repair, upholstery, leather work, and recliner mechanism fixes. Our technicians bring all materials. Your sofa never leaves your living room." },
    { question: "What about the mess during repair?", answer: "We lay protective dust sheets before starting, contain all debris, and do complete cleanup after the repair. Your floor and surrounding furniture stay clean throughout." },
    { question: "Can you repair a sofa in a Mohali high-rise apartment?", answer: "Yes. We regularly repair sofas in Mohali high-rises — Aerocity towers, Phase 7 and 10 apartment complexes, GMADA flats. Our team coordinates with society security, uses lifts, and works efficiently in apartment spaces." },
  ],
  relatedPages: mohaliRelatedExcluding("doorstep-sofa-repair-mohali"),
  keywords: [
    "doorstep sofa repair mohali",
    "sofa repair at home mohali",
    "sofa repair home service mohali",
    "sofa repair near me home service mohali",
    "home sofa repair mohali",
    "sofa repair at doorstep aerocity",
  ],
};

export const leatherSofaRepairMohali: SeoPageData = {
  slug: "leather-sofa-repair-mohali",
  cityKey: "mohali" as const,
  title: "Leather Sofa Repair in Mohali from ₹1,500 | Crack, Colour, Conditioning | FurniRevive",
  metaDescription:
    "Leather sofa repair in Mohali from ₹1,500. Crack filling, colour restoration, tear mending, conditioning. Genuine & faux leather. Doorstep service all phases, Aerocity, IT City & Kharar. 6-month warranty. Call +91 92179 99355.",
  h1: "Leather Sofa Repair in Mohali — Crack, Colour & Conditioning from ₹1,500",
  heroSubtitle:
    "Mohali's air-conditioned interiors dry leather fast. Our specialists restore genuine and faux leather sofas — crack filling, colour matching, tear mending, and deep conditioning — all at your doorstep. From ₹1,500.",
  showcaseImage: {
    heading: "Leather Sofa Repair Mohali — Before & After Restoration",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Leather sofa crack repair and colour restoration in Mohali by FurniRevive",
    caption: "Leather Sofa Repair Mohali — Crack & colour fix | From ₹1,500 | FurniRevive",
  },
  intro: [
    "Mohali's modern apartments — especially in Aerocity, Phase 7, and Phase 10 — are predominantly air-conditioned year-round. While comfortable for residents, continuous AC operation drastically reduces indoor humidity, causing genuine leather sofas to lose moisture, crack, and peel far faster than in naturally ventilated homes. If your leather sofa shows cracks, colour fading, or surface peeling, professional repair restores it completely.",
    "FurniRevive's leather sofa specialists serve all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, and Zirakpur. We handle genuine leather, bonded leather, faux leather (PU), and rexine — each material requires different repair techniques that our trained technicians understand.",
    "Leather sofa repair starts at ₹1,500. Full 3-piece set restoration typically costs ₹3,000–₹8,000 depending on damage severity. Every repair includes deep conditioning to prevent future cracking. See our <a href=\"/sofa-repair-mohali\">full sofa repair service</a> for non-leather issues or <a href=\"/sofa-repair-cost-mohali\">pricing details</a>. Also serving <a href=\"/leather-sofa-repair-chandigarh\">Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "Leather-Specialist Technicians", description: "Our team is trained specifically on leather repair — not general upholstery workers. They understand the chemistry of leather restoration." },
    { title: "Professional Colour Matching", description: "We use professional leather colour-matching systems to restore your sofa's exact shade. No visible patches or mismatched areas." },
    { title: "AC-Environment Treatment", description: "We apply deep conditioning formulated for Mohali's AC-heavy interiors. Prevents re-cracking despite continuous air conditioning." },
    { title: "All Leather Types", description: "Genuine leather, top-grain, bonded, split leather, PU (faux), and rexine. Each requires different repair compounds — we use the correct ones." },
    { title: "Doorstep Restoration", description: "All leather repair done at your Mohali home. No transport risk — leather surfaces are easily scratched during handling." },
    { title: "6 Month Warranty", description: "Crack repairs, colour restoration, and conditioning all covered under 6-month written warranty." },
  ],
  process: [
    { step: "Assess the Damage", description: "Call +91 92179 99355 or WhatsApp close-up photos of the leather damage. We identify the leather type and estimate repair scope." },
    { step: "Doorstep Diagnosis", description: "Our leather specialist visits your Mohali home, identifies the exact leather type, and provides a written quote." },
    { step: "On-Site Restoration", description: "Cracks filled, colour restored, tears mended, and deep conditioning applied — all at your doorstep in 2–4 hours." },
    { step: "Conditioning & Warranty", description: "Final conditioning coat applied, curing time advised, and 6-month warranty card issued." },
  ],
  benefits: [
    "Crack filling with professional leather compound",
    "Colour restoration and matching",
    "Tear and cut mending",
    "Deep conditioning for AC-heavy Mohali interiors",
    "Genuine and faux leather both handled",
    "Peeling and flaking surface repair",
    "Armrest and headrest restoration",
    "Mould and mildew treatment",
    "No transportation — doorstep only",
    "From ₹1,500 with 6-month warranty",
  ],
  contentSections: [
    {
      heading: "Leather Sofa Repair Services in Mohali",
      body: [
        "Our Mohali leather repair covers: surface crack filling with flexible leather compound, colour restoration using professional pigment-matching systems, tear and cut mending with bonded reinforcement, peeling and flaking surface treatment (common in bonded leather after 3–5 years), deep conditioning to restore suppleness and prevent future cracks, and armrest/headrest restoration (highest-wear areas).",
        "For rexine and faux leather (PU), we offer panel replacement when repair isn't viable — we match the texture, grain, and colour as closely as possible. For genuine leather, we always recommend repair over replacement due to the premium quality and patina that develops over time.",
      ],
    },
    {
      heading: "Why Leather Cracks in Mohali Apartments — Prevention Tips",
      body: [
        "Mohali's premium apartments run air conditioning 8–16 hours daily, reducing indoor humidity to 25–35%. This causes leather to lose moisture rapidly — much faster than homes with natural ventilation. Without regular conditioning (every 2–3 months for AC homes), genuine leather develops surface cracks within 2–3 years.",
        "Prevention: condition genuine leather every 2–3 months in AC-heavy homes. Keep leather sofas away from direct AC airflow and sunlight from large windows. Use a dedicated leather conditioner — not coconut oil or generic moisturiser. After our repair, we provide AC-specific maintenance guidance for Mohali apartments.",
      ],
    },
    {
      heading: "Leather Sofa Repair Cost in Mohali",
      body: [
        "Single-seat crack repair and conditioning: ₹1,500–₹3,000. Full 3-piece set restoration (cracks + colour + conditioning): ₹3,000–₹8,000. Panel replacement (when repair isn't viable): ₹2,500–₹5,000 per panel. Tear mending: ₹1,000–₹2,500 per tear depending on size.",
        "Leather recliner restoration (seat + armrest + headrest): ₹2,000–₹5,000. Full re-colouring of a faded set: ₹4,000–₹10,000. All prices include deep conditioning treatment. Free doorstep inspection and written quote.",
      ],
    },
  ],
  priceTable: {
    heading: "Leather Sofa Repair Cost in Mohali — 2026",
    rows: [
      { service: "Crack Repair + Conditioning (per seat)", price: "₹1,500–₹3,000" },
      { service: "Full 3-Piece Set Restoration", price: "₹3,000–₹8,000" },
      { service: "Colour Restoration (full set)", price: "₹4,000–₹10,000" },
      { service: "Tear Mending (per tear)", price: "₹1,000–₹2,500" },
      { service: "Panel Replacement", price: "₹2,500–₹5,000" },
      { service: "Recliner Leather Restoration", price: "₹2,000–₹5,000" },
    ],
  },
  faqs: [
    { question: "Can you repair genuine leather sofas in Mohali?", answer: "Yes. We specialise in genuine leather repair — crack filling, colour restoration, tear mending, and conditioning. Our products are designed for real leather and maintain the natural patina." },
    { question: "Why does my leather sofa crack in my Mohali apartment?", answer: "Mohali apartments with continuous AC reduce indoor humidity to 25–35%, causing leather to lose moisture and crack. Regular conditioning every 2–3 months prevents this. After repair, we apply deep conditioning and provide AC-specific maintenance guidance." },
    { question: "Do you repair rexine and faux leather in Mohali?", answer: "Yes. Faux leather (PU) and rexine sofas are repaired or panel-replaced at your Mohali doorstep. We match colour, texture, and grain as closely as possible." },
  ],
  relatedPages: mohaliRelatedExcluding("leather-sofa-repair-mohali"),
  keywords: [
    "leather sofa repair mohali",
    "leather sofa repair near me mohali",
    "leather crack repair mohali",
    "leather colour restoration mohali",
    "leather sofa conditioning mohali",
    "faux leather repair mohali",
    "leather sofa repair aerocity",
    "leather sofa repair phase 7 mohali",
  ],
};

export const carpenterHomeServiceMohali: SeoPageData = {
  slug: "carpenter-home-service-mohali",
  cityKey: "mohali" as const,
  title: "Carpenter Home Service in Mohali from ₹499 | Doorstep Carpentry | FurniRevive",
  metaDescription:
    "Professional carpenter home service in Mohali from ₹499. Furniture repair, assembly, fitting, installation. Doorstep service across all phases, Aerocity, IT City & Kharar. Experienced craftsmen. Call +91 92179 99355.",
  h1: "Carpenter Home Service in Mohali — Doorstep Carpentry from ₹499",
  heroSubtitle:
    "Need a carpenter at home? FurniRevive's skilled carpenters come to your Mohali doorstep for furniture repair, assembly, fitting, and installation. From ₹499. All phases, Aerocity, IT City & Kharar covered.",
  showcaseImage: {
    heading: "Carpenter Home Service Mohali — Professional Doorstep Carpentry",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Professional carpenter providing home service in Mohali for furniture repair and assembly by FurniRevive",
    caption: "Carpenter Home Service Mohali — Furniture repair & assembly | From ₹499 | FurniRevive",
  },
  intro: [
    "Moving into a new Mohali apartment and need furniture assembled? Wardrobe door misaligned in your Phase 10 flat? Shelves to mount in your Aerocity home office? Finding a reliable carpenter in Mohali for these jobs can be surprisingly difficult. FurniRevive's carpenter home service provides experienced craftsmen at your doorstep for any carpentry need, big or small. Starting at just ₹499.",
    "Our carpenters serve all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Whether you need flat-pack furniture assembled, a kitchen cabinet fixed, shelves mounted, or complete <a href=\"/furniture-repair-mohali\">furniture restoration</a>, we handle it all professionally.",
    "Unlike marketplace carpenters with uncertain quality, FurniRevive's team is vetted, experienced (10+ years), and backed by a service warranty. We also provide <a href=\"/sofa-repair-mohali\">sofa repair</a> and <a href=\"/office-chair-repair-mohali\">office chair repair</a> through the same booking. Also available in <a href=\"/carpenter-home-service-chandigarh\">Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "Experienced & Vetted", description: "10+ years experience. All carpenters are vetted, background-checked, and trained on quality standards. Not random marketplace workers." },
    { title: "All Carpentry Jobs", description: "From minor hinge fixes (₹499) to complete furniture restoration. Assembly, fitting, mounting, repair — everything carpentry-related." },
    { title: "Professional Tools", description: "Our carpenters arrive with complete professional tool kits — power drills, jigsaw, router, levels, measuring tools, and finishing equipment." },
    { title: "Reliable & On-Time", description: "Confirmed appointment times. Our carpenters arrive on schedule — no hours of waiting for a no-show." },
    { title: "Full Mohali Coverage", description: "All phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur." },
    { title: "Service Warranty", description: "All carpentry work backed by a warranty. Structural repairs get 6 months. Fitting and assembly get 3 months." },
  ],
  process: [
    { step: "Describe the Job", description: "Call +91 92179 99355 or WhatsApp photos. Describe what you need — repair, assembly, fitting, or installation." },
    { step: "Confirm & Schedule", description: "We provide an estimate and confirm a convenient time slot. Same-day available for urgent needs." },
    { step: "Carpenter Arrives", description: "Our experienced carpenter reaches your Mohali home on time with all required tools and materials." },
    { step: "Work Completed", description: "Job done to your satisfaction, workspace cleaned, and warranty card issued where applicable." },
  ],
  benefits: [
    "Small jobs from ₹499 — no minimum order pressure",
    "Furniture assembly (flat-pack, IKEA, online orders)",
    "Wardrobe, cabinet, and shelf repair",
    "Door and window fitting/repair",
    "Hinge, lock, and hardware replacement",
    "Wall mounting — shelves, TV units, cabinets",
    "Complete furniture restoration",
    "Wooden furniture polishing and refinishing",
    "Same-day availability for urgent jobs",
    "All Mohali areas covered including Aerocity and IT City",
  ],
  contentSections: [
    {
      heading: "Carpenter Services Available at Your Mohali Doorstep",
      body: [
        "Furniture repair: sofa frame repair, bed frame reinforcement, chair joint re-gluing, table leg fixing, wardrobe shutter alignment, drawer runner replacement, and wooden cabinet repair. Assembly: flat-pack furniture (IKEA, Urban Ladder, Amazon), modular wardrobe assembly, study table assembly, and bed frame setup.",
        "Fitting and installation: wall-mounted shelves, TV unit mounting, kitchen cabinet fitting, curtain rod installation, door and window alignment, lock replacement, and soft-close hinge fitting. Polishing: melamine, PU, French polish, and lacquer touch-up. See our <a href=\"/furniture-repair-mohali\">furniture repair service</a> for detailed pricing on larger restoration projects.",
      ],
    },
    {
      heading: "Carpenter Service Areas — Mohali",
      body: [
        "Full coverage across: Phase 1, 2, 3A, 3B, 4, 5, 6, 7, 8, 9, 10, 11, Sector 58, 60, 66, 67, 68, 69, 70, 71, 74, 76, 78, 79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Near Punjab Cricket Stadium, Mohali Railway Station, and GMADA office — all within rapid response.",
        "Mohali's new apartments (especially Phase 7–11 and Aerocity) generate high demand for furniture assembly — online-ordered flat-pack units from IKEA, Urban Ladder, and Pepperfry that need professional assembly for stability and warranty compliance.",
      ],
    },
    {
      heading: "Carpenter Pricing in Mohali",
      body: [
        "Small fixes (hinges, locks, alignment): ₹499–₹1,000. Furniture assembly: ₹500–₹3,000 depending on size and complexity. Wall mounting: ₹300–₹1,500 per item. Furniture repair: ₹599–₹5,000+ depending on scope. Polishing: ₹1,500–₹8,000 depending on piece size.",
        "Our pricing is transparent — no hidden charges. For larger projects (full furniture restoration, multiple items), we provide a written quote after doorstep inspection. Bulk rates available for multiple items.",
      ],
    },
  ],
  priceTable: {
    heading: "Carpenter Home Service Rates — Mohali 2026",
    rows: [
      { service: "Small Fixes (hinge, lock, alignment)", price: "₹499–₹1,000" },
      { service: "Furniture Assembly", price: "₹500–₹3,000" },
      { service: "Wall Mounting (per item)", price: "₹300–₹1,500" },
      { service: "Furniture Repair", price: "₹599–₹5,000+" },
      { service: "Door/Window Repair", price: "₹500–₹2,500" },
      { service: "Polishing & Refinishing", price: "₹1,500–₹8,000" },
    ],
  },
  faqs: [
    { question: "Do you handle small carpentry jobs in Mohali?", answer: "Yes. We accept jobs starting from ₹499 — single hinge replacement, drawer fix, shelf mounting. No job too small. Our carpenters are happy to help with quick fixes." },
    { question: "Can you assemble flat-pack furniture in Mohali?", answer: "Yes. We assemble all flat-pack furniture — IKEA, Urban Ladder, Amazon, Pepperfry, and local purchases. Assembly costs ₹500–₹3,000 depending on item complexity. Same-day available." },
    { question: "Do your carpenters bring their own tools?", answer: "Yes. Our carpenters arrive with complete professional tool kits including power drills, saws, levels, measuring tools, and finishing equipment. You don't need to provide anything." },
    { question: "Do you serve Aerocity and IT City for carpentry?", answer: "Yes. Aerocity and IT City are within our core Mohali coverage. We frequently handle furniture assembly for new apartment move-ins and home office setups in these areas." },
  ],
  relatedPages: mohaliRelatedExcluding("carpenter-home-service-mohali"),
  keywords: [
    "carpenter mohali",
    "carpenter near me mohali",
    "carpenter home service mohali",
    "furniture assembly mohali",
    "carpenter aerocity mohali",
    "carpenter kharar",
    "doorstep carpenter mohali",
    "furniture carpenter mohali",
  ],
};

// ── Tier 3 — Cost hubs ─────────────────────────────────────────────────────

export const sofaRepairCostMohali: SeoPageData = {
  slug: "sofa-repair-cost-mohali",
  cityKey: "mohali" as const,
  title: "Sofa Repair Cost in Mohali 2026 | Complete Price Guide | FurniRevive",
  metaDescription:
    "Sofa repair cost in Mohali 2026: foam ₹1,200–₹3,500, spring ₹800–₹2,000, upholstery ₹2,000–₹4,500/seat, leather ₹1,500–₹5,000, recliner ₹1,499–₹5,500. Transparent pricing. Free inspection. Call +91 92179 99355.",
  quickAnswer:
    "Sofa repair in Mohali costs ₹800–₹12,000 depending on repair type. Foam replacement ₹1,200–₹3,500 per seat, spring repair ₹800–₹2,000, upholstery ₹2,000–₹4,500 per seat, leather repair ₹1,500–₹5,000, recliner mechanism ₹1,499–₹5,500. Free doorstep inspection with written quote. Call +91 92179 99355.",
  h1: "Sofa Repair Cost in Mohali — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent sofa repair pricing for all Mohali areas. Every service priced clearly — no hidden charges. Free doorstep inspection and written quote before any work begins.",
  showcaseImage: {
    heading: "Sofa Repair Pricing — Mohali 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Sofa repair cost breakdown for Mohali showing transparent pricing by FurniRevive",
    caption: "Sofa Repair Cost Mohali 2026 — All services priced transparently | FurniRevive",
  },
  intro: [
    "The first question every Mohali homeowner asks before booking sofa repair: how much will it cost? This guide provides transparent, up-to-date pricing for every sofa repair service we offer across Mohali — no vague estimates, no hidden charges, no surprise add-ons.",
    "All prices below are for doorstep service across all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. The same rates apply regardless of your location — no distance surcharges.",
    "Every repair begins with a free doorstep inspection. Our technician examines your sofa, identifies all issues, and provides a written quote on the spot. You pay only after approving the quote. No work begins without your explicit consent. For our full service details, see <a href=\"/sofa-repair-mohali\">sofa repair Mohali</a>.",
    "Professional sofa repair saves Mohali families 50–70% compared to buying new — a ₹40,000 sofa can typically be fully restored for ₹4,000–₹10,000 with results that look and feel brand new. It's the practical, smart choice for Phase 7, Aerocity, and IT City residents with premium furniture investments.",
  ],
  whyChoose: [
    { title: "Transparent Pricing", description: "Every service priced clearly in this guide. No vague 'depends on damage' answers — we give you actual ranges based on hundreds of Mohali repairs." },
    { title: "Free Doorstep Inspection", description: "Our technician inspects your sofa at home and provides a written quote. No charge for the inspection even if you choose not to proceed." },
    { title: "No Hidden Charges", description: "The quoted price is the final price. No material surcharges, no labour extras, no 'we found additional damage' surprises mid-repair." },
    { title: "Written Quote Before Work", description: "You receive a detailed written breakdown before any work begins. Approve it, reject it, or negotiate — no pressure." },
    { title: "Visit Charge Adjusted", description: "₹99–₹199 visit charge is adjusted against the repair bill. If you proceed with repair, the visit is effectively free." },
    { title: "50–70% Cheaper Than New", description: "Compare repair cost to replacement cost. Professional repair almost always saves 50–70% with equivalent results." },
  ],
  process: [
    { step: "Check Prices Above", description: "Use this guide to estimate your repair cost based on the type of damage and service needed." },
    { step: "Book Free Inspection", description: "Call +91 92179 99355. Our technician visits your Mohali home at no charge to assess the exact scope." },
    { step: "Receive Written Quote", description: "Detailed quote provided on the spot — broken down by service, material, and labour. No ambiguity." },
    { step: "Approve & Repair", description: "Happy with the price? Repair begins immediately. Not happy? No obligation. No inspection charge." },
  ],
  benefits: [
    "Foam replacement from ₹1,200 per seat",
    "Spring repair from ₹800",
    "Upholstery from ₹2,000 per seat",
    "Leather repair from ₹1,500",
    "Recliner mechanism from ₹1,499",
    "Frame repair from ₹1,500",
    "Complete restoration from ₹3,000",
    "L-shape sectional from ₹5,000",
    "Free inspection — no obligation",
    "Written quote before work begins",
    "No hidden charges or surprise add-ons",
    "Save 50–70% vs buying new",
  ],
  contentSections: [
    {
      heading: "Detailed Sofa Repair Cost Breakdown — Mohali 2026",
      body: [
        "<strong>Foam replacement:</strong> ₹1,200–₹3,500 per seat. Price depends on foam density chosen — 32D (₹1,200–₹2,000), 36D (₹1,800–₹2,800), 40D (₹2,500–₹3,500). We use Sleepwell and Duraflex branded HR foam only. Higher density = longer life and better support. 40D recommended for daily-use sofas in Mohali apartments.",
        "<strong>Spring repair:</strong> ₹800–₹2,000. Includes zigzag spring replacement, serpentine spring retension, and pocket spring repair. Price depends on number of springs affected and sofa size.",
        "<strong>Upholstery/fabric change:</strong> ₹2,000–₹4,500 per seat. Varies by fabric — cotton (₹2,000–₹2,800), microfibre (₹2,500–₹3,500), velvet (₹3,000–₹4,000), leatherette (₹3,500–₹4,500). Full 3-seater: ₹6,000–₹13,500.",
        "<strong>Leather repair:</strong> ₹1,500–₹5,000. Crack filling and conditioning from ₹1,500 per seat. Full set colour restoration ₹4,000–₹10,000. Panel replacement ₹2,500–₹5,000. See <a href=\"/leather-sofa-repair-mohali\">leather sofa repair</a> for details.",
        "<strong>Recliner mechanism:</strong> ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000. Motorised motor replacement ₹2,999–₹5,500. See <a href=\"/recliner-repair-cost-mohali\">recliner repair cost guide</a> for full breakdown.",
        "<strong>Frame repair:</strong> ₹1,500–₹4,000. Joint reinforcement, broken rail replacement, arm repair, and base stabilisation.",
      ],
    },
    {
      heading: "Cost by Sofa Type — Mohali",
      body: [
        "<strong>3-seater sofa:</strong> Basic repair (foam + minor fix) ₹2,500–₹5,000. Full overhaul (foam + spring + upholstery) ₹5,000–₹12,000. Most common repair bracket for Mohali apartments: ₹3,000–₹8,000.",
        "<strong>L-shape/sectional:</strong> Full restoration ₹5,000–₹15,000 depending on size and damage. Corner seat foam replacement ₹3,000–₹5,000. Chaise section upholstery ₹3,000–₹6,000. Popular in Mohali's spacious Phase 7 and Aerocity living rooms.",
        "<strong>Recliner sofa:</strong> Mechanism only ₹1,499–₹5,500. Mechanism + upholstery ₹3,000–₹8,000. Full recliner set (3-piece with 2 recliners) ₹6,000–₹15,000.",
        "<strong>Sofa cum bed:</strong> Folding mechanism repair ₹1,500–₹3,000. Mattress replacement ₹2,000–₹5,000. Full restoration ₹4,000–₹10,000.",
      ],
    },
    {
      heading: "Sofa Repair vs New Sofa — Cost Comparison for Mohali",
      body: [
        "A new 3-seater sofa in Mohali costs ₹15,000–₹80,000 from Phase 5 furniture market or online stores. Professional repair of the same sofa typically costs ₹3,000–₹12,000 — saving 50–80% while achieving near-identical results.",
        "Repair is almost always the better financial decision when: the frame is intact, you like your sofa's style and size, and the repair cost is under 35% of a comparable new purchase. Our free inspection will give you an honest assessment — if replacement genuinely makes more sense, we'll tell you.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Repair Cost in Mohali — Complete 2026 Price List",
    rows: [
      { service: "Sofa Foam Replacement (per seat, 32D)", price: "₹1,200–₹2,000" },
      { service: "Sofa Foam Replacement (per seat, 40D)", price: "₹2,500–₹3,500" },
      { service: "Sofa Spring Repair", price: "₹800–₹2,000" },
      { service: "Upholstery — Cotton (per seat)", price: "₹2,000–₹2,800" },
      { service: "Upholstery — Velvet (per seat)", price: "₹3,000–₹4,000" },
      { service: "Upholstery — Leatherette (per seat)", price: "₹3,500–₹4,500" },
      { service: "Leather Sofa Repair (per seat)", price: "₹1,500–₹3,000" },
      { service: "Leather Set Colour Restoration", price: "₹4,000–₹10,000" },
      { service: "Recliner Mechanism (manual)", price: "₹1,499–₹3,000" },
      { service: "Recliner Motor (motorised)", price: "₹2,999–₹5,500" },
      { service: "Frame Repair / Joint Reinforcement", price: "₹1,500–₹4,000" },
      { service: "L-Shape Sectional Full Restoration", price: "₹5,000–₹15,000" },
      { service: "Complete 3-Seater Restoration", price: "₹3,000–₹12,000" },
      { service: "Sofa Cum Bed Mechanism Repair", price: "₹1,500–₹3,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  faqs: [
    { question: "Is the doorstep inspection really free in Mohali?", answer: "Yes. Our technician visits your Mohali home, inspects the sofa, and provides a written quote at no charge. If you choose not to proceed, you pay nothing. The ₹99–₹199 visit charge only applies if stated and is adjusted against the repair bill." },
    { question: "Why do prices have a range?", answer: "Ranges reflect different damage severity, sofa sizes, and material choices. A simple 1-seat foam replacement costs ₹1,200 while a large sectional needs ₹3,500. The exact price is confirmed during your free inspection." },
    { question: "Are prices the same across all Mohali areas?", answer: "Yes. Our pricing is uniform across all Mohali phases, Aerocity, IT City, Kharar, and Zirakpur. No distance or zone surcharges." },
    { question: "Do you charge extra for same-day service?", answer: "No. Same-day service (when booked before noon) carries no surcharge. Same pricing as our scheduled service." },
  ],
  relatedPages: mohaliRelatedExcluding("sofa-repair-cost-mohali"),
  keywords: [
    "sofa repair cost mohali",
    "sofa repair price mohali",
    "sofa repairing cost mohali",
    "sofa foam replacement cost mohali",
    "sofa upholstery cost mohali",
    "sofa renovation cost mohali",
    "leather sofa repair cost mohali",
    "recliner repair cost mohali",
    "sofa repair charges mohali",
  ],
};

export const reclinerRepairCostMohali: SeoPageData = {
  slug: "recliner-repair-cost-mohali",
  cityKey: "mohali" as const,
  title: "Recliner Repair Cost in Mohali 2026 | Manual & Motorised Pricing | FurniRevive",
  metaDescription:
    "Recliner repair cost in Mohali 2026: manual mechanism ₹1,499–₹3,000, motorised motor ₹2,999–₹5,500, actuator ₹2,000–₹3,500. All brands. Free inspection. Transparent pricing. Call +91 92179 99355.",
  quickAnswer:
    "Recliner repair in Mohali costs ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000, motorised motor replacement ₹2,999–₹5,500, actuator ₹2,000–₹3,500, remote/transformer ₹800–₹2,000. Free doorstep diagnosis. All brands covered. Call +91 92179 99355.",
  h1: "Recliner Repair Cost in Mohali — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent recliner repair pricing for all Mohali areas — manual and motorised mechanisms, all brands. Free doorstep diagnosis. Written quote before work begins.",
  showcaseImage: {
    heading: "Recliner Repair Cost Breakdown — Mohali 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Recliner repair cost guide for Mohali showing transparent pricing by FurniRevive",
    caption: "Recliner Repair Cost Mohali 2026 — Manual & motorised pricing | FurniRevive",
  },
  intro: [
    "Recliner sofas have become standard in Mohali's modern apartments — IT professionals in Aerocity unwind on motorised units, families in Phase 7 enjoy theatre-style seating, and luxury homes in Sector 66–71 feature premium recliner sets. When the mechanism fails, repair costs can feel opaque. This guide provides clear, transparent pricing for every type of recliner repair we handle across Mohali.",
    "All prices cover doorstep service across all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, and Zirakpur. Manual mechanisms, motorised motors, actuators, remotes, and upholstery — every component priced clearly. Free doorstep diagnosis included.",
    "For the full recliner repair service description, see <a href=\"/recliner-repair-mohali\">recliner repair Mohali</a>. For general sofa pricing, see <a href=\"/sofa-repair-cost-mohali\">sofa repair cost Mohali</a>. Also see <a href=\"/recliner-repair-cost-chandigarh\">Chandigarh recliner pricing</a>.",
  ],
  whyChoose: [
    { title: "Every Component Priced", description: "Motor, actuator, cable, lever, remote, transformer, upholstery — each component has a clear price range. No bundled mystery charges." },
    { title: "Free Doorstep Diagnosis", description: "Our specialist diagnoses the exact fault at your home — free of charge. You know the precise cost before deciding." },
    { title: "No Brand Premium", description: "Same repair rates whether your recliner is La-Z-Boy, Eezy, Nilkamal, or unbranded. Part costs vary but labour doesn't." },
    { title: "Written Quote Policy", description: "Detailed written breakdown before work begins. Approve or decline without any obligation or inspection charge." },
    { title: "Parts + Labour Included", description: "All quoted prices include both the replacement part and installation labour. No separate labour charges." },
    { title: "Warranty on All Repairs", description: "6-month warranty covers both the replaced part and workmanship. Repeat fault fixed free within warranty." },
  ],
  process: [
    { step: "Check Prices Below", description: "Use this guide to estimate your recliner repair cost based on the type of mechanism and fault." },
    { step: "Book Free Diagnosis", description: "Call +91 92179 99355. Our recliner specialist visits your Mohali home to diagnose the exact fault — no charge." },
    { step: "Written Quote", description: "Exact cost confirmed on the spot — part type, labour, and total clearly stated. No ambiguity." },
    { step: "Approve & Repair", description: "Happy? Repair begins immediately (same-day if parts in stock). Not happy? No charge for the diagnosis visit." },
  ],
  benefits: [
    "Manual mechanism repair from ₹1,499",
    "Motorised motor replacement from ₹2,999",
    "Actuator replacement from ₹2,000",
    "Remote/transformer from ₹800",
    "Upholstery repair from ₹1,500",
    "Free doorstep diagnosis",
    "Written quote before work",
    "Parts + labour included in price",
    "All brands — same rates",
    "6-month warranty on parts and labour",
    "Uniform Mohali pricing",
    "No hidden charges",
  ],
  contentSections: [
    {
      heading: "Recliner Repair Cost by Component — Mohali 2026",
      body: [
        "<strong>Manual mechanism:</strong> ₹1,499–₹3,000. Includes pull-cable replacement (₹1,499–₹2,000), lever mechanism repair (₹1,500–₹2,500), footrest spring repair (₹1,000–₹2,000), and locking pin replacement (₹800–₹1,500). Most manual repairs completed in 1–2 hours.",
        "<strong>Motorised motor:</strong> ₹2,999–₹5,500. Single-motor replacement for standard recliners (₹2,999–₹4,000). Dual-motor (headrest + footrest independent) replacement (₹4,000–₹5,500). Motor quality matters — we use motors rated for 25,000+ cycles.",
        "<strong>Actuator:</strong> ₹2,000–₹3,500. Linear actuators that push/pull the footrest and backrest. Price depends on stroke length and force rating. Common failures: stripped gears, burnt coils.",
        "<strong>Remote/transformer:</strong> ₹800–₹2,000. Wireless remote re-pairing or replacement (₹800–₹1,200). Transformer/power supply replacement (₹1,000–₹2,000). USB port repair on powered recliners (₹500–₹1,000).",
        "<strong>Upholstery:</strong> ₹1,500–₹4,000 for recliner seat panels. Headrest leather restoration from ₹1,000. Armrest repair from ₹800. Full recliner re-upholstery ₹3,000–₹6,000. See <a href=\"/leather-sofa-repair-mohali\">leather repair</a> for leather-specific pricing.",
      ],
    },
    {
      heading: "Cost by Recliner Brand — Mohali",
      body: [
        "Labour rates are uniform regardless of brand. Part costs vary slightly: La-Z-Boy mechanism parts (₹2,000–₹4,000), Eezy (₹1,500–₹3,500), Durian (₹1,800–₹3,800), Nilkamal (₹1,200–₹2,500), and unbranded (₹1,000–₹2,000). Premium brands use proprietary mechanisms that cost more to source but not more to install.",
        "We stock common replacement parts for the most popular brands seen in Mohali's apartments and villas. Exotic or discontinued models may require 2–3 days for part sourcing — confirmed during free diagnosis.",
      ],
    },
    {
      heading: "When Recliner Repair Makes More Sense Than Replacement",
      body: [
        "A new recliner costs ₹15,000–₹1,50,000 in Mohali. Most mechanism repairs cost ₹1,499–₹5,500 — just 5–15% of replacement cost. Unless the frame itself is structurally compromised (rare), repair is almost always the correct financial decision.",
        "Motorised recliners especially benefit from repair: the expensive part (leather upholstery, frame, foam) is usually fine — only the electrical mechanism fails. Replacing a ₹3,000 motor saves you from buying a ₹60,000 new recliner. Particularly relevant for Mohali's Aerocity and Phase 7 residents with premium investments.",
      ],
    },
  ],
  priceTable: {
    heading: "Recliner Repair Cost in Mohali — Complete 2026 Price List",
    rows: [
      { service: "Pull Cable Replacement", price: "₹1,499–₹2,000" },
      { service: "Lever Mechanism Repair", price: "₹1,500–₹2,500" },
      { service: "Footrest Spring Repair", price: "₹1,000–₹2,000" },
      { service: "Single Motor Replacement", price: "₹2,999–₹4,000" },
      { service: "Dual Motor Replacement", price: "₹4,000–₹5,500" },
      { service: "Actuator Replacement", price: "₹2,000–₹3,500" },
      { service: "Remote/Transformer", price: "₹800–₹2,000" },
      { service: "Recliner Upholstery Repair", price: "₹1,500–₹4,000" },
      { service: "Full Recliner Re-upholstery", price: "₹3,000–₹6,000" },
      { service: "Locking Pin Replacement", price: "₹800–₹1,500" },
      { service: "Doorstep Diagnosis", price: "Free" },
    ],
  },
  faqs: [
    { question: "Is the diagnosis free for recliner repair in Mohali?", answer: "Yes. Our specialist visits your Mohali home, diagnoses the fault, and provides a written quote — all at no charge. You only pay if you approve the repair." },
    { question: "Do parts cost extra on top of quoted price?", answer: "No. All quoted prices include both the replacement part and installation labour. The price you approve is the total price you pay." },
    { question: "How long do recliner parts last after repair?", answer: "Quality replacement motors are rated for 25,000+ cycles (8–10 years of normal use). Mechanism parts like cables and springs last 5–8 years. All backed by our 6-month warranty." },
  ],
  relatedPages: mohaliRelatedExcluding("recliner-repair-cost-mohali"),
  keywords: [
    "recliner repair cost mohali",
    "recliner repair price mohali",
    "recliner motor replacement cost mohali",
    "recliner mechanism repair cost mohali",
    "motorised recliner repair cost mohali",
    "la-z-boy repair cost mohali",
    "recliner repair charges mohali",
  ],
};

export const furnitureRepairCostMohali: SeoPageData = {
  slug: "furniture-repair-cost-mohali",
  cityKey: "mohali" as const,
  title: "Furniture Repair Cost in Mohali 2026 | All Furniture Types | FurniRevive",
  metaDescription:
    "Furniture repair cost in Mohali 2026: chair ₹500–₹2,500, bed ₹599–₹3,000, wardrobe ₹800–₹4,000, table ₹500–₹3,000, polish ₹1,500–₹8,000. Transparent doorstep pricing. Free inspection. Call +91 92179 99355.",
  quickAnswer:
    "Furniture repair in Mohali costs ₹499–₹15,000 depending on furniture type and damage. Chair repair ₹500–₹2,500, bed repair ₹599–₹3,000, wardrobe ₹800–₹4,000, table ₹500–₹3,000, sofa ₹800–₹12,000, polish ₹1,500–₹8,000. Free doorstep inspection. Call +91 92179 99355.",
  h1: "Furniture Repair Cost in Mohali — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent furniture repair pricing for all types — chairs, beds, wardrobes, tables, sofas, and more. Free doorstep inspection across all Mohali areas. Written quote before work begins.",
  showcaseImage: {
    heading: "Furniture Repair Cost — Mohali 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Furniture repair cost guide for Mohali showing pricing by furniture type by FurniRevive",
    caption: "Furniture Repair Cost Mohali 2026 — All types priced transparently | FurniRevive",
  },
  intro: [
    "Whether you need a wobbly chair fixed in your Kharar home, a bed frame reinforced in your Phase 10 apartment, a modular wardrobe door realigned in your Aerocity flat, or a complete furniture set polished — this guide tells you exactly what it costs in Mohali. Transparent, up-to-date pricing for every furniture repair service.",
    "All prices apply to doorstep service across all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, Sunny Enclave, Kharar, Landran, and Zirakpur. Uniform pricing — no area surcharges. Free inspection included with every booking.",
    "For sofa-specific pricing, see <a href=\"/sofa-repair-cost-mohali\">sofa repair cost Mohali</a>. For recliner pricing, see <a href=\"/recliner-repair-cost-mohali\">recliner repair cost Mohali</a>. For carpenter services, see <a href=\"/carpenter-home-service-mohali\">carpenter home service Mohali</a>. Also see <a href=\"/furniture-repair-cost-chandigarh\">Chandigarh furniture pricing</a>.",
  ],
  whyChoose: [
    { title: "Every Furniture Type Covered", description: "Chairs, beds, wardrobes, tables, sofas, cabinets, dressing tables, TV units — each with clear pricing ranges based on actual Mohali jobs." },
    { title: "Free Doorstep Inspection", description: "Our carpenter visits your Mohali home, inspects the furniture, and quotes exact cost — no charge for inspection." },
    { title: "No Hidden Charges", description: "Quoted price includes labour and standard materials. Specialty materials (if needed) quoted separately with your approval." },
    { title: "Written Quote Policy", description: "Detailed breakdown before work begins. You know exactly what you're paying for — no vague 'approximately' figures." },
    { title: "Repair vs Replace Advice", description: "We'll honestly tell you if repair doesn't make financial sense. If replacement is better, we won't push unnecessary repairs." },
    { title: "Save 50–70% vs New", description: "Professional furniture repair consistently saves 50–70% compared to buying equivalent new pieces in Mohali." },
  ],
  process: [
    { step: "Check Prices Below", description: "Use this guide to estimate repair cost based on your furniture type and the nature of the damage." },
    { step: "Book Free Inspection", description: "Call +91 92179 99355. Our carpenter visits your home to assess and quote — no obligation." },
    { step: "Approve Written Quote", description: "Receive detailed cost breakdown on the spot. Approve or decline freely." },
    { step: "Repair at Your Doorstep", description: "Approved? Repair begins immediately or at your scheduled time. Warranty card issued on completion." },
  ],
  benefits: [
    "Chair repair from ₹500",
    "Bed repair from ₹599",
    "Wardrobe repair from ₹800",
    "Table repair from ₹500",
    "Sofa repair from ₹800",
    "Polish and refinishing from ₹1,500",
    "Hydraulic bed mechanism from ₹1,000",
    "Free inspection — no obligation",
    "Written quote before work",
    "Save 50–70% vs replacement",
    "Uniform Mohali pricing",
    "6-month warranty on all repairs",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Cost by Type — Mohali 2026",
      body: [
        "<strong>Chair repair:</strong> Dining chair re-gluing ₹500–₹1,000. Study chair gas lift ₹800–₹1,800. Chair upholstery ₹800–₹2,000 per chair. Armrest repair ₹500–₹1,500. Full chair restoration ₹1,500–₹2,500. See <a href=\"/office-chair-repair-mohali\">office chair repair</a> for specialised office chair pricing.",
        "<strong>Bed repair:</strong> Slat replacement ₹599–₹1,500. Headboard repair ₹800–₹2,000. Frame reinforcement ₹1,000–₹2,500. Hydraulic storage mechanism ₹1,000–₹2,500. Side rail repair ₹600–₹1,500. Full bed frame restoration ₹2,000–₹3,000.",
        "<strong>Wardrobe/cabinet repair:</strong> Hinge replacement ₹200–₹500 per hinge. Slider track repair ₹500–₹1,500. Shutter alignment ₹400–₹1,000. Shelf reinforcement ₹300–₹800. Lock replacement ₹300–₹800. Soft-close fitting ₹400–₹1,000 per door. Full wardrobe repair ₹2,000–₹4,000.",
        "<strong>Table repair:</strong> Leg reinforcement ₹500–₹1,500. Surface scratch removal ₹500–₹1,500. Extension mechanism ₹800–₹2,000. Veneer repair ₹600–₹2,000. Full table restoration ₹1,500–₹3,000.",
        "<strong>Polish & refinishing:</strong> Single piece touch-up ₹1,500–₹3,000. Dining set (table + 6 chairs) ₹4,000–₹8,000. Bed polish ₹2,000–₹4,000. Wardrobe polish ₹2,500–₹5,000. Types: melamine, PU, French polish, lacquer.",
      ],
    },
    {
      heading: "Cost Factors That Affect Your Quote in Mohali",
      body: [
        "Furniture size: larger pieces require more material and time. Damage severity: a single loose joint vs complete frame rebuild. Material type: solid wood costs more to source matching sections than engineered wood. Finish type: PU polish costs more than melamine but lasts longer.",
        "Number of pieces: multi-piece jobs (dining set, bedroom set) often qualify for bundled discounts. Urgency: standard and same-day service carry the same price (no rush surcharge). Location: uniform pricing across all Mohali areas — Phase 1 to Zirakpur.",
      ],
    },
    {
      heading: "When to Repair vs Replace — Cost Analysis for Mohali",
      body: [
        "Repair makes clear financial sense when: repair cost is under 35% of new furniture cost, the frame is structurally sound, and the furniture fits your space and style. Modular furniture in newer Mohali apartments (Phase 7–11, Aerocity) is often worth repairing when the issue is limited to hardware (hinges, channels, soft-close) rather than panel damage.",
        "Consider replacement when: the frame itself is broken beyond repair (rotted MDF, severe moisture damage from leaks), or repair cost exceeds 50% of a comparable new piece. Our carpenters will honestly advise — we don't push repairs on furniture that genuinely needs replacing.",
      ],
    },
  ],
  priceTable: {
    heading: "Furniture Repair Cost in Mohali — Complete 2026 Price List",
    rows: [
      { service: "Dining Chair Re-gluing", price: "₹500–₹1,000" },
      { service: "Chair Upholstery (per chair)", price: "₹800–₹2,000" },
      { service: "Bed Slat Replacement", price: "₹599–₹1,500" },
      { service: "Bed Frame Reinforcement", price: "₹1,000–₹2,500" },
      { service: "Hydraulic Bed Mechanism", price: "₹1,000–₹2,500" },
      { service: "Wardrobe Hinge (per hinge)", price: "₹200–₹500" },
      { service: "Wardrobe Slider Track", price: "₹500–₹1,500" },
      { service: "Table Leg Reinforcement", price: "₹500–₹1,500" },
      { service: "Single Piece Polish Touch-up", price: "₹1,500–₹3,000" },
      { service: "Dining Set Polish (table + 6 chairs)", price: "₹4,000–₹8,000" },
      { service: "Sofa Repair", price: "₹800–₹12,000" },
      { service: "Complete Furniture Restoration", price: "₹2,000–₹15,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  faqs: [
    { question: "What is the cheapest furniture repair in Mohali?", answer: "Basic repairs like hinge replacement (₹200–₹500 per hinge), chair re-gluing (₹500), and small fixes start at ₹499. Our carpenter home service handles jobs of any size." },
    { question: "Do you charge for inspection in Mohali?", answer: "No. Doorstep inspection and written quote are free across all Mohali areas. You only pay if you approve and proceed with the repair." },
    { question: "Is polishing included in furniture repair cost?", answer: "Basic repair pricing covers structural and functional fixes. Polish/refinishing is a separate service starting at ₹1,500 — quoted separately if needed. Combined repair + polish packages available at discounted rates." },
    { question: "Do prices differ by area in Mohali?", answer: "No. Our pricing is uniform across all Mohali — same rates for Phase 1, Aerocity, IT City, Kharar, and Zirakpur. No distance or zone surcharges." },
  ],
  relatedPages: mohaliRelatedExcluding("furniture-repair-cost-mohali"),
  keywords: [
    "furniture repair cost mohali",
    "furniture repair price mohali",
    "carpenter charges mohali",
    "furniture polish cost mohali",
    "wardrobe repair cost mohali",
    "bed repair cost mohali",
    "chair repair cost mohali",
    "furniture repair charges mohali",
    "furniture repair cost aerocity mohali",
  ],
};
