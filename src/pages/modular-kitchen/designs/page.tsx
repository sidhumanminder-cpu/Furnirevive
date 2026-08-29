/**
 * /modular-kitchen-designs
 * Sub-directory hub: 6 layout cards each linking to city pages.
 */
import { Link } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";

const CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "noida", name: "Noida" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "faridabad", name: "Faridabad" },
];

const LAYOUT_IMAGES: Record<string, string> = {
  "l-shape": "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
  "u-shape": "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
  parallel: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
  straight: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
  island: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
  peninsula: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
};

const fmt = (n: number) =>
  n >= 100000 ? `₹${(n / 100000).toFixed(1).replace(/\.0$/, "")} L` : `₹${(n / 1000).toFixed(0)}K`;

export default function DesignsDirectoryPage() {
  const published = MODULAR_KITCHEN_LAYOUT_REGISTRY.filter((l) => l.status === "published");

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
          <span className="text-foreground font-medium">Browse by Design</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <LayoutGrid className="h-4 w-4" />
            {published.length} Kitchen Layouts
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen Designs — All Layouts
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Choose the right kitchen layout for your space. Compare L-Shape, U-Shape, Parallel, Straight, Island, and Peninsula designs — with pricing and city-specific pages.
          </p>
        </div>
      </section>

      {/* Layout cards */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {published.map((layout) => (
            <div key={layout.id} className="border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all group">
              <div className="h-40 bg-stone-100 overflow-hidden">
                <img
                  src={LAYOUT_IMAGES[layout.slug] ?? LAYOUT_IMAGES["l-shape"]}
                  alt={layout.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold">{layout.shortName} Kitchen</h2>
                  <span className="text-xs text-muted-foreground">{layout.minSqFt}–{layout.maxSqFt} sq ft</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{layout.description}</p>
                <p className="text-xs text-muted-foreground mb-3 italic">{layout.bestFor}</p>
                <p className="text-sm font-semibold text-amber-700 mb-4">
                  {fmt(layout.costMin)} – {fmt(layout.costMax)}
                </p>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">City Pages</p>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/${layout.slug}-modular-kitchen-${c.slug}`}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-amber-100 hover:text-amber-800 transition-colors cursor-pointer"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/modular-kitchen-${layout.slug}`}
                  className="mt-4 flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 cursor-pointer"
                >
                  View full guide <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="bg-muted/40 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Layout Comparison</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-stone-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Layout</th>
                  <th className="px-4 py-3 text-left">Space Needed</th>
                  <th className="px-4 py-3 text-left">Cost Range</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {published.map((l, i) => (
                  <tr key={l.id} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium">
                      <Link to={`/modular-kitchen-${l.slug}`} className="hover:text-amber-700 cursor-pointer">{l.shortName}</Link>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{l.minSqFt}–{l.maxSqFt} sq ft</td>
                    <td className="px-4 py-3">{fmt(l.costMin)} – {fmt(l.costMax)}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{l.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-designs" />
      <Footer />
    </div>
  );
}
