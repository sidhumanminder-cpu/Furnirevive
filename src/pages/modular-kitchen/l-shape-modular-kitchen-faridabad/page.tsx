import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("l-shape-modular-kitchen-faridabad")!;

export default function LShapeKitchenFaridabadPage() {
  return <LayoutCityTemplate entry={entry} />;
}
