import { createFileRoute } from "@tanstack/react-router";
import AdminPage from "@/pages/admin/page.tsx";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  head: () => ({ meta: [{ name: "robots", content: "noindex" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AdminPage />
  );
}
