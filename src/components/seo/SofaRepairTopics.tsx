import { Link } from "@/lib/router-compat.tsx";
import { Phone, MessageCircle } from "lucide-react";
import { PRICING_ITEMS, REPAIR_TIMES } from "@/lib/seoConfigs/pricing-data.ts";
import {
  SOFA_SYMPTOMS,
  SOFA_TOPICS,
  SOFA_RELATED_LINKS,
  SOFA_COST_FACTORS,
  buildSofaFaqs,
} from "@/lib/seoConfigs/sofa-service-topics.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER, BRAND_NAME } from "@/lib/seo-constants.ts";

interface SofaRepairTopicsProps {
  /** Display name of the area, e.g. "Alaknanda" */
  locality: string;
  /** City key from getLocalityInfo(slug).cityKey; falls back to Delhi links */
  cityKey?: string;
}

const priceOf = (key: string): string | null =>
  PRICING_ITEMS.find((p) => p.service === key)?.startingPrice ?? null;
const timeOf = (key: string): string | null =>
  REPAIR_TIMES.find((t) => t.service === key)?.time ?? null;

export default function SofaRepairTopics({ locality, cityKey }: SofaRepairTopicsProps) {
  const faqs = buildSofaFaqs({
    locality,
    cityKey,
    upholsteryPrice: priceOf("Full Upholstery"),
    fabricPrice: priceOf("Fabric Replacement"),
    upholsteryTime: timeOf("Full Upholstery"),
  });
  const related = SOFA_RELATED_LINKS[cityKey ?? "delhi"] ?? SOFA_RELATED_LINKS.delhi;
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Sofa repairs we do in {locality}
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Whatever is wrong with your sofa, the repair is done at your home by a trained technician,
          with a free inspection first and a 6-month warranty after. Find your problem below.
        </p>
        {cityKey === "gurgaon" && (
          <p className="mt-2 max-w-3xl text-muted-foreground">
            We repair sofas at home across Gurgaon (also spelled Gurugram), including {locality}.
          </p>
        )}

        <h3 className="mt-10 font-serif text-2xl font-semibold text-foreground">
          What is wrong with your sofa?
        </h3>
        <div className="mt-4 overflow-hidden rounded-lg border">
          {SOFA_SYMPTOMS.map((s) => (
            <div
              key={s.symptom}
              className="grid gap-1 border-b px-4 py-3 last:border-b-0 sm:grid-cols-[1.6fr_1.2fr_auto] sm:items-center sm:gap-4"
            >
              <span className="text-foreground">{s.symptom}</span>
              <span className="text-muted-foreground">{s.fix}</span>
              <span className="font-medium text-primary">
                {priceOf(s.priceKey) ? `from ${priceOf(s.priceKey)}` : ""}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SOFA_TOPICS.map((t) => (
            <article key={t.id} className="rounded-lg border p-5">
              <h3 className="font-serif text-xl font-semibold text-foreground">{t.heading}</h3>
              <p className="mt-2 text-muted-foreground">{t.body}</p>
              <p className="mt-3 text-sm font-medium text-primary">
                {priceOf(t.priceKey) ? `From ${priceOf(t.priceKey)}` : ""}
                {priceOf(t.priceKey) && timeOf(t.timeKey) ? " · " : ""}
                {timeOf(t.timeKey) ? `usually ${timeOf(t.timeKey)}` : ""}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">
          Sofa fabric change and re-upholstery cost in {locality}
        </h3>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {priceOf("Full Upholstery") ? `Full re-upholstery starts from ${priceOf("Full Upholstery")}` : "Full re-upholstery is quoted after inspection"}
          {priceOf("Fabric Replacement") ? ` and fabric replacement from ${priceOf("Fabric Replacement")}` : ""}.
          {" "}For a 3-seater in budget fabric, a full re-upholstery is typically {"₹10,000 to ₹16,000"}. Premium fabric, leather, a larger sofa or new foam adds to that. The price depends on:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
          {SOFA_COST_FACTORS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">
          Sofa repair questions in {locality}
        </h3>
        <div className="mt-4 divide-y rounded-lg border">
          {faqs.map((f) => (
            <details key={f.q} className="group px-4 py-3">
              <summary className="cursor-pointer font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <h3 className="mt-12 font-serif text-2xl font-semibold text-foreground">
          More repair services near {locality}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-3">
          {related.map((l) => (
            <li key={l.slug}>
              <Link
                to={`/${l.slug}`}
                className="inline-block cursor-pointer rounded-full border px-4 py-1.5 text-sm text-foreground hover:bg-secondary/30"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20${BRAND_NAME}%2C%20I%20need%20a%20sofa%20repair%20quote`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp a photo for a free estimate
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-md border px-5 py-2.5 font-medium text-foreground"
          >
            <Phone className="h-4 w-4" />
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}
