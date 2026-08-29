/**
 * /modular-kitchen-guides
 * Sub-directory hub: categorised grid of all published blog/guide entries.
 */
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import KitchenRelatedBlogs from "@/components/kitchen-related-blogs.tsx";
import { KITCHEN_BLOG_REGISTRY } from "@/lib/registry/kitchen-blog-registry.ts";

const CATEGORY_META = [
  { key: "planning", label: "Planning & Process", description: "How to plan, measure, and execute a modular kitchen project", color: "bg-purple-50 border-purple-200", badge: "bg-purple-100 text-purple-800" },
  { key: "cost", label: "Cost Guides", description: "Transparent pricing breakdowns by city, size, and material", color: "bg-green-50 border-green-200", badge: "bg-green-100 text-green-800" },
  { key: "materials", label: "Materials & Finishes", description: "In-depth comparisons of Acrylic, Laminate, PU, Membrane, and more", color: "bg-blue-50 border-blue-200", badge: "bg-blue-100 text-blue-800" },
  { key: "layouts", label: "Layouts & Designs", description: "L-Shape, U-Shape, Parallel, Island — which layout works where", color: "bg-amber-50 border-amber-200", badge: "bg-amber-100 text-amber-800" },
  { key: "city", label: "City Guides", description: "Local guides for Delhi, Gurgaon, Noida, and NCR localities", color: "bg-stone-50 border-stone-200", badge: "bg-stone-100 text-stone-800" },
] as const;

type CategoryKey = "planning" | "cost" | "materials" | "layouts" | "city";

export default function GuidesDirectoryPage() {
  const published = KITCHEN_BLOG_REGISTRY.filter((e) => e.status === "published");

  const byCategory: Record<CategoryKey, typeof published> = {
    planning: [], cost: [], materials: [], layouts: [], city: [],
  };
  published.forEach((e) => {
    if (e.category in byCategory) {
      byCategory[e.category as CategoryKey].push(e);
    }
  });

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
          <span className="text-foreground font-medium">Guides &amp; Learning</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-stone-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <BookOpen className="h-4 w-4" />
            {published.length} Guides Published
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modular Kitchen Guides &amp; Learning Hub
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Everything you need to plan, budget, compare, and build your ideal modular kitchen. Written by FurniRevive's design and installation team.
          </p>
        </div>
      </section>

      {/* Category sections */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {CATEGORY_META.map((cat) => {
          const entries = byCategory[cat.key];
          if (!entries.length) return null;
          return (
            <div key={cat.key}>
              <div className={`rounded-xl border p-4 mb-6 ${cat.color}`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.badge}`}>{cat.label}</span>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="ml-auto text-xs text-muted-foreground">{entries.length} articles</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {entries.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg hover:border-amber-400 transition-all cursor-pointer"
                  >
                    {article.featuredImage && (
                      <div className="h-36 overflow-hidden bg-stone-100">
                        <img
                          src={article.featuredImage}
                          alt={article.h1}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${cat.badge}`}>{cat.label}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />{article.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                        {article.h1}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-amber-700">
                        Read guide <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Repair guides promo */}
      <section className="bg-stone-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Got a kitchen problem to fix?</h2>
          <p className="text-stone-300 mb-5 text-sm">Browse our 45 repair guides — diagnosis, DIY tips, and professional cost estimates.</p>
          <Link
            to="/modular-kitchen-repair-guide"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors cursor-pointer text-sm"
          >
            Browse Repair Guides <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <KitchenRelatedBlogs slug="modular-kitchen-guides" />
      <Footer />
    </div>
  );
}
