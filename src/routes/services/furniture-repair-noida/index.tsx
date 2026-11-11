import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/furniture-repair-noida/")({
  beforeLoad: () => {
    throw redirect({ href: "/furniture-repair-greater-noida", statusCode: 301 });
  },
});
