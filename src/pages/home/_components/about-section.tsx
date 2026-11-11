import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-balance">
            About FurniRevive
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            FurniRevive is a trusted furniture repair service in Delhi NCR
            specializing in sofa repair, chair repair, polishing, and carpenter
            services at home. FurniRevive focuses on quality workmanship, fast
            service, and customer satisfaction. Since 2016, we have completed
            over 10,000 repairs across Delhi, Noida, Gurgaon, Ghaziabad, and
            Faridabad — helping families breathe new life into their beloved
            furniture instead of replacing it.
          </p>
          <div className="text-left max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              Furniture repair at your doorstep across Delhi NCR
            </h3>
            <p>
              FurniRevive repairs sofas, recliners, beds, chairs, dining tables, wardrobes and other furniture at your home across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad. A technician visits for a free inspection, tells you what has failed and why, and gives a fixed quote before any work starts. Most jobs are done on site, so nothing has to be loaded onto a truck, and every repair carries a 6-month warranty.
            </p>
            <p>
              Sofa repair covers sagging seats, broken frames, springs, foam replacement and torn fabric or leather. Recliner repair covers stuck footrests, worn cables and links, and motor or handset faults. Wood polish, bed repair, chair repair and table repair cover loose joints, broken slats, hinges, scratches and faded finishes. Carpenter home service covers assembly, fitting and small custom jobs. Re-upholstery in new fabric or leather is available for sofas whose frames are still sound.
            </p>
            <p>
              Repair or replace? If the frame is solid wood and the joints hold, repair is usually the better choice, because foam, springs and covers are the parts that wear out. We tell you plainly when a piece is beyond saving.
            </p>
            <p>
              Our local pages cover hundreds of localities, from Rohini, Dwarka and South Delhi to sectors in Noida and Gurgaon, Indirapuram and Faridabad. Pick your area below to see local details, or call 92179 99355.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
