import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function GasLiftReplacementGuidePost() {
  const post = getBlogPostBySlug("gas-lift-replacement-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
