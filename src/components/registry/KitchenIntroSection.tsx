import type { KitchenIntroSectionData } from "@/lib/content-engine/index.ts";
import { CheckCircle2 } from "lucide-react";

export default function KitchenIntroSection({ section }: { section: KitchenIntroSectionData }) {
  const { heading, paragraphs, keyFacts } = section.props;
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="bg-muted rounded-xl p-5">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
            Key Facts
          </h3>
          <ul className="space-y-2">
            {keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
