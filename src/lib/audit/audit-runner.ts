/**
 * Audit Runner
 */

import { generatePages } from "@/lib/registry/generate-pages.ts";
import { LOCALITY_REGISTRY } from "@/lib/registry/locality-registry.ts";
import { COMMERCIAL_LOCALITY_REGISTRY } from "@/lib/registry/commercial-locality-registry.ts";
import { SERVICE_REGISTRY } from "@/lib/registry/service-registry.ts";
import { scorePage, type PageAuditResult } from "./uniqueness-scorer.ts";
import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";

export type AuditSummary = {
  results: PageAuditResult[];
  totalPages: number;
  overallEngineScore: number;
  byService: Record<string, { count: number; avgScore: number; minScore: number; maxScore: number }>;
  moduleAverages: Record<string, number>;
  weakest20: PageAuditResult[];
  strongest20: PageAuditResult[];
  riskCounts: {
    duplicate: Record<"Low" | "Medium" | "High", number>;
    thin: Record<"Low" | "Medium" | "High", number>;
    google: Record<"Very Low" | "Low" | "Medium" | "High", number>;
  };
};

function calcAvg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

export function runAudit(): AuditSummary {
  const pages = generatePages();

  const localityMap = new Map<string, LocalityEntry>();
  for (const l of LOCALITY_REGISTRY) localityMap.set(l.slug, l);
  for (const l of COMMERCIAL_LOCALITY_REGISTRY) localityMap.set(l.slug, l);

  const serviceMap = new Map<string, ServiceEntry>();
  for (const s of SERVICE_REGISTRY) serviceMap.set(s.slug, s);

  const results: PageAuditResult[] = [];

  for (const page of pages) {
    const locality = localityMap.get(page.locality);
    const service = serviceMap.get(page.service);
    if (!locality || !service) continue;
    results.push(scorePage(locality, service, page.urlPath));
  }

  const totalPages = results.length;
  const overallEngineScore = calcAvg(results.map((r) => r.overallScore));

  const byService: AuditSummary["byService"] = {};
  for (const r of results) {
    if (!byService[r.service]) {
      byService[r.service] = { count: 0, avgScore: 0, minScore: 100, maxScore: 0 };
    }
    const svc = byService[r.service];
    svc.count++;
    svc.minScore = Math.min(svc.minScore, r.overallScore);
    svc.maxScore = Math.max(svc.maxScore, r.overallScore);
  }
  for (const svcName of Object.keys(byService)) {
    const matching = results.filter((r) => r.service === svcName);
    byService[svcName].avgScore = calcAvg(matching.map((r) => r.overallScore));
  }

  const moduleAverages: Record<string, number> = {
    Title: calcAvg(results.map((r) => r.titleScore)),
    Meta: calcAvg(results.map((r) => r.metaScore)),
    Hero: calcAvg(results.map((r) => r.heroScore)),
    Intro: calcAvg(results.map((r) => r.introScore)),
    FAQ: calcAvg(results.map((r) => r.faqScore)),
    Testimonials: calcAvg(results.map((r) => r.testimonialsScore)),
    Brands: calcAvg(results.map((r) => r.brandsScore)),
    Pricing: calcAvg(results.map((r) => r.pricingScore)),
    "Why Choose": calcAvg(results.map((r) => r.whyChooseScore)),
    "Services Grid": calcAvg(results.map((r) => r.servicesGridScore)),
    "Internal Links": calcAvg(results.map((r) => r.internalLinksScore)),
  };

  const sorted = [...results].sort((a, b) => a.overallScore - b.overallScore);
  const weakest20 = sorted.slice(0, 20);
  const strongest20 = sorted.slice(-20).reverse();

  const riskCounts: AuditSummary["riskCounts"] = {
    duplicate: { Low: 0, Medium: 0, High: 0 },
    thin: { Low: 0, Medium: 0, High: 0 },
    google: { "Very Low": 0, Low: 0, Medium: 0, High: 0 },
  };
  for (const r of results) {
    riskCounts.duplicate[r.duplicateRisk]++;
    riskCounts.thin[r.thinContentRisk]++;
    riskCounts.google[r.googleRisk]++;
  }

  return { results, totalPages, overallEngineScore, byService, moduleAverages, weakest20, strongest20, riskCounts };
}

export function toCSV(results: PageAuditResult[]): string {
  const a = (nums: number[]) => calcAvg(nums);

  const header = [
    "URL","Service","Locality","City","ContentWeight","Affluence",
    "Title%","Meta%","Hero%","Intro%","FAQ%","Testimonials%","Brands%","Pricing%","WhyChoose%","ServicesGrid%","InternalLinks%",
    "Overall%","DuplicateRisk","ThinContentRisk","GoogleRisk","NeedsImprovement",
  ].join(",");

  const rows = results.map((r) =>
    [
      `"${r.url}"`, `"${r.service}"`, `"${r.locality}"`, `"${r.city}"`,
      r.contentWeight, `"${r.affluence}"`,
      r.titleScore, r.metaScore, r.heroScore, r.introScore, r.faqScore,
      r.testimonialsScore, r.brandsScore, r.pricingScore, r.whyChooseScore,
      r.servicesGridScore, r.internalLinksScore, r.overallScore,
      `"${r.duplicateRisk}"`, `"${r.thinContentRisk}"`, `"${r.googleRisk}"`, `"${r.needsImprovement}"`,
    ].join(",")
  );

  const summaryRows = [
    "",
    `"=== SUMMARY ==="`,
    `"Total Pages","${results.length}"`,
    `"Overall Engine Score","${a(results.map((r) => r.overallScore))}%"`,
    "",
    `"=== MODULE AVERAGES ==="`,
    `"Module","Avg Score"`,
    `"Title","${a(results.map((r) => r.titleScore))}%"`,
    `"Meta","${a(results.map((r) => r.metaScore))}%"`,
    `"Hero","${a(results.map((r) => r.heroScore))}%"`,
    `"Intro","${a(results.map((r) => r.introScore))}%"`,
    `"FAQ","${a(results.map((r) => r.faqScore))}%"`,
    `"Testimonials","${a(results.map((r) => r.testimonialsScore))}%"`,
    `"Brands","${a(results.map((r) => r.brandsScore))}%"`,
    `"Pricing","${a(results.map((r) => r.pricingScore))}%"`,
    `"Why Choose","${a(results.map((r) => r.whyChooseScore))}%"`,
    `"Services Grid","${a(results.map((r) => r.servicesGridScore))}%"`,
    `"Internal Links","${a(results.map((r) => r.internalLinksScore))}%"`,
  ];

  return [header, ...rows, ...summaryRows].join("\n");
}
