import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair in Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair in Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Sofa Upholstery Near Me", href: "/sofa-upholstery-near-me" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 4. SOFA FOAM REPLACEMENT DELHI
// ---------------------------------------------------------------------------
export const sofaFoamReplacementDelhi: SeoPageData = {
  slug: "sofa-foam-replacement-delhi",
  title:
    "Sofa Foam Replacement in Delhi | High-Density Foam ₹999 | FurniRevive",
  metaDescription:
    "Professional sofa foam replacement in Delhi NCR. High-density 32D & 40D foam for all sofa types. Doorstep service across Delhi, Noida, Gurgaon from ₹999. 6-month warranty!",
  h1: "Sofa Foam Replacement in Delhi — High-Density Foam from ₹999",
  heroSubtitle:
    "Replace worn-out sofa foam with premium high-density foam at your doorstep. FurniRevive uses 32D and 40D foam that holds shape for 5–8 years — serving Delhi, Noida, Gurgaon, Ghaziabad & Faridabad from ₹999.",
  showcaseImage: {
    heading: "Sofa Foam Replacement Before & After — Feel the Difference",
    imageUrl: "https://hercules-cdn.com/file_6rdKfhv4LwYW4NN84THjHcOM",
    altText: "Before and after sofa foam replacement in Delhi showing collapsed flat cushions restored to firm supportive high-density foam seating by FurniRevive",
    caption: "Sofa Foam Replacement Delhi — 32D & 40D high-density foam | Doorstep service | Starting ₹999 | FurniRevive",
  },
  intro: [
    "The foam inside your sofa is what makes the difference between comfortable seating and a flat, uncomfortable surface. Over time, even quality foam compresses and loses its resilience — typically after 3–5 years of daily use, and sometimes sooner if the original foam was low-quality. When your sofa feels saggy, bottoms out when you sit, or shows permanent body impressions, the foam needs replacing. FurniRevive specialises in professional sofa foam replacement across Delhi NCR using premium high-density foam that restores your sofa's original comfort.",
    "What sets FurniRevive apart from local foam shops is our use of certified high-density foam. Most budget furniture in Delhi NCR comes with 18-density or 22-density foam that compresses quickly under regular use. We exclusively use 32-density foam as our standard and 40-density foam as our premium option — these are the same grades used in high-end imported sofas and last 5–8 years under heavy daily use. The difference in comfort and durability is immediately noticeable.",
    "Our doorstep foam replacement service covers all of Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Starting at ₹999 per cushion, it's a fraction of what a new sofa costs. Our technicians measure each cushion precisely, cut fresh foam to exact dimensions, and replace it right at your home — typically completing the entire sofa in 2–3 hours. Every foam replacement comes with our 6-month warranty.",
  ],
  whyChoose: [
    {
      title: "32D & 40D High-Density Foam Only",
      description:
        "We never use cheap 18D or 22D foam. Our standard 32-density foam holds shape for 5+ years. Our premium 40-density foam is the same grade used in luxury sofas and lasts 8+ years.",
    },
    {
      title: "Precision Cut to Your Sofa",
      description:
        "Every foam piece is measured and cut to your sofa's exact cushion dimensions — not generic off-the-shelf sizes. This ensures a perfect fit with no gaps or bunching.",
    },
    {
      title: "All Sofa Types & Styles",
      description:
        "Two-seater, three-seater, L-shaped, sectional, recliner, sofa cum bed, and Chesterfield. We replace foam in seat cushions, back cushions, armrests, and bolsters.",
    },
    {
      title: "Doorstep Service from ₹999",
      description:
        "Complete foam replacement at your home across Delhi NCR. No need to transport your sofa. Starting at ₹999 per cushion with transparent written quotes.",
    },
    {
      title: "Memory Foam Upgrade Available",
      description:
        "Want luxury comfort? Add a 2-inch memory foam layer on top of the base foam for a premium seating experience — at a fraction of buying a memory foam sofa.",
    },
    {
      title: "6-Month Foam Warranty",
      description:
        "If the new foam compresses, sags, or loses shape within 6 months, we return and replace it at no charge. Our warranty is valid across all Delhi NCR cities.",
    },
  ],
  process: [
    {
      step: "Book & Share Your Sofa Details",
      description:
        "Call +91 92179 99355 or book online. Share your sofa type, number of cushions, and photos. We'll give a preliminary foam replacement estimate.",
    },
    {
      step: "Free Doorstep Foam Assessment",
      description:
        "Our technician visits your home in Delhi NCR, checks the existing foam condition and density, measures each cushion precisely, and recommends the right foam grade.",
    },
    {
      step: "Precision Foam Replacement",
      description:
        "Fresh high-density foam is cut to exact dimensions and installed in each cushion. Covers are re-fitted and the sofa is tested for even, comfortable seating across all cushions.",
    },
    {
      step: "Comfort Check & Warranty",
      description:
        "We do a sit-test with you to ensure every cushion feels right, clean up the work area, and provide your 6-month warranty card for all replaced foam.",
    },
  ],
  benefits: [
    "32-density standard and 40-density premium foam options",
    "Precision-cut foam to exact cushion dimensions",
    "Seat, back, armrest, and bolster foam replacement",
    "Memory foam upgrade layer available",
    "All sofa types: fabric, leather, rexine, velvet",
    "Doorstep service in Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "Starting at ₹999 per cushion — most affordable in Delhi NCR",
    "Same-day service available for foam replacement",
    "Fire-retardant foam options for added safety",
    "Existing cushion covers carefully preserved during replacement",
    "6-month warranty on all foam — free replacement if it sags",
    "10,000+ sofa cushions replaced across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "Understanding Foam Density — Why It Matters for Your Sofa",
      body: [
        "Foam density is measured in kilograms per cubic metre (kg/m³) and directly determines how long your sofa cushions will remain comfortable and supportive. Low-density foam (18D–22D) is cheap to produce and commonly used by budget furniture manufacturers in Delhi NCR to keep prices down. However, this foam compresses visibly within 12–18 months of regular use, losing up to 40% of its height and resilience. This is why many sofas feel great in the showroom but start sagging within a year.",
        "Medium-density foam (28D–32D) offers a significantly better balance of comfort and durability. Our standard 32D foam maintains its shape under daily use for 5–6 years — making it the sweet spot for most Delhi NCR families. High-density foam (40D) is what luxury furniture brands use in their premium lines. It's firmer, more supportive, and maintains its shape for 8–10 years even with heavy daily use. The cost difference between 32D and 40D is approximately ₹300–₹500 per cushion — a small investment for years of extra comfort.",
      ],
    },
    {
      heading: "Sofa Foam Replacement Price List — Delhi NCR 2025",
      body: [
        "Here's a transparent breakdown of our sofa foam replacement pricing in Delhi NCR. Single seat cushion foam replacement with 32D foam: ₹999–₹1,500 depending on cushion size. Single back cushion: ₹800–₹1,200. Complete three-seater sofa (3 seat + 3 back cushions): ₹3,500–₹5,500 with 32D foam, or ₹4,500–₹7,000 with premium 40D foam. L-shaped sofa (4–6 seat cushions + back cushions): ₹5,000–₹9,000. Memory foam layer add-on: ₹500–₹800 per cushion.",
        "These prices include labour, precision cutting, and installation at your doorstep. We do not charge a separate visit fee or inspection fee. For customers replacing foam in multiple sofas — a common request in Delhi NCR homes with living room and bedroom sofa sets — we offer package pricing that reduces the per-cushion cost by 15–20%. Call us for a custom quote based on your specific requirements.",
      ],
    },
    {
      heading: "When Should You Replace Sofa Foam vs. Buying a New Sofa?",
      body: [
        "Foam replacement makes strong financial sense when your sofa frame is still in good condition. If the wooden or metal frame is solid, joints are tight, and there's no structural damage, the foam is the only thing between you and a sofa that feels brand new. Replacing all cushion foam in a three-seater costs ₹3,500–₹7,000 — while a new sofa of equivalent quality costs ₹15,000–₹50,000 or more in Delhi NCR furniture markets.",
        "Foam replacement is especially worthwhile for sofas with custom dimensions or styles that fit your room perfectly, sofas with sentimental value, premium brand sofas with quality frames, and imported sofas where finding an equivalent replacement is difficult or expensive. The only scenario where foam replacement may not be worthwhile is if the frame itself is damaged, cracked, or structurally compromised — in that case, we can assess whether frame repair plus foam replacement is more cost-effective than replacement, and give you an honest recommendation. Updated in March 2026 with latest sofa foam replacement pricing and service coverage in Delhi NCR.",
      ],
    },
    {
      heading: "Brand-Specific Sofa Foam Replacement — Urban Ladder, Pepperfry, IKEA & Godrej",
      body: [
        "Different furniture brands use different foam specifications that require tailored replacement approaches. <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder sofas</a> typically specify 28D–32D foam in product listings, but actual fill quality varies by price tier. We test the existing foam density during inspection and recommend an upgrade to 32D or 40D where needed. Urban Ladder's non-removable covers require careful base-seam opening for foam access — a process our technicians handle without cover damage. <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry sofas</a> span a wide quality range: budget models under ₹15,000 often use 18D–22D foam that needs replacement within 2–3 years, while premium Pepperfry models last 5–6 years. We identify the exact grade during inspection and recommend the appropriate replacement density.",
        "<a href=\"/ikea-furniture-repair-delhi\">IKEA sofas</a> like KIVIK, EKTORP, and SÖDERHAMN use a multi-layer foam-and-fibre construction inside removable covers — making foam replacement simpler than non-removable upholstery designs. We replace the inner foam core with 32D foam while retaining the fibre wrap layer if still in good condition. <a href=\"/godrej-furniture-repair-delhi\">Godrej Interio sofa foam replacement</a> covers both their fabric and leather ranges, accessed through base openings or zipper covers depending on model. For <a href=\"/durian-furniture-repair-delhi\">Durian sofas</a> and <a href=\"/wooden-street-furniture-repair-delhi\">Wooden Street sofas</a>, we carry foam specifications that match their higher-density construction standards. For complete brand-specific repair guidance and costs, our <a href=\"/sofa-repair-cost-delhi\">sofa repair cost guide</a>, <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair page</a>, and <a href=\"/furniture-repair-price-guide-delhi\">master price guide</a> provide detailed breakdowns.",
      ],
    },
    {
      heading: "Combined Foam + Fabric Replacement — Full Sofa Restoration in One Visit",
      body: [
        "Foam replacement and fabric/leather restoration are most cost-effective when done together. When our technician opens a sofa for foam work, the upholstery must be partially or fully detached anyway — making it the ideal opportunity to assess and refresh the cover material. If your sofa's fabric is torn, faded, or stained alongside the foam degradation, a combined foam-plus-fabric service saves 20–30% on total cost versus two separate visits. We carry fabric swatches in common colours and materials — cotton, velvet, microfibre, leatherette — so you can select your preferred cover material at the time of foam replacement. For leather sofas, our <a href=\"/leather-sofa-repair-delhi\">leather sofa repair specialists</a> can handle crack filling and colour restoration while the foam is being replaced, completing both operations in one doorstep visit.",
        "For sofas with spring issues alongside foam degradation, our <a href=\"/sofa-spring-repair-delhi\">sofa spring repair</a> team can join the same visit — this three-in-one restoration (foam + fabric + springs) gives you a sofa that performs like new at a total cost of ₹6,000–₹12,000 for a three-seater. Compare this to a new sofa of equivalent quality (₹25,000–₹60,000) and the value is clear. For a complete overview of all sofa restoration costs, our <a href=\"/sofa-repair-cost-delhi\">sofa repair cost Delhi</a> guide and <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a> provide itemised pricing for every combination of services. Read our blog on <a href=\"/blog/is-sofa-restoration-worth-it\">whether sofa restoration is worth it</a> for a detailed financial analysis.",
      ],
    },
    {
      heading: "Sofa Foam Replacement Across Delhi NCR — Location Coverage & Same-Day Service",
      body: [
        "FurniRevive provides doorstep sofa foam replacement across the full Delhi NCR region. In Delhi, we cover all major residential areas including South Delhi (Saket, Hauz Khas, GK1, GK2, Vasant Kunj, Vasant Vihar), North Delhi (Rohini, Pitampura, Shalimar Bagh), West Delhi (Janakpuri, Dwarka, Uttam Nagar), and East Delhi (Mayur Vihar, Preet Vihar, IP Extension). For specific area pages: <a href=\"/sofa-repair-south-delhi\">sofa repair South Delhi</a>, <a href=\"/sofa-repair-dwarka\">sofa repair Dwarka</a>.",
        "NCR coverage: <a href=\"/sofa-repair-noida\">sofa repair Noida</a> (all sectors including 18, 27, 62, 93, 137), <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a> (DLF phases, Sohna Road, Golf Course Road, New Gurgaon), <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a> (Sectors 15–22), and Ghaziabad (Indirapuram, Vaishali, Kaushambi). Same-day foam replacement is available for bookings placed before noon across most Delhi NCR locations. Our complete <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> service covers all furniture types alongside sofa foam work. For the nearest service area to you, our <a href=\"/furniture-repair-near-me\">furniture repair near me</a> page connects you to the right local team.",
      ],
    },
    {
      heading: "Memory Foam vs High-Density Foam — Which Is Right for Your Sofa?",
      body: [
        "Memory foam and high-density polyurethane foam serve different purposes and suit different needs. Standard high-density polyurethane foam (32D or 40D) is firm, supportive, and responsive — it springs back quickly when weight is removed and maintains its shape over years of daily use. This is the right choice for most sofas, especially in family living rooms where quick recovery and durability matter more than a cloud-like feel. It also handles India's temperature extremes better — memory foam can become quite soft in Delhi's 40°C+ summer heat, potentially feeling too soft during peak summer months.",
        "Memory foam (viscoelastic foam) moulds slowly to body contours and provides exceptional pressure relief — ideal for sofas used for extended periods, for family members with back issues, or for media rooms where people watch multiple hours of TV. We offer a hybrid option: a 32D or 40D base foam layer (for shape retention and durability) topped with a 1.5–2 inch memory foam comfort layer (for the body-contouring feel). This hybrid approach gives the best of both — durability from the base, luxury comfort from the top layer. Memory foam add-ons cost ₹500–₹800 per cushion over the standard replacement price. For full pricing, see our <a href=\"/sofa-repair-cost-delhi\">sofa repair cost guide</a> and <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a>. Our blog on <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a> explains the technical factors in detail.",
      ],
    },
    {
      heading: "Decision Guide — When to Replace Foam vs Full Sofa Restoration vs Buy New",
      body: [
        "Making the right decision about your sofa depends on its overall condition. If the frame is solid, springs are intact, and only the foam has degraded — foam replacement alone (₹999–₹7,000) is the right choice. If the frame is solid but foam, springs, and fabric all need work — a combined restoration (₹6,000–₹15,000) is still far cheaper than a new sofa. If the frame has structural failure with multiple broken joints — frame repair plus restoration is assessed case by case, and we provide an honest cost comparison with buying new. Our blog <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a> provides a complete financial decision framework, and <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a> extends this analysis to all furniture types.",
        "For sofas that are also experiencing fabric or leather deterioration alongside foam issues, our <a href=\"/sofa-repair-delhi\">complete sofa repair service</a> handles the full scope. Brand-specific decision guides: if you're deciding about an <a href=\"/ikea-furniture-repair-delhi\">IKEA sofa</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej Interio sofa</a>, or <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry sofa</a>, our brand pages provide specific guidance. For recliner foam replacement, our <a href=\"/recliner-motor-repair-delhi\">recliner repair page</a> and <a href=\"/recliner-repair-delhi\">recliner repair Delhi</a> page cover the complete recliner restoration process. For leather sofa foam concerns, our <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a> page addresses combined leather and foam restoration. For NCR-wide cost guidance, our <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement cost guide</a> provides city-wise pricing benchmarks.",
      ],
    },
    {
      heading: "Authority Resources — Pricing, Reviews & Related Services",
      body: [
        "Our sofa foam replacement service is part of a complete furniture restoration ecosystem for Delhi NCR. For pricing across all services: <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide Delhi</a> (master hub), <a href=\"/sofa-repair-cost-delhi\">sofa repair cost Delhi</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement cost guide</a>, <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a>, <a href=\"/leather-sofa-repair-cost-delhi\">leather sofa repair cost</a>, <a href=\"/recliner-repair-cost-delhi\">recliner repair cost Delhi</a>, and <a href=\"/furniture-repair-price-list-delhi\">complete furniture repair price list</a>.",
        "For related repair services: <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair Delhi</a>, <a href=\"/sofa-spring-repair-delhi\">sofa spring repair Delhi</a>, <a href=\"/sofa-fabric-tear-repair-delhi\">sofa fabric tear repair</a>, <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a>, <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a>, <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a>. For our service blog: <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a>, <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a>, <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace guide</a>, <a href=\"/blog/complete-guide-to-furniture-restoration-delhi\">complete furniture restoration guide</a>, <a href=\"/blog/choosing-right-sofa-fabric-delhi\">choosing the right sofa fabric</a>. Our <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/bed-repair-delhi\">bed repair Delhi</a>, and <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> pages complete the full furniture care offering. Foam replacement is available across the full NCR: <a href=\"/sofa-repair-gurgaon\">sofa foam replacement in Gurgaon</a> and <a href=\"/sofa-repair-faridabad\">sofa foam replacement in Faridabad</a> at the same pricing with same-day doorstep service.",
      ],
    },
  ],
  faqs: [
    {
      question: "What density foam do you use for sofa replacement?",
      answer:
        "We use 32-density foam as standard and 40-density as premium. We never use 18D or 22D foam. For back cushions, 28D foam is also available. Our technician recommends the right density based on your usage and budget.",
    },
    {
      question: "How long does sofa foam replacement take?",
      answer:
        "A standard three-seater sofa takes 2–3 hours. L-shaped sofas take 3–4 hours. Most jobs are completed in a single visit at your home.",
    },
    {
      question: "Can I upgrade to memory foam for my sofa cushions?",
      answer:
        "Yes. We offer a 2-inch memory foam layer on top of the base high-density foam for ₹500–₹800 per cushion. This creates a premium seating feel similar to luxury imported sofas.",
    },
    {
      question: "Do you replace foam in leather and rexine sofas?",
      answer:
        "Yes. We carefully unzip or detach covers, replace the foam, and re-fit the covers without any damage to the leather or rexine. Our technicians have extensive experience with all sofa materials.",
    },
    {
      question: "How do I know if my sofa needs foam replacement?",
      answer:
        "Signs include: cushions sag when you sit, permanent body impressions, foam doesn't spring back when you press it, you can feel the frame through the cushion, or the sofa is visibly lower than when you bought it.",
    },
    {
      question: "What's the cost of foam replacement for an L-shaped sofa?",
      answer:
        "Full foam replacement for an L-shaped sofa with 4–6 seat cushions and matching back cushions typically costs ₹5,000–₹9,000 with 32D foam. Premium 40D foam adds approximately ₹1,500–₹2,500 to the total.",
    },
    {
      question: "Is the foam replacement warranty valid across Delhi NCR?",
      answer:
        "Yes. Our 6-month foam warranty is valid across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. If the foam sags or loses shape within six months, we replace it at no charge at your address.",
    },
    {
      question: "Can you also replace the cushion covers during foam replacement?",
      answer:
        "Yes. If your cushion covers are worn or torn, we can replace them with new fabric during the same visit. We carry fabric swatches so you can choose the material and colour that matches your preference.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-foam-replacement-delhi"),
    { label: "Sofa Cushion Repair Delhi", href: "/sofa-cushion-repair-delhi" },
    { label: "Furniture Repair Price List", href: "/furniture-repair-price-list-delhi" },
  ],
  keywords: [
    "sofa foam replacement delhi",
    "sofa foam replacement near me",
    "sofa foam price delhi",
    "high density foam for sofa delhi",
    "sofa foam change delhi",
    "sofa cushion foam replacement cost delhi",
    "32 density foam sofa delhi",
    "40 density foam sofa",
    "best sofa foam replacement delhi NCR",
    "sofa foam replacement cost",
    "memory foam sofa upgrade delhi",
    "doorstep sofa foam replacement",
  ],
};

// ---------------------------------------------------------------------------
// 5. FURNITURE REPAIR PRICE LIST DELHI
// ---------------------------------------------------------------------------
export const furnitureRepairPriceListDelhi: SeoPageData = {
  slug: "furniture-repair-price-list-delhi",
  title:
    "Furniture Repair Price List Delhi 2025 | Cost Guide | FurniRevive",
  metaDescription:
    "Complete furniture repair price list for Delhi NCR 2025. Sofa, bed, chair, wardrobe, table repair costs. Transparent pricing from ₹499. Compare & save. Book now!",
  h1: "Furniture Repair Price List Delhi NCR — Complete 2025 Cost Guide",
  heroSubtitle:
    "Looking for transparent furniture repair pricing in Delhi NCR? Here's FurniRevive's complete price list for sofa, bed, chair, wardrobe, table, and all furniture repairs — from ₹499 with no hidden charges.",
  showcaseImage: {
    heading: "Furniture Repair Price List — Transparent Pricing in Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional furniture repair technician completing a sofa cushion replacement in a Delhi home — competitive transparent pricing by FurniRevive",
    caption: "Furniture Repair Price List Delhi | All furniture categories | No hidden charges | FurniRevive",
  },
  intro: [
    "The reason Delhi NCR homeowners overpay for furniture repair is not greed on the carpenter's side — it is information asymmetry. You do not know what it should cost, so you cannot challenge a quote that is 50% too high. This page closes that gap completely. FurniRevive's price ranges are published for every furniture repair category so that whether you are in Vasant Kunj or Noida Sector 137, you arrive at the repair conversation knowing exactly what fair looks like.",
    "What these prices reflect is scale. With over 10,000 repairs completed across Delhi NCR, we have negotiated wholesale rates on foam, fabric, hardware, and adhesives that individual carpenters cannot access. We route technicians efficiently, carry multi-job tool kits, and operate on per-job pricing — not day rates that inflate with idle time. The savings flow through to our price list. Our rates are consistently 20–30% below market average for equivalent quality work.",
    "One number on this page matters more than the ranges themselves: zero. That is what you pay for the inspection visit that generates your exact written quote. Every price below is a guide; the actual cost for your specific furniture is determined by a free doorstep assessment — after which you decide whether to proceed. No commitment, no inspection fee, no surprise additions once work begins. Call +91 92179 99355 or book online to schedule yours.",
  ],
  whyChoose: [
    {
      title: "Zero Information Asymmetry",
      description:
        "Published price ranges mean you know what fair pricing looks like before talking to a carpenter. You negotiate from knowledge, not from guesswork.",
    },
    {
      title: "Wholesale Material Rates, Passed On",
      description:
        "10,000+ repairs means factory-direct foam, fabric, and hardware procurement. Our material costs are lower than individual carpenters — and we pass that saving to you.",
    },
    {
      title: "Free Inspection Generates Your Exact Quote",
      description:
        "Published ranges guide you; the free doorstep inspection gives you the exact number for your specific furniture condition. You pay nothing until you approve the quote.",
    },
    {
      title: "Per-Job, Not Per-Day Pricing",
      description:
        "Daily-rate carpenters have no incentive to work fast. Our per-job model means the price is fixed before we start — speed and quality both work in your favour.",
    },
    {
      title: "Multi-Piece Discounts at 15–20%",
      description:
        "Booking two or more repairs in a single visit unlocks package pricing. One technician visit covers a sofa, dining chairs, and wardrobe at materially less than three separate bookings.",
    },
    {
      title: "6-Month Warranty in Every Price",
      description:
        "The price you see includes a 6-month warranty. If the repaired issue returns within six months, we come back and fix it — anywhere in Delhi NCR, at zero charge.",
    },
  ],
  process: [
    {
      step: "Choose Your Repair from the Price List",
      description:
        "Browse our price list below to understand the cost range for your furniture repair need. Call us if you need guidance on which service is right for your situation.",
    },
    {
      step: "Book Free Doorstep Inspection",
      description:
        "Call +91 92179 99355 or book online. Our technician visits your home in Delhi NCR, inspects the furniture, and provides an exact written quote based on the actual condition.",
    },
    {
      step: "Approve & Get It Fixed",
      description:
        "Review the itemised quote. If it works for you, approve it and our team carries out the repair at your doorstep — on the same visit or a scheduled appointment.",
    },
    {
      step: "Pay After Satisfaction",
      description:
        "Payment is collected only after the repair is complete and you're satisfied with the result. We accept cash, UPI, and bank transfer.",
    },
  ],
  benefits: [
    "Sofa repair from ₹999 — cushion, frame, fabric, and leather",
    "Chair repair from ₹499 — dining, office, accent, and rocking chairs",
    "Bed repair from ₹799 — frame, headboard, slats, and hydraulic storage",
    "Wardrobe repair from ₹499 — hinges, tracks, shelves, and doors",
    "Table repair from ₹599 — dining, coffee, study, and console tables",
    "Furniture polish from ₹1,499 — wood refinishing and lacquer work",
    "Sofa upholstery from ₹3,500 — complete fabric or leather change",
    "Recliner repair from ₹1,499 — mechanism, motor, and upholstery",
    "Carpenter services from ₹499 — assembly, installation, and custom work",
    "Package discounts for multi-piece repair bookings",
    "6-month warranty included in every price",
    "Free doorstep inspection and exact written quote",
  ],
  contentSections: [
    {
      heading: "Sofa Repair Price List — Delhi NCR 2025",
      body: [
        "Sofa cushion re-stuffing (single cushion): ₹999–₹1,500. Full sofa foam replacement (3-seater, 32D foam): ₹3,500–₹5,500. Sofa fabric replacement (3-seater): ₹4,500–₹7,000. Leather sofa crack repair: ₹2,999–₹12,000. Sofa frame repair: ₹1,500–₹4,000. Sofa spring replacement: ₹1,200–₹3,000. Complete sofa overhaul (foam + fabric + frame): ₹5,000–₹12,000. L-shaped sofa repairs cost 40–60% more than three-seater prices due to the additional material and labour required.",
        "Recliner sofa repair: mechanism fix from ₹1,499, motor replacement from ₹3,000–₹6,000. Sofa cum bed repair: hinge and mechanism from ₹1,500, mattress foam replacement from ₹2,000. These prices include doorstep service across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad with a 6-month warranty.",
      ],
    },
    {
      heading: "Chair, Bed & Table Repair Price List",
      body: [
        "Chair repair: dining chair joint re-gluing from ₹499, dining chair cushion replacement from ₹699, office chair gas lift replacement from ₹899, office chair wheel replacement from ₹499, accent chair reupholstery from ₹2,500. Bed repair: loose joint tightening from ₹799, headboard repair from ₹1,200, bed slat replacement from ₹999, hydraulic storage repair from ₹1,500, bed frame reinforcement from ₹1,500–₹3,500.",
        "Table repair: wobbly leg fixing from ₹599, glass top re-fitting from ₹799, table surface refinishing from ₹1,500, drawer repair from ₹699, study table hinge and runner repair from ₹599. Wardrobe repair: hinge replacement from ₹499, sliding door track repair from ₹999, internal shelf repair from ₹699, wardrobe door alignment from ₹599, wardrobe lock replacement from ₹399. All prices are for doorstep service with 6-month warranty.",
      ],
    },
    {
      heading: "Furniture Polish & Refinishing Price List",
      body: [
        "Wood polish and refinishing is one of the most transformative furniture services — it can make a 10-year-old dining table look brand new. Our polish pricing in Delhi NCR: single dining chair polish from ₹499, dining table (4-seater) polish from ₹1,499, dining table (6-seater) polish from ₹2,499, bed frame polish from ₹1,999, wardrobe exterior polish from ₹2,499, centre table polish from ₹999, TV unit polish from ₹1,499.",
        "Polish options include natural wood finish (melamine), high-gloss lacquer, matte finish, and antique finish. For extensive restoration work — repairing deep scratches, water damage rings, or sun-bleached areas before polishing — additional charges apply based on the extent of damage. We use professional-grade wood stains and lacquers that provide durable protection against Delhi's climate.",
      ],
    },
    {
      heading: "How to Save Money on Furniture Repair in Delhi NCR",
      body: [
        "The smartest way to save on furniture repair is to book multiple repairs in a single visit. Our package pricing offers 15–20% savings when you repair two or more furniture pieces together. For example, if you have three dining chairs that need re-gluing and a sofa that needs cushion replacement, booking them together saves you the equivalent of one chair repair's worth of cost.",
        "Timing also matters. Booking before peak festival seasons (Diwali, wedding season) ensures quicker availability and sometimes better material pricing. For large-scale repairs — like furnishing an entire home — call us for a custom package quote that includes all your needs in one comprehensive service plan. We also recommend addressing small issues early — a ₹499 hinge fix today prevents a ₹2,500 wardrobe door replacement next year.",
      ],
    },
    {
      heading: "Brand-Specific Repair Pricing — IKEA, Urban Ladder, Godrej & Premium Brands",
      body: [
        "Brand matters for repair pricing because different manufacturers use different materials, fastening methods, and build quality. <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair</a> is often more accessible than people expect — IKEA uses a flat-pack, modular assembly system that makes disassembly and repair relatively straightforward. Common IKEA repair jobs: KALLAX and BILLY bookshelf joint reinforcement (₹799–₹1,499), MALM bed slat system repair (₹999–₹1,999), KIVIK sofa foam replacement (₹999–₹3,500 for full set). <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder furniture repair</a> typically involves solid wood or engineered wood pieces with clean-line Scandinavian-inspired design. Joint repair, hinge replacement, and foam upgrade are common requests at ₹1,500–₹6,000 depending on the piece.",
        "<a href=\"/godrej-furniture-repair-delhi\">Godrej Interio repair</a> covers their extensive bedroom, living room, and office furniture range — beds, sofas, wardrobes, study tables. Godrej uses durable construction, so repairs often involve hinge adjustment, lock replacement, or foam/fabric refresh rather than structural work. <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry furniture repair</a> handles their eclectic mix of manufacturer styles — engineered wood pieces need joint reinforcement, solid wood pieces need periodic polish and repair. For <a href=\"/durian-furniture-repair-delhi\">Durian furniture repair</a>, we handle their premium recliner, sofa, and bedroom ranges with brand-appropriate materials. For all brand-specific pricing, our detailed service pages provide accurate estimates, and our free doorstep inspection confirms the final cost for your specific model.",
      ],
    },
    {
      heading: "Premium Service Pricing — Luxury, Imported & Antique Furniture Repair",
      body: [
        "<a href=\"/luxury-furniture-repair-delhi\">Luxury furniture repair in Delhi</a> covers brands like Natuzzi, Ashley, Pottery Barn, Restoration Hardware, and Italian leather sofas imported through high-end stores. These pieces use premium materials — full-grain Italian leather, solid hardwood joinery, European upholstery techniques — and repairs use matching quality materials to preserve the piece's value and appearance. Typical luxury furniture repair costs: leather restoration ₹5,000–₹18,000, structural joint repair ₹2,000–₹5,000, cushion replacement with European-grade foam ₹2,000–₹5,000 per cushion.",
        "<a href=\"/antique-furniture-restoration-delhi\">Antique furniture restoration in Delhi</a> is a specialist category combining carpentry, wood refinishing, and historical knowledge. Restoring an antique requires matching period-appropriate joinery techniques, sourcing compatible hardware, and using reversible adhesives where applicable. Costs range widely based on piece value, damage extent, and restoration ambition — from ₹3,000 for minor antique polish and crack repair to ₹15,000+ for comprehensive structural and surface restoration. For commercial furniture — offices, hotels, restaurants — our <a href=\"/office-furniture-repair-delhi\">office furniture repair</a> and <a href=\"/office-chair-repair-delhi\">office chair repair</a> services offer volume pricing with rapid turnaround. For a comprehensive reference on all premium service pricing, our <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> hub provides the authoritative overview.",
      ],
    },
    {
      heading: "NCR Price Comparison — Delhi, Noida, Gurgaon, Faridabad",
      body: [
        "Furniture repair pricing across Delhi NCR is largely consistent — FurniRevive maintains uniform pricing regardless of location, so you pay the same whether you're in South Delhi or Noida Sector 137. Some Delhi-specific services have slight location premiums due to traffic and travel time in dense urban areas like Connaught Place or Chandni Chowk, but these are minimal (₹100–₹200 extra for very central locations). For area-specific pricing pages: <a href=\"/furniture-repair-gurgaon\">furniture repair Gurgaon</a>, <a href=\"/furniture-repair-noida\">furniture repair Noida</a>, <a href=\"/furniture-repair-faridabad\">furniture repair Faridabad</a>. For sofa-specific area pricing: <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a>, <a href=\"/sofa-repair-noida\">sofa repair Noida</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>, <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a>.",
        "Location affects repair timing more than pricing. Central Delhi locations (Connaught Place, Karol Bagh) and premium addresses (GK1, GK2, Vasant Kunj, DLF Phase 1–5 Gurgaon) have the densest technician coverage and fastest response times. Outer NCR areas (Faridabad sectors beyond 20, Noida sectors beyond 100, Greater Noida) typically have next-day availability with same-day service for urgent bookings. For exact pricing for your location, call +91 92179 99355 or book through our <a href=\"/book\">online booking page</a>. Our <a href=\"/carpenter-home-service-delhi\">carpenter home service</a> and <a href=\"/sofa-upholstery-near-me\">sofa upholstery near me</a> pages help you find the right specialist in your area.",
      ],
    },
    {
      heading: "Decision Blogs — When Is Repair Worth the Cost?",
      body: [
        "Understanding when to repair vs replace furniture is a financial and practical decision. Our comprehensive blog series covers every scenario: <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace — the complete guide</a> provides a framework for evaluating repair vs replacement across all furniture categories with cost comparisons for 2025 Delhi NCR prices. <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a> focuses specifically on the sofa decision with detailed cost modelling. <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a> analyses the ROI of comprehensive sofa restoration projects. <a href=\"/blog/how-long-does-sofa-foam-last\">how long does sofa foam last</a> explains the technical factors affecting sofa lifespan in Delhi NCR's climate.",
        "For brand-specific decision guides: our <a href=\"/blog/complete-guide-to-furniture-restoration-delhi\">complete guide to furniture restoration in Delhi</a> covers the full restoration process for different furniture types. Our blog on <a href=\"/blog/imported-furniture-restoration-guide\">imported furniture restoration</a> helps owners of premium imported pieces understand their repair options. <a href=\"/blog/choosing-right-sofa-fabric-delhi\">choosing the right sofa fabric for Delhi</a> guides those combining repair with fabric upgrade. For chair repair decisions: <a href=\"/blog/office-chair-ergonomic-repair-upgrade-delhi\">office chair ergonomic repair and upgrade</a> covers the unique considerations for office furniture. These blogs — alongside our pricing hub at <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide Delhi</a> — give you everything you need to make informed furniture care decisions.",
      ],
    },
    {
      heading: "Complete Service Cross-Links — Every Repair Category",
      body: [
        "FurniRevive's full service ecosystem for Delhi NCR families and businesses covers every furniture category. Sofa services: <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a>, <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a>, <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a>, <a href=\"/sofa-spring-repair-delhi\">sofa spring repair</a>, <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a>, <a href=\"/sofa-fabric-tear-repair-delhi\">sofa fabric tear repair</a>, <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a>, <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a>, <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a>, <a href=\"/recliner-repair-delhi\">recliner repair</a>. Chair services: <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/office-chair-repair-delhi\">office chair repair</a>. Bed services: <a href=\"/bed-repair-delhi\">bed repair Delhi</a>. Other: <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a>, <a href=\"/carpenter-home-service-delhi\">carpenter home service</a>, <a href=\"/same-day-sofa-repair-delhi\">same-day sofa repair</a>, <a href=\"/emergency-furniture-repair-delhi\">emergency furniture repair</a>.",
        "NCR service pages: <a href=\"/furniture-repair-gurgaon\">furniture repair Gurgaon</a>, <a href=\"/furniture-repair-noida\">furniture repair Noida</a>, <a href=\"/furniture-repair-faridabad\">furniture repair Faridabad</a>, <a href=\"/sofa-repair-noida\">sofa repair Noida</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>, <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a>. Brand pages: <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair</a>, <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej repair</a>, <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry repair</a>, <a href=\"/durian-furniture-repair-delhi\">Durian repair</a>. Cost hubs: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">upholstery price list</a>, <a href=\"/leather-sofa-repair-cost-delhi\">leather repair cost</a>, <a href=\"/recliner-repair-cost-delhi\">recliner repair cost</a>. These pages, together with our <a href=\"/furniture-repair-price-guide-delhi\">master price guide</a>, form a complete pricing authority for furniture repair across Delhi NCR.",
      ],
    },
    {
      heading: "Foam Replacement Across Delhi NCR — Noida, Gurgaon & Faridabad Service",
      body: [
        "Our sofa foam replacement service covers the full Delhi NCR geography at identical standards and pricing — the same foam grades, the same cover re-attachment techniques, and the same same-day or next-day turnaround whether the job is in Central Delhi or on the Noida Expressway. <a href=\"/sofa-foam-replacement-noida\">Sofa foam replacement in Noida</a> is booked through the same system as Delhi, with technicians based in Sector 62 and Sector 18 for fast response across the Expressway belt; full Noida sofa coverage is on our <a href=\"/sofa-repair-noida\">sofa repair Noida</a> page. In Gurgaon, demand for high-density foam specifications is noticeably higher — DLF and Golf Course Road apartment owners frequently have imported sofas with non-standard seat depths that require 45D or even 50D foam to match the original feel; our <a href=\"/sofa-foam-replacement-gurgaon\">sofa foam replacement Gurgaon</a> and <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a> pages cover those specifications in detail.",
        "We stock 32D, 36D, 40D, and 45D options across all service areas, and the <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost guide</a> reflects NCR-wide pricing with no travel surcharge within standard service zones. If your sofa also has leather upholstery, our <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a> team can coordinate a combined visit, and if broken springs are contributing to the sagging, our <a href=\"/sofa-spring-repair-delhi\">sofa spring repair</a> service addresses that in the same appointment. The <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide hub</a> carries consolidated pricing for foam, spring, and leather work together.",
      ],
    },
    {
      heading: "Brand Sofa Foam Replacement in Delhi — IKEA, Durian, Urban Ladder, Wakefit & Pepperfry",
      body: [
        "Different sofa brands use very different foam specifications from the factory, and matching or upgrading those specs requires knowing what was originally fitted. IKEA sofas — EKTORP, KIVIK, and SÖDERHAMN being the most common in Delhi homes — use polyurethane chip foam with a relatively low density (typically 28D–30D) that softens noticeably within four to six years of regular use; we replace it with 36D or 40D PU foam that outlasts the original by a wide margin. Durian sofas use a denser PU foam from the factory (usually 32D–36D) but the covers are sewn with concealed zips that require careful technique to open without tearing the seam — our <a href=\"/durian-furniture-repair-delhi\">Durian furniture repair</a> technicians know these zip paths by model. <a href=\"/wakefit-furniture-repair-delhi\">Wakefit</a> sofas predominantly use bonded foam — a reconstituted product that crumbles rather than compresses over time — which we replace entirely with virgin PU foam at 32D or above.",
        "<a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder</a> sofas vary widely by SKU: their premium lines use decent HR foam while their budget ranges use low-density PU that ages poorly. <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry</a> sofas are largely manufactured by third-party factories and foam grades vary by supplier batch — we assess density on-site before recommending a replacement spec. All brand foam upgrades are priced in our <a href=\"/sofa-foam-replacement-cost-delhi\">foam cost guide</a>, and if your brand sofa is a recliner format, see our <a href=\"/recliner-sofa-repair-delhi\">recliner sofa repair</a> page for the higher-density specs those units require. The <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> consolidates all brand-specific work into one reference.",
      ],
    },
  ],
  faqs: [
    {
      question: "Are these prices final or just starting ranges?",
      answer:
        "The prices listed are starting ranges based on the most common repair scenarios. Your exact price depends on the specific condition of your furniture, which our technician assesses during the free doorstep inspection. The written quote you receive is the final price — no additional charges.",
    },
    {
      question: "Do you charge for the inspection visit?",
      answer:
        "No. The doorstep inspection and written quote are completely free across Delhi NCR. There is no obligation to proceed with the repair after receiving the quote.",
    },
    {
      question: "Are material costs included in the prices?",
      answer:
        "Standard materials are included. Premium materials — like imported leather, designer fabrics, or specialty hardware — are quoted separately and transparently as line items in your quote.",
    },
    {
      question: "Do you offer discounts for multiple furniture repairs?",
      answer:
        "Yes. We offer package pricing that saves 15–20% when you book two or more furniture repairs in a single visit. Call us for a custom quote for multi-piece repair.",
    },
    {
      question: "Is the 6-month warranty included in all prices?",
      answer:
        "Yes. Every price on this list includes a 6-month service warranty. If the same issue recurs within six months, we return and fix it at no charge across Delhi NCR.",
    },
    {
      question: "How do your prices compare to local carpenters in Delhi?",
      answer:
        "Our prices are competitive with and often lower than unorganised local carpenters, with the added benefits of verified craftsmen, written warranties, and customer support. We're typically 20–30% below market rates for equivalent quality work.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. Payment is collected only after the repair is complete and you're satisfied with the work.",
    },
    {
      question: "Can I get a quote over WhatsApp without a visit?",
      answer:
        "Yes. Send photos of your damaged furniture to our WhatsApp number +91 92179 99355 along with a description. We'll provide a preliminary estimate. The exact price is confirmed after the free doorstep inspection.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-price-list-delhi"),
    { label: "Sofa Cushion Repair Delhi", href: "/sofa-cushion-repair-delhi" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
  ],
  keywords: [
    "furniture repair price list delhi",
    "furniture repair cost delhi",
    "sofa repair cost delhi",
    "sofa repair price delhi",
    "chair repair cost delhi",
    "bed repair cost delhi",
    "wardrobe repair price delhi",
    "furniture polish price delhi",
    "furniture repair rates delhi NCR",
    "how much does furniture repair cost",
    "furniture repair charges near me",
    "cheapest furniture repair delhi",
  ],
};

// ---------------------------------------------------------------------------
// 6. SOFA SPRING REPAIR DELHI
// ---------------------------------------------------------------------------
export const sofaSpringRepairDelhi: SeoPageData = {
  slug: "sofa-spring-repair-delhi",
  title:
    "Sofa Spring Repair in Delhi | Spring Replacement ₹1,200 | FurniRevive",
  metaDescription:
    "Expert sofa spring repair in Delhi NCR. Broken spring replacement, sagging fix, sinuous & coil spring service for all sofas. Doorstep service from ₹1,200. 6-month warranty!",
  h1: "Sofa Spring Repair in Delhi — Spring Replacement & Sagging Fix from ₹1,200",
  heroSubtitle:
    "Sofa sagging in the middle, springs poking through, or creaking when you sit? FurniRevive replaces broken and worn sofa springs at your doorstep across Delhi NCR — sinuous, coil, and pocket springs from ₹1,200 with a 6-month warranty.",
  showcaseImage: {
    heading: "Premium Sofa Spring Repair — Expert Service at Your Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa spring repair technician replacing a broken sinuous spring in a sagging Delhi sofa — structural support restored by FurniRevive",
    caption: "Sofa Spring Repair Delhi | Sinuous & coil spring replacement | From ₹1,200 | FurniRevive",
  },
  intro: [
    "If your sofa sags in the centre even after foam replacement, or if you can feel hard spots poking through the cushion, or if the sofa makes creaking and snapping sounds when you sit down — the problem is almost certainly the springs. Sofa springs are the hidden support system beneath the cushions, and when they break, stretch, or detach, no amount of new foam will fix the sagging. You need professional sofa spring repair, and FurniRevive is Delhi NCR's specialist in this critical but often overlooked service.",
    "Most sofa owners in Delhi NCR don't realise their sofa has springs until something goes wrong. There are three main types of sofa springs: sinuous (zigzag) springs used in most modern sofas, coil springs used in traditional and premium sofas, and pocket springs similar to mattress springs found in high-end seating. Each type fails differently and requires specific repair techniques. FurniRevive's technicians are trained in all three types and carry replacement springs for the most common sofa models used in Delhi NCR homes.",
    "Our sofa spring repair service covers all of Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad with doorstep service starting at ₹1,200. Most spring repairs are completed in a single visit lasting 2–4 hours. We also check and report on the condition of the foam and frame while the sofa is open for spring work — giving you a complete picture of your sofa's health in a single inspection.",
  ],
  whyChoose: [
    {
      title: "All Spring Types Handled",
      description:
        "Sinuous (zigzag), coil (eight-way hand-tied), and pocket springs — we repair and replace all types with correct gauge and tension springs matched to your sofa's design.",
    },
    {
      title: "Root Cause Fix, Not Temporary Patch",
      description:
        "We don't just add foam on top of broken springs. We open the sofa, replace the damaged springs, re-tie loose connections, and restore the proper support structure.",
    },
    {
      title: "Doorstep Spring Replacement",
      description:
        "Our technicians carry common spring types and perform the full replacement at your home across Delhi NCR. No need to transport your sofa to a workshop.",
    },
    {
      title: "Starting at ₹1,200",
      description:
        "Individual spring replacement from ₹1,200. Full spring bed replacement for a three-seater from ₹3,000. Transparent pricing with written quotes.",
    },
    {
      title: "Combined Spring + Foam Service",
      description:
        "Since we open the sofa for spring work anyway, it's the ideal time to replace worn foam too. We offer a combined service at a discounted package price.",
    },
    {
      title: "6-Month Spring Warranty",
      description:
        "All spring repairs and replacements come with a 6-month warranty. If a replaced spring fails or detaches within six months, we fix it at no charge.",
    },
  ],
  process: [
    {
      step: "Describe the Sagging or Noise",
      description:
        "Call +91 92179 99355 or WhatsApp us. Describe where the sofa sags or where you feel springs poking. Photos or a short video of the problem area help us prepare the right parts.",
    },
    {
      step: "Technician Opens & Inspects",
      description:
        "Our spring repair specialist visits your home, carefully opens the sofa base, inspects the spring system, identifies broken or detached springs, and provides a detailed repair quote.",
    },
    {
      step: "Spring Replacement at Your Home",
      description:
        "Damaged springs are removed and replaced with new springs of the correct type and gauge. Loose clips and ties are re-secured. The entire spring bed is checked for even tension.",
    },
    {
      step: "Close, Test & Warranty",
      description:
        "The sofa base is re-sealed, cushions are replaced, and we do a sit-test across all seating positions to confirm even, springy support. Your 6-month warranty card is provided.",
    },
  ],
  benefits: [
    "Sinuous (zigzag) spring replacement and re-clipping",
    "Coil spring replacement and eight-way hand-tying",
    "Pocket spring unit repair and replacement",
    "Spring clip, bracket, and tie-wire replacement",
    "Webbing repair and replacement for spring-over-webbing sofas",
    "Sagging sofa diagnosis and complete structural fix",
    "Combined spring + foam replacement in one visit",
    "All sofa types: two-seater, three-seater, L-shaped, sectional",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "Starting at ₹1,200 — transparent, itemised pricing",
    "6-month warranty on all spring repair work",
    "Same-day service available across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "How to Tell If Your Sofa Springs Are Broken",
      body: [
        "Many sofa owners replace foam multiple times without realising the real problem is broken springs underneath. There are clear signs that indicate spring failure: the sofa sags noticeably in the centre or on one side even with new foam cushions; you can feel hard spots or pointed objects poking through the cushion when you sit; the sofa makes metallic creaking, snapping, or pinging sounds when weight is applied; you sink much deeper than normal when sitting; or the sofa base visibly bows when you look underneath.",
        "If you've already had the foam replaced and the sofa still sags or feels unsupportive, springs are almost certainly the issue. In Delhi NCR, this is a common problem in sofas that are 5–10 years old — the springs fatigue over time, especially in homes with children who jump on the sofa or where the sofa supports heavy daily use. FurniRevive recommends getting a spring inspection whenever you notice persistent sagging that foam replacement doesn't fix.",
      ],
    },
    {
      heading: "Types of Sofa Springs and How They Fail",
      body: [
        "Sinuous springs (also called zigzag or S-springs) are the most common type in modern sofas sold in Delhi NCR. They consist of a continuous wire bent in a zigzag pattern, stretched across the sofa frame and clipped at each end. These springs fail when the clips holding them to the frame break or detach, causing one section of the sofa to sag. They can also lose their tension over time, resulting in a gradual, even sag. Repair involves re-clipping or replacing individual springs — a straightforward process that our technicians handle efficiently.",
        "Coil springs are found in traditional and premium sofas. Each spring is an individual coil, typically tied together with twine in an eight-way hand-tied configuration. When individual coils break or the tying twine loosens, you get localised sagging and the feeling of falling into a hole. Pocket springs — individual coils encased in fabric pockets — are found in high-end sofas and function similarly to pocket-spring mattresses. When pocket springs fail, the affected area loses support entirely. Our technicians can replace individual coils and re-tie the spring system to restore the original support feel.",
      ],
    },
    {
      heading: "Sofa Spring Repair Cost in Delhi NCR",
      body: [
        "Individual sinuous spring replacement: ₹1,200–₹1,800 per spring including the clip and installation. Full sinuous spring bed replacement for a three-seater: ₹3,000–₹5,000. Individual coil spring replacement: ₹1,500–₹2,000 per coil including re-tying. Full coil spring retying without replacement: ₹2,000–₹3,500 for a three-seater. Pocket spring unit repair: ₹2,500–₹5,000 depending on the number of failed springs.",
        "We strongly recommend combining spring repair with foam replacement when the sofa is already opened up — adding foam replacement to a spring repair visit costs only 60–70% of the standalone foam replacement price, since the labour of opening and closing the sofa is already included. This combined service — springs + foam — is the most comprehensive way to restore a sagging sofa and typically costs ₹4,000–₹8,000 for a three-seater, giving you a sofa that feels like new for years to come. Updated in March 2026 with latest sofa spring repair pricing and service coverage in Delhi NCR.",
      ],
    },
    {
      heading: "When Sofa Springs Matter More Than Foam — Understanding the Support System",
      body: [
        "Many Delhi NCR sofa owners replace foam multiple times without realising their sofa's sagging is caused by failed springs — not degraded foam. The springs form the primary support structure beneath the cushions: healthy springs hold the entire weight of sofa occupants, with foam providing only comfort and surface feel. When springs fail, no amount of new foam restores the sofa's feel — the new foam simply follows the collapsed support structure and feels soft and unsupportive immediately. Signs that springs (not foam) are the primary issue: the sofa has recently had new foam but still feels unsupportive; the sagging is concentrated in a specific spot rather than uniformly across the seat; you can feel distinct hard or soft spots when pressing down on the seat from above; or the sofa surface bounces unevenly when you press on different areas. If these signs match your sofa, our free doorstep inspection will confirm whether spring replacement is needed. Our blog on <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a> helps distinguish foam from spring issues, and our guide on <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a> provides the overall decision framework.",
        "Understanding how springs work across different sofa price segments helps set expectations. Budget sofas (under ₹15,000) from furniture markets and online discounters often use minimal sinuous spring systems with just 3–4 springs per seat — these fail earlier and provide less even support. Mid-range sofas (₹15,000–₹40,000) typically use 5–7 sinuous springs per seat with good clip quality — these last 6–10 years with normal use. Premium sofas (₹40,000+) use either dense sinuous spring systems with superior gauge wire, eight-way hand-tied coil springs, or pocket spring units — these provide the best support and longevity. When replacing springs, we upgrade the spring quality where the original specification was poor, ensuring your repaired sofa performs better than new. For combined spring and foam replacement cost: a fully restored three-seater (springs + foam + fabric inspection) typically costs ₹6,000–₹12,000 — compare to <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a> and <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost</a> separately for the combined-service savings.",
      ],
    },
    {
      heading: "Complete Authority Resources for Sofa Spring and Related Repair",
      body: [
        "Our sofa spring repair service connects to a complete sofa repair ecosystem for Delhi NCR families. The core authority page for all sofa repair topics is our <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a> page — the comprehensive resource covering every sofa problem, service, and area. For specific repair services alongside spring replacement: <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a> for foam work (combined with spring replacement in one visit for best results), <a href=\"/sofa-fabric-tear-repair-delhi\">fabric tear repair</a> for cover damage found during spring access, <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a> for structural frame issues found alongside spring problems, <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a> for spring replacement in sectional sofas, and <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> for motorised sofas that also need spring servicing.",
        "For cost guidance and pricing: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost Delhi</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a>, <a href=\"/recliner-repair-cost-delhi\">recliner repair cost</a>, and our master <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide for Delhi</a>. For NCR coverage: <a href=\"/sofa-repair-noida\">sofa repair Noida</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>, <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a>. Our decision-support blogs: <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a>, <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a>, <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a>, and <a href=\"/blog/imported-furniture-restoration-guide\">imported furniture restoration guide</a>. For brand-specific: <a href=\"/ikea-furniture-repair-delhi\">IKEA repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej repair</a>, <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry repair</a>. Overall furniture: <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a>, <a href=\"/chair-repair-delhi\">chair repair Delhi</a>.",
      ],
    },
    {
      heading: "Brand-Specific Sofa Spring Repair — Urban Ladder, IKEA, Godrej & Premium Sofas",
      body: [
        "Spring systems vary significantly by brand and price tier, which affects repair approach and cost. Budget sofas from local Delhi NCR furniture markets (under ₹15,000) often use only 3–4 thin sinuous springs per seat with minimal gauge wire — these fail earliest and replacement is most straightforward and affordable. Mid-range sofas from <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder</a>, <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry</a>, and similar brands use 5–7 standard-gauge sinuous springs per seat — these typically last 7–10 years and are repaired by replacing the specific broken springs and their clips. We stock spring clips compatible with the most common Urban Ladder and Pepperfry sofa frames.",
        "Premium brands use superior spring systems. <a href=\"/godrej-furniture-repair-delhi\">Godrej Interio sofas</a> typically use good-quality sinuous spring systems that rarely fail before 10 years — when they do, replacement uses matching-gauge wire and clips. <a href=\"/ikea-furniture-repair-delhi\">IKEA sofas</a> use a combination of sinuous springs and webbing, and the specific combination depends on the model. For <a href=\"/durian-furniture-repair-delhi\">Durian recliner sofas</a>, the spring system supports the mechanism — spring repair must account for the recline path to avoid interference. For imported premium sofas (Italian, American), eight-way hand-tied coil or pocket spring systems require specialist knowledge to repair correctly. Our <a href=\"/blog/imported-furniture-restoration-guide\">imported furniture restoration guide</a> covers premium sofa repair in detail. For all spring repair pricing: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a>, <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a>.",
      ],
    },
    {
      heading: "Combined Spring + Foam + Fabric Restoration — Maximum Value in One Visit",
      body: [
        "The most cost-efficient sofa restoration strategy combines spring repair, foam replacement, and fabric or leather work in a single doorstep visit. When our technician opens the sofa base for spring access, the foam and fabric are already partially exposed — adding foam replacement at this point costs only 60–70% of the standalone foam replacement price, since the labour of opening and closing the sofa is already included. If the fabric or leather is also worn, our upholstery specialist can join the same visit to handle cover repair or replacement simultaneously. A fully combined restoration (springs + foam + fabric) for a three-seater typically costs ₹7,000–₹14,000 — giving you a sofa that performs and looks like new.",
        "Compare this to a new sofa of equivalent quality (₹25,000–₹60,000) and the value case is clear. Our related service pages for combined restoration: <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a> for foam replacement details, <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a> for foam density choices, <a href=\"/sofa-fabric-tear-repair-delhi\">sofa fabric tear repair</a> for cover restoration, <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a> if structural frame issues are also found, and <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a> for leather cover work. Our decision blogs provide the ROI framework: <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a>, and <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a>. Full pricing at our <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost guide</a>, and <a href=\"/leather-sofa-repair-cost-delhi\">leather repair cost guide</a>.",
      ],
    },
    {
      heading: "Sofa Spring Repair Across Delhi NCR — Coverage and Availability",
      body: [
        "FurniRevive provides doorstep sofa spring repair across the full Delhi NCR region. In Delhi, our spring repair technicians cover South Delhi (Saket, GK1, GK2, Hauz Khas, Vasant Kunj), North Delhi (Rohini, Pitampura, Shalimar Bagh), West Delhi (Janakpuri, Dwarka, Uttam Nagar), and East Delhi (Mayur Vihar, Preet Vihar, Laxmi Nagar). For South Delhi and Dwarka-specific services: <a href=\"/sofa-repair-south-delhi\">sofa repair South Delhi</a>, <a href=\"/sofa-repair-dwarka\">sofa repair Dwarka</a>.",
        "Across NCR: <a href=\"/sofa-repair-noida\">sofa repair Noida</a> covers all sectors including Sectors 18, 27, 50, 62, 93, and 137; <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a> covers DLF phases 1–5, Golf Course Road, Sohna Road, and New Gurgaon; <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a> covers Sectors 12–21 and NIT areas. Same-day spring repair is available for bookings before noon. Our technicians carry common sinuous and coil springs to enable same-day repair without waiting for parts. For furniture repair beyond sofas in these areas: <a href=\"/furniture-repair-gurgaon\">furniture repair Gurgaon</a>, <a href=\"/furniture-repair-noida\">furniture repair Noida</a>, <a href=\"/furniture-repair-faridabad\">furniture repair Faridabad</a>, and <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> provide the full service overview.",
      ],
    },
    {
      heading: "Sofa Spring Repair — Decision Blogs, Cost Guides & Related Services",
      body: [
        "Our sofa spring repair connects to a complete resource ecosystem. Cost guidance: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost Delhi</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a>, <a href=\"/recliner-repair-cost-delhi\">recliner repair cost</a>, <a href=\"/leather-sofa-repair-cost-delhi\">leather sofa repair cost</a>, <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> (master hub), <a href=\"/furniture-repair-price-list-delhi\">furniture repair price list</a>. Decision blogs: <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a> (helps distinguish spring from foam issues), <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a>, <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a>, <a href=\"/blog/complete-guide-to-furniture-restoration-delhi\">complete restoration guide</a>.",
        "Brand-specific: <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej furniture repair</a>, <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder repair</a>, <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry repair</a>, <a href=\"/durian-furniture-repair-delhi\">Durian repair</a>. Related repairs: <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a>, <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a>, <a href=\"/sofa-fabric-tear-repair-delhi\">fabric tear repair</a>, <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a>, <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a>, <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a>, <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a>, <a href=\"/recliner-repair-delhi\">recliner repair</a>. General: <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a>, <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a>, <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/same-day-sofa-repair-delhi\">same-day sofa repair</a>, <a href=\"/emergency-furniture-repair-delhi\">emergency furniture repair</a>. Spring repair is available across NCR: <a href=\"/sofa-repair-gurgaon\">sofa spring repair in Gurgaon</a> and <a href=\"/sofa-repair-faridabad\">sofa spring repair in Faridabad</a> — same-day doorstep service at identical pricing.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I know if my sofa springs are broken?",
      answer:
        "Key signs: the sofa sags even with new foam, you feel hard points through the cushion, metallic creaking sounds when sitting, or the base visibly bows from underneath. If foam replacement didn't fix the sagging, springs are likely the problem.",
    },
    {
      question: "Can sofa springs be repaired or do they need full replacement?",
      answer:
        "It depends on the damage. If only 1–2 springs are broken or detached, we replace just those springs. If the entire spring system has lost tension or multiple springs have failed, a full replacement gives the best, most even result.",
    },
    {
      question: "How long does sofa spring repair take?",
      answer:
        "Most spring repairs take 2–4 hours. The sofa needs to be carefully opened from the bottom, springs replaced, and the base re-sealed. Combined spring and foam replacement may take 3–5 hours.",
    },
    {
      question: "Do you carry springs for all sofa brands?",
      answer:
        "We carry common sinuous and coil springs that fit the majority of sofas in Delhi NCR. For unusual specifications, we source the correct springs within 24–48 hours before the repair visit.",
    },
    {
      question: "Should I replace foam at the same time as springs?",
      answer:
        "We recommend it if the foam is also worn. Since the sofa is already opened for spring work, adding foam replacement at the same time saves 30–40% on the foam service cost and gives you a fully restored sofa.",
    },
    {
      question: "What's the starting price for sofa spring repair?",
      answer:
        "Individual spring replacement starts at ₹1,200. Full spring bed replacement for a three-seater starts at ₹3,000. Combined spring + foam service starts at ₹4,000. Exact pricing is confirmed after doorstep inspection.",
    },
    {
      question: "Is the spring repair warranty valid across Delhi NCR?",
      answer:
        "Yes. Our 6-month warranty covers all spring repairs and replacements across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. If a replaced spring fails within six months, we fix it at no charge.",
    },
    {
      question: "Can you repair springs in a sofa cum bed?",
      answer:
        "Yes. Sofa cum beds often have both seating springs and bed-frame springs. We repair and replace springs in both the sitting and sleeping configurations, ensuring smooth operation and proper support.",
    },
    {
      question: "Can you repair sofa springs in Noida and Gurgaon?",
      answer:
        "Yes. Sofa spring repair is available across all Delhi NCR — Delhi, Noida (all sectors), Gurgaon, Ghaziabad, and Faridabad. Same-day service for bookings before noon. Our technicians carry common spring types for immediate repair across the NCR.",
    },
    {
      question: "Is spring replacement more expensive for L-shape sofas?",
      answer:
        "L-shape sofas have more seating sections than standard sofas, so full spring replacement costs proportionally more — typically ₹5,000–₹10,000 for a full L-shape spring replacement versus ₹3,000–₹5,000 for a three-seater. Individual broken spring replacement is still priced per spring regardless of sofa type.",
    },
    {
      question: "Can I just add more foam if my sofa springs are broken?",
      answer:
        "Adding more foam on top of broken springs is a temporary fix at best and makes things worse at worst. The broken spring will cause new foam to collapse in the same spot within weeks. Proper spring replacement followed by foam replacement if needed is the only permanent solution.",
    },
    {
      question: "Do you repair springs in premium imported sofas?",
      answer:
        "Yes. Premium imported sofas (European, Italian, or American brands) typically use pocket springs or eight-way hand-tied coil springs — the highest-quality spring systems. We carry replacement coil springs and pocket spring units compatible with these premium sofa types. See our imported furniture restoration guide for more details.",
    },
    {
      question: "How do I check if my sofa has sinuous or coil springs?",
      answer:
        "Look underneath the sofa — if you see zigzag wire running across the frame width, these are sinuous (zigzag) springs. If you see individual coil shapes, these are coil springs. If the base is solid (no visible springs from underneath), it may be a foam-over-webbing sofa with no traditional spring system. Our technician confirms the spring type during the free doorstep inspection.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-spring-repair-delhi"),
    { label: "Sofa Foam Replacement Delhi", href: "/sofa-foam-replacement-delhi" },
    { label: "Sofa Cushion Repair Delhi", href: "/sofa-cushion-repair-delhi" },
  ],
  keywords: [
    "sofa spring repair delhi",
    "sofa spring repair near me",
    "sofa spring replacement delhi",
    "broken sofa spring repair",
    "sofa sagging repair delhi",
    "sofa spring replacement cost",
    "sinuous spring repair",
    "coil spring sofa repair delhi",
    "sofa spring repair cost delhi",
    "sagging sofa fix delhi",
    "sofa base repair delhi",
    "best sofa spring repair delhi NCR",
  ],
};

export const PROBLEM_PRICE_PAGES_2: SeoPageData[] = [
  sofaFoamReplacementDelhi,
  furnitureRepairPriceListDelhi,
  sofaSpringRepairDelhi,
];
