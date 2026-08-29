import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("acrylic-modular-kitchen-gurgaon")!;

export default function AcrylicKitchenGurgaonPage() {
  return <MaterialCityTemplate entry={entry} />;
}
