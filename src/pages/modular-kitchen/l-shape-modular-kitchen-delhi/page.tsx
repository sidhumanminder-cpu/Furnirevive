import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("l-shape-modular-kitchen-delhi")!;

export default function LShapeKitchenDelhiPage() {
  return <LayoutCityTemplate entry={entry} />;
}
