import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("laminate-modular-kitchen-faridabad")!;

export default function LaminateKitchenFaridabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
