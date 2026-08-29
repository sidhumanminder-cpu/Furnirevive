import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, Wrench } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Modular Kitchen Renovation Gurgaon 2025 — Kitchen Remodel & Makeover Cost | FurniRevive";
const META_DESCRIPTION =
  "Modular kitchen renovation in Gurgaon: full remodel, cabinet replacement, countertop upgrade from ₹55,000. Expert service across DLF, Golf Course Road, Sushant Lok, Sohna Road. Free consultation.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-renovation-gurgaon";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

type CoverCard = { title: string; description: string };
const GURGAON_INSIGHTS: CoverCard[] = [
  {
    title: "Builder apartment coordination",
    description: "DLF, Emaar, Sobha, and M3M complexes each have specific rules on work hours, material entry, and waste disposal. We handle all builder coordination on your behalf.",
  },
  {
    title: "Society NOC & intimation",
    description: "Most Gurgaon high-rise societies require a formal NOC or prior intimation before renovation begins. We prepare and submit all required documents for you.",
  },
  {
    title: "Freight elevator booking",
    description: "Material delivery in Gurgaon towers requires advance freight elevator booking. We schedule deliveries to avoid delays and ensure on-time installation.",
  },
  {
    title: "Premium finish demand",
    description: "Gurgaon homeowners predominantly choose acrylic, membrane, or PU finishes. We stock all premium ranges with faster lead times for this market.",
  },
  {
    title: "Higher labour costs",
    description: "Gurgaon renovation costs are 8–12% higher than Delhi due to higher skilled labour rates and stricter apartment complex entry protocols.",
  },
  {
    title: "Hard water protection",
    description: "Gurgaon has very hard water. We apply nano-coating on countertops and recommend acrylic shutters which are more resistant to scale and moisture damage than laminate.",
  },
];

type AreaLink = { name: string; href: string };
const GURGAON_AREAS: AreaLink[] = [
  { name: "DLF Phase 1-5", href: "/kitchen-renovation-dlf-phase-gurgaon" },
  { name: "Golf Course Road", href: "/kitchen-renovation-golf-course-road-gurgaon" },
  { name: "Golf Course Extension", href: "/kitchen-renovation-golf-course-extension-gurgaon" },
  { name: "Sushant Lok", href: "/kitchen-renovation-sushant-lok-gurgaon" },
  { name: "Sohna Road", href: "/kitchen-renovation-sohna-road-gurgaon" },
  { name: "Nirvana Country", href: "/kitchen-renovation-nirvana-country-gurgaon" },
];

type Testimonial = { name: string; location: string; text: string };
const TESTIMONIALS: Testimonial[] = [
  { name: "Sunita Malhotra", location: "DLF Phase 3, Gurgaon", text: "FurniRevive completely transformed our 10-year-old kitchen in DLF Phase 3. New acrylic shutters, Blum hardware, quartz countertop. Looks brand new." },
  { name: "Vivek Sharma", location: "Golf Course Road, Gurgaon", text: "Partial renovation — just replaced cabinets and countertop. Cost was transparent, timeline was 9 days as promised. Very professional team." },
  { name: "Pooja Agarwal", location: "Sushant Lok, Gurgaon", text: "We did a full remodel including a new island. The FurniRevive team handled design, plumbing coordination and installation. Seamless experience." },
];

type FAQ = { q: string; a: string };
const FAQS: FAQ[] = [
  {
    q: "How much does kitchen renovation cost in Gurgaon?",
    a: "Cabinet makeovers start at ₹55,000. Partial renovations cost ₹1.6L–₹3.5L. Full kitchen remodels with new layout range from ₹3.5L to ₹9L+. Gurgaon costs are typically 8–12% higher than Delhi due to higher labour rates.",
  },
  {
    q: "How long does kitchen renovation take in Gurgaon?",
    a: "Cabinet replacement: 3–5 days. Partial renovation: 7–12 days. Full remodel: 15–25 days. We provide a fixed timeline and milestone updates throughout.",
  },
  {
    q: "Can I renovate my kitchen without moving into a hotel?",
    a: "Yes. We schedule work in phases to minimise disruption. Most partial renovations can be done while the home is occupied, with a temporary kitchen setup arranged.",
  },
  {
    q: "Do you handle renovation in high-rise apartments in Gurgaon?",
    a: "Yes, we regularly work in DLF, Emaar, Sobha, and other high-rise complexes across Gurgaon. We coordinate with building management for access and material movement.",
  },
  {
    q: "What warranty do you offer on Gurgaon renovation work?",
    a: "10-year carcass warranty, 5-year hardware warranty, 1–3 year finish warranty. All materials are from verified manufacturers with independent warranty cards.",
  },
];

type RelatedLink = { label: string; href: string };
const RELATED_LINKS: RelatedLink[] = [
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Kitchen Renovation Cost", href: "/kitchen-renovation-cost-delhi" },
  { label: "Renovation Delhi", href: "/modular-kitchen-renovation-delhi" },
  { label: "Renovation Noida", href: "/modular-kitchen-renovation-noida" },
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ModularKitchenRenovationGurgaonPage() {
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
          alt="Modular kitchen renovation in Gurgaon"
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
              <span className="text-white/80 font-medium">Renovation Gurgaon</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Modular Kitchen Renovation in Gurgaon — Full Remodel &amp; Cabinet Makeover
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Complete kitchen renovation service in Gurgaon — from cabinet replacement to full remodel. Prices from ₹55,000. Free home consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20kitchen%20renovation%20consultation%20in%20Gurgaon`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Kitchen Renovation Gurgaon — Before & After Gallery" />
        </div>
      )}

      {/* What We Cover */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Renovating in Gurgaon — What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GURGAON_INSIGHTS.map((card) => (
              <div key={card.title} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-amber-700 flex-shrink-0" />
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Cost Table */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Kitchen Renovation Cost in Gurgaon</h2>
          <p className="text-muted-foreground mb-6">Indicative pricing for different renovation scopes.</p>
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
                  <td className="p-3 font-semibold text-primary">₹55,000–₹1.6L</td>
                  <td className="p-3 text-muted-foreground">3–6 days</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Partial renovation (countertop + cabinets)</td>
                  <td className="p-3 font-semibold text-primary">₹1.6L–₹3.5L</td>
                  <td className="p-3 text-muted-foreground">7–12 days</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Full kitchen remodel</td>
                  <td className="p-3 font-semibold text-primary">₹3.5L–₹9L+</td>
                  <td className="p-3 text-muted-foreground">15–25 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Note: Gurgaon costs are ~8–12% higher than Delhi due to higher labour and logistics costs. Final pricing depends on materials, layout complexity, and apartment access.
          </p>
        </div>
      </section>

      {/* Gurgaon Areas Served */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Areas We Serve in Gurgaon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GURGAON_AREAS.map((area) => (
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
      <KitchenRelatedBlogs slug="modular-kitchen-renovation-gurgaon" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
