import LocalityGrid from "./LocalityGrid.tsx";
import {
  CLUSTER_LABELS,
  SERVICE_HUB_CONFIG,
  getHubLocalities,
  getProtectTarget,
  groupByCluster,
} from "../_lib/hub-config.ts";

const MAX_ITEMS = 60;
const MAX_PER_CLUSTER = 15;

/**
 * Adds a locality grid to an established legacy hub page without touching the rest
 * of its content. City pages are grouped by cluster; renders nothing for other slugs.
 */
export default function ProtectedHubGrid({ slug }: { slug: string }) {
  const target = getProtectTarget(slug);
  if (!target) return null;
  const config = SERVICE_HUB_CONFIG[target.service];
  const all = getHubLocalities(target.service, target.area);

  if (target.area.kind === "city" && target.area.city !== "ghaziabad") {
    return (
      <>
        {groupByCluster(all).map((g) => (
          <LocalityGrid
            key={g.cluster}
            items={g.items.slice(0, MAX_PER_CLUSTER)}
            heading={`${config.name} in ${CLUSTER_LABELS[g.cluster] ?? g.cluster}`}
          />
        ))}
      </>
    );
  }
  return (
    <LocalityGrid
      items={all.slice(0, MAX_ITEMS)}
      heading={`${config.name} by Locality in ${target.area.label}`}
      description={`Pick your area in ${target.area.label} for local details on ${config.noun}.`}
    />
  );
}
