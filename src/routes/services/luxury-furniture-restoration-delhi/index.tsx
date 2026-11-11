import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/luxury-furniture-restoration-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/luxury-furniture-restoration-delhi", statusCode: 301 });
  },
});
