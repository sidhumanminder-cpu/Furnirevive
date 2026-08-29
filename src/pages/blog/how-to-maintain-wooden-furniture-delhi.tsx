import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowToMaintainWoodenFurnitureDelhiPost() {
  const post = getBlogPostBySlug("how-to-maintain-wooden-furniture-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
