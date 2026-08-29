import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("parallel-modular-kitchen-faridabad")!;

export default function ParallelKitchenFaridabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
