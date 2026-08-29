import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Wrench } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import { setPageMetadata } from "@/lib/metadata.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modular Kitchen Renovation Noida 2025 — Kitchen Remodel & Makeover Cost | FurniRevive";
const META_DESCRIPTION =
  "Modular kitchen renovation in Noida: full remodel, cabinet replacement, countertop upgrade from ₹48,000. Expert service across Sector 150, Sector 137, Sector 62, Indirapuram. Free consultation.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-renovation-noida";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

type ServiceCard = {
  title: string;
  description: string;
};

const NOIDA_INSIGHTS: ServiceCard[] = [
  {
    title: "Sector housing layouts",
    description: "Noida sector apartments (50–150) typically have 8×10 to 10×12 ft kitchens with more standardised plumbing layouts, making renovation faster and more predictable than older Delhi stock.",
  },
  {
    title: "Builder floor considerations",
    description: "Builder floors in Noida often have independent meter connections and no society restrictions — renovation can proceed with fewer approvals and more flexible work hours.",
  },
  {
    title: "Post-2000 plumbing standards",
    description: "Most Noida housing was constructed post-2000 with CPVC or UPVC plumbing. This makes pipe rerouting cleaner and less disruptive compared to older Delhi properties.",
  },
  {
    title: "Indirapuram & Raj Nagar",
    description: "High-density areas like Indirapuram and Raj Nagar Extension have mature housing stock with kitchens ripe for upgrade. We have multiple completed projects in these localities.",
  },
  {
    title: "Society maintenance teams",
    description: "Many Noida high-rise societies have in-house maintenance teams. We coordinate directly with them for material access, waste disposal, and lift scheduling.",
  },
  {
    title: "3–5% lower cost vs Delhi",
    description: "Noida renovation costs are 3–5% lower than equivalent Delhi projects due to lower skilled labour rates and easier site access in most sector locations.",
  },
];

type AreaLink = { name: string; href: string };
const NOIDA_AREAS: AreaLink[] = [
  { name: "Sector 150", href: "/kitchen-renovation-sector-150-noida" },
  { name: "Sector 137", href: "/kitchen-renovation-sector-137-noida" },
  { name: "Sector 62", href: "/kitchen-renovation-sector-62-noida" },
  { name: "Sector 100", href: "/kitchen-renovation-sector-100-noida" },
  { name: "Sector 78", href: "/kitchen-renovation-sector-78-noida" },
  { name: "Indirapuram", href: "/kitchen-renovation-indirapuram" },
];

type Testimonial = { name: string; location: string; text: string };
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Deepak Tyagi",
    location: "Sector 137, Noida",
    text: "Our 8-year-old kitchen looked brand new after FurniRevive's renovation. New membrane shutters, quartz countertop, LED lighting. Done in 10 days flat.",
  },
  {
    name: "Kavita Agarwal",
    location: "Sector 150, Noida",
    text: "Just replaced the cabinet doors and handles — completely changed the look for under ₹80,000. Quick, clean and professional.",
  },
  {
    name: "Rohit Mishra",
    location: "Indirapuram, Noida",
    text: "Full remodel in a 3BHK apartment. FurniRevive coordinated everything with our builder. The new L-shape layout is perfect. Very happy.",
  },
];

const FAQS = [
  {
    q: "How much does kitchen renovation cost in Noida?",
    a: "Cabinet-only makeovers start at ₹48,000. Partial renovations cost ₹1.4L–₹2.8L. Full kitchen remodels range from ₹2.8L to ₹7L+. Noida rates are typically 3–5% lower than Delhi.",
  },
  {
    q: "How long does kitchen renovation take in Noida?",
    a: "Cabinet replacement: 3–5 days. Partial renovation: 7–10 days. Full remodel: 15–20 days. We provide daily updates and a fixed completion date.",
  },
  {
    q: "Can you renovate a kitchen in a builder-floor apartment in Noida?",
    a: "Yes. We work extensively in builder-floor and high-rise apartments across Noida sectors. We handle all NOC and material movement coordination with your building management.",
  },
  {
    q: "Is it better to renovate or replace a kitchen entirely?",
    a: "Depends on the structure. If the carcass (frame) is intact and damage-free, renovation is 40–60% cheaper than full replacement. We do a free on-site inspection to advise the best option.",
  },
  {
    q: "What warranty do you provide on Noida kitchen renovations?",
    a: "10-year carcass warranty, 5-year hardware warranty, 1–3 year finish warranty. Warranty cards are provided at project handover.",
  },
];

type RelatedLink = { label: string; href: string };
const RELATED_LINKS: RelatedLink[] = [
  { label: "Modular Kitchen Noida", href: "/modular-kitchen-noida" },
  { label: "Kitchen Renovation Cost", href: "/kitchen-renovation-cost-delhi" },
  { label: "Renovation Delhi", href: "/modular-kitchen-renovation-delhi" },
  { label: "Renovation Gurgaon", href: "/modular-kitchen-renovation-gurgaon" },
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ModularKitchenRenovationNoidaPage() {
  useEffect(() => {
    const cleanupMeta = setPageMetadata({
      title: PAGE_TITLE,
      description: META_DESCRIPTION,
      canonical: CANONICAL,
    });
    return cleanupMeta;
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Modular kitchen renovation in Noida"
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
              <span className="text-white/80 font-medium">Renovation Noida</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Modular Kitchen Renovation in Noida — Full Remodel & Cabinet Makeover
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Complete kitchen renovation service in Noida — from cabinet replacement to full remodel. Prices from ₹48,000. Free home consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20kitchen%20renovation%20in%20Noida`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Kitchen Renovation Noida — Before & After Gallery" />
        </div>
      )}

      {/* What We Cover */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Renovating in Noida — What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NOIDA_INSIGHTS.map((s) => (
              <div key={s.title} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-amber-700 flex-shrink-0" />
                  <h3 className="text-lg font-bold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Cost Table */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Kitchen Renovation Cost in Noida</h2>
          <p className="text-muted-foreground mb-6">Noida costs are approximately 3–5% lower than Delhi.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Scope</th>
                  <th className="text-left p-3 font-semibold">Price Range</th>
                  <th className="text-left p-3 font-semibold">Typical Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Cabinet-only makeover</td>
                  <td className="p-3 font-semibold text-primary">₹48,000–₹1.4L</td>
                  <td className="p-3 text-muted-foreground">3–5 days</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Partial renovation (countertop + cabinets)</td>
                  <td className="p-3 font-semibold text-primary">₹1.4L–₹2.8L</td>
                  <td className="p-3 text-muted-foreground">7–10 days</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Full kitchen remodel</td>
                  <td className="p-3 font-semibold text-primary">₹2.8L–₹7L+</td>
                  <td className="p-3 text-muted-foreground">15–20 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Prices include labour, materials, and installation. Appliances and plumbing relocation charged separately where applicable.
          </p>
        </div>
      </section>

      {/* Noida Areas Served */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Noida Areas We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NOIDA_AREAS.map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {area.name}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
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
                  {Array.from({ length: 5 }).map((_, i) => (
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

      {/* Related Links */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {RELATED_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {item.label}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <KitchenRelatedBlogs slug="modular-kitchen-renovation-noida" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
