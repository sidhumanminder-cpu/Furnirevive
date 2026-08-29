import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("u-shape-modular-kitchen-noida")!;

export default function UShapeKitchenNoidaPage() {
  return <LayoutCityTemplate entry={entry} />;
}
