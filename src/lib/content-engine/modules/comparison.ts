/**
 * Content Engine — Comparison Module
 *
 * Generates a "Repair vs Replace" comparison table.
 * Rows are service-specific where relevant, generic otherwise.
 * Domain data only — no JSX, no CSS.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { ComparisonSectionData, ComparisonRow } from "../types.ts";

const BASE_ROWS: ComparisonRow[] = [
  { aspect: "Cost", repair: "Starts at ₹599 — fraction of replacement", replace: "₹15,000–₹80,000+ for a new sofa" },
  { aspect: "Time", repair: "Same-day, completed at home", replace: "7–21 days delivery wait" },
  { aspect: "Your furniture", repair: "Keeps your existing piece, familiar feel", replace: "Unfamiliar new purchase" },
  { aspect: "Environment", repair: "Eco-friendly — no landfill waste", replace: "Old furniture discarded" },
  { aspect: "Warranty", repair: "6-month warranty on repair work", replace: "Manufacturer warranty on new item" },
];

const RECLINER_ROWS: ComparisonRow[] = [
  { aspect: "Cost", repair: "Motor/mechanism repair from ₹1,499", replace: "New recliner ₹20,000–₹1,00,000+" },
  { aspect: "Time", repair: "Same-day at home", replace: "Weeks for delivery and installation" },
  { aspect: "Comfort", repair: "Restores your preferred seating profile", replace: "Adjustment period with new unit" },
  { aspect: "Environment", repair: "Eco-friendly — no disposal waste", replace: "Old recliner scrapped" },
  { aspect: "Warranty", repair: "6-month warranty on repair", replace: "Manufacturer warranty on new item" },
];

const UPHOLSTERY_ROWS: ComparisonRow[] = [
  { aspect: "Cost", repair: "Reupholstery from ₹3,999", replace: "New sofa ₹15,000–₹80,000+" },
  { aspect: "Customisation", repair: "300+ fabric and leather choices", replace: "Limited showroom options" },
  { aspect: "Time", repair: "1–2 days at home", replace: "7–21 days delivery wait" },
  { aspect: "Frame quality", repair: "Your existing seasoned frame preserved", replace: "Unknown new frame quality" },
  { aspect: "Environment", repair: "Eco-friendly — reduces furniture waste", replace: "Old sofa discarded" },
];

const OFFICE_CHAIR_ROWS: ComparisonRow[] = [
  { aspect: "Cost", repair: "Gas lift repair from ₹500 — fraction of replacement", replace: "New office chair ₹3,000–₹50,000+" },
  { aspect: "Time", repair: "Same-day on-site at your office", replace: "Days for procurement and delivery" },
  { aspect: "Disruption", repair: "Zero — technician comes to your office", replace: "Employees without seating during wait" },
  { aspect: "Environment", repair: "Eco-friendly — no disposal waste", replace: "Old chairs scrapped or landfilled" },
  { aspect: "Warranty", repair: "6-month warranty on all repair work", replace: "Manufacturer warranty on new item" },
];

const OFFICE_FURNITURE_ROWS: ComparisonRow[] = [
  { aspect: "Executive Desk", repair: "₹2,000–₹6,000 for surface, leg, and joint repair", replace: "₹25,000+ for a new executive desk" },
  { aspect: "Workstation", repair: "₹1,500–₹4,000 for panel, tray, and frame fix", replace: "₹15,000+ for a new modular workstation" },
  { aspect: "Conference Table", repair: "₹3,000–₹8,000 for surface and structural repair", replace: "₹40,000+ for a new conference table" },
  { aspect: "Reception Desk", repair: "₹2,000–₹5,000 for veneer, frame, and counter repair", replace: "₹30,000+ for a new reception desk" },
  { aspect: "Storage Cabinet", repair: "₹800–₹2,000 for hinge, drawer, and lock fix", replace: "₹8,000+ for a new storage cabinet" },
];

const SERVICE_ROWS: Partial<Record<string, ComparisonRow[]>> = {
  "recliner-repair": RECLINER_ROWS,
  "sofa-upholstery": UPHOLSTERY_ROWS,
  "office-chair-repair": OFFICE_CHAIR_ROWS,
  "office-furniture-repair": OFFICE_FURNITURE_ROWS,
};

const SERVICE_CONCLUSIONS: Partial<Record<string, string>> = {
  "recliner-repair": "Most recliner faults — motor failure, broken mechanism, sagging foam — are repairable at a fraction of replacement cost. Get a free inspection first.",
  "sofa-upholstery": "Reupholstering preserves your sofa's frame, lets you choose any fabric, and costs a fraction of buying new. Most sofas are worth reupholstering.",
  "office-chair-repair": "Most office chair faults — sinking gas lifts, broken casters, worn armrests, torn mesh — are repairable at ₹500–₹1,500 per chair. A free on-site inspection tells you exactly what needs fixing.",
  "office-furniture-repair": "Most office furniture damage — scratched desks, wobbly workstations, damaged conference tables — is repairable at 10–25% of replacement cost. A free on-site inspection tells you exactly what needs fixing and how much it will cost.",
};

export function buildComparison(
  locality: LocalityEntry,
  service: ServiceEntry,
): ComparisonSectionData {
  const rows = SERVICE_ROWS[service.slug] ?? BASE_ROWS;
  const conclusion =
    SERVICE_CONCLUSIONS[service.slug] ??
    `Most ${service.name.toLowerCase()} issues are repairable at a fraction of replacement cost. FurniRevive offers a free doorstep inspection — no obligation to proceed.`;

  return {
    id: `${service.slug}-${locality.slug}-comparison`,
    type: "comparison",
    version: "v1",
    props: {
      heading: `${service.name}: Repair vs Replace`,
      subheading: `Should you repair or replace your ${service.slug === "sofa-upholstery" ? "sofa" : service.slug === "office-chair-repair" ? "office chair" : service.name.toLowerCase()}? Here's an honest comparison.`,
      rows,
      conclusion,
    },
  };
}
