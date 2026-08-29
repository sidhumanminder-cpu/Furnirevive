import { motion } from "motion/react";
import { Users, MapPin, IndianRupee, ShieldCheck, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "Experienced FurniRevive Carpenters",
    description:
      "Every FurniRevive technician has 5+ years of hands-on furniture repair experience.",
  },
  {
    icon: MapPin,
    title: "Doorstep Service Across Delhi NCR",
    description:
      "We come to you — Delhi, Noida, Gurgaon, Ghaziabad & Faridabad. No transport hassle.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Transparent quotes starting at ₹599. Save 50-70% compared to buying new furniture.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted FurniRevive Professionals",
    description:
      "Verified, background-checked experts with a 6-month service warranty on every repair.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description:
      "Same-day service available when you book before noon. On-time, every time.",
  },
] as const;

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            The FurniRevive Difference
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Why Choose FurniRevive
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Thousands of homeowners across Delhi NCR trust FurniRevive for
            quality furniture repair. Here{"'"}s why.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
