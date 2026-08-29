import { motion } from "motion/react";
import { CalendarCheck, Wrench, Truck, ThumbsUp } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book Online",
    description: "Choose your service and pick a convenient date and time slot.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Expert Inspection",
    description: "Our craftsman visits, inspects the furniture and provides a quote.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Repair & Restore",
    description: "Skilled repair at your home or our workshop with quality materials.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Quality Check",
    description: "Thorough inspection and satisfaction guarantee before handover.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/50">
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
            Simple Process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            How Furniture Repair Works
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Getting your furniture repaired in Delhi NCR is easy. Just four simple steps from booking to handover.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Connector line for desktop */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <div className="size-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-5 group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                  <item.icon className="size-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 size-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
