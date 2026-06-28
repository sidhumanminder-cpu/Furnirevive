import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaUpholsteryMistakesPost() {
  const post = getBlogPostBySlug("sofa-upholstery-mistakes");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
