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
            service, and customer satisfaction. Since 2018, we have completed
            over 10,000 repairs across Delhi, Noida, Gurgaon, Ghaziabad, and
            Faridabad — helping families breathe new life into their beloved
            furniture instead of replacing it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
