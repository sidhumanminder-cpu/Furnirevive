import { useEffect } from "react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import HeroSection from "./home/_components/hero-section.tsx";
import WhyChooseSection from "./home/_components/why-choose-section.tsx";
import AboutSection from "./home/_components/about-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import ModularKitchenSection from "./home/_components/modular-kitchen-section.tsx";
import PopularServicesSection from "./home/_components/popular-services-section.tsx";
import HowItWorksSection from "./home/_components/how-it-works-section.tsx";
import ServiceAreasSection from "./home/_components/service-areas-section.tsx";
import PopularAreasSection from "./home/_components/popular-areas-section.tsx";
import TestimonialsSection from "./home/_components/testimonials-section.tsx";
import FaqSection from "./home/_components/faq-section.tsx";
import BlogPreviewSection from "./home/_components/blog-preview-section.tsx";
import CtaSection from "./home/_components/cta-section.tsx";

/** LocalBusiness + FurnitureRepair JSON-LD structured data */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "FurniRevive",
  description:
    "Professional furniture repair services in Delhi NCR. Sofa repair, chair repair, bed repair, wood polish, and carpenter home service at your doorstep across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
  url: "https://furnirevive.com",
  telephone: "+919217999355",
  email: "support@furnirevive.com",
  priceRange: "₹499 - ₹20,000",
  image: "https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "10000",
    bestRating: "5",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Delhi",
      containedInPlace: { "@type": "State", name: "Delhi" },
    },
    {
      "@type": "City",
      name: "Noida",
      containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
    },
    {
      "@type": "City",
      name: "Gurgaon",
      containedInPlace: { "@type": "State", name: "Haryana" },
    },
    {
      "@type": "City",
      name: "Ghaziabad",
      containedInPlace: { "@type": "State", name: "Uttar Pradesh" },
    },
    {
      "@type": "City",
      name: "Faridabad",
      containedInPlace: { "@type": "State", name: "Haryana" },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find the best sofa repair near me in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FurniRevive offers the best sofa repair near me service across Delhi NCR. We provide doorstep sofa repair in Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Starting at just ₹999 with same-day service and a 6-month warranty.",
      },
    },
    {
      "@type": "Question",
      name: "How much does furniture repair cost in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chair repair starts at ₹599, sofa repair at ₹999, bed repair at ₹1,199, and wood polish at ₹799. Professional furniture repair saves you 50-70% compared to buying new furniture.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a reliable carpenter near me in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FurniRevive provides verified, experienced carpenters at your doorstep across Delhi NCR. Every carpenter in our team has 5+ years of experience. Book online or call for same-day carpenter home service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide doorstep furniture repair in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our furniture repair services are doorstep-based across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Same-day service available when you book before noon.",
      },
    },
  ],
};

export default function Index() {
  useEffect(() => {
    document.title =
      "FurniRevive | Sofa Repair & Furniture Repair in Delhi NCR";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "FurniRevive provides expert sofa repair, furniture repair, polishing, and carpenter services at home across Delhi NCR. Trusted FurniRevive experts. Book today."
      );
    }

    // Inject structured data
    const existingScripts = document.querySelectorAll(
      'script[data-schema="homepage"]'
    );
    existingScripts.forEach((s) => s.remove());

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

    return () => {
      document
        .querySelectorAll('script[data-schema="homepage"]')
        .forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <ModularKitchenSection />
        <PopularServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <ServiceAreasSection />
        <PopularAreasSection />
        <TestimonialsSection />
        <FaqSection />
        <BlogPreviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
