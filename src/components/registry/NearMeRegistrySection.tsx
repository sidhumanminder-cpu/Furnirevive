import LocalityNearMeSection from "@/components/seo/LocalityNearMeSection.tsx";
import type { NearMeSectionData } from "@/lib/content-engine/index.ts";

/**
 * Registry renderer for the near-me module.
 * Wraps the existing LocalityNearMeSection with registry section data.
 * showFaqs is false because the registry pipeline has a dedicated faq:v1 module.
 */
export default function NearMeRegistrySection({ section }: { section: NearMeSectionData }) {
  const { localitySlug, serviceLabel, isCorporate } = section.props;
  return (
    <LocalityNearMeSection
      slug={localitySlug}
      serviceLabel={serviceLabel}
      isCorporate={isCorporate}
      showFaqs={false}
    />
  );
}
