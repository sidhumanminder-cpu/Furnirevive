import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/imported-furniture-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/imported-furniture-repair-delhi", statusCode: 301 });
  },
});
