import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function FurnitureRepairVsReplacePost() {
  const post = getBlogPostBySlug("furniture-repair-vs-replace");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
