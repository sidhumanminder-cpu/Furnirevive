import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LocalityGrid from "./LocalityGrid.tsx";
import HubFrame from "./HubSections.tsx";
import {
  CLUSTER_LABELS,
  SERVICE_HUB_CONFIG,
  getClusterHubLink,
  getHubLocalities,
  getSiblingLinks,
  groupByCluster,
  type HubTarget,
} from "../_lib/hub-config.ts";

/** City-level hub: localities grouped by cluster, with links up to each cluster hub. */
export default function CityHubLayout({ target }: { target: HubTarget }) {
  const config = SERVICE_HUB_CONFIG[target.service];
  const area = target.area.label;
  const groups = groupByCluster(getHubLocalities(target.service, target.area));
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <HubFrame
      target={target}
      eyebrow={`${config.name} across ${area}`}
      intro={`Doorstep ${config.noun} across ${area}, ${config.headlinePrice}. Pick your locality below for local details, or call for a free inspection.`}
      siblingLinks={getSiblingLinks(target)}
    >
      {groups.map((group) => {
        const clusterHub = getClusterHubLink(target.service, group.cluster);
        return (
          <div key={group.cluster}>
            <LocalityGrid
              items={group.items}
              heading={`${config.name} in ${CLUSTER_LABELS[group.cluster] ?? group.cluster}`}
            />
            {clusterHub && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-6">
                <Link to={clusterHub.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline cursor-pointer">
                  All {clusterHub.label} localities <ArrowRight className="size-4" />
                </Link>
              </div>
            )}
          </div>
        );
      })}
      {total === 0 && (
        <p className="max-w-6xl mx-auto px-4 py-10 text-muted-foreground">
          We cover every locality in {area}. Call us to book a free inspection.
        </p>
      )}
    </HubFrame>
  );
}
