import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function PetFriendlySofaFabricPost() {
  const post = getBlogPostBySlug("pet-friendly-sofa-fabric-guide");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
