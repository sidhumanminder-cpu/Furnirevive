import { SERVICES_GRID } from "@/lib/seoConfigs/repair-data.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { ServicesGridSectionData } from "../types.ts";

const OFFICE_CHAIR_SERVICES = [
  { name: "Gas Lift Replacement", slug: "/office-chair-repair-delhi", description: "Fix sinking chairs with new hydraulic gas lifts" },
  { name: "Caster Wheel Repair", slug: "/office-chair-repair-delhi", description: "Replace worn or broken caster wheels" },
  { name: "Hydraulic Cylinder Repair", slug: "/office-chair-repair-delhi", description: "Restore height-adjustment mechanism" },
  { name: "Armrest Repair & Padding", slug: "/office-chair-repair-delhi", description: "Re-pad and reupholster worn armrests" },
  { name: "Mesh Back Panel Repair", slug: "/office-chair-repair-delhi", description: "Replace torn or sagging mesh panels" },
  { name: "Executive Chair Restoration", slug: "/office-chair-repair-delhi", description: "Full leather re-padding and frame tightening" },
  { name: "Tilt Mechanism Repair", slug: "/office-chair-repair-delhi", description: "Fix broken tilt lock and recline tension" },
  { name: "Bulk Corporate Repair", slug: "/office-chair-repair-delhi", description: "On-site repair for 10–200+ chairs in one visit" },
] as const;

const OFFICE_FURNITURE_SERVICES = [
  { id: "executive-desk-repair", name: "Executive Desk Repair", description: "Restore scratched, wobbly, or damaged executive desks to showroom condition", icon: "monitor" },
  { id: "workstation-repair", name: "Workstation Repair", description: "Fix modular workstation panels, keyboard trays, and cable management systems", icon: "table2" },
  { id: "conference-table-repair", name: "Conference Table Repair", description: "Repair surface damage, wobbly legs, and cable port issues on conference tables", icon: "layout-panel-left" },
  { id: "reception-desk-repair", name: "Reception Desk Repair", description: "Restore reception counters, fix veneer peeling, and tighten frame joints", icon: "archive" },
  { id: "office-cabinet-repair", name: "Office Cabinet Repair", description: "Fix broken hinges, stuck drawers, and damaged locking mechanisms", icon: "grid3x3" },
  { id: "office-partition-repair", name: "Office Partition Repair", description: "Repair damaged partition panels, re-align frames, and replace worn connectors", icon: "sofa" },
  { id: "meeting-room-furniture", name: "Meeting Room Furniture", description: "Service meeting tables, presentation stands, and collaborative workspace furniture", icon: "briefcase" },
  { id: "storage-unit-repair", name: "Storage Unit Repair", description: "Fix shelving units, filing cabinets, and office storage systems", icon: "package" },
] as const;

export function buildServicesGrid(
  locality: LocalityEntry,
  service: ServiceEntry,
): ServicesGridSectionData {
  const items =
    service.slug === "office-furniture-repair"
      ? OFFICE_FURNITURE_SERVICES.map((s) => ({ name: s.name, slug: `/office-furniture-repair`, description: s.description }))
      : service.capabilities?.audience?.corporate
        ? OFFICE_CHAIR_SERVICES.map((s) => ({ name: s.name, slug: s.slug, description: s.description }))
        : SERVICES_GRID.map((s) => ({ name: s.name, slug: s.slug, description: s.description }));

  const heading =
    service.slug === "office-furniture-repair"
      ? `Office Furniture Repair Services in ${locality.name}`
      : service.capabilities?.audience?.corporate
        ? `Office Chair Repair Services in ${locality.name}`
        : `What We Repair in ${locality.name}`;

  return {
    id: `services-grid-${locality.slug}`,
    type: "services-grid",
    version: "v1",
    props: {
      heading,
      localityName: locality.name,
      items,
    },
  };
}
