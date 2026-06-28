import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function CompleteFurnitureRestorationProcessPost() {
  const post = getBlogPostBySlug("complete-furniture-restoration-process");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
