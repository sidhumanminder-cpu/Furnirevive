import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function DiyVsProfessionalFurnitureRestorationPost() {
  const post = getBlogPostBySlug("diy-vs-professional-furniture-restoration");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
