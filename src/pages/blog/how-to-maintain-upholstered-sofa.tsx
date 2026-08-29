import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowToMaintainUpholsteredSofaPost() {
  const post = getBlogPostBySlug("how-to-maintain-upholstered-sofa");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
