import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SignsYourSofaNeedsReupholsteryPost() {
  const post = getBlogPostBySlug("signs-your-sofa-needs-reupholstery");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
