import RealRepairResults from "@/components/real-repair-results.tsx";
import type { BeforeAfterSectionData } from "@/lib/content-engine/index.ts";

/** Case-study section for registry pages; shows only the page's own service. */
export default function BeforeAfterSection({ section }: { section: BeforeAfterSectionData }) {
  const { service, pageSlug, cityName } = section.props;
  return <RealRepairResults pageSlug={pageSlug} cityName={cityName} service={service} />;
}
