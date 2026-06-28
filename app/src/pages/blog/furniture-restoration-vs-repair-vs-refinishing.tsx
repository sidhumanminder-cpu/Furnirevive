import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function FurnitureRestorationVsRepairVsRefinishingPost() {
  const post = getBlogPostBySlug("furniture-restoration-vs-repair-vs-refinishing");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
