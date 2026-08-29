import CityHubTemplate from "../_components/CityHubTemplate.tsx";
import { KITCHEN_CITY_REGISTRY } from "@/lib/registry/kitchen-city-registry.ts";

const entry = KITCHEN_CITY_REGISTRY.find((e) => e.slug === "noida")!;

export default function ModularKitchenNoidaPage() {
  return <CityHubTemplate entry={entry} />;
}
