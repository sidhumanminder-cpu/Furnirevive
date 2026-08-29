import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Vasant Vihar",
    rating: 5,
    text: "Amazing sofa repair! They replaced the foam and fabric and it looks brand new. Very professional team and reasonable pricing.",
    service: "Sofa Repair",
  },
  {
    name: "Rajesh Kumar",
    location: "DLF Phase 3, Gurgaon",
    rating: 5,
    text: "My recliner mechanism was broken for months. FurniRevive fixed it in one visit. The technician was very skilled and polite.",
    service: "Recliner Repair",
  },
  {
    name: "Anita Desai",
    location: "Preet Vihar",
    rating: 5,
    text: "Got all my dining table and chairs polished. The wood polish finish is gorgeous. Highly recommend their wood restoration services!",
    service: "Wood Polish",
  },
  {
    name: "Mohammed Ali",
    location: "Sainik Farms",
    rating: 4,
    text: "Quick and efficient bed repair. The headboard was wobbly and they reinforced the entire frame. Very happy with the result.",
    service: "Bed Repair",
  },
  {
    name: "Sneha Patel",
    location: "Golf Course Road, Gurgaon",
    rating: 5,
    text: "Excellent chair repair service. They re-upholstered 6 dining chairs and the quality is outstanding. Will definitely use again.",
    service: "Chair Repair",
  },
  {
    name: "Vikram Singh",
    location: "Noida",
    rating: 5,
    text: "FurniRevive saved my antique wooden cabinet. The restoration was flawless. They truly care about preserving the character of furniture.",
    service: "Wood Polish",
  },
] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
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
            Customer Love
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Real reviews from real customers who trusted us with their furniture.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Quote className="size-8 text-primary/20" />
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {review.service}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {`"${review.text}"`}
                  </p>
                  <div className="pt-2 border-t border-border">
                    <StarRating rating={review.rating} />
                    <p className="mt-2 text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
