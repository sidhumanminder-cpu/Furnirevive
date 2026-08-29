import CityHubTemplate from "../_components/CityHubTemplate.tsx";
import { KITCHEN_CITY_REGISTRY } from "@/lib/registry/kitchen-city-registry.ts";

const entry = KITCHEN_CITY_REGISTRY.find((e) => e.slug === "delhi")!;

export default function ModularKitchenDelhiPage() {
  return <CityHubTemplate entry={entry} />;
}
