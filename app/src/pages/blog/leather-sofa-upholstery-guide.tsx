import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function LeatherSofaUpholsteryGuidePost() {
  const post = getBlogPostBySlug("leather-sofa-upholstery-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
