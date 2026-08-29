import { Check } from "lucide-react";
import type { IntroSectionData } from "@/lib/content-engine/index.ts";

export default function IntroSection({ section }: { section: IntroSectionData }) {
  const { heading, paragraphs, keyFacts } = section.props;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2>

        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {keyFacts.length > 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {keyFacts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3.5 text-primary" />
                </span>
                <span className="text-sm font-medium text-foreground">{fact}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
