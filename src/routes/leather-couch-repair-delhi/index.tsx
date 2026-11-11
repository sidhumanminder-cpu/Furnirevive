import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/leather-couch-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/leather-sofa-repair-delhi", statusCode: 301 });
  },
});
