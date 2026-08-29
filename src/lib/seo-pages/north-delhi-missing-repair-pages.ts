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
    question: "How much does recliner repair cost in North Delhi?",
    answer:
      "Recliner repair in North Delhi starts from ₹1,499 for a manual mechanism fix. Electric motor repair from ₹2,500, motor replacement ₹3,000–₹6,000, full reupholstery ₹8,000–₹20,000. Free written quote after home visit.",
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
    question: "How much does furniture repair cost in North Delhi?",
    answer:
      "Furniture repair in North Delhi starts from ₹599 for chair joint and simple spring repairs. Sofa foam replacement from ₹999/cushion, full reupholstery ₹5,000–₹18,000. Free written quote after home visit.",
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

// ─── Related pages for North Delhi localities ────────────────────────────────

const ROHINI_RELATED_PAGES = [
  { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
  { label: "Recliner Repair Rohini", href: "/recliner-repair-rohini" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Shalimar Bagh", href: "/furniture-repair-shalimar-bagh" },
  { label: "Furniture Repair Ashok Vihar", href: "/furniture-repair-ashok-vihar" },
  { label: "Furniture Repair Model Town", href: "/furniture-repair-model-town" },
  { label: "Recliner Repair Shalimar Bagh", href: "/recliner-repair-shalimar-bagh" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
];

const ASHOK_VIHAR_RELATED_PAGES = [
  { label: "Sofa Repair Ashok Vihar", href: "/sofa-repair-ashok-vihar" },
  { label: "Recliner Repair Ashok Vihar", href: "/recliner-repair-ashok-vihar" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
  { label: "Recliner Repair Rohini", href: "/recliner-repair-rohini" },
  { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
  { label: "Furniture Repair Shalimar Bagh", href: "/furniture-repair-shalimar-bagh" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
];

const MODEL_TOWN_RELATED_PAGES = [
  { label: "Sofa Repair Model Town", href: "/sofa-repair-model-town" },
  { label: "Recliner Repair Model Town", href: "/recliner-repair-model-town" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
  { label: "Recliner Repair Rohini", href: "/recliner-repair-rohini" },
  { label: "Furniture Repair Shalimar Bagh", href: "/furniture-repair-shalimar-bagh" },
  { label: "Furniture Repair Ashok Vihar", href: "/furniture-repair-ashok-vihar" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
];

const SHALIMAR_BAGH_RELATED_PAGES = [
  { label: "Sofa Repair Shalimar Bagh", href: "/sofa-repair-shalimar-bagh" },
  { label: "Recliner Repair Shalimar Bagh", href: "/recliner-repair-shalimar-bagh" },
  { label: "Furniture Repair Shalimar Bagh", href: "/furniture-repair-shalimar-bagh" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
  { label: "Recliner Repair Rohini", href: "/recliner-repair-rohini" },
  { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
  { label: "Furniture Repair Ashok Vihar", href: "/furniture-repair-ashok-vihar" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Furniture Repair Price Guide", href: "/furniture-repair-price-guide-delhi" },
];

// ─── 1. Furniture Repair — Rohini ────────────────────────────────────────────

const furnitureRepairRohini: SeoPageData = {
  slug: "furniture-repair-rohini",
  title: "Furniture Repair Rohini – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Rohini from ₹599. Sofa, chair, wooden furniture, bed & wardrobe repair at home across all sectors. 6-month warranty. Free home visit. Call FurniRevive!",
  h1: "Furniture Repair in Rohini – Expert Doorstep Restoration for Every Sector",
  heroSubtitle:
    "Complete furniture repair for sofas, chairs, wooden furniture, beds, wardrobes, and dining sets across all Rohini sectors. Free home visit. Same-day slots. 6-month warranty. Serving Rohini Sector 1–25, Prashant Vihar, and Pitampura border areas.",
  showcaseImage: {
    heading: "Expert Furniture Repair — Professional Service at Your North Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional furniture repair technician restoring a premium sofa in a North Delhi home (Rohini) — FurniRevive",
    caption: "Furniture Repair in Rohini, North Delhi | Expert doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Rohini from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets across all sectors. Free home visit, same-day availability, and a 6-month warranty on every repair.",
  intro: [
    "Rohini is North Delhi's largest planned residential colony — a vast grid of DDA sectors where families have lived for decades. The furniture in Rohini homes reflects practical, long-term choices: sturdy fabric sofas bought from Kirti Nagar or Pitampura showrooms, Sheesham dining sets, laminated wardrobes that came with the flat, and mid-range recliners picked up during Diwali sales. These pieces are built to last, but after years of daily use by large joint families, they inevitably develop problems — sagging sofa cushions, wobbly dining chairs, wardrobe hinges that have given way, bed frames that creak at every turn. FurniRevive's North Delhi furniture repair team serves every Rohini sector with doorstep expertise.",
    "We repair the full range of furniture in Rohini: upholstered sofas and chairs (fabric, leatherette, leather — foam, springs, frames), wooden furniture (joints, veneer, polish, hardware), wardrobes (hinges, channels, mirrors, locks), beds (frames, headboards, hydraulic storage mechanisms), and dining sets (chair joints, table wobble, cane re-weaving). Our craftsmen arrive with workshop-grade tools, a curated selection of fabrics, wood fillers, polish shades, and all standard replacement hardware. Most repairs are completed within a single visit — no need to dismantle or transport anything.",
    "Every Rohini job starts with a free on-site assessment and a written quote. We never begin work without your approval. Starting rates reflect real, common repairs — ₹599 for a spring fix or a broken chair joint. Complex restorations are quoted transparently after inspection. Every repair carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "All Furniture Types — One Team, One Visit",
      description:
        "Sofas, chairs, wooden cabinets, wardrobes, beds, dining sets. One booking brings the right specialist to your Rohini sector — no need to coordinate multiple vendors for different furniture types.",
    },
    {
      title: "Free Doorstep Diagnosis & Written Quote",
      description:
        "We visit your Rohini home, assess every piece that needs attention, and present a clear written quote before work begins. No call-out fee, no obligation to proceed.",
    },
    {
      title: "Material Matching for Lasting Repairs",
      description:
        "We carry fabrics, leatherettes, wood fillers, polish shades, and hardware that match your original furniture. The repair integrates seamlessly — it doesn't announce itself.",
    },
    {
      title: "6-Month Warranty on Every Repair",
      description:
        "Every furniture repair in Rohini carries a 6-month workmanship warranty. If anything we repaired fails within that period, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: ROHINI_RELATED_PAGES,
  keywords: [
    "furniture repair Rohini",
    "furniture repair Rohini Delhi",
    "sofa repair Rohini",
    "wooden furniture repair Rohini",
    "wardrobe repair Rohini",
    "bed repair Rohini",
    "chair repair Rohini North Delhi",
    "furniture repair near me Rohini",
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
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in Rohini"],
  testimonials: [
    {
      name: "Rakesh Chawla",
      location: "Sector 7, Rohini, North Delhi",
      rating: 5,
      text: "Our 12-year-old fabric sofa had completely sagging seats and broken springs. The technician replaced all the foam and fixed the springs in one visit. The sofa feels brand new. Saved us ₹40,000 on a replacement.",
      service: "Sofa Foam & Spring Repair",
    },
    {
      name: "Neelam Gupta",
      location: "Sector 15, Rohini",
      rating: 5,
      text: "Three dining chairs had wobbly joints and the wardrobe channels had jammed. Everything fixed in under two hours at home. Very professional team.",
      service: "Chair Joint & Wardrobe Repair",
    },
  ],
};

// ─── 2. Furniture Repair — Ashok Vihar ───────────────────────────────────────

const furnitureRepairAshokVihar: SeoPageData = {
  slug: "furniture-repair-ashok-vihar",
  title: "Furniture Repair Ashok Vihar – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Ashok Vihar from ₹599. Sofa, chair, wooden furniture, bed & wardrobe repair at home. All phases covered. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Ashok Vihar – Trusted Doorstep Service for Every Home",
  heroSubtitle:
    "Expert furniture repair for sofas, chairs, wooden furniture, beds, wardrobes, and dining sets across Ashok Vihar Phase I–IV. Free home visit. Same-day slots. 6-month warranty. Serving Ashok Vihar and nearby Pitampura, Rohini, Punjabi Bagh.",
  showcaseImage: {
    heading: "Expert Furniture Repair — Professional Service at Your North Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional furniture repair technician working on wooden furniture in a North Delhi home (Ashok Vihar) — FurniRevive",
    caption: "Furniture Repair in Ashok Vihar, North Delhi | Expert doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Ashok Vihar from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets. Free home visit across all phases, same-day availability, and a 6-month warranty on every repair.",
  intro: [
    "Ashok Vihar is a well-established DDA colony in North Delhi — a neighbourhood of independent floors, walk-up flats, and builder apartments where middle-class families have built their lives over decades. The furniture here is practical and well-chosen: solid wood dining sets, fabric sofas from the Pitampura and Kirti Nagar markets, laminated wardrobes that arrived with the flat, and comfortable recliners bought for the family's growing room. After years of daily use, these pieces develop the predictable signs of wear — foam that has gone flat, joints that have loosened, hinges that no longer hold, and upholstery that has frayed at the edges. FurniRevive serves every phase of Ashok Vihar with professional doorstep furniture repair.",
    "Our North Delhi team repairs the full spectrum: sofas and chairs (foam replacement, spring repair, frame fixes, reupholstery), wooden furniture (joint repair, veneer work, polish matching, hardware replacement), wardrobes (hinges, telescopic channels, mirror panels, locks), beds (frame repair, headboard fixes, hydraulic storage mechanisms), and dining sets (chair joints, table stability, cane and rush seat re-weaving). We arrive with workshop-grade tools and a curated inventory of materials — fabrics, leatherettes, wood fillers, polish shades, and all standard hardware. Most repairs complete in one visit.",
    "Every Ashok Vihar job begins with a free on-site assessment and a written quote. No work starts without your approval. Every completed repair carries a 6-month workmanship warranty — if anything we fixed fails within that period, we return and fix it at no charge.",
  ],
  whyChoose: [
    {
      title: "Covers All Phases of Ashok Vihar",
      description:
        "Phase I, II, III, IV — our technicians serve all parts of Ashok Vihar and know the colony's layout. One call brings the right specialist to your door regardless of which phase you live in.",
    },
    {
      title: "Free Doorstep Assessment & Written Quote",
      description:
        "We come to your Ashok Vihar home, inspect every piece that needs attention, and present a written estimate. No call-out fee, no surprise charges, no obligation to proceed.",
    },
    {
      title: "Quality Materials for Durable Repairs",
      description:
        "We source fabrics, leatherettes, wood stains, and hardware that match your original furniture quality. Repairs last — they don't just look good for a week.",
    },
    {
      title: "6-Month Warranty on All Work",
      description:
        "Every furniture repair in Ashok Vihar carries a 6-month workmanship warranty. If anything fails within that period, we return and fix it free of charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: ASHOK_VIHAR_RELATED_PAGES,
  keywords: [
    "furniture repair Ashok Vihar",
    "furniture repair Ashok Vihar Delhi",
    "sofa repair Ashok Vihar",
    "wooden furniture repair Ashok Vihar",
    "wardrobe repair Ashok Vihar",
    "bed repair Ashok Vihar",
    "chair repair Ashok Vihar North Delhi",
    "furniture repair near me Ashok Vihar",
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
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in Ashok Vihar"],
  testimonials: [
    {
      name: "Vinod Sharma",
      location: "Ashok Vihar Phase II, North Delhi",
      rating: 5,
      text: "Our old teak wardrobe had jammed channels and two broken hinges. The technician replaced everything on-site in about an hour and the doors slide perfectly now. Very reasonable pricing.",
      service: "Wardrobe Hinge & Channel Repair",
    },
    {
      name: "Pooja Mehra",
      location: "Ashok Vihar Phase I",
      rating: 5,
      text: "The foam in our 10-year-old sofa had gone completely flat. They replaced all five seat cushions with high-density foam at home. The sofa feels better than when we bought it. Highly recommend.",
      service: "Sofa Foam Replacement",
    },
  ],
};

// ─── 3. Furniture Repair — Model Town ────────────────────────────────────────

const furnitureRepairModelTown: SeoPageData = {
  slug: "furniture-repair-model-town",
  title: "Furniture Repair Model Town – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Model Town from ₹599. Sofa, chair, wooden furniture, bed & wardrobe repair at home. Serving Model Town I, II & III. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Model Town – Premium Doorstep Restoration for North Delhi Homes",
  heroSubtitle:
    "Expert furniture repair for all piece types across Model Town I, II, and III — sofas, chairs, wooden furniture, beds, wardrobes, dining sets. Free home visit. Same-day slots. 6-month warranty. Serving Model Town and nearby Shalimar Bagh, Pitampura, Azadpur.",
  showcaseImage: {
    heading: "Expert Furniture Repair — Professional Service at Your North Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional furniture repair technician restoring a premium wooden dining set in a North Delhi home (Model Town) — FurniRevive",
    caption: "Furniture Repair in Model Town, North Delhi | Expert doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Model Town from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets. Free home visit across Model Town I, II, and III. Same-day availability and a 6-month warranty on every repair.",
  intro: [
    "Model Town is one of North Delhi's most well-established residential colonies — a leafy neighbourhood near Delhi University's North Campus where educated middle-class families have lived for generations in a mix of spacious independent houses and well-maintained flats. The furniture in Model Town homes reflects considered purchases made over years: solid rosewood dining tables, quality upholstered sofas from Saharanpur and Kirti Nagar, teak wardrobes that have served multiple generations, and the occasional imported piece brought back from an overseas trip. When these pieces need care — a cracked dining chair joint, a sofa whose foam has compressed after a decade, a wardrobe whose hinges have given way — they deserve skilled repair, not disposal.",
    "FurniRevive's North Delhi furniture repair team serves Model Town I, II, and III with doorstep expertise covering the full range: sofas and chairs (fabric, leather, foam, springs, frames), wooden furniture (joints, veneer, polish, carving restoration), wardrobes (hinges, channels, mirrors, locks), beds (frames, headboards, hydraulic storage), and dining sets (chair joints, table aprons, cane seats). Our craftsmen arrive with workshop-grade tools and materials — wood fillers, polish shades, fabrics, leathers, and replacement hardware. Most repairs are completed in a single visit without any need to transport furniture.",
    "Every job in Model Town begins with a free on-site assessment and a transparent written quote. We never proceed without your explicit approval. Every completed repair carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "Serves All of Model Town — I, II, and III",
      description:
        "Whether you're in Model Town Part I near the park, Part II's independent houses, or Part III's newer flats — one call brings the right craftsman to your door with the right tools and materials.",
    },
    {
      title: "Free Home Visit & Transparent Quote",
      description:
        "We assess all your furniture at your Model Town home and present a clear written quote before starting. No hidden charges, no pressure to proceed.",
    },
    {
      title: "Skilled Craftsmen for Quality Pieces",
      description:
        "Model Town homes have furniture worth preserving. Our technicians are trained on high-quality wood, imported upholstery, and antique pieces — not just flat-pack furniture.",
    },
    {
      title: "6-Month Workmanship Warranty",
      description:
        "Every furniture repair in Model Town carries a 6-month warranty. If anything we repaired fails within that period, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: MODEL_TOWN_RELATED_PAGES,
  keywords: [
    "furniture repair Model Town",
    "furniture repair Model Town Delhi",
    "sofa repair Model Town",
    "wooden furniture repair Model Town",
    "wardrobe repair Model Town",
    "bed repair Model Town",
    "chair repair Model Town North Delhi",
    "antique furniture repair Model Town",
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
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in Model Town"],
  testimonials: [
    {
      name: "Prof. Sudhir Kapoor",
      location: "Model Town Part I, North Delhi",
      rating: 5,
      text: "We had a 30-year-old rosewood bookshelf with broken joints and faded polish. The craftsman repaired all joints, re-polished to match the original shade, and it looks absolutely magnificent. True skill.",
      service: "Wooden Furniture Repair & Polish",
    },
    {
      name: "Aarti Bansal",
      location: "Model Town Part II",
      rating: 5,
      text: "Four sofa cushions replaced with high-density foam and the sagging springs fixed in one visit. The drawing room sofa is comfortable again after years of being unusable. Excellent value.",
      service: "Sofa Foam & Spring Repair",
    },
  ],
};

// ─── 4. Recliner Repair — Shalimar Bagh ──────────────────────────────────────

const reclineRepairShalimarBagh: SeoPageData = {
  slug: "recliner-repair-shalimar-bagh",
  title: "Recliner Repair Shalimar Bagh – Expert Doorstep Service | Same Day | From ₹1,499",
  metaDescription:
    "Recliner repair in Shalimar Bagh from ₹1,499. Motor, mechanism & leather experts. Free home visit across all blocks. North Delhi specialists. Call FurniRevive now!",
  h1: "Recliner Repair in Shalimar Bagh – Motor & Mechanism Specialists at Your Door",
  heroSubtitle:
    "Motor repair, mechanism fixes, leather restoration and full reupholstery for Natuzzi, La-Z-Boy, Ashley, Stressless and all recliner brands in Shalimar Bagh. Free home visit. Same-day slots available.",
  showcaseImage: {
    heading: "Premium Recliner Repair — Expert Service at Your North Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional recliner repair technician working on a luxury power recliner in a North Delhi home (Shalimar Bagh) — FurniRevive",
    caption: "Recliner Repair in Shalimar Bagh, North Delhi | Motor & mechanism specialists | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive repairs all recliners in Shalimar Bagh — from imported power recliners to manual mechanism fixes — starting at ₹1,499 with a free home visit and 6-month warranty. Same-day slots available across all Shalimar Bagh blocks.",
  intro: [
    "Shalimar Bagh is a well-planned residential colony in North Delhi where families live in a mix of spacious DDA flats, builder floors, and independent houses. Recliners are a common sight in Shalimar Bagh drawing rooms — ranging from mid-range electric loungers bought from Pitampura and Rohini showrooms to imported La-Z-Boy and Natuzzi units that represent a significant household investment. When these recliners malfunction — a motor that has stopped responding, a mechanism that won't lock at the right angle, or leather that has cracked along the armrests after years of use — replacement is expensive and unnecessary. FurniRevive's North Delhi recliner team provides expert doorstep repair across every block in Shalimar Bagh.",
    "Our technicians carry specialised recliner repair equipment — motor diagnostic tools, compatible replacement actuators for all major brands, wiring looms, control boards, and grade-matched leathers and performance fabrics. We come to your Shalimar Bagh home, diagnose in the recliner's natural position, present a written quote before any work begins, and complete most repairs in a single visit. For full reupholstery we collect, restore in our workshop, and return the recliner to your door within 3–5 days. Every job includes a 6-month warranty on both parts and labour.",
    "A common issue in Shalimar Bagh homes is voltage fluctuation causing electric recliner control boards to burn out prematurely. In over 85% of non-responding power recliners we see in North Delhi, the fault is a control board, motor actuator, or wiring connection — all repairable in one visit for a fraction of replacement cost. Call us before you write off your recliner.",
  ],
  whyChoose: [
    {
      title: "Free Doorstep Diagnosis in Shalimar Bagh",
      description:
        "We come to your Shalimar Bagh home, examine the recliner in its position — critical for power-unit diagnosis — and hand you a written quote before any work begins. No call-out fee, no obligation.",
    },
    {
      title: "Same-Day Motor & Mechanism Repair",
      description:
        "Most power recliner faults — burned control boards, stuck motors, faulty actuators — can be resolved in a single visit. We carry spare parts for all major brands and aim to complete the repair the same day.",
    },
    {
      title: "Leather & Fabric Colour-Matching",
      description:
        "Cracked or peeling leather on your recliner needs colour-matched, grade-matched material. We source leathers and performance fabrics that honour the original quality of your Shalimar Bagh piece.",
    },
    {
      title: "6-Month Warranty on Every Repair",
      description:
        "Every recliner repair in Shalimar Bagh comes with a 6-month warranty covering parts and labour. If anything we fixed fails within that period, we return and fix it at no charge — no questions asked.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: RECLINER_BENEFITS,
  contentSections: RECLINER_CONTENT_SECTIONS,
  faqs: RECLINER_FAQS,
  serviceKey: "recliner-repair",
  relatedPages: SHALIMAR_BAGH_RELATED_PAGES,
  keywords: [
    "recliner repair Shalimar Bagh",
    "recliner repair Shalimar Bagh Delhi",
    "power recliner repair Shalimar Bagh",
    "recliner motor repair Shalimar Bagh",
    "electric recliner repair Shalimar Bagh",
    "La-Z-Boy repair Shalimar Bagh",
    "recliner mechanism repair North Delhi",
    "imported recliner repair Shalimar Bagh",
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
  ctaVariants: ["Book a Same-Day Recliner Repair", "Request a Free Motor Diagnosis", "Restore Your Recliner Without Replacing It", "Schedule Fast Doorstep Service in Shalimar Bagh"],
  testimonials: [
    {
      name: "Anil Mehra",
      location: "Shalimar Bagh, North Delhi",
      rating: 5,
      text: "Our La-Z-Boy power recliner had been stuck in the reclined position for weeks. The technician diagnosed a burnt actuator motor and replaced it on the spot. Chair works perfectly now. Six-month warranty gave us complete peace of mind.",
      service: "Electric Recliner Motor Repair",
    },
    {
      name: "Ritu Aggarwal",
      location: "Shalimar Bagh Block BQ",
      rating: 5,
      text: "The leather on our imported recliner had badly cracked on both armrests. The team colour-matched and restored the leather beautifully — guests can't tell it was ever damaged. Saved us over ₹80,000.",
      service: "Recliner Leather Restoration",
    },
  ],
};

// ─── 5. Furniture Repair — Shalimar Bagh ─────────────────────────────────────

const furnitureRepairShalimarBagh: SeoPageData = {
  slug: "furniture-repair-shalimar-bagh",
  title: "Furniture Repair Shalimar Bagh – Doorstep Service | Same Day | From ₹599",
  metaDescription:
    "Furniture repair in Shalimar Bagh from ₹599. Sofa, chair, wooden furniture, bed & wardrobe repair at home. All blocks covered. 6-month warranty. Call FurniRevive!",
  h1: "Furniture Repair in Shalimar Bagh – Trusted Doorstep Restoration for North Delhi",
  heroSubtitle:
    "Complete furniture repair for sofas, chairs, wooden furniture, beds, wardrobes, and dining sets across all Shalimar Bagh blocks. Free home visit. Same-day slots. 6-month warranty. Serving Shalimar Bagh and nearby Pitampura, Rohini, Ashok Vihar.",
  showcaseImage: {
    heading: "Expert Furniture Repair — Professional Service at Your North Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional furniture repair technician restoring a premium fabric sofa in a North Delhi home (Shalimar Bagh) — FurniRevive",
    caption: "Furniture Repair in Shalimar Bagh, North Delhi | Expert doorstep restoration | Free home visit | FurniRevive",
  },
  quickAnswer:
    "FurniRevive provides expert furniture repair in Shalimar Bagh from ₹599 — covering sofas, chairs, wooden furniture, beds, wardrobes, and dining sets. Free home visit across all blocks, same-day availability, and a 6-month warranty on every repair.",
  intro: [
    "Shalimar Bagh is a planned residential colony in North Delhi where families have invested in quality furniture over the years — from solid wood dining sets and spacious fabric sofas to imported recliners and custom-built wardrobes. The homes here are a mix of DDA flats, builder floors, and independent houses, and the furniture reflects long-term family living: practical, durable, and chosen with care. When these pieces develop problems after years of use — sagging sofa seats, broken wardrobe channels, a dining chair that rocks on every meal, or a bed frame that creaks — FurniRevive brings professional repair directly to your Shalimar Bagh doorstep.",
    "We handle the full spectrum of furniture repairs in Shalimar Bagh: sofas and chairs (fabric, leatherette, leather — foam replacement, spring repair, frame fixes, reupholstery), wooden furniture (joint repair, veneer restoration, polish matching, hardware replacement), wardrobes and storage (hinges, telescopic channels, mirror panels, locks), beds (frame repair, headboard fixes, hydraulic storage mechanisms), and dining sets (chair joints, table stability, cane seat re-weaving). Our craftsmen arrive with workshop-grade tools, a wide selection of fabrics, wood fillers, polish shades, and all standard replacement hardware. Most repairs are completed in a single visit.",
    "Every Shalimar Bagh job starts with a free on-site assessment and a written quote. No work begins without your approval. Pricing starts from ₹599 for common fixes like a spring repair or a broken joint. Every completed repair carries a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "All Furniture Types — One Booking",
      description:
        "Sofas, chairs, wooden cabinets, wardrobes, beds, dining sets. One call brings the right specialist to your Shalimar Bagh home for every piece that needs attention.",
    },
    {
      title: "Free Doorstep Diagnosis & Written Quote",
      description:
        "We visit your home, assess all furniture requiring repair, and present a clear written estimate before any work begins. No call-out charges, no obligation.",
    },
    {
      title: "Grade-Matched Materials",
      description:
        "We carry fabrics, leatherettes, wood stains, polish shades, and hardware that match your original furniture. Repairs blend seamlessly into the existing piece.",
    },
    {
      title: "6-Month Warranty on Every Repair",
      description:
        "Every furniture repair in Shalimar Bagh carries a 6-month workmanship warranty. If anything we repaired fails, we return and fix it at no charge.",
    },
  ],
  process: REPAIR_PROCESS,
  benefits: FURNITURE_BENEFITS,
  contentSections: FURNITURE_CONTENT_SECTIONS,
  faqs: FURNITURE_FAQS,
  serviceKey: "furniture-repair",
  relatedPages: SHALIMAR_BAGH_RELATED_PAGES,
  keywords: [
    "furniture repair Shalimar Bagh",
    "furniture repair Shalimar Bagh Delhi",
    "sofa repair Shalimar Bagh",
    "wooden furniture repair Shalimar Bagh",
    "wardrobe repair Shalimar Bagh",
    "bed repair Shalimar Bagh",
    "chair repair Shalimar Bagh North Delhi",
    "furniture repair near me Shalimar Bagh",
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
  ctaVariants: ["Book a Free Home Visit", "Request a Written Quote", "Restore Your Furniture Today", "Schedule Same-Day Repair in Shalimar Bagh"],
  testimonials: [
    {
      name: "Sanjeev Tiwari",
      location: "Shalimar Bagh Block CA, North Delhi",
      rating: 5,
      text: "We needed foam replaced in a 3-seater sofa and two dining chairs re-glued. Both done in one visit, about two hours total. The sofa is comfortable again and the chairs are rock solid. Great value.",
      service: "Sofa Foam Replacement & Chair Repair",
    },
    {
      name: "Deepika Arora",
      location: "Shalimar Bagh",
      rating: 5,
      text: "Our bedroom wardrobe doors had completely jammed — channels were worn out and one hinge had snapped. The technician replaced all channels and hinges in under an hour. Doors open smoothly now. Very satisfied.",
      service: "Wardrobe Hinge & Channel Repair",
    },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const NORTH_DELHI_MISSING_REPAIR_PAGES: SeoPageData[] = [
  furnitureRepairRohini,
  furnitureRepairAshokVihar,
  furnitureRepairModelTown,
  reclineRepairShalimarBagh,
  furnitureRepairShalimarBagh,
];
