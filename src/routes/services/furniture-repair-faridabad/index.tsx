import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/furniture-repair-faridabad/")({
  beforeLoad: () => {
    throw redirect({ href: "/furniture-repair-nit-faridabad", statusCode: 301 });
  },
});
