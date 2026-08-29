import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("straight-modular-kitchen-ghaziabad")!;

export default function StraightKitchenGhaziabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
