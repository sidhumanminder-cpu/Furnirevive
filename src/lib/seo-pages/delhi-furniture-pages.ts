import type { SeoPageData } from "@/lib/seo-constants.ts";

const RELATED_LINKS = [
  { label: "Home", href: "/" },
  { label: "Book Online", href: "/book" },
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Carpenter Home Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Furniture Repair Near Me", href: "/furniture-repair-near-me" },
  { label: "Blog", href: "/blog" },
];

function relatedExcluding(slug: string) {
  return RELATED_LINKS.filter((p) => p.href !== `/${slug}`);
}

// ─────────────────────────────────────────────
// 1. Janakpuri
// ─────────────────────────────────────────────
export const furnitureRepairJanakpuri: SeoPageData = {
  slug: "furniture-repair-janakpuri",
  title: "Furniture Repair in Janakpuri Delhi | Starting ₹599",
  metaDescription:
    "Expert furniture repair in Janakpuri, Vikaspuri & Tilak Nagar. Sofa, bed, wardrobe & dining table repair from ₹599. Same-day doorstep service, 6-month warranty.",
  h1: "Furniture Repair in Janakpuri, Delhi",
  heroSubtitle:
    "Trusted doorstep furniture repair across Janakpuri's A–E Blocks, Vikaspuri, Tilak Nagar, Uttam Nagar & Hari Nagar — starting at just ₹599.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your Janakpuri Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional furniture repair technician working on a wardrobe in a luxury Janakpuri West Delhi home — FurniRevive",
    caption: "Furniture Repair in Janakpuri Delhi | West Delhi | Premium carpentry & restoration service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Furniture repair in Janakpuri covers all residential blocks and nearby areas like Vikaspuri, Tilak Nagar, and Uttam Nagar starting at ₹599. We offer doorstep service with same-day availability, fixing sofas, beds, wardrobes, and dining tables with a 6-month service warranty.",
  intro: [
    "Janakpuri is one of West Delhi's most established middle-class neighbourhoods, built largely around DDA flat complexes and planned blocks stretching from A to E. The furniture in these homes — sturdy but ageing — often needs expert attention rather than outright replacement. Our furniture repair service in Janakpuri is designed specifically for this community: affordable, fast, and delivered right at your doorstep without the hassle of transporting heavy pieces to a workshop.",
    "We cover the full Janakpuri geography — District Centre, Shivaji Place, the C-Block and D-Block markets corridor, and extended neighbourhoods including Subhash Nagar, Tagore Garden, and Hari Nagar. Whether your bed frame has weakened joints, your wardrobe shutters are misaligned after years of use, or your dining table polish has faded and scratched, our skilled carpenters arrive equipped with tools, materials, and spare fittings to handle the job on-site.",
    "Living close to landmarks like TDI Mall and the Janakpuri Super Speciality Hospital, residents here value time and reliability. Our booking system lets you schedule a slot in minutes via our website, and our craftsmen aim to arrive within the same day or the next morning. With transparent pricing starting at ₹599 and no hidden charges, furniture repair in Janakpuri has never been more straightforward.",
  ],
  whyChoose: [
    {
      title: "All Blocks Covered",
      description:
        "We service Blocks A through E, Uttam Nagar, Vikaspuri, Tilak Nagar, Subhash Nagar, Tagore Garden, and Hari Nagar — no corner of Janakpuri is out of reach.",
    },
    {
      title: "Transparent ₹599 Starting Price",
      description:
        "Bed repairs from ₹1,500–₹5,000, wardrobe fixes from ₹500–₹2,000, and dining table polishing from ₹3,000–₹8,000, all quoted before any work begins.",
    },
    {
      title: "DDA Flat Specialists",
      description:
        "Our carpenters understand the compact layouts and older wood fittings common in Janakpuri's DDA housing, ensuring repairs match the original style and proportions.",
    },
    {
      title: "Same-Day Doorstep Service",
      description:
        "No need to dismantle or transport anything. We come to your home in Janakpuri with all required tools and complete the repair in a single visit wherever possible.",
    },
    {
      title: "6-Month Service Warranty",
      description:
        "Every repair job in Janakpuri carries a 6-month warranty. If the same issue recurs within this period, we return and fix it at no extra cost.",
    },
    {
      title: "Verified & Background-Checked Craftsmen",
      description:
        "All our carpenters are identity-verified and regularly reviewed by customers across Janakpuri and West Delhi, so you can open your door with full confidence.",
    },
  ],
  process: [
    {
      step: "Book Online or Call",
      description:
        "Use our quick booking form to select your area within Janakpuri — your block, nearby colony, or landmark — and choose a time slot that suits you.",
    },
    {
      step: "Carpenter Arrives at Your Home",
      description:
        "A verified carpenter reaches your Janakpuri address, inspects the damaged furniture, and provides a clear, itemised cost estimate before starting.",
    },
    {
      step: "Repair Completed On-Site",
      description:
        "Using quality materials and professional-grade tools, the craftsman repairs your furniture right in your home — no workshop trip needed.",
    },
    {
      step: "Quality Check & Warranty",
      description:
        "Once done, we walk you through the completed work and issue a 6-month warranty so you're protected against any recurrence of the same fault.",
    },
  ],
  benefits: [
    "Covers all Janakpuri residential blocks (A–E) and nearby areas",
    "Doorstep service — no need to move heavy furniture",
    "Starting price ₹599 with no surprise charges",
    "Bed frame & headboard repair from ₹1,500",
    "Wardrobe door, hinge & lock fixes from ₹500",
    "Dining table scratch removal & polishing from ₹3,000",
    "Sofa reupholstery and spring replacement available",
    "6-month warranty on all completed repairs",
    "Same-day and next-day slots available",
    "Verified, experienced carpenters with local knowledge",
    "Eco-friendly wood fillers and non-toxic finishes used",
    "Suitable for DDA flats, builder floors, and independent houses",
  ],
  contentSections: [
    {
      heading: "Furniture Repair Across Janakpuri's Blocks and Beyond",
      body: [
        "Janakpuri's residential character is shaped by its well-planned DDA layout — wide internal roads, green parks, and rows of flat complexes that have stood for decades. The furniture inside these homes tends to be solid-wood or engineered-wood pieces that simply need timely maintenance rather than replacement. Our carpenters are familiar with the typical joinery styles used in Janakpuri homes and stock the fittings most commonly needed, from drawer channels to hinge plates and polishing compounds.",
        "Beyond the core blocks, we regularly serve customers in Uttam Nagar to the south-west, Vikaspuri, and the bustling Tilak Nagar corridor near the metro. Whether you live within walking distance of District Centre Mall or deeper into the quieter pockets of Tagore Garden, our team navigates the local lanes efficiently to reach you fast. Book through our website or call us and mention your nearest landmark — Shivaji Place, Janakpuri Super Speciality Hospital, or the C-Block market — and we'll map the closest available craftsman to you.",
      ],
    },
    {
      heading: "Common Furniture Problems We Fix in Janakpuri",
      body: [
        "After years of heavy use, the furniture in Janakpuri homes shows predictable patterns of wear. Bed frames — especially the older wooden ones in DDA flats — develop loose joints and squeaking slats, making restful sleep difficult. Our carpenters reinforce these joints with heavy-duty dowels and adhesive, replace cracked slats, and tighten headboard fittings so the bed feels solid again. Wardrobe issues are equally common: misaligned shutter panels, broken handles, and rusted hinges are quick fixes that make a big difference in daily usability.",
        "Dining tables in Janakpuri households often show scratched surfaces, ring stains from hot vessels, and dull, oxidised finishes. Our polishing and refinishing service strips the old layer, fills minor dents with professional-grade wood filler, and applies a fresh top coat — transforming a tired table into something that looks showroom-fresh. We also repair dining chairs with loose legs or broken stretchers, ensuring the entire set is stable and presentable once again.",
      ],
    },
    {
      heading: "Affordable Pricing for Every Budget in Janakpuri",
      body: [
        "We understand that Janakpuri's largely middle-class population values honest, budget-friendly services. Our pricing is designed to be transparent: a basic repair visit starts at ₹599, bed frame repairs are quoted between ₹1,500 and ₹5,000 depending on complexity, wardrobe work ranges from ₹500 for a hinge replacement to ₹2,000 for a full door realignment, and dining table polishing is priced from ₹3,000 to ₹8,000 based on size and finish type. All costs are confirmed before work begins — no last-minute add-ons.",
        "We also offer bundled discounts for households needing repairs to multiple pieces simultaneously. If your bedroom set — bed, side tables, and wardrobe — all need attention, booking them together reduces overall cost. Customers near Janakpuri District Centre, Shivaji Place, and the Uttam Nagar stretch regularly take advantage of these combo packages. Visit our [Book Online](/book) page to see current offers or read tips on furniture maintenance on our [Blog](/blog).",
      ],
    },
    {
      heading: "Why Janakpuri Residents Trust Us for Furniture Repair",
      body: [
        "We have built a strong reputation across West Delhi through consistent, on-time service and craftsmanship that lasts. Our customers in Janakpuri frequently mention the professionalism of our carpenters — they arrive in uniform, carry their own tools, protect your floors with drop sheets, and clean up before leaving. This attention to the overall experience, not just the repair itself, keeps residents coming back and recommending us to their neighbours.",
        "Our [Furniture Repair Delhi](/furniture-repair-delhi) network also means that if you need a specialist — such as for antique restoration or high-end custom joinery — we can route the right craftsman to your Janakpuri home. And if upholstery is your primary concern, our [Sofa Repair Delhi](/sofa-repair-delhi) team works alongside the carpentry crew so both fabric and frame are restored in the same visit. For on-demand carpentry work beyond repairs, explore our [Carpenter Home Service Delhi](/carpenter-home-service-delhi) page.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you service all blocks in Janakpuri?",
      answer:
        "Yes, we cover Blocks A through E as well as surrounding areas including Uttam Nagar, Vikaspuri, Tilak Nagar, Subhash Nagar, Hari Nagar, and Tagore Garden. Simply mention your block or nearest landmark when booking.",
    },
    {
      question: "What is the minimum charge for furniture repair in Janakpuri?",
      answer:
        "Our service starts at ₹599 for basic repairs. Bed frame repairs range from ₹1,500 to ₹5,000, wardrobe repairs from ₹500 to ₹2,000, and dining table polishing from ₹3,000 to ₹8,000, always quoted upfront.",
    },
    {
      question: "How quickly can a carpenter reach me in Janakpuri?",
      answer:
        "We offer same-day and next-day appointments across Janakpuri. In most cases a craftsman can arrive within 4–6 hours of booking during peak hours, and even faster during off-peak times.",
    },
    {
      question: "Can you repair DDA flat furniture that is old and has unusual fittings?",
      answer:
        "Absolutely. Our carpenters are experienced with the older joinery styles, wood types, and fittings used in Janakpuri's DDA housing stock. We carry common replacement fittings and can source custom parts if needed.",
    },
    {
      question: "Is there a warranty on furniture repairs in Janakpuri?",
      answer:
        "Yes. All repair work comes with a 6-month warranty. If the same fault reappears within this period, we return and fix it free of charge.",
    },
    {
      question: "Do I need to move the furniture before the carpenter arrives?",
      answer:
        "No. Our craftsmen handle all on-site work without requiring you to dismantle or move pieces. They bring their own tools and protective sheets to keep your space clean.",
    },
    {
      question: "Can you repair both the sofa fabric and the wooden frame in one visit?",
      answer:
        "Yes. Our team includes upholstery specialists and carpenters who can work together on the same visit, addressing both frame and fabric issues for your sofa or any upholstered furniture.",
    },
    {
      question: "Do you offer discounts for repairing multiple furniture pieces in Janakpuri?",
      answer:
        "Yes. Booking repairs for multiple pieces in a single visit — such as a bed, wardrobe, and dining table together — qualifies for a bundled discount. Mention this when booking online or over the phone.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-janakpuri"),
    { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
    { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
    { label: "Furniture Repair West Delhi", href: "/furniture-repair-west-delhi" },
    { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
  ],
  keywords: [
    "furniture repair Janakpuri",
    "furniture repair West Delhi",
    "carpenter Janakpuri",
    "bed repair Janakpuri",
    "wardrobe repair Janakpuri",
    "sofa repair Janakpuri",
    "furniture polishing Janakpuri",
    "home carpenter Janakpuri",
    "furniture repair Vikaspuri",
    "furniture repair Tilak Nagar",
  ],
};

// ─────────────────────────────────────────────
// 2. Saket
// ─────────────────────────────────────────────
export const furnitureRepairSaket: SeoPageData = {
  slug: "furniture-repair-saket",
  title: "Furniture Repair in Saket Delhi | Premium Service ₹599",
  metaDescription:
    "Premium furniture repair in Saket, Mehrauli & Press Enclave from ₹599. Expert restoration for luxury sofas, beds & wardrobes. 6-month warranty, doorstep service.",
  h1: "Furniture Repair in Saket, Delhi",
  heroSubtitle:
    "High-quality furniture repair and restoration for Saket, Mehrauli, Pushp Vihar, Press Enclave & Kishangarh — premium craftsmanship starting at ₹599.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Restoration Service at Your Saket Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional furniture repair technician restoring a premium sofa in a luxury Saket South Delhi home — FurniRevive",
    caption: "Furniture Repair in Saket Delhi | South Delhi | Premium upholstery & restoration | Home visit | FurniRevive",
  },
  quickAnswer:
    "Professional furniture repair across Saket and the wider Mehrauli area starts at ₹599. We specialise in premium furniture restoration for high-value pieces, covering J-Block, G-Block, Freedom Fighters Enclave, and Neb Sarai, with a 6-month warranty on every job.",
  intro: [
    "Saket is among South Delhi's most sought-after residential destinations — a neighbourhood where upscale apartment towers stand alongside older colony homes, all within minutes of Select Citywalk and DLF Place. The furniture in Saket homes reflects this premium character: designer sofas, solid-wood imported beds, modular wardrobes, and antique sideboards that demand skilled, careful repair rather than rough-and-ready fixes. Our furniture repair service in Saket is calibrated to this standard, deploying experienced craftsmen who work with the precision that high-value pieces require.",
    "We cover the full breadth of the Saket area — J-Block and G-Block residences, Press Enclave, Freedom Fighters Enclave, Pushp Vihar, Neb Sarai, and the Mehrauli belt stretching towards the Mehrauli Archaeological Park and Qutub Minar. Each neighbourhood carries its own housing mix, and our teams are equipped to handle everything from a straightforward wardrobe shutter replacement to a complex premium furniture restoration worth ₹5,000–₹25,000.",
    "The Garden of Five Senses and Siri Fort Auditorium are beloved cultural touchstones for Saket residents, who tend to invest meaningfully in their living spaces. We understand that trust matters when craftsmen enter premium homes, which is why every carpenter we deploy in Saket is identity-verified, professionally trained, and reviewed by previous clients. Book via our website, choose a convenient time, and expect punctual, polished service from arrival to sign-off.",
  ],
  whyChoose: [
    {
      title: "Premium Restoration Expertise",
      description:
        "We handle high-value furniture repairs and full restorations priced from ₹5,000 to ₹25,000, using professional-grade finishes that match or exceed original factory standards.",
    },
    {
      title: "South Delhi Coverage",
      description:
        "Service extends across Saket's J-Block, G-Block, Press Enclave, Mehrauli, Kishangarh, Freedom Fighters Enclave, Pushp Vihar, and Neb Sarai without additional travel charges.",
    },
    {
      title: "Luxury & Designer Furniture Handling",
      description:
        "Our craftsmen are trained to work on imported wood, designer upholstery, and modular systems found in premium Saket homes — not just standard local-market furniture.",
    },
    {
      title: "Transparent Premium Pricing",
      description:
        "Wardrobe repairs from ₹500–₹3,000 and full restoration packages up to ₹25,000 are always quoted in writing before work begins, with no hidden surcharges.",
    },
    {
      title: "6-Month Warranty as Standard",
      description:
        "Whether it's a simple hinge repair or a full dining set restoration, every job in Saket carries our 6-month warranty for your complete peace of mind.",
    },
    {
      title: "Discreet, Respectful In-Home Service",
      description:
        "We understand the privacy expectations of Saket residents. Our carpenters work quietly, cleanly, and with full respect for your home environment at all times.",
    },
  ],
  process: [
    {
      step: "Schedule Your Visit",
      description:
        "Book online via our website or call us — mention your Saket block, society name, or nearest landmark such as Select Citywalk or Garden of Five Senses to help us assign the nearest craftsman.",
    },
    {
      step: "Inspection & Transparent Quote",
      description:
        "Our carpenter arrives at your Saket home, carefully assesses the furniture, and provides a written cost estimate covering all materials and labour before any work starts.",
    },
    {
      step: "Expert On-Site Repair or Restoration",
      description:
        "Work is completed in your home using professional tools and quality materials — from woodworking compounds to premium fabric and custom polish — matched to your furniture's specifications.",
    },
    {
      step: "Final Inspection & Warranty Issue",
      description:
        "We conduct a thorough quality check with you present, make any final adjustments, and issue a 6-month warranty certificate for the completed work.",
    },
  ],
  benefits: [
    "Covers all Saket blocks, Mehrauli, and surrounding colonies",
    "Premium furniture restoration up to ₹25,000",
    "Starting price ₹599 for minor repairs",
    "Wardrobe repair from ₹500, full restore up to ₹3,000",
    "Antique and designer furniture specialists available",
    "6-month warranty on all completed work",
    "Discreet service for gated societies and premium apartments",
    "Same-day and scheduled appointments available",
    "Sofa reupholstery with designer fabric options",
    "Dining table and chair set restoration services",
    "Identity-verified and reviewed craftsmen only",
    "Eco-friendly, low-VOC finishes on all polish work",
  ],
  contentSections: [
    {
      heading: "Furniture Repair for Saket's Premium Homes",
      body: [
        "Saket's residential landscape has evolved significantly over the past decade. The older DDA and cooperative society blocks in J-Block and G-Block share the postcode with newer high-rise gated communities, diplomatic residences, and premium builder floors. This diversity means our craftsmen encounter everything from classic solid-teak beds to contemporary modular furniture systems imported from Europe or South-East Asia. We invest in training our Saket team specifically in the techniques required to handle both ends of this spectrum without damage or compromise.",
        "The proximity to Select Citywalk and DLF Place also means many Saket residents purchase high-end branded furniture from premium retail outlets in these malls. When a piece from a luxury brand develops a fault — a warped drawer, a broken mechanism, or a scratched veneer — our craftsmen can restore it to near-original condition without voiding any existing product guarantees. We use matching finishes, manufacturer-approved adhesives, and fabric samples sourced to complement original upholstery.",
      ],
    },
    {
      heading: "Areas Served Around Saket and Mehrauli",
      body: [
        "From the tree-lined lanes of Press Enclave to the culturally rich streets of Mehrauli near the Qutub Minar and Mehrauli Archaeological Park, our service blankets the entire Saket-Mehrauli corridor. We also serve Kishangarh — a densely populated urban village that borders Saket — as well as Freedom Fighters Enclave, Pushp Vihar, Neb Sarai, and the Hauz Khas adjacency. If you're unsure whether your address falls within our coverage zone, simply call us with your pincode and we'll confirm immediately.",
        "Residents in Saket's gated communities appreciate that we coordinate access with security teams and arrive within the promised time window. Our craftsmen carry photo ID and company uniforms, making the entry process seamless. We also serve offices, co-working spaces, and commercial establishments in the Saket area — conference furniture, reception seating, and office storage units are all within scope for our [Furniture Repair Delhi](/furniture-repair-delhi) service.",
      ],
    },
    {
      heading: "Restoration Services for High-Value Furniture",
      body: [
        "Not every furniture problem is a quick fix. Some pieces — antique almirahs, solid rosewood dining sets, hand-carved bedframes — require hours of skilled work involving wood stripping, grain-filling, staining, and lacquering across multiple coats. Our premium restoration service, priced from ₹5,000 to ₹25,000 depending on the piece and scope, delivers workshop-quality results without the logistics of transporting fragile, heavy items out of your home.",
        "Saket customers also frequently request fabric upgrades as part of sofa restoration: replacing worn leatherette with genuine leather, changing upholstery colour to refresh a room's look, or adding foam density improvements for aging cushions. Our [Sofa Repair Delhi](/sofa-repair-delhi) specialists work alongside our carpenters during the same visit, so both structural and aesthetic concerns are addressed together. Explore our [Blog](/blog) for tips on extending the life of premium furniture between professional visits.",
      ],
    },
    {
      heading: "Booking Furniture Repair in Saket",
      body: [
        "Getting started is simple. Visit our [Book Online](/book) page, enter your Saket address or nearest landmark — Garden of Five Senses, Siri Fort Auditorium, or PVR Saket — and select a time slot. Our confirmation is instant and a craftsman's contact number is shared with you ahead of arrival. For premium restoration enquiries that need an initial assessment, you can request a free inspection call before committing to any service.",
        "If you need general carpentry beyond repairs — custom shelving, TV unit modifications, or kitchen cabinet adjustments — our [Carpenter Home Service Delhi](/carpenter-home-service-delhi) team is also available in Saket with a [Home](//) visit. We aim to be your single point of contact for everything furniture and carpentry in your South Delhi home, saving you the effort of searching and vetting multiple vendors.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you repair premium and imported furniture in Saket?",
      answer:
        "Yes. Our craftsmen in Saket are trained to handle high-end and imported furniture, including designer pieces, solid hardwoods, and modular European systems. We use matched finishes and materials to maintain the original look and integrity.",
    },
    {
      question: "What areas near Saket do you cover?",
      answer:
        "We cover J-Block, G-Block, Press Enclave, Freedom Fighters Enclave, Mehrauli, Kishangarh, Pushp Vihar, Neb Sarai, and the surrounding Hauz Khas and Qutub Minar belt.",
    },
    {
      question: "How much does furniture restoration cost in Saket?",
      answer:
        "Minor repairs start at ₹599. Wardrobe work ranges from ₹500 to ₹3,000. Full premium furniture restoration is priced between ₹5,000 and ₹25,000 depending on piece type, size, and scope of work — always quoted before work begins.",
    },
    {
      question: "Can you service furniture in gated societies in Saket?",
      answer:
        "Yes. Our craftsmen carry photo ID, company uniform, and advance confirmation details. We coordinate with society security as required to ensure smooth access.",
    },
    {
      question: "Is there a warranty on furniture repair in Saket?",
      answer:
        "All repairs in Saket carry a 6-month warranty. If the same issue recurs within this period, we return and rectify it at no extra charge.",
    },
    {
      question: "Can you repair antique furniture or heirlooms in Saket?",
      answer:
        "Yes. We offer careful antique restoration services, including wood consolidation, veneer repair, antique polish application, and hardware replacement with period-appropriate fittings.",
    },
    {
      question: "Do you also handle sofa and upholstery repair in Saket?",
      answer:
        "Absolutely. Our sofa repair team works alongside carpenters so both fabric and frame issues can be resolved in the same visit. We offer fabric replacement, foam upgrades, and full reupholstery.",
    },
    {
      question: "How do I book a furniture repair appointment in Saket?",
      answer:
        "Visit our Book Online page, enter your Saket address, and choose a time slot. You'll receive instant confirmation and the craftsman's contact number before arrival.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-saket"),
    { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
    { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
    { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
    { label: "Furniture Repair Malviya Nagar", href: "/furniture-repair-malviya-nagar" },
    { label: "Wooden Furniture Restoration Delhi", href: "/wooden-furniture-restoration-delhi" },
  ],
  keywords: [
    "furniture repair Saket",
    "furniture repair South Delhi",
    "premium furniture repair Saket",
    "carpenter Saket Delhi",
    "wardrobe repair Saket",
    "sofa repair Saket",
    "furniture restoration Saket",
    "antique furniture repair Delhi",
    "furniture repair Mehrauli",
    "furniture repair Press Enclave",
  ],
};

// ─────────────────────────────────────────────
// 3. Malviya Nagar
// ─────────────────────────────────────────────
export const furnitureRepairMalviyaNagar: SeoPageData = {
  slug: "furniture-repair-malviya-nagar",
  title: "Furniture Repair in Malviya Nagar Delhi | From ₹599",
  metaDescription:
    "Doorstep furniture repair in Malviya Nagar, Panchsheel Enclave & Sheikh Sarai from ₹599. Beds, wardrobes, dining sets. 6-month warranty, same-day service available.",
  h1: "Furniture Repair in Malviya Nagar, Delhi",
  heroSubtitle:
    "Reliable furniture repair for Malviya Nagar, Sarvapriya Vihar, Panchsheel Enclave, Khirki Extension & Adchini — quality craftsmanship from ₹599.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your Malviya Nagar Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional furniture repair technician working on a dining set in a Malviya Nagar South Delhi home — FurniRevive",
    caption: "Furniture Repair in Malviya Nagar Delhi | South Delhi | Expert carpentry & wood restoration | Home visit | FurniRevive",
  },
  quickAnswer:
    "Doorstep furniture repair for Malviya Nagar and surrounding South Delhi areas starts at ₹599. We cover all blocks, Sarvapriya Vihar, Panchsheel Enclave, and Khirki Extension, repairing beds, wardrobes, dining sets, and sofas with a 6-month warranty on all work.",
  intro: [
    "Malviya Nagar occupies a fascinating middle ground in South Delhi — old colony bungalows and two-storey houses share the neighbourhood with newer apartment buildings and student accommodation catering to IIT Delhi's sprawling campus nearby. This mix produces an equally diverse furniture landscape: heavy teak and rosewood pieces in older homes, flat-pack and modular sets in modern apartments, and eclectic collections in the independent houses of Sarvapriya Vihar and Panchsheel Enclave. Our furniture repair service in Malviya Nagar is designed to handle this full spectrum competently and affordably.",
    "We operate across all Malviya Nagar blocks, Sarvapriya Vihar, Panchsheel Enclave, Khirki Extension, Sheikh Sarai, Lado Sarai, Savitri Nagar, and Adchini. The Malviya Nagar Main Market and Aurobindo Market are neighbourhood anchors our craftsmen use as navigation references, and our familiarity with the local road layout means we arrive on time regardless of which part of this sprawling locality you live in. From SDA Market to the quieter lanes behind Hauz Khas Village, we've got you covered.",
    "Residents near IIT Delhi often include faculty, researchers, and professionals who appreciate precision and accountability — qualities we take seriously. Our booking process is clean and fast, our pricing is itemised before work begins, and our carpenters are trained to work efficiently without disrupting your home or workspace. Whether you need a quick bed slat replacement or a full dining set refinishing job, expect the same standard of professionalism at every visit.",
  ],
  whyChoose: [
    {
      title: "Wide South Delhi Coverage",
      description:
        "Beyond Malviya Nagar's core blocks, we serve Sarvapriya Vihar, Panchsheel Enclave, Khirki Extension, Sheikh Sarai, Lado Sarai, Savitri Nagar, and Adchini in a single service zone.",
    },
    {
      title: "Handles Old & Modern Furniture Equally",
      description:
        "From the solid rosewood almirahs of old bungalows to the flat-pack and modular sets of newer apartments near IIT Delhi, our craftsmen adapt their techniques to each piece.",
    },
    {
      title: "Competitive ₹599 Starting Price",
      description:
        "Bed frame repairs from ₹1,500–₹5,000, dining set work from ₹3,000–₹10,000, and wardrobe fixes from ₹500–₹2,500 — all quoted transparently before work begins.",
    },
    {
      title: "Landmark-Based Navigation",
      description:
        "Our teams use Malviya Nagar Main Market, Aurobindo Market, Deer Park, Rose Garden, and IIT Delhi as waypoints to reach you quickly regardless of address complexity.",
    },
    {
      title: "6-Month Repair Warranty",
      description:
        "Every job in Malviya Nagar comes with a 6-month service warranty — we return and fix any recurring fault within this period free of charge.",
    },
    {
      title: "Polite, Professional On-Site Conduct",
      description:
        "Particularly valued by our academic and professional customer base near IIT Delhi, our carpenters work neatly, communicate clearly, and leave your space cleaner than they found it.",
    },
  ],
  process: [
    {
      step: "Book Your Appointment",
      description:
        "Use our online booking form and specify your Malviya Nagar block, colony name, or nearest landmark like Deer Park, Aurobindo Market, or IIT Delhi Gate to confirm your service area.",
    },
    {
      step: "Carpenter Visits & Assesses",
      description:
        "Your assigned craftsman arrives at the appointed time, examines each piece of furniture requiring attention, and provides an itemised quote covering parts and labour.",
    },
    {
      step: "Repair Performed In Your Home",
      description:
        "All work is done on-site — bed joints reinforced, wardrobe shutters aligned, dining tables sanded and polished, or sofas reupholstered — without requiring you to arrange transport.",
    },
    {
      step: "Sign-Off & Warranty",
      description:
        "After a joint walkthrough of the completed work, we issue a 6-month warranty certificate and provide care tips to extend the life of the repaired furniture.",
    },
  ],
  benefits: [
    "Covers all Malviya Nagar blocks and surrounding colonies",
    "Doorstep service — no workshop trip required",
    "Starting price ₹599, transparent quotes",
    "Bed frame repair from ₹1,500 to ₹5,000",
    "Wardrobe repair from ₹500 to ₹2,500",
    "Dining set repair and polishing from ₹3,000",
    "Old teak and rosewood furniture specialists",
    "Flat-pack and modular furniture repair available",
    "6-month warranty on every completed repair",
    "Same-day appointments often available",
    "Verified, reviewed carpenters for trusted access",
    "Suitable for bungalows, apartments, and student housing",
  ],
  contentSections: [
    {
      heading: "Serving Malviya Nagar's Diverse Housing Mix",
      body: [
        "Malviya Nagar's residential texture is unique in South Delhi. Walk through the core blocks and you find two-storey houses with courtyards, some of which contain furniture pieces that have been in families for two or three generations — solid Burma teak, hand-carved legs, mortise-and-tenon joints that just need re-gluing rather than replacement. A few streets over, new apartment blocks house professionals and students from IIT Delhi who own contemporary flat-pack or modular furniture that requires very different repair techniques. Our craftsmen are cross-trained to handle both scenarios fluently.",
        "The Hauz Khas Village connection also brings an artsy, design-conscious demographic into the Malviya Nagar orbit. Residents in this segment often own curated, one-of-a-kind pieces that need sympathetic repair rather than a generic fix. We take pride in the care with which our craftsmen approach unusual or designer furniture — assessing the construction method first, sourcing matching materials if needed, and executing the repair in a way that preserves the aesthetic intent of the original piece.",
      ],
    },
    {
      heading: "Types of Furniture We Repair in Malviya Nagar",
      body: [
        "Bed frames are among the most frequently requested repairs in Malviya Nagar. Older solid-wood frames develop wobbly joints and cracked side rails over time; modern platform beds with hydraulic storage mechanisms suffer from cylinder failure and base cracks. Our team handles both, replacing hydraulic units where needed and reinforcing structural joints on traditional beds with precision joinery. Wardrobe repairs are equally in demand — hinges wear out, sliding track systems jam, and door panels warp in humidity changes, all of which we address in a single visit.",
        "Dining table and chair set restoration is a speciality in Malviya Nagar given the number of households with older solid-wood sets that are structurally sound but cosmetically tired. We sand down oxidised surfaces, apply wood grain fillers, stain to the original or a refreshed colour, and finish with a protective lacquer that resists heat and moisture. For a full dining set of six chairs and a table, this typically takes one extended visit and delivers results that rival buying new — at a fraction of the replacement cost.",
      ],
    },
    {
      heading: "Pricing Transparency in Malviya Nagar",
      body: [
        "Our Malviya Nagar pricing follows the same transparent structure as across our Delhi network. Basic repairs start at ₹599. Bed frame repairs are quoted between ₹1,500 and ₹5,000 depending on the extent of structural damage. Wardrobe work ranges from ₹500 for a simple hinge swap to ₹2,500 for a full door replacement or track overhaul. Dining set refinishing falls in the ₹3,000–₹10,000 band depending on table size and number of chairs included. All pricing is confirmed in writing before work begins.",
        "Households in Panchsheel Enclave and Sheikh Sarai who require repair to multiple pieces regularly opt for our multi-item package, which combines carpentry and upholstery work in a single extended visit and qualifies for a combined discount. Visit our [Book Online](/book) page to check current package pricing or browse our [Blog](/blog) for seasonal maintenance guides relevant to South Delhi's climate conditions.",
      ],
    },
    {
      heading: "Why Malviya Nagar Residents Rely on Our Furniture Repair Team",
      body: [
        "Word-of-mouth has been our biggest growth driver in Malviya Nagar. The tight-knit community across colonies like Sarvapriya Vihar and Khirki Extension means that a single excellent repair experience in one household generates bookings from neighbours and building-mates. We've built this trust by being scrupulously honest about what can be repaired and what truly needs replacement, never upselling unnecessarily, and standing behind our work with the 6-month warranty that residents here have come to rely on.",
        "Our broader service network means you can access everything from sofa reupholstery to full-room custom carpentry through a single provider. The [Sofa Repair Delhi](/sofa-repair-delhi) team, [Furniture Repair Delhi](/furniture-repair-delhi) specialists, and [Carpenter Home Service Delhi](/carpenter-home-service-delhi) crews all operate in Malviya Nagar — coordinated from a [Home](//) office so you never need to manage multiple vendors. Book today and experience the difference that professional, warranted furniture care makes.",
      ],
    },
  ],
  faqs: [
    {
      question: "Which areas near Malviya Nagar do you cover?",
      answer:
        "We cover all Malviya Nagar blocks, Sarvapriya Vihar, Panchsheel Enclave, Khirki Extension, Sheikh Sarai, Lado Sarai, Savitri Nagar, and Adchini — the full South Delhi cluster around IIT Delhi and Hauz Khas.",
    },
    {
      question: "Can you repair old teak or rosewood furniture in Malviya Nagar?",
      answer:
        "Yes. Our craftsmen have specific experience with solid hardwood furniture common in older Malviya Nagar bungalows, including joint reinforcement, surface stripping, staining, and traditional polish application.",
    },
    {
      question: "What does furniture repair cost in Malviya Nagar?",
      answer:
        "Repairs start at ₹599. Bed frame work is ₹1,500–₹5,000, wardrobe repair ₹500–₹2,500, and dining set refinishing ₹3,000–₹10,000. All costs are quoted before work begins with no hidden charges.",
    },
    {
      question: "Do you repair flat-pack or IKEA-style furniture?",
      answer:
        "Yes. We repair modular, flat-pack, and furniture from popular assembly-at-home brands — fixing broken joints, replacing cam-lock fittings, and addressing structural failures common in these furniture types.",
    },
    {
      question: "How soon can I get an appointment in Malviya Nagar?",
      answer:
        "We typically offer same-day or next-day slots in Malviya Nagar. Book online and you'll receive instant confirmation with your craftsman's contact details.",
    },
    {
      question: "Is the 6-month warranty available for all repair types?",
      answer:
        "Yes. Whether it's a minor hinge repair or a full dining table refinishing, all work in Malviya Nagar is covered by our 6-month service warranty at no extra cost.",
    },
    {
      question: "Can you handle both sofa and bed repair in the same visit?",
      answer:
        "Yes. We coordinate upholstery and carpentry specialists to attend the same appointment when needed, so all furniture in your home can be addressed in a single visit.",
    },
    {
      question: "Do you serve student accommodation near IIT Delhi?",
      answer:
        "Yes. We serve all residential addresses in the Malviya Nagar and IIT Delhi vicinity, including private student housing, PGs, and apartment rentals — provided access can be arranged by the resident.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-malviya-nagar"),
    { label: "Sofa Repair Malviya Nagar", href: "/sofa-repair-malviya-nagar" },
    { label: "Furniture Repair Saket", href: "/furniture-repair-saket" },
    { label: "Furniture Repair South Delhi", href: "/furniture-repair-south-delhi" },
    { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
  ],
  keywords: [
    "furniture repair Malviya Nagar",
    "furniture repair South Delhi",
    "carpenter Malviya Nagar",
    "bed repair Malviya Nagar",
    "wardrobe repair Malviya Nagar",
    "dining table repair Malviya Nagar",
    "furniture polishing Malviya Nagar",
    "furniture repair Panchsheel Enclave",
    "furniture repair Sarvapriya Vihar",
    "sofa repair Malviya Nagar",
  ],
};

// ─────────────────────────────────────────────
// 4. Pitampura
// ─────────────────────────────────────────────
export const furnitureRepairPitampura: SeoPageData = {
  slug: "furniture-repair-pitampura",
  title: "Furniture Repair in Pitampura Delhi | From ₹599",
  metaDescription:
    "Expert furniture repair in Pitampura, Shalimar Bagh & Kohat Enclave from ₹599. Sofa, bed, wardrobe repairs with bulk discounts. Same-day doorstep service available.",
  h1: "Furniture Repair in Pitampura, Delhi",
  heroSubtitle:
    "Same-day doorstep furniture repair across Pitampura all blocks, Shalimar Bagh, Saraswati Vihar, Rani Bagh & Ashok Vihar — starting at ₹599 with bulk discounts.",
  showcaseImage: {
    heading: "Premium Furniture Repair — Expert Service at Your Pitampura Delhi Home",
    imageUrl: "https://hercules-cdn.com/file_85r5mejd9KcESRrIX7iFrVh8",
    altText: "Professional furniture repair technician servicing a bed frame in a Pitampura North Delhi home — FurniRevive",
    caption: "Furniture Repair in Pitampura Delhi | North Delhi | Same-day combo repair service | Home visit | FurniRevive",
  },
  quickAnswer:
    "Expert furniture repair across Pitampura all residential blocks and Shalimar Bagh starts from ₹599. We offer same-day doorstep service for sofas, beds, and wardrobes, with combo repair discounts for multiple pieces and a 6-month warranty on all completed work.",
  intro: [
    "Pitampura is one of North Delhi's most carefully planned residential neighbourhoods — orderly blocks lettered A through Z, wide internal roads lined with parks, and a predominantly middle to upper-middle class population that takes pride in well-maintained homes. The iconic Pitampura TV Tower is the area's landmark, and residents here tend to own quality furniture that reflects their investment in comfortable, tasteful living. When that furniture needs repair, they want a service that matches the neighbourhood's standard — professional, punctual, and priced fairly.",
    "Our furniture repair service in Pitampura covers every block across the main township as well as the surrounding localities: Shalimar Bagh, Saraswati Vihar, Rani Bagh, Shakurpur, Tri Nagar, Kohat Enclave, Model Town Extension, and Ashok Vihar. The proximity of Netaji Subhash Place metro station and the North Ex Mall makes Pitampura a well-connected hub, and our craftsmen use these as anchor points to navigate the neighbourhood efficiently. Whether you're in an early block near the TV Tower or deeper into Shalimar Bagh, expect on-time arrival.",
    "A notable feature of Pitampura households is that many contain multiple high-use furniture pieces — families have been in these homes for one or two decades, and sofas, beds, and wardrobes have accumulated wear proportional to that tenure. We offer combo repair packages specifically designed for Pitampura customers who need work done on several pieces simultaneously, with bulk discounts that make comprehensive home furniture care genuinely cost-effective.",
  ],
  whyChoose: [
    {
      title: "All Pitampura Blocks A–Z Covered",
      description:
        "Our service zone covers every residential block in the Pitampura township, plus Shalimar Bagh, Saraswati Vihar, Rani Bagh, Shakurpur, Tri Nagar, Kohat Enclave, and Ashok Vihar.",
    },
    {
      title: "Combo Repair Discounts",
      description:
        "Book sofa, bed, and wardrobe repairs together in a single visit and qualify for a bulk discount — the most cost-effective way to refresh all the major furniture in your Pitampura home.",
    },
    {
      title: "Same-Day Doorstep Service",
      description:
        "Many of our Pitampura slots are available the same day you book. No need to wait — a craftsman can often be at your door within hours of confirmation.",
    },
    {
      title: "Starting at ₹599",
      description:
        "Transparent pricing with no hidden charges. Minor repairs from ₹599, structural bed repairs from ₹1,500, wardrobe fixes from ₹500, and full restoration packages at competitive rates.",
    },
    {
      title: "Long-Tenure Home Specialists",
      description:
        "Our craftsmen understand the wear patterns of furniture that has been in use for 10–20 years, common in Pitampura's settled households, and carry the parts and materials most often needed.",
    },
    {
      title: "6-Month Warranty on All Work",
      description:
        "Every repair in Pitampura — from the smallest hinge job to a full sofa-and-bed combo — is backed by our 6-month warranty. We return free of charge if the same fault recurs.",
    },
  ],
  process: [
    {
      step: "Book Online — Mention Your Block",
      description:
        "Visit our booking page and enter your Pitampura block letter or a local reference like TV Tower Market, North Ex Mall, or Netaji Subhash Place metro to confirm your zone instantly.",
    },
    {
      step: "Craftsman Arrives On Time",
      description:
        "Your assigned carpenter reaches your Pitampura address within the agreed slot, conducts a thorough inspection, and provides a complete itemised quote before starting any repair.",
    },
    {
      step: "All Pieces Repaired In One Visit",
      description:
        "Whether it's a sofa, bed, wardrobe, or a combination, our craftsman brings all required tools and materials to complete the full job on-site in a single, efficient visit.",
    },
    {
      step: "Walkthrough, Clean-Up & Warranty",
      description:
        "We walk you through every repair completed, ensure you're satisfied, clean the work area, and issue your 6-month warranty certificate before leaving.",
    },
  ],
  benefits: [
    "Covers all Pitampura blocks A–Z and surrounding areas",
    "Same-day doorstep appointments available",
    "Combo discounts for sofa + bed + wardrobe repairs",
    "Starting price ₹599, no hidden charges",
    "Bulk discount for multiple furniture pieces",
    "6-month warranty on all completed repairs",
    "Experienced with long-tenure home furniture wear",
    "Wardrobe repair from ₹500, full rebuild available",
    "Bed structural repair and hydraulic mechanism replacement",
    "Sofa frame and upholstery combined repair service",
    "Verified, uniformed craftsmen for trusted access",
    "Serves gated blocks, independent houses, and apartments equally",
  ],
  contentSections: [
    {
      heading: "Pitampura's Planned Residential Character and Furniture Needs",
      body: [
        "Pitampura was developed as one of North Delhi's model residential colonies — systematically planned, with lettered blocks, dedicated parks, and community infrastructure. The families who settled here in the 1980s and 1990s invested in quality furniture that was built to last, and indeed much of it has. But decades of daily use mean that these solid pieces now need professional attention: beds with weakened joint systems, wardrobes with sagging shelves and stiff sliding tracks, and sofas whose frames have flexed slightly under years of weight. Our craftsmen diagnose these structural issues precisely and resolve them durably.",
        "The newer sections of Pitampura and adjacent Kohat Enclave have seen more recent construction, bringing in younger families who own contemporary furniture — modular kitchens with cabinet door issues, platform beds with gas-lift storage mechanisms, and designer sofas requiring delicate fabric care. Our team bridges both eras of furniture ownership, carrying tools for both traditional joinery and modern mechanism repair so every Pitampura household gets the right expertise at the door.",
      ],
    },
    {
      heading: "Combo Repair Packages for Pitampura Homes",
      body: [
        "One of the most popular requests we receive from Pitampura residents is a multi-item repair visit — particularly sofa + bed + wardrobe combinations. Because these three items carry the heaviest daily use in any home, they tend to develop faults around the same time. Booking them together in a single visit not only saves time but also qualifies for our bulk discount structure, making comprehensive home furniture care significantly more affordable than three separate bookings.",
        "Our combo packages are flexible. You might need a full sofa frame repair and cushion re-stuffing, a bed frame joint reinforcement and slat replacement, and a wardrobe door realignment all in the same morning. Our craftsman arrives prepared for all three, manages the sequence efficiently, and completes the job before lunch in most cases. To explore current combo pricing, visit our [Book Online](/book) page or speak to our team, who will customise a package based on what your Pitampura home needs.",
      ],
    },
    {
      heading: "Areas Around Pitampura We Serve",
      body: [
        "From the TV Tower Market corridor in the centre of Pitampura to the residential pockets of Shalimar Bagh, our coverage is comprehensive. Shalimar Bagh is a natural extension of the Pitampura service zone — a mix of plotted houses and apartment complexes where furniture repair demand is consistently high. Saraswati Vihar, Rani Bagh, and Shakurpur to the south and west are similarly well within our zone, and we serve Model Town Extension and Ashok Vihar to the east without any additional travel surcharge.",
        "The Wazirpur District Centre and World Trade Centre near Wazirpur Industrial Area mark the outer edge of our Pitampura cluster coverage. Commercial clients at these business addresses — offices, showrooms, and co-working spaces — can also access our furniture repair service for reception seating, conference tables, and storage units. For additional carpentry needs beyond repairs, our [Carpenter Home Service Delhi](/carpenter-home-service-delhi) team is available across the full Pitampura zone.",
      ],
    },
    {
      heading: "Reliable and Trusted Furniture Repair in Pitampura",
      body: [
        "Pitampura residents have responded positively to our commitment to punctuality and transparency. The neighbourhood's tight block structure means our craftsmen know the area well and arrive on time without confusion over addresses. We also appreciate that Pitampura families often have children or elderly members at home, which is why our carpenters are selected not only for technical skill but also for courteous, respectful conduct in a family home environment.",
        "Our reviews from Pitampura consistently highlight the value of the 6-month warranty — families here plan their repair schedules carefully, and knowing that a re-occurrence is covered free of charge gives them confidence to proceed. Explore our [Furniture Repair Delhi](/furniture-repair-delhi) and [Sofa Repair Delhi](/sofa-repair-delhi) service pages to understand the full scope of what we offer, or visit our [Blog](/blog) for maintenance tips tailored to North Delhi's seasonal climate changes. Ready to book? Visit our [Home](//) page to get started.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you cover all blocks in Pitampura?",
      answer:
        "Yes. We cover all residential blocks A through Z in Pitampura, plus Shalimar Bagh, Saraswati Vihar, Rani Bagh, Shakurpur, Tri Nagar, Kohat Enclave, Model Town Extension, and Ashok Vihar.",
    },
    {
      question: "Do you offer discounts for repairing multiple furniture pieces in Pitampura?",
      answer:
        "Yes. Booking a sofa, bed, and wardrobe repair together in a single visit qualifies for our combo bulk discount. Speak to our team when booking to get a combined package quote.",
    },
    {
      question: "Can I get same-day furniture repair in Pitampura?",
      answer:
        "In most cases, yes. We maintain craftsman availability across Pitampura for same-day appointments. Book online or call us in the morning for same-day slots.",
    },
    {
      question: "What is the starting price for furniture repair in Pitampura?",
      answer:
        "Our service starts at ₹599. Bed structural repairs are ₹1,500 and above, wardrobe repairs from ₹500, and sofa combo packages are available at discounted rates when booked together.",
    },
    {
      question: "Do you service areas near Pitampura like Shalimar Bagh and Ashok Vihar?",
      answer:
        "Yes. Shalimar Bagh, Ashok Vihar, Kohat Enclave, and Model Town Extension are all included in our Pitampura service zone at no extra travel charge.",
    },
    {
      question: "Do you repair hydraulic storage bed mechanisms in Pitampura?",
      answer:
        "Yes. We replace worn or failed gas-lift and hydraulic storage mechanisms in platform beds — a very common repair request in Pitampura homes with modern storage beds.",
    },
    {
      question: "Is there a warranty on furniture repairs in Pitampura?",
      answer:
        "All repairs in Pitampura carry a 6-month warranty. If the same fault recurs within this period, we return and fix it at no additional cost.",
    },
    {
      question: "Can you repair commercial furniture at offices near Wazirpur or NSP?",
      answer:
        "Yes. We serve commercial clients at Netaji Subhash Place, Wazirpur District Centre, and World Trade Centre for office chair, table, reception, and storage unit repairs.",
    },
  ],
  relatedPages: [
    ...relatedExcluding("furniture-repair-pitampura"),
    { label: "Sofa Repair Pitampura", href: "/sofa-repair-pitampura" },
    { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
    { label: "Furniture Repair North Delhi", href: "/furniture-repair-north-delhi" },
    { label: "Wooden Furniture Restoration Delhi", href: "/wooden-furniture-restoration-delhi" },
    { label: "Luxury Furniture Restoration North Delhi", href: "/luxury-furniture-restoration-north-delhi" },
    { label: "Recliner Motor Repair North Delhi", href: "/recliner-motor-repair-north-delhi" },
  ],
  keywords: [
    "furniture repair Pitampura",
    "furniture repair North Delhi",
    "carpenter Pitampura Delhi",
    "sofa repair Pitampura",
    "bed repair Pitampura",
    "wardrobe repair Pitampura",
    "furniture repair Shalimar Bagh",
    "combo furniture repair Delhi",
    "furniture repair Kohat Enclave",
    "same day furniture repair Pitampura",
  ],
};

// ─────────────────────────────────────────────
// Aggregate Export
// ─────────────────────────────────────────────
export const DELHI_FURNITURE_PAGES: SeoPageData[] = [
  furnitureRepairJanakpuri,
  furnitureRepairSaket,
  furnitureRepairMalviyaNagar,
  furnitureRepairPitampura,
];
