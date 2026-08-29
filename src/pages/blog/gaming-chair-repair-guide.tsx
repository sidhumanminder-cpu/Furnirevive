import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function GamingChairRepairGuidePost() {
  const post = getBlogPostBySlug("gaming-chair-repair-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
