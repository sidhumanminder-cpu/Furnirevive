import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/office-chair-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/office-chair-repair-delhi", statusCode: 301 });
  },
});
