/**
 * /modular-kitchen-renovation
 * Sub-directory hub: three renovation type sections with locality grids.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, RefreshCw } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { KITCHEN_RENOVATION_REGISTRY, type RenovationType } from "@/lib/registry/kitchen-renovation-registry.ts";

const TYPE_META: Record<RenovationType, {
  label: string;
  subtitle: string;
  description: string;
  color: string;
  badge: string;
}> = {
  renovation: {
    label: "Full Renovation",
    subtitle: "Complete kitchen rebuild",
    description: "Full demolition and rebuild — new layout, cabinets, countertops, flooring, plumbing, and appliances. Ideal when your kitchen is more than 10 years old or needs structural changes.",
    color: "border-amber-200 bg-amber-50",
    badge: "bg-amber-100 text-amber-800",
  },
  remodeling: {
    label: "Remodeling",
    subtitle: "Structural reconfiguration",
    description: "Change the kitchen layout, move walls or plumbing, upgrade cabinets and countertops while keeping some existing infrastructure. Mid-scope renovation.",
    color: "border-orange-200 bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
  },
  makeover: {
    label: "Makeover",
    subtitle: "Surface refresh only",
    description: "Replace shutters, handles, countertop skin, and hardware without touching the carcasses. The most cost-effective refresh — usually done in 3–5 days.",
    color: "border-green-200 bg-green-50",
    badge: "bg-green-100 text-green-800",
  },
};

const TYPE_ORDER: RenovationType[] = ["makeover", "renovation", "remodeling"];

const CITY_ORDER = ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"] as const;
const CITY_LABELS: Record<string, string> = {
  delhi: "Delhi", gurgaon: "Gurgaon", noida: "Noida",
  ghaziabad: "Ghaziabad", faridabad: "Faridabad",
};

const fmt = (n: number) =>
  n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(/\.0$/, "")} L` : `₹${(n / 1000).toFixed(0)}K`;

export default function RenovationDirectoryPage() {
  const [openType, setOpenType] = useState<RenovationType | null>("makeover");

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
          <span className="text-foreground font-medium">Kitchen Renovation</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <RefreshCw className="h-4 w-4" />
            {KITCHEN_RENOVATION_REGISTRY.length} Locality Pages
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen Renovation — Delhi NCR
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Whether you need a full renovation, a remodel, or a quick makeover — find the right service for your locality and budget across Delhi NCR.
          </p>
        </div>
      </section>

      {/* Renovation type sections */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {TYPE_ORDER.map((type) => {
            const meta = TYPE_META[type];
            const entries = KITCHEN_RENOVATION_REGISTRY.filter((e) => e.renovationType === type);
            const isOpen = openType === type;

            // Group by city
            const byCity: Record<string, typeof entries> = {};
            entries.forEach((e) => {
              if (!byCity[e.citySlug]) byCity[e.citySlug] = [];
              byCity[e.citySlug].push(e);
            });

            return (
              <div key={type} className={`rounded-2xl border p-6 ${meta.color}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${meta.badge} mb-2 inline-block`}>
                      {meta.label}
                    </span>
                    <h2 className="text-xl font-bold">{meta.subtitle}</h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">{meta.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{entries.length} localities</span>
                </div>

                <button
                  onClick={() => setOpenType(isOpen ? null : type)}
                  className="text-sm font-medium text-amber-700 cursor-pointer mb-4"
                >
                  {isOpen ? "Collapse ▲" : "View all localities ▼"}
                </button>

                {isOpen && (
                  <div className="space-y-5">
                    {CITY_ORDER.filter((c) => byCity[c]?.length).map((city) => (
                      <div key={city}>
                        <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                          {CITY_LABELS[city]}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {byCity[city].map((e) => (
                            <Link
                              key={e.urlSlug}
                              to={`/${e.urlSlug}`}
                              className="group flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border hover:border-amber-400 transition-colors cursor-pointer"
                            >
                              {e.localityName}
                              <span className="text-xs text-muted-foreground">
                                {fmt(e.priceMin)}+
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick comparison */}
      <section className="bg-muted/40 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-5 text-center">Which service do you need?</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-stone-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Timeline</th>
                  <th className="px-4 py-3 text-left">Typical Cost</th>
                  <th className="px-4 py-3 text-left">Best When</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-background">
                  <td className="px-4 py-3 font-medium">Makeover</td>
                  <td className="px-4 py-3 text-muted-foreground">3–5 days</td>
                  <td className="px-4 py-3">₹40K–₹1.5L</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">Cabinets are intact, just need a refresh</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="px-4 py-3 font-medium">Remodeling</td>
                  <td className="px-4 py-3 text-muted-foreground">10–18 days</td>
                  <td className="px-4 py-3">₹1.5L–₹5L</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">Layout needs to change but structure is fine</td>
                </tr>
                <tr className="bg-background">
                  <td className="px-4 py-3 font-medium">Full Renovation</td>
                  <td className="px-4 py-3 text-muted-foreground">15–25 days</td>
                  <td className="px-4 py-3">₹3L–₹12L</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">10+ year old kitchen or major structural change</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-renovation" />
      <Footer />
    </div>
  );
}
