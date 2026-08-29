import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("straight-modular-kitchen-delhi")!;

export default function StraightKitchenDelhiPage() {
  return <LayoutCityTemplate entry={entry} />;
}
