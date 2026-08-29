import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Clock, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

const TRUST_BADGES = [
  { icon: Star, label: "4.8 Star Rated", highlight: true },
  { icon: Clock, label: "Same Day Service Available", highlight: false },
  { icon: ShieldCheck, label: "6 Month Service Warranty", highlight: false },
] as const;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I need furniture repair in Delhi NCR. Can I get a free quote?")}`;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-secondary/30">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Warm radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              Trusted Furniture Repair Across Delhi NCR
            </motion.p>

            {/* H1 — Primary SEO heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-balance">
              FurniRevive – Sofa Repair &amp; Furniture Repair Experts in{" "}
              <span className="text-primary">Delhi NCR</span>
            </h1>

            {/* Subtext — keyword-rich */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              FurniRevive provides professional sofa repair, furniture repair,
              polishing, and carpenter services at home. Trusted by homeowners
              across Delhi NCR.
            </p>

            {/* CTA Buttons — Book, Call, WhatsApp */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Link to="/book">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 rounded-full font-semibold shadow-lg shadow-primary/20 group"
                >
                  Book FurniRevive Service
                  <ArrowRight className="size-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base px-8 py-6 rounded-full font-semibold border border-border gap-2"
                >
                  <Phone className="size-4" />
                  Call Now
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 rounded-full font-semibold gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-4"
            >
              {TRUST_BADGES.map(({ icon: Icon, label, highlight }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon
                    className={`size-4 text-primary ${highlight ? "fill-primary" : ""}`}
                  />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Before & After image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 ring-1 ring-border/40">
              <img
                src="https://cdn.hercules.app/file_mh8ghu631M6FtY4yzf5ys8Fw"
                alt="Before and after furniture repair in Delhi NCR — damaged sofa transformed to brand new by FurniRevive"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Before / After labels */}
              <div className="absolute top-4 inset-x-4 flex justify-between pointer-events-none">
                <span className="bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Before
                </span>
                <span className="bg-emerald-600/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm">
                  After
                </span>
              </div>
            </div>

            {/* Floating review card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-card rounded-xl p-3.5 sm:p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Star className="size-5 text-primary fill-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-3 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30"}`}
                      />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-foreground">
                      4.8
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    10,000+ repairs in Delhi NCR
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
