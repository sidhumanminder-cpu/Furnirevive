import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/recliner-sofa-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/recliner-sofa-repair-delhi", statusCode: 301 });
  },
});
