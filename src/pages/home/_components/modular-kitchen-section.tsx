import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

const KITCHEN_LINKS = [
  {
    title: "Delhi",
    description: "Custom modular kitchens designed & installed across Delhi.",
    href: "/modular-kitchen-delhi",
  },
  {
    title: "Gurgaon",
    description: "Factory-finished kitchens delivered to Gurgaon homes.",
    href: "/modular-kitchen-gurgaon",
  },
  {
    title: "L-Shape Kitchen",
    description: "Space-efficient L-shaped layouts for Indian homes.",
    href: "/modular-kitchen-l-shape",
  },
  {
    title: "Acrylic Finish",
    description: "High-gloss acrylic shutters for a modern look.",
    href: "/modular-kitchen-acrylic",
  },
  {
    title: "Kitchen Cost Guide",
    description: "Transparent pricing — know your kitchen budget upfront.",
    href: "/modular-kitchen-cost",
  },
  {
    title: "All Kitchen Designs",
    description: "Browse 50+ kitchen styles, colours & configurations.",
    href: "/modular-kitchen",
  },
] as const;

export default function ModularKitchenSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/40">
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
            New from FurniRevive
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Also Designing Modular Kitchens Across Delhi NCR
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FurniRevive now designs, manufactures, and installs custom modular
            kitchens — factory-finished cabinetry, premium hardware, free 3D
            design, and a 10-year structural warranty.
          </p>
        </motion.div>

        {/* Kitchen cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {KITCHEN_LINKS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link to={item.href} className="block group h-full">
                <Card className="h-full hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <ChefHat className="size-4.5 text-primary" />
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="cursor-pointer">
            <Link to="/modular-kitchen">
              Explore Modular Kitchens
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
