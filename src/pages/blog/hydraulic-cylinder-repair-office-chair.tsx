import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HydraulicCylinderRepairOfficeChairPost() {
  const post = getBlogPostBySlug("hydraulic-cylinder-repair-office-chair");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
