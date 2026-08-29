import { useEffect, useState } from "react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Shield,
  Paintbrush,
  Cpu,
  Star,
  ChevronRight,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER, BRAND_NAME } from "@/lib/seo-constants.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import { MODULAR_KITCHEN_COST_REGISTRY } from "@/lib/registry/kitchen-cost-registry.ts";
import { KITCHEN_BLOG_REGISTRY } from "@/lib/registry/kitchen-blog-registry.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import PremiumKitchenGallery from "./_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "./_components/kitchen-gallery-images.ts";
import { WHY_CHOOSE_CARDS } from "./_data/kitchen-why-choose.ts";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";

const FLAGSHIP_IMAGE = "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h";

const TRUST_BADGES = [
  "10-Year Warranty",
  "Free Design Consultation",
  "Premium Hardware",
  "Delhi NCR Service",
] as const;

const WHY_CARDS = [
  {
    icon: Shield,
    title: "10-Year Structural Warranty",
    description:
      "Every kitchen comes with a 10-year structural warranty on cabinets, hinges, and hardware. Written guarantee, no exceptions.",
  },
  {
    icon: Paintbrush,
    title: "Free Design Consultation",
    description:
      "Walk through every layout option with our designer before a single cabinet is made. We refine until you're 100% happy, at no cost.",
  },
  {
    icon: Cpu,
    title: "Precision-Made Cabinets",
    description:
      "CNC-manufactured carcasses in moisture-resistant BWR plywood. Every millimetre planned to fit your exact kitchen dimensions.",
  },
  {
    icon: Award,
    title: "Premium Hardware Only",
    description:
      "Hettich, Blum, or Hafele drawer channels and hinges on every project. Soft-close as standard — no compromises on quality.",
  },
] as const;

const WHY_MODULAR = [
  {
    title: "Better Storage",
    description:
      "Modular cabinets use every inch, including corners, verticals, and overhead space. Pull-out units and tall units maximise storage in any size kitchen.",
  },
  {
    title: "Modern Aesthetics",
    description:
      "Clean lines, flush profiles, and premium finishes transform any kitchen into the most impressive room in your home.",
  },
  {
    title: "Easier Maintenance",
    description:
      "Modular units are removable and replaceable. Damaged shutters can be swapped without rebuilding the entire kitchen.",
  },
  {
    title: "Space Optimisation",
    description:
      "Designed from measurements, not guesses. Every unit is CNC-manufactured to use your exact dimensions — ideal for Delhi NCR's varied apartment sizes.",
  },
  {
    title: "Long-Term Value",
    description:
      "A quality modular kitchen adds resale value to your home and outlasts a carpenter-made kitchen by 10–15 years with proper hardware.",
  },
] as const;

const DESIGN_PROCESS = [
  {
    step: "Free Consultation",
    description:
      "Book a free home visit or call. Our designer surveys your kitchen and understands your needs.",
  },
  {
    step: "Design Plan",
    description:
      "Receive a detailed design plan with layout drawings and material options within 48 hours. Revise freely until you're satisfied.",
  },
  {
    step: "Fixed Quote",
    description:
      "Get a detailed, itemised written quote with material specs, hardware brands, and installation timeline.",
  },
  {
    step: "Manufacturing",
    description:
      "Your kitchen is precision-manufactured in our workshop using CNC machinery and premium materials.",
  },
  {
    step: "Installation",
    description:
      "Our certified team installs your kitchen in 5–7 days with zero damage to your walls or flooring.",
  },
  {
    step: "Handover + Warranty",
    description:
      "Post-installation walkthrough, warranty document, and 1-year free service included.",
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "South Delhi",
    text: "FurniRevive transformed our kitchen completely. The design plan was spot on and the installation was flawless. Very happy with the acrylic finish quality.",
  },
  {
    name: "Rahul Mehta",
    location: "DLF Phase 3, Gurgaon",
    text: "Exceptional quality and professional team. The L-shape design fits our apartment perfectly. The 10-year warranty gave us real confidence.",
  },
  {
    name: "Anjali Singh",
    location: "Vasant Kunj",
    text: "From first consultation to handover — seamless. The PU finish looks stunning. Highly recommend for anyone doing a modular kitchen in Delhi.",
  },
] as const;

const FAQS = [
  {
    question: "How much does a modular kitchen cost in Delhi NCR?",
    answer:
      "Modular kitchen costs in Delhi NCR typically range from ₹80,000 for a basic laminate kitchen to ₹15 lakhs or more for a fully custom luxury kitchen with imported hardware. The main cost drivers are kitchen size, shutter material, hardware brand, and countertop type.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Manufacturing takes 3–4 weeks after design approval. Installation is completed in 5–7 days. Rush projects can be accommodated on request.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "FurniRevive provides a 10-year structural warranty on all cabinets and hardware. This covers manufacturing defects, structural failures, and hardware malfunctions.",
  },
  {
    question: "What does the design consultation include?",
    answer:
      "Our designer visits your home, takes measurements, and prepares a complete design plan with layout options, material choices, and a fixed written quote — all at no cost, before you commit.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve South Delhi, Greater Kailash, Vasant Kunj, Defence Colony, Dwarka, Rohini, Pitampura, Punjabi Bagh, Janakpuri, Rajouri Garden in Delhi, and DLF Phases, Golf Course Road, Golf Course Extension, Sushant Lok, and Sohna Road in Gurgaon.",
  },
  {
    question: "What materials do you use for the carcass?",
    answer:
      "All kitchen carcasses are made from moisture-resistant BWR (Boiling Water Resistant) plywood as standard. We do not use MDF or particle board for structural components.",
  },
] as const;

const DELHI_AREAS = [
  "South Delhi",
  "Greater Kailash",
  "Vasant Kunj",
  "Defence Colony",
  "Dwarka",
  "Rohini",
  "Pitampura",
  "Punjabi Bagh",
  "Janakpuri",
  "Rajouri Garden",
] as const;

const GURGAON_AREAS = [
  "DLF Phase 1-5",
  "Golf Course Road",
  "Golf Course Extension",
  "Sushant Lok",
  "Sohna Road",
] as const;

const PRICING_TIERS = [
  {
    tier: "Budget",
    range: "₹80K–₹1.5L",
    features: "PVC/laminate shutters, BWR plywood carcass, basic hardware",
    link: "/modular-kitchen-1-lakh",
  },
  {
    tier: "Mid-Range",
    range: "₹1.5L–₹3L",
    features:
      "Acrylic/membrane shutters, premium hardware (Hettich), granite countertop",
    link: "/modular-kitchen-2-lakh",
  },
  {
    tier: "Luxury",
    range: "₹5L+",
    features:
      "PU/veneer shutters, Blum/Hafele hardware, quartz countertop, full appliance integration",
    link: "/modular-kitchen-luxury",
  },
] as const;

function getDurabilityColor(durability: string) {
  switch (durability) {
    case "very-high":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    case "high":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "medium":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    case "low":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
  }
}

export default function ModularKitchenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Modular Kitchen Design & Installation in Delhi NCR | FurniRevive";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Custom modular kitchen design and installation across Delhi NCR. Premium materials, free design consultation, 10-year warranty. Serving South Delhi, Gurgaon, and 15+ localities."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Custom modular kitchen design and installation across Delhi NCR. Premium materials, free design consultation, 10-year warranty. Serving South Delhi, Gurgaon, and 15+ localities.";
      document.head.appendChild(meta);
    }

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = "https://furnirevive.com/modular-kitchen";
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = "https://furnirevive.com/modular-kitchen";
      document.head.appendChild(canonical);
    }

    // Open Graph + Twitter
    const ogMetas: HTMLMetaElement[] = [];
    function setOgMeta(attrName: string, attrVal: string, ogContent: string) {
      const el = document.createElement("meta");
      el.setAttribute(attrName, attrVal);
      el.setAttribute("content", ogContent);
      document.head.appendChild(el);
      ogMetas.push(el);
    }
    setOgMeta("property", "og:title", "Modular Kitchen Design & Installation in Delhi NCR | FurniRevive");
    setOgMeta("property", "og:description", "Custom modular kitchen design and installation across Delhi NCR. Premium materials, free design consultation, 10-year warranty. Serving South Delhi, Gurgaon, and 15+ localities.");
    setOgMeta("property", "og:url", "https://furnirevive.com/modular-kitchen");
    setOgMeta("property", "og:image", FLAGSHIP_IMAGE);
    setOgMeta("property", "og:type", "website");
    setOgMeta("property", "og:site_name", "FurniRevive");
    setOgMeta("name", "twitter:card", "summary_large_image");
    setOgMeta("name", "twitter:title", "Modular Kitchen Design & Installation in Delhi NCR | FurniRevive");
    setOgMeta("name", "twitter:description", "Custom modular kitchen design and installation across Delhi NCR. Premium materials, free design consultation, 10-year warranty.");
    setOgMeta("name", "twitter:image", FLAGSHIP_IMAGE);

    // BreadcrumbList JSON-LD
    const breadcrumbLd = document.createElement("script");
    breadcrumbLd.type = "application/ld+json";
    breadcrumbLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://furnirevive.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Modular Kitchens",
          item: "https://furnirevive.com/modular-kitchen",
        },
      ],
    });
    document.head.appendChild(breadcrumbLd);

    // FAQPage JSON-LD
    const faqLd = document.createElement("script");
    faqLd.type = "application/ld+json";
    faqLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(faqLd);

    // Service JSON-LD
    const serviceLd = document.createElement("script");
    serviceLd.type = "application/ld+json";
    serviceLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Modular Kitchen Design & Installation",
      provider: {
        "@type": "LocalBusiness",
        name: "FurniRevive",
        url: "https://furnirevive.com",
        areaServed: [
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "Gurgaon" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Faridabad" },
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "City", name: "Chandigarh" },
        ],
      },
      description: "Custom modular kitchen design and installation across Delhi NCR. Premium materials, free design consultation, 10-year warranty.",
      serviceType: "Modular Kitchen Installation",
    });
    document.head.appendChild(serviceLd);

    return () => {
      ogMetas.forEach((m) => m.remove());
      serviceLd.remove();
      breadcrumbLd.remove();
      faqLd.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* ===== 1. HERO ===== */}
      <section
        className="relative min-h-[65vh] md:min-h-[700px] flex items-center pt-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(28,25,23,0.82), rgba(41,37,36,0.75)), url(${FLAGSHIP_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[720px] leading-tight">
            Modular Kitchen Design &amp; Installation in Delhi NCR
          </h1>
          <p className="mt-5 text-lg md:text-xl text-stone-200 max-w-[640px]">
            {BRAND_NAME} designs, manufactures, and installs custom modular
            kitchens for premium homes across Delhi NCR. Every kitchen is built
            to order — free design consultation, 10-year warranty, and professional
            installation.
          </p>
          <p className="mt-4 text-amber-300 font-medium text-sm md:text-base">
            ★★★★★ Trusted Across Delhi NCR · Free Design Consultation ·
            10-Year Structural Warranty
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm text-white border border-white/20"
              >
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FurniRevive%2C%20I%20want%20a%20free%20modular%20kitchen%20design%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp for Free Quote
            </a>
          </div>
        </div>
      </section>

      <div id="gallery">
        <PremiumKitchenGallery
          images={ROOT_GALLERY}
          initialVisible={12}
          showMoreCount={12}
          title="Premium Kitchen Gallery"
        />
      </div>

      {/* Why Choose FurniRevive */}
      <section className="bg-stone-900 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Why Choose FurniRevive for Your Modular Kitchen?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_CARDS.map((card) => (
              <div key={card.id} className="rounded-xl bg-stone-800 border border-stone-700 p-6 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{card.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KNOWLEDGE ARCHITECTURE NAV ===== */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Browse the Complete Kitchen Guide</h2>
            <p className="text-muted-foreground mt-2">Everything organised by what you need — locality, design, material, budget, repair, or renovation.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { href: "/modular-kitchen-localities", icon: "📍", label: "Browse by Locality", desc: "All localities across Delhi NCR" },
              { href: "/modular-kitchen-designs", icon: "📐", label: "Browse by Design", desc: "L-Shape, U-Shape, Island & more" },
              { href: "/modular-kitchen-materials", icon: "🎨", label: "Browse by Material", desc: "Acrylic, Laminate, PU, Glass" },
              { href: "/modular-kitchen-budget", icon: "💰", label: "Browse by Budget", desc: "₹65K to ₹3L+ options" },
              { href: "/modular-kitchen-repair-guide", icon: "🔧", label: "Kitchen Repairs", desc: "45 repair guides by problem" },
              { href: "/modular-kitchen-renovation", icon: "🏠", label: "Renovation", desc: "Makeover, Remodel & Renovation" },
              { href: "/modular-kitchen-guides", icon: "📚", label: "Guides & Learning", desc: "Buying guides, comparisons, tips" },
              { href: "/modular-kitchen-gurgaon", icon: "🗺️", label: "City Pages", desc: "Delhi, Gurgaon, Noida & more" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-xl border bg-card p-4 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-sm text-foreground group-hover:text-amber-700 transition-colors">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. WHY FURNIREVIVE ===== */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Why Choose {BRAND_NAME} for Your Modular Kitchen?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-sm border border-stone-200 dark:border-stone-700"
              >
                <card.icon className="h-9 w-9 text-amber-500 mb-4" />
                <h3 className="font-semibold text-lg text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. KITCHEN LAYOUTS ===== */}
      <section className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Kitchen Layouts We Design
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
            Choose the layout that fits your space — we custom-design and
            install all configurations.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULAR_KITCHEN_LAYOUT_REGISTRY.map((layout) => (
              <Link
                key={layout.id}
                to={`/modular-kitchen-${layout.slug}`}
                className="group bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700 hover:border-amber-400 dark:hover:border-amber-500 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {layout.shortName}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {layout.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-md font-medium">
                    ₹{(layout.costMin / 100000).toFixed(1)}L – ₹
                    {(layout.costMax / 100000).toFixed(1)}L
                  </span>
                  <span className="px-2 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-md">
                    {layout.minSqFt}–{layout.maxSqFt} sq ft
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. KITCHEN MATERIALS ===== */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Kitchen Finishes &amp; Materials
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
            From budget laminate to luxury veneer — every finish available,
            every kitchen made to order.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULAR_KITCHEN_MATERIAL_REGISTRY.map((material) => (
              <Link
                key={material.id}
                to={`/modular-kitchen-${material.slug}`}
                className="group bg-white dark:bg-stone-800 rounded-xl p-5 border border-stone-200 dark:border-stone-700 hover:border-amber-400 dark:hover:border-amber-500 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {material.shortName}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {material.finish}
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  ₹{material.costMin}–₹{material.costMax}/sq ft
                </p>
                <span
                  className={`mt-3 inline-block px-2 py-0.5 rounded text-xs font-medium capitalize ${getDurabilityColor(material.durability)}`}
                >
                  {material.durability} durability
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. PRICING OVERVIEW ===== */}
      <section className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Modular Kitchen Pricing Guide
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <Link
                key={tier.tier}
                to={tier.link}
                className="group bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-foreground">
                  {tier.tier}
                </h3>
                <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {tier.range}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {tier.features}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                  Learn more <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All prices are indicative. Get a fixed written quote after your free
            design consultation.
          </p>
          <div className="mt-4 text-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <PhoneCall className="h-5 w-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ===== 6. WHY MODULAR KITCHENS ===== */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Why a Modular Kitchen?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MODULAR.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-sm font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CITY COVERAGE ===== */}
      <section className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Modular Kitchens Across Delhi NCR
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
            {BRAND_NAME} serves premium residential areas across Delhi and
            Gurgaon.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Delhi card */}
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-amber-500" />
                <h3 className="text-xl font-bold text-foreground">Delhi</h3>
                <span className="ml-auto px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-full">
                  10 Premium Areas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {DELHI_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                to="/modular-kitchen-delhi"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                View Locations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Gurgaon card */}
            <div className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-amber-500" />
                <h3 className="text-xl font-bold text-foreground">Gurgaon</h3>
                <span className="ml-auto px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-full">
                  5 Premium Areas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {GURGAON_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                to="/modular-kitchen-gurgaon"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                View Locations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. DESIGN PROCESS ===== */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Our Kitchen Design Process
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_PROCESS.map((item, idx) => (
              <div
                key={item.step}
                className="relative bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700"
              >
                <span className="absolute top-4 right-4 text-3xl font-bold text-stone-200 dark:text-stone-700">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-foreground">{item.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. CUSTOMER REVIEWS ===== */}
      <section className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            What Our Customers Say
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-200 dark:border-stone-700"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    — {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeServicesSection service="modular-kitchen" pageType="hub" />

      {/* ===== 10. KITCHEN PLANNING GUIDES ===== */}
      <section className="py-16 md:py-20 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Kitchen Planning Guides
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
            Expert guides to help you plan, budget, and design the perfect modular kitchen.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KITCHEN_BLOG_REGISTRY.filter((entry) =>
              [
                "modular-vs-carpenter-kitchen",
                "how-to-plan-modular-kitchen",
                "choosing-kitchen-layout-guide",
                "modular-kitchen-cost-delhi-guide",
                "acrylic-modular-kitchen-guide",
                "laminate-modular-kitchen-guide",
                "modular-kitchen-l-shape-design-guide",
                "modular-kitchen-island-design-guide",
              ].includes(entry.slug)
            ).map((guide) => (
              <Link key={guide.slug} to={`/blog/${guide.slug}`} className="group cursor-pointer">
                <Card className="pt-0 h-full overflow-hidden border-stone-200 dark:border-stone-700 group-hover:border-amber-400 dark:group-hover:border-amber-500 transition-colors">
                  <img
                    src={guide.featuredImage}
                    alt={guide.h1}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <CardContent className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-md capitalize mb-2">
                      {guide.category}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {guide.h1}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <span className="mt-2 block text-xs text-muted-foreground">
                      {guide.readTime}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog/modular-kitchen">
              <Button variant="secondary" className="cursor-pointer">
                View All Kitchen Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 11. FAQ ===== */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-900/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${openFaq === idx ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. CTA BANNER ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-500 to-amber-600 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="mt-4 text-black/80 max-w-lg mx-auto">
            Book a free consultation today. Our designer will visit your home,
            take measurements, and deliver a design plan within 48 hours — at no
            cost.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now — Free Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FurniRevive%2C%20I%20need%20a%20modular%20kitchen%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-black/10 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      <KitchenTrustStrip />
      <Footer />
    </div>
  );
}
