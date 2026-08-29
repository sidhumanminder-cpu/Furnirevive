import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("island-modular-kitchen-delhi")!;

export default function IslandKitchenDelhiPage() {
  return <LayoutCityTemplate entry={entry} />;
}
