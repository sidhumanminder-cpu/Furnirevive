import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("pu-modular-kitchen-ghaziabad")!;

export default function PuKitchenGhaziabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
