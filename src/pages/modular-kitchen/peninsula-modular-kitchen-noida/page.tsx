import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("peninsula-modular-kitchen-noida")!;

export default function PeninsulaKitchenNoidaPage() {
  return <LayoutCityTemplate entry={entry} />;
}
