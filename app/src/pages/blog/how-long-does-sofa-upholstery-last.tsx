import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowLongSofaUpholsteryLastsPost() {
  const post = getBlogPostBySlug("how-long-does-sofa-upholstery-last");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
