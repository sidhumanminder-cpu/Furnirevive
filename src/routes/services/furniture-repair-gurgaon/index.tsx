import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/furniture-repair-gurgaon/")({
  beforeLoad: () => {
    throw redirect({ href: "/chair-repair-gurgaon", statusCode: 301 });
  },
});
