import KitchenCostPageTemplate from "../_components/KitchenCostPageTemplate.tsx";
import { ghaziabadCostContent } from "@/content/modular-kitchen/costs/ghaziabad.ts";

export default function ModularKitchenCostGhaziabadPage() {
  return <KitchenCostPageTemplate content={ghaziabadCostContent} />;
}
