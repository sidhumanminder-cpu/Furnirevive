import type { PageSectionData } from "@/lib/content-engine/index.ts";
import HeroSection from "@/components/registry/HeroSection.tsx";
import IntroSection from "@/components/registry/IntroSection.tsx";
import ProcessSection from "@/components/registry/ProcessSection.tsx";
import PricingSection from "@/components/registry/PricingSection.tsx";
import RepairTypesSection from "@/components/registry/RepairTypesSection.tsx";
import BrandsSection from "@/components/registry/BrandsSection.tsx";
import FaqSection from "@/components/registry/FaqSection.tsx";
import NearbySection from "@/components/registry/NearbySection.tsx";
import PyramidLinksSection from "@/components/registry/PyramidLinksSection.tsx";
import ServiceHubSection from "@/components/registry/ServiceHubSection.tsx";
import CtaSection from "@/components/registry/CtaSection.tsx";
import NearMeRegistrySection from "@/components/registry/NearMeRegistrySection.tsx";
import WhyChooseSection from "@/components/registry/WhyChooseSection.tsx";
import ComparisonSection from "@/components/registry/ComparisonSection.tsx";
import TestimonialsSection from "@/components/registry/TestimonialsSection.tsx";
import TopicalAuthorityRegistrySection from "@/components/registry/TopicalAuthorityRegistrySection.tsx";
import BlogLinksSection from "@/components/registry/BlogLinksSection.tsx";
import ServicesGridRegistrySection from "@/components/registry/ServicesGridRegistrySection.tsx";
import MaterialOptionsRegistrySection from "@/components/registry/MaterialOptionsRegistrySection.tsx";
import RepairTimesRegistrySection from "@/components/registry/RepairTimesRegistrySection.tsx";
import ServiceCoverageRegistrySection from "@/components/registry/ServiceCoverageRegistrySection.tsx";
import KitchenHeroSection from "@/components/registry/KitchenHeroSection.tsx";
import KitchenIntroSection from "@/components/registry/KitchenIntroSection.tsx";
import KitchenLayoutsGridSection from "@/components/registry/KitchenLayoutsGridSection.tsx";
import KitchenMaterialsGridSection from "@/components/registry/KitchenMaterialsGridSection.tsx";
import KitchenPricingSection from "@/components/registry/KitchenPricingSection.tsx";
import KitchenProcessSection from "@/components/registry/KitchenProcessSection.tsx";
import KitchenFaqSection from "@/components/registry/KitchenFaqSection.tsx";
import KitchenCtaSection from "@/components/registry/KitchenCtaSection.tsx";
import KitchenWhyChooseSection from "@/components/registry/KitchenWhyChooseSection.tsx";
import KitchenReviewsSection from "@/components/registry/KitchenReviewsSection.tsx";
import KitchenComparisonSection from "@/components/registry/KitchenComparisonSection.tsx";
import KitchenBrandsSection from "@/components/registry/KitchenBrandsSection.tsx";
import KitchenLocalitySnapshotSection from "@/components/registry/KitchenLocalitySnapshotSection.tsx";
import KitchenLocalityStatsSection from "@/components/registry/KitchenLocalityStatsSection.tsx";

/**
 * Dispatches a single PageSectionData to its matching renderer component.
 * The discriminated union on `type` narrows each `section` to the correct
 * concrete data shape. Unknown types render nothing (no errors).
 */
export default function SectionRenderer({
  section,
  hideBookOnline,
}: {
  section: PageSectionData;
  hideBookOnline?: boolean;
}): React.ReactNode {
  switch (section.type) {
    case "hero":
      return <HeroSection section={section} hideBookOnline={hideBookOnline} />;
    case "intro":
      return <IntroSection section={section} />;
    case "process":
      return <ProcessSection section={section} />;
    case "pricing":
      return <PricingSection section={section} />;
    case "repair-types":
      return <RepairTypesSection section={section} />;
    case "brands":
      return <BrandsSection section={section} />;
    case "faq":
      return <FaqSection section={section} />;
    case "nearby":
      return <NearbySection section={section} />;
    case "near-me":
      return <NearMeRegistrySection section={section} />;
    case "pyramid-links":
      return <PyramidLinksSection section={section} />;
    case "servicehub":
      return <ServiceHubSection section={section} />;
    case "cta":
      return <CtaSection section={section} />;
    case "why-choose":
      return <WhyChooseSection section={section} />;
    case "comparison":
      return <ComparisonSection section={section} />;
    case "testimonials":
      return <TestimonialsSection section={section} />;
    case "topical-authority":
      return <TopicalAuthorityRegistrySection section={section} />;
    case "blog-links":
      return <BlogLinksSection section={section} />;
    case "services-grid":
      return <ServicesGridRegistrySection section={section} />;
    case "material-options":
      return <MaterialOptionsRegistrySection section={section} />;
    case "repair-times":
      return <RepairTimesRegistrySection section={section} />;
    case "service-coverage":
      return <ServiceCoverageRegistrySection section={section} />;
    case "kitchen-hero":
      return <KitchenHeroSection section={section} />;
    case "kitchen-intro":
      return <KitchenIntroSection section={section} />;
    case "kitchen-layouts-grid":
      return <KitchenLayoutsGridSection section={section} />;
    case "kitchen-materials-grid":
      return <KitchenMaterialsGridSection section={section} />;
    case "kitchen-pricing":
      return <KitchenPricingSection section={section} />;
    case "kitchen-process":
      return <KitchenProcessSection section={section} />;
    case "kitchen-faq":
      return <KitchenFaqSection section={section} />;
    case "kitchen-cta":
      return <KitchenCtaSection section={section} />;
    case "kitchen-why-choose":
      return <KitchenWhyChooseSection section={section} />;
    case "kitchen-reviews":
      return <KitchenReviewsSection section={section} />;
    case "kitchen-comparison":
      return <KitchenComparisonSection section={section} />;
    case "kitchen-brands":
      return <KitchenBrandsSection section={section} />;
    case "kitchen-locality-snapshot":
      return <KitchenLocalitySnapshotSection section={section} />;
    case "kitchen-locality-stats":
      return <KitchenLocalityStatsSection section={section} />;
    default:
      return null;
  }
}
