/**
 * /modular-kitchen-materials
 * Sub-directory hub: material/finish cards each linking to locality pages.
 */
import { Link } from "react-router-dom";
import { ChevronRight, Layers } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";

// URL prefix per material slug
const MATERIAL_URL_PREFIX: Record<string, string> = {
  acrylic: "acrylic-modular-kitchen",
  laminate: "laminate-modular-kitchen",
  pu: "pu-modular-kitchen",
  membrane: "membrane-modular-kitchen",
  veneer: "veneer-modular-kitchen",
  pvc: "pvc-modular-kitchen",
  glass: "glass-modular-kitchen",
  "stainless-steel": "steel-modular-kitchen",
};

// City pages available per material (only those with programmatic registry)
const MATERIAL_CITIES: Record<string, { slug: string; name: string }[]> = {
  acrylic: [
    { slug: "greater-kailash", name: "Greater Kailash" },
    { slug: "vasant-kunj", name: "Vasant Kunj" },
    { slug: "hauz-khas", name: "Hauz Khas" },
    { slug: "dlf-phase-gurgaon", name: "DLF Gurgaon" },
    { slug: "sector-150-noida", name: "Noida Sec 150" },
  ],
  laminate: [
    { slug: "greater-kailash", name: "Greater Kailash" },
    { slug: "dlf-phase-gurgaon", name: "DLF Gurgaon" },
    { slug: "sector-150-noida", name: "Noida Sec 150" },
    { slug: "indirapuram", name: "Indirapuram" },
  ],
  pu: [
    { slug: "greater-kailash", name: "Greater Kailash" },
    { slug: "dlf-phase-gurgaon", name: "DLF Gurgaon" },
    { slug: "sector-150-noida", name: "Noida Sec 150" },
  ],
  membrane: [
    { slug: "greater-kailash", name: "Greater Kailash" },
    { slug: "dlf-phase-gurgaon", name: "DLF Gurgaon" },
    { slug: "sector-150-noida", name: "Noida Sec 150" },
  ],
  glass: [
    { slug: "greater-kailash", name: "Greater Kailash" },
    { slug: "dlf-phase-gurgaon", name: "DLF Gurgaon" },
    { slug: "sector-150-noida", name: "Noida Sec 150" },
  ],
};

const MAIN_MATERIAL_CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "noida", name: "Noida" },
  { slug: "faridabad", name: "Faridabad" },
  { slug: "ghaziabad", name: "Ghaziabad" },
];

const DURABILITY_LABEL: Record<string, string> = {
  low: "Low", medium: "Medium", high: "High", "very-high": "Very High",
};
const MAINTENANCE_LABEL: Record<string, string> = {
  low: "Easy", medium: "Moderate", high: "High maintenance",
};

const fmt = (n: number) =>
  `₹${n.toLocaleString("en-IN")}/sq ft`;

export default function MaterialsDirectoryPage() {
  const published = MODULAR_KITCHEN_MATERIAL_REGISTRY.filter((m) => m.status === "published");

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
          <span className="text-foreground font-medium">Browse by Material</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <Layers className="h-4 w-4" />
            {published.length} Finish Types
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen by Material &amp; Finish
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Compare every modular kitchen finish — Acrylic, Laminate, PU, Membrane, Glass, and more. Find city and locality-specific pricing and service pages.
          </p>
        </div>
      </section>

      {/* Material cards */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {published.map((mat) => (
            <div key={mat.id} className="border rounded-2xl p-6 bg-card hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold group-hover:text-amber-700 transition-colors">
                    {mat.shortName} Kitchen
                  </h2>
                  <p className="text-sm text-muted-foreground">{mat.finish}</p>
                </div>
                <span className="text-sm font-semibold text-amber-700">
                  {fmt(mat.costMin)} – {fmt(mat.costMax)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{mat.bestFor}</p>

              <div className="flex gap-4 mb-4 text-xs">
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Durability</span>
                  <span className="font-medium">{DURABILITY_LABEL[mat.durability]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Maintenance</span>
                  <span className="font-medium">{MAINTENANCE_LABEL[mat.maintenance]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Best for</span>
                  <span className="font-medium capitalize">
                    {mat.recommendedForAffluence.slice(0, 2).join(", ")}
                  </span>
                </div>
              </div>

              {/* City links (main) */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">By City</p>
                <div className="flex flex-wrap gap-2">
                  {MAIN_MATERIAL_CITIES.map((c) => {
                    const prefix = MATERIAL_URL_PREFIX[mat.slug];
                    if (!prefix) return null;
                    return (
                      <Link
                        key={c.slug}
                        to={`/${prefix.replace("modular-kitchen", "modular-kitchen")}-${c.slug}`}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-amber-100 hover:text-amber-800 transition-colors cursor-pointer"
                      >
                        {c.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Locality links */}
              {MATERIAL_CITIES[mat.slug] && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">By Locality</p>
                  <div className="flex flex-wrap gap-2">
                    {MATERIAL_CITIES[mat.slug].map((l) => {
                      const prefix = MATERIAL_URL_PREFIX[mat.slug];
                      if (!prefix) return null;
                      return (
                        <Link
                          key={l.slug}
                          to={`/${prefix}-${l.slug}`}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-amber-100 hover:text-amber-800 transition-colors cursor-pointer"
                        >
                          {l.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              <Link
                to={`/modular-kitchen-${mat.slug}`}
                className="mt-4 flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 cursor-pointer"
              >
                Full guide <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-muted/40 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Material Comparison</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-stone-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Cost/sq ft</th>
                  <th className="px-4 py-3 text-left">Durability</th>
                  <th className="px-4 py-3 text-left">Maintenance</th>
                  <th className="px-4 py-3 text-left">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {published.map((m, i) => (
                  <tr key={m.id} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium">
                      <Link to={`/modular-kitchen-${m.slug}`} className="hover:text-amber-700 cursor-pointer">
                        {m.shortName}
                      </Link>
                    </td>
                    <td className="px-4 py-3">{fmt(m.costMin)} – {fmt(m.costMax)}</td>
                    <td className="px-4 py-3 text-muted-foreground">{DURABILITY_LABEL[m.durability]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{MAINTENANCE_LABEL[m.maintenance]}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground capitalize">
                      {m.recommendedForAffluence.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-materials" />
      <Footer />
    </div>
  );
}
