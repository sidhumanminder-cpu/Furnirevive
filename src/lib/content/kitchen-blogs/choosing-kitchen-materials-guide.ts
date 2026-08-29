export type KitchenBlogSection = { heading?: string; body: string[] };
export type KitchenBlogContent = {
  sections: KitchenBlogSection[];
  faqs: { question: string; answer: string }[];
};

export const content: KitchenBlogContent = {
  sections: [
    {
      heading: "How to Choose Modular Kitchen Cabinet Materials: The Complete Guide",
      body: [
        "The material and finish you choose for your modular kitchen cabinets will define how your kitchen looks, how long it lasts, how easy it is to maintain, and how much it costs. With seven major material options available in the Indian market, the choice can be confusing.",
        "This guide explains each material in detail, provides a decision framework based on your priorities, and includes a quick comparison so you can choose with confidence.",
      ],
    },
    {
      heading: "1. Laminate Finish",
      body: [
        "Laminate is a thin layer of decorative paper impregnated with melamine resin, pressed onto a plywood or HDHMR substrate at high temperature. It is the most popular kitchen finish in India due to its unbeatable combination of affordability, durability, and variety.",
        "Laminate is scratch-resistant, moisture-tolerant (though not waterproof), and available in hundreds of colours, textures, and patterns — including wood grain, stone, metallic, and solid colours. It handles the heat and humidity of Indian kitchens well and is easy to clean with a damp cloth.",
        "Cost range: Rs 1,200–2,000 per sq ft (including core material and fabrication). Maintenance: Low — wipe with a damp cloth. Lifespan: 10–15 years with proper care.",
        '<a href="/modular-kitchen-laminate">Explore laminate kitchen designs and pricing</a>.',
      ],
    },
    {
      heading: "2. Acrylic Finish",
      body: [
        "Acrylic is a high-gloss finish created by bonding a 1 mm thick acrylic sheet to the substrate using high-pressure adhesive. The result is a mirror-like, reflective surface that makes kitchens look modern, spacious, and luxurious.",
        "Acrylic is highly moisture-resistant, non-porous (will not absorb stains), and colour-stable — it does not yellow over time. However, it is prone to visible fingerprints and fine scratches, so it requires regular wiping.",
        "Cost range: Rs 1,800–2,800 per sq ft. Maintenance: Medium — frequent wiping to remove fingerprints. Lifespan: 12–18 years.",
        '<a href="/modular-kitchen-acrylic">Explore acrylic kitchen designs and pricing</a>.',
      ],
    },
    {
      heading: "3. Membrane (Thermofoil) Finish",
      body: [
        "Membrane finish is created by vacuum-pressing a PVC film onto an MDF or HDHMR substrate using heat and adhesive. It allows for routed (grooved) door profiles and curved edges that other flat finishes cannot achieve.",
        "Membrane is budget-friendly and available in matte and textured options. However, it is the least heat-resistant option — prolonged exposure to steam near the hob can cause the membrane to peel over time. Keep membrane panels away from direct heat zones.",
        "Cost range: Rs 900–1,500 per sq ft. Maintenance: Low. Lifespan: 6–10 years (less if exposed to high heat/steam).",
      ],
    },
    {
      heading: "4. PVC Finish",
      body: [
        "PVC (Polyvinyl Chloride) modular kitchens use hollow PVC boards or PVC-coated panels instead of plywood. They are 100 percent waterproof, termite-proof, and immune to swelling — making them ideal for ground-floor kitchens or homes with recurring water leakage issues.",
        "The downside is that PVC has a plasticky appearance and limited design flexibility. It cannot support very heavy loads (tall pantry units require reinforcement) and the colour range is narrower than laminate or acrylic.",
        "Cost range: Rs 800–1,400 per sq ft. Maintenance: Very low — waterproof. Lifespan: 8–12 years.",
      ],
    },
    {
      heading: "5. PU (Polyurethane) Paint Finish",
      body: [
        "PU paint is a multi-coat spray-applied finish that creates an ultra-smooth, seamless, furniture-grade surface. It is the material of choice for luxury kitchens because it offers an unmatched depth of colour and a flawless matte or gloss sheen.",
        "PU is highly durable, scratch-resistant, and can be repaired (unlike laminate or acrylic which require full panel replacement). However, it is the most expensive finish option and requires a skilled spray booth setup, which increases manufacturing time.",
        "Cost range: Rs 2,500–4,500 per sq ft. Maintenance: Medium — gentle cleaning, avoid abrasives. Lifespan: 15–20 years.",
        '<a href="/modular-kitchen-pu">Explore PU finish kitchen designs and pricing</a>.',
      ],
    },
    {
      heading: "6. Veneer Finish",
      body: [
        "Veneer is a thin slice (0.5–1 mm) of natural wood bonded to a plywood substrate, then sealed with a clear PU or lacquer coating. It gives the warmth and beauty of solid wood without the cost, weight, or warping issues.",
        "Veneer is perfect for kitchens where you want a natural, earthy aesthetic. Popular species include teak, walnut, oak, and ash. However, veneer requires more maintenance than synthetic finishes — it needs re-polishing every 5–7 years and is sensitive to prolonged moisture.",
        "Cost range: Rs 2,000–3,500 per sq ft. Maintenance: Medium-high — periodic re-polishing required. Lifespan: 12–20 years with proper care.",
        '<a href="/modular-kitchen-veneer">Explore veneer kitchen designs and pricing</a>.',
      ],
    },
    {
      heading: "7. Glass Finish",
      body: [
        "Back-painted or lacquered glass panels are bonded to the cabinet substrate to create a sleek, ultra-modern look. Glass is typically used as an accent — on wall cabinet shutters or a display unit — rather than across the entire kitchen because of its weight and fragility.",
        "Glass is easy to clean, completely moisture-proof, and offers striking visual depth. However, it is the heaviest option, prone to chipping at edges, and the most expensive to replace if damaged.",
        "Cost range: Rs 2,200–3,800 per sq ft. Maintenance: Low — glass cleans easily. Lifespan: 10–15 years (protected from impact).",
      ],
    },
    {
      heading: "Decision Framework: How to Choose",
      body: [
        "Budget is your primary constraint: Choose laminate (best value) or membrane (lowest cost).",
        "Moisture is a major concern (ground floor, coastal, or leaky plumbing): Choose PVC (waterproof) or acrylic (moisture-resistant).",
        "Aesthetics are the top priority and budget is flexible: Choose PU paint (luxury) or acrylic (high gloss).",
        "You want a natural wood look: Choose veneer (real wood beauty) with proper sealing.",
        "Low maintenance is critical: Choose laminate (durable and forgiving) or PVC (waterproof and wipe-clean).",
        "Modern, reflective look in a contemporary home: Choose acrylic or glass accents.",
        "Heavy Indian cooking with lots of oil and steam: Avoid membrane near the hob. Laminate, acrylic, or PU are better choices near heat zones.",
      ],
    },
    {
      heading: "Quick Comparison (Text Table)",
      body: [
        "Laminate — Cost: Low-Medium, Moisture Resistance: Good, Durability: High, Look: Wide variety, Maintenance: Low.",
        "Acrylic — Cost: Medium-High, Moisture Resistance: Excellent, Durability: High, Look: High gloss, Maintenance: Medium (fingerprints).",
        "Membrane — Cost: Low, Moisture Resistance: Fair, Durability: Medium, Look: Matte/textured profiles, Maintenance: Low.",
        "PVC — Cost: Low, Moisture Resistance: Excellent (waterproof), Durability: Medium, Look: Limited, Maintenance: Very Low.",
        "PU Paint — Cost: High, Moisture Resistance: Good, Durability: Very High, Look: Luxury seamless, Maintenance: Medium.",
        "Veneer — Cost: Medium-High, Moisture Resistance: Fair, Durability: High (with care), Look: Natural wood, Maintenance: Medium-High.",
        "Glass — Cost: High, Moisture Resistance: Excellent, Durability: Medium (fragile), Look: Ultra-modern, Maintenance: Low.",
      ],
    },
    {
      heading: "Our Recommendation",
      body: [
        "For most families in Delhi NCR, laminate offers the best balance of cost, durability, and aesthetics. If your budget allows and you prefer a premium, glossy look, acrylic is an excellent upgrade. For luxury homes where budget is secondary to design impact, PU paint delivers an unmatched finish.",
        "Whichever material you choose, ensure the core substrate is BWR-grade plywood or HDHMR — never accept plain MDF or MR-grade board in a kitchen environment. The finish is only as good as what it is bonded to.",
      ],
    },
  ],
  faqs: [
    {
      question: "Which kitchen cabinet material is best for Indian cooking?",
      answer:
        "Laminate and acrylic are the best choices for Indian cooking environments. Both handle heat, humidity, and grease well. Avoid membrane finish near the hob area as it can peel with prolonged steam exposure.",
    },
    {
      question: "Is acrylic better than laminate for a modular kitchen?",
      answer:
        "Acrylic offers a more luxurious high-gloss appearance and better moisture resistance, but it costs 30–50 percent more and shows fingerprints easily. Laminate is more practical for most families and offers better scratch resistance. Choose based on your budget and aesthetic preference.",
    },
    {
      question: "What is the most durable modular kitchen material?",
      answer:
        "PU (Polyurethane) paint finish is the most durable long-term option — lasting 15–20 years — and can even be locally repaired. Laminate and acrylic are close seconds, lasting 10–18 years respectively.",
    },
    {
      question: "Can I mix materials in the same kitchen?",
      answer:
        "Absolutely. Many designs combine materials for visual contrast and practical reasons — for example, laminate base cabinets (easy to clean at floor level) with acrylic or glass wall cabinets (reflective, making the kitchen look larger).",
    },
    {
      question: "What is BWR-grade plywood and why does it matter?",
      answer:
        "BWR stands for Boiling Water Resistant. It means the plywood can withstand humid conditions without delaminating. Kitchens have constant moisture from cooking, washing, and plumbing — BWR grade ensures your cabinet cores do not swell or disintegrate over time.",
    },
    {
      question: "How do I maintain a glossy acrylic kitchen?",
      answer:
        "Wipe daily with a soft microfiber cloth and warm water. For grease, use a mild dish soap solution. Avoid abrasive cleaners, steel wool, or solvents. Buff dry to prevent water spots. Handle with clean hands to minimise fingerprint marks.",
    },
    {
      question: "Which material is best for a waterproof kitchen?",
      answer:
        "PVC is the only fully waterproof option — ideal for ground-floor kitchens or areas prone to water leakage. Acrylic and glass are moisture-resistant but not submersion-proof. For most kitchens, BWR-grade plywood with laminate or acrylic finish provides adequate moisture protection.",
    },
  ],
};

export default content;
