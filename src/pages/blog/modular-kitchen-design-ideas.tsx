import KitchenBlogTemplate from "@/components/kitchen-blog-template.tsx";
import { getKitchenBlogBySlug } from "@/lib/registry/kitchen-blog-registry.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function KitchenBlogDesignIdeas() {
  const entry = getKitchenBlogBySlug("modular-kitchen-design-ideas");
  if (!entry) return <NotFound />;
  return <KitchenBlogTemplate entry={entry} />;
}
