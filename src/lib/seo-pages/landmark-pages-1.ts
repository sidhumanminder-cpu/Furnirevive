import type { SeoPageData } from "@/lib/seo-constants.ts";
import { buildRelatedPages } from "@/lib/seo-pages/core-links.ts";

const RELATED_LANDMARK_LINKS = [
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
  return RELATED_LANDMARK_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. FURNITURE REPAIR LAJPAT NAGAR
// ---------------------------------------------------------------------------
export const furnitureRepairLajpatNagar: SeoPageData = {
  slug: "furniture-repair-lajpat-nagar",
  title: "Furniture Repair in Lajpat Nagar Delhi | Doorstep ₹599 | FurniRevive",
  metaDescription:
    "Professional furniture repair in Lajpat Nagar, Defence Colony, Jangpura, South Extension & surrounding South Delhi areas. Sofa, bed, wardrobe repair. 6-month warranty. ₹599 onwards.",
  h1: "Furniture Repair in Lajpat Nagar & Surrounding South Delhi Localities",
  heroSubtitle:
    "Expert furniture repair at your doorstep in Lajpat Nagar I–IV, Defence Colony, Jangpura, Andrews Ganj, South Extension, Nizamuddin, and surrounding areas. Sofa, bed, dining table, wardrobe, chair — all repaired with a 6-month warranty starting at ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a Lajpat Nagar home — FurniRevive",
    caption: "Furniture Repair in Lajpat Nagar | Doorstep service across Defence Colony, Jangpura & South Extension | FurniRevive",
  },
  intro: [
    "Lajpat Nagar is one of South Delhi's most vibrant and densely populated residential-cum-commercial areas — home to the famous Lajpat Nagar Central Market, thousands of residential flats and DDA apartments across Lajpat Nagar I, II, III, and IV, and surrounded by equally populated colonies like Defence Colony, Jangpura Extension, Andrews Ganj, South Extension, and Nizamuddin East & West. The homes here are a mix of old Delhi charm and modern renovations, and the furniture inside them reflects that range — from inherited carved wooden almirahs and teak dining sets to modern L-shaped sofas and modular wardrobes.",
    "FurniRevive provides professional doorstep furniture repair across the entire Lajpat Nagar area and all its neighbouring colonies. Our craftsmen understand the unique challenges of working in this area: narrow lane access in the inner market areas, older DDA flats with limited manoeuvring space, and the high-quality vintage furniture in Defence Colony bungalows that requires careful handling. We arrive fully equipped with professional tools, premium materials, and fabric samples — ready to repair your sofa, bed, dining set, wardrobe, or any other furniture piece on-site.",
    "Starting at ₹599 with a 6-month warranty, our service saves Lajpat Nagar residents the hassle of transporting heavy furniture to the local furniture market workshops. Why carry a sofa across Lajpat Nagar's busy lanes when a skilled craftsman can come to your home? Call +91 92179 99355 or WhatsApp photos for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "Complete Lajpat Nagar Area Coverage",
      description:
        "Lajpat Nagar I, II, III, IV, Defence Colony, Jangpura, Jangpura Extension, Andrews Ganj, South Extension I & II, Nizamuddin East & West, Sunder Nagar, and all surrounding areas.",
    },
    {
      title: "Vintage & Modern Furniture",
      description:
        "From heirloom carved wooden pieces in Defence Colony bungalows to flat-pack wardrobes in Lajpat Nagar DDA flats — we repair all furniture types with appropriate techniques for each.",
    },
    {
      title: "No Transport Needed",
      description:
        "Lajpat Nagar's narrow lanes and busy streets make furniture transport a nightmare. Our doorstep service eliminates that entirely — we come to your home with everything needed.",
    },
    {
      title: "Same-Day Service",
      description:
        "Our South Delhi–based technicians can reach Lajpat Nagar within hours. Book before noon for same-day furniture repair at your doorstep.",
    },
    {
      title: "Starting at ₹599",
      description:
        "Chair repair from ₹599, sofa repair from ₹999. Written quotation before any work begins. No hidden charges, no market-rate markups.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every repair backed by a company warranty valid at your Lajpat Nagar address. Free return visits for warranty claims within 48 hours.",
    },
  ],
  process: [
    {
      step: "Book & Share Photos",
      description:
        "Call +91 92179 99355 or WhatsApp photos of the damaged furniture. Mention your lane or colony name in the Lajpat Nagar area for accurate scheduling.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician visits your Lajpat Nagar home, inspects the furniture, and provides a detailed written quote. No charge and no obligation.",
    },
    {
      step: "Professional Repair at Home",
      description:
        "Upon approval, our craftsmen carry out all repairs on-site — upholstery, carpentry, polish, and hardware replacement. Most repairs completed in 2–4 hours.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "We inspect the completed work with you, clean the area, and provide your 6-month warranty card. Payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep service across Lajpat Nagar I–IV and all surrounding colonies",
    "Sofa repair: cushion replacement, reupholstery, spring and frame repair",
    "Bed repair: frame reinforcement, headboard fix, hydraulic storage repair",
    "Dining table and chair repair: joint tightening, polish, leg replacement",
    "Wardrobe repair: hinge, door, shelf, and sliding track fixing",
    "Wood polishing and refinishing for vintage and modern furniture",
    "Fabric, leather, and rexine upholstery work",
    "Recliner mechanism and motor repair",
    "Starting at ₹599 — transparent pricing",
    "Same-day service for bookings before noon",
    "6-month written warranty on all repairs",
    "Experienced craftsmen familiar with Lajpat Nagar area homes",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Services in the Lajpat Nagar Area",
      body: [
        "Lajpat Nagar and its surrounding colonies have one of the highest densities of residential furniture in South Delhi — and correspondingly high demand for repair services. Sofa repair is our most requested service in this area. The typical Lajpat Nagar home has a 5-seater sofa set in the drawing room that sees heavy daily use from families and guests. After 4–5 years, cushions sag, fabric frays at the armrests, and frames develop creaks. Our complete sofa restoration — new high-density foam, fresh upholstery from 500+ fabric options, spring replacement, and frame reinforcement — revives these sofas at 30–40% of the cost of a new set.",
        "Defence Colony, adjacent to Lajpat Nagar, has many larger homes with premium imported sofas and vintage wooden furniture. Here our premium leather repair, French polish, and designer fabric reupholstery services are particularly popular. Jangpura Extension's compact DDA flats need space-efficient repair solutions — we're experienced at working in tight spaces without disrupting the household. Andrews Ganj and South Extension residents typically have mid-to-premium furniture that benefits from our professional polish, upholstery, and mechanism repair services.",
      ],
    },
    {
      heading: "Why Doorstep Repair Beats Lajpat Nagar Market Workshops",
      body: [
        "Lajpat Nagar Central Market and the surrounding commercial area has several small furniture repair workshops — so why choose FurniRevive's doorstep service instead? The answer comes down to convenience, quality, and accountability. Transporting a heavy sofa or bed from your third-floor DDA flat, through narrow Lajpat Nagar lanes, to a market workshop is physically difficult and risks additional damage to the furniture during transit. Most market workshops also lack formal pricing — the quote changes after the work is half done — and provide no written warranty.",
        "FurniRevive eliminates all of these problems. We come to your home — no furniture transport needed. We provide a written quote before starting — the price doesn't change. We use centrally sourced, quality-tested materials — not whatever is cheapest at the local hardware shop. And we back every repair with a 6-month company warranty — not a verbal assurance from an individual carpenter. For Lajpat Nagar residents who value their time and want guaranteed results, professional doorstep repair is the clearly superior choice.",
      ],
    },
    {
      heading: "Furniture Repair Cost in Lajpat Nagar Area",
      body: [
        "Our Lajpat Nagar pricing follows standard Delhi rates with no area surcharges. Chair re-gluing and minor fixes start at ₹599. Sofa cushion foam replacement: ₹999–₹2,500 per cushion. Full 3-seater sofa reupholstery: ₹8,000–₹20,000. Bed frame repair: ₹1,500–₹5,000. Hydraulic storage bed mechanism: ₹2,000–₹4,000. Dining table polish: ₹3,000–₹8,000. Wardrobe hinge and door repair: ₹500–₹2,000. Recliner mechanism repair: ₹1,499–₹6,000.",
        "For Defence Colony's premium furniture, leather sofa restoration ranges from ₹5,000–₹25,000 and antique wood restoration is quoted individually based on the piece's requirements. All quotes are detailed and provided in writing during the free doorstep inspection. Multi-piece repair packages are available for customers with several items to fix in one visit.",
      ],
    },
    {
      heading: "Areas We Cover Around Lajpat Nagar",
      body: [
        "Our furniture repair service from the Lajpat Nagar hub covers: Lajpat Nagar I, II, III, and IV; Defence Colony (all blocks); Jangpura and Jangpura Extension; Andrews Ganj; South Extension Part I and Part II; Nizamuddin East and West; Sunder Nagar; Bhogal; Maharani Bagh; New Friends Colony; Sukhdev Vihar; Amar Colony; and all residential colonies within a 3-kilometre radius of Lajpat Nagar Metro Station.",
        "We also serve the adjacent areas of Greater Kailash I and II, Kailash Colony, East of Kailash, and CR Park from our South Delhi operations. If your colony isn't listed, call us — we almost certainly cover it.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you provide furniture repair in all parts of Lajpat Nagar?",
      answer:
        "Yes. We cover Lajpat Nagar I, II, III, IV, and all lanes within the Lajpat Nagar residential area, plus Defence Colony, Jangpura, South Extension, and all surrounding colonies.",
    },
    {
      question: "How quickly can you reach Lajpat Nagar for repair?",
      answer:
        "Same-day service for bookings before noon. Our South Delhi technicians are typically within 30–60 minutes of Lajpat Nagar. Standard appointments within 24 hours.",
    },
    {
      question: "What is the starting price for furniture repair in Lajpat Nagar?",
      answer:
        "Basic chair and hardware repairs start at ₹599. Sofa cushion repair from ₹999. Free doorstep inspection and written quote before any work begins.",
    },
    {
      question: "Can you work in compact DDA flats in Lajpat Nagar?",
      answer:
        "Yes. Our technicians are experienced working in Lajpat Nagar's DDA flats with limited space. We use compact tools and protective sheeting to work neatly in small rooms.",
    },
    {
      question: "Do you repair vintage furniture in Defence Colony?",
      answer:
        "Yes. We specialise in restoring vintage carved teak, sheesham, and colonial-era furniture. French polish, traditional joinery, and period-appropriate restoration techniques.",
    },
    {
      question: "Do you service furniture in Jangpura and Andrews Ganj?",
      answer:
        "Yes. Jangpura, Jangpura Extension, and Andrews Ganj are within our core Lajpat Nagar service area. Same pricing and warranty apply.",
    },
    {
      question: "Can I get sofa reupholstery done at home in Lajpat Nagar?",
      answer:
        "Yes. We bring 500+ fabric samples to your home, you choose the fabric, and our craftsmen complete the full reupholstery at your doorstep. No transport needed.",
    },
    {
      question: "Is the 6-month warranty valid for Lajpat Nagar repairs?",
      answer:
        "Yes. Our 6-month written warranty is valid at your Lajpat Nagar area address. Free return visits for warranty claims within 48 hours.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-lajpat-nagar"),
    { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar" },
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
  ],
  keywords: [
    "furniture repair lajpat nagar",
    "sofa repair lajpat nagar",
    "furniture repair defence colony",
    "furniture repair jangpura",
    "carpenter lajpat nagar",
    "sofa repair defence colony delhi",
    "furniture repair south extension",
    "furniture repair near lajpat nagar",
    "bed repair lajpat nagar",
    "wardrobe repair lajpat nagar",
  ],
};

// ---------------------------------------------------------------------------
// 2. FURNITURE REPAIR KIRTI NAGAR
// ---------------------------------------------------------------------------
export const furnitureRepairKirtiNagar: SeoPageData = {
  slug: "furniture-repair-kirti-nagar",
  title: "Furniture Repair Near Kirti Nagar Delhi | Doorstep ₹599 | FurniRevive",
  metaDescription:
    "Expert furniture repair near Kirti Nagar furniture market, Rajouri Garden, Tilak Nagar, Hari Nagar & Moti Nagar. Sofa, bed, wardrobe repair at your doorstep. 6-month warranty. ₹599 onwards.",
  h1: "Furniture Repair Near Kirti Nagar — West Delhi's Doorstep Repair Service",
  heroSubtitle:
    "Professional furniture repair at your doorstep near Kirti Nagar furniture market, Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, Tagore Garden, Subhash Nagar, and Ramesh Nagar. Sofa, bed, chair, wardrobe, dining table — all repaired with a 6-month warranty from ₹599.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a fabric sofa near Kirti Nagar furniture market — FurniRevive",
    caption: "Furniture Repair near Kirti Nagar | Doorstep service across Rajouri Garden, Tilak Nagar & Moti Nagar | FurniRevive",
  },
  intro: [
    "Kirti Nagar is home to Asia's largest furniture market — a sprawling cluster of hundreds of showrooms and workshops spread along the Najafgarh Road corridor. Residents of the surrounding West Delhi colonies — Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, Tagore Garden, Subhash Nagar, Ramesh Nagar, Vikaspuri, and Janakpuri — live within walking distance of the finest furniture craftsmen in the country. Yet when their existing furniture needs repair, many struggle to find a reliable service that comes to their home rather than requiring them to transport bulky pieces to a Kirti Nagar workshop.",
    "FurniRevive bridges this gap. We provide doorstep furniture repair across the entire Kirti Nagar area and all surrounding West Delhi residential colonies. Our craftsmen source materials from the Kirti Nagar market — the same premium fabrics, foams, wood, and hardware that the showrooms use — and bring them directly to your home. You get market-quality materials and expert craftsmanship without leaving your house.",
    "Whether you bought your sofa from a Kirti Nagar showroom five years ago and it needs reupholstering, or your Rajouri Garden flat has a wardrobe with jammed doors, or your Tilak Nagar dining table wobbles — we handle it all. Starting at ₹599 with a 6-month warranty. Call +91 92179 99355 or WhatsApp photos for a quick estimate.",
  ],
  whyChoose: [
    {
      title: "Kirti Nagar Market Materials",
      description:
        "We source fabric, foam, wood, and hardware directly from Kirti Nagar's wholesale market — the same quality used in showroom furniture, at wholesale prices passed on to you.",
    },
    {
      title: "All West Delhi Colonies",
      description:
        "Kirti Nagar, Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, Tagore Garden, Subhash Nagar, Ramesh Nagar, Vikaspuri, Janakpuri, and all surrounding areas.",
    },
    {
      title: "Doorstep — No Transport",
      description:
        "Live near Kirti Nagar but don't want to carry a sofa to a workshop? We come to your home with all tools and materials. Zero transport hassle.",
    },
    {
      title: "Same-Day Availability",
      description:
        "Our West Delhi team is based near Kirti Nagar. Book before noon for same-day furniture repair. Fast response times for the entire West Delhi area.",
    },
    {
      title: "All Furniture Types",
      description:
        "Sofas, beds, dining sets, wardrobes, TV units, recliners, office furniture — we repair every piece in your home using the right techniques for each material.",
    },
    {
      title: "6-Month Warranty from ₹599",
      description:
        "Written warranty at your address. Transparent pricing. Free doorstep inspection. Starting at ₹599 for basic repairs.",
    },
  ],
  process: [
    {
      step: "WhatsApp Photos & Book",
      description:
        "Call +91 92179 99355 or WhatsApp photos of the furniture damage. Mention your colony name in the Kirti Nagar or West Delhi area for scheduling.",
    },
    {
      step: "Free Home Inspection",
      description:
        "Our technician visits your West Delhi home, inspects the furniture, and provides a detailed written quote. No charge, no obligation.",
    },
    {
      step: "Repair at Your Doorstep",
      description:
        "After approval, we repair on-site using Kirti Nagar–sourced materials. Upholstery, carpentry, polish, hardware — everything done at your home.",
    },
    {
      step: "Warranty Handover",
      description:
        "Quality inspection with you present, area cleanup, and 6-month warranty card handover. Payment only after satisfaction.",
    },
  ],
  benefits: [
    "Materials sourced from Kirti Nagar wholesale furniture market",
    "Doorstep service across all West Delhi residential colonies",
    "Sofa reupholstery with 500+ fabric options from Kirti Nagar suppliers",
    "High-density foam (32D, 40D) from Kirti Nagar foam dealers",
    "Bed frame repair, headboard fix, and hydraulic storage repair",
    "Dining table and chair joint repair with professional polish",
    "Wardrobe hinge, door, shelf, and sliding track repair",
    "Recliner mechanism and motor servicing",
    "Starting at ₹599 with transparent pricing",
    "Same-day service from West Delhi–based technicians",
    "6-month written warranty on all repairs",
    "10,000+ furniture repairs completed across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "The Kirti Nagar Advantage — Premium Materials at Your Doorstep",
      body: [
        "Living near Kirti Nagar's famous furniture market gives you access to arguably the best furniture materials in India — but carrying your sofa to a market workshop and back is impractical and risky. FurniRevive gives you the Kirti Nagar advantage without the hassle. Our sofa reupholstery fabric is sourced from the same Kirti Nagar wholesalers who supply the showrooms — velvet, chenille, linen, cotton blends, microfibre, and premium leatherette in hundreds of colours and textures. Our foam is 32D and 40D high-density foam from Kirti Nagar's foam market — the same grade used in new showroom sofas, not the cheap foam that local repair services use.",
        "Our wood, hardware, and finishing materials also come from Kirti Nagar and neighbouring Patel Nagar wholesale markets. When we repair your furniture at your doorstep in Rajouri Garden, Tilak Nagar, or anywhere in West Delhi, you're getting the exact same material quality as a Kirti Nagar workshop — but with the convenience of doorstep service, written warranties, and transparent pricing that those workshops rarely provide.",
      ],
    },
    {
      heading: "Popular Furniture Repairs in West Delhi Colonies",
      body: [
        "Rajouri Garden is our busiest West Delhi colony for furniture repair. The mix of old DDA flats, builder floors, and newer apartments means diverse furniture — from 20-year-old teak dining sets to recent Pepperfry purchases. Sofa repair and reupholstery dominate our Rajouri Garden bookings, followed by bed frame repair and wardrobe door fixing. Tilak Nagar and Hari Nagar, with their large DDA flat population, have high demand for budget-friendly repairs — chair re-gluing, bed plywood replacement, and sofa cushion re-stuffing at our lowest price points.",
        "Moti Nagar and Tagore Garden, with their mix of flats and independent floors, generate steady demand for dining table polish, wardrobe servicing, and sofa restoration. Subhash Nagar and Ramesh Nagar residents frequently request recliner repair — these colonies have a high proportion of recliners from Kirti Nagar showrooms that need mechanism servicing after 3–4 years. Across all these colonies, our doorstep service is particularly valued because the Kirti Nagar market area traffic and parking make workshop visits a daylong ordeal.",
      ],
    },
    {
      heading: "Furniture Repair Cost Near Kirti Nagar",
      body: [
        "Our West Delhi pricing matches standard Delhi NCR rates — no area premiums despite the proximity to Kirti Nagar market. Chair repair from ₹599. Sofa cushion foam replacement: ₹999–₹2,500 per cushion. Full 3-seater sofa reupholstery with Kirti Nagar–sourced fabric: ₹8,000–₹20,000. Bed frame repair: ₹1,500–₹5,000. Hydraulic bed mechanism: ₹2,000–₹4,000. Dining table polish (melamine/PU): ₹3,000–₹8,000. Wardrobe door and hinge repair: ₹500–₹2,000.",
        "Because we source materials at Kirti Nagar wholesale rates, our material costs are often lower than what independent carpenters charge for retail-purchased materials. Combined with our transparent pricing and 6-month warranty, FurniRevive is the most reliable and value-for-money furniture repair option for residents near Kirti Nagar.",
      ],
    },
    {
      heading: "Areas We Cover Near Kirti Nagar",
      body: [
        "Our Kirti Nagar–area service covers: Kirti Nagar (residential blocks), Kirti Nagar Industrial Area (offices), Rajouri Garden (all blocks including Main Market area), Tilak Nagar, Hari Nagar, Moti Nagar, Tagore Garden (all blocks), Subhash Nagar, Ramesh Nagar, Vikaspuri (all blocks), Janakpuri (all blocks), Patel Nagar (East, West, South), Naraina Vihar, Rajinder Nagar, and Shadipur.",
        "We also serve Punjabi Bagh, Paschim Vihar, and Madipur from this West Delhi hub. If your West Delhi colony isn't listed, call +91 92179 99355 — our coverage is comprehensive across the entire West Delhi region.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you use materials from Kirti Nagar furniture market?",
      answer:
        "Yes. Our fabric, foam, wood, and hardware are sourced directly from Kirti Nagar's wholesale market — the same quality used in showroom furniture, at wholesale pricing.",
    },
    {
      question: "Do you serve Rajouri Garden for furniture repair?",
      answer:
        "Yes. Rajouri Garden is our busiest West Delhi colony. All blocks and market-area residences are covered with same-day availability and no area surcharges.",
    },
    {
      question: "Can you repair furniture bought from Kirti Nagar showrooms?",
      answer:
        "Absolutely. We repair furniture from all Kirti Nagar showrooms and manufacturers — sofas, beds, dining sets, and wardrobes of all types and materials.",
    },
    {
      question: "What is the cheapest furniture repair near Kirti Nagar?",
      answer:
        "Basic repairs start at ₹599 — chair re-gluing, hinge replacement, and minor fixes. Sofa cushion repair from ₹999. Free inspection and written quote provided.",
    },
    {
      question: "Do you cover Tilak Nagar and Hari Nagar?",
      answer:
        "Yes. Tilak Nagar, Hari Nagar, and all DDA colonies in the area are within our core service zone. Same pricing and warranty as other West Delhi areas.",
    },
    {
      question: "How quickly can you come near Kirti Nagar?",
      answer:
        "Same-day service for bookings before noon. Our West Delhi team is based near the Kirti Nagar area. Standard appointments within 24 hours.",
    },
    {
      question: "Do you provide sofa reupholstery near Kirti Nagar?",
      answer:
        "Yes. We bring 500+ fabric samples (sourced from Kirti Nagar) to your home. Full 3-seater reupholstery: ₹8,000–₹20,000 depending on fabric choice.",
    },
    {
      question: "Is the 6-month warranty valid for Kirti Nagar area repairs?",
      answer:
        "Yes. Our 6-month written warranty covers all repairs at your West Delhi address. Free return visits for warranty claims.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-kirti-nagar"),
    { label: "Sofa Repair Kirti Nagar", href: "/sofa-repair-kirti-nagar" },
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
    { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
  ],
  keywords: [
    "furniture repair kirti nagar",
    "furniture repair near kirti nagar",
    "sofa repair kirti nagar",
    "furniture repair rajouri garden",
    "furniture repair tilak nagar",
    "sofa repair rajouri garden",
    "carpenter kirti nagar",
    "furniture repair moti nagar",
    "sofa reupholstery kirti nagar",
    "furniture repair west delhi",
  ],
};

// ---------------------------------------------------------------------------
// 3. SOFA REPAIR MAYUR VIHAR
// ---------------------------------------------------------------------------
export const sofaRepairMayurVihar: SeoPageData = {
  slug: "sofa-repair-mayur-vihar",
  title: "Sofa Repair in Mayur Vihar Delhi | Doorstep ₹999 | FurniRevive",
  metaDescription:
    "Professional sofa repair in Mayur Vihar Phase 1, 2, 3, Patparganj, Preet Vihar, Laxmi Nagar & East Delhi. Reupholstery, foam, frame repair. 6-month warranty. ₹999 onwards.",
  h1: "Sofa Repair in Mayur Vihar & East Delhi — Doorstep Reupholstery & Restoration",
  heroSubtitle:
    "Expert sofa repair at your doorstep in Mayur Vihar Phase 1, 2, 3, Patparganj, IP Extension, Preet Vihar, Laxmi Nagar, Vivek Vihar, and all East Delhi areas. Cushion replacement, reupholstery, leather repair, frame reinforcement, and recliner servicing — starting ₹999 with a 6-month warranty.",
  showcaseImage: {
    heading: "Professional Sofa Repair — Premium Home Service in Delhi",
    imageUrl: "https://hercules-cdn.com/file_UifJps576NjMbznF228eVPn1",
    altText: "Professional sofa repair technician working on a fabric sofa in a Mayur Vihar apartment — FurniRevive",
    caption: "Sofa Repair in Mayur Vihar | Doorstep service across Phase 1, 2, 3, Patparganj & IP Extension | FurniRevive",
  },
  intro: [
    "Mayur Vihar is East Delhi's largest and most prominent residential area — spanning Phase 1, Phase 2, Phase 3, and the adjacent Patparganj and IP Extension colonies. With thousands of DDA flats, CGHS apartments, builder floors, and pocket colonies, Mayur Vihar is home to over half a million residents whose sofas endure the full spectrum of Delhi life: joint family gatherings, festival celebrations, children's play, and daily use by working professionals who come home wanting a comfortable seat after a long commute.",
    "FurniRevive provides professional doorstep sofa repair across the entire Mayur Vihar area and all surrounding East Delhi localities — Preet Vihar, Laxmi Nagar, Vivek Vihar, Shakarpur, Mandawali, and Pandav Nagar. We handle every sofa type found in East Delhi homes: fabric three-seater sets, L-shaped sectionals in newer apartments, leather sofas in premium flats, recliners purchased from Kirti Nagar or online brands, and sofa cum beds in compact flats. Our services cover cushion foam replacement, complete reupholstery with 500+ fabric options, leather crack repair and conditioning, spring replacement, frame reinforcement, and recliner mechanism servicing.",
    "Starting at ₹999 with a 6-month warranty, our sofa repair saves Mayur Vihar residents 60–70% compared to buying a new sofa. We work at your home — no need to transport a heavy sofa through Mayur Vihar's apartment corridors and stairways. Call +91 92179 99355 or WhatsApp photos for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "All Mayur Vihar Phases Covered",
      description:
        "Phase 1, Phase 2, Phase 3, Pocket A–D, Patparganj, IP Extension, and all residential pockets within the Mayur Vihar area. No location surcharges.",
    },
    {
      title: "Apartment & High-Rise Friendly",
      description:
        "Mayur Vihar's DDA flats and high-rise apartments mean sofas can't easily leave the building. Our doorstep service repairs your sofa where it sits — no moving required.",
    },
    {
      title: "500+ Fabric Options",
      description:
        "We bring an extensive fabric sample collection to your Mayur Vihar home — cotton, velvet, microfibre, linen, leather, and faux leather in hundreds of colours and patterns.",
    },
    {
      title: "All Sofa Types",
      description:
        "3-seater sets, L-shaped, sectional, recliner, sofa cum bed, diwan — we repair every sofa configuration. Fabric, leather, rexine, and velvet materials.",
    },
    {
      title: "Same-Day Service",
      description:
        "Book before noon for same-day sofa repair in Mayur Vihar. Our East Delhi team ensures fast response across all phases and surrounding colonies.",
    },
    {
      title: "6-Month Warranty from ₹999",
      description:
        "All sofa repairs backed by a 6-month written warranty. Starting at ₹999. Transparent pricing with written quotes before work begins.",
    },
  ],
  process: [
    {
      step: "WhatsApp Photos",
      description:
        "Send photos of your sofa damage to +91 92179 99355 via WhatsApp. Mention your Mayur Vihar phase and pocket number. We reply with a preliminary estimate within minutes.",
    },
    {
      step: "Free Home Visit with Fabric Samples",
      description:
        "Our sofa specialist visits your Mayur Vihar home with fabric samples (for reupholstery) or diagnostic tools (for mechanism repair). Free inspection and detailed written quote.",
    },
    {
      step: "Doorstep Repair",
      description:
        "After approval, our craftsmen carry out the full sofa repair at your home — foam replacement, reupholstery, frame repair, or mechanism fix. Most completed in 3–6 hours.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "We test every cushion, seam, and mechanism, clean the work area, and provide your 6-month warranty card. Payment after your complete satisfaction.",
    },
  ],
  benefits: [
    "Cushion foam replacement with high-density 32D and 40D foam",
    "Complete reupholstery with 500+ fabric options brought to your home",
    "Leather sofa crack repair, re-dyeing, and conditioning",
    "Sofa spring replacement — sagless, sinuous, and coil springs",
    "Frame reinforcement for wooden and metal sofa frames",
    "Recliner mechanism repair and motor replacement",
    "Sofa cum bed mechanism repair and mattress replacement",
    "L-shaped and sectional sofa panel reupholstery",
    "Doorstep service across all Mayur Vihar phases and East Delhi",
    "Same-day service available for bookings before noon",
    "6-month written warranty from ₹999",
    "Save 60–70% compared to buying a new sofa",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Services in Mayur Vihar & East Delhi",
      body: [
        "The most common sofa repair in Mayur Vihar homes is cushion foam replacement. DDA flats across Phase 1 and Phase 2 typically have 5-seater sofa sets (3+1+1) that were purchased 5–8 years ago. The original foam has compressed to half its thickness, creating uncomfortable seating and visible sagging. We replace the old foam with high-density 32D foam (standard) or premium 40D foam (for firmer, longer-lasting comfort), cut precisely to the original cushion dimensions and wrapped in Dacron for a plush feel. This single repair transforms the sofa's comfort level dramatically — at ₹999–₹2,500 per cushion versus ₹15,000+ for new sofa cushions.",
        "Reupholstery is our second most popular service in Mayur Vihar. After years of use, sofa fabric fades, stains, and tears — particularly at armrests and seat fronts where friction is highest. We bring 500+ fabric samples to your Mayur Vihar home, help you choose a fabric that suits your drawing room décor and budget, and carry out the full reupholstery on-site. For IP Extension and Patparganj apartments with L-shaped and sectional sofas, we handle complex multi-panel reupholstery with precise colour and pattern matching across all sections.",
      ],
    },
    {
      heading: "Why Mayur Vihar Residents Choose Doorstep Sofa Repair",
      body: [
        "Mayur Vihar's residential layout makes doorstep sofa repair not just convenient but practically necessary. Most residences are in DDA flats on upper floors — moving a heavy sofa down narrow stairways (many Phase 1 blocks don't have lifts that fit a sofa) risks damage to both the sofa and the stairway. Even in newer Phase 3 apartments with lifts, a three-seater sofa rarely fits inside. The alternative — hiring movers to carry the sofa down and then back up — adds ₹2,000–₹3,000 to the repair cost and several hours of disruption.",
        "FurniRevive's doorstep service eliminates all of this. Our craftsmen arrive at your flat with all materials and tools in carry bags and toolboxes that fit in any lift. The sofa never leaves your drawing room. We lay protective sheeting, carry out the repair, clean up, and leave — all within a few hours. For Mayur Vihar residents, this convenience alone makes professional doorstep sofa repair the obvious choice over any workshop-based alternative.",
      ],
    },
    {
      heading: "Sofa Repair Cost in Mayur Vihar & East Delhi",
      body: [
        "Our Mayur Vihar pricing is competitive and transparent. Cushion foam replacement: ₹999–₹2,500 per cushion depending on size and foam density. Full 3-seater sofa reupholstery in mid-range fabric: ₹8,000–₹15,000. Premium fabric (velvet, imported linen): ₹12,000–₹20,000. Leather sofa crack repair: ₹2,999–₹8,000. Spring replacement: ₹1,500–₹4,000 per seat. Frame reinforcement: ₹1,500–₹4,000. Recliner mechanism repair: ₹1,499–₹6,000.",
        "For context: a new 3-seater fabric sofa of decent quality costs ₹18,000–₹40,000 in Delhi NCR. Complete sofa restoration including new foam, new fabric, spring check, and frame reinforcement typically costs ₹10,000–₹18,000 — half the price of replacement, with a result that looks and feels brand new. All pricing is provided upfront in a written quote after our free doorstep visit.",
      ],
    },
    {
      heading: "East Delhi Areas We Cover from Mayur Vihar",
      body: [
        "Our East Delhi service hub covers: Mayur Vihar Phase 1 (all pockets and extensions), Mayur Vihar Phase 2 (all pockets), Mayur Vihar Phase 3, Patparganj (residential and industrial area), IP Extension (all pockets), Preet Vihar, Laxmi Nagar, Nirman Vihar, Vivek Vihar, Shakarpur, Mandawali, Pandav Nagar, Ganesh Nagar, Kondli, Trilokpuri, Kalyanpuri, and all colonies along the Vikas Marg corridor.",
        "We also cover Vasundhara Enclave, New Ashok Nagar, Noida Sector 18 (border area), and Gazipur from this East Delhi hub. Our East Delhi coverage is comprehensive — if you're within East Delhi, we serve you with the same pricing and warranty as any other part of Delhi NCR.",
        "Updated in March 2026 with latest sofa repair pricing and service coverage in Delhi NCR.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you cover all Mayur Vihar phases for sofa repair?",
      answer:
        "Yes. Phase 1 (all pockets), Phase 2 (all pockets), Phase 3, Patparganj, and IP Extension — complete coverage with no location surcharges.",
    },
    {
      question: "How quickly can you come to Mayur Vihar for sofa repair?",
      answer:
        "Same-day service for bookings before noon. Our East Delhi team is based near Mayur Vihar. Standard appointments within 24 hours.",
    },
    {
      question: "What is the starting price for sofa repair in Mayur Vihar?",
      answer:
        "Sofa cushion foam replacement starts at ₹999. Minor sofa fixes (leg tightening, small tears) from ₹799. Free doorstep inspection and written quote provided.",
    },
    {
      question: "Can you repair sofas in Mayur Vihar DDA flats without moving them?",
      answer:
        "Yes. Our entire service is done at your doorstep. The sofa stays in your drawing room. We bring all tools and materials in bags that fit in any lift or stairway.",
    },
    {
      question: "Do you offer sofa reupholstery in Mayur Vihar?",
      answer:
        "Yes. We bring 500+ fabric samples to your home. Full 3-seater reupholstery from ₹8,000. Completed at your doorstep in 4–6 hours.",
    },
    {
      question: "Do you serve Patparganj and IP Extension?",
      answer:
        "Yes. Patparganj and IP Extension are within our core East Delhi service area. Same pricing and same-day availability.",
    },
    {
      question: "Can you repair recliners in Mayur Vihar?",
      answer:
        "Yes. Recliner mechanism repair and motor replacement for all brands. Cost: ₹1,499–₹6,000. Done at your doorstep.",
    },
    {
      question: "Is the 6-month warranty valid for Mayur Vihar sofa repairs?",
      answer:
        "Yes. Our 6-month written warranty is valid at your Mayur Vihar address. Free return visits for warranty claims within 48 hours.",
    },
  ],
  relatedPages: buildRelatedPages("sofa-repair-mayur-vihar", [
    { label: "Sofa Repair East Delhi", href: "/sofa-repair-east-delhi" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Sofa Repair Preet Vihar", href: "/sofa-repair-preet-vihar" },
    { label: "Sofa Repair Laxmi Nagar", href: "/sofa-repair-laxmi-nagar" },
    { label: "Sofa Repair Anand Vihar", href: "/sofa-repair-anand-vihar" },
    { label: "Furniture Repair East Delhi", href: "/furniture-repair-east-delhi" },
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
    { label: "Recliner Repair Mayur Vihar", href: "/recliner-repair-mayur-vihar" },
  ]),
  keywords: [
    "sofa repair mayur vihar",
    "sofa repair mayur vihar phase 1",
    "sofa repair mayur vihar phase 2",
    "sofa repair patparganj",
    "sofa repair ip extension",
    "sofa repair preet vihar",
    "sofa repair east delhi",
    "sofa reupholstery mayur vihar",
    "sofa repair near me east delhi",
    "sofa repair laxmi nagar",
  ],
};

export const LANDMARK_PAGES_1: SeoPageData[] = [
  furnitureRepairLajpatNagar,
  furnitureRepairKirtiNagar,
  sofaRepairMayurVihar,
];
