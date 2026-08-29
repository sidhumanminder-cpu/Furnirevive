import KitchenCostPageTemplate from "../_components/KitchenCostPageTemplate.tsx";
import { noidaCostContent } from "@/content/modular-kitchen/costs/noida.ts";

export default function ModularKitchenCostNoidaPage() {
  return <KitchenCostPageTemplate content={noidaCostContent} />;
}
