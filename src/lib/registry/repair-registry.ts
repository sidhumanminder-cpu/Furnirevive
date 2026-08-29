/**
 * REPAIR_REGISTRY
 *
 * Single source of truth for repair type names.
 * Used across: pricing, FAQ, blog links, schema, and image selection.
 * Prevents naming inconsistencies as the service catalog grows.
 */

export type RepairTypeKey =
  | "gas-lift"
  | "hydraulic"
  | "mesh"
  | "casters"
  | "tilt"
  | "foam"
  | "armrest"
  | "base"
  | "executive-restore"
  | "spring"
  | "fabric"
  | "leather"
  | "frame"
  | "motor"
  | "mechanism";

export type RepairEntry = {
  key: RepairTypeKey;
  name: string;
  description: string;
  /** Approximate price range in INR */
  priceRange: string;
  /** Estimated turnaround */
  turnaround: string;
};

export const REPAIR_REGISTRY: readonly RepairEntry[] = [
  { key: "gas-lift", name: "Gas Lift Replacement", description: "Replace faulty pneumatic gas cylinder that controls chair height.", priceRange: "₹500–₹1,200", turnaround: "Same day" },
  { key: "hydraulic", name: "Hydraulic Cylinder Repair", description: "Repair or replace hydraulic mechanism for height adjustment.", priceRange: "₹600–₹1,500", turnaround: "Same day" },
  { key: "casters", name: "Caster Wheel Replacement", description: "Replace worn or broken wheels for smooth mobility.", priceRange: "₹300–₹800", turnaround: "Same day" },
  { key: "tilt", name: "Tilt Mechanism Repair", description: "Fix or replace the rocking/tilt mechanism for ergonomic support.", priceRange: "₹800–₹2,000", turnaround: "1–2 days" },
  { key: "armrest", name: "Armrest Replacement", description: "Replace cracked, broken or missing armrests.", priceRange: "₹400–₹1,200", turnaround: "Same day" },
  { key: "mesh", name: "Mesh Replacement", description: "Replace torn or sagging mesh back or seat panel.", priceRange: "₹1,200–₹3,500", turnaround: "1–2 days" },
  { key: "foam", name: "Seat Foam Replacement", description: "Replace compressed or damaged seat cushion foam.", priceRange: "₹800–₹2,500", turnaround: "1–2 days" },
  { key: "base", name: "Base Replacement", description: "Replace cracked or broken five-star chair base.", priceRange: "₹600–₹1,800", turnaround: "Same day" },
  { key: "executive-restore", name: "Executive Chair Restoration", description: "Full restoration of leather/PU executive chairs including padding, upholstery and mechanism.", priceRange: "₹3,000–₹8,000", turnaround: "2–3 days" },
  { key: "spring", name: "Spring Repair", description: "Repair or replace broken sofa and chair springs.", priceRange: "₹500–₹1,500", turnaround: "Same day" },
  { key: "fabric", name: "Fabric Reupholstery", description: "Replace worn fabric covering with new material.", priceRange: "₹1,500–₹5,000", turnaround: "2–3 days" },
  { key: "leather", name: "Leather Restoration", description: "Repair cracks, peeling or tears in leather and PU upholstery.", priceRange: "₹1,000–₹4,000", turnaround: "1–2 days" },
  { key: "frame", name: "Frame Repair", description: "Repair or reinforce wooden or metal chair/sofa frame.", priceRange: "₹800–₹3,000", turnaround: "1–2 days" },
  { key: "motor", name: "Motor Replacement", description: "Replace faulty electric motor in power recliners and lift chairs.", priceRange: "₹2,000–₹6,000", turnaround: "2–3 days" },
  { key: "mechanism", name: "Mechanism Repair", description: "Repair recliner or sofa pull-tab or push-button mechanism.", priceRange: "₹1,000–₹3,500", turnaround: "1–2 days" },
];
