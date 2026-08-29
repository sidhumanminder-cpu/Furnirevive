import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("island-modular-kitchen-gurgaon")!;

export default function IslandKitchenGurgaonPage() {
  return <LayoutCityTemplate entry={entry} />;
}
