import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function LeatherSofaCareTipsDelhiPost() {
  const post = getBlogPostBySlug("leather-sofa-care-tips-delhi");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
