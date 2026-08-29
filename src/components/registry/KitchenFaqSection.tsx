import type { KitchenFaqSectionData } from "@/lib/content-engine/index.ts";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.ts";

export default function KitchenFaqSection({ section }: { section: KitchenFaqSectionData }) {
  const { heading, faqs } = section.props;
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-muted/40 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{heading}</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-sm cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform shrink-0 ml-4",
                    open === i && "rotate-180",
                  )}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
