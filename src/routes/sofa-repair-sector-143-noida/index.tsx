import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-sector-143-noida/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-noida-sector-143", statusCode: 301 });
  },
});
