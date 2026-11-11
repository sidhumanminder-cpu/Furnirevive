import { removeUnowned } from "@/lib/remove-unowned.ts";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import HeroSection from "./home/_components/hero-section.tsx";
import WhyChooseSection from "./home/_components/why-choose-section.tsx";
import AboutSection from "./home/_components/about-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import CaseStudiesSection from "./home/_components/case-studies-section.tsx";
import PopularServicesSection from "./home/_components/popular-services-section.tsx";
import HowItWorksSection from "./home/_components/how-it-works-section.tsx";
import ServiceAreasSection from "./home/_components/service-areas-section.tsx";
import PopularAreasSection from "./home/_components/popular-areas-section.tsx";
import TestimonialsSection from "./home/_components/testimonials-section.tsx";
import FaqSection from "./home/_components/faq-section.tsx";
const BlogPreviewSection = lazy(() => import("./home/_components/blog-preview-section.tsx"));
import CtaSection from "./home/_components/cta-section.tsx";
import { BUSINESS, BUSINESS_AREA_SERVED } from "@/lib/business-config.ts";
import { HOMEPAGE_FAQS } from "./home/_lib/home-faqs.ts";

/** LocalBusiness + FurnitureRepair JSON-LD structured data */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://furnirevive.com/#business",
  name: "FurniRevive",
  description:
    "Professional furniture repair services in Delhi NCR. Sofa repair, chair repair, bed repair, wood polish, and carpenter home service at your doorstep across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
  url: "https://furnirevive.com",
  telephone: "+919217999355",
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  openingHours: BUSINESS.openingHours,
  logo: BUSINESS.logo,
  image: "https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW",
  areaServed: BUSINESS_AREA_SERVED,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Furniture Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sofa Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chair Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bed Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Polish" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recliner Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpenter Home Service" } },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://furnirevive.com/#website",
  url: "https://furnirevive.com/",
  name: BUSINESS.name,
  publisher: { "@id": "https://furnirevive.com/#business" },
};

export default function Index() {
  useEffect(() => {
    document.title =
      "Sofa, Furniture & Chair Repair in Delhi NCR | FurniRevive";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Doorstep sofa, furniture, chair & bed repair, wood polish & carpenter service across Delhi NCR. 4.9★ rated. 10,000+ sofas repaired since 2016. Same-day."
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "furniture repair delhi, sofa repair near me, carpenter near me, furniture repair delhi ncr, sofa repair delhi, chair repair delhi, wood polish delhi, bed repair delhi, carpenter home service delhi, furniture repair noida, furniture repair gurgaon, chair repair near me, bed repair near me"
      );
    }

    // Inject structured data
    const existingScripts = document.querySelectorAll(
      'script[data-schema="homepage"]'
    );
    existingScripts.forEach((s) => removeUnowned(s));

    const localScript = document.createElement("script");
    localScript.type = "application/ld+json";
    localScript.dataset.schema = "homepage";
    localScript.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(localScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.dataset.schema = "homepage";
    faqScript.textContent = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(faqScript);

    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.dataset.schema = "homepage";
    websiteScript.textContent = JSON.stringify(WEBSITE_SCHEMA);
    document.head.appendChild(websiteScript);

    return () => {
      document
        .querySelectorAll('script[data-schema="homepage"]')
        .forEach((s) => removeUnowned(s));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <CaseStudiesSection />
        <PopularServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <ServiceAreasSection />
        <PopularAreasSection />
        <TestimonialsSection />
        <FaqSection />
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <BlogPreviewSection />
        </Suspense>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
