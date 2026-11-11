import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-noida-sector-134/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-sector-134-noida", statusCode: 301 });
  },
});
