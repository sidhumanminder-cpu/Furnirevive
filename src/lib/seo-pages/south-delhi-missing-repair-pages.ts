import type { SeoPageData } from "@/lib/seo-constants.ts";

const PHONE_DISPLAY = "+91 92179 99355";
const WHATSAPP_NUMBER = "919217999355";

// ─── Shared process steps ─────────────────────────────────────────────────────

const REPAIR_PROCESS = [
  {
    step: "Book a Free Home Visit",
    description: `Call us on ${PHONE_DISPLAY} or WhatsApp ${WHATSAPP_NUMBER} to schedule a convenient slot. We confirm within the hour and send the technician's profile in advance.`,
  },
  {
    step: "On-Site Diagnosis",
    description:
      "Our technician inspects your furniture at home and presents a detailed written quote with no obligation to proceed.",
  },
  {
    step: "Repair Carried Out at Your Home",
    description:
      "Most repairs are completed on-site in 1–3 hours. For full reupholstery we collect and return within 3–5 days, fully restored.",
  },
  {
    step: "Quality Check & Warranty Handover",
    description:
      "We test every repair before leaving and hand over your 6-month warranty in writing.",
  },
];

const RECLINER_BENEFITS = [
  "Saves ₹30,000–₹2,00,000 vs replacing an imported luxury recliner",
  "All repairs done at your home — no transport risk",
  "Motor diagnostic equipment for power recliners on every visit",
  "Genuine spare parts: motors, actuators, control boards, springs",
  "Italian and top-grain leather sourcing for premium colour-match repairs",
  "6-Month warranty on all parts and labour",
  "Same-day slots available when booked before noon",
];

const FURNITURE_BENEFITS = [
  "All furniture types covered in one visit",
  "Free on-site diagnosis and written quote",
  "Grade-matched leathers, fabrics, wood stains, and hardware",
  "CertiPUR-certified foam for cushion replacements",
  "6-Month warranty on all repairs",
  "Minimal disruption — most jobs done in under 3 hours",
  "Same-day slots available when booked before noon",
];

const RECLINER_CONTENT_SECTIONS = [
  {
    heading: "Electric & Power Recliner Motor Repair",
    body: [
      "Power recliners from Natuzzi, La-Z-Boy, and Stressless rely on linear actuator motors and control boards. When your recliner hums but doesn't move, or moves only in one direction, the fault is almost always the motor, actuator, or control board — all of which we stock and replace on a single visit.",
      "Motor repair starts from ₹2,500 and includes full wiring inspection, control board diagnostics, and actuator testing. Motor replacement is ₹3,000–₹6,000 depending on the unit.",
    ],
  },
  {
    heading: "Manual Recliner Mechanism Repair",
    body: [
      "Manual recliners use toothed cams, tension springs, and locking pawls. When springs lose tension or cams wear, the recliner won't lock at your preferred angle or springs back unexpectedly. Mechanism repair typically starts from ₹1,499 and is completed on-site in under 90 minutes.",
    ],
  },
  {
    heading: "Recliner Leather Restoration & Foam Replacement",
    body: [
      "Leather restoration — crack filling, colour redyeing, conditioning — starts from ₹2,500. Full reupholstery from ₹8,000. Foam replacement from ₹999 per cushion using CertiPUR-certified high-resilience foam matched to your original density specification.",
    ],
  },
];

const FURNITURE_CONTENT_SECTIONS = [
  {
    heading: "Sofa & Upholstery Repair",
    body: [
      "We repair fabric, leather, and imported upholstered sofas at your home — covering foam replacement, spring repair, frame fixes, leather stitching, and full reupholstery. Sofa repair starts from ₹999, full reupholstery from ₹5,000.",
    ],
  },
  {
    heading: "Wooden Furniture & Wardrobe Repair",
    body: [
      "Joinery repair, veneer restoration, polish matching, and hardware replacement for wooden furniture, wardrobes, beds, and dining sets. We carry wood fillers, polish shades, and all standard replacement hardware. Most jobs complete in one visit.",
    ],
  },
  {
    heading: "Antique & Imported Furniture Restoration",
    body: [
      "We specialise in high-value pieces — antique sideboards, imported Italian furniture, custom carved pieces. Our craftsmen match original materials and finishes to keep repairs invisible. Custom quote after free home assessment.",
    ],
  },
];

const RECLINER_FAQS = [
  {
    question: "How much does recliner repair cost in South Delhi?",
    answer:
      "Recliner repair in South Delhi starts from ₹1,499 for a manual mechanism fix. Electric motor repair from ₹2,500, motor replacement ₹3,000–₹6,000, full reupholstery ₹8,000–₹20,000. Free written quote after home visit.",
  },
  {
    question: "Can you repair Natuzzi and La-Z-Boy recliners?",
    answer:
      "Yes — we specialise in imported recliners including Natuzzi Italia, Stressless, La-Z-Boy, Ashley, and BoConcept. We carry diagnostic tools and spare parts suited to European and American power recliner systems.",
  },
  {
    question: "My power recliner hums but doesn't move. What's wrong?",
    answer:
      "A humming motor that produces no movement usually indicates a seized actuator or a stripped gear in the linear motor. In some cases it's a faulty control board. Our technician can diagnose and usually resolve this in a single visit from ₹2,500.",
  },
  {
    question: "Do you offer same-day recliner repair?",
    answer:
      "Yes, same-day slots are available subject to availability. Call us before noon for the best chance of a same-day appointment.",
  },
  {
    question: "What warranty do you provide on recliner repairs?",
    answer:
      "All repairs carry a 6-month warranty on both parts and labour. If anything we've repaired fails within six months, we return and fix it at no charge.",
  },
];

const FURNITURE_FAQS = [
  {
    question: "How much does furniture repair cost in South Delhi?",
    answer:
      "Furniture repair in South Delhi starts from ₹599 for chair joint and simple spring repairs. Sofa foam replacement from ₹999/cushion, full reupholstery ₹5,000–₹18,000. Free written quote after home visit.",
  },
  {
    question: "What types of furniture do you repair?",
    answer:
      "We repair sofas, chairs, recliners, wooden furniture, wardrobes, beds, dining sets, and antique pieces. One booking covers all furniture types in your home.",
  },
  {
    question: "Do you repair wooden furniture and wardrobes at home?",
    answer:
      "Yes. We repair joints, veneer, polish, hinges, channels, mirror panels, and locks for all wooden furniture and storage units at your doorstep — no need to transport anything.",
  },
  {
    question: "Do you offer same-day furniture repair?",
    answer:
      "Yes, same-day slots are available for most repair types. Call us before noon to secure a same-day visit.",
  },
  {
    question: "What warranty do you provide on furniture repairs?",
    answer:
      "Every furniture repair carries a 6-month workmanship warranty. If anything fails within that period, we return and fix it at no charge.",
  },
];

const GK_RELATED_PAGES = [
  { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Greater Kailash", href: "/sofa-repair-greater-kailash" },
  { label: "Sofa Repair GK I", href: "/sofa-repair-greater-kailash-1" },
  { label: "Sofa Repair GK II", href: "/sofa-repair-greater-kailash-2" },
  { label: "Sofa Repair GK III", href: "/sofa-repair-greater-kailash-3" },
  { label: "Recliner Repair Greater Kailash", href: "/recliner-repair-greater-kailash" },
  { label: "Furniture Repair Greater Kailash", href: "/furniture-repair-greater-kailash" },
  { label: "Sofa Repair Defence Colony", href: "/sofa-repair-defence-colony" },
  { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Recliner Repair Cost Delhi", href: "/recliner-repair-cost-delhi" },
  { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
];

// ─── 1. Recliner Repair — Greater Kailash 1 ───────────────────────────────────

const reclineRepairGreaterKailash1: SeoPageData = {
  slug: "recliner-repair-greater-kailash-1",
  title: "Recliner Repair Greater Kailash 1 – Expert Doorstep Service | Same Day | From ₹1,499",
  metaDescription:
    "Recliner repair in Greater Kailash 1 from ₹1,499. Motor, mechanism & leather experts. Free home visit in GK-I M Block, N Block & surrounding lanes. Call FurniRevive now!",
  h1: "Recliner Repair in Greater Kailash 1 – Luxury Recliner Specialists at Your Door",
  heroSubtitle:
    "Motor repair, mechanism fixes, leather restoration and full reupholstery for Natuzzi, La-Z-Boy, Ashley, Stressless and all premium recliners in GK-I. Free home visit. Same-day slots available.",
  showcaseImage: {
    heading: "Premium Recliner Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional recliner repair technician working on a luxury power recliner in a premium South Delhi home (Greater Kailash 1) — FurniRevive",
    caption: "Recliner Repair in Greater Kailash 1 | Motor & mechanism specialists | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive repairs all recliners in Greater Kailash 1 — from imported power recliners to manual mechanism fixes — starting at ₹1,499 with a free home visit and 6-month warranty. Same-day slots available for GK-I M Block, N Block and all surrounding streets.",
  intro: [
    "Greater Kailash 1 is home to some of Delhi's finest furniture — Italian leather power recliners, La-Z-Boy sectionals, custom-built chairs that were ordered from Hauz Khas showrooms and have served the household through decades. When these pieces develop faults — a stuck motor, a mechanism that won't lock, cracked leather on the armrests — they deserve precision repair, not a rushed replacement. FurniRevive's South Delhi recliner team serves every block in GK-I with the same expertise and materials used by premium imported-furniture workshops.",
    "Our technicians carry dedicated recliner repair equipment — motor diagnostic tools, compatible replacement motors for all major brands, wiring looms, control boards, and grade-matched leathers and performance fabrics. We come to your GK-1 home, diagnose in the chair's natural position, present a written quote before any work begins, and complete most repairs in a single visit. For full reupholstery we collect, restore in our workshop, and return the recliner to your door within 3–5 days. Every job includes a 6-month warranty on both parts and labour.",
    "A common misconception in GK-I homes is that a non-responding electric recliner needs full replacement. In over 90% of cases we see in Greater Kailash, the fault is a control board, motor actuator, or wiring connection — all repairable in one visit for a fraction of replacement cost. Call us before you write off your recliner.",
  ],
  whyChoose: [
    {
      title: "Free Doorstep Diagnosis in GK-I",
      description:
        "We come to your Greater Kailash 1 home, examine the recliner in its position — critical for power-unit diagnosis — and hand you a written quote before any work begins. No call-out fee, no obligation.",
    },
    {
      title: "Same-Day Motor & Mechanism Repair",
      description:
        "Most power recliner faults — burned control boards, stuck motors, faulty actuators — can be resolved in a single visit. We carry spare parts for all major brands and aim to complete the repair the same day.",
    },
    {
      title: "Premium Leather & Fabric Colour-Matching",
      description:
        "Cracked top-grain leather on an imported recliner needs colour-matched, grade-matched material. We source leathers and performance fabrics that honour the original quality of your GK-I piece.",
    },
    {
      title: "6-Month Warranty on Every Repair",
      description:
        "Every recliner repair in Greater Kailash 1 comes with a 6-month warranty covering parts and labour. If anything we fixed fails within that period, we return and fix it at no charge — no questions asked.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: RECLINER_BENEFITS,
  contentSections: RECLINER_CONTENT_SECTIONS,
  faqs: RECLINER_FAQS,
  serviceKey: "recliner-repair",
  relatedPages: GK_RELATED_PAGES,
  keywords: [
    "recliner repair Greater Kailash 1",
    "recliner repair GK 1",
    "power recliner repair GK-I",
    "recliner motor repair Greater Kailash 1",
    "electric recliner repair GK I",
    "La-Z-Boy repair Greater Kailash",
    "Natuzzi recliner repair Delhi",
    "imported recliner repair South Delhi",
    "recliner mechanism repair GK 1",
  ],
  priceTable: {
    rows: [
      { service: "Manual Recliner Mechanism Repair", price: "From ₹1,499" },
      { service: "Electric Recliner Motor Repair", price: "From ₹2,500" },
      { service: "Recliner Motor Replacement", price: "₹3,000–₹6,000" },
      { service: "Wiring & Control Board Fix", price: "From ₹1,200" },
      { service: "Recliner Spring Repair", price: "From ₹800" },
      { service: "Recliner Foam Replacement", price: "From ₹999/cushion" },
      { service: "Recliner Leather Restoration", price: "From ₹2,500" },
      { service: "Full Recliner Reupholstery", price: "₹8,000–₹20,000" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "Motor Repair Specialists", "4.8★ Rated Service", "Same-Day Available"],
  ctaVariants: ["Book a Same-Day Recliner Repair", "Request a Free Motor Diagnosis", "Restore Your Recliner Without Replacing It", "Schedule Fast Doorstep Service in GK-I"],
  testimonials: [
    {
      name: "Priya Malhotra",
      location: "GK-I M Block, Greater Kailash 1",
      rating: 5,
      text: "Our La-Z-Boy power recliner had completely stopped responding. The technician diagnosed a faulty control board and replaced it on the spot. Chair works perfectly — 6-month warranty gave real peace of mind.",
      service: "Electric Recliner Motor Repair",
    },
    {
      name: "Suresh Kapoor",
      location: "Greater Kailash 1",
      rating: 5,
      text: "The leather on our Natuzzi recliner had badly cracked on the armrests. The team colour-matched the leather so well that guests can't tell it was repaired. Saved us over ₹1.2 lakh.",
      service: "Recliner Leather Restoration",
    },
  ],
};

// ─── 2. Furniture Repair — Greater Kailash 1 ─────────────────────────────────

const furnitureRepairGreaterKailash1: SeoPageData = {
  slug: "furniture-repair-greater-kailash-1",
  title: "Furniture Repair Greater Kailash 1 – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Greater Kailash 1 from ₹599. Sofa, chair, wooden furniture, bed & wardrobe repair at home. GK-I M Block, N Block & surroundings. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Greater Kailash 1 – Premium Doorstep Restoration for GK-I Homes",
  heroSubtitle:
    "Complete furniture repair for imported sofas, designer chairs, wooden furniture, beds, and wardrobes across GK-I M Block, N Block and all surrounding lanes. Free home visit. Same-day slots. 6-month warranty.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional furniture repair technician restoring a premium wooden cabinet in a luxury South Delhi home (Greater Kailash 1) — FurniRevive",
    caption: "Furniture Repair in Greater Kailash 1 | Premium doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Greater Kailash 1 from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, dining tables, and antique pieces. Free home visit, same-day availability for GK-I, and a 6-month warranty on every repair.",
  intro: [
    "Greater Kailash 1 homes are furnished with intention. The Sheesham dining table in the formal dining room came from a craftsman in Kirti Nagar. The rosewood wardrobe was part of the original house purchase and has outlasted three coats of polish. The Italian sectional sofa in the drawing room was an investment piece that has served the family for twelve years and still has another decade left — if it gets the right care. FurniRevive's South Delhi furniture repair team is designed precisely for homes like these.",
    "We repair everything in GK-1: upholstered sofas and chairs (fabric, leather, imported velvet), wooden furniture (frames, joints, veneer, polish), recliners (motor, mechanism, foam), beds (headboards, frames, storage mechanisms), wardrobes (hinges, channels, mirrors, handles), and dining sets (chairs, table aprons, cane seats). Our craftsmen bring full workshop equipment to your door — no need to dismantle, transport, or risk damage in transit. Most repairs are completed within a single visit. We carry a wide range of wood fillers, polish shades, fabric samples, and replacement hardware.",
    "The starting rate of ₹599 reflects real jobs — a simple spring replacement, a broken chair joint, a wardrobe hinge pack. Complex restorations like complete reupholstery or antique French-polish work are quoted transparently after the free on-site assessment. Every job carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "All Furniture Types — One Team",
      description:
        "Sofas, chairs, wooden cabinets, beds, wardrobes, dining sets, antiques. One booking brings the right specialist to your GK-1 home. No need to coordinate multiple vendors.",
    },
    {
      title: "Free Doorstep Diagnosis & Written Quote",
      description:
        "We assess every piece in your home, present a clear written quote before work begins, and never proceed without your written approval. No surprises on the bill.",
    },
    {
      title: "Premium Material Matching",
      description:
        "We source leathers, fabrics, wood stains, polish shades and replacement hardware that match your original piece. The repair blends in — it doesn't announce itself.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Every furniture repair in Greater Kailash 1 carries a 6-month workmanship warranty. If anything we repaired fails within that period, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: GK_RELATED_PAGES,
  keywords: [
    "furniture repair Greater Kailash 1",
    "furniture repair GK 1",
    "sofa repair GK-I",
    "wooden furniture repair Greater Kailash 1",
    "wardrobe repair GK 1",
    "bed repair Greater Kailash 1",
    "chair repair GK I Delhi",
    "antique furniture restoration GK 1",
  ],
  priceTable: {
    rows: [
      { service: "Sofa Spring Repair", price: "From ₹599/spring" },
      { service: "Chair Joint & Frame Repair", price: "From ₹599" },
      { service: "Wardrobe Hinge / Channel Repair", price: "From ₹299/unit" },
      { service: "Wooden Furniture Polish", price: "From ₹799" },
      { service: "Sofa Foam Replacement", price: "From ₹999/cushion" },
      { service: "Full Sofa Reupholstery", price: "₹5,000–₹18,000" },
      { service: "Antique Restoration", price: "Custom quote" },
      { service: "Bed Frame Repair", price: "From ₹799" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "All Furniture Types", "4.8★ Rated Service", "Same-Day Available"],
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in GK-I"],
  testimonials: [
    {
      name: "Anita Sharma",
      location: "GK-I M Block, Greater Kailash 1",
      rating: 5,
      text: "Our Sheesham dining chairs had all developed wobbly joints over the years. The technician repaired all six in one visit, re-glued and re-pinned every joint, and polished them to match. They look completely new.",
      service: "Chair Joint Repair & Polish",
    },
  ],
};

// ─── 3. Furniture Repair — Greater Kailash 2 ─────────────────────────────────

const furnitureRepairGreaterKailash2: SeoPageData = {
  slug: "furniture-repair-greater-kailash-2",
  title: "Furniture Repair Greater Kailash 2 – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Greater Kailash 2 from ₹599. Sofa, chair, wooden furniture, beds and wardrobes repaired at your GK-II home. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Greater Kailash 2 – Premium Doorstep Restoration for GK-II Homes",
  heroSubtitle:
    "Expert furniture repair for all piece types across GK-II M Block, S Block and surrounding streets. Free home visit. Same-day slots. 6-month warranty. Serving Greater Kailash 2 and nearby Defence Colony, Kailash Colony.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional furniture repair technician working on a luxury sofa in a premium South Delhi home (Greater Kailash 2) — FurniRevive",
    caption: "Furniture Repair in Greater Kailash 2 | Premium doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Greater Kailash 2 from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining tables. Free home visit, same-day availability in GK-II, and a 6-month warranty on every repair.",
  intro: [
    "Greater Kailash 2 is one of South Delhi's most coveted residential addresses — and the furniture in GK-2 homes reflects that. From imported Italian sectionals to custom Rajasthani teak wardrobes, the pieces here have been chosen carefully and have served the household for years. When they begin to show wear — sagging sofa seats, stiff wardrobe channels, cracked wooden frames, fraying fabric — FurniRevive's GK-II doorstep repair team restores them at your home without the risk and inconvenience of transport.",
    "We repair all furniture types in Greater Kailash 2: sofas and sofa-beds (upholstery, foam, springs, frames), recliners (motor, mechanism, leather), wooden furniture (joints, veneer, polish), wardrobes and storage (hinges, channels, mirrors), beds (frames, headboards, storage drawers), and dining sets. Our craftsmen arrive with workshop-grade tools and a curated selection of leathers, fabrics, wood fillers, polish shades, and replacement hardware. Most repairs complete in one visit. Full reupholstery is done at our workshop and returned within 3–5 days.",
    "Every job comes with a written quote after the free on-site assessment and a 6-month workmanship warranty on completion.",
  ],
  whyChoose: [
    {
      title: "All Furniture — One Team, One Visit",
      description:
        "Sofas, chairs, wooden cabinets, recliners, beds, wardrobes. One booking covers every piece in your GK-II home. No need to coordinate multiple vendors for different furniture types.",
    },
    {
      title: "Free Doorstep Assessment & Written Quote",
      description:
        "We come to your Greater Kailash 2 home, assess every piece, and present a written quote before work begins. No surprises, no pressure to proceed.",
    },
    {
      title: "Grade-Matched Materials for Every Repair",
      description:
        "From Italian top-grain leather matching to Sheesham wood polish shades — we source materials that match your original piece quality so repairs are invisible.",
    },
    {
      title: "6-Month Warranty on All Work",
      description:
        "Every repair in GK-2 carries a 6-month workmanship warranty. If anything fails within that period, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: GK_RELATED_PAGES,
  keywords: [
    "furniture repair Greater Kailash 2",
    "furniture repair GK 2",
    "sofa repair GK-II",
    "wooden furniture repair Greater Kailash 2",
    "wardrobe repair GK 2",
    "recliner repair GK 2",
    "chair repair Greater Kailash 2",
  ],
  priceTable: {
    rows: [
      { service: "Sofa Spring Repair", price: "From ₹599/spring" },
      { service: "Chair Joint & Frame Repair", price: "From ₹599" },
      { service: "Wardrobe Hinge / Channel Repair", price: "From ₹299/unit" },
      { service: "Wooden Furniture Polish", price: "From ₹799" },
      { service: "Sofa Foam Replacement", price: "From ₹999/cushion" },
      { service: "Full Sofa Reupholstery", price: "₹5,000–₹18,000" },
      { service: "Bed Frame Repair", price: "From ₹799" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "All Furniture Types", "4.8★ Rated Service", "Same-Day Available"],
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in GK-II"],
  testimonials: [
    {
      name: "Meena Gupta",
      location: "GK-II M Block, Greater Kailash 2",
      rating: 5,
      text: "Our imported leather sofa had started sagging badly on one side. The team replaced the foam, tightened the springs, and re-stitched the leather panel — all in one visit. The sofa looks and feels completely new.",
      service: "Sofa Foam & Spring Repair",
    },
  ],
};

// ─── 4. Recliner Repair — Greater Kailash 3 ───────────────────────────────────

const reclineRepairGreaterKailash3: SeoPageData = {
  slug: "recliner-repair-greater-kailash-3",
  title: "Recliner Repair Greater Kailash 3 – Expert Doorstep Service | Same Day | From ₹1,499",
  metaDescription:
    "Recliner repair in Greater Kailash 3 from ₹1,499. Motor, mechanism & leather experts. Free home visit in GK-III and surrounding South Delhi areas. Call FurniRevive now!",
  h1: "Recliner Repair in Greater Kailash 3 – Expert Doorstep Service for GK-III",
  heroSubtitle:
    "Motor repair, mechanism fixes, leather restoration and full reupholstery for all recliner brands in GK-III. Free home visit. Same-day slots. Serving Greater Kailash 3, Malviya Nagar and Saket.",
  showcaseImage: {
    heading: "Premium Recliner Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional recliner repair technician working on a premium leather recliner in a South Delhi home (Greater Kailash 3) — FurniRevive",
    caption: "Recliner Repair in Greater Kailash 3 | Motor & mechanism specialists | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive repairs all recliners in Greater Kailash 3 — electric, manual, and power recliners — from ₹1,499 with a free home visit and 6-month warranty. Same-day slots available for GK-III and surrounding South Delhi areas.",
  intro: [
    "Greater Kailash 3 is an established South Delhi residential address known for its large houses and premium furnishings. Recliners in GK-III homes range from imported La-Z-Boy and Stressless models to locally sourced high-end pieces — and when they develop faults, they deserve the same level of precision care that built them. FurniRevive's South Delhi recliner team serves GK-3 with doorstep motor repair, mechanism servicing, and upholstery restoration.",
    "Common recliner problems we resolve in Greater Kailash 3 homes include stuck electric motors (often caused by voltage fluctuations in older residential buildings), seized manual mechanisms (spring fatigue or cam misalignment), cracked or delaminated leather on armrests and headrests, and compressed or uneven cushion foam. We diagnose at your home, quote in writing, and complete most repairs in a single visit. Our technicians carry compatible motors, wiring looms, control boards, leathers, and performance fabrics.",
    "Every repair in GK-3 carries a 6-month warranty on both parts and labour. If your recliner is not responding or is not comfortable to use, contact us before assuming it needs replacement — the diagnosis is free.",
  ],
  whyChoose: [
    {
      title: "Free Doorstep Diagnosis in GK-III",
      description:
        "We come to your Greater Kailash 3 home, inspect the recliner in its natural position, and give you a written, no-obligation quote. No call-out fee.",
    },
    {
      title: "Same-Day Repair for Most Faults",
      description:
        "Burned control boards, faulty motors, mechanism jams — we carry spare parts for all major brands and resolve most faults on the first visit.",
    },
    {
      title: "Leather & Fabric Restoration",
      description:
        "We colour-match and restore cracked or peeling leather on imported recliners using grade-matched materials that preserve the original quality of your GK-3 piece.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Every recliner repair in Greater Kailash 3 includes a 6-month warranty on parts and labour. We return and fix any failure at no charge within the warranty period.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: RECLINER_BENEFITS,
  contentSections: RECLINER_CONTENT_SECTIONS,
  faqs: RECLINER_FAQS,
  serviceKey: "recliner-repair",
  relatedPages: GK_RELATED_PAGES,
  keywords: [
    "recliner repair Greater Kailash 3",
    "recliner repair GK 3",
    "power recliner repair GK-III",
    "recliner motor repair Greater Kailash 3",
    "electric recliner repair GK III",
    "recliner mechanism repair GK 3",
    "imported recliner repair South Delhi",
  ],
  priceTable: {
    rows: [
      { service: "Manual Recliner Mechanism Repair", price: "From ₹1,499" },
      { service: "Electric Recliner Motor Repair", price: "From ₹2,500" },
      { service: "Recliner Motor Replacement", price: "₹3,000–₹6,000" },
      { service: "Wiring & Control Board Fix", price: "From ₹1,200" },
      { service: "Recliner Foam Replacement", price: "From ₹999/cushion" },
      { service: "Recliner Leather Restoration", price: "From ₹2,500" },
      { service: "Full Recliner Reupholstery", price: "₹8,000–₹20,000" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "Motor Repair Specialists", "4.8★ Rated Service"],
  ctaVariants: ["Book a Same-Day Recliner Repair", "Request a Free Motor Diagnosis", "Restore Your Recliner Without Replacing It"],
  testimonials: [
    {
      name: "Rajiv Bhatia",
      location: "Greater Kailash 3",
      rating: 5,
      text: "The power recliner in our bedroom had been stuck in the reclined position for two weeks. The technician identified the wiring fault within 10 minutes and had it working within the hour. Excellent service.",
      service: "Electric Recliner Motor Repair",
    },
  ],
};

// ─── 5. Furniture Repair — Greater Kailash 3 ─────────────────────────────────

const furnitureRepairGreaterKailash3: SeoPageData = {
  slug: "furniture-repair-greater-kailash-3",
  title: "Furniture Repair Greater Kailash 3 – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Greater Kailash 3 from ₹599. Sofas, chairs, wooden furniture, beds and wardrobes repaired at home in GK-III. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Greater Kailash 3 – Premium Doorstep Restoration",
  heroSubtitle:
    "Expert furniture repair for all types across GK-III — sofas, chairs, wooden furniture, beds, wardrobes, recliners. Free home visit. Same-day slots. 6-month warranty.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional furniture repair technician working on premium wooden furniture in a South Delhi home (Greater Kailash 3) — FurniRevive",
    caption: "Furniture Repair in Greater Kailash 3 | Premium doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Greater Kailash 3 from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets. Free home visit, same-day availability in GK-III, and a 6-month warranty on every repair.",
  intro: [
    "Furniture in Greater Kailash 3 homes spans generations — antique sideboards passed down from parents, custom teak dining sets built by Kirti Nagar craftsmen, imported bedroom furniture that arrived as part of a renovation project. When these pieces need care — a broken joint, a warped drawer, sagging upholstery, cracked veneer — FurniRevive brings the right expertise directly to your GK-3 home.",
    "We repair the full range of furniture in GK-3: sofas and chairs (fabric, leather, foam, springs), wooden pieces (joints, veneer, polish, carvings), recliners (motor, mechanism), wardrobes (hinges, channels, mirror replacements), beds (frames, headboards, storage hardware), and dining sets. Our craftsmen arrive with workshop-grade tools, a selection of wood fillers, polish shades, fabric and leather samples, and all standard replacement hardware. Most repairs are completed in a single visit.",
    "Every job starts with a free on-site assessment and a written quote. No work begins without your approval. Every repair carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "All Furniture Types — One Team",
      description:
        "One booking covers sofas, chairs, wooden furniture, recliners, wardrobes, and beds. Our GK-3 team brings the right expertise and materials for every piece in your home.",
    },
    {
      title: "Free Home Visit & Written Quote",
      description:
        "We assess all your furniture in your GK-III home and present a clear written quote before starting any work. Fully transparent pricing — no surprises.",
    },
    {
      title: "Material Matching for Invisible Repairs",
      description:
        "Wood polish shades, veneer, leather grades, fabric textures — we source materials that match the original so repairs are invisible, not obvious patch jobs.",
    },
    {
      title: "6-Month Workmanship Warranty",
      description:
        "Every furniture repair in Greater Kailash 3 carries a 6-month warranty. If anything we repaired fails, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: GK_RELATED_PAGES,
  keywords: [
    "furniture repair Greater Kailash 3",
    "furniture repair GK 3",
    "sofa repair GK-III",
    "wooden furniture repair Greater Kailash 3",
    "wardrobe repair GK 3",
    "chair repair Greater Kailash 3",
    "antique furniture repair GK 3",
  ],
  priceTable: {
    rows: [
      { service: "Sofa Spring Repair", price: "From ₹599/spring" },
      { service: "Chair Joint & Frame Repair", price: "From ₹599" },
      { service: "Wardrobe Hinge / Channel Repair", price: "From ₹299/unit" },
      { service: "Wooden Furniture Polish", price: "From ₹799" },
      { service: "Sofa Foam Replacement", price: "From ₹999/cushion" },
      { service: "Full Sofa Reupholstery", price: "₹5,000–₹18,000" },
      { service: "Bed Frame Repair", price: "From ₹799" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "All Furniture Types", "4.8★ Rated Service"],
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today"],
  testimonials: [
    {
      name: "Neeraj Tandon",
      location: "Greater Kailash 3",
      rating: 5,
      text: "Two dining chairs had broken back joints and a wardrobe had misaligned hinges. All fixed in one visit. The technician was professional, clean, and done in under two hours.",
      service: "Chair Joint Repair & Wardrobe Hinge Repair",
    },
  ],
};

// ─── 6. Furniture Repair — Maharani Bagh ─────────────────────────────────────

const furnitureRepairMaharaniBagh: SeoPageData = {
  slug: "furniture-repair-maharani-bagh",
  title: "Furniture Repair Maharani Bagh – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Maharani Bagh from ₹599. Sofa, chair, wooden furniture, beds and wardrobes repaired at your Maharani Bagh or Friends Colony home. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Maharani Bagh – Premium Doorstep Restoration",
  heroSubtitle:
    "Expert furniture repair for every piece in Maharani Bagh — sofas, chairs, wooden furniture, beds, wardrobes, recliners. Free home visit. Same-day slots. 6-month warranty. Serving Maharani Bagh, Friends Colony, and nearby South Delhi.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your South Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_nlD3aHBk5v2TxQrX5CCC92Wx",
    altText: "Professional furniture repair technician working on a premium sofa in a luxury South Delhi home (Maharani Bagh) — FurniRevive",
    caption: "Furniture Repair in Maharani Bagh | Premium doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Maharani Bagh from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets. Free home visit, same-day availability, and a 6-month warranty on every repair.",
  intro: [
    "Maharani Bagh is one of South Delhi's most exclusive residential enclaves — a quiet, leafy neighbourhood of large bungalows and premium houses tucked between Friends Colony, Lajpat Nagar, and the Ashram area. The furniture here reflects the character of the neighbourhood: curated, often inherited, sometimes imported, and almost always worth restoring rather than replacing. FurniRevive's South Delhi repair team serves Maharani Bagh with the doorstep expertise and material quality that these homes demand.",
    "We handle the full spectrum of furniture repairs in Maharani Bagh: sofas and sectionals (fabric, leather, foam replacement, spring and frame repairs), recliners (electric motors, mechanism servicing, upholstery), wooden furniture (joint repair, veneer restoration, French polish, carving restoration), wardrobes and storage units (hinges, telescopic channels, mirror replacements, locks), beds (frames, headboards, storage lift mechanisms), and dining sets (chair joints, table aprons, cane and rush seat re-weaving). Our craftsmen arrive with workshop-grade tools and a curated inventory of materials — leathers, fabrics, wood stains, polish shades, and hardware.",
    "Every Maharani Bagh job begins with a free on-site assessment and a written quote. Nothing proceeds without your approval. Every repair carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "Premium Service for Premium Homes",
      description:
        "Maharani Bagh bungalows house furniture that was chosen carefully. Our technicians are trained to work on imported, antique, and high-end pieces — not just budget-range furniture.",
    },
    {
      title: "Free Doorstep Assessment & Written Quote",
      description:
        "We come to your Maharani Bagh home, assess every piece, and present a written quote before any work begins. No call-out fee. No obligation to proceed.",
    },
    {
      title: "All Furniture Types — One Visit",
      description:
        "Sofas, wooden cabinets, recliners, beds, wardrobes, dining sets. One booking brings the right specialist for every piece that needs attention.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Every furniture repair in Maharani Bagh carries a 6-month workmanship warranty. If anything we repaired fails within that period, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: [
    { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
    { label: "Sofa Repair Maharani Bagh", href: "/sofa-repair-maharani-bagh" },
    { label: "Recliner Repair Maharani Bagh", href: "/recliner-repair-maharani-bagh" },
    { label: "Sofa Repair Friends Colony", href: "/sofa-repair-friends-colony" },
    { label: "Furniture Repair New Friends Colony", href: "/furniture-repair-new-friends-colony" },
    { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar" },
    { label: "Furniture Repair Defence Colony", href: "/furniture-repair-defence-colony" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
  ],
  keywords: [
    "furniture repair Maharani Bagh",
    "sofa repair Maharani Bagh",
    "wooden furniture repair Maharani Bagh",
    "wardrobe repair Maharani Bagh",
    "chair repair Maharani Bagh Delhi",
    "antique furniture restoration Maharani Bagh",
    "furniture repair Friends Colony",
  ],
  priceTable: {
    rows: [
      { service: "Sofa Spring Repair", price: "From ₹599/spring" },
      { service: "Chair Joint & Frame Repair", price: "From ₹599" },
      { service: "Wardrobe Hinge / Channel Repair", price: "From ₹299/unit" },
      { service: "Wooden Furniture Polish", price: "From ₹799" },
      { service: "Sofa Foam Replacement", price: "From ₹999/cushion" },
      { service: "Full Sofa Reupholstery", price: "₹5,000–₹18,000" },
      { service: "Antique Restoration", price: "Custom quote" },
      { service: "Bed Frame Repair", price: "From ₹799" },
    ],
  },
  trustSignals: ["6-Month Warranty", "Free Home Visit", "Transparent Pricing", "All Furniture Types", "4.8★ Rated Service", "Same-Day Available"],
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in Maharani Bagh"],
  testimonials: [
    {
      name: "Kavita Malhotra",
      location: "Maharani Bagh, South Delhi",
      rating: 5,
      text: "We had an antique rosewood sideboard with a broken drawer slider and cracked veneer on the top. The technician repaired and colour-matched the veneer perfectly and replaced the drawer mechanism. The piece looks as it should — heritage intact.",
      service: "Antique Furniture Restoration",
    },
    {
      name: "Deepak Sood",
      location: "Maharani Bagh",
      rating: 5,
      text: "Our Italian leather sofa needed foam replacement and some leather stitching work. Everything done in one visit, materials matched perfectly, and the sofa is comfortable again. Excellent team.",
      service: "Sofa Foam Replacement & Leather Stitching",
    },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const SOUTH_DELHI_MISSING_REPAIR_PAGES: SeoPageData[] = [
  reclineRepairGreaterKailash1,
  furnitureRepairGreaterKailash1,
  furnitureRepairGreaterKailash2,
  reclineRepairGreaterKailash3,
  furnitureRepairGreaterKailash3,
  furnitureRepairMaharaniBagh,
];
