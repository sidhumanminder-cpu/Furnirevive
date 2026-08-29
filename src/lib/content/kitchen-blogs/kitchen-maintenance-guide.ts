export type KitchenBlogSection = { heading?: string; body: string[] };
export type KitchenBlogContent = {
  sections: KitchenBlogSection[];
  faqs: { question: string; answer: string }[];
};

export const content: KitchenBlogContent = {
  sections: [
    {
      heading: "Modular Kitchen Maintenance Guide: Keep Your Kitchen Looking New for Years",
      body: [
        "A well-maintained modular kitchen can look and function like new for 15–20 years. Neglect it, and you will face peeling edges, sagging doors, jammed drawers, and dull surfaces within 3–5 years — regardless of how much you spent.",
        "This guide covers daily cleaning by material type, hardware care, an annual maintenance checklist, warranty-voiding actions to avoid, and when to call in a professional.",
      ],
    },
    {
      heading: "Daily Cleaning by Material Type",
      body: [
        "The right cleaning approach depends on your cabinet finish. Using the wrong cleaner or tool can cause permanent damage.",
      ],
    },
    {
      heading: "Acrylic Finish — Daily Care",
      body: [
        "Wipe with a soft microfiber cloth dampened with warm water. For grease spots, add 2–3 drops of mild dish soap to warm water and wipe gently. Buff dry immediately to prevent water spots and streaking. Never use abrasive pads, steel wool, or ammonia-based cleaners on acrylic — they will scratch or dull the glossy surface.",
        "Fingerprints are the enemy of acrylic. Keep a dry microfiber cloth handy and wipe handles and frequently touched areas at least once daily.",
      ],
    },
    {
      heading: "Laminate Finish — Daily Care",
      body: [
        "Laminate is the most forgiving finish. Wipe with a damp cloth and mild soap. For stubborn stains (turmeric, tomato), apply a paste of baking soda and water, let sit for 5 minutes, then wipe off gently. Avoid abrasive scrubbers that can wear down the textured surface over time.",
        "Dry the surface after cleaning — while laminate resists moisture well, standing water at joints can seep into edges over years.",
      ],
    },
    {
      heading: "Veneer Finish — Daily Care",
      body: [
        "Veneer is natural wood and requires gentler treatment. Dust daily with a dry soft cloth. For cleaning, use a barely damp cloth — never soak veneer. Wipe in the direction of the wood grain. Apply a wood polish or wax every 2–3 months to maintain the sheen and create a moisture barrier.",
        "Keep veneer panels away from direct water splashes. If water spills on veneer, wipe it immediately — prolonged moisture causes the wood to swell and the finish to cloud.",
      ],
    },
    {
      heading: "Hardware Care: Hinges, Channels, and Mechanisms",
      body: [
        "Hinges: Check all hinges every 3 months. Look for looseness — if a door droops or does not close flush, the hinge screws may need tightening. Use a Phillips screwdriver to snug them. If screws spin freely (stripped hole), you will need a professional to re-anchor them.",
        "Soft-close mechanism: If doors slam instead of closing gently, the soft-close damper may be worn. Most Hettich and Hafele soft-close units are replaceable without changing the entire hinge. Contact your vendor for a replacement cartridge.",
        "Drawer channels (telescopic slides): Pull each drawer fully out once a month and wipe the channel rails with a dry cloth to remove dust and food particles. If a drawer feels sticky, apply a tiny drop of light machine oil or silicone lubricant to the ball-bearing track.",
        "Pull-out mechanisms (tall unit, corner carousel, magic corner): These have more moving parts and joints. Inspect them every 6 months. Tighten any loose bolts and lubricate pivot points. Do not overload — respect the weight capacity printed on the mechanism or listed in your warranty document.",
      ],
    },
    {
      heading: "Annual Maintenance Checklist",
      body: [
        "1. Inspect all cabinet edges for peeling or chipping. Catch peeling early and re-seal with edge band adhesive before moisture enters the core.",
        "2. Check under the sink for leaks or dampness. Under-sink cabinets are most vulnerable to water damage. Replace any deteriorating seals or plumbing gaskets immediately.",
        "3. Examine countertop joints and wall-countertop sealant. If the silicone sealant has cracked or pulled away, scrape it off and re-apply fresh food-grade silicone to prevent water seeping behind cabinets.",
        "4. Test all soft-close doors and drawers. Replace any dampers that have lost their cushioning effect.",
        "5. Tighten all handle and knob screws. Daily use loosens them gradually.",
        "6. Inspect the chimney duct and filter. Clean or replace baffle/charcoal filters per manufacturer schedule to maintain suction efficiency.",
        "7. Check for termite or pest activity around the kitchen perimeter, especially near the floor. Treat immediately if found.",
        "8. Re-polish veneer surfaces if applicable. Veneer needs a fresh coat of sealer or lacquer every 5–7 years to maintain moisture resistance.",
      ],
    },
    {
      heading: "What Voids Your Modular Kitchen Warranty",
      body: [
        "Understanding warranty exclusions helps you avoid accidentally voiding your coverage. Common warranty-voiding actions include: using harsh chemical cleaners (bleach, acid-based cleaners, acetone) on cabinet surfaces; drilling into or modifying factory-made panels without vendor approval; overloading drawers or pull-outs beyond their rated capacity; ignoring a visible leak that causes prolonged water exposure to cabinet cores; and using the kitchen in a commercial setting if the warranty specifies residential use only.",
        "Always read your warranty document carefully and keep a copy accessible. If in doubt about whether a specific action voids coverage, contact your vendor before proceeding.",
      ],
    },
    {
      heading: "When to Call a Professional",
      body: [
        "While most daily and monthly maintenance is DIY-friendly, certain situations require professional intervention: cabinet core swelling (indicates water damage that needs panel replacement), persistent hinge misalignment that tightening does not fix, countertop cracking or chipping, electrical issues inside the kitchen (faulty under-cabinet lights, malfunctioning chimney), and any structural movement or settlement causing cabinet misalignment.",
        'FurniRevive provides after-sales service across Delhi NCR for all kitchens we install. Our team can diagnose and fix issues quickly, often in a single visit. <a href="/modular-kitchen-delhi">Learn more about our modular kitchen services</a> including post-installation support and warranty claims.',
      ],
    },
  ],
  faqs: [
    {
      question: "How often should I clean my modular kitchen cabinets?",
      answer:
        "Wipe cabinet surfaces near the hob and sink daily, as these areas accumulate grease and moisture fastest. Other cabinets can be wiped weekly. Deep cleaning (handles, interiors, hardware) should be done monthly.",
    },
    {
      question: "Can I use vinegar to clean my kitchen cabinets?",
      answer:
        "Diluted white vinegar (mixed with water in a 1:3 ratio) is safe for laminate surfaces. However, avoid vinegar on acrylic (it can dull the gloss), veneer (acid can damage the wood finish), and natural stone countertops (acid etches marble and granite).",
    },
    {
      question: "How long does a modular kitchen last with proper maintenance?",
      answer:
        "A well-maintained modular kitchen with quality materials and hardware typically lasts 15–20 years. The cabinet structure lasts longest (15–25 years), while finishes may need refreshing after 10–15 years and hardware after 8–12 years.",
    },
    {
      question: "What should I do if my cabinet edges start peeling?",
      answer:
        "Catch it early. If just the edge tape is lifting, you can re-seal it using a hot iron and edge band adhesive (available at hardware stores). If the core material underneath has swollen from moisture, the panel needs professional replacement.",
    },
    {
      question: "How do I maintain soft-close hinges?",
      answer:
        "Soft-close hinges require minimal maintenance. Check tightness every 3 months and tighten screws if doors are misaligned. If the damping effect weakens, the soft-close cartridge (a replaceable component in quality brands) can be swapped without replacing the entire hinge.",
    },
    {
      question: "Is it normal for drawers to become stiff over time?",
      answer:
        "Slight stiffness can develop due to dust accumulation on the ball-bearing tracks. Pull the drawer fully out, wipe the rails with a dry cloth, and apply a small amount of silicone lubricant. If stiffness persists, the channel bearings may be worn and need replacement.",
    },
    {
      question: "Does modular kitchen maintenance cost extra after the warranty period?",
      answer:
        "Yes. After the warranty period, repairs (replacement panels, hardware, professional labour) are charged separately. However, regular preventive maintenance significantly reduces the need for expensive repairs. Budget Rs 2,000–5,000 per year for minor upkeep after warranty expiry.",
    },
  ],
};

export default content;
