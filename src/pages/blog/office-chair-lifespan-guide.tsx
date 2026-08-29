import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function OfficeChairLifespanGuidePost() {
  const post = getBlogPostBySlug("office-chair-lifespan-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
