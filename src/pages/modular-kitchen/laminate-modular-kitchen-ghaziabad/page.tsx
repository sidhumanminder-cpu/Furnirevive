import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("laminate-modular-kitchen-ghaziabad")!;

export default function LaminateKitchenGhaziabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
