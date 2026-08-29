/**
 * /modular-kitchen-budget
 * Sub-directory hub: budget tier groups → locality pages.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, IndianRupee } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { KITCHEN_BUDGET_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-budget-locality-registry.ts";
import { KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-price-range-locality-registry.ts";

const BUDGET_META = [
  {
    key: "low-cost" as const,
    label: "Low Cost",
    subtitle: "₹65K – ₹1.3L",
    description: "Basic laminate shutters, standard carcasses, economy hardware. Ideal for rental homes, budget upgrades, or small kitchens.",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-800",
    accent: "text-green-700",
  },
  {
    key: "affordable" as const,
    label: "Affordable",
    subtitle: "₹1L – ₹2.5L",
    description: "Mid-grade laminate or acrylic shutters, BWR plywood carcasses, branded soft-close hardware. Popular for 2BHK apartments.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
    accent: "text-blue-700",
  },
];

const PRICE_CAP_META = [
  { key: "1-lakh" as const, label: "Under ₹1 Lakh", description: "Studio / single-wall / tiny kitchens" },
  { key: "1-5-lakh" as const, label: "Under ₹1.5 Lakh", description: "Small 1BHK kitchens" },
  { key: "2-lakh" as const, label: "Under ₹2 Lakh", description: "Mid-size 2BHK kitchens" },
  { key: "3-lakh" as const, label: "Under ₹3 Lakh", description: "Large 2/3BHK kitchens" },
];

export default function BudgetDirectoryPage() {
  const [openTier, setOpenTier] = useState<string | null>("affordable");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/modular-kitchen" className="hover:text-foreground transition-colors">Modular Kitchen</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Browse by Budget</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <IndianRupee className="h-4 w-4" />
            Budget-First Kitchen Planning
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen by Budget
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Find modular kitchen options that fit your budget. From ₹65K entry-level to ₹3L full renovations — locality-specific pricing, no surprises.
          </p>
        </div>
      </section>

      {/* Budget tier sections */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">By Budget Tier</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BUDGET_META.map((tier) => {
            const entries = KITCHEN_BUDGET_LOCALITY_REGISTRY.filter((e) => e.budgetTier === tier.key);
            const isOpen = openTier === tier.key;
            return (
              <div key={tier.key} className={`rounded-2xl border p-6 ${tier.color}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tier.badge} mb-2 inline-block`}>
                      {tier.label}
                    </span>
                    <h3 className="text-xl font-bold">{tier.subtitle} Modular Kitchen</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{entries.length} localities</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <button
                  onClick={() => setOpenTier(isOpen ? null : tier.key)}
                  className={`text-sm font-medium cursor-pointer ${tier.accent}`}
                >
                  {isOpen ? "Hide localities ▲" : "View all localities ▼"}
                </button>
                {isOpen && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entries.map((e) => (
                      <Link
                        key={e.urlSlug}
                        to={`/${e.urlSlug}`}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border hover:border-amber-400 transition-colors cursor-pointer"
                      >
                        {e.localityName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Price cap sections */}
        <h2 className="text-2xl font-bold mb-6">By Price Cap</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICE_CAP_META.map((cap) => {
            const entries = KITCHEN_PRICE_RANGE_LOCALITY_REGISTRY.filter((e) => e.priceCap === cap.key);
            // unique localities
            const uniqueLocalities = [...new Map(entries.map((e) => [e.localitySlug, e])).values()];
            return (
              <div key={cap.key} className="border rounded-xl p-5 bg-card hover:shadow-md transition-all">
                <h3 className="text-lg font-bold mb-1">{cap.label}</h3>
                <p className="text-xs text-muted-foreground mb-4">{cap.description}</p>
                <p className="text-sm font-medium text-amber-700 mb-3">{entries.length} pages across {uniqueLocalities.length} localities</p>
                <div className="flex flex-wrap gap-1.5">
                  {uniqueLocalities.slice(0, 6).map((e) => (
                    <Link
                      key={e.localitySlug}
                      to={`/modular-kitchen-under-${cap.key}-${e.localitySlug}`}
                      className="text-xs px-2 py-1 rounded-full bg-muted hover:bg-amber-100 hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      {e.localityName}
                    </Link>
                  ))}
                  {uniqueLocalities.length > 6 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">+{uniqueLocalities.length - 6} more</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cost guides CTA */}
      <section className="bg-muted/40 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Need a precise estimate?</h2>
          <p className="text-muted-foreground mb-6 text-sm">Check our city-specific cost breakdown pages for detailed pricing by material, size, and hardware brand.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/modular-kitchen-cost-delhi", label: "Delhi Cost Guide" },
              { href: "/modular-kitchen-cost-gurgaon", label: "Gurgaon Cost Guide" },
              { href: "/modular-kitchen-cost-noida", label: "Noida Cost Guide" },
              { href: "/modular-kitchen-cost-faridabad", label: "Faridabad Cost Guide" },
              { href: "/modular-kitchen-cost-ghaziabad", label: "Ghaziabad Cost Guide" },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm px-4 py-2 rounded-full border bg-background hover:bg-amber-50 hover:border-amber-400 transition-colors cursor-pointer"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-budget" />
      <Footer />
    </div>
  );
}
