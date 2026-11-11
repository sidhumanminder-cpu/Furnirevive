import { createFileRoute } from "@tanstack/react-router";
import CaseStudiesAdminPage from "@/pages/admin/case-studies/page.tsx";

export const Route = createFileRoute("/admin/case-studies/")({
  ssr: false,
  head: () => ({ meta: [{ name: "robots", content: "noindex" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CaseStudiesAdminPage />
  );
}
