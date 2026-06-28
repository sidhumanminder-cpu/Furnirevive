import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
  { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 1 — Sofa Repair Noida Sector 62
// ─────────────────────────────────────────────────────────────────────────────

export const sofaRepairNoidaSector62: SeoPageData = {
  slug: "sofa-repair-noida-sector-62",
  title: "Sofa Repair Noida Sector 62 | ₹899 Same-Day Home Service | FurniRevive",
  metaDescription:
    "Need sofa repair near me in Noida Sector 62? FurniRevive offers same-day doorstep service from ₹899. Serving ATS Village, Paramount Symphony & Mahagun Mezzaria. 6-month warranty. Call now.",
  h1: "Sofa Repair Near Me in Noida Sector 62 – Same-Day Doorstep Service",
  heroSubtitle:
    "Trusted sofa repair for ATS Village, Paramount Symphony, Mahagun Mezzaria and all Sector 62 societies. Fast turnaround tailored for busy working professionals near HCL Technologies and Infosys Noida.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Noida Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Noida home — FurniRevive — Noida (Sector 62)",
    caption: "Sofa Repair in Noida (Sector 62) | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Noida Sector 62 costs ₹899 to ₹4,500 depending on repair type, sofa size and upholstery material. FurniRevive provides same-day doorstep sofa repair across Sector 62 societies including ATS Village, Paramount Symphony and nearby IT park areas.",
  intro: [
    "Noida Sector 62 is the nerve centre of the NCR's IT corridor, home to thousands of tech professionals employed at companies like HCL Technologies, Infosys Noida and NIIT University. The sector's landmark high-rise societies — ATS Village, Paramount Symphony, Mahagun Mezzaria, Gardenia Gateway and Amrapali Silicon City — are filled with modern apartments where premium sofas double as the daily anchor of home life. When these sofas suffer sagging cushions, torn upholstery or structural damage, finding a reliable repair service that fits around a demanding work schedule becomes a genuine challenge.",
    "FurniRevive offers professional doorstep sofa repair throughout Noida Sector 62, designed around the lifestyle of working professionals and young households. Whether you own a fabric L-shaped sectional in Paramount Symphony or a leather three-seater in ATS Village, our certified technicians arrive at a time that suits you — including evenings and weekends. We extend our coverage into Sector 61, Sector 63, Sector 71 and the Noida Golf Course area around Sector 52, ensuring the entire IT corridor is served.",
    "From sagging foam and broken sofa legs to torn upholstery and worn recliner mechanisms, our technicians carry high-grade materials and specialist tools to complete most repairs in a single visit. We source premium high-resilience foam, colour-matched fabric swatches and durable replacement hardware so your sofa looks and functions as good as new. Pricing starts at ₹899 with no hidden charges, and a 6-month workmanship warranty is included with every repair.",
  ],
  whyChoose: [
    {
      title: "Evening and Weekend Appointments",
      description:
        "IT professionals in Sector 62 keep demanding schedules. Our technicians are available on weekends and after office hours so you never have to take a day off work to have your sofa repaired.",
    },
    {
      title: "Transparent Fixed Pricing",
      description:
        "Sofa repairs start from ₹899. Foam replacement is priced at ₹999–₹2,500 and full reupholstery ranges from ₹3,000–₹14,000. Every quote is provided in writing before work begins — no surprises on the final invoice.",
    },
    {
      title: "Same-Day Slots Available",
      description:
        "For urgent repairs, same-day service is available across Sector 62 and adjoining sectors like 61 and 63. Book online before 11 AM to secure an afternoon appointment on the same day.",
    },
    {
      title: "In-Apartment Repairs — No Logistics Required",
      description:
        "Our technicians bring the workshop to your door. All sofa repairs including full reupholstery and foam replacement are performed inside your apartment, so you never need to arrange transport for heavy furniture.",
    },
    {
      title: "High-Rise Society Experience",
      description:
        "We regularly work in gated high-rise societies like Mahagun Mezzaria, Gardenia Gateway and Amrapali Silicon City. Our teams understand society entry procedures, lift dimension constraints and timing restrictions.",
    },
    {
      title: "6-Month Workmanship Warranty",
      description:
        "Every sofa repair is backed by a 6-month warranty on both labour and materials. If the same repair fails within the warranty period, we return and fix it at no additional cost — no questions asked.",
    },
  ],
  process: [
    {
      step: "Book Your Slot Online",
      description:
        "Visit our booking page, call our team or message via WhatsApp to choose a convenient time. Evening and weekend slots are specifically available to accommodate Sector 62's working professionals.",
    },
    {
      step: "Technician Arrives at Your Society",
      description:
        "Our certified sofa repair technician arrives at your ATS Village, Paramount Symphony or other Sector 62 society at the agreed time, carrying all necessary tools and a comprehensive stock of replacement materials.",
    },
    {
      step: "Inspection and Transparent Quote",
      description:
        "The technician inspects your sofa thoroughly — checking foam condition, frame integrity, upholstery wear and mechanism function — then provides a clear itemised quote. Work only proceeds after your approval.",
    },
    {
      step: "Repair, Quality Check and Warranty Handover",
      description:
        "Repairs are completed on-site, typically within 2–4 hours for standard jobs. A final quality check is carried out before the technician hands you the service invoice and 6-month warranty card.",
    },
  ],
  benefits: [
    "Doorstep service at your Sector 62 apartment",
    "Same-day booking available for urgent repairs",
    "Affordable pricing from ₹899 for sofa repairs",
    "Trained and background-verified technicians",
    "Evening and weekend slots for working professionals",
    "Premium-grade foam and fabric materials used",
    "Most repairs completed in a single visit",
    "6-month warranty on all workmanship",
    "No transportation or logistics required",
    "Covers Sector 62 and nearby Sectors 61, 63 and 71",
    "Transparent quotes confirmed before work begins",
    "Colour-matched fabric and upholstery options available",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services Available in Noida Sector 62",
      body: [
        "Living in the heart of Noida's IT corridor means your home must be a genuinely comfortable space after long working hours. Our Sector 62 sofa repair services cover everything from basic leg replacement and cushion refilling to full reupholstery in fabric, velvet, rexine or genuine leather. We work on all major sofa types including L-shaped sectionals, three-seater fabric sofas, recliner sofas and sofa-cum-beds that are common in the modern apartments of Mahagun Mezzaria and Gardenia Gateway.",
        "For foam replacement we stock high-resilience foam in densities ranging from 32D to 45D, so your sofa regains its original firmness and support. Reupholstery services include colour consultations so you can refresh your interior while restoring your sofa. We also repair sofa frames, fix broken recliner mechanisms and re-stitch torn seams — all at your Sector 62 doorstep without the need to move the piece.",
      ],
    },
    {
      heading: "Pricing Guide for Sofa Repair in Sector 62",
      body: [
        "Our pricing is designed to be fair and fully transparent for Sector 62 residents. Basic repairs such as leg replacement or cushion cover stitching start from ₹899. Foam replacement for individual cushions ranges from ₹999 to ₹2,500 per seat depending on foam grade and quantity required. Full sofa reupholstery including fabric, labour and accessories is priced between ₹3,000 and ₹14,000 depending on sofa size, upholstery material selected and number of seats.",
        "Leather sofa repairs and conditioning treatments are quoted separately based on the extent of damage and leather quality. Combo discounts are available when you book sofa repair alongside any other furniture service such as bed repair or dining table polishing. All prices are confirmed in a written quote before work commences, ensuring there are no unexpected charges when the job is complete.",
      ],
    },
    {
      heading: "Areas We Serve Near Noida Sector 62",
      body: [
        "FurniRevive's Sector 62 team operates across the entire IT corridor of Noida. We regularly service residents in Sector 61, Sector 63, Sector 71 and the Noida Golf Course area near Sector 52. Our technicians are also available throughout Electronic City and the broader Noida Electronic City Metro catchment area, ensuring fast response times across the zone.",
        "Whether you live in a compact studio near the Noida Sector 62 Metro station or in a spacious apartment in ATS Village, our team is typically on-site within 2–4 hours of a confirmed same-day booking. We also serve corporate guest houses and serviced apartments in the vicinity of Infosys Noida and NIIT University. Residents of Amrapali Silicon City and Paramount Symphony receive the same prompt service standards as all other Sector 62 societies.",
      ],
    },
    {
      heading: "Why Sofa Repair Makes More Sense Than Replacement",
      body: [
        "For working professionals in Sector 62, replacing a sofa often means spending ₹20,000–₹80,000 on a new piece plus coordinating delivery to a high-rise apartment — a logistics challenge in a gated society with lift restrictions. A professional repair at a fraction of that cost can restore a sofa's appearance and structural integrity for another five to seven years, making it a far more practical and sustainable choice, especially for premium sofas that were originally expensive.",
        "Beyond cost savings, repairing your existing sofa removes the hassle of disposing of a large piece of furniture in a gated society — a process involving RWA coordination, lift access and often additional fees. FurniRevive's in-apartment repair model eliminates all of these friction points, giving Sector 62 residents a seamless and stress-free solution that lets them hold on to furniture they already love.",
      ],
    },
    {
      heading: "Sofa Repair Near Me in Noida Sector 62 (Same-Day Home Service)",
      body: [
        "Searching for sofa repair near me in Noida Sector 62? FurniRevive sends a trained technician directly to your apartment — no workshop trips, no transport hassle. Whether you live in ATS Village, Paramount Symphony, or Mahagun Mezzaria, our sofa repair near me at home service covers every society in Sector 62 with same-day slots available six days a week.",
        "Sofa repair near me cost is the most common question we hear — and the answer is straightforward: most repairs in Sector 62 fall between ₹899 and ₹4,500 depending on the damage type and sofa size. You pay only after a free doorstep inspection confirms your exact quote. Looking for the best sofa repair near me in Noida Sector 62? FurniRevive is rated 4.8 stars by residents across the IT corridor. Fast response, honest pricing, and a 6-month warranty — book your slot today. Also explore: <a href='/sofa-repair-noida'>sofa repair Noida</a> | <a href='/furniture-repair-noida-sector-62'>furniture repair Noida Sector 62</a>.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does sofa repair cost in Noida Sector 62?",
      answer:
        "Sofa repair in Sector 62 starts at ₹899 for basic repairs like leg replacement or cushion stitching. Foam replacement costs ₹999–₹2,500 per seat and full reupholstery ranges from ₹3,000–₹14,000 depending on sofa size and fabric type. All quotes are provided in writing before work begins.",
    },
    {
      question: "Do you offer same-day sofa repair in Sector 62?",
      answer:
        "Yes, same-day sofa repair is available in Noida Sector 62 for bookings placed before 11 AM. Next-day guaranteed slots are available for all other bookings. Evening and weekend appointments are specifically offered to accommodate Sector 62's working professionals.",
    },
    {
      question: "Which Sector 62 societies do you service?",
      answer:
        "We service all major societies in Noida Sector 62 including ATS Village, Paramount Symphony, Mahagun Mezzaria, Gardenia Gateway and Amrapali Silicon City. Our coverage extends to nearby sectors 61, 63, 71 and the Electronic City area.",
    },
    {
      question: "Can you repair a leather sofa in my Sector 62 apartment?",
      answer:
        "Absolutely. We offer comprehensive leather sofa repair including tear stitching, panel replacement, conditioning treatment and colour restoration. Our technicians are trained on all types of genuine leather and faux leather upholstery and carry out all work at your doorstep.",
    },
    {
      question: "How long does a sofa repair typically take?",
      answer:
        "Most standard sofa repairs such as foam replacement, leg repair or cushion stitching take 2–4 hours on-site. More complex reupholstery projects may take one to two days with the sofa remaining in your apartment throughout the process.",
    },
    {
      question: "Is there a warranty on sofa repairs in Sector 62?",
      answer:
        "Yes, all sofa repairs carried out by FurniRevive come with a 6-month workmanship warranty. If the same repair fails within the warranty period we return and redo the work at no additional charge. The warranty card is issued at the end of every job.",
    },
    {
      question: "Do technicians carry fabric samples for upholstery selection?",
      answer:
        "Yes, our technicians carry a wide selection of fabric swatches, foam grades and upholstery material samples so you can choose the right colour and texture before work begins. Custom fabric sourcing is also available for premium or designer sofas.",
    },
    {
      question: "How do I book a sofa repair in Noida Sector 62?",
      answer:
        "You can book online through our website, call our customer service line or message us on WhatsApp. Select your preferred date and time slot, mention your society name and we will confirm your appointment within the hour.",
    },
    {
      question: "Do you offer sofa repair near me at home in Noida Sector 62?",
      answer: "Yes. FurniRevive provides sofa repair near me at home across all of Noida Sector 62 including ATS Village, Paramount Symphony, Mahagun Mezzaria, Gardenia Gateway, and Amrapali Silicon City. Our technicians arrive with all tools and materials — your sofa never needs to leave your apartment. Book online or WhatsApp +91 92179 99355.",
    },
    {
      question: "What is the sofa repair near me cost in Sector 62?",
      answer: "Sofa repair near me cost in Noida Sector 62 starts at ₹899 for basic repairs like cushion stitching or leg replacement. Foam replacement is ₹999–₹2,500 per seat and full reupholstery ranges from ₹3,000–₹14,000 depending on sofa size and fabric. All quotes are provided in writing after a free doorstep inspection — no surprises.",
    },
    {
      question: "How quickly can you reach me in Noida Sector 62?",
      answer: "For same-day bookings placed before 11 AM, our technician typically reaches your Sector 62 society within 2–4 hours. Evening and weekend slots are also available specifically for working professionals in the IT corridor. Next-day guaranteed slots are available for all other bookings.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-noida-sector-62"),
    { label: "Sofa Repair Noida Sector 137", href: "/sofa-repair-noida-sector-137" },
    { label: "Sofa Repair Noida Sector 18", href: "/sofa-repair-noida-sector-18" },
    { label: "Sofa Repair Cost Noida", href: "/sofa-repair-cost-noida" },
    { label: "Leather Sofa Repair Noida", href: "/leather-sofa-repair-noida" },
  ],
  keywords: [
    "sofa repair Noida Sector 62",
    "sofa repair Sector 62 Noida",
    "sofa reupholstery Sector 62",
    "couch repair Noida Sector 62",
    "foam replacement Sector 62 Noida",
    "sofa repair near HCL Noida",
    "sofa repair ATS Village Noida",
    "sofa repair Paramount Symphony Noida",
    "same day sofa repair Sector 62",
    "sofa repair Noida Electronic City",
    "sofa repair near me Noida Sector 62",
    "sofa repair near me in Noida",
    "best sofa repair near me Noida",
    "sofa repair near me cost Sector 62",
    "sofa repair at home near me Noida",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 2 — Sofa Repair Noida Sector 137
// ─────────────────────────────────────────────────────────────────────────────

export const sofaRepairNoidaSector137: SeoPageData = {
  slug: "sofa-repair-noida-sector-137",
  title: "Sofa Repair Noida Sector 137 | Premium Doorstep Service",
  metaDescription:
    "Expert sofa repair in Noida Sector 137. Serving Jaypee Wishtown, ATS Pristine & Paras Tierea. Premium service from ₹999 with 6-month workmanship warranty.",
  h1: "Sofa Repair in Noida Sector 137 – Premium Expertise Along the Expressway",
  heroSubtitle:
    "Specialist sofa repair for Jaypee Wishtown, Paras Tierea, ATS Pristine, Ace Golfshire and Supertech Supernova. High-end leather and upholstery restoration with guaranteed workmanship along the Noida Expressway.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Noida Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Noida home — FurniRevive — Noida (Sector 137)",
    caption: "Sofa Repair in Noida (Sector 137) | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Professional sofa repair in Noida Sector 137 starts from ₹999. We serve all premium societies along the Noida Expressway including Jaypee Wishtown, Paras Tierea, ATS Pristine and Supertech Supernova with doorstep service and 6-month warranty.",
  intro: [
    "Noida Sector 137 has established itself as one of the most prestigious residential addresses along the Noida Expressway, defined by luxury high-rises and elite societies such as Jaypee Wishtown, Paras Tierea, ATS Pristine, Prateek Grand City, Ace Golfshire and Supertech Supernova. Residents here invest significantly in quality furniture — designer Italian leather sofas, imported sectionals and high-end recliners feature prominently in Sector 137 living rooms. When these premium pieces show signs of wear or structural damage, only a specialist repair service with expertise in luxury upholstery is adequate.",
    "FurniRevive brings premium sofa repair expertise directly to your Sector 137 apartment. Our experienced technicians understand the specific demands of high-end upholstery — from full-grain genuine leather to designer performance fabric and imported microfibre — and carry premium-grade replacement materials sourced to match original specifications. Accessible via the Noida Sector 137 Metro on the Aqua Line, our team can reach any Expressway corridor society promptly and work within the stringent security and access protocols of premium complexes.",
    "Whether you need a subtle leather patch on your Jaypee Wishtown sofa or a comprehensive reupholstery of a large sectional in your Prateek Grand City apartment, FurniRevive delivers results that meet the standards expected at a premium address. Pricing for sofa repair starts at ₹999, leather sofa restoration is available from ₹2,999 and large comprehensive leather replacement projects run up to ₹18,000. Every repair is backed by a 6-month workmanship warranty.",
  ],
  whyChoose: [
    {
      title: "Expertise in Premium Upholstery Materials",
      description:
        "We work with genuine leather, full-grain hide, high-performance fabric and imported microfibre — the materials found in luxury sofas across Sector 137's premium societies. Our technicians are trained to handle expensive upholstery with precision and care.",
    },
    {
      title: "Luxury Society Service Protocol",
      description:
        "From Jaypee Wishtown penthouses to Ace Golfshire clubhouse-facing apartments, we have deep experience navigating the security protocols, lift access and timing restrictions of Sector 137's premium gated complexes. We operate with full professionalism.",
    },
    {
      title: "Leather Sofa Restoration Specialists",
      description:
        "Leather sofa repair in Sector 137 starts at ₹2,999 covering cracking, peeling, tear repair, panel replacement and conditioning. We use colour-matched leather compounds and premium conditioners calibrated for high-quality hides.",
    },
    {
      title: "Thorough Pre-Repair Assessment",
      description:
        "For premium sofas we conduct a detailed inspection covering frame integrity, spring tension, foam density and full upholstery condition. You receive a comprehensive written report and itemised quote before any work is authorised.",
    },
    {
      title: "Full Noida Expressway Coverage",
      description:
        "Our service spans the entire Expressway corridor from Sector 128 and Sector 135 through Sector 137 to Sector 143 and the Greater Noida Expressway. All bookings within this zone receive priority scheduling.",
    },
    {
      title: "Discretion and Professional Conduct",
      description:
        "Every FurniRevive technician is background-verified, uniformed and trained in professional conduct. We respect the privacy and high standards expected in premium residences and always maintain a clean, tidy and odour-free worksite.",
    },
  ],
  process: [
    {
      step: "Request a Premium Assessment",
      description:
        "Contact us via the booking page or phone to describe your sofa and the nature of the damage. For high-value sofas in Sector 137, we recommend sharing photographs so we can prepare matched materials before the visit.",
    },
    {
      step: "On-Site Expert Inspection",
      description:
        "A senior FurniRevive technician visits your Jaypee Wishtown, ATS Pristine or Paras Tierea apartment and conducts a comprehensive sofa assessment covering frame, springs, foam density and upholstery condition throughout.",
    },
    {
      step: "Detailed Quotation and Material Selection",
      description:
        "You receive a clear itemised quote. For reupholstery projects, we present leather hide samples and premium fabric swatches so you can choose the finish that best complements your interior décor and sofa's original aesthetic.",
    },
    {
      step: "Expert Repair with Guaranteed Results",
      description:
        "All work is performed on-site by our specialist technician using premium materials. A thorough quality check follows before we hand over the detailed service record and 6-month warranty certificate.",
    },
  ],
  benefits: [
    "Expertise in high-end leather and designer upholstery",
    "Leather sofa restoration from ₹2,999 with colour-matching",
    "Service at all major Sector 137 luxury societies",
    "Aqua Line Metro access for prompt technician response",
    "Thorough pre-repair inspection and written quote",
    "Full Noida Expressway corridor coverage",
    "Background-verified uniformed technicians",
    "Discreet, professional conduct in premium residences",
    "Premium foam and material upgrades available",
    "6-month warranty on all repairs and restoration work",
    "Frame, spring, foam and upholstery all addressed in one visit",
    "Same-day priority slots available on request",
  ],
  contentSections: [
    {
      heading: "Premium Sofa Repair for Sector 137 Luxury Societies",
      body: [
        "The residents of Jaypee Wishtown, Paras Tierea, ATS Pristine, Prateek Grand City, Ace Golfshire and Supertech Supernova represent one of Noida's most discerning demographics. FurniRevive's Expressway team is specifically trained to meet the expectations that come with premium addresses — with deeper knowledge of luxury upholstery materials, high-end foam specifications and the designer sofa brands that are common in these residences. We understand that a poorly executed repair on a premium sofa can look worse than the original damage.",
        "We service all types of premium sofas found in Sector 137 apartments: modular sectionals, chesterfield sofas, Italian leather recliners, bespoke fabric sectionals and contemporary low-profile designer pieces. Our technicians invest in proper colour-matching, seamless stitching and material-specific techniques to achieve invisible repairs wherever possible, preserving both the aesthetic and resale value of premium furniture.",
      ],
    },
    {
      heading: "Leather Sofa Repair and Restoration in Sector 137",
      body: [
        "Leather sofas are a centrepiece in many Sector 137 luxury apartments. In the Noida climate, genuine leather is vulnerable to seasonal temperature swings that cause cracking, fading and surface peeling over time. FurniRevive offers a comprehensive leather restoration service that addresses surface cracking, colour loss, torn seams, panel replacement and deep conditioning treatment. Leather repair starts at ₹2,999 with full restoration projects for large sectionals reaching up to ₹18,000.",
        "We use professional-grade leather repair compounds, precisely colour-matched dyes and premium conditioning balms that restore the suppleness and visual richness of your leather sofa. Where damage is severe, we offer full panel replacement using premium hides sourced to match the sofa's original material as closely as possible. Our leather restoration work carries the same 6-month warranty as all our other repair services.",
      ],
    },
    {
      heading: "Transparent Pricing for Premium Sofa Repair in Sector 137",
      body: [
        "FurniRevive's Sector 137 pricing reflects the premium nature of the sofas we service while remaining fully transparent and competitive. Basic repairs such as leg replacement, cushion re-stuffing or minor tear stitching start at ₹999. Foam replacement using high-resilience foam appropriate for luxury sofas costs ₹1,500–₹4,000 per seat. Full fabric reupholstery for a three-seater sofa using premium upholstery-grade materials ranges from ₹6,000–₹14,000.",
        "Leather sofa repair services range from ₹2,999 for minor surface treatment to ₹18,000 for comprehensive leather replacement on large sectionals. Sector 137 residents with multiple furniture pieces requiring attention qualify for combined service discounts. All pricing is confirmed in a detailed written quote before work begins, ensuring complete transparency. There are no additional charges at completion beyond what was agreed in the quote.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does leather sofa repair cost in Noida Sector 137?",
      answer:
        "Leather sofa repair in Sector 137 starts at ₹2,999 for minor treatment such as conditioning, crack repair or small tear stitching. Comprehensive leather sofa restoration including panel replacement and full conditioning can reach up to ₹18,000 for large sectionals. A written quote is provided after inspection.",
    },
    {
      question: "Do you handle designer and high-end sofas at Jaypee Wishtown?",
      answer:
        "Yes, our senior technicians are experienced with premium and designer sofas including Italian leather pieces and imported sectionals. We carry out a thorough pre-repair assessment and source premium matched materials to ensure the repair meets the sofa's original quality standard.",
    },
    {
      question: "Which societies in Sector 137 are in your service area?",
      answer:
        "We cover all major Sector 137 societies including Jaypee Wishtown, Paras Tierea, ATS Pristine, Prateek Grand City, Ace Golfshire and Supertech Supernova. We also service nearby sectors 128, 135 and 143 along the Noida Expressway corridor.",
    },
    {
      question: "What is the nearest metro station for service in Sector 137?",
      answer:
        "The nearest metro station is Noida Sector 137 on the Aqua Line. Our technicians use the Aqua Line regularly to reach Sector 137 societies quickly and efficiently. We also serve Sector 135 and Sector 128 within the same service window.",
    },
    {
      question: "Can you repair a large sectional sofa in my Prateek Grand City apartment?",
      answer:
        "Absolutely. We regularly repair large sectional sofas in Prateek Grand City and other Sector 137 societies. All work is performed in-apartment with no need to move the sofa outside. Our team brings the tools and materials needed for any size of sofa repair project.",
    },
    {
      question: "Do you offer full fabric reupholstery in Sector 137?",
      answer:
        "Yes, full reupholstery is available for all sofa types in Sector 137. We carry a range of premium fabrics including velvet, linen, performance fabric and microfibre. Pricing starts at ₹6,000 for a three-seater sofa with standard fabric and increases with sofa size and fabric grade.",
    },
    {
      question: "How long does a premium sofa reupholstery project take?",
      answer:
        "Standard repairs such as foam replacement or leg repair take 2–4 hours. Full reupholstery on a large sectional may take 2–3 days covering material sourcing and on-site work. The sofa remains in your apartment throughout the entire process.",
    },
    {
      question: "Is there a warranty on sofa repairs done in Sector 137?",
      answer:
        "Yes, all sofa repairs and reupholstery work in Sector 137 carries a 6-month workmanship warranty. We provide a written service record and warranty card at the end of every job. Leather restoration also includes a 6-month conditioning effectiveness guarantee.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-noida-sector-137"),
    { label: "Sofa Repair Noida Sector 62", href: "/sofa-repair-noida-sector-62" },
    { label: "Furniture Repair Noida Sector 137", href: "/furniture-repair-noida-sector-137" },
    { label: "Sofa Repair Noida Expressway", href: "/sofa-repair-noida-expressway" },
    { label: "Leather Sofa Repair Noida", href: "/leather-sofa-repair-noida" },
  ],
  keywords: [
    "sofa repair Noida Sector 137",
    "sofa repair Sector 137 Expressway",
    "leather sofa repair Sector 137",
    "sofa reupholstery Noida Expressway",
    "sofa repair Jaypee Wishtown Noida",
    "sofa repair Paras Tierea Noida",
    "sofa repair ATS Pristine Noida",
    "premium sofa repair Noida",
    "sofa repair Supertech Supernova Noida",
    "couch repair Sector 137 Noida",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 3 — Furniture Repair Noida Sector 18
// ─────────────────────────────────────────────────────────────────────────────

export const furnitureRepairNoidaSector18: SeoPageData = {
  slug: "furniture-repair-noida-sector-18",
  title: "Furniture Repair Noida Sector 18 | ₹599 Doorstep",
  metaDescription:
    "Furniture repair in Noida Sector 18 starting ₹599. Doorstep service near DLF Mall, Atta Market & Great India Place. Sofa, bed, wardrobe, dining table repair.",
  h1: "Furniture Repair in Noida Sector 18 – Trusted Service for NCR's Oldest Hub",
  heroSubtitle:
    "Complete furniture repair for Sector 18 residences near DLF Mall of India, Atta Market and Great India Place. Sofas, beds, wardrobes, dining tables and all household furniture repaired at your doorstep from ₹599.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Noida Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Noida home — FurniRevive — Noida (Sector 18)",
    caption: "Sofa Repair in Noida (Sector 18) | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Furniture repair in Noida Sector 18 starts from ₹599. Our doorstep service covers Sector 18 and nearby sectors including 15, 16 and 25. We repair sofas, beds, dining tables, wardrobes and all household furniture with a 6-month warranty.",
  intro: [
    "Noida Sector 18 holds the distinction of being one of the city's oldest and most established sectors, uniquely blending a dense commercial landscape — anchored by DLF Mall of India, Great India Place, Wave Mall and the bustling Atta Market — with a well-settled, multigenerational residential community. Households across Sector 18 and its neighbouring sectors including 15, 16 and 25 span a wide range of dwelling types from heritage DDA-style flats and RWA housing blocks to newer residential developments like ATS Green and Logix Blossom County nearby. With older homes comes older furniture that has accumulated years of wear and genuinely benefits from skilled professional repair.",
    "FurniRevive provides comprehensive doorstep furniture repair throughout Noida Sector 18, handling the complete spectrum of household pieces — from a seasoned teak dining set in a heritage DDA flat to a contemporary modular wardrobe in a newer apartment near the Botanical Garden Metro. Our technicians are equally skilled in traditional carpentry joinery and modern flat-pack furniture hardware, making us the versatile choice for an area with such diverse residential character.",
    "Furniture repair in Sector 18 starts from just ₹599, making professional restoration genuinely accessible to all households in this community. Whether you need a cracked bed frame repaired, a wardrobe hinge replaced, a dining table surface refinished or a sofa reupholstered, our team arrives at your door with the right tools and materials for the job. We cover the full Sector 18 area and extend service to Sector 15, Sector 16, Sector 25 and the Film City area near Sector 27.",
  ],
  whyChoose: [
    {
      title: "Full-Range Furniture Coverage",
      description:
        "We repair every category of household furniture at Sector 18 doorsteps: sofas and sectionals, beds and mattress bases, wardrobes and sliding doors, dining tables and chairs, TV units, study desks and modular kitchen cabinet components.",
    },
    {
      title: "Suited to Every Home Type",
      description:
        "Sector 18 has everything from older DDA flats with solid wood furniture to newer apartments with contemporary modular pieces. Our technicians are trained on both traditional carpentry joinery and modern furniture hardware and laminate systems.",
    },
    {
      title: "Affordable, Itemised Pricing",
      description:
        "Furniture repair starts at ₹599, making professional restoration accessible for every household. Bed repair is priced ₹1,500–₹5,000, wardrobe repair ₹500–₹2,500 and dining table polishing ₹3,000–₹8,000. Every quote is itemised in writing.",
    },
    {
      title: "Central Location, Wide Coverage",
      description:
        "Sector 18's central position in Noida allows our team to serve the surrounding cluster with equal efficiency. We cover Sectors 15, 16, 25 and 27 — including the Film City area — with the same response times as Sector 18 itself.",
    },
    {
      title: "Blue Line Metro Accessibility",
      description:
        "The Noida Sector 18 Metro on the Blue Line and the nearby Botanical Garden Metro give our technicians fast, reliable access across the sector regardless of road traffic. This translates directly into punctual service for residents.",
    },
    {
      title: "Commercial and Residential Expertise",
      description:
        "Operating near the commercial hubs of DLF Mall of India and Atta Market, we also service restaurants, offices, showrooms and co-working spaces in the Sector 18 commercial zone in addition to our core residential customer base.",
    },
  ],
  process: [
    {
      step: "Book Online or Call Us",
      description:
        "Schedule your furniture repair appointment online or by phone. Describe the furniture type and the nature of the damage. Same-day and next-day slots are available throughout Sector 18 and all nearby sectors.",
    },
    {
      step: "Technician Arrives at Your Sector 18 Home",
      description:
        "Our furniture repair specialist arrives at your home at the agreed time with a comprehensive toolkit covering all furniture types — carpentry tools, upholstery equipment and professional wood polishing materials.",
    },
    {
      step: "Assessment and Written Quote",
      description:
        "The technician inspects every piece of furniture you have flagged and provides a written itemised quote. Multiple furniture repairs in one visit often qualify for a combo discount — mention all pieces needing attention upfront.",
    },
    {
      step: "Repair, Polish and Handover",
      description:
        "All repairs are completed on-site. Polishing and staining work is done with proper ventilation. On completion the technician hands over a service invoice and 6-month warranty card covering all work performed.",
    },
  ],
  benefits: [
    "All furniture types repaired at your doorstep",
    "Affordable pricing from ₹599",
    "Bed, wardrobe and sofa repair possible in one visit",
    "Suitable for older DDA flats and modern apartments alike",
    "Covers Sector 18 and surrounding Sectors 15, 16, 25 and 27",
    "Blue Line Metro accessibility for fast technician response",
    "Transparent itemised quotes before work begins",
    "Combo discounts available for multiple furniture repairs",
    "Traditional joinery and modern hardware expertise",
    "6-month warranty on all furniture repairs",
    "Dining table polishing and surface refinishing available",
    "Background-verified technicians for household safety",
  ],
  contentSections: [
    {
      heading: "Full-Range Furniture Repair Services in Noida Sector 18",
      body: [
        "As one of Noida's most established residential and commercial sectors, Sector 18 presents a broad mix of furniture types that require ongoing maintenance and repair. Our service offerings cover sofa repair and reupholstery, bed frame repair, wooden furniture polishing and refinishing, wardrobe door and hinge repair, dining table restoration, chair re-caning, padded seat replacement, sliding wardrobe track repairs, TV unit restoration, study furniture repairs for home offices, and <a href='/recliner-motor-repair-noida'>recliner motor repair in Noida</a> — all available as doorstep services.",
        "Dining table polishing is a particularly popular service in Sector 18 and nearby RWA housing areas, where many households own seasoned wooden dining sets that need refinishing to restore their original lustre. Our professional polishing service ranges from ₹3,000 to ₹8,000 for a full dining table and chair set, using professional-grade wood stains and lacquers. Bed frame repairs — covering headboard re-attachment, side rail reinforcement and slat replacement — are priced from ₹1,500 to ₹5,000 depending on bed size and material type.",
      ],
    },
    {
      heading: "Why Sector 18 Residents Choose Repair Over Replacement",
      body: [
        "With DLF Mall of India and Great India Place just minutes away, Sector 18 residents have easy access to furniture showrooms selling new pieces. Yet replacing quality wooden furniture — a solid sheesham dining set or a well-built teak wardrobe — can easily cost ₹30,000–₹80,000. A professional repair and refinish for a fraction of that investment can extend the life of the piece by a further decade, which is why a growing number of Sector 18 households are choosing skilled restoration over disposal.",
        "There is also increasing awareness among Noida's urban residents about the environmental cost of discarding functional furniture. A solid wood wardrobe or dining table built to last deserves repair rather than landfill. FurniRevive's approach combines skilled craftsmanship with quality materials to deliver repairs that are simultaneously economical and sustainable — a philosophy that resonates well with the established, value-conscious community of Sector 18. For residents needing service across the NCR, we also provide <a href='/home-furniture-repair-delhi'>home furniture repair Delhi</a> with the same quality standards.",
      ],
    },
    {
      heading: "Sofa Repair in Noida Sector 18 — Quick and Cost-Effective",
      body: [
        "Sofa repair is among the most frequent requests from Sector 18 residents, particularly for older sofas in DDA flats and RWA housing that have seen years of heavy daily use. Common issues include sagging seat cushions, cracked wooden frames, heavily worn fabric and completely flattened foam. Our sofa repair service in Sector 18 covers cushion re-stuffing, fabric reupholstery, frame reinforcement, leg replacement and full sofa restoration — starting from ₹899 for basic repairs. For structural frame damage, our <a href='/sofa-frame-repair-delhi'>sofa frame repair specialists</a> provide expert solutions.",
        "For RWA apartments and smaller flats in Sectors 15 and 16, we offer targeted sofa repair solutions that refresh both the appearance and the comfort of the sofa without the cost of replacement. We carry a range of fabric swatches in contemporary neutral tones suited to the interior aesthetics common in this part of Noida. Same-day sofa repair is available in Sector 18 for bookings placed before 11 AM, with evening slots available for residents who are out during the day.",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of furniture do you repair in Noida Sector 18?",
      answer:
        "We repair all types of household furniture in Sector 18 including sofas, beds, dining tables, wardrobes, TV units, study desks, chairs and modular furniture components. We handle both solid wood pieces and modern laminate or MDF-based furniture.",
    },
    {
      question: "How much does bed repair cost in Sector 18?",
      answer:
        "Bed repair in Noida Sector 18 is priced from ₹1,500 to ₹5,000 depending on damage type and bed size. Common repairs include headboard re-attachment, side rail reinforcement, leg replacement, slat repair and centre support bar replacement.",
    },
    {
      question: "Do you service older DDA flats and RWA housing in Sector 18?",
      answer:
        "Yes, we have extensive experience servicing older DDA flats and RWA-type housing in and around Sector 18. Our technicians are comfortable with traditional solid wood furniture construction and older joinery methods as well as modern flat-pack hardware.",
    },
    {
      question: "Is wardrobe repair available in Noida Sector 18?",
      answer:
        "Yes, wardrobe repair is available from ₹500 to ₹2,500. We repair sliding wardrobe doors, replace hinges and handles, fix door alignment issues, repair shelving and address laminate damage or peeling on MDF-carcass wardrobes.",
    },
    {
      question: "Can you polish and refinish a dining table in Sector 18?",
      answer:
        "Absolutely. Dining table polishing and refinishing is one of our most popular Sector 18 services. A complete dining table polish and refinish starts from ₹3,000 and can reach ₹8,000 for a large dining set including matching chairs.",
    },
    {
      question: "Do you cover areas near Sector 18 such as Sectors 15, 16 and 25?",
      answer:
        "Yes, our Sector 18 team covers all nearby sectors including 15, 16, 25 and 27 (Film City area). We treat these as part of the same service zone with the same same-day and next-day appointment availability as Sector 18 itself.",
    },
    {
      question: "How do I book a furniture repair in Noida Sector 18?",
      answer:
        "Book online through our website, call us directly or send a WhatsApp message. Describe the furniture and the damage, choose a convenient time slot and our technician will arrive at your Sector 18 home as scheduled.",
    },
    {
      question: "Is there a discount for booking multiple furniture repairs together?",
      answer:
        "Yes, we offer combo discounts when you book multiple furniture repairs in a single technician visit. For example, booking a sofa repair alongside a dining table polish qualifies for a discount on the combined service charge.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-noida-sector-18"),
    { label: "Sofa Repair Noida Sector 18", href: "/sofa-repair-noida-sector-18" },
    { label: "Furniture Repair Noida Sector 150", href: "/furniture-repair-noida-sector-150" },
    { label: "Chair Repair Noida", href: "/chair-repair-noida" },
    { label: "Wooden Furniture Restoration Noida", href: "/wooden-furniture-restoration-noida" },
  ],
  keywords: [
    "furniture repair Noida Sector 18",
    "furniture repair Sector 18 Noida",
    "sofa repair Sector 18 Noida",
    "bed repair Noida Sector 18",
    "wardrobe repair Sector 18 Noida",
    "dining table polish Noida Sector 18",
    "furniture repair near DLF Mall Noida",
    "furniture repair Atta Market Noida",
    "carpenter Sector 18 Noida",
    "furniture repair near Great India Place Noida",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 4 — Furniture Repair Noida Sector 150
// ─────────────────────────────────────────────────────────────────────────────

export const furnitureRepairNoidaSector150: SeoPageData = {
  slug: "furniture-repair-noida-sector-150",
  title: "Furniture Repair Noida Sector 150 | From ₹599",
  metaDescription:
    "Doorstep furniture repair in Noida Sector 150 from ₹599. Serving Ace Divino, Mahagun Mywoods & CRC Sublimis. Budget-friendly service with 6-month warranty.",
  h1: "Furniture Repair in Noida Sector 150 – Affordable Doorstep Service for Growing Families",
  heroSubtitle:
    "Reliable furniture repair for Ace Divino, Mahagun Mywoods, CRC Sublimis, Ajnara Le Garden and all Sector 150 societies. Budget-friendly pricing with combo discounts for young families along the Noida Expressway.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Noida Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Noida home — FurniRevive — Noida (Sector 150)",
    caption: "Sofa Repair in Noida (Sector 150) | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Doorstep furniture repair in Noida Sector 150 starts at ₹599. We serve all societies along the Noida Expressway including Ace Divino, Mahagun Mywoods and CRC Sublimis. Sofa, bed, wardrobe and dining table repair with 6-month warranty.",
  intro: [
    "Noida Sector 150 is one of the most rapidly developing residential corridors along the Noida-Greater Noida Expressway, defined by a new generation of high-rise societies built over the past several years for young families and first-time homeowners. Ace Divino, Mahagun Mywoods, CRC Sublimis, Ajnara Le Garden and SKA Greenarch are all home to households who have recently furnished brand-new apartments and now need professional support maintaining and repairing those purchases as everyday family life takes its toll on furniture.",
    "FurniRevive understands the budget-first mindset that characterises Sector 150's young families. Having recently invested in new furniture for a new home, most households prioritise extending the life of those purchases affordably rather than replacing them. Our doorstep furniture repair service starts from ₹599, covering sofa repair, bed frame repair, wardrobe hardware replacement and dining table refinishing with fully transparent pricing. We also offer attractive combo discounts for families with multiple pieces requiring attention in a single visit.",
    "Accessible from the Noida Sector 137 Metro and the Sector 148 Metro on the Aqua Line, our technicians serve Sector 150 and adjacent zones including Sector 143, Sector 148, Greater Noida West and Sector 137. With the forthcoming Noida International Airport at Jewar set to transform connectivity in this region, Sector 150 is on a strong growth trajectory — and FurniRevive is growing alongside its community to be a trusted long-term service partner for every household here.",
  ],
  whyChoose: [
    {
      title: "Budget-Friendly Pricing for Young Families",
      description:
        "Furniture repair in Sector 150 starts from ₹599, with combo discounts available for multiple pieces repaired in one visit. We understand that young families manage tight household budgets and we price our services to make professional care genuinely accessible.",
    },
    {
      title: "Modern Furniture Hardware Expertise",
      description:
        "Sector 150 societies like Ace Divino, Mahagun Mywoods and CRC Sublimis feature modern furniture with contemporary hardware. Our technicians are experienced with the modular wardrobes, flat-pack beds and contemporary sofa designs typical in these new-build apartments.",
    },
    {
      title: "Multi-Piece Combo Discounts",
      description:
        "Many Sector 150 households have several furniture items needing repair simultaneously. We offer meaningful discounts when two or more furniture repairs are bundled into a single technician visit, saving both time and total cost.",
    },
    {
      title: "Family-Friendly Flexible Scheduling",
      description:
        "We offer flexible scheduling including early mornings, evenings and full weekends to work around school runs, office commutes and childcare commitments. Online booking, phone and WhatsApp are all available for maximum convenience.",
    },
    {
      title: "Confirmed Appointment Windows",
      description:
        "All Sector 150 bookings receive a confirmed appointment window — not a vague four-hour range. We send a 30-minute pre-arrival notification so you can plan your day confidently around our visit.",
    },
    {
      title: "6-Month Warranty on Every Repair",
      description:
        "Every furniture repair in Sector 150 carries a 6-month workmanship warranty. If the same defect recurs within the warranty period, we return and resolve it at no additional charge. Young families can have complete peace of mind.",
    },
  ],
  process: [
    {
      step: "Easy Booking Online or via WhatsApp",
      description:
        "Book your furniture repair through our website or WhatsApp — the most convenient options for busy Sector 150 families. Choose your preferred time slot and mention all furniture items needing attention to qualify for combo discounts.",
    },
    {
      step: "Technician Arrives at Your Society",
      description:
        "Our technician arrives at your Ace Divino, Mahagun Mywoods or other Sector 150 society at the confirmed time. We send a notification 30 minutes before arrival so you are ready and the visit runs smoothly.",
    },
    {
      step: "Comprehensive Assessment and Combo Quote",
      description:
        "The technician inspects all furniture pieces flagged for repair, identifies all issues and compiles a combined written quote. Any applicable combo discount is automatically calculated and reflected in the total.",
    },
    {
      step: "Efficient Repairs and Warranty Handover",
      description:
        "Repairs are carried out efficiently on-site with child-safety awareness throughout. On completion the technician provides the service invoice and 6-month warranty card covering all work performed during the visit.",
    },
  ],
  benefits: [
    "Budget-friendly pricing starting from ₹599",
    "Combo discounts for multiple furniture repairs in one visit",
    "Serving all Sector 150 high-rise societies",
    "Modern furniture hardware and modular repair expertise",
    "Flexible scheduling for young families",
    "Weekend and evening appointments always available",
    "Expressway corridor coverage including Greater Noida West",
    "30-minute pre-arrival notification for your convenience",
    "6-month warranty on every repair performed",
    "Transparent pricing with no hidden charges",
    "Sofa, bed, wardrobe and dining table all in one visit",
    "Background-verified, uniformed technicians",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Services Tailored for Sector 150 Societies",
      body: [
        "The households of Noida Sector 150 — spread across Ajnara Le Garden, Ace Divino, Mahagun Mywoods, CRC Sublimis and SKA Greenarch — share a common profile: recently furnished modern apartments where furniture is relatively new but beginning to show the wear that active family living inevitably brings. Common repair requests include sofa cushion sinkage, broken bed centre supports, wardrobe hinge failures, loose dining chair joints and drawer runner replacements in modular furniture systems.",
        "FurniRevive's Sector 150 service is specifically designed to address these needs efficiently. We stock a comprehensive range of modern furniture hardware — drawer runners, wardrobe hinges, lid stay mechanisms, bed slat holders and sofa leg fittings — covering the components used by major furniture brands popular in new Noida developments. This means the vast majority of repairs are completed in a single visit without part ordering or follow-up appointments.",
      ],
    },
    {
      heading: "Sofa and Bed Repair for Sector 150 Families",
      body: [
        "In households with children, sofas serve as daily relaxation spaces, play areas and occasional sleeping spots for guests — making sofa wear rapid and inevitable. The most common issues our technicians address in Sector 150 are sagging centre cushions, broken sofa legs and worn fabric on armrests. Sofa repair in Sector 150 starts from ₹899, with foam replacement costing ₹999–₹2,500 and full reupholstery ranging from ₹3,000–₹10,000 depending on fabric and sofa size.",
        "Bed frame repair is another high-demand service in Sector 150, where active family use places significant stress on queen and king-sized beds — particularly those assembled in-apartment on delivery. Common repairs include centre support bar replacement, side rail crack repair, headboard re-attachment and slat system replacement. Bed repair in Sector 150 is priced from ₹1,500 to ₹4,500 depending on bed size and the extent of the damage.",
      ],
    },
    {
      heading: "Wardrobe and Dining Table Repair in Noida Sector 150",
      body: [
        "Wardrobes in Sector 150 apartments are predominantly modern modular designs — sliding or hinged-door units with MDF carcasses, laminate finishes and contemporary fittings. The most common issues we address include misaligned sliding doors, worn-out bottom wheels, loose hinges and edge laminate peeling. Our wardrobe repair service for Sector 150 addresses all of these from ₹500 to ₹2,500, with most repairs completed within an hour during the technician's visit.",
        "Dining table repair is a high-value service for young families who use the dining table for meals, homework sessions and work-from-home days simultaneously. Whether your dining set is a glass-top design, a laminate table or a solid wood piece, we can repair broken legs, fix joint wobble, refinish a scratched surface and restore overall stability. Dining table repair in Sector 150 starts at ₹800 with full polishing and refinishing available from ₹3,000.",
      ],
    },
    {
      heading: "FurniRevive — Growing Alongside Sector 150's New Community",
      body: [
        "Noida Sector 150 is more than a cluster of new societies — it represents a new chapter in Noida's residential growth story. With the Noida International Airport at Jewar set to transform infrastructure connectivity in this zone and continued development along the Expressway, Sector 150 is becoming a long-term home for thousands of growing families. FurniRevive is committed to being a reliable neighbourhood service partner for this expanding community from day one.",
        "As Sector 150 residents settle in and their furniture ages with them, the need for skilled, trustworthy repair services will grow steadily. Our goal is to build lasting relationships with Sector 150 households through consistently high-quality repairs at honest prices. From the first wardrobe hinge we replace to a full sofa restoration five years down the line, we want to be the furniture repair team that families in Mahagun Mywoods, CRC Sublimis and Ace Divino recommend to every new neighbour who moves in.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does furniture repair cost in Noida Sector 150?",
      answer:
        "Furniture repair in Noida Sector 150 starts from ₹599 for basic hardware repairs. Sofa repair begins at ₹899, bed repair at ₹1,500, wardrobe repair at ₹500 and dining table refinishing from ₹3,000. Combo discounts apply when multiple pieces are repaired in one visit.",
    },
    {
      question: "Do you offer combo discounts for multiple furniture repairs?",
      answer:
        "Yes, we offer combo discounts when you book two or more furniture repairs in a single technician visit. This is especially useful for Sector 150 families who may have a sofa, bed and wardrobe all needing attention at the same time — bundling saves on the total cost.",
    },
    {
      question: "Which Sector 150 societies do you service?",
      answer:
        "We service all societies in Noida Sector 150 including Ace Divino, Mahagun Mywoods, CRC Sublimis, Ajnara Le Garden and SKA Greenarch. We also cover Sector 143, Sector 148 and Greater Noida West as part of the same service zone.",
    },
    {
      question: "What is the nearest metro station for Sector 150 service?",
      answer:
        "The nearest metro stations are Noida Sector 137 and Noida Sector 148 on the Aqua Line. Our technicians use the Aqua Line to reach Sector 150 promptly. The same team covers all connecting sectors along the Expressway corridor.",
    },
    {
      question: "Can you repair modular wardrobe sliding doors in Sector 150?",
      answer:
        "Yes, sliding wardrobe door repair is one of our most common requests in Sector 150. We replace worn bottom wheels, realign door tracks, fix soft-close mechanisms and repair edge laminate damage. Wardrobe repair is priced from ₹500 to ₹2,500 depending on the scope.",
    },
    {
      question: "Is same-day furniture repair available in Sector 150?",
      answer:
        "Same-day furniture repair is available in Noida Sector 150 for bookings placed before 11 AM. We also offer guaranteed next-day appointments for bookings made after 11 AM. Evening and weekend slots are always available for working parents.",
    },
    {
      question: "How do you ensure safety when working in homes with young children?",
      answer:
        "We are careful about worksite safety in homes with young children. Tools are kept organised and out of reach, we use low-VOC adhesives and finishes where possible and polishing or staining work is always done with windows open for proper ventilation.",
    },
    {
      question: "Do repairs in Sector 150 come with a warranty?",
      answer:
        "All furniture repairs in Noida Sector 150 carry a 6-month workmanship warranty. If the same repair fails within this period we return and fix it at no additional charge. A written warranty card is issued at the end of every technician visit.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-noida-sector-150"),
    { label: "Sofa Repair Noida Sector 150", href: "/sofa-repair-noida-sector-150" },
  ],
  keywords: [
    "furniture repair Noida Sector 150",
    "furniture repair Sector 150 Expressway",
    "sofa repair Sector 150 Noida",
    "bed repair Noida Sector 150",
    "wardrobe repair Sector 150 Noida",
    "furniture repair Ace Divino Noida",
    "furniture repair Mahagun Mywoods Noida",
    "furniture repair CRC Sublimis Noida",
    "carpenter Sector 150 Noida",
    "furniture repair Greater Noida West",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Aggregate export
// ─────────────────────────────────────────────────────────────────────────────

export const NOIDA_SECTOR_PAGES: SeoPageData[] = [
  sofaRepairNoidaSector62,
  sofaRepairNoidaSector137,
  furnitureRepairNoidaSector18,
  furnitureRepairNoidaSector150,
];
