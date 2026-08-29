import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function SofaReupholsteryVsBuyingNewPost() {
  const post = getBlogPostBySlug("sofa-reupholstery-vs-buying-new");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
