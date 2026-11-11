import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/furniture-repair-south-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/furniture-repair-south-delhi", statusCode: 301 });
  },
});
