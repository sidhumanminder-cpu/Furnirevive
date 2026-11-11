import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sofa-repair-sector-47-gurgaon/")({
  beforeLoad: () => {
    throw redirect({ href: "/sofa-repair-sector-46-gurgaon", statusCode: 301 });
  },
});
