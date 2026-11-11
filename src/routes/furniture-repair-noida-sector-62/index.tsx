import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-repair-noida-sector-62/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-noida-sector-62", statusCode: 301 });
  },
});
