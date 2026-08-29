import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function UltimateSofaRepairCostGuidePost() {
  const post = getBlogPostBySlug("sofa-repair-cost-delhi-ncr");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
