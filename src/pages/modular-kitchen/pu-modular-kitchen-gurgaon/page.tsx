import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("pu-modular-kitchen-gurgaon")!;

export default function PuKitchenGurgaonPage() {
  return <MaterialCityTemplate entry={entry} />;
}
