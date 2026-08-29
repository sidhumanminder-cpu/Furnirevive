import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

const SERVICE_LOCATIONS = [
  {
    city: "Delhi",
    areas: "Dwarka, Rohini, Vasant Kunj, Saket, Lajpat Nagar, Greater Kailash, Vasant Vihar, Preet Vihar, Pitampura",
    links: [
      { label: "Furniture Repair", href: "/furniture-repair-delhi" },
    ],
  },
  {
    city: "Noida",
    areas: "All Sectors, Greater Noida, Noida Extension, Gaur City, Pari Chowk, Knowledge Park",
    links: [
      { label: "Furniture Repair", href: "/furniture-repair-noida" },
      { label: "Sofa Repair", href: "/sofa-repair-noida" },
    ],
  },
  {
    city: "Gurgaon",
    areas: "DLF Phase 1-5, Golf Course Road, Sohna Road, MG Road, New Gurgaon, Manesar",
    links: [
      { label: "Furniture Repair", href: "/furniture-repair-gurgaon" },
      { label: "Sofa Repair", href: "/sofa-repair-gurgaon" },
    ],
  },
  {
    city: "Ghaziabad",
    areas: "Indirapuram, Vaishali, Kaushambi, Crossing Republik, Raj Nagar Extension, Vasundhara",
    links: [
      { label: "Furniture Repair", href: "/furniture-repair-ghaziabad" },
      { label: "Sofa Repair", href: "/sofa-repair-ghaziabad" },
    ],
  },
  {
    city: "Faridabad",
    areas: "All NIT Sectors, Greater Faridabad, Ballabgarh, Surajkund, BPTP, Neharpar",
    links: [
      { label: "Furniture Repair", href: "/furniture-repair-faridabad" },
      { label: "Sofa Repair", href: "/sofa-repair-faridabad" },
    ],
  },
];

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-secondary/50">
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
            We Come To You
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Furniture Repair Across Delhi NCR
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our expert carpenters and furniture repair technicians provide doorstep service across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Same-day service available.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_LOCATIONS.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="bg-card rounded-xl p-6 border border-border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold">
                    Repairs in {location.city}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {location.areas}
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      {link.label}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
