/**
 * /modular-kitchen-localities
 * Sub-directory hub: searchable, filterable grid of all published localities.
 */
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ChevronRight, Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { MODULAR_KITCHEN_LOCALITY_REGISTRY } from "@/lib/registry/kitchen-locality-registry.ts";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

const CITIES = [
  { key: "all", label: "All Cities" },
  { key: "delhi", label: "Delhi" },
  { key: "gurgaon", label: "Gurgaon" },
  { key: "noida", label: "Noida" },
  { key: "ghaziabad", label: "Ghaziabad" },
  { key: "faridabad", label: "Faridabad" },
] as const;

const CITY_LABELS: Record<string, string> = {
  delhi: "Delhi",
  gurgaon: "Gurgaon",
  noida: "Noida",
  ghaziabad: "Ghaziabad",
  faridabad: "Faridabad",
};

const PUBLISHED = MODULAR_KITCHEN_LOCALITY_REGISTRY.filter((e) => e.status === "published");

export default function LocalitiesDirectoryPage() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PUBLISHED.filter((e) => {
      const cityMatch = city === "all" || e.city === city;
      const nameMatch = !q || e.name.toLowerCase().includes(q) || e.city.includes(q);
      return cityMatch && nameMatch;
    });
  }, [query, city]);

  const byCity = useMemo(() => {
    const map: Record<string, typeof PUBLISHED[number][]> = {};
    filtered.forEach((e) => {
      if (!map[e.city]) map[e.city] = [];
      map[e.city].push(e);
    });
    return map;
  }, [filtered]);

  const cityOrder = ["delhi", "gurgaon", "noida", "ghaziabad", "faridabad"];

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
          <span className="text-foreground font-medium">Browse by Locality</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            {PUBLISHED.length} Localities Covered
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen by Locality — Delhi NCR
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Browse modular kitchen design, installation, renovation, and repair services across every major locality in Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="sticky top-0 z-20 bg-background border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search locality…"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Button
                key={c.key}
                size="sm"
                variant={city === c.key ? "default" : "outline"}
                onClick={() => setCity(c.key)}
                className="cursor-pointer"
              >
                {c.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <MapPin className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-lg">No localities match your search.</p>
            <button onClick={() => { setQuery(""); setCity("all"); }} className="mt-3 text-sm underline cursor-pointer">Clear filters</button>
          </div>
        ) : (
          cityOrder
            .filter((c) => byCity[c]?.length)
            .map((c) => (
              <div key={c} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-xl font-bold">{CITY_LABELS[c]}</h2>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                    {byCity[c].length} localities
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {byCity[c].map((loc) => (
                    <LocalityCard key={loc.id} loc={loc} />
                  ))}
                </div>
              </div>
            ))
        )}
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-localities" />
      <Footer />
    </div>
  );
}

type Loc = typeof PUBLISHED[number];

function LocalityCard({ loc }: { loc: Loc }) {
  return (
    <div className="border rounded-xl p-4 bg-card hover:border-amber-500 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-base group-hover:text-amber-700 transition-colors">
            {loc.name}
          </h3>
          <p className="text-xs text-muted-foreground capitalize">{CITY_LABELS[loc.city]}</p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
          loc.averageProjectValue === "luxury" ? "bg-purple-100 text-purple-700" :
          loc.averageProjectValue === "premium" ? "bg-amber-100 text-amber-700" :
          loc.averageProjectValue === "mid" ? "bg-blue-100 text-blue-700" :
          "bg-green-100 text-green-700"
        }`}>
          {loc.averageProjectValue === "luxury" ? "Luxury" :
           loc.averageProjectValue === "premium" ? "Premium" :
           loc.averageProjectValue === "mid" ? "Mid Range" : "Budget"}
        </span>
      </div>
      <div className="flex flex-col gap-1.5 mt-3">
        <Link
          to={`/modular-kitchen-${loc.slug}`}
          className="flex items-center justify-between text-sm font-medium text-amber-700 hover:text-amber-800 cursor-pointer"
        >
          <span className="flex items-center gap-1.5"><Home className="h-3.5 w-3.5" /> New Kitchen</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          to={`/modular-kitchen-renovation-${loc.slug}`}
          className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <span>Renovation</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          to={`/kitchen-makeover-${loc.slug}`}
          className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <span>Makeover</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
