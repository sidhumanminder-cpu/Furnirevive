import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair in Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair in Delhi", href: "/furniture-repair-delhi" },
  { label: "Sofa Repair Near Me", href: "/sofa-repair-near-me" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Furniture Repair Price List", href: "/furniture-repair-price-list-delhi" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. WHY CHOOSE FURNIREVIVE
// ---------------------------------------------------------------------------
export const whyChooseFurnirevive: SeoPageData = {
  slug: "why-choose-furnirevive",
  title: "Furniture Repair Delhi | 10,000+ Trusted | Free Inspection | FurniRevive",
  metaDescription:
    "FurniRevive: Delhi NCR's most trusted furniture repair. 10,000+ repairs, 4.8-star rating, 6-month warranty & free doorstep inspection. Sofa repair from ₹999. Book now!",
  h1: "Why Choose FurniRevive — Delhi NCR's Most Trusted Furniture Repair Service",
  heroSubtitle:
    "After completing 10,000 furniture repairs across Delhi NCR, we have gathered hard data on what homeowners actually struggle with — unreliable appointments, mismatched skills, overpriced materials, and zero accountability. Here is how FurniRevive was engineered to solve each one.",
  showcaseImage: {
    heading: "Why Choose FurniRevive — Premium Furniture Repair Across Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional FurniRevive technician performing expert furniture repair in a luxury Delhi NCR home — FurniRevive",
    caption: "Why Choose FurniRevive | 10,000+ trusted repairs | 6-month warranty | Delhi NCR doorstep service",
  },
  quickAnswer:
    "FurniRevive is built around six measurable commitments: guaranteed show-up rate above 98%, specialist craftsman matching for every job category, factory-direct material sourcing at wholesale rates, video documentation of every repair, a 30-day post-repair follow-up call, and an 80%+ repeat-and-referral customer base across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Repairs start from ₹999 with a 6-month written warranty.",
  priceTable: {
    heading: "Furniture Repair Price Guide — FurniRevive Delhi NCR",
    rows: [
      { service: "Sofa Cushion / Foam Repair (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Repair", price: "₹2,999–₹12,000" },
      { service: "Recliner Mechanism / Motor Repair", price: "₹1,499–₹6,000" },
      { service: "Bed Frame / Joint Repair", price: "₹1,500–₹8,000" },
      { service: "Chair Repair", price: "₹500–₹3,000" },
      { service: "Wardrobe / Hinge / Shutter Repair", price: "₹800–₹4,000" },
      { service: "Wood Polishing (per piece)", price: "₹1,500–₹8,000" },
    ],
  },
  intro: [
    "We did not set out to become Delhi NCR's largest furniture repair company. We set out to fix the six problems homeowners told us made them dread calling a carpenter: missed appointments, wrong skill for the job, inflated material bills, no visual proof of the problem, no follow-up after the technician leaves, and no way to hold anyone accountable if things go south. Ten thousand repairs later, our operating model is the direct answer to every one of those complaints.",
    "This page is not a sales pitch — it is a transparent breakdown of the systems we built behind the scenes and why each one exists. If you have ever had a carpenter ghost you, use cheap foam that flattened in two months, or quote ₹3,000 on the phone only to demand ₹6,000 once the sofa was already open, the specifics below will explain how FurniRevive prevents that from happening.",
    "We serve every residential locality in Delhi, every sector in Noida and Greater Noida, all of Gurgaon including Sohna Road and New Gurgaon, Ghaziabad including Indirapuram and Vaishali, and every Faridabad sector. Our operations run on data, training, and accountability — not on the mood of one individual carpenter.",
  ],
  whyChoose: [
    {
      title: "We Actually Show Up — 98%+ Appointment Reliability",
      description:
        "Our internal data across 10,000 jobs shows a 98.4% on-time arrival rate. Every appointment carries a GPS-tracked ETA shared with you via WhatsApp. If a technician is delayed beyond 15 minutes, our dispatch team reassigns the job automatically so your day is never wasted.",
    },
    {
      title: "Specialist Matching — The Right Craftsman for Each Repair",
      description:
        "We do not send a generic handyman for every job. Upholstery work goes to a certified upholsterer. Recliner mechanisms go to an electro-mechanical specialist. Wood polishing goes to a finishing expert. Our dispatch algorithm matches job type to craftsman skill profile, ensuring 5+ years of category-specific experience on every visit.",
    },
    {
      title: "Factory-Direct Material Sourcing at Wholesale Cost",
      description:
        "Our 32D and 40D foam, upholstery fabrics, recliner motors, and wood adhesives come directly from manufacturing units — not retail hardware shops. Buying at wholesale scale means our material cost is 25–40% below what a local carpenter pays at the neighbourhood store, and those savings pass through to your final bill.",
    },
    {
      title: "Video Documentation — See the Problem Before We Fix It",
      description:
        "Before any repair begins, the technician records a short video showing the exact issue — sagging foam, broken spring, loose joint, torn fabric — and shares it with you on WhatsApp. You see what is wrong, approve the fix, and have a visual record for your own reference. No other service in Delhi NCR offers this transparency.",
    },
    {
      title: "30-Day Post-Repair Follow-Up Call",
      description:
        "Thirty days after your repair, our customer care team calls to check how the furniture is holding up. If anything feels off — a cushion settling unevenly, a creak developing, a hinge loosening — we schedule a complimentary adjustment visit before the issue worsens. This proactive check catches problems early.",
    },
    {
      title: "80%+ Repeat and Referral Business — Community Trust You Can Verify",
      description:
        "More than 8 out of every 10 jobs we complete come from a returning customer or someone they referred. This is not a marketing metric — it is a survival metric. When your growth depends on word-of-mouth in tight-knit Delhi NCR neighbourhoods, there is zero room for shoddy work or broken promises.",
    },
  ],
  process: [
    {
      step: "Describe Your Furniture Problem",
      description:
        "Call +91 92179 99355, WhatsApp photos, or fill the online form. Our coordinator identifies the repair category and matches you with the right specialist — not a general handyman.",
    },
    {
      step: "Receive a GPS-Tracked Appointment",
      description:
        "You get a confirmed time slot with the technician's name, photo, and live ETA. On the day, a WhatsApp notification tracks the specialist en route to your doorstep.",
    },
    {
      step: "Video-Documented Repair at Your Home",
      description:
        "The craftsman records the issue on video, explains the fix, and shares it with you before starting. The repair is completed on-site with factory-sourced materials and specialist tools.",
    },
    {
      step: "Warranty Card + 30-Day Follow-Up Scheduled",
      description:
        "After you approve the finished work, you receive a written warranty card and a 30-day callback is automatically scheduled. Payment is collected only after your sign-off.",
    },
  ],
  benefits: [
    "98.4% on-time appointment reliability — GPS-tracked technician ETA",
    "Specialist matching: upholsterer, polisher, or mechanic assigned per job type",
    "Factory-direct foam, fabric, and hardware at 25–40% below retail",
    "WhatsApp video of the problem shared before any work begins",
    "30-day post-repair follow-up call with free adjustment if needed",
    "80%+ repeat and referral rate — community-verified trust",
    "6-month written warranty backed by a registered company",
    "Free doorstep inspection and itemised written quote",
    "Same-day dispatch for bookings placed before noon",
    "All furniture types: sofa, bed, chair, table, wardrobe, recliner",
    "All materials: fabric, leather, rexine, solid wood, engineered wood, metal",
    "Payment only after you sign off — UPI, cash, or bank transfer",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Trust Signals That Actually Matter in Delhi NCR",
      body: [
        "Most furniture repair advertising in Delhi NCR centres on vague claims: \"experienced carpenters,\" \"quality work,\" \"best prices.\" None of these are verifiable. After speaking with thousands of customers who switched to FurniRevive from local carpenters, we identified the trust signals that actually predict a good outcome: a trackable appointment system, a written quote that matches the final bill, a warranty you can enforce without chasing the technician, and documentation you can refer back to. Everything else is noise. Our <a href=\"/furniture-repair-home-service-delhi\">furniture repair home service</a> and <a href=\"/doorstep-furniture-repair-delhi\">doorstep furniture repair</a> are built on these verifiable signals rather than subjective promises.",
        "Here is a practical test you can apply to any furniture repair service: ask them to send the technician's name and arrival ETA in writing before the visit. Ask for an itemised quote on paper before work starts. Ask whether the warranty is documented or verbal. Ask if they follow up after the repair. If any of these requests make the service hesitant, that tells you everything. FurniRevive passes every one of these tests as standard procedure on every job — from a ₹499 hinge replacement to a ₹15,000 full <a href=\"/sofa-upholstery-delhi\">sofa upholstery restoration</a>. Our <a href=\"/furniture-repair-warranty-delhi\">warranty page</a> details the documentation you receive, and our <a href=\"/furniture-repair-price-list-delhi\">published price list</a> shows you ranges before you even call.",
      ],
    },
    {
      heading: "Why DIY Furniture Repair Usually Makes Things Worse in Delhi NCR",
      body: [
        "YouTube tutorials and hardware store advice make furniture repair look simple. In reality, DIY attempts on sofas, recliners, and wooden furniture in Delhi NCR homes frequently create bigger problems. We see the aftermath weekly: a homeowner tried to re-glue a dining chair with the wrong adhesive and now the joint is contaminated and harder to bond properly. Someone bought 18D foam from a local market and restuffed their sofa — it flattened again in eight weeks. A recliner owner replaced the motor themselves but used an incompatible voltage rating, burning out the control board. Each of these scenarios ends up costing more to fix than the original repair would have.",
        "The issue is not skill — it is materials and diagnosis. Furniture repair requires knowing which adhesive suits which wood grain, which foam density matches which usage pattern, and which mechanism part is actually causing the symptom. A <a href=\"/sofa-foam-replacement-delhi\">sofa foam replacement</a> done with the right 32D or 40D foam lasts five to eight years; the same job with market-bought 18D foam fails in months. A <a href=\"/recliner-repair-delhi\">recliner motor replacement</a> requires matching the exact torque spec to your recliner model. A <a href=\"/wooden-furniture-repair-delhi\">wooden furniture joint repair</a> needs surface preparation and clamping pressure that household tools cannot deliver. If you have already attempted a DIY fix that did not hold, our technicians can still salvage the situation — but the cost is typically 30–50% higher than if we had been called first. Read our blog on <a href=\"/blog/furniture-repair-vs-replace\">when repair makes sense versus replacement</a> for an honest breakdown.",
      ],
    },
    {
      heading: "The True Cost of Waiting — How Small Furniture Problems Compound",
      body: [
        "One pattern we see repeatedly across Delhi NCR households: a small furniture issue is ignored for months, and by the time the owner calls us, the repair scope has doubled or tripled. A loose sofa frame joint that costs ₹800 to re-glue today becomes a cracked frame rail that costs ₹3,500 to reinforce six months later. A single broken <a href=\"/sofa-spring-repair-delhi\">sofa spring</a> that costs ₹1,200 to replace puts uneven stress on adjacent springs — wait too long, and the entire spring bed needs replacement at ₹3,000–₹5,000. A minor fabric tear at the seam that costs ₹500 to stitch widens with use until the entire panel needs replacing at ₹2,000–₹4,000.",
        "This compounding effect is especially visible in <a href=\"/bed-repair-delhi\">bed frames</a> and <a href=\"/wardrobe-repair-delhi\">wardrobes</a>. A single loose hinge on a wardrobe door, if left unaddressed, causes the door to sag and grind against the frame — eventually warping the door panel and damaging the cabinet structure. A bed with one weakened slat distributes weight unevenly, cracking adjacent slats over time. The bottom line: every week you delay a repair, the eventual cost rises. FurniRevive's free inspection exists precisely for this reason — get a professional assessment early, understand the scope, and fix it before it escalates. Our <a href=\"/furniture-repair-price-list-delhi\">price list</a> shows you what early intervention costs versus full restoration. For sofas specifically, our guide on <a href=\"/blog/is-sofa-restoration-worth-it\">whether restoration is worthwhile</a> breaks down the timeline of deterioration and optimal intervention points.",
      ],
    },
    {
      heading: "How FurniRevive Selects and Trains Its Craftsmen",
      body: [
        "Our hiring process rejects over 80% of applicants. A candidate must demonstrate at least five years of verifiable hands-on work in a specific furniture discipline — we do not hire generalists. The evaluation includes a practical skill test on live furniture (not a written exam), a background and identity verification, and a two-week supervised probation period working alongside senior craftsmen. Only after clearing all three stages does a technician receive FurniRevive jobs independently.",
        "Once on the team, craftsmen receive ongoing skill updates: new <a href=\"/leather-sofa-repair-delhi\">leather repair techniques</a>, updated <a href=\"/recliner-repair-delhi\">recliner mechanism models</a>, fresh upholstery material handling for newer fabrics. We run monthly quality audits — randomly selecting completed jobs and inspecting them unannounced. Technicians whose audit scores drop below threshold receive retraining before resuming independent work. This is why our warranty claim rate stays below 3%: the training and accountability loop catches issues before they reach your home. For a full overview of our <a href=\"/furniture-repair-delhi\">furniture repair capabilities across Delhi</a>, our <a href=\"/chair-repair-delhi\">chair repair specialists</a>, and our <a href=\"/sofa-repair-delhi\">sofa repair team structure</a>, explore the linked pages.",
      ],
    },
    {
      heading: "Complete Service Network — Every Furniture Type, Every NCR City",
      body: [
        "Our specialist network covers the full Delhi NCR region across every furniture category. Sofa services: <a href=\"/sofa-repair-delhi\">sofa repair in Delhi</a>, <a href=\"/sofa-repair-gurgaon\">sofa repair in Gurgaon</a>, <a href=\"/sofa-repair-noida\">sofa repair in Noida</a>, <a href=\"/sofa-foam-replacement-delhi\">foam replacement</a>, <a href=\"/sofa-upholstery-delhi\">full upholstery</a>, <a href=\"/leather-sofa-repair-delhi\">leather sofa restoration</a>, and <a href=\"/sofa-spring-repair-delhi\">spring system repair</a>. Seating: <a href=\"/chair-repair-delhi\">chair repair Delhi</a>, <a href=\"/wooden-chair-repair-delhi\">wooden chair repair</a>, and <a href=\"/office-chair-repair-delhi\">office chair repair</a>. Bedroom and storage: <a href=\"/bed-repair-delhi\">bed repair</a>, <a href=\"/wardrobe-repair-delhi\">wardrobe repair</a>, <a href=\"/wooden-furniture-repair-delhi\">wooden furniture repair</a>, and <a href=\"/dining-table-repair-delhi\">dining table repair</a>.",
        "Convenience services: <a href=\"/doorstep-furniture-repair-delhi\">doorstep furniture repair</a>, <a href=\"/furniture-repair-home-service-delhi\">furniture repair home service</a>, <a href=\"/carpenter-home-service-delhi\">carpenter home service</a>, and <a href=\"/same-day-furniture-repair-delhi\">same-day furniture repair</a>. Decision-support resources: our blog on <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair versus buying new</a> helps with the financial calculation, <a href=\"/blog/furniture-repair-vs-replace\">furniture repair versus replacement</a> covers all categories, <a href=\"/blog/is-sofa-restoration-worth-it\">is sofa restoration worth it</a> provides ROI analysis, and <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam lasts</a> sets realistic material expectations. Check our <a href=\"/areas-we-serve\">areas we serve</a> page for full geographic coverage details.",
      ],
    },
  ],
  faqs: [
    {
      question: "How does FurniRevive guarantee the technician will actually arrive on time?",
      answer:
        "Every booking triggers a GPS-tracked dispatch. You receive the technician's name, photo, and live ETA on WhatsApp. If delay exceeds 15 minutes, our system auto-reassigns the job to the nearest available specialist. Our on-time rate across 10,000 jobs is 98.4%.",
    },
    {
      question: "What happens during the 30-day follow-up call?",
      answer:
        "Our customer care team calls you exactly 30 days after repair completion to ask how the furniture is holding up. If you report any settling, creaking, or loosening, we schedule a free adjustment visit within 48 hours — at no charge, covered under our proactive care policy.",
    },
    {
      question: "Why does specialist matching matter for my furniture repair?",
      answer:
        "A generalist carpenter may know basic woodwork but lack the specific knowledge for recliner motors, leather conditioning, or spring tensioning. Our system assigns upholstery work to upholsterers, mechanism jobs to electro-mechanical technicians, and polishing to finishing experts — each with 5+ years in that discipline.",
    },
    {
      question: "How are FurniRevive's material costs lower than a local carpenter's?",
      answer:
        "We purchase foam, fabric, adhesives, and hardware directly from manufacturing units in bulk. A local carpenter buys small quantities from retail hardware shops at marked-up prices. Our factory-direct procurement saves 25–40%, and those savings are reflected in your quoted price.",
    },
    {
      question: "Can I see the video documentation before approving the repair?",
      answer:
        "Yes. Before any work starts, the technician records a WhatsApp video showing the exact issue — exposed springs, compressed foam, cracked joint, torn seam. You see the problem, understand the proposed fix, and give verbal or text approval before the craftsman picks up a tool.",
    },
    {
      question: "What does 80% repeat-and-referral business actually mean for me?",
      answer:
        "It means 8 out of 10 customers either return for another repair or send a friend or family member. When a business grows primarily through word-of-mouth in local neighbourhoods, any drop in quality is immediately visible in the booking pipeline. This keeps our standards self-enforcing.",
    },
    {
      question: "Is FurniRevive suitable for expensive or imported furniture?",
      answer:
        "Yes. Our specialist matching system assigns premium-furniture-trained technicians to luxury and imported pieces. We handle Italian leather sofas, European recliners, solid teak antiques, and designer brand furniture with brand-appropriate materials and techniques.",
    },
    {
      question: "What if I am not satisfied with the repair quality?",
      answer:
        "Payment is collected only after you inspect and approve the finished work. If the result does not meet your expectations, the technician will redo the job on the spot. If a resolution cannot be reached immediately, our customer care escalation team schedules a senior craftsman visit within 24 hours.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("why-choose-furnirevive"),
    { label: "Furniture Repair Warranty Delhi", href: "/furniture-repair-warranty-delhi" },
    { label: "Sofa Repair Reviews Delhi", href: "/sofa-repair-reviews-delhi" },
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: "Sofa Repair Cost Delhi", href: "/sofa-repair-cost-delhi" },
    { label: "Furniture Repair Price Guide Delhi", href: "/furniture-repair-price-guide-delhi" },
  ],
  keywords: [
    "why choose furnirevive",
    "best furniture repair delhi",
    "trusted furniture repair near me",
    "furniture repair with warranty delhi",
    "best sofa repair service delhi NCR",
    "professional furniture repair delhi",
    "reliable carpenter delhi NCR",
    "furniture repair company delhi",
    "top rated furniture repair near me",
    "furniture repair reviews delhi",
  ],
};

// ---------------------------------------------------------------------------
// 2. FURNITURE REPAIR WARRANTY DELHI
// ---------------------------------------------------------------------------
export const furnitureRepairWarrantyDelhi: SeoPageData = {
  slug: "furniture-repair-warranty-delhi",
  title: "Furniture Repair Warranty Delhi | 6-Month Free Returns | ₹999 Onwards | FurniRevive",
  metaDescription:
    "FurniRevive offers a 6-month written warranty on all furniture repairs in Delhi NCR. Same issue returns? We fix it free. Sofa repair from ₹999. Book now!",
  h1: "Furniture Repair with 6-Month Warranty — FurniRevive Delhi NCR",
  heroSubtitle:
    "Before you confirm any furniture repair booking in Delhi NCR, there are seven warranty questions you should ask. Most services cannot answer even three of them. Here is what a genuine furniture repair warranty looks like — and how to verify you are actually covered.",
  showcaseImage: {
    heading: "6-Month Warranty on Every Furniture Repair — FurniRevive Delhi NCR",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "FurniRevive technician handing over a 6-month warranty card after completing furniture repair in a Delhi home — FurniRevive",
    caption: "Furniture Repair Warranty Delhi | 6-month written guarantee | Free return visits | FurniRevive",
  },
  quickAnswer:
    "FurniRevive issues a written warranty card with QR-code verification on every repair. Warranty return visits are scheduled within 24 hours of your call. Coverage includes both materials and labour at zero cost. The warranty remains valid even if you relocate within Delhi NCR. Your warranty record is stored digitally under your name. And there are no voiding conditions — we do not blame usage or deny claims. Sofa repairs start from ₹999.",
  priceTable: {
    heading: "Furniture Repair Price Guide — With 6-Month Warranty",
    rows: [
      { service: "Sofa Cushion / Foam Repair (per seat)", price: "₹999–₹2,500" },
      { service: "Sofa Reupholstery (per seat)", price: "₹3,000–₹15,000" },
      { service: "Leather Sofa Repair", price: "₹2,999–₹12,000" },
      { service: "Recliner Mechanism / Motor Repair", price: "₹1,499–₹6,000" },
      { service: "Bed / Chair / Table Repair", price: "₹500–₹8,000" },
      { service: "Wardrobe / Cabinet Repair", price: "₹800–₹4,000" },
      { service: "Warranty Return Visit", price: "₹0 — Free" },
      { service: "Doorstep Inspection & Quote", price: "₹0 — Free" },
    ],
  },
  intro: [
    "Ask any Delhi NCR homeowner who has tried to enforce a verbal warranty from a local carpenter, and you will hear the same story: the number is unreachable, the person claims the damage is \"your fault,\" or they simply never return the call. A warranty that exists only as a spoken promise at the moment of payment is not a warranty — it is a hope. And hope is not a strategy when your ₹60,000 sofa starts sagging again three months after a supposedly professional repair.",
    "This page is written from the customer's perspective: what questions should you ask any furniture repair service before you hand over money, what answers reveal whether the warranty is real or performative, and how FurniRevive's warranty system works at a mechanical level — from the QR-coded card you receive to the digital record stored under your name to the 24-hour return-visit scheduling guarantee.",
    "We built this warranty infrastructure because Delhi NCR deserved it. Over 10,000 families across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad have used our warranty-backed repairs. Our claim rate is under 3% — not because we reject claims, but because the quality of materials and workmanship rarely requires a return visit in the first place.",
  ],
  whyChoose: [
    {
      title: "Written Warranty Card with QR Code Verification",
      description:
        "Every warranty card carries a unique QR code linked to your repair record. Scan it anytime to view the repair date, work description, materials used, technician name, and remaining warranty duration. No paper trail to lose — the QR links to a permanent digital record.",
    },
    {
      title: "Warranty Return Visits Scheduled Within 24 Hours",
      description:
        "Report a warranty issue and our system schedules a return visit within 24 hours — not 48, not \"at our earliest convenience.\" Faster resolution means less disruption to your daily life and faster restoration of your furniture's function.",
    },
    {
      title: "Warranty Covers Materials AND Labour — Zero Exceptions",
      description:
        "Some services cover labour but charge for materials on a warranty visit, or vice versa. FurniRevive's warranty covers both — new foam, replacement fabric, adhesive, springs, hardware — plus the craftsman's time. Your out-of-pocket cost for a valid claim is exactly zero.",
    },
    {
      title: "Multi-City Validity — Warranty Travels When You Move",
      description:
        "Relocated from Noida to Gurgaon? Shifted from South Delhi to Dwarka? Your warranty follows you across all Delhi NCR cities. Simply call with your QR code or repair details, and we schedule the return visit at your new address — same terms, same zero cost.",
    },
    {
      title: "Digital Warranty Record Stored Under Your Name",
      description:
        "Your warranty is not a slip of paper that can be lost in a drawer. It is stored digitally in our system under your phone number and name. Even if you misplace the physical card, we can pull up your complete repair history in seconds and honour the warranty immediately.",
    },
    {
      title: "No Warranty Voiding Conditions — We Stand Behind Our Work",
      description:
        "We do not void warranties for \"normal usage,\" \"heavy usage,\" or \"improper handling.\" If the same issue we repaired recurs within 6 months, it means our repair did not hold — and that is our responsibility to fix, not yours to argue about.",
    },
  ],
  process: [
    {
      step: "Receive Your QR-Coded Warranty Card",
      description:
        "The moment the repair is signed off, you receive a physical warranty card with a unique QR code. Scan it to confirm your repair record is live in our system — date, work description, materials, and 6-month coverage window all visible instantly.",
    },
    {
      step: "Report the Issue — Phone, WhatsApp, or QR Scan",
      description:
        "If the repaired problem recurs, contact us via call (+91 92179 99355), WhatsApp message, or by scanning the QR code on your warranty card which opens a pre-filled claim form. No lengthy explanations needed.",
    },
    {
      step: "Return Visit Confirmed Within 24 Hours",
      description:
        "Our warranty desk verifies your record and schedules a craftsman visit within 24 hours. You receive a confirmed time slot with the assigned technician's name and live ETA — identical to the original booking experience.",
    },
    {
      step: "Free Re-Repair — Materials and Labour Included",
      description:
        "The technician arrives, inspects, and resolves the issue using fresh materials if required. You pay nothing — no inspection fee, no material charge, no labour cost. The remaining warranty period continues from your original repair date.",
    },
  ],
  benefits: [
    "QR-coded warranty card — scan to verify your coverage instantly",
    "24-hour return visit scheduling — fastest warranty response in Delhi NCR",
    "Full materials and labour coverage — zero out-of-pocket on valid claims",
    "Multi-city validity — warranty follows you if you move within NCR",
    "Digital record under your name — never lose warranty proof again",
    "No voiding conditions — we never blame usage or deny responsibility",
    "Under 3% claim rate — quality work means you rarely need to claim",
    "Company-backed — not dependent on one technician's availability",
    "Covers all furniture: sofa, recliner, bed, chair, wardrobe, table",
    "Covers all materials: foam, fabric, leather, wood, metal, mechanism",
    "Pre-filled claim form via QR scan — file a claim in under 2 minutes",
    "Warranty repair carries coverage for the remainder of original period",
  ],
  contentSections: [
    {
      heading: "What a Real Furniture Repair Warranty Looks Like vs Verbal Promises",
      body: [
        "A verbal promise from a local carpenter in Delhi NCR costs nothing to make and nothing to break. It is not documented, not time-stamped, and not enforceable. When the repaired joint loosens again in three months, you are left chasing a phone number that may never pick up. A real warranty is a system — documented at the time of service, stored independently of the technician, verifiable by the customer at any time, and backed by a company with a permanent support channel. FurniRevive's warranty card is a physical document with a printed QR code that links directly to your digital repair record. Scan it, and you see the repair date, materials used, technician assigned, and exact warranty expiry. This record exists regardless of whether the technician is still with our team or not.",
        "Contrast this with the typical Delhi NCR furniture repair experience: the carpenter finishes the job, takes payment, says \"call me if there's any problem,\" and leaves. Three months later when the <a href=\"/sofa-foam-replacement-delhi\">foam sags again</a> or the <a href=\"/sofa-spring-repair-delhi\">spring pokes through</a>, you call — and either the number is switched off, the carpenter claims it is normal wear, or he quotes a fee for the \"new\" repair. FurniRevive's QR-verified system makes this scenario impossible. Your record is in our database, your claim is logged the moment you contact us, and a return visit is confirmed within 24 hours. There is no room for denial because the documentation is mutual — you have it, and we have it. Our <a href=\"/furniture-repair-delhi\">furniture repair service page</a> and <a href=\"/sofa-repair-delhi\">sofa repair page</a> explain how the warranty integrates with every service category.",
      ],
    },
    {
      heading: "How to Make a Warranty Claim in Under 2 Minutes",
      body: [
        "We designed the claims process to take less time than ordering food delivery. Option one: scan the QR code on your warranty card — it opens a pre-filled form with your repair details already populated; add a one-line description of the recurring issue and tap submit. Option two: WhatsApp a photo of the problem to +91 92179 99355 along with your name — our system matches you to your repair record automatically. Option three: call the same number and tell the support agent your name; they pull up your history within seconds. All three paths converge at the same outcome: a confirmed return visit within 24 hours.",
        "Once your claim is logged, the system assigns a qualified craftsman (the original technician if available, or an equally skilled specialist). You receive a time slot, a technician name, and a live ETA — the same experience as your original booking. The return repair is completed at your doorstep with zero charges. If new foam, hardware, fabric, or adhesive is required, it is supplied at FurniRevive's cost. Our <a href=\"/doorstep-furniture-repair-delhi\">doorstep furniture repair</a> and <a href=\"/furniture-repair-home-service-delhi\">furniture repair home service</a> operate identically for warranty visits as for paid visits — same professionalism, same cleanup, same sign-off process. For reference on standard repair pricing, our <a href=\"/furniture-repair-price-list-delhi\">price list</a> and <a href=\"/furniture-repair-cost-delhi\">cost guide</a> show what the original services include.",
      ],
    },
    {
      heading: "Why FurniRevive's Warranty Claim Rate Is Under 3%",
      body: [
        "A low warranty claim rate can mean two things: either the company rejects most claims, or the repairs genuinely hold up. In FurniRevive's case, it is the latter — and the reasons are material. We use 32D and 40D foam exclusively; these densities are rated for 5–8 years of daily use. We source upholstery fabric tested for 15,000+ Martindale rub cycles. Our wood adhesives are industrial-grade polyurethane bonds rated for 150+ kg shear stress. Our <a href=\"/recliner-repair-delhi\">recliner mechanism parts</a> come from OEM-certified suppliers with their own manufacturer warranties. When the raw materials are built to outlast the warranty period by a factor of ten, recurrence within six months is statistically rare.",
        "The second factor is craftsman skill. A <a href=\"/leather-sofa-repair-delhi\">leather restoration</a> done by a trained leather specialist will not crack again in three months because the technique — surface prep, filler application, colour matching, sealant layering — was executed correctly the first time. A <a href=\"/bed-repair-delhi\">bed frame joint repair</a> done with proper clamping pressure and curing time will not loosen because the bond achieved full strength before the bed was put back into use. A <a href=\"/wardrobe-repair-delhi\">wardrobe hinge replacement</a> using the correct screw gauge and pre-drilled pilot holes will not strip out because the fastener seats properly in the substrate. Quality at the point of repair is the best warranty prevention. Read our blog on <a href=\"/blog/how-long-does-sofa-foam-last\">how long sofa foam actually lasts</a> for the technical factors behind durability, and our guide on <a href=\"/blog/is-sofa-restoration-worth-it\">whether full restoration is worthwhile</a> for context on material quality and longevity.",
      ],
    },
    {
      heading: "Comparing Furniture Repair Warranties — FurniRevive vs Local Carpenters vs Branded Services",
      body: [
        "To help you evaluate, here is a direct comparison across the three most common furniture repair options in Delhi NCR. Local carpenters: warranty is verbal, typically unlimited in promise but unenforceable in practice; no documentation; no return visit guarantee; no dedicated support channel; claim success rate is anecdotal but widely reported as poor. Branded online services (aggregator platforms): warranty is 7–30 days typically; documented in app; return visit scheduling takes 3–7 days; materials may or may not be covered; warranty often voided for \"customer misuse.\" FurniRevive: 6-month written warranty with QR verification; 24-hour return visit scheduling; full materials and labour coverage; no voiding conditions; digital record stored permanently; multi-city validity within NCR.",
        "The gap is clearest in three dimensions: duration (6 months vs 7–30 days), speed of resolution (24 hours vs 3–7 days), and scope of coverage (materials + labour vs labour only or partial). For homeowners investing in quality <a href=\"/sofa-upholstery-delhi\">sofa upholstery</a>, <a href=\"/wooden-furniture-repair-delhi\">wooden furniture restoration</a>, or <a href=\"/chair-repair-delhi\">chair repair</a>, the warranty difference translates directly to risk. A ₹7,000 upholstery job with a 6-month full-coverage warranty is a safer investment than the same job at ₹5,500 with a 15-day labour-only guarantee. Our <a href=\"/why-choose-furnirevive\">why choose FurniRevive page</a> expands on the overall service comparison, and the <a href=\"/furniture-repair-price-guide-delhi\">furniture repair price guide</a> provides cost context. Also explore our blog comparing <a href=\"/blog/sofa-repair-vs-buy-new-sofa\">sofa repair versus buying a new sofa</a> and <a href=\"/blog/furniture-repair-vs-replace\">repair versus replacement across all categories</a> for the financial perspective.",
      ],
    },
  ],
  faqs: [
    {
      question: "What does the 6-month warranty cover?",
      answer:
        "The warranty covers the recurrence of the same issue that was repaired — foam sagging, seam opening, joint loosening, spring failure, mechanism failure, polish peeling, etc. It does not cover new damage from accidents or misuse.",
    },
    {
      question: "Is the warranty really free?",
      answer:
        "Yes. Warranty return visits, inspection, materials, and labour are completely free. There are zero charges of any kind for genuine warranty claims within the 6-month period.",
    },
    {
      question: "How do I make a warranty claim?",
      answer:
        "Call +91 92179 99355 or WhatsApp us with your name, repair date, and the issue. We schedule a free return visit within 48 hours. No warranty card needed — we can look up your record in our system.",
    },
    {
      question: "Is the warranty valid if I move to a different address in Delhi NCR?",
      answer:
        "The warranty is valid at the original service address. If you've moved within Delhi NCR, contact us and we'll accommodate warranty visits at your new address on a case-by-case basis.",
    },
    {
      question: "What if my original technician isn't available for the warranty visit?",
      answer:
        "Our warranty is company-backed, not technician-dependent. If the original technician is unavailable, another equally qualified craftsman handles the warranty repair.",
    },
    {
      question: "Do other furniture repair services in Delhi offer warranties?",
      answer:
        "Very few organised services offer documented warranties. Local carpenters may verbally promise warranty, but enforcing it is difficult. FurniRevive's written warranty with a dedicated support team is what sets us apart.",
    },
    {
      question: "What is your warranty claim rate?",
      answer:
        "Our warranty claim rate is below 3%, reflecting the quality of materials and craftsmanship in our repairs. Over 97% of our repairs last well beyond the 6-month warranty period.",
    },
    {
      question: "Does the warranty cover cosmetic issues?",
      answer:
        "The warranty covers the recurrence of the repaired issue. If we polished your table and the polish peels within 6 months, it's covered. Normal wear from daily use (like minor surface scratches) is not covered.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-warranty-delhi"),
    { label: "Why Choose FurniRevive", href: "/why-choose-furnirevive" },
    { label: "Sofa Repair Reviews Delhi", href: "/sofa-repair-reviews-delhi" },
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: "Sofa Repair Cost Delhi", href: "/sofa-repair-cost-delhi" },
    { label: "Furniture Repair Price Guide Delhi", href: "/furniture-repair-price-guide-delhi" },
  ],
  keywords: [
    "furniture repair warranty delhi",
    "furniture repair with guarantee",
    "warranty furniture repair near me",
    "best furniture repair with warranty delhi NCR",
    "sofa repair warranty delhi",
    "furniture repair guarantee delhi",
    "trusted furniture repair delhi",
    "furniture repair service warranty",
  ],
};

export const TRUST_PAGES: SeoPageData[] = [
  whyChooseFurnirevive,
  furnitureRepairWarrantyDelhi,
];
