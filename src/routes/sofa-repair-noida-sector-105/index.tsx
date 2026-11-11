import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-noida-sector-105/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-sector-105-noida", statusCode: 301 });
  },
});
