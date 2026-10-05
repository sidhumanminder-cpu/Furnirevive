import NotFound from "@/pages/NotFound.tsx";
import CityHubLayout from "./_components/CityHubLayout.tsx";
import ClusterHubLayout from "./_components/ClusterHubLayout.tsx";
import { getHubTarget } from "./_lib/hub-config.ts";

/** Renders the city or cluster hub for a known hub slug. */
export default function ServiceHubPage({ slug }: { slug: string }) {
  const target = getHubTarget(slug);
  if (!target) return <NotFound />;
  return target.area.kind === "city" ? <CityHubLayout target={target} /> : <ClusterHubLayout target={target} />;
}
