import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-restoration-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/wooden-furniture-restoration-delhi", statusCode: 301 });
  },
});
