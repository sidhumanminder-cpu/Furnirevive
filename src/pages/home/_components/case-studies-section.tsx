import { useQuery } from "@/lib/convex-query.ts";
import { motion } from "motion/react";
import { Link } from "@/lib/router-compat.tsx";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { CaseBlock, LoadingSkeleton } from "@/components/real-repair-results.tsx";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/lib/seo-constants.ts";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I saw your repair results and would like to get a quotation.",
)}`;

/** Homepage gallery of every case study that has photos. */
export default function CaseStudiesSection() {
  const studies = useQuery(api.caseStudies.getForHome, {});

  if (studies !== undefined && studies.length === 0) return null;

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" />
            Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">Real Repair Results Across Delhi NCR</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            See actual before and after transformations by our craftsmen.
          </p>
        </motion.div>

        {studies === undefined ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {studies.map((study, i) => (
              <CaseBlock key={study._id} study={study} index={i} showTypeLabel pageLabel="Delhi/NCR" />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold mb-5">
            Get similar results <span className="text-primary">from ₹500</span> – Book Now
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" className="gap-2 rounded-full cursor-pointer">
                <Phone className="size-4" />
                Call Now
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] cursor-pointer">
                <MessageCircle className="size-4" />
                WhatsApp
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" variant="secondary" className="gap-2 rounded-full cursor-pointer">
                Book Inspection
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
