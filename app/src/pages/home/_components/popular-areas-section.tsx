import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPinned, ArrowRight } from "lucide-react";

type AreaLink = {
  label: string;
  href: string;
};

type AreaGroup = {
  region: string;
  links: AreaLink[];
};

const POPULAR_AREAS: AreaGroup[] = [
  {
    region: "Delhi — Sofa Repair",
    links: [
      { label: "Sofa Repair Dwarka", href: "/sofa-repair-dwarka" },
      { label: "Sofa Repair Rohini", href: "/sofa-repair-rohini" },
      { label: "Sofa Repair Janakpuri", href: "/sofa-repair-janakpuri" },
      { label: "Sofa Repair Saket", href: "/sofa-repair-saket" },
      { label: "Sofa Repair Malviya Nagar", href: "/sofa-repair-malviya-nagar" },
      { label: "Sofa Repair Pitampura", href: "/sofa-repair-pitampura" },
      { label: "Sofa Repair Vasant Vihar", href: "/sofa-repair-vasant-vihar" },
      { label: "Sofa Repair Rajouri Garden", href: "/sofa-repair-rajouri-garden" },
      { label: "Sofa Repair South Delhi", href: "/sofa-repair-south-delhi" },
      { label: "Sofa Repair Mayur Vihar", href: "/sofa-repair-mayur-vihar" },
    ],
  },
  {
    region: "Delhi — Furniture Repair",
    links: [
      { label: "Furniture Repair Dwarka", href: "/furniture-repair-dwarka" },
      { label: "Furniture Repair Rohini", href: "/furniture-repair-rohini" },
      { label: "Furniture Repair Janakpuri", href: "/furniture-repair-janakpuri" },
      { label: "Furniture Repair Saket", href: "/furniture-repair-saket" },
      { label: "Furniture Repair Malviya Nagar", href: "/furniture-repair-malviya-nagar" },
      { label: "Furniture Repair Pitampura", href: "/furniture-repair-pitampura" },
      { label: "Furniture Repair Lajpat Nagar", href: "/furniture-repair-lajpat-nagar" },
      { label: "Furniture Repair Kirti Nagar", href: "/furniture-repair-kirti-nagar" },
      { label: "Furniture Repair Vasant Kunj", href: "/furniture-repair-vasant-kunj" },
      { label: "Furniture Repair Indirapuram", href: "/furniture-repair-indirapuram" },
    ],
  },
  {
    region: "Noida & Greater Noida",
    links: [
      { label: "Sofa Repair Noida Sector 62", href: "/sofa-repair-noida-sector-62" },
      { label: "Sofa Repair Noida Sector 137", href: "/sofa-repair-noida-sector-137" },
      { label: "Sofa Repair Noida Expressway", href: "/sofa-repair-noida-expressway" },
      { label: "Furniture Repair Noida Sector 18", href: "/furniture-repair-noida-sector-18" },
      { label: "Furniture Repair Noida Sector 150", href: "/furniture-repair-noida-sector-150" },
      { label: "Furniture Repair Greater Noida", href: "/furniture-repair-greater-noida" },
    ],
  },
  {
    region: "Gurgaon",
    links: [
      { label: "Sofa Repair Gurgaon Sector 56", href: "/sofa-repair-gurgaon-sector-56" },
      { label: "Sofa Repair DLF Gurgaon", href: "/sofa-repair-dlf-gurgaon" },
      { label: "Furniture Repair Gurgaon Sector 45", href: "/furniture-repair-gurgaon-sector-45" },
      { label: "Furniture Repair Golf Course Road", href: "/furniture-repair-golf-course-road-gurgaon" },
    ],
  },
  {
    region: "Repair Problems We Solve",
    links: [
      { label: "Sofa Fabric Tear Repair", href: "/sofa-fabric-tear-repair-delhi" },
      { label: "Sofa Frame Repair", href: "/sofa-frame-repair-delhi" },
      { label: "Recliner Motor Repair", href: "/recliner-motor-repair-delhi" },
      { label: "Termite Treatment for Furniture", href: "/wooden-furniture-termite-treatment-delhi" },
      { label: "Dining Table Repair", href: "/dining-table-repair-delhi" },
      { label: "Office Chair Repair", href: "/office-chair-repair-delhi" },
    ],
  },
];

export default function PopularAreasSection() {
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
            Doorstep Service Everywhere
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Popular Areas We Serve
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            FurniRevive provides expert sofa repair and furniture repair at your
            doorstep across 30+ localities in Delhi NCR. Find your area below.
          </p>
        </motion.div>

        {/* Area groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_AREAS.map((group, groupIndex) => (
            <motion.div
              key={group.region}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIndex * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPinned className="size-4.5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold">{group.region}</h3>
              </div>

              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowRight className="size-3.5 shrink-0 text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
