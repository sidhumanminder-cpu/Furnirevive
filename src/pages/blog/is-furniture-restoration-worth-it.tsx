import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function IsFurnitureRestorationWorthItPost() {
  const post = getBlogPostBySlug("is-furniture-restoration-worth-it");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
