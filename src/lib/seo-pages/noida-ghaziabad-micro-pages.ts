import type { SeoPageData } from "@/lib/seo-constants.ts";
import { buildRelatedPages } from "@/lib/seo-pages/core-links.ts";

const NOIDA_RELATED = [
  { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
  { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
  { label: "Furniture Repair Greater Noida", href: "/furniture-repair-greater-noida" },
  { label: "Sofa Repair Noida Sector 62", href: "/sofa-repair-noida-sector-62" },
  { label: "Sofa Repair Noida Expressway", href: "/sofa-repair-noida-expressway" },
];

const GHAZIABAD_RELATED = [
  { label: "Furniture Repair Ghaziabad", href: "/furniture-repair-ghaziabad" },
  { label: "Sofa Repair Ghaziabad", href: "/sofa-repair-ghaziabad" },
  { label: "Furniture Repair Noida", href: "/furniture-repair-noida" },
  { label: "Sofa Repair Noida", href: "/sofa-repair-noida" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 1 — Sofa Repair Greater Noida
// ─────────────────────────────────────────────────────────────────────────────

export const sofaRepairGreaterNoida: SeoPageData = {
  slug: "sofa-repair-greater-noida",

  title: "Sofa Repair Greater Noida | ₹999 Doorstep | Warranty",

  metaDescription:
    "Expert sofa repair in Greater Noida & Noida Extension from ₹999. Gaur City, ATS, Ace City, Supertech covered. Leather, fabric, recliner repair. 6-month warranty.",

  h1: "Sofa Repair in Greater Noida & Noida Extension — Doorstep Service",

  heroSubtitle:
    "Doorstep sofa repair across Greater Noida West (Noida Extension), Greater Noida proper, Knowledge Park, Pari Chowk and all major societies. Fabric, leather, recliner — 6-month warranty from ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Noida Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Noida home — FurniRevive — Greater Noida",
    caption: "Sofa Repair in Greater Noida | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Sofa repair in Greater Noida costs ₹999 to ₹6,000 depending on repair type, sofa size and material. FurniRevive provides doorstep sofa repair across Greater Noida West (Noida Extension), Knowledge Park, Pari Chowk, Alpha, Beta and all major societies including Gaur City, ATS Destinaire, Ace City and Supertech Eco Village with a 6-month warranty.",

  intro: [
    "Greater Noida and Greater Noida West — popularly known as Noida Extension — have become home to hundreds of thousands of young families over the past five years. Massive residential townships like Gaur City (1 and 2), ATS Destinaire, Ace City, Supertech Eco Village, Ajnara Homes, Galaxy North Avenue, Paramount Floraville and Mahagun Mywoods have delivered thousands of apartments, and each one has been furnished with sofas that now need professional attention. Sagging cushions, torn fabric, cracked rexine, broken recliner mechanisms and wobbly frames are the most common sofa problems FurniRevive resolves across Greater Noida every week.",

    "FurniRevive's doorstep sofa repair service is designed for Greater Noida's high-rise apartment lifestyle. Our craftsmen travel directly to your tower — whether it is in Gaur City's 40-storey buildings in Sector 4 Greater Noida West or a mid-rise apartment near Knowledge Park — with all tools, fabrics, leather treatments and foam supplies needed to complete the repair inside your apartment. No hauling sofas to workshops, no waiting weeks for a return delivery. Most repairs are completed in a single visit of two to four hours.",

    "Pricing starts at ₹999 for basic fabric patching and foam replacement, our <a href='/leather-sofa-repair-greater-noida'>leather sofa repair services</a> range from ₹2,999 to ₹8,000, full reupholstery from ₹3,500 per seat, and <a href='/recliner-repair-greater-noida'>expert recliner repair</a> from ₹1,500 to ₹4,000. Every customer receives a transparent written quote after inspection and a 6-month warranty on all completed work.",
  ],

  whyChoose: [
    {
      title: "Complete Greater Noida Coverage",
      description:
        "From Gaur City and ATS Destinaire in Noida Extension to Knowledge Park, Pari Chowk, Alpha, Beta and Chi-Phi sectors in Greater Noida proper — we cover every residential zone without additional travel charges.",
    },
    {
      title: "High-Rise Apartment Experts",
      description:
        "Greater Noida's towers present unique logistics — narrow lifts, security protocols and limited service areas. Our craftsmen are experienced with high-rise apartment repairs and work efficiently within your living space without disrupting neighbours.",
    },
    {
      title: "Online Furniture Brand Specialists",
      description:
        "Most Greater Noida homes are furnished with sofas from Pepperfry, Urban Ladder, Wakefit, Amazon, Flipkart and IKEA. We know these products and carry the specific tools and replacement parts they require for professional repair.",
    },
    {
      title: "Recliner and Motorised Sofa Repair",
      description:
        "Motorised and manual recliners are popular in Greater Noida's newer apartments. We repair mechanism failures, stuck footrests, broken motors, remote control issues and worn-out upholstery on all recliner brands.",
    },
    {
      title: "Affordable Starting Price",
      description:
        "Basic fabric repairs start at just ₹999 — ideal for young families settling into new homes who need quality repairs without premium pricing. Volume discounts available for multi-piece appointments.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair in Greater Noida comes with a 6-month warranty covering workmanship and materials. If any issue recurs, we return to your apartment and fix it free of charge.",
    },
  ],

  process: [
    {
      step: "Book Online or Call",
      description:
        "Schedule a slot through our website or phone. We offer morning, afternoon and evening windows across all seven days to suit the schedules of working professionals commuting to Noida IT parks and Delhi.",
    },
    {
      step: "Craftsman Visits Your Society",
      description:
        "Our specialist arrives at your tower in Gaur City, ATS, Ace City, Supertech or any Greater Noida society. They inspect the sofa thoroughly — frame, springs, foam, upholstery and any mechanical components — and provide a detailed quote on the spot.",
    },
    {
      step: "Repair at Your Doorstep",
      description:
        "Once approved, work begins immediately inside your apartment. Most single-sofa repairs are completed within two to four hours. Full sectional reupholstery may require a second scheduled visit at no extra call-out fee.",
    },
    {
      step: "Quality Check and Warranty",
      description:
        "After completing the work, the craftsman demonstrates all repairs, tests recliner mechanisms if applicable, and hands over a signed 6-month warranty card. Your sofa is ready for immediate use.",
    },
  ],

  benefits: [
    "Doorstep sofa repair across all Greater Noida and Noida Extension societies",
    "Serving Gaur City, ATS Destinaire, Ace City, Supertech, Ajnara and more",
    "Coverage across Knowledge Park, Pari Chowk, Alpha, Beta and Chi-Phi sectors",
    "Starting price ₹999 for basic fabric sofa repairs",
    "Leather restoration from ₹2,999 with colour-matched treatments",
    "Full reupholstery from ₹3,500 per seat with 400+ fabric options",
    "Recliner mechanism repair from ₹1,500 including motor replacement",
    "Spring and foam replacement for sagging cushion restoration",
    "Expert with Pepperfry, Urban Ladder, Wakefit and all online sofa brands",
    "Same-day service for bookings made before noon",
    "6-month written warranty on all workmanship and materials",
    "No transport needed — everything repaired inside your apartment",
  ],

  contentSections: [
    {
      heading: "Sofa Repair Across Greater Noida West's Massive Townships",
      body: [
        "Greater Noida West — commonly called Noida Extension — is one of Delhi NCR's densest residential zones. Gaur City 1 and 2 alone house over 20,000 apartments across dozens of towers in Sector 4 and Sector 16C. ATS Destinaire, Ace City, Supertech Eco Village, Ajnara Homes, Galaxy North Avenue and Paramount Floraville add tens of thousands more. The sheer scale of this residential development means thousands of sofas need professional repair every month — from budget two-seater rexine sofas in compact 2BHK apartments to large L-shaped fabric sectionals in spacious 4BHK penthouses.",
        "FurniRevive's craftsmen serve every tower in these massive townships. We handle the full spectrum of sofa problems: fabric tears and stains, rexine cracking and peeling, cushion compression and sagging, broken wooden frames, snapped spring systems, recliner mechanism failures and loose armrest joints. Our team arrives with all tools and materials needed for immediate repair — no preliminary visits, no material sourcing delays. For reupholstery projects, we bring a physical swatch library of 400+ fabrics and leather options to your doorstep so you can choose the perfect material under your own home lighting.",
      ],
    },
    {
      heading: "Recliner and Motorised Sofa Repair in Greater Noida",
      body: [
        "Recliners have become a staple in Greater Noida's newer apartments — from single-seater manual recliners to three-seater motorised reclining sofas. These sophisticated pieces develop specific failure modes over time: hydraulic or gas spring cylinders that stop holding position, electric motors that burn out or lose power, remote control circuits that malfunction, footrest mechanisms that jam midway, and the upholstery on high-wear recliner zones (headrest, armrests, footrest) that wears through faster than the rest of the sofa.",
        "FurniRevive is one of the few sofa repair services in Greater Noida that carries a full inventory of recliner replacement parts — including motors, actuators, mechanism frames, gas springs and remote control boards compatible with major brands like La-Z-Boy, Durian, HomeTown, Godrej and imported recliners from Amazon and Flipkart. Recliner mechanism repair costs ₹1,500 to ₹4,000 depending on the specific component and sofa size, with most repairs completed in a single visit. Every recliner repair comes with our standard 6-month warranty.",
      ],
    },
    {
      heading: "Serving Greater Noida Proper — Knowledge Park to Pari Chowk",
      body: [
        "Beyond Noida Extension, Greater Noida proper — spanning Knowledge Park 1 through 5, Pari Chowk, Alpha, Beta, Gamma, Delta, Chi, Phi and Omega sectors — has a more established residential base with a mix of independent houses, builder floors and apartment complexes. Families in these sectors often have older, higher-quality solid wood-framed sofas that develop issues like loose mortise-and-tenon joints, split wood in side rails and worn-out upholstery after years of use.",
        "Our craftsmen are equally experienced with these traditional sofa repairs — re-gluing joints, reinforcing frames, replacing springs and restoring the original integrity of quality wooden sofa sets. Knowledge Park residents near the Gautam Buddha University and Pari Chowk areas are within our primary service zone with arrival times typically under forty-five minutes. For broader Noida coverage, visit our <a href=\"/sofa-repair-noida\">Sofa Repair Noida</a> and <a href=\"/furniture-repair-greater-noida\">Furniture Repair Greater Noida</a> pages.",
      ],
    },
    {
      heading: "Pricing and Warranty for Greater Noida Residents",
      body: [
        "Greater Noida residents — many of them first-time homeowners — are naturally cost-conscious. We publish our price ranges openly: basic fabric tear repair starts at ₹999, single-seat foam replacement costs ₹800 to ₹2,500, rexine replacement starts at ₹1,500 per seat, leather restoration ranges from ₹2,999 to ₹8,000, full fabric reupholstery from ₹3,500 per seat, and recliner mechanism repair from ₹1,500 to ₹4,000. These are ranges — the exact quote depends on your sofa's size, material, damage extent and number of components needing attention.",
        "Our 6-month warranty is a written commitment signed by the craftsman at the end of each job. If any repair fails within six months, we return to your Greater Noida apartment at no charge. This warranty has been the foundation of our reputation across NCR's residential communities. To explore related services, visit our <a href=\"/blog\">Blog</a> or check the <a href=\"/sofa-repair-noida-sector-62\">Sofa Repair Sector 62</a> and <a href=\"/sofa-repair-noida-expressway\">Sofa Repair Noida Expressway</a> pages.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does sofa repair cost in Greater Noida?",
      answer:
        "Sofa repair in Greater Noida starts at ₹999 for basic fabric fixes. Leather restoration costs ₹2,999 to ₹8,000, recliner mechanism repair ₹1,500 to ₹4,000, and full reupholstery from ₹3,500 per seat. A transparent written quote is provided after doorstep inspection.",
    },
    {
      question: "Which societies in Greater Noida West do you serve?",
      answer:
        "We serve all major societies in Noida Extension including Gaur City 1 and 2, ATS Destinaire, Ace City, Supertech Eco Village, Ajnara Homes, Galaxy North Avenue, Paramount Floraville, Mahagun Mywoods and all residential complexes across Sector 1, 4, 16C and beyond.",
    },
    {
      question: "Can you repair recliners at home in Greater Noida?",
      answer:
        "Yes. We carry replacement motors, actuators, gas springs, mechanism frames and remote control boards for all major recliner brands. Most recliner repairs are completed in a single doorstep visit within two to three hours.",
    },
  ],

  relatedPages: buildRelatedPages("sofa-repair-greater-noida", NOIDA_RELATED),

  keywords: [
    "sofa repair Greater Noida",
    "sofa repair Noida Extension",
    "sofa repair Gaur City",
    "sofa repair ATS Destinaire",
    "sofa repair Greater Noida West",
    "leather sofa repair Greater Noida",
    "recliner repair Greater Noida",
    "sofa reupholstery Greater Noida",
    "couch repair Noida Extension",
    "doorstep sofa repair Greater Noida",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 2 — Sofa Repair Indirapuram Ghaziabad
// ─────────────────────────────────────────────────────────────────────────────

export const sofaRepairIndirapuramGhaziabad: SeoPageData = {
  slug: "sofa-repair-indirapuram-ghaziabad",
  category: "Sofa Repair",

  title: "Sofa Repair Near Me in Indirapuram Ghaziabad | ₹999 Home Service",

  metaDescription:
    "Sofa repair near me in Indirapuram Ghaziabad from ₹999. All khands: Niti, Ahinsa, Shakti, Nyay, Abhay, Gyan. Fabric, leather, recliner, sofa cover change near me. 6-month warranty.",

  h1: "Sofa Repair Near Me in Indirapuram Ghaziabad — All Khands Covered",

  heroSubtitle:
    "Doorstep sofa repair across Indirapuram — Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand. Serving Mahagun, ATS, Shipra and all societies. 6-month warranty from ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Ghaziabad Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Ghaziabad home — FurniRevive — Ghaziabad (Indirapuram)",
    caption: "Sofa Repair in Ghaziabad (Indirapuram) | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Sofa repair in Indirapuram Ghaziabad costs ₹999 to ₹6,000 depending on repair type, sofa size and material. FurniRevive provides doorstep sofa repair across all Indirapuram khands — Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand — serving Mahagun Moderne, ATS Greens, Shipra Suncity and all societies with a 6-month warranty.",

  intro: [
    "Indirapuram is Ghaziabad's most premium residential neighbourhood — a planned township spread across six khands (Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand) between NH-24 and the Vaishali–Kaushambi corridor. Over the past fifteen years, Indirapuram has grown into a dense, upper-middle-class residential belt with landmark societies like Mahagun Moderne, Mahagun Mascot, ATS Greens, ATS Advantage, Shipra Suncity, Shipra Riviera, Ajnara Integrity, Arihant Arden, Saya Zenith, Homes 121, and Aditya Urban Casa. Families here have invested significantly in quality furniture — and when sofas begin showing wear after three to five years, they need a repair service that matches the neighbourhood's standards.",

    "FurniRevive provides a fully doorstep sofa repair service designed for Indirapuram's apartment lifestyle. Our craftsmen travel directly to your society — whether it is Mahagun Moderne in Niti Khand, ATS Greens near the Swarn Jayanti Park boundary, or Shipra Suncity in Ahinsa Khand — with all tools, fabrics, leather treatments and foam supplies needed to complete the repair in a single visit. We handle every sofa type: fabric, rexine, <a href='/leather-sofa-repair-indirapuram'>leather sofa restoration in Indirapuram</a>, velvet, L-shaped sectionals, sofa-cum-beds and recliners — with full <a href='/recliner-repair-indirapuram'>premium seating repair</a> capability — from all brands.",

    "Indirapuram's excellent metro connectivity — with Vaishali Metro and Kaushambi Metro stations flanking the township — means our service teams reach your society gate quickly. Pricing starts at ₹999 for basic fabric repairs, leather restoration from ₹2,999, full reupholstery from ₹3,500 per seat, and recliner repair from ₹1,500. Every job comes with a transparent quote and a 6-month written warranty.",
  ],

  whyChoose: [
    {
      title: "All Six Khands Covered",
      description:
        "Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand — we serve every pocket of Indirapuram with no area restrictions and no additional travel charges.",
    },
    {
      title: "Landmark Society Experience",
      description:
        "Our craftsmen have served hundreds of homes in Mahagun Moderne, ATS Greens, Shipra Suncity, Ajnara Integrity and Arihant Arden. We understand the building layouts, parking norms and society entry protocols — your appointment runs smoothly.",
    },
    {
      title: "Premium Upholstery Expertise",
      description:
        "Indirapuram homes feature a wide range of sofa materials — Italian leather, imported velvet, premium cotton blends and high-end rexine. We colour-match, restore and reupholster all material types using professional-grade supplies.",
    },
    {
      title: "Same-Day and Next-Day Slots",
      description:
        "We maintain dedicated slot availability for Indirapuram. Book before noon and we can often send a craftsman the same afternoon to your society.",
    },
    {
      title: "400+ Fabric and Leather Swatches",
      description:
        "For reupholstery projects, our craftsman brings a physical library of 400+ swatches — cotton, linen, velvet, faux leather, genuine leather — so you can see and feel the material under your own home lighting before ordering.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair in Indirapuram is backed by a 6-month warranty. If anything fails within that period, we return to your home and fix it free — no questions asked.",
    },
  ],

  process: [
    {
      step: "Book Online or Call",
      description:
        "Schedule through our website or phone. We offer flexible time windows across weekdays and weekends, accommodating Indirapuram's large working professional population.",
    },
    {
      step: "Doorstep Inspection",
      description:
        "Our sofa repair specialist arrives at your apartment in Mahagun, ATS, Shipra or any Indirapuram society. They inspect the sofa's frame, springs, foam, upholstery and mechanisms, then provide a detailed written quote.",
    },
    {
      step: "On-Site Repair",
      description:
        "After your approval, work begins immediately. Most repairs are completed in two to four hours. Full reupholstery on large sectionals may require a second visit scheduled at no extra fee.",
    },
    {
      step: "Quality Check and Warranty",
      description:
        "The craftsman walks you through all completed work, tests mechanisms, and hands over a 6-month warranty card. Your restored sofa is ready for immediate use.",
    },
  ],

  benefits: [
    "Doorstep sofa repair across all six Indirapuram khands",
    "Serving Mahagun Moderne, ATS Greens, Shipra Suncity and all major societies",
    "Starting price ₹999 for basic fabric sofa repairs",
    "Leather restoration from ₹2,999 with colour-matched treatments",
    "Full reupholstery from ₹3,500 per seat with 400+ options",
    "Recliner mechanism repair from ₹1,500 including motor replacement",
    "L-shape sofa and sofa-cum-bed repair specialists",
    "Rexine and faux leather replacement for budget-friendly restoration",
    "Spring and foam replacement for sagging cushion restoration",
    "Same-day service for bookings made before noon",
    "6-month written warranty on all workmanship and materials",
    "Adjacent Vaishali and Kaushambi areas also covered",
  ],

  contentSections: [
    {
      heading: "Sofa Repair Across Indirapuram's Premium Societies",
      body: [
        "Indirapuram's residential landscape is dominated by large gated societies — Mahagun Moderne and Mahagun Mascot in Niti Khand, ATS Greens and ATS Advantage near Swarn Jayanti Park, Shipra Suncity and Shipra Riviera in Ahinsa Khand, Ajnara Integrity and Arihant Arden in Abhay Khand, and newer developments like Saya Zenith and Homes 121 closer to the NH-24 corridor. Each of these societies houses hundreds to thousands of families who have furnished their apartments with sofas ranging from compact two-seater fabric couches to oversized L-shaped leather sectionals and motorised recliners.",
        "After three to five years of daily use — accelerated by Delhi NCR's extreme summer heat, monsoon humidity and winter dryness — these sofas develop predictable problems. Fabric tears at high-stress seams, rexine cracks and peels, leather dries and discolours, foam compresses beyond recovery, recliner mechanisms jam, and wooden frames develop loose joints. FurniRevive's craftsmen resolve all these issues at your doorstep, bringing the full workshop to your living room. No sofa leaves your apartment, no repair takes more than a single day for standard issues.",
      ],
    },
    {
      heading: "Leather and Velvet Sofa Restoration in Indirapuram",
      body: [
        "Indirapuram's upper-middle-class demographic has a strong preference for leather and velvet sofas — premium materials that require specialised care. Leather sofas in air-conditioned Mahagun and ATS apartments develop surface cracking, colour fading and dryness faster than homeowners expect, while velvet sofas attract dust, develop pile crushing in high-use zones and are prone to watermark staining. Standard carpet cleaners and household remedies often worsen these issues rather than resolving them.",
        "FurniRevive uses professional-grade leather cleaners, fillers, colour-match dye kits, conditioners and sealants to restore leather sofas to near-original condition. For velvet, we employ steam-based pile restoration, professional stain removal and protective coating treatments that revive the fabric's lustre. Leather restoration costs ₹2,999 to ₹8,000 depending on damage extent, while velvet restoration and re-coating costs ₹2,000 to ₹5,000 per sofa. Both treatments include a post-service care kit and our standard 6-month warranty.",
      ],
    },
    {
      heading: "Extending to Vaishali, Kaushambi and Vasundhara",
      body: [
        "While Indirapuram is our primary focus for this service zone, we naturally extend coverage to the adjacent residential areas that share Indirapuram's premium character. Vaishali — connected by metro and just a five-minute drive from Niti Khand — has its own base of apartment societies and builder floors. Kaushambi's residential towers, including Mahagun Mansion, sit on Indirapuram's western boundary. Vasundhara's extensive residential grid to the south is equally within our standard service zone.",
        "Residents in these connecting areas receive the same pricing, warranty terms and craftsman quality as Indirapuram proper. For broader Ghaziabad coverage, visit our <a href=\"/sofa-repair-ghaziabad\">Sofa Repair Ghaziabad</a> and <a href=\"/furniture-repair-ghaziabad\">Furniture Repair Ghaziabad</a> pages. For Noida residents on the other side of the NH-24, explore <a href=\"/sofa-repair-noida\">Sofa Repair Noida</a>.",
      ],
    },
    {
      heading: "Transparent Pricing and Warranty",
      body: [
        "Indirapuram residents consistently ask about pricing before booking, and we believe in full transparency. Fabric tear repair starts at ₹999, single-seat foam replacement costs ₹800 to ₹2,500, rexine replacement from ₹1,500 per seat, leather restoration from ₹2,999 to ₹8,000, full fabric reupholstery from ₹3,500 per seat, and recliner mechanism repair from ₹1,500 to ₹4,000. Exact pricing depends on sofa size, material, damage extent and number of components requiring attention.",
        "Our 6-month warranty covers workmanship and materials — a written commitment signed by the craftsman. If anything fails within six months, we return to your Indirapuram apartment and resolve it free. This policy is why residents regularly recommend us to neighbours within the same society, creating a community trust that no advertising can replicate. To learn more about sofa care, visit our <a href=\"/blog\">Blog</a>.",
      ],
    },
    {
      heading: "Sofa Repair Near Me in Indirapuram — All Khands & Societies",
      body: [
        "When Indirapuram residents search 'sofa repair near me', FurniRevive covers all six khands — Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand — with dedicated technicians based in Ghaziabad. Our sofa repair near me home service in Indirapuram covers: sofa cover change near me (₹500/seat), sofa fabric change near me (₹2,500/seat), recliner repair near me (₹1,500), leather sofa repair near me (₹1,500), and full sofa renovation near me (from ₹6,000 for a 3-seater).",
        "Societies covered: Mahagun Moderne, ATS Greens, Shipra Suncity, Shipra Riviera, Ajnara Integrity, Arihant Arden, Saya Zenith and all Indirapuram complexes. Book before noon for same-day service. Call +91 92179 99355.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does sofa repair cost in Indirapuram?",
      answer:
        "Sofa repair in Indirapuram starts at ₹999 for basic fabric fixes. Leather restoration costs ₹2,999 to ₹8,000, recliner repair ₹1,500 to ₹4,000, and full reupholstery from ₹3,500 per seat. A written quote is provided after doorstep inspection before any work begins.",
    },
    {
      question: "Which societies in Indirapuram do you serve?",
      answer:
        "We serve all Indirapuram societies including Mahagun Moderne, Mahagun Mascot, ATS Greens, ATS Advantage, Shipra Suncity, Shipra Riviera, Ajnara Integrity, Arihant Arden, Saya Zenith, Homes 121 and all residential complexes across Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand.",
    },
    {
      question: "Do you serve Vaishali and Kaushambi too?",
      answer:
        "Yes. Vaishali, Kaushambi and Vasundhara are within our standard service zone and receive the same pricing, warranty and craftsman quality as Indirapuram. No additional travel charges apply.",
    },
    { question: "Is sofa repair near me available same day in Indirapuram Ghaziabad?", answer: "Yes. FurniRevive provides sofa repair near me home service across all Indirapuram khands — Niti Khand, Ahinsa Khand, Shakti Khand, Nyay Khand, Abhay Khand and Gyan Khand. Book before noon for same-day service. Sofa cover change near me from ₹500/seat. Call +91 92179 99355." },
    { question: "Do you provide sofa repair near me home service in Vaishali and Kaushambi?", answer: "Yes. Vaishali and Kaushambi are within our standard Indirapuram service zone. We charge the same prices and provide the same 6-month warranty. Our technicians reach Vaishali and Kaushambi within 45-60 minutes of booking." },
    { question: "What is the sofa repair cost in Indirapuram for a 3-seater?", answer: "Sofa repair cost in Indirapuram for a 3-seater ranges from ₹999 for basic fabric fixes to ₹6,000+ for full reupholstery. Cushion foam replacement costs ₹800–₹2,500 per seat. Leather restoration starts at ₹2,999. All prices include doorstep visit and 6-month warranty." },
    { question: "How long does sofa repair take in Indirapuram?", answer: "Most sofa repairs in Indirapuram are completed in 2-4 hours in a single visit. Simple cushion work takes 1-2 hours. Full reupholstery on large L-shaped sectionals may require a second visit, scheduled at no extra charge." },
    { question: "Which Indirapuram societies have you already served?", answer: "FurniRevive has served hundreds of homes in Mahagun Moderne, Mahagun Mascot, ATS Greens, ATS Advantage, Shipra Suncity, Shipra Riviera, Ajnara Integrity, Arihant Arden, Saya Zenith, and Homes 121 across all six Indirapuram khands." },
    { question: "What is included in the sofa repair price in Indirapuram?", answer: "The price includes: doorstep visit to your society, all labour, standard materials (fabric from stock, foam, springs), and 6-month warranty. Specialty fabrics or leather chosen outside our swatch book are quoted separately and ordered before work begins." },
    { question: "Do you cover Vasundhara and Rajnagar Extension for sofa repair?", answer: "Yes. Vasundhara and Rajnagar Extension are in our extended service area. Pricing and warranty terms are the same as Indirapuram. Our Ghaziabad-based technicians cover these areas with typical arrival times under one hour." },
  ],

  localAreasSection: {
    heading: "Sofa Repair Near Me — Indirapuram & Nearby Areas",
    areas: ["Niti Khand", "Ahinsa Khand", "Shakti Khand", "Nyay Khand", "Abhay Khand", "Gyan Khand", "Vaishali", "Kaushambi", "Vasundhara", "Mahagun Moderne", "ATS Greens", "Shipra Suncity", "Rajnagar Extension", "Crossings Republik"],
  },
  trustSignals: ["All 6 Indirapuram khands covered", "Same-day service — book before noon", "400+ fabric and leather swatches", "Serving Mahagun, ATS, Shipra societies", "6-month written warranty"],
  priceTable: {
    heading: "Sofa Repair Cost in Indirapuram Ghaziabad — 2025 (Factors: sofa type, material, damage extent)",
    rows: [
      { service: "Fabric Tear Repair", price: "₹999–₹2,500" },
      { service: "Cushion Foam Replacement (per seat)", price: "₹800–₹2,500" },
      { service: "Leather Restoration & Colour Repair", price: "₹2,999–₹8,000" },
      { service: "Full Fabric Reupholstery (per seat)", price: "₹3,500–₹6,000" },
      { service: "Rexine Replacement (per seat)", price: "₹1,500–₹3,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,500–₹4,000" },
      { service: "Spring & Frame Repair", price: "₹1,500–₹3,500" },
      { service: "L-Shape/Sectional Sofa Overhaul", price: "₹8,000–₹18,000" },
    ],
  },
  relatedPages: buildRelatedPages("sofa-repair-indirapuram-ghaziabad", GHAZIABAD_RELATED),

  keywords: [
    "sofa repair Indirapuram",
    "sofa repair Indirapuram Ghaziabad",
    "sofa repair Niti Khand Indirapuram",
    "sofa repair Ahinsa Khand",
    "sofa repair Mahagun Moderne",
    "sofa repair ATS Greens Indirapuram",
    "leather sofa repair Indirapuram",
    "sofa reupholstery Indirapuram Ghaziabad",
    "recliner repair Indirapuram",
    "doorstep sofa repair Indirapuram",
    "sofa repair near me Indirapuram",
    "sofa repair near me home service Indirapuram",
    "sofa cover change near me Indirapuram",
    "recliner repair near me Indirapuram",
    "sofa repair in Indirapuram Ghaziabad",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE 3 — Furniture Repair Crossing Republik Ghaziabad
// ─────────────────────────────────────────────────────────────────────────────

export const furnitureRepairCrossingRepublik: SeoPageData = {
  slug: "furniture-repair-crossing-republik-ghaziabad",

  title: "Furniture Repair Near Me in Crossing Republik Ghaziabad | ₹599",

  metaDescription:
    "Furniture repair near me in Crossing Republik Ghaziabad from ₹599. Sofa, bed, wardrobe & table repair at doorstep. GH-02 to GH-07, Raj Nagar Extension. 6-month warranty.",

  h1: "Furniture Repair Near Me in Crossing Republik Ghaziabad — All GH Sectors",

  heroSubtitle:
    "Professional doorstep furniture repair across Crossing Republik township — GH-02 to GH-07, Panchsheel Greens, Ajnara Le Garden, Nimbus Hyde Park and all major societies. 6-month warranty from ₹599.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Ghaziabad Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a warm cream premium fabric sofa in a luxury Ghaziabad home — FurniRevive — Ghaziabad (Crossing Republik)",
    caption: "Sofa Repair in Ghaziabad (Crossing Republik) | Premium upholstery & foam service | Home visit | FurniRevive",
  },

  quickAnswer:
    "Furniture repair in Crossing Republik Ghaziabad starts at ₹599. FurniRevive provides doorstep repair for sofas, beds, wardrobes, tables, chairs and all furniture across Crossing Republik's GH sectors serving Panchsheel Greens, Ajnara Le Garden, Nimbus Hyde Park, Saviour Park, Amrapali Sapphire and all societies with a 6-month warranty.",

  intro: [
    "Crossing Republik is one of Ghaziabad's largest integrated townships — a self-contained residential belt along NH-24 between Ghaziabad and Noida Extension. Spread across GH-02 through GH-07, the township houses lakhs of residents in societies like Panchsheel Greens, Panchsheel Hynish, Ajnara Le Garden, Nimbus Hyde Park, Saviour Park, Amrapali Sapphire, GH-07 Crossings Republik, Proview Laboni, Stellar Jeevan and KW Srishti. These apartments were largely delivered between 2014 and 2020, and the furniture bought during initial home setup is now five to ten years old — well past the point where professional repair becomes essential.",

    "FurniRevive provides a fully doorstep furniture repair service built for Crossing Republik's dense apartment ecosystem. Our craftsmen travel directly to your tower with woodworking tools, polish kits, upholstery supplies, replacement hardware and foam — repairing sofas, beds, wardrobes, dining tables, chairs, bookshelves and TV units at your home without needing to move any furniture. Whether the issue is a broken wardrobe hinge, a sagging sofa cushion, a cracked bed frame or a scratched dining table, we diagnose and fix it on-site.",

    "Crossing Republik's location on NH-24 gives our service teams direct access to the township, with arrival times typically under forty-five minutes. Pricing starts at ₹599 for minor fixes, sofa repair from ₹999, wardrobe repair from ₹1,000, bed frame repair from ₹1,500, and dining table refinishing from ₹3,000. Written quotes and a 6-month warranty are standard for every job.",
  ],

  whyChoose: [
    {
      title: "Complete Township Coverage",
      description:
        "GH-02, GH-03, GH-04, GH-05, GH-06 and GH-07 — we serve every sector of Crossing Republik township with no area exclusions. Panchsheel Greens, Ajnara Le Garden, Nimbus Hyde Park, Saviour Park and all societies are in our zone.",
    },
    {
      title: "Ageing Furniture Specialists",
      description:
        "Crossing Republik's furniture stock is five to ten years old — the sweet spot where repairs save thousands over replacement. Our craftsmen specialise in restoring mid-life furniture to near-new condition: re-gluing joints, replacing hardware, restoring polish and replacing upholstery.",
    },
    {
      title: "Budget-Friendly Repairs",
      description:
        "Young families in Crossing Republik are value-conscious. Starting at ₹599 for minor fixes and ₹999 for sofa repairs, our pricing is designed to be accessible while maintaining professional quality. Multi-piece discounts keep costs lower for whole-home repair needs.",
    },
    {
      title: "Online Furniture Expertise",
      description:
        "Pepperfry, Urban Ladder, Amazon, Flipkart and IKEA furniture is common in Crossing Republik homes. We carry brand-specific replacement hardware and understand the assembly systems used by each manufacturer.",
    },
    {
      title: "Multi-Room Single Visit",
      description:
        "Many Crossing Republik families need repairs across multiple rooms simultaneously. Our craftsmen handle sofa cushion work, wardrobe hardware, bed frame tightening and dining table polish in one visit — one booking, one bill.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "All repairs come with a 6-month warranty covering workmanship and materials. If anything fails within that period, we return and fix it at no charge.",
    },
  ],

  process: [
    {
      step: "Book a Repair Slot",
      description:
        "Schedule online or by phone. We offer morning, afternoon and evening windows seven days a week — perfect for Crossing Republik residents who commute to offices in Noida, Ghaziabad or Delhi.",
    },
    {
      step: "Craftsman Visits Your Tower",
      description:
        "Our specialist arrives at your apartment in Panchsheel Greens, Ajnara Le Garden, Nimbus Hyde Park or any Crossing Republik society. They inspect every piece of furniture you want repaired and provide a consolidated quote covering all items.",
    },
    {
      step: "On-Site Repair",
      description:
        "After approval, work begins immediately. Minor hardware fixes take thirty to sixty minutes. Sofa repairs, wardrobe overhauls and dining table refinishing take two to six hours depending on scope. Multi-item appointments are completed in a single dedicated visit.",
    },
    {
      step: "Inspection and Warranty",
      description:
        "The craftsman demonstrates all repairs — testing wardrobe doors, sofa cushions, bed frame stability and table surface finish — before handing over a 6-month warranty card for each repaired item.",
    },
  ],

  benefits: [
    "Doorstep furniture repair across all Crossing Republik GH sectors",
    "Serving Panchsheel Greens, Ajnara Le Garden, Nimbus Hyde Park and all societies",
    "Starting price ₹599 for minor hardware fixes",
    "Sofa repair from ₹999 including fabric, rexine and foam work",
    "Wardrobe repair from ₹1,000 including hinge and track replacement",
    "Bed frame repair from ₹1,500 with slat and rail replacement",
    "Dining table refinishing from ₹3,000 with polish restoration",
    "Expert with IKEA, Pepperfry, Urban Ladder and all online brands",
    "Multi-room repairs completed in a single craftsman visit",
    "Budget-friendly volume discounts for whole-home furniture repair",
    "6-month written warranty on all work",
    "Direct NH-24 access ensures fast craftsman arrival",
  ],

  contentSections: [
    {
      heading: "Furniture Repair for Crossing Republik's Ageing Apartment Stock",
      body: [
        "Crossing Republik's residential towers were largely delivered between 2014 and 2020, making the township's furniture stock five to ten years old — the critical age where quality starts declining but replacement costs remain prohibitively high. Sofas bought during initial home setup have compressed cushions and worn upholstery. Wardrobes installed by builders have developed hinge fatigue, sticky drawer channels and peeling laminate. Bed frames creak, dining tables show scratches and water marks, and bookshelf particleboard has started swelling in corners.",
        "FurniRevive's craftsmen encounter these exact issues every day in Crossing Republik's towers. We repair sofas (fabric patching, foam replacement, rexine change, spring repair), wardrobes (hinge replacement, track realignment, laminate repair, shelf reinforcement), beds (frame re-gluing, slat replacement, headboard reattachment), dining tables (polish restoration, scratch filling, leg levelling), and chairs (joint tightening, cushion restuffing, caster replacement). One craftsman visit can address multiple pieces across different rooms, saving you both time and money.",
      ],
    },
    {
      heading: "Wardrobe and Kitchen Cabinet Repair in Crossing Republik",
      body: [
        "Builder-installed modular wardrobes and kitchen cabinets are among the most common repair requests in Crossing Republik. These units use economy-grade hardware — standard cup hinges, basic drawer runners and lightweight sliding tracks — that begins failing after four to five years of daily use. Soft-close mechanisms lose their dampening action, doors sag on worn hinges, drawers stick or derail, and laminate edges curl away from the substrate in Delhi NCR's humidity swings.",
        "FurniRevive carries over 200 hardware SKUs covering every hinge type, drawer runner standard and sliding track system used in Ghaziabad's residential construction. Most wardrobe hardware repairs are completed in sixty to ninety minutes. Kitchen cabinet repairs — including re-lamination, hinge upgrade and drawer box reconstruction — are handled with the same efficiency. Wardrobe repair costs ₹1,000 to ₹3,500 depending on components needed, while kitchen cabinet repairs range from ₹800 to ₹2,500.",
      ],
    },
    {
      heading: "Sofa and Bed Repair Across GH Sectors",
      body: [
        "Every GH sector in Crossing Republik has its own set of prominent societies, and each presents the same furniture repair patterns. GH-02 societies like Panchsheel Greens and Panchsheel Hynish have some of the township's oldest delivered apartments — meaning sofas and beds here are at the seven to ten year mark where professional repair is not optional but essential. GH-05 and GH-06 societies like Nimbus Hyde Park and Saviour Park are slightly newer but already showing the effects of five years of daily furniture use.",
        "Sofa repair across these societies starts at ₹999 for fabric patching and foam replacement, scales to ₹3,500 for full rexine or fabric change per seat, and reaches ₹8,000 for complete L-shaped sectional restoration. Bed frame repairs start at ₹1,500 for slat and joint work and go up to ₹6,000 for comprehensive frame overhauls with headboard reattachment. Every repair is performed at your apartment — our craftsmen understand the logistics of high-rise tower work and complete jobs efficiently within your living space.",
      ],
    },
    {
      heading: "Service Area and Booking",
      body: [
        "Our Crossing Republik service zone covers the entire township from GH-02 through GH-07, plus the connecting residential pockets along NH-24 towards Ghaziabad city and towards Noida Extension. The township's direct frontage on NH-24 gives our service teams fast access from both the Ghaziabad and Greater Noida sides, with typical arrival times under forty-five minutes from booking confirmation.",
        "For broader Ghaziabad coverage including Indirapuram, Vaishali, Vasundhara and Raj Nagar Extension, visit our <a href=\"/furniture-repair-ghaziabad\">Furniture Repair Ghaziabad</a> page. For sofa-specific services across the city, see <a href=\"/sofa-repair-ghaziabad\">Sofa Repair Ghaziabad</a>. To explore Greater Noida coverage next door, check <a href=\"/furniture-repair-greater-noida\">Furniture Repair Greater Noida</a>.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does furniture repair cost in Crossing Republik?",
      answer:
        "Furniture repair starts at ₹599 for minor fixes. Sofa repair costs ₹999 to ₹8,000, wardrobe repair ₹1,000 to ₹3,500, bed frame repair ₹1,500 to ₹6,000, and dining table refinishing ₹3,000 to ₹10,000. A consolidated quote covering all items is provided after inspection.",
    },
    {
      question: "Which societies in Crossing Republik do you cover?",
      answer:
        "We cover all societies across GH-02 through GH-07 including Panchsheel Greens, Panchsheel Hynish, Ajnara Le Garden, Nimbus Hyde Park, Saviour Park, Amrapali Sapphire, Proview Laboni, Stellar Jeevan, KW Srishti and all residential complexes in the township.",
    },
    {
      question: "Can you repair multiple furniture items in one visit?",
      answer:
        "Yes — we actively encourage multi-item appointments. A single craftsman visit can cover sofa repair, wardrobe hardware, bed frame tightening, dining table polish and chair fixes across different rooms. A combined quote is provided before work begins.",
    },
    { question: "Do you offer furniture repair near me in Crossing Republik Ghaziabad?", answer: "Yes. Furniture repair near me covers all GH sectors (GH-02 to GH-07) and Raj Nagar Extension. Starting ₹599. Sofa repair from ₹999, wardrobe repair from ₹1,000. Same-day service available. Call +91 92179 99355." },
  ],

  relatedPages: buildRelatedPages("furniture-repair-crossing-republik-ghaziabad", [
    ...GHAZIABAD_RELATED,
    { label: "Sofa Repair Crossing Republik Ghaziabad", href: "/sofa-repair-crossing-republik-ghaziabad" },
    { label: "Sofa Repair Indirapuram", href: "/sofa-repair-indirapuram-ghaziabad" },
    { label: "Furniture Repair Greater Noida", href: "/furniture-repair-greater-noida" },
  ]),

  keywords: [
    "furniture repair Crossing Republik",
    "furniture repair Crossing Republik Ghaziabad",
    "sofa repair Crossing Republik",
    "wardrobe repair Crossing Republik",
    "bed repair Crossing Republik Ghaziabad",
    "furniture repair Panchsheel Greens",
    "furniture repair Nimbus Hyde Park",
    "carpenter service Crossing Republik",
    "dining table repair Crossing Republik",
    "doorstep furniture repair Crossing Republik",
    "furniture repair near me Crossing Republik",
    "furniture repair near me Raj Nagar Extension",
    "sofa repair near me Crossing Republik Ghaziabad",
    "furniture renovation near me Ghaziabad",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Aggregate Export
// ─────────────────────────────────────────────────────────────────────────────

export const NOIDA_GHAZIABAD_MICRO_PAGES: SeoPageData[] = [
  sofaRepairGreaterNoida,
  sofaRepairIndirapuramGhaziabad,
  furnitureRepairCrossingRepublik,
];
