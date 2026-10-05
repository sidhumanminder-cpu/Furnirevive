import { useParams } from "react-router-dom";
import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

/**
 * Fallback route for any blog post present in ALL_BLOG_POSTS that does not
 * have its own dedicated route file. Prevents dead links from the blog
 * listing and related-post widgets when a post is added to the data layer.
 */
export default function DynamicBlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
