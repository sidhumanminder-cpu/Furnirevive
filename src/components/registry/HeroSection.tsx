import { Link } from "react-router-dom";
import { motion, type Variants } from "motion/react";
import { Phone, MessageCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { BUSINESS } from "@/lib/business-config.ts";
import type { HeroSectionData } from "@/lib/content-engine/index.ts";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroSection({ section, hideBookOnline }: { section: HeroSectionData; hideBookOnline?: boolean }) {
  const { headline, subheadline, responseTime, trustBadges, imageUrl, imageAlt } = section.props;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left: text + CTAs */}
          <motion.div variants={container} initial="hidden" animate="show">
            {responseTime ? (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <Clock className="size-4" />
                Response time: {responseTime}
              </motion.div>
            ) : null}

            <motion.h1
              variants={item}
              className="mt-5 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {subheadline}
            </motion.p>

            {trustBadges.length > 0 ? (
              <motion.ul variants={item} className="mt-6 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    <ShieldCheck className="size-4 text-primary" />
                    {badge}
                  </li>
                ))}
              </motion.ul>
            ) : null}

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row flex-wrap">
              <Button asChild size="lg" className="cursor-pointer">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Phone className="size-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#1ebe5d] text-white">
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </a>
              </Button>
              {!hideBookOnline && (
                <Button asChild size="lg" variant="secondary" className="cursor-pointer">
                  <Link to="/book">
                    <ArrowRight className="size-4" />
                    Book Online
                  </Link>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right: hero image */}
          {imageUrl ? (
            <motion.figure
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full rounded-xl shadow-lg object-cover aspect-video"
              />
              <figcaption className="sr-only">{imageAlt}</figcaption>
            </motion.figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
