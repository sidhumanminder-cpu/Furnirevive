export type KitchenBlogSection = { heading?: string; body: string[] };
export type KitchenBlogContent = {
  sections: KitchenBlogSection[];
  faqs: { question: string; answer: string }[];
};

export const content: KitchenBlogContent = {
  sections: [
    {
      heading: "10 Common Modular Kitchen Renovation Mistakes (and How to Avoid Them)",
      body: [
        "A kitchen renovation is one of the most impactful home improvement projects you can undertake — but it is also one of the easiest to get wrong. We have seen hundreds of kitchen projects across Delhi NCR, and certain mistakes come up again and again.",
        "Avoiding these ten pitfalls will save you money, time, and the frustration of living with a kitchen that does not work as well as it should.",
      ],
    },
    {
      heading: "Mistake 1: Not Measuring Correctly",
      body: [
        "Inaccurate measurements are the root cause of most kitchen fitting problems. A wall that is 10 mm shorter than recorded means a module will not fit. A beam that was not noted means wall cabinets need to be re-ordered.",
        "The fix: Measure every wall at three heights (floor, counter, ceiling). Note beams, pillars, pipes, and electrical points precisely. Better yet, request a professional laser measurement from your vendor.",
      ],
    },
    {
      heading: "Mistake 2: Ignoring the Kitchen Work Triangle",
      body: [
        "The work triangle — the path between sink, stove, and refrigerator — should be efficient and unobstructed. Many homeowners place these three elements based on aesthetics or plumbing convenience without considering how they will actually move while cooking.",
        "The fix: Each side of the triangle should be 4–9 feet, with a total perimeter of 13–26 feet. No traffic path should cut through the triangle. Discuss workflow with your designer before finalising the layout.",
      ],
    },
    {
      heading: "Mistake 3: Too Little Storage",
      body: [
        "Indian kitchens accumulate a vast amount of cookware, utensils, spices, groceries, and appliances. Underestimating storage needs leads to cluttered countertops and overstuffed cabinets within months of moving in.",
        "The fix: List everything that will live in the kitchen — every pot, pan, appliance, and grocery category. Design storage for 20 percent more than your current inventory to accommodate future additions. Use pull-outs, tall units, corner carousels, and overhead storage to maximise capacity.",
      ],
    },
    {
      heading: "Mistake 4: Choosing the Wrong Material for Your Climate",
      body: [
        "Delhi NCR experiences extreme heat in summer, high humidity during monsoon, and cold dry winters. Materials that work fine in air-conditioned showrooms may not survive the real conditions in your kitchen — especially if you cook heavily with open flames and steam.",
        "The fix: Avoid membrane finish near the hob (it peels with heat). Choose BWR-grade plywood or HDHMR for cabinet cores — never plain MDF or MR-grade board. In ground-floor or high-humidity homes, consider PVC or acrylic for superior moisture resistance.",
      ],
    },
    {
      heading: "Mistake 5: Buying Cheap Hardware",
      body: [
        "Hardware — hinges, drawer channels, pull-out mechanisms — is the part of your kitchen you touch and use hundreds of times a day. Cheap, unbranded hardware fails within 1–2 years: doors sag, drawers jam, and soft-close mechanisms stop working.",
        "The fix: Invest in Hettich, Hafele, or equivalent branded hardware. The cost difference is Rs 8,000–15,000 for an average kitchen but adds 8–10 years to the functional life of your cabinets. Always verify the hardware brand before signing a contract.",
      ],
    },
    {
      heading: "Mistake 6: Skipping the 3D Design Stage",
      body: [
        "Some homeowners rush from measurement straight to manufacturing without reviewing a detailed 3D design. This means they cannot visualise door swing conflicts, blocked sockets, or awkward sightlines until the kitchen is already installed — by which point changes are expensive.",
        'The fix: Insist on a photorealistic 3D render before production begins. Walk through the design virtually. Check that cabinet doors do not collide, drawers clear adjacent appliances, and countertop workflow is logical. <a href="/book">Book a free 3D design consultation with FurniRevive</a> to see your kitchen before it is built.',
      ],
    },
    {
      heading: "Mistake 7: No Written Warranty",
      body: [
        "Many vendors promise verbally that their work will last 10 years but refuse to put it in writing. Without a written warranty document specifying exactly what is covered, for how long, and under what conditions, you have zero recourse if something fails.",
        "The fix: Demand a written warranty before paying any advance. It should clearly state: structural coverage (in years), hardware coverage (in years), finish coverage (in years), and exclusions. If a vendor refuses to give a written warranty, walk away.",
      ],
    },
    {
      heading: "Mistake 8: Ignoring Ventilation",
      body: [
        "Indian cooking generates enormous amounts of steam, smoke, and grease-laden air. Without adequate ventilation, your beautiful new kitchen will yellow, accumulate sticky residue on surfaces, and develop moisture damage within a year.",
        "The fix: Install a properly sized chimney (suction power of 1000–1500 m3/hr for Indian cooking) positioned 24–30 inches above the hob. Ensure there is an exhaust duct to the outside — recirculating chimneys are far less effective. Add a window exhaust fan as a backup for heavy cooking sessions.",
      ],
    },
    {
      heading: "Mistake 9: Getting the Lighting Wrong",
      body: [
        "Kitchens need layered lighting — ambient for general visibility, task lighting under wall cabinets for countertop prep, and accent lighting for display or visual interest. A single ceiling tube light (still common in many Indian kitchens) creates shadows exactly where you are cutting and cooking.",
        "The fix: Plan lighting during the design stage, not as an afterthought. Install LED strip lights under every wall cabinet for shadow-free countertop illumination. Add a ceiling flush mount or downlights for ambient light. Consider warm white (3000K) for a welcoming feel or neutral white (4000K) for clarity.",
      ],
    },
    {
      heading: "Mistake 10: Rushing the Snag Process",
      body: [
        "After weeks of waiting, homeowners are eager to start using their new kitchen immediately after installation. They sign off without a thorough inspection, only to discover alignment issues, chipped edges, or non-functional soft-close mechanisms days later.",
        "The fix: Schedule a dedicated snag walk-through with the installation supervisor. Open and close every single door and drawer. Check alignment, edge quality, countertop joints, and hardware function. Create a written snag list and withhold 10 percent of the final payment until all snags are resolved.",
      ],
    },
    {
      heading: "The Bottom Line",
      body: [
        "Kitchen renovation mistakes are expensive to fix after the fact. The best defence is thorough planning, a reputable vendor, and a structured process — from 3D design through to snag-free handover.",
        'FurniRevive helps Delhi NCR homeowners avoid all ten of these mistakes through our comprehensive design-to-installation process, branded hardware, and 10-year warranty. <a href="/book">Book your free consultation</a> and get it right the first time.',
      ],
    },
  ],
  faqs: [
    {
      question: "What is the biggest mistake people make during kitchen renovation?",
      answer:
        "Not measuring correctly. Inaccurate measurements cascade into fitting problems that are expensive and time-consuming to fix. Always measure at multiple heights and note every obstruction — or request a professional laser measurement.",
    },
    {
      question: "How much should I budget for kitchen hardware separately?",
      answer:
        "Quality branded hardware (Hettich or Hafele) typically adds Rs 15,000–40,000 to your total kitchen cost depending on the number of cabinets and accessories. This is a worthwhile investment that significantly extends the kitchen's functional life.",
    },
    {
      question: "Is a 3D design consultation really necessary?",
      answer:
        "Yes. A 3D design allows you to catch errors (door collisions, blocked sockets, workflow issues) before manufacturing begins. Fixing problems in a digital design costs nothing. Fixing them after installation costs thousands.",
    },
    {
      question: "How do I know if my kitchen ventilation is adequate?",
      answer:
        "A properly ventilated kitchen should not have visible grease on cabinet surfaces after a week of cooking, condensation on windows during cooking, or a lingering smell 30 minutes after cooking. If you notice any of these, upgrade your chimney or add exhaust ventilation.",
    },
    {
      question: "What should a good kitchen warranty cover?",
      answer:
        "A comprehensive warranty should cover structural integrity (core material not warping or delaminating), hardware function (hinges, channels, mechanisms), and finish quality (not peeling, fading, or discolouring under normal use). FurniRevive covers all three for 10 years.",
    },
    {
      question: "Can I do a partial kitchen renovation or must I redo everything?",
      answer:
        "Partial renovation is absolutely possible. You can replace just the shutters (doors) and keep existing carcasses if they are structurally sound. Or replace hardware only. A good vendor will assess what can be retained versus what needs replacing.",
    },
  ],
};

export default content;
