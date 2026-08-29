import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function IsSofaUpholsteryWorthItPost() {
  const post = getBlogPostBySlug("is-sofa-upholstery-worth-it");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
