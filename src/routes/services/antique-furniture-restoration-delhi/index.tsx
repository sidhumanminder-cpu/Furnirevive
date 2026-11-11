import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/antique-furniture-restoration-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/antique-furniture-restoration-delhi", statusCode: 301 });
  },
});
