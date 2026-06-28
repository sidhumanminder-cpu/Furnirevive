import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ─── Page 1: Malviya Nagar ────────────────────────────────────────────────────

export const sofaRepairMalviyaNagar: SeoPageData = {
  slug: "sofa-repair-malviya-nagar",
  title: "Sofa Repair in Malviya Nagar Delhi | ₹999 Onwards",
  metaDescription:
    "Expert sofa repair in Malviya Nagar Delhi. Covering Hauz Khas, Panchsheel, Sheikh Sarai & Sarvapriya Vihar. Doorstep service from ₹999. Book same day!",
  h1: "Sofa Repair in Malviya Nagar, Delhi",
  heroSubtitle:
    "Professional sofa repair and reupholstery for South Delhi's most vibrant residential neighbourhood — doorstep service across Malviya Nagar, Hauz Khas, Panchsheel Enclave and beyond.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Malviya Nagar Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Malviya Nagar South Delhi home — FurniRevive",
    caption: "Sofa Repair in Malviya Nagar Delhi | South Delhi | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "We provide doorstep sofa repair across Malviya Nagar, Hauz Khas, Panchsheel Enclave, Sheikh Sarai and Sarvapriya Vihar. Cushion repair starts at ₹999, full reupholstery from ₹3,500 per seat. Same-day slots are available six days a week.",
  intro: [
    "Malviya Nagar is one of South Delhi's most well-established and sought-after residential areas, home to professionals, academics connected to the nearby IIT Delhi campus, and multi-generational families who have lived here for decades. The neighbourhood's character — a blend of compact DDA flats, builder floors, and gracious independent houses — means its residents often own quality sofas that get intensive daily use. When those pieces develop sagging cushions, torn fabric, broken springs, or wobbly frames, our sofa repair service in Malviya Nagar dispatches trained technicians directly to your doorstep, restoring your sofa fully without the inconvenience of dismantling or transporting it to a distant workshop.",
    "We cover every category of sofa repair need in Malviya Nagar: cushion foam replacement from ₹999 per cushion, full fabric reupholstery priced from ₹3,500 to ₹14,000 per seat, leather sofa restoration starting at ₹2,999, structural frame and spring repair, and custom stitching for torn or frayed sections. Whether your sofa sits in a compact flat in Khirki Extension or a spacious bungalow in Panchsheel Enclave, our team carries all the tools and materials required to complete most repairs in a single on-site visit. No repeat calls, no waiting days for a return trip.",
    "Our service territory extends well beyond the core Malviya Nagar blocks to cover Sarvapriya Vihar, Adchini, Lado Sarai, Sheikh Sarai, Savitri Nagar, and the lanes surrounding Aurobindo Market, SDA Market, and Hauz Khas Village. Residents across this South Delhi corridor benefit from quick response windows, transparent pricing confirmed in writing before work begins, and technicians who know the area's diverse housing stock intimately. From the art galleries of Lado Sarai to the tree-lined streets near Malviya Nagar Police Station and the retail corridor near PVR Saket, our team is never far away.",
  ],
  whyChoose: [
    {
      title: "Doorstep Service Across South Delhi",
      description:
        "Our technicians travel to every Malviya Nagar block — from flats near the police station to independent houses backing onto Deer Park, Hauz Khas. Your sofa never needs to leave your home.",
    },
    {
      title: "Transparent Pricing from ₹999",
      description:
        "Cushion repair starts at ₹999, fabric reupholstery at ₹3,500 per seat, and leather restoration at ₹2,999. Every quote is provided in writing after a free in-home inspection with zero hidden charges or call-out fees.",
    },
    {
      title: "Premium Materials from Aurobindo Market Suppliers",
      description:
        "We stock ISI-grade foam in multiple densities and carry an extensive catalogue of fabrics — cotton, velvet, microfibre, rexine, and imported options — sourced from trusted Aurobindo Market and SDA Market suppliers.",
    },
    {
      title: "Flexible Weekend and Same-Day Slots",
      description:
        "Weekend and same-day appointments are available for urgent cushion or stitching repairs across Malviya Nagar, Hauz Khas, and Panchsheel Enclave — accommodating the demanding schedules of working professionals.",
    },
    {
      title: "Leather and Designer Fabric Expertise",
      description:
        "From Italian leather sofas in Panchsheel Enclave villas to artisan fabric pieces near Hauz Khas Village, our specialists handle premium materials with the precision and care they require.",
    },
    {
      title: "90-Day Workmanship Warranty",
      description:
        "Every sofa repair in Malviya Nagar and surrounding South Delhi areas is backed by a 90-day warranty covering materials and labour. Any defect arising from our work is fixed free of charge within this period.",
    },
  ],
  process: [
    {
      step: "Book Your Slot",
      description:
        "Use the online booking form or WhatsApp us with your Malviya Nagar address, sofa type, and a brief description of the problem. We confirm a convenient two-hour arrival window the same day.",
    },
    {
      step: "Free In-Home Assessment",
      description:
        "Our technician arrives, inspects cushions, frame, springs, and upholstery, and provides a detailed itemised quote in writing. There is no obligation to proceed if you are not satisfied with the estimate.",
    },
    {
      step: "On-Site Repair",
      description:
        "Approved work begins immediately using professional-grade tools and materials from our service van. Most cushion, stitching, and foam jobs are completed within 2–3 hours inside your home.",
    },
    {
      step: "Final Check and Warranty Handover",
      description:
        "Before leaving, the technician performs a thorough quality inspection, cleans the work area, and provides a printed warranty card. Your sofa is ready for use the moment we pack up.",
    },
  ],
  benefits: [
    "No transportation — repairs happen in your living room",
    "Same-day appointments available in Malviya Nagar",
    "Free in-home inspection with written estimate",
    "ISI-grade foam and premium fabric catalogue",
    "Leather sofa restoration by trained specialists",
    "Spring and structural frame repair available on-site",
    "Custom fabric selection from imported swatches",
    "Weekend and evening slots for working professionals",
    "90-day workmanship warranty on all repairs",
    "Covers Hauz Khas, Panchsheel, Sheikh Sarai & Lado Sarai",
    "Pricing from ₹999 to ₹15,000 — options for all budgets",
    "Verified, background-checked, uniformed technicians",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Across Malviya Nagar Blocks and Adjacent Colonies",
      body: [
        "Malviya Nagar's residential stock spans DDA flats, builder floors, and independent houses, each with its own furniture scale and style. In compact apartments across Khirki Extension and Sheikh Sarai, smaller 2-seater sofas are the norm, while larger drawing rooms in Sarvapriya Vihar and Panchsheel Enclave often feature sectional or L-shaped units with premium fabric. Our service van is stocked to handle both extremes: from a single cushion foam replacement completed in under an hour to a full three-seater reupholstery that takes a dedicated half-day. We bring fabric swatches, multiple foam density options, and all stitching equipment so most repairs can be signed off in a single visit.",
        "We also serve the art-gallery and studio belt in Lado Sarai and Adchini, where creatives and entrepreneurs frequently own boutique or custom-made furniture requiring specialist handling. Our technicians work sensitively with one-of-a-kind pieces, documenting original stitching patterns and matching unusual fabrics before proceeding. If you live near Aurobindo Market or the winding lanes of SDA Market, expect our team at your doorstep within two hours of a confirmed morning booking. Residents in the lanes behind Malviya Nagar Police Station and along the Savitri Nagar corridor enjoy equally prompt service.",
      ],
    },
    {
      heading: "Leather Sofa Restoration in Hauz Khas and Panchsheel Enclave",
      body: [
        "Leather sofas are a popular choice in the upmarket homes of Hauz Khas, Panchsheel Enclave, and the independent houses of Malviya Nagar's outer blocks. Over time, Delhi's heat and dust accelerate leather degradation — causing cracking, peeling, colour fading, and loss of suppleness. Our leather restoration service covers conditioning treatments to restore flexibility, crack-filling with colour-matched compounds, full re-dyeing to refresh faded sections, and complete leather replacement when the damage is too extensive to repair cosmetically. Prices start at ₹2,999 for minor conditioning and rise to ₹15,000 per seat for full hide replacement.",
        "We work with genuine leather, bonded leather, and high-quality faux leather (PU), ensuring the repaired sections blend seamlessly with the original material. Residents near Deer Park and Hauz Khas Village — where imported and boutique furniture is common — particularly benefit from our leather specialist service. Our technicians source matching leather swatches and dyes to ensure invisibly integrated repairs, giving a sofa purchased at significant cost a second life that can last another decade at a fraction of replacement price.",
      ],
    },
    {
      heading: "Why South Delhi Homeowners Prefer Doorstep Sofa Repair",
      body: [
        "The traditional route of sending a sofa to a workshop involves dismantling it, hiring a tempo, paying loading and unloading fees, waiting three to seven days, and then reversing the whole process. For large sectionals or antique wood-frame sofas common in older Malviya Nagar homes, transit also carries a genuine risk of scratches, joint damage, or misassembly. Our doorstep model eliminates every one of these friction points by bringing the workshop to you. The sofa never leaves your living room, and the repair is done while you go about your day.",
        "South Delhi homeowners — particularly around Panchsheel Enclave, Sarvapriya Vihar, and Savitri Nagar — often own high-value furniture they are understandably reluctant to send to an unfamiliar workshop. Our in-home model lets you watch the work being done, approve fabric swatches and foam density in real time, and ask questions face-to-face. This collaborative process consistently produces results that align with your expectations rather than a technician's interpretation of a blurry phone photo.",
      ],
    },
    {
      heading: "Sofa Repair Pricing Guide for Malviya Nagar Residents",
      body: [
        "We structure our pricing to be accessible across the diverse income spectrum of Malviya Nagar and its satellite areas. Cushion foam replacement costs ₹999–₹2,500 depending on density grade and number of cushions. Minor stitching and zipper repairs start at ₹500. Full fabric reupholstery ranges from ₹3,500 to ₹14,000 per seat — budget cotton blends at the lower end, premium velvet or imported fabric at the higher end. Leather restoration is priced between ₹2,999 and ₹15,000 per seat. Spring and frame repairs are quoted separately after inspection, typically ₹1,200 to ₹5,000.",
        "All prices are confirmed in writing before any work begins, and there are no call-out fees or inspection charges. Repeat customers across Malviya Nagar, Hauz Khas, and Panchsheel Enclave receive a 10% loyalty discount on second bookings, making long-term sofa maintenance genuinely economical. We encourage customers to request a free assessment before committing — our technician will walk you through repair vs. refurbish vs. replace so you can make a fully informed decision within your budget.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you repair sofas at home in Malviya Nagar?",
      answer:
        "Yes, we offer complete doorstep sofa repair across all Malviya Nagar blocks and adjacent areas including Sarvapriya Vihar, Khirki Extension, Lado Sarai, and Sheikh Sarai. Our technicians come to your home with all tools and materials — the sofa never needs to leave.",
    },
    {
      question: "What does sofa repair cost in Malviya Nagar?",
      answer:
        "Cushion foam replacement starts at ₹999, minor stitching from ₹500, and full fabric reupholstery from ₹3,500 per seat. Leather restoration starts at ₹2,999 and goes up to ₹15,000 per seat for full hide replacement. We provide a free written quote after an in-home inspection.",
    },
    {
      question: "Can you repair a leather sofa near Hauz Khas or Deer Park?",
      answer:
        "Absolutely. We specialise in leather sofa restoration — including conditioning, crack-filling, colour touch-up, and full leather replacement — across Hauz Khas, Malviya Nagar, and Panchsheel Enclave. Material samples are brought for your approval before work begins.",
    },
    {
      question: "Is same-day sofa repair available in Malviya Nagar?",
      answer:
        "Same-day service is available for cushion replacements, foam refilling, and minor stitching repairs. Book before noon for the best chance of a same-day slot across Malviya Nagar, Hauz Khas, and Panchsheel Enclave.",
    },
    {
      question: "Do you serve Panchsheel Enclave and Sarvapriya Vihar?",
      answer:
        "Yes, both Panchsheel Enclave and Sarvapriya Vihar are within our regular service radius. We visit these areas multiple times each week and can typically schedule an appointment within 24 hours of your request.",
    },
    {
      question: "What sofa types do you repair in Malviya Nagar?",
      answer:
        "We repair all types: fabric, leather, rexine/PU, sectional, L-shaped, sofa-cum-bed, Chesterfield, modular, and traditional wood-frame sofas. We handle both modern designer pieces and decades-old family heirlooms found in older Malviya Nagar homes.",
    },
    {
      question: "Do repairs come with a warranty?",
      answer:
        "Yes, every repair is backed by a 90-day workmanship warranty covering both materials and labour. If any issue arises from our work within this period, we return and fix it free of charge — no questions asked.",
    },
    {
      question: "Can I choose my own fabric for reupholstery in Malviya Nagar?",
      answer:
        "Certainly. Our technician brings a comprehensive swatch catalogue covering cotton, velvet, microfibre, rexine, and imported fabrics in dozens of colours and textures. You choose before work begins, and the final price is confirmed against your selection.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-malviya-nagar"),
    { label: "Sofa Repair Hauz Khas", href: "/sofa-repair-hauz-khas" },
    { label: "Sofa Repair Panchsheel Enclave", href: "/sofa-repair-panchsheel-enclave" },
    { label: "Sofa Repair Greater Kailash", href: "/sofa-repair-greater-kailash" },
    { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
    { label: "Furniture Repair Malviya Nagar", href: "/furniture-repair-malviya-nagar" },
  ],
  keywords: [
    "sofa repair Malviya Nagar",
    "sofa repair Hauz Khas",
    "sofa repair Panchsheel Enclave",
    "sofa reupholstery South Delhi",
    "leather sofa repair Malviya Nagar",
    "sofa cushion repair Sarvapriya Vihar",
    "sofa repair near IIT Delhi",
    "sofa repair Khirki Extension",
    "sofa repair Sheikh Sarai",
    "sofa repair at home Malviya Nagar",
  ],
};

// ─── Page 2: Pitampura ───────────────────────────────────────────────────────

export const sofaRepairPitampura: SeoPageData = {
  slug: "sofa-repair-pitampura",
  title: "Sofa Repair in Pitampura Delhi | Starting ₹899",
  metaDescription:
    "Professional sofa repair in Pitampura Delhi. All blocks covered, Shalimar Bagh, Kohat Enclave & Tri Nagar. Starting from ₹899. Same-day service available.",
  h1: "Sofa Repair in Pitampura, Delhi",
  heroSubtitle:
    "Affordable and reliable sofa repair for North-West Delhi's most recognisable residential colony — covering all Pitampura blocks A–Z, Shalimar Bagh, Rani Bagh, Kohat Enclave and Saraswati Vihar.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Pitampura Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Pitampura North Delhi home — FurniRevive",
    caption: "Sofa Repair in Pitampura Delhi | North Delhi | Premium upholstery & spring repair service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Doorstep sofa repair in Pitampura covers all residential blocks A through Z, Shalimar Bagh, Kohat Enclave, Tri Nagar and Shakurpur. Repairs start at ₹899, spring replacement from ₹1,500, cushion foam from ₹999. Same-day service available most weekdays.",
  intro: [
    "Pitampura is one of North-West Delhi's largest and most densely populated planned residential colonies, instantly recognisable across the city by its iconic TV Tower. Spread across blocks A through Z, Pitampura is home to thousands of middle-class and upper-middle-class families who invest in quality furniture as a central part of their domestic life. The family drawing room sofa — often a large 3+2 set or an L-shaped sectional — is used heavily and eventually shows wear through sagging cushions, broken springs, torn fabric, or loosened joints. Our sofa repair service in Pitampura is designed for exactly these situations, offering professional on-site repair starting from just ₹899.",
    "Our Pitampura sofa repair team handles every type of upholstery work: cushion foam replacement and refilling, full fabric reupholstery, spring diagnosis and replacement, structural frame reinforcement, leather and rexine surface restoration, and custom stitching for torn seams or frayed armrests. We work with all sofa formats — traditional 3+2 sets, modern L-shaped units, sofa-cum-beds, recliner sofas, and modular sectionals. Spring repair starts at ₹1,500 for a single spring and rises to ₹3,500 for a comprehensive overhaul of the spring system on a large sofa.",
    "Beyond Pitampura's blocks, our service extends throughout Shalimar Bagh, Saraswati Vihar, Rani Bagh, Shakurpur, Tri Nagar, Kohat Enclave, and Model Town Extension. The Wazirpur District Centre and North Ex Mall corridors are well within our reach. Whether you live near the Pitampura TV Tower, the World Trade Centre complex, or in the residential lanes behind Netaji Subhash Place metro station, our team arrives fully equipped to complete your sofa repair in a single doorstep visit.",
  ],
  whyChoose: [
    {
      title: "Covers Every Pitampura Block A Through Z",
      description:
        "Our technicians know Pitampura's extensive block layout intimately — from older sections near the iconic TV Tower to newer constructions at the colony's perimeter. No block requires extra waiting time or travel charges.",
    },
    {
      title: "Affordable Starting Price of ₹899",
      description:
        "Pitampura's value-conscious families access professional sofa repair from ₹899 for basic stitching and minor foam work, with full reupholstery and spring repairs quoted transparently before any work begins.",
    },
    {
      title: "Spring and Frame Repair Specialists",
      description:
        "Heavily used family sofas in Pitampura frequently suffer spring fatigue and frame stress. Our technicians diagnose and repair coil and sinuous spring assemblies, webbing systems, and wooden or metal frame joints on-site.",
    },
    {
      title: "Same-Day Service Most Weekdays",
      description:
        "We maintain dedicated same-day slots for Pitampura, Shalimar Bagh, and Kohat Enclave. Book before 11 AM for the highest probability of a same-day visit for cushion, foam, and stitching repairs.",
    },
    {
      title: "Wide Coverage Across North-West Delhi",
      description:
        "From Rani Bagh and Tri Nagar to Model Town Extension and Shakurpur, our service net covers the entire North-West Delhi corridor around Pitampura with no extra travel charges.",
    },
    {
      title: "Family-Friendly Flexible Scheduling",
      description:
        "We offer early-morning, daytime, and evening slots including weekends so repairs happen without disrupting household routines in Pitampura's busy joint-family homes.",
    },
  ],
  process: [
    {
      step: "Book via Form or WhatsApp",
      description:
        "Share your Pitampura block address, a photo of the sofa issue, and your preferred time slot. We confirm availability and send the technician's ETA within minutes of your request.",
    },
    {
      step: "In-Home Diagnosis and Quote",
      description:
        "The technician examines cushions, springs, fabric, and frame thoroughly, then provides an itemised written estimate. You decide which repairs to proceed with — no pressure and no obligation.",
    },
    {
      step: "On-Site Repair in Your Home",
      description:
        "Work begins immediately upon approval. Foam replacements, spring repairs, and re-stitching are completed inside your home within 2–4 hours depending on the scope of work required.",
    },
    {
      step: "Quality Assurance and Warranty Card",
      description:
        "The technician tests all repaired components, vacuums any residual material from the work area, and issues a 90-day warranty card before leaving. Your sofa is good to use immediately.",
    },
  ],
  benefits: [
    "Coverage across all Pitampura blocks A through Z",
    "Starting price of ₹899 — accessible to all budgets",
    "Specialist spring and frame repair on-site",
    "Same-day service available most weekdays",
    "Free in-home inspection with written, itemised quote",
    "Covers Shalimar Bagh, Rani Bagh, Tri Nagar & Kohat Enclave",
    "Fabric and rexine reupholstery completed in a single visit",
    "Cushion foam replacement with multiple density options",
    "No transportation or sofa dismantling required",
    "90-day warranty on all completed repair work",
    "Verified, uniformed, background-checked technicians",
    "Weekend and evening slots for working families",
  ],
  contentSections: [
    {
      heading: "Sofa Repair for Pitampura's Diverse Housing and Furniture Needs",
      body: [
        "Pitampura's blocks range from ground-floor MIG flats with compact drawing rooms to three-storey independent houses with expansive living areas where large sofa sets are the centrepiece of daily family life. This variety means we encounter everything from small two-seater sofas to sprawling five-piece sets, from budget rexine couches to premium fabric sectionals purchased from major Delhi furniture showrooms. Our service vehicle is stocked with the most common foam grades, spring types, and fabric swatches to handle this full range without requiring a follow-up visit in most cases.",
        "The colony's age means many sofas have served families for 10–15 years and show the inevitable effects of continuous use. Sagging seat cushions, popped armrest stitching, and fatigued springs are the most common complaints we address in Pitampura. Rather than encouraging residents to replace an otherwise structurally sound sofa, we focus on targeted repairs that extend the furniture's life by another decade — typically costing ₹5,000–₹12,000 versus ₹25,000–₹45,000 for an equivalent new sofa from a reputable brand.",
      ],
    },
    {
      heading: "Spring Repair and Structural Work in North-West Delhi Homes",
      body: [
        "Spring-related issues are particularly common in Pitampura's older multi-seater sofas. Over years of use, coil springs can break, lose tension, or shift out of their tied positions, creating uncomfortable dips and uneven seating surfaces. Sinuous (S-spring) systems in more modern sofas can stretch and snap, causing sections to bottom out. Our technicians are trained to diagnose both spring types, source replacements from our stock, and re-tie or re-clip them to original manufacturer specifications — restoring the firm, even feel that the sofa had when new.",
        "Frame repairs are the next most requested structural service across Pitampura. Wooden joints loosen over time, especially in homes where the sofa is frequently moved for cleaning, guests, or religious gatherings. Metal connectors in modular sofas can crack or bend under repeated load. We carry wood adhesive, corner braces, and basic metalworking tools to address these issues on-site. In cases where a leg or arm element has broken completely, we can fabricate a replacement using salvaged or new timber matched to the original finish and stain.",
      ],
    },
    {
      heading: "Serving Shalimar Bagh, Kohat Enclave, and the NSP Corridor",
      body: [
        "Our Pitampura service extends naturally into the neighbouring areas of Shalimar Bagh, Saraswati Vihar, Kohat Enclave, and the commercial-residential mix near Netaji Subhash Place metro station. Shalimar Bagh's planned blocks and Kohat Enclave's apartment complexes are on our regular daily route. Residents here benefit from the same ₹899 starting price, same-day availability, and 90-day warranty terms as customers within Pitampura's core blocks. No surcharges are applied for these nearby areas.",
        "Tri Nagar, Shakurpur, and Model Town Extension add further depth to our North-West Delhi coverage. These densely populated areas have a high concentration of joint-family homes where large sofa sets play a central social role. We understand the importance of a well-maintained sofa in such households and schedule repairs quickly to minimise disruption. Most customers in these areas receive a confirmed slot within 24 hours and a completed repair within the same visit.",
      ],
    },
    {
      heading: "Repair or Replace? Helping Pitampura Families Make the Right Call",
      body: [
        "Pitampura residents frequently ask whether repair or replacement makes better economic sense. Our guidance is straightforward: if the sofa's frame is structurally sound, the cushion core foam still has volume, and the overall form is intact, professional repair almost always delivers better value. A ₹30,000 sofa restored for ₹7,000–₹12,000 comes back looking and performing like new. The environmental benefit of extending furniture life is an added advantage — less landfill waste and fewer resources consumed compared to manufacturing a replacement piece.",
        "To maximise value, we recommend addressing all identified repair needs in a single visit. If your sofa needs new foam and has a slightly loose frame joint, combining both is cheaper than two separate calls and reduces total time at home. Our technicians are encouraged to identify all addressable issues during the initial inspection so you can decide what to fix immediately and what to monitor. This proactive approach helps Pitampura families plan their furniture budget without unpleasant surprises.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you offer sofa repair at home in Pitampura?",
      answer:
        "Yes, we provide complete doorstep sofa repair across all Pitampura blocks A through Z. Our technician visits with all tools and materials and completes most repairs in a single on-site session — no workshop trip needed.",
    },
    {
      question: "What is the starting price for sofa repair in Pitampura?",
      answer:
        "Basic sofa repair in Pitampura starts at ₹899 for stitching and minor foam work. Spring replacement begins at ₹1,500, cushion foam refilling at ₹999, and full fabric reupholstery from ₹3,500 per seat. All prices are confirmed in writing first.",
    },
    {
      question: "Is same-day sofa repair available in Pitampura?",
      answer:
        "Yes, same-day service is available for cushion foam replacements, spring checks, and basic stitching repairs in Pitampura and Shalimar Bagh. Book before 11 AM for the best same-day availability.",
    },
    {
      question: "Do you serve Shalimar Bagh and Kohat Enclave?",
      answer:
        "Absolutely. Shalimar Bagh, Kohat Enclave, Saraswati Vihar, Rani Bagh, Tri Nagar, and Shakurpur are all part of our regular service zone from our Pitampura base.",
    },
    {
      question: "Can you repair broken springs in a sofa in Pitampura?",
      answer:
        "Yes, spring repair is one of our most frequently requested services in Pitampura. We handle both coil and sinuous spring systems, sourcing replacements from our stock and restoring the sofa's original seating comfort on the same visit.",
    },
    {
      question: "How long does a sofa repair take in Pitampura?",
      answer:
        "Cushion foam and basic stitching jobs take 1–3 hours. Full reupholstery of a three-seater typically takes 4–6 hours. Spring and frame repairs vary but are generally completed within a single visit.",
    },
    {
      question: "Do you repair L-shaped and sectional sofas in Pitampura?",
      answer:
        "Yes, we repair all sofa configurations — L-shaped, sectional, traditional 3+2 sets, sofa-cum-beds, and modular pieces. We can work on individual sections independently if only part of the unit requires attention.",
    },
    {
      question: "Is there a warranty on repairs done in Pitampura?",
      answer:
        "Yes, a 90-day workmanship warranty covers all repairs in Pitampura and the surrounding areas. Any problem arising from our work within this period is rectified at no additional charge.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-pitampura"),
    { label: "Sofa Repair Shalimar Bagh", href: "/sofa-repair-shalimar-bagh" },
    { label: "Sofa Repair Model Town", href: "/sofa-repair-model-town" },
    { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
    { label: "Sofa Repair North Delhi", href: "/sofa-repair-north-delhi" },
    { label: "Furniture Repair Pitampura", href: "/furniture-repair-pitampura" },
  ],
  keywords: [
    "sofa repair Pitampura",
    "sofa repair Shalimar Bagh",
    "sofa repair Kohat Enclave",
    "sofa repair North West Delhi",
    "spring repair sofa Pitampura",
    "sofa cushion repair Pitampura",
    "sofa reupholstery Pitampura",
    "sofa repair Rani Bagh",
    "sofa repair Tri Nagar",
    "sofa repair at home Pitampura",
  ],
};

// ─── Page 3: Vasant Vihar ────────────────────────────────────────────────────

export const sofaRepairVasantVihar: SeoPageData = {
  slug: "sofa-repair-vasant-vihar",
  title: "Sofa Repair in Vasant Vihar Delhi | Premium Service",
  metaDescription:
    "Premium sofa repair in Vasant Vihar Delhi. Specialist in imported & leather sofas. Covering Vasant Enclave, Munirka & Shankar Vihar. From ₹1,299. Book now.",
  h1: "Sofa Repair in Vasant Vihar, Delhi",
  heroSubtitle:
    "Specialist sofa repair and luxury upholstery restoration for Vasant Vihar's discerning residents — premium fabric, imported leather, and designer sofa expertise across blocks A–F, Vasant Enclave, Munirka and Shankar Vihar.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Luxury Service at Your Vasant Vihar Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a premium imported leather sofa in a luxury Vasant Vihar Delhi home — FurniRevive",
    caption: "Sofa Repair in Vasant Vihar Delhi | South West Delhi | Premium leather & designer sofa service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Premium doorstep sofa repair in Vasant Vihar covers all blocks A through F, Vasant Enclave, Munirka, Shankar Vihar and Nelson Mandela Road. Specialist in imported and leather sofas, starting from ₹1,299. Leather restoration from ₹3,999. Expert service available daily.",
  intro: [
    "Vasant Vihar stands apart in Delhi's residential landscape as a neighbourhood defined by diplomatic missions, senior government officials, top corporate executives, and international school families. The cluster around the American Embassy School, DPS Vasant Vihar, and the Fortis Hospital corridor features large bungalows, ambassadorial residences, and premium apartment complexes where imported and designer furniture is standard, not exceptional. Our sofa repair service in Vasant Vihar is calibrated precisely to this standard — offering specialist care for high-end sofas that ordinary repair shops are not equipped to handle.",
    "We provide premium sofa repair and restoration across all Vasant Vihar blocks, with particular expertise in imported Italian and Scandinavian sofas, genuine leather upholstery across multiple grades, designer fabric pieces from international collections, and bespoke custom-made sofas commissioned from artisan workshops. Service starts at ₹1,299 for basic repairs, with designer fabric reupholstery priced between ₹5,000 and ₹15,000 per seat, and leather restoration ranging from ₹3,999 for conditioning treatments to ₹20,000 per seat for a complete hide replacement on high-grade leather.",
    "Our service area covers all Vasant Vihar blocks A through F, Vasant Enclave's apartment towers, Masoodpur, Munirka's growing professional community, Nelson Mandela Road, Shankar Vihar, and the Army Hospital complex area. With JNU campus just minutes away and the Munirka metro station providing excellent connectivity, our technicians reach most Vasant Vihar addresses within a reliable two-hour window. The Priya Complex and Basant Lok retail catchment areas anchor our South-West Delhi coverage, extending our reach to residents across this prestigious corridor.",
  ],
  whyChoose: [
    {
      title: "Specialist in Imported and Designer Sofas",
      description:
        "Many Vasant Vihar homes contain furniture purchased abroad or from Delhi's premium showrooms. Our technicians are trained in Italian leather, Scandinavian wood-frame systems, and custom-made pieces requiring the kind of specialist knowledge general repair shops simply cannot provide.",
    },
    {
      title: "Premium Material Matching",
      description:
        "We source colour-matched leather hides, imported fabric swatches, and high-density European-grade foam to ensure repaired sections integrate seamlessly. We never substitute inferior materials on luxury furniture.",
    },
    {
      title: "Leather Restoration from ₹3,999",
      description:
        "From conditioning and crack-filling on a beloved leather sofa to a complete re-hide on a prized piece, our leather specialist service covers the full spectrum — priced from ₹3,999 to ₹20,000 per seat.",
    },
    {
      title: "Discreet, Professional Service for Diplomatic Residences",
      description:
        "All technicians are uniformed, background-verified, and briefed on respectful, professional conduct within high-security and diplomatic residential buildings. Confidentiality and discretion are core to our service standard.",
    },
    {
      title: "White-Glove In-Home Experience",
      description:
        "We treat your home with the respect it deserves — shoe covers at entry, protective sheets over surrounding furniture and flooring, and a thorough cleanup after every job. No residue, no mess, no damage.",
    },
    {
      title: "Extended Warranty on Premium Restoration Work",
      description:
        "Designer and leather repairs carry a standard 90-day workmanship warranty. Full leather replacement projects receive a 6-month warranty, reflecting our confidence in the premium-grade materials used.",
    },
  ],
  process: [
    {
      step: "Initial Consultation",
      description:
        "Contact us by WhatsApp or phone with photos of your sofa. For complex leather or designer-fabric pieces, we offer a brief pre-visit consultation to assess feasibility and provide a preliminary price range before committing to an in-home appointment.",
    },
    {
      step: "Detailed In-Home Assessment",
      description:
        "A senior technician visits your Vasant Vihar home, examines the sofa in detail, presents imported swatches and leather samples, and provides a comprehensive itemised written quote that leaves nothing to interpretation.",
    },
    {
      step: "Precision On-Site Repair",
      description:
        "Premium repairs receive additional time and careful handling. Protective covers are laid down before work begins. We do not rush complex jobs, maintaining the quality standard expected in Vasant Vihar homes.",
    },
    {
      step: "Presentation, Care Guide, and Warranty",
      description:
        "On completion, we walk you through all work performed and provide a warranty certificate. For significant leather restoration projects, we also supply a written care guide to extend the treatment's life.",
    },
  ],
  benefits: [
    "Specialist in imported, designer, and bespoke sofa repair",
    "Premium leather restoration from ₹3,999 per seat",
    "Designer fabric reupholstery from ₹5,000 per seat",
    "White-glove service with protective floor and furniture covers",
    "Imported material sourcing for seamless, invisible repairs",
    "Discreet, verified service for diplomatic and executive residences",
    "Full coverage of Vasant Vihar blocks A–F and Vasant Enclave",
    "Serving Munirka, Shankar Vihar, and Nelson Mandela Road",
    "Senior technician assigned for complex leather and bespoke pieces",
    "6-month warranty on full leather replacement projects",
    "Care guide provided after major leather restoration work",
    "Flexible weekday and weekend slots for executive-level schedules",
  ],
  contentSections: [
    {
      heading: "Premium Sofa Repair for Vasant Vihar's Distinctive Residences",
      body: [
        "The homes of Vasant Vihar are as varied as they are impressive — from tree-lined bungalow streets in Block C and Block D to contemporary high-rise apartments near Basant Lok and the Priya Complex. What unites them is a consistent standard of furnishing quality. Sofas in Vasant Vihar households frequently include internationally branded pieces, custom-commissioned upholstery, and antique or heirloom furniture that cannot simply be replaced. Our service exists precisely for these situations — bringing specialist restoration to your door rather than risking transit damage to an irreplaceable piece.",
        "Our technicians have in-depth experience with the foam specifications of premium European sofa brands, the distinctive stitch patterns of luxury Indian craftsmen, and the distinct material properties of full-grain, top-grain, and corrected-grain leather varieties. This knowledge enables repairs that are not merely functional but aesthetically precise — matching the original appearance with a level of care that neighbourhood repair shops cannot replicate. Every repair is treated as a restoration project, not a patch job.",
      ],
    },
    {
      heading: "Imported Leather Specialist Serving the Diplomatic Enclave",
      body: [
        "Vasant Vihar's proximity to multiple embassies and the American Embassy School means a significant share of residents are expatriates and international families who have sourced high-quality furniture from abroad or from Delhi's premium import dealers. Italian leather sofas, Scandinavian-design fabric couches, and American-brand recliners are regularly encountered in our work here. Repairing these pieces requires material matching that goes far beyond what standard domestic fabric and foam suppliers carry.",
        "We maintain a specialist catalogue of imported full-grain leather hides, European-grade high-density foam, and designer fabric swatches to meet these requirements. Where an exact match is unavailable, we present the closest physical swatches for the homeowner's approval before any work begins. This consultative approach ensures the repair outcome aligns fully with expectations and that there are no visual discrepancies when the work is completed. Vasant Continental and Basant Lok area residents particularly benefit from this level of material diligence.",
      ],
    },
    {
      heading: "Vasant Enclave, Munirka, and Shankar Vihar Coverage",
      body: [
        "Beyond the main Vasant Vihar blocks, our service extends naturally into Vasant Enclave's modern apartment complexes, the vibrant residential fabric of Munirka, the military and civilian housing around Shankar Vihar, and the busy Nelson Mandela Road corridor. Munirka hosts a growing population of young professionals and JNU-adjacent academics who own quality mid-range and premium sofas and value the convenience of expert doorstep repair. Masoodpur's urban village setting and the areas between Munirka and JNU also fall within our regular service net.",
        "Our technicians are equally comfortable working on a standard fabric sofa in a Munirka apartment and a premium leather sectional in a Vasant Enclave penthouse. Both receive the same thorough inspection, the same honest written quote, and the same warranty-backed workmanship. We do not apply a premium surcharge for different property types — the same high standard applies to every repair across the Vasant Vihar service zone.",
      ],
    },
    {
      heading: "Pricing Guide for Premium Sofa Repair in Vasant Vihar",
      body: [
        "Our pricing reflects the specialist materials and expertise required for Vasant Vihar's furniture standards. Basic repairs — minor stitching, zip replacement, and standard cushion foam refilling — start at ₹1,299. Designer fabric reupholstery ranges from ₹5,000 to ₹15,000 per seat depending on the fabric selected from our imported catalogue. Genuine leather restoration is priced from ₹3,999 for conditioning and crack repair to ₹20,000 per seat for a full premium hide replacement. Spring and structural repairs are quoted after inspection, typically ₹1,500–₹6,000.",
        "For Vasant Vihar homes with multiple pieces requiring attention — common in the area's large bungalows and fully furnished apartments — we offer package pricing that provides a per-piece discount when three or more items are repaired in the same visit. All quotes are confirmed in writing with no hidden charges or call-out fees. We encourage every new customer to request the free in-home assessment first so the final scope and cost are completely transparent before commitment.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you repair imported and designer sofas in Vasant Vihar?",
      answer:
        "Yes, we specialise in imported and designer sofa repair in Vasant Vihar. Our technicians are experienced with Italian leather, European-brand fabric sofas, and custom-made bespoke pieces. We source matching materials from our premium import catalogue to ensure seamless, invisible repairs.",
    },
    {
      question: "What is the cost of sofa repair in Vasant Vihar?",
      answer:
        "Basic repairs start at ₹1,299. Designer fabric reupholstery ranges from ₹5,000 to ₹15,000 per seat. Leather restoration starts at ₹3,999 for conditioning and surface work, and can reach ₹20,000 per seat for a full premium hide replacement.",
    },
    {
      question: "Do you offer leather sofa repair in Vasant Vihar?",
      answer:
        "Yes, leather sofa repair is a core speciality here. We provide conditioning, crack-filling, colour restoration, re-dyeing, and full leather replacement. We work with full-grain, top-grain, bonded leather, and PU leather varieties.",
    },
    {
      question: "Do you serve Vasant Enclave and Munirka?",
      answer:
        "Yes, Vasant Enclave, Munirka, Shankar Vihar, Masoodpur, and Nelson Mandela Road are all within our regular service area. We visit these locations multiple times per week and typically schedule visits within 24 hours.",
    },
    {
      question: "Is your service suitable for diplomatic or high-security residences in Vasant Vihar?",
      answer:
        "Absolutely. Our technicians are uniformed, background-verified, and trained to operate with professional discretion. We have extensive experience working within embassies, embassy-adjacent housing, and high-security residential buildings.",
    },
    {
      question: "Do you bring premium materials for Vasant Vihar repairs?",
      answer:
        "Yes. We source high-density imported foam, genuine leather hides, and designer fabrics for premium repairs. All material samples and swatches are brought to your home for approval before work begins — we never use inferior substitutes.",
    },
    {
      question: "How long does a premium leather sofa repair take in Vasant Vihar?",
      answer:
        "Minor leather conditioning and crack-filling takes 2–3 hours. Full colour restoration requires 4–5 hours. A complete leather replacement on a three-seater is typically scheduled over 6–8 hours and may require a follow-up finishing appointment.",
    },
    {
      question: "What warranty do you provide for Vasant Vihar repairs?",
      answer:
        "Standard repairs carry a 90-day workmanship warranty. Full leather replacement projects are backed by a 6-month warranty reflecting the premium-grade materials used. Any defect from our work is rectified free of charge within the warranty period.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-vasant-vihar"),
    { label: "Sofa Repair Munirka", href: "/sofa-repair-munirka" },
    { label: "Sofa Repair Vasant Enclave", href: "/sofa-repair-vasant-enclave" },
    { label: "Sofa Repair RK Puram", href: "/sofa-repair-rk-puram" },
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Sofa Repair Hauz Khas", href: "/sofa-repair-hauz-khas" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Luxury Sofa Restoration Delhi", href: "/luxury-sofa-restoration-delhi" },
  ],
  keywords: [
    "sofa repair Vasant Vihar",
    "leather sofa repair Vasant Vihar",
    "imported sofa repair Delhi",
    "premium sofa repair South West Delhi",
    "sofa repair Vasant Enclave",
    "sofa repair Munirka",
    "sofa repair Nelson Mandela Road",
    "designer fabric sofa repair Delhi",
    "sofa repair Shankar Vihar",
    "sofa repair at home Vasant Vihar",
  ],
};

// ─── Page 4: Rajouri Garden ──────────────────────────────────────────────────

export const sofaRepairRajouriGarden: SeoPageData = {
  slug: "sofa-repair-rajouri-garden",
  title: "Sofa Repair in Rajouri Garden Delhi | From ₹899",
  metaDescription:
    "Expert sofa repair in Rajouri Garden Delhi. All blocks covered near Kirti Nagar market. L-shaped, fabric & leather sofas from ₹899. Book same-day service.",
  h1: "Sofa Repair in Rajouri Garden, Delhi",
  heroSubtitle:
    "Professional sofa repair for West Delhi's most dynamic residential hub — all Rajouri Garden blocks A–P, Ramesh Nagar, Moti Nagar, and Punjabi Bagh Extension, steps from Kirti Nagar's furniture district.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Rajouri Garden Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a premium L-shaped sofa in a Rajouri Garden West Delhi home — FurniRevive",
    caption: "Sofa Repair in Rajouri Garden Delhi | West Delhi | L-shape sofa & fabric repair service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Doorstep sofa repair across all Rajouri Garden blocks A through P, Ramesh Nagar, Moti Nagar, and the Kirti Nagar area. Services start at ₹899, L-shaped sofa repair from ₹8,000, fabric change from ₹3,000 per seat. Expert team near Kirti Nagar furniture market.",
  intro: [
    "Rajouri Garden is West Delhi's most commercially and residentially vibrant neighbourhood, anchored by the Pacific Mall, a major metro interchange, and a thriving street market culture along J-Block Market and the main shopping strip. Its lettered residential blocks — A through P — house a broad demographic of established families, young professionals, and business owners who furnish their homes with care. The drawing room sofa is central to social life here, and when it develops sagging cushions, worn fabric, broken springs, or a loose frame, our doorstep sofa repair service in Rajouri Garden restores it to full function from ₹899.",
    "Our Rajouri Garden team handles every scope of sofa work: fabric reupholstery from ₹3,000 per seat, L-shaped sofa complete restoration starting at ₹8,000 for the full unit, leather and rexine repair from ₹2,500, cushion foam replacement from ₹999, spring repair from ₹1,200, and custom stitching from ₹500. Our proximity to the Kirti Nagar furniture market — one of North India's largest hubs for raw materials and furniture components — gives us fast access to a wider range of fabrics, foam grades, and hardware than services based in less central parts of the city. This translates to more options for you and competitive pricing.",
    "Our service zone extends naturally from Rajouri Garden into Ramesh Nagar, Moti Nagar, New Rajinder Nagar, Punjabi Bagh Extension, and Kirti Nagar itself. Customers near Pacific Mall, the busy Rajouri Garden metro station commercial cluster, and the residential lanes of J-Block and H-Block are in our core zone — our team is familiar with the area's layout and typically arrives within a reliable two-hour window. We operate six days a week, with Sunday slots reserved for families who prefer to be home for the full duration of the repair.",
  ],
  whyChoose: [
    {
      title: "Near Kirti Nagar — Unmatched Material Access",
      description:
        "Our base near Kirti Nagar furniture market provides fast access to raw materials, replacement fabrics, foam grades, springs, and hardware. This means faster sourcing, more choices, and competitive pricing for every Rajouri Garden customer.",
    },
    {
      title: "L-Shaped and Large Sofa Specialists",
      description:
        "L-shaped sectionals are enormously popular in Rajouri Garden's spacious drawing rooms. We specialise in full restoration of these large units — from cushion refilling to complete reupholstery — with pricing starting at ₹8,000 for the complete piece.",
    },
    {
      title: "All Blocks A Through P Covered",
      description:
        "Whether you live in J-Block's busy commercial lanes, the quieter A-Block and B-Block streets, or the outer P-Block zone toward the Rajouri Garden Extension, our technicians know every address and route efficiently.",
    },
    {
      title: "Competitive Pricing from ₹899",
      description:
        "Starting prices are kept accessible for Rajouri Garden's value-conscious households: ₹899 for basic stitching, ₹999 for cushion foam, ₹3,000 per seat for fabric reupholstery. All quotes are in writing before work begins.",
    },
    {
      title: "Same-Day and Next-Day Availability",
      description:
        "Dedicated booking slots are maintained for Rajouri Garden, Ramesh Nagar, and Moti Nagar. Same-day service is available for cushion and stitching jobs; next-day for more involved reupholstery and spring work.",
    },
    {
      title: "Trusted Across the Pacific Mall Corridor",
      description:
        "Years of completed repairs in the residential zones near Pacific Mall and the metro hub have built strong word-of-mouth across Rajouri Garden. Our repeat-customer rate in this area is consistently high.",
    },
  ],
  process: [
    {
      step: "Book Online or via WhatsApp",
      description:
        "Send your Rajouri Garden block address, a photo of the sofa issue, and preferred timing. We confirm your slot and assign a technician with knowledge of the West Delhi area.",
    },
    {
      step: "Free On-Site Inspection and Quote",
      description:
        "The technician inspects your sofa and provides an itemised written quote. For L-shaped sofas, each section is quoted individually so you can prioritise repairs if needed.",
    },
    {
      step: "Skilled On-Site Repair",
      description:
        "With Kirti Nagar suppliers minutes away, specific materials can be sourced same-day when needed. Most Rajouri Garden repairs are completed within a single visit.",
    },
    {
      step: "Review, Cleanup, and Warranty Card",
      description:
        "The technician verifies every seam, cushion, and frame joint before finishing. The work area is cleaned and a 90-day warranty card is handed over. Your sofa is ready to use immediately.",
    },
  ],
  benefits: [
    "Coverage across all Rajouri Garden blocks A through P",
    "Proximity to Kirti Nagar for superior material sourcing",
    "L-shaped sofa repair specialisation from ₹8,000",
    "Fabric reupholstery from ₹3,000 per seat",
    "Accessible starting price of ₹899",
    "Covers Ramesh Nagar, Moti Nagar & Punjabi Bagh Extension",
    "Same-day service for cushion and stitching repairs",
    "Free in-home inspection with written itemised quote",
    "90-day workmanship warranty on all repairs",
    "Leather and rexine surface repair available on-site",
    "Sunday slots available for family convenience",
    "Verified, trained technicians with West Delhi experience",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Across All Rajouri Garden Blocks",
      body: [
        "Rajouri Garden's lettered blocks each have a distinct character. J-Block hosts the area's busiest commercial activity, while A-Block and B-Block are quieter residential enclaves. H-Block and the blocks toward Rajouri Garden Extension tend to have larger plots with spacious drawing rooms that accommodate big sofa configurations. Near Pacific Mall and the metro station, high-rise apartment buildings have created a newer demographic of urban flat-dwellers with modular furniture needs. Our technicians are well-acquainted with all these residential typologies and navigate the area's busy lanes efficiently regardless of your block.",
        "Large L-shaped sofas account for a disproportionately high share of repair requests we receive from Rajouri Garden. These units — the centrepiece of many West Delhi drawing rooms — typically cost ₹25,000–₹70,000 when purchased new, making professional repair far more economical than replacement. A full restoration covering new cushion foam across all sections, comprehensive reupholstery with a fabric of your choice, and frame tightening typically costs ₹8,000–₹22,000 depending on fabric grade and the extent of work. We approach L-shaped repairs strategically — assessing which sections show the most wear first so customers can prioritise their spend.",
      ],
    },
    {
      heading: "The Kirti Nagar Advantage for Rajouri Garden Customers",
      body: [
        "Kirti Nagar is one of North India's most significant furniture and interior design markets — a sprawling district where raw materials, upholstery supplies, replacement hardware, and finished furniture change hands in large volumes. Our proximity to this ecosystem gives Rajouri Garden customers a concrete advantage: we can source matching fabric bolts, specific foam densities, metal connectors, replacement legs, and decorative trims quickly and at supply-chain prices rather than retail mark-up. If you want an unusual fabric shade or a specific foam firmness, we can typically fulfil the request within hours.",
        "This access to Kirti Nagar's material supply chain also directly reduces our service prices. Buying in volume and proximity to suppliers allows us to keep our pricing among the most competitive in West Delhi. Customers in Rajouri Garden, Ramesh Nagar, and Moti Nagar benefit from this geographical advantage every time they book a repair — whether the job is a ₹999 cushion refill or a ₹20,000 full-sofa transformation.",
      ],
    },
    {
      heading: "Ramesh Nagar, Moti Nagar, and New Rajinder Nagar Coverage",
      body: [
        "Ramesh Nagar is a natural extension of our Rajouri Garden coverage — a densely populated residential area with a strong base of family homes generating consistent sofa repair demand. Our technicians visit Ramesh Nagar multiple times per week and are familiar with building layouts that can complicate navigation. Moti Nagar's industrial-residential mix includes numerous long-standing family properties where older wood-frame sofas require re-tufting, structural attention, and periodic reupholstery. We schedule visits here with the same reliability and pricing as core Rajouri Garden blocks.",
        "New Rajinder Nagar extends our westward coverage with its mix of older and newer housing and a well-established residential community. Punjabi Bagh Extension rounds out our service map with newer constructions and premium apartment developments where contemporary sectional sofas in designer fabrics are popular. All customers across this West Delhi coverage area receive identical pricing transparency, the same 90-day warranty terms, and the same quality standard. No area is treated as secondary.",
      ],
    },
    {
      heading: "Fabric Change and Full Reupholstery in Rajouri Garden",
      body: [
        "Fabric reupholstery — replacing worn or outdated upholstery with a fresh fabric of the customer's choosing — is one of our most popular services in Rajouri Garden. Prices start at ₹3,000 per seat for standard cotton and polyester blends, rising to ₹12,000 per seat for premium velvet, woven linen, or imported microfibre options. This service is popular not only when fabric is damaged but also when a family simply wants to refresh the look of their living room without the expense of buying a new sofa.",
        "Our technicians bring a comprehensive fabric catalogue to every visit — dozens of colours, weave types, and textures represented in physical swatches so you can feel the material and see the colour accurately before committing. For Rajouri Garden customers who bought sofas from the local J-Block Market or Pacific Mall furniture stores, we can often source a very close match to the original fabric or guide you toward a complementary upgrade. The combination of competitive pricing and material access from nearby Kirti Nagar makes fabric change one of the best-value services we offer in West Delhi.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you offer sofa repair at home in Rajouri Garden?",
      answer:
        "Yes, we provide complete doorstep sofa repair across all Rajouri Garden blocks A through P, as well as Ramesh Nagar, Moti Nagar, Kirti Nagar, and Punjabi Bagh Extension. Our technician arrives with all tools and materials needed to complete most repairs in one visit.",
    },
    {
      question: "What is the cost of sofa repair in Rajouri Garden?",
      answer:
        "Basic repairs start at ₹899 for stitching. Cushion foam replacement is from ₹999, fabric change from ₹3,000 per seat, and L-shaped sofa full restoration starts at ₹8,000. All quotes are confirmed in writing after a free in-home inspection.",
    },
    {
      question: "Do you specialise in L-shaped sofa repair in Rajouri Garden?",
      answer:
        "Yes, L-shaped sofa repair is a core speciality of our Rajouri Garden service. We handle full reupholstery, cushion replacement, and frame repair across all sections of L-shaped units, with complete restoration pricing starting at ₹8,000.",
    },
    {
      question: "Is same-day sofa repair available in Rajouri Garden?",
      answer:
        "Same-day service is available for cushion foam replacement, stitching repairs, and rexine patching in Rajouri Garden and Ramesh Nagar. Book before noon for the best same-day availability.",
    },
    {
      question: "Do you serve Ramesh Nagar, Moti Nagar, and Punjabi Bagh Extension?",
      answer:
        "Yes, all three areas are within our regular service zone from Rajouri Garden. We visit Ramesh Nagar and Moti Nagar multiple times per week and can typically schedule an appointment within 24 hours of your request.",
    },
    {
      question: "How does being near Kirti Nagar benefit me as a customer?",
      answer:
        "Kirti Nagar's furniture market gives us fast access to a wide range of fabrics, foam grades, springs, and hardware at supply-chain prices. This means more material options, faster sourcing of unusual items, and competitive pricing that we pass directly to customers.",
    },
    {
      question: "Do you repair leather and rexine sofas near Pacific Mall?",
      answer:
        "Yes, leather and rexine sofa repair is available across all of Rajouri Garden, including areas near Pacific Mall and the metro station hub. Leather restoration starts at ₹2,500 and rexine repair from ₹1,500.",
    },
    {
      question: "Is there a warranty on sofa repairs done in Rajouri Garden?",
      answer:
        "Yes, every repair in Rajouri Garden and surrounding areas carries a 90-day workmanship warranty on both materials and labour. Any issue arising from our work within this period is fixed at no additional charge.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-rajouri-garden"),
    { label: "Sofa Repair Kirti Nagar", href: "/sofa-repair-kirti-nagar" },
    { label: "Sofa Repair Punjabi Bagh", href: "/sofa-repair-punjabi-bagh" },
    { label: "Sofa Repair Ramesh Nagar", href: "/sofa-repair-ramesh-nagar" },
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
    { label: "Sofa Repair Paschim Vihar", href: "/sofa-repair-paschim-vihar" },
    { label: "Sofa Repair Vikaspuri", href: "/sofa-repair-vikaspuri" },
    { label: "Furniture Repair Rajouri Garden", href: "/furniture-repair-rajouri-garden" },
  ],
  keywords: [
    "sofa repair Rajouri Garden",
    "L-shaped sofa repair Rajouri Garden",
    "sofa repair near Kirti Nagar",
    "sofa repair West Delhi",
    "sofa repair Ramesh Nagar",
    "sofa repair Moti Nagar",
    "sofa fabric change Rajouri Garden",
    "sofa repair Punjabi Bagh Extension",
    "sofa repair Pacific Mall area",
    "sofa repair at home Rajouri Garden",
  ],
};

// ─── Aggregate export ────────────────────────────────────────────────────────

export const DELHI_SOFA_PAGES_2: SeoPageData[] = [
  sofaRepairMalviyaNagar,
  sofaRepairPitampura,
  sofaRepairVasantVihar,
  sofaRepairRajouriGarden,
];
