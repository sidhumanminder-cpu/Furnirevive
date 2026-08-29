import { REPAIR_TIMES } from "@/lib/seoConfigs/pricing-data.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { RepairTimesSectionData } from "../types.ts";

const OFFICE_CHAIR_REPAIR_TIMES = [
  { service: "Gas Lift Replacement", time: "1–2 hours", sameDay: "yes" as const },
  { service: "Caster Wheel Replacement", time: "30–60 minutes", sameDay: "yes" as const },
  { service: "Hydraulic Repair", time: "1–2 hours", sameDay: "yes" as const },
  { service: "Armrest Replacement", time: "1 hour", sameDay: "yes" as const },
  { service: "Tilt Mechanism Repair", time: "2–3 hours", sameDay: "usually" as const },
  { service: "Mesh Replacement", time: "2–4 hours", sameDay: "usually" as const },
  { service: "Seat Foam Replacement", time: "2–3 hours", sameDay: "usually" as const },
  { service: "Executive Chair Restoration", time: "2–3 days", sameDay: "no" as const },
  { service: "Bulk Office Repair (10+ chairs)", time: "1–2 days on-site", sameDay: "usually" as const },
] satisfies Array<{ service: string; time: string; sameDay: "yes" | "usually" | "no" }>;

export function buildRepairTimes(
  locality: LocalityEntry,
  service: ServiceEntry,
): RepairTimesSectionData {
  const items = service.capabilities?.audience?.corporate
    ? OFFICE_CHAIR_REPAIR_TIMES
    : REPAIR_TIMES.map((r) => ({ service: r.service, time: r.time, sameDay: r.sameDay }));

  return {
    id: `repair-times-${locality.slug}`,
    type: "repair-times",
    version: "v1",
    props: {
      heading: service.capabilities?.audience?.corporate
        ? "Office Chair Repair Time Estimates"
        : "Repair Time Estimates",
      items,
    },
  };
}
