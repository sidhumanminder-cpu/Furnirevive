import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sofa, Armchair, TreePine, BedDouble, RockingChair, Hammer, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";

const SERVICES = [
  {
    icon: Sofa,
    title: "Sofa Repair",
    description: "Cushion re-stuffing, fabric replacement, frame repair, spring fixing and complete sofa restoration in Delhi NCR.",
    image: "https://cdn.hercules.app/file_kaB46VZlssX46f7kKs65EQPh",
    price: "Starting at \u20B9999",
    href: "/sofa-repair-delhi",
  },
  {
    icon: Armchair,
    title: "Recliner Repair",
    description: "Mechanism repair, leather restoration, motor fixing, and complete recliner overhaul services across Delhi NCR.",
    image: "https://cdn.hercules.app/file_IXcUspEexEHYaGjoJTQpNZhX",
    price: "Starting at \u20B91,499",
    href: "/furniture-repair-delhi",
  },
  {
    icon: TreePine,
    title: "Wood Polish",
    description: "French polish, melamine finish, PU coating, scratch removal and wood surface restoration at your doorstep.",
    image: "https://cdn.hercules.app/file_Aqfpjvfs8zk3EI2wsJdhoZ3y",
    price: "Starting at \u20B9799",
    href: "/furniture-polish-delhi",
  },
  {
    icon: BedDouble,
    title: "Bed Repair",
    description: "Headboard repair, slat replacement, frame reinforcement and complete bed frame restoration in Delhi NCR.",
    image: "https://cdn.hercules.app/file_DV22bpL9oFTgHwWl8Ys7RDWE",
    price: "Starting at \u20B91,199",
    href: "/furniture-repair-delhi",
  },
  {
    icon: RockingChair,
    title: "Chair Repair",
    description: "Dining chairs, office chairs, wooden chairs — leg fixing, re-upholstery and full restoration in Delhi NCR.",
    image: "https://cdn.hercules.app/file_1WCXexGNlS7CZPv3EFXf2CBL",
    price: "Starting at \u20B9599",
    href: "/chair-repair-delhi",
  },
  {
    icon: Hammer,
    title: "Carpenter Home Service",
    description: "Verified carpenters at your doorstep for furniture repair, assembly, and custom carpentry work across Delhi NCR.",
    image: "https://cdn.hercules.app/file_Aqfpjvfs8zk3EI2wsJdhoZ3y",
    price: "Starting at \u20B9499",
    href: "/carpenter-home-service-delhi",
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
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
            What We Fix
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Furniture Repair Services in Delhi NCR
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From sofa repair to carpenter home service, our skilled craftsmen
            handle every type of furniture repair at your doorstep in Delhi NCR.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={service.href} className="block group h-full">
                <Card className="pt-0 h-full overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm rounded-lg p-2">
                      <service.icon className="size-5 text-primary" />
                    </div>
                  </div>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold">{service.title}</h3>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
