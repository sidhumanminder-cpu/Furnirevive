import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-spring-repair-noida/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-spring-repair-delhi", statusCode: 301 });
  },
});
