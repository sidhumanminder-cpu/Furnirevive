import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function IsMySofaWorthRepairingPost() {
  const post = getBlogPostBySlug("is-my-sofa-worth-repairing");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
