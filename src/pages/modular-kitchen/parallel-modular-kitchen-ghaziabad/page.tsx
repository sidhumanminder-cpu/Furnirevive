import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("parallel-modular-kitchen-ghaziabad")!;

export default function ParallelKitchenGhaziabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
