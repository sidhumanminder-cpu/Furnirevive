import type { KitchenProcessSectionData } from "@/lib/content-engine/index.ts";

export default function KitchenProcessSection({
  section,
}: {
  section: KitchenProcessSectionData;
}) {
  const { heading, subheading, steps } = section.props;
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="relative flex-none">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
