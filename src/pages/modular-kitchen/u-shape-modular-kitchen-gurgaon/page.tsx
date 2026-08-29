import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("u-shape-modular-kitchen-gurgaon")!;

export default function UShapeKitchenGurgaonPage() {
  return <LayoutCityTemplate entry={entry} />;
}
