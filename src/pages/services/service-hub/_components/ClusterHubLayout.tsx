import LocalityGrid from "./LocalityGrid.tsx";
import HubFrame from "./HubSections.tsx";
import {
  SERVICE_HUB_CONFIG,
  getHubLocalities,
  getSiblingLinks,
  type HubLink,
  type HubTarget,
} from "../_lib/hub-config.ts";

/** Cluster-level hub (Delhi South / West / North / East / Central / Dwarka). */
export default function ClusterHubLayout({ target }: { target: HubTarget }) {
  const config = SERVICE_HUB_CONFIG[target.service];
  const area = target.area.label;
  const items = getHubLocalities(target.service, target.area);
  const cityHub: HubLink = { label: `${config.name} Delhi`, href: `/${target.service}-delhi` };

  return (
    <HubFrame
      target={target}
      eyebrow={`${config.name} in ${area}, Delhi`}
      intro={`Doorstep ${config.noun} in ${area}, ${config.headlinePrice}. Choose your colony below, or call for a free inspection.`}
      siblingLinks={[cityHub, ...getSiblingLinks(target)]}
    >
      <LocalityGrid
        items={items}
        heading={`${config.name} Across ${area}`}
        description={`${items.length} localities in ${area} where we offer doorstep ${config.noun}.`}
      />
    </HubFrame>
  );
}
