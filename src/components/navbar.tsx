import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Authenticated, Unauthenticated } from "convex/react";
import { cn } from "@/lib/utils.ts";
import { useServiceContext } from "@/hooks/use-service-context.ts";

const REPAIR_LINKS = [
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
  { label: "Furniture Polish Delhi", href: "/furniture-polish-delhi" },
  { label: "Carpenter Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Sofa Upholstery Delhi", href: "/sofa-upholstery-delhi" },
  { label: "Dining Chair Repair Delhi", href: "/dining-chair-repair-delhi" },
] as const;

const KITCHEN_NEAR_ME = [
  { label: "Near Me", href: "/modular-kitchen-near-me" },
] as const;

const KITCHEN_CITY_LINKS = [
  { label: "Modular Kitchen Guide", href: "/modular-kitchen-guide" },
  { label: "Delhi", href: "/modular-kitchen-delhi" },
  { label: "Gurgaon", href: "/modular-kitchen-gurgaon" },
  { label: "Noida", href: "/modular-kitchen-noida" },
  { label: "Ghaziabad", href: "/modular-kitchen-ghaziabad" },
  { label: "Faridabad", href: "/modular-kitchen-faridabad" },
] as const;

const KITCHEN_SERVICE_LINKS = [
  { label: "Layouts", href: "/l-shape-modular-kitchen-delhi" },
  { label: "Materials", href: "/acrylic-modular-kitchen-delhi" },
  { label: "Budget", href: "/blog/modular-kitchen-cost-delhi-guide" },
  { label: "Commercial Services", href: "/modular-kitchen-company-delhi" },
  { label: "Renovation", href: "/modular-kitchen-renovation" },
  { label: "Repair Guide", href: "/modular-kitchen-repair-guide" },
] as const;

const LAYOUT_LINKS = [
  { label: "L Shape", href: "/l-shape-modular-kitchen" },
  { label: "Parallel", href: "/parallel-modular-kitchen" },
  { label: "Straight", href: "/straight-modular-kitchen" },
  { label: "U Shape", href: "/u-shape-modular-kitchen" },
] as const;

const AREA_LINKS = [
  { label: "South Delhi", href: "/sofa-repair-south-delhi" },
  { label: "Gurgaon", href: "/sofa-repair-gurgaon" },
  { label: "Noida", href: "/sofa-repair-noida" },
  { label: "Dwarka", href: "/sofa-repair-dwarka" },
  { label: "Rohini", href: "/sofa-repair-rohini" },
  { label: "East Delhi", href: "/sofa-repair-east-delhi" },
  { label: "Ghaziabad", href: "/sofa-repair-ghaziabad" },
  { label: "Faridabad", href: "/sofa-repair-faridabad" },
] as const;

// Tricity-specific service area links
const TRICITY_AREA_LINKS = [
  { label: "Chandigarh", href: "/sofa-repair-chandigarh" },
  { label: "Mohali", href: "/sofa-repair-mohali" },
  { label: "Panchkula", href: "/sofa-repair-panchkula" },
] as const;

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

function AdminLink() {
  const isAdmin = useQuery(api.users.isAdmin);
  if (!isAdmin) return null;
  return (
    <Link to="/admin">
      <Button size="sm" variant="ghost" className="text-primary">
        <Shield className="size-4 mr-1" />
        Admin
      </Button>
    </Link>
  );
}

function AdminMobileLink({ onClick }: { onClick: () => void }) {
  const isAdmin = useQuery(api.users.isAdmin);
  if (!isAdmin) return null;
  return (
    <Link to="/admin" onClick={onClick}>
      <Button className="w-full" size="sm" variant="secondary">
        <Shield className="size-4 mr-1" />
        Admin Dashboard
      </Button>
    </Link>
  );
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  // Only show kitchen links on kitchen/modular pages to preserve topical authority on sofa/furniture pages
  const isKitchenPage = pathname.includes("kitchen") || pathname.includes("modular");
  // Show Tricity area links on Chandigarh/Mohali/Panchkula pages
  const isTricityPage = pathname.includes("chandigarh") || pathname.includes("mohali") || pathname.includes("panchkula");
  const activeAreaLinks = isTricityPage ? TRICITY_AREA_LINKS : AREA_LINKS;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
      >
        Services
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg py-1 z-50 max-h-[80vh] overflow-y-auto">
          {isKitchenPage ? (
            <>
              {/* Kitchen pages: show only Modular Kitchen section */}
              <p className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Modular Kitchen</p>
              {KITCHEN_NEAR_ME.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-amber-700 hover:text-amber-800 hover:bg-secondary transition-colors"
                >
                  ★ {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-1" />
              {KITCHEN_CITY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-1" />
              {KITCHEN_SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </>
          ) : (
            <>
              {/* Non-kitchen pages: show only Repair Services + Service Areas */}
              <p className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Repair Services</p>
              {REPAIR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-1" />
              <p className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service Areas</p>
              {activeAreaLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();
  const { config: svcConfig } = useServiceContext();
  // Only show kitchen links on kitchen/modular pages
  const isKitchenPage = location.pathname.includes("kitchen") || location.pathname.includes("modular");
  // Show Tricity area links on Chandigarh/Mohali/Panchkula pages
  const isTricityPage = location.pathname.includes("chandigarh") || location.pathname.includes("mohali") || location.pathname.includes("panchkula");
  const activeAreaLinks = isTricityPage ? TRICITY_AREA_LINKS : AREA_LINKS;

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 mr-4 group">
            <img
              src="https://cdn.hercules.app/file_dtr8PtooAsmRwfNTJKNRTESW"
              alt="FurniRevive Furniture Repair"
              className="h-[6.75rem] w-auto mix-blend-multiply"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              FurniRevive
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <ServicesDropdown />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Unauthenticated>
              <SignInButton size="sm" variant="ghost" />
            </Unauthenticated>
            <Authenticated>
              <AdminLink />
              <Link to={svcConfig.navSecondaryUrl}>
                <Button size="sm" variant="ghost">
                  {svcConfig.navSecondaryLabel}
                </Button>
              </Link>
              <SignInButton size="sm" variant="ghost" />
            </Authenticated>
            <Link to={svcConfig.ctaUrl}>
              <Button size="sm">{svcConfig.ctaLabel}</Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              Services
              <ChevronDown className={cn("size-4 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 space-y-0.5">
                {isKitchenPage ? (
                  <>
                    {/* Kitchen pages: show only Modular Kitchen section */}
                    <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Modular Kitchen</p>
                    {KITCHEN_NEAR_ME.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm font-semibold text-amber-700 hover:text-amber-800 hover:bg-secondary rounded-md transition-colors"
                      >
                        ★ {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    {KITCHEN_CITY_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    {KITCHEN_SERVICE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    {/* Non-kitchen pages: show only Repair Services */}
                    <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Repair Services</p>
                    {REPAIR_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )}

            {/* Mobile Areas Accordion — only on non-kitchen pages */}
            {!isKitchenPage && (
              <>
                <button
                  onClick={() => setMobileAreasOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  Service Areas
                  <ChevronDown className={cn("size-4 transition-transform", mobileAreasOpen && "rotate-180")} />
                </button>
                {mobileAreasOpen && (
                  <div className="ml-4 space-y-0.5">
                    {activeAreaLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => { setMobileOpen(false); setMobileAreasOpen(false); }}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="block px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Unauthenticated>
                <SignInButton className="w-full" size="sm" variant="secondary" />
              </Unauthenticated>
              <Authenticated>
                <AdminMobileLink onClick={() => setMobileOpen(false)} />
                <Link to={svcConfig.navSecondaryUrl} onClick={() => setMobileOpen(false)}>
                  <Button className="w-full" size="sm" variant="secondary">
                    {svcConfig.navSecondaryLabel}
                  </Button>
                </Link>
                <SignInButton className="w-full" size="sm" variant="secondary" />
              </Authenticated>
              <Link to={svcConfig.ctaUrl} onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="sm">{svcConfig.ctaLabel}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
