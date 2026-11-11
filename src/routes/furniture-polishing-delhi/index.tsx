import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-polishing-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/furniture-polish-delhi", statusCode: 301 });
  },
});
