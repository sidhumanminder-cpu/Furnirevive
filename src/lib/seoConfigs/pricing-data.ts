export type PricingItem = { service: string; startingPrice: string; timeEstimate: string; sameDay: boolean | "usually" };
export type WhatsIncludedItem = { label: string };
export type CostFactor = { label: string; description: string };
export type RepairTime = { service: string; time: string; sameDay: "yes" | "usually" | "no" };

export const PRICING_ITEMS: PricingItem[] = [
  { service: "Sofa Stitching / Tear Repair", startingPrice: "₹499", timeEstimate: "1–2 hrs", sameDay: true },
  { service: "Cushion Foam Replacement", startingPrice: "₹1,499", timeEstimate: "3–4 hrs", sameDay: true },
  { service: "Spring Repair", startingPrice: "₹999", timeEstimate: "2–3 hrs", sameDay: true },
  { service: "Full Upholstery", startingPrice: "₹2,499", timeEstimate: "1–2 days", sameDay: "usually" },
  { service: "Wooden Frame Repair", startingPrice: "₹1,999", timeEstimate: "2–4 hrs", sameDay: true },
  { service: "Leather Sofa Repair", startingPrice: "₹1,999", timeEstimate: "3–5 hrs", sameDay: "usually" },
  { service: "Recliner Mechanism Repair", startingPrice: "₹1,499", timeEstimate: "2–3 hrs", sameDay: true },
  { service: "Fabric Replacement", startingPrice: "₹2,999", timeEstimate: "1–2 days", sameDay: "usually" },
];

export const WHATS_INCLUDED: WhatsIncludedItem[] = [
  { label: "Free doorstep inspection" },
  { label: "Labour & fitting" },
  { label: "6-month written warranty" },
  { label: "Material guidance & options" },
  { label: "No hidden charges" },
];

export const COST_FACTORS: CostFactor[] = [
  { label: "Sofa size", description: "2-seater, 3-seater, L-shape, sectional" },
  { label: "Material type", description: "Fabric, leather, velvet, synthetic leather" },
  { label: "Extent of damage", description: "Minor tear vs full panel replacement" },
  { label: "Foam density", description: "32D, 40D, HR foam — affects both cost and comfort" },
  { label: "Brand / model", description: "Imported or designer sofas may need specialist materials" },
];

export const REPAIR_TIMES: RepairTime[] = [
  { service: "Stitching / Tear Repair", time: "1–2 hrs", sameDay: "yes" },
  { service: "Spring Repair", time: "2–3 hrs", sameDay: "yes" },
  { service: "Foam Replacement", time: "3–4 hrs", sameDay: "yes" },
  { service: "Wooden Frame Repair", time: "2–4 hrs", sameDay: "yes" },
  { service: "Recliner Repair", time: "2–3 hrs", sameDay: "yes" },
  { service: "Leather Repair", time: "3–5 hrs", sameDay: "usually" },
  { service: "Full Upholstery", time: "1–2 days", sameDay: "usually" },
  { service: "Fabric Replacement", time: "1–2 days", sameDay: "usually" },
];

export type SofaSizePrice = { size: string; startingPrice: string };

/** Starting prices by sofa size. Shown on sofa-repair pages only. */
export const SOFA_SIZE_PRICES: SofaSizePrice[] = [
  { size: "Single Seater Sofa Repair", startingPrice: "₹999 onwards" },
  { size: "2 Seater Sofa Repair", startingPrice: "₹1,499 onwards" },
  { size: "3 Seater Sofa Repair", startingPrice: "₹1,999 onwards" },
  { size: "5 Seater Sofa Repair", startingPrice: "₹2,999 onwards" },
  { size: "6–7 Seater Sofa Repair", startingPrice: "₹3,999 onwards" },
  { size: "L-Shaped / Corner / Sectional Sofa Repair", startingPrice: "₹2,499 onwards" },
  { size: "Sofa-Cum-Bed Repair", startingPrice: "₹1,999 onwards" },
  { size: "Sofa Frame Repair", startingPrice: "₹799 onwards" },
];
