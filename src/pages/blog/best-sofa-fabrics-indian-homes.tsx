import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function BestSofaFabricsIndianHomesPost() {
  const post = getBlogPostBySlug("best-sofa-fabrics-indian-homes");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
