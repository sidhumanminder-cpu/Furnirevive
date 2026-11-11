import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/wooden-furniture-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/wooden-furniture-repair-delhi", statusCode: 301 });
  },
});
