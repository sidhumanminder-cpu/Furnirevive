import type { SeoPageData } from "@/lib/seo-constants.ts";

// ---------------------------------------------------------------------------
// CHANDIGARH HUB PAGES
// ---------------------------------------------------------------------------

const CHANDIGARH_RELATED_PAGES = [
  { label: "Sofa Repair Chandigarh", href: "/sofa-repair-chandigarh" },
  { label: "Recliner Repair Chandigarh", href: "/recliner-repair-chandigarh" },
  { label: "Furniture Repair Chandigarh", href: "/furniture-repair-chandigarh" },
  { label: "Sofa Upholstery Chandigarh", href: "/sofa-upholstery-chandigarh" },
  { label: "Office Chair Repair Chandigarh", href: "/office-chair-repair-chandigarh" },
  { label: "Same Day Sofa Repair Chandigarh", href: "/same-day-sofa-repair-chandigarh" },
  { label: "Doorstep Sofa Repair Chandigarh", href: "/doorstep-sofa-repair-chandigarh" },
  { label: "Leather Sofa Repair Chandigarh", href: "/leather-sofa-repair-chandigarh" },
  { label: "Carpenter Home Service Chandigarh", href: "/carpenter-home-service-chandigarh" },
  { label: "Sofa Repair Cost Chandigarh", href: "/sofa-repair-cost-chandigarh" },
  { label: "Recliner Repair Cost Chandigarh", href: "/recliner-repair-cost-chandigarh" },
  { label: "Furniture Repair Cost Chandigarh", href: "/furniture-repair-cost-chandigarh" },
  { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
];

function chandigarhRelatedExcluding(slug: string) {
  return CHANDIGARH_RELATED_PAGES.filter((p) => p.href !== `/${slug}`);
}

// ── Tier 1 — Core service hubs ─────────────────────────────────────────────

export const sofaRepairChandigarh: SeoPageData = {
  slug: "sofa-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Sofa Repair in Chandigarh from ₹800 | Same-Day Doorstep Service | FurniRevive",
  metaDescription:
    "Professional sofa repair in Chandigarh from ₹800. Same-day doorstep service in Sector 17, Sector 22, Sector 35, Sector 43, Manimajra & all sectors. Foam, spring, upholstery, recliner repair. Free inspection. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Sofa repair in Chandigarh costs ₹800–₹4,500 for most repairs — foam replacement ₹1,200–₹3,500, spring repair ₹800–₹2,000, upholstery ₹2,000–₹4,500 per seat. FurniRevive provides same-day home service across all Chandigarh sectors, Mohali, and Panchkula with free inspection and a 6-month written warranty. Call +91 92179 99355.",
  h1: "Sofa Repair in Chandigarh — Doorstep Service from ₹800",
  heroSubtitle:
    "Chandigarh Tricity's trusted sofa repair — at your doorstep across all sectors, Manimajra, Industrial Area, Mohali & Panchkula. Starting ₹800. Free inspection. 6-month warranty.",
  showcaseImage: {
    heading: "Sofa Repair Before & After — Real Results in Chandigarh",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Before and after sofa repair in Chandigarh showing cushion restoration and fabric change by FurniRevive",
    caption: "Sofa Repair Chandigarh — Fabric & foam restoration | All Sectors | Starting ₹800 | FurniRevive",
  },
  intro: [
    "Chandigarh's planned layout and spacious sector homes mean families invest in quality sofas that anchor their drawing rooms. When those sofas develop sagging cushions, torn upholstery, cracked leather, or squeaky frames after years of use, professional repair restores them at a fraction of replacement cost. FurniRevive brings expert sofa repair to every Chandigarh sector — from the commercial hub of Sector 17 to the residential heartlands of Sector 35, 43, and beyond.",
    "Our skilled upholstery specialists serve the entire Chandigarh Tricity region — all UT sectors, Manimajra, Industrial Area Phase 1 & 2, and extend into <a href=\"/recliner-repair-chandigarh\">Mohali</a> (Phase 1–10, Aerocity) and <a href=\"/furniture-repair-chandigarh\">Panchkula</a> (Sector 5, 10). We arrive with high-density foam, premium fabrics, springs, and professional tools to complete repairs in a single visit at your home.",
    "Why spend ₹30,000–₹1,00,000 on a new sofa when expert repair costs ₹800–₹12,000 and makes your existing piece look and feel brand new? Every repair includes a 6-month warranty and transparent pricing — no hidden charges. Check our <a href=\"/sofa-repair-cost-chandigarh\">sofa repair cost guide for Chandigarh</a> for detailed pricing.",
    "Chandigarh's dry winters and hot summers accelerate leather cracking and foam compression. Our technicians understand these regional wear patterns and use materials rated for North Indian climate conditions. Same-day service available when booked before noon — call +91 92179 99355.",
  ],
  whyChoose: [
    { title: "All Chandigarh Sectors Covered", description: "We serve every sector in the UT plus Manimajra, Industrial Area, and extend to Mohali and Panchkula — true Tricity coverage." },
    { title: "Same Day Doorstep Service", description: "Book before noon for same-day sofa repair. Our technicians arrive with all materials — no second visits needed." },
    { title: "Affordable from ₹800", description: "Chandigarh's most competitive sofa repair rates. Save 50–70% compared to buying new. Transparent quotes with no hidden charges." },
    { title: "Experienced Specialists", description: "10+ years experience handling fabric, leather, rexine, and all sofa materials with expert precision and premium-grade tools." },
    { title: "Climate-Rated Materials", description: "We use foam and fabrics rated for Chandigarh's dry winters and hot summers — ensuring repairs last through seasonal extremes." },
    { title: "6 Month Warranty", description: "Every sofa repair backed by a written 6-month warranty. Any issue within warranty period fixed free at your Chandigarh home." },
  ],
  process: [
    { step: "Book Your Appointment", description: "Call +91 92179 99355, WhatsApp, or book online. Share photos of the damage for a quick Chandigarh-specific estimate." },
    { step: "Free Doorstep Inspection", description: "Our specialist visits your Chandigarh home, inspects the sofa thoroughly, and provides a detailed no-obligation quotation on the spot." },
    { step: "On-Site Repair", description: "Approved? Our craftsmen repair your sofa right at your doorstep with premium materials — foam, fabric, springs, hardware." },
    { step: "Quality Check & Warranty", description: "Final inspection, workspace cleanup, and 6-month warranty card handed over. Your sofa is ready to use immediately." },
  ],
  benefits: [
    "Save 50–70% vs buying a new sofa",
    "Doorstep service across all Chandigarh sectors",
    "Same-day availability when booked before noon",
    "All sofa types — L-shape, recliner, sectional, sofa cum bed",
    "Fabric, leather, and rexine sofa repair",
    "High-density branded foam (32–40 density)",
    "Frame reinforcement and spring replacement",
    "Recliner mechanism repair — manual and motorised",
    "Extended coverage to Mohali and Panchkula",
    "Starting at just ₹800",
    "6-month warranty on all repairs",
    "Free inspection and transparent pricing",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services We Offer in Chandigarh",
      body: [
        "FurniRevive's Chandigarh sofa repair covers every issue your sofa can develop. Cushion re-stuffing with Sleepwell and Duraflex branded HR foam (32–40 density) restores sagging seats to factory firmness. Complete fabric re-upholstery with 500+ material options — cotton, velvet, linen, microfibre, rexine, and leatherette — gives your sofa a fresh new look tailored to Chandigarh's modern interiors.",
        "For structural damage, our carpenters handle frame repair, wooden joint reinforcement with industrial adhesives, spring replacement with heavy-gauge steel, and complete frame rebuilding. We also specialise in <a href=\"/leather-sofa-repair-chandigarh\">leather sofa repair</a> (crack filling, colour restoration, conditioning) and <a href=\"/recliner-repair-chandigarh\">recliner mechanism repair</a> (manual and motorised). <a href=\"/sofa-upholstery-chandigarh\">Full sofa upholstery change</a> available with doorstep fabric selection.",
      ],
    },
    {
      heading: "Areas We Serve for Sofa Repair in Chandigarh Tricity",
      body: [
        "We provide doorstep sofa repair across the entire Chandigarh Tricity. In Chandigarh UT: all sectors including Sector 7, 8, 9, 10, 11, 15, 17, 22, 26, 34, 35, 38, 43, 44, 47, Manimajra, Ram Darbar, Dhanas, Daria, Hallomajra, Kishangarh, and Industrial Area Phase 1 & 2.",
        "In Mohali (SAS Nagar): Phase 1 through 11, Sector 58–79, Aerocity, IT City, and Kharar. In Panchkula: Sector 1–27, Pinjore, Kalka, and Barwala. Whether you live in a Chandigarh Housing Board flat, a kothi in Sector 8, or a high-rise in Mohali Aerocity — our technicians reach you on time with all materials.",
      ],
    },
    {
      heading: "Sofa Repair Cost in Chandigarh — Transparent Pricing",
      body: [
        "Sofa repair in Chandigarh starts at ₹800 for basic spring fixes. Foam replacement costs ₹1,200–₹3,500 per seat depending on density. Fabric re-upholstery ranges from ₹2,000–₹4,500 per seat. Complete 3-seater sofa restoration: ₹3,000–₹12,000 depending on damage extent and materials chosen.",
        "Professional sofa repair saves Chandigarh families 50–70% compared to buying new. A sofa costing ₹40,000 new can be fully restored for ₹4,000–₹10,000. We provide a free doorstep inspection and written quote before starting — no hidden charges. For full pricing details see our <a href=\"/sofa-repair-cost-chandigarh\">Chandigarh sofa repair cost guide</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Repair Cost in Chandigarh — 2026 Price Guide",
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
    { question: "How much does sofa repair cost in Chandigarh?", answer: "Sofa repair in Chandigarh starts at ₹800. Foam replacement ₹1,200–₹3,500, spring repair ₹800–₹2,000, upholstery per seat ₹2,000–₹4,500, recliner repair ₹1,499–₹5,500. Free inspection and written quote at your doorstep. Call +91 92179 99355." },
    { question: "Do you provide sofa repair in all Chandigarh sectors?", answer: "Yes — FurniRevive covers all Chandigarh UT sectors (1–56), Manimajra, Industrial Area, plus Mohali and Panchkula. Same-day service available across the full Tricity." },
    { question: "Is same-day sofa repair available in Chandigarh?", answer: "Yes. Book before noon for same-day sofa repair at your Chandigarh address. Most repairs — foam replacement, spring fixing, upholstery patching — completed in 2–4 hours in a single visit." },
    { question: "Do you serve Mohali and Panchkula for sofa repair?", answer: "Yes. Our Chandigarh Tricity coverage includes Mohali (Phase 1–10, Aerocity, Kharar) and Panchkula (Sector 1–27, Pinjore, Kalka). Same pricing and warranty as Chandigarh UT." },
    { question: "Do you repair leather sofas in Chandigarh?", answer: "Yes. Our leather sofa repair covers crack filling, colour restoration, tear mending, and deep conditioning — all at your Chandigarh doorstep. Starting ₹1,500." },
  ],
  relatedPages: chandigarhRelatedExcluding("sofa-repair-chandigarh"),
  keywords: [
    "sofa repair chandigarh",
    "sofa repair near me chandigarh",
    "sofa repair cost chandigarh",
    "sofa foam replacement chandigarh",
    "sofa upholstery chandigarh",
    "leather sofa repair chandigarh",
    "recliner repair chandigarh",
    "sofa repair sector 17 chandigarh",
    "sofa repair manimajra",
    "sofa repair mohali",
    "sofa repair panchkula",
  ],
};

export const reclinerRepairChandigarh: SeoPageData = {
  slug: "recliner-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Recliner Repair in Chandigarh from ₹1,499 | Manual & Motorised | FurniRevive",
  metaDescription:
    "Expert recliner repair in Chandigarh from ₹1,499. Manual & motorised recliner mechanism fix, motor replacement, upholstery repair. Same-day doorstep service across all sectors, Mohali & Panchkula. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Recliner repair in Chandigarh costs ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000, motorised motor replacement ₹2,999–₹5,500, upholstery repair ₹1,500–₹4,000. FurniRevive provides same-day doorstep service across Chandigarh Tricity with free inspection and 6-month warranty. Call +91 92179 99355.",
  h1: "Recliner Repair in Chandigarh — Manual & Motorised from ₹1,499",
  heroSubtitle:
    "Chandigarh's specialist recliner repair service — mechanism fixes, motor replacements, and upholstery restoration at your doorstep. All major brands covered. Same-day service. 6-month warranty.",
  showcaseImage: {
    heading: "Recliner Repair Before & After — Chandigarh",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Recliner mechanism repair in Chandigarh showing motor and upholstery restoration by FurniRevive",
    caption: "Recliner Repair Chandigarh — Mechanism & upholstery fix | From ₹1,499 | FurniRevive",
  },
  intro: [
    "Recliners have become a staple in Chandigarh's modern homes — from La-Z-Boy and Eezy units in Sector 8 kothis to budget motorised recliners in Mohali high-rises. When the mechanism jams, the motor burns out, or the leather cracks after Chandigarh's dry winter, you need a specialist — not a general carpenter. FurniRevive is Chandigarh Tricity's dedicated recliner repair service.",
    "We repair all recliner types at your doorstep: manual pull-cable recliners, lever-operated mechanisms, single-motor electric recliners, and dual-motor lift chairs. Our technicians carry replacement motors, actuators, cables, remote units, and upholstery materials for same-day resolution across all Chandigarh sectors, <a href=\"/sofa-repair-chandigarh\">Mohali</a>, and Panchkula.",
    "Manual recliner repair starts at ₹1,499 and motorised repair from ₹2,999. Every fix includes a 6-month warranty. For full pricing, see our <a href=\"/recliner-repair-cost-chandigarh\">recliner repair cost guide for Chandigarh</a>. We also handle <a href=\"/leather-sofa-repair-chandigarh\">leather upholstery restoration</a> on recliner seats.",
  ],
  whyChoose: [
    { title: "Dedicated Recliner Specialists", description: "Our technicians are trained exclusively on recliner mechanisms — manual, motorised, and dual-motor. Not general carpenters." },
    { title: "All Brands Covered", description: "La-Z-Boy, Eezy, Durian, Nilkamal, HTL, Urban Ladder, and all local brands. We carry brand-specific replacement parts." },
    { title: "Same Day Motor Replacement", description: "Common recliner motors stocked for same-day electrical repair. No waiting weeks for parts to arrive." },
    { title: "Doorstep Service Across Tricity", description: "All Chandigarh sectors, Mohali phases, and Panchkula sectors covered. We come to you with all tools and parts." },
    { title: "Transparent Pricing", description: "Manual repair from ₹1,499, motorised from ₹2,999. Written quote before work begins. No hidden charges." },
    { title: "6 Month Warranty", description: "All mechanism and motor repairs backed by a written 6-month warranty. Parts and labour both covered." },
  ],
  process: [
    { step: "Describe the Fault", description: "Call +91 92179 99355 or WhatsApp a video of the recliner issue. We identify the likely fault and confirm parts availability." },
    { step: "Doorstep Diagnosis", description: "Our recliner specialist visits your Chandigarh home, diagnoses the exact issue, and provides a written quote." },
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
    "Full Chandigarh Tricity coverage",
    "6-month warranty on parts and labour",
  ],
  contentSections: [
    {
      heading: "Recliner Repair Services in Chandigarh",
      body: [
        "Our Chandigarh recliner repair covers every fault type. Manual mechanism issues: broken pull cables, jammed levers, stiff footrests, worn locking pins, and broken side-release handles. Motorised faults: burnt-out lift motors, failed actuators, unresponsive remotes, transformer failures, and overheating cut-outs.",
        "We also handle recliner upholstery problems — cracked leather on headrests and armrests (common after Chandigarh's dry winters), torn fabric on seat panels, and sagging recliner cushion foam. For leather-specific work, see our <a href=\"/leather-sofa-repair-chandigarh\">leather sofa repair Chandigarh</a> service.",
      ],
    },
    {
      heading: "Recliner Repair Areas in Chandigarh Tricity",
      body: [
        "Same-day recliner repair across: Chandigarh UT — all sectors (1–56), Manimajra, Industrial Area, Ram Darbar, Dhanas, Daria. Mohali — Phase 1 through 11, Sector 58–79, Aerocity, IT City, Kharar. Panchkula — Sector 1–27, Pinjore, Kalka.",
        "Chandigarh's modern apartment complexes and kothis both have high recliner density — our technicians carry brand-specific parts and navigate society security protocols smoothly.",
      ],
    },
    {
      heading: "Recliner Repair Cost in Chandigarh",
      body: [
        "Manual recliner repair: ₹1,499–₹3,000 depending on mechanism type. Motorised motor replacement: ₹2,999–₹5,500 depending on brand and motor type. Actuator replacement: ₹2,000–₹3,500. Remote/transformer: ₹800–₹2,000. Upholstery repair on recliners: ₹1,500–₹4,000.",
        "Full recliner sofa set repairs (3-piece with 2 recliners): ₹4,000–₹12,000 depending on faults. Free doorstep diagnosis included. See the full <a href=\"/recliner-repair-cost-chandigarh\">recliner repair cost breakdown for Chandigarh</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Recliner Repair Cost in Chandigarh — 2026 Pricing",
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
    { question: "Do you repair motorised recliners in Chandigarh?", answer: "Yes. We repair all motorised recliners — single-motor, dual-motor, and lift-chair types. Motor replacement, actuator repair, remote sync, and transformer replacement all done at your Chandigarh doorstep. Starting ₹2,999." },
    { question: "Which recliner brands do you repair in Chandigarh?", answer: "We repair all brands — La-Z-Boy, Eezy, Durian, Nilkamal, HTL, Urban Ladder, Pepperfry, Royaloak, Godrej Interio, and local unbranded recliners. Brand-specific parts carried for same-day service." },
    { question: "How long does recliner repair take?", answer: "Most recliner repairs in Chandigarh are completed in 1–3 hours at your home. Motor replacement takes 1–2 hours. Mechanism rebuilds take 2–3 hours. Same-day service when booked before noon." },
    { question: "Do you cover Mohali for recliner repair?", answer: "Yes. Our recliner repair covers all Mohali phases (1–11), Sector 58–79, Aerocity, IT City, and Kharar. Same pricing, warranty, and same-day availability as Chandigarh UT." },
  ],
  relatedPages: chandigarhRelatedExcluding("recliner-repair-chandigarh"),
  keywords: [
    "recliner repair chandigarh",
    "recliner repair near me chandigarh",
    "motorised recliner repair chandigarh",
    "recliner mechanism repair chandigarh",
    "la-z-boy repair chandigarh",
    "recliner motor replacement chandigarh",
    "recliner repair mohali",
    "recliner repair panchkula",
    "recliner repair cost chandigarh",
  ],
};

export const furnitureRepairChandigarh: SeoPageData = {
  slug: "furniture-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Furniture Repair in Chandigarh from ₹599 | Doorstep Service All Sectors | FurniRevive",
  metaDescription:
    "Expert furniture repair in Chandigarh from ₹599. Sofa, bed, chair, wardrobe, table repair at your doorstep across all sectors, Manimajra, Mohali & Panchkula. Same-day service. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Furniture repair in Chandigarh starts at ₹599. Sofa repair from ₹800, bed repair ₹599–₹3,000, chair repair ₹500–₹2,500, wardrobe repair ₹800–₹4,000. FurniRevive provides same-day doorstep service across all Chandigarh sectors, Mohali, and Panchkula with free inspection and 6-month warranty. Call +91 92179 99355.",
  h1: "Furniture Repair in Chandigarh — All Types from ₹599",
  heroSubtitle:
    "Complete furniture repair across Chandigarh Tricity — sofas, beds, chairs, tables, wardrobes, and cabinets repaired at your doorstep. Starting ₹599. Free inspection. 6-month warranty.",
  showcaseImage: {
    heading: "Furniture Repair Chandigarh — Professional Doorstep Restoration",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Professional furniture repair in Chandigarh showing wardrobe and chair restoration by FurniRevive",
    caption: "Furniture Repair Chandigarh — All furniture types | Starting ₹599 | FurniRevive",
  },
  intro: [
    "Chandigarh's sector-based layout means most homes are spacious enough for substantial furniture collections — solid wood dining sets, teak wardrobes, upholstered beds, and study tables that represent significant investments. When any piece develops a fault — loose joints, broken hinges, sagging beds, or chipped polish — professional repair is the practical choice over expensive replacement.",
    "FurniRevive provides comprehensive furniture repair services across all Chandigarh sectors, Manimajra, Industrial Area, and the broader Tricity including <a href=\"/sofa-repair-chandigarh\">Mohali</a> and Panchkula. Our team of experienced carpenters, polishers, and upholstery specialists handle every furniture type — wooden, metal, engineered wood, and upholstered pieces.",
    "Prices start at just ₹599 for basic repairs and every job comes with a 6-month warranty. Our <a href=\"/carpenter-home-service-chandigarh\">carpenter home service</a> covers everything from minor hinge replacements to full furniture restoration. Check our <a href=\"/furniture-repair-cost-chandigarh\">furniture repair cost guide for Chandigarh</a> for detailed pricing.",
    "Chandigarh homes built in the 1970s–90s often contain solid sheesham and teak furniture that is structurally superior to modern replacements at any price point. These pieces are always worth restoring — our specialists reinforce joints, replace damaged sections, and refinish surfaces to extend their life by another decade or more.",
  ],
  whyChoose: [
    { title: "Every Furniture Type", description: "Sofas, beds, chairs, dining tables, wardrobes, kitchen cabinets, TV units, bookshelves, office desks — all repaired at your Chandigarh doorstep." },
    { title: "Skilled Carpenters & Polishers", description: "Our team brings 10+ years of experience with solid wood, engineered wood, MDF, metal, and upholstered furniture repair." },
    { title: "Full Tricity Coverage", description: "All Chandigarh UT sectors, Manimajra, Industrial Area, Mohali (all phases), Panchkula (all sectors), Kharar, and Pinjore." },
    { title: "Affordable from ₹599", description: "Basic repairs start at ₹599. Save 50–70% vs replacement. Transparent pricing with no hidden charges." },
    { title: "Same Day Response", description: "Book before noon for same-day furniture repair. Our carpenters are stationed across the Tricity for rapid response." },
    { title: "6 Month Warranty", description: "All furniture repairs backed by a written 6-month warranty. Parts and workmanship both covered." },
  ],
  process: [
    { step: "Share the Problem", description: "Call +91 92179 99355 or WhatsApp photos of your furniture issue. We provide a quick estimate for your Chandigarh address." },
    { step: "Free Doorstep Inspection", description: "Our carpenter visits your home, inspects the furniture, and provides a detailed written quotation." },
    { step: "On-Site Repair", description: "Once approved, repair is completed at your doorstep with professional tools and premium materials." },
    { step: "Warranty Handover", description: "Quality check, workspace cleanup, and 6-month warranty card issued. Furniture ready for immediate use." },
  ],
  benefits: [
    "Doorstep service across all Chandigarh sectors",
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
    "Extended coverage to Mohali and Panchkula",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Services in Chandigarh",
      body: [
        "Our Chandigarh furniture repair covers the complete range. For beds: headboard fixing, slat replacement, hydraulic storage repair, frame reinforcement, and side rail repair. For chairs: re-gluing loose joints, seat replacement, armrest repair, and office chair gas lift and wheel replacement.",
        "Wardrobes and cabinets: hinge replacement, slider track repair, shelf reinforcement, shutter alignment, soft-close fitting, and lock replacement. Dining tables: leg reinforcement, surface scratches and stains, extension mechanism repair, and complete refinishing. All at your Chandigarh doorstep. Also see our <a href=\"/sofa-repair-chandigarh\">dedicated sofa repair service</a> and <a href=\"/office-chair-repair-chandigarh\">office chair repair</a>.",
      ],
    },
    {
      heading: "Furniture Repair Coverage — Chandigarh Tricity",
      body: [
        "Full doorstep coverage across: Chandigarh UT — Sector 1–56, Manimajra, Ram Darbar, Dhanas, Daria, Hallomajra, Industrial Area Phase 1 & 2, Kishangarh, and all government housing sectors. Mohali — Phase 1–11, Sector 58–79, Aerocity, IT City, Kharar, Landran, and Zirakpur.",
        "Panchkula — Sector 1–27, Pinjore, Kalka, and Barwala. Chandigarh's older kothis (especially Sector 7–11, 18–22) have exceptionally good quality teak and sheesham furniture that is always worth professional restoration rather than replacement.",
      ],
    },
    {
      heading: "Furniture Repair Pricing in Chandigarh",
      body: [
        "Basic furniture repairs start at ₹599 in Chandigarh. Chair repair: ₹500–₹2,500. Bed repair: ₹599–₹3,000. Wardrobe repair: ₹800–₹4,000. Table repair: ₹500–₹3,000. Polish and refinishing: ₹1,500–₹8,000 depending on size. Complete furniture restoration: ₹2,000–₹15,000.",
        "We always provide a free doorstep inspection and written quote before starting work. See our detailed <a href=\"/furniture-repair-cost-chandigarh\">furniture repair cost guide for Chandigarh</a> for service-wise pricing breakdowns.",
      ],
    },
  ],
  priceTable: {
    heading: "Furniture Repair Cost in Chandigarh — 2026 Price Guide",
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
    { question: "What furniture do you repair in Chandigarh?", answer: "We repair all furniture — sofas, beds, chairs, dining tables, wardrobes, kitchen cabinets, TV units, bookshelves, office desks, dressing tables, and shoe racks. Wooden, metal, engineered wood, and upholstered pieces all covered." },
    { question: "Do you repair furniture in Mohali and Panchkula?", answer: "Yes. Our Chandigarh Tricity service covers all Mohali phases (1–11), Sector 58–79, Aerocity, Kharar, and all Panchkula sectors (1–27), Pinjore, and Kalka." },
    { question: "How much does furniture repair cost in Chandigarh?", answer: "Basic furniture repair starts at ₹599. Prices vary by furniture type and damage — chair repair ₹500–₹2,500, bed repair ₹599–₹3,000, wardrobe repair ₹800–₹4,000. Free inspection with written quote provided." },
    { question: "Do you polish and refinish wooden furniture?", answer: "Yes. Our polishers handle melamine, PU, French polish, and lacquer finishes on all wooden furniture. Polish and refinishing costs ₹1,500–₹8,000 depending on the piece size and finish type." },
    { question: "Can you repair old teak and sheesham furniture in Chandigarh?", answer: "Absolutely — and we strongly recommend it. Chandigarh's older teak and sheesham furniture is superior in quality to modern replacements. We reinforce joints, replace damaged wood sections, and refinish surfaces to extend life by 10–15 years." },
  ],
  relatedPages: chandigarhRelatedExcluding("furniture-repair-chandigarh"),
  keywords: [
    "furniture repair chandigarh",
    "furniture repair near me chandigarh",
    "carpenter chandigarh",
    "furniture repair cost chandigarh",
    "wardrobe repair chandigarh",
    "bed repair chandigarh",
    "chair repair chandigarh",
    "furniture polish chandigarh",
    "furniture repair mohali",
    "furniture repair panchkula",
  ],
};

export const sofaUpholsteryChandigarh: SeoPageData = {
  slug: "sofa-upholstery-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Sofa Upholstery in Chandigarh from ₹2,000/seat | 500+ Fabrics | FurniRevive",
  metaDescription:
    "Professional sofa upholstery in Chandigarh from ₹2,000 per seat. 500+ fabric options — cotton, velvet, linen, microfibre, leatherette. Doorstep fabric selection and on-site re-upholstery across all sectors. 6-month warranty. Call +91 92179 99355.",
  quickAnswer:
    "Sofa upholstery in Chandigarh costs ₹2,000–₹4,500 per seat. Full 3-seater re-upholstery ₹6,000–₹15,000 depending on fabric. 500+ materials available — cotton, velvet, linen, microfibre, rexine, leatherette. FurniRevive provides doorstep fabric selection and on-site upholstery across all Chandigarh sectors. Call +91 92179 99355.",
  h1: "Sofa Upholstery in Chandigarh — 500+ Fabrics from ₹2,000/seat",
  heroSubtitle:
    "Transform your sofa with premium re-upholstery — 500+ fabrics brought to your Chandigarh doorstep. Cotton, velvet, linen, microfibre, leatherette. Professional on-site fitting. 6-month warranty.",
  showcaseImage: {
    heading: "Sofa Upholstery Chandigarh — Fabric Selection & Transformation",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Sofa upholstery fabric change in Chandigarh showing before and after re-upholstery by FurniRevive",
    caption: "Sofa Upholstery Chandigarh — 500+ fabric options | From ₹2,000/seat | FurniRevive",
  },
  intro: [
    "A sofa's fabric defines its character — and after years of daily use in Chandigarh's climate (dry winters that crack leather, humid monsoons that stain fabric), re-upholstery can completely transform a tired-looking sofa into a statement piece. FurniRevive brings 500+ fabric options directly to your Chandigarh doorstep for on-site selection and fitting.",
    "Our upholstery specialists serve all Chandigarh sectors, Manimajra, Industrial Area, Mohali (Phase 1–10, Aerocity), and Panchkula (Sector 5–15). We handle everything from single-panel patch repairs to complete sofa set re-upholstery — all done at your home in a single visit.",
    "Materials include premium cotton, Italian velvet, Belgian linen, high-grade microfibre, breathable leatherette, and genuine leather. Prices start at ₹2,000 per seat for standard fabrics. Every re-upholstery includes foam inspection and replacement recommendation if needed — see our <a href=\"/sofa-repair-chandigarh\">sofa repair service</a> for combined packages. Full pricing at our <a href=\"/sofa-repair-cost-chandigarh\">cost guide</a>.",
  ],
  whyChoose: [
    { title: "500+ Fabric Options", description: "Cotton, velvet, linen, microfibre, rexine, leatherette, and genuine leather — all brought to your doorstep for easy comparison and selection." },
    { title: "Doorstep Fabric Selection", description: "No showroom visits needed. Our specialist brings swatch books to your Chandigarh home, helping you choose the perfect material and colour." },
    { title: "On-Site Fitting", description: "Complete re-upholstery done at your home in a single visit. Your sofa never leaves your living room." },
    { title: "Climate-Appropriate Advice", description: "We recommend fabrics suited to Chandigarh's seasonal extremes — breathable for summers, crack-resistant for winters." },
    { title: "Combined Foam + Upholstery", description: "Re-upholstering without replacing compressed foam wastes money. We inspect and recommend foam replacement where needed." },
    { title: "6 Month Warranty", description: "Stitching, fitting, and fabric durability covered under written 6-month warranty. Loose seams or premature wear addressed free." },
  ],
  process: [
    { step: "Consultation Call", description: "Call +91 92179 99355 or WhatsApp. Describe your sofa type and share photos. We confirm a doorstep consultation slot." },
    { step: "Doorstep Fabric Selection", description: "Our specialist visits with 500+ fabric swatches. You choose material, colour, and pattern with expert guidance." },
    { step: "On-Site Re-Upholstery", description: "Our team removes old fabric, inspects foam and frame, and fits new upholstery right at your Chandigarh home." },
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
    "Climate-appropriate fabric recommendations",
    "Starting ₹2,000 per seat",
    "Full Chandigarh Tricity coverage",
    "6-month warranty on all work",
  ],
  contentSections: [
    {
      heading: "Sofa Upholstery Services in Chandigarh",
      body: [
        "Our Chandigarh sofa upholstery service covers: complete sofa set re-upholstery (3+1+1, L-shape, sectional), single-panel replacement and patch repair, cushion cover stitching and replacement, piping and welt cord replacement, armrest and backrest panel repair, and recliner seat upholstery restoration.",
        "We work with all sofa types — standard 3-seaters, L-shape sectionals, modular configurations, recliners, sofa cum beds, and diwan sets. Whether you want an exact fabric match or a complete style change, our specialists guide you through the selection process at your home.",
      ],
    },
    {
      heading: "Coverage for Sofa Upholstery in Chandigarh Tricity",
      body: [
        "Doorstep upholstery service across: all Chandigarh UT sectors, Manimajra, Ram Darbar, Industrial Area, and all residential colonies. Extended to Mohali (Phase 1–11, Aerocity, IT City, Kharar) and Panchkula (Sector 1–27).",
        "Chandigarh's spacious sector homes and kothis often have large sofa sets (3+2+2 or 3+1+1+divan) that are expensive to re-upholster in showroom rates. Our doorstep service eliminates middleman markups and workshop transportation costs.",
      ],
    },
    {
      heading: "Sofa Upholstery Cost in Chandigarh",
      body: [
        "Standard upholstery per seat: ₹2,000–₹4,500 depending on fabric chosen. Full 3-seater: ₹6,000–₹13,500. Full 3+1+1 set: ₹10,000–₹22,000. L-shape sectional: ₹8,000–₹20,000. Premium fabrics (Italian velvet, Belgian linen, genuine leather) cost more per seat.",
        "Our pricing includes professional removal of old fabric, foam inspection report, precision fitting, and seam finishing. Combined foam + upholstery packages available at discounted rates — see <a href=\"/sofa-repair-cost-chandigarh\">full cost guide</a>.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Upholstery Cost in Chandigarh — 2026 Pricing",
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
    { question: "How much does sofa upholstery cost in Chandigarh?", answer: "Sofa upholstery in Chandigarh costs ₹2,000–₹4,500 per seat for standard fabrics. Full 3-seater: ₹6,000–₹13,500. Premium materials like velvet and genuine leather cost more. Free doorstep fabric selection included." },
    { question: "Do you bring fabric samples to my home?", answer: "Yes. Our upholstery specialist brings 500+ fabric swatches to your Chandigarh home for on-the-spot selection. No showroom visit needed. You can compare materials, colours, and textures in your own lighting." },
    { question: "How long does sofa re-upholstery take?", answer: "Single sofa: 3–5 hours. Full set (3+1+1): 6–8 hours. Most jobs completed in a single day at your home. Larger sets may require a second visit. Your sofa is ready to use immediately after completion." },
    { question: "Can you match my existing sofa fabric?", answer: "In most cases, yes. We carry a wide range of fabrics and can match colour, texture, and pattern closely. For discontinued fabrics, we recommend the closest available alternative from our 500+ options." },
  ],
  relatedPages: chandigarhRelatedExcluding("sofa-upholstery-chandigarh"),
  keywords: [
    "sofa upholstery chandigarh",
    "sofa fabric change chandigarh",
    "sofa re-upholstery cost chandigarh",
    "sofa cover change chandigarh",
    "upholstery near me chandigarh",
    "sofa cloth change chandigarh",
    "sofa upholstery mohali",
    "sofa upholstery panchkula",
  ],
};

// ── Tier 2 — Commercial hubs ───────────────────────────────────────────────

export const officeChairRepairChandigarh: SeoPageData = {
  slug: "office-chair-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Office Chair Repair in Chandigarh from ₹500 | Gas Lift, Wheels, Armrest | FurniRevive",
  metaDescription:
    "Office chair repair in Chandigarh from ₹500. Gas lift replacement, wheel repair, armrest fix, seat foam change. Doorstep service across IT Park, Industrial Area, all sectors. Bulk corporate rates. Call +91 92179 99355.",
  h1: "Office Chair Repair in Chandigarh — Gas Lift, Wheels & More from ₹500",
  heroSubtitle:
    "Professional office chair repair across Chandigarh's IT Park, Industrial Area, and all sectors. Gas lift, wheels, armrests, tilt mechanism, and seat foam — repaired at your office or home. Bulk rates available.",
  showcaseImage: {
    heading: "Office Chair Repair Chandigarh — Corporate & Home Office",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Office chair gas lift and wheel repair in Chandigarh by FurniRevive",
    caption: "Office Chair Repair Chandigarh — Gas lift, wheels, armrest | From ₹500 | FurniRevive",
  },
  intro: [
    "Chandigarh's IT Park (Rajiv Gandhi Chandigarh Technology Park), Industrial Area Phase 1 & 2, and the growing co-working spaces across the Tricity mean thousands of office chairs are in daily use — and they wear out predictably. Sinking gas lifts, broken wheels, loose armrests, and compressed seat foam are the most common faults. FurniRevive repairs all of these at your office or home.",
    "We serve corporate offices, startups, co-working spaces, and home offices across all Chandigarh sectors, Mohali IT City, and Panchkula's commercial areas. Bulk repair rates available for offices with 10+ chairs — significant savings compared to buying new.",
    "Single chair repair starts at ₹500. Gas lift replacement from ₹800. All repairs done on-site with minimal disruption to your workday. Also see our broader <a href=\"/furniture-repair-chandigarh\">furniture repair service</a> for desks, conference tables, and other office furniture.",
  ],
  whyChoose: [
    { title: "Office-Specialist Service", description: "We focus on office chair mechanisms — gas lifts, tilt locks, synchro mechanisms, and ergonomic adjustments — not just general furniture repair." },
    { title: "Bulk Corporate Rates", description: "10+ chairs repaired at discounted rates. Ideal for IT offices, co-working spaces, and corporate campuses across Chandigarh Tricity." },
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
      heading: "Office Chair Repair Services in Chandigarh",
      body: [
        "Common office chair repairs we handle: gas lift (pneumatic cylinder) replacement when the chair won't hold height, caster wheel replacement for broken or non-rolling wheels, armrest pad replacement and height-adjustment mechanism repair, tilt mechanism repair (synchro-tilt, multi-lock, knee-tilt), seat foam replacement for compressed cushions, and mesh panel repair for torn or sagging backs.",
        "We also repair executive leather chairs — peeling armrests, cracked seat panels, and worn headrests. For ergonomic chairs, we recalibrate lumbar support mechanisms and replace worn tension springs. All work done at your Chandigarh office or home with common parts in stock.",
      ],
    },
    {
      heading: "Areas Served — Office Chair Repair Chandigarh",
      body: [
        "We cover all Chandigarh commercial zones: Rajiv Gandhi IT Park, Industrial Area Phase 1 & 2 (including Elante area), Sector 17 commercial district, and all government offices. Also serve co-working spaces across sectors and startup hubs.",
        "Extended to Mohali IT City, Phase 8B Industrial Area, Aerocity offices, and Panchkula's Technology Park. Home office repairs available across all residential sectors in Chandigarh, Mohali, and Panchkula.",
      ],
    },
    {
      heading: "Office Chair Repair Pricing in Chandigarh",
      body: [
        "Gas lift replacement: ₹800–₹1,800 (Class 3 or 4 depending on chair weight rating). Caster wheels (set of 5): ₹400–₹1,200. Armrest replacement: ₹500–₹2,000 per arm. Tilt mechanism: ₹600–₹2,500. Seat foam: ₹800–₹2,000. Mesh panel: ₹1,000–₹3,000.",
        "Bulk corporate pricing: 15–25% discount on per-chair rates for 10+ chair orders. AMC (Annual Maintenance Contract) available for offices with 50+ chairs. Contact +91 92179 99355 for custom corporate quotes.",
      ],
    },
  ],
  priceTable: {
    heading: "Office Chair Repair Cost in Chandigarh — 2026",
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
    { question: "Do you offer bulk office chair repair in Chandigarh?", answer: "Yes. We offer 15–25% discounted rates for 10+ chairs. Corporate offices in IT Park, Industrial Area, and Mohali IT City can book bulk repair with same-day turnaround. GST invoice provided." },
    { question: "How long does gas lift replacement take?", answer: "Gas lift replacement takes 15–30 minutes per chair. Done at your office desk. No need to move the chair anywhere." },
    { question: "Do you repair ergonomic chairs?", answer: "Yes. We repair all ergonomic chairs — mesh back, synchro-tilt, adjustable lumbar, headrest mechanisms, and tension springs. Brands include Featherlite, Godrej, HNI, Herman Miller, Steelcase, and others." },
  ],
  relatedPages: chandigarhRelatedExcluding("office-chair-repair-chandigarh"),
  keywords: [
    "office chair repair chandigarh",
    "office chair repair near me chandigarh",
    "gas lift replacement chandigarh",
    "chair wheel repair chandigarh",
    "office chair repair IT park chandigarh",
    "bulk chair repair chandigarh",
    "office chair repair mohali",
  ],
};

export const sameDaySofaRepairChandigarh: SeoPageData = {
  slug: "same-day-sofa-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Same Day Sofa Repair in Chandigarh | Book Before Noon | FurniRevive",
  metaDescription:
    "Same-day sofa repair in Chandigarh — book before noon, repaired by evening. Foam, spring, upholstery, leather, recliner repair. All sectors, Mohali & Panchkula. Starting ₹800. Call +91 92179 99355.",
  h1: "Same Day Sofa Repair in Chandigarh — Book Before Noon",
  heroSubtitle:
    "Urgent sofa repair in Chandigarh with same-day completion. Book before noon — our technician arrives within 4 hours with all materials. Foam, spring, upholstery, and recliner repairs completed in a single visit.",
  showcaseImage: {
    heading: "Same Day Sofa Repair Chandigarh — Fast Turnaround",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Same-day sofa repair service in Chandigarh with rapid doorstep turnaround by FurniRevive",
    caption: "Same Day Sofa Repair Chandigarh — Book before noon | Starting ₹800 | FurniRevive",
  },
  intro: [
    "Guests arriving tonight? Festival season starting? Can't sit comfortably on a sagging sofa? FurniRevive's same-day sofa repair in Chandigarh guarantees your sofa is fixed before the day ends — book before noon and our technician arrives within 4 hours with all materials needed for a single-visit repair.",
    "Same-day availability covers all Chandigarh UT sectors, Manimajra, and extends to Mohali (Phase 1–10) and Panchkula (Sector 5–15). We carry pre-cut foam, spring hardware, common fabrics, and recliner parts so there's no waiting for materials. Most repairs — foam replacement, spring fixing, upholstery patching — are completed in 2–4 hours.",
    "Starting at ₹800 with the same quality, materials, and 6-month warranty as our scheduled service. Same-day is simply about speed — not cutting corners. For more complex repairs that take longer, see our standard <a href=\"/sofa-repair-chandigarh\">sofa repair service</a>. For pricing details, check the <a href=\"/sofa-repair-cost-chandigarh\">Chandigarh cost guide</a>.",
  ],
  whyChoose: [
    { title: "Guaranteed Same-Day Arrival", description: "Book before noon — our technician arrives within 4 hours. No next-day waiting. Your sofa is fixed today." },
    { title: "Single Visit Completion", description: "We carry all common materials — foam, springs, fabric, hardware, recliner parts. No second visits for most repairs." },
    { title: "Full Chandigarh Tricity", description: "Same-day available across all UT sectors, Manimajra, Mohali (Phase 1–10), and Panchkula (Sector 5–15)." },
    { title: "No Compromise on Quality", description: "Same branded materials, same skilled craftsmen, same 6-month warranty as our scheduled service. Speed ≠ shortcuts." },
    { title: "Ideal for Urgent Situations", description: "Festival guests arriving, sofa broke suddenly, landlord inspection, party preparation — same-day service handles it all." },
    { title: "Transparent Same-Day Pricing", description: "Starting ₹800. No rush surcharge. Same rates as our regular service. Free inspection included." },
  ],
  process: [
    { step: "Call Before Noon", description: "Call +91 92179 99355 before noon. Share photos of the damage. We confirm same-day slot and provide an estimate." },
    { step: "Technician Arrives (2–4 hrs)", description: "Our specialist reaches your Chandigarh home within 4 hours with all required materials and tools." },
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
    "Full Tricity coverage — Chandigarh, Mohali, Panchkula",
    "Same branded materials and 6-month warranty",
    "Perfect for festival season and urgent needs",
    "Starting at ₹800",
  ],
  contentSections: [
    {
      heading: "Same-Day Sofa Repairs Available in Chandigarh",
      body: [
        "Repairs we complete same-day: sofa foam replacement (1–2 hours per sofa), spring repair and replacement (1–2 hours), upholstery patching and panel replacement (2–3 hours), recliner mechanism repair (1–3 hours), leather crack filling and conditioning (2–3 hours), and minor frame fixes (1–2 hours).",
        "For major repairs — complete frame rebuilding, full sofa set re-upholstery (3+1+1), or multiple recliner motor replacements — we may require a scheduled appointment for best results. These typically take 4–8 hours and benefit from advance material preparation.",
      ],
    },
    {
      heading: "Same-Day Coverage Areas in Chandigarh Tricity",
      body: [
        "Same-day sofa repair guaranteed in: all Chandigarh UT sectors (1–56), Manimajra, Ram Darbar, and Industrial Area when booked before noon. Extended same-day coverage to Mohali Phase 1–10 and Panchkula Sector 5–15 when booked before 11 AM.",
        "For outer Tricity areas (Kharar, Zirakpur, Pinjore, Kalka, Barwala), same-day availability depends on technician routing — call to confirm. We always aim for same-day but guarantee it only within the core coverage zone.",
      ],
    },
    {
      heading: "Same-Day vs Scheduled — Which to Choose",
      body: [
        "Choose same-day when: you need the sofa fixed urgently (guests arriving, festival, broken mechanism making sofa unusable), the repair is straightforward (foam, spring, patch, recliner mechanism), and you can book before noon.",
        "Choose scheduled when: you want a complete re-upholstery with fabric selection (needs consultation visit first), multiple pieces need repair on the same day, or you're in an outer Tricity area. Scheduled appointments can be booked for any time including evenings and weekends.",
      ],
    },
  ],
  priceTable: {
    heading: "Same-Day Sofa Repair Pricing — Chandigarh 2026",
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
    { question: "How do I book same-day sofa repair in Chandigarh?", answer: "Call +91 92179 99355 before noon. Share photos of the damage. We confirm availability and dispatch a technician within 4 hours to your Chandigarh address." },
    { question: "Is there an extra charge for same-day service?", answer: "No. Same-day sofa repair in Chandigarh is priced the same as our scheduled service. No rush surcharge. Same materials, same warranty." },
    { question: "What if I call after noon?", answer: "If you call after noon, we try for same-day if a technician is available in your area. Otherwise, we schedule for the earliest next-day slot. Morning calls guarantee same-day." },
  ],
  relatedPages: chandigarhRelatedExcluding("same-day-sofa-repair-chandigarh"),
  keywords: [
    "same day sofa repair chandigarh",
    "urgent sofa repair chandigarh",
    "sofa repair today chandigarh",
    "emergency sofa repair chandigarh",
    "fast sofa repair near me chandigarh",
    "sofa repair same day mohali",
  ],
};

export const doorstepSofaRepairChandigarh: SeoPageData = {
  slug: "doorstep-sofa-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Doorstep Sofa Repair in Chandigarh | Home Service All Sectors | FurniRevive",
  metaDescription:
    "Doorstep sofa repair in Chandigarh — we come to your home. No transport, no workshop. Foam, spring, upholstery, leather repair at your doorstep across all sectors, Mohali & Panchkula. From ₹800. Call +91 92179 99355.",
  h1: "Doorstep Sofa Repair in Chandigarh — We Come to You",
  heroSubtitle:
    "No transport, no workshop, no waiting. FurniRevive's doorstep sofa repair brings expert craftsmen, tools, and materials directly to your Chandigarh home. Complete repair in a single visit.",
  showcaseImage: {
    heading: "Doorstep Sofa Repair Chandigarh — At Your Home",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Doorstep sofa repair service in Chandigarh with technician working at customer home by FurniRevive",
    caption: "Doorstep Sofa Repair Chandigarh — No transport needed | From ₹800 | FurniRevive",
  },
  intro: [
    "Why struggle to transport a heavy sofa to a workshop when expert repair can happen right in your drawing room? FurniRevive's doorstep sofa repair in Chandigarh brings everything needed — skilled craftsmen, professional tools, premium materials — directly to your home. Your sofa never leaves your living room.",
    "We serve every Chandigarh sector (1–56), Manimajra, Ram Darbar, Industrial Area, and extend doorstep coverage to Mohali (Phase 1–11, Aerocity) and Panchkula (Sector 1–27). Whether you live in a ground-floor kothi or a 15th-floor apartment, our team works neatly and efficiently in your space.",
    "Doorstep repair eliminates transportation damage risk, workshop waiting time, and the hassle of moving heavy furniture through narrow doorways. Starting at ₹800. For full pricing, see our <a href=\"/sofa-repair-cost-chandigarh\">cost guide</a>. For same-day urgency, see <a href=\"/same-day-sofa-repair-chandigarh\">same-day service</a>.",
  ],
  whyChoose: [
    { title: "Zero Transportation Hassle", description: "Your sofa stays in your home. No awkward manoeuvring through doors, no risk of transportation damage, no waiting at workshops." },
    { title: "Single Visit Completion", description: "Inspection, quote, repair, and warranty — all handled in one visit at your Chandigarh home. Most repairs done in 2–4 hours." },
    { title: "Apartment-Friendly", description: "Our team works neatly in apartments — minimal space needed, dust sheets laid, complete cleanup after. High-rise buildings no problem." },
    { title: "Complete Material Kit", description: "Technicians carry foam, fabric swatches, springs, hardware, and recliner parts. No second visits for common repairs." },
    { title: "Safe for Premium Sofas", description: "Leather sofas, imported pieces, and heavy sectionals are risky to move. Doorstep repair eliminates all handling damage risk." },
    { title: "Same Price as Workshop", description: "Doorstep service costs the same as our workshop rate. From ₹800. No convenience surcharge." },
  ],
  process: [
    { step: "Book a Home Visit", description: "Call +91 92179 99355 or WhatsApp photos of your sofa damage. We schedule a visit at your convenience." },
    { step: "Doorstep Inspection", description: "Our specialist arrives at your Chandigarh home, lays protective sheets, and inspects your sofa thoroughly." },
    { step: "On-the-Spot Repair", description: "Repair completed right there — foam replacement, spring fix, upholstery work, recliner mechanism rebuild — all at your home." },
    { step: "Cleanup & Warranty", description: "Work area cleaned spotless, furniture repositioned, and 6-month warranty card issued. Ready for immediate use." },
  ],
  benefits: [
    "No need to transport heavy sofas anywhere",
    "Complete repair at your home in one visit",
    "No transportation damage risk",
    "No workshop waiting time (days or weeks)",
    "Apartment and kothi friendly service",
    "Protective dust sheets and full cleanup included",
    "Same pricing as workshop rates",
    "All sofa types — L-shape, recliner, sectional",
    "Full Tricity doorstep coverage",
    "From ₹800 with 6-month warranty",
  ],
  contentSections: [
    {
      heading: "Why Doorstep Sofa Repair Makes Sense in Chandigarh",
      body: [
        "Chandigarh's sector layout means most homes are kothis or spacious apartments — but doorways, lifts, and staircases can still make sofa transportation a nightmare. L-shape sectionals, heavy teak frames, and oversized recliners are nearly impossible to move without disassembly. Doorstep repair eliminates this entirely.",
        "Workshop-based repair also means your sofa is gone for days — sometimes weeks during busy season. With doorstep service, your sofa is repaired and usable within hours. No disruption to your daily life or your living room setup.",
      ],
    },
    {
      heading: "Doorstep Coverage — All Chandigarh Tricity",
      body: [
        "We provide doorstep sofa repair in: all Chandigarh UT sectors (1–56), Manimajra, Ram Darbar, Dhanas, Hallomajra, Kishangarh, Industrial Area Phase 1 & 2 residential areas. Mohali — Phase 1–11, Sector 58–79, Aerocity, IT City, Kharar. Panchkula — Sector 1–27.",
        "Our technicians are experienced with all building types — CHB flats with narrow corridors, modern high-rises with strict society protocols, independent kothis, and ground-floor shops. They carry photo ID and coordinate with security as needed.",
      ],
    },
    {
      heading: "What We Bring to Your Doorstep",
      body: [
        "Every doorstep visit includes: professional tool kit (upholstery staple guns, foam cutters, sewing machines, spring tools), pre-cut foam slabs in multiple densities (32D, 36D, 40D), fabric swatch books (500+ options), common springs and hardware, recliner mechanism parts, protective floor and furniture sheets, and cleaning supplies.",
        "For full re-upholstery requiring a specific fabric choice, we conduct a separate consultation visit with swatches before the repair day. See our <a href=\"/sofa-upholstery-chandigarh\">sofa upholstery Chandigarh</a> service for details.",
      ],
    },
  ],
  priceTable: {
    heading: "Doorstep Sofa Repair Cost — Chandigarh 2026",
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
    { question: "Do you really repair sofas at home in Chandigarh?", answer: "Yes. All repairs happen at your Chandigarh home — foam replacement, spring repair, upholstery, leather work, and recliner mechanism fixes. Our technicians bring all materials. Your sofa never leaves your living room." },
    { question: "What about the mess during repair?", answer: "We lay protective dust sheets before starting, contain all debris, and do complete cleanup after the repair. Your floor and surrounding furniture stay clean throughout." },
    { question: "Can you repair a sofa in a high-rise apartment?", answer: "Yes. We regularly repair sofas in Chandigarh high-rises and apartment complexes. Our team coordinates with society security, uses lifts, and works efficiently in apartment spaces." },
  ],
  relatedPages: chandigarhRelatedExcluding("doorstep-sofa-repair-chandigarh"),
  keywords: [
    "doorstep sofa repair chandigarh",
    "sofa repair at home chandigarh",
    "sofa repair home service chandigarh",
    "sofa repair near me home service chandigarh",
    "home sofa repair chandigarh",
    "sofa repair at doorstep mohali",
  ],
};

export const leatherSofaRepairChandigarh: SeoPageData = {
  slug: "leather-sofa-repair-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Leather Sofa Repair in Chandigarh from ₹1,500 | Crack, Colour, Conditioning | FurniRevive",
  metaDescription:
    "Leather sofa repair in Chandigarh from ₹1,500. Crack filling, colour restoration, tear mending, conditioning. Genuine & faux leather. Doorstep service all sectors, Mohali & Panchkula. 6-month warranty. Call +91 92179 99355.",
  h1: "Leather Sofa Repair in Chandigarh — Crack, Colour & Conditioning from ₹1,500",
  heroSubtitle:
    "Chandigarh's dry winters crack leather fast. Our specialists restore genuine and faux leather sofas — crack filling, colour matching, tear mending, and deep conditioning — all at your doorstep. From ₹1,500.",
  showcaseImage: {
    heading: "Leather Sofa Repair Chandigarh — Before & After Restoration",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Leather sofa crack repair and colour restoration in Chandigarh by FurniRevive",
    caption: "Leather Sofa Repair Chandigarh — Crack & colour fix | From ₹1,500 | FurniRevive",
  },
  intro: [
    "Chandigarh's climate is particularly harsh on leather — the dry winter months (November to February) cause genuine leather to lose moisture, crack, and peel, while the post-monsoon humidity can lead to mould growth on untreated surfaces. If your leather sofa shows cracks, colour fading, or surface peeling, professional leather repair restores it completely at a fraction of replacement cost.",
    "FurniRevive's leather sofa specialists serve all Chandigarh sectors, Manimajra, Mohali (Phase 1–10, Aerocity), and Panchkula. We handle genuine leather, bonded leather, faux leather (PU), and rexine — each material requires different repair techniques and products that our trained technicians understand.",
    "Leather sofa repair starts at ₹1,500. Full 3-piece set restoration typically costs ₹3,000–₹8,000 depending on damage severity. Every repair includes deep conditioning to prevent future cracking. See our <a href=\"/sofa-repair-chandigarh\">full sofa repair service</a> for non-leather issues or <a href=\"/sofa-repair-cost-chandigarh\">pricing details</a>.",
  ],
  whyChoose: [
    { title: "Leather-Specialist Technicians", description: "Our team is trained specifically on leather repair — not general upholstery workers. They understand the chemistry of leather restoration." },
    { title: "Professional Colour Matching", description: "We use professional leather colour-matching systems to restore your sofa's exact shade. No visible patches or mismatched areas." },
    { title: "Climate-Informed Treatment", description: "We apply deep conditioning formulated for Chandigarh's dry winters. Prevents re-cracking for the full warranty period and beyond." },
    { title: "All Leather Types", description: "Genuine leather, top-grain, bonded, split leather, PU (faux), and rexine. Each requires different repair compounds — we use the correct ones." },
    { title: "Doorstep Restoration", description: "All leather repair done at your Chandigarh home. No transport risk — leather surfaces are easily scratched during handling." },
    { title: "6 Month Warranty", description: "Crack repairs, colour restoration, and conditioning all covered under 6-month written warranty." },
  ],
  process: [
    { step: "Assess the Damage", description: "Call +91 92179 99355 or WhatsApp close-up photos of the leather damage. We identify the leather type and estimate repair scope." },
    { step: "Doorstep Diagnosis", description: "Our leather specialist visits your Chandigarh home, identifies the exact leather type, and provides a written quote." },
    { step: "On-Site Restoration", description: "Cracks filled, colour restored, tears mended, and deep conditioning applied — all at your doorstep in 2–4 hours." },
    { step: "Conditioning & Warranty", description: "Final conditioning coat applied, curing time advised, and 6-month warranty card issued." },
  ],
  benefits: [
    "Crack filling with professional leather compound",
    "Colour restoration and matching",
    "Tear and cut mending",
    "Deep conditioning for Chandigarh's dry climate",
    "Genuine and faux leather both handled",
    "Peeling and flaking surface repair",
    "Armrest and headrest restoration",
    "Mould and mildew treatment",
    "No transportation — doorstep only",
    "From ₹1,500 with 6-month warranty",
  ],
  contentSections: [
    {
      heading: "Leather Sofa Repair Services in Chandigarh",
      body: [
        "Our Chandigarh leather repair covers: surface crack filling with flexible leather compound, colour restoration using professional pigment-matching systems, tear and cut mending with bonded reinforcement, peeling and flaking surface treatment (common in bonded leather after 3–5 years), deep conditioning to restore suppleness and prevent future cracks, and armrest/headrest restoration (highest-wear areas).",
        "For rexine and faux leather (PU), we offer panel replacement when repair isn't viable — we match the texture, grain, and colour as closely as possible. For genuine leather, we always recommend repair over replacement due to the premium quality and patina that develops over time.",
      ],
    },
    {
      heading: "Why Leather Cracks in Chandigarh — Prevention Tips",
      body: [
        "Chandigarh's winter humidity drops to 30–40%, causing leather to lose moisture rapidly. Without regular conditioning (every 3–4 months), genuine leather develops surface cracks that deepen over time. Faux leather (PU) is less affected by dryness but deteriorates from UV exposure near windows.",
        "Prevention: condition genuine leather every 3 months during Oct–Mar. Keep leather sofas away from direct sunlight and heaters. Use a dedicated leather conditioner — not coconut oil or generic moisturiser (these can damage the finish). After our repair, we provide maintenance guidance specific to Chandigarh's climate.",
      ],
    },
    {
      heading: "Leather Sofa Repair Cost in Chandigarh",
      body: [
        "Single-seat crack repair and conditioning: ₹1,500–₹3,000. Full 3-piece set restoration (cracks + colour + conditioning): ₹3,000–₹8,000. Panel replacement (when repair isn't viable): ₹2,500–₹5,000 per panel. Tear mending: ₹1,000–₹2,500 per tear depending on size.",
        "Leather recliner restoration (seat + armrest + headrest): ₹2,000–₹5,000. Full re-colouring of a faded set: ₹4,000–₹10,000. All prices include deep conditioning treatment. Free doorstep inspection and written quote.",
      ],
    },
  ],
  priceTable: {
    heading: "Leather Sofa Repair Cost in Chandigarh — 2026",
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
    { question: "Can you repair genuine leather sofas in Chandigarh?", answer: "Yes. We specialise in genuine leather repair — crack filling, colour restoration, tear mending, and conditioning. Our products are designed for real leather and maintain the natural patina." },
    { question: "Why does my leather sofa crack every winter in Chandigarh?", answer: "Chandigarh's winter humidity drops to 30–40%, causing leather to lose moisture and crack. Regular conditioning every 3 months (Oct–Mar) prevents this. After repair, we apply deep conditioning and provide maintenance guidance." },
    { question: "Do you repair rexine and faux leather too?", answer: "Yes. Faux leather (PU) and rexine sofas are repaired or panel-replaced at your Chandigarh doorstep. We match colour, texture, and grain as closely as possible." },
  ],
  relatedPages: chandigarhRelatedExcluding("leather-sofa-repair-chandigarh"),
  keywords: [
    "leather sofa repair chandigarh",
    "leather sofa repair near me chandigarh",
    "leather crack repair chandigarh",
    "leather colour restoration chandigarh",
    "leather sofa conditioning chandigarh",
    "faux leather repair chandigarh",
    "leather sofa repair mohali",
    "leather sofa repair panchkula",
  ],
};

export const carpenterHomeServiceChandigarh: SeoPageData = {
  slug: "carpenter-home-service-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Carpenter Home Service in Chandigarh from ₹499 | Doorstep Carpentry | FurniRevive",
  metaDescription:
    "Professional carpenter home service in Chandigarh from ₹499. Furniture repair, assembly, fitting, installation. Doorstep service across all sectors, Mohali & Panchkula. Experienced craftsmen. Call +91 92179 99355.",
  h1: "Carpenter Home Service in Chandigarh — Doorstep Carpentry from ₹499",
  heroSubtitle:
    "Need a carpenter at home? FurniRevive's skilled carpenters come to your Chandigarh doorstep for furniture repair, assembly, fitting, and installation. From ₹499. All sectors, Mohali & Panchkula covered.",
  showcaseImage: {
    heading: "Carpenter Home Service Chandigarh — Professional Doorstep Carpentry",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Professional carpenter providing home service in Chandigarh for furniture repair and assembly by FurniRevive",
    caption: "Carpenter Home Service Chandigarh — Furniture repair & assembly | From ₹499 | FurniRevive",
  },
  intro: [
    "Finding a reliable carpenter in Chandigarh for small home jobs — a broken hinge, a wobbly shelf, furniture assembly, or a squeaky door — can be frustrating. FurniRevive's carpenter home service provides experienced craftsmen at your doorstep for any carpentry need, big or small. Starting at just ₹499.",
    "Our carpenters serve all Chandigarh UT sectors, Manimajra, Industrial Area, Mohali (all phases), and Panchkula. Whether you need flat-pack furniture assembled, a wardrobe door realigned, shelves mounted, or complete <a href=\"/furniture-repair-chandigarh\">furniture restoration</a>, we handle it all professionally.",
    "Unlike marketplace carpenters with uncertain quality, FurniRevive's team is vetted, experienced (10+ years), and backed by a service warranty. We also provide <a href=\"/sofa-repair-chandigarh\">sofa repair</a> and <a href=\"/office-chair-repair-chandigarh\">office chair repair</a> through the same booking.",
  ],
  whyChoose: [
    { title: "Experienced & Vetted", description: "10+ years experience. All carpenters are vetted, background-checked, and trained on quality standards. Not random marketplace workers." },
    { title: "All Carpentry Jobs", description: "From minor hinge fixes (₹499) to complete furniture restoration. Assembly, fitting, mounting, repair — everything carpentry-related." },
    { title: "Professional Tools", description: "Our carpenters arrive with complete professional tool kits — power drills, jigsaw, router, levels, measuring tools, and finishing equipment." },
    { title: "Reliable & On-Time", description: "Confirmed appointment times. Our carpenters arrive on schedule — no hours of waiting for a no-show." },
    { title: "Full Tricity Coverage", description: "All Chandigarh UT sectors, Manimajra, Industrial Area, Mohali, Panchkula, Kharar, and Zirakpur." },
    { title: "Service Warranty", description: "All carpentry work backed by a warranty. Structural repairs get 6 months. Fitting and assembly get 3 months." },
  ],
  process: [
    { step: "Describe the Job", description: "Call +91 92179 99355 or WhatsApp photos. Describe what you need — repair, assembly, fitting, or installation." },
    { step: "Confirm & Schedule", description: "We provide an estimate and confirm a convenient time slot. Same-day available for urgent needs." },
    { step: "Carpenter Arrives", description: "Our experienced carpenter reaches your Chandigarh home on time with all required tools and materials." },
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
    "All Chandigarh Tricity covered",
  ],
  contentSections: [
    {
      heading: "Carpenter Services Available at Your Chandigarh Doorstep",
      body: [
        "Furniture repair: sofa frame repair, bed frame reinforcement, chair joint re-gluing, table leg fixing, wardrobe shutter alignment, drawer runner replacement, and wooden cabinet repair. Assembly: flat-pack furniture (IKEA, Urban Ladder, Amazon), modular wardrobe assembly, study table assembly, and bed frame setup.",
        "Fitting and installation: wall-mounted shelves, TV unit mounting, kitchen cabinet fitting, curtain rod installation, door and window alignment, lock replacement, and soft-close hinge fitting. Polishing: melamine, PU, French polish, and lacquer touch-up. See our <a href=\"/furniture-repair-chandigarh\">furniture repair service</a> for detailed pricing on larger restoration projects.",
      ],
    },
    {
      heading: "Carpenter Service Areas — Chandigarh Tricity",
      body: [
        "Full coverage across: Chandigarh UT — all sectors (1–56), Manimajra, Ram Darbar, Dhanas, Daria, Hallomajra, Kishangarh, and Industrial Area Phase 1 & 2. Mohali — Phase 1–11, Sector 58–79, Aerocity, IT City, Kharar, Landran, Zirakpur.",
        "Panchkula — Sector 1–27, Pinjore, Kalka, and Barwala. Our carpenters are stationed across the Tricity for rapid response — most areas get same-day availability when booked by noon.",
      ],
    },
    {
      heading: "Carpenter Pricing in Chandigarh",
      body: [
        "Small fixes (hinges, locks, alignment): ₹499–₹1,000. Furniture assembly: ₹500–₹3,000 depending on size and complexity. Wall mounting: ₹300–₹1,500 per item. Furniture repair: ₹599–₹5,000+ depending on scope. Polishing: ₹1,500–₹8,000 depending on piece size.",
        "Our pricing is transparent — no hidden charges. For larger projects (full furniture restoration, multiple items), we provide a written quote after doorstep inspection. Bulk rates available for multiple items.",
      ],
    },
  ],
  priceTable: {
    heading: "Carpenter Home Service Rates — Chandigarh 2026",
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
    { question: "Do you handle small carpentry jobs in Chandigarh?", answer: "Yes. We accept jobs starting from ₹499 — single hinge replacement, drawer fix, shelf mounting. No job too small. Our carpenters are happy to help with quick fixes." },
    { question: "Can you assemble flat-pack furniture in Chandigarh?", answer: "Yes. We assemble all flat-pack furniture — IKEA, Urban Ladder, Amazon, Pepperfry, and local purchases. Assembly costs ₹500–₹3,000 depending on item complexity. Same-day available." },
    { question: "Do your carpenters bring their own tools?", answer: "Yes. Our carpenters arrive with complete professional tool kits including power drills, saws, levels, measuring tools, and finishing equipment. You don't need to provide anything." },
  ],
  relatedPages: chandigarhRelatedExcluding("carpenter-home-service-chandigarh"),
  keywords: [
    "carpenter chandigarh",
    "carpenter near me chandigarh",
    "carpenter home service chandigarh",
    "furniture assembly chandigarh",
    "carpenter mohali",
    "carpenter panchkula",
    "doorstep carpenter chandigarh",
    "furniture carpenter chandigarh",
  ],
};

// ── Tier 3 — Cost hubs ─────────────────────────────────────────────────────

export const sofaRepairCostChandigarh: SeoPageData = {
  slug: "sofa-repair-cost-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Sofa Repair Cost in Chandigarh 2026 | Complete Price Guide | FurniRevive",
  metaDescription:
    "Sofa repair cost in Chandigarh 2026: foam ₹1,200–₹3,500, spring ₹800–₹2,000, upholstery ₹2,000–₹4,500/seat, leather ₹1,500–₹5,000, recliner ₹1,499–₹5,500. Transparent pricing. Free inspection. Call +91 92179 99355.",
  quickAnswer:
    "Sofa repair in Chandigarh costs ₹800–₹12,000 depending on repair type. Foam replacement ₹1,200–₹3,500 per seat, spring repair ₹800–₹2,000, upholstery ₹2,000–₹4,500 per seat, leather repair ₹1,500–₹5,000, recliner mechanism ₹1,499–₹5,500. Free doorstep inspection with written quote. Call +91 92179 99355.",
  h1: "Sofa Repair Cost in Chandigarh — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent sofa repair pricing for Chandigarh Tricity. Every service priced clearly — no hidden charges. Free doorstep inspection and written quote before any work begins.",
  showcaseImage: {
    heading: "Sofa Repair Pricing — Chandigarh 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Sofa repair cost breakdown for Chandigarh showing transparent pricing by FurniRevive",
    caption: "Sofa Repair Cost Chandigarh 2026 — All services priced transparently | FurniRevive",
  },
  intro: [
    "The first question every Chandigarh homeowner asks before booking sofa repair: how much will it cost? This guide provides transparent, up-to-date pricing for every sofa repair service we offer across the Chandigarh Tricity region — no vague estimates, no hidden charges, no surprise add-ons.",
    "All prices below are for doorstep service across all Chandigarh UT sectors, Manimajra, Mohali (Phase 1–11, Aerocity), and Panchkula (Sector 1–27). The same rates apply regardless of your location within the Tricity — no distance surcharges.",
    "Every repair begins with a free doorstep inspection. Our technician examines your sofa, identifies all issues, and provides a written quote on the spot. You pay only after approving the quote. No work begins without your explicit consent. For our full service details, see <a href=\"/sofa-repair-chandigarh\">sofa repair Chandigarh</a>.",
    "Professional sofa repair saves Chandigarh families 50–70% compared to buying new — a ₹40,000 sofa can typically be fully restored for ₹4,000–₹10,000 with results that look and feel brand new. It's the practical, smart choice.",
  ],
  whyChoose: [
    { title: "Transparent Pricing", description: "Every service priced clearly in this guide. No vague 'depends on damage' answers — we give you actual ranges based on hundreds of Chandigarh repairs." },
    { title: "Free Doorstep Inspection", description: "Our technician inspects your sofa at home and provides a written quote. No charge for the inspection even if you choose not to proceed." },
    { title: "No Hidden Charges", description: "The quoted price is the final price. No material surcharges, no labour extras, no 'we found additional damage' surprises mid-repair." },
    { title: "Written Quote Before Work", description: "You receive a detailed written breakdown before any work begins. Approve it, reject it, or negotiate — no pressure." },
    { title: "Visit Charge Adjusted", description: "₹99–₹199 visit charge is adjusted against the repair bill. If you proceed with repair, the visit is effectively free." },
    { title: "50–70% Cheaper Than New", description: "Compare repair cost to replacement cost. Professional repair almost always saves 50–70% with equivalent results." },
  ],
  process: [
    { step: "Check Prices Above", description: "Use this guide to estimate your repair cost based on the type of damage and service needed." },
    { step: "Book Free Inspection", description: "Call +91 92179 99355. Our technician visits your Chandigarh home at no charge to assess the exact scope." },
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
      heading: "Detailed Sofa Repair Cost Breakdown — Chandigarh 2026",
      body: [
        "<strong>Foam replacement:</strong> ₹1,200–₹3,500 per seat. Price depends on foam density chosen — 32D (₹1,200–₹2,000), 36D (₹1,800–₹2,800), 40D (₹2,500–₹3,500). We use Sleepwell and Duraflex branded HR foam only. Higher density = longer life and better support. 40D recommended for daily-use sofas.",
        "<strong>Spring repair:</strong> ₹800–₹2,000. Includes zigzag spring replacement, serpentine spring retension, and pocket spring repair. Price depends on number of springs affected and sofa size.",
        "<strong>Upholstery/fabric change:</strong> ₹2,000–₹4,500 per seat. Varies by fabric — cotton (₹2,000–₹2,800), microfibre (₹2,500–₹3,500), velvet (₹3,000–₹4,000), leatherette (₹3,500–₹4,500). Full 3-seater: ₹6,000–₹13,500.",
        "<strong>Leather repair:</strong> ₹1,500–₹5,000. Crack filling and conditioning from ₹1,500 per seat. Full set colour restoration ₹4,000–₹10,000. Panel replacement ₹2,500–₹5,000. See <a href=\"/leather-sofa-repair-chandigarh\">leather sofa repair</a> for details.",
        "<strong>Recliner mechanism:</strong> ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000. Motorised motor replacement ₹2,999–₹5,500. See <a href=\"/recliner-repair-cost-chandigarh\">recliner repair cost guide</a> for full breakdown.",
        "<strong>Frame repair:</strong> ₹1,500–₹4,000. Joint reinforcement, broken rail replacement, arm repair, and base stabilisation. Sheesham and teak frames always worth repairing.",
      ],
    },
    {
      heading: "Cost by Sofa Type — Chandigarh",
      body: [
        "<strong>3-seater sofa:</strong> Basic repair (foam + minor fix) ₹2,500–₹5,000. Full overhaul (foam + spring + upholstery) ₹5,000–₹12,000. Most common repair bracket: ₹3,000–₹8,000.",
        "<strong>L-shape/sectional:</strong> Full restoration ₹5,000–₹15,000 depending on size and damage. Corner seat foam replacement ₹3,000–₹5,000. Chaise section upholstery ₹3,000–₹6,000.",
        "<strong>Recliner sofa:</strong> Mechanism only ₹1,499–₹5,500. Mechanism + upholstery ₹3,000–₹8,000. Full recliner set (3-piece with 2 recliners) ₹6,000–₹15,000.",
        "<strong>Sofa cum bed:</strong> Folding mechanism repair ₹1,500–₹3,000. Mattress replacement ₹2,000–₹5,000. Full restoration ₹4,000–₹10,000.",
      ],
    },
    {
      heading: "Sofa Repair vs New Sofa — Cost Comparison",
      body: [
        "A new 3-seater sofa in Chandigarh costs ₹15,000–₹80,000 from Sector 22 furniture market or online stores. Professional repair of the same sofa typically costs ₹3,000–₹12,000 — saving 50–80% while achieving near-identical results.",
        "Repair is almost always the better financial decision when: the frame is intact (solid wood frames are worth far more than modern replacements), you like your sofa's style and size, and the repair cost is under 35% of a comparable new purchase. Our free inspection will give you an honest assessment — if replacement genuinely makes more sense, we'll tell you.",
      ],
    },
  ],
  priceTable: {
    heading: "Sofa Repair Cost in Chandigarh — Complete 2026 Price List",
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
    { question: "Is the doorstep inspection really free?", answer: "Yes. Our technician visits your Chandigarh home, inspects the sofa, and provides a written quote at no charge. If you choose not to proceed, you pay nothing. The ₹99–₹199 visit charge only applies if stated and is adjusted against the repair bill." },
    { question: "Why do prices have a range?", answer: "Ranges reflect different damage severity, sofa sizes, and material choices. A simple 1-seat foam replacement costs ₹1,200 while a large sectional needs ₹3,500. The exact price is confirmed during your free inspection." },
    { question: "Are these prices the same for Mohali and Panchkula?", answer: "Yes. Our pricing is uniform across the entire Chandigarh Tricity — same rates for Chandigarh UT, Mohali, and Panchkula. No distance or zone surcharges." },
    { question: "Do you charge extra for same-day service?", answer: "No. Same-day service (when booked before noon) carries no surcharge. Same pricing as our scheduled service." },
  ],
  relatedPages: chandigarhRelatedExcluding("sofa-repair-cost-chandigarh"),
  keywords: [
    "sofa repair cost chandigarh",
    "sofa repair price chandigarh",
    "sofa repairing cost chandigarh",
    "sofa foam replacement cost chandigarh",
    "sofa upholstery cost chandigarh",
    "sofa renovation cost chandigarh",
    "leather sofa repair cost chandigarh",
    "recliner repair cost chandigarh",
    "sofa repair charges chandigarh",
  ],
};

export const reclinerRepairCostChandigarh: SeoPageData = {
  slug: "recliner-repair-cost-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Recliner Repair Cost in Chandigarh 2026 | Manual & Motorised Pricing | FurniRevive",
  metaDescription:
    "Recliner repair cost in Chandigarh 2026: manual mechanism ₹1,499–₹3,000, motorised motor ₹2,999–₹5,500, actuator ₹2,000–₹3,500. All brands. Free inspection. Transparent pricing. Call +91 92179 99355.",
  quickAnswer:
    "Recliner repair in Chandigarh costs ₹1,499–₹5,500. Manual mechanism repair ₹1,499–₹3,000, motorised motor replacement ₹2,999–₹5,500, actuator ₹2,000–₹3,500, remote/transformer ₹800–₹2,000. Free doorstep diagnosis. All brands covered. Call +91 92179 99355.",
  h1: "Recliner Repair Cost in Chandigarh — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent recliner repair pricing for Chandigarh Tricity — manual and motorised mechanisms, all brands. Free doorstep diagnosis. Written quote before work begins.",
  showcaseImage: {
    heading: "Recliner Repair Cost Breakdown — Chandigarh 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Recliner repair cost guide for Chandigarh showing transparent pricing by FurniRevive",
    caption: "Recliner Repair Cost Chandigarh 2026 — Manual & motorised pricing | FurniRevive",
  },
  intro: [
    "Recliner sofas are increasingly popular in Chandigarh homes — but when the mechanism fails, repair costs can feel opaque. This guide provides clear, transparent pricing for every type of recliner repair we handle across the Chandigarh Tricity. No guesswork, no hidden fees.",
    "All prices cover doorstep service across all Chandigarh UT sectors, Mohali, and Panchkula. Manual mechanisms, motorised motors, actuators, remotes, and upholstery — every component priced clearly. Free doorstep diagnosis included.",
    "For the full recliner repair service description, see <a href=\"/recliner-repair-chandigarh\">recliner repair Chandigarh</a>. For general sofa pricing, see <a href=\"/sofa-repair-cost-chandigarh\">sofa repair cost Chandigarh</a>.",
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
    { step: "Book Free Diagnosis", description: "Call +91 92179 99355. Our recliner specialist visits your Chandigarh home to diagnose the exact fault — no charge." },
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
    "Uniform Tricity pricing",
    "No hidden charges",
  ],
  contentSections: [
    {
      heading: "Recliner Repair Cost by Component — Chandigarh 2026",
      body: [
        "<strong>Manual mechanism:</strong> ₹1,499–₹3,000. Includes pull-cable replacement (₹1,499–₹2,000), lever mechanism repair (₹1,500–₹2,500), footrest spring repair (₹1,000–₹2,000), and locking pin replacement (₹800–₹1,500). Most manual repairs completed in 1–2 hours.",
        "<strong>Motorised motor:</strong> ₹2,999–₹5,500. Single-motor replacement for standard recliners (₹2,999–₹4,000). Dual-motor (headrest + footrest independent) replacement (₹4,000–₹5,500). Motor quality matters — we use motors rated for 25,000+ cycles.",
        "<strong>Actuator:</strong> ₹2,000–₹3,500. Linear actuators that push/pull the footrest and backrest. Price depends on stroke length and force rating. Common failures: stripped gears, burnt coils.",
        "<strong>Remote/transformer:</strong> ₹800–₹2,000. Wireless remote re-pairing or replacement (₹800–₹1,200). Transformer/power supply replacement (₹1,000–₹2,000). USB port repair on powered recliners (₹500–₹1,000).",
        "<strong>Upholstery:</strong> ₹1,500–₹4,000 for recliner seat panels. Headrest leather restoration from ₹1,000. Armrest repair from ₹800. Full recliner re-upholstery ₹3,000–₹6,000. See <a href=\"/leather-sofa-repair-chandigarh\">leather repair</a> for leather-specific pricing.",
      ],
    },
    {
      heading: "Cost by Recliner Brand — Chandigarh",
      body: [
        "Labour rates are uniform regardless of brand. Part costs vary slightly: La-Z-Boy mechanism parts (₹2,000–₹4,000), Eezy (₹1,500–₹3,500), Durian (₹1,800–₹3,800), Nilkamal (₹1,200–₹2,500), and unbranded (₹1,000–₹2,000). Premium brands use proprietary mechanisms that cost more to source but not more to install.",
        "We stock common replacement parts for the most popular brands in Chandigarh. Exotic or discontinued models may require 2–3 days for part sourcing — confirmed during free diagnosis.",
      ],
    },
    {
      heading: "When Recliner Repair Makes More Sense Than Replacement",
      body: [
        "A new recliner costs ₹15,000–₹1,50,000 in Chandigarh. Most mechanism repairs cost ₹1,499–₹5,500 — just 5–15% of replacement cost. Unless the frame itself is structurally compromised (rare), repair is almost always the correct financial decision.",
        "Motorised recliners especially benefit from repair: the expensive part (leather upholstery, frame, foam) is usually fine — only the electrical mechanism fails. Replacing a ₹3,000 motor saves you from buying a ₹60,000 new recliner.",
      ],
    },
  ],
  priceTable: {
    heading: "Recliner Repair Cost in Chandigarh — Complete 2026 Price List",
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
    { question: "Is the diagnosis free for recliner repair?", answer: "Yes. Our specialist visits your Chandigarh home, diagnoses the fault, and provides a written quote — all at no charge. You only pay if you approve the repair." },
    { question: "Do parts cost extra on top of quoted price?", answer: "No. All quoted prices include both the replacement part and installation labour. The price you approve is the total price you pay." },
    { question: "How long do recliner parts last after repair?", answer: "Quality replacement motors are rated for 25,000+ cycles (8–10 years of normal use). Mechanism parts like cables and springs last 5–8 years. All backed by our 6-month warranty." },
  ],
  relatedPages: chandigarhRelatedExcluding("recliner-repair-cost-chandigarh"),
  keywords: [
    "recliner repair cost chandigarh",
    "recliner repair price chandigarh",
    "recliner motor replacement cost chandigarh",
    "recliner mechanism repair cost chandigarh",
    "motorised recliner repair cost chandigarh",
    "la-z-boy repair cost chandigarh",
    "recliner repair charges chandigarh",
  ],
};

export const furnitureRepairCostChandigarh: SeoPageData = {
  slug: "furniture-repair-cost-chandigarh",
  cityKey: "chandigarh" as const,
  title: "Furniture Repair Cost in Chandigarh 2026 | All Furniture Types | FurniRevive",
  metaDescription:
    "Furniture repair cost in Chandigarh 2026: chair ₹500–₹2,500, bed ₹599–₹3,000, wardrobe ₹800–₹4,000, table ₹500–₹3,000, polish ₹1,500–₹8,000. Transparent doorstep pricing. Free inspection. Call +91 92179 99355.",
  quickAnswer:
    "Furniture repair in Chandigarh costs ₹499–₹15,000 depending on furniture type and damage. Chair repair ₹500–₹2,500, bed repair ₹599–₹3,000, wardrobe ₹800–₹4,000, table ₹500–₹3,000, sofa ₹800–₹12,000, polish ₹1,500–₹8,000. Free doorstep inspection. Call +91 92179 99355.",
  h1: "Furniture Repair Cost in Chandigarh — 2026 Complete Price Guide",
  heroSubtitle:
    "Transparent furniture repair pricing for all types — chairs, beds, wardrobes, tables, sofas, and more. Free doorstep inspection across Chandigarh Tricity. Written quote before work begins.",
  showcaseImage: {
    heading: "Furniture Repair Cost — Chandigarh 2026",
    imageUrl: "https://hercules-cdn.com/file_TPYaw9exg1JyUIbKSL4hxGwx",
    altText: "Furniture repair cost guide for Chandigarh showing pricing by furniture type by FurniRevive",
    caption: "Furniture Repair Cost Chandigarh 2026 — All types priced transparently | FurniRevive",
  },
  intro: [
    "Whether you need a wobbly chair fixed, a bed frame reinforced, a wardrobe door realigned, or a complete furniture set polished — this guide tells you exactly what it costs in Chandigarh. Transparent, up-to-date pricing for every furniture repair service across the Tricity.",
    "All prices apply to doorstep service across all Chandigarh UT sectors, Manimajra, Mohali (all phases), and Panchkula (all sectors). Uniform pricing — no area surcharges. Free inspection included with every booking.",
    "For sofa-specific pricing, see <a href=\"/sofa-repair-cost-chandigarh\">sofa repair cost Chandigarh</a>. For recliner pricing, see <a href=\"/recliner-repair-cost-chandigarh\">recliner repair cost Chandigarh</a>. For carpenter services, see <a href=\"/carpenter-home-service-chandigarh\">carpenter home service Chandigarh</a>.",
  ],
  whyChoose: [
    { title: "Every Furniture Type Covered", description: "Chairs, beds, wardrobes, tables, sofas, cabinets, dressing tables, TV units — each with clear pricing ranges based on actual jobs." },
    { title: "Free Doorstep Inspection", description: "Our carpenter visits your Chandigarh home, inspects the furniture, and quotes exact cost — no charge for inspection." },
    { title: "No Hidden Charges", description: "Quoted price includes labour and standard materials. Specialty materials (if needed) quoted separately with your approval." },
    { title: "Written Quote Policy", description: "Detailed breakdown before work begins. You know exactly what you're paying for — no vague 'approximately' figures." },
    { title: "Repair vs Replace Advice", description: "We'll honestly tell you if repair doesn't make financial sense. If replacement is better, we won't push unnecessary repairs." },
    { title: "Save 50–70% vs New", description: "Professional furniture repair consistently saves 50–70% compared to buying equivalent new pieces in Chandigarh." },
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
    "Uniform Tricity pricing",
    "6-month warranty on all repairs",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Cost by Type — Chandigarh 2026",
      body: [
        "<strong>Chair repair:</strong> Dining chair re-gluing ₹500–₹1,000. Study chair gas lift ₹800–₹1,800. Chair upholstery ₹800–₹2,000 per chair. Armrest repair ₹500–₹1,500. Full chair restoration ₹1,500–₹2,500. See <a href=\"/office-chair-repair-chandigarh\">office chair repair</a> for specialised office chair pricing.",
        "<strong>Bed repair:</strong> Slat replacement ₹599–₹1,500. Headboard repair ₹800–₹2,000. Frame reinforcement ₹1,000–₹2,500. Hydraulic storage mechanism ₹1,000–₹2,500. Side rail repair ₹600–₹1,500. Full bed frame restoration ₹2,000–₹3,000.",
        "<strong>Wardrobe/cabinet repair:</strong> Hinge replacement ₹200–₹500 per hinge. Slider track repair ₹500–₹1,500. Shutter alignment ₹400–₹1,000. Shelf reinforcement ₹300–₹800. Lock replacement ₹300–₹800. Soft-close fitting ₹400–₹1,000 per door. Full wardrobe repair ₹2,000–₹4,000.",
        "<strong>Table repair:</strong> Leg reinforcement ₹500–₹1,500. Surface scratch removal ₹500–₹1,500. Extension mechanism ₹800–₹2,000. Veneer repair ₹600–₹2,000. Full table restoration ₹1,500–₹3,000.",
        "<strong>Polish & refinishing:</strong> Single piece touch-up ₹1,500–₹3,000. Dining set (table + 6 chairs) ₹4,000–₹8,000. Bed polish ₹2,000–₹4,000. Wardrobe polish ₹2,500–₹5,000. Types: melamine, PU, French polish, lacquer.",
      ],
    },
    {
      heading: "Cost Factors That Affect Your Quote",
      body: [
        "Furniture size: larger pieces require more material and time. Damage severity: a single loose joint vs complete frame rebuild. Material type: solid wood costs more to source matching sections than engineered wood. Finish type: PU polish costs more than melamine but lasts longer.",
        "Number of pieces: multi-piece jobs (dining set, bedroom set) often qualify for bundled discounts. Urgency: standard and same-day service carry the same price (no rush surcharge). Location: uniform pricing across all Tricity areas.",
      ],
    },
    {
      heading: "When to Repair vs Replace — Cost Analysis",
      body: [
        "Repair makes clear financial sense when: repair cost is under 35% of new furniture cost, the frame is structurally sound, and the furniture fits your space and style. Chandigarh's older solid-wood furniture (teak, sheesham) is almost always worth repairing — modern mass-produced replacements cannot match their quality at any price point.",
        "Consider replacement when: the frame itself is broken beyond repair (rotted MDF, severe termite damage to core structure), or repair cost exceeds 50% of a comparable new piece. Our carpenters will honestly advise — we don't push repairs on furniture that genuinely needs replacing.",
      ],
    },
  ],
  priceTable: {
    heading: "Furniture Repair Cost in Chandigarh — Complete 2026 Price List",
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
    { question: "What is the cheapest furniture repair in Chandigarh?", answer: "Basic repairs like hinge replacement (₹200–₹500 per hinge), chair re-gluing (₹500), and small fixes start at ₹499. Our carpenter home service handles jobs of any size." },
    { question: "Do you charge for inspection?", answer: "No. Doorstep inspection and written quote are free across all Chandigarh Tricity. You only pay if you approve and proceed with the repair." },
    { question: "Is polishing included in furniture repair cost?", answer: "Basic repair pricing covers structural and functional fixes. Polish/refinishing is a separate service starting at ₹1,500 — quoted separately if needed. Combined repair + polish packages available at discounted rates." },
    { question: "Do prices differ by area in Chandigarh?", answer: "No. Our pricing is uniform across the entire Tricity — same rates for Chandigarh UT, Mohali, Panchkula, Kharar, and Zirakpur. No distance or zone surcharges." },
  ],
  relatedPages: chandigarhRelatedExcluding("furniture-repair-cost-chandigarh"),
  keywords: [
    "furniture repair cost chandigarh",
    "furniture repair price chandigarh",
    "carpenter charges chandigarh",
    "furniture polish cost chandigarh",
    "wardrobe repair cost chandigarh",
    "bed repair cost chandigarh",
    "chair repair cost chandigarh",
    "furniture repair charges chandigarh",
    "furniture repair cost mohali",
  ],
};
