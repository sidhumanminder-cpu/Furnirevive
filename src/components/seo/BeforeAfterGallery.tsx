import { useEffect } from "react";
import { motion } from "motion/react";
import {
  generateAlt,
  generateTitle,
  generateCaption,
  generateImageSchema,
} from "@/lib/seoConfigs/gallery-engine.ts";
import type { GalleryMatch } from "@/lib/seoConfigs/gallery-engine.ts";

interface BeforeAfterGalleryProps {
  matches: GalleryMatch[];
}

export default function BeforeAfterGallery({ matches }: BeforeAfterGalleryProps) {
  useEffect(() => {
    document.querySelectorAll('script[data-gallery-schema="true"]').forEach((s) => s.remove());

    matches.forEach(({ record }) => {
      (["before", "after"] as const).forEach((side) => {
        const schema = generateImageSchema(record, side);
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-gallery-schema", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    });

    return () => {
      document.querySelectorAll('script[data-gallery-schema="true"]').forEach((s) => s.remove());
    };
  }, [matches]);

  if (matches.length === 0) return null;

  // Filter out pairs where either URL is empty
  const validMatches = matches.filter(
    ({ record }) => record.beforeUrl !== "" && record.afterUrl !== "",
  );

  if (validMatches.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Before &amp; After — Real Repairs by FurniRevive
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Every photo is from an actual repair job completed by our technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {validMatches.map(({ id, record }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <div className="grid grid-cols-2">
                {/* Before image */}
                <div className="relative overflow-hidden">
                  <img
                    src={record.beforeUrl}
                    alt={generateAlt(record, "before")}
                    title={generateTitle(record)}
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <span className="absolute left-2 top-2 rounded bg-destructive/90 px-2 py-0.5 text-xs font-semibold text-destructive-foreground">
                    Before
                  </span>
                </div>

                {/* After image */}
                <div className="relative overflow-hidden">
                  <img
                    src={record.afterUrl}
                    alt={generateAlt(record, "after")}
                    title={generateTitle(record)}
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <span className="absolute left-2 top-2 rounded bg-primary/90 px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                    After
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {generateCaption(record)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
