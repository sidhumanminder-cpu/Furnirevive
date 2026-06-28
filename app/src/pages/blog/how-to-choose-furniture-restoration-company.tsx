import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HowToChooseFurnitureRestorationCompanyPost() {
  const post = getBlogPostBySlug("how-to-choose-furniture-restoration-company");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
