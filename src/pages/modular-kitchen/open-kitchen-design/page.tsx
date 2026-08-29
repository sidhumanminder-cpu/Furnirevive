import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "Open Kitchen Design Ideas 2025 — Modern Open Plan Kitchens | FurniRevive";
const META_DESCRIPTION =
  "Open kitchen design ideas for Indian homes: open-plan layouts, studio kitchens, combined living-kitchen concepts. Designs from ₹1.2L. Free consultation across Delhi NCR.";
const CANONICAL = "https://furnirevive.com/open-kitchen-design";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

const OPEN_KITCHEN_BENEFITS = [
  "Makes small apartments feel spacious and airy",
  "Encourages social interaction while cooking",
  "Better natural light flow across living areas",
  "Increases property value in modern apartments",
  "Ideal for entertaining guests",
];

type DesignStyle = {
  name: string;
  description: string;
  priceRange: string;
};

const DESIGN_STYLES: DesignStyle[] = [
  {
    name: "Island Open Kitchen",
    description:
      "A freestanding island separates cooking and living zones while providing extra counter space, storage, and a casual dining spot.",
    priceRange: "₹3L–₹10L",
  },
  {
    name: "Studio/Galley Open Kitchen",
    description:
      "Parallel counters open directly into the living room — perfect for studio apartments where every square foot counts.",
    priceRange: "₹1.2L–₹3L",
  },
  {
    name: "L-Shape Open Plan",
    description:
      "The L-Shape hugs two walls, leaving the third side completely open to the dining or living area for seamless flow.",
    priceRange: "₹1.5L–₹5L",
  },
  {
    name: "Peninsular Semi-Open",
    description:
      "A half-wall or breakfast counter partially separates the kitchen from the living space — balances openness with odour control.",
    priceRange: "₹2L–₹6L",
  },
];

type ComparisonRow = {
  factor: string;
  open: string;
  closed: string;
};

const COMPARISON_TABLE: ComparisonRow[] = [
  { factor: "Ventilation", open: "Natural cross-ventilation, needs strong chimney", closed: "Contained — less chimney dependency" },
  { factor: "Space Feel", open: "Visually larger, merges with living area", closed: "Separate enclosed room" },
  { factor: "Noise & Odour", open: "Travels into living zone without barriers", closed: "Contained within kitchen walls" },
  { factor: "Cost", open: "₹1.2L–₹10L depending on layout", closed: "₹80K–₹5L for equivalent size" },
];

type PricingRow = { scope: string; range: string; includes: string };
const PRICING_TABLE: PricingRow[] = [
  { scope: "Basic Open Kitchen (Galley/Studio)", range: "₹1.2L–₹2.5L", includes: "Cabinets, countertop, open shelving" },
  { scope: "Mid-Range (L-Shape/Peninsular)", range: "₹2.5L–₹5L", includes: "Soft-close hardware, chimney, tile backsplash" },
  { scope: "Premium (Island/Full Open Plan)", range: "₹5L–₹10L", includes: "Island unit, premium finishes, integrated appliances" },
];

const CITY_LINKS = [
  { city: "Delhi", href: "/modular-kitchen-delhi" },
  { city: "Gurgaon", href: "/modular-kitchen-gurgaon" },
  { city: "Noida", href: "/modular-kitchen-noida" },
  { city: "Faridabad", href: "/modular-kitchen-faridabad" },
  { city: "Ghaziabad", href: "/modular-kitchen-ghaziabad" },
];

type Testimonial = { name: string; location: string; text: string; rating: number };
const TESTIMONIALS: Testimonial[] = [
  { name: "Priya Mehta", location: "Dwarka, Delhi", text: "FurniRevive transformed our cramped kitchen into a stunning open-plan space. The island design is a showstopper. Guests always comment on it.", rating: 5 },
  { name: "Sameer Khanna", location: "Sector 56, Gurgaon", text: "We had a wall removed and a new open kitchen fitted in under 3 weeks. Professional team, clean work and exactly what we envisioned.", rating: 5 },
  { name: "Nandita Roy", location: "Sector 62, Noida", text: "The peninsular design was perfect for our 2BHK — keeps cooking smells contained but still feels open. Very happy with the result.", rating: 5 },
];

const FAQS = [
  {
    q: "What is an open kitchen design?",
    a: "An open kitchen design removes the wall between the kitchen and living/dining area, creating a single connected space. It's popular in modern Indian apartments for making homes feel larger and more social.",
  },
  {
    q: "How much does an open kitchen cost in India?",
    a: "Open kitchen designs start at ₹1.2 lakh for a basic galley-style open layout and can go up to ₹10 lakh for premium island kitchens with integrated appliances and high-end finishes.",
  },
  {
    q: "Which open kitchen layout is best for a small flat?",
    a: "A studio/galley open kitchen or L-Shape open plan works best for small flats (1BHK/2BHK). They maximise counter space while keeping the living area visually connected.",
  },
  {
    q: "Is an open kitchen better than a closed kitchen?",
    a: "It depends on your lifestyle. Open kitchens are great for socialising and making spaces feel larger, but closed kitchens contain cooking odours and noise better. A peninsular semi-open design offers a middle ground.",
  },
  {
    q: "Which cities does FurniRevive serve for open kitchen installation?",
    a: "FurniRevive serves Delhi, Gurgaon, Noida, Faridabad, Ghaziabad, and the broader Delhi NCR region. We offer free design consultation and on-site measurement across all locations.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function OpenKitchenDesignPage() {
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
          alt="Modern open kitchen design for Indian homes"
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
              <span className="text-white/80 font-medium">Open Kitchen Design</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              Open Kitchen Design Ideas for Indian Homes
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              Transform your home with an open-plan kitchen that blends cooking, dining, and living into one beautiful space. Designs from ₹1.2 lakh with free consultation across Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20an%20open%20kitchen%20design%20consultation`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="Open Kitchen Design Gallery" />
        </div>
      )}

      {/* What Is an Open Kitchen? */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Is an Open Kitchen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                An open kitchen removes the traditional wall between the cooking area and the living or dining room, creating a single flowing space. Popular in modern Indian apartments, this layout makes homes feel significantly larger and more connected.
              </p>
              <p>
                Whether you're in a compact 2BHK or a spacious villa, an open kitchen design encourages interaction, improves natural light distribution, and creates a contemporary living experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2.5">
                {OPEN_KITCHEN_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Grid */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Open Kitchen Design Styles</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {DESIGN_STYLES.map((style) => (
              <div key={style.name} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-2">{style.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{style.description}</p>
                <span className="inline-block bg-muted/60 rounded px-2.5 py-1 text-xs font-medium text-primary">
                  {style.priceRange}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open vs Closed Kitchen Comparison */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Open Kitchen vs Closed Kitchen</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">Open Kitchen</th>
                  <th className="text-left p-3 font-semibold">Closed Kitchen</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <td className="p-3 font-medium">{row.factor}</td>
                    <td className="p-3 text-muted-foreground">{row.open}</td>
                    <td className="p-3 text-muted-foreground">{row.closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Open Kitchen Pricing: ₹1.2L–₹10L</h2>
          <p className="text-muted-foreground mb-6">Cost breakdown by scope and complexity.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Scope</th>
                  <th className="text-left p-3 font-semibold">Price Range</th>
                  <th className="text-left p-3 font-semibold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row) => (
                  <tr key={row.scope} className="border-t border-border">
                    <td className="p-3 font-medium">{row.scope}</td>
                    <td className="p-3 font-semibold text-primary">{row.range}</td>
                    <td className="p-3 text-muted-foreground">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Prices include cabinets, countertop, hardware and installation. Appliances, chimney, and plumbing changes extra.
          </p>
        </div>
      </section>

      {/* City Links */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Modular Kitchen Services by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CITY_LINKS.map((item) => (
              <Link
                key={item.city}
                to={item.href}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {item.city}
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
      <section className="py-12 md:py-16 px-4">
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

      {/* Related Blogs */}
      <KitchenRelatedBlogs slug="open-kitchen-design" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
