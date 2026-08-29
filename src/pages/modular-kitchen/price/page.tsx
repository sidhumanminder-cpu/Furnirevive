import KitchenCostPageTemplate from "../_components/KitchenCostPageTemplate.tsx";
import { kitchenPriceContent } from "@/content/modular-kitchen/costs/price.ts";

export default function ModularKitchenPricePage() {
  return <KitchenCostPageTemplate content={kitchenPriceContent} />;
}
