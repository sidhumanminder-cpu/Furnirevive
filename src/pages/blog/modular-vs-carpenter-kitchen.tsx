import KitchenBlogTemplate from "@/components/kitchen-blog-template.tsx";
import { getKitchenBlogBySlug } from "@/lib/registry/kitchen-blog-registry.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function KitchenBlogModularVsCarpenter() {
  const entry = getKitchenBlogBySlug("modular-vs-carpenter-kitchen");
  if (!entry) return <NotFound />;
  return <KitchenBlogTemplate entry={entry} />;
}
