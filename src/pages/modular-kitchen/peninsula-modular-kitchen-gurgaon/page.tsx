import LayoutCityTemplate from "../_components/LayoutCityTemplate.tsx";
import { getLayoutCityEntry } from "@/lib/registry/kitchen-layout-city-registry.ts";

const entry = getLayoutCityEntry("peninsula-modular-kitchen-gurgaon")!;

export default function PeninsulaKitchenGurgaonPage() {
  return <LayoutCityTemplate entry={entry} />;
}
