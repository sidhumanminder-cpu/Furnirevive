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
// 1. SOFA CUSHION REPAIR DELHI
// ---------------------------------------------------------------------------
export const sofaCushionRepairDelhi: SeoPageData = {
  slug: "sofa-cushion-repair-delhi",
  title:
    "Sofa Cushion Repair in Delhi | Foam Replacement ₹999 | FurniRevive",
  metaDescription:
    "Expert sofa cushion repair in Delhi. Foam replacement, re-stuffing, sagging fix for all sofa types. Doorstep service across Delhi NCR from ₹999. 6-month warranty. Book now!",
  h1: "Sofa Cushion Repair in Delhi — Foam Replacement & Re-Stuffing from ₹999",
  heroSubtitle:
    "Delhi NCR's extreme heat, monsoon humidity, and AC-dried air create a triple assault on sofa foam that no other Indian city replicates. When your cushions collapse, the fix is not a new sofa — it is a precision foam diagnosis and replacement engineered for your specific climate and usage pattern.",
  showcaseImage: {
    heading: "Premium Sofa Cushion Repair — Expert Service at Your Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa cushion repair technician replacing high-density foam in a sagging Delhi sofa — re-stuffing service by FurniRevive",
    caption: "Sofa Cushion Repair Delhi | Foam replacement from ₹999 | Same-day service | FurniRevive",
  },
  intro: [
    "Polyurethane foam — the material inside every sofa cushion — degrades through a process called compression set. Each time body weight presses the foam cells flat, a small percentage of those cells fail to recover their original height. In a temperate climate, quality foam resists this process for 8–10 years. In Delhi NCR, three environmental factors accelerate the timeline dramatically: summer temperatures above 40°C weaken the polyurethane molecular chains, monsoon humidity above 90% RH causes moisture absorption that softens the cell walls permanently, and then air conditioning rapidly extracts that moisture, leaving the foam brittle and prone to crumbling. This triple climate cycle means even premium foam in Delhi NCR sofas loses 30–40% of its support capacity within 4–5 years — roughly half the lifespan you would get in Bangalore or Pune.",
    "FurniRevive approaches cushion repair as a diagnostic science, not a simple swap. Before replacing any foam, our technicians test whether the problem is actually the foam, the suspension springs beneath it, the webbing that supports the springs, or the plywood base platform. In roughly 20% of cases we inspect, the foam itself still has life but the support structure underneath has failed — replacing foam alone in these cases wastes money because the new foam will sag into the collapsed base within weeks. This diagnostic-first approach, covering Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad, ensures you pay only for what actually needs fixing.",
    "Pricing starts at ₹999 for a single-cushion foam replacement and scales predictably: ₹2,500–₹5,000 for a complete 3-seater, ₹4,000–₹7,500 for a 5-seater, ₹5,000–₹9,000 for an L-shape, and ₹3,500–₹6,000 for a recliner sofa. Compare this to ₹25,000–₹80,000 for a new sofa of equivalent build quality — cushion repair delivers identical comfort at 10–15% of replacement cost. Every repair carries our 6-month warranty: if the replaced foam compresses or loses shape, we return and re-do it free across all Delhi NCR.",
  ],
  whyChoose: [
    {
      title: "Diagnostic-First Approach",
      description:
        "We test foam, springs, webbing, and base independently before recommending a fix. This prevents wasted money on foam replacement when the real problem is a collapsed support layer underneath.",
    },
    {
      title: "Climate-Rated Foam Selection",
      description:
        "We select foam grades based on Delhi NCR climate exposure: 40D for AC rooms with extreme temperature swings, 32D HR foam for naturally ventilated living rooms, and memory foam layers for premium comfort in climate-controlled spaces.",
    },
    {
      title: "Per-Cushion Transparency",
      description:
        "Every quote itemises each cushion separately — seat, back, arm, and bolster — so you can prioritise which cushions to replace now and which can wait. No pressure to do the entire sofa if budget is a concern.",
    },
    {
      title: "Structural Sub-Layer Repair",
      description:
        "If springs are sagging, webbing is stretched, or the plywood base has cracked, we fix the support structure during the same visit — ensuring new foam sits on a solid foundation rather than collapsing into a broken base.",
    },
    {
      title: "All Sofa Configurations",
      description:
        "3-seater, 5-seater, L-shape, U-shape, recliner sofas, sofa-cum-beds, and modular sectionals — each has different cushion geometry and we carry pre-cut foam blocks for all standard Delhi market sizes.",
    },
    {
      title: "Warranty Against Delhi Climate",
      description:
        "Our 6-month warranty specifically covers compression set caused by normal Delhi NCR climate exposure. If the foam loses shape within warranty — whether from summer heat, monsoon moisture, or AC drying — we return and replace at zero cost.",
    },
  ],
  process: [
    {
      step: "Photo Diagnosis via WhatsApp",
      description:
        "Send photos showing the sag pattern — where exactly the cushion dips, whether it recovers when you stand, and whether the frame beneath feels solid. We identify whether the issue is foam, springs, or base from the visual pattern and provide a preliminary cost range.",
    },
    {
      step: "4-Layer Inspection On-Site",
      description:
        "Our technician tests each layer independently: presses the foam to check cell recovery, bounces the spring deck for tension, pulls the webbing for stretch, and taps the plywood base for cracks. You receive a layer-by-layer diagnosis explaining exactly what has failed and what still has life.",
    },
    {
      step: "Precision Foam Cutting & Fitting",
      description:
        "Replacement foam is cut on-site to exact cushion dimensions — not trimmed from an approximate block. Seat foam is cut 5–8 mm oversize for a snug fit that prevents shifting inside the cover. Where a memory foam comfort layer is specified, it is bonded to the base foam before insertion.",
    },
    {
      step: "Load Test & Climate Advice",
      description:
        "Each replaced cushion is load-tested with full body weight to verify correct density and height. We check that all seat cushions create a level seating surface. You receive your warranty card plus written guidance on maximising foam lifespan in your specific home climate (AC usage, ventilation, humidity exposure).",
    },
  ],
  benefits: [
    "4-layer diagnostic inspection (foam + springs + webbing + base) before any work",
    "Climate-rated foam: 32D HR, 40D premium, or memory foam based on room conditions",
    "Per-cushion pricing from ₹999 — replace only what has actually failed",
    "Sub-structure repair included: sagging springs, stretched webbing, cracked plywood",
    "On-site precision cutting — foam sized to your exact cushion, not approximate blocks",
    "All configurations: 3-seater, 5-seater, L-shape, recliner, sofa-cum-bed",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "Memory foam comfort layers bonded to base foam for premium feel",
    "Cushion cover repair, zip replacement, or full cover re-stitching",
    "Written climate-care guide to maximise foam lifespan in your home",
    "6-month warranty specifically covering Delhi NCR climate compression",
    "Same-day service when booked before noon",
  ],
  contentSections: [
    {
      heading: "Reading Your Sofa Cushion Like a Professional — Diagnosing the Real Problem",
      body: [
        "Most homeowners assume a sagging sofa means dead foam — but the cushion is actually a layered system, and the failure point determines the correct repair. Layer one is the foam slab itself: if you remove the cushion, flip it upside down on a flat floor, and press it with your palm, you can feel whether the cells spring back (foam still viable) or stay compressed (foam exhausted). Layer two is the spring suspension beneath the cushion: sit on the sofa frame without the cushion and bounce — if you sink more than 3 cm, the springs or sinuous wire have lost tension. Layer three is the jute or elastic webbing that supports the springs: visible sagging or torn strands mean the webbing has failed. Layer four is the plywood or MDF base platform: cracks or warping here create localised dips that no amount of new foam will fix. Our technicians test all four layers during every <a href=\"/sofa-repair-delhi\">sofa repair inspection</a> before recommending a course of action.",
        "This diagnostic approach saves Delhi NCR homeowners significant money. We routinely find sofas where the foam is still at 60–70% capacity but the webbing has stretched, causing the cushion to dip into a hammock shape. Replacing foam in this scenario costs ₹999–₹1,500 per cushion and fixes the problem for perhaps six months before the new foam also sags into the broken webbing. Repairing the webbing first (₹500–₹800 per seat) and then deciding whether the foam still needs replacement eliminates unnecessary costs. Conversely, when the foam has genuinely failed but the base is solid, we confirm the sub-structure is intact before cutting new foam — ensuring your investment lasts the full 5–8 years. For related structural concerns, our <a href=\"/furniture-repair-delhi\">furniture repair service</a> addresses frame and joint issues across all furniture types.",
      ],
    },
    {
      heading: "Memory Foam vs HR Foam vs Standard PU Foam — Choosing for Delhi Homes",
      body: [
        "Not all replacement foam is equal, and the right choice depends on your room environment and usage pattern. Standard PU foam (polyurethane, available in 28D–40D densities) is the workhorse of sofa cushions — affordable, firm, and durable. In a climate-controlled Delhi room running AC 8+ hours daily, standard 32D PU foam lasts 5–7 years before compression set becomes noticeable. In a naturally ventilated room exposed to Delhi summer heat, the same foam lasts 3–5 years because the heat-cool cycle accelerates molecular breakdown. We recommend 32D PU as the standard choice for most Delhi NCR families — it balances cost (₹999 per cushion) with adequate durability for the climate.",
        "HR foam (High Resilience) has a more open cell structure that recovers faster after compression and feels bouncier. HR 40D foam is our premium recommendation for heavily used family sofas — joint families with 6+ members using the sofa daily, or sofas that double as evening lounging spots for 4–5 hours at a stretch. HR foam costs approximately 40% more per cushion but lasts 7–10 years in Delhi climate. Memory foam (viscoelastic) is temperature-sensitive — it softens in heat and firms in cold. In AC rooms kept at 22–24°C, a 50mm memory foam layer on top of a PU base creates luxury-hotel comfort. In non-AC rooms during Delhi summers, memory foam becomes excessively soft and loses support. We advise memory foam only for AC-controlled environments. Our guide on <a href=\"/blog/how-long-does-sofa-foam-last\">sofa foam longevity</a> explains these differences with real Delhi household data, and our <a href=\"/sofa-foam-replacement-delhi\">foam replacement page</a> covers all available foam grades and pricing.",
      ],
    },
    {
      heading: "Complete Pricing — Per-Cushion and Full-Sofa Costs by Configuration",
      body: [
        "Our pricing is structured per-cushion with clear totals for standard sofa configurations. Single seat cushion (32D PU foam): ₹999–₹1,400. Single seat cushion (40D HR foam): ₹1,400–₹1,800. Single back cushion: ₹700–₹1,100. Memory foam comfort layer add-on (50mm): ₹500–₹800 per cushion. Cushion cover re-stitching: ₹300–₹500. Full cover replacement: ₹800–₹1,500 depending on fabric. Sub-structure repair (springs or webbing per seat): ₹500–₹1,200. Plywood base replacement: ₹800–₹1,500 per section.",
        "Full-sofa estimates: 3-seater sofa (3 seat + 3 back cushions, 32D foam): ₹3,500–₹5,000. 5-seater sofa (typically 3+2 configuration, all cushions): ₹5,500–₹7,500. L-shape sofa (5–7 seat cushions + backs): ₹6,000–₹9,000. Recliner sofa (per recliner seat with mechanism-compatible foam cutting): ₹1,800–₹3,000 per seat; full 3-seat recliner sofa ₹5,000–₹8,000. Sofa-cum-bed (seat cushions + fold-out mattress section): ₹4,000–₹6,500. These ranges reflect standard Delhi NCR pricing — exact quotes are provided after our free on-site inspection. For broader furniture cost context, our decision guide on <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">repair versus replacement economics</a> demonstrates why cushion repair is nearly always the better financial choice, and <a href=\"/blog/is-sofa-restoration-worth-it\">our restoration analysis</a> covers when full restoration makes sense versus targeted cushion work.",
      ],
    },
    {
      heading: "Real Scenario 1 — Joint Family in Dwarka DDA Flat, 5-Year-Old Sofa",
      body: [
        "A family of eight in Dwarka Sector 12 contacted us about their 5-year-old fabric 3+2 sofa set purchased from a local Kirti Nagar showroom. All three seat cushions on the 3-seater had gone completely flat — the family described sitting on a wooden plank. The two-seater was slightly better but visibly sagging. The sofa spent 10+ hours daily bearing the weight of grandparents, parents, and four children ranging from 5 to 16 years old. The room had no AC — only a ceiling fan and a desert cooler in summer, meaning the foam had endured five full Delhi summer cycles at 40°C+ without climate protection.",
        "Our inspection revealed that the foam had reached terminal compression set (less than 15% recovery on press test) and the jute webbing beneath had stretched 40mm beyond its designed tension on two of the three seats. We replaced all five seat cushions with 40D HR foam (recommended due to the high user count and no-AC environment), repaired the stretched webbing with new elastic bands, and replaced the back cushion foam with fresh 32D PU. Total cost: ₹8,200 for the complete set — versus ₹35,000–₹50,000 for equivalent new sofas. The family reported the sofas felt better than when originally purchased because the original foam had been cheap 22D from the manufacturer. This type of comprehensive approach is what separates our service from basic <a href=\"/sofa-repair-delhi\">sofa repair</a> providers who simply swap foam without checking the layers beneath.",
      ],
    },
    {
      heading: "Real Scenario 2 — Elderly Couple in Vasant Kunj, Imported Sofa with One Collapsed Cushion",
      body: [
        "An elderly couple in Vasant Kunj C-Block had a 3-year-old Italian-design sofa (purchased through a Delhi importer for ₹1,80,000) where the left seat cushion had collapsed while the centre and right cushions remained firm. This asymmetric failure puzzled them — the sofa was used equally across all three seats. On inspection, we found the left cushion sat directly above the AC vent in the floor, meaning it experienced repeated rapid temperature drops from 35°C ambient to 18°C conditioned air — a thermal shock cycle that accelerates foam degradation in a localised area.",
        "Rather than replacing all three cushions (unnecessary and expensive), we replaced only the failed left cushion with 40D HR foam specified for high thermal-cycling environments, and rotated the original centre cushion (still at 80% capacity) to the left position to equalise wear going forward. We also recommended the couple redirect their floor AC vent slightly away from the sofa base. Total cost: ₹1,800 for one premium cushion replacement plus inspection. The couple avoided a ₹12,000+ full-sofa cushion replacement that other providers had quoted without diagnosing the root environmental cause. For owners of high-value imported furniture, our <a href=\"/recliner-repair-delhi\">recliner repair</a> and specialist <a href=\"/sofa-upholstery-delhi\">upholstery services</a> follow the same diagnostic-first philosophy — fix only what is broken, not the entire sofa.",
      ],
    },
    {
      heading: "Brand-Specific Cushion Construction — IKEA, Urban Ladder, Pepperfry & Godrej",
      body: [
        "Each manufacturer uses different internal cushion architectures that affect how we approach repair. <a href=\"/ikea-furniture-repair-delhi\">IKEA sofas</a> (KIVIK, EKTORP, FRIHETEN) layer a foam core inside a polyester fibre batting wrap, all housed in a zippered washable cover. The fibre wrap creates the initial soft feel but compresses permanently within 2–3 years in Delhi homes; the inner foam typically lasts longer. Our approach: remove the cover, assess whether the fibre wrap needs supplementing or only the foam core needs replacement, and rebuild the layered construction to original specifications. Urban Ladder premium sofas (Maceio, Berliner) use 32D foam with a Dacron wrap — when the foam fails, we match the density and retain the intact Dacron. Their budget range (Marzetti, Brighton) uses 22D foam that we always upgrade to 32D during replacement.",
        "<a href=\"/pepperfry-furniture-repair-delhi\">Pepperfry sofas</a> vary enormously — their Woodsworth and CasaCraft ranges use 28D–32D foam with removable inner cases, while Mintwud and Forzza budget models often use loose-fill fibre that clumps and flattens unpredictably. We diagnose the construction type and recommend either foam replacement or complete conversion to a foam-core system for better longevity. <a href=\"/godrej-furniture-repair-delhi\">Godrej Interio cushion repair</a> typically involves accessing foam through a stapled bottom cover rather than zippers — our technicians re-staple with pneumatic tools for factory-tight closure. For all brands, our <a href=\"/sofa-repair-cost-delhi\">sofa repair cost page</a> and <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost guide</a> provide brand-specific pricing. The comprehensive <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide for Delhi</a> covers every furniture category we service.",
      ],
    },
    {
      heading: "Authority Resources — Pricing, Decision Guides & Related Services",
      body: [
        "Sofa cushion repair connects to a broader ecosystem of furniture care services. When cushion issues exist alongside outer fabric damage, our <a href=\"/sofa-fabric-tear-repair-delhi\">sofa fabric tear repair</a> service addresses rips, burns, and pet scratches in the same visit. Structural frame problems — creaking, visible frame flex, broken corner joints — are handled through <a href=\"/sofa-frame-repair-delhi\">sofa frame repair</a>. Spring deck issues that cause cushions to sag into the frame cavity are addressed by our <a href=\"/sofa-spring-repair-delhi\">sofa spring repair</a> team. L-shaped and sectional sofas with uneven cushion wear across sections benefit from our <a href=\"/l-shape-sofa-repair-delhi\">L-shape sofa repair</a> service that ensures uniform foam density across all connected pieces. For recliner sofas where cushion foam must be cut around mechanical parts, our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> team coordinates with cushion work for a single-visit solution.",
        "NCR-wide coverage: <a href=\"/sofa-repair-noida\">sofa repair Noida</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>, <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a>. Cost guides: <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a>, <a href=\"/sofa-foam-replacement-cost-delhi\">foam replacement cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">upholstery price list</a>, <a href=\"/recliner-repair-cost-delhi\">recliner repair cost</a>, <a href=\"/leather-sofa-repair-cost-delhi\">leather sofa repair cost</a>. Decision resources: <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a>, <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a>, <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a>. For complete home furniture care: <a href=\"/furniture-repair-delhi\">furniture repair Delhi</a>, <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a>, and <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> provide the full picture across all categories.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I know if my sofa cushions need repair or replacement?",
      answer:
        "If your cushions sag visibly when you sit, don't spring back when you stand, feel lumpy or uneven, or have developed permanent body impressions, the foam needs replacing. If the cushion is still comfortable but the cover is torn, we can repair just the cover.",
    },
    {
      question: "How long does sofa cushion repair take at my home?",
      answer:
        "Most cushion repairs take 2–3 hours for a standard sofa. A complete foam replacement for an L-shaped sofa with 6+ cushions may take 3–4 hours. Work is completed in a single visit in most cases.",
    },
    {
      question: "What foam density do you use for sofa cushion replacement?",
      answer:
        "We use 32-density foam as standard for seat cushions and offer 40-density premium foam as an upgrade. Back cushions use 28 or 32-density foam. We never use cheap 18 or 22-density foam that would flatten again quickly.",
    },
    {
      question: "Can you replace foam in leather and rexine sofas?",
      answer:
        "Yes. We carefully unzip or detach the leather/rexine cushion covers, replace the internal foam, and re-fit the covers without damage. Our technicians are experienced with all sofa materials.",
    },
    {
      question: "Do you also replace the cushion covers?",
      answer:
        "Yes. If your cushion covers are torn, stained, or faded, we can replace them during the same visit. We carry fabric swatches and can match or upgrade your existing cushion cover material.",
    },
    {
      question: "What is the starting price for sofa cushion repair in Delhi?",
      answer:
        "Single cushion foam replacement starts at ₹999. A full three-seater sofa cushion replacement costs ₹3,000–₹5,000. We provide a detailed written quote before starting any work.",
    },
    {
      question: "Is the 6-month warranty valid for cushion foam replacement?",
      answer:
        "Yes. Our 6-month warranty covers all cushion foam replacements and re-stuffing work. If the foam compresses or loses shape within six months, we return and replace it at no charge anywhere in Delhi NCR.",
    },
    {
      question: "Can you fix cushions for a sofa cum bed?",
      answer:
        "Absolutely. We repair and replace foam for sofa cum beds, including the fold-out mattress section and the seat cushions. We use appropriate foam densities for both sitting and sleeping comfort.",
    },
    {
      question: "Do you repair IKEA sofa cushions?",
      answer:
        "Yes. IKEA sofas like KIVIK and EKTORP use removable covers over foam/fibre composite cushions. We replace the inner foam core with 32D foam while retaining the fibre wrap layer. IKEA cushion repair from ₹999 at your doorstep across Delhi NCR.",
    },
    {
      question: "How does Delhi's heat affect sofa foam lifespan?",
      answer:
        "Delhi's extreme summer heat (40–45°C) accelerates polyurethane foam breakdown — Delhi NCR sofas need foam replacement every 4–6 years for budget foam and 8–12 years for premium 40D foam. Air conditioning further dries and stresses foam. Our blog on how long sofa foam lasts covers this in detail.",
    },
    {
      question: "Can you repair cushions in Noida and Gurgaon?",
      answer:
        "Yes. Sofa cushion repair is available across all Delhi NCR — Delhi, Noida (all sectors), Gurgaon, Ghaziabad, and Faridabad. Same-day service available. No additional charges for NCR locations.",
    },
    {
      question: "When should I replace sofa cushion foam vs buy a new sofa?",
      answer:
        "If the sofa frame and springs are in good condition, foam replacement (₹999–₹5,000) is always better value than buying a new sofa (₹15,000–₹60,000+). Only consider replacement when the frame has structural failure, the springs are extensively broken, AND the foam is degraded — and even then, comprehensive restoration is usually cheaper than replacement.",
    },
    {
      question: "What foam do you use — and why does it matter?",
      answer:
        "We use 32-density (standard) and 40-density (premium) foam exclusively — never cheap 18D or 22D foam. Density determines how long the foam resists compression under body weight. Premium 40D foam in a heavily used Delhi NCR family sofa lasts 8–12 years; budget 22D foam in the same sofa lasts 1–2 years before requiring replacement again.",
    },
    {
      question: "Do you repair leather sofa cushions?",
      answer:
        "Yes. Leather sofa cushion repair involves carefully opening the leather or rexine cover, replacing the internal foam, and re-seating the cover without damage. We also offer leather conditioning and crack repair for the outer cover during the same visit. See our leather sofa repair page for full details.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-cushion-repair-delhi"),
    { label: "Sofa Foam Replacement Delhi", href: "/sofa-foam-replacement-delhi" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  ],
  keywords: [
    "sofa cushion repair delhi",
    "sofa cushion repair near me",
    "sofa foam replacement delhi",
    "sofa cushion re-stuffing delhi",
    "sagging sofa repair delhi",
    "sofa cushion price delhi",
    "sofa cushion foam replacement cost",
    "sofa seat repair delhi",
    "flat sofa cushion fix delhi",
    "sofa cushion repair cost delhi",
    "best sofa cushion repair delhi NCR",
    "doorstep sofa cushion repair delhi",
  ],
};

// ---------------------------------------------------------------------------
// 2. RECLINER REPAIR DELHI
// ---------------------------------------------------------------------------
export const reclinerRepairDelhi: SeoPageData = {
  slug: "recliner-repair-delhi",
  title:
    "Recliner Repair in Delhi | Mechanism, Motor & Upholstery Fix from ₹1,499 | FurniRevive",
  metaDescription:
    "Expert recliner repair in Delhi NCR from ₹1,499. Manual & electric recliner mechanism fix, motor replacement, La-Z-Boy, Durian & all brands. Doorstep service, same-day slots, 6-month warranty. Call +91 92179 99355.",
  h1: "Recliner Repair in Delhi — Mechanism, Motor & Upholstery Fix from ₹1,499",
  heroSubtitle:
    "Recliner stuck, motor broken, or upholstery torn? FurniRevive repairs all recliner brands and types at your doorstep across Delhi NCR — manual and electric mechanism repair, motor replacement, and fabric or leather restoration from ₹1,499.",
  intro: [
    "Recliners have become essential comfort furniture in Delhi NCR homes and offices. Whether it's a La-Z-Boy, a locally manufactured power recliner, or an imported massage recliner, these complex pieces of furniture combine upholstery with mechanical or electrical components — and when something breaks, finding a qualified repair service can be frustrating. FurniRevive is Delhi NCR's specialist in recliner repair, handling everything from jammed mechanisms and burnt-out motors to torn leather and sagging cushions.",
    "The most common recliner problems we see in Delhi homes are mechanism failures — the handle that stops working, the footrest that won't retract, or the backrest that gets stuck at an angle. Electric recliners face additional issues: motor burnout, faulty wiring, dead remotes, and power supply failures. Many recliner owners in Delhi are told by general furniture repair services that recliners can't be fixed — but they can. Our technicians carry replacement parts for the most common recliner mechanisms and motors, and can source parts for any brand within 24–48 hours.",
    "Our recliner repair service covers all of Delhi NCR — Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad — with doorstep service starting at ₹1,499. Most mechanism repairs are completed in a single visit. Every repair includes a 6-month warranty on both parts and labour, giving you the confidence that your recliner will work smoothly long after we leave.",
  ],
  whyChoose: [
    {
      title: "Recliner Mechanism Specialists",
      description:
        "Our technicians are trained specifically in recliner mechanisms — manual lever, push-back, glider, wall-hugger, and power recliner systems. We understand how each mechanism works and how to fix it.",
    },
    {
      title: "All Brands & Types Covered",
      description:
        "La-Z-Boy, Durian, Godrej, Home Centre, IKEA, Urban Ladder, imported recliners, and unbranded local recliners — we repair them all with compatible parts.",
    },
    {
      title: "Parts in Stock",
      description:
        "We stock common recliner parts: springs, cables, actuators, motors, remotes, and power adapters. Uncommon parts are sourced within 24–48 hours from our supplier network.",
    },
    {
      title: "Upholstery + Mechanism in One Visit",
      description:
        "Need the mechanism fixed AND the upholstery replaced? We handle both in a single visit — saving you the cost and hassle of booking separate services.",
    },
    {
      title: "Doorstep Service from ₹1,499",
      description:
        "Complete recliner repair at your home anywhere in Delhi NCR. Starting at ₹1,499 for mechanism repairs. Written quote provided before work begins.",
    },
    {
      title: "6-Month Parts & Labour Warranty",
      description:
        "Every recliner repair comes with a 6-month warranty on both replacement parts and labour. Motor replacements include a full 6-month motor warranty.",
    },
  ],
  process: [
    {
      step: "Describe Your Recliner Issue",
      description:
        "Call +91 92179 99355 or WhatsApp us. Describe the problem — stuck footrest, motor noise, broken handle — and share your recliner's brand and type if known. We'll advise on likely repair scope.",
    },
    {
      step: "Technician Diagnoses at Your Home",
      description:
        "Our recliner specialist visits your home in Delhi NCR, fully diagnoses the mechanism, electrical, and upholstery condition, and provides a detailed repair quote.",
    },
    {
      step: "Expert Repair with Quality Parts",
      description:
        "Using compatible replacement parts and professional tools, we repair the mechanism, replace motors or cables, and fix upholstery — all at your doorstep.",
    },
    {
      step: "Test, Cleanup & Warranty",
      description:
        "We thoroughly test all recliner functions — recline, footrest, motor operation — ensure smooth operation, clean up, and hand over your 6-month warranty card.",
    },
  ],
  benefits: [
    "Manual recliner mechanism repair — lever, cable, spring, and hinge",
    "Electric recliner motor replacement and wiring repair",
    "Power adapter and remote control replacement",
    "Massage recliner function repair",
    "Recliner upholstery repair — leather, fabric, and rexine",
    "Recliner cushion foam replacement for seat and backrest",
    "Wall-hugger and glider recliner mechanism service",
    "All brands: La-Z-Boy, Durian, Godrej, Home Centre & imported",
    "Doorstep service across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad",
    "Starting at ₹1,499 with transparent pricing",
    "6-month warranty on parts and labour",
    "Same-day service available for urgent recliner repairs",
  ],
  priceTable: {
    heading: "Recliner Repair Cost in Delhi — 2026 Price Guide",
    rows: [
      { service: "Manual Mechanism Repair (cable, lever, spring)", price: "₹1,499–₹3,500" },
      { service: "Electric Motor Replacement", price: "₹3,000–₹6,000" },
      { service: "Power Adapter / Transformer Replacement", price: "₹1,500–₹2,500" },
      { service: "Remote Control Replacement", price: "₹800–₹1,500" },
      { service: "Recliner Wiring / Electrical Repair", price: "₹1,500–₹2,500" },
      { service: "Recliner Foam Replacement (per seat)", price: "₹1,200–₹2,500" },
      { service: "Recliner Upholstery / Fabric Change (per seat)", price: "₹2,000–₹4,500" },
      { service: "Leather Panel Repair / Replacement", price: "₹2,500–₹6,000" },
      { service: "Footrest Bracket / Hinge Repair", price: "₹1,200–₹2,500" },
      { service: "Combined Mechanism + Upholstery (bundled)", price: "₹4,000–₹9,000" },
      { service: "Doorstep Visit Charge", price: "₹99–₹199 (adjusted)" },
    ],
  },
  contentSections: [
    {
      heading: "Common Recliner Problems We Fix in Delhi NCR",
      body: [
        "Manual recliner issues typically involve the internal mechanism — springs that have lost tension, cables that have snapped or stretched, levers that have disconnected from the mechanism, or hinge points that have worn and now produce squeaking or grinding. Our repair involves replacing the specific failed component rather than the entire mechanism, which keeps costs down significantly. For push-back recliners that have lost their tension, we adjust or replace the resistance springs to restore the correct recline pressure.",
        "Electric and power recliner problems are often electrical in nature. The most common is motor burnout — the motor that powers the recline and footrest functions stops working, usually due to age, power surges (common in Delhi NCR), or overloading. We replace motors with compatible units that match the torque and speed specifications. Wiring faults, transformer failures, and remote control malfunctions are also common and are fixed during the same visit. For massage recliners with vibration or heating functions, we diagnose and repair the massage motor assemblies and heating elements.",
      ],
    },
    {
      heading: "Recliner Repair Cost in Delhi — What to Expect",
      body: [
        "Recliner repair pricing depends on whether the issue is mechanical, electrical, or upholstery-related. Mechanical repairs for manual recliners — spring replacement, cable replacement, lever fixing — start at ₹1,499 and typically don't exceed ₹3,000. Electric motor replacement costs ₹3,000–₹6,000 depending on the motor specifications and brand compatibility. Wiring repairs and power adapter replacements are ₹1,500–₹2,500.",
        "Recliner upholstery repair follows our standard sofa upholstery pricing — leather panel replacement from ₹3,500, full fabric change from ₹4,000. Cushion foam replacement in a recliner starts at ₹1,500 per cushion. For a combined repair — for example, mechanism fix plus leather restoration — we offer a bundled price that's lower than booking each service separately. Our free doorstep diagnosis ensures you understand exactly what's needed and what it costs before you commit to any repair work.",
      ],
    },
    {
      heading: "Why Recliner Repair Is Worth It — The Cost Comparison",
      body: [
        "A quality recliner in Delhi NCR costs ₹25,000–₹1,50,000 or more depending on the brand and features. When a mechanism fails or the motor burns out, many owners assume the recliner is done for. In reality, the recliner frame, cushioning, and upholstery are usually in perfectly good condition — it's just one component that has failed. Replacing that component costs ₹1,499–₹6,000, giving your recliner another 3–5 years of smooth operation.",
        "Consider a common scenario: a ₹60,000 La-Z-Boy power recliner with a burnt-out motor after 4 years of use. A new motor plus installation costs approximately ₹4,500 with FurniRevive — that's less than 8% of the original purchase price. The recliner's frame is built to last 15+ years, so investing in a motor replacement is clearly more sensible than buying a new recliner. We see this calculation play out with every recliner repair we do across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
      ],
    },
    {
      heading: "Recliner Brands We Repair in Delhi NCR — La-Z-Boy, Durian, IKEA & More",
      body: [
        "Every recliner brand uses a slightly different mechanism design, which is why brand-specific experience matters. La-Z-Boy is the world's most recognisable recliner brand — their mechanisms are well-documented and we carry compatible springs, cables, actuators, and motors for both their manual and power range. La-Z-Boy power recliners (PINNACLE, TALLADEGA series) use specific motor actuators that we source as genuine-compatible units. <a href=\"/durian-furniture-repair-delhi\">Durian recliner repair</a> covers their premium leather recliner range — Durian uses good-quality mechanisms that are highly repairable, with commonly replaced parts being cables and footrest springs. <a href=\"/godrej-furniture-repair-delhi\">Godrej recliner repair</a> addresses their INTERIO branded push-back and glider recliners, which use standard sinuous spring mechanisms and straightforward lever systems.",
        "<a href=\"/ikea-furniture-repair-delhi\">IKEA recliner repair</a> handles their POÄNG and STRANDMON series — while these are technically rocking chairs rather than full recliners, the mechanism servicing principles are similar. For Home Centre recliners, <a href=\"/home-centre-furniture-repair-delhi\">Home Centre furniture repair</a> applies to their imported and locally manufactured recliner range. Urban Ladder and <a href=\"/wooden-street-furniture-repair-delhi\">Wooden Street recliner repair</a> covers their modern sectional sofas with built-in recliner modules. For unbranded local market recliners — common in Delhi NCR furniture markets — we identify the mechanism type during inspection and use universal-compatible parts. All brand repairs are covered by our 6-month warranty. See <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> for motor-specific issues and <a href=\"/recliner-repair-cost-delhi\">recliner repair cost</a> for brand-wise pricing.",
      ],
    },
    {
      heading: "Electric vs Manual Recliner Repair — What's Different",
      body: [
        "Manual recliners and electric recliners share the same basic reclining motion but achieve it through fundamentally different mechanisms. Manual recliners use a cable-and-lever system: pulling the handle releases a spring-loaded latch that allows the backrest and footrest to recline; releasing the handle engages the latch to hold position; and pushing back or lifting the footrest returns the chair to upright. The most common failures in manual recliners are cable snap or stretch, lever disconnection, latch spring failure, and footrest return spring weakness. These are all straightforward mechanical repairs costing ₹1,499–₹3,000.",
        "Electric recliners use a DC motor connected to a linear actuator that physically pushes the backrest and footrest into position via a wireless remote or side panel control. Failure modes are: motor burnout (most common — the motor overheats or wears out, especially in Delhi's heat), wiring shorts (often from power fluctuations during monsoon season), transformer failure (the power supply box converts 230V to low-voltage DC for the motor), remote control sync loss, and actuator rod bending from overloading. Our technicians carry circuit testers, voltage meters, and compatible motors and transformers to diagnose and fix electrical recliners on-site. For complex electrical faults requiring specific parts, we diagnose on the first visit and complete the repair on the second visit with the sourced parts. See our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> page for complete electric recliner electrical repair details and pricing.",
      ],
    },
    {
      heading: "Recliner Repair vs Buying New — The Financial Case",
      body: [
        "The financial case for recliner repair is compelling. Quality recliners in Delhi NCR cost ₹25,000–₹1,50,000. A La-Z-Boy power recliner retails at ₹60,000–₹1,20,000. When a ₹4,500 motor replacement gives that recliner another 4–6 years of smooth operation, the ROI is over 1,000% on the repair cost versus full replacement. Even for softer brands — a ₹25,000 power recliner fixed for ₹3,000 — the repair ROI is enormous. Our blog on <a href=\"/blog/furniture-repair-vs-replace\">furniture repair vs replace</a> provides the full analytical framework, and <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying new</a> extends this to sofas and recliners specifically.",
        "The only scenario where replacement beats repair is when the recliner frame itself is structurally compromised — typically from a falling accident, flooding damage, or very advanced age (15+ years of heavy use). Even then, we assess whether frame reinforcement plus mechanism and upholstery refresh is cost-effective versus replacement. We always give honest recommendations — if a recliner isn't worth repairing, we tell you and help you understand what a quality replacement would offer. For cost benchmarking before your decision, our <a href=\"/recliner-repair-cost-delhi\">recliner repair cost guide</a>, <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a>, and <a href=\"/furniture-repair-price-guide-delhi\">master furniture repair price guide</a> give you complete pricing transparency.",
      ],
    },
    {
      heading: "Recliner Upholstery Repair — Leather, Fabric & Rexine",
      body: [
        "Recliner upholstery faces unique stresses compared to standard sofa upholstery — the mechanism means the fabric or leather at the back-seat and seat-footrest junctions is constantly flexing, which accelerates wear at these fold points. We see frequent tearing at the hinge area of the backrest, cracking on the inside of the footrest fold, and general leather wear on the armrests and headrest areas. Repairing these areas requires understanding the mechanism's range of motion so the repaired upholstery doesn't restrict the recline function or re-tear immediately.",
        "Our recliner upholstery technicians work alongside the mechanism specialist to ensure fabric patches, leather fills, and seam repairs are positioned to allow full mechanism movement. For leather recliners, our <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a> service handles crack filling, re-dyeing, and partial panel replacement with full colour matching. For fabric recliners, we source matching fabric or offer upgraded fabrics — velvet, microfibre, or premium faux leather — as part of a combined mechanism-plus-upholstery restoration. For full recliner cushion foam replacement, our <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a> and <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a> services integrate seamlessly into the recliner repair visit. For complete upholstery pricing: <a href=\"/sofa-upholstery-price-list-delhi\">sofa upholstery price list</a> and <a href=\"/leather-sofa-repair-cost-delhi\">leather repair cost guide</a>.",
      ],
    },
    {
      heading: "Complete Recliner Repair Resources — Links, Costs & Blogs",
      body: [
        "For comprehensive recliner and sofa repair resources: our <a href=\"/recliner-motor-repair-delhi\">recliner motor repair</a> page covers electrical and motor-specific repairs in detail. Our <a href=\"/sofa-repair-delhi\">sofa repair Delhi</a> hub is the authority resource for all sofa and recliner repair topics. For repair costs: <a href=\"/recliner-repair-cost-delhi\">recliner repair cost Delhi</a>, <a href=\"/sofa-repair-cost-delhi\">sofa repair cost</a>, <a href=\"/leather-sofa-repair-cost-delhi\">leather repair cost</a>, <a href=\"/sofa-upholstery-price-list-delhi\">upholstery price list</a>, <a href=\"/furniture-repair-price-guide-delhi\">master price guide</a>, <a href=\"/furniture-repair-price-list-delhi\">furniture repair price list</a>.",
        "South Delhi recliner repair by locality: <a href=\"/recliner-repair-panchsheel-park\">recliner repair Panchsheel Park</a>, <a href=\"/recliner-repair-gulmohar-park\">recliner repair Gulmohar Park</a>, <a href=\"/recliner-repair-safdarjung-enclave\">recliner repair Safdarjung Enclave</a>, <a href=\"/recliner-repair-east-of-kailash\">recliner repair East of Kailash</a>, <a href=\"/recliner-repair-new-friends-colony\">recliner repair New Friends Colony</a>. Full locality list: <a href=\"/areas-we-serve\">areas we serve</a>. NCR coverage: <a href=\"/sofa-repair-noida\">sofa repair Noida</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair Gurgaon</a>, <a href=\"/sofa-repair-faridabad\">sofa repair Faridabad</a>, <a href=\"/furniture-repair-gurgaon\">furniture repair Gurgaon</a>, <a href=\"/furniture-repair-noida\">furniture repair Noida</a>, <a href=\"/recliner-motor-repair-noida\">recliner motor repair in Noida</a>. Brand pages: <a href=\"/durian-furniture-repair-delhi\">Durian repair</a>, <a href=\"/godrej-furniture-repair-delhi\">Godrej repair</a>, <a href=\"/ikea-furniture-repair-delhi\">IKEA repair</a>, <a href=\"/home-centre-furniture-repair-delhi\">Home Centre repair</a>, <a href=\"/wooden-street-furniture-repair-delhi\">Wooden Street repair</a>, <a href=\"/urban-ladder-furniture-repair-delhi\">Urban Ladder repair</a>. Related repairs: <a href=\"/sofa-cushion-repair-delhi\">sofa cushion repair</a>, <a href=\"/sofa-foam-replacement-delhi\">foam replacement</a>, <a href=\"/leather-sofa-repair-delhi\">leather sofa repair</a>, <a href=\"/sofa-frame-repair-delhi\">frame repair</a>, <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/office-chair-repair-delhi\">office chair repair</a>. Decision blogs: <a href=\"/blog/furniture-repair-vs-replace\">repair vs replace</a>, <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair vs buying</a>, <a href=\"/blog/is-sofa-restoration-worth-it\">restoration worth it</a>, <a href=\"/blog/complete-guide-to-furniture-restoration-delhi\">complete restoration guide</a>. For recliner repair across the NCR, we also serve <a href=\"/sofa-repair-gurgaon\">recliner and sofa repair in Gurgaon</a> and <a href=\"/sofa-repair-faridabad\">recliner and sofa repair in Faridabad</a> with the same same-day doorstep guarantee.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can electric recliner motors be replaced?",
      answer:
        "Yes. We replace recliner motors with compatible units. We carry motors for common recliner brands in stock and source specific motors within 24–48 hours. Motor replacement includes wiring connections, testing, and a 6-month warranty.",
    },
    {
      question: "My recliner footrest is stuck — can you fix it?",
      answer:
        "Yes. A stuck footrest is usually caused by a broken spring, stretched cable, or jammed mechanism. Our technician diagnoses the specific cause and replaces the failed component. Most stuck footrest repairs take 1–2 hours.",
    },
    {
      question: "Do you repair La-Z-Boy recliners in Delhi?",
      answer:
        "Yes. We repair La-Z-Boy and all major recliner brands including Durian, Godrej, Home Centre, and IKEA recliners. We use compatible parts that meet the original specifications.",
    },
    {
      question: "How much does recliner mechanism repair cost?",
      answer:
        "Manual mechanism repairs start at ₹1,499. Electric motor replacement costs ₹3,000–₹6,000. Wiring and adapter repairs are ₹1,500–₹2,500. We provide a written quote after free doorstep diagnosis.",
    },
    {
      question: "Can you repair both the mechanism and upholstery in one visit?",
      answer:
        "Yes. We combine mechanism repair with upholstery work in a single visit. This is more efficient and saves you money compared to booking two separate service visits.",
    },
    {
      question: "Do you repair massage recliners?",
      answer:
        "Yes. We repair massage functions including vibration motors, heating elements, and control boards. For specialised massage chair brands, parts may need to be sourced which takes 24–48 hours.",
    },
    {
      question: "Is the warranty valid for recliner motor replacement?",
      answer:
        "Yes. Motor replacements come with a full 6-month warranty covering the motor unit and the installation work. If the motor fails within six months, we replace it free of charge.",
    },
    {
      question: "How quickly can you come for recliner repair in Delhi NCR?",
      answer:
        "We offer same-day visits for bookings placed before noon across Delhi NCR. Standard booking response is within 24 hours. For urgent repairs, call us and we'll try to accommodate same-day service.",
    },
    { question: "How much does recliner repair cost in Delhi?", answer: "Recliner repair in Delhi costs ₹1,499–₹6,000 depending on the fault. Manual recliner mechanism repair (broken cable, jammed lever): ₹1,499–₹3,500. Motorised recliner motor replacement: ₹2,500–₹6,000. Recliner foam replacement: ₹1,200–₹2,500 per seat. Recliner upholstery: ₹2,000–₹4,500 per seat. FurniRevive provides a written quote after free inspection before starting any work." },
    { question: "Can a recliner be repaired at home without taking it to a workshop?", answer: "Yes. FurniRevive repairs all types of recliners at your Delhi doorstep — no need to move the sofa anywhere. Our technicians arrive with replacement motors, cables, levers, foam, and fabric to complete the repair in your living room in 2–4 hours. Doorstep recliner repair available across all Delhi localities." },
    { question: "How long does recliner motor replacement take in Delhi?", answer: "Recliner motor replacement at your Delhi home takes 1–2 hours. Our technician disconnects the old motor, installs the replacement motor, connects the wiring, and tests full movement before leaving. We carry common recliner motors for same-day replacement across Delhi when booked before noon." },
    { question: "Which recliner brands do you repair in Delhi?", answer: "FurniRevive repairs all recliner brands available in Delhi — La-Z-Boy, Natuzzi, Ashley, HomeTown, Durian, Godrej, Urban Ladder, Pepperfry-sold recliners, and all Chinese-imported motorised recliners. Both manual pull-tab recliners and motorised power recliners are covered. We source OEM-compatible replacement motors and mechanisms for all brands." },
    { question: "Is it worth repairing a recliner or should I buy a new one?", answer: "In almost all cases, repairing a recliner is worth it. A new quality recliner in Delhi costs ₹25,000–₹2,00,000. Repairing the motor (₹2,500–₹6,000), mechanism (₹1,499–₹3,500), or full upholstery (₹4,000–₹8,000) saves 60–80% versus replacement. If the frame is intact — and it almost always is — repair is the smarter financial decision." },
    { question: "Do you repair recliners at home in Delhi without moving the sofa?", answer: "Yes. All recliner repairs are done at your Delhi doorstep — no need to transport the recliner to a workshop. Our technicians arrive with replacement motors, cables, levers, foam, and fabric. Most repairs are completed in 2–4 hours in your living room. Same-day service available when booked before noon." },
    { question: "How much does electric recliner motor replacement cost in Delhi?", answer: "Electric recliner motor replacement in Delhi costs ₹3,000–₹6,000 depending on motor specifications and brand. Our technicians diagnose the exact motor type during inspection and carry compatible replacement units for common brands (La-Z-Boy, Natuzzi, Ashley, Durian, locally imported motorised recliners). Includes wiring reconnection and full function test. 6-month motor warranty." },
    { question: "Can a jammed or stuck recliner footrest be fixed at home?", answer: "Yes. A stuck recliner footrest is usually caused by a failed spring, snapped cable, or jammed lever mechanism. FurniRevive diagnoses and fixes footrest issues at your Delhi home in 1–2 hours. Manual footrest repair costs ₹1,499–₹2,500. If the issue is electrical (power recliner footrest), wiring or actuator repair costs ₹1,500–₹3,000." },
    { question: "Do you repair La-Z-Boy recliners in Delhi?", answer: "Yes. FurniRevive specialises in La-Z-Boy recliner repair across Delhi NCR. We carry compatible springs, cables, actuators, and motors for La-Z-Boy's manual and power recliner range (PINNACLE, TALLADEGA, and other series). La-Z-Boy mechanism repair starts at ₹1,499. Motor replacement for La-Z-Boy power recliners costs ₹3,500–₹6,000. Free inspection and written quote before work begins." },
    { question: "Do you repair motorised massage recliners in Delhi?", answer: "Yes. FurniRevive repairs motorised and massage recliners at your Delhi doorstep. Common repairs: massage motor burnout (₹2,500–₹5,000), vibration unit replacement, heating element repair, wiring faults, and remote/control board issues. We work with all imported and domestic massage recliner brands. Diagnosis on first visit; parts sourced within 24–48 hours if not in stock." },
    { question: "What is the warranty on recliner repair in Delhi?", answer: "Every recliner repair by FurniRevive includes a written 6-month warranty covering both parts and labour. Motor replacements carry a full 6-month motor warranty. If any fault recurs within the warranty period, we return to your Delhi address and fix it free of charge. Warranty card is handed over on completion of the repair." },
    { question: "Do you cover South Delhi, Noida, and Gurgaon for recliner repair?", answer: "Yes. FurniRevive's recliner repair service covers all of Delhi NCR — South Delhi (GK, Saket, Vasant Kunj, Defence Colony), Dwarka, Rohini, East Delhi, Noida (all sectors), Gurgaon (all sectors and DLF phases), Ghaziabad, and Faridabad. Same-day slots for all areas when booked before noon. Call +91 92179 99355 to confirm availability at your specific location." },
    { question: "Can recliner upholstery and mechanism be repaired in the same visit?", answer: "Yes, and this is our most popular recliner service. Our technician handles the mechanical or electrical fault AND the upholstery repair in a single visit — saving you time and the cost of booking separately. Combined mechanism + upholstery packages start at ₹4,000. We carry foam, leather, fabric, and hardware on every visit. WhatsApp +91 92179 99355 with photos for a bundled quote." },
  ],
  showcaseImage: {
    heading: "Recliner Repair — Real Results",
    imageUrl: "https://hercules-cdn.com/file_r90po5MLAvi73rhfUYV1fjVg",
    altText: "Recliner sofa repair before and after in Delhi — mechanism and upholstery restored to like-new condition by FurniRevive",
    caption: "Recliner Repair Delhi | Motor & mechanism restoration | ₹1,499–₹7,000 | Single home visit",
  },
  relatedPages: [
    ...relatedExcluding("recliner-repair-delhi"),
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Sofa Cushion Repair Delhi", href: "/sofa-cushion-repair-delhi" },
    { label: "Recliner Repair West Delhi", href: "/recliner-repair-west-delhi" },
    { label: "Recliner Repair Vikaspuri", href: "/recliner-repair-vikaspuri" },
    { label: "Recliner Repair Janakpuri", href: "/recliner-repair-janakpuri" },
  ],
  keywords: [
    "recliner repair delhi",
    "recliner repair near me",
    "recliner sofa repair delhi",
    "recliner mechanism repair delhi",
    "recliner motor replacement delhi",
    "electric recliner repair delhi",
    "la-z-boy recliner repair delhi",
    "recliner repair cost delhi",
    "power recliner repair near me",
    "recliner spring repair delhi",
    "recliner upholstery repair delhi",
    "best recliner repair delhi NCR",
    "recliner repair home service delhi",
    "recliner sofa repair near me delhi",
    "electric recliner repair delhi ncr",
    "recliner foam replacement delhi",
    "recliner chair repair delhi",
  ],
};

export const PROBLEM_PRICE_PAGES_1: SeoPageData[] = [
  sofaCushionRepairDelhi,
  reclinerRepairDelhi,
];
