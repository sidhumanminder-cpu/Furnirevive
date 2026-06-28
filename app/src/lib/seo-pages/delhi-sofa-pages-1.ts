import type { SeoPageData } from "@/lib/seo-constants.ts";

// ---------------------------------------------------------------------------
// Shared related-links helper
// ---------------------------------------------------------------------------
const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
  { label: "Recliner Sofa Repair Delhi", href: "/recliner-sofa-repair-delhi" },
  { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ---------------------------------------------------------------------------
// 1. SOFA REPAIR IN DWARKA
// ---------------------------------------------------------------------------
export const sofaRepairDwarka: SeoPageData = {
  slug: "sofa-repair-dwarka",
  title: "Sofa Repair in Dwarka Delhi | ₹800–₹4,500 | FurniRevive",
  metaDescription:
    "Expert sofa repair in Dwarka Delhi — all sectors 1–28, Dwarka Mor, Palam & Najafgarh. Foam replacement, reupholstery & spring repair. Doorstep service. Starting ₹800.",
  h1: "Sofa Repair in Dwarka — Doorstep Service Across All 28 Sectors",
  heroSubtitle:
    "Professional sofa repair at your doorstep in Dwarka Sectors 1–28, Dwarka Mor, Palam, Palam Extension, Uttam Nagar, Kakrola, and Najafgarh. Foam replacement, reupholstery, spring repair, and recliner fixing with a 6-month warranty starting at ₹800.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Dwarka Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a fabric sofa in a Dwarka Delhi home — foam replacement and upholstery service by FurniRevive",
    caption: "Sofa Repair in Dwarka | All 28 sectors covered | Foam & spring repair | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Dwarka costs ₹800–₹4,500 depending on the repair type. Foam replacement starts at ₹999 per cushion, spring repair at ₹1,500, and full reupholstery at ₹3,000–₹15,000 per seat. FurniRevive provides same-day doorstep service across all Dwarka sectors 1–28, Dwarka Mor, Palam, and Najafgarh — no workshop visit needed.",
  intro: [
    "Dwarka is Delhi's most expansive planned sub-city, stretching from the Dwarka Sector 21 metro terminus all the way to the Najafgarh wetlands. Across 28 sectors, Palam Extension, Kakrola, and Dwarka Mor, hundreds of thousands of families live in DDA flats, CGHS co-operative societies, and independent builder floors. The living-room sofa in every one of these homes is the most used piece of furniture — and after three to five years of daily use, cushions flatten, upholstery tears at the armrests, springs lose their tension, and frame joints creak. That is exactly when FurniRevive arrives at your doorstep.",
    "Our sofa repair technicians serve the entire Dwarka region, from the busy Sector 6 Market area and the residential lanes off Sector 10 Market to the quieter sectors near Bharat Vandana Park and the newer developments along the Dwarka Expressway. We are equally familiar with the compact DDA Type-III flats of Sector 12 and the spacious independent floors near NSIT and the DDA Sports Complex. Whatever your address, we reach you with all tools, foam grades, fabric swatches, and spare parts needed to complete the repair in a single visit.",
    "With sofa repair costs ranging from ₹800 for minor fixes to ₹4,500 for comprehensive spring and frame restoration, and full reupholstery available from ₹3,000 to ₹15,000 per seat, FurniRevive makes it easy for Dwarka families to restore their sofas rather than replace them. Every job is backed by a 6-month written warranty. Book before noon for same-day service. Reach us at +91 92179 99355 or WhatsApp photos of your sofa for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "Complete Dwarka Coverage",
      description:
        "We cover Sectors 1 through 28, Dwarka Mor, Palam, Palam Colony, Palam Extension, Kakrola, Uttam Nagar, Bindapur, Matiala, and Najafgarh — every Dwarka pin code at standard pricing.",
    },
    {
      title: "32D and 40D Foam Stock",
      description:
        "We carry both 32-density and 40-density high-resilience foam to your doorstep. Flattened sofa cushions are replaced on the spot — no sending the sofa to a workshop.",
    },
    {
      title: "500+ Upholstery Fabric Options",
      description:
        "Our technicians bring a large sample book to your Sector-address home. Choose from cotton, chenille, velvet, leatherette, and rexine in 500+ colours and textures.",
    },
    {
      title: "Same-Day Arrival",
      description:
        "Book before noon and our Dwarka-based team will arrive the same day. Near Ramphal Chowk, NSIT, or DDA Sports Complex — response time stays under four hours.",
    },
    {
      title: "Transparent ₹800–₹4,500 Pricing",
      description:
        "A written quotation is shared after free doorstep inspection. The final bill matches the quote exactly — no surprises at the time of payment.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Every sofa repair in Dwarka is covered by our company-backed 6-month warranty. If the same issue recurs, we return and fix it at zero cost.",
    },
  ],
  process: [
    {
      step: "WhatsApp Photos & Book",
      description:
        "Send photos of your sofa damage to +91 92179 99355. Mention your Dwarka sector or landmark — Sector 12 DDA flats, near Ramphal Chowk, Palam Extension, etc. We confirm your slot within 30 minutes.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician arrives at your Dwarka address, examines the sofa frame, springs, foam, and upholstery, then provides a detailed written quote with no obligation to proceed.",
    },
    {
      step: "On-Site Repair",
      description:
        "After your go-ahead, we repair the sofa at your home using professional tools and pre-stocked materials. Most Dwarka jobs — cushion replacement, spring fixing, frame tightening — are completed in 2–3 hours.",
    },
    {
      step: "Quality Sign-Off & Warranty",
      description:
        "You inspect the finished work with our technician. We clean up fully, hand over the 6-month warranty card, and collect payment only after your satisfaction.",
    },
  ],
  benefits: [
    "Doorstep service at all Dwarka sectors 1–28 and surrounding areas",
    "32D and 40D high-density foam replacement on the spot",
    "Full sofa reupholstery from ₹3,000 per seat with 500+ fabric choices",
    "Sofa spring and zigzag wire repair starting at ₹1,500",
    "Recliner mechanism and motorised sofa repair",
    "L-shaped and corner sofa repair without dismantling",
    "Sofa frame joint reinforcement using industrial wood adhesive",
    "Leather and rexine sofa repair, conditioning, and colour restoration",
    "Repairs starting at ₹800 — save 60–70% vs buying new",
    "Same-day service for bookings before noon",
    "6-month written warranty backed by FurniRevive",
    "Verified craftsmen with 5+ years of sofa repair experience",
  ],
  contentSections: [
    {
      heading: "Most Common Sofa Repairs We Handle in Dwarka",
      body: [
        "Cushion foam replacement is the single most requested sofa repair across Dwarka. The standard 3+1+1 sofa sets common in DDA flats near Sector 6 Market and Sector 10 Market typically lose foam density after four to five years of regular use. We replace the foam with 32D or 40D high-resilience variants — 32D for everyday sitting, 40D for heavier daily use — and re-stitch the original or new fabric over it. The result is cushions that feel brand new, usually completed within two hours at your Dwarka address.",
        "Sofa spring repair is the second most common service in Dwarka, particularly in older sofa sets purchased when families first moved into their sectors. The sinuous springs (also called S-springs or zigzag springs) snap or pull loose from their clips, causing a dipping seat. We replace broken springs, re-tension loose ones, and add webbing beneath the cushion deck for additional support. For leather sofas around the Bharat Vandana Park neighbourhood and the Dwarka Expressway residential clusters, we also offer leather crack-filling, re-dyeing, and conditioning as a complete restoration package.",
      ],
    },
    {
      heading: "Sofa Repair Pricing in Dwarka — What You Actually Pay",
      body: [
        "Our Dwarka sofa repair pricing follows Delhi NCR standard rates with absolutely no location surcharge for any Dwarka sector. Here is what typical repairs cost: single-seat cushion foam replacement ₹999–₹2,500 (depending on foam grade and seat size); complete 3-seater sofa foam replacement ₹4,000–₹9,000; sofa reupholstery per seat ₹3,000–₹15,000 (fabric to premium leatherette); sofa spring repair ₹1,500–₹4,000 per sofa; frame joint repair ₹800–₹2,000; recliner mechanism ₹1,499–₹6,000; full 3-seater sofa restoration (foam + fabric + springs + frame) ₹10,000–₹25,000.",
        "Compared to purchasing a comparable 3-seater sofa — which costs ₹30,000–₹80,000 at Sector 12 Market furniture shops or online — full restoration with FurniRevive saves Dwarka families ₹20,000–₹55,000. Our 6-month warranty further protects that investment. All prices are fixed after the free doorstep inspection. We never raise the price mid-job.",
      ],
    },
    {
      heading: "Sofa Repair Near Dwarka Metro Stations and Key Landmarks",
      body: [
        "Our fastest response zones in Dwarka are clustered around the metro corridors. For homes near Dwarka Sector 21 metro station — the Blue Line terminus — we typically reach within 60–90 minutes of booking. Residents near Dwarka Mor metro station (Blue Line) and Uttam Nagar East metro station benefit from our West Delhi technician base, with arrival times under two hours. Homes near Dwarka (Sector 9) metro station on the Blue Line and those in the sectors surrounding Bharat Vandana Park and the DDA Sports Complex at Sector 14 also receive prompt service.",
        "Beyond metro proximity, we regularly service societies near NSIT (Netaji Subhas University of Technology), the Dwarka Expressway residential corridor, Palam Airport area colonies, and the older village pockets of Kakrola and Najafgarh. If your address is in any part of the Dwarka sub-city, we cover it. There is no zone within Dwarka where we charge an extra visit fee.",
      ],
    },
    {
      heading: "Why Dwarka Residents Prefer FurniRevive Over Local Carpenters",
      body: [
        "Dwarka Mor and Uttam Nagar have a high concentration of independent carpenters who offer sofa repair at seemingly low prices. However, Dwarka residents who have tried both consistently come back to FurniRevive for a few important reasons. Reliability is the first: our technicians arrive at the agreed time. For families in Sector 10 or Sector 19 where both partners work, a no-show carpenter wastes a precious day off. Our GPS-tracked technicians send an arrival notification 30 minutes in advance.",
        "Material quality is the second differentiator. Local carpenters typically source foam and fabric from the nearest wholesale market — often lower-density foam that compresses again within a year. FurniRevive uses centrally procured, tested materials: ISI-marked high-density foam, UV-resistant upholstery fabrics, and industrial-grade wood adhesive. The third differentiator is accountability — our 6-month written warranty is backed by a registered company, not an individual tradesperson. Warranty claims are honoured with a scheduled return visit, not ignored.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cost of sofa repair in Dwarka?",
      answer:
        "Sofa repair in Dwarka starts at ₹800 for minor fixes. Cushion foam replacement costs ₹999–₹2,500 per seat. Spring repair is ₹1,500–₹4,000. Full reupholstery ranges from ₹3,000–₹15,000 per seat. A free doorstep inspection provides the exact quote before any work begins.",
    },
    {
      question: "Do you cover all Dwarka sectors for sofa repair?",
      answer:
        "Yes. We cover all 28 Dwarka sectors, plus Dwarka Mor, Palam, Palam Extension, Kakrola, Uttam Nagar, Bindapur, Matiala, and Najafgarh at standard pricing with no location surcharge.",
    },
    {
      question: "How soon can you arrive for sofa repair in Dwarka?",
      answer:
        "Book before noon for same-day service. Standard bookings are confirmed within 24 hours. For urgent requests near Ramphal Chowk or Sector 21 metro, we typically arrive within 60–90 minutes.",
    },
    {
      question: "Do you bring foam and fabric samples to my Dwarka home?",
      answer:
        "Yes. Our technicians carry 32D and 40D foam samples and a book of 500+ fabric swatches to your doorstep. You choose the material at home before we begin any work.",
    },
    {
      question: "Can you repair an L-shaped sofa in a Dwarka DDA flat?",
      answer:
        "Yes. We repair L-shaped, corner, and sectional sofas in DDA flats without dismantling or moving the sofa out. Our technicians are experienced working in compact living rooms across all Dwarka sectors.",
    },
    {
      question: "Do you repair recliner sofas in Dwarka?",
      answer:
        "Yes. We repair manual and motorised recliner mechanisms for all brands. Recliner repair in Dwarka costs ₹1,499–₹6,000 depending on the mechanism type and brand.",
    },
    {
      question: "Is the 6-month warranty available for Dwarka sofa repairs?",
      answer:
        "Yes. Every sofa repair we complete in Dwarka — including Palam, Uttam Nagar, and Najafgarh — carries a 6-month written warranty. Warranty claims result in a free return visit within 48 hours.",
    },
    {
      question: "Can you repair a leather sofa in Dwarka?",
      answer:
        "Yes. We repair genuine leather, bonded leather, and rexine sofas. Services include crack filling, custom colour matching, re-dyeing, and conditioning. Leather repair in Dwarka starts at ₹1,500.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-dwarka"),
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
    { label: "Sofa Repair Vikaspuri", href: "/sofa-repair-vikaspuri" },
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  ],
  keywords: [
    "sofa repair dwarka",
    "sofa repair in dwarka delhi",
    "sofa repair dwarka sector",
    "sofa reupholstery dwarka",
    "foam replacement dwarka sofa",
    "recliner repair dwarka",
    "sofa spring repair dwarka",
    "leather sofa repair dwarka",
    "sofa repair near dwarka mor",
    "best sofa repair dwarka",
  ],
};

// ---------------------------------------------------------------------------
// 2. SOFA REPAIR IN ROHINI
// ---------------------------------------------------------------------------
export const sofaRepairRohini: SeoPageData = {
  slug: "sofa-repair-rohini",
  title: "Sofa Repair in Rohini Delhi | ₹999 Onwards | FurniRevive",
  metaDescription:
    "Professional sofa repair in Rohini Delhi — sectors 1–38, Pitampura, Prashant Vihar & Budh Vihar. Spring, foam & reupholstery. Same-day doorstep service from ₹999.",
  h1: "Sofa Repair in Rohini — Same-Day Doorstep Service Sectors 1–38",
  showcaseImage: {
    heading: "Sofa Repair Before & After — Real Results in Rohini",
    imageUrl: "https://hercules-cdn.com/file_fD9h3BRCw623LF1MDx4IOhWQ",
    altText: "Before and after sofa repair in Rohini Delhi showing luxury cream sofa fully restored to pristine condition by FurniRevive",
    caption: "Sofa Repair Rohini — Luxury sofa restored to like-new condition | Same-day doorstep service | Starting ₹999 | FurniRevive",
  },
  heroSubtitle:
    "Trusted sofa repair across all Rohini sectors 1–38, Pitampura, Prashant Vihar, Avantika, Budh Vihar, and Vijay Vihar. Cushion foam replacement, spring repair, full reupholstery, and recliner fixing — all at your doorstep with a 6-month warranty starting at ₹999.",
  quickAnswer:
    "Sofa repair in Rohini starts at ₹999 for cushion foam replacement, ₹1,500–₹4,000 for spring repair, and ₹8,000–₹20,000 for full sofa restoration. FurniRevive offers same-day doorstep service across all 38 Rohini sectors, Pitampura, Prashant Vihar, and Avantika with no location surcharge and a 6-month written warranty.",
  intro: [
    "Rohini is one of North Delhi's most densely populated planned townships, spreading across 38 sectors and several adjacent sub-colonies. From the established residential pockets of Sector 3 and Sector 7 — walking distance from the Aggarwal Mall and Japanese Park — to the growing communities of Sector 34 and Sector 38 near the Rithala metro corridor, every Rohini home contains a sofa that is central to daily family life. Over time, that sofa accumulates the wear of thousands of hours of sitting — and eventually needs expert attention.",
    "FurniRevive's sofa repair team services every corner of Rohini and its surrounding localities. Whether your sofa is sagging near the Rohini East metro station area, your recliner has jammed in your Pitampura apartment, or your fabric is torn in your Sector 11 Market neighbourhood — we come to your address fully equipped. Our North Delhi technicians carry professional tools, multiple foam grades, 500+ fabric swatches, spring stock, and recliner parts so that the vast majority of repairs are completed in a single visit.",
    "Rohini sofa repair with FurniRevive costs ₹999 for basic cushion work and scales to ₹20,000 for a complete 5-seater restoration — far less than the ₹40,000–₹90,000 you would spend on a comparable new sofa. A 6-month written warranty protects every repair. Call or WhatsApp +91 92179 99355 to book, or request an estimate by sharing photos of your sofa.",
  ],
  whyChoose: [
    {
      title: "All 38 Rohini Sectors Covered",
      description:
        "Sectors 1 through 38, Avantika, Prashant Vihar, Budh Vihar, Vijay Vihar, Prem Nagar, Begumpur, and all adjacent colonies — one standard price, no area-based surcharge.",
    },
    {
      title: "Spring & Foam Expertise",
      description:
        "Rohini's densely used family sofas frequently suffer from both collapsed foam and broken springs simultaneously. We handle both in one visit — foam replacement plus sinuous-spring re-tensioning.",
    },
    {
      title: "Metro-Fast Response",
      description:
        "Our Rohini technicians are based near the Rohini West and Pitampura metro corridors, allowing us to reach Sectors 1–38, Netaji Subhash Place, and Metro Walk Mall vicinity within two hours of booking.",
    },
    {
      title: "Fabric Selection at Home",
      description:
        "Our technician brings 500+ upholstery samples directly to your Rohini home. Choose your colour and texture in person before any cutting or stitching begins.",
    },
    {
      title: "Competitive ₹999-Onwards Pricing",
      description:
        "Sofa cushion repair from ₹999. Spring repair ₹1,500–₹4,000. Full restoration ₹8,000–₹20,000. Written quote after free inspection — no hidden charges, ever.",
    },
    {
      title: "6-Month Warranty Guarantee",
      description:
        "Company-issued 6-month warranty on every Rohini sofa repair. If the same problem recurs, we schedule a free return visit within 48 hours — no arguments, no conditions.",
    },
  ],
  process: [
    {
      step: "Send Photos & Confirm Slot",
      description:
        "WhatsApp photos of your sofa to +91 92179 99355. Tell us your Rohini sector number or a nearby landmark — Sector 7 Market, Japanese Park, Adventure Island, Metro Walk Mall. We confirm your booking within minutes.",
    },
    {
      step: "Free Home Inspection",
      description:
        "Our technician visits your Rohini address, inspects the sofa frame, springs, foam density, and upholstery condition, then provides an itemised written quote with zero pressure to proceed.",
    },
    {
      step: "On-Site Sofa Repair",
      description:
        "We repair your sofa right in your living room. Foam is cut and fitted on the spot, springs are replaced or re-tensioned, and fabric is stitched to a seamless finish. Most Rohini repairs take 2–4 hours.",
    },
    {
      step: "Handover & Warranty Card",
      description:
        "You inspect the finished sofa with us, we clean up the work area completely, and hand over your 6-month warranty card. Payment is made only after you are fully satisfied.",
    },
  ],
  benefits: [
    "Coverage across all 38 Rohini sectors and Pitampura, Prashant Vihar, Avantika",
    "Sinuous spring and coil spring replacement starting at ₹1,500",
    "32D and 40D foam cushion replacement with same-day availability",
    "Full sofa reupholstery from ₹8,000 for a 5-seater set",
    "Leather and rexine sofa repair and colour restoration",
    "Recliner motor and mechanism repair for all brands",
    "Sofa frame re-gluing and corner bracket reinforcement",
    "L-shaped and modular sofa repair without sofa removal",
    "Starting at ₹999 — save up to 70% versus buying new",
    "Same-day doorstep service for bookings before noon",
    "6-month written warranty on every repair job",
    "Background-verified craftsmen with Rohini area familiarity",
  ],
  contentSections: [
    {
      heading: "Sofa Repairs Most Requested in Rohini",
      body: [
        "Spring and foam combination repair is uniquely common in Rohini because many households here purchased 5-seater sofa sets — the 3+1+1 configuration — during the mid-2010s DDA flat allotment wave, and those sofas are now entering their wear-out cycle together. The sinuous (zigzag) springs under the seat deck snap or detach from their end clips, while the foam above simultaneously loses density. FurniRevive addresses both in one visit: we replace or re-tension springs, reinforce the webbing base, and cut fresh 32D or 40D foam to the original seat dimensions. The combined repair costs ₹3,000–₹7,000 for a 3-seater — versus ₹40,000+ for a replacement sofa from the Sector 7 Market furniture shops.",
        "Full reupholstery is the second major service in Rohini. Families living near Rohini Court and Sector 11 Market area frequently own older sofa sets with structurally sound frames but heavily faded or torn fabric. Our technicians strip the existing upholstery, inspect and repair the frame underneath, then re-cover with the customer's chosen fabric from our 500-swatch collection. Velvet and chenille are popular in Rohini for their family-friendly durability and easy cleaning. Complete 3-seater reupholstery costs ₹9,000–₹18,000 — with the customer's choice of material determining the exact price.",
      ],
    },
    {
      heading: "How Rohini's Layout Affects Our Service Coverage",
      body: [
        "Rohini is one of Delhi's widest-spread sub-cities, and our service is structured to match its geography. The western sectors — 1 through 9, near Rithala metro station and Adventure Island — are served by our Rohini West zone team. Sectors 10 through 20, including the areas around Rohini East metro station and Japanese Park, fall within our central Rohini zone. The outer sectors — 21 through 38, Prashant Vihar, Budh Vihar, and Vijay Vihar — are covered by our expanded North Delhi team. All three zones operate under the same pricing structure and the same same-day-before-noon booking policy.",
        "Adjacent localities including Pitampura (all blocks), Shalimar Bagh, Paschim Vihar, Rani Bagh, Netaji Subhash Place vicinity, and Saraswati Vihar are fully included in our Rohini service area. Residents near the Metro Walk Mall, Aggarwal Mall, and Netaji Subhash Place commercial complex can expect technician arrival within 90 minutes of a confirmed morning booking.",
      ],
    },
    {
      heading: "Sofa Repair Cost Guide for Rohini Residents",
      body: [
        "Here is a straightforward reference for what common sofa repairs cost in Rohini: Cushion foam (32D) replacement — ₹999–₹2,000 per seat; cushion foam (40D premium) — ₹1,300–₹2,500 per seat; sinuous spring replacement — ₹1,500–₹4,000 per sofa; full reupholstery (3-seater, mid-grade fabric) — ₹8,000–₹14,000; full reupholstery (5-seater set, premium fabric) — ₹16,000–₹24,000; recliner mechanism repair — ₹1,499–₹5,500; leather crack repair and reconditioning — ₹2,000–₹8,000; sofa frame joint re-gluing — ₹800–₹2,500.",
        "All prices include labour and materials. The free doorstep inspection confirms the exact cost before any work starts. We carry materials to the first visit so that most repairs are completed the same day, saving you the hassle of a second appointment. There are no hidden travel charges, material mark-ups, or weekend premiums for Rohini addresses.",
      ],
    },
    {
      heading: "Rohini Sofa Repair vs. Buying New — the Numbers",
      body: [
        "Furniture showrooms on Sector 3 Market and Sector 7 Main Road in Rohini sell a standard 5-seater sofa set for ₹35,000–₹90,000. A complete sofa restoration by FurniRevive — new 32D foam across all seats, new upholstery in a contemporary fabric, spring replacement, and frame reinforcement — costs ₹14,000–₹22,000 for the same 5-seater. That is a saving of ₹13,000–₹68,000, and the restored sofa comes with a 6-month warranty.",
        "Beyond cost, repair also avoids the logistics of disposing of an old sofa and waiting two to four weeks for new-sofa delivery and installation. With FurniRevive, the repair is done in your home, on the same day you book, with no disruption to your household routine. That convenience, combined with significant cost savings and a warranty, is why more Rohini families are choosing professional sofa restoration over replacement.",
      ],
    },
  ],
  faqs: [
    {
      question: "What does sofa repair cost in Rohini?",
      answer:
        "Sofa repair in Rohini starts at ₹999 for cushion foam replacement. Spring repair costs ₹1,500–₹4,000, full reupholstery ₹8,000–₹20,000 for a 5-seater set, and recliner repair ₹1,499–₹5,500. A free doorstep inspection gives you the exact price.",
    },
    {
      question: "Do you serve all Rohini sectors including the outer sectors 30–38?",
      answer:
        "Yes. We cover Sectors 1 through 38, including Prashant Vihar, Budh Vihar, and Vijay Vihar, at the same standard pricing. No location surcharge applies for outer or inner Rohini sectors.",
    },
    {
      question: "Can you come to Pitampura and Shalimar Bagh for sofa repair?",
      answer:
        "Yes. Pitampura (all blocks), Shalimar Bagh, Paschim Vihar, and the Netaji Subhash Place area are all within our regular service zone. Same pricing and warranty apply.",
    },
    {
      question: "How quickly can I get sofa repair at my Rohini home?",
      answer:
        "Book before noon for same-day service. Standard bookings are confirmed and completed within 24 hours. For urgent needs near Rohini East or Rohini West metro, we often arrive within 90 minutes.",
    },
    {
      question: "What foam density do you use for sofa repair in Rohini?",
      answer:
        "We stock both 32D (standard) and 40D (high-resilience premium) foam and carry both grades on each visit. You choose the grade based on your preference and budget during the free inspection.",
    },
    {
      question: "Do you repair modular and L-shaped sofas in Rohini?",
      answer:
        "Yes. L-shaped, corner, and modular sofas are repaired in-situ at your Rohini home without dismantling or carrying the sofa out. We handle complex configurations regularly.",
    },
    {
      question: "What warranty do you give on sofa repairs in Rohini?",
      answer:
        "All sofa repairs in Rohini carry a 6-month written warranty. If the repaired issue recurs within six months, we return to your home and fix it free of charge — no questions asked.",
    },
    {
      question: "Can you match my existing sofa fabric for a partial reupholstery?",
      answer:
        "Yes. We carry 500+ fabric samples and can source close matches for existing fabrics. If you want only the armrests or seat covers replaced, we can do a partial re-cover for a fraction of the full reupholstery cost.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-rohini"),
    { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
    { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Sofa Repair Pitampura", href: "/sofa-repair-pitampura" },
    { label: "Sofa Repair North Delhi", href: "/sofa-repair-north-delhi" },
    { label: "Sofa Repair Model Town", href: "/sofa-repair-model-town" },
  ],
  keywords: [
    "sofa repair rohini",
    "sofa repair in rohini delhi",
    "sofa repair rohini sector",
    "sofa spring repair rohini",
    "sofa reupholstery rohini",
    "foam replacement rohini sofa",
    "recliner repair rohini",
    "sofa repair pitampura",
    "sofa repair prashant vihar",
    "best sofa repair rohini",
  ],
};

// ---------------------------------------------------------------------------
// 3. SOFA REPAIR IN JANAKPURI
// ---------------------------------------------------------------------------
export const sofaRepairJanakpuri: SeoPageData = {
  slug: "sofa-repair-janakpuri",
  title: "Sofa Repair in Janakpuri Delhi | ₹899 Onwards | FurniRevive",
  metaDescription:
    "Expert sofa repair in Janakpuri Delhi — blocks A–E, Vikaspuri, Tilak Nagar & Hari Nagar. Reupholstery, recliner & foam repair. Doorstep service starting ₹899.",
  h1: "Sofa Repair in Janakpuri — Expert Doorstep Service Blocks A–E & Nearby Areas",
  heroSubtitle:
    "Trusted sofa repair at your doorstep across Janakpuri Blocks A–E, Uttam Nagar, Vikaspuri, Tilak Nagar, Subhash Nagar, and Hari Nagar. Foam replacement, reupholstery, recliner repair, and sofa frame fixing — with a 6-month warranty starting at just ₹899.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Janakpuri Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician restoring a sofa in a Janakpuri Delhi home — reupholstery and recliner repair by FurniRevive",
    caption: "Sofa Repair in Janakpuri | Blocks A–E & Vikaspuri | Recliner & foam repair | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Janakpuri costs ₹899–₹4,500 for standard repairs. Cushion foam replacement starts at ₹999, reupholstery at ₹3,000–₹12,000 per seat, and recliner repair at ₹1,499–₹6,000. FurniRevive serves Janakpuri Blocks A–E, Vikaspuri, Uttam Nagar, and Tilak Nagar with same-day doorstep service and a 6-month written warranty.",
  intro: [
    "Janakpuri is one of West Delhi's oldest and best-loved residential colonies, developed through DDA allotments across Blocks A through E. Generations of families have built their homes here — comfortable, well-furnished houses and flats within easy reach of the District Centre Mall, TDI Mall at Shivaji Place, and the Janakpuri West and East metro stations on the Blue Line. In these long-established homes, sofas tend to be quality pieces purchased years ago, and those pieces deserve quality repair rather than hasty replacement.",
    "FurniRevive brings professional sofa repair to your doorstep anywhere in Janakpuri. We cover all five blocks — A, B, C, D, and E — as well as the C-Block Market and D-Block Market areas, Janakpuri District Centre, and the surrounding colonies of Uttam Nagar, Vikaspuri, Tilak Nagar, Subhash Nagar, and Hari Nagar. Our West Delhi technicians are familiar with the layout of Janakpuri's residential blocks and the typical sofa styles found in each — from the large traditional sofa sets in independent houses to the compact modular sofas in newer builder apartments.",
    "Sofa repair in Janakpuri starts at ₹899 for minor fixes, with reupholstery available from ₹3,000 to ₹12,000 per seat and recliner repair from ₹1,499 to ₹6,000. Every repair is carried out at your home, takes 2–4 hours for most jobs, and is covered by a 6-month written warranty. WhatsApp photos of your sofa to +91 92179 99355 for an instant estimate.",
  ],
  whyChoose: [
    {
      title: "All Janakpuri Blocks Covered",
      description:
        "Blocks A, B, C, D, and E — plus Uttam Nagar, Vikaspuri, Tilak Nagar, Subhash Nagar, and Hari Nagar. All at standard pricing, no matter how far your block is from the District Centre.",
    },
    {
      title: "Traditional & Modern Sofa Expertise",
      description:
        "Janakpuri homes have a mix of traditional large-frame sofas and modern sectional/recliner designs. Our craftsmen are trained on both, ensuring the right technique for every sofa type.",
    },
    {
      title: "Wide Fabric Selection On-Site",
      description:
        "Our technicians arrive with 500+ upholstery swatches — cotton, velvet, microfibre, rexine, and leatherette. You pick your fabric at home, in your own lighting, before we start.",
    },
    {
      title: "Recliner Specialists",
      description:
        "Recliner sofas are especially common in Janakpuri's spacious independent houses. We repair manual and motorised recliners for all major brands at ₹1,499–₹6,000 per mechanism.",
    },
    {
      title: "Starting at ₹899",
      description:
        "Affordable doorstep sofa repair starting at ₹899. Full written quotation after free inspection — the bill matches the quote and payment is made after satisfaction.",
    },
    {
      title: "6-Month Warranty",
      description:
        "Every sofa repaired in Janakpuri, Vikaspuri, Tilak Nagar, or Uttam Nagar carries a 6-month written warranty with free return visits for any warranty claim.",
    },
  ],
  process: [
    {
      step: "Book via Call or WhatsApp",
      description:
        "Call +91 92179 99355 or send photos of your sofa on WhatsApp. Tell us your Janakpuri block letter or a nearby reference — C-Block Market, TDI Mall, District Centre, Shivaji Place. We confirm your slot immediately.",
    },
    {
      step: "Free Doorstep Inspection",
      description:
        "Our technician visits your Janakpuri home and examines the sofa's frame, cushion density, upholstery, springs, and any mechanical parts. A detailed written quotation is provided — no charge for the inspection.",
    },
    {
      step: "Same-Day Repair at Your Home",
      description:
        "After you approve the quote, we repair the sofa in your living room. Foam is trimmed and fitted, fabric is stitched, springs are replaced — all done on-site in 2–4 hours for most jobs.",
    },
    {
      step: "Satisfaction Check & Warranty",
      description:
        "We review the finished work together, clean up thoroughly, and hand over your 6-month warranty card. You pay only when you are completely happy with the result.",
    },
  ],
  benefits: [
    "Full coverage of Janakpuri Blocks A–E, Uttam Nagar, Vikaspuri, Tilak Nagar, Hari Nagar",
    "32D and 40D high-density foam replacement per seat",
    "Full sofa reupholstery from ₹3,000–₹12,000 per seat",
    "Manual and motorised recliner repair ₹1,499–₹6,000",
    "L-shaped and corner sofa repair without removal",
    "Sofa spring and webbing replacement",
    "Leather and rexine crack repair and reconditioning",
    "Sofa frame joint reinforcement with industrial adhesive",
    "Repairs starting at ₹899 — significant savings vs. new purchase",
    "Same-day service for bookings placed before noon",
    "6-month written warranty backed by FurniRevive",
    "Verified technicians with West Delhi coverage expertise",
  ],
  contentSections: [
    {
      heading: "Sofa Repairs We Specialise In for Janakpuri Homes",
      body: [
        "Recliner sofa repair is more concentrated in Janakpuri than in most other Delhi areas. The independent houses in Blocks A, B, and C — spacious properties with generous living rooms — often feature 2-seater and 3-seater recliner sofas purchased from the Janakpuri District Centre furniture shops or major retail chains at Shivaji Place. Over three to five years, the reclining mechanism stiffens, the footrest latch breaks, or the electric motor fails in motorised models. FurniRevive's recliner repair service covers all these failure modes: mechanism lubrication and re-calibration, latch replacement, cable replacement, and full motor swap for electric models — costing ₹1,499–₹6,000, compared to ₹15,000–₹50,000 for a recliner replacement.",
        "Foam and fabric repair is the second dominant service in Janakpuri. The 3+1+1 sofa sets in the smaller DDA flats of Blocks D and E — as well as the compact apartments in Uttam Nagar and Vikaspuri — have typically been in use for four to six years and show the typical signs of heavy use: compacted foam, fraying fabric at the seat edges and armrest tops, and occasionally a loose back-cushion fastening. We replace foam, re-stitch loose seams, and offer partial re-covering — just the seat cushion tops, for instance — as a budget option at ₹2,000–₹5,000 for a 3-seater, or full reupholstery for a complete transformation.",
      ],
    },
    {
      heading: "Sofa Repair Pricing in Janakpuri — Transparent & Fair",
      body: [
        "Our Janakpuri sofa repair pricing: single seat foam replacement (32D) ₹999–₹2,000; single seat foam replacement (40D premium) ₹1,300–₹2,500; full 3-seater reupholstery mid-range fabric ₹9,000–₹14,000; per-seat reupholstery ₹3,000–₹12,000; recliner mechanism repair ₹1,499–₹4,500; recliner motor replacement ₹2,500–₹6,000; sofa spring repair ₹1,500–₹4,000; frame joint re-gluing and reinforcement ₹800–₹2,500; leather crack repair and reconditioning ₹1,500–₹6,000.",
        "There are no area surcharges for Janakpuri, Vikaspuri, Tilak Nagar, Subhash Nagar, or Uttam Nagar. The free doorstep inspection confirms the exact price before we begin. The final invoice matches the approved quotation. Payment is accepted by cash, UPI, or bank transfer, and is collected only after you are satisfied with the completed repair.",
      ],
    },
    {
      heading: "Janakpuri, Vikaspuri, and Tilak Nagar — Our Full Coverage Zone",
      body: [
        "Our sofa repair service in West Delhi covers a broad zone anchored by Janakpuri but extending significantly in every direction. In Janakpuri itself we cover all five blocks (A through E) and both residential and commercial pockets near Janakpuri West metro station and Janakpuri East metro station. The District Centre area — close to TDI Mall and Janakpuri Super Speciality Hospital — is a regular service hub for us.",
        "Across the surrounding areas, we serve Uttam Nagar (all sectors), Vikaspuri (all blocks and sectors), Tilak Nagar (near Tilak Nagar metro), Subhash Nagar (near Subhash Nagar metro), Hari Nagar (all blocks), Moti Nagar, Kirti Nagar, Ramesh Nagar, Punjabi Bagh, and Rajouri Garden. Customers near Uttam Nagar West metro station and those in Patel Nagar are also within our standard service zone. If your address is within West Delhi, we almost certainly cover it at standard rates.",
      ],
    },
    {
      heading: "Why Janakpuri Homeowners Trust FurniRevive",
      body: [
        "Janakpuri's D-Block Market and C-Block Market host a range of local carpenters and small upholstery workshops that have served the area for decades. FurniRevive complements that ecosystem with the benefits of a modern, organised service: appointment scheduling, GPS-tracked technician dispatch, quality-controlled materials, and a documented warranty. For homeowners in Janakpuri's independent houses or high-value flats near the District Centre, those differences matter enormously when handling expensive recliner sofas or imported leather seating.",
        "Our repeat customer rate in West Delhi — which includes Janakpuri, Vikaspuri, and Tilak Nagar — is above 70%. Families who experience our same-day response, quality materials, and no-fuss warranty process come back for every sofa and furniture need. Many also refer their neighbours and family members, which is why FurniRevive has become the area's most recommended sofa repair service. We welcome every new customer with the same care we extend to returning ones.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the starting price for sofa repair in Janakpuri?",
      answer:
        "Sofa repair in Janakpuri starts at ₹899 for minor fixes. Foam cushion replacement begins at ₹999, reupholstery at ₹3,000 per seat, and recliner repair at ₹1,499. A free doorstep inspection gives you the exact cost.",
    },
    {
      question: "Do you cover all Janakpuri blocks — A, B, C, D, and E?",
      answer:
        "Yes. We cover all five Janakpuri blocks, the District Centre area, C-Block Market, D-Block Market, Shivaji Place, and both Janakpuri West and East metro station vicinities at standard pricing.",
    },
    {
      question: "Do you also serve Vikaspuri and Tilak Nagar?",
      answer:
        "Yes. Vikaspuri, Tilak Nagar, Subhash Nagar, Hari Nagar, and Uttam Nagar are all within our regular West Delhi service zone — same pricing, same-day availability, and same 6-month warranty.",
    },
    {
      question: "Can you repair a recliner sofa in a Janakpuri independent house?",
      answer:
        "Yes. Recliner repair is one of our most popular services in Janakpuri's independent houses. We repair both manual and motorised recliners for all brands at ₹1,499–₹6,000.",
    },
    {
      question: "How long does sofa reupholstery take in Janakpuri?",
      answer:
        "For a standard 3-seater, sofa reupholstery is completed in a single visit of 3–5 hours. For a 5-seater set, it may take 6–8 hours or two visits. We confirm the timeline during the free inspection.",
    },
    {
      question: "Do you carry fabric samples to Janakpuri for selection?",
      answer:
        "Yes. Our technicians bring 500+ upholstery swatches to your home. You select the fabric — cotton, velvet, microfibre, leatherette, rexine — in your own light before we begin any cutting or stitching.",
    },
    {
      question: "Is same-day sofa repair available in Janakpuri?",
      answer:
        "Yes. Book before noon for same-day doorstep service in Janakpuri, Vikaspuri, Tilak Nagar, and Uttam Nagar. Standard bookings are scheduled within 24 hours.",
    },
    {
      question: "Do you provide a warranty for sofa repairs in Janakpuri?",
      answer:
        "Yes. Every sofa repair we complete in Janakpuri and nearby areas carries a 6-month written warranty. If the repaired issue returns within six months, we fix it free of charge.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-janakpuri"),
    { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
    { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
    { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
    { label: "Sofa Repair Vikaspuri", href: "/sofa-repair-vikaspuri" },
    { label: "Sofa Repair West Delhi", href: "/sofa-repair-west-delhi" },
  ],
  keywords: [
    "sofa repair janakpuri",
    "sofa repair in janakpuri delhi",
    "sofa reupholstery janakpuri",
    "recliner repair janakpuri",
    "foam replacement janakpuri sofa",
    "sofa repair vikaspuri",
    "sofa repair tilak nagar",
    "sofa repair uttam nagar west",
    "sofa repair hari nagar",
    "best sofa repair janakpuri",
  ],
};

// ---------------------------------------------------------------------------
// 4. SOFA REPAIR IN SAKET
// ---------------------------------------------------------------------------
export const sofaRepairSaket: SeoPageData = {
  slug: "sofa-repair-saket",
  title: "Sofa Repair in Saket Delhi | Premium Service ₹999+ | FurniRevive",
  metaDescription:
    "Premium sofa repair in Saket Delhi — J-Block, G-Block, Mehrauli, Pushp Vihar & Press Enclave. Leather restoration, reupholstery & recliner repair from ₹999.",
  h1: "Sofa Repair in Saket — Premium Doorstep Service for South Delhi Homes",
  heroSubtitle:
    "Expert sofa repair across Saket's J-Block, G-Block, Mehrauli, Kishangarh, Press Enclave, Pushp Vihar, and Freedom Fighters Enclave. Leather sofa restoration, premium reupholstery, foam replacement, and recliner repair — all at your doorstep with a 6-month warranty from ₹999.",
  showcaseImage: {
    heading: "Premium Sofa Repair — Expert Service at Your Saket Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional sofa repair technician working on a premium leather sofa in a Saket South Delhi home — leather restoration and reupholstery by FurniRevive",
    caption: "Sofa Repair in Saket | Premium leather restoration & reupholstery | South Delhi | FurniRevive",
  },
  quickAnswer:
    "Sofa repair in Saket costs ₹999–₹5,000 for standard repairs, with leather sofa restoration priced at ₹2,999–₹18,000 for full treatments. FurniRevive serves Saket's premium residential blocks — J-Block, G-Block, Mehrauli, Pushp Vihar — as a leather sofa specialist with same-day doorstep service and a 6-month written warranty.",
  intro: [
    "Saket is one of South Delhi's most upscale residential destinations, drawing residents who value both location and quality of life. The proximity to Select Citywalk Mall and DLF Place, the cultural depth of the Garden of Five Senses, and the proximity to the Qutub Minar complex make Saket a neighbourhood unlike any other in the capital. The homes here — from the stately bungalows of J-Block and G-Block to the elegant apartments in Press Enclave and Freedom Fighters Enclave — reflect that premium character, and the furniture within them does too.",
    "FurniRevive is Saket's trusted sofa repair specialist. We serve every Saket residential pocket including J-Block, G-Block, Mehrauli, Kishangarh village, Press Enclave, Freedom Fighters Enclave, Pushp Vihar, and Malviya Nagar. Our South Delhi technicians are specifically trained to handle premium and imported sofas — genuine leather Italian pieces, designer fabric sectionals, motorised recliners from international brands — with the precision and care these investments demand. We arrive with professional-grade tools, imported upholstery materials, and premium leather care products.",
    "Sofa repair in Saket starts at ₹999 for cushion work and reaches ₹5,000 for comprehensive frame and mechanism restoration. Leather sofa restoration — crack filling, custom colour-matching, re-dyeing, and conditioning — is priced at ₹2,999–₹18,000 depending on the sofa's size and damage extent. Every repair comes with a 6-month written warranty. Call or WhatsApp +91 92179 99355 for a quick estimate by photo, or book a free doorstep inspection.",
  ],
  whyChoose: [
    {
      title: "Premium Leather Sofa Specialist",
      description:
        "Saket has a high concentration of genuine leather sofas from Italian and European brands. Our leather repair includes crack filling, professional re-dyeing with custom-matched colour, sealing, and conditioning — restoring premium sofas to near-original condition.",
    },
    {
      title: "All Saket Pockets Covered",
      description:
        "J-Block, G-Block, Press Enclave, Freedom Fighters Enclave, Pushp Vihar, Mehrauli, Kishangarh, and Malviya Nagar — all at the same standard pricing with no premium area surcharge.",
    },
    {
      title: "Imported Upholstery Materials",
      description:
        "Our Saket visits include swatches of imported Italian velvet, Belgian linen, and European chenille alongside premium Indian options. Materials fit for the quality of furniture in South Delhi homes.",
    },
    {
      title: "Discreet, Professional Service",
      description:
        "Our technicians arrive at the agreed time, work quietly and cleanly, and leave no trace of the repair work. Ideal for Saket's premium residences, gated societies, and high-rise apartments.",
    },
    {
      title: "Metro-Adjacent Response",
      description:
        "With Saket, Malviya Nagar, Hauz Khas, and Qutub Minar metro stations nearby, our South Delhi team reaches Saket addresses within 60–90 minutes of a confirmed morning booking.",
    },
    {
      title: "6-Month Written Warranty",
      description:
        "Premium repairs deserve premium guarantees. Every sofa repair in Saket carries a documented 6-month warranty with free return visits — no conditions, no exceptions.",
    },
  ],
  process: [
    {
      step: "Photo Estimate & Booking",
      description:
        "Share clear photos of your sofa via WhatsApp to +91 92179 99355. Mention your Saket block or a nearby landmark — Select Citywalk, Garden of Five Senses, DLF Place, Saket Metro. We respond with a preliminary estimate within 30 minutes.",
    },
    {
      step: "Free Premium Inspection",
      description:
        "Our senior technician visits your Saket home with material samples, inspects the sofa's leather or fabric, frame integrity, and mechanism condition, and provides a comprehensive written quotation.",
    },
    {
      step: "Expert Restoration at Home",
      description:
        "We carry out the repair at your home using professional leather care products, premium upholstery materials, and precision tools. Leather crack filling, re-dyeing, and reupholstery are completed on-site. Most repairs take 3–5 hours.",
    },
    {
      step: "Quality Review & Warranty Card",
      description:
        "We review every detail of the finished work with you, condition all leather surfaces, clean up completely, and provide your 6-month warranty card. Payment after your full satisfaction.",
    },
  ],
  benefits: [
    "Leather sofa crack repair, re-dyeing, and conditioning from ₹2,999",
    "Premium reupholstery with imported Italian velvet and Belgian linen",
    "32D and 40D high-density foam replacement per seat",
    "Motorised and manual recliner repair for all brands",
    "L-shaped, U-shaped, and modular sectional sofa repair",
    "Sofa frame reinforcement and joint repair",
    "Coverage across Saket, Mehrauli, Pushp Vihar, Press Enclave, Malviya Nagar",
    "Discreet, punctual service suited to premium residences",
    "Sofa repair from ₹999 — significant savings vs. replacement",
    "Same-day doorstep service for morning bookings",
    "6-month written warranty on every repair",
    "Senior craftsmen trained in premium and imported furniture handling",
  ],
  contentSections: [
    {
      heading: "Premium Sofa Repair Services Tailored for Saket",
      body: [
        "Leather sofa restoration is the cornerstone of FurniRevive's Saket service. The premium residences of J-Block and G-Block, the gated apartments of Press Enclave, and the well-appointed flats of Freedom Fighters Enclave typically house genuine leather sofas — often Italian or Spanish brands — that represent investments of ₹80,000 to ₹3,00,000. Delhi's harsh climate — intense summer heat, monsoon humidity, and dry winter air — causes even high-quality leather to crack, fade, and harden within five to six years. Our leather restoration process begins with deep cleaning, proceeds through flexible crack-filler application, custom colour-matching and re-dyeing, UV-protective sealing, and finally conditioning with professional-grade leather balm. The result is a sofa that looks and feels like it left the showroom recently — at 10–15% of its replacement value.",
        "Designer fabric and velvet sofas are the second major repair category in Saket. Homeowners near Mehrauli Archaeological Park and Kishangarh village's newer apartment blocks often own contemporary sectional sofas in imported fabrics that show sun-fading, small tears, or seam failures after a few years. We handle these with care — sourcing closely matched fabric from our premium swatch collection, executing precise panel cuts, and delivering seamless stitching that is virtually invisible on the finished sofa. For the modular L-shaped and U-shaped configurations common in Saket's larger apartments, we complete the repair in-situ without the disruption of dismantling.",
      ],
    },
    {
      heading: "Sofa Repair Pricing in Saket — Premium Quality, Honest Rates",
      body: [
        "Our Saket pricing reflects access to premium materials while remaining far more economical than replacement. Leather sofa minor crack repair starts at ₹2,999; full-sofa leather restoration (cleaning, re-dyeing, sealing, conditioning) for a 3-seater ranges from ₹8,000–₹18,000. Fabric reupholstery with premium imported fabric costs ₹5,000–₹15,000 per seat. Mid-range domestic fabric reupholstery starts at ₹3,000 per seat. Foam cushion replacement (32D) is ₹999–₹2,000 per seat, and 40D premium foam is ₹1,300–₹2,500. Recliner mechanism repair ranges ₹1,499–₹6,000; motorised recliner motor replacement ₹3,000–₹6,000.",
        "There are no premium surcharges for Saket, J-Block, G-Block, or Pushp Vihar. The free doorstep inspection confirms the final price before any work begins, and the invoice matches the approved quote exactly. We accept cash, UPI, and bank transfer — payment after your satisfaction. For Saket's premium sofas worth ₹1,00,000 or more, the repair cost represents a small fraction of the asset's value and restores it to full functional and aesthetic quality.",
      ],
    },
    {
      heading: "Saket's Residential Character & Why It Demands the Best",
      body: [
        "Saket occupies a rare position in Delhi's residential hierarchy — upscale yet accessible, historic yet modern. The neighbourhood's G-Block independent houses back onto quiet tree-lined streets within minutes of Select Citywalk Mall and PVR Saket's entertainment zone. Press Enclave's mid-rise apartments offer city-connected living with a community feel, while Freedom Fighters Enclave's spacious layouts attract established families. Across all these pockets, residents have invested in quality furniture — and they expect quality service when that furniture needs attention.",
        "FurniRevive's approach in Saket is built around that expectation. We send experienced senior technicians — not junior helpers — to Saket addresses. We carry premium materials to every visit. We communicate clearly about timelines and costs. And we back every repair with a genuine, honoured warranty. This is why Saket residents refer us to their neighbours and call us back whenever another piece of furniture needs attention.",
      ],
    },
    {
      heading: "Areas Around Saket We Serve",
      body: [
        "Our Saket sofa repair service extends across the surrounding South Delhi localities. We cover Malviya Nagar (all blocks and the main market area near Malviya Nagar metro), Hauz Khas (village and residential areas near Hauz Khas metro), Greater Kailash I and II, Safdarjung Enclave, Safdarjung Development Area, Green Park, Green Park Extension, Panchsheel Park, Gulmohar Park, Mehrauli (all pockets including Kishangarh and the Archaeological Park neighbourhood), Pushp Vihar (all sectors), and Sheikh Sarai.",
        "We also serve the nearby areas of Lado Sarai, Khirki Extension, Neb Sarai, Sainik Farm, and Satbari. Customers in South Extension I and II, and Lajpat Nagar, are equally well covered by our South Delhi team. If you are unsure whether your Saket or South Delhi address falls within our zone, call us — the answer is almost always yes, and always at standard rates.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the cost of leather sofa repair in Saket?",
      answer:
        "Leather sofa crack repair starts at ₹2,999. A full leather restoration — cleaning, crack filling, custom re-dyeing, sealing, and conditioning — for a 3-seater costs ₹8,000–₹18,000. A free doorstep inspection confirms the exact price.",
    },
    {
      question: "Do you cover Saket J-Block, G-Block, and Press Enclave?",
      answer:
        "Yes. We serve all Saket residential pockets including J-Block, G-Block, Press Enclave, Freedom Fighters Enclave, Pushp Vihar, Mehrauli, and Kishangarh at standard pricing with no premium area surcharge.",
    },
    {
      question: "Can you repair imported Italian leather sofas in Saket?",
      answer:
        "Yes. We specialise in imported leather sofas including Italian and European brands common in Saket homes. Our process includes professional leather cleaning, custom colour-matching, re-dyeing, UV sealing, and conditioning.",
    },
    {
      question: "How quickly can you come to Saket for sofa repair?",
      answer:
        "Book before noon for same-day service in Saket, Mehrauli, Pushp Vihar, and Malviya Nagar. Standard bookings are confirmed within 24 hours. With Saket metro nearby, our team typically arrives within 60–90 minutes of a morning booking.",
    },
    {
      question: "Do you repair modular and L-shaped sofas in Saket apartments?",
      answer:
        "Yes. L-shaped, U-shaped, sectional, and modular sofas are repaired in-situ without dismantling at your Saket apartment. We handle complex configurations regularly across South Delhi.",
    },
    {
      question: "What premium fabric options do you offer for sofa reupholstery in Saket?",
      answer:
        "We carry imported Italian velvet, Belgian linen, European chenille, and premium domestic options — over 500 swatches in total. Our technician brings the full collection to your Saket home for in-person selection.",
    },
    {
      question: "Do you repair motorised recliner sofas in Saket?",
      answer:
        "Yes. We repair motorised recliners for all brands — motor replacement, control-board issues, cable repair, and frame reinforcement. Motorised recliner repair costs ₹2,500–₹6,000 at your Saket address.",
    },
    {
      question: "Is the 6-month warranty valid for premium leather repairs in Saket?",
      answer:
        "Yes. All repairs in Saket — including full leather restoration and premium reupholstery — carry our 6-month written warranty. If the repaired area shows the same issue within six months, we return and fix it free of charge.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("sofa-repair-saket"),
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Furniture Repair Saket", href: "/furniture-repair-saket" },
    { label: "Leather Sofa Repair Delhi", href: "/leather-sofa-repair-delhi" },
    { label: "Sofa Repair Malviya Nagar", href: "/sofa-repair-malviya-nagar" },
    { label: "Sofa Repair Hauz Khas", href: "/sofa-repair-hauz-khas" },
  ],
  keywords: [
    "sofa repair saket",
    "sofa repair in saket delhi",
    "leather sofa repair saket",
    "sofa reupholstery saket",
    "sofa repair mehrauli",
    "sofa repair pushp vihar",
    "sofa repair malviya nagar",
    "recliner repair saket",
    "premium sofa repair south delhi",
    "best sofa repair saket delhi",
  ],
};

// ---------------------------------------------------------------------------
// Named export array
// ---------------------------------------------------------------------------
export const DELHI_SOFA_PAGES_1: SeoPageData[] = [
  sofaRepairDwarka,
  sofaRepairRohini,
  sofaRepairJanakpuri,
  sofaRepairSaket,
];
