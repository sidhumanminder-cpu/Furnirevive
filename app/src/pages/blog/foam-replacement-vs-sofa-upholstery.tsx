import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function FoamReplacementVsSofaUpholsteryPost() {
  const post = getBlogPostBySlug("foam-replacement-vs-sofa-upholstery");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
