import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function FurnitureRestorationCostGuideDelhiNcrPost() {
  const post = getBlogPostBySlug("furniture-restoration-cost-guide-delhi-ncr");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
