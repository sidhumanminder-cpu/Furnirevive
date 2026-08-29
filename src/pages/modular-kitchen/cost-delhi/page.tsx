import KitchenCostPageTemplate from "../_components/KitchenCostPageTemplate.tsx";
import { delhiCostContent } from "@/content/modular-kitchen/costs/delhi.ts";

export default function ModularKitchenCostDelhiPage() {
  return <KitchenCostPageTemplate content={delhiCostContent} />;
}
