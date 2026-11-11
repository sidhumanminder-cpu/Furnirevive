import type { LocalContext } from "@/lib/seoConfigs/local-context.ts";

export default function LocalContextBlock({ heading, paragraphs, faqs }: LocalContext) {
  return (
    <section className="py-10 lg:py-14" aria-label={heading}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{heading}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.question} className="rounded-lg border bg-card p-4">
              <summary className="cursor-pointer font-medium">{f.question}</summary>
              <p className="mt-2 text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
