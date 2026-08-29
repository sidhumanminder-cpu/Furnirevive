/**
 * Shared conversion elements for editorial kitchen guide pages
 * (dimension guides, BHK guides, comparison guides)
 */
import { Phone, MessageCircle, ShieldCheck, IndianRupee, CalendarCheck } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

// ─── Stats Bar ────────────────────────────────────────────────────────────────

export function KitchenStatsBar() {
  return (
    <div className="bg-amber-700 text-white py-5 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">280+</p>
          <p className="text-xs text-amber-100 mt-0.5">Kitchens Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold">12 Days</p>
          <p className="text-xs text-amber-100 mt-0.5">Avg. Installation</p>
        </div>
        <div>
          <p className="text-2xl font-bold">10-Year</p>
          <p className="text-xs text-amber-100 mt-0.5">Structural Warranty</p>
        </div>
      </div>
    </div>
  );
}

// ─── Why Choose FurniRevive (compact 3-card) ──────────────────────────────────

const WHY_ITEMS = [
  {
    icon: CalendarCheck,
    title: "Free Design Consultation",
    desc: "Our designer visits your home, takes measurements and creates a detailed 3D layout plan — before you commit.",
  },
  {
    icon: IndianRupee,
    title: "Fixed Pricing — No Surprises",
    desc: "You receive a written, itemised quote before manufacturing begins. No hidden charges at handover.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Structural Warranty",
    desc: "Every cabinet carcass comes with a 10-year structural warranty. We stand behind our manufacturing quality.",
  },
] as const;

export function KitchenWhyChoose() {
  return (
    <section className="py-10 md:py-14 px-4 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6 text-center">Why Homeowners Choose FurniRevive</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {WHY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="w-9 h-9 rounded-lg bg-amber-700 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Mid-page CTA Strip ───────────────────────────────────────────────────────

type MidCtaProps = { message?: string; whatsappText?: string };

export function KitchenMidCta({ message = "Hi, I need a modular kitchen design consultation", whatsappText }: MidCtaProps) {
  const waText = whatsappText ?? message;
  return (
    <div className="py-10 px-4 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base font-semibold text-foreground mb-4">
          Ready to get started? Get a free home visit and 3D design plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4" /> Call for Free Consultation
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
