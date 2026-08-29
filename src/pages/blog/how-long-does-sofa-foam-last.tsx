import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowLongDoesSofaFoamLastPost() {
  const post = getBlogPostBySlug("how-long-does-sofa-foam-last");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
