/**
 * Content Engine — Repair Types Module
 *
 * Deterministic, side-effect-free. Lists the common problems fixed for this
 * service in this locality. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { RepairTypesSectionData } from "../types.ts";
import { COMMON_PROBLEMS } from "../content-pools.ts";

const OFFICE_CHAIR_PROBLEMS = [
  { label: "Executive Chair Repair" },
  { label: "Ergonomic Chair Repair" },
  { label: "Mesh Chair Repair" },
  { label: "Gaming Chair Repair" },
  { label: "Visitor Chair Repair" },
  { label: "Conference Chair Repair" },
  { label: "Workstation Chair Repair" },
  { label: "CEO Chair Restoration" },
  { label: "Training Room Chair Repair" },
  { label: "Reception Chair Repair" },
];

export function buildRepairTypes(
  locality: LocalityEntry,
  service: ServiceEntry,
): RepairTypesSectionData {
  const problems = service.capabilities?.audience?.corporate
    ? OFFICE_CHAIR_PROBLEMS
    : COMMON_PROBLEMS.map((problem) => ({ label: problem.label }));

  return {
    id: `${service.slug}-${locality.slug}-repair-types`,
    type: "repair-types",
    version: "v1",
    props: {
      heading: service.capabilities?.audience?.corporate
        ? `Office Chair Types We Repair in ${locality.name}`
        : `Common ${service.name} Problems We Fix in ${locality.name}`,
      problems,
    },
  };
}
