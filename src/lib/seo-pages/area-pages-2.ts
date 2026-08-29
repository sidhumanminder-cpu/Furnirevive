import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_AREA_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
  { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
  { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_AREA_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. FURNITURE REPAIR IN INDIRAPURAM
// ---------------------------------------------------------------------------
export const furnitureRepairIndirapuram: SeoPageData = {
  slug: "furniture-repair-indirapuram",
  title: "Furniture Repair Indirapuram | ₹599 Doorstep | Same-Day | FurniRevive",
  metaDescription:
    "Expert furniture repair in Indirapuram, Ghaziabad from ₹599. Sofa, bed & wardrobe repaired at doorstep. Vaishali, Vasundhara, Crossings Republik covered. Same-day. 6-month warranty. Book!",
  quickAnswer:
    "FurniRevive offers doorstep furniture repair across Indirapuram, Vaishali, and Vasundhara starting at ₹599. Sofa foam replacement from ₹999, hydraulic bed repair from ₹2,000, wardrobe hinge fix from ₹499. Same-day service available for all Ghaziabad localities with a 6-month written warranty.",
  h1: "Furniture Repair in Indirapuram — Doorstep Service for Ghaziabad",
  heroSubtitle:
    "Professional furniture repair at your doorstep in Indirapuram, Vaishali, Vasundhara, Crossings Republik, Raj Nagar Extension, and all Ghaziabad localities. Sofa, bed, chair, wardrobe — repaired with a 6-month warranty from ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a premium fabric sofa in an Indirapuram apartment — FurniRevive",
    caption: "Furniture Repair in Indirapuram | Doorstep service across Vaishali, Vasundhara & Crossings Republik | FurniRevive",
  },
  intro: [
    "Indirapuram has become Ghaziabad's most sought-after residential hub, with massive housing societies like Mahagun Moderne, Aditya Urban Casa, ATS Greens, Gaur City, and Shipra Sun City housing tens of thousands of families. The high-rise apartment lifestyle means furniture gets heavy daily use from families — and quality furniture repair is essential to maintain comfortable homes without the expense of constant replacement.",
    "FurniRevive provides comprehensive furniture repair across Indirapuram and all of Ghaziabad's key residential areas including Vaishali, Vasundhara, Crossings Republik, Raj Nagar Extension, Kaushambi, and Abhay Khand. Our craftsmen are experienced in working inside high-rise apartments — they arrive on time, work neatly, protect your flooring, and clean up completely before leaving.",
    "Whether your sofa cushions have gone flat in your Mahagun Moderne apartment, your dining chairs are wobbly in your Vaishali flat, or your wardrobe doors won't close properly in Crossings Republik — FurniRevive fixes it at your doorstep starting at ₹599 with a 6-month written warranty on every repair.",
  ],
  whyChoose: [
    {
      title: "All Indirapuram Societies Covered",
      description:
        "Mahagun Moderne, ATS Greens, Gaur City, Shipra Sun City, Aditya Urban Casa, Nyati Elan, Supertech Capetown — we serve every major society and independent colony in Indirapuram.",
    },
    {
      title: "High-Rise Apartment Experts",
      description:
        "Our technicians are trained for apartment living — on-time arrival, coordination with security, neat workspace, full cleanup, and respect for common areas.",
    },
    {
      title: "Vaishali & Vasundhara Too",
      description:
        "Beyond Indirapuram, we cover Vaishali Sectors 1–6, Vasundhara, Kaushambi, Crossings Republik, Raj Nagar Extension, Govindpuram, and Sahibabad.",
    },
    {
      title: "Starting at ₹599",
      description:
        "Affordable furniture repair for Ghaziabad families. Written quotation before work begins. No hidden charges or post-work surprises.",
    },
    {
      title: "Same-Day Service",
      description:
        "Book before noon for same-day furniture repair. Our Ghaziabad-based team ensures fast response across Indirapuram and surrounding areas.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Written warranty on every repair. If the issue recurs at your Indirapuram or Ghaziabad address, we return and fix it free within 48 hours.",
    },
  ],
  process: [
    {
      step: "Book via Call or WhatsApp",
      description:
        "Contact us at +91 92179 99355. Share photos and your society name or Ghaziabad locality. We confirm availability and give a preliminary estimate.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician visits your Indirapuram apartment or Ghaziabad home, inspects the furniture, and provides a detailed written quote at no charge.",
    },
    {
      step: "On-Site Professional Repair",
      description:
        "Approved repairs are completed at your home with professional tools, quality foam, premium fabrics, and industrial-grade adhesives. Most jobs done in 2–4 hours.",
    },
    {
      step: "Quality Check & Warranty Card",
      description:
        "We inspect everything with you, clean the workspace, and hand over your 6-month warranty card. Payment only after satisfaction.",
    },
  ],
  benefits: [
    "Complete coverage of Indirapuram, Vaishali, Vasundhara, and surrounding areas",
    "High-rise apartment-friendly service with minimal disruption",
    "Sofa repair: foam, springs, fabric, leather, recliner mechanisms",
    "Bed repair: frame, hydraulic, headboard, plywood base",
    "Dining furniture: table polish, chair re-gluing, leg repair",
    "Wardrobe: hinge, door alignment, shelf, drawer repair",
    "All furniture types and materials handled",
    "Starting at ₹599 with transparent pricing",
    "Same-day service available",
    "6-month written warranty",
    "Background-verified craftsmen",
    "Serving 10,000+ homes across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "Most Requested Furniture Repairs in Indirapuram",
      body: [
        "Sofa repair tops the list in Indirapuram. The large living rooms in societies like Mahagun Moderne and ATS Greens typically feature L-shaped or 7-seater sofa sets that take a beating from family use. After 3–5 years, cushions flatten, fabric tears, and springs lose support. Our complete sofa restoration — 32D/40D foam replacement, reupholstery from 500+ fabrics, spring replacement, and frame reinforcement — costs ₹10,000–₹25,000 for a full set versus ₹40,000–₹1,00,000 for replacement.",
        "Storage bed repair is particularly common in Indirapuram apartments where space optimization is crucial. Hydraulic lift beds are standard in 2BHK and 3BHK apartments, and the lifting mechanism frequently fails after 3–4 years. We replace hydraulic pistons, repair broken plywood panels, and reinforce the frame — restoring full functionality at ₹2,000–₹4,000. Wardrobe door alignment and modular kitchen shutter repair are also frequent requests from Indirapuram residents.",
      ],
    },
    {
      heading: "Furniture Repair Cost in Indirapuram — Full Price Guide",
      body: [
        "Our Indirapuram pricing follows standard rates with no society-specific or area surcharges. Here are typical costs:",
        "Sofa cushion foam replacement: ₹999–₹2,500 per cushion. L-shaped sofa full restoration: ₹12,000–₹25,000. Sofa reupholstery: ₹3,000–₹15,000 per seat. Bed frame repair: ₹1,500–₹5,000. Hydraulic bed mechanism: ₹2,000–₹4,000. Dining chair fix: ₹300–₹800 each. Wardrobe door and hinge: ₹500–₹2,000. Recliner repair: ₹1,499–₹6,000. Wood polishing: ₹1,500–₹5,000 per piece.",
        "All prices are indicative. You receive a precise written quotation after our free doorstep inspection — no obligation to proceed.",
      ],
    },
    {
      heading: "Ghaziabad Areas We Cover Beyond Indirapuram",
      body: [
        "While Indirapuram is our busiest Ghaziabad service area, we provide the same quality doorstep furniture repair across all of Ghaziabad. Our coverage includes Vaishali Sectors 1–6, Vasundhara Sectors 1–16, Kaushambi, Crossings Republik, Raj Nagar Extension, Raj Nagar (all sectors), Govindpuram, Sahibabad, Loni, Mohan Nagar, Nehru Nagar, Vijay Nagar, Shalimar Garden, Surya Nagar, and all major residential colonies.",
        "We also serve the industrial areas of Ghaziabad for office furniture repair — Sahibabad Industrial Area, Loni Industrial Area, and the factory zones along GT Road. For bulk office furniture repair, we offer package pricing with same-day completion for most jobs.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you serve all societies in Indirapuram?",
      answer:
        "Yes. We serve every residential society in Indirapuram including Mahagun Moderne, ATS Greens, Gaur City, Shipra Sun City, Aditya Urban Casa, Nyati Elan, Supertech Capetown, and all independent homes.",
    },
    {
      question: "How quickly can you come to Indirapuram?",
      answer:
        "Same-day service is available for bookings before noon. Standard appointments are confirmed within 24 hours. Call us for urgent same-day availability.",
    },
    {
      question: "Do you also serve Vaishali and Crossings Republik?",
      answer:
        "Yes. We cover Vaishali, Vasundhara, Crossings Republik, Raj Nagar Extension, Kaushambi, and all Ghaziabad localities with the same pricing and warranty terms.",
    },
    {
      question: "What is the cost of sofa repair in Indirapuram?",
      answer:
        "Sofa cushion repair starts at ₹999. Full L-shaped sofa restoration costs ₹12,000–₹25,000. Reupholstery costs ₹3,000–₹15,000 per seat. Free doorstep quote provided.",
    },
    {
      question: "Can you repair modular furniture in Indirapuram apartments?",
      answer:
        "Yes. We repair modular wardrobes, kitchen shutters, TV units, and shoe racks commonly found in Indirapuram apartments. Hinge, door, shelf, and drawer repairs are our speciality.",
    },
    {
      question: "Do you coordinate with society security for entry?",
      answer:
        "Yes. Our technicians carry ID cards and are experienced with high-rise society security procedures. We coordinate entry timing to ensure smooth access.",
    },
    {
      question: "Is the warranty valid for Ghaziabad addresses?",
      answer:
        "Yes. Our 6-month written warranty is valid across all Ghaziabad localities including Indirapuram, Vaishali, Vasundhara, Crossings Republik, and Raj Nagar Extension.",
    },
    {
      question: "Do you handle bulk furniture repair for offices in Ghaziabad?",
      answer:
        "Yes. We offer bulk office furniture repair with package pricing for Ghaziabad businesses. Conference tables, office chairs, reception counters, and cubicle desks — all handled.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-indirapuram"),
    { label: "Furniture Repair Ghaziabad", href: "/furniture-repair-ghaziabad" },
    { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
  ],
  keywords: [
    "furniture repair indirapuram",
    "sofa repair indirapuram",
    "carpenter indirapuram ghaziabad",
    "furniture repair vaishali",
    "furniture repair vasundhara",
    "furniture repair crossings republik",
    "sofa repair ghaziabad",
    "bed repair indirapuram",
    "furniture repair near me ghaziabad",
    "best furniture repair indirapuram",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Indirapuram",
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
// 2. SOFA REPAIR IN DLF GURGAON
// ---------------------------------------------------------------------------
export const sofaRepairDlfGurgaon: SeoPageData = {
  slug: "sofa-repair-dlf-gurgaon",
  title: "Sofa Repair DLF Gurgaon | Near Me ₹999 | Same-Day Premium Doorstep Service",
  metaDescription:
    "Premium sofa repair near me in DLF Gurgaon — Phase 1–5, Golf Course Road, Sohna Road. Leather repair, reupholstery & foam replacement from ₹999. Same-day doorstep. 6-month warranty.",
  quickAnswer:
    "FurniRevive provides premium sofa repair across DLF Gurgaon Phases 1–5 and Golf Course Road starting at ₹999. Leather crack repair from ₹2,999, reupholstery from ₹5,000 per seat. Same-day doorstep service with gated community coordination and a 6-month written warranty.",
  h1: "Sofa Repair in DLF Gurgaon — Premium Doorstep Restoration",
  heroSubtitle:
    "Professional sofa repair across DLF Phase 1–5, Golf Course Road, Golf Course Extension, Sohna Road, and all Gurgaon sectors. Leather restoration, designer reupholstery, foam replacement, and recliner repair with a 6-month warranty.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a luxury leather sofa in a DLF Gurgaon residence — FurniRevive",
    caption: "Sofa Repair in DLF Gurgaon | Leather restoration & reupholstery across all phases | FurniRevive",
  },
  intro: [
    "Gurgaon's DLF phases and Golf Course Road corridor are home to Delhi NCR's most premium residences — and the most expensive furniture. From DLF Magnolias and DLF Aralias to Camellias and The Crest, the sofas in these homes are often imported European pieces or high-end Indian designer furniture costing ₹1,00,000 to ₹5,00,000 or more. When these premium sofas need repair, you need craftsmen who understand quality.",
    "FurniRevive serves Gurgaon's premium residential areas with a sofa repair service designed for high-end furniture. Our technicians are trained to handle genuine Italian leather, designer upholstery fabrics, European recliner mechanisms, and bespoke furniture configurations. We use professional-grade leather care products, imported fabrics, and precision tools that meet the standards of Gurgaon's luxury homes.",
    "We cover all of Gurgaon — DLF Phase 1 through 5, Golf Course Road, Golf Course Extension Road, Sohna Road, South City, Nirvana Country, Sectors 42–57, and beyond. Starting prices for standard sofa repair apply across all areas, with premium material options available for luxury furniture. Every repair carries our 6-month written warranty.",
  ],
  whyChoose: [
    {
      title: "Premium Furniture Specialists",
      description:
        "Trained in handling imported European leather, designer fabrics, and luxury furniture brands. Our craftsmen treat your premium sofa with the expertise it deserves.",
    },
    {
      title: "Complete Gurgaon Coverage",
      description:
        "DLF Phase 1–5, Golf Course Road, Sohna Road, South City, Nirvana Country, Sectors 42–57, Palam Vihar, and all residential areas. No location within Gurgaon is outside our reach.",
    },
    {
      title: "Luxury Material Options",
      description:
        "Italian leather, Belgian velvet, European linen, and premium Indian fabrics. We match or upgrade the original material of your luxury sofa.",
    },
    {
      title: "Gated Community Experience",
      description:
        "Experienced with entry protocols of DLF, Unitech, Emaar, BPTP, and other gated communities. Professional appearance, ID-verified technicians, and smooth coordination.",
    },
    {
      title: "Same-Day Availability",
      description:
        "Book before noon for same-day sofa repair. Our Gurgaon-based team minimises wait times for Golf Course Road, DLF, and Sohna Road addresses.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Written warranty covering all repair work. If the repaired issue recurs at your Gurgaon address, we return and fix it at absolutely no cost.",
    },
  ],
  process: [
    {
      step: "Share Photos & Details",
      description:
        "Call +91 92179 99355 or WhatsApp clear photos. Mention your sofa brand, material, and Gurgaon location. We provide a preliminary assessment and estimate.",
    },
    {
      step: "Expert Home Consultation",
      description:
        "Our sofa specialist visits your Gurgaon home with premium fabric and leather samples, inspects the sofa, and provides a detailed written quotation.",
    },
    {
      step: "Professional Restoration",
      description:
        "Using premium materials and professional techniques, we restore your sofa — leather conditioning, crack repair, reupholstery, foam replacement, or mechanism repair.",
    },
    {
      step: "Quality Finish & Warranty",
      description:
        "Final inspection, leather conditioning treatment, complete cleanup, and warranty card handover. Payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Premium sofa repair for luxury and imported furniture",
    "Genuine leather crack repair, re-dyeing, and restoration",
    "Italian, Belgian, and premium Indian fabric options",
    "32D and 40D high-density foam replacement",
    "European recliner mechanism and motor repair",
    "L-shaped, modular, and sectional sofa expertise",
    "Frame repair and structural reinforcement",
    "Coverage across all DLF phases and Gurgaon sectors",
    "Gated community coordination experience",
    "Same-day service available",
    "6-month written warranty on all work",
    "Transparent pricing with detailed written quotes",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services for Gurgaon's Premium Homes",
      body: [
        "Leather sofa restoration is our most requested service in DLF Gurgaon. The centrally air-conditioned apartments in DLF Magnolias, Aralias, and The Crest often have premium leather sofas that develop surface drying and hairline cracks despite the climate control. Our professional leather repair process restores these sofas — crack filling with flexible leather compound, custom colour matching, professional re-dyeing, protective sealing, and deep conditioning. The result is a sofa that looks and feels like it did when delivered.",
        "Designer fabric reupholstery is equally popular along Golf Course Road and Sohna Road residences. Many Gurgaon homes feature European designer sofas where the original fabric has faded from sunlight exposure through large windows. We stock premium imported fabrics that match or exceed the original quality. For the large sectional and modular sofas common in Gurgaon penthouses and 4BHK apartments, we handle complex multi-panel reupholstery with precision stitching and alignment.",
      ],
    },
    {
      heading: "Sofa Repair Cost in Gurgaon — Premium Quality, Fair Pricing",
      body: [
        "Our Gurgaon pricing covers both standard and premium repair options. Standard sofa cushion foam replacement with 32D foam starts at ₹999 per cushion — the same rate across all Delhi NCR. Premium 40D foam adds ₹300–₹500 per cushion. Leather crack repair starts at ₹2,999 for minor work. Full leather restoration for a 3-seater runs ₹8,000–₹18,000.",
        "Fabric reupholstery ranges from ₹3,000 per seat for quality Indian fabrics to ₹8,000–₹15,000 per seat for imported premium options. Recliner mechanism repair costs ₹1,499–₹6,000, with European motor replacement at ₹4,000–₹8,000. A complete premium restoration of a luxury 3-seater sofa — leather conditioning, foam upgrade, spring replacement, and frame reinforcement — typically costs ₹20,000–₹40,000 versus ₹1,00,000–₹3,00,000 for a comparable new piece.",
      ],
    },
    {
      heading: "Gurgaon Localities We Serve",
      body: [
        "Our Gurgaon sofa repair service covers every residential area comprehensively. This includes DLF Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, DLF City, DLF Magnolias, DLF Aralias, DLF Camellias, DLF The Crest, Golf Course Road (all condominiums), Golf Course Extension Road, Sohna Road, South City 1 and 2, Nirvana Country, Sector 42 through 57, Sector 61–115, Emaar Palm Hills, BPTP Park Serene, Vatika City, M3M Golf Estate, and Central Park.",
        "We also serve Palam Vihar, Sector 14–23 (Old Gurgaon), Huda City Centre area, MG Road corridor, Udyog Vihar (for office furniture), Manesar, and New Gurgaon (Sectors 76–95). Our Gurgaon-based team ensures fast response times across the entire city.",
      ],
    },
    {
      heading: "Sofa Repair Near Me in DLF Gurgaon — Same-Day Premium Service",
      body: [
        "Looking for sofa repair near me in DLF Gurgaon? FurniRevive's premium technicians serve DLF Phase 1–5, Golf Course Road, Sohna Road, South City, Nirvana Country, and all Gurgaon sectors with same-day availability. Our sofa repair near me at home service means your imported leather sofa or designer sectional never leaves your apartment.",
        "Sofa repair near me cost in DLF Gurgaon starts at ₹999 — and we provide a free doorstep inspection with a written quote before any work begins. Trusted by residents in DLF Magnolias, Aralias, The Crest, and premium societies across Gurgaon. Book at furnirevive.com or WhatsApp +91 92179 99355.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you repair luxury imported sofas in Gurgaon?",
      answer:
        "Yes. We specialise in repairing imported Italian, European, and premium designer sofas. Our craftsmen handle genuine leather, premium fabrics, and complex mechanisms with professional expertise.",
    },
    {
      question: "What DLF areas do you cover in Gurgaon?",
      answer:
        "All DLF phases (1–5), DLF Magnolias, Aralias, Camellias, The Crest, DLF City, and all DLF residential projects across Gurgaon. Plus Golf Course Road, Sohna Road, and all sectors.",
    },
    {
      question: "How much does sofa repair cost in DLF Gurgaon?",
      answer:
        "Standard foam replacement from ₹999/cushion. Leather repair from ₹2,999. Premium reupholstery from ₹5,000/seat. Full luxury restoration ₹20,000–₹40,000. Free doorstep quotation provided.",
    },
    {
      question: "Can you coordinate with gated community security?",
      answer:
        "Yes. Our technicians carry ID cards and are experienced with DLF, Emaar, BPTP, and other gated community protocols. We coordinate entry in advance for hassle-free service.",
    },
    {
      question: "Do you repair recliner sofas in Gurgaon?",
      answer:
        "Yes. We repair all recliner types including manual, electric, and European mechanism recliners. Motor replacement, cable repair, and upholstery restoration all handled.",
    },
    {
      question: "Is same-day sofa repair available in Gurgaon?",
      answer:
        "Yes. Book before noon for same-day service across DLF phases, Golf Course Road, Sohna Road, and all Gurgaon sectors.",
    },
    {
      question: "Do you stock premium leather and fabric options?",
      answer:
        "Yes. We carry Italian leatherette, Belgian velvet, European linen, premium chenille, and genuine leather in 50+ colours. Samples are brought to your home for selection.",
    },
    {
      question: "What warranty do you provide for Gurgaon repairs?",
      answer:
        "Every repair carries a 6-month written warranty valid at your Gurgaon address. Warranty return visits are scheduled within 48 hours and are completely free.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-dlf-gurgaon"),
    { label: "Sofa Repair Gurgaon", href: "/sofa-repair-gurgaon" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  ],
  keywords: [
    "sofa repair dlf gurgaon",
    "sofa repair golf course road",
    "sofa repair gurgaon",
    "leather sofa repair gurgaon",
    "sofa reupholstery gurgaon",
    "furniture repair dlf phase",
    "sofa repair sohna road",
    "premium sofa repair gurgaon",
    "recliner repair gurgaon",
    "best sofa repair gurgaon",
    "sofa repair near me DLF Gurgaon",
    "sofa repair near me Gurgaon",
    "sofa repair at home near me Gurgaon",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — DLF Gurgaon",
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
// 3. FURNITURE REPAIR IN GREATER NOIDA
// ---------------------------------------------------------------------------
export const furnitureRepairGreaterNoida: SeoPageData = {
  slug: "furniture-repair-greater-noida",
  title: "Furniture Repair Greater Noida | ₹599 Doorstep | Same-Day | FurniRevive",
  metaDescription:
    "Expert furniture repair in Greater Noida & Noida Extension from ₹599. Sofa, bed & wardrobe repaired at doorstep. Gaur City, ATS, Ace City covered. Same-day. 6-month warranty. Book!",
  quickAnswer:
    "FurniRevive offers doorstep furniture repair across Greater Noida and Noida Extension starting at ₹599. Sofa foam replacement from ₹999, hydraulic bed repair from ₹2,000. All major societies — Gaur City, ATS, Ace City — covered with same-day service and a 6-month written warranty.",
  h1: "Furniture Repair in Greater Noida — Doorstep Service for Every Society",
  heroSubtitle:
    "Expert furniture repair across Greater Noida West (Noida Extension), Greater Noida proper, Knowledge Park, Pari Chowk, and all major societies. Sofa, bed, chair, wardrobe repair with a 6-month warranty from ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a fabric sofa in a Greater Noida society apartment — FurniRevive",
    caption: "Furniture Repair in Greater Noida | Doorstep service across Gaur City, Noida Extension & Knowledge Park | FurniRevive",
  },
  intro: [
    "Greater Noida and Greater Noida West (popularly known as Noida Extension) have emerged as one of Delhi NCR's fastest-growing residential zones. With massive societies like Gaur City, ATS Destinaire, Ace City, Supertech Eco Village, Ajnara Homes, Amrapali, and Galaxy North Avenue housing hundreds of thousands of residents, the demand for quality furniture repair in the area has skyrocketed.",
    "FurniRevive provides comprehensive doorstep furniture repair across Greater Noida and Noida Extension. Our craftsmen serve every major society, sector, and residential area — from Gaur City's towers in Greater Noida West to the independent houses near Pari Chowk, and from Knowledge Park apartments to Alpha and Beta sector residences. We arrive fully equipped to handle <a href='/leather-sofa-repair-greater-noida'>leather furniture restoration</a>, sofa repair, beds, dining furniture, wardrobes, <a href='/recliner-repair-greater-noida'>recliner repair services in Greater Noida</a>, and all types of household furniture on-site.",
    "Living in a high-rise apartment in Greater Noida means you can't easily transport heavy furniture to a repair shop. That's why our doorstep service is perfect for the area — our technicians come to your apartment, do the work on-site, and clean up before leaving. Starting at ₹599 with a 6-month warranty, our service saves Greater Noida families thousands compared to replacing furniture.",
  ],
  whyChoose: [
    {
      title: "All Greater Noida Societies",
      description:
        "Gaur City, ATS Destinaire, Ace City, Supertech Eco Village, Galaxy North Avenue, Ajnara Homes — we serve every major society and residential block across Greater Noida and Noida Extension.",
    },
    {
      title: "Tower & Apartment Friendly",
      description:
        "Experienced with high-rise apartment repair in 20–30 floor towers. On-time coordination with society security, neat on-site work, and thorough cleanup.",
    },
    {
      title: "Budget-Friendly Pricing",
      description:
        "Starting at ₹599 — designed for the young families and working professionals who form the majority of Greater Noida residents. Save 60–70% vs buying new.",
    },
    {
      title: "Noida Extension Specialists",
      description:
        "Greater Noida West (Noida Extension) is our fastest-growing service area. We understand the apartment layouts and furniture needs of this region.",
    },
    {
      title: "Same-Day Service",
      description:
        "Book before noon for same-day repair. Our technicians based in the Noida-Greater Noida corridor ensure fast arrival times.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Written warranty valid at your Greater Noida or Noida Extension address. Free return visits for any warranty claims within 48 hours.",
    },
  ],
  process: [
    {
      step: "Book & Share Details",
      description:
        "Call +91 92179 99355 or WhatsApp photos of your furniture. Mention your society name and tower. We provide a quick estimate and confirm appointment timing.",
    },
    {
      step: "Doorstep Inspection",
      description:
        "Our technician visits your Greater Noida apartment, inspects the furniture condition, and provides a written quotation. The inspection is completely free.",
    },
    {
      step: "On-Site Repair",
      description:
        "Upon your approval, we repair the furniture at your home with professional tools and quality materials. Most repairs completed in a single visit.",
    },
    {
      step: "Warranty & Cleanup",
      description:
        "Quality check, workspace cleanup, and 6-month warranty card handover. Payment collected only after you're satisfied with the work.",
    },
  ],
  benefits: [
    "Complete coverage of Greater Noida and Noida Extension",
    "All major residential societies served",
    "High-rise apartment-friendly service",
    "Sofa: foam, springs, fabric, leather, recliner repair",
    "Bed: frame, hydraulic, headboard, plywood repair",
    "Dining furniture: table, chairs, polish, joint repair",
    "Wardrobe: hinge, door, shelf, drawer, lock repair",
    "All materials: wood, MDF, plywood, fabric, leather",
    "Starting at ₹599 — transparent pricing",
    "Same-day service available",
    "6-month written warranty",
    "10,000+ repairs completed across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "Top Furniture Repairs in Greater Noida Apartments",
      body: [
        "The most common repair request from Greater Noida residents is sofa cushion replacement. The compact living rooms in 2BHK and 3BHK apartments across Gaur City, ATS, and Ace City typically feature 5-seater or L-shaped sofa sets. With young families and children, cushion foam compresses quickly — often within 2–3 years with budget furniture. We replace the foam with durable 32D or 40D high-density variants that maintain comfort for 5–8 years, starting at just ₹999 per cushion.",
        "Storage bed repair is the second most requested service. Greater Noida apartments universally use hydraulic storage beds to maximise limited bedroom space. The hydraulic mechanisms fail after 2–4 years, making it impossible to access the storage space. We replace hydraulic pistons and repair the lifting mechanism at ₹2,000–₹4,000 — a fraction of buying a new bed. Modular wardrobe repair (hinge replacement, door alignment, soft-close mechanism) and dining chair joint repair round out the most popular services.",
      ],
    },
    {
      heading: "Furniture Repair Prices for Greater Noida Residents",
      body: [
        "Our Greater Noida pricing is identical to our Delhi NCR rates — no additional charges for the area. Standard costs include:",
        "Sofa cushion foam (32D): ₹999–₹2,500 per cushion. Full 5-seater sofa restoration: ₹12,000–₹25,000. Sofa reupholstery: ₹3,000–₹12,000 per seat. Bed frame repair: ₹1,500–₹5,000. Hydraulic bed fix: ₹2,000–₹4,000. Dining chair re-gluing: ₹300–₹800 each. Wardrobe door and hinge: ₹500–₹2,000. Recliner repair: ₹1,499–₹6,000. Wood polishing: ₹1,500–₹5,000.",
        "Free doorstep inspection and written quote provided before any work — no obligation to proceed. Bulk repair discounts available for multiple furniture pieces.",
      ],
    },
    {
      heading: "Greater Noida & Noida Extension Areas We Cover",
      body: [
        "Our service covers the complete Greater Noida and Noida Extension geography. Greater Noida West (Noida Extension): Gaur City 1 and 2, ATS Destinaire, Ace City, Supertech Eco Village 1–4, Galaxy North Avenue 1 and 2, Ajnara Le Garden, Amrapali Dream Valley, Mahagun Mywoods, Arihant Arden, CRC Sublimis, Paramount Emotions, SKA Greenarch, and all residential projects along the Noida-Greater Noida Expressway.",
        "Greater Noida proper: Knowledge Park 1–5, Pari Chowk area, Alpha and Beta sectors, Gamma and Delta sectors, Omicron sectors, Chi and Phi sectors, Zeta sectors, Jaypee Greens, Unitech South City, ATS Pristine, Eldeco Greens, and all sectors along the Expressway. We also cover Dadri, Bisrakh, and areas along the Eastern Peripheral Expressway.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you serve Gaur City and other Noida Extension societies?",
      answer:
        "Yes. We serve all Noida Extension societies including Gaur City 1 & 2, ATS Destinaire, Ace City, Supertech Eco Village, Galaxy North Avenue, and every other residential project in the area.",
    },
    {
      question: "How fast can you come to Greater Noida?",
      answer:
        "Same-day service available for bookings before noon. Standard appointments confirmed within 24 hours. Our Noida-based team ensures quick response to Greater Noida locations.",
    },
    {
      question: "What's the starting price for furniture repair in Greater Noida?",
      answer:
        "Basic repairs start at ₹599. Sofa cushion foam starts at ₹999. Free doorstep inspection included. Written quote before any work begins.",
    },
    {
      question: "Do you repair hydraulic storage beds?",
      answer:
        "Yes. Hydraulic bed repair is one of our most popular services in Greater Noida. We replace pistons and fix lifting mechanisms at ₹2,000–₹4,000.",
    },
    {
      question: "Can you repair modular wardrobes and kitchen shutters?",
      answer:
        "Yes. We repair modular wardrobe doors, hinges, soft-close mechanisms, kitchen shutters, and drawer slides commonly found in Greater Noida apartments.",
    },
    {
      question: "Is there extra charge for Greater Noida vs Delhi?",
      answer:
        "No. Our pricing is the same across all Delhi NCR cities. No area surcharges for Greater Noida or Noida Extension locations.",
    },
    {
      question: "Do you provide bulk repair for multiple furniture pieces?",
      answer:
        "Yes. We offer package pricing when repairing multiple pieces — common for families who want all their furniture refreshed at once. Significant savings on per-piece cost.",
    },
    {
      question: "Is the 6-month warranty valid in Greater Noida?",
      answer:
        "Yes. Our written warranty is valid at all Greater Noida and Noida Extension addresses. Free return visits within 48 hours for warranty claims.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-greater-noida"),
    { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
    { label: "Furniture Repair Ghaziabad", href: "/furniture-repair-ghaziabad" },
  ],
  keywords: [
    "furniture repair greater noida",
    "furniture repair noida extension",
    "sofa repair greater noida",
    "carpenter greater noida",
    "furniture repair gaur city",
    "sofa repair noida extension",
    "bed repair greater noida",
    "furniture repair near me greater noida",
    "wardrobe repair greater noida",
    "best furniture repair greater noida",
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Greater Noida",
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

export const AREA_PAGES_2: SeoPageData[] = [
  furnitureRepairIndirapuram,
  sofaRepairDlfGurgaon,
  furnitureRepairGreaterNoida,
];
