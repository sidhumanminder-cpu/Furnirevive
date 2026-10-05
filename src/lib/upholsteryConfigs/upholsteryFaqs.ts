/**
 * Upholstery FAQs — FurniRevive
 *
 * Typed data only. No JSX. No rendering logic.
 * Used for FAQ section and FAQ schema (JSON-LD).
 */

export type FaqEntry = {
  question: string;
  answer: string;
  /** Optional category for grouping */
  category?: "cost" | "process" | "fabric" | "foam" | "timeline" | "care" | "general";
};

export const UPHOLSTERY_FAQS: FaqEntry[] = [
  {
    question: "How much does sofa reupholstery cost?",
    answer:
      "Sofa reupholstery starts from ₹2,000 per seat, so your total depends on the number of seats, fabric choice and foam density. L-shaped sofas and sectionals are priced the same way, per seat. Premium fabrics like velvet or chenille cost more than leatherette or polyester. WhatsApp us photos for an exact quote.",
    category: "cost",
  },
  {
    question: "How long does sofa reupholstery take?",
    answer:
      "Most standard sofas (2-seater or 3-seater) are completed within 1–2 working days. L-shaped sofas and sectionals take 1–2 days. Recliner reupholstery takes 1–2 days due to the mechanism. Our technicians work entirely at your home — no pickup needed.",
    category: "timeline",
  },
  {
    question: "Can you come to my home for an inspection?",
    answer:
      "Yes, we offer free doorstep inspections across our service areas. Our technician visits your home, assesses the sofa's frame, foam, and current fabric, and gives you a transparent quote. No obligation to proceed.",
    category: "process",
  },
  {
    question: "Which fabric is best for homes with pets?",
    answer:
      "Microfiber and leatherette are the best choices for pet owners. Microfiber resists pet hair and scratches, while leatherette is easy to wipe clean. Avoid velvet and suede — they snag with pet claws and absorb odours. We carry a range of pet-friendly fabrics in our catalogue.",
    category: "fabric",
  },
  {
    question: "What foam density should I choose for my sofa?",
    answer:
      "For daily family use, we recommend 36D foam — it balances comfort and durability for 6+ years. For luxury sofas in premium societies and villas, we recommend 40D for maximum shape retention. 32D is suitable for guest sofas or occasional use. Our technician advises based on your sofa and usage.",
    category: "foam",
  },
  {
    question: "Is reupholstery worth it or should I buy a new sofa?",
    answer:
      "If your sofa has a solid hardwood or high-quality imported frame, reupholstery is almost always worth it. You can restore your sofa for 30–50% of the cost of a comparable new one. Replace only if the frame is particle board or structurally damaged. Our technician will honestly assess your sofa and advise accordingly.",
    category: "general",
  },
  {
    question: "Do you provide fabric samples before starting work?",
    answer:
      "Yes. Once you approve the inspection quote, our technician brings fabric samples to your home so you can see and feel the material before confirming. We carry samples of leatherette, velvet, linen, microfiber, chenille, jacquard, and more.",
    category: "fabric",
  },
  {
    question: "What warranty do you provide on reupholstery work?",
    answer:
      "FurniRevive provides a 6-month warranty on all upholstery work covering stitching, fabric integrity, and foam compression. For 40D foam installations, we offer an extended warranty of 12 months. Warranty claims are handled at your doorstep.",
    category: "care",
  },
  {
    question: "Can you reupholster an L-shaped or sectional sofa?",
    answer:
      "Yes, we specialise in L-shaped and sectional sofas. Our technician works at your home — no pickup needed. L-shaped sofas typically take 1–2 days and start from ₹2,000 per seat, depending on fabric and size.",
    category: "process",
  },
  {
    question: "How do I care for my reupholstered sofa?",
    answer:
      "Care depends on the fabric chosen. Leatherette and microfiber: wipe with damp cloth. Velvet and chenille: vacuum weekly with upholstery attachment, blot spills immediately. Avoid direct sunlight on all fabrics. We provide a fabric care card with every completed job.",
    category: "care",
  },
  {
    question: "Can you match the existing sofa fabric or colour?",
    answer:
      "We carry a wide range of fabrics and can often match colours closely. Exact replication of discontinued or custom fabrics is not always possible, but our catalogue includes hundreds of options. We recommend choosing a complementary or upgraded fabric for the best result.",
    category: "fabric",
  },
  {
    question: "Do you offer stain-resistant fabric for dusty, high-traffic homes?",
    answer:
      "Yes. Leatherette, microfiber, and certain jacquard weaves are inherently stain-resistant. We also apply optional Teflon fabric protector treatment that repels liquids and dust — ideal for homes facing dust and heat in our region. Ask our technician about this add-on during the inspection.",
    category: "fabric",
  },
];
