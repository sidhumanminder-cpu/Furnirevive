import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  MapPin,
  BadgeCheck,
  FileText,
  ShieldCheck,
  CalendarClock,
  ArrowRight,
  ChevronRight,
  Building2,
  Users,
  Banknote,
  Hotel,
  Landmark,
  Monitor,
  Wrench,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  COMMERCIAL_LOCALITY_REGISTRY,
  computeCommercialScore,
} from "@/lib/registry/commercial-locality-registry.ts";
import { INDUSTRY_REGISTRY, type IndustryKey } from "@/lib/registry/industry-registry.ts";
import { BUSINESS } from "@/lib/business-config.ts";
import type { CityKey } from "@/lib/registry/types.ts";

export type HubPageProps = {
  city: CityKey;
  cityDisplay: string;
  intro: string;
};

// ─── Static content pools ──────────────────────────────────────────────────

const TRUST_BADGES: readonly { icon: LucideIcon; label: string }[] = [
  { icon: CalendarClock, label: "Same-day On-site" },
  { icon: FileText, label: "GST Invoice" },
  { icon: ShieldCheck, label: "6-Month Warranty" },
  { icon: BadgeCheck, label: "AMC Available" },
];

const PRICING_ROWS: readonly { service: string; price: string }[] = [
  { service: "Gas lift / pneumatic cylinder replacement", price: "₹500" },
  { service: "Hydraulic mechanism repair", price: "₹600" },
  { service: "Caster wheels replacement (set)", price: "₹300" },
  { service: "Tilt & recline mechanism repair", price: "₹800" },
  { service: "Armrest repair / replacement", price: "₹400" },
  { service: "Mesh back replacement", price: "₹1,200" },
  { service: "Seat foam replacement", price: "₹800" },
  { service: "Lumbar / back support repair", price: "₹600" },
  { service: "Chair base replacement", price: "₹600" },
  { service: "Executive chair full restore", price: "₹3,000" },
];

// Industry keys featured on the hub, in display order.
const HUB_INDUSTRY_KEYS: readonly IndustryKey[] = [
  "it",
  "coworking",
  "bank",
  "hotel",
  "hospital",
  "government",
];

// Maps the lucide icon name stored in INDUSTRY_REGISTRY to a component.
const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  Monitor,
  Users,
  Banknote,
  Hotel,
  Building2,
  Landmark,
};

type AmcPlan = {
  name: string;
  cadence: string;
  price: string;
  highlight: boolean;
  perks: readonly string[];
};

const AMC_PLANS: readonly AmcPlan[] = [
  {
    name: "Basic",
    cadence: "Quarterly visit",
    price: "₹2,500/yr",
    highlight: false,
    perks: ["4 preventive visits a year", "Priority booking", "GST invoice"],
  },
  {
    name: "Standard",
    cadence: "Bimonthly visit",
    price: "₹4,500/yr",
    highlight: true,
    perks: ["6 preventive visits a year", "Free minor part fitting", "48-hour response SLA"],
  },
  {
    name: "Premium",
    cadence: "Monthly visit",
    price: "₹8,000/yr",
    highlight: false,
    perks: ["12 preventive visits a year", "Dedicated account manager", "Same-day emergency support"],
  },
];

const BLOG_LINKS: readonly { href: string; title: string }[] = [
  { href: "/blog/office-chair-repair-guide-delhi", title: "The Complete Office Chair Repair Guide" },
  {
    href: "/blog/office-chair-ergonomic-repair-upgrade-delhi",
    title: "Ergonomic Chair Repair & Upgrade Tips",
  },
  {
    href: "/blog/furniture-restoration-cost-guide-delhi-ncr",
    title: "Furniture Restoration Cost Guide — Delhi NCR",
  },
];

function buildFaqs(cityDisplay: string): readonly { q: string; a: string }[] {
  return [
    {
      q: `Do you offer on-site office chair repair across ${cityDisplay}?`,
      a: `Yes. Our technicians travel to your office anywhere in ${cityDisplay} and repair chairs on-site, so there is no downtime or transport hassle for your team.`,
    },
    {
      q: `Can you handle bulk office chair repair for large ${cityDisplay} offices?`,
      a: `Absolutely. We regularly service fleets of 50 to 500+ chairs for corporates, IT parks and coworking spaces in ${cityDisplay}, with volume pricing and scheduled batches.`,
    },
    {
      q: "Do you provide a GST invoice for corporate billing?",
      a: "Every repair and AMC contract comes with a proper GST invoice, making reimbursement and accounting straightforward for your finance team.",
    },
    {
      q: "What is covered under the warranty?",
      a: "All replaced parts and workmanship carry a 6-month warranty. If the same issue recurs within that period, we fix it free of charge.",
    },
    {
      q: `How quickly can you reach our ${cityDisplay} office?`,
      a: `For most business districts in ${cityDisplay} we offer same-day on-site service. Urgent requests are prioritised and AMC clients get a guaranteed response SLA.`,
    },
  ];
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HubPageLayout({ city, cityDisplay, intro }: HubPageProps) {
  const whatsappUrl = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(
    `Hi! I'd like corporate office chair repair in ${cityDisplay}. Please share details.`,
  )}`;

  const localities = COMMERCIAL_LOCALITY_REGISTRY.filter(
    (l) => l.city === city && l.status === "published",
  )
    .slice()
    .sort(
      (a, b) =>
        computeCommercialScore(b.commercialMetrics) - computeCommercialScore(a.commercialMetrics),
    );

  const industries = HUB_INDUSTRY_KEYS.map((key) =>
    INDUSTRY_REGISTRY.find((i) => i.key === key),
  ).filter((i): i is (typeof INDUSTRY_REGISTRY)[number] => Boolean(i));

  const faqs = buildFaqs(cityDisplay);

  // Emit LocalBusiness JSON-LD for this city hub.
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      priceRange: "₹₹",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "312",
      },
      areaServed: { "@type": "City", name: cityDisplay },
      serviceType: "Office Chair Repair",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    script.setAttribute("data-hub-city", city);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [city, cityDisplay]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary cursor-pointer">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">
                Office Chair Repair {cityDisplay}
              </span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-primary">
              <Wrench className="h-4 w-4" />
              Corporate Office Chair Repair
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Office Chair Repair in {cityDisplay}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`tel:${BUSINESS.phone}`} className="cursor-pointer">
                <Button size="lg" className="gap-2 rounded-full w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.displayPhone}
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button
                  size="lg"
                  className="gap-2 rounded-full w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <section className="border-y bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <badge.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Locality grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Business Districts We Serve in {cityDisplay}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            On-site office chair repair across {cityDisplay}&apos;s leading commercial hubs.
          </p>

          {localities.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {localities.map((locality) => (
                <Link
                  key={locality.id}
                  to={`/office-chair-repair-${locality.slug}`}
                  className="cursor-pointer group"
                >
                  <Card className="h-full transition-colors group-hover:border-primary/50">
                    <CardContent className="flex items-center justify-between gap-3 px-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-4.5 w-4.5" />
                        </div>
                        <span className="font-medium text-foreground truncate">
                          {locality.name}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="mt-8">
              <CardContent className="flex flex-col items-center text-center gap-3 py-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <p className="text-lg font-medium text-foreground">
                  Serving all corporate offices in {cityDisplay}
                </p>
                <p className="max-w-md text-muted-foreground">
                  Our technicians cover every business park, IT hub and corporate office across{" "}
                  {cityDisplay}. Call us to schedule an on-site visit.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* 4. Pricing table */}
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Transparent Repair Pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Starting prices per chair. Volume discounts apply for bulk corporate orders.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border bg-card">
            <table className="w-full text-left">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-5 py-3 text-sm font-semibold text-foreground">Repair</th>
                  <th className="px-5 py-3 text-sm font-semibold text-foreground text-right">
                    From
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row) => (
                  <tr key={row.service} className="border-t">
                    <td className="px-5 py-3 text-sm text-foreground">{row.service}</td>
                    <td className="px-5 py-3 text-sm font-semibold text-primary text-right">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Industries served */}
      <section className="py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Industries We Serve</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Trusted by {cityDisplay}&apos;s leading organisations across every sector.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => {
              const Icon = INDUSTRY_ICONS[industry.icon] ?? Building2;
              return (
                <Card key={industry.key} className="h-full">
                  <CardContent className="px-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{industry.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. AMC plans */}
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Annual Maintenance Contracts
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Keep your entire chair fleet in top condition with a predictable yearly plan.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {AMC_PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.highlight
                    ? "relative border-primary ring-1 ring-primary/40"
                    : "relative"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <CardContent className="px-6">
                  <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.cadence}</p>
                  <p className="mt-4 text-3xl font-bold text-primary">{plan.price}</p>
                  <ul className="mt-5 space-y-2.5">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm text-foreground">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${BUSINESS.phone}`} className="cursor-pointer">
                    <Button
                      className="mt-6 w-full rounded-full"
                      variant={plan.highlight ? "default" : "secondary"}
                    >
                      Get {plan.name} Plan
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.q}>
                <CardContent className="px-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blog links */}
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Office Chair Care Resources
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {BLOG_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className="cursor-pointer group">
                <Card className="h-full transition-colors group-hover:border-primary/50">
                  <CardContent className="flex flex-col gap-3 px-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{link.title}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
