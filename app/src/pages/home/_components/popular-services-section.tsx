import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Wrench, ChevronRight } from "lucide-react";

const POPULAR_SERVICES = [
  { label: "Sofa Spring Repair Delhi", href: "/sofa-spring-repair-delhi", desc: "Fix broken or sagging springs" },
  { label: "Sofa Foam Replacement Delhi", href: "/sofa-foam-replacement-delhi", desc: "Restore comfort with new foam" },
  { label: "Sofa Repair Cost Delhi", href: "/sofa-repair-cost-delhi", desc: "Complete pricing guide 2026" },
  { label: "Sofa Repair Mayur Vihar", href: "/sofa-repair-mayur-vihar", desc: "East Delhi doorstep service" },
  { label: "Sofa Repair Lajpat Nagar", href: "/sofa-repair-lajpat-nagar", desc: "South Delhi doorstep service" },
];

export default function PopularServicesSection() {
  return (
    <section className="py-14 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-2">
            Popular Sofa Repair Services
          </h2>
          <p className="text-muted-foreground mb-8">
            Expert sofa repair across Delhi NCR — explore our most requested services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {POPULAR_SERVICES.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="group flex items-start gap-3 bg-card rounded-xl p-4 border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {service.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{service.desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
