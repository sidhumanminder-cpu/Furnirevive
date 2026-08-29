import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("pu-modular-kitchen-faridabad")!;

export default function PuKitchenFaridabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
