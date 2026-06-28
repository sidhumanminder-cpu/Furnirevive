import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaFabricTypesGuideDelhiPost() {
  const post = getBlogPostBySlug("sofa-fabric-types-guide-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
