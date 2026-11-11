import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-noida-sector-77/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-noida-sector-75", statusCode: 301 });
  },
});
