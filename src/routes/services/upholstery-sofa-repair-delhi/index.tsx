import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/upholstery-sofa-repair-delhi/")({
  beforeLoad: () => {
    throw redirect({ href: "/doorstep-upholstery-repair-delhi", statusCode: 301 });
  },
});
