import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function MonsoonFurnitureCareDelhiPost() {
  const post = getBlogPostBySlug("monsoon-furniture-care-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
