import { Link } from "@/lib/router-compat.tsx";
import { useQuery } from "@/lib/convex-query.ts";
import { api } from "@/convex/_generated/api.js";
import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight, Sparkles, IndianRupee, Clock } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from "@/lib/seo-constants.ts";
import { SERVICE_HUB_CONFIG } from "@/pages/services/service-hub/_lib/hub-config.ts";
import { getRelatedLinks } from "@/lib/seoConfigs/cta-copy.ts";
import { getLocalityInfo } from "@/lib/seoConfigs/localities.ts";

type CaseStudyResult = {
  _id: string;
  heading: string;
  beforeUrl: string | null;
  afterUrl: string | null;
  combinedImageUrl?: string;
  altTextBefore: string;
  altTextAfter: string;
  problem: string;
  solution: string;
  materialsUsed?: string;
  repairType?: string;
  location: string;
  costMin: number;
  costMax: number;
  timeTaken: string;
};

const REPAIR_TYPE_LABELS: Record<string, string> = {
  sofa: "Sofa Repair",
  recliner: "Recliner Repair",
};

const REPAIR_TYPE_ALT_NOUN: Record<string, string> = {
  sofa: "Sofa repair",
  recliner: "Recliner repair",
  leather: "Leather sofa repair",
  furniture: "Furniture repair",
  upholstery: "Sofa upholstery",
};

/**
 * Alt text that always names the area. Saved alt text is kept only when it already
 * mentions the study's location; otherwise it is rebuilt at render time (saved data is untouched).
 */
/** Gallery alt for hub pages: names the card and the zone instead of the saved "after in Delhi NCR" text. */
export function buildHubCaseAlt(heading: string, repairType: string | undefined, zone: string): string {
  const noun = REPAIR_TYPE_ALT_NOUN[repairType ?? "sofa"] ?? "Sofa repair";
  return `${heading} – ${noun.toLowerCase()} in ${zone}`;
}

export function buildCaseAlt(
  study: Pick<CaseStudyResult, "location" | "repairType">,
  saved: string,
  stage: "before" | "after",
  pageLabel: string,
): string {
  const location = study.location.trim();
  if (location && saved.toLowerCase().includes(location.toLowerCase())) {
    // Older saved text ends with a stray " Delhi"; drop it unless the study is actually in Delhi
    return location.toLowerCase().includes("delhi") ? saved : saved.replace(/\s+Delhi$/i, "");
  }
  const place = location || pageLabel;
  const noun = REPAIR_TYPE_ALT_NOUN[study.repairType ?? "sofa"] ?? "Sofa repair";
  return `${noun} ${stage} in ${place}`;
}

export function CaseBlock({ study, index, showTypeLabel, pageLabel, altContext }: { study: CaseStudyResult; index: number; showTypeLabel: boolean; pageLabel: string; altContext?: string }) {
  const hubAlt = altContext ? buildHubCaseAlt(study.heading, study.repairType, altContext) : null;
  const altBefore = hubAlt ? `${hubAlt} (before)` : buildCaseAlt(study, study.altTextBefore, "before", pageLabel);
  const altAfter = hubAlt ? `${hubAlt} (after)` : buildCaseAlt(study, study.altTextAfter, "after", pageLabel);
  const typeLabel = showTypeLabel && study.repairType ? REPAIR_TYPE_LABELS[study.repairType] : undefined;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="rounded-xl border bg-card overflow-hidden"
    >
      {/* Before / After images */}
      {study.combinedImageUrl ? (
        <img
          src={study.combinedImageUrl}
          alt={altAfter}
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
          className="w-full object-contain bg-muted"
        />
      ) : (
      <div className="grid grid-cols-2 gap-px bg-border">
        <div className="relative bg-card">
          {study.beforeUrl ? (
            <img
              src={study.beforeUrl}
              alt={altBefore}
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
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
              alt={altAfter}
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
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
      )}

      {/* Details */}
      <div className="p-5 space-y-3">
        {typeLabel && (
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{typeLabel} — Before/After</p>
        )}
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

export function LoadingSkeleton() {
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

/** Headline price for the page's service, from the single source of truth in the hub config. */
function headlinePriceFor(pageSlug: string, service?: string): string | null {
  const slug = pageSlug.toLowerCase();
  const key =
    service ??
    (slug.includes("recliner") ? "recliner-repair"
      : slug.includes("upholstery") ? "sofa-upholstery"
      : slug.includes("sofa") ? "sofa-repair"
      : slug.includes("furniture") || slug.includes("carpenter") ? "furniture-repair"
      : null);
  if (!key || !(key in SERVICE_HUB_CONFIG)) return null;
  return SERVICE_HUB_CONFIG[key as keyof typeof SERVICE_HUB_CONFIG].headlinePrice;
}

type RealRepairResultsProps = {
  pageSlug: string;
  cityName?: string;
  /** When set, only this service's case studies are shown (registry pages). */
  service?: "sofa-repair" | "recliner-repair" | "furniture-repair" | "sofa-upholstery";
  /** Zone name; when set, image alt text is "<card title> – <service> in <zone>" (hub pages). */
  altContext?: string;
};

export default function RealRepairResults({ pageSlug, cityName, service, altContext }: RealRepairResultsProps) {
  const byPage = useQuery(api.caseStudies.getForPage, service ? "skip" : { pageSlug });
  const byService = useQuery(api.caseStudies.getByService, service ? { service } : "skip");
  const caseStudies = service ? byService : byPage;

  // Don't render the section at all if there are no case studies
  if (caseStudies !== undefined && caseStudies.length === 0) {
    return null;
  }
  // Furniture/upholstery borrow sofa and recliner work, so the heading stays general
  const cityLabel = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : "Delhi/NCR";
  // A city-named heading is only honest if every shown study is from that city
  const hasOutOfCityStudy = !!caseStudies?.some(
    (study) => !study.location.toLowerCase().includes(cityLabel.toLowerCase()),
  );
  // Page's own place name, used only when a study has no location of its own
  const pageLabel = cityName ? cityLabel : getLocalityInfo(pageSlug).name;
  const isGeneral = service === "furniture-repair" || service === "sofa-upholstery";
  const price = headlinePriceFor(pageSlug, service);
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
            {isGeneral ? "See the Quality of Our Work" : hasOutOfCityStudy ? "Real Repair Results Across Delhi NCR" : `Real Repair Results in ${cityLabel}`}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            {isGeneral ? "Recent sofa and recliner restorations by our craftsmen, shown as examples of our finishing standard." : hasOutOfCityStudy ? "See actual before and after transformations by our skilled craftsmen across Delhi NCR." : `See actual before and after transformations by our skilled craftsmen across ${cityLabel}.`}
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
              <CaseBlock key={study._id} study={study} index={i} showTypeLabel={isGeneral} pageLabel={pageLabel} altContext={altContext} />
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
            {price ? (
              <>
                Get similar results {price.startsWith("from") ? "" : "from "}<span className="text-primary">{price}</span> – Book Now
              </>
            ) : (
              "Get a free quote for similar results – Book Now"
            )}
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
            {getRelatedLinks(pageSlug).filter((link) => link.href !== `/${pageSlug}`).map((link) => (
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
