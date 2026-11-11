import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-noida-sector-128/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-sector-128-noida", statusCode: 301 });
  },
});
