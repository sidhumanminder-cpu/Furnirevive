import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

const HOMEPAGE_FAQS = [
  {
    question: "Where can I find the best sofa repair near me in Delhi NCR?",
    answer:
      "FurniRevive offers the best sofa repair near me service across Delhi NCR. We provide doorstep sofa repair in Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Our expert craftsmen handle cushion re-stuffing, fabric replacement, leather restoration, frame repair, and complete sofa overhauls. Starting at just ₹999 with same-day service and a 6-month warranty.",
  },
  {
    question: "How much does furniture repair cost in Delhi NCR?",
    answer:
      "Furniture repair in Delhi NCR is affordable with FurniRevive. Chair repair starts at ₹599, sofa repair at ₹999, bed repair at ₹1,199, and wood polish at ₹799. We provide a free doorstep inspection and transparent quotation before starting any work. Professional furniture repair saves you 50-70% compared to buying new furniture.",
  },
  {
    question: "How do I find a reliable carpenter near me in Delhi?",
    answer:
      "Finding a trusted carpenter near me in Delhi is easy with FurniRevive. Our verified, experienced carpenters provide doorstep service for all types of furniture repair, assembly, and custom carpentry work across Delhi NCR. Every carpenter in our team has 5+ years of experience. Book online or call us for same-day carpenter home service.",
  },
  {
    question: "Do you provide doorstep furniture repair in Delhi NCR?",
    answer:
      "Yes, all our furniture repair services are doorstep-based. Our technicians come to your home or office across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad with all necessary tools and materials. No need to transport heavy furniture anywhere. We offer same-day service when you book before noon.",
  },
  {
    question: "What types of furniture do you repair?",
    answer:
      "We repair all types of furniture — sofas, recliners, beds, dining chairs, office chairs, dining tables, coffee tables, wardrobes, kitchen cabinets, bookshelves, TV units, and more. We work with all materials including wood, fabric, leather, rexine, metal, and engineered wood. Both home and office furniture repairs are covered.",
  },
  {
    question: "Is there a warranty on furniture repair services?",
    answer:
      "Yes, every repair by FurniRevive comes with a comprehensive 6-month warranty. If any issue arises with the repaired area within the warranty period, we fix it absolutely free of charge. This covers all services including sofa repair, chair repair, bed repair, wood polish, and carpenter work across Delhi NCR.",
  },
  {
    question: "Can I get same-day furniture repair in Delhi NCR?",
    answer:
      "Yes, we offer same-day furniture repair across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Book before noon for a same-day visit by our technician. For urgent repairs, call us directly at +91 92179 99355 for the fastest response. Most repairs are completed within 2-4 hours.",
  },
  {
    question: "Why should I repair furniture instead of buying new?",
    answer:
      "Professional furniture repair saves 50-70% compared to buying new. Older furniture often has better build quality with solid wood frames. Repairing extends its lifespan by 5-10 years while being eco-friendly. A ₹50,000 sofa can be fully restored for ₹5,000-₹12,000 — looking and feeling brand new with our 6-month warranty.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Got Questions?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about our furniture repair services in Delhi NCR.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {HOMEPAGE_FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="border rounded-xl px-5 bg-card"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
