import type { KitchenCtaSectionData } from "@/lib/content-engine/index.ts";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function KitchenCtaSection({ section }: { section: KitchenCtaSectionData }) {
  const { heading, subheading, phoneNumber, whatsappNumber } = section.props;
  return (
    <section className="bg-primary text-primary-foreground py-14">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">{heading}</h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-white/90 transition-opacity"
          >
            <PhoneCall className="h-5 w-5" />
            Call for Free Quote
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'd like a free modular kitchen design consultation`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-7 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
