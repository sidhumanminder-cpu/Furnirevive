import CityHubTemplate from "../_components/CityHubTemplate.tsx";
import { KITCHEN_CITY_REGISTRY } from "@/lib/registry/kitchen-city-registry.ts";

const entry = KITCHEN_CITY_REGISTRY.find((e) => e.slug === "tricity")!;

export default function ModularKitchenTricityPage() {
  return <CityHubTemplate entry={entry} />;
}
