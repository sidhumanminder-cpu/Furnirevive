import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaFoamReplacementCostPost() {
  const post = getBlogPostBySlug("sofa-foam-replacement-cost");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
