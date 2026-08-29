/**
 * Foam Density Guide — FurniRevive Upholstery
 *
 * Typed data only. No JSX. No rendering logic.
 */

export type FoamDensityEntry = {
  /** Density in kg/m³ */
  density: number;
  /** Human-readable label e.g. "32D" */
  label: string;
  /** Short descriptor */
  name: string;
  /** One-line summary */
  tagline: string;
  /** Estimated lifespan in years */
  lifespanYears: number;
  /** Approximate ILD (firmness rating) */
  firmness: "soft" | "medium" | "firm" | "extra-firm";
  /** Use cases */
  bestFor: string[];
  /** Estimated cost per seat cushion (INR) */
  costPerCushionMin: number;
  costPerCushionMax: number;
  costDisplay: string;
  /** Key benefits */
  benefits: string[];
  /** Key drawbacks */
  drawbacks: string[];
  /** Warranty typically offered by FurniRevive */
  warrantyYears: number;
};

export const FOAM_GUIDE: FoamDensityEntry[] = [
  {
    density: 32,
    label: "32D",
    name: "Standard Density",
    tagline: "Comfortable everyday seating",
    lifespanYears: 4,
    firmness: "medium",
    bestFor: [
      "Guest room sofas",
      "Occasional-use sofas",
      "Budget-conscious reupholstery",
      "Single-person households",
    ],
    costPerCushionMin: 800,
    costPerCushionMax: 1500,
    costDisplay: "₹800–₹1,500 per cushion",
    benefits: [
      "Most affordable option",
      "Good initial comfort",
      "Widely available",
    ],
    drawbacks: [
      "Compresses faster with daily use",
      "Not ideal for heavy or frequent use",
    ],
    warrantyYears: 1,
  },
  {
    density: 36,
    label: "36D",
    name: "Medium-High Density",
    tagline: "Balanced comfort and durability",
    lifespanYears: 6,
    firmness: "medium",
    bestFor: [
      "Primary living room sofas",
      "Family households",
      "Daily-use sofas (2–4 people)",
      "Recliner cushions",
    ],
    costPerCushionMin: 1200,
    costPerCushionMax: 2200,
    costDisplay: "₹1,200–₹2,200 per cushion",
    benefits: [
      "Best balance of comfort and longevity",
      "Maintains shape well under daily use",
      "Recommended for most Delhi NCR households",
    ],
    drawbacks: [
      "Moderately priced",
      "Slightly firmer than 32D initially",
    ],
    warrantyYears: 2,
  },
  {
    density: 40,
    label: "40D",
    name: "High Density",
    tagline: "Premium long-lasting support",
    lifespanYears: 10,
    firmness: "firm",
    bestFor: [
      "Luxury sofas and sectionals",
      "Heavy daily use (5+ people)",
      "Commercial settings",
      "Imported and designer furniture",
      "Premium properties (DLF Phases, Golf Course Road)",
    ],
    costPerCushionMin: 1800,
    costPerCushionMax: 3500,
    costDisplay: "₹1,800–₹3,500 per cushion",
    benefits: [
      "Maximum durability — lasts up to 10 years",
      "Exceptional shape retention",
      "Premium seating feel",
      "Best return on investment",
    ],
    drawbacks: [
      "Higher upfront cost",
      "Firmer feel — takes time to break in",
    ],
    warrantyYears: 3,
  },
];

/** Recommended foam for typical Gurgaon households */
export const RECOMMENDED_FOAM_FOR_FAMILIES = "36D" as const;
export const RECOMMENDED_FOAM_FOR_LUXURY = "40D" as const;
export const RECOMMENDED_FOAM_FOR_BUDGET = "32D" as const;
