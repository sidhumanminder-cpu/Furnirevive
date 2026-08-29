import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function OfficeChairWheelsReplacementGuidePost() {
  const post = getBlogPostBySlug("office-chair-wheels-replacement-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
