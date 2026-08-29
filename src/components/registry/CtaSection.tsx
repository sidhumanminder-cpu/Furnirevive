import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import type { CtaSectionData } from "@/lib/content-engine/index.ts";

export default function CtaSection({ section }: { section: CtaSectionData }) {
  const { heading, subheading, whatsappNumber } = section.props;
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-2xl md:text-3xl font-bold text-primary-foreground">
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              {subheading}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="cursor-pointer">
                <Link to="/book">
                  <Calendar className="size-4" />
                  Book Free Inspection
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="cursor-pointer bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
