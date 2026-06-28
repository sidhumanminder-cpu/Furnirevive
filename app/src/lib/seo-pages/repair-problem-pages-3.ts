import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Wooden Furniture Repair Delhi", href: "/wooden-furniture-repair-delhi" },
  { label: "Wardrobe Repair Delhi", href: "/wardrobe-repair-delhi" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. WOODEN FURNITURE TERMITE TREATMENT DELHI
// ---------------------------------------------------------------------------
export const woodenFurnitureTermiteTreatmentDelhi: SeoPageData = {
  slug: "wooden-furniture-termite-treatment-delhi",
  title:
    "Wooden Furniture Termite Treatment Delhi | Anti-Termite ₹1,500 | FurniRevive",
  metaDescription:
    "Professional wooden furniture termite treatment in Delhi NCR. Anti-termite chemical injection, borer treatment, and wood preservation. Doorstep service from ₹1,500. 6-month warranty.",
  h1: "Wooden Furniture Termite Treatment in Delhi — Anti-Termite Service from ₹1,500",
  heroSubtitle:
    "Termites silently destroying your wooden furniture? FurniRevive provides professional anti-termite treatment, borer control, and wood preservation at your doorstep across Delhi NCR. Starting at ₹1,500 with a 6-month warranty.",
  showcaseImage: {
    heading: "Wooden Furniture Termite Treatment — Expert Anti-Termite Service Across Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional termite treatment technician applying anti-termite chemical to wooden furniture in a Delhi NCR home — FurniRevive",
    caption: "Wooden Furniture Termite Treatment Delhi | CIBRC-approved chemicals | Home visit | FurniRevive",
  },
  quickAnswer:
    "Wooden furniture termite treatment in Delhi costs ₹1,500–₹8,000 depending on infestation severity and number of items. FurniRevive uses government-approved anti-termite chemicals injected directly into affected wood, killing active colonies and preventing re-infestation. Doorstep service across Delhi NCR with 6-month warranty.",
  intro: [
    "Termites are the silent destroyers of wooden furniture in Delhi NCR homes. Delhi's humid monsoon season from July to September, combined with warm winters, creates ideal breeding conditions for subterranean and drywood termites. By the time you notice the telltale mud tubes along your almirah legs, the fine powdery frass beneath your dining table, or the hollow sound when you tap a bed frame — the damage is already extensive. Every year, thousands of Delhi families lose cherished teak beds, sheesham wardrobes, and antique dressing tables because termite infestations were caught too late.",
    "FurniRevive is Delhi NCR's specialist in wooden furniture termite treatment and anti-borer solutions. Our technicians are trained to identify all common termite species found in Delhi — the Coptotermes subterranean termite that enters from floor contact, the Cryptotermes drywood termite that infests from the air, and the common furniture borer beetle (Anobium punctatum). We use CIBRC-approved anti-termite chemicals — Chlorpyrifos 20 EC and Imidacloprid 30.5 SC — applied through injection, spray, and brush-coat methods depending on the furniture type and severity of attack.",
    "Our doorstep service covers all Delhi localities — South Delhi, Dwarka, Rohini, Vasant Kunj, Pitampura, Lajpat Nagar, Greater Kailash — as well as Noida (all sectors), Gurgaon, Ghaziabad, and Faridabad. Treatment costs start at ₹1,500 for a single piece of furniture and ₹3,500–₹8,000 for a full room or multi-piece package. Every treatment is backed by our 6-month warranty — if termites return to the treated furniture, we re-treat it free of charge. Call +91 92179 99355 or WhatsApp photos of the damage for a free assessment.",
  ],
  whyChoose: [
    {
      title: "CIBRC-Approved Chemicals Only",
      description:
        "We use only government-approved anti-termite chemicals — Chlorpyrifos, Imidacloprid, and Fipronil — that are safe for indoor use when applied professionally. No harmful off-label pesticides.",
    },
    {
      title: "Injection + Spray + Brush-Coat Method",
      description:
        "Our three-step treatment protocol — drilling and injecting chemical into infested wood, spray coating exposed surfaces, and brush-coating hidden joints — ensures termites are eliminated from the inside out.",
    },
    {
      title: "All Wood Types Treated",
      description:
        "Teak, sheesham, mango wood, plywood, MDF, particle board — we treat every type of wooden furniture found in Delhi homes. Our technicians adjust chemical concentration based on wood density.",
    },
    {
      title: "Doorstep Service Across Delhi NCR",
      description:
        "Our team arrives at your home in Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. No need to dismantle furniture or transport it. Treatment is done in-situ in 2–4 hours per room.",
    },
    {
      title: "Starting at ₹1,500 Per Item",
      description:
        "Single furniture piece treatment from ₹1,500. Full bedroom set (bed + wardrobe + side tables) from ₹3,500. Complete home packages from ₹8,000. Transparent written quotes before work begins.",
    },
    {
      title: "6-Month Anti-Termite Warranty",
      description:
        "Every treated piece is covered by our 6-month warranty. If termites reappear in the same furniture during the warranty period, we return and re-treat at zero additional cost.",
    },
  ],
  process: [
    {
      step: "Inspection & Damage Assessment",
      description:
        "Our technician inspects all wooden furniture in the affected room, tapping for hollow spots, checking joints for mud tubes, and identifying the termite species. A detailed assessment report is shared with treatment options and pricing.",
    },
    {
      step: "Chemical Injection Treatment",
      description:
        "Small 2mm holes are drilled into infested areas at strategic points. CIBRC-approved anti-termite chemical is injected under pressure into the wood, reaching deep colonies. Holes are sealed with matching wood putty after injection.",
    },
    {
      step: "Surface Spray & Brush Coat",
      description:
        "All exposed and hidden surfaces — undersides, back panels, drawer interiors, leg joints — are spray-coated and brush-coated with anti-termite solution. This creates a chemical barrier preventing re-entry.",
    },
    {
      step: "Post-Treatment Inspection",
      description:
        "After a 48-hour curing period, we return to verify treatment effectiveness, check for any missed spots, and provide a maintenance advisory card. Your 6-month warranty period begins on this date.",
    },
  ],
  benefits: [
    "Kills active termite colonies inside wooden furniture",
    "Prevents re-infestation for 6+ months with chemical barrier",
    "No furniture dismantling or transport required",
    "Safe for families — CIBRC-approved chemicals with low toxicity",
    "Treats all wood types including teak, sheesham, plywood, and MDF",
    "Restores structural integrity of termite-weakened furniture",
    "Written warranty covering re-treatment if termites return",
    "Same-day service available for urgent infestations",
  ],
  contentSections: [
    {
      heading: "Signs of Termite Infestation in Delhi Furniture",
      body: [
        "Identifying termite damage early can save your furniture from irreparable destruction. The most common sign in Delhi homes is the appearance of mud tubes — thin brown tunnels running along furniture legs, wall edges, or the underside of wooden beds. These tubes are built by subterranean termites as protected highways between their underground colony and your furniture.",
        "Drywood termites, more common in South Delhi and Gurgaon's modern apartments, leave different evidence. Look for tiny piles of fine, pellet-like frass (termite droppings) beneath wooden furniture. If you tap a piece of wood and hear a distinctly hollow sound — different from the solid thud of healthy timber — the interior has likely been eaten away. Warped or sagging surfaces, loose joints, and paint that bubbles for no apparent moisture reason are all warning signs.",
        "During Delhi's monsoon months (July–September), swarming alate termites with wings emerge in the evening. Finding discarded wings near windows or furniture is a strong indicator that a colony is nearby. If you spot any of these signs, contact FurniRevive immediately — early treatment is far cheaper and more effective than waiting until the furniture collapses.",
      ],
    },
    {
      heading: "Anti-Termite Treatment Methods We Use",
      body: [
        "FurniRevive employs a multi-method approach to termite treatment that goes beyond simple surface spraying. Our primary method is chemical injection — we drill 2mm holes at 6-inch intervals along infested sections and inject anti-termite solution under controlled pressure. This forces the chemical deep into the wood grain where termites have carved out their galleries. The injected chemical (typically Imidacloprid 30.5 SC at 0.05% concentration) kills termites on contact and has a transfer effect — infected termites carry the chemical back to the colony, eliminating the queen and the entire colony within days.",
        "For surface protection, we use a combination of spray application on accessible surfaces and brush-coat application on joints, undersides, and hidden areas. This creates a continuous chemical barrier that prevents new termites from entering the treated furniture for 6 to 12 months. For high-value antique furniture, we can also apply borate-based preservatives (Disodium Octaborate Tetrahydrate) that penetrate the wood and provide long-lasting protection without discolouring the surface.",
      ],
    },
    {
      heading: "Termite Prevention Tips for Delhi Homes",
      body: [
        "After treatment, preventing re-infestation requires a few habits. Keep wooden furniture at least 6 inches away from exterior walls, especially during monsoon months when ground moisture rises. Ensure proper ventilation in rooms with large wooden wardrobes — Delhi's humidity in July–September can exceed 85%, creating moisture conditions that attract termites. Use silica gel pouches or dehumidifiers in enclosed almirahs and wardrobes.",
        "Fix any water leaks near furniture immediately — a dripping AC pipe near your wooden bed is an open invitation for subterranean termites. If your Delhi apartment is on the ground floor or has a garden-facing balcony, consider annual preventive treatment of all wooden furniture. FurniRevive offers annual maintenance plans starting at ₹5,000 for complete home protection — a small investment compared to replacing termite-damaged furniture worth lakhs.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does wooden furniture termite treatment cost in Delhi?",
      answer:
        "Single furniture piece treatment starts at ₹1,500. A full bedroom set (bed, wardrobe, side tables) costs ₹3,500–₹5,000. Complete home treatment packages start at ₹8,000. The final cost depends on the number of items, severity of infestation, and wood type.",
    },
    {
      question: "Is the termite treatment chemical safe for children and pets?",
      answer:
        "Yes. We use CIBRC-approved chemicals at recommended dilution levels. After a 4-hour drying period, treated furniture is safe for normal use. We recommend keeping children and pets away from the treated room during the 4-hour curing window.",
    },
    {
      question: "How long does the anti-termite treatment take?",
      answer:
        "Treatment for a single furniture piece takes 30–60 minutes. A full room with 4–5 pieces takes 2–4 hours. After treatment, a 48-hour curing period is recommended before placing items on treated surfaces.",
    },
    {
      question: "Will the chemical injection damage my furniture surface?",
      answer:
        "The injection holes are just 2mm in diameter — smaller than a pencil tip. They are sealed with colour-matched wood putty after injection and are virtually invisible once dried. We take special care with polished and antique surfaces.",
    },
    {
      question: "Can termite-damaged furniture be saved?",
      answer:
        "In most cases, yes. If the structural framework (legs, main frame) retains at least 60% of its original wood density, the furniture can be treated and reinforced. Severely damaged sections can be replaced with matching wood. Only furniture that has lost most of its structural integrity needs full replacement.",
    },
    {
      question: "How do I know if my furniture has termites or borers?",
      answer:
        "Termites leave mud tubes and create hollow interiors — tap the wood and listen for a hollow sound. Borers create small round exit holes (1–2mm) with fine powdery frass. Both require professional treatment but use different chemical approaches. Our free inspection identifies the exact pest.",
    },
    {
      question: "Do you treat plywood and MDF furniture for termites?",
      answer:
        "Yes. Plywood and MDF are actually more susceptible to termite damage than solid wood because of the adhesives used. We use a modified spray-and-brush technique for these materials since injection is not possible in laminated surfaces.",
    },
    {
      question: "How often should I get termite treatment done in Delhi?",
      answer:
        "For homes in ground-floor apartments, garden-adjacent rooms, or areas with known termite activity (Old Delhi, parts of Dwarka, Rohini Sector 24–25), annual treatment is recommended. For upper-floor apartments, treatment every 2–3 years is usually sufficient unless infestation is detected.",
    },
    {
      question: "What warranty does FurniRevive provide for termite treatment?",
      answer:
        "Every treatment is backed by a 6-month warranty. If termites reappear in treated furniture during the warranty period, we return and re-treat at zero cost. Extended 12-month warranty packages are available for ₹500 extra per item.",
    },
    {
      question: "Do you provide termite treatment in Noida and Gurgaon?",
      answer:
        "Yes. We provide doorstep termite treatment across Delhi NCR — all Noida sectors (18, 62, 137, 150, etc.), Gurgaon (DLF, Sohna Road, Golf Course Road, all sectors), Ghaziabad (Indirapuram, Vaishali, Kaushambi), and Faridabad (Greater Faridabad, NIT, Sector 15–88).",
    },
  ],
  relatedPages: relatedExcluding("wooden-furniture-termite-treatment-delhi"),
  keywords: [
    "wooden furniture termite treatment delhi",
    "anti-termite treatment for furniture delhi",
    "termite treatment cost delhi",
    "furniture termite control delhi ncr",
    "termite treatment for wooden bed delhi",
    "termite treatment for wardrobe delhi",
    "anti-termite chemical for furniture",
    "borer treatment for furniture delhi",
    "wood preservation treatment delhi",
    "termite damaged furniture repair delhi",
    "furniture pest control delhi",
    "anti-termite spray for furniture",
    "termite treatment noida",
    "termite treatment gurgaon",
    "wooden almirah termite treatment",
    "sheesham furniture termite treatment",
    "teak furniture termite treatment delhi",
    "furniture termite prevention tips",
  ],
};

// ---------------------------------------------------------------------------
// 2. DINING TABLE REPAIR DELHI
// ---------------------------------------------------------------------------
export const diningTableRepairDelhi: SeoPageData = {
  slug: "dining-table-repair-delhi",
  title:
    "Dining Table Repair in Delhi | Refinishing & Restoration ₹1,200 | FurniRevive",
  metaDescription:
    "Expert dining table repair in Delhi NCR. Scratches, water rings, wobbly legs, glass top replacement & wood refinishing. Doorstep service from ₹1,200. 6-month warranty. Book now!",
  h1: "Dining Table Repair in Delhi — Refinishing & Restoration from ₹1,200",
  heroSubtitle:
    "Scratched, stained, or wobbly dining table? FurniRevive restores dining tables of all types — wooden, marble-top, glass-top, and extendable — at your doorstep across Delhi NCR. Starting at ₹1,200 with a 6-month warranty.",
  showcaseImage: {
    heading: "Dining Table Repair — Expert Refinishing & Restoration Across Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional carpenter refinishing a wooden dining table surface in a Delhi NCR home — FurniRevive",
    caption: "Dining Table Repair Delhi | Scratches, wobble & full refinishing | Doorstep service | FurniRevive",
  },
  quickAnswer:
    "Dining table repair in Delhi costs ₹1,200–₹12,000 depending on the issue. Scratch removal and polishing starts at ₹1,200, leg tightening and joint repair at ₹800, and full refinishing or veneer replacement at ₹4,000–₹12,000. FurniRevive provides doorstep service across Delhi NCR with same-day availability.",
  intro: [
    "The dining table is the centrepiece of every Delhi NCR home. Whether it is a six-seater sheesham dining set from Kirti Nagar's furniture market, a marble-topped Italian import from a <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a> boutique, or a compact four-seater from Pepperfry or Urban Ladder — the dining table sees more daily abuse than almost any other piece of furniture. Hot serving dishes leave white heat rings, spilled dal and curry create stubborn stains, children's homework scratches the surface, and after a few years of daily use, the legs start to wobble as joints loosen.",
    "FurniRevive is Delhi NCR's trusted dining table repair specialist. Our <a href=\"/carpenter-home-service-delhi\">carpenters</a> and <a href=\"/furniture-polishing-delhi\">polishing experts</a> handle every common dining table problem — from surface scratches and water rings to wobbly legs, broken extension mechanisms, cracked marble tops, and chipped glass edges. We work with all wood types (teak, sheesham, mango wood, rubber wood, MDF), all finishes (melamine, PU coating, French polish, lacquer, veneer), and all table styles (rectangular, round, oval, extendable, folding, and counter-height). Also see our guide on <a href=\"/blog/how-to-maintain-wooden-furniture-delhi\">how to maintain wooden furniture</a>.",
    "Our doorstep service covers Delhi (<a href=\"/furniture-repair-south-delhi\">South Delhi</a>, <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, Vasant Kunj, Lajpat Nagar, Pitampura, <a href=\"/furniture-repair-janakpuri\">Janakpuri</a>), Noida, Gurgaon, Ghaziabad, and Faridabad. See our full <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> — repairs start at ₹1,200 for basic scratch removal and polishing, and range up to ₹12,000 for complete refinishing with veneer replacement. Every repair comes with our 6-month warranty.",
  ],
  whyChoose: [
    {
      title: "All Table Types & Materials",
      description:
        "Wooden, marble-top, glass-top, MDF, veneer, and extendable dining tables — our technicians are trained to repair every type found in Delhi homes. We match materials exactly to original specifications.",
    },
    {
      title: "Surface Restoration Experts",
      description:
        "Heat rings, water stains, scratches, dents, and cigarette burns — we restore dining table surfaces to their original finish using professional-grade sanding, filling, and multi-coat polishing techniques.",
    },
    {
      title: "Structural Joint Repair",
      description:
        "Wobbly tables are dangerous. We disassemble loose joints, clean old adhesive, re-glue with high-strength wood adhesive, and reinforce with corner blocks and metal brackets where needed for permanent stability.",
    },
    {
      title: "PU, Melamine & French Polish",
      description:
        "We carry all three major finish types. PU (polyurethane) for modern tables, melamine for budget-friendly finishes, and traditional French polish for antique and heritage dining tables.",
    },
    {
      title: "Doorstep Service, No Transport",
      description:
        "All dining table repairs are done at your home. We bring industrial-grade sanding equipment, multiple polish shades, veneer sheets, glass measurement tools, and spare hardware to your doorstep.",
    },
    {
      title: "6-Month Warranty from ₹1,200",
      description:
        "Basic surface polishing from ₹1,200, joint repairs from ₹800 per leg, full refinishing from ₹4,000. Written quotation provided after free inspection with no obligation to proceed.",
    },
  ],
  process: [
    {
      step: "Share Photos & Book",
      description:
        "WhatsApp photos of your dining table damage to +91 92179 99355. Mention the table material (wood, marble, glass), size (4/6/8-seater), and the problem. We provide a preliminary estimate within 30 minutes and confirm your slot.",
    },
    {
      step: "Doorstep Inspection",
      description:
        "Our technician inspects the table surface, legs, joints, extension mechanism (if applicable), and overall structure. A detailed written quote is shared covering materials, labour, and timeline. No obligation to proceed.",
    },
    {
      step: "Repair & Finishing",
      description:
        "Depending on the issue — sanding and re-polishing for surface damage, joint re-gluing and reinforcement for wobble, veneer patching for chips, or full refinishing for aged tables. Most repairs are completed in 3–6 hours at your home.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "After the repair, we conduct a thorough quality check — surface smoothness test, stability test (applying pressure at corners), and finish consistency review. Your 6-month warranty card is issued on the spot.",
    },
  ],
  benefits: [
    "Restores dining table surface to original factory finish",
    "Eliminates wobble and loose joints permanently",
    "Matches existing wood shade and finish exactly",
    "No need to transport heavy dining table to a workshop",
    "Extends dining table life by 5–10 years",
    "Costs 80% less than buying a new dining set",
    "All repairs backed by 6-month written warranty",
    "Same-day service available across Delhi NCR",
  ],
  contentSections: [
    {
      heading: "Common Dining Table Problems in Delhi Homes",
      body: [
        "Delhi's extreme climate — scorching summers above 45°C and cold winters below 5°C — puts unique stress on dining table materials. <a href=\"/wooden-furniture-repair-delhi\">Wooden tables</a> expand and contract with temperature changes, causing joints to loosen and surfaces to crack over time. During the monsoon, humidity exceeds 85%, causing veneer to peel, MDF to swell, and untreated wood surfaces to develop mould spots. Read our guide on <a href=\"/blog/termite-treatment-cost-delhi\">termite treatment for wooden furniture</a> if you also notice pest damage.",
        "Daily use compounds these issues. Hot tawa marks and serving dish rings create permanent white spots on polished surfaces. Spilled water seeps into joints and weakens adhesive bonds. Children dragging <a href=\"/chair-repair-delhi\">dining chairs</a> against table legs gradually loosen mortise-and-tenon joints. Marble-topped tables develop hairline cracks from thermal shock when hot vessels are placed directly on the surface. Glass tops chip at edges from accidental impacts.",
        "Most Delhi families delay repairs until the table becomes unusable — a wobbly table during a family dinner or a guest noticing water stains. By that point, a minor ₹1,200 <a href=\"/wood-polish-delhi\">polish job</a> has escalated into a ₹6,000–₹10,000 full refinishing project. See our <a href=\"/furniture-repair-cost-delhi\">furniture repair cost guide</a> for a full breakdown. The lesson: address dining table damage early and save significantly.",
      ],
    },
    {
      heading: "Dining Table Refinishing Process",
      body: [
        "Full <a href=\"/wooden-furniture-restoration-delhi\">refinishing</a> is recommended when the dining table surface has multiple deep scratches, widespread water staining, or the finish has dulled and yellowed beyond what simple <a href=\"/furniture-polishing-delhi\">polishing</a> can fix. Our refinishing process begins with complete surface sanding — we use 80-grit sandpaper to strip the old finish, followed by 120-grit and 220-grit for progressive smoothing. Any dents or gouges are filled with colour-matched wood filler and sanded flush.",
        "After sanding, we apply a wood conditioner to ensure even stain absorption, then apply the chosen finish in multiple coats. For PU (polyurethane) finishes — the most durable option for dining tables — we apply three coats with light sanding between each coat. The result is a smooth, glossy, water-resistant surface that looks brand new and resists heat marks and stains far better than the original single-coat factory finish. Compare <a href=\"/furniture-repair-price-list-delhi\">furniture repair prices</a> to understand the value versus buying new.",
      ],
    },
    {
      heading: "Extension Table & Folding Table Repair",
      body: [
        "Extension and folding dining tables are increasingly popular in Delhi's space-constrained apartments, especially in areas like DDA flats in <a href=\"/furniture-repair-dwarka\">Dwarka</a>, compact apartments in Noida, and builder floors in Gurgaon. These tables have mechanical components — sliding rails, butterfly leaf mechanisms, drop-leaf hinges, and locking pins — that wear out faster than the table itself.",
        "FurniRevive repairs all extension and folding mechanisms. Common issues include jammed sliding rails (usually caused by food debris and dried spills in the tracks), bent butterfly leaf supports, worn-out drop-leaf hinges, and missing locking pins. We carry standard replacement hardware for Urban Ladder, Pepperfry, IKEA, and HomeTown tables. For <a href=\"/imported-furniture-repair-delhi\">custom or imported tables</a>, we fabricate replacement parts at our Kirti Nagar workshop. Read our <a href=\"/blog/imported-furniture-restoration-guide\">imported furniture restoration guide</a> for high-end table care tips.",
      ],
    },
    {
      heading: "Dining Table Repair vs Replacement — Is It Worth It?",
      body: [
        "A quality sheesham or teak dining table costs ₹25,000–₹1,50,000 new. A professional repair — even full <a href=\"/wooden-furniture-restoration-delhi\">restoration</a> with new veneer, <a href=\"/furniture-polishing-delhi\">fresh polish</a>, and joint reinforcement — typically costs ₹3,000–₹12,000. That is a saving of 80–90%. Our <a href=\"/furniture-repair-cost-delhi\">furniture repair cost guide</a> and <a href=\"/blog/furniture-repair-vs-replace\">repair vs replace blog</a> both confirm: if the structural frame is solid, repair almost always wins. Also see our <a href=\"/blog/is-sofa-restoration-worth-it\">sofa restoration guide</a> for context on how we assess repairability for all furniture types.",
        "For premium and <a href=\"/luxury-furniture-restoration-delhi\">luxury dining tables</a> — Italian marble, imported hardwood, custom <a href=\"/designer-furniture-repair-delhi\">designer pieces</a> — professional repair is especially important. Replacing these pieces is often impossible or prohibitively expensive. Our <a href=\"/custom-furniture-repair-delhi\">custom furniture repair</a> team handles high-end dining tables with the same care and expertise. Check our <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> for luxury restoration pricing.",
      ],
    },
    {
      heading: "Premium & Imported Dining Table Restoration",
      body: [
        "Many Delhi homes — particularly in <a href=\"/furniture-repair-defence-colony\">Defence Colony</a>, <a href=\"/furniture-repair-green-park\">Green Park</a>, <a href=\"/furniture-repair-hauz-khas\">Hauz Khas</a>, <a href=\"/furniture-repair-south-extension\">South Extension</a>, and <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a> — feature <a href=\"/imported-furniture-repair-delhi\">imported dining tables</a> from Italian, German, or Scandinavian brands. These require specialist handling: proprietary lacquers, specific veneer grades, and colour-matched finishes that budget polish services cannot match.",
        "Our <a href=\"/luxury-furniture-restoration-delhi\">luxury furniture restoration</a> team works with all premium dining table brands. We source matching veneer, use brand-specific finish systems, and carry out multi-day restoration projects when needed. For <a href=\"/designer-furniture-repair-delhi\">designer dining tables</a> with custom joinery or inlay work, our master carpenters handle every detail with precision. Pricing for premium restoration is detailed in our <a href=\"/furniture-repair-price-list-delhi\">furniture repair price list</a>.",
      ],
    },
    {
      heading: "Dining Table Repair Across Delhi NCR",
      body: [
        "Our dining table repair service reaches every Delhi neighbourhood. In South Delhi, we serve <a href=\"/furniture-repair-south-delhi\">South Delhi</a> broadly — including <a href=\"/furniture-repair-defence-colony\">Defence Colony</a>, <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a>, <a href=\"/furniture-repair-hauz-khas\">Hauz Khas</a>, <a href=\"/furniture-repair-green-park\">Green Park</a>, and <a href=\"/furniture-repair-south-extension\">South Extension</a>. In West Delhi, we cover <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-janakpuri\">Janakpuri</a>, <a href=\"/furniture-repair-rajouri-garden\">Rajouri Garden</a>, <a href=\"/furniture-repair-punjabi-bagh\">Punjabi Bagh</a>, and <a href=\"/furniture-repair-paschim-vihar\">Paschim Vihar</a>. North Delhi coverage includes <a href=\"/furniture-repair-rohini\">Rohini</a> and all neighbouring sectors.",
        "Beyond Delhi, our <a href=\"/doorstep-carpenter-service-delhi\">doorstep carpenter service</a> extends to Noida, Gurgaon, Ghaziabad, and Faridabad. We also handle full <a href=\"/furniture-repair-delhi\">furniture repair in Delhi</a> for all other furniture pieces — <a href=\"/wooden-chair-repair-delhi\">wooden dining chairs</a>, <a href=\"/office-chair-repair-delhi\">office chairs</a>, <a href=\"/sofa-repair-delhi\">sofas</a>, and <a href=\"/sofa-upholstery-delhi\">sofa upholstery</a>. For complete dining set restoration — table and all chairs together — contact us for a combined quote.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does dining table repair cost in Delhi?",
      answer:
        "Basic surface polishing and scratch removal starts at ₹1,200. Leg tightening and joint repair costs ₹800–₹2,000 per leg. Full surface refinishing ranges from ₹4,000 to ₹12,000 depending on table size and finish type. Glass top replacement is quoted separately based on size and thickness.",
    },
    {
      question: "Can you remove white heat marks from my dining table?",
      answer:
        "Yes. White heat marks (caused by hot vessels on polished surfaces) are removed through a combination of spot sanding and re-polishing. For superficial marks, the cost is ₹1,200–₹2,000. For deeper damage that has penetrated the finish, localised refinishing at ₹3,000–₹5,000 is needed.",
    },
    {
      question: "My marble-top dining table has a crack. Can you fix it?",
      answer:
        "Hairline cracks in marble can be filled with colour-matched epoxy resin and polished smooth. The repair is nearly invisible. For larger cracks or breaks, we can source and install a replacement marble slab cut to your exact dimensions.",
    },
    {
      question: "How long does dining table refinishing take?",
      answer:
        "Surface polishing and scratch removal takes 2–3 hours. Full refinishing with sanding, staining, and three coats of PU polish requires 6–8 hours. For multi-coat finishes, we may return the next day for the final coat to ensure proper curing between applications.",
    },
    {
      question: "Do you repair extendable and folding dining tables?",
      answer:
        "Yes. We repair sliding rails, butterfly leaf mechanisms, drop-leaf hinges, and locking pins for all extendable and folding tables. We carry standard replacement hardware for major brands and fabricate custom parts when needed.",
    },
    {
      question: "Can you match the exact wood shade of my dining table?",
      answer:
        "Yes. Our technicians carry 50+ wood stain shades and can custom-mix on site. Before staining, we test on a hidden area (usually the underside) to confirm an exact match with the existing table colour.",
    },
    {
      question: "Is the repair done at my home or do you take the table?",
      answer:
        "All repairs are done at your home. We bring all equipment, materials, and tools to your doorstep. No need to dismantle or transport your heavy dining table. Dustsheets are laid down to protect your flooring.",
    },
    {
      question: "My dining table wobbles. Is it worth repairing or should I buy new?",
      answer:
        "A wobbly dining table almost always indicates loose joints, not structural failure. Joint re-gluing and reinforcement costs ₹800–₹2,000 per leg — far cheaper than a new dining set costing ₹15,000–₹80,000. After repair, the table will be as stable as new with our 6-month warranty.",
    },
    {
      question: "Do you repair glass-top dining tables?",
      answer:
        "Yes. We repair chipped edges (by grinding and polishing), replace cracked glass panels (with matching thickness and type — plain, frosted, or tinted), and fix loose glass holders and rubber grommets. Glass is custom-cut to your table's exact dimensions.",
    },
  ],
  relatedPages: relatedExcluding("dining-table-repair-delhi"),
  keywords: [
    "dining table repair delhi",
    "dining table refinishing delhi",
    "dining table polish delhi",
    "dining table scratch repair delhi",
    "marble dining table repair delhi",
    "glass dining table repair delhi",
    "wobbly dining table repair",
    "dining table leg repair delhi",
    "dining table restoration delhi ncr",
    "extendable dining table repair delhi",
    "dining table heat mark removal",
    "dining set repair delhi",
    "wooden dining table repair near me",
    "dining table veneer repair delhi",
    "dining table joint repair delhi",
    "dining table repair cost delhi",
    "6 seater dining table repair",
    "folding dining table repair delhi",
  ],
};

// ---------------------------------------------------------------------------
// 3. OFFICE CHAIR REPAIR DELHI
// ---------------------------------------------------------------------------
export const officeChairRepairDelhi: SeoPageData = {
  slug: "office-chair-repair-delhi",
  title:
    "Office Chair Repair in Delhi | Gas Lift, Wheels, Armrest ₹500 | FurniRevive",
  metaDescription:
    "Professional office chair repair in Delhi NCR. Gas lift replacement, wheel repair, armrest fix, seat cushion re-foam & mesh replacement. From ₹500. Doorstep & bulk corporate service.",
  h1: "Office Chair Repair in Delhi — Gas Lift, Wheels & Armrest Fix from ₹500",
  heroSubtitle:
    "Sinking office chair? Broken armrest? Worn-out wheels? FurniRevive repairs all office chair brands — Featherlite, Godrej, IKEA, HNI, Green Soul — at your doorstep or office across Delhi NCR. Starting at ₹500 with bulk corporate discounts.",
  showcaseImage: {
    heading: "Office Chair Repair — Expert Gas Lift & Mechanism Service Across Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional technician replacing a gas lift cylinder in an office chair in a Delhi NCR workplace — FurniRevive",
    caption: "Office Chair Repair Delhi | Gas lift, wheels & armrest fix | Doorstep service | FurniRevive",
  },
  quickAnswer:
    "Office chair repair in Delhi costs ₹500–₹3,500 depending on the issue. Gas lift replacement costs ₹800–₹1,500, wheel set replacement ₹500–₹800, armrest repair ₹600–₹1,200, and seat re-foam ₹1,000–₹2,500. FurniRevive offers doorstep service for homes and bulk on-site service for offices across Delhi NCR.",
  intro: [
    "With Delhi NCR being India's largest hub for corporate offices, co-working spaces, and work-from-home professionals, <a href=\"/chair-repair-delhi\">chair repair services</a> have become one of the most in-demand furniture services in the region. From the IT parks of Noida Sector 62 and Gurgaon's Cyber City to home offices in <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, and <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a> — millions of office chairs are in use daily. The gas lift cylinder that allows height adjustment typically fails after 2–3 years, causing the chair to slowly sink. Wheels crack on Delhi's tiled and marble floors. Armrest padding compresses. Seat mesh develops holes. And lumbar support mechanisms break.",
    "FurniRevive is Delhi NCR's specialist in <a href=\"/office-furniture-repair-delhi\">office furniture repair</a> for both individual home offices and large corporate setups. We repair all major office chair brands — Featherlite, Godrej Interio, Green Soul, IKEA Markus, Ergoline, Hylone, Da Urban, and imported Herman Miller and Steelcase chairs. Our technicians carry replacement gas lift cylinders (Class 3 and Class 4), castor wheel sets (nylon and PU), armrest pads, seat foam, mesh fabric, and tilt-lock mechanisms as standard inventory. Beyond office chairs, our <a href=\"/furniture-repair-delhi\">furniture repair experts</a> handle every piece of home and office furniture.",
    "Individual home office chair repairs start at ₹500 and are completed at your doorstep in 30–60 minutes. See our full <a href=\"/office-chair-repair-cost-delhi\">office chair repair cost guide</a> for detailed pricing. For corporate offices with 10+ chairs, we provide on-site <a href=\"/commercial-furniture-repair-delhi\">commercial furniture repair</a> with discounted per-chair pricing. We serve all Delhi NCR — Connaught Place, Nehru Place, Okhla Industrial Area, Noida (all sectors), Udyog Vihar Gurgaon, Sahibabad Industrial Area, and beyond. Our <a href=\"/carpenter-home-service-delhi\">carpenter home service</a> and <a href=\"/doorstep-carpenter-service-delhi\">doorstep carpenter service</a> cover the same areas. Call +91 92179 99355 or book online for same-day service.",
  ],
  whyChoose: [
    {
      title: "All Major Brands Serviced",
      description:
        "Featherlite, Godrej, IKEA, Green Soul, Ergoline, Da Urban, Herman Miller, Steelcase — we carry brand-specific replacement parts and know the assembly details of each model.",
    },
    {
      title: "Gas Lift Replacement Specialist",
      description:
        "We stock both Class 3 (standard) and Class 4 (heavy-duty, 150kg capacity) gas lift cylinders. Replacement takes just 15–20 minutes and your chair stops sinking permanently.",
    },
    {
      title: "Corporate Bulk Repair Service",
      description:
        "For offices with 10+ chairs, we offer on-site bulk repair at 20–30% discounted rates. Our team of 3–4 technicians can service 30–50 chairs in a single day with minimal disruption.",
    },
    {
      title: "Home Office Doorstep Service",
      description:
        "Work-from-home professionals across Delhi NCR get the same professional service. We arrive at your apartment with all parts and tools. Typical repair time: 30–60 minutes per chair.",
    },
    {
      title: "Starting at Just ₹500",
      description:
        "Wheel set replacement from ₹500. Armrest pad replacement from ₹600. Gas lift from ₹800. Seat re-foam from ₹1,000. No hidden charges — flat pricing per repair type.",
    },
    {
      title: "Same-Day Service Guarantee",
      description:
        "Book before 1 PM for same-day service anywhere in Delhi NCR. For corporate offices, we schedule at your convenience — early morning, evening, or weekend slots available.",
    },
  ],
  process: [
    {
      step: "Describe the Problem",
      description:
        "Call +91 92179 99355 or WhatsApp a photo/video of your office chair issue. Mention the brand and model if known. We identify the required replacement parts and confirm pricing before dispatching a technician.",
    },
    {
      step: "Technician Arrives with Parts",
      description:
        "Our technician arrives at your home or office with all necessary replacement parts — gas lift, wheels, armrest pads, seat foam, mesh, tilt mechanisms — based on your chair type and reported issue.",
    },
    {
      step: "On-Spot Repair",
      description:
        "Gas lift replacement takes 15–20 minutes. Wheel replacement takes 10 minutes. Armrest and seat repairs take 20–40 minutes. The repair is done on the spot — no need to leave your chair with us.",
    },
    {
      step: "Testing & Warranty",
      description:
        "After repair, we test the chair — height adjustment, tilt mechanism, wheel rolling, armrest stability. Your 6-month warranty card is provided covering the specific parts replaced.",
    },
  ],
  benefits: [
    "Fix sinking chair permanently with gas lift replacement",
    "Smooth-rolling PU wheels that won't scratch floors",
    "Restored armrest padding for all-day comfort",
    "Re-foamed seat cushion that eliminates back pain",
    "Corporate bulk discounts save 20–30% per chair",
    "No chair transport — everything repaired on the spot",
    "All major office chair brands serviced",
    "6-month warranty on all replaced parts",
  ],
  contentSections: [
    {
      heading: "Most Common Office Chair Problems",
      body: [
        "The single most common office chair complaint in Delhi NCR is the sinking gas lift. The gas cylinder that controls chair height contains pressurised nitrogen gas. Over 2–3 years of daily use — especially with heavy use patterns in long-shift IT offices — the cylinder seal degrades and gas leaks slowly. The result is a chair that sinks to its lowest position within minutes of sitting down. Replacing the gas lift cylinder is a simple, 15-minute repair that costs ₹800–₹1,500 and restores full height adjustment permanently. Check our <a href=\"/office-chair-repair-cost-delhi\">office chair repair pricing</a> for exact gas lift rates.",
        "The second most common issue is broken or stuck wheels. Delhi offices with tiled and marble floors put significant stress on standard nylon castors. Wheels crack, bearings seize, and the chair becomes difficult to roll. Upgrading to polyurethane (PU) wheels — which are softer, quieter, and floor-friendly — costs just ₹500–₹800 for a set of five. For a full <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> covering chairs, sofas, and all furniture, see our dedicated pricing page.",
        "Armrest problems rank third. The foam padding on armrests compresses flat after a year of resting elbows. Armrest height-adjustment mechanisms jam or break. And in some models, the entire armrest assembly cracks at the mounting point. All of these are repairable at ₹600–₹1,200 per armrest — far cheaper than buying a new chair. Our <a href=\"/wooden-chair-repair-delhi\">wooden chair repair</a> and <a href=\"/chair-repair-delhi\">broken chair repair</a> teams handle similar structural fixes across all chair types.",
      ],
    },
    {
      heading: "Corporate Office Chair Repair — Bulk Service",
      body: [
        "FurniRevive provides <a href=\"/commercial-furniture-repair-delhi\">commercial furniture repair</a> for corporate offices, co-working spaces, and institutions across Delhi NCR. We have serviced offices in Noida Sector 62's IT corridor, Gurgaon Cyber City, Okhla Industrial Area, Nehru Place, Connaught Place, and Udyog Vihar. Our team of 3–4 technicians arrives with a full inventory of replacement parts and can service 30–50 chairs in a single day. This is the same <a href=\"/office-furniture-repair-delhi\">office furniture maintenance</a> expertise we apply to desks, cabinets, and reception counters.",
        "For bulk orders of 10+ chairs, we offer 20–30% discounted per-chair rates. A typical <a href=\"/commercial-furniture-repair-delhi\">workplace furniture repair</a> engagement involves auditing all chairs, identifying the most cost-effective repair plan (which chairs to repair vs. condemn), executing repairs on-site during off-hours to minimize disruption, and providing a consolidated invoice with warranty documentation for each chair. IT companies, BPOs, law firms, and co-working spaces like WeWork, 91Springboard, and Innov8 use our recurring quarterly maintenance contracts. For detailed bulk service charges, see our <a href=\"/furniture-repair-cost-delhi\">furniture repair cost</a> breakdown.",
      ],
    },
    {
      heading: "Ergonomic Upgrades During Repair",
      body: [
        "When you bring FurniRevive in to repair your office chair, it is the perfect opportunity to add ergonomic upgrades. We can install a higher-density seat cushion foam — similar to the <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a> work we do — that provides better support for long sitting hours, especially important for Delhi's IT professionals who often sit 8–10 hours daily. Upgrading from standard 28-density foam to 40-density high-resilience foam costs just ₹500 extra and dramatically improves comfort.",
        "Other popular upgrades include adding adjustable lumbar support cushions (₹800–₹1,500), replacing fixed armrests with height-adjustable ones (₹1,200–₹2,000 per pair), and upgrading to heavy-duty Class 4 gas lifts for users over 90kg (₹300 extra over standard). For reclining office chairs, our <a href=\"/recliner-repair-delhi\">recliner mechanism repair</a> team handles tilt-lock and recline mechanism failures. The <a href=\"/sofa-upholstery-delhi\">upholstery services</a> we provide for sofas extend to office chair fabric and leather re-covering as well. Check our <a href=\"/recliner-repair-cost-delhi\">recliner repair cost guide</a> if your chair has a reclining function.",
      ],
    },
    {
      heading: "Work-From-Home Seating in Delhi — Why Chair Quality Matters More Now",
      body: [
        "Delhi's shift toward hybrid and work-from-home arrangements has changed the relationship most residents have with their office chairs. A chair that previously saw four hours of use in a home study now logs eight to ten hours daily — the same usage profile as a corporate workstation. At that intensity, a gas lift rated for light home use fails within 18 months, seat foam compresses within two years, and armrest pads wear through even faster. Many WFH professionals in areas like <a href=\"/chair-repair-greater-kailash\">Greater Kailash</a>, <a href=\"/furniture-repair-dwarka\">Dwarka</a>, <a href=\"/furniture-repair-rohini\">Rohini</a>, and <a href=\"/furniture-repair-punjabi-bagh\">Punjabi Bagh</a> are sitting on chairs that were purchased for occasional use and are now genuinely inadequate for full working days.",
        "The ergonomic cost of a deteriorating office chair is real: a sinking gas lift forces the user into a pelvis-posterior tilt, compressing the lumbar spine. A flat armrest pad encourages hunching. These aren't abstract concerns — they translate into actual back, shoulder, and neck discomfort that compounds over months. Repairing and upgrading a functional chair frame is significantly more cost-effective than buying a premium ergonomic replacement, particularly when the existing chair has a solid base and tilt mechanism. Our repair service includes ergonomic upgrade options — higher-density seat foam, adjustable lumbar cushions, and Class 4 heavy-duty gas lifts — that bring even a basic office chair meaningfully closer to ergonomic adequacy. For those who also need sofa work at home, our <a href=\"/sofa-repair-delhi\">sofa repair service in Delhi</a> operates from the same doorstep model. Read our guide on <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replacement</a> to make the right decision.",
      ],
    },
    {
      heading: "Office Chair Repair vs Replacement — Making the Right Call",
      body: [
        "The repair-vs-replace decision for office chairs follows a straightforward framework. If the chair's five-star base (metal or reinforced nylon), tilt mechanism, and back frame are structurally sound, repair almost always wins economically. A full overhaul — new gas lift, PU wheels, armrest pads, seat foam — costs ₹3,000–₹5,000. A comparable new ergonomic chair costs ₹8,000–₹25,000. That is a 60–80% saving. Our <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace guide</a> covers this decision framework in detail for all furniture types.",
        "For premium office chairs — Herman Miller Aeron, Steelcase Leap, Haworth Fern — repair is even more compelling. These chairs cost ₹50,000–₹2,00,000 new. A gas lift or wheel replacement at ₹1,000–₹2,000 is an obvious choice. The same logic applies to <a href=\"/dining-table-repair-delhi\">dining chair restoration</a> and <a href=\"/wooden-chair-repair-delhi\">wooden chair repair</a> — quality frames are always worth repairing. For <a href=\"/furniture-repair-cost-delhi\">furniture repair cost</a> comparisons across chair types, sofas, and tables, see our comprehensive pricing guide.",
        "Indicators that replacement makes more sense: the base has cracked star-arms, the tilt mechanism is stripped and non-repairable, the back frame is bent, or the chair cost under ₹3,000 new. In these cases, we can recommend budget-friendly replacements that are genuinely worth buying, rather than spending money on a chair that won't last. Our <a href=\"/furniture-repair-home-service-delhi\">home furniture repair service</a> team will give you an honest assessment at the doorstep before any work begins.",
      ],
    },
    {
      heading: "Commercial Office Chair Maintenance — Quarterly Service Plans",
      body: [
        "High-frequency office environments — call centres, IT companies, BPOs — put chairs through 2–3× the wear of standard office use. Chairs in these settings need professional assessment every 3–4 months to catch gas lift degradation before failure, replace wheels before they seize, and re-tighten tilt mechanisms before they become noisy. FurniRevive offers quarterly <a href=\"/commercial-furniture-repair-delhi\">commercial furniture repair</a> contracts that cover all chairs at a fixed monthly rate.",
        "Our commercial maintenance contracts are used by offices in South Delhi localities including <a href=\"/furniture-repair-greater-kailash\">Greater Kailash</a>, <a href=\"/furniture-repair-defence-colony\">Defence Colony</a>, <a href=\"/furniture-repair-green-park\">Green Park</a>, <a href=\"/furniture-repair-hauz-khas\">Hauz Khas</a>, and <a href=\"/furniture-repair-south-extension\">South Extension</a>. West Delhi offices in <a href=\"/furniture-repair-janakpuri\">Janakpuri</a>, <a href=\"/furniture-repair-rajouri-garden\">Rajouri Garden</a>, and <a href=\"/furniture-repair-paschim-vihar\">Paschim Vihar</a> are also served. For <a href=\"/office-furniture-repair-delhi\">workplace furniture repair</a> quotes that include desks, cabinets, and reception furniture alongside chairs, contact us for a bundled assessment. Our <a href=\"/furniture-repair-price-list-delhi\">furniture repair price list</a> covers all commercial service rates.",
      ],
    },
    {
      heading: "Chair Repair Across South Delhi — Locality Coverage",
      body: [
        "FurniRevive's office chair repair service covers every South Delhi neighbourhood with same-day availability. In the premium residential and commercial belt: <a href=\"/chair-repair-greater-kailash\">chair repair in Greater Kailash</a>, <a href=\"/chair-repair-defence-colony\">chair repair in Defence Colony</a>, <a href=\"/chair-repair-green-park\">chair repair in Green Park</a>, <a href=\"/chair-repair-hauz-khas\">chair repair in Hauz Khas</a>, and <a href=\"/chair-repair-south-extension\">chair repair in South Extension</a> are all covered with our standard doorstep service.",
        "For broader furniture needs in these localities — sofas, dining tables, wardrobes — our full <a href=\"/furniture-repair-greater-kailash\">furniture repair in Greater Kailash</a>, <a href=\"/furniture-repair-defence-colony\">furniture repair in Defence Colony</a>, <a href=\"/furniture-repair-hauz-khas\">furniture repair in Hauz Khas</a>, and <a href=\"/furniture-repair-south-extension\">furniture repair in South Extension</a> teams are available. For <a href=\"/home-furniture-repair-delhi\">home furniture repair in Delhi</a> across all localities, our service network covers the entire city. Related reading: <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a> — the same cost-benefit logic applies to office seating.",
      ],
    },
    {
      heading: "Ergonomic Seating & Long-Term Care",
      body: [
        "Extending the life of an office chair beyond the typical 3–5 years requires periodic professional maintenance alongside daily care habits. At the professional level: annual gas lift inspection (before it fails, not after), PU wheel replacement every 2–3 years, and seat foam re-densification every 3–4 years. These interventions, combined, add 5–10 years to a quality chair's useful life. Our <a href=\"/furniture-repair-price-guide-delhi\">furniture repair pricing guide</a> includes a maintenance schedule recommendation for office chairs by brand tier.",
        "For ergonomic seating that extends beyond the office chair — executive recliners used in home offices, for instance — our <a href=\"/recliner-repair-delhi\">recliner repair service</a> handles <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> for powered recliners and manual mechanism fixes for manual ones. The <a href=\"/sofa-repair-delhi\">sofa repair</a> and <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a> services complement office chair work for complete home office seating care. For a full assessment of whether your seating investment is worth maintaining, our <a href=\"/blog/how-long-does-sofa-foam-last\">guide on foam longevity</a> provides useful benchmarks. Also relevant: our <a href=\"/blog/common-recliner-motor-problems\">common recliner motor problems</a> guide if your reclining office chair is malfunctioning.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does office chair gas lift replacement cost in Delhi?",
      answer:
        "Class 3 (standard, up to 100kg) gas lift replacement costs ₹800–₹1,000. Class 4 (heavy-duty, up to 150kg) costs ₹1,200–₹1,500. The price includes the cylinder, installation, and 6-month warranty. Replacement takes 15–20 minutes at your location.",
    },
    {
      question: "Can you repair my office chair at my home?",
      answer:
        "Yes. All office chair repairs — gas lift, wheels, armrests, seat foam, mesh — are done at your doorstep. Our technician arrives with all necessary parts. There is no need to transport your chair anywhere.",
    },
    {
      question: "Do you offer bulk office chair repair for companies?",
      answer:
        "Yes. For 10+ chairs, we provide on-site bulk repair with 20–30% discounted rates. Our team can service 30–50 chairs in a single day. We also offer quarterly maintenance contracts for recurring service at fixed rates.",
    },
    {
      question: "How long does an office chair repair take?",
      answer:
        "Gas lift replacement: 15–20 minutes. Wheel set replacement: 10 minutes. Armrest repair: 20–30 minutes. Seat re-foam or mesh replacement: 30–45 minutes. Most single-issue repairs are done within an hour.",
    },
    {
      question: "My office chair makes a creaking noise. Can you fix it?",
      answer:
        "Yes. Creaking usually comes from the tilt mechanism, gas lift cylinder, or loose base plate bolts. We diagnose the exact source, lubricate or replace the affected component, and the creaking stops permanently. Cost is typically ₹500–₹1,000.",
    },
    {
      question: "Can you replace the mesh on my office chair?",
      answer:
        "Yes. We replace torn or stretched mesh on office chair backs and seats. We carry standard black mesh and can source coloured mesh for specific models. Mesh replacement costs ₹1,500–₹3,000 depending on chair size and mesh quality.",
    },
    {
      question: "Do you repair Herman Miller and Steelcase chairs?",
      answer:
        "Yes. We service premium imported office chairs including Herman Miller Aeron, Steelcase Leap, and Humanscale Freedom. Genuine replacement parts are sourced from authorised distributors. Lead time for imported parts may be 3–5 days.",
    },
    {
      question: "Is it worth repairing an old office chair or should I buy new?",
      answer:
        "If the chair frame and base are intact (metal or reinforced nylon), it is almost always worth repairing. A full overhaul — new gas lift, wheels, armrests, and seat foam — costs ₹3,000–₹5,000. A comparable new chair costs ₹8,000–₹25,000. Repair saves 60–80%.",
    },
    {
      question: "Which areas in Delhi NCR do you cover for office chair repair?",
      answer:
        "We cover all Delhi NCR — every Delhi locality, all Noida sectors, Gurgaon (Cyber City, DLF, Sohna Road, all sectors), Ghaziabad (Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension), and Faridabad. Same-day service for bookings before 1 PM.",
    },
    { question: "My work-from-home office chair is sinking and causing back pain — is repair worth it?", answer: "Almost always yes, provided the chair frame, base, and tilt mechanism are intact. A new gas lift (₹800–₹1,500), upgraded seat foam (₹1,000–₹2,000), and refreshed armrest pads (₹600–₹1,200) cost a fraction of a comparable ergonomic replacement. The repair also takes under an hour at your home. If the back pain is linked to posture, we can add an adjustable lumbar support cushion during the same visit — a practical, low-cost ergonomic upgrade." },
  ],
  relatedPages: relatedExcluding("office-chair-repair-delhi"),
  keywords: [
    "office chair repair delhi",
    "office chair gas lift replacement delhi",
    "office chair wheel replacement delhi",
    "office chair armrest repair delhi",
    "office chair repair near me",
    "office chair repair cost delhi",
    "sinking office chair repair",
    "office chair cushion replacement delhi",
    "corporate office chair repair delhi ncr",
    "bulk office chair repair",
    "featherlite chair repair delhi",
    "godrej chair repair delhi",
    "herman miller repair delhi",
    "office chair mesh replacement delhi",
    "ergonomic chair repair delhi",
    "office chair repair noida",
    "office chair repair gurgaon",
    "work from home chair repair delhi",
  ],
};

// ---------------------------------------------------------------------------
// Export combined array
// ---------------------------------------------------------------------------
export const REPAIR_PROBLEM_PAGES_3: SeoPageData[] = [
  woodenFurnitureTermiteTreatmentDelhi,
  diningTableRepairDelhi,
  officeChairRepairDelhi,
];
