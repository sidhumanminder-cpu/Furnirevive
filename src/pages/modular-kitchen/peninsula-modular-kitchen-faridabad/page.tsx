import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("peninsula-modular-kitchen-faridabad")!;

export default function PeninsulaKitchenFaridabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
