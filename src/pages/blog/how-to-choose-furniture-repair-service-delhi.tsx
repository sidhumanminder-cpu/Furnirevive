import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowToChooseFurnitureRepairDelhiPost() {
  const post = getBlogPostBySlug("how-to-choose-furniture-repair-service-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
