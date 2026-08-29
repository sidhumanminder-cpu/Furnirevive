import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function CommonReclineMotorProblemsPost() {
  const post = getBlogPostBySlug("common-recliner-motor-problems");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
