import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaRepairVsBuyNewSofaPost() {
  const post = getBlogPostBySlug("sofa-repair-vs-buy-new-sofa");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
