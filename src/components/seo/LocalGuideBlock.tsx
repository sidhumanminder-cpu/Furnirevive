import type { LocalGuide } from "@/lib/seoConfigs/local-guide.ts";

export default function LocalGuideBlock(g: LocalGuide) {
  return (
    <section className="py-10 lg:py-14" aria-label={g.heading}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{g.heading}</h2>
        <p className="text-muted-foreground leading-relaxed">{g.intro}</p>

        <h3 className="text-xl font-semibold mt-8 mb-3">{g.problemsHeading}</h3>
        <ul className="space-y-3">
          {g.problems.map((p) => (
            <li key={p.title} className="rounded-lg border bg-card p-4">
              <p className="font-medium">{p.title}</p>
              <p className="mt-1 text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">{g.stepsHeading}</h3>
        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
          {g.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <h3 className="text-xl font-semibold mt-8 mb-3">{g.decideHeading}</h3>
        <p className="text-muted-foreground leading-relaxed">{g.decide}</p>

        <h3 className="text-xl font-semibold mt-8 mb-3">{g.careHeading}</h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {g.care.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
