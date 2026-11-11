import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/wooden-chair-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/chair-repair-delhi", statusCode: 301 });
  },
});
