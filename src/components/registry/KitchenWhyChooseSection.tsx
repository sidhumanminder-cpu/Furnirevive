import type { KitchenWhyChooseSectionData } from "@/lib/content-engine/index.ts";

export default function KitchenWhyChooseSection({
  section,
}: {
  section: KitchenWhyChooseSectionData;
}) {
  const { heading, cards } = section.props;
  return (
    <section className="bg-stone-900 py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl bg-stone-800 border border-stone-700 p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{card.title}</h3>
              <p className="text-stone-300 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
