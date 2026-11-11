import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { BUSINESS } from "@/lib/business-config.ts";
import type { HubEditorial } from "@/lib/hub-editorial/index.ts";
import { SERVICE_HUB_CONFIG, type HubTarget } from "../_lib/hub-config.ts";

type Props = { target: HubTarget; editorial: HubEditorial };

const WRAP = "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8";
const H2 = "text-2xl md:text-3xl font-serif font-bold tracking-tight";

/** Two-paragraph, zone-specific introduction. */
export function EditorialIntro({ target, editorial }: Props) {
  const config = SERVICE_HUB_CONFIG[target.service];
  return (
    <section className="pt-10 lg:pt-14">
      <div className={WRAP}>
        <h2 className={H2}>About {config.noun} across {target.area.label}</h2>
        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
          {editorial.intro.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

/** One block per sub-area of the zone. */
export function EditorialAreas({ target, editorial }: Props) {
  return (
    <section className="py-12 lg:py-16 bg-muted/40">
      <div className={WRAP}>
        <h2 className={H2}>Areas we cover in {target.area.label}</h2>
        <div className="mt-6 space-y-6">
          {editorial.areaNotes.map((n) => (
            <div key={n.title}>
              <h3 className="font-semibold text-lg">{n.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Common problems (or, for upholstery, the main decisions) for this service in this zone. */
export function EditorialProblems({ target, editorial }: Props) {
  const config = SERVICE_HUB_CONFIG[target.service];
  const heading =
    target.service === "sofa-upholstery"
      ? `What to decide before ${config.noun} in ${target.area.label}`
      : `Common ${config.noun} problems in ${target.area.label}`;
  return (
    <section className="py-12 lg:py-16">
      <div className={WRAP}>
        <h2 className={H2}>{heading}</h2>
        <div className="mt-6 space-y-6">
          {editorial.problems.map((p) => (
            <div key={p.title}>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Numbered five-step process. */
export function EditorialProcess({ editorial }: { editorial: HubEditorial }) {
  return (
    <section className="py-12 lg:py-16 bg-muted/40">
      <div className={WRAP}>
        <h2 className={H2}>How it works</h2>
        <ol className="mt-6 space-y-4">
          {editorial.process.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{i + 1}</span>
              <h3 className="pt-1 font-normal text-muted-foreground leading-relaxed">{step}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Closing call to action; only facts that already appear across the site. */
export function EditorialBook({ target }: { target: HubTarget }) {
  const config = SERVICE_HUB_CONFIG[target.service];
  return (
    <section className="pb-12 lg:pb-16">
      <div className={WRAP}>
        <Card>
          <CardContent className="px-6 text-center">
            <h2 className={H2}>Book {config.noun} in {target.area.label}</h2>
            <p className="mt-3 text-muted-foreground">
              Free doorstep inspection, a fixed quote before any work begins and a 6-month warranty. Call {BUSINESS.displayPhone} to book.
            </p>
            <a href={`tel:${BUSINESS.phone}`} className="mt-5 inline-block cursor-pointer">
              <Button size="lg" className="gap-2 rounded-full"><Phone className="size-4" />Call {BUSINESS.displayPhone}</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
