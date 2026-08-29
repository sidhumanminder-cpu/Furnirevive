import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function UltimateFurnitureRestorationGuidePost() {
  const post = getBlogPostBySlug("ultimate-furniture-restoration-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
