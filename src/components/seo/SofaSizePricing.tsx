import { IndianRupee, MessageCircle, ArrowRight } from "lucide-react";
import { SOFA_SIZE_PRICES } from "@/lib/seoConfigs/pricing-data.ts";
import { WHATSAPP_NUMBER, BRAND_NAME } from "@/lib/seo-constants.ts";

type SofaSizePricingProps = { locality: string };

export default function SofaSizePricing({ locality }: SofaSizePricingProps) {
  const message = encodeURIComponent(`Hi ${BRAND_NAME}, I need a sofa repair quote in ${locality}`);

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <IndianRupee className="h-3.5 w-3.5" />
            Pricing by size
          </span>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Sofa Repair Cost in {locality} by Sofa Size
          </h2>
        </div>

        <div className="mb-4 overflow-hidden rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th scope="col" className="px-4 py-3 text-left font-semibold sm:px-5">Sofa Size</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold sm:px-5">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {SOFA_SIZE_PRICES.map((item, idx) => (
                <tr key={item.size} className={idx % 2 === 0 ? "bg-secondary/20" : "bg-background"}>
                  <td className="px-4 py-3 font-medium text-foreground sm:px-5">{item.size}</td>
                  <td className="px-4 py-3 font-semibold text-primary sm:px-5">{item.startingPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">
          Starting prices for minor repairs. Final quote after a free doorstep inspection, based on sofa size, material and extent of damage. Send photos on WhatsApp for a quote.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-green-600 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100 dark:border-green-500 dark:bg-green-950/40 dark:text-green-400 dark:hover:bg-green-950/60"
          aria-label={`WhatsApp ${BRAND_NAME} for a sofa repair quote`}
        >
          <MessageCircle className="h-4 w-4" />
          Get a quote on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
