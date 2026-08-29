import KitchenBlogTemplate from "@/components/kitchen-blog-template.tsx";
import { getKitchenBlogBySlug } from "@/lib/registry/kitchen-blog-registry.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function KitchenBlogChecklist() {
  const entry = getKitchenBlogBySlug("modular-kitchen-checklist");
  if (!entry) return <NotFound />;
  return <KitchenBlogTemplate entry={entry} />;
}
