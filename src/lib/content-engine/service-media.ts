/**
 * SERVICE_MEDIA
 *
 * Universal asset registry for all services.
 * Each service references its collection via service.capabilities.content.heroCollection.
 *
 * Hero image selection: slugToIndex(locality.slug, collection.heroImages.length)
 * Before/after selection: keyed by RepairTypeKey — semantically matched, not random.
 *
 * Image URLs will be populated in Milestone 4 after AI image generation.
 * Placeholder strings are used until then.
 */

import type { ImageCollectionKey } from "@/lib/registry/types.ts";
import type { RepairTypeKey } from "@/lib/registry/repair-registry.ts";

export type BeforeAfterImage = {
  before: string;
  after: string;
  alt: string;
};

export type ServiceMediaEntry = {
  key: ImageCollectionKey;
  heroImages: readonly string[];
  beforeAfterImages: Partial<Record<RepairTypeKey, BeforeAfterImage>>;
  icons: Readonly<Record<string, string>>;
  gallery: readonly string[];
  downloads: readonly string[];
};

/** Deterministic index selection — same slug always gets same image */
export function slugToIndex(slug: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0xfffffff;
  }
  return hash % length;
}

export const SERVICE_MEDIA: Readonly<Record<ImageCollectionKey, ServiceMediaEntry>> = {
  "sofa": {
    key: "sofa",
    heroImages: [],
    beforeAfterImages: {},
    icons: {},
    gallery: [],
    downloads: [],
  },
  "recliner": {
    key: "recliner",
    heroImages: [],
    beforeAfterImages: {},
    icons: {},
    gallery: [],
    downloads: [],
  },
  "upholstery": {
    key: "upholstery",
    heroImages: [],
    beforeAfterImages: {},
    icons: {},
    gallery: [],
    downloads: [],
  },
  "furniture": {
    key: "furniture",
    heroImages: [],
    beforeAfterImages: {},
    icons: {},
    gallery: [],
    downloads: [],
  },
  "office-chair": {
    key: "office-chair",
    heroImages: [
      "https://hercules-cdn.com/file_wj3de1Goxxj5Lj02YFnTDa7w", // Modern open-plan office with ergonomic chairs
      "https://hercules-cdn.com/file_sWTz3QdbCUwSIj3BkPXP8jVR", // Technician replacing gas lift cylinder
      "https://hercules-cdn.com/file_JOav9LwlWmocZ5MSIz3JsTrU", // Premium executive leather chair in corporate office
      "https://hercules-cdn.com/file_GIgYnLUS5YW4jNqCjiJPZFpK", // Conference room chairs around meeting table
      "https://hercules-cdn.com/file_XrSRbM6fejlTu18xTxknQSbU", // Co-working space with ergonomic workstations
      "https://hercules-cdn.com/file_f3gGHDwu2Qi11yCqHqRpzK18", // Close-up caster wheel and hydraulic mechanism
      "https://hercules-cdn.com/file_mhjIkfw9iH1xczPg6UEwCw92", // Corporate technician servicing multiple chairs onsite
      "https://hercules-cdn.com/file_n2sCZ7tP8If3LE62hfwOKT00", // Reception area with visitor chairs
      "https://hercules-cdn.com/file_T1whVrKQ9DT8aulyXfg1fWHv", // Executive cabin setup
      "https://hercules-cdn.com/file_tQeJsgfGn4AEYcAza5aYyuRo", // Bulk repair — row of chairs being serviced
      "https://hercules-cdn.com/file_xI7hwR3DHAoehYF41vUQN7VD", // Premium mesh ergonomic chair close-up
      "https://hercules-cdn.com/file_r81Vut3RevZ5Mun5RqMHNBCe", // Before-and-after corporate chair restoration
    ],
    beforeAfterImages: {
      "gas-lift": {
        before: "https://hercules-cdn.com/file_RuiwCFJ6J0JjnFjSRIN0FoUA",
        after: "https://hercules-cdn.com/file_RuiwCFJ6J0JjnFjSRIN0FoUA",
        alt: "Gas lift cylinder replacement — office chair before and after repair",
      },
      "hydraulic": {
        before: "https://hercules-cdn.com/file_zm0HtLkdB0tjtwDRxX0bWWbr",
        after: "https://hercules-cdn.com/file_zm0HtLkdB0tjtwDRxX0bWWbr",
        alt: "Hydraulic mechanism repair — office chair before and after",
      },
      "mesh": {
        before: "https://hercules-cdn.com/file_SjiAZ6lx3TglbdpRSDqSZ32H",
        after: "https://hercules-cdn.com/file_SjiAZ6lx3TglbdpRSDqSZ32H",
        alt: "Mesh back replacement — ergonomic chair before and after",
      },
      "casters": {
        before: "https://hercules-cdn.com/file_Nxq8gkCKbvhmlCINSv1QWNQt",
        after: "https://hercules-cdn.com/file_Nxq8gkCKbvhmlCINSv1QWNQt",
        alt: "Caster wheel replacement — office chair before and after",
      },
      "armrest": {
        before: "https://hercules-cdn.com/file_5tmaYbpj8GeT75uaS68FVHug",
        after: "https://hercules-cdn.com/file_5tmaYbpj8GeT75uaS68FVHug",
        alt: "Armrest replacement — office chair before and after",
      },
      "foam": {
        before: "https://hercules-cdn.com/file_gsXvStemjLpTeM1kxqgSVddH",
        after: "https://hercules-cdn.com/file_gsXvStemjLpTeM1kxqgSVddH",
        alt: "Seat foam replacement — office chair before and after",
      },
      "tilt": {
        before: "https://hercules-cdn.com/file_sMziDWrjFPtTipkxUt81ahDT",
        after: "https://hercules-cdn.com/file_sMziDWrjFPtTipkxUt81ahDT",
        alt: "Tilt mechanism repair — office chair before and after",
      },
      "executive-restore": {
        before: "https://hercules-cdn.com/file_4Dv4iLtWazE6n18TC1KDe5b9",
        after: "https://hercules-cdn.com/file_4Dv4iLtWazE6n18TC1KDe5b9",
        alt: "Executive chair full restoration — before and after",
      },
    },
    icons: {},
    gallery: [],
    downloads: [],
  },
};
