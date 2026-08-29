import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I need furniture repair in Delhi NCR. Can I get a free quote?")}`;

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground text-balance">
            Contact FurniRevive
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Book a doorstep furniture repair now. Same-day service available across Delhi, Noida, Gurgaon, Ghaziabad &amp; Faridabad. Free inspection on first visit.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center pt-2">
            <Link to="/book">
              <Button
                size="lg"
                className="text-base px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              >
                Contact FurniRevive Now
                <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button
                size="lg"
                className="text-base px-8 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 gap-2"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-base px-8 gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]"
              >
                <MessageCircle className="size-4" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
