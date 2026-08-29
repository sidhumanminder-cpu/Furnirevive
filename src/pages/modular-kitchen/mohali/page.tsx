import CityHubTemplate from "../_components/CityHubTemplate.tsx";
import { KITCHEN_CITY_REGISTRY } from "@/lib/registry/kitchen-city-registry.ts";

const entry = KITCHEN_CITY_REGISTRY.find((e) => e.slug === "mohali")!;

export default function ModularKitchenMohaliPage() {
  return <CityHubTemplate entry={entry} />;
}
