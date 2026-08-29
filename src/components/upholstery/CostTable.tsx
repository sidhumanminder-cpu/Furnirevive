import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { UPHOLSTERY_PRICING } from "@/lib/upholsteryConfigs/upholsteryPricing.ts";
import { WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

type CostTableProps = {
  localityName?: string;
};

export default function CostTable({ localityName }: CostTableProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like a sofa upholstery quote${localityName ? ` in ${localityName}` : ""}. Please let me know the price.`
  )}`;

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Sofa Upholstery Cost{localityName ? ` in ${localityName}` : ""}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Indicative starting prices. Final cost depends on fabric choice, foam density,
            and sofa dimensions. Always free to inspect.
          </p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden mb-6">
          <div className="hidden sm:grid grid-cols-4 bg-muted/60 px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <span className="col-span-2">Sofa Type</span>
            <span>Starting Price</span>
            <span>Timeline</span>
          </div>
          <div className="divide-y divide-border">
            {UPHOLSTERY_PRICING.map((row) => (
              <div
                key={row.sofaType}
                className="grid sm:grid-cols-4 gap-1 sm:gap-0 px-5 py-4 hover:bg-muted/20 transition-colors"
              >
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-foreground">{row.sofaType}</p>
                  {row.notes && (
                    <p className="text-xs text-muted-foreground mt-0.5">{row.notes}</p>
                  )}
                </div>
                <div className="sm:flex sm:items-center">
                  <span className="text-sm font-semibold text-primary">{row.priceDisplay}</span>
                </div>
                <div className="sm:flex sm:items-center">
                  <span className="text-xs text-muted-foreground">{row.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-primary/8 border border-primary/20 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Get an exact quote for your sofa</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              WhatsApp us photos — we reply within 30 minutes during working hours.
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
              <MessageCircle className="size-4" />
              WhatsApp for Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
