import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-sector-18-noida/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-noida-sector-18", statusCode: 301 });
  },
});
