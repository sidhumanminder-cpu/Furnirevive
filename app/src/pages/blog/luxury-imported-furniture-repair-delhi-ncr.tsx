import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function LuxuryImportedFurnitureRepairDelhiNcrPost() {
  const post = getBlogPostBySlug("luxury-imported-furniture-repair-delhi-ncr");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
