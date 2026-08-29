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

const PAGE_TITLE =
  "Modular Kitchen Renovation Delhi 2025 — Old Kitchen Makeover Cost & Service | FurniRevive";
const META_DESCRIPTION =
  "Modular kitchen renovation in Delhi: replace old kitchen, new cabinets, countertop upgrade, full remodel from ₹50,000. Expert service across South Delhi, Dwarka, Rohini, Vasant Kunj. Free consultation.";
const CANONICAL = "https://furnirevive.com/modular-kitchen-renovation-delhi";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

type CoverCard = { title: string; description: string };
const DELHI_INSIGHTS: CoverCard[] = [
  {
    title: "DDA & MCD flat kitchens",
    description: "Most DDA and MCD housing kitchens are 6×8 ft or smaller with non-standard plumbing layouts. We specialise in maximising storage within these compact, fixed dimensions.",
  },
  {
    title: "Old LPG & pipeline compliance",
    description: "Pre-2000 Delhi homes often have exposed LPG piping that needs rerouting before renovation. We coordinate with certified gas agencies to ensure full compliance.",
  },
  {
    title: "Asbestos & old POP ceilings",
    description: "Older South and West Delhi kitchens may have asbestos or POP false ceilings. We assess and advise on safe removal and replacement before starting cabinet work.",
  },
  {
    title: "Hard water & staining",
    description: "Delhi groundwater is highly alkaline. We recommend quartz countertops and acrylic finishes over marble or natural stone for better stain and scale resistance.",
  },
  {
    title: "Narrow lane access",
    description: "Many South and East Delhi localities have narrow access lanes. We plan material delivery logistics in advance to avoid delays on installation day.",
  },
  {
    title: "RWA & society permissions",
    description: "Most Delhi RWAs require a NOC or prior intimation for renovation work. We provide all required documentation and coordinate with your society on your behalf.",
  },
];

type AreaLink = { name: string; href: string };
const DELHI_AREAS: AreaLink[] = [
  { name: "Greater Kailash", href: "/kitchen-renovation-greater-kailash" },
  { name: "Vasant Kunj", href: "/kitchen-renovation-vasant-kunj" },
  { name: "Hauz Khas", href: "/kitchen-renovation-hauz-khas" },
  { name: "Defence Colony", href: "/kitchen-renovation-defence-colony" },
  { name: "South Extension", href: "/kitchen-renovation-south-extension" },
  { name: "Dwarka", href: "/kitchen-renovation-dwarka-delhi" },
  { name: "Rohini", href: "/kitchen-renovation-rohini" },
  { name: "Janakpuri", href: "/kitchen-renovation-janakpuri" },
  { name: "Lajpat Nagar", href: "/kitchen-renovation-lajpat-nagar" },
  { name: "Pitampura", href: "/kitchen-renovation-pitampura" },
];

type Testimonial = { name: string; location: string; text: string };
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rakesh Gupta",
    location: "South Extension, Delhi",
    text: "FurniRevive replaced our 12-year-old kitchen in 8 days. New acrylic cabinets, quartz countertop, the whole transformation was incredible.",
  },
  {
    name: "Meena Kapoor",
    location: "Vasant Kunj, Delhi",
    text: "We only wanted a countertop upgrade but the team advised a full cabinet reskin which was worth every rupee. Professional and on-time.",
  },
  {
    name: "Arjun Nair",
    location: "Dwarka, Delhi",
    text: "Full kitchen remodel — new layout, new cabinets, new plumbing. FurniRevive managed everything. Transparent pricing, no surprises.",
  },
];

const FAQS = [
  {
    q: "How much does a kitchen renovation cost in Delhi?",
    a: "Cabinet-only makeovers start at ₹50,000. A partial renovation (cabinets + countertop) costs ₹1.5L–₹3L. Full kitchen remodels with new layout and plumbing range from ₹3L to ₹8L+ depending on size and finish.",
  },
  {
    q: "How long does kitchen renovation take in Delhi?",
    a: "Cabinet replacement takes 3–5 days. Partial renovations take 7–10 days. Full remodels with plumbing changes take 15–25 days. We provide a fixed timeline before starting.",
  },
  {
    q: "Can you renovate my old kitchen without full demolition?",
    a: "Yes. We offer overlay/reskin options where new cabinet doors and countertops are fitted over the existing structure, saving cost and reducing mess.",
  },
  {
    q: "Which areas in Delhi do you serve for kitchen renovation?",
    a: "We serve all Delhi areas including South Delhi (GK, Vasant Kunj, Hauz Khas), West Delhi (Dwarka, Janakpuri, Rohini, Pitampura), and East/Central Delhi localities.",
  },
  {
    q: "Do you offer a warranty on kitchen renovation work?",
    a: "Yes — 10-year warranty on carcass, 5 years on hardware, 1–3 years on finish surface depending on material chosen.",
  },
];

type RelatedLink = { label: string; href: string };
const RELATED_LINKS: RelatedLink[] = [
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
  { label: "Kitchen Renovation Cost", href: "/kitchen-renovation-cost-delhi" },
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Renovation Gurgaon", href: "/modular-kitchen-renovation-gurgaon" },
  { label: "Renovation Noida", href: "/modular-kitchen-renovation-noida" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ModularKitchenRenovationDelhiPage() {
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
          alt="Modular kitchen renovation in Delhi"
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
              <span className="text-white/80 font-medium">Renovation Delhi</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Modular Kitchen Renovation in Delhi — Full Remodel &amp; Cabinet Makeover
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Complete kitchen renovation service in Delhi — from cabinet replacement to full remodel. Prices from ₹50,000. Free home consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20kitchen%20renovation%20in%20Delhi`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Kitchen Renovation Delhi — Before & After Gallery" />
        </div>
      )}

      {/* Renovating Kitchens in Delhi — What to Expect */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Renovating Kitchens in Delhi — What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELHI_INSIGHTS.map((card) => (
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

      {/* Cost Summary */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Kitchen Renovation Cost in Delhi</h2>
          <div className="bg-card rounded-xl border border-border p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cabinet-only makeovers start at <span className="font-semibold text-foreground">₹50,000</span>. Partial renovations (cabinets + countertop) cost <span className="font-semibold text-foreground">₹1.5L–₹3L</span>. Full kitchen remodels range from <span className="font-semibold text-foreground">₹3L to ₹8L+</span>. Cost depends on kitchen size, materials, and scope of structural changes.
            </p>
            <Link
              to="/kitchen-renovation-cost-delhi"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:underline cursor-pointer"
            >
              View full cost breakdown by material and scope <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Delhi Areas Served */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Kitchen Renovation — Areas We Serve in Delhi</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {DELHI_AREAS.map((area) => (
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
      <KitchenRelatedBlogs slug="modular-kitchen-renovation-delhi" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
