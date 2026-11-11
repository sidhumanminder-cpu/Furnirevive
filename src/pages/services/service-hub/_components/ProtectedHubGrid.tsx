import LocalityGrid from "./LocalityGrid.tsx";
import ExtraLocalityLinks, { resolveGurgaonLink, type ExtraLocalityLink } from "./ExtraLocalityLinks.tsx";
import {
  CLUSTER_LABELS,
  SERVICE_HUB_CONFIG,
  getHubLocalities,
  getProtectTarget,
  groupByCluster,
} from "../_lib/hub-config.ts";

const MAX_ITEMS = 60;
const MAX_PER_CLUSTER = 15;

// Gurgaon areas that have sofa-repair pages but sit outside the locality registry (or past the per-cluster cap)
const GURGAON_EXTRA_SECTORS = [...range(70, 76), ...range(80, 99)];
const GURGAON_EXTRA_AREAS: readonly { name: string; slugPart: string }[] = [
  { name: "South City 1", slugPart: "south-city-1" },
  { name: "South City 2", slugPart: "south-city-2" },
];

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

/** Extra links for the Gurgaon sofa-repair hub: only pages that exist, never ones already in the grids above. */
function gurgaonExtraLinks(alreadyShown: ReadonlySet<string>): ExtraLocalityLink[] {
  const candidates = [
    ...GURGAON_EXTRA_SECTORS.map((n) => resolveGurgaonLink(`Sector ${n}`, `sector-${n}`)),
    ...GURGAON_EXTRA_AREAS.map((a) => resolveGurgaonLink(a.name, a.slugPart)),
  ];
  return candidates.filter((l): l is ExtraLocalityLink => l !== null && !alreadyShown.has(l.href));
}

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
    const groups = groupByCluster(all);
    const shown = new Set(groups.flatMap((g) => g.items.slice(0, MAX_PER_CLUSTER).map((i) => i.href)));
    return (
      <>
        {groups.map((g) => (
          <LocalityGrid
            key={g.cluster}
            items={g.items.slice(0, MAX_PER_CLUSTER)}
            heading={`${config.name} in ${CLUSTER_LABELS[g.cluster] ?? g.cluster}`}
          />
        ))}
        {slug === "sofa-repair-gurgaon" && (
          <ExtraLocalityLinks heading="Sofa Repair in Gurgaon Sectors 70–99 and South City" links={gurgaonExtraLinks(shown)} />
        )}
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
