import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("laminate-modular-kitchen-noida")!;

export default function LaminateKitchenNoidaPage() {
  return <MaterialCityTemplate entry={entry} />;
}
