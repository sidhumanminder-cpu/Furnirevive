import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function VisitorChairRepairPost() {
  const post = getBlogPostBySlug("visitor-chair-repair");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
