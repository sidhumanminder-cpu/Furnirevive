import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight, Sparkles, IndianRupee, Clock } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from "@/lib/seo-constants.ts";

type CaseStudyResult = {
  _id: string;
  heading: string;
  beforeUrl: string | null;
  afterUrl: string | null;
  altTextBefore: string;
  altTextAfter: string;
  problem: string;
  solution: string;
  materialsUsed?: string;
  costMin: number;
  costMax: number;
  timeTaken: string;
};

const INTERNAL_LINKS = [
  { href: "/sofa-repair-cost-delhi", label: "Sofa Repair Cost Delhi" },
  { href: "/sofa-repair-near-me-delhi", label: "Sofa Repair Near Me Delhi" },
  { href: "/sofa-upholstery-delhi", label: "Sofa Upholstery Delhi" },
  { href: "/furniture-repair-cost-delhi", label: "Furniture Repair Cost Delhi" },
  { href: "/upholstery-home-service-delhi", label: "Upholstery Home Service Delhi" },
];

function CaseBlock({ study, index }: { study: CaseStudyResult; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="rounded-xl border bg-card overflow-hidden"
    >
      {/* Before / After images */}
      <div className="grid grid-cols-2 gap-px bg-border">
        <div className="relative bg-card">
          {study.beforeUrl ? (
            <img
              src={study.beforeUrl}
              alt={study.altTextBefore}
              loading="lazy"
              className="w-full aspect-[4/3] object-contain bg-muted"
            />
          ) : (
            <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground text-sm">
              Before
            </div>
          )}
          <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold bg-destructive/90 text-white rounded">
            Before
          </span>
        </div>
        <div className="relative bg-card">
          {study.afterUrl ? (
            <img
              src={study.afterUrl}
              alt={study.altTextAfter}
              loading="lazy"
              className="w-full aspect-[4/3] object-contain bg-muted"
            />
          ) : (
            <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground text-sm">
              After
            </div>
          )}
          <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold bg-green-600/90 text-white rounded">
            After
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-serif font-bold text-foreground">{study.heading}</h3>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold text-destructive">Problem: </span>
            <span className="text-foreground/85">{study.problem}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700 dark:text-green-400">Solution: </span>
            <span className="text-foreground/85">{study.solution}</span>
          </div>
          {study.materialsUsed && (
            <div>
              <span className="font-semibold text-muted-foreground">Materials: </span>
              <span className="text-foreground/85">{study.materialsUsed}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 pt-1">
          <div className="flex items-center gap-1.5 text-sm">
            <IndianRupee className="size-3.5 text-primary" />
            <span className="font-medium">
              ₹{study.costMin.toLocaleString("en-IN")} – ₹{study.costMax.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Clock className="size-3.5 text-primary" />
            <span className="font-medium">{study.timeTaken}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="rounded-xl border overflow-hidden">
          <div className="grid grid-cols-2 gap-px">
            <Skeleton className="aspect-[4/3] rounded-none" />
            <Skeleton className="aspect-[4/3] rounded-none" />
          </div>
          <div className="p-5 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RealRepairResults({ pageSlug }: { pageSlug: string }) {
  const caseStudies = useQuery(api.caseStudies.getForPage, { pageSlug });

  // Don't render the section at all if there are no case studies
  if (caseStudies !== undefined && caseStudies.length === 0) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I saw your repair results and would like to get a quotation."
  )}`;

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" />
            Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Real Repair Results in Delhi/NCR
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            See actual before and after transformations by our skilled craftsmen across Delhi NCR.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        {caseStudies === undefined ? (
          <LoadingSkeleton />
        ) : (
          <div
            className={`grid gap-6 ${
              caseStudies.length === 1
                ? "max-w-lg mx-auto"
                : "md:grid-cols-2"
            }`}
          >
            {caseStudies.map((study, i) => (
              <CaseBlock key={study._id} study={study} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-lg font-semibold text-foreground mb-5">
            Get similar results starting{" "}
            <span className="text-primary">₹999</span> – Book Now
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" className="gap-2 rounded-full">
                <Phone className="size-4" />
                Call Now
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="secondary" className="gap-2 rounded-full">
                Book Inspection
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Internal Links */}
        <div className="mt-8 pt-6 border-t">
          <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
            Related Services
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {INTERNAL_LINKS.filter((link) => link.href !== `/${pageSlug}`).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
