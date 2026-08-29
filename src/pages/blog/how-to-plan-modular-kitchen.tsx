import KitchenBlogTemplate from "@/components/kitchen-blog-template.tsx";
import { getKitchenBlogBySlug } from "@/lib/registry/kitchen-blog-registry.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function KitchenBlogHowToPlan() {
  const entry = getKitchenBlogBySlug("how-to-plan-modular-kitchen");
  if (!entry) return <NotFound />;
  return <KitchenBlogTemplate entry={entry} />;
}
