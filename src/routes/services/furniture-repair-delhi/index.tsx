import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/furniture-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/furniture-repair-near-me-delhi", statusCode: 301 });
  },
});
