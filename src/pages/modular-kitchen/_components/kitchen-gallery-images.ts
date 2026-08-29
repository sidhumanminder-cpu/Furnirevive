/**
 * Kitchen Gallery Image Library
 * Single source of truth for all modular kitchen gallery images.
 * Add new images by appending to KITCHEN_GALLERY_IMAGES.
 * UI arrays (ROOT_GALLERY, DELHI_GALLERY etc.) filter from this master list.
 */

export type GalleryCategory =
  | "all"
  | "modern"
  | "luxury"
  | "l-shape"
  | "u-shape"
  | "island"
  | "parallel"
  | "straight"
  | "peninsula"
  | "small-kitchen"
  | "dark-theme"
  | "acrylic"
  | "laminate"
  | "pu"
  | "membrane"
  | "veneer"
  | "pvc"
  | "glass"
  | "stainless-steel";

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  categories: GalleryCategory[];
  city?: "Delhi" | "Gurgaon";
  featured?: boolean;
};

export const KITCHEN_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "flagship-luxury-island",
    url: "https://hercules-cdn.com/file_S4P7dQfLGiwQbDMNpRR7iIno",
    alt: "Luxury modular kitchen with waterfall marble island in Delhi NCR",
    caption: "Luxury Island Kitchen — Waterfall Marble Countertop",
    categories: ["luxury", "island"],
    featured: true,
  },
  {
    id: "elegant-u-shape-matte",
    url: "https://hercules-cdn.com/file_ElxBczor07neE3OldLdBPKoZ",
    alt: "Elegant U-shape modular kitchen with premium matte black cabinets in Gurgaon",
    caption: "Elegant U-Shape — Premium Matte Cabinets",
    categories: ["luxury", "u-shape", "dark-theme"],
    city: "Gurgaon",
    featured: true,
  },
  {
    id: "high-gloss-acrylic-white",
    url: "https://hercules-cdn.com/file_bEyqt1YZGAd7E6AHMzz915BC",
    alt: "High-gloss acrylic modular kitchen with white and champagne cabinets",
    caption: "High-Gloss Acrylic Kitchen — White & Champagne",
    categories: ["modern", "acrylic"],
    featured: true,
  },
  {
    id: "shaker-family-kitchen-1",
    url: "https://hercules-cdn.com/file_h3dfVTnI5EU35OevLacHPp9s",
    alt: "Large family modular kitchen with shaker-style wood cabinetry and island",
    caption: "Large Family Kitchen — Classic Shaker Cabinetry",
    categories: ["luxury", "l-shape"],
    city: "Delhi",
  },
  {
    id: "shaker-family-kitchen-2",
    url: "https://hercules-cdn.com/file_AW066wgJ07vR6K1HJckBRF1y",
    alt: "Premium shaker-style modular kitchen with marble island and warm wood finish",
    caption: "Premium Shaker Kitchen — Marble Island",
    categories: ["luxury", "island"],
    city: "Delhi",
    featured: true,
  },
  {
    id: "luxury-matte-black",
    url: "https://hercules-cdn.com/file_2z8IQya4hQIInSOsvL1S3e5L",
    alt: "Luxury contemporary modular kitchen with matte black cabinets and marble backsplash",
    caption: "Luxury Contemporary — Matte Black with Marble",
    categories: ["luxury", "dark-theme", "parallel"],
    city: "Gurgaon",
    featured: true,
  },
  {
    id: "premium-villa-ceiling",
    url: "https://hercules-cdn.com/file_GoyMqLfjKEiS94UoQgcuAzlj",
    alt: "Premium villa modular kitchen with floor-to-ceiling cabinetry in Delhi NCR",
    caption: "Premium Villa Kitchen — Floor-to-Ceiling Cabinetry",
    categories: ["luxury", "u-shape"],
    city: "Delhi",
  },
  {
    id: "award-winning-dslr-1",
    url: "https://hercules-cdn.com/file_w2FSVjzzp2yO9Kw92NvttlzL",
    alt: "Award-winning modular kitchen design with premium finishes in Delhi NCR",
    caption: "Award-Winning Modular Kitchen Design",
    categories: ["modern", "luxury", "l-shape"],
  },
  {
    id: "award-winning-dslr-2",
    url: "https://hercules-cdn.com/file_rAsfdNyOjPSfpeWcQQ0zj6Fr",
    alt: "Premium modular kitchen with warm contemporary finish in Delhi NCR",
    caption: "Premium Modular Kitchen — Warm Contemporary",
    categories: ["modern", "luxury", "straight"],
    city: "Delhi",
  },
  {
    id: "modern-l-shape-apartment",
    url: "https://hercules-cdn.com/file_zRQZkUG53EZeP5wMaPCWXnx1",
    alt: "Modern L-shape modular kitchen designed for a luxury apartment in Delhi",
    caption: "Modern L-Shape Kitchen — Luxury Apartment",
    categories: ["modern", "l-shape"],
    city: "Delhi",
  },
  {
    id: "parallel-matte-sleek",
    url: "https://hercules-cdn.com/file_6mcZYPe3ss3e5qeaY02Z21qK",
    alt: "Modern parallel modular kitchen with sleek matte cabinets in Gurgaon",
    caption: "Modern Parallel Kitchen — Sleek Matte Cabinets",
    categories: ["modern", "parallel"],
    city: "Gurgaon",
  },
  {
    id: "compact-urban-apartment",
    url: "https://hercules-cdn.com/file_SuYA4s1tfpf221ae6wDwn0PN",
    alt: "Premium compact modular kitchen designed for a modern urban apartment",
    caption: "Premium Compact Kitchen — Modern Urban Apartment",
    categories: ["modern", "small-kitchen", "straight"],
  },
  {
    id: "laminate-woodgrain",
    url: "https://hercules-cdn.com/file_7xuvK5wj53RGUMdiCIKEgIaa",
    alt: "Premium laminate modular kitchen featuring textured woodgrain finish",
    caption: "Premium Laminate Kitchen — Textured Woodgrain",
    categories: ["modern", "laminate"],
    city: "Delhi",
  },
  {
    id: "scandinavian-light-oak",
    url: "https://hercules-cdn.com/file_mQk6Gt5hmIKXiFeD633JnW79",
    alt: "Scandinavian-inspired modular kitchen featuring light oak cabinets",
    caption: "Scandinavian Kitchen — Light Oak Cabinets",
    categories: ["modern", "small-kitchen", "laminate"],
  },
  {
    id: "gen-waterfall-marble-island",
    url: "https://hercules-cdn.com/file_vHwBQgnl3KLJL1Yzu4ujy33h",
    alt: "Premium modular kitchen with waterfall marble island and warm wood cabinetry in a luxury Indian villa",
    caption: "Ultra-Luxury Waterfall Marble Island Kitchen",
    categories: ["luxury", "island"],
    featured: true,
  },
  {
    id: "gen-delhi-shaker-villa",
    url: "https://hercules-cdn.com/file_KMOy57N0vDd7uAhUDb78XKmT",
    alt: "Modular kitchen design for South Delhi villa with warm shaker cabinetry and butler pantry",
    caption: "Warm Shaker Kitchen — South Delhi Villa",
    categories: ["luxury", "modern", "l-shape"],
    city: "Delhi",
    featured: true,
  },
  {
    id: "gen-gurgaon-dark-matte",
    url: "https://hercules-cdn.com/file_377PCNdLNGIek6MzCyjCt9ck",
    alt: "Modern dark matte modular kitchen in Gurgaon high-rise apartment with open-plan living",
    caption: "Dark Matte Contemporary Kitchen — Gurgaon High-Rise",
    categories: ["luxury", "modern", "dark-theme", "parallel"],
    city: "Gurgaon",
    featured: true,
  },
  {
    id: "gen-l-shape-blue",
    url: "https://hercules-cdn.com/file_kcWs3I3r503Bb8cEHdfBB8fo",
    alt: "L-shape modular kitchen layout with efficient corner utilization and modern finishes",
    caption: "Classic L-Shape Layout — Dusty Blue & White",
    categories: ["modern", "l-shape"],
  },
  {
    id: "gen-u-shape-taupe",
    url: "https://hercules-cdn.com/file_lhlCPHMXg1s5C4UjHD8he0sV",
    alt: "U-shape modular kitchen layout maximizing storage in three-wall configuration",
    caption: "Spacious U-Shape — Warm Taupe Storage Kitchen",
    categories: ["modern", "u-shape"],
  },
  {
    id: "gen-parallel-galley",
    url: "https://hercules-cdn.com/file_VGfRXBlsXw8FD7Hc1uzlZEwp",
    alt: "Parallel galley modular kitchen layout ideal for narrow spaces with dual countertops",
    caption: "Efficient Parallel Galley Kitchen",
    categories: ["modern", "parallel", "small-kitchen"],
  },
  {
    id: "gen-straight-studio",
    url: "https://hercules-cdn.com/file_v8Irf28DaqCTDBPwFkcEA3YW",
    alt: "Single wall straight modular kitchen layout for studio apartments and compact spaces",
    caption: "Compact Straight Kitchen — Studio Apartment",
    categories: ["modern", "straight", "small-kitchen"],
  },
  {
    id: "gen-island-navy-villa",
    url: "https://hercules-cdn.com/file_djsOu8mcj70UG6FryEc21TlC",
    alt: "Island layout modular kitchen with central cooking island in open-plan luxury home",
    caption: "Grand Island Kitchen — Navy Blue & Marble",
    categories: ["luxury", "island"],
    featured: true,
  },
  {
    id: "gen-peninsula-cognac",
    url: "https://hercules-cdn.com/file_D9FGFjhsA6mz93B2pf0pQic0",
    alt: "Peninsula layout modular kitchen with extended breakfast bar for family dining",
    caption: "Peninsula Kitchen — Cognac Wood Breakfast Bar",
    categories: ["modern", "peninsula"],
  },
  {
    id: "gen-acrylic-pearl-white",
    url: "https://hercules-cdn.com/file_IloMTm7xkcZJkWwsCCR0OfUs",
    alt: "Modular kitchen with high-gloss acrylic finish cabinets showcasing mirror-like reflective surface",
    caption: "High-Gloss Acrylic — Pearl White Mirror Finish",
    categories: ["luxury", "modern", "acrylic"],
  },
  {
    id: "gen-laminate-teak-woodgrain",
    url: "https://hercules-cdn.com/file_vtmk6xG3eXfLqwBp6sAeflWr",
    alt: "Modular kitchen with premium textured laminate finish in realistic wood grain pattern",
    caption: "Premium Laminate — Teak Wood-Grain Texture",
    categories: ["modern", "laminate"],
  },
  {
    id: "gen-pu-olive-shaker",
    url: "https://hercules-cdn.com/file_igHnChlrLBP8QHjiD50g6l7b",
    alt: "Modular kitchen with polyurethane PU painted finish showing smooth matte texture on cabinets",
    caption: "PU Finish Kitchen — Olive Green Shaker",
    categories: ["luxury", "modern", "pu"],
  },
  {
    id: "gen-membrane-ivory",
    url: "https://hercules-cdn.com/file_KbLdVBRE4LYFiPamNqexMnxl",
    alt: "Modular kitchen with membrane thermofoil finish showing curved profile doors at affordable price point",
    caption: "Membrane Thermofoil — Classic Ivory Profile",
    categories: ["modern", "membrane"],
  },
  {
    id: "gen-veneer-walnut",
    url: "https://hercules-cdn.com/file_bJ8OfIcFlNvSc6fWcfYMlxld",
    alt: "Modular kitchen with natural wood veneer finish showing authentic grain pattern on premium cabinetry",
    caption: "Natural Walnut Veneer — Book-Matched Luxury",
    categories: ["luxury", "veneer"],
    featured: true,
  },
  {
    id: "gen-pvc-sky-blue",
    url: "https://hercules-cdn.com/file_58yHQTGmGFfzAhHc9lCctyE5",
    alt: "Modular kitchen with PVC laminate finish offering durable moisture-resistant cabinets for Indian homes",
    caption: "PVC Finish Kitchen — Sky Blue Waterproof",
    categories: ["modern", "small-kitchen", "pvc"],
  },
  {
    id: "gen-glass-burgundy",
    url: "https://hercules-cdn.com/file_zPPi8vvUMRn2uha1ODXLdXUq",
    alt: "Modular kitchen with back-painted glass shutters providing sleek reflective contemporary finish",
    caption: "Back-Painted Glass — Deep Burgundy Shutters",
    categories: ["luxury", "modern", "glass"],
  },
  {
    id: "gen-stainless-steel-pro",
    url: "https://hercules-cdn.com/file_gl5ZGkrN9xOrIYcF6JNq7AOT",
    alt: "Modular kitchen with stainless steel cabinets and countertops for professional chef-grade cooking",
    caption: "Stainless Steel Pro Kitchen — Chef-Grade",
    categories: ["modern", "stainless-steel"],
  },
];

/** All images for the root /modular-kitchen gallery */
export const ROOT_GALLERY: GalleryImage[] = KITCHEN_GALLERY_IMAGES;

/** Curated 8 images for Delhi hub — warm tones, Delhi city, villa/family styles */
export const DELHI_GALLERY: GalleryImage[] = KITCHEN_GALLERY_IMAGES.filter((img) =>
  [
    "shaker-family-kitchen-1",
    "shaker-family-kitchen-2",
    "premium-villa-ceiling",
    "award-winning-dslr-2",
    "modern-l-shape-apartment",
    "laminate-woodgrain",
    "flagship-luxury-island",
    "award-winning-dslr-1",
  ].includes(img.id)
);

/** Curated 8 images for Gurgaon hub — dark/contemporary/island styles */
export const GURGAON_GALLERY: GalleryImage[] = KITCHEN_GALLERY_IMAGES.filter((img) =>
  [
    "elegant-u-shape-matte",
    "luxury-matte-black",
    "parallel-matte-sleek",
    "flagship-luxury-island",
    "shaker-family-kitchen-2",
    "award-winning-dslr-1",
    "high-gloss-acrylic-white",
    "compact-urban-apartment",
  ].includes(img.id)
);

/** 4 featured images for the lightweight locality page preview */
export const PREVIEW_GALLERY: GalleryImage[] = KITCHEN_GALLERY_IMAGES.filter(
  (img) => img.featured === true
).slice(0, 4);

/** Full gallery for /modular-kitchen root page */
export function getRootGallery(): GalleryImage[] {
  return KITCHEN_GALLERY_IMAGES;
}

/** Curated gallery for a city hub page */
export function getHubGallery(city: "delhi" | "gurgaon"): GalleryImage[] {
  if (city === "delhi") return DELHI_GALLERY;
  return GURGAON_GALLERY;
}

/** Filtered gallery for layout/material pages — images matching the given filter tag */
export function getFilteredGallery(filter: string): GalleryImage[] {
  return KITCHEN_GALLERY_IMAGES.filter((img) =>
    img.categories.includes(filter as GalleryCategory)
  );
}

/** 4 featured images for the lightweight locality page preview */
export function getPreviewGallery(): GalleryImage[] {
  return PREVIEW_GALLERY;
}
