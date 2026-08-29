import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("island-modular-kitchen-noida")!;

export default function IslandKitchenNoidaPage() {
  return <LayoutCityTemplate entry={entry} />;
}
