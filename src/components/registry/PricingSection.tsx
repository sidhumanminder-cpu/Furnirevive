import { Check, Info, Zap } from "lucide-react";
import type { PricingSectionData, PricingItemData } from "@/lib/content-engine/index.ts";

function SameDayBadge({ sameDay }: { sameDay: PricingItemData["sameDay"] }) {
  if (sameDay === false) {
    return <span className="text-sm text-muted-foreground">On schedule</span>;
  }
  const label = sameDay === "usually" ? "Usually same-day" : "Same-day";
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
      <Zap className="size-3" />
      {label}
    </span>
  );
}

export default function PricingSection({ section }: { section: PricingSectionData }) {
  const { heading, items, whatsIncluded, costFactors, showAffluenceNote, affluenceNote } =
    section.props;

  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2>

        {/* Pricing table */}
        {items.length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Starting price</th>
                    <th className="px-4 py-3 font-semibold">Time estimate</th>
                    <th className="px-4 py-3 font-semibold">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {items.map((item) => (
                    <tr key={item.service} className="align-middle">
                      <td className="px-4 py-3 font-medium text-foreground">{item.service}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{item.startingPrice}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.timeEstimate}</td>
                      <td className="px-4 py-3">
                        <SameDayBadge sameDay={item.sameDay} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* What's included */}
          {whatsIncluded.length > 0 ? (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">What&apos;s included</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((included) => (
                  <li key={included} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3.5 text-primary" />
                    </span>
                    <span className="text-sm text-muted-foreground">{included}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Cost factors */}
          {costFactors.length > 0 ? (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">What affects the price</h3>
              <ul className="space-y-4">
                {costFactors.map((factor) => (
                  <li key={factor.label}>
                    <p className="text-sm font-semibold text-foreground">{factor.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{factor.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {/* Affluence note */}
        {showAffluenceNote && affluenceNote ? (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <Info className="mt-0.5 size-5 shrink-0 text-primary" />
            <p className="text-sm text-foreground">{affluenceNote}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
