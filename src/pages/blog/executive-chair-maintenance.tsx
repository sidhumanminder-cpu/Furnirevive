import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function ExecutiveChairMaintenancePost() {
  const post = getBlogPostBySlug("executive-chair-maintenance");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
