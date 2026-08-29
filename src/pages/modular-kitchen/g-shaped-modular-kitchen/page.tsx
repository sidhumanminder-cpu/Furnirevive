import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, MessageCircle, CheckCircle2, ChevronRight, LayoutPanelLeft } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenTrustStrip from "@/components/kitchen-trust-strip.tsx";
import HomeServicesSection from "@/components/HomeServicesSection.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import PremiumKitchenGallery from "@/pages/modular-kitchen/_components/PremiumKitchenGallery.tsx";
import { ROOT_GALLERY } from "@/pages/modular-kitchen/_components/kitchen-gallery-images.ts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAGE_TITLE = "G-Shaped Modular Kitchen Design 2025 — Cost, Layouts & Ideas | FurniRevive";
const META_DESCRIPTION =
  "G-shaped modular kitchen designs for Indian homes: maximum storage, 4 work zones, ideal for large kitchens. Designs from ₹2.5L across Delhi NCR. Free 3D design consultation.";
const CANONICAL = "https://furnirevive.com/g-shaped-modular-kitchen";
const HERO_IMAGE = "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT";

const G_SHAPE_ADVANTAGES = [
  "Maximum counter space of all layouts",
  "4 connected work zones",
  "Built-in peninsula for casual dining",
  "Ideal for open-plan large kitchens",
  "Excellent for 2 cooks simultaneously",
  "Premium feel and look",
];

type ComparisonRow = {
  factor: string;
  gShape: string;
  uShape: string;
  lShape: string;
};

const COMPARISON_TABLE: ComparisonRow[] = [
  { factor: "Min kitchen size", gShape: "120 sq ft", uShape: "100 sq ft", lShape: "80 sq ft" },
  { factor: "Work zones", gShape: "4", uShape: "3", lShape: "2" },
  { factor: "Storage", gShape: "Highest", uShape: "High", lShape: "Medium" },
  { factor: "Cost", gShape: "₹2.5L–₹10L+", uShape: "₹2L–₹8L", lShape: "₹1.5L–₹5L" },
  { factor: "Best for", gShape: "Large luxury kitchens", uShape: "Mid-large kitchens", lShape: "Mid-size kitchens" },
];

type PricingCard = {
  tier: string;
  range: string;
  features: string[];
};

const PRICING_CARDS: PricingCard[] = [
  {
    tier: "Budget G-Shape",
    range: "₹2.5L–₹4L",
    features: ["Laminate finish", "Local hardware", "Granite countertop", "Standard carcass"],
  },
  {
    tier: "Mid-Range",
    range: "₹4L–₹7L",
    features: ["Acrylic/membrane finish", "Hettich soft-close", "Quartz countertop"],
  },
  {
    tier: "Premium",
    range: "₹7L–₹12L+",
    features: ["PU/glass finish", "Blum hardware", "Premium quartz/marble", "Integrated appliances + peninsula island"],
  },
];

const CITY_LINKS = [
  { label: "L-Shape Delhi", href: "/l-shape-modular-kitchen-delhi" },
  { label: "U-Shape Delhi", href: "/u-shape-modular-kitchen-delhi" },
  { label: "Parallel Kitchen Delhi", href: "/parallel-modular-kitchen-delhi" },
  { label: "Island Kitchen Delhi", href: "/island-modular-kitchen-delhi" },
  { label: "Modular Kitchen Delhi", href: "/modular-kitchen-delhi" },
  { label: "Modular Kitchen Gurgaon", href: "/modular-kitchen-gurgaon" },
];

type Testimonial = { name: string; location: string; text: string; rating: number };
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aditya Bansal",
    location: "Greater Kailash, Delhi",
    text: "We have a large kitchen in our villa and the G-shape layout from FurniRevive is absolutely stunning. Four work zones, a breakfast bar and storage everywhere.",
    rating: 5,
  },
  {
    name: "Ritu Nanda",
    location: "DLF Phase 5, Gurgaon",
    text: "FurniRevive designed a G-shape kitchen with a peninsula that doubles as a dining counter. Premium acrylic finish. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Sumit Khanna",
    location: "Sector 150, Noida",
    text: "Large 2BHK kitchen remodelled into a G-shape. The FurniRevive team managed the layout design and installation from start to finish. Excellent result.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What is a G-shaped modular kitchen?",
    a: "A G-shaped kitchen has countertops along three walls plus a partial fourth wall (peninsula), creating four connected work zones. It's the layout with the most counter space and storage — ideal for large kitchens above 120 sq ft.",
  },
  {
    q: "How much does a G-shaped modular kitchen cost in India?",
    a: "G-shaped kitchens start at ₹2.5 lakh for budget laminate finishes in a standard size. Mid-range acrylic or membrane finish kitchens cost ₹4L–₹7L. Premium PU or glass finishes with imported hardware and an integrated peninsula cost ₹7L–₹12L+.",
  },
  {
    q: "What is the minimum kitchen size for a G-shape layout?",
    a: "A G-shaped kitchen needs at least 120 sq ft (around 12×10 ft) to work comfortably. The peninsula extension requires enough clearance (minimum 4 ft) on the open side for movement.",
  },
  {
    q: "How is a G-shape different from a U-shape kitchen?",
    a: "A U-shape has three walls of countertops with an open entrance. A G-shape adds a partial fourth wall (peninsula), which creates extra counter space, a breakfast bar option, and a subtle zone separation between cooking and dining areas.",
  },
  {
    q: "How long does it take to install a G-shaped modular kitchen?",
    a: "20–30 days: design finalization (3–5 days), manufacturing (12–15 days), delivery and on-site installation (5–7 days), and finishing touches (2–3 days). We provide a fixed timeline before starting.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GShapedModularKitchenPage() {
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
          alt="G-shaped modular kitchen design for Indian homes"
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
              <span className="text-white/80 font-medium">G-Shaped Kitchen</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance text-white">
              G-Shaped Modular Kitchen — Maximum Storage &amp; Workspace
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              G-shaped kitchens offer the largest working area of all layouts — 4 connected countertops, a peninsula and maximum storage. Ideal for large kitchens above 120 sq ft. Starting ₹2.5 lakh.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Call for Free Consultation
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20G-shaped%20modular%20kitchen%20design%20consultation`}
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
          <PremiumKitchenGallery images={ROOT_GALLERY} title="G-Shaped Modular Kitchen Gallery" />
        </div>
      )}

      {/* What is a G-Shaped Kitchen? */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What is a G-Shaped Kitchen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A G-shaped kitchen features countertops along three walls plus a partial fourth wall — the peninsula extension. This creates four connected work zones and offers the maximum counter space and storage of any kitchen layout.
              </p>
              <p>
                Ideal for large Indian homes with kitchens above 120 sq ft, the G-shape provides spacious layouts where two people can cook simultaneously without interrupting each other. The peninsula doubles as a casual breakfast bar or serving counter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <LayoutPanelLeft className="h-4 w-4 text-amber-700" />
                Key Advantages
              </h3>
              <ul className="space-y-2.5">
                {G_SHAPE_ADVANTAGES.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* G-Shape vs Other Layouts */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">G-Shape vs Other Layouts</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="text-left p-3 font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">G-Shape</th>
                  <th className="text-left p-3 font-semibold">U-Shape</th>
                  <th className="text-left p-3 font-semibold">L-Shape</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <td className="p-3 font-medium">{row.factor}</td>
                    <td className="p-3 text-muted-foreground">{row.gShape}</td>
                    <td className="p-3 text-muted-foreground">{row.uShape}</td>
                    <td className="p-3 text-muted-foreground">{row.lShape}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">G-Shaped Kitchen Pricing: ₹2.5L–₹12L+</h2>
          <p className="text-muted-foreground mb-6">Cost breakdown by tier and finish quality.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICING_CARDS.map((card) => (
              <div key={card.tier} className="bg-card rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{card.tier}</h3>
                <span className="inline-block bg-muted/60 rounded px-2.5 py-1 text-xs font-medium text-primary mb-3">
                  {card.range}
                </span>
                <ul className="space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Prices include cabinets, countertop, hardware and installation. Appliances, chimney, and plumbing changes extra.
          </p>
        </div>
      </section>

      {/* City Links */}
      <section className="py-12 md:py-16 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Explore Kitchen Layouts by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CITY_LINKS.map((item) => (
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

      {/* Related Blogs */}
      <KitchenRelatedBlogs slug="g-shaped-modular-kitchen" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
