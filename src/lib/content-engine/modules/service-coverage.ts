import { COVERAGE_TYPES } from "@/lib/seoConfigs/repair-data.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { ServiceCoverageSectionData } from "../types.ts";

const CORPORATE_COVERAGE_TYPES = [
  { label: "Corporate Offices" },
  { label: "Co-working Spaces" },
  { label: "BPOs & Call Centres" },
  { label: "Hotels & Hospitality" },
  { label: "Institutions & Schools" },
  { label: "Manufacturing Plants" },
];

export function buildServiceCoverage(
  locality: LocalityEntry,
  service: ServiceEntry,
): ServiceCoverageSectionData {
  const coverageTypes = service.capabilities?.audience?.corporate
    ? CORPORATE_COVERAGE_TYPES
    : COVERAGE_TYPES.map((c) => ({ label: c.label }));

  return {
    id: `service-coverage-${locality.slug}`,
    type: "service-coverage",
    version: "v1",
    props: {
      heading: service.capabilities?.audience?.corporate
        ? `On-Site Chair Repair in ${locality.name} — All Business Types`
        : `Doorstep Service in ${locality.name} — All Property Types`,
      localityName: locality.name,
      coverageTypes,
    },
  };
}
