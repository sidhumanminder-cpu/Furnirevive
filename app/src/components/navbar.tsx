import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Authenticated, Unauthenticated } from "convex/react";
import { cn } from "@/lib/utils.ts";

const SERVICE_LINKS = [
  { label: "Sofa Repair Delhi", href: "/sofa-repair-delhi" },
  { label: "Furniture Repair Delhi", href: "/furniture-repair-delhi" },
  { label: "Recliner Repair Delhi", href: "/recliner-repair-delhi" },
  { label: "Chair Repair Delhi", href: "/chair-repair-delhi" },
  { label: "Furniture Polish Delhi", href: "/furniture-polish-delhi" },
  { label: "Carpenter Service Delhi", href: "/carpenter-home-service-delhi" },
  { label: "Sofa Upholstery Delhi", href: "/sofa-upholstery-delhi" },
  { label: "Dining Chair Repair Delhi", href: "/dining-chair-repair-delhi" },
] as const;

const AREA_LINKS = [
  { label: "South Delhi", href: "/sofa-repair-south-delhi" },
  { label: "Gurgaon", href: "/sofa-repair-gurgaon" },
  { label: "Noida", href: "/sofa-repair-noida" },
  { label: "Dwarka", href: "/sofa-repair-dwarka" },
  { label: "Rohini", href: "/sofa-repair-rohini" },
  { label: "East Delhi", href: "/sofa-repair-east-delhi" },
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
        <div className="absolute top-full left-0 mt-1 w-60 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
          <p className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</p>
          {SERVICE_LINKS.map((link) => (
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
          {AREA_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
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
              <Link to="/my-bookings">
                <Button size="sm" variant="ghost">
                  My Bookings
                </Button>
              </Link>
              <SignInButton size="sm" variant="ghost" />
            </Authenticated>
            <Link to="/book">
              <Button size="sm">Book Repair</Button>
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
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Areas Accordion */}
            <button
              onClick={() => setMobileAreasOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              Service Areas
              <ChevronDown className={cn("size-4 transition-transform", mobileAreasOpen && "rotate-180")} />
            </button>
            {mobileAreasOpen && (
              <div className="ml-4 space-y-0.5">
                {AREA_LINKS.map((link) => (
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
                <Link to="/my-bookings" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full" size="sm" variant="secondary">
                    My Bookings
                  </Button>
                </Link>
                <SignInButton className="w-full" size="sm" variant="secondary" />
              </Authenticated>
              <Link to="/book" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="sm">Book Repair</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
