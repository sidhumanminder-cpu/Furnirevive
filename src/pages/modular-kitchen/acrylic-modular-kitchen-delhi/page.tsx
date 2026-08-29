import MaterialCityTemplate from "../_components/MaterialCityTemplate.tsx";
import { getMaterialCityEntry } from "@/lib/registry/kitchen-material-city-registry.ts";

const entry = getMaterialCityEntry("acrylic-modular-kitchen-delhi")!;

export default function AcrylicKitchenDelhiPage() {
  return <MaterialCityTemplate entry={entry} />;
}
