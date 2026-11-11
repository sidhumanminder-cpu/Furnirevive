import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/luxury-furniture-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/luxury-furniture-restoration-delhi", statusCode: 301 });
  },
});
