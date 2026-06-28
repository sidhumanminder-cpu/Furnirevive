import type { SeoPageData } from "@/lib/seo-constants.ts";
import { buildRelatedPages } from "@/lib/seo-pages/core-links.ts";

const GURGAON_RELATED = [
  { label: "Furniture Repair Gurgaon", href: "/furniture-repair-gurgaon" },
  { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
  { label: "Sofa Repair DLF Gurgaon", href: "/sofa-repair-dlf-gurgaon" },
  { label: "Sofa Repair Sector 56", href: "/sofa-repair-gurgaon-sector-56" },
  {
    label: "Furniture Repair Sector 45",
    href: "/furniture-repair-gurgaon-sector-45",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 1 — Sofa Repair Sohna Road Gurgaon
// ─────────────────────────────────────────────────────────────────────────────

export const sofaRepairSohnaRoadGurgaon: SeoPageData = {
  slug: "sofa-repair-sohna-road-gurgaon",

  title: "Sofa Repair Sohna Road Gurgaon | Near Me ₹999 | Same-Day Home Service",

  metaDescription:
    "Sofa repair near me on Sohna Road Gurgaon from ₹999. Cover change, foam, leather & recliner repair at home — Central Park, Unitech, Vatika, Bestech, Sector 33–70. Same-day. 6-month warranty.",

  h1: "Sofa Repair Near Me on Sohna Road Gurgaon — Central Park to Vatika",

  heroSubtitle:
    "Doorstep sofa repair across the entire Sohna Road corridor — Central Park Resorts, Unitech South City, Vatika Sovereign Park, Bestech Park View Grand Spa and dozens more societies from Sector 33 to Sector 70. 6-month warranty.",

  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Gurgaon Home",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a beige premium fabric sofa in a luxury Sohna Road, Gurgaon home — FurniRevive",
    caption: "Sofa Repair in Sohna Road, Gurgaon | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Sofa repair on Sohna Road Gurgaon costs ₹999 to ₹6,000 depending on repair type, size and material. FurniRevive provides doorstep sofa repair across the full Sohna Road corridor from Sector 33 near Subhash Chowk to Sector 70 near Badshahpur with a 6-month warranty on all work.",

  intro: [
    "Sohna Road is Gurgaon's longest and most densely populated residential corridor — stretching from Subhash Chowk in the north through Sector 33, 47, 48, 49, 50, 56, 68 and 70 all the way to Badshahpur in the south. Over the past decade, tens of thousands of families have moved into high-rise apartments and gated townships along this eight-kilometre stretch, furnishing their homes with everything from premium Italian leather sofas to modern fabric sectionals. After three to five years of daily use, these sofas inevitably need professional attention — sagging cushions, torn upholstery, cracked leather and broken recliner mechanisms are the most common problems FurniRevive resolves along Sohna Road every week.",

    "FurniRevive's doorstep sofa repair service covers every major society along the Sohna Road corridor. Whether you live in Central Park Resorts (Sector 48), Unitech South City 2 (Sector 50), Vatika Sovereign Park (Sector 99, Sohna Road exit), Bestech Park View Grand Spa (Sector 81), Emaar Emerald Hills, or any of the dozens of mid-rise and high-rise complexes in Sectors 33 through 70, our trained craftsmen travel directly to your apartment with all tools, fabrics and leather treatment supplies needed to complete the repair in a single visit.",

    "Sohna Road residents enjoy easy connectivity through the Rapid Metro and the Southern Peripheral Road, and our service teams use the same routes to reach you efficiently. Pricing starts at ₹999 for basic fabric repairs, leather restoration ranges from ₹2,999 to ₹8,000, and full reupholstery from ₹3,500 per seat. Transparent written quotes are always provided before any work begins.",
  ],

  whyChoose: [
    {
      title: "Full Sohna Road Corridor Coverage",
      description:
        "From Subhash Chowk at Sector 33 to Badshahpur at Sector 70 and beyond — we cover the entire eight-kilometre Sohna Road residential corridor without additional travel charges. No society is out of range.",
    },
    {
      title: "High-Rise Apartment Specialists",
      description:
        "Most Sohna Road homes are high-rise apartments where sofas cannot be easily moved. Our fully doorstep service means the craftsman works inside your apartment, repairing sofas, recliners and sectionals without any furniture being transported.",
    },
    {
      title: "Premium Leather and Fabric Expertise",
      description:
        "Sohna Road societies like Central Park and Vatika house premium leather sofas. We specialise in colour-matched leather restoration, crack repair, conditioning and re-dyeing that extends sofa life by years.",
    },
    {
      title: "Same-Day Slot Availability",
      description:
        "We maintain dedicated sofa repair slots for the Sohna Road corridor. Book before noon and we can often send a craftsman the same afternoon to your society gate.",
    },
    {
      title: "400+ Fabric and Leather Swatches",
      description:
        "Reupholstery customers can choose from over 400 fabric and leather samples brought to the doorstep — velvet, linen, cotton blend, faux leather and genuine leather in hundreds of colours and textures.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair along Sohna Road is backed by a 6-month warranty covering workmanship and materials. If any repaired component fails within that period, we return and fix it free of charge.",
    },
  ],

  process: [
    {
      step: "Book Online or Call",
      description:
        "Schedule a slot through our website or phone. We offer morning, afternoon and evening windows to accommodate the busy schedules of working professionals commuting to Cyber City and Udyog Vihar from the Sohna Road corridor.",
    },
    {
      step: "Doorstep Inspection at Your Society",
      description:
        "Our specialist arrives at your apartment in Central Park Resorts, Unitech South City, Bestech Grand Spa or any Sohna Road society and inspects the sofa thoroughly — checking the frame, springs, foam, upholstery and any mechanical components.",
    },
    {
      step: "On-Site Repair",
      description:
        "Once you approve the quote, work begins immediately. Most sofa repairs are completed within two to four hours in a single visit. Large sectional restorations may require a second scheduled appointment at no extra call-out fee.",
    },
    {
      step: "Quality Check and Warranty",
      description:
        "The craftsman walks you through every repair, demonstrates mechanisms, and hands over a signed 6-month warranty card. Your restored sofa is ready for immediate use.",
    },
  ],

  benefits: [
    "Doorstep sofa repair across the entire Sohna Road corridor",
    "Serving Central Park, Unitech, Vatika, Bestech and all Sohna Road societies",
    "Covering Sector 33, 47, 48, 49, 50, 56, 68, 70 and Badshahpur",
    "Starting price ₹999 for basic fabric sofa repairs",
    "Leather restoration from ₹2,999 with colour-matched treatments",
    "Full reupholstery from ₹3,500 per seat with 400+ fabric options",
    "Broken recliner mechanism repair and replacement on-site",
    "Spring and foam replacement for sagging cushion restoration",
    "Wooden frame repair and joint re-gluing for structural integrity",
    "Same-day service for bookings made before noon",
    "6-month written warranty on all workmanship and materials",
    "No transport required — everything repaired inside your apartment",
  ],

  contentSections: [
    {
      heading: "Sofa Repair Across Sohna Road's Premium Societies",
      body: [
        "The Sohna Road corridor is home to some of Gurgaon's largest residential townships — Central Park Resorts and Central Park Flower Valley in Sector 48 and 33, Unitech South City 2 in Sector 50, Vatika Sovereign Park near the Sohna Road exit, and Bestech Park View Grand Spa in Sector 81. These complexes house thousands of families who have furnished their homes with high-quality sofas ranging from Italian leather three-seaters to oversized modular sectionals and imported recliners. After years of daily use, these sofas develop common issues that FurniRevive's craftsmen resolve every week: sagging seat cushions, cracked leather on armrests, fraying fabric at seams, broken recliner motors, and wobbly wooden frames.",
        "Beyond the large townships, dozens of mid-rise apartment complexes and builder floors line the Sohna Road stretch — in Sectors 47, 49, 50, 56, 68 and 70. These homes often have more compact living rooms where sofas take proportionally more wear due to daily seating density. Our craftsmen understand the layout challenges of high-rise apartments and work efficiently within the space available, completing most repairs without needing to move the sofa out of the room. Whether your issue is a minor fabric tear or a complete recliner overhaul, we diagnose and fix it at your doorstep.",
      ],
    },
    {
      heading: "Leather Sofa Restoration on Sohna Road",
      body: [
        "Leather sofas are particularly popular in the premium apartments along Sohna Road — Central Park, Vatika and Emaar homes frequently feature genuine leather three-seater and L-shaped sets that cost ₹80,000 to ₹3,00,000 when new. Gurgaon's dry climate, air conditioning and direct sunlight through large apartment windows accelerate leather deterioration, causing surface cracking, colour fading and peeling of bonded leather layers. FurniRevive uses professional-grade leather cleaners, fillers, colour-match dye kits and conditioners to restore these sofas to near-original condition at a fraction of replacement cost.",
        "For severely damaged leather, we offer panel-level replacement using matching hides sourced from the same tanneries that supply furniture manufacturers. This preserves the sofa's original look while replacing only the affected sections. Full leather restoration on a three-seater ranges from ₹2,999 to ₹8,000, while complete leather reupholstery for large sectional sofas costs ₹8,000 to ₹18,000. Every leather restoration includes a post-treatment conditioning kit so you can maintain the leather yourself going forward.",
      ],
    },
    {
      heading: "Coverage From Subhash Chowk to Badshahpur",
      body: [
        "Our Sohna Road service zone starts at Subhash Chowk near Sector 33 — where the Sohna Road meets the Southern Peripheral Road — and extends southward through every residential sector along the corridor: Sector 47, 48, 49, 50, 56, 68, 70 and the newer developments near Badshahpur. We also cover the connecting areas along the Golf Course Extension Road where societies border the Sohna Road catchment. If your apartment faces Sohna Road or is within a five-minute drive from it, you are in our standard service zone.",
        "The Rapid Metro and SPR provide the connectivity backbone for this corridor, and our service teams use the same arterial roads to reach customers efficiently — typically within thirty to sixty minutes of booking confirmation. For residents seeking broader Gurgaon coverage, explore our <a href=\"/sofa-repair-gurgaon\">Sofa Repair Gurgaon</a> page, or for sector-specific detail, see <a href=\"/sofa-repair-gurgaon-sector-56\">Sofa Repair Sector 56</a>.",
      ],
    },
    {
      heading: "Pricing and Warranty for Sohna Road Residents",
      body: [
        "Sohna Road residents frequently compare repair costs before booking, and we believe in full transparency. Basic fabric tear repair starts at ₹999, single-seat foam replacement costs ₹800 to ₹2,500, leather restoration ranges from ₹2,999 to ₹8,000, and complete fabric reupholstery starts at ₹3,500 per seat. The exact quote depends on sofa size, material, extent of damage and number of components needing attention. Every customer receives a detailed written quote before work begins.",
        "Our 6-month warranty is a signed written commitment — not a marketing phrase. If any repair fails or any restored component deteriorates within six months, we return to your Sohna Road apartment and fix the issue at no charge. This warranty has built our reputation across Gurgaon's residential communities and is the primary reason residents recommend us to neighbours. For more details on our services, visit our <a href=\"/blog\">Blog</a> or the <a href=\"/furniture-repair-gurgaon\">Furniture Repair Gurgaon</a> page.",
      ],
    },
    {
      heading: "Sofa Repair Near Me on Sohna Road — Same-Day Home Service",
      body: [
        "Searching for sofa repair near me on Sohna Road Gurgaon? FurniRevive sends a skilled technician directly to your apartment — whether you live near Central Park Resorts, Unitech South City, Bestech Grand Spa, or in any of the sectors 33–70 along the corridor. Our sofa repair near me at home service is available same-day for bookings made before noon.",
        "Sofa repair near me cost on Sohna Road starts at ₹999. You receive a free doorstep inspection and a written quote before any work begins. Trusted, fast, and backed by a 6-month warranty. Book online or WhatsApp +91 92179 99355.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does sofa repair cost on Sohna Road Gurgaon?",
      answer:
        "Sofa repair on Sohna Road starts at ₹999 for basic fabric fixes. Leather restoration costs ₹2,999 to ₹8,000 depending on sofa size and damage severity. Full reupholstery with new fabric begins from ₹3,500 per seat. A transparent quote is provided after inspection.",
    },
    {
      question: "Which societies on Sohna Road do you serve?",
      answer:
        "We serve all major societies along the Sohna Road corridor including Central Park Resorts, Unitech South City 2, Vatika Sovereign Park, Bestech Park View Grand Spa, Emaar Emerald Hills, and all residential complexes in Sectors 33, 47, 48, 49, 50, 56, 68, 70 and Badshahpur.",
    },
    {
      question: "Do you provide same-day sofa repair on Sohna Road?",
      answer:
        "Yes. We maintain dedicated slots for the Sohna Road corridor. Bookings made before noon can often be served the same afternoon. Availability may vary during peak periods but we prioritise urgent requests.",
    },
    {
      question: "Can you do sofa cover change on Sohna Road?",
      answer:
        "Yes. Sofa cover change is one of our most popular services on the Sohna Road corridor. New fabric is sourced, stitched and fitted at your doorstep in a single visit. Cover change starts at ₹500 per seat — fabric options include cotton blend, velvet, chenille, faux leather and genuine leather. We carry a physical swatch library of 400+ options to your home.",
    },
    {
      question: "Do you repair recliners in Sohna Road societies?",
      answer:
        "Yes. Recliner repair is in high demand across Central Park, Vatika and Emaar societies on Sohna Road. We repair manual recliners (jammed levers, worn cables) and motorised recliners (motor replacement, wiring faults). Recliner repair cost on Sohna Road: ₹1,499–₹6,000 depending on fault. Same-day service available.",
    },
    {
      question: "How quickly can you arrive for sofa repair on Sohna Road?",
      answer:
        "For bookings made before noon, we typically arrive the same afternoon. For the Sohna Road corridor (Sector 33–70), our average response time from booking to craftsman arrival is 2–4 hours. We maintain dedicated slots for urgent sofa repair requests.",
    },
  ],

  relatedPages: buildRelatedPages("sofa-repair-sohna-road-gurgaon", [
    ...GURGAON_RELATED,
    { label: "Sofa Repair Palam Vihar Gurgaon", href: "/sofa-repair-palam-vihar-gurgaon" },
    { label: "Recliner Repair Sohna Road Gurgaon", href: "/recliner-repair-sohna-road-gurgaon" },
  ]),

  keywords: [
    "sofa repair Sohna Road Gurgaon",
    "sofa repair Central Park Gurgaon",
    "sofa repair Unitech South City Gurgaon",
    "sofa repair Vatika Sovereign Park",
    "leather sofa repair Sohna Road",
    "sofa reupholstery Sohna Road Gurgaon",
    "sofa repair Sector 48 Gurgaon",
    "sofa repair Sector 50 Gurgaon",
    "doorstep sofa repair Sohna Road",
    "couch repair Sohna Road Gurgaon",
    "sofa cover change Sohna Road",
    "recliner repair Sohna Road Gurgaon",
    "sofa refurbishing Sohna Road",
    "sofa repair near me Sohna Road Gurgaon",
    "sofa repair near me Gurgaon",
    "sofa repair at home near me Sohna Road",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 2 — Furniture Repair Dwarka Expressway Gurgaon
// ─────────────────────────────────────────────────────────────────────────────

export const furnitureRepairDwarkaExpresswayGurgaon: SeoPageData = {
  slug: "furniture-repair-dwarka-expressway-gurgaon",

  title: "Furniture Repair Dwarka Expressway Gurgaon | Near Me ₹599 | Same-Day Doorstep",

  metaDescription:
    "Furniture repair near me on Dwarka Expressway Gurgaon from ₹599. Sofa, bed, wardrobe repair in Sector 76–113. IKEA & online furniture specialists. Same-day. 6-month warranty.",

  h1: "Furniture Repair on Dwarka Expressway Gurgaon — New Gurgaon",

  heroSubtitle:
    "Professional doorstep furniture repair across the Dwarka Expressway corridor — Sector 76 to 113, Pataudi Road societies, Conscient, Shapoorji, Sobha, Adani Samsara and all New Gurgaon townships. 6-month warranty.",

  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Gurgaon Home",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a beige premium fabric sofa in a luxury Dwarka Expressway, Gurgaon home — FurniRevive",
    caption: "Sofa Repair in Dwarka Expressway, Gurgaon | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Furniture repair on Dwarka Expressway Gurgaon starts at ₹599. FurniRevive provides doorstep repair for sofas, beds, wardrobes, tables and all furniture across Sector 76 to 113 and Pataudi Road societies with a 6-month warranty.",

  intro: [
    "The Dwarka Expressway — officially NH-248BB — has transformed into Gurgaon's fastest-growing residential corridor. Thousands of families have moved into newly completed towers across Sector 76, 77, 79, 81, 83, 84, 88, 95, 99, 102, 103, 106, 108, 109, 110, 111, 112 and 113, furnishing their homes with brand-new furniture from IKEA, Pepperfry, Urban Ladder, Wakefit and showroom purchases. Within one to three years, even new furniture begins showing issues — flatpack wardrobe hinges that loosen, sofa cushions that compress, dining chair joints that wobble, and bed frames that creak under daily use. FurniRevive provides a fully doorstep furniture repair service built specifically for New Gurgaon's rapidly expanding population.",

    "Unlike the established sectors of central Gurgaon, the Dwarka Expressway corridor has a younger demographic — many first-time homeowners with young children and active households that put furniture under heavy daily use. Assembly issues with online-purchased flatpack furniture are extremely common here, alongside premature wear on budget and mid-range pieces bought during home setup. Our craftsmen are experienced with IKEA, Pepperfry, Urban Ladder, Nilkamal, Godrej Interio and all major online and offline furniture brands. They travel with woodworking tools, polish kits, upholstery supplies and replacement hardware to handle diverse repair needs in a single visit.",

    "The Dwarka Expressway now provides seamless connectivity to Delhi via the NH-8 interchange and Dwarka Sector 21, and our service teams use the same corridor to reach your society gate. Pricing starts at ₹599 for minor hardware fixes and scales up to ₹10,000 for premium dining table refinishing. Wardrobe repairs cost ₹1,000 to ₹3,500, bed frame repairs ₹1,500 to ₹6,000, and sofa repairs ₹999 to ₹8,000. Written quotes are provided after every inspection.",
  ],

  whyChoose: [
    {
      title: "Complete Dwarka Expressway Coverage",
      description:
        "From Sector 76 at the NH-8 junction to Sector 113 near Pataudi Road — we cover every residential sector along the Dwarka Expressway with no additional travel charges. Conscient Heritage Max, Shapoorji Pallonji Joyville, Sobha City, Adani Samsara and all major societies are in our service zone.",
    },
    {
      title: "New Furniture Specialists",
      description:
        "Dwarka Expressway homes are typically one to five years old with relatively new furniture. Our craftsmen specialise in fixing assembly issues, premature wear on flatpack furniture, and problems that arise during the initial settling period of new apartments.",
    },
    {
      title: "Online Brand Expertise",
      description:
        "IKEA KALLAX shelving, Pepperfry sofa-cum-beds, Urban Ladder dining sets, Wakefit mattress platforms — we know these products inside-out and carry the specific replacement hardware and tools needed for each brand's assembly system.",
    },
    {
      title: "Multi-Room Single Visit",
      description:
        "New homeowners often need repairs across multiple rooms. Our craftsmen handle sofa cushion replacement, wardrobe hinge fitting, bed frame tightening and dining table leg levelling all in one appointment — saving you multiple bookings.",
    },
    {
      title: "Affordable Starting Price",
      description:
        "Minor fixes like a loose hinge, wobbly chair leg, or sticky drawer start at just ₹599. For families settling into new homes with tight budgets, we provide high-quality repair at a fraction of replacement cost.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "All furniture repairs on the Dwarka Expressway corridor come with a 6-month warranty. If anything fails within that period, we return to your apartment and fix it at no additional charge.",
    },
  ],

  process: [
    {
      step: "Book a Convenient Slot",
      description:
        "Schedule online or by phone. We offer slots across all seven days including early mornings and evenings for Dwarka Expressway residents who commute to offices in Cyber Hub, Udyog Vihar or central Delhi.",
    },
    {
      step: "Craftsman Visits Your Society",
      description:
        "Our specialist arrives at your apartment in Sector 84, 88, 99, 102, 108, 113 or any Dwarka Expressway society. They inspect every piece of furniture you want repaired and provide a detailed on-the-spot quote.",
    },
    {
      step: "Doorstep Repair",
      description:
        "Once approved, work begins immediately. Most hardware repairs and minor fixes are completed within one to two hours. Sofa reupholstery, dining table refinishing or wardrobe overhauls may take a dedicated half-day appointment.",
    },
    {
      step: "Walkthrough and Warranty",
      description:
        "The craftsman demonstrates all completed repairs, tests mechanisms, and hands over a signed 6-month warranty card. You pay only after you are satisfied with the completed work.",
    },
  ],

  benefits: [
    "Doorstep furniture repair across the full Dwarka Expressway corridor",
    "Covering Sector 76 to 113 and Pataudi Road societies",
    "Serving Conscient, Shapoorji, Sobha, Adani, Elan and all major developers",
    "Starting price just ₹599 for minor hardware fixes",
    "Sofa repair from ₹999 including cushion and upholstery work",
    "Wardrobe repair from ₹1,000 including hinge and track replacement",
    "Bed frame repair from ₹1,500 with slat and rail replacement",
    "Expert with IKEA, Pepperfry, Urban Ladder and all online furniture brands",
    "Multi-room repairs completed in a single craftsman visit",
    "Dining table polish and refinishing from ₹3,000",
    "6-month written warranty on all work",
    "No furniture transport needed — everything fixed at your home",
  ],

  contentSections: [
    {
      heading: "Furniture Repair for New Gurgaon's Growing Homes",
      body: [
        "The Dwarka Expressway corridor represents New Gurgaon — a rapidly expanding residential belt where tower after tower has been delivered over the past three years. Families moving into Conscient Heritage Max (Sector 102), Shapoorji Pallonji Joyville (Sector 102), Sobha City (Sector 108), Adani Samsara (Sector 63A off the expressway), Elan The Presidential (Sector 106), and BPTP Amstoria (Sector 102) have furnished their apartments with a mix of online-purchased and showroom-bought furniture. This mix creates unique repair challenges that our craftsmen handle daily.",
        "Online furniture — particularly from IKEA, Pepperfry, Urban Ladder and Amazon — uses flatpack assembly systems with cam locks, wooden dowels and metal brackets. These components can loosen within months of assembly, especially in soft MDF boards. Showroom furniture from brands like Godrej Interio, Durian and HomeTown uses sturdier joinery but still develops issues over time: wardrobe hinges stiffen, bed slats crack, and dining table polish fades. FurniRevive's craftsmen carry replacement hardware for all these brands and construction types, ensuring the right fix for every piece regardless of where you bought it.",
      ],
    },
    {
      heading: "Wardrobe and Storage Unit Repair on Dwarka Expressway",
      body: [
        "New apartments on the Dwarka Expressway typically include modular wardrobes, shoe racks and kitchen cabinets installed by the builder. Within two to three years, these factory-fitted units develop common problems — soft-close hinges that no longer close properly, drawer channels that stick or derail, sliding door tracks that jam, and laminate edges that peel away. FurniRevive carries over 200 hardware SKUs covering every major hinge, runner and track system used in Gurgaon's new residential construction. Most wardrobe hardware repairs are completed within sixty to ninety minutes.",
        "For standalone wardrobes and storage units purchased from furniture stores or online, we handle structural repairs like reinforcing sagging shelves, replacing broken back panels, fixing misaligned doors and upgrading basic hinges to soft-close versions. Wardrobe repair costs range from ₹1,000 for simple hardware replacement to ₹3,500 for comprehensive overhauls involving multiple components. Every repair includes testing of all doors, drawers and mechanisms in your presence before final handover.",
      ],
    },
    {
      heading: "Sofa and Bed Repair Across New Gurgaon Sectors",
      body: [
        "Sofas and beds are the two largest furniture investments in any Dwarka Expressway home, and they are also the two pieces that take the most daily punishment. Young families with children use sofas as play areas, eating spots and occasional trampolines — leading to compressed cushions, stained fabric, torn armrests and weakened frames faster than manufacturers anticipate. Beds endure nightly stress on frames, slats and headboard joints, with MDF-based platform beds from online brands being particularly prone to cracking at stress points.",
        "FurniRevive's sofa repairs on the Dwarka Expressway start at ₹999 for fabric patching and foam replacement, scaling to ₹8,000 for full reupholstery of large L-shaped sectionals. Bed frame repairs range from ₹1,500 for slat replacement and joint re-gluing to ₹6,000 for comprehensive frame overhauls including headboard reattachment and side rail reinforcement. Our craftsmen repair sofas and beds from all brands — whether it is an IKEA sofa-bed, a Wakefit wooden bed frame, or a Pepperfry upholstered headboard — right at your doorstep in any Dwarka Expressway society.",
      ],
    },
    {
      heading: "Service Area and Booking",
      body: [
        "Our Dwarka Expressway service zone covers the complete corridor from Sector 76 at the NH-8 interchange in the south-east to Sector 113 near Pataudi Road in the north-west. This includes all residential pockets along both sides of the expressway: Sector 77, 79, 81, 83, 84, 88, 95, 99, 102, 103, 106, 108, 109, 110, 111, 112 and 113. Societies on the connecting Pataudi Road, including upcoming developments, are also within our standard service zone.",
        "The Dwarka Expressway now provides direct connectivity to Delhi via Dwarka Sector 21 and the NH-8 interchange, making it easy for our teams based across Gurgaon to reach you within thirty to sixty minutes. For broader Gurgaon coverage, visit our <a href=\"/furniture-repair-gurgaon\">Furniture Repair Gurgaon</a> page. To explore sofa-specific services, see <a href=\"/sofa-repair-gurgaon\">Sofa Repair Gurgaon</a> or <a href=\"/sofa-repair-gurgaon-sector-56\">Sofa Repair Sector 56</a>.",
      ],
    },
    {
      heading: "Furniture Repair Near Me on Dwarka Expressway — Same-Day Home Service",
      body: [
        "Looking for furniture repair near me on Dwarka Expressway Gurgaon? FurniRevive brings a certified technician to your apartment across Sector 76 to 113 and Pataudi Road societies — Conscient, Shapoorji, Sobha, Adani, Elan, and all major developments. Our furniture repair near me at home service requires no workshop trips and no furniture transport.",
        "Furniture repair near me cost on Dwarka Expressway starts at ₹599 for minor fixes. You get a free doorstep inspection and written quote with no obligation. Same-day slots available for morning bookings. Book online or WhatsApp +91 92179 99355.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does furniture repair cost on Dwarka Expressway?",
      answer:
        "Furniture repair starts at ₹599 for minor fixes like a loose hinge or wobbly leg. Wardrobe repairs cost ₹1,000 to ₹3,500, sofa repairs ₹999 to ₹8,000, bed frame repairs ₹1,500 to ₹6,000, and dining table refinishing ₹3,000 to ₹10,000. A written quote is provided after inspection.",
    },
    {
      question: "Which sectors on Dwarka Expressway do you cover?",
      answer:
        "We cover Sector 76 through 113 along the Dwarka Expressway corridor, plus connecting Pataudi Road societies. Major complexes served include Conscient Heritage Max, Shapoorji Joyville, Sobha City, Adani Samsara, Elan Presidential and BPTP Amstoria.",
    },
    {
      question: "Can you repair IKEA and online-purchased furniture?",
      answer:
        "Yes — IKEA, Pepperfry, Urban Ladder, Wakefit, Amazon and Flipkart furniture repairs are among our most common services on the Dwarka Expressway. Our craftsmen carry brand-specific replacement hardware and tools for flatpack furniture systems.",
    },
    {
      question: "How much does sofa repair cost on Dwarka Expressway?",
      answer:
        "Sofa repair on Dwarka Expressway starts at ₹999 for basic cushion and fabric fixes. Foam replacement costs ₹1,200–₹3,500 per seat, full upholstery ₹2,000–₹4,500 per seat, and recliner repair ₹1,499–₹6,000. Transparent written quote provided after free inspection.",
    },
    {
      question: "Do you serve Sobha City and Adani Samsara in Sector 63A?",
      answer:
        "Yes. Sobha City (Sector 108) and Adani Samsara (Sector 63A off the expressway) are both in our standard service zone. We also serve Conscient Heritage Max (Sector 102), Shapoorji Joyville (Sector 102), Elan The Presidential (Sector 106) and BPTP Amstoria (Sector 102). No extra travel charges apply.",
    },
    {
      question: "Can you repair Wakefit and Pepperfry sofas?",
      answer:
        "Yes — Wakefit, Pepperfry, Urban Ladder, and Amazon sofa repairs are common on the Dwarka Expressway. These flatpack-assembly sofas often develop loose joints, sagging cushions and fabric tears within 2–3 years. Our craftsmen carry brand-compatible replacement hardware and foam for all major online furniture brands.",
    },
  ],

  relatedPages: buildRelatedPages(
    "furniture-repair-dwarka-expressway-gurgaon",
    [
      ...GURGAON_RELATED,
      { label: "Sofa Repair Dwarka Expressway Gurgaon", href: "/sofa-repair-dwarka-expressway-gurgaon" },
      { label: "Furniture Repair Palam Vihar Gurgaon", href: "/furniture-repair-palam-vihar-gurgaon" },
      { label: "Furniture Repair Udyog Vihar Gurgaon", href: "/furniture-repair-udyog-vihar-gurgaon" },
    ],
  ),

  keywords: [
    "furniture repair Dwarka Expressway Gurgaon",
    "furniture repair New Gurgaon",
    "furniture repair Sector 102 Gurgaon",
    "wardrobe repair Dwarka Expressway",
    "sofa repair Dwarka Expressway Gurgaon",
    "IKEA furniture repair Dwarka Expressway",
    "bed repair New Gurgaon",
    "furniture repair Sector 108 Gurgaon",
    "carpenter service Dwarka Expressway",
    "online furniture repair New Gurgaon",
    "sofa repair Sector 108 Gurgaon",
    "furniture repair Sector 63A Gurgaon",
    "furniture repair near me Dwarka Expressway Gurgaon",
    "furniture repair near me New Gurgaon",
    "sofa repair near me Dwarka Expressway",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 3 — Chair Repair Gurgaon
// ─────────────────────────────────────────────────────────────────────────────

export const chairRepairGurgaon: SeoPageData = {
  slug: "chair-repair-gurgaon",

  title: "Chair Repair Gurgaon | Hydraulic, Wheel & Gaming Chair Fix Near Me | ₹400",

  metaDescription:
    "Chair repair near me in Gurgaon from ₹400. Same-day doorstep fix for office chair hydraulic failure, broken wheels, gaming chair & base repair — DLF, Sohna Road, MG Road. 6-month warranty.",

  h1: "Chair Repair in Gurgaon (Same Day Doorstep Service)",

  heroSubtitle:
    "Trusted chair repair in Gurgaon — hydraulic gas lift replacement, broken wheel fix, base repair, gaming chair & office chair specialists. Same-day service at your home or office across DLF Phase 1–5, Sohna Road, Golf Course Road, MG Road, Sector 45, 56 & 57. Starting ₹400. 📞 Call or WhatsApp now for same-day booking.",

  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Gurgaon Home",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a beige premium fabric sofa in a luxury Gurgaon home — FurniRevive",
    caption: "Sofa Repair in Gurgaon | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Chair repair in Gurgaon costs ₹400 to ₹4,000 depending on repair type. FurniRevive offers same-day doorstep chair repair in Gurgaon — covering hydraulic gas lift failure, broken caster wheels, cracked base, gaming chair damage, and office chair overhauls. 6-month warranty on all repairs.",

  intro: [
    "Is your office chair sinking every few minutes? Gaming chair wobbling or not reclining? Wheels stuck or cracked? FurniRevive specialises in chair repair in Gurgaon — we come to your home or office, fix the problem on-site, and leave within the hour.",

    "We handle the most common chair problems in Gurgaon homes and offices: hydraulic gas lift failure (chair won't stay up), broken or stuck caster wheels, cracked chair base, torn gaming chair upholstery, snapped armrests, and broken tilt mechanisms. Whether it's a gaming chair repair in Gurgaon or an office chair repair in Gurgaon, our technicians carry all parts and tools for same-day resolution.",

    "Pricing starts at ₹400 for caster wheel replacement, ₹800–₹1,500 for hydraulic repair, and ₹99–₹199 for a visit. Every repair is backed by our 6-month written warranty. <strong>Call or WhatsApp now to book same-day chair repair in Gurgaon.</strong>",
  ],

  whyChoose: [
    {
      title: "Same-Day Doorstep Service",
      description:
        "Book before noon and get same-day chair repair in Gurgaon at your home or office. Our technician arrives with all parts — no waiting, no pickup, no hassle.",
    },
    {
      title: "Gaming & Office Chair Specialists",
      description:
        "We repair Green Soul, Amazon Basics, Cellbell, and all popular gaming chair brands. Also experts in Featherlite, Godrej, HOF, and Herman Miller office chairs. Hydraulic, wheels, structure — all covered.",
    },
    {
      title: "Genuine Hydraulic Cylinders",
      description:
        "We carry Class 3 and Class 4 gas lift cylinders for same-day hydraulic chair repair in Gurgaon. Correct fit, correct load rating — chair stays at your preferred height permanently.",
    },
    {
      title: "All Gurgaon Areas Covered",
      description:
        "DLF Phase 1–5, Sohna Road, Golf Course Road, MG Road, Sector 45, 56, 57, Cyber City, Udyog Vihar, and all residential sectors — we cover all of Gurgaon without extra travel charges.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Get a firm quote before we start. Visit charge ₹99–₹199, hydraulic repair ₹800–₹1,500, wheels ₹400–₹1,000. No surprises, no hidden fees.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "All repairs — hydraulic, wheel, base, upholstery — come with a 6-month warranty on parts and workmanship. We stand behind every job.",
    },
  ],

  process: [
    {
      step: "Call or WhatsApp to Book",
      description:
        "Tell us your chair type and problem. We confirm same-day or next-day availability for your area in Gurgaon and give you an upfront price estimate.",
    },
    {
      step: "Technician Arrives at Your Location",
      description:
        "Our chair repair specialist reaches your home or office in Gurgaon — DLF, Sohna Road, Golf Course Road, MG Road, Sector 45/56/57 or anywhere else. All tools and common parts are carried on every visit.",
    },
    {
      step: "On-Site Diagnosis & Repair",
      description:
        "We diagnose the exact fault — failed gas lift, broken caster, cracked base or mechanism issue — confirm the price, and complete the repair on-site within 30–60 minutes.",
    },
    {
      step: "Test, Warranty & Payment",
      description:
        "You test the repaired chair. Once satisfied, payment is collected and a 6-month warranty card is issued. Corporate clients receive itemised invoices.",
    },
  ],

  benefits: [
    "Same-day doorstep chair repair in Gurgaon — book by noon, fixed today",
    "Hydraulic gas lift replacement ₹800–₹1,500 with Class 3/4 cylinders",
    "Caster wheel replacement ₹400–₹1,000, all types",
    "Gaming chair repair — Green Soul, Amazon Basics, Cellbell specialists",
    "Office chair repair Gurgaon — Featherlite, Godrej, HOF, Herman Miller",
    "Chair base crack and structural repair",
    "Revolving chair repair Gurgaon — tilt, armrest, mechanism fixes",
    "Serving DLF Phase 1–5, Sohna Road, Golf Course Road, MG Road, Sector 45/56/57",
    "Chair repair near me Gurgaon — no travel surcharge across all sectors",
    "6-month written warranty on all repairs",
    "Visit charge only ₹99–₹199",
    "Bulk office chair repair with volume discounts",
  ],

  contentSections: [
    {
      heading: "Hydraulic Chair Repair in Gurgaon",
      body: [
        "{{IMAGE: chair hydraulic repair Gurgaon}}",
        "The most common chair complaint in Gurgaon homes and offices: the chair keeps sinking. You raise the seat, and within seconds it drops back down. This is a failed hydraulic gas cylinder — a pressurised tube inside the chair's column that controls height. Once the seal breaks, it can't hold pressure and the chair sinks under your weight.",
        "Our technicians carry genuine Class 3 and Class 4 gas lift cylinders in multiple lengths. Replacement takes 20–30 minutes at your location. After installation, the chair holds height perfectly and the tilt mechanism works as designed. Hydraulic chair repair in Gurgaon costs ₹800–₹1,500 — far cheaper than buying a new chair. We cover all areas including DLF Phase 1–5, Golf Course Road, MG Road and Sohna Road. <strong>WhatsApp us now for same-day hydraulic repair.</strong>",
      ],
    },
    {
      heading: "Chair Wheel Repair & Caster Replacement in Gurgaon",
      body: [
        "{{IMAGE: chair wheel replacement Gurgaon}}",
        "Broken, stuck, or scratching-the-floor chair wheels are a daily frustration. Cheap plastic casters crack within months on hard floors. Threads of carpet or hair wrap around the axle and seize the wheel. The result: a chair that won't roll, drags, or tips to one side.",
        "We replace all five caster wheels in one visit using heavy-duty nylon or PU casters matched to your floor type. Hard floor? We fit soft PU wheels that glide without scratching. Carpet? Standard nylon casters that roll freely. Wheel repair or full caster replacement for office chair repair in Gurgaon costs ₹400–₹1,000 depending on wheel type. Chair repair near me Gurgaon searches often land here — and yes, we serve your sector without extra charges.",
      ],
    },
    {
      heading: "Chair Base Repair in Gurgaon",
      body: [
        "{{IMAGE: chair base repair Gurgaon}}",
        "A cracked or broken chair base is a safety hazard. Cheap five-star nylon bases snap under stress — especially in heavier-use office environments. We replace cracked bases with heavy-duty nylon or aluminium star bases rated for appropriate load. Base replacement costs ₹600–₹1,200 and restores full structural integrity. We also repair cracked wooden bases on dining chairs and bar stools.",
      ],
    },
    {
      heading: "Gaming Chair Repair in Gurgaon",
      body: [
        "Gaming chairs take more abuse than standard office chairs — reclining stress, armrest lateral movement, lumbar and headrest pressure. We specialise in gaming chair repair in Gurgaon for brands including Green Soul, Amazon Basics, Cellbell, and other popular online brands.",
        "Common gaming chair repairs we perform in Gurgaon: hydraulic gas lift replacement (chair sinks), broken reclining lock mechanism, snapped armrest bracket, torn PU leather or mesh seat, loose backrest wobble, and cracked base. Our technicians carry parts common to these brands and complete most repairs in a single visit. Gaming chair repair in Gurgaon costs ₹800–₹2,500 depending on the fault. DLF, Sohna Road, Golf Course Road, Sector 56 — same-day available. <strong>Call now to check availability.</strong>",
      ],
    },
    {
      heading: "Office Chair Repair in Gurgaon — Revolving, Ergonomic & Executive",
      body: [
        "Gurgaon is home to thousands of corporate offices and an even larger number of work-from-home professionals. Office chair repair in Gurgaon is one of our most-requested services — covering revolving chair repair in Gurgaon, ergonomic mesh chair fixes, and executive leather chair restoration.",
        "Most common office chair problems we fix: hydraulic cylinder failure, broken tilt mechanism, armrest snap, seat foam flattening, mesh back tear, and wheel seizure. We serve Cyber City, Udyog Vihar, Golf Course Road, MG Road, and all residential sectors. Chair repair near me Gurgaon — if you're in Sector 45, 56 or 57, DLF Phase 1–5, or Sohna Road, we're typically available same-day.",
        "For furniture repair needs beyond chairs, see our <a href=\"/furniture-repair-gurgaon\">Furniture Repair Gurgaon</a> page. For sofa issues, visit <a href=\"/sofa-repair-gurgaon\">Sofa Repair Gurgaon</a>. Also see <a href=\"/chair-repair-delhi\">Chair Repair Delhi</a> and <a href=\"/office-chair-repair-cost-delhi\">Office Chair Repair Delhi</a> for NCR pricing context.",
      ],
    },
    {
      heading: "Chair Repair Across Gurgaon — Areas We Cover",
      body: [
        "We provide chair repair in Gurgaon across all residential and commercial zones:",
        "DLF Phase 1, DLF Phase 2, DLF Phase 3, DLF Phase 4, DLF Phase 5 — Sohna Road (Sectors 33–70) — Golf Course Road — Golf Course Extension Road — MG Road — Sector 45, Sector 56, Sector 57 — Cyber City, Cyber Hub, Udyog Vihar — Palam Vihar, Sushant Lok — Dwarka Expressway corridor (Sector 76–113).",
        "We also cover the wider NCR — <a href=\"/chair-repair-delhi\">chair repair in Delhi</a>, Noida, Faridabad, and Ghaziabad. No additional travel charges apply within Gurgaon. Same-day slots are available most days before noon. <strong>WhatsApp or call now to confirm same-day chair repair in Gurgaon for your area.</strong>",
      ],
    },
    {
      heading: "Common Chair Problems We Fix in Gurgaon",
      body: [
        "{{IMAGE: technician repairing office chair at home Gurgaon}}",
        "Here are the 12 most common chair faults our Gurgaon technicians fix every day:",
        "1. <strong>Chair keeps sinking</strong> — Failed gas cylinder. We replace with a Class 3/4 hydraulic in 30 minutes (₹800–₹1,500).",
        "2. <strong>Chair not going up or down</strong> — Seized actuator or detached lever. Diagnosed and fixed on-site.",
        "3. <strong>Hydraulic not working at all</strong> — Completely dead gas lift. Full replacement with a rated cylinder.",
        "4. <strong>Wheel broken or snapped off</strong> — Cracked plastic casters. Replaced with PU rollers (₹400–₹1,000 for a set).",
        "5. <strong>Chair wheels stuck and won't roll</strong> — Debris-seized axle. Cleaned, lubricated, or replaced.",
        "6. <strong>Chair making creaking or clicking noise</strong> — Loose tilt mechanism or dry pivot. Tightened and lubricated.",
        "7. <strong>Chair leaning to one side</strong> — Uneven wheels or cracked base arm. Root cause identified and fixed.",
        "8. <strong>Base cracked or broken</strong> — Safety risk. Replaced with heavy-duty nylon or aluminium base (₹600–₹1,200).",
        "9. <strong>Gaming chair tilt-lock not working</strong> — Broken reclining mechanism. Repaired or replaced in one visit.",
        "10. <strong>Height adjustment stuck</strong> — Seized lever or internal spring. Freed or gas lift replaced.",
        "11. <strong>Chair not rolling smoothly on marble/tile</strong> — Wrong caster type. Fitted with soft PU floor-safe casters.",
        "12. <strong>Armrest broken or snapped</strong> — Armrest pad or bracket replaced (₹500–₹1,200).",
        "<strong>Call or WhatsApp now — same-day chair repair in Gurgaon for your area.</strong>",
      ],
    },
    {
      heading: "Why FurniRevive is Gurgaon's #1 Chair Repair Service",
      body: [
        "{{IMAGE: chair before after repair Gurgaon}}",
        "10,000+ chairs repaired across Gurgaon and NCR. Here's why residents and offices across DLF, Sohna Road, and Golf Course Road trust us:",
        "✅ <strong>Same-day doorstep service</strong> — book before noon, fixed today at your home or office.",
        "✅ <strong>10,000+ chairs repaired</strong> in Gurgaon & NCR — the experience shows in first-visit fix rates.",
        "✅ <strong>Visit charge only ₹99–₹199</strong> — adjusted against repair. Zero hidden costs.",
        "✅ <strong>6-month written warranty</strong> on every repair — parts and workmanship guaranteed.",
        "✅ <strong>Class 3 & 4 genuine gas lifts</strong> and heavy-duty PU casters on every van.",
        "✅ <strong>Gaming chair specialists</strong> — Green Soul, Amazon Basics, Cellbell, and all popular brands.",
        "✅ <strong>Fast WhatsApp response</strong> — photo → quote in minutes.",
        "✅ <strong>Bulk office repair</strong> — 10+ chairs in one visit with volume discounts.",
        "Also need sofa help? See our <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a> service. For all furniture, visit <a href=\"/furniture-repair-gurgaon\">furniture repair Gurgaon</a>.",
        "{{IMAGE: gaming chair repair service Gurgaon}}",
      ],
    },
    {
      heading: "Chair Repair Near Me in Gurgaon — Same-Day Doorstep Service",
      body: [
        "Searching for chair repair near me in Gurgaon? FurniRevive's technicians are based across DLF, Sohna Road, Golf Course Road, MG Road, and all Gurgaon sectors — meaning your nearest technician is typically 30–60 minutes away. Chair repair near me at home covers every area including Sector 45, 56, 57, Cyber City, Palam Vihar, and the full Dwarka Expressway corridor.",
        "Chair repair near me cost in Gurgaon starts at ₹400 for caster wheel replacement and ₹800–₹1,500 for hydraulic gas lift repair. WhatsApp a photo and get a quote in minutes. Same-day service available when you book before noon. Trusted by 10,000+ customers across Gurgaon and NCR. Book at furnirevive.com or call +91 92179 99355.",
      ],
    },
  ],

  faqs: [
    {
      question: "Do you repair chairs at home in Gurgaon?",
      answer:
        "Yes — all chair repairs are done at your home or office in Gurgaon. Our technician comes to your location with tools and parts. No need to transport or remove the chair. We cover DLF Phase 1–5, Sohna Road, Golf Course Road, MG Road, Sector 45/56/57 and all other areas.",
    },
    {
      question: "How much does chair repair cost in Gurgaon?",
      answer:
        "Visit charge: ₹99–₹199. Hydraulic gas lift replacement: ₹800–₹1,500. Wheel/caster replacement: ₹400–₹1,000. Base repair: ₹600–₹1,200. Executive leather restoration: ₹2,000–₹4,000. You receive a firm quote before work begins — no hidden charges.",
    },
    {
      question: "Why is my office chair sinking in Gurgaon?",
      answer:
        "A sinking chair means the hydraulic gas cylinder has failed — the internal seal is worn and can no longer hold pressure. The fix is a cylinder replacement, which we do at your home or office in Gurgaon in 30 minutes. Cost: ₹800–₹1,500 with a 6-month warranty.",
    },
    {
      question: "Can the hydraulic gas lift be replaced at my home in Gurgaon?",
      answer:
        "Yes. This is our most common doorstep repair in Gurgaon. We bring the correct Class 3 or Class 4 cylinder to your location — DLF, Sohna Road, Golf Course Road, MG Road, Sector 45/56/57 or anywhere else — and complete the swap in under 30 minutes.",
    },
    {
      question: "How long does chair repair take in Gurgaon?",
      answer:
        "Most repairs — hydraulic replacement, wheel swap, base fix — take 30–60 minutes at your location. More complex jobs like full upholstery or mechanism overhaul may take 60–90 minutes. Same-day service is available when booked before noon.",
    },
    {
      question: "Do you repair gaming chairs in Gurgaon?",
      answer:
        "Yes. We specialise in gaming chair repair in Gurgaon for Green Soul, Amazon Basics, Cellbell, and other popular brands. Common fixes include hydraulic replacement, recliner mechanism repair, armrest bracket replacement, and torn PU leather repair. Cost: ₹800–₹2,500 depending on fault.",
    },
  ],

  relatedPages: buildRelatedPages("chair-repair-gurgaon", [
    ...GURGAON_RELATED,
    { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
    {
      label: "Office Chair Repair Delhi",
      href: "/office-chair-repair-cost-delhi",
    },
  ]),

  keywords: [
    "chair repair Gurgaon",
    "office chair repair Gurgaon",
    "gaming chair repair Gurgaon",
    "hydraulic chair repair Gurgaon",
    "chair wheel repair Gurgaon",
    "revolving chair repair Gurgaon",
    "chair repair near me Gurgaon",
    "chair base repair Gurgaon",
    "same day chair repair Gurgaon",
    "chair repair DLF Gurgaon",
    "chair repair Sohna Road Gurgaon",
    "office chair repair near me Gurgaon",
    "chair repair near me gurgaon",
    "office chair sinking gurgaon",
    "gaming chair repair near me gurgaon",
    "hydraulic chair repair near me gurgaon",
    "chair repair near me in Gurgaon",
    "office chair repair near me Gurgaon same day",
    "chair repair at home near me Gurgaon",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Aggregate Export
// ─────────────────────────────────────────────────────────────────────────────

export const GURGAON_MICRO_LOCATION_PAGES: SeoPageData[] = [
  sofaRepairSohnaRoadGurgaon,
  furnitureRepairDwarkaExpresswayGurgaon,
  chairRepairGurgaon,
];
