import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("laminate-modular-kitchen-gurgaon")!;

export default function LaminateKitchenGurgaonPage() {
  return <MaterialCityTemplate entry={entry} />;
}
