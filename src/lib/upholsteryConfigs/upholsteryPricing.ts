/**
 * Upholstery Pricing Data — FurniRevive
 *
 * Typed data only. No JSX. No rendering logic.
 * Prices are indicative starting-from figures.
 * Always accompany with "WhatsApp for exact quote" messaging.
 */

export type UpholsteryPricingRow = {
  sofaType: string;
  /** e.g. "2-seater" or "L-shape" */
  size: string;
  /** Starting-from price in INR */
  startingFrom: number;
  /** Formatted display string */
  priceDisplay: string;
  /** Typical time to complete */
  timeline: string;
  /** Notes for this type */
  notes?: string;
};

export const UPHOLSTERY_PRICING: UpholsteryPricingRow[] = [
  {
    sofaType: "2-Seater Sofa",
    size: "2-seater",
    startingFrom: 3500,
    priceDisplay: "Starting ₹3,500",
    timeline: "1 day",
    notes: "Price includes fabric + labour. Foam replacement charged separately.",
  },
  {
    sofaType: "3-Seater Sofa",
    size: "3-seater",
    startingFrom: 5500,
    priceDisplay: "Starting ₹5,500",
    timeline: "1–2 days",
    notes: "Most common upholstery job. Includes standard leatherette or polyester fabric.",
  },
  {
    sofaType: "L-Shape Sofa",
    size: "L-shape",
    startingFrom: 8000,
    priceDisplay: "Starting ₹8,000",
    timeline: "1–2 days",
    notes: "Varies significantly with size and number of sections.",
  },
  {
    sofaType: "Recliner Sofa",
    size: "per seat",
    startingFrom: 4500,
    priceDisplay: "Starting ₹4,500/seat",
    timeline: "1–2 days",
    notes: "Complex mechanism requires careful disassembly.",
  },
  {
    sofaType: "Dining Chair",
    size: "per chair",
    startingFrom: 600,
    priceDisplay: "Starting ₹600/chair",
    timeline: "1 day",
    notes: "Minimum order of 4 chairs recommended. Seat pad only.",
  },
  {
    sofaType: "Sofa Cum Bed",
    size: "standard",
    startingFrom: 6500,
    priceDisplay: "Starting ₹6,500",
    timeline: "1–2 days",
    notes: "Mechanism complexity may increase price. Inspection required.",
  },
  {
    sofaType: "Cushion Set (6 pieces)",
    size: "set of 6",
    startingFrom: 2500,
    priceDisplay: "Starting ₹2,500",
    timeline: "1 day",
    notes: "Fabric + stitching for scatter cushion covers.",
  },
];

export const FOAM_ADDON_PRICING = {
  density32d: {
    label: "32D Foam Replacement",
    priceDisplay: "₹800–₹1,500 per cushion",
    warrantyYears: 1,
  },
  density36d: {
    label: "36D Foam Replacement",
    priceDisplay: "₹1,200–₹2,200 per cushion",
    warrantyYears: 2,
  },
  density40d: {
    label: "40D Premium Foam",
    priceDisplay: "₹1,800–₹3,500 per cushion",
    warrantyYears: 3,
  },
} as const;

export const UPHOLSTERY_PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Doorstep Inspection",
    description:
      "Our technician visits your home, assesses the sofa frame, existing foam, and fabric condition, and gives you a transparent quote with no obligation.",
    icon: "search",
  },
  {
    step: "2",
    title: "Fabric Selection",
    description:
      "Choose from our catalogue of fabrics brought to your home — velvet, leatherette, microfiber, chenille, linen, jacquard, and more. Feel the samples before deciding.",
    icon: "palette",
  },
  {
    step: "3",
    title: "Work at Your Doorstep",
    description:
      "Our technician strips the old fabric, replaces foam if needed, and re-upholsters your sofa at your home using professional-grade materials and stitching.",
    icon: "truck",
  },
  {
    step: "4",
    title: "Done — Right at Your Home",
    description:
      "Your reupholstered sofa is inspected with you before our technician leaves. Includes a fabric care card and warranty documentation.",
    icon: "check",
  },
] as const;

export const UPHOLSTERY_TIMELINE_FAQS = [
  { question: "2-seater sofa", answer: "1 day" },
  { question: "3-seater sofa", answer: "1–2 working days" },
  { question: "L-shaped sofa", answer: "1–2 working days" },
  { question: "Recliner", answer: "1–2 working days" },
  { question: "Dining chairs (set)", answer: "1 day" },
  { question: "Rush / same-day service", answer: "Available for select jobs — call to confirm" },
] as const;

/** Recommended fabric by requirement — used in FabricSelector component */
export const FABRIC_SELECTOR_GUIDE = [
  {
    requirement: "Families with young children",
    bestFabric: "Leatherette",
    reason: "Wipe-clean, stain-proof, and durable against spills",
    icon: "users",
  },
  {
    requirement: "Pet owners",
    bestFabric: "Microfiber",
    reason: "Resists pet hair, scratches, and odours",
    icon: "paw",
  },
  {
    requirement: "Luxury living rooms",
    bestFabric: "Velvet or Chenille",
    reason: "Premium look and plush feel for high-end interiors",
    icon: "star",
  },
  {
    requirement: "Rental properties",
    bestFabric: "Polyester",
    reason: "Affordable, durable, and easy to maintain between tenants",
    icon: "home",
  },
  {
    requirement: "Easy daily cleaning",
    bestFabric: "Leatherette",
    reason: "Simply wipe down — no special care needed",
    icon: "droplets",
  },
  {
    requirement: "Designer or statement sofas",
    bestFabric: "Bouclé or Jacquard",
    reason: "Distinctive textures that elevate any interior",
    icon: "sparkles",
  },
  {
    requirement: "Budget reupholstery",
    bestFabric: "Polyester",
    reason: "Best value per metre with decent durability",
    icon: "tag",
  },
  {
    requirement: "Hot and humid climate",
    bestFabric: "Linen or Microfiber",
    reason: "Breathable and moisture-wicking for warm rooms",
    icon: "thermometer",
  },
] as const;
