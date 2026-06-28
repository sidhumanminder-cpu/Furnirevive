import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaUpholsteryCostDelhiPost() {
  const post = getBlogPostBySlug("sofa-upholstery-cost-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
