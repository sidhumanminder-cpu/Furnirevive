import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/termite-treatment-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/wooden-furniture-termite-treatment-delhi", statusCode: 301 });
  },
});
