/**
 * /modular-kitchen-repair-guide
 * Sub-directory hub: 9 domain sections listing all 45 repair problem pages.
 */
import { Link } from "react-router-dom";
import { ChevronRight, Wrench, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { KITCHEN_REPAIR_REGISTRY, type RepairDomain } from "@/lib/registry/kitchen-repair-registry.ts";

const DOMAIN_META: Record<RepairDomain, { label: string; description: string; icon: string }> = {
  "door-shutter": { label: "Door & Shutter", description: "Doors not closing, misaligned shutters, warped panels", icon: "🚪" },
  hinges: { label: "Hinges", description: "Broken soft-close hinges, squeaky hinges, hinge replacements", icon: "🔩" },
  "drawer-storage": { label: "Drawer & Storage", description: "Drawers not sliding, channel repair, basket issues", icon: "📦" },
  "laminate-surface": { label: "Laminate Surface", description: "Peeling laminate, bubbling, scratches, edge repair", icon: "🎨" },
  "acrylic-surface": { label: "Acrylic Surface", description: "Scratched acrylic, fading, cracking, deep dents", icon: "✨" },
  "water-damage": { label: "Water Damage", description: "Swollen plywood, warped cabinets, moisture damage", icon: "💧" },
  "handle-hardware": { label: "Handle & Hardware", description: "Loose handles, broken channels, pull-out repair", icon: "🔧" },
  "countertop-edge": { label: "Countertop & Edge", description: "Chipped granite, broken edges, countertop restoration", icon: "🪨" },
  structural: { label: "Structural", description: "Cabinet frame issues, carcass damage, load-bearing repairs", icon: "🏗️" },
};

const SEVERITY_CONFIG = {
  minor:    { label: "Minor",    dotClass: "bg-green-500",  badgeClass: "text-green-700 bg-green-50 border-green-200" },
  moderate: { label: "Moderate", dotClass: "bg-amber-500",  badgeClass: "text-amber-700 bg-amber-50 border-amber-200" },
  major:    { label: "Major",    dotClass: "bg-orange-500", badgeClass: "text-orange-700 bg-orange-50 border-orange-200" },
  critical: { label: "Critical", dotClass: "bg-red-500",    badgeClass: "text-red-700 bg-red-50 border-red-200" },
} as const;

const DOMAIN_ORDER: RepairDomain[] = [
  "door-shutter", "hinges", "drawer-storage", "laminate-surface",
  "acrylic-surface", "water-damage", "handle-hardware", "countertop-edge", "structural",
];

const fmt = (n: number) =>
  n >= 1000 ? `₹${(n / 1000).toFixed(0)}K` : `₹${n}`;

export default function RepairGuideDirectoryPage() {
  const problems = KITCHEN_REPAIR_REGISTRY.filter(
    (e) => e.pageKind === "problem" && e.status === "published",
  );

  const byDomain: Record<RepairDomain, typeof problems> = {} as Record<RepairDomain, typeof problems>;
  DOMAIN_ORDER.forEach((d) => { byDomain[d] = []; });
  problems.forEach((e) => { byDomain[e.domain]?.push(e); });

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
          <span className="text-foreground font-medium">Kitchen Repairs</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <Wrench className="h-4 w-4" />
            {problems.length} Repair Guides
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen Repair Guide
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Comprehensive repair guides for every modular kitchen problem — diagnosis, DIY tips, professional costs, and when to call an expert.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {(["minor", "moderate", "major", "critical"] as const).map((s) => (
              <span key={s} className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${SEVERITY_CONFIG[s].badgeClass}`}>
                <span className={`h-2 w-2 rounded-full ${SEVERITY_CONFIG[s].dotClass}`} />
                {SEVERITY_CONFIG[s].label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hub CTA */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-center">
        <Link to="/modular-kitchen-repair-hub" className="text-sm font-medium text-amber-800 hover:underline cursor-pointer">
          Not sure what's wrong? → Use our Problem Diagnosis Tool
        </Link>
      </div>

      {/* Domain sections */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {DOMAIN_ORDER.filter((d) => byDomain[d].length > 0).map((domain) => {
          const meta = DOMAIN_META[domain];
          return (
            <div key={domain} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{meta.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{meta.label}</h2>
                  <p className="text-sm text-muted-foreground">{meta.description}</p>
                </div>
                <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                  {byDomain[domain].length} guides
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byDomain[domain].map((entry) => {
                  const sev = SEVERITY_CONFIG[entry.severity];
                  return (
                    <Link
                      key={entry.slug}
                      to={`/${entry.slug}`}
                      className="rounded-xl border bg-card p-4 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold group-hover:text-amber-700 transition-colors leading-snug">
                          {entry.name}
                        </h3>
                        <span className={`shrink-0 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${sev.badgeClass}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${sev.dotClass}`} />
                          {sev.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                        <span>{entry.diyPossible ? "✓ DIY Possible" : "Pro Recommended"}</span>
                        <span className="ml-auto">{fmt(entry.proCostMin)}–{fmt(entry.proCostMax)}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-50 border-t border-b border-red-200 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="h-8 w-8 text-red-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold mb-2">Urgent Kitchen Repair?</h2>
          <p className="text-muted-foreground mb-5 text-sm">We cover Delhi, Gurgaon, Noida, Ghaziabad & Faridabad. Same-day visits for critical issues.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919217999355"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer text-sm"
            >
              Call Now — 92179 99355
            </a>
            <a
              href="https://wa.me/919217999355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-repair" />
      <Footer />
    </div>
  );
}
