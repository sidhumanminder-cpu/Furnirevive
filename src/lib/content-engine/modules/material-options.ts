import { MATERIAL_OPTIONS } from "@/lib/seoConfigs/repair-data.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { MaterialOptionsSectionData } from "../types.ts";

const OFFICE_CHAIR_MATERIAL_GROUPS = [
  {
    category: "Mesh Materials",
    items: ["Standard Mesh", "Premium Breathable Mesh", "Heavy-duty Mesh", "Tightly Woven Mesh"],
  },
  {
    category: "Upholstery Materials",
    items: ["PU Leather", "Leatherette", "Fabric", "Velvet Fabric", "Rexine"],
  },
  {
    category: "Foam & Padding",
    items: ["Standard HR Foam", "Memory Foam", "High-density Foam", "Gel-infused Foam"],
  },
  {
    category: "Hardware",
    items: ["Nylon Casters", "PU Casters", "Metal Casters", "Gas Lift Cylinders", "Tilt Mechanisms"],
  },
];

export function buildMaterialOptions(
  locality: LocalityEntry,
  service: ServiceEntry,
): MaterialOptionsSectionData {
  const groups = service.capabilities?.audience?.corporate
    ? OFFICE_CHAIR_MATERIAL_GROUPS
    : MATERIAL_OPTIONS.map((g) => ({ category: g.category, items: [...g.items] }));

  return {
    id: `material-options-${locality.slug}`,
    type: "material-options",
    version: "v1",
    props: {
      heading: service.capabilities?.audience?.corporate
        ? "Office Chair Materials & Parts Available"
        : "Material Options Available",
      groups,
    },
  };
}
