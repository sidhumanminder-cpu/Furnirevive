export type KitchenBlogSection = { heading?: string; body: string[] };
export type KitchenBlogContent = {
  sections: KitchenBlogSection[];
  faqs: { question: string; answer: string }[];
};

export const content: KitchenBlogContent = {
  sections: [
    {
      heading: "Modular Kitchen Checklist: 25 Things to Verify Before Signing",
      body: [
        "Signing a modular kitchen contract is a significant financial commitment — typically Rs 1.5–6 lakh or more. Yet most homeowners sign after just one showroom visit and a verbal discussion, without verifying critical details that protect their investment.",
        "This comprehensive checklist covers 25 essential items across six categories. Print it out, take it to your vendor meetings, and do not sign until every item is confirmed in writing. A reputable vendor will welcome this level of diligence — only unreliable ones will be uncomfortable with it.",
      ],
    },
    {
      heading: "Vendor Checks (Items 1–5)",
      body: [
        "1. Business registration and age: Verify the vendor is a registered business (GST number, trade licence) with at least 3–5 years of operation history — this reduces the risk of them disappearing mid-project.",
        "2. Factory or workshop visit: Ask to visit the manufacturing facility where your kitchen will be produced — a genuine modular kitchen vendor has a dedicated workshop with CNC machines, edge banding equipment, and a dust-free spray booth.",
        "3. Portfolio of completed projects: Request photos and addresses of at least 5 recently completed kitchens in your area so you can verify quality firsthand or speak to previous customers.",
        "4. Online reviews and ratings: Check Google Maps reviews, Justdial ratings, and social media pages for consistent positive feedback and responsive handling of complaints.",
        "5. Dedicated project manager: Confirm that a single point of contact will be assigned to your project from design through installation — this avoids miscommunication between sales, design, and installation teams.",
      ],
    },
    {
      heading: "Material Checks (Items 6–11)",
      body: [
        "6. Core material grade: Confirm in writing that cabinet carcasses will use BWR-grade plywood (IS 303) or HDHMR board — never accept MR-grade plywood or plain MDF for kitchen cabinets.",
        "7. Core material brand: Specify the plywood or board brand (Century, Greenply, Archid, Action Tesa) — branded boards have consistent quality and their own manufacturer warranty.",
        "8. Shutter finish material: Confirm the exact finish type (laminate brand and code, acrylic sheet brand, PU paint specification) that will be used on your cabinet doors.",
        "9. Countertop material and thickness: Verify the countertop type (granite, quartz, Dekton), colour/pattern, edge profile, and slab thickness (minimum 20 mm for quartz, 18 mm for granite).",
        "10. Edge banding specification: Confirm that all exposed panel edges will receive proper PVC edge banding (1 mm or 2 mm thickness) applied with hot-melt adhesive — not manual tape.",
        "11. Back panel material: Verify that cabinet back panels are at least 6 mm thick (either plywood or pre-laminated MDF) — some vendors cut costs with 3 mm hardboard that warps within a year.",
      ],
    },
    {
      heading: "Hardware Checks (Items 12–16)",
      body: [
        "12. Hinge brand and series: Confirm the exact brand (Hettich, Hafele, Blum) and series of hinges — ensure they include soft-close/damper function on every door.",
        "13. Drawer channel type: Verify whether channels are telescopic (full extension) or standard (partial extension) and confirm the brand — telescopic full-extension is strongly preferred for accessibility.",
        "14. Pull-out mechanism brands: If your design includes pull-out units (bottle pull-out, corner carousel, tall pull-out), confirm the manufacturer and weight rating of each mechanism.",
        "15. Handle specification: Confirm handle material (stainless steel, aluminium, zinc alloy), finish (matte, brushed, chrome), and size — or confirm handleless profile type (J-profile, gola).",
        "16. Hardware warranty pass-through: Verify that the hardware manufacturer's warranty (typically 8–10 years for Hettich/Hafele) is passed through to you and documented separately.",
      ],
    },
    {
      heading: "Warranty Checks (Items 17–20)",
      body: [
        "17. Written warranty document: Confirm that a separate, detailed warranty document will be provided at project handover — not just a line in the invoice or a verbal promise.",
        "18. Warranty duration by component: Get specific years for each component — structural (carcass), hardware, and finish — rather than a single blanket number.",
        "19. Exclusions clearly listed: Ask for a written list of what is NOT covered (water damage from external leaks, chemical damage, commercial use, etc.) so there are no surprises during a claim.",
        "20. Claims process documented: Understand how to file a claim (phone, email, WhatsApp), expected response time, and typical resolution timeline before signing.",
      ],
    },
    {
      heading: "Installation Checks (Items 21–23)",
      body: [
        "21. Installation team qualification: Confirm whether installation will be done by the vendor's own trained team or outsourced to local carpenters — in-house teams ensure accountability.",
        "22. Installation timeline commitment: Get a written commitment on start date and completion date with a penalty clause for delays beyond a reasonable buffer (3–5 days).",
        "23. Snag resolution process: Confirm that a formal snag inspection will be conducted post-installation and that all snags will be resolved within a specified number of days (typically 7–10) at no additional cost.",
      ],
    },
    {
      heading: "Payment Checks (Items 24–25)",
      body: [
        "24. Milestone-based payment schedule: Never pay more than 50 percent upfront — insist on a structure tied to milestones (example: 50 percent on order confirmation, 40 percent on material delivery to site, 10 percent after snag-free handover).",
        "25. Final payment retention: Ensure the contract allows you to withhold the final 10 percent until all snags are resolved and the kitchen is functioning perfectly — this is your leverage to ensure quality completion.",
      ],
    },
    {
      heading: "How to Use This Checklist",
      body: [
        "Take this checklist to every vendor meeting. Ask each question directly and note the response. If the vendor cannot answer confidently or refuses to put answers in writing, consider it a red flag.",
        "Compare responses across 2–3 vendors to understand what is standard in the market versus what is exceptional. The vendor who answers all 25 points transparently and documents them in the contract is the one you should trust with your kitchen.",
        'FurniRevive welcomes this level of scrutiny — we provide written answers to every item on this list before asking for your signature. <a href="/book">Book your free consultation</a> and experience what transparent kitchen planning feels like.',
      ],
    },
  ],
  faqs: [
    {
      question: "Is it normal to ask vendors all 25 of these questions?",
      answer:
        "Absolutely. A kitchen is a major investment, and any reputable vendor will respect (and even appreciate) a well-informed customer. If a vendor becomes evasive or uncomfortable with detailed questions, that itself is a warning sign.",
    },
    {
      question: "What if the vendor offers a lower price but cannot confirm material grades?",
      answer:
        "Never trade material transparency for a lower price. Unspecified materials almost always mean lower grades (MR plywood instead of BWR, unbranded hardware instead of Hettich). The savings today will cost you in replacements within 2–3 years.",
    },
    {
      question: "Should I get everything in writing even if I trust the vendor?",
      answer:
        "Yes. Written documentation protects both parties. Sales staff may leave the company, verbal promises get forgotten, and ownership can change. A written contract with all specifications is your only enforceable reference.",
    },
    {
      question: "What is a reasonable advance payment for a modular kitchen?",
      answer:
        "Industry standard is 40–50 percent advance on order confirmation. Never pay more than 50 percent upfront. The balance should be tied to delivery and snag-free installation milestones.",
    },
    {
      question: "How do I verify the quality of materials before installation?",
      answer:
        "Request to inspect materials at the factory or when they are delivered to your site. Check plywood stamps for BWR/IS 303 marking, verify hardware boxes for brand authenticity, and compare laminate/acrylic samples against what was specified in the contract.",
    },
    {
      question: "What should I do if installation is delayed beyond the committed date?",
      answer:
        "Refer to your contract's delay clause. If no penalty clause exists, communicate in writing (email/WhatsApp) requesting a revised timeline and the reason for delay. For significant delays (2+ weeks), consider withholding further payments until work resumes.",
    },
    {
      question: "Can I add items to my kitchen order after signing the contract?",
      answer:
        "Yes, most vendors allow additions (extra modules, upgraded hardware, additional accessories) through a change order or addendum. However, additions after manufacturing has started may incur higher costs and extend the timeline. Finalise your requirements as completely as possible before signing.",
    },
  ],
};

export default content;
