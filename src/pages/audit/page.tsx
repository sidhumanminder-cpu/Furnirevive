import { useState, useMemo } from "react";
import { runAudit, toCSV } from "@/lib/audit/audit-runner.ts";
import type { PageAuditResult } from "@/lib/audit/uniqueness-scorer.ts";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { DownloadIcon, FilterIcon, BarChart3Icon, FileTextIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";

type SortKey = "overallScore" | "service" | "locality" | "duplicateRisk" | "thinContentRisk";
type FilterRisk = "all" | "Low" | "Medium" | "High";

const RISK_COLORS: Record<string, string> = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  High: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  "Very Low": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
};

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 75 ? "text-green-600 dark:text-green-400"
    : score >= 60 ? "text-yellow-600 dark:text-yellow-400"
    : "text-red-600 dark:text-red-400";
  return <span className={`font-mono font-semibold ${color}`}>{score}%</span>;
}

function RiskBadge({ level }: { level: string }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${RISK_COLORS[level] ?? ""}`}>
      {level}
    </span>
  );
}

function downloadCSV(csvContent: string) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `furnirevive-uniqueness-audit-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function AuditPage() {
  const [sortKey, setSortKey] = useState<SortKey>("overallScore");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [filterService, setFilterService] = useState<string>("all");
  const [filterDuplicateRisk, setFilterDuplicateRisk] = useState<FilterRisk>("all");
  const [filterThinRisk, setFilterThinRisk] = useState<FilterRisk>("all");
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 100;

  const summary = useMemo(() => runAudit(), []);

  const services = useMemo(() => {
    const set = new Set(summary.results.map((r) => r.service));
    return Array.from(set).sort();
  }, [summary]);

  const filtered = useMemo(() => {
    let rows = summary.results;
    if (filterService !== "all") rows = rows.filter((r) => r.service === filterService);
    if (filterDuplicateRisk !== "all") rows = rows.filter((r) => r.duplicateRisk === filterDuplicateRisk);
    if (filterThinRisk !== "all") rows = rows.filter((r) => r.thinContentRisk === filterThinRisk);
    return [...rows].sort((a, b) => {
      const av = a[sortKey as keyof PageAuditResult];
      const bv = b[sortKey as keyof PageAuditResult];
      const cmp = typeof av === "number" && typeof bv === "number"
        ? av - bv
        : String(av).localeCompare(String(bv));
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [summary, filterService, filterDuplicateRisk, filterThinRisk, sortKey, sortDir]);

  const pageRows = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
    setPage(0);
  }

  function handleDownload() {
    const csv = toCSV(filtered.length < summary.results.length ? filtered : summary.results);
    downloadCSV(csv);
  }

  const googleRiskOrder = ["Very Low", "Low", "Medium", "High"] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1600px] mx-auto px-4 py-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3Icon className="w-6 h-6 text-primary" />
              Programmatic SEO Uniqueness Audit
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {summary.totalPages.toLocaleString()} pages analyzed across {services.length} services
            </p>
          </div>
          <Button onClick={handleDownload} className="gap-2 self-start">
            <DownloadIcon className="w-4 h-4" />
            Download CSV ({filtered.length === summary.results.length ? "all" : filtered.length} rows)
          </Button>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm text-muted-foreground font-normal">Overall Engine Score</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl font-bold"><ScoreBadge score={summary.overallEngineScore} /></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm text-muted-foreground font-normal">Total Pages</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl font-bold">{summary.totalPages.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm text-muted-foreground font-normal">Low Google Risk</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {((( summary.riskCounts.google["Very Low"] + summary.riskCounts.google["Low"]) / summary.totalPages) * 100).toFixed(0)}%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 pt-4 px-4">
              <CardTitle className="text-sm text-muted-foreground font-normal">Need Improvement</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {summary.results.filter((r) => r.needsImprovement !== "No").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two-column: by-service + module averages */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="px-4 pt-4 pb-2">
              <CardTitle className="text-sm font-semibold">By Service</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-muted-foreground text-xs border-b">
                    <th className="text-left pb-1">Service</th>
                    <th className="text-right pb-1">Pages</th>
                    <th className="text-right pb-1">Avg</th>
                    <th className="text-right pb-1">Min</th>
                    <th className="text-right pb-1">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(summary.byService).map(([svc, stat]) => (
                    <tr key={svc} className="border-b last:border-0">
                      <td className="py-1.5 pr-2 font-medium">{svc}</td>
                      <td className="text-right text-muted-foreground">{stat.count}</td>
                      <td className="text-right"><ScoreBadge score={stat.avgScore} /></td>
                      <td className="text-right text-muted-foreground">{stat.minScore}%</td>
                      <td className="text-right text-muted-foreground">{stat.maxScore}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="px-4 pt-4 pb-2">
              <CardTitle className="text-sm font-semibold">Module Uniqueness Averages</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-2">
                {Object.entries(summary.moduleAverages)
                  .sort((a, b) => a[1] - b[1])
                  .map(([mod, score]) => (
                    <div key={mod} className="flex items-center gap-2">
                      <span className="text-sm w-32 shrink-0">{mod}</span>
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${score >= 75 ? "bg-green-500" : score >= 55 ? "bg-yellow-500" : "bg-red-500"}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-10 text-right"><ScoreBadge score={score} /></span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk distribution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(["duplicate", "thin", "google"] as const).map((riskType) => (
            <Card key={riskType}>
              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className="text-sm font-semibold capitalize">
                  {riskType === "google" ? "Google Risk" : riskType === "duplicate" ? "Duplicate Risk" : "Thin Content Risk"}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-1.5">
                  {Object.entries(summary.riskCounts[riskType]).map(([level, count]) => (
                    <div key={level} className="flex items-center justify-between">
                      <RiskBadge level={level} />
                      <span className="text-sm font-mono">{count} <span className="text-muted-foreground text-xs">({((count / summary.totalPages) * 100).toFixed(0)}%)</span></span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top weakest / strongest */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="px-4 pt-4 pb-2">
              <CardTitle className="text-sm font-semibold text-red-600 dark:text-red-400">Weakest 20 Pages</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-1 text-sm">
                {summary.weakest20.map((r) => (
                  <div key={r.url} className="flex justify-between items-center gap-2 py-0.5">
                    <span className="text-muted-foreground font-mono text-xs truncate">{r.url}</span>
                    <ScoreBadge score={r.overallScore} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="px-4 pt-4 pb-2">
              <CardTitle className="text-sm font-semibold text-green-600 dark:text-green-400">Strongest 20 Pages</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="space-y-1 text-sm">
                {summary.strongest20.map((r) => (
                  <div key={r.url} className="flex justify-between items-center gap-2 py-0.5">
                    <span className="text-muted-foreground font-mono text-xs truncate">{r.url}</span>
                    <ScoreBadge score={r.overallScore} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full table */}
        <Card>
          <CardHeader className="px-4 pt-4 pb-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <FileTextIcon className="w-4 h-4" />
                All Pages ({filtered.length.toLocaleString()} of {summary.totalPages.toLocaleString()})
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Select value={filterService} onValueChange={(v) => { setFilterService(v); setPage(0); }}>
                  <SelectTrigger className="w-44 h-8 text-xs">
                    <SelectValue placeholder="All services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All services</SelectItem>
                    {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={filterDuplicateRisk} onValueChange={(v) => { setFilterDuplicateRisk(v as FilterRisk); setPage(0); }}>
                  <SelectTrigger className="w-40 h-8 text-xs">
                    <SelectValue placeholder="Duplicate risk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All duplicate risks</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterThinRisk} onValueChange={(v) => { setFilterThinRisk(v as FilterRisk); setPage(0); }}>
                  <SelectTrigger className="w-36 h-8 text-xs">
                    <SelectValue placeholder="Thin risk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All thin risks</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-0 pb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left px-4 py-2 cursor-pointer hover:text-foreground" onClick={() => toggleSort("service")}>Service {sortKey === "service" ? (sortDir === "asc" ? "↑" : "↓") : ""}</th>
                    <th className="text-left px-2 py-2 cursor-pointer hover:text-foreground" onClick={() => toggleSort("locality")}>Locality {sortKey === "locality" ? (sortDir === "asc" ? "↑" : "↓") : ""}</th>
                    <th className="text-left px-2 py-2">CW</th>
                    <th className="text-left px-2 py-2">Affluence</th>
                    <th className="text-right px-2 py-2">Title</th>
                    <th className="text-right px-2 py-2">Hero</th>
                    <th className="text-right px-2 py-2">Intro</th>
                    <th className="text-right px-2 py-2">FAQ</th>
                    <th className="text-right px-2 py-2">Tmls</th>
                    <th className="text-right px-2 py-2">Links</th>
                    <th className="text-right px-2 py-2 cursor-pointer hover:text-foreground font-semibold" onClick={() => toggleSort("overallScore")}>Overall {sortKey === "overallScore" ? (sortDir === "asc" ? "↑" : "↓") : ""}</th>
                    <th className="text-left px-2 py-2 cursor-pointer hover:text-foreground" onClick={() => toggleSort("duplicateRisk")}>Dup Risk</th>
                    <th className="text-left px-2 py-2 cursor-pointer hover:text-foreground" onClick={() => toggleSort("thinContentRisk")}>Thin Risk</th>
                    <th className="text-left px-2 py-2">Google Risk</th>
                    <th className="text-left px-2 py-2 min-w-[180px]">Needs Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((r) => (
                    <tr key={r.url} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-1.5 font-medium whitespace-nowrap">{r.service}</td>
                      <td className="px-2 py-1.5 text-muted-foreground whitespace-nowrap">{r.locality}</td>
                      <td className="px-2 py-1.5 text-center">{r.contentWeight}</td>
                      <td className="px-2 py-1.5 text-muted-foreground">{r.affluence}</td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.titleScore} /></td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.heroScore} /></td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.introScore} /></td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.faqScore} /></td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.testimonialsScore} /></td>
                      <td className="px-2 py-1.5 text-right"><ScoreBadge score={r.internalLinksScore} /></td>
                      <td className="px-2 py-1.5 text-right font-semibold"><ScoreBadge score={r.overallScore} /></td>
                      <td className="px-2 py-1.5"><RiskBadge level={r.duplicateRisk} /></td>
                      <td className="px-2 py-1.5"><RiskBadge level={r.thinContentRisk} /></td>
                      <td className="px-2 py-1.5"><RiskBadge level={r.googleRisk} /></td>
                      <td className="px-2 py-1.5 text-muted-foreground">{r.needsImprovement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 pt-3">
                <span className="text-xs text-muted-foreground">
                  Page {page + 1} of {totalPages} · {filtered.length} rows
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" disabled={page === 0} onClick={() => setPage(0)}>First</Button>
                  <Button variant="ghost" size="sm" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>Prev</Button>
                  <Button variant="ghost" size="sm" disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>Next</Button>
                  <Button variant="ghost" size="sm" disabled={page >= totalPages - 1} onClick={() => setPage(totalPages - 1)}>Last</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader className="px-4 pt-4 pb-2">
            <CardTitle className="text-sm font-semibold">Engine-Level Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 text-sm space-y-2 text-muted-foreground">
            <p><strong className="text-foreground">1. Brands &amp; Services Grid (avg ~15%)</strong> — These modules are 100% static per service. Add locality-aware brand notes (e.g. "commonly found in [locality]") or rotate a short locality-contextual intro sentence to lift these scores.</p>
            <p><strong className="text-foreground">2. Pricing (avg ~14%)</strong> — Pricing rows are static. Consider adding a locality-specific demand note (e.g. "high-demand area — book 24h in advance") for premium localities to differentiate.</p>
            <p><strong className="text-foreground">3. Corporate FAQ variants (3 total)</strong> — 117 commercial localities share only 3 FAQ answer sets (contentWeight % 3). Adding 2 more variant sets (5 total) would reduce FAQ collisions significantly.</p>
            <p><strong className="text-foreground">4. Testimonials (avg ~55–70%)</strong> — Residential pool is 12 entries; corporate chair is 8; furniture is 6. Expanding each pool by 6–8 entries would meaningfully reduce cross-page repetition.</p>
            <p><strong className="text-foreground">5. Residential hero (avg ~75%)</strong> — Consider adding a landmark-driven hero subheadline variant for the ~30% of localities that lack landmarks, to avoid falling back to the generic template.</p>
            <p><strong className="text-foreground">Google Helpful Content verdict</strong> — The engine <strong className="text-foreground">passes</strong> the threshold. Title, meta, intro, internal links, and FAQs are meaningfully locality-specific. The static modules (brands, pricing, why-choose) are acceptable as supporting structure. Priority: expand FAQ variants and testimonials pools.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
