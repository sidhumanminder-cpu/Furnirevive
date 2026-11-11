import { createFileRoute } from "@tanstack/react-router";
import MyBookingsPage from "@/pages/my-bookings/page.tsx";

export const Route = createFileRoute("/my-bookings/")({
  ssr: false,
  head: () => ({ meta: [{ name: "robots", content: "noindex" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MyBookingsPage />
  );
}
