import type { SeoPageData } from "@/lib/seo-constants.ts";
import { buildRelatedPages } from "@/lib/seo-pages/core-links.ts";

const DELHI_SOFA_RELATED = [
  { label: "Sofa Repair Cost Delhi", href: "/sofa-repair-cost-delhi" },
  { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
  { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
];

// ---------------------------------------------------------------------------
// 1. SOFA REPAIR IN EAST DELHI
// Parent: /furniture-repair-east-delhi
// ---------------------------------------------------------------------------
export const sofaRepairEastDelhi: SeoPageData = {
  slug: "sofa-repair-east-delhi",
  title: "Sofa Repair East Delhi | Preet Vihar, Mayur Vihar ₹999 | Same Day | FurniRevive",
  metaDescription:
    "Expert sofa repair in East Delhi — Preet Vihar, Mayur Vihar, Laxmi Nagar. Foam, spring & upholstery fixed at your doorstep. Starting ₹999. Book same-day service now!",
  h1: "Sofa Repair in East Delhi — Preet Vihar, Mayur Vihar & All Areas",
  heroSubtitle:
    "Expert sofa repair at your doorstep across East Delhi — Preet Vihar, Mayur Vihar Phase 1–3, Laxmi Nagar, Patparganj, IP Extension, Pandav Nagar, and Shakarpur. Foam replacement, reupholstery, spring repair, and recliner fixing with a 6-month warranty starting at ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your East Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury East Delhi home — FurniRevive",
    caption: "Sofa Repair in East Delhi | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in East Delhi costs ₹999–₹4,500 depending on repair type. Cushion foam replacement starts at ₹999 per seat, spring repair at ₹1,500, and full reupholstery from ₹3,000 per seat. FurniRevive provides same-day doorstep service across Preet Vihar, Mayur Vihar, Laxmi Nagar, Patparganj, and IP Extension.",
  intro: [
    "East Delhi is home to some of the capital's densest residential pockets — from the high-rise apartments of Mayur Vihar Phase 1 along the Noida Link Road to the independent builder floors lining the bylanes of Laxmi Nagar and Shakarpur. The living-room sofa in every one of these homes absorbs years of daily use — family gatherings, movie nights, and afternoon naps — until the cushions go flat, the fabric tears at stress points, and springs start to sag. Replacing a sofa set in East Delhi means navigating crowded furniture markets and spending ₹30,000 to ₹80,000 or more. FurniRevive's doorstep sofa repair service offers a smarter alternative.",
    "Our sofa repair technicians cover every pocket of East Delhi: Preet Vihar, Mayur Vihar Phase 1, 2, and 3, Patparganj Industrial Area residential blocks, IP Extension (Indraprastha Extension), Pandav Nagar, Shakarpur, Mandawali, Ganesh Nagar, and the DDA flats near Trilokpuri. We carry 32D and 40D high-resilience foam, 500+ upholstery fabric swatches, spring replacement kits, and industrial wood adhesive to every call. Most sofa repairs are completed in 2–3 hours without moving the sofa out of your home.",
    "With prices starting at ₹999 for single-seat foam replacement and full sofa restoration costing 60–70% less than buying new, FurniRevive helps East Delhi families save money while getting a sofa that feels brand new. Every repair is backed by a 6-month written warranty. Book before noon for same-day service. Call +91 92179 99355 or WhatsApp photos for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "Complete East Delhi Coverage",
      description:
        "Preet Vihar, Mayur Vihar Phase 1–3, Laxmi Nagar, Patparganj, IP Extension, Pandav Nagar, Shakarpur, Mandawali, and Trilokpuri — no area surcharge across East Delhi.",
    },
    {
      title: "Sofa-Specific Expertise",
      description:
        "Unlike general carpenters, our technicians specialise exclusively in sofa and upholstered furniture — leather sofas, fabric recliners, L-shaped sectionals, and motorised recliner mechanisms.",
    },
    {
      title: "32D & 40D Foam On-Site",
      description:
        "We bring both standard (32D) and high-density (40D) foam to your doorstep. Flattened cushions are replaced on the spot — no workshop trips or multi-day waits.",
    },
    {
      title: "Same-Day Doorstep Arrival",
      description:
        "Book before noon and our East Delhi team arrives the same day. Homes near Preet Vihar metro or Mayur Vihar Phase 2 typically get service within 90 minutes.",
    },
    {
      title: "Transparent ₹999–₹4,500 Pricing",
      description:
        "A written quote is shared after free doorstep inspection. The final bill matches exactly — no hidden charges or mid-job price increases.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair in East Delhi carries a company-backed 6-month warranty. If the same issue recurs, we return and fix it at zero cost.",
    },
  ],
  process: [
    {
      step: "WhatsApp Photos & Book",
      description:
        "Send photos of your damaged sofa to +91 92179 99355. Mention your East Delhi locality — Preet Vihar, Laxmi Nagar, IP Extension, etc. Slot confirmed within 30 minutes.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician examines the sofa frame, springs, foam, and upholstery at your East Delhi address and provides a written quote with no obligation.",
    },
    {
      step: "On-Site Sofa Repair",
      description:
        "Repair is completed at your home using pre-stocked materials. Foam replacement, spring fixing, and reupholstery — most jobs done in 2–3 hours.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "You inspect the finished sofa, we clean up fully, hand over the 6-month warranty card, and collect payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep sofa repair across all East Delhi localities",
    "Cushion foam replacement with 32D and 40D high-resilience foam",
    "Full sofa reupholstery from ₹3,000 per seat — 500+ fabric options",
    "Sofa spring and zigzag wire repair starting ₹1,500",
    "Recliner mechanism repair — manual and motorised",
    "L-shaped and sectional sofa repair without dismantling",
    "Leather and rexine sofa conditioning, crack-filling, and colour match",
    "Sofa frame joint reinforcement with industrial adhesive",
    "Save 60–70% compared to buying a new sofa set",
    "Same-day service for bookings before noon",
    "6-month written warranty on every repair",
    "Verified craftsmen with 5+ years of sofa specialisation",
  ],
  contentSections: [
    {
      heading: "Types of Sofas We Repair in East Delhi",
      body: [
        "Our East Delhi sofa repair service covers every sofa type found in homes across Preet Vihar, Mayur Vihar, and Laxmi Nagar. Fabric sofas are the most common — from the standard 3+1+1 sets in DDA flats near Trilokpuri to the premium chenille and velvet sets in Mayur Vihar Phase 1 apartments. We handle full reupholstery, partial fabric patching, and cushion cover replacement for all fabric types.",
        "Leather and leatherette sofas are increasingly popular in the newer apartment complexes along Patparganj Road and IP Extension. We offer leather crack-filling, custom colour matching, re-dyeing, and deep conditioning. L-shaped sectionals, corner sofas, and modular sofa sets — common in spacious Mayur Vihar Phase 3 homes — are repaired in-place without moving the sofa. Recliner sofas with manual or motorised mechanisms are another speciality, with mechanism repair, motor replacement, and lever fixing available on-site.",
      ],
    },
    {
      heading: "Common Sofa Problems in East Delhi Homes",
      body: [
        "Sagging cushions are the number-one sofa complaint across East Delhi. After three to five years of daily use, the foam inside seat cushions loses density and compresses permanently. This is particularly common in the humid East Delhi climate where moisture accelerates foam degradation. We replace sagging cushions with 32D or 40D high-resilience foam that maintains its shape for five or more years.",
        "Torn upholstery at armrests and seat edges is the second most common issue, especially in homes with children or pets in areas like Pandav Nagar and Ganesh Nagar. Broken sofa frames and creaking joints rank third — often caused by rough use or poor original construction from budget furniture shops. Spring failure — where sinuous S-springs snap or detach — creates an uncomfortable dipping seat that worsens with each use.",
      ],
    },
    {
      heading: "Sofa Repair Cost in East Delhi — Transparent Pricing",
      body: [
        "Our East Delhi sofa repair pricing follows standard Delhi NCR rates with no location surcharge. Single-seat cushion foam replacement costs ₹999–₹2,500 depending on foam density and seat size. Complete 3-seater sofa foam replacement runs ₹4,000–₹9,000. Sofa reupholstery is ₹3,000–₹15,000 per seat depending on fabric choice — cotton and polyester at the lower end, premium leatherette and imported velvet at the higher end.",
        "Sofa spring repair costs ₹1,500–₹4,000 per sofa. Frame joint repair starts at ₹800. Recliner mechanism repair ranges from ₹1,499–₹6,000. A full 3-seater sofa restoration including foam, fabric, springs, and frame work costs ₹10,000–₹25,000 — compared to ₹30,000–₹80,000 for a new sofa of similar quality.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cost of sofa repair in East Delhi?",
      answer:
        "Sofa repair in East Delhi starts at ₹999. Cushion foam replacement costs ₹999–₹2,500 per seat. Spring repair is ₹1,500–₹4,000. Full reupholstery ranges from ₹3,000–₹15,000 per seat. A free doorstep inspection provides the exact quote.",
    },
    {
      question: "Do you repair L-shaped sofas in Mayur Vihar apartments?",
      answer:
        "Yes. We repair L-shaped, corner, and sectional sofas in-place at your Mayur Vihar Phase 1, 2, or 3 apartment. No dismantling or moving the sofa out. Our technicians are experienced working in apartment living rooms.",
    },
    {
      question: "How soon can you reach Preet Vihar or Laxmi Nagar for sofa repair?",
      answer:
        "Book before noon for same-day service. For homes near Preet Vihar metro, Laxmi Nagar metro, or Patparganj, we typically arrive within 60–90 minutes during standard hours.",
    },
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — East Delhi",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Conditioning", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and lose support after just a few minutes of sitting",
    "Springs make clicking or popping noises when you sit down",
    "Visible tears, fraying, or peeling on fabric or leather",
    "The sofa frame creaks or feels unstable when you shift weight",
    "One side sits visibly lower than the other",
    "Foam has turned lumpy, crumbled, or lost its shape",
    "Armrest covering is separating from the frame",
    "Recliner mechanism is stuck, jerky, or won't lock in position",
  ],
  relatedPages: buildRelatedPages("sofa-repair-east-delhi", [
    ...DELHI_SOFA_RELATED,
    { label: "Furniture Repair East Delhi", href: "/furniture-repair-east-delhi" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Sofa Repair Mayur Vihar", href: "/sofa-repair-mayur-vihar" },
    { label: "Sofa Repair Preet Vihar", href: "/sofa-repair-preet-vihar" },
    { label: "Sofa Repair Laxmi Nagar", href: "/sofa-repair-laxmi-nagar" },
    { label: "Sofa Repair Anand Vihar", href: "/sofa-repair-anand-vihar" },
    { label: "Sofa Repair Patparganj", href: "/sofa-repair-patparganj" },
  ]),
  keywords: [
    "sofa repair east delhi",
    "sofa repair preet vihar",
    "sofa repair mayur vihar",
    "sofa repair laxmi nagar",
    "sofa repair patparganj",
    "sofa repair ip extension",
    "sofa reupholstery east delhi",
    "sofa foam replacement east delhi",
    "sofa spring repair east delhi",
    "recliner repair east delhi",
    "leather sofa repair east delhi",
    "sofa repair near me east delhi",
  ],
};

// ---------------------------------------------------------------------------
// 2. SOFA REPAIR IN LAJPAT NAGAR
// Parent: /furniture-repair-lajpat-nagar
// ---------------------------------------------------------------------------
export const sofaRepairLajpatNagar: SeoPageData = {
  slug: "sofa-repair-lajpat-nagar",
  title: "Sofa Repair Lajpat Nagar | Fix Sofa ₹999 | Same-Day Doorstep | FurniRevive",
  metaDescription:
    "Sofa repair in Lajpat Nagar, Defence Colony & South Extension. Foam, spring & re-upholstery starting ₹999. Same-day doorstep service. Free inspection. Book now!",
  h1: "Sofa Repair in Lajpat Nagar — Defence Colony, Jangpura & Nearby",
  heroSubtitle:
    "Doorstep sofa repair across Lajpat Nagar I–IV, Defence Colony, Jangpura Extension, South Extension Part 1 & 2, Andrews Ganj, and Amar Colony. Foam replacement, fabric reupholstery, spring repair, and leather sofa conditioning with a 6-month warranty. Starting ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Lajpat Nagar Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Lajpat Nagar home — FurniRevive",
    caption: "Sofa Repair in Lajpat Nagar | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Lajpat Nagar costs ₹999–₹4,500 depending on the repair. Cushion foam replacement starts at ₹999 per seat, spring repair at ₹1,500, full reupholstery from ₹3,000 per seat. FurniRevive provides same-day doorstep service across Lajpat Nagar, Defence Colony, Jangpura, and South Extension.",
  intro: [
    "Lajpat Nagar sits at the heart of South Delhi's busiest residential and commercial belt. From the compact DDA flats of Lajpat Nagar Part III and the well-established residential blocks of Defence Colony to the vibrant lanes near Jangpura Extension and the upscale apartments of South Extension, thousands of families rely on their living-room sofa as the centrepiece of daily life. After years of regular use, sofas in this area inevitably develop sagging cushions, torn upholstery, broken springs, or creaking frames.",
    "FurniRevive's sofa repair technicians serve every lane and block across the Lajpat Nagar cluster. We handle all sofa types — standard fabric 3+1+1 sets, premium leather sofas, L-shaped sectionals, and recliner mechanisms. Our team carries 32D and 40D foam, 500+ fabric swatches, spring kits, and industrial adhesive to complete repairs in a single doorstep visit. Most jobs take 2–3 hours.",
    "With repair costs starting at ₹999 and full restoration saving 60–70% versus buying new, Lajpat Nagar residents get a like-new sofa without the expense or hassle of replacement. Every repair comes with a 6-month written warranty. Call +91 92179 99355 or WhatsApp us photos for an instant quote.",
  ],
  whyChoose: [
    {
      title: "Covers All Lajpat Nagar Blocks",
      description:
        "Lajpat Nagar I, II, III, IV, Defence Colony, Jangpura Extension, South Extension Part 1 & 2, Andrews Ganj, and Amar Colony — all served at standard pricing.",
    },
    {
      title: "Sofa-Only Specialisation",
      description:
        "We focus exclusively on sofa and upholstered seating repair — not general carpentry. This means deeper expertise in foam grading, spring tensioning, upholstery fitting, and recliner mechanisms.",
    },
    {
      title: "500+ Fabric Choices at Your Door",
      description:
        "Our technicians carry a complete swatch book to your Lajpat Nagar home. Cotton, chenille, velvet, leatherette, and rexine in hundreds of colours and textures — choose at home, not in a distant market.",
    },
    {
      title: "Rapid South Delhi Response",
      description:
        "Our South Delhi team is stationed centrally, ensuring arrivals within 60–90 minutes for Lajpat Nagar and Defence Colony addresses. Book before noon for same-day service.",
    },
    {
      title: "No Hidden Costs",
      description:
        "Written quotation after free doorstep inspection. The final bill matches the quote — no surprise additions for materials, transport, or finishing.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Every sofa repair is backed by a written 6-month warranty. If the same problem reoccurs, we return and fix it at no cost.",
    },
  ],
  process: [
    {
      step: "Share Photos via WhatsApp",
      description:
        "Send photos of your sofa damage to +91 92179 99355. Mention your Lajpat Nagar block, Defence Colony, or nearby landmark. Slot confirmed within 30 minutes.",
    },
    {
      step: "Free Doorstep Assessment",
      description:
        "Technician inspects your sofa — frame, springs, foam density, fabric condition — and provides a detailed written quote with zero obligation.",
    },
    {
      step: "Same-Visit Sofa Repair",
      description:
        "Approved repairs are completed on the spot. Foam cutting, fabric fitting, spring replacement, and frame reinforcement — all done in your living room in 2–3 hours.",
    },
    {
      step: "Inspection & Warranty Card",
      description:
        "You check the finished sofa, we clean up, hand over the warranty card, and collect payment only after you are fully satisfied.",
    },
  ],
  benefits: [
    "Doorstep sofa repair across Lajpat Nagar, Defence Colony, Jangpura, and South Extension",
    "Cushion foam replacement — 32D and 40D high-resilience options",
    "Full reupholstery from ₹3,000/seat with 500+ fabric choices",
    "Sofa spring and zigzag wire repair from ₹1,500",
    "Recliner mechanism repair — manual and motorised models",
    "L-shaped sofa repair without dismantling",
    "Leather sofa conditioning, crack-filling, and colour restoration",
    "Frame joint reinforcement with industrial-grade adhesive",
    "Save 60–70% vs buying new — repairs from ₹999",
    "Same-day service for morning bookings",
    "6-month written warranty on all repairs",
  ],
  contentSections: [
    {
      heading: "Sofa Types We Repair Near Lajpat Nagar",
      body: [
        "The Lajpat Nagar area features a wide range of sofas. The older DDA flats in Lajpat Nagar Part III and Amar Colony commonly have standard 3+1+1 fabric sofa sets — these typically need foam replacement and reupholstery after four to six years. The bungalows and larger apartments of Defence Colony often house premium leather sofas, sectional L-shaped sets, and imported recliner sofas that require specialised handling.",
        "We handle all of these: fabric sofas in cotton, linen, chenille, and velvet; leather sofas including genuine, bonded, and PU leather; leatherette and rexine sofas; L-shaped and corner modular sets; recliner sofas with manual lever or motorised mechanisms; and sofa-cum-beds with fold-out or pull-out mechanisms. Each sofa type gets treatment tailored to its construction and materials.",
      ],
    },
    {
      heading: "Common Sofa Issues in the Lajpat Nagar Area",
      body: [
        "Sagging cushions are the most frequent complaint. The combination of high daily use and Delhi's humid summers accelerates foam degradation, leaving seat cushions permanently compressed. We replace old foam with 32D (standard comfort) or 40D (firm, long-lasting) high-resilience foam cut to your exact cushion dimensions.",
        "Torn upholstery at armrests and seam lines is the second most common issue, particularly in homes with children or pets. Broken sofa frames — cracked side panels or separated arm joints — rank third, often from rough handling during past relocations. Spring failure causes a noticeable dip in the seat and worsens rapidly once one spring snaps.",
      ],
    },
    {
      heading: "Sofa Repair Pricing Near Lajpat Nagar",
      body: [
        "All prices follow standard Delhi NCR rates — no locality surcharge for Lajpat Nagar, Defence Colony, or South Extension. Single-seat foam replacement: ₹999–₹2,500. Full 3-seater foam replacement: ₹4,000–₹9,000. Reupholstery: ₹3,000–₹15,000 per seat. Spring repair: ₹1,500–₹4,000. Frame repair: ₹800–₹2,000. Recliner mechanism: ₹1,499–₹6,000.",
        "A complete 3-seater sofa restoration (foam + fabric + springs + frame) costs ₹10,000–₹25,000 — a fraction of the ₹40,000–₹90,000 you would spend on a comparable new sofa from the Lajpat Nagar Central Market or online retailers.",
        "Updated in March 2026 with latest sofa repair pricing and service coverage in Delhi NCR.",
      ],
    },
  ],
  faqs: [
    {
      question: "What does sofa repair cost in Lajpat Nagar?",
      answer:
        "Sofa repair in Lajpat Nagar starts at ₹999. Foam replacement is ₹999–₹2,500 per seat. Spring repair costs ₹1,500–₹4,000. Full reupholstery is ₹3,000–₹15,000 per seat. A free doorstep inspection gives you the exact price before any work begins.",
    },
    {
      question: "Can you repair leather sofas in Defence Colony?",
      answer:
        "Yes. We repair genuine leather, bonded leather, and PU leather sofas in Defence Colony. Services include crack-filling, custom colour matching, re-dyeing, conditioning, and full re-covering. Leather sofa repair starts at ₹1,500.",
    },
    {
      question: "How quickly can you come to Lajpat Nagar for sofa repair?",
      answer:
        "Book before noon for same-day service. For Lajpat Nagar, Defence Colony, Jangpura, and South Extension addresses, our South Delhi team typically arrives within 60–90 minutes.",
    },
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Lajpat Nagar",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Conditioning", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and lose support after just a few minutes of sitting",
    "Springs make clicking or popping noises when you sit down",
    "Visible tears, fraying, or peeling on fabric or leather",
    "The sofa frame creaks or feels unstable when you shift weight",
    "One side sits visibly lower than the other",
    "Foam has turned lumpy, crumbled, or lost its shape",
    "Armrest covering is separating from the frame",
    "Recliner mechanism is stuck, jerky, or won't lock in position",
  ],
  relatedPages: buildRelatedPages("sofa-repair-lajpat-nagar", [
    ...DELHI_SOFA_RELATED,
    { label: "Furniture Repair Lajpat Nagar", href: "/furniture-repair-lajpat-nagar" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  ]),
  keywords: [
    "sofa repair lajpat nagar",
    "sofa repair defence colony",
    "sofa repair jangpura",
    "sofa repair south extension",
    "sofa reupholstery lajpat nagar",
    "sofa foam replacement lajpat nagar",
    "leather sofa repair defence colony",
    "sofa spring repair lajpat nagar",
    "recliner repair south delhi",
    "sofa repair near me lajpat nagar",
  ],
};

// ---------------------------------------------------------------------------
// 3. SOFA REPAIR IN KIRTI NAGAR
// Parent: /furniture-repair-kirti-nagar
// ---------------------------------------------------------------------------
export const sofaRepairKirtiNagar: SeoPageData = {
  slug: "sofa-repair-kirti-nagar",
  title: "Sofa Repair Kirti Nagar Delhi | ₹999 Save vs Buying New | FurniRevive",
  metaDescription:
    "Sofa repair near Kirti Nagar — Rajouri Garden, Tilak Nagar, Hari Nagar. Foam, spring & upholstery at doorstep ₹999. Cheaper than buying new. Book today!",
  h1: "Sofa Repair Near Kirti Nagar — West Delhi's Sofa Restoration Experts",
  heroSubtitle:
    "Professional sofa repair near Kirti Nagar furniture market, Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, and Ramesh Nagar. Foam replacement, reupholstery, spring repair, and recliner fixing at your doorstep. 6-month warranty. Starting ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Kirti Nagar Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Kirti Nagar home — FurniRevive",
    caption: "Sofa Repair in Kirti Nagar | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair near Kirti Nagar costs ₹999–₹4,500. Cushion foam replacement starts at ₹999 per seat, spring repair at ₹1,500, full reupholstery from ₹3,000 per seat. FurniRevive offers doorstep sofa repair across Kirti Nagar, Rajouri Garden, Tilak Nagar, and surrounding West Delhi areas.",
  intro: [
    "Kirti Nagar is synonymous with furniture in Delhi — the sprawling Kirti Nagar Furniture Market is the largest in Asia. Ironically, thousands of families living in Kirti Nagar, Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, and Ramesh Nagar still struggle to find reliable sofa repair. Buying a new sofa from the market feels convenient, but repairing your existing sofa can save 60–70% of the cost while delivering the same comfort and appearance.",
    "FurniRevive's sofa repair technicians serve the entire West Delhi corridor around Kirti Nagar. Whether you live in the DDA flats off Shivaji Marg, the residential lanes behind Rajouri Garden metro, or the independent floors of Hari Nagar and Tilak Nagar — we arrive at your doorstep with all materials needed for a single-visit repair. Our team carries 32D and 40D foam, 500+ upholstery fabrics, spring replacement kits, and specialised tools for recliner mechanisms.",
    "Why replace when you can restore? Sofa repairs in the Kirti Nagar area start at just ₹999, and every job is backed by a 6-month written warranty. Call +91 92179 99355 or send WhatsApp photos for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "Serves All West Delhi Around Kirti Nagar",
      description:
        "Kirti Nagar, Rajouri Garden, Tilak Nagar, Hari Nagar, Moti Nagar, Ramesh Nagar, Naraina, Patel Nagar, and Subhash Nagar — full West Delhi coverage at standard pricing.",
    },
    {
      title: "Repair Over Replace",
      description:
        "Even though Asia's largest furniture market is next door, professional sofa repair costs a fraction of new furniture. We help Kirti Nagar area families save ₹20,000–₹55,000 on a single 3-seater restoration.",
    },
    {
      title: "Premium Materials at Doorstep",
      description:
        "32D and 40D high-resilience foam, 500+ fabric swatches, genuine leather conditioning kits, and industrial-strength spring replacements — all brought to your home.",
    },
    {
      title: "West Delhi's Fastest Response",
      description:
        "Our West Delhi base ensures arrivals within 60–90 minutes for Kirti Nagar, Rajouri Garden, and Tilak Nagar. Book before noon for same-day service.",
    },
    {
      title: "Fixed-Price Written Quotes",
      description:
        "Free doorstep inspection followed by a written quotation. No mid-job price changes, no hidden material or transport costs.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Company-backed warranty covers every sofa repair. If the same issue returns within six months, we fix it free of charge.",
    },
  ],
  process: [
    {
      step: "WhatsApp Your Sofa Photos",
      description:
        "Send photos of the sofa damage to +91 92179 99355. Mention your West Delhi locality — Kirti Nagar, Rajouri Garden, Tilak Nagar, etc. Booking confirmed within 30 minutes.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Technician inspects the sofa's frame, springs, foam, and fabric condition at your home. You receive a written quote with no obligation to proceed.",
    },
    {
      step: "Single-Visit Sofa Repair",
      description:
        "Approved work is completed on-site: foam replacement, upholstery fitting, spring repair, and frame reinforcement — typically finished in 2–3 hours.",
    },
    {
      step: "Sign-Off & Warranty",
      description:
        "You inspect the restored sofa. We clean up, hand over the 6-month warranty card, and collect payment only after your approval.",
    },
  ],
  benefits: [
    "Doorstep sofa repair across Kirti Nagar, Rajouri Garden, Tilak Nagar, and surrounding areas",
    "Cushion foam replacement — choose 32D or 40D density on the spot",
    "Full sofa reupholstery from ₹3,000 per seat with 500+ fabric options",
    "Sofa spring and S-wire repair starting ₹1,500",
    "Recliner mechanism repair — manual lever and motorised models",
    "L-shaped and sectional sofa repair in your living room",
    "Leather sofa crack-filling, re-dyeing, and conditioning",
    "Frame joint reinforcement with industrial wood adhesive",
    "Save 60–70% vs replacing — even with Kirti Nagar market prices",
    "Same-day service for morning bookings",
    "6-month written warranty on every repair",
  ],
  contentSections: [
    {
      heading: "Sofa Types We Repair in the Kirti Nagar Area",
      body: [
        "West Delhi homes around Kirti Nagar feature an incredibly diverse range of sofas — partly because the nearby furniture market makes it easy to buy varied styles. Standard 3+1+1 fabric sofa sets are the most common in the DDA flats and builder floors of Tilak Nagar and Hari Nagar. Premium leather and leatherette sofas are popular in the upscale apartments of Rajouri Garden and Moti Nagar.",
        "We repair all types: fabric sofas (cotton, linen, chenille, velvet), leather sofas (genuine, bonded, PU), leatherette and rexine, L-shaped corner sets, modular sectional sofas, recliner sofas (manual and motorised), and sofa-cum-beds. Each type receives material-specific treatment — leather sofas get specialised crack-filling and conditioning, while fabric sofas get pattern-matched reupholstery.",
      ],
    },
    {
      heading: "Most Common Sofa Problems Near Kirti Nagar",
      body: [
        "Sagging cushions top the list across West Delhi. After three to five years, even sofas purchased from premium Kirti Nagar showrooms develop compressed foam — the cushions flatten permanently and the sofa loses its supportive feel. We replace this with 32D or 40D high-resilience foam that holds shape for five-plus years.",
        "Torn upholstery is especially common at armrests and front edges where fabric stretches during use. Many families in Rajouri Garden and Tilak Nagar also report broken sofa frames — usually from rough handling during room rearrangements or relocations. Spring failure creates an uncomfortable sagging seat that worsens progressively.",
      ],
    },
    {
      heading: "Sofa Repair Cost Near Kirti Nagar — Full Price Breakdown",
      body: [
        "Standard Delhi NCR pricing applies — no extra charge for any West Delhi locality. Single-seat foam replacement: ₹999–₹2,500. Complete 3-seater foam: ₹4,000–₹9,000. Reupholstery per seat: ₹3,000–₹15,000. Spring repair: ₹1,500–₹4,000. Frame repair: ₹800–₹2,000. Recliner mechanism: ₹1,499–₹6,000. Full restoration (foam + fabric + springs + frame): ₹10,000–₹25,000.",
        "By comparison, a new 3-seater sofa from Kirti Nagar furniture market costs ₹25,000–₹80,000. Full restoration with FurniRevive saves West Delhi families ₹15,000–₹55,000 — with a 6-month warranty that many market purchases do not include.",
      ],
    },
  ],
  faqs: [
    {
      question: "What does sofa repair cost near Kirti Nagar?",
      answer:
        "Sofa repair near Kirti Nagar starts at ₹999. Foam replacement: ₹999–₹2,500 per seat. Spring repair: ₹1,500–₹4,000. Full reupholstery: ₹3,000–₹15,000 per seat. Free doorstep inspection provides the exact price.",
    },
    {
      question: "Is sofa repair cheaper than buying new from Kirti Nagar market?",
      answer:
        "Yes. Full sofa restoration costs ₹10,000–₹25,000 compared to ₹25,000–₹80,000 for a new sofa of similar quality from Kirti Nagar. You save 60–70% while keeping your existing frame and design.",
    },
    {
      question: "Do you repair recliner sofas in Rajouri Garden?",
      answer:
        "Yes. We repair manual lever and motorised recliner mechanisms for all brands. Recliner repair in Rajouri Garden costs ₹1,499–₹6,000 depending on the mechanism type. Same-day service available.",
    },
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Kirti Nagar",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Conditioning", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and lose support after just a few minutes of sitting",
    "Springs make clicking or popping noises when you sit down",
    "Visible tears, fraying, or peeling on fabric or leather",
    "The sofa frame creaks or feels unstable when you shift weight",
    "One side sits visibly lower than the other",
    "Foam has turned lumpy, crumbled, or lost its shape",
    "Armrest covering is separating from the frame",
    "Recliner mechanism is stuck, jerky, or won't lock in position",
  ],
  relatedPages: buildRelatedPages("sofa-repair-kirti-nagar", [
    ...DELHI_SOFA_RELATED,
    { label: "Furniture Repair Kirti Nagar", href: "/furniture-repair-kirti-nagar" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Sofa Repair Rajouri Garden", href: "/sofa-repair-rajouri-garden" },
  ]),
  keywords: [
    "sofa repair kirti nagar",
    "sofa repair rajouri garden",
    "sofa repair tilak nagar",
    "sofa repair hari nagar",
    "sofa repair moti nagar",
    "sofa reupholstery kirti nagar",
    "sofa foam replacement west delhi",
    "sofa spring repair kirti nagar",
    "recliner repair rajouri garden",
    "sofa repair near kirti nagar furniture market",
  ],
};

// ---------------------------------------------------------------------------
// 4. SOFA REPAIR IN VASANT KUNJ
// Parent: /furniture-repair-vasant-kunj
// ---------------------------------------------------------------------------
export const sofaRepairVasantKunj: SeoPageData = {
  slug: "sofa-repair-vasant-kunj",
  title: "Sofa Repair Vasant Kunj Delhi | ₹999 Doorstep | 6-Month Warranty | FurniRevive",
  metaDescription:
    "Expert sofa repair in Vasant Kunj, Munirka, R.K. Puram. Foam replacement, re-upholstery, spring & recliner repair. Starting ₹999. Same-day service. Book now!",
  h1: "Sofa Repair in Vasant Kunj — Munirka, R.K. Puram & Nearby Areas",
  heroSubtitle:
    "Professional sofa repair across Vasant Kunj Sectors A–D, Munirka, R.K. Puram, Kishangarh, and neighbouring Saket. Foam replacement, fabric reupholstery, spring repair, leather sofa conditioning, and recliner mechanism fixing. 6-month warranty. Starting ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Vasant Kunj Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Vasant Kunj home — FurniRevive",
    caption: "Sofa Repair in Vasant Kunj | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Vasant Kunj costs ₹999–₹4,500 depending on the repair type. Cushion foam replacement starts at ₹999 per seat, spring repair at ₹1,500, and full reupholstery from ₹3,000 per seat. FurniRevive provides same-day doorstep service in Vasant Kunj, Munirka, R.K. Puram, and Kishangarh.",
  intro: [
    "Vasant Kunj is one of South-West Delhi's most established residential hubs — a mix of DDA flats across Sectors A through D, premium group-housing societies, and independent floors in pockets near Nelson Mandela Marg. Families here invest in quality sofas that form the centrepiece of their living rooms. After years of regular use, even premium sofas develop sagging cushions, worn upholstery, weakened springs, and creaking frame joints. Replacing a sofa set means spending ₹40,000–₹1,00,000 or more — professional doorstep repair with FurniRevive restores the same comfort at a fraction of the cost.",
    "Our sofa repair technicians serve every sector and pocket of Vasant Kunj, plus neighbouring Munirka, R.K. Puram Sectors 1–13, Kishangarh village, and the Saket-Vasant Kunj connector corridor. We specialise exclusively in sofa and upholstered seating — leather sofas, fabric sectionals, L-shaped sets, recliners, and sofa-cum-beds. Every technician arrives with 32D and 40D foam, 500+ fabric swatches, spring kits, and leather conditioning materials.",
    "Sofa repair in Vasant Kunj starts at ₹999 with every job backed by a 6-month written warranty. Book before noon for same-day service. Call +91 92179 99355 or send WhatsApp photos for a quick estimate.",
  ],
  whyChoose: [
    {
      title: "Full Vasant Kunj Coverage",
      description:
        "Sectors A, B, C, D, Pocket 1–6, DDA Flats, group-housing societies, plus Munirka, R.K. Puram, Kishangarh, and nearby Saket — all covered at standard pricing.",
    },
    {
      title: "Premium Sofa Expertise",
      description:
        "Vasant Kunj homes often have high-end sofas. Our technicians handle imported leather, Italian fabric, designer sectionals, and premium recliner mechanisms with the care these pieces deserve.",
    },
    {
      title: "32D & 40D Foam at Your Doorstep",
      description:
        "We carry both standard and high-density foam to every appointment. Flattened cushions are measured, cut, and replaced on the spot — no workshop trips required.",
    },
    {
      title: "Same-Day South-West Delhi Service",
      description:
        "Our South Delhi team reaches Vasant Kunj addresses within 60–90 minutes. Book before noon for same-day service to any sector or pocket.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Free doorstep inspection followed by a written quote. Final bill matches the quotation exactly — no hidden fees for premium areas.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair in Vasant Kunj carries our company-backed warranty. Same-issue recurrence within six months is fixed at zero cost.",
    },
  ],
  process: [
    {
      step: "WhatsApp Your Sofa Photos",
      description:
        "Send damage photos to +91 92179 99355. Mention your Vasant Kunj sector, Munirka block, or R.K. Puram sector number. Slot confirmed within 30 minutes.",
    },
    {
      step: "Free Inspection at Your Home",
      description:
        "Technician examines the sofa's frame, springs, foam, and upholstery at your address. Detailed written quote provided — no obligation to proceed.",
    },
    {
      step: "On-Site Sofa Restoration",
      description:
        "Foam replacement, spring repair, reupholstery, and frame reinforcement completed in your living room. Most Vasant Kunj repairs take 2–3 hours.",
    },
    {
      step: "Final Check & Warranty",
      description:
        "You inspect the restored sofa, we clean up the work area, hand over the 6-month warranty card, and collect payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep sofa repair across all Vasant Kunj sectors and nearby localities",
    "Cushion foam replacement — 32D and 40D high-resilience options",
    "Full sofa reupholstery from ₹3,000 per seat — 500+ fabrics including premium options",
    "Sofa spring and zigzag wire repair from ₹1,500",
    "Recliner mechanism repair — manual and motorised",
    "L-shaped, sectional, and corner sofa repair in-place",
    "Leather sofa crack-filling, re-dyeing, conditioning, and restoration",
    "Frame joint reinforcement with industrial adhesive",
    "Save 60–70% vs buying a new sofa set",
    "Same-day service for bookings before noon",
    "6-month written warranty on every repair",
  ],
  contentSections: [
    {
      heading: "Sofa Types We Repair in Vasant Kunj",
      body: [
        "Vasant Kunj homes feature some of South Delhi's finest sofa collections. The DDA flats in Sectors B and D commonly have mid-range fabric 3+1+1 sets that need foam and upholstery work after four to six years. The premium group-housing societies and independent homes near Nelson Mandela Marg often house imported leather sofas, designer L-shaped sectionals, and high-end recliner sets.",
        "We handle the full spectrum: fabric sofas in cotton, linen, chenille, silk-blend, and velvet; leather sofas including Italian leather, bonded leather, and premium PU; leatherette and rexine; L-shaped corner sets and modular sectionals; manual and motorised recliner sofas; and sofa-cum-beds with various fold mechanisms. Each gets material-appropriate repair techniques and matching materials.",
      ],
    },
    {
      heading: "Common Sofa Problems in Vasant Kunj Homes",
      body: [
        "Sagging cushions are the top complaint across Vasant Kunj. Delhi's hot and humid summers accelerate foam breakdown, and after four to five years even premium sofas lose their supportive feel. We replace degraded foam with 32D (everyday comfort) or 40D (firm, extra-durable) high-resilience foam that maintains its shape for five or more years.",
        "Leather cracking and discolouration affect many premium sofas in the area — dry winters and air conditioning strip moisture from leather surfaces. We offer crack-filling, custom colour matching, deep conditioning, and protective coating. Broken springs and frame joint failures are also common in older sofa sets, especially those purchased when families first moved into their Vasant Kunj flats.",
      ],
    },
    {
      heading: "Sofa Repair Pricing in Vasant Kunj — No Area Surcharge",
      body: [
        "Standard Delhi NCR rates apply across all Vasant Kunj sectors — no premium-area surcharge. Single-seat foam replacement: ₹999–₹2,500. Complete 3-seater foam: ₹4,000–₹9,000. Reupholstery per seat: ₹3,000–₹15,000. Spring repair: ₹1,500–₹4,000. Frame repair: ₹800–₹2,000. Recliner mechanism: ₹1,499–₹6,000.",
        "Full 3-seater restoration (foam + fabric + springs + frame) costs ₹10,000–₹25,000. Compared to buying a comparable new sofa — ₹40,000 to over ₹1,00,000 for the quality levels common in Vasant Kunj — professional repair saves families ₹30,000–₹75,000. Our 6-month warranty further protects that investment.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cost of sofa repair in Vasant Kunj?",
      answer:
        "Sofa repair in Vasant Kunj starts at ₹999. Foam replacement costs ₹999–₹2,500 per seat. Spring repair is ₹1,500–₹4,000. Full reupholstery is ₹3,000–₹15,000 per seat. Free doorstep inspection provides the exact price.",
    },
    {
      question: "Do you repair leather sofas in Vasant Kunj?",
      answer:
        "Yes. We specialise in genuine leather, Italian leather, bonded leather, and PU leather sofas. Services include crack-filling, colour matching, re-dyeing, conditioning, and protective coating. Leather sofa repair in Vasant Kunj starts at ₹1,500.",
    },
    {
      question: "Can you reach Munirka and R.K. Puram for sofa repair?",
      answer:
        "Yes. We serve Munirka, R.K. Puram Sectors 1–13, Kishangarh, and the Saket-Vasant Kunj corridor at standard pricing. Book before noon for same-day arrival — typically within 60–90 minutes.",
    },
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Vasant Kunj",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Conditioning", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and lose support after just a few minutes of sitting",
    "Springs make clicking or popping noises when you sit down",
    "Visible tears, fraying, or peeling on fabric or leather",
    "The sofa frame creaks or feels unstable when you shift weight",
    "One side sits visibly lower than the other",
    "Foam has turned lumpy, crumbled, or lost its shape",
    "Armrest covering is separating from the frame",
    "Recliner mechanism is stuck, jerky, or won't lock in position",
  ],
  relatedPages: buildRelatedPages("sofa-repair-vasant-kunj", [
    ...DELHI_SOFA_RELATED,
    { label: "Furniture Repair Vasant Kunj", href: "/furniture-repair-vasant-kunj" },
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
  ]),
  keywords: [
    "sofa repair vasant kunj",
    "sofa repair munirka",
    "sofa repair rk puram",
    "sofa repair kishangarh",
    "sofa reupholstery vasant kunj",
    "leather sofa repair vasant kunj",
    "sofa foam replacement vasant kunj",
    "sofa spring repair vasant kunj",
    "recliner repair vasant kunj",
    "sofa repair near me vasant kunj",
  ],
};

// ---------------------------------------------------------------------------
// 5. SOFA REPAIR IN RAJOURI GARDEN
// Parent: /sofa-repair-delhi (West Delhi cluster)
// ---------------------------------------------------------------------------
export const sofaRepairRajouriGarden: SeoPageData = {
  slug: "sofa-repair-rajouri-garden",
  title: "Sofa Repair Rajouri Garden | Tilak Nagar ₹999 | Same Day | FurniRevive",
  metaDescription:
    "Professional sofa repair in Rajouri Garden, Tilak Nagar & Janakpuri. Foam, spring & leather repair at your doorstep. Starting ₹999. Same-day available. Book now!",
  h1: "Sofa Repair in Rajouri Garden — Tilak Nagar, Janakpuri & West Delhi",
  heroSubtitle:
    "Expert sofa repair at your doorstep across Rajouri Garden, Tilak Nagar, Subhash Nagar, Tagore Garden, and Janakpuri. Foam replacement, fabric reupholstery, spring repair, leather conditioning, and recliner fixing. 6-month warranty. Starting ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Rajouri Garden Home",
    imageUrl: "https://hercules-cdn.com/file_LtgHsihVJugMPHKrxVispUjM",
    altText: "Professional sofa repair technician working on a premium fabric sofa in a luxury Rajouri Garden home — FurniRevive",
    caption: "Sofa Repair in Rajouri Garden | Premium upholstery & foam service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Rajouri Garden costs ₹999–₹4,500 depending on repair type. Cushion foam replacement starts at ₹999 per seat, spring repair at ₹1,500, and full reupholstery from ₹3,000 per seat. FurniRevive provides same-day doorstep service in Rajouri Garden, Tilak Nagar, Subhash Nagar, Tagore Garden, and Janakpuri.",
  intro: [
    "Rajouri Garden is one of West Delhi's busiest residential and commercial hubs — a mix of independent floors, DDA flats, builder apartments, and upscale housing along the metro corridor between Rajouri Garden and Tilak Nagar stations. Families in these homes invest in quality sofa sets that over years develop sagging cushions, torn armrests, creaking frames, and worn upholstery. Replacing a sofa in Rajouri Garden means spending ₹30,000–₹80,000 or more — FurniRevive's doorstep sofa repair service restores your sofa for a fraction of that cost.",
    "Our sofa repair technicians serve every part of the Rajouri Garden belt: Rajouri Garden main market area, Tilak Nagar, Subhash Nagar, Tagore Garden, Ramesh Nagar, and the Janakpuri West corridor. We carry 32D and 40D high-resilience foam, 500+ fabric swatches, spring replacement kits, leather conditioning materials, and industrial adhesive to every appointment. Most sofa repairs are completed at your home in 2–3 hours.",
    "Sofa repair in Rajouri Garden starts at ₹999 with a 6-month written warranty on every job. Book before noon for same-day service. Call +91 92179 99355 or send WhatsApp photos of your sofa for a quick estimate.",
  ],
  whyChoose: [
    {
      title: "Full West Delhi Coverage",
      description:
        "Rajouri Garden, Tilak Nagar, Subhash Nagar, Tagore Garden, Ramesh Nagar, and Janakpuri — all covered at standard pricing with no area surcharge.",
    },
    {
      title: "Sofa-Specific Specialists",
      description:
        "Unlike general carpenters, our technicians specialise exclusively in sofas — fabric, leather, recliner, L-shaped, and sectional configurations handled with dedicated expertise.",
    },
    {
      title: "32D & 40D Foam at Your Doorstep",
      description:
        "We carry both standard and high-density foam to every appointment. Flat cushions are measured, cut, and replaced on-site — no workshop trips needed.",
    },
    {
      title: "Same-Day West Delhi Service",
      description:
        "Book before noon and our West Delhi team reaches Rajouri Garden, Tilak Nagar, or Subhash Nagar the same day, typically within 60–90 minutes.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Free doorstep inspection followed by a written quote. The final bill matches the quotation exactly — no hidden charges mid-job.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair carries our company-backed 6-month warranty. Same issue within six months is fixed at zero cost.",
    },
  ],
  process: [
    {
      step: "WhatsApp Your Sofa Photos",
      description:
        "Send damage photos to +91 92179 99355. Mention your Rajouri Garden block, Tilak Nagar sector, or Janakpuri pocket number. Slot confirmed within 30 minutes.",
    },
    {
      step: "Free Inspection at Your Home",
      description:
        "Technician examines the sofa frame, springs, foam, and upholstery at your address. Detailed written quote provided — no obligation to proceed.",
    },
    {
      step: "On-Site Sofa Restoration",
      description:
        "Foam replacement, spring repair, reupholstery, and frame reinforcement completed in your living room. Most Rajouri Garden repairs take 2–3 hours.",
    },
    {
      step: "Final Check & Warranty",
      description:
        "You inspect the restored sofa, we clean up the work area, hand over the 6-month warranty card, and collect payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep sofa repair across Rajouri Garden and West Delhi",
    "Cushion foam replacement with 32D and 40D high-resilience foam",
    "Full sofa reupholstery from ₹3,000 per seat — 500+ fabric options",
    "Sofa spring and zigzag wire repair starting ₹1,500",
    "Recliner mechanism repair — manual and motorised",
    "L-shaped and sectional sofa repair without dismantling",
    "Leather and rexine sofa conditioning, crack-filling, and colour match",
    "Sofa frame joint reinforcement with industrial adhesive",
    "Save 60–70% compared to buying a new sofa set",
    "Same-day service for bookings before noon",
    "6-month written warranty on every repair",
    "Verified craftsmen with 5+ years of sofa specialisation",
  ],
  contentSections: [
    {
      heading: "Types of Sofas We Repair in Rajouri Garden",
      body: [
        "Our Rajouri Garden sofa repair service covers every sofa type found in homes across West Delhi. Fabric sofas are the most common — from standard 3+1+1 sets in older DDA colonies to premium velvet and chenille sets in newer builder apartments near Tagore Garden. We handle full reupholstery, partial fabric patching, and cushion cover replacement for all fabric types.",
        "Leather and leatherette sofas are popular in the upscale independent floor houses along Rajouri Garden's main residential lanes. We offer leather crack-filling, custom colour matching, re-dyeing, and deep conditioning. L-shaped sectionals are repaired in-place at your home without moving them. Recliner sofas with manual or motorised mechanisms are another speciality, with mechanism repair, motor replacement, and lever fixing all available on-site.",
      ],
    },
    {
      heading: "Common Sofa Problems in Rajouri Garden Homes",
      body: [
        "Sagging cushions are the most common sofa complaint in Rajouri Garden. After 3–5 years of daily use, foam inside seat cushions loses density and compresses permanently — especially in high-traffic family homes. We replace sagging cushions with 32D or 40D high-resilience foam that maintains firmness for five or more years.",
        "Torn upholstery at armrests and seat edges is the second most frequent issue, particularly in homes with children or pets. Broken sofa frame joints and creaking wood rank third — often caused by repeated use and original construction quality. Spring failure, where sinuous springs snap or detach from the frame, creates an uncomfortable dip in the seat that worsens rapidly.",
      ],
    },
    {
      heading: "Sofa Repair Cost in Rajouri Garden — Transparent Pricing",
      body: [
        "Our Rajouri Garden sofa repair pricing follows standard Delhi NCR rates with no location surcharge. Single-seat cushion foam replacement costs ₹999–₹2,500 depending on foam density and seat size. Complete 3-seater sofa foam replacement runs ₹4,000–₹9,000. Sofa reupholstery is ₹3,000–₹15,000 per seat depending on fabric choice.",
        "Sofa spring repair costs ₹1,500–₹4,000 per sofa. Frame joint repair starts at ₹800. Recliner mechanism repair ranges from ₹1,499–₹6,000. A full 3-seater sofa restoration including foam, fabric, springs, and frame work costs ₹10,000–₹25,000 — compared to ₹30,000–₹80,000 for a new sofa of similar quality.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cost of sofa repair in Rajouri Garden?",
      answer:
        "Sofa repair in Rajouri Garden starts at ₹999. Cushion foam replacement costs ₹999–₹2,500 per seat. Spring repair is ₹1,500–₹4,000. Full reupholstery ranges from ₹3,000–₹15,000 per seat. A free doorstep inspection provides the exact quote.",
    },
    {
      question: "Do you repair leather sofas in Tilak Nagar and Subhash Nagar?",
      answer:
        "Yes. We provide leather crack-filling, colour restoration, conditioning, and full leather panel replacement in Tilak Nagar, Subhash Nagar, and all Rajouri Garden localities.",
    },
    {
      question: "How soon can you reach Rajouri Garden for sofa repair?",
      answer:
        "Book before noon for same-day service. For homes near Rajouri Garden metro or Tilak Nagar metro, we typically arrive within 60–90 minutes during standard hours.",
    },
  ],
  priceTable: {
    heading: "Sofa Repair Price Guide — Rajouri Garden",
    rows: [
      { service: "Foam Replacement (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Spring Repair", price: "₹1,500–₹4,000" },
      { service: "Full Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Conditioning", price: "₹1,500–₹3,500" },
      { service: "Frame & Joint Repair", price: "₹800–₹2,500" },
      { service: "Recliner Mechanism Repair", price: "₹1,499–₹6,000" },
      { service: "Complete 3-Seater Restoration", price: "₹10,000–₹25,000" },
    ],
  },
  repairSigns: [
    "Cushions feel flat and lose support after just a few minutes of sitting",
    "Springs make clicking or popping noises when you sit down",
    "Visible tears, fraying, or peeling on fabric or leather",
    "The sofa frame creaks or feels unstable when you shift weight",
    "One side sits visibly lower than the other",
    "Foam has turned lumpy, crumbled, or lost its shape",
    "Armrest covering is separating from the frame",
    "Recliner mechanism is stuck, jerky, or won't lock in position",
  ],
  relatedPages: buildRelatedPages("sofa-repair-rajouri-garden", [
    ...DELHI_SOFA_RELATED,
    { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Sofa Repair Kirti Nagar", href: "/sofa-repair-kirti-nagar" },
  ]),
  keywords: [
    "sofa repair rajouri garden",
    "sofa repair tilak nagar",
    "sofa repair subhash nagar",
    "sofa repair tagore garden",
    "sofa repair west delhi",
    "sofa reupholstery rajouri garden",
    "sofa foam replacement rajouri garden",
    "sofa spring repair rajouri garden",
    "recliner repair rajouri garden",
    "leather sofa repair rajouri garden",
    "sofa repair near me rajouri garden",
  ],
};

// ---------------------------------------------------------------------------
// Export all Delhi sofa child pages
// ---------------------------------------------------------------------------
export const SOFA_CHILD_DELHI_PAGES: SeoPageData[] = [
  sofaRepairEastDelhi,
  sofaRepairLajpatNagar,
  sofaRepairKirtiNagar,
  sofaRepairVasantKunj,
  // sofaRepairRajouriGarden removed — duplicate slug "sofa-repair-rajouri-garden" already present in delhi-sofa-pages-2.ts (authoritative version)
];
