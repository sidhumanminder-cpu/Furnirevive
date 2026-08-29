import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("acrylic-modular-kitchen-ghaziabad")!;

export default function AcrylicKitchenGhaziabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
