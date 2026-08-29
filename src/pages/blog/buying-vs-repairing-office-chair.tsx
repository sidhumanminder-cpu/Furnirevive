import BlogPostTemplate from "@/components/blog-post-template.tsx";
import { getBlogPostBySlug } from "@/lib/blog-data.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function BuyingVsRepairingOfficeChairPost() {
  const post = getBlogPostBySlug("buying-vs-repairing-office-chair");
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
