import type { LocalNotes } from "@/lib/seoConfigs/local-notes.ts";

export default function LocalNotesBlock({ heading, paragraphs }: LocalNotes) {
  return (
    <section className="py-10 lg:py-14" aria-label={heading}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">{heading}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
