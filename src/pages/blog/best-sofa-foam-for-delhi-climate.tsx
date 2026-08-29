import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function BestSofaFoamDelhiClimatePost() {
  const post = getBlogPostBySlug("best-sofa-foam-for-delhi-climate");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
