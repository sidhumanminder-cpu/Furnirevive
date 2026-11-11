import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/sofa-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-near-me-delhi", statusCode: 301 });
  },
});
