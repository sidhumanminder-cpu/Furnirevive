import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("acrylic-modular-kitchen-faridabad")!;

export default function AcrylicKitchenFaridabadPage() {
  return <MaterialCityTemplate entry={entry} />;
}
