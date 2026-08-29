import { useLocation } from "react-router-dom";
import { getCommercialIntentEntry } from "@/lib/registry/kitchen-commercial-intent-registry.ts";
import KitchenCommercialIntentTemplate from "../_components/KitchenCommercialIntentTemplate.tsx";
import NotFound from "@/pages/NotFound.tsx";

export default function CommercialIntentPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const entry = getCommercialIntentEntry(slug);
  if (!entry) return <NotFound />;
  return <KitchenCommercialIntentTemplate entry={entry} />;
}
