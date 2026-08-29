import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("pu-modular-kitchen-noida")!;

export default function PuKitchenNoidaPage() {
  return <MaterialCityTemplate entry={entry} />;
}
