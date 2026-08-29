import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("island-modular-kitchen-faridabad")!;

export default function IslandKitchenFaridabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
