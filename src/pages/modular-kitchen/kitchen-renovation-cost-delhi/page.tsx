import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, IndianRupee } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Kitchen Renovation Cost in Delhi 2025 — Complete Price Guide & Quotation | FurniRevive";
const META_DESCRIPTION =
  "Kitchen renovation cost in Delhi: cabinet makeover from ₹50,000, partial renovation ₹1.5L–₹3L, full remodel ₹3L–₹8L+. Detailed cost breakdown by scope, material and locality. Free quote.";
const CANONICAL = "https://furnirevive.com/kitchen-renovation-cost-delhi";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

type RenovationScope = {
  title: string;
  priceRange: string;
  includes: string[];
};

const RENOVATION_SCOPES: RenovationScope[] = [
  {
    title: "Cabinet Makeover Only",
    priceRange: "₹50,000–₹1.5L",
    includes: [
      "New shutter doors/handles",
      "Existing carcass retained",
      "Laminate or acrylic finish",
      "Soft-close hardware upgrade",
      "Countertop edge finishing",
    ],
  },
  {
    title: "Partial Renovation",
    priceRange: "₹1.5L–₹3L",
    includes: [
      "New cabinets (base + wall)",
      "New countertop (granite/quartz)",
      "New backsplash tiles",
      "Sink/tap replacement",
      "LED lighting under-cabinet",
    ],
  },
  {
    title: "Full Kitchen Remodel",
    priceRange: "₹3L–₹8L+",
    includes: [
      "Demolition of old kitchen",
      "New layout design",
      "Full modular cabinet installation",
      "Plumbing realignment",
      "New flooring/wall tiles",
      "Appliance zone integration",
    ],
  },
];

type MaterialRow = {
  component: string;
  budget: string;
  midRange: string;
  premium: string;
};

const MATERIAL_TABLE: MaterialRow[] = [
  { component: "Cabinet Shutters", budget: "Laminate ₹600–900/sqft", midRange: "Acrylic ₹900–1,400/sqft", premium: "PU/Glass ₹1,500–3,000/sqft" },
  { component: "Countertop", budget: "Granite ₹180–350/sqft", midRange: "Quartz ₹350–700/sqft", premium: "Italian Marble ₹800–2,000/sqft" },
  { component: "Hardware", budget: "Local ₹8,000–15,000", midRange: "Hettich ₹15,000–30,000", premium: "Blum ₹30,000–60,000" },
  { component: "Backsplash Tiles", budget: "Ceramic ₹40–80/sqft", midRange: "Vitrified ₹80–150/sqft", premium: "Designer ₹150–400/sqft" },
];

const COST_FACTORS = [
  "Kitchen size (sq ft)",
  "Scope of work (cabinets only vs full remodel)",
  "Material & finish choice",
  "Hardware brand (local/Hettich/Blum)",
  "Structural changes (plumbing/electrical)",
];

type Testimonial = { name: string; location: string; text: string; rating: number };
const TESTIMONIALS: Testimonial[] = [
  { name: "Sanjay Mehta", location: "Greater Kailash, Delhi", text: "FurniRevive gave us a detailed cost breakdown before starting. Cabinet makeover came to ₹95,000 — exactly as quoted. No surprise bills.", rating: 5 },
  { name: "Ananya Joshi", location: "Vasant Kunj, Delhi", text: "Partial renovation: new acrylic cabinets and quartz countertop for ₹2.1L. Done in 8 days. The pricing transparency was refreshing compared to other vendors.", rating: 5 },
  { name: "Rajiv Kumar", location: "Rohini, Delhi", text: "Full remodel of a 10×10 kitchen for ₹4.5L including all materials and labour. Good value for the quality delivered.", rating: 5 },
];

const FAQS = [
  {
    q: "What is the average cost of kitchen renovation in Delhi?",
    a: "Cabinet-only makeovers average ₹70,000–₹1.2L. Partial renovations (cabinets + countertop) average ₹1.8L–₹2.5L. Full kitchen remodels average ₹4L–₹6L for a standard 10×10 ft kitchen.",
  },
  {
    q: "What is kitchen renovation cost per sq ft in Delhi?",
    a: "₹800–₹1,200/sqft for budget cabinet makeovers. ₹1,200–₹2,500/sqft for mid-range partial renovation. ₹2,500–₹5,000+/sqft for full premium remodels.",
  },
  {
    q: "Is kitchen renovation cheaper than buying a new kitchen?",
    a: "Yes, by 40–60% if the existing carcass structure is sound. Renovation replaces visible surfaces (shutters, countertop, hardware) while retaining the frame.",
  },
  {
    q: "How do I get an accurate kitchen renovation quote in Delhi?",
    a: "Contact FurniRevive for a free home visit. Our team inspects your current kitchen, discusses your requirements and provides a detailed scope-wise quotation within 24 hours.",
  },
  {
    q: "Does kitchen renovation require building permission in Delhi?",
    a: "Cosmetic renovation (cabinets, countertop, tiles) requires no permission. Structural changes (removing walls, relocating gas lines) may require society/builder NOC. We advise on this during the site visit.",
  },
  {
    q: "Which areas of Delhi do you serve for kitchen renovation?",
    a: "South Delhi (GK, Vasant Kunj, Hauz Khas, Defence Colony), West Delhi (Dwarka, Janakpuri, Rohini, Pitampura), and all major Delhi NCR localities.",
  },
];

const RELATED_PAGES = [
  { label: "Renovation Delhi", href: "/modular-kitchen-renovation-delhi" },
  { label: "Renovation Gurgaon", href: "/modular-kitchen-renovation-gurgaon" },
  { label: "Renovation Noida", href: "/modular-kitchen-renovation-noida" },
  { label: "Modular Kitchen Price", href: "/modular-kitchen-price" },
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function KitchenRenovationCostDelhiPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", META_DESCRIPTION);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = META_DESCRIPTION;
      document.head.appendChild(m);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = CANONICAL;
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Kitchen renovation cost in Delhi — complete price guide"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/modular-kitchen" className="hover:text-white cursor-pointer">Modular Kitchen</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80 font-medium">Kitchen Renovation Cost Delhi</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Kitchen Renovation Cost in Delhi 2025 — Complete Price Guide
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Transparent pricing for every scope of kitchen renovation in Delhi — from cabinet-only makeovers to complete remodels. No hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Quote
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20kitchen%20renovation%20cost%20estimate%20in%20Delhi`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <KitchenTrustStrip />

      {/* Gallery */}
      {ROOT_GALLERY.length > 0 && (
        <div id="gallery">
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Kitchen Renovation Delhi — Project Gallery" />
        </div>
      )}

      {/* Cost by Renovation Scope */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cost by Renovation Scope</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {RENOVATION_SCOPES.map((scope) => (
              <div key={scope.title} className="bg-card rounded-xl border border-border p-5 flex flex-col">
                <h3 className="text-lg font-bold mb-2">{scope.title}</h3>
                <p className="text-primary font-bold text-xl mb-4 flex items-center gap-1">
                  <IndianRupee className="w-4 h-4" />
                  {scope.priceRange}
                </p>
                <ul className="space-y-2 flex-1">
                  {scope.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer text-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown by Material */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cost Breakdown by Material</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Component</th>
                  <th className="text-left p-3 font-semibold">Budget Option</th>
                  <th className="text-left p-3 font-semibold">Mid-Range</th>
                  <th className="text-left p-3 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {MATERIAL_TABLE.map((row) => (
                  <tr key={row.component} className="border-t border-border">
                    <td className="p-3 font-medium">{row.component}</td>
                    <td className="p-3 text-muted-foreground">{row.budget}</td>
                    <td className="p-3 text-muted-foreground">{row.midRange}</td>
                    <td className="p-3 text-muted-foreground">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Affects Your Renovation Cost? */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Affects Your Renovation Cost?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {COST_FACTORS.map((factor) => (
              <div key={factor} className="bg-card rounded-xl border border-border p-5 flex items-start gap-3">
                <IndianRupee className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Services Section */}
      <HomeServicesSection service="modular-kitchen" pageType="hub" />

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg leading-none text-amber-400">&#9733;</span>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{`"${t.text}"`}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {RELATED_PAGES.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {page.label}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <KitchenRelatedBlogs slug="kitchen-renovation-cost-delhi" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
