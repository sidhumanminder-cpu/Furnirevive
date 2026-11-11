import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/foam-replacement/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-foam-replacement-delhi", statusCode: 301 });
  },
});
