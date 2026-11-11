import { createFileRoute } from "@tanstack/react-router";
import DynamicBlogPost from "@/pages/blog/dynamic-blog-post.tsx";
import { pageHead } from "./-index.head";

export const Route = createFileRoute("/blog/$slug/")({
  head: ({ params }) => pageHead(params),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DynamicBlogPost />
  );
}
