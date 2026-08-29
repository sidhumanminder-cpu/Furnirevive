import { motion } from "motion/react";
import {
  IndianRupee,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Info,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { PRICING_ITEMS, WHATS_INCLUDED, COST_FACTORS } from "@/lib/seoConfigs/pricing-data.ts";
import { PHONE_NUMBER, WHATSAPP_NUMBER, BRAND_NAME } from "@/lib/seo-constants.ts";

interface PricingSectionProps {
  locality: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

function SameDayBadge({ value }: { value: boolean | "usually" }) {
  if (value === true) {
    return <CheckCircle2 className="h-5 w-5 text-green-600" />;
  }
  return (
    <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
      Usually
    </span>
  );
}

export default function PricingSection({ locality }: PricingSectionProps) {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <IndianRupee className="h-3.5 w-3.5" />
            Pricing
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Sofa Repair Cost in {locality}
          </h2>
        </motion.div>

        {/* Pricing Table — desktop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 hidden overflow-hidden rounded-xl border md:block"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-3.5 text-left font-semibold">Repair Type</th>
                <th className="px-5 py-3.5 text-left font-semibold">Starting Price</th>
                <th className="px-5 py-3.5 text-left font-semibold">Typical Time</th>
                <th className="px-5 py-3.5 text-center font-semibold">Same Day</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_ITEMS.map((item, idx) => (
                <tr
                  key={item.service}
                  className={idx % 2 === 0 ? "bg-secondary/20" : "bg-background"}
                >
                  <td className="px-5 py-3 font-medium text-foreground">{item.service}</td>
                  <td className="px-5 py-3 text-primary font-semibold">{item.startingPrice}</td>
                  <td className="px-5 py-3 text-muted-foreground">{item.timeEstimate}</td>
                  <td className="px-5 py-3 text-center">
                    <span className="inline-flex items-center justify-center">
                      <SameDayBadge value={item.sameDay} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Pricing Cards — mobile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 grid gap-3 md:hidden"
        >
          {PRICING_ITEMS.map((item) => (
            <Card key={item.service} className="py-4">
              <CardContent className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-foreground">{item.service}</p>
                  <SameDayBadge value={item.sameDay} />
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-primary">{item.startingPrice}</span>
                  <span className="text-muted-foreground">{item.timeEstimate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-12 text-center text-sm text-muted-foreground"
        >
          Prices shown are starting estimates. Final pricing depends on inspection, material
          selection and extent of repair.
        </motion.p>

        {/* What's Included + Cost Factors */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 grid gap-8 md:grid-cols-2"
        >
          {/* What's Included */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Cost Factors */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                Factors Affecting Cost
              </h3>
              <ul className="space-y-3">
                {COST_FACTORS.map((factor) => (
                  <li key={factor.label} className="flex items-start gap-2.5">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <span className="text-sm font-bold text-foreground">{factor.label}</span>
                      <span className="text-sm text-muted-foreground"> — {factor.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Repair vs Replace Savings Callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.08] p-6 sm:p-8 lg:p-10"
        >
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Repair Instead of Replace — Save Up to ₹75,000
          </h3>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <StatCard label="Avg Repair Cost" value="₹5,000–8,000" />
            <StatCard label="New Sofa" value="₹35,000–80,000" />
            <StatCard label="Typical Savings" value="70–85%" />
          </div>

          <div className="text-center">
            <p className="mb-5 text-base font-medium text-foreground">
              Get a Free Inspection — No Obligation
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label={`Call ${BRAND_NAME}`}
              >
                <Phone className="h-4 w-4" />
                Call Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20${BRAND_NAME}%2C%20I%20need%20a%20sofa%20repair%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-green-600 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100 dark:border-green-500 dark:bg-green-950/40 dark:text-green-400 dark:hover:bg-green-950/60"
                aria-label={`WhatsApp ${BRAND_NAME}`}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="py-4 text-center">
      <CardContent>
        <p className="text-lg font-bold text-primary sm:text-xl">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
