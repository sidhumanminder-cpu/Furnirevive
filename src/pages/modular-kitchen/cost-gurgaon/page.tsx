import KitchenCostPageTemplate from "../_components/KitchenCostPageTemplate.tsx";
import { gurgaonCostContent } from "@/content/modular-kitchen/costs/gurgaon.ts";

export default function ModularKitchenCostGurgaonPage() {
  return <KitchenCostPageTemplate content={gurgaonCostContent} />;
}
