import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_TYPE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Price List", href: "/furniture-repair-price-list-delhi" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_TYPE_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. WOODEN FURNITURE REPAIR DELHI
// ---------------------------------------------------------------------------
export const woodenFurnitureRepairDelhi: SeoPageData = {
  slug: "wooden-furniture-repair-delhi",
  title:
    "Wooden Furniture Repair Delhi NCR | Teak, Sheesham, MDF | FurniRevive",
  metaDescription:
    "Expert wooden furniture repair in Delhi NCR. Teak, sheesham, MDF, plywood & engineered wood repair at your doorstep. Polish, refinishing, joint repair. 6-month warranty. ₹599 onwards.",
  h1: "Wooden Furniture Repair in Delhi NCR — All Wood Types, Doorstep Service",
  heroSubtitle:
    "Professional repair and restoration for all wooden furniture — teak, sheesham, mango wood, MDF, plywood, and engineered wood. Joint repair, polish, refinishing, termite damage restoration, and structural reinforcement at your doorstep across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad. Starting ₹599 with a 6-month warranty.",
  showcaseImage: {
    heading: "Wooden Furniture Repair — Expert Teak, Sheesham & MDF Service in Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional wooden furniture repair technician restoring a teak dining table in a Delhi NCR home — FurniRevive",
    caption: "Wooden Furniture Repair in Delhi NCR | Teak, sheesham & MDF repair | Polish & restoration | Home visit | FurniRevive",
  },
  intro: [
    "Wood is the most common material in Indian home furniture — from the solid teak dining sets that families pass down through generations to the affordable MDF wardrobes that equip every new apartment in Noida and Gurgaon. Delhi NCR's climate is particularly harsh on wooden furniture: scorching dry summers cause joints to loosen and surfaces to crack, the monsoon humidity makes wood swell and warp, and winter temperature drops stress glued joints. Over time, even the finest wooden furniture needs professional repair to remain functional and beautiful.",
    "FurniRevive is Delhi NCR's specialist wooden furniture repair service. Unlike general handyman services that treat all furniture the same, our craftsmen understand the specific properties of each wood type — the oiliness of teak that requires special adhesives, the density of sheesham that needs high-torque tools, the fragility of MDF that demands careful handling, and the laminate finishes on engineered wood that require heat-gun techniques for seamless repair. We provide doorstep repair across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad — bringing specialised tools, wood-specific adhesives, and finishing materials directly to your home.",
    "Our wooden furniture repair services cover the full spectrum: structural joint repair for wobbly tables and chairs, surface scratch and dent repair, water stain removal, polish and lacquer refinishing, termite damage assessment and restoration, wardrobe and cabinet door realignment, drawer runner replacement, veneer repair, and complete restoration of antique and heritage wooden pieces. Starting at ₹599 with a 6-month warranty on every repair, we make professional wood restoration accessible to every household in Delhi NCR.",
  ],
  whyChoose: [
    {
      title: "All Wood Types — Expert Knowledge",
      description:
        "Teak, sheesham (rosewood), mango wood, sal, rubber wood, pine, MDF, HDF, plywood, particle board, and engineered wood with laminate or veneer finishes. We know each material's properties and use the right techniques for each.",
    },
    {
      title: "Structural & Cosmetic Repair",
      description:
        "We fix both structural issues (loose joints, cracked frames, broken legs) and cosmetic problems (scratches, water marks, faded polish, chipped veneer) — restoring your wooden furniture inside and out.",
    },
    {
      title: "Professional Polish & Refinishing",
      description:
        "Melamine, PU (polyurethane), French polish, lacquer, and wax finishes applied with spray equipment for a factory-quality result. We colour-match to your existing furniture for seamless results.",
    },
    {
      title: "Termite Damage Restoration",
      description:
        "Delhi NCR's termite problem is well known. We assess termite damage, replace structurally compromised sections, treat the wood with anti-termite chemicals, and restore the finish — saving furniture that appears beyond repair.",
    },
    {
      title: "Doorstep Service, All Delhi NCR",
      description:
        "Our craftsmen arrive fully equipped at your home in Delhi, Noida, Gurgaon, Ghaziabad, or Faridabad. No need to transport heavy wooden furniture to a workshop.",
    },
    {
      title: "6-Month Warranty from ₹599",
      description:
        "Every wooden furniture repair is backed by our 6-month written warranty. Starting price of ₹599 for minor repairs. Transparent written quotes before any work begins.",
    },
  ],
  process: [
    {
      step: "Share Photos & Book",
      description:
        "Call +91 92179 99355 or WhatsApp photos of the wooden furniture damage. Mention the wood type if known and your location in Delhi NCR. We provide a preliminary estimate within minutes.",
    },
    {
      step: "Expert Doorstep Assessment",
      description:
        "Our wood specialist visits your home, identifies the wood type and finish, assesses the damage thoroughly, and provides a detailed written quotation covering materials and labour.",
    },
    {
      step: "Professional Repair & Finishing",
      description:
        "Upon approval, our craftsmen carry out structural repair, surface restoration, and professional finishing at your home using wood-specific tools, adhesives, and finishing materials.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "We inspect every joint, surface, and finish with you present. The work area is cleaned thoroughly, and you receive your 6-month warranty card. Payment only after satisfaction.",
    },
  ],
  benefits: [
    "All wood types: teak, sheesham, mango, sal, pine, MDF, plywood, engineered wood",
    "Joint repair using industrial-grade wood adhesives and dowels",
    "Broken leg, armrest, and frame section replacement",
    "Surface scratch, dent, and water stain removal",
    "Professional polish: melamine, PU, French polish, lacquer, wax",
    "Veneer and laminate repair for engineered wood furniture",
    "Termite damage restoration and anti-termite treatment",
    "Wardrobe door realignment, shelf fixing, and drawer repair",
    "Antique and heritage wooden furniture restoration",
    "Colour-matched finishing for seamless results",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "6-month written warranty on all repairs from ₹599",
  ],
  contentSections: [
    {
      heading: "Types of Wooden Furniture We Repair in Delhi NCR",
      body: [
        "Wooden furniture in Delhi NCR homes spans an enormous range — from hand-carved vintage teak almirahs that have been in families for decades to flat-pack particle board bookshelves purchased online last month. FurniRevive repairs them all with equal professionalism. Solid wood furniture — teak dining tables, sheesham bed frames, mango wood coffee tables, and sal wood temple units — requires traditional carpentry skills: mortise and tenon joint repair, wood filler application, grain-matched patching for broken sections, and professional polish that respects the natural character of the wood. Our craftsmen have years of experience with these traditional Indian furniture styles and know how to restore them without losing their original charm.",
        "Modern engineered wood furniture — MDF wardrobes, particle board TV units, laminate-finished desks, and plywood kitchen cabinets — requires different techniques entirely. MDF cannot be repaired with standard wood glue; it needs specialised MDF adhesives and filler compounds. Laminate chips need careful heat-gun application for edge banding replacement. Plywood delamination requires controlled clamping with marine-grade adhesive. Particle board that has swollen from moisture often needs section replacement rather than repair. Our technicians carry dedicated materials and tools for each wood type, ensuring that whether your furniture is solid sheesham or budget MDF, the repair is done correctly and lasts.",
      ],
    },
    {
      heading: "Wood Polish & Refinishing Services in Delhi NCR",
      body: [
        "Polish and refinishing is the most transformative wooden furniture repair service we offer. A dining table that looks tired and worn can be restored to showroom condition with professional refinishing — and the difference is dramatic. We offer five types of wood finishing. Melamine polish is our most popular option: it creates a hard, glossy, scratch-resistant surface that is ideal for dining tables and high-use furniture. PU (polyurethane) finish provides a premium satin or matte look popular in contemporary Delhi NCR homes and is highly resistant to water and heat marks. French polish gives a warm, traditional lustre perfect for antique and heritage pieces — it's a hand-applied technique that requires skill and patience. Lacquer finish offers a high-gloss reflective look for designer furniture. Natural wax finish provides a matte, organic feel for rustic and farmhouse-style pieces.",
        "Our refinishing process begins with careful stripping of the old finish using chemical strippers or sanding, depending on the wood type and existing finish. We then repair any surface damage — filling scratches, dents, and stains. Multiple coats of the chosen finish are applied with professional spray equipment for an even, drip-free result. Between coats, we sand with progressively finer grades for a perfectly smooth surface. The final result is a factory-quality finish applied at your doorstep. Refinishing a dining table typically costs ₹3,000–₹8,000 depending on size and finish type — a fraction of replacing it with furniture of similar quality.",
      ],
    },
    {
      heading: "Termite Damage Repair for Wooden Furniture in Delhi NCR",
      body: [
        "Termites are one of the most destructive threats to wooden furniture in Delhi NCR, particularly in ground-floor homes, older colonies, and areas near the Yamuna floodplain. Many homeowners discover termite damage only when a chair leg snaps or a wardrobe panel crumbles — by which point the damage can be extensive. FurniRevive offers comprehensive termite damage assessment and restoration for all wooden furniture across Delhi NCR.",
        "Our process begins with a thorough inspection of the affected piece and surrounding furniture to map the extent of infestation. We then remove all termite-damaged wood — sections that have been eaten hollow are not structurally repairable and must be replaced. New wood sections are cut and joined to match the original dimensions, using wood of the same species where possible. All replaced and adjacent sections are treated with professional anti-termite chemicals that prevent reinfestation for years. Finally, the furniture is refinished to match its original appearance. For mildly affected pieces, we inject anti-termite solution into tunnel holes and seal them with wood filler before refinishing. We also advise on whole-home anti-termite measures to protect the rest of your furniture collection.",
      ],
    },
    {
      heading: "Wooden Furniture Repair Cost in Delhi NCR",
      body: [
        "Our wooden furniture repair pricing is transparent and competitive. Minor repairs — tightening a loose joint, fixing a wobbly table leg, re-gluing a chair joint — start at ₹599. Surface scratch and dent repair ranges from ₹800 to ₹2,000 depending on the area and depth of damage. Water stain removal from wooden surfaces costs ₹500–₹1,500. Full dining table polish and refinishing ranges from ₹3,000 to ₹8,000 depending on table size and finish type. Wardrobe door realignment and hinge replacement costs ₹500–₹2,000. Drawer runner replacement is ₹300–₹800 per drawer.",
        "For more extensive work, bed frame structural repair costs ₹1,500–₹5,000. Broken table or chair leg replacement costs ₹800–₹2,500 per leg. Termite damage restoration ranges from ₹2,000 for minor work to ₹8,000–₹15,000 for major reconstruction of large pieces. Veneer and laminate repair for engineered wood furniture costs ₹800–₹3,000. Antique furniture restoration is quoted individually based on the piece's condition and the work required. All quotes are provided in writing after our free doorstep inspection — we never surprise you with additional charges.",
      ],
    },
    {
      heading: "Brand-Specific Wooden Furniture Repair in Delhi NCR — Urban Ladder, Wooden Street & Nilkamal",
      body: [
        "Delhi NCR's furniture shopping landscape is dominated by a handful of well-known brands, and each brand's material choices create distinct repair challenges that generic carpenters routinely get wrong. Urban Ladder — one of the most-purchased furniture brands among Delhi NCR households — builds much of its bestselling range in sheesham (Indian rosewood). Sheesham is a dense, oily hardwood with spectacular grain, but its natural resins reduce adhesive bonding unless properly prepared. Our craftsmen degrease sheesham bonding surfaces with acetone, apply sheesham-compatible two-part epoxy, and clamp with precision so cured joints are stronger than the factory originals. Urban Ladder's sheesham dining tables, beds, sideboards, and TV units are among our most frequent doorstep repair jobs across Delhi. We carry pre-mixed dark walnut and honey-oak stain blends that match Urban Ladder's signature tones for invisible finish touch-ups. For any high-value brand piece, read our <a href=\"/blog/imported-furniture-restoration-guide\">guide to restoring premium and imported furniture</a> before deciding on an approach.",
        "Wooden Street's mango wood furniture — warm-amber dining sets, coffee tables, and storage units popular across Noida and Gurgaon apartments — is softer than sheesham and more susceptible to surface dents and gradual joint play. We sand mango wood at lighter grit and match Wooden Street's rustic-brown and natural-amber palette for seamless patch work. Nilkamal's engineered wood range and comparable products from <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry</a> — the particle board and MDF shelves, wardrobes, and TV units ubiquitous in Delhi NCR builder flats — require specialist MDF adhesives, heat-gun edge banding, and laminate patch film. Standard wood glue bonds MDF poorly and will fail within months. For <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair in Delhi</a>, which uses engineered wood almost exclusively with cam-lock dowel joinery, we carry IKEA-compatible replacement cam locks, dowels, and Allen hardware and know the disassembly sequence for every common IKEA range. <a href=\"/godrej-furniture-repair-delhi\">Godrej furniture repair</a> — covering the Interio range and Godrej storage units — involves a combination of engineered panels, metal rod frames, and proprietary hinges that requires both carpentry and metalwork expertise. Whatever brand of wooden furniture you own, our full <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> service and specialist <a href=\"/wardrobe-repair-delhi\">wardrobe repair</a> cover every make across Delhi NCR.",
      ],
    },
    {
      heading: "Delhi Season-by-Season Wooden Furniture Care Guide",
      body: [
        "Delhi's climate is one of the harshest environments for wooden furniture anywhere in India. The city swings between extreme heat, punishing humidity, and cold dry winters — and each season stresses wood in a different way. Summer (March–June) brings intense heat and humidity that drops as low as 15–20%, causing wood fibres to dry and contract. This is when wooden chair and table joints loosen most dramatically — mortise and tenon connections that fitted snugly through winter develop visible play. Wardrobe doors and drawer fronts suddenly show gaps. Tabletops develop hairline cracks along the grain. Preventive action: keep wooden furniture away from direct sunlight and air-conditioner vents. Apply furniture wax or Danish oil every three months. Book a preventive joint-tightening inspection in April — a ₹599–₹1,500 repair caught in May avoids a ₹4,000–₹8,000 structural rebuild in August. Consult our full <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide for Delhi</a> for seasonal cost benchmarks.",
        "Monsoon (July–September) brings the opposite stress: Delhi's humidity surges to 80–95% and wood swells. Drawer fronts stick, wardrobe doors swell shut, and tabletops develop white moisture rings under condensing glasses. MDF and particle board furniture begins to delaminate around edges. The post-monsoon period brings rapid drying, and the cycle of swelling and shrinking eventually stresses joints beyond what original adhesives can hold. Our blog on <a href=\"/blog/furniture-repair-vs-replace\">when to repair vs replace furniture</a> helps you decide when accumulated seasonal damage warrants full restoration. For sofa and upholstery seasonal issues, our blog on <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a> provides helpful parallel context. We also recommend our <a href=\"/blog/imported-furniture-restoration-guide\">premium furniture restoration guide</a> if you own high-value sheesham or teak pieces that deserve specialist seasonal care.",
      ],
    },
    {
      heading: "Heritage and Antique Wooden Furniture Restoration in Delhi",
      body: [
        "Delhi is home to some of the finest antique and heritage wooden furniture in India — Burmese teak colonial writing desks in Civil Lines bungalows, mid-century rosewood dining sets in Defence Colony homes, hand-carved Mughal-era almirahs in Old Delhi havelis. These pieces are not merely functional furniture; they are cultural and financial assets that deserve specialised restoration. FurniRevive's restoration craftsmen are trained in heritage woodworking techniques including traditional hide glue (reversible — the international conservation standard for antique pieces) and period-appropriate joinery: mortise and tenon, wooden pegs, butterfly keys for crack stabilisation. For finishes, we apply French polish (shellac in methylated spirit, built up in multiple hand-applied coats) on antique and colonial-era pieces, achieving the warm deep lustre that machine-sprayed modern finishes cannot replicate. Our blog on <a href=\"/blog/is-sofa-restoration-worth-it\">restoration value analysis</a> explains when specialist restoration is a genuine financial investment.",
        "Restoration in Delhi faces unique challenges — many antique pieces have had decades of amateur repairs using PVC adhesive, mismatched hardware, and untreated termite damage. Our restoration process begins with careful chemical stripping revealing the original finish beneath. We map every joint condition, identify termite-compromised sections, and create a full restoration plan before touching the piece. Missing carved sections are reproduced by hand using reference photographs and period design references. Hardware is sourced from specialist antique hardware suppliers or custom-fabricated to match original specifications. For other high-value furniture in your collection, our specialist <a href=\"/chair-repair-delhi\">chair repair Delhi</a> service and comprehensive <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> service apply the same restoration-grade quality standards.",
      ],
    },
    {
      heading: "Repair vs Replace: Wooden Furniture Cost Analysis for Delhi NCR Homeowners",
      body: [
        "For solid wood furniture, the economics of repair vs replacement are compelling. Consider a 6-seater sheesham dining set originally purchased for ₹45,000–₹80,000 from Urban Ladder or Wooden Street. After 7–8 years, the chairs wobble, the tabletop has deep scratches, and one leg has cracked. Replacement cost for equivalent quality sheesham: ₹45,000–₹80,000. Professional repair and full refinishing: ₹5,000–₹14,000. The same maths apply to beds: a solid wood queen bed repaired comprehensively for ₹3,000–₹8,000 versus ₹25,000–₹45,000 for an equivalent replacement. Our <a href=\"/blog/furniture-repair-vs-replace\">complete furniture repair vs replace guide</a> covers every furniture category with real Delhi NCR cost examples. Our blog on <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a> provides identical analysis for sofas.",
        "For a complete picture of repair costs across all categories, our <a href=\"/furniture-repair-price-guide-delhi\">comprehensive furniture repair price guide</a> is the best starting point. For sofa-specific cost breakdowns alongside your wooden furniture budgeting: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost in Delhi</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">complete sofa upholstery price list</a>, and <a href=\"/recliner-repair-cost-delhi\">recliner repair cost guide</a>. For engineered wood furniture, the calculus is different — a budget MDF wardrobe that needs extensive repairs may not justify the investment if it is already 5–6 years old. Specifically for wardrobes, our <a href=\"/wardrobe-repair-delhi\">wardrobe repair Delhi</a> page explains exactly when modular wardrobes are and are not worth repairing. For bed frames, our <a href=\"/bed-repair-delhi\">bed repair Delhi</a> page covers the bed-specific repair vs replace decision.",
      ],
    },
    {
      heading: "Complete Furniture Repair Services Across Delhi NCR",
      body: [
        "Wooden furniture repair is one pillar of a complete home furniture solution. FurniRevive covers every furniture category found in Delhi NCR homes. Our highest-volume service is <a href=\"/sofa-repair-delhi\">sofa repair in Delhi</a> — covering <a href=\"/sofa-cushion-repair-delhi\">cushion re-stuffing and foam replacement</a>, <a href=\"/sofa-fabric-tear-repair-delhi\">fabric tear repair and full re-upholstery</a>, <a href=\"/sofa-frame-repair-delhi\">structural sofa frame repair</a>, <a href=\"/sofa-spring-repair-delhi\">sofa spring replacement</a>, and <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a>. For powered furniture, our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> service restores electric recliners to full operation.",
        "Beyond sofas: our <a href=\"/bed-repair-delhi\">bed repair Delhi</a> service covers hydraulic storage mechanisms, frame joints, plywood bases, and headboard repair. Our <a href=\"/wardrobe-repair-delhi\">wardrobe repair</a> service handles sliding door tracks, hinges, shelf brackets, and drawer runners. For seating, our <a href=\"/chair-repair-delhi\">chair repair Delhi</a> service covers dining chairs, accent chairs, and executive office chairs. All services operate across NCR: <a href=\"/sofa-repair-noida\">sofa repair in Noida</a> and <a href=\"/sofa-repair-gurgaon\">sofa repair in Gurgaon</a> run with the same technicians and standards. For brand-specific work: <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej furniture repair</a>, and <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry furniture repair</a>. Our full <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> overview and <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> cover every service with transparent pricing.",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of wood furniture do you repair in Delhi NCR?",
      answer:
        "We repair all types: solid wood (teak, sheesham, mango, sal, pine, rubber wood), engineered wood (MDF, HDF, particle board, plywood), and composite furniture with laminate or veneer finishes. Dining tables, beds, chairs, wardrobes, TV units, bookshelves, dressing tables, temple units, and all other wooden furniture.",
    },
    {
      question: "Can you repair termite-damaged wooden furniture?",
      answer:
        "Yes. We assess the damage, remove structurally compromised sections, replace them with matching wood, apply professional anti-termite treatment, and refinish the furniture. Many pieces that appear beyond repair can be fully restored.",
    },
    {
      question: "What wood polish options do you offer?",
      answer:
        "We offer melamine polish (glossy, durable), PU finish (premium satin/matte), French polish (warm traditional lustre), lacquer (high-gloss), and natural wax (matte organic). We colour-match to your existing furniture.",
    },
    {
      question: "How much does wooden furniture repair cost in Delhi?",
      answer:
        "Minor joint repairs start at ₹599. Scratch repair ₹800–₹2,000. Table polish ₹3,000–₹8,000. Bed frame repair ₹1,500–₹5,000. Termite restoration ₹2,000–₹15,000. Free doorstep inspection and written quote provided.",
    },
    {
      question: "Can you match the original finish of my wooden furniture?",
      answer:
        "Yes. Our polish specialists carry a range of stains, toners, and finish types to match your existing furniture colour and sheen. We do a test patch first on an inconspicuous area to confirm the match before proceeding.",
    },
    {
      question: "Do you repair MDF and particle board furniture?",
      answer:
        "Yes. We use specialised MDF adhesives, fillers, and edge banding materials. For moisture-swollen particle board, we replace damaged sections. We also repair chipped laminate surfaces using heat-gun edge banding techniques.",
    },
    {
      question: "Can you restore antique wooden furniture?",
      answer:
        "Yes. Our craftsmen have experience with vintage teak, carved rosewood, and colonial-era furniture. We use restoration-appropriate techniques — traditional joinery, French polish, and period-matched hardware — to preserve the piece's character.",
    },
    {
      question: "Do you provide anti-termite treatment for furniture?",
      answer:
        "Yes. We apply professional anti-termite chemicals to treated furniture that protect against reinfestation for years. We also advise on whole-home preventive measures for Delhi NCR homeowners.",
    },
    {
      question: "Is the 6-month warranty valid for wooden furniture repair?",
      answer:
        "Yes. Our 6-month written warranty covers all wooden furniture repairs including joint work, polish, and structural repairs. Valid at your address across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
    },
    {
      question: "Can you repair Urban Ladder sheesham furniture in Delhi?",
      answer:
        "Yes. Urban Ladder sheesham furniture is one of our most common repair categories. We use sheesham-compatible two-part epoxy adhesives and carry Urban Ladder's dark walnut and honey-oak stain tones for colour-matched finish repairs. Doorstep service across Delhi, Noida, and Gurgaon.",
    },
    {
      question: "Do you repair Wooden Street and Pepperfry furniture?",
      answer:
        "Yes. We repair Wooden Street's mango wood range and Pepperfry furniture of all materials — solid wood, MDF, particle board, and metal-frame. We understand each brand's construction methods and use the correct adhesives, hardware, and finish materials for seamless results.",
    },
    {
      question: "Why does wooden furniture develop loose joints in Delhi summers?",
      answer:
        "Delhi's summer humidity drops to 15–20%, causing wood fibres to dry and contract. The mortise and tenon joints that were tight in winter develop play as wood shrinks away from glued surfaces. This is the most common cause of wobbly chairs and tables in Delhi NCR. Professional joint repair with industrial adhesive and steel reinforcement brackets restores full stability.",
    },
    {
      question: "How does Delhi's monsoon affect wooden furniture?",
      answer:
        "Monsoon humidity (80–95%) causes wood to swell. Drawer fronts stick, wardrobe doors refuse to close, and tabletop surfaces develop moisture rings. MDF and particle board furniture can delaminate at edges. After monsoon, rapid drying contracts the wood again — this repeated cycle is responsible for most crack and joint failures we see in Delhi NCR.",
    },
    {
      question: "What is the difference between French polish and melamine polish for wooden furniture?",
      answer:
        "French polish is a traditional shellac-based finish applied by hand in many thin coats. It produces a warm, deep lustre and is the correct finish for antique and heritage wooden furniture. Melamine is a modern synthetic finish sprayed on for a hard, glossy, scratch-resistant surface ideal for dining tables and high-use furniture. We offer both, plus PU, lacquer, and wax finishes.",
    },
    {
      question: "How long does a professional wooden furniture repair last?",
      answer:
        "With professional repair using industrial-grade adhesives and correct reinforcement techniques, structural joint repairs typically last 8–15 years — often longer than the original factory joints. Surface polish repairs are covered by our 6-month warranty and last 3–7 years with normal use. Termite treatment protects for 3–5 years.",
    },
    {
      question: "Is it worth restoring antique wooden furniture in Delhi?",
      answer:
        "In most cases, yes — both financially and sentimentally. A well-restored antique teak almirah or rosewood writing desk commands significant resale value, and the restoration cost (₹5,000–₹25,000 depending on size and damage) is typically a fraction of the piece's market value. We use traditional hide glue and French polish for authentic heritage restoration that preserves provenance.",
    },
    {
      question: "Can MDF and particle board furniture be restored to like-new condition?",
      answer:
        "MDF and particle board can be repaired well if the substrate has not swollen significantly from moisture. Chips, edge banding failures, and minor surface damage are repaired seamlessly with specialist MDF adhesives and laminate patch film. Severely moisture-swollen panels need section replacement. We always assess and quote honestly — if replacement is better value than repair, we will tell you.",
    },
    {
      question: "Do you repair IKEA wooden furniture in Delhi?",
      answer:
        "Yes. IKEA furniture uses engineered wood with cam-lock dowel joinery. We carry IKEA-compatible replacement cam locks, dowels, and Allen hardware, and know the disassembly and reassembly sequence for common IKEA ranges. See our dedicated IKEA furniture repair page for full details.",
    },
    {
      question: "Should I repair or replace my wooden dining table?",
      answer:
        "For solid wood dining tables (teak, sheesham, mango wood), repair is almost always the better financial decision. A dining table repaired for ₹3,000–₹10,000 versus ₹20,000–₹60,000 for a replacement of equivalent quality. Even complete refinishing of a large sheesham dining table costs ₹5,000–₹8,000 — far less than replacement. Our furniture repair vs replace blog covers this analysis in detail.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("wooden-furniture-repair-delhi"),
    { label: "Furniture Polish Delhi", href: "/furniture-polish-delhi" },
    { label: "Bed Repair Delhi", href: "/bed-repair-delhi" },
  ],
  keywords: [
    "wooden furniture repair delhi",
    "wooden furniture repair near me",
    "teak furniture repair delhi",
    "sheesham furniture repair delhi",
    "wood polish delhi",
    "wooden table repair delhi",
    "wooden bed repair delhi",
    "termite damage furniture repair delhi",
    "MDF furniture repair delhi",
    "antique furniture repair delhi",
    "wooden furniture restoration delhi ncr",
    "wood finishing service delhi",
    "furniture refinishing delhi",
    "wooden wardrobe repair delhi",
    "plywood furniture repair delhi ncr",
  ],
};

// ---------------------------------------------------------------------------
// 2. BED REPAIR DELHI
// ---------------------------------------------------------------------------
export const bedRepairDelhi: SeoPageData = {
  slug: "bed-repair-delhi",
  title: "Bed Repair in Delhi NCR | Frame, Headboard, Storage | FurniRevive",
  metaDescription:
    "Professional bed repair in Delhi NCR. Bed frame, headboard, hydraulic storage, slat, and plywood base repair at your doorstep. All bed types. 6-month warranty. ₹799 onwards.",
  h1: "Bed Repair in Delhi NCR — Frame, Headboard & Storage Repair at Your Doorstep",
  heroSubtitle:
    "Expert bed repair at your doorstep across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad. Bed frame reinforcement, headboard repair, hydraulic storage mechanism fix, slat replacement, plywood base repair, and cot joint repair — starting ₹799 with a 6-month warranty.",
  showcaseImage: {
    heading: "Bed Repair — Expert Frame, Hydraulic & Headboard Service in Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional bed repair technician fixing a hydraulic storage bed frame in a Delhi NCR home — FurniRevive",
    caption: "Bed Repair in Delhi NCR | Frame, hydraulic storage & headboard repair | Doorstep service | FurniRevive",
  },
  intro: [
    "Your bed is the most used piece of furniture in your home — supporting your weight for 7–8 hours every night, enduring the stress of getting in and out twice daily, and often bearing additional loads from under-bed storage, sitting on the edge, and children jumping on it. In Delhi NCR homes, where storage beds with hydraulic lifts are the norm and space constraints mean beds work harder than ever, it's no surprise that bed frame issues are among the most common furniture complaints. Squeaky frames, broken hydraulic lifts, sagging plywood bases, wobbly legs, and cracked headboards affect millions of households across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
    "FurniRevive provides professional doorstep bed repair across all of Delhi NCR. We repair every type of bed — king size, queen size, single beds, diwan beds, bunk beds, loft beds, sofa cum beds, Murphy beds, and traditional wooden cots (charpai frames). Our craftsmen handle wooden, metal, and upholstered bed frames with equal expertise. Whether you have a premium imported bed with a complex hydraulic storage system or a simple wooden double bed with loose joints, we have the tools, materials, and experience to fix it properly at your home.",
    "Starting at ₹799 with a 6-month written warranty, our bed repair service is the fastest and most affordable way to restore a good night's sleep. Book before noon for same-day service — our technicians are stationed across Delhi NCR to ensure quick response times. Call +91 92179 99355 or WhatsApp photos of the damage for an instant preliminary estimate.",
  ],
  whyChoose: [
    {
      title: "All Bed Types & Sizes",
      description:
        "King, queen, single, double, diwan, bunk, loft, Murphy, sofa cum bed, platform, and traditional cot. Wooden, metal, upholstered, and combination frames. We repair every bed in every Delhi NCR home.",
    },
    {
      title: "Hydraulic Storage Bed Specialists",
      description:
        "Delhi NCR's most common bed repair request. We replace failed hydraulic lifts, repair broken gas springs, fix bent hinges, and restore the complete storage mechanism — all leading brands and models.",
    },
    {
      title: "Structural Frame Repair",
      description:
        "Loose joints, cracked side rails, broken legs, and weakened frame members are repaired using industrial-grade adhesives, steel brackets, and precision carpentry to restore full structural integrity.",
    },
    {
      title: "Headboard & Footboard Repair",
      description:
        "Cracked wooden headboards, detached upholstered headboards, loose metal headboard attachments — we reattach, reinforce, and restore headboards and footboards to secure, stable condition.",
    },
    {
      title: "Same-Day Doorstep Service",
      description:
        "Book before noon for same-day bed repair at your home anywhere in Delhi, Noida, Gurgaon, Ghaziabad, or Faridabad. Most repairs completed in 1–3 hours.",
    },
    {
      title: "6-Month Warranty from ₹799",
      description:
        "All bed repairs backed by a written 6-month warranty. Starting at ₹799 for basic fixes. Transparent pricing with written quotes before work begins.",
    },
  ],
  process: [
    {
      step: "Call & Describe the Issue",
      description:
        "Contact +91 92179 99355 or WhatsApp photos of the bed issue. Describe the problem — squeaking, wobbling, broken storage, damaged headboard — and your area in Delhi NCR for quick scheduling.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our bed repair technician visits your home, strips the mattress to inspect the frame thoroughly, and provides a detailed written quote covering all necessary repairs.",
    },
    {
      step: "On-Site Professional Repair",
      description:
        "After your approval, we repair the bed at your home. We bring all tools, replacement parts (hydraulic lifts, brackets, plywood, screws), and materials needed for a complete fix.",
    },
    {
      step: "Test, Cleanup & Warranty",
      description:
        "We test the repaired bed for stability and noise, replace the mattress, clean up completely, and hand over your 6-month warranty card. Payment only after satisfaction.",
    },
  ],
  benefits: [
    "Hydraulic storage bed mechanism repair and replacement",
    "Bed frame joint repair using industrial adhesives and brackets",
    "Plywood base replacement for sagging beds",
    "Wooden slat replacement and reinforcement",
    "Headboard reattachment and repair — wooden, upholstered, metal",
    "Broken bed leg replacement and reinforcement",
    "Side rail and cross-member repair for king and queen beds",
    "Metal bed frame welding and bolt tightening",
    "Bunk bed safety rail and ladder repair",
    "Centre support beam installation to prevent mattress sag",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "6-month written warranty from ₹799",
  ],
  contentSections: [
    {
      heading: "Common Bed Problems in Delhi NCR Homes — And How We Fix Them",
      body: [
        "The most common bed repair issue in Delhi NCR is the hydraulic storage mechanism. Storage beds are incredibly popular across the region — in Noida and Gurgaon apartments where space is premium, and in Delhi flats where every square foot counts. The hydraulic gas springs that lift the mattress platform for under-bed storage have a lifespan of 3–5 years under normal use. When they fail, the mattress platform becomes dangerously heavy to lift or won't stay up, making the storage inaccessible and posing a safety risk. We replace hydraulic gas springs with high-quality units rated for the correct weight, adjust the mounting brackets, and lubricate the hinge mechanism — restoring full, safe functionality in under an hour.",
        "The second most common issue is squeaky, wobbly bed frames. After years of nightly use, the joints in wooden bed frames loosen — particularly the connections between side rails and headboard/footboard posts. Every time you move in bed, these loose joints shift and creak, disturbing sleep. We fix this by disassembling the affected joints, cleaning out old adhesive, applying industrial-grade wood glue, re-clamping with precision, and adding steel L-brackets or corner plates for permanent reinforcement. For plywood base beds, sagging is common when the plywood is too thin (below 12mm) or has absorbed moisture. We replace the base with 18mm commercial plywood that is both stronger and more moisture-resistant.",
      ],
    },
    {
      heading: "Bed Repair for Every Type of Bed in Delhi NCR",
      body: [
        "We repair every bed type found in Delhi NCR homes. Wooden double beds and queen beds with traditional frame construction need regular joint tightening and plywood base replacement — our most bread-and-butter service. Platform beds with integrated storage drawers often develop drawer runner issues and drawer front misalignment — we replace runners and adjust drawer fronts for smooth operation. Upholstered beds are common in Gurgaon and South Delhi premium apartments — when the fabric or leather on the headboard tears or the padded side rails show wear, we reupholster them using the same techniques as our <a href=\"/sofa-repair-delhi\">sofa repair</a> service, with 500+ fabric options.",
        "Metal bed frames — common in hostels, PGs, and budget setups — develop loose bolt connections and joint corrosion over time. We tighten all hardware, replace corroded bolts, and apply anti-rust treatment. Bunk beds need special attention to safety: we check and reinforce guard rails, tighten all ladder connections, and ensure the upper bunk support can handle the rated weight. Diwan beds (single beds used as seating during the day) develop cushion compression and frame loosening from dual-use stress — we reinforce the frame and replace cushion foam. Murphy beds (wall beds) with folding mechanisms need periodic servicing of their spring or piston systems — we service and replace these mechanisms to ensure safe, smooth operation.",
      ],
    },
    {
      heading: "Bed Repair Cost in Delhi NCR — What to Budget",
      body: [
        "Bed repair is one of the most cost-effective furniture repairs you can invest in. Minor fixes — tightening loose joints, replacing a few screws, fixing a creaky side rail — start at ₹799. Hydraulic storage mechanism replacement costs ₹2,000–₹4,000 per pair depending on the gas spring quality and bed weight rating. Full plywood base replacement costs ₹1,500–₹3,500 depending on bed size and plywood grade. Headboard reattachment ranges from ₹800–₹2,500. Broken bed leg replacement costs ₹500–₹1,500 per leg depending on wood type and design.",
        "For comprehensive bed restoration — frame reinforcement, plywood replacement, headboard repair, and finish touchup — expect to invest ₹3,000–₹8,000 for a standard double or queen bed. This is a fraction of the ₹15,000–₹60,000 a replacement bed of similar quality would cost. King-size beds and premium imported beds may cost more for parts and labour, but even these repairs rarely exceed ₹12,000. All pricing is provided upfront in a written quote after our free doorstep inspection — no surprises. For a full breakdown of repair costs, see our <a href=\"/furniture-repair-cost-delhi\">furniture repair cost</a> page.",
      ],
    },
    {
      heading: "Why Professional Bed Repair Beats DIY in Delhi NCR",
      body: [
        "Many Delhi NCR homeowners attempt DIY bed repairs — tightening screws, adding extra plywood, or trying to fix the hydraulic mechanism themselves. While basic maintenance is fine, structural bed repair requires specific knowledge and tools. Incorrectly repairing a hydraulic mechanism can result in a dangerous failure where the heavy mattress platform falls unexpectedly. Using the wrong adhesive on wood joints leads to repairs that fail within weeks. Replacing plywood with the wrong grade results in early sagging.",
        "FurniRevive's professional bed repair eliminates these risks. Our technicians carry hydraulic lifts rated for specific bed weights, industrial-grade wood adhesives that cure stronger than the original bond, 18mm commercial plywood pre-cut for standard bed sizes, and professional carpentry tools for precise joint work. Our <a href=\"/furniture-repair-warranty-delhi\">6-month warranty</a> means that if anything we fix fails within six months, we return and fix it free — giving you confidence that the repair will last. For a piece of furniture you depend on every single night, professional repair at ₹799–₹8,000 is a worthwhile investment in comfort, safety, and sleep quality.",
      ],
    },
    {
      heading: "Brand-Specific Bed Repair in Delhi NCR — Wakefit, Durian, Urban Ladder & Godrej",
      body: [
        "Delhi NCR homeowners buy beds from a wide range of brands, and each brand's construction creates specific repair scenarios. Wakefit is one of the most popular online bed brands in Delhi NCR — their storage beds with hydraulic lift mechanisms are sold in enormous volumes. Wakefit uses a specific hydraulic gas spring configuration with a rated lift capacity that varies by bed size. When Wakefit hydraulic springs fail (typically after 3–4 years of heavy daily use in Delhi's heat), standard replacement springs from hardware shops often have mismatched ratings, causing the mechanism to either feel too stiff or too weak. We use weight-rated springs that match Wakefit's original specification for each bed size — ensuring smooth, balanced lift action after repair. Their engineered wood frames are repaired with MDF-compatible adhesives and internal steel corner brackets for frame joint failures. For high-quality bed brands, our <a href=\"/blog/imported-furniture-restoration-guide\">guide to restoring premium furniture</a> covers what to expect when repairing well-made beds.",
        "Durian beds — premium solid wood and upholstered frames popular in South Delhi and Gurgaon — use solid sheesham and teak construction with upholstered headboards and side rails. Urban Ladder's wooden beds use sheesham with characteristic walnut and honey finishes — we carry their stain matches and repair their frame joints, headboard attachments, and plywood bases using brand-appropriate materials. For <a href=\"/godrej-furniture-repair-delhi\">Godrej bed repair</a> (Interio range), we service their engineered wood platform beds and metal-frame storage beds, replacing cam locks, repairing corner joints, and restoring hydraulic mechanisms. For beds purchased from <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry</a> and <a href=\"/ikea-furniture-repair-delhi\">IKEA</a>, we carry the brand-specific hardware needed for accurate repair. Beyond beds, our comprehensive <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> service and <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a> expertise cover every piece in your bedroom.",
      ],
    },
    {
      heading: "King vs Queen vs Single Bed Repair — Size-by-Size Cost Comparison",
      body: [
        "Bed repair costs vary significantly by size. Single beds (90×190 cm) are the most economical to repair: hydraulic mechanism replacement costs ₹1,800–₹2,500, plywood base replacement ₹1,000–₹1,800, and frame joint repair ₹600–₹1,500. Double beds (120×190 cm) sit in the mid-price range: hydraulic mechanism ₹2,000–₹3,200, plywood base ₹1,200–₹2,200, frame repair ₹799–₹2,000.",
        "Queen beds (150×190 cm) are the dominant choice in modern Delhi NCR homes. Queen-size hydraulic mechanism replacement costs ₹2,500–₹4,000, plywood base replacement ₹1,500–₹2,800, and comprehensive frame repair ₹1,200–₹3,500. King beds (180×200 cm) are the most complex and expensive to repair: the longer side rails require a centre support beam addition. King-size hydraulic mechanisms (often four gas springs) cost ₹3,500–₹6,000 to replace. Full king bed restoration runs ₹6,000–₹14,000 — still a fraction of ₹30,000–₹80,000+ for replacement. For a complete breakdown, consult our <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide for Delhi</a>. For sofa cost comparisons: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost page</a> and <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a>.",
      ],
    },
    {
      heading: "Hydraulic Bed Mechanism Brands and Repair Guide for Delhi NCR",
      body: [
        "Most Delhi NCR storage beds use gas spring mechanisms (also called gas pistons or hydraulic lifts). A pair of gas springs — one on each side of the bed — compress when the mattress platform is lowered and extend to help lift it when opened. The most common failure mode is gas loss: over time, the internal gas pressure reduces, causing the spring to lose its assist force. The mattress platform becomes heavy to lift and won't stay open — a safety risk. Secondary failure modes include bent mounting brackets, cracked hinge plates, and corroded pivot pins.",
        "We replace gas springs with units rated to match the original specification of your bed, carrying springs from reputable Indian manufacturers (Häfele, Ebco) and import-equivalent units for premium beds. The full mechanism replacement — springs, bracket inspection, hinge lubrication, and safety test — is completed in under 90 minutes at your doorstep. Our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> expertise complements bed mechanism work — if your bedroom also has a motorised recliner, we can service both in the same visit. For a full picture of all furniture repair costs, our <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> is the best reference. Related services: <a href=\"/wardrobe-repair-delhi\">wardrobe repair Delhi</a> and <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair Delhi</a> for other bedroom furniture.",
      ],
    },
    {
      heading: "Bed Repair vs Mattress Replacement — Making the Right Decision",
      body: [
        "One of the most common sources of confusion for Delhi NCR homeowners is distinguishing between a bed frame problem and a mattress problem. Both manifest as poor sleep quality but the solutions — and costs — are completely different. Signs the issue is the bed frame: you can hear and feel squeaking or creaking when you move; the mattress slides to one side or the centre dips more than the edges; the hydraulic storage mechanism is hard to open or won't stay up; the headboard wobbles when you press against it. Signs the issue is the mattress: you feel springs through the sleeping surface; the foam has a permanent body impression; the mattress edge has collapsed. If your mattress is less than 5 years old and the body-impression depth is under 3 cm, the issue is almost certainly the bed frame. Our blog on <a href=\"/blog/furniture-repair-vs-replace\">when to repair vs replace furniture</a> covers this distinction with practical tests you can do at home.",
        "Our bed inspection process always includes a mattress-on vs mattress-off assessment. In many cases, a bed frame repair costing ₹1,500–₹4,000 resolves what the homeowner assumed required a ₹10,000–₹25,000 mattress replacement. Our <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs replacement guide</a> applies identical thinking to sofas. For a broad view of furniture investment decisions: <a href=\"/blog/is-sofa-restoration-worth-it\">is furniture restoration worth it</a> and <a href=\"/sofa-foam-replacement-cost-delhi\">sofa foam replacement costs</a> provide parallel analysis. Our <a href=\"/recliner-repair-cost-delhi\">recliner repair cost guide</a> is relevant if you're deciding on motorised furniture alongside your bed. See our full <a href=\"/furniture-repair-price-guide-delhi\">Delhi furniture repair price guide</a> for comprehensive cost benchmarks.",
      ],
    },
    {
      heading: "Complete Bedroom and Home Furniture Repair Services in Delhi NCR",
      body: [
        "Bed repair is the bedroom anchor of a comprehensive home furniture solution. FurniRevive provides doorstep repair for every furniture category — making us the single service you need for your entire home. In the bedroom: our <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a> service covers dressing tables, bedside units, and study tables. Our <a href=\"/wardrobe-repair-delhi\">wardrobe repair Delhi</a> service handles every wardrobe type. For living room furniture: our flagship <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a> service includes <a href=\"/sofa-cushion-repair-delhi\">sofa cushion and foam repair</a>, <a href=\"/sofa-fabric-tear-repair-delhi\">fabric tear and re-upholstery</a>, <a href=\"/sofa-frame-repair-delhi\">structural frame repair</a>, <a href=\"/sofa-spring-repair-delhi\">spring replacement</a>, and full <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a>. Our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> service handles electric recliners and powered sofa beds.",
        "For seating throughout the home, our <a href=\"/chair-repair-delhi\">chair repair Delhi</a> service covers dining chairs, office chairs, and accent chairs. For brand-specific expertise: <a href=\"/ikea-furniture-repair-delhi\">IKEA furniture repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej furniture repair</a>, and <a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry furniture repair</a>. Our service extends across NCR: <a href=\"/sofa-repair-noida\">sofa repair Noida</a> and <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>. For cost planning: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost Delhi</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">upholstery price list</a>, and our master <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a>. Our full <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> service overview is the best starting point for any first-time customer. Delhi coverage by area: <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a> — see <a href=\"/areas-we-serve\">areas we serve</a> for full NCR coverage. For <a href=\"/same-day-furniture-repair-delhi\">same-day furniture repair</a> and <a href=\"/home-furniture-repair-delhi\">home furniture repair Delhi</a>, book before noon for same-day service.",
      ],
    },
    {
      heading: "Bed Repair Coverage Across Delhi NCR",
      body: [
        "Our bed repair home service covers every Delhi locality. South Delhi: <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a>, <a href=\"/furniture-repair-defence-colony\">Defence Colony</a>, <a href=\"/furniture-repair-hauz-khas\">Hauz Khas</a>. West Delhi: <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, <a href=\"/furniture-repair-janakpuri\">Janakpuri</a>, <a href=\"/furniture-repair-punjabi-bagh\">Punjabi Bagh</a>. East Delhi: <a href=\"/furniture-repair-east-delhi\">East Delhi</a>. Check our <a href=\"/areas-we-serve\">areas we serve</a> page for full NCR coverage. All repairs include our <a href=\"/furniture-repair-warranty-delhi\">6-month furniture repair warranty</a>.",
        "For related services: complete <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a> overview, <a href=\"/wardrobe-repair-delhi\">wardrobe repair Delhi</a>, <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a>, and <a href=\"/home-furniture-repair-delhi\">home furniture repair Delhi</a>. For pricing: <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> and <a href=\"/furniture-repair-cost-delhi\">furniture repair cost page</a>. For expert advice: <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace guide</a>.",
      ],
    },
  ],
  faqs: [
    {
      question: "What bed types do you repair in Delhi NCR?",
      answer:
        "We repair all types: king, queen, single, double, diwan, bunk, loft, Murphy, sofa cum bed, platform, and traditional cots. All frame materials: wood, metal, upholstered, and combination frames.",
    },
    {
      question: "How much does hydraulic storage bed repair cost?",
      answer:
        "Hydraulic gas spring replacement costs ₹2,000–₹4,000 per pair. This includes high-quality replacement springs rated for your bed's weight, mounting bracket adjustment, and hinge lubrication.",
    },
    {
      question: "Can you fix a squeaky bed frame?",
      answer:
        "Yes. We identify the source of the squeak — usually loose joints or friction between frame members — disassemble, re-glue with industrial adhesive, add reinforcement brackets, and reassemble for a silent, stable frame.",
    },
    {
      question: "Do you replace bed plywood bases?",
      answer:
        "Yes. We replace sagging or damaged plywood bases with 18mm commercial plywood cut to your bed's exact dimensions. Cost: ₹1,500–₹3,500 depending on bed size.",
    },
    {
      question: "Can you repair upholstered bed headboards?",
      answer:
        "Yes. We repair torn, stained, or worn upholstered headboards. We can reupholster with 500+ fabric options or repair localised damage with fabric patches and colour-matched finishing.",
    },
    {
      question: "How quickly can you come for bed repair?",
      answer:
        "We offer same-day service for bookings before noon across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Standard appointments are scheduled within 24 hours.",
    },
    {
      question: "Do you repair metal bed frames?",
      answer:
        "Yes. We tighten loose bolts, replace corroded hardware, straighten bent frame members, and apply anti-rust treatment. For structural damage, we provide welding services.",
    },
    {
      question: "Is bed repair worth it vs buying a new bed?",
      answer:
        "In most cases, yes. Bed repair costs ₹799–₹8,000. A replacement bed of similar quality costs ₹15,000–₹60,000. Professional repair restores full functionality and extends your bed's life by 5–10 years.",
    },
    {
      question: "Is the 6-month warranty valid for bed repairs?",
      answer:
        "Yes. Our 6-month written warranty covers all bed repairs at your Delhi NCR address. If the repaired issue recurs, we return and fix it at no charge.",
    },
    {
      question: "Can you repair a Wakefit storage bed in Delhi?",
      answer:
        "Yes. Wakefit storage beds are among our most frequently repaired models. We carry hydraulic gas springs matched to Wakefit's weight ratings for each bed size and repair their engineered wood frames with MDF-compatible adhesives. Doorstep service across Delhi, Noida, and Gurgaon with same-day availability.",
    },
    {
      question: "Do you repair Durian and Urban Ladder beds?",
      answer:
        "Yes. Durian solid wood beds (sheesham and teak) are repaired with traditional joint techniques and brand-matched stains. Urban Ladder wooden beds use similar sheesham construction — we carry their stain tones for finish touch-ups alongside frame and plywood base repairs.",
    },
    {
      question: "Does bed repair cost more for a king-size bed than a queen?",
      answer:
        "Yes, king-size beds cost slightly more across all repair categories. King hydraulic mechanism replacement (₹3,500–₹6,000) costs more than queen (₹2,500–₹4,000) because king beds often use four gas springs and heavier-rated units. Plywood base replacement for a king also costs more due to larger sheet area. We always provide a written quote after inspection.",
    },
    {
      question: "How do I know if my hydraulic mechanism needs replacing or just servicing?",
      answer:
        "If the platform is hard to lift, will not stay up on its own, or slams down rapidly, the gas springs have lost pressure and need replacement — there is no way to recharge a depleted gas spring. If the mechanism moves but feels stiff or grinds, the hinges and pivot points need lubrication, which is a service-level fix. Our inspection determines which is needed before any work begins.",
    },
    {
      question: "Is it the bed frame or the mattress causing my back pain?",
      answer:
        "Remove the mattress and inspect the plywood base — if it sags more than 1–2 cm at the centre, the base needs replacing. Put the mattress on the floor and lie on it — if it feels significantly better than on the bed, the frame is the issue. Our free doorstep inspection includes a mattress-off assessment to give you a definitive diagnosis.",
    },
    {
      question: "Can you repair a bunk bed safety rail and ladder?",
      answer:
        "Yes. We check and reinforce upper bunk guard rails, tighten all ladder attachment points, replace missing or bent rungs, and verify the upper bunk frame can safely support the rated weight. Bunk bed safety repairs are treated as high-priority and completed thoroughly before sign-off.",
    },
    {
      question: "Can you repair an upholstered platform bed headboard?",
      answer:
        "Yes. We repair localised tears, stains, and worn patches on upholstered headboards using panel-matched fabric or leather. For extensively worn headboards, full re-upholstery is available with 500+ fabric and leatherette options. We also re-attach detached headboard panels and reinforce the mounting hardware.",
    },
    {
      question: "How often should a bed frame be professionally serviced?",
      answer:
        "We recommend a professional inspection every 3–4 years for wooden and engineered wood beds, and every 2–3 years for hydraulic storage beds (as gas springs typically start weakening by year 3–4). Annual self-checks — tightening visible bolts and listening for new squeaks — let you catch issues between professional services.",
    },
    {
      question: "Do you repair single beds used as diwans in Delhi homes?",
      answer:
        "Yes. Single beds used as diwans experience additional stress from daytime seating. We reinforce the frame for the combined sitting and sleeping load, replace compressed foam in diwan cushions, and re-tighten all joints. Diwan repair starting at ₹799, with re-upholstery available from ₹1,800.",
    },
    {
      question: "What areas in Delhi NCR do you cover for bed repair?",
      answer:
        "All Delhi NCR — every Delhi district, Noida (all sectors), Greater Noida, Gurgaon (all sectors and DLF phases), Ghaziabad (Indirapuram, Vaishali, Raj Nagar Extension), and Faridabad. Book before noon for same-day service. Call +91 92179 99355 for immediate scheduling.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("bed-repair-delhi"),
    { label: "Wooden Furniture Repair Delhi", href: "/wooden-furniture-repair-delhi" },
    { label: "Wardrobe Repair Delhi", href: "/wardrobe-repair-delhi" },
  ],
  keywords: [
    "bed repair delhi",
    "bed repair near me delhi",
    "bed frame repair delhi ncr",
    "hydraulic bed repair delhi",
    "storage bed repair delhi",
    "bed headboard repair delhi",
    "wooden bed repair delhi",
    "bed plywood replacement delhi",
    "bed repair cost delhi",
    "bed repair noida",
    "bed repair gurgaon",
    "squeaky bed repair delhi",
    "king size bed repair delhi",
    "bed repair service delhi ncr",
    "best bed repair delhi",
  ],
};

// ---------------------------------------------------------------------------
// 3. WARDROBE REPAIR DELHI
// ---------------------------------------------------------------------------
export const wardrobeRepairDelhi: SeoPageData = {
  slug: "wardrobe-repair-delhi",
  title:
    "Wardrobe Repair in Delhi NCR | Sliding Door, Hinge, Shelf | FurniRevive",
  metaDescription:
    "Expert wardrobe & almirah repair in Delhi NCR. Sliding door, hinge, shelf, drawer, and modular wardrobe repair at your doorstep. All brands. 6-month warranty. ₹499 onwards.",
  h1: "Wardrobe Repair in Delhi NCR — Door, Hinge, Shelf & Modular Wardrobe Fix",
  heroSubtitle:
    "Professional wardrobe and almirah repair at your doorstep across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad. Sliding door track repair, hinge replacement, shelf fixing, drawer runner replacement, and modular wardrobe servicing — starting ₹499 with a 6-month warranty.",
  showcaseImage: {
    heading: "Wardrobe Repair — Expert Sliding Door, Hinge & Modular Service in Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional wardrobe repair technician fixing a sliding door wardrobe in a Delhi NCR home — FurniRevive",
    caption: "Wardrobe Repair in Delhi NCR | Sliding door, hinge & modular wardrobe service | Home visit | FurniRevive",
  },
  intro: [
    "Wardrobes and almirahs are the workhorses of every Delhi NCR bedroom — opened and closed dozens of times daily, loaded with clothes, bedding, and personal items, and expected to function flawlessly for years. But hinges wear out, sliding door tracks accumulate dust and debris, shelves sag under the weight of stacked sarees and blankets, drawer runners seize up, and modular wardrobe panels develop moisture damage in Delhi's humid monsoon months. When your wardrobe stops working smoothly, it disrupts your daily routine — and replacing a full wardrobe costs ₹15,000–₹80,000 or more.",
    "FurniRevive provides professional wardrobe repair across Delhi NCR — from traditional wooden almirahs and steel cupboards to modern modular and sliding-door wardrobes from brands like Godrej, Spacewood, Stanley, Homelane, and custom carpenter-made units. Our technicians carry replacement hinges, tracks, runners, handles, and hardware for all common wardrobe types. We serve every locality in Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad — arriving at your doorstep with the tools and parts needed to fix your wardrobe in a single visit.",
    "Starting at just ₹499 for minor fixes like hinge replacement and handle fitting, our wardrobe repair service is the most affordable and convenient option in Delhi NCR. Every repair is backed by a 6-month written warranty. Book before noon for same-day service. Call +91 92179 99355 or WhatsApp photos of the issue for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "All Wardrobe Types",
      description:
        "Modular wardrobes, sliding-door wardrobes, hinged-door almirahs, walk-in closets, steel cupboards, and carpenter-made wooden wardrobes. We repair every type found in Delhi NCR homes.",
    },
    {
      title: "Sliding Door & Track Specialists",
      description:
        "Sliding wardrobe doors that stick, jump off track, or won't close properly are our speciality. We repair, replace, and realign tracks and rollers for all sliding door systems.",
    },
    {
      title: "All Brands & Custom Units",
      description:
        "Godrej, Spacewood, Stanley, Homelane, Urban Ladder, IKEA, and all custom carpenter-built wardrobes. We carry universal and brand-specific replacement parts.",
    },
    {
      title: "Quick, Doorstep Service",
      description:
        "Most wardrobe repairs are completed in 30 minutes to 2 hours at your home. No need to empty the wardrobe or move it — we work with the wardrobe in place.",
    },
    {
      title: "Starting at ₹499",
      description:
        "Hinge replacement from ₹499. Handle fitting from ₹200. Shelf repair from ₹500. Transparent pricing with written quotes. No hidden charges.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every wardrobe repair backed by a written 6-month warranty. Free return visits for any warranty claims across Delhi NCR.",
    },
  ],
  process: [
    {
      step: "Contact Us",
      description:
        "Call +91 92179 99355 or WhatsApp photos of the wardrobe issue. Describe whether it's a door, hinge, shelf, or structural problem and your location in Delhi NCR.",
    },
    {
      step: "Free Doorstep Check",
      description:
        "Our wardrobe specialist inspects the unit at your home, identifies all issues, and provides a written quote. No charge for the inspection.",
    },
    {
      step: "On-Site Repair",
      description:
        "After approval, we carry out all repairs at your home — replacing hardware, realigning doors, fixing shelves, repairing drawers — using professional tools and quality replacement parts.",
    },
    {
      step: "Test & Warranty",
      description:
        "We test every door, drawer, and shelf for smooth operation, clean up, and hand over your 6-month warranty card. Payment after your satisfaction.",
    },
  ],
  benefits: [
    "Sliding door track repair and roller replacement",
    "Hinge replacement — soft-close, European, standard hinges",
    "Shelf resupport and sagging shelf repair",
    "Drawer runner replacement — ball-bearing and roller types",
    "Wardrobe door realignment and gap correction",
    "Lock and handle replacement",
    "Modular wardrobe panel and edge band repair",
    "Steel almirah dent repair and lock fix",
    "Mirror door repair and replacement",
    "Moisture-damaged panel replacement",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "6-month warranty from just ₹499",
  ],
  contentSections: [
    {
      heading: "Common Wardrobe Problems in Delhi NCR Homes",
      body: [
        "The most frequent wardrobe repair request in Delhi NCR is sliding door malfunction. Modern wardrobes — especially the modular units common in Noida and Gurgaon apartments — use top-hung or bottom-rolling sliding door systems with aluminium or steel tracks. Over time, the rollers wear down, tracks accumulate dust and debris, and the doors start sticking, jumping off the track, or refusing to close flush. Our repair involves cleaning the tracks, replacing worn rollers with matching units, lubricating the mechanism, and adjusting the door height for smooth, silent operation. For severely damaged tracks, we replace the entire track system.",
        "Hinge failure is equally common, particularly in traditional hinged-door almirahs and modular wardrobes with soft-close hinges. Standard hinges loosen after years of use, causing doors to sag, creak, and not close properly. Soft-close mechanisms (hydraulic dampers) fail, resulting in doors that slam shut. We replace hinges with matching or upgraded units — European soft-close hinges are our most popular upgrade for Delhi NCR homes. Shelf sagging is the third major issue: wooden and MDF shelves in wardrobes sag under the weight of stacked clothes and blankets. We add centre support brackets, replace thin shelves with thicker material, and reinforce shelf supports for permanent correction.",
      ],
    },
    {
      heading: "Modular Wardrobe Repair in Delhi NCR",
      body: [
        "Modular wardrobes have become the standard in modern Delhi NCR apartments — builder-provided wardrobes in Noida societies, Homelane and Stanley-branded units in Gurgaon homes, and IKEA PAX wardrobes across the region. These modular systems have specific repair needs different from traditional wooden almirahs. Edge banding — the thin strips that cover the raw edges of MDF and particle board panels — frequently peels off due to poor adhesive quality or moisture exposure. We re-apply edge banding using professional heat-gun techniques for a factory-quality bond.",
        "Modular wardrobe panels themselves can develop issues: laminate chips from impact, moisture swelling at the base (especially in ground-floor Noida flats), and delamination where the decorative surface separates from the MDF core. We repair localised damage with matching laminate patches and fillers, and replace severely damaged panels with new ones cut to exact specifications. The internal accessories of modular wardrobes — pull-out trouser racks, tie holders, jewellery trays, and shoe racks — also break or come loose over time. We repair and replace these accessories using brand-compatible or universal-fit parts, ensuring your wardrobe's organisational features work as intended.",
      ],
    },
    {
      heading: "Wardrobe Repair Cost in Delhi NCR",
      body: [
        "Our wardrobe repair pricing starts low and stays transparent. Hinge replacement costs ₹499–₹800 per hinge depending on type (standard vs soft-close). Handle and knob replacement costs ₹200–₹500. Sliding door track cleaning and roller replacement costs ₹1,000–₹3,000 per door depending on the system type. Shelf support repair and reinforcement costs ₹500–₹1,500. Drawer runner replacement costs ₹300–₹800 per drawer.",
        "More extensive repairs like wardrobe door replacement cost ₹2,000–₹5,000 per door. Full sliding track system replacement runs ₹3,000–₹6,000. MDF panel replacement for moisture damage costs ₹1,500–₹4,000 per panel. Lock replacement costs ₹300–₹1,000. Mirror door repair or replacement costs ₹1,500–₹4,000. For a complete wardrobe overhaul — multiple hinges, shelf reinforcement, door realignment, and hardware upgrade — expect ₹3,000–₹8,000 versus ₹25,000–₹80,000 for a new wardrobe of comparable quality.",
      ],
    },
    {
      heading: "Traditional Almirah & Steel Cupboard Repair",
      body: [
        "Not all wardrobes in Delhi NCR are modular. Many homes — especially in older Delhi colonies, Ghaziabad, and Faridabad — have traditional wooden almirahs and steel cupboards that have been in use for decades. These pieces are built to last but still need periodic maintenance and repair. Wooden almirahs develop loose doors from worn hinges, stuck locks from internal mechanism corrosion, and warped panels from humidity changes. We replace hinges with matching or upgraded hardware, service or replace locks, and plane warped doors for proper closure.",
        "Steel almirahs and Godrej cupboards are practically indestructible but can develop dents, rust spots, and lock failures. We remove dents using professional dent-pulling techniques, treat rust with chemical converters and anti-rust primers, and replace locks with brand-compatible units. For steel cupboards with paint damage, we touch up with matching enamel paint. These repairs are quick and affordable — typically ₹500–₹2,000 — and extend the life of these durable units by many more years.",
      ],
    },
    {
      heading: "Wardrobe Repair Coverage and Related Services",
      body: [
        "Our wardrobe repair home service covers all Delhi localities. South Delhi: <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a>, <a href=\"/furniture-repair-defence-colony\">Defence Colony</a>, <a href=\"/furniture-repair-hauz-khas\">Hauz Khas</a>, <a href=\"/furniture-repair-south-extension\">South Extension</a>. West Delhi: <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, <a href=\"/furniture-repair-janakpuri\">Janakpuri</a>, <a href=\"/furniture-repair-paschim-vihar\">Paschim Vihar</a>, <a href=\"/furniture-repair-rajouri-garden\">Rajouri Garden</a>, <a href=\"/furniture-repair-punjabi-bagh\">Punjabi Bagh</a>. Check <a href=\"/areas-we-serve\">areas we serve</a>.",
        "For related furniture repair services: <a href=\"/bed-repair-delhi\">bed repair Delhi</a>, <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a>, <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a>, and <a href=\"/home-furniture-repair-delhi\">home furniture repair</a>. For pricing: <a href=\"/furniture-repair-price-list-delhi\">furniture repair price list</a>, <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a>, and <a href=\"/furniture-repair-cost-delhi\">furniture repair cost page</a>. Our <a href=\"/furniture-repair-warranty-delhi\">6-month warranty</a> covers all wardrobe repair work. Read <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a> for guidance.",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of wardrobes do you repair in Delhi NCR?",
      answer:
        "We repair modular wardrobes, sliding-door wardrobes, hinged-door almirahs, walk-in closets, steel cupboards, Godrej almirahs, IKEA wardrobes, and all carpenter-made wooden wardrobes. All brands and all price ranges.",
    },
    {
      question: "Can you fix a sliding wardrobe door that won't close?",
      answer:
        "Yes. We clean the tracks, replace worn rollers, adjust door height, and lubricate the mechanism. For damaged tracks, we replace the entire system. Most sliding door repairs are completed in 30–60 minutes.",
    },
    {
      question: "How much does wardrobe hinge replacement cost?",
      answer:
        "Standard hinge replacement costs ₹499–₹600 per hinge. Soft-close European hinge replacement costs ₹600–₹800 per hinge. We carry all common hinge types for immediate replacement.",
    },
    {
      question: "Can you repair Godrej steel almirahs?",
      answer:
        "Yes. We repair Godrej and other steel almirahs — dent removal, rust treatment, lock replacement, and paint touchup. These are quick repairs typically costing ₹500–₹2,000.",
    },
    {
      question: "Do you repair wardrobe drawers that don't slide properly?",
      answer:
        "Yes. We replace worn drawer runners with new ball-bearing or roller-type runners for smooth, silent operation. Cost: ₹300–₹800 per drawer including parts and labour.",
    },
    {
      question: "Can you fix moisture-damaged modular wardrobe panels?",
      answer:
        "Yes. We repair localised moisture damage with fillers and matching laminate. For severely swollen panels, we replace the affected panel with a new MDF panel cut to exact specifications.",
    },
    {
      question: "Do you repair wardrobe mirrors?",
      answer:
        "We can reattach loose wardrobe mirrors and replace cracked or broken mirror panels. Mirror replacement cost depends on size, typically ₹1,500–₹4,000 including installation.",
    },
    {
      question: "How quickly can you come for wardrobe repair?",
      answer:
        "Same-day service available for bookings before noon across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Standard appointments within 24 hours.",
    },
    {
      question: "Is the 6-month warranty valid for wardrobe repairs?",
      answer:
        "Yes. Our 6-month written warranty covers all wardrobe repairs at your Delhi NCR address. Free return visits for warranty claims.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("wardrobe-repair-delhi"),
    { label: "Wooden Furniture Repair Delhi", href: "/wooden-furniture-repair-delhi" },
    { label: "Bed Repair Delhi", href: "/bed-repair-delhi" },
  ],
  keywords: [
    "wardrobe repair delhi",
    "wardrobe repair near me delhi",
    "almirah repair delhi",
    "sliding wardrobe repair delhi",
    "modular wardrobe repair delhi ncr",
    "wardrobe door repair delhi",
    "wardrobe hinge replacement delhi",
    "godrej almirah repair delhi",
    "wardrobe shelf repair delhi",
    "wardrobe drawer repair delhi",
    "steel cupboard repair delhi",
    "wardrobe repair cost delhi",
    "wardrobe repair noida",
    "wardrobe repair gurgaon",
    "best wardrobe repair delhi ncr",
  ],
};

export const FURNITURE_TYPE_PAGES: SeoPageData[] = [
  woodenFurnitureRepairDelhi,
  bedRepairDelhi,
  wardrobeRepairDelhi,
];
