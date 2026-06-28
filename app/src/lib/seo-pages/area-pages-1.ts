import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_AREA_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Price List", href: "/furniture-repair-price-list-delhi" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_AREA_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. FURNITURE REPAIR IN DWARKA
// ---------------------------------------------------------------------------
export const furnitureRepairDwarka: SeoPageData = {
  slug: "furniture-repair-dwarka",
  title: "Furniture Repair Dwarka | ₹599 Doorstep | Same-Day | FurniRevive",
  metaDescription:
    "Expert furniture repair in Dwarka, Delhi from ₹599. Sofa, bed, wardrobe & chair repaired at doorstep. All 28 sectors covered. Same-day service. 6-month warranty. Book now!",
  quickAnswer:
    "FurniRevive offers doorstep furniture repair in Dwarka, Delhi starting at ₹599. All 28 sectors are covered with same-day service available. Sofa foam replacement starts at ₹999, bed frame repair from ₹1,500. Free inspection with a 6-month written warranty on every repair.",
  h1: "Furniture Repair in Dwarka — Doorstep Service Across All Sectors",
  heroSubtitle:
    "Expert furniture repair at your doorstep in Dwarka Sectors 1–28, Dwarka Mor, Palam, Uttam Nagar, and Najafgarh. Sofa, bed, chair, wardrobe, dining table — all repaired with a 6-month warranty starting at just ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a Dwarka home — FurniRevive",
    caption: "Furniture Repair in Dwarka | Expert doorstep service across all 28 sectors | FurniRevive",
  },
  intro: [
    "Dwarka is one of Delhi's largest and most well-planned residential sub-cities, home to hundreds of thousands of families across 28 sectors, Palam Extension, Dwarka Mor, and surrounding areas. With homes ranging from compact DDA flats in Sector 7 and Sector 12 to spacious independent floors in Sector 21 and Sector 23, furniture in Dwarka homes sees constant daily use — and eventually needs professional repair.",
    "FurniRevive is Dwarka's most trusted furniture repair service. We provide doorstep repair across every Dwarka sector — from Sector 1 near the Dwarka Expressway to Sector 28 towards Najafgarh. Our craftsmen arrive fully equipped with professional tools, high-density foam, fabric samples, wood adhesives, and polishing materials. Whether your sofa cushions have gone flat in your Sector 6 apartment, your dining table is wobbly in your Sector 19 independent house, or your wardrobe hinges have failed in your Sector 10 flat — we fix it at your home.",
    "Starting at just ₹599, our furniture repair service saves Dwarka residents 60–70% compared to buying new furniture. Every repair comes with our 6-month written warranty. Book before noon for same-day service anywhere in Dwarka. Call +91 92179 99355 or WhatsApp us with photos of your furniture for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "All Dwarka Sectors Covered",
      description:
        "We serve every Dwarka sector from 1 to 28, plus Dwarka Mor, Palam, Palam Extension, Uttam Nagar, Najafgarh, and Dwarka Expressway areas. No location surcharges within Dwarka.",
    },
    {
      title: "DDA Flat & High-Rise Friendly",
      description:
        "Our technicians are experienced working in Dwarka's DDA flats, CGHS societies, builder floors, and high-rise apartments. Minimal mess, full cleanup, and respect for your home.",
    },
    {
      title: "Same-Day Service Available",
      description:
        "Book before noon for same-day furniture repair at your Dwarka address. Our Dwarka-based technicians ensure fast response times across all sectors.",
    },
    {
      title: "Starting at ₹599",
      description:
        "Furniture repair in Dwarka starts at just ₹599. Full written quotation before work begins. No hidden charges, no surprise bills.",
    },
    {
      title: "All Furniture Types",
      description:
        "Sofas, beds, dining tables, chairs, wardrobes, recliners, TV units, shoe racks, study tables — we repair every type of home and office furniture.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every repair is backed by a 6-month warranty. If the same issue recurs, we return to your Dwarka home and fix it at no charge.",
    },
  ],
  process: [
    {
      step: "Book & Share Photos",
      description:
        "Call +91 92179 99355 or WhatsApp photos of your damaged furniture. Mention your Dwarka sector for accurate scheduling. We provide a preliminary estimate within minutes.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician visits your Dwarka home, inspects the furniture thoroughly, and provides a detailed written quote. The inspection is free with no obligation.",
    },
    {
      step: "Professional Repair at Home",
      description:
        "Upon approval, our craftsmen repair your furniture on-site using professional tools and quality materials. Most repairs are completed in a single visit of 2–4 hours.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "We inspect the completed work with you, clean up the area, and provide your 6-month warranty card. Payment is collected only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep service across all 28 Dwarka sectors and surrounding areas",
    "Sofa repair: cushion replacement, spring repair, reupholstery",
    "Bed repair: frame fixing, headboard repair, slat replacement",
    "Dining table and chair repair: joint reinforcement, polish, leg fixing",
    "Wardrobe repair: hinge replacement, door alignment, shelf fixing",
    "Recliner mechanism and motor repair",
    "Wood polishing and refinishing for all wooden furniture",
    "Fabric, leather, and rexine upholstery work",
    "Starting at ₹599 — save 60–70% vs buying new",
    "Same-day service for bookings before noon",
    "6-month written warranty on all repairs",
    "10,000+ repairs completed across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Services We Offer in Dwarka",
      body: [
        "Our most requested service in Dwarka is sofa repair. Dwarka homes typically have 3-seater and L-shaped sofas in the living room that see heavy daily use from families. After 3–5 years, cushions sag, fabric tears at the armrests, and springs lose tension. We replace foam with high-density 32D or 40D variants, reupholster with your choice from 500+ fabric options, replace broken springs, and reinforce frames — all at your Dwarka doorstep. A complete 3-seater sofa restoration costs ₹8,000–₹20,000 versus ₹30,000–₹80,000 for a new sofa.",
        "Bed frame repair is our second most common service in Dwarka. The DDA flats and builder floors across sectors often have beds with storage that develop creaky frames, broken hydraulic lifts, or damaged plywood bases. We fix all bed frame issues including joint re-gluing, plywood replacement, hydraulic mechanism repair, and headboard reattachment. Dining table repair, wardrobe door fixing, and office chair repair round out our most popular services in the area.",
      ],
    },
    {
      heading: "Furniture Repair Cost in Dwarka — What to Expect",
      body: [
        "Furniture repair pricing in Dwarka follows our standard Delhi NCR rates with no location surcharges. Here are typical costs for common repairs in Dwarka homes:",
        "Sofa cushion foam replacement: ₹999–₹2,500 per cushion. Full sofa reupholstery: ₹8,000–₹25,000 for a 3-seater. Sofa spring repair: ₹1,500–₹4,000 per seat. Dining chair re-gluing: ₹300–₹800 per chair. Dining table polish: ₹3,000–₹8,000. Bed frame repair: ₹1,500–₹5,000. Wardrobe hinge and door fix: ₹500–₹2,000. Recliner mechanism repair: ₹1,499–₹6,000. Office chair gas lift replacement: ₹800–₹1,500.",
        "These are indicative ranges — your exact quote depends on the specific damage, furniture size, and materials needed. We always provide a written quote after free doorstep inspection so you know the exact cost before any work begins.",
      ],
    },
    {
      heading: "Why Dwarka Residents Choose FurniRevive Over Local Carpenters",
      body: [
        "Dwarka has no shortage of local carpenters, especially around Dwarka Mor and Uttam Nagar markets. However, Dwarka residents increasingly choose FurniRevive for several reasons. First, reliability — our technicians arrive at the scheduled time, every time. We understand that Dwarka residents, many of whom are working professionals, cannot afford to wait for a carpenter who may or may not show up.",
        "Second, quality and warranty. A local carpenter uses whatever materials are available at the nearest hardware shop. FurniRevive uses centrally sourced, quality-tested materials — 32D and 40D foam, industrial-grade wood adhesives, premium upholstery fabrics, and genuine replacement parts for recliners and mechanisms. And every repair comes with a 6-month written warranty backed by a company, not a verbal promise from an individual. Third, transparent pricing — our quotes are detailed and fixed. No post-completion surprise charges that are common with unorganised repair services.",
      ],
    },
    {
      heading: "Areas We Cover in and Around Dwarka",
      body: [
        "Our Dwarka furniture repair service covers Sector 1 through Sector 28, Dwarka Sub City, Dwarka Mor, Dabri, Palam, Palam Colony, Palam Extension, Palam Vihar, Raj Nagar, Uttam Nagar, Bindapur, Matiala, Kakrola, Najafgarh, Dichaon Kalan, Dwarka Expressway (Delhi section), Sector 37 Dwarka, L Zone Dwarka, and all residential societies, DDA flats, CGHS apartments, and builder floors in the Dwarka region.",
        "Our technicians are familiar with the layout of major Dwarka societies including Dwarka Sectors 1–28 DDA flats, Ramphal Chowk area, Bharthal village area, and new residential developments along the Dwarka Expressway. Whether you're in a compact 1BHK DDA flat in Sector 7 or a 4BHK independent floor in Sector 21, we bring the same level of professional service to your doorstep.",
      ],
    },
    {
      heading: "Why Dwarka Residents Prefer Repair Over Buying New Furniture",
      body: [
        "Dwarka households consistently choose professional restoration over replacement — and the economics are compelling. Our <a href='/furniture-repair-price-guide-delhi'>furniture repair price guide for Delhi</a> shows that a fully restored 3-seater sofa costs ₹8,000–₹15,000 versus ₹30,000–₹80,000 for a comparable new piece — a saving of 60–70%. For a detailed breakdown, our <a href='/sofa-repair-cost-delhi'>sofa repair cost guide for Delhi</a> covers every scenario from a single cushion replacement to full reupholstery. If foam quality is the primary question, our <a href='/sofa-foam-replacement-cost-delhi'>sofa foam replacement cost resource</a> explains the 28D vs 32D vs 40D grade differences and what each costs at the doorstep.",
        "Our research articles help Dwarka residents make fully informed decisions. The side-by-side analysis in <a href='/blog/sofa-repair-vs-buy-new-sofa'>sofa repair versus buying a new sofa</a> covers lifecycle cost, environmental impact, and quality outcomes. Our in-depth piece on <a href='/blog/is-sofa-restoration-worth-it'>whether sofa restoration is worth it</a> addresses the most common objections. For families unsure how much life their current sofa foam has left, our guide on <a href='/blog/how-long-does-sofa-foam-last'>how long sofa foam lasts</a> is essential reading. And for decisions that extend beyond sofas to beds, wardrobes, and dining sets, our <a href='/blog/furniture-repair-vs-replace'>furniture repair versus replacement analysis</a> provides a clear framework across every furniture category. With <a href='/furniture-repair-delhi'>Delhi's most comprehensive furniture repair service</a> available at your Dwarka doorstep from ₹599, the case for repair is almost always overwhelming.",
      ],
    },
    {
      heading: "Furniture in Dwarka DDA Flats — Every Type Repaired at Your Door",
      body: [
        "Dwarka's 28 sectors are dominated by DDA flats with a recognisable furniture profile. Living rooms almost always feature a 5-seater sofa set or, in newer layouts, an <a href='/l-shape-sofa-repair-delhi'>L-shaped sofa</a> that maximises corner seating. These sofas develop predictable failure modes: cushion foam that compresses under daily use (our <a href='/sofa-cushion-repair-delhi'>sofa cushion repair service</a> replaces it with durable 32D or 40D foam), springs that snap or lose tension (addressed by our <a href='/sofa-spring-repair-delhi'>sofa spring repair service</a>), and fabric that tears at armrests and seat edges (covered by our <a href='/sofa-fabric-tear-repair-delhi'>sofa fabric tear repair service</a>). When joints separate or the wooden frame cracks, our <a href='/sofa-frame-repair-delhi'>sofa frame repair service</a> structurally reinforces the piece so it can last another decade.",
        "Bedrooms in Dwarka DDA flats standardly feature queen or king-size beds with box storage — and the hydraulic lift mechanisms fail after 3–4 years. Our <a href='/bed-repair-delhi'>bed repair service in Delhi</a> replaces hydraulic pistons, fixes plywood panels, reattaches headboards, and reinforces frames. Dining areas typically have a 4 or 6-seater wooden dining set that benefits from our <a href='/wooden-furniture-repair-delhi'>wooden furniture repair and polishing service</a> — covering table polish, chair joint re-gluing, and structural reinforcement. Our standalone <a href='/chair-repair-delhi'>chair repair service in Delhi</a> handles dining chair re-caning, cushion seat replacement, and office chair gas lift repair. Together, these services form a complete furniture restoration solution for every room in a Dwarka DDA flat.",
      ],
    },
    {
      heading: "Furniture Brands in Dwarka Homes — Godrej, IKEA, Pepperfry and More",
      body: [
        "Dwarka residents source furniture from three primary channels: Kirti Nagar's wholesale market, branded showrooms, and online platforms. Among the most commonly repaired brands is <a href='/godrej-furniture-repair-delhi'>Godrej Interio</a> — their sofa sets, steel almirahs, and wooden beds are fixtures in thousands of DDA flats across every Dwarka sector. Our technicians are trained in Godrej's construction techniques, from upholstered sofa frames to almirah hinge systems. We carry compatible replacement hardware and perform Godrej sofa foam replacement, almirah hinge fixing, and hydraulic bed repair at your doorstep. Godrej dining sets and chairs are covered by our <a href='/wooden-furniture-repair-delhi'>wooden furniture repair and polish service</a> and <a href='/sofa-cushion-repair-delhi'>cushion repair service</a> respectively.",
        "For IKEA owners — especially those who bought during visits to Hyderabad or through IKEA's online store — our <a href='/ikea-furniture-repair-delhi'>IKEA furniture repair service</a> addresses cam lock failures, broken plastic clips, sagging IKEA sofa foam, and PAX wardrobe door misalignment with brand-specific expertise. Online shoppers who chose Pepperfry will find our <a href='/pepperfry-furniture-repair-delhi'>Pepperfry furniture repair service</a> covers MDF delamination, hinge failures on Pepperfry wardrobes, and sofa leg replacements — the typical failure modes of engineered wood furniture. For all brands, our <a href='/sofa-repair-delhi'>Delhi sofa repair service</a> and <a href='/furniture-repair-delhi'>full furniture repair service across Delhi</a> handle Urban Ladder, HomeTown, Durian, Nilkamal, and every other make. Our <a href='/chair-repair-delhi'>chair repair service</a> covers branded and unbranded chairs alike — dining, office, and lounge.",
      ],
    },
    {
      heading: "Recliner and Upholstery Services in Dwarka — Specialist Expertise",
      body: [
        "Motorised recliners have become a staple in Dwarka's larger DDA flats, particularly in Sectors 6, 10, 12, 18, 19, and 21. When a motor burns out, the footrest locks, or the backrest won't recline, most families assume a new sofa is the only answer. Our specialised <a href='/recliner-motor-repair-delhi'>recliner motor repair service</a> proves otherwise — motor replacement, switch repair, cable reconnection, and mechanism realignment restore full function at a fraction of replacement cost. Our <a href='/recliner-repair-cost-delhi'>recliner repair cost guide</a> details pricing for every scenario: cable replacement (₹800–₹1,500), mechanism overhaul (₹1,499–₹4,000), and full motor replacement (₹3,000–₹6,000). We also fix <a href='/sofa-spring-repair-delhi'>sofa spring issues</a> in recliner base sections and address structural damage through our <a href='/sofa-frame-repair-delhi'>sofa frame repair service</a>.",
        "Upholstery transformation is our most visually dramatic service. Our <a href='/sofa-upholstery-price-list-delhi'>sofa upholstery price list for Delhi</a> catalogues 500+ fabric options — from durable polyester blends at ₹3,000 per seat to premium Belgian velvet at ₹10,000–₹12,000 per seat. Our <a href='/sofa-foam-replacement-cost-delhi'>sofa foam replacement cost guide</a> explains the quality spectrum and helps Dwarka residents choose between a budget fix and a long-lasting solution. For a complete sofa economics view, our <a href='/sofa-repair-cost-delhi'>Delhi sofa repair cost resource</a> combines all variables into a total cost comparison. All upholstery and mechanism work is backed by our 6-month warranty through the broader <a href='/sofa-repair-delhi'>Delhi sofa repair service</a>.",
      ],
    },
    {
      heading: "Dwarka's Strategic Location — Our Delhi NCR-Wide Service Network",
      body: [
        "Dwarka sits at Delhi's western gateway — adjacent to Gurgaon across the Dwarka Expressway and well-connected by Blue Line metro to every part of the city. FurniRevive's service network mirrors this geographic reach. For residents near the Dwarka-Haryana border or those with furniture to repair in Gurgaon, our <a href='/sofa-repair-gurgaon'>sofa repair service in Gurgaon</a> extends coverage to Haryana's millennium city with the same quality and warranty. Families with relatives in Faridabad can point them to our <a href='/sofa-repair-faridabad'>sofa repair service in Faridabad</a>. And for colleagues in the Noida belt, our <a href='/sofa-repair-noida'>sofa repair service in Noida</a> delivers identical standards to every Noida sector.",
        "Across all locations, pricing is governed by the same transparent <a href='/furniture-repair-price-guide-delhi'>Delhi furniture repair price guide</a>. Our <a href='/furniture-repair-delhi'>Delhi-wide furniture repair service</a> and <a href='/sofa-repair-delhi'>Delhi sofa repair service</a> operate under identical quality standards regardless of zone. For upholstery costs, our <a href='/sofa-upholstery-price-list-delhi'>sofa upholstery price list</a> and <a href='/sofa-repair-cost-delhi'>sofa repair cost guide</a> are updated regularly to reflect current material pricing. Dwarka residents also frequently enquire about our <a href='/chair-repair-delhi'>chair repair service</a> for dining sets, study chairs, and office chairs — and about <a href='/bed-repair-delhi'>bed repair in Delhi</a> for the hydraulic storage beds standard across DDA sectors. Every service is available, warrantied, and delivered at your doorstep.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you provide furniture repair service in all Dwarka sectors?",
      answer:
        "Yes. We cover all 28 Dwarka sectors, Dwarka Mor, Palam, Uttam Nagar, Najafgarh, and all surrounding areas. There are no location surcharges for any Dwarka location.",
    },
    {
      question: "How quickly can you come to Dwarka for furniture repair?",
      answer:
        "We offer same-day service for bookings placed before noon. Standard bookings are scheduled within 24 hours. For urgent repairs, call us and we'll try to accommodate same-day arrival.",
    },
    {
      question: "What is the starting price for furniture repair in Dwarka?",
      answer:
        "Furniture repair in Dwarka starts at ₹599 for basic fixes. Sofa cushion repair starts at ₹999. We provide a free doorstep inspection and detailed written quote before any work begins.",
    },
    {
      question: "Do you repair furniture in Dwarka DDA flats?",
      answer:
        "Yes. Our technicians are experienced working in DDA flats across all Dwarka sectors. We work neatly in compact spaces and ensure complete cleanup after every repair.",
    },
    {
      question: "Can you repair office furniture in Dwarka?",
      answer:
        "Yes. We repair office chairs, desks, conference tables, and reception furniture. We also handle bulk office furniture repair for Dwarka-based businesses and coworking spaces.",
    },
    {
      question: "Do you offer sofa reupholstery in Dwarka?",
      answer:
        "Yes. We carry 500+ fabric samples to your Dwarka home for selection. Full 3-seater sofa reupholstery costs ₹8,000–₹25,000 depending on fabric choice. Completed in 2–4 days.",
    },
    {
      question: "Is the 6-month warranty valid for Dwarka repairs?",
      answer:
        "Yes. Our 6-month written warranty is valid at your Dwarka address. If the repaired issue recurs, we schedule a free return visit within 48 hours.",
    },
    {
      question: "Do you charge extra for Dwarka Expressway area?",
      answer:
        "No. All areas within Dwarka and the Dwarka Expressway (Delhi section) are covered under our standard pricing with no additional charges.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-dwarka"),
    { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
    { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
  ],
  keywords: [
    "furniture repair dwarka",
    "furniture repair in dwarka delhi",
    "sofa repair dwarka",
    "carpenter in dwarka",
    "furniture repair near me dwarka",
    "sofa repair dwarka sector",
    "bed repair dwarka",
    "wardrobe repair dwarka delhi",
    "furniture polish dwarka",
    "best furniture repair dwarka",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Dwarka",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Repair", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and unsupportive",
    "Springs make clicking sounds when sitting",
    "Fabric or leather is torn, fraying, or peeling",
    "Frame creaks or wobbles under weight",
    "One side visibly lower than the other",
    "Foam crumbles or becomes lumpy inside cushions",
    "Armrest covering separating from the frame",
  ],
};

// ---------------------------------------------------------------------------
// 2. FURNITURE REPAIR IN ROHINI
// ---------------------------------------------------------------------------
export const furnitureRepairRohini: SeoPageData = {
  slug: "furniture-repair-rohini",
  title: "Furniture Repair Rohini | ₹599 Doorstep | Same-Day | FurniRevive",
  metaDescription:
    "Expert furniture repair in Rohini, Delhi from ₹599. Sofa, bed & wardrobe repaired at doorstep. All 38 sectors covered. Same-day service. 6-month warranty. Book now!",
  quickAnswer:
    "FurniRevive provides doorstep furniture repair across all 38 Rohini sectors starting at ₹599. Sofa cushion replacement begins at ₹999, bed frame repair from ₹1,500, wardrobe hinge fix from ₹499. Same-day service available. Free inspection and 6-month warranty included with every repair.",
  h1: "Furniture Repair in Rohini — Expert Doorstep Service All Sectors",
  heroSubtitle:
    "Professional furniture repair at your doorstep across Rohini Sectors 1–38, Pitampura, Prashant Vihar, Shalimar Bagh, and Paschim Vihar. Sofa, bed, chair, table, wardrobe — all repaired with a 6-month warranty from ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a Rohini home — FurniRevive",
    caption: "Furniture Repair in Rohini | Doorstep service across all 38 sectors | FurniRevive",
  },
  intro: [
    "Rohini is one of North Delhi's largest residential areas, spanning 38 sectors and home to lakhs of families in DDA flats, CGHS societies, builder floors, and independent houses. From the established colonies of Sector 7 and Sector 9 to the newer developments in Sector 34 and Sector 38, furniture in Rohini homes endures years of daily use — and eventually needs professional attention.",
    "FurniRevive provides professional furniture repair services across every Rohini sector and the adjacent areas of Pitampura, Prashant Vihar, Shalimar Bagh, and Paschim Vihar. Our skilled craftsmen arrive at your doorstep with professional tools, quality materials, and fabric samples — ready to repair your sofa, bed, dining table, chairs, wardrobe, or any other furniture piece on-site.",
    "With prices starting at ₹599 and a 6-month written warranty on every repair, FurniRevive makes professional furniture restoration accessible and risk-free for every Rohini household. Our same-day service option means you can have your furniture repaired the same day you call — no weeks of waiting, no trips to a workshop.",
  ],
  whyChoose: [
    {
      title: "All Rohini Sectors Covered",
      description:
        "Sectors 1 to 38, Avantika, Prashant Vihar, Pitampura, Shalimar Bagh, Paschim Vihar, and all surrounding areas. Complete coverage of the entire Rohini sub-city.",
    },
    {
      title: "DDA Flat Specialists",
      description:
        "Rohini is primarily a DDA-planned area. Our technicians understand the space constraints of DDA flats and work efficiently without creating mess or disruption.",
    },
    {
      title: "Same-Day Service",
      description:
        "Book before noon for same-day doorstep furniture repair at your Rohini home. Our North Delhi-based team ensures quick response across all Rohini sectors.",
    },
    {
      title: "Transparent Pricing from ₹599",
      description:
        "No hidden charges, no inflated material costs. Written quotation provided during free inspection. You approve the exact amount before work begins.",
    },
    {
      title: "All Furniture & Materials",
      description:
        "Sofa, bed, dining set, wardrobe, TV unit, dressing table, bookshelf. All materials: fabric, leather, wood, MDF, plywood, metal. We handle everything.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Company-backed warranty valid at your Rohini address. Free return visits for warranty claims within 48 hours.",
    },
  ],
  process: [
    {
      step: "Call or WhatsApp Us",
      description:
        "Contact us at +91 92179 99355. Share photos of the furniture damage and your Rohini sector number. We'll give you a quick estimate.",
    },
    {
      step: "Free Home Inspection",
      description:
        "Our technician visits your Rohini home, thoroughly inspects the furniture, and provides a detailed written quotation at no cost.",
    },
    {
      step: "Doorstep Repair",
      description:
        "After your approval, we repair the furniture at your home using professional-grade tools and materials. Most repairs completed in 2–4 hours.",
    },
    {
      step: "Warranty Handover",
      description:
        "We quality-check every repair, clean the work area, and hand over your 6-month warranty card. Payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep service across all 38 Rohini sectors and adjacent areas",
    "Sofa repair: foam replacement, reupholstery, spring repair, frame fixing",
    "Bed repair: frame reinforcement, headboard fix, hydraulic repair",
    "Dining table and chair repair: polish, joint repair, leg reinforcement",
    "Wardrobe repair: hinge, door, shelf, and drawer fixing",
    "Wood polishing and lacquer refinishing",
    "Fabric, leather, rexine, and velvet upholstery",
    "Office furniture and study table repair",
    "Starting at ₹599 with transparent pricing",
    "Same-day service available for Rohini residents",
    "6-month written warranty on every repair",
    "Verified, experienced craftsmen with 5+ years experience",
  ],
  contentSections: [
    {
      heading: "Popular Furniture Repair Services in Rohini",
      body: [
        "Sofa repair dominates our Rohini bookings. The typical Rohini household has a 5-seater sofa set (3+1+1 configuration) that sees heavy use from joint families. After 4–5 years, the foam compresses, the fabric at armrests wears thin, and the frame joints loosen from daily use. Our complete sofa restoration — new 32D foam, fresh upholstery from 500+ fabric choices, spring replacement, and frame reinforcement — transforms these tired sofas into furniture that looks and feels new, at 30–40% of replacement cost.",
        "Bed frame repair is especially common in Rohini's DDA flats where beds with storage are standard. Hydraulic lift mechanisms that allow the mattress to be raised for under-bed storage frequently fail after 3–4 years. We replace hydraulic lifts, fix broken plywood panels, reinforce joints, and repair headboards. Dining set repair — wobbly tables and chairs with loose joints — is another frequent request, particularly from families with children. We re-glue joints with industrial-grade adhesive, add corner brackets for reinforcement, and refinish with polish if needed.",
      ],
    },
    {
      heading: "Furniture Repair Costs in Rohini — Transparent Pricing",
      body: [
        "Our Rohini furniture repair follows standard Delhi NCR pricing with no area surcharges. Typical costs include:",
        "Sofa cushion foam replacement: ₹999–₹2,500 per cushion. Complete 5-seater sofa set restoration: ₹15,000–₹30,000. Sofa fabric change: ₹3,000–₹15,000 per seat. Bed frame repair: ₹1,500–₹5,000. Hydraulic storage bed mechanism: ₹2,000–₹4,000. Dining chair re-gluing: ₹300–₹800 each. Dining table polish: ₹3,000–₹8,000. Wardrobe hinge and door: ₹500–₹2,000. Almirah lock replacement: ₹300–₹800. Wooden furniture polish: ₹1,500–₹5,000 per piece.",
        "We always provide an itemised written quotation after the free doorstep inspection. The final bill matches the approved quote — no surprises.",
      ],
    },
    {
      heading: "Areas We Cover in and Around Rohini",
      body: [
        "Our furniture repair service covers every part of Rohini and the surrounding North Delhi localities. This includes Rohini Sectors 1 through 38, Avantika, Prashant Vihar, Budh Vihar, Prem Nagar, Vijay Vihar, Rithala, Begumpur, Sultanpuri, Mangolpuri, Pitampura (all blocks), Shalimar Bagh, Paschim Vihar (all blocks), Rani Bagh, Saraswati Vihar, Shakurpur, and Wazirpur.",
        "We're also well-positioned to serve the adjacent areas of Model Town, GTB Nagar, Mukherjee Nagar, and Ashok Vihar. If you're unsure whether your area is covered, simply call us — the answer is almost always yes.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you cover all Rohini sectors for furniture repair?",
      answer:
        "Yes. We serve all 38 Rohini sectors plus Pitampura, Prashant Vihar, Shalimar Bagh, Paschim Vihar, and all surrounding North Delhi areas with no location surcharges.",
    },
    {
      question: "How fast can you reach Rohini for a furniture repair?",
      answer:
        "Same-day service is available for Rohini bookings placed before noon. Standard appointments are confirmed within 24 hours.",
    },
    {
      question: "What is the cheapest furniture repair in Rohini?",
      answer:
        "Basic repairs like chair re-gluing and hinge replacement start at ₹599. Sofa cushion repair starts at ₹999. A free doorstep inspection and written quote are always provided first.",
    },
    {
      question: "Do you repair furniture in Pitampura and Shalimar Bagh?",
      answer:
        "Yes. Pitampura, Shalimar Bagh, Paschim Vihar, and all adjacent areas are within our regular service zone. Same pricing and warranty as Rohini sectors.",
    },
    {
      question: "Can you repair beds with hydraulic storage in Rohini?",
      answer:
        "Yes. Hydraulic storage bed repair is one of our most popular services in Rohini. We replace hydraulic lifts, fix plywood panels, and reinforce the storage mechanism. Cost: ₹2,000–₹4,000.",
    },
    {
      question: "Do you provide wood polishing service in Rohini?",
      answer:
        "Yes. We offer melamine, PU, and lacquer polishing for all wooden furniture — dining tables, beds, wardrobes, doors, and decorative pieces. Starting from ₹1,500 per piece.",
    },
    {
      question: "Is the warranty valid for Rohini repairs?",
      answer:
        "Yes. The 6-month written warranty is valid at your Rohini address. If the issue recurs, we return within 48 hours and fix it free of charge.",
    },
    {
      question: "Do you repair office furniture in Rohini?",
      answer:
        "Yes. We repair office chairs, desks, filing cabinets, and conference tables. Bulk office furniture repair is available for Rohini businesses at discounted rates.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-rohini"),
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
    { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
  ],
  keywords: [
    "furniture repair rohini",
    "furniture repair in rohini delhi",
    "sofa repair rohini",
    "carpenter in rohini",
    "furniture repair near me rohini",
    "bed repair rohini",
    "wardrobe repair rohini",
    "dining table repair rohini",
    "furniture polish rohini",
    "best furniture repair rohini",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Rohini",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Repair", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and unsupportive",
    "Springs make clicking sounds when sitting",
    "Fabric or leather is torn, fraying, or peeling",
    "Frame creaks or wobbles under weight",
    "One side visibly lower than the other",
    "Foam crumbles or becomes lumpy inside cushions",
    "Armrest covering separating from the frame",
  ],
};

// ---------------------------------------------------------------------------
// 3. SOFA REPAIR IN SOUTH DELHI
// ---------------------------------------------------------------------------
export const sofaRepairSouthDelhi: SeoPageData = {
  slug: "sofa-repair-south-delhi",
  title: "Sofa Repair South Delhi | ₹999 Doorstep | Same-Day | FurniRevive",
  metaDescription:
    "Expert sofa repair in South Delhi — GK, Saket, Vasant Kunj, Hauz Khas, Defence Colony. Foam, leather & reupholstery from ₹999 at doorstep. Same-day. 6-month warranty. Book now!",
  quickAnswer:
    "FurniRevive offers premium sofa repair in South Delhi starting at ₹999. Leather crack repair from ₹2,999, full reupholstery from ₹4,000 per seat. All localities — GK, Saket, Vasant Kunj, Hauz Khas — covered with same-day doorstep service and a 6-month written warranty.",
  h1: "Sofa Repair in South Delhi — Premium Doorstep Restoration Service",
  heroSubtitle:
    "Professional sofa repair across South Delhi's premium neighbourhoods — Greater Kailash, Saket, Vasant Kunj, Hauz Khas, Defence Colony, Lajpat Nagar, Green Park, and more. Leather restoration, reupholstery, foam replacement, and mechanism repair with a 6-month warranty.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_E4RyzbNs65laSB9mK3GXEsnp",
    altText: "Professional sofa repair technician working on a luxury leather sofa in a South Delhi home — FurniRevive",
    caption: "Sofa Repair in South Delhi | Leather restoration & reupholstery in GK, Saket, Vasant Kunj | FurniRevive",
  },
  intro: [
    "South Delhi is home to some of the city's finest residences — and finest furniture. From imported Italian leather sofas in Greater Kailash bungalows to designer sectionals in Vasant Kunj apartments, the furniture in South Delhi homes represents a significant investment. When that investment starts showing wear — cracked leather, sagging cushions, faded fabric, or broken recliner mechanisms — you need a repair service that matches the quality of your furniture.",
    "FurniRevive is the preferred sofa repair service for South Delhi's discerning homeowners. We serve every South Delhi locality including Greater Kailash (GK-1, GK-2), Saket, Vasant Kunj, Vasant Vihar, Hauz Khas, Defence Colony, Lajpat Nagar, Green Park, Safdarjung, Gulmohar Park, Panchsheel Park, Chittaranjan Park (CR Park), Kalkaji, Nehru Place, and all surrounding areas.",
    "Our technicians are specially trained to handle premium and imported furniture — genuine leather sofas, designer fabrics, European recliner mechanisms, and bespoke furniture. We use professional-grade leather care products, imported upholstery materials, and precision tools that meet the standards South Delhi homeowners expect. Every repair comes with a 6-month written warranty.",
  ],
  whyChoose: [
    {
      title: "Premium Furniture Expertise",
      description:
        "Our craftsmen are trained to handle imported Italian leather, designer fabrics, European mechanisms, and bespoke furniture — the kind commonly found in South Delhi homes.",
    },
    {
      title: "All South Delhi Localities",
      description:
        "GK-1, GK-2, Saket, Vasant Kunj, Vasant Vihar, Hauz Khas, Defence Colony, Lajpat Nagar, Green Park, Safdarjung, CR Park, Kalkaji — complete South Delhi coverage.",
    },
    {
      title: "Imported Material Options",
      description:
        "We stock Italian leatherette, Belgian velvet, premium chenille, and genuine leather in 50+ colours — materials that match the quality of furniture in upscale South Delhi homes.",
    },
    {
      title: "Same-Day Doorstep Service",
      description:
        "Book before noon for same-day sofa repair at your South Delhi address. Our South Delhi-based team ensures minimal waiting time.",
    },
    {
      title: "Leather Sofa Specialists",
      description:
        "South Delhi has the highest concentration of leather sofas in Delhi NCR. Our leather repair service includes crack filling, colour restoration, re-dyeing, and conditioning.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair backed by a documented 6-month warranty. Free return visits for warranty claims — no exceptions, no excuses.",
    },
  ],
  process: [
    {
      step: "Contact & Assessment",
      description:
        "Call +91 92179 99355 or WhatsApp photos of your sofa. We identify the material, assess damage severity, and provide a preliminary estimate for your South Delhi home.",
    },
    {
      step: "Expert Home Visit",
      description:
        "Our sofa repair specialist visits your South Delhi home with fabric/leather samples, inspects the sofa in detail, and provides a comprehensive written quotation.",
    },
    {
      step: "Professional Restoration",
      description:
        "Upon approval, our craftsmen restore your sofa using premium materials and techniques appropriate to your sofa's make and material — at your doorstep.",
    },
    {
      step: "Final Inspection & Warranty",
      description:
        "We quality-check every detail, condition leather surfaces, clean the area, and provide your 6-month warranty card. Payment after your complete satisfaction.",
    },
  ],
  benefits: [
    "Premium sofa repair for imported and designer furniture",
    "Genuine leather crack repair, re-dyeing, and conditioning",
    "500+ upholstery fabrics including imported Italian and Belgian options",
    "High-density 32D and 40D foam replacement",
    "Recliner mechanism and motor repair for all brands",
    "L-shaped, U-shaped, and modular sofa repair",
    "Sofa frame repair and reinforcement",
    "Complete coverage across all South Delhi localities",
    "Same-day service available",
    "6-month written warranty on every repair",
    "Background-verified craftsmen with premium furniture experience",
    "Transparent pricing — detailed written quotes before work",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services for South Delhi Homes",
      body: [
        "The most common sofa repair request from South Delhi homes is leather restoration. Greater Kailash, Vasant Vihar, and Defence Colony residences frequently have genuine leather sofas priced at ₹80,000–₹3,00,000 that develop cracks, colour fading, and surface wear after 4–6 years in Delhi's harsh climate. Our leather repair process — cleaning, crack filling with flexible filler, professional re-dyeing with custom-matched colour, sealing, and conditioning — restores these premium sofas to near-original condition at 10–15% of replacement cost.",
        "Fabric sofa reupholstery is equally popular in South Delhi. Many Saket, Hauz Khas, and Green Park homes have designer fabric sofas where the original fabric has faded, stained, or torn. We carry premium imported fabrics — Belgian linen, Italian velvet, and European chenille — alongside quality Indian options. A full reupholstery transforms the sofa's appearance while preserving the original frame and comfort. For the numerous L-shaped and modular sofas in South Delhi apartments, we handle complex reupholstery with precise panel alignment and seamless stitching.",
      ],
    },
    {
      heading: "Sofa Repair Cost in South Delhi — Premium Service, Fair Pricing",
      body: [
        "Our South Delhi pricing reflects premium material options while remaining significantly cheaper than replacement. Leather sofa crack repair and colour restoration starts at ₹2,999 for minor work and ranges to ₹12,000–₹25,000 for full-sofa leather restoration. Fabric sofa reupholstery costs ₹4,000–₹15,000 per seat depending on fabric choice — premium imported fabrics are at the higher end.",
        "Sofa foam replacement using 32D foam costs ₹999–₹2,500 per cushion. Premium 40D foam adds ₹300–₹500 per cushion. Recliner mechanism repair ranges from ₹1,499–₹6,000, with motor replacement at ₹3,000–₹6,000. Full sofa restoration for a high-quality 3-seater — including new foam, new fabric or leather conditioning, spring check, and frame reinforcement — typically costs ₹15,000–₹35,000 versus ₹60,000–₹2,00,000 for a comparable new sofa.",
      ],
    },
    {
      heading: "South Delhi Localities We Serve",
      body: [
        "Our South Delhi sofa repair service provides complete coverage of the area. We serve Greater Kailash I and II (GK-1, GK-2), Kailash Colony, East of Kailash, Saket (all blocks and Select City Walk area), Vasant Kunj (all sectors and DDA flats), Vasant Vihar, Hauz Khas (village and residential), Defence Colony, Lajpat Nagar (I, II, III, IV), Green Park, Green Park Extension, Safdarjung Enclave, Safdarjung Development Area, Gulmohar Park, Panchsheel Park, Panchsheel Enclave, SDA Market area, Chittaranjan Park (CR Park), Kalkaji, Govindpuri, Nehru Place, and all colonies within the South Delhi district.",
        "We also cover the nearby areas of South Extension (I and II), Jangpura, Andrews Ganj, Malviya Nagar, Sarvapriya Vihar, Khirki Extension, Sheikh Sarai, and Lado Sarai. If your South Delhi address isn't listed here, call us — we almost certainly cover it.",
      ],
    },
    {
      heading: "Premium South Delhi Sofa Repair — Locality-Level Expertise",
      body: [
        "South Delhi's premium localities each have a distinct furniture character — and FurniRevive's dedicated locality teams understand the difference. In <a href=\"/sofa-repair-panchsheel-park\">Panchsheel Park</a>, we specialise in Italian leather restoration for the imported sofas common in the neighbourhood's spacious bungalows. In <a href=\"/sofa-repair-gulmohar-park\">Gulmohar Park</a>, our craftsmen handle the natural fabric upholstery damage caused by proximity to Deer Park's UV exposure — fabric fading, pile inconsistency, and surface cracking specific to east-facing rooms.",
        "In <a href=\"/sofa-repair-safdarjung-enclave\">Safdarjung Enclave</a>, we serve a mix of builder floor apartments and independent bungalows, with particular expertise in designer sectionals and premium leather Chesterfields. Our <a href=\"/sofa-repair-east-of-kailash\">East of Kailash</a> team specialises in recliner mechanism repair alongside leather restoration — the neighbourhood has the highest density of recliner sofas in this part of South Delhi. And in <a href=\"/sofa-repair-new-friends-colony\">New Friends Colony</a>, we restore the Italian leather suites and custom-commission pieces that define Maharani Bagh's bungalow drawing rooms. Every locality team operates under the same pricing framework, the same 6-month warranty, and the same same-day availability that defines the FurniRevive South Delhi service.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you repair imported leather sofas in South Delhi?",
      answer:
        "Yes. We specialise in repairing imported Italian, Spanish, and premium Indian leather sofas. Our leather repair includes crack filling, custom colour matching, re-dyeing, and professional conditioning.",
    },
    {
      question: "What areas in South Delhi do you cover?",
      answer:
        "We cover all South Delhi localities including GK-1, GK-2, Saket, Vasant Kunj, Vasant Vihar, Hauz Khas, Defence Colony, Lajpat Nagar, Green Park, CR Park, Kalkaji, Nehru Place, and all surrounding areas.",
    },
    {
      question: "How much does sofa repair cost in South Delhi?",
      answer:
        "Cushion foam replacement starts at ₹999. Leather crack repair from ₹2,999. Fabric reupholstery from ₹4,000/seat. Full 3-seater restoration ₹15,000–₹35,000. Free doorstep quote provided.",
    },
    {
      question: "Can you repair designer and custom-made sofas?",
      answer:
        "Yes. We regularly repair designer and bespoke sofas in South Delhi homes. Our craftsmen handle complex designs, unusual shapes, and premium materials with the care they deserve.",
    },
    {
      question: "Do you offer same-day sofa repair in South Delhi?",
      answer:
        "Yes. Book before noon for same-day service. Our South Delhi team handles GK, Saket, Vasant Kunj, and surrounding areas with fast response times.",
    },
    {
      question: "Do you carry premium fabric samples for home visits?",
      answer:
        "Yes. Our technicians bring 500+ fabric samples including imported Italian velvet, Belgian linen, premium chenille, and genuine leather swatches to your South Delhi home for selection.",
    },
    {
      question: "Is the warranty valid for premium leather repairs?",
      answer:
        "Yes. All repairs including premium leather restoration carry our 6-month written warranty. If the repaired area shows the same issue, we return and fix it at no charge.",
    },
    {
      question: "Do you repair L-shaped and modular sofas?",
      answer:
        "Yes. We handle L-shaped, U-shaped, modular, and sectional sofas commonly found in South Delhi apartments. Complex configurations are our speciality.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-south-delhi"),
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Sofa Upholstery Delhi", href: "/sofa-upholstery-delhi" },
    { label: "Sofa Repair Panchsheel Park", href: "/sofa-repair-panchsheel-park" },
    { label: "Sofa Repair Gulmohar Park", href: "/sofa-repair-gulmohar-park" },
    { label: "Sofa Repair Safdarjung Enclave", href: "/sofa-repair-safdarjung-enclave" },
    { label: "Sofa Repair East of Kailash", href: "/sofa-repair-east-of-kailash" },
    { label: "Sofa Repair New Friends Colony", href: "/sofa-repair-new-friends-colony" },
  ],
  keywords: [
    "sofa repair south delhi",
    "sofa repair greater kailash",
    "sofa repair saket",
    "sofa repair vasant kunj",
    "sofa repair hauz khas",
    "sofa repair defence colony",
    "leather sofa repair south delhi",
    "sofa reupholstery south delhi",
    "sofa repair lajpat nagar",
    "best sofa repair south delhi",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — South Delhi",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Repair", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and unsupportive",
    "Springs make clicking sounds when sitting",
    "Fabric or leather is torn, fraying, or peeling",
    "Frame creaks or wobbles under weight",
    "One side visibly lower than the other",
    "Foam crumbles or becomes lumpy inside cushions",
    "Armrest covering separating from the frame",
  ],
};

export const AREA_PAGES_1: SeoPageData[] = [
  furnitureRepairDwarka,
  furnitureRepairRohini,
  sofaRepairSouthDelhi,
];
