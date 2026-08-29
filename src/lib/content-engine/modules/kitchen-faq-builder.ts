/**
 * Kitchen FAQ Builder — milestone-227
 *
 * Renders the kitchen-faq section data from a Readonly<LocalityProfile>.
 * Q1 (cost + locality name) and Q6 (free visit + locality name) are always
 * unique. Q2–Q5 come from the FAQ profile keyed by city × localityType × affluence.
 *
 * Pure renderer — contains no business-rule decisions.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import { MODULAR_KITCHEN_LAYOUT_REGISTRY } from "@/lib/registry/kitchen-layout-registry.ts";
import { MODULAR_KITCHEN_MATERIAL_REGISTRY } from "@/lib/registry/kitchen-material-registry.ts";
import type { LocalityProfile, FaqProfileKey, KitchenFaqSectionData } from "../types.ts";

type FaqEntry = { question: string; answer: string };

// ─── FAQ profile catalogue ────────────────────────────────────────────────────

const FAQ_PROFILES: Record<FaqProfileKey, readonly FaqEntry[]> = {
  "delhi-luxury-villa": [
    {
      question: "What is the most popular kitchen layout for independent houses in Delhi?",
      answer: "For independent houses and villas in Delhi, the island kitchen is increasingly popular — it creates a social, open-plan space and works well with kitchen footprints over 180 sq ft. U-shape layouts are also a top choice for their maximum storage and counter space.",
    },
    {
      question: "What hardware do you recommend for a luxury modular kitchen?",
      answer: "For a luxury kitchen, we recommend Blum (Austria), Hettich, or Häfele hardware. These brands offer the best drawer mechanism quality, soft-close guarantees, and long service life. The difference between premium and standard hardware is most noticeable after 5–7 years of daily use.",
    },
    {
      question: "How long does a premium modular kitchen installation take?",
      answer: "A large luxury kitchen with an island or tall units typically takes 15–20 days total — 3–4 weeks of factory manufacturing followed by 3–5 days on-site installation. Complex kitchens with custom cornices, integrated appliances, or unique finishes may need additional time.",
    },
    {
      question: "Can you customise the design to match my home's existing interior?",
      answer: "Yes, fully. We design the kitchen around your existing interior — matching colour palettes, aligning cabinet heights, and integrating preferred finishes. Our designer brings samples, 3D renders, and material swatches to the home visit so you can visualise the result before confirming.",
    },
  ],

  "delhi-luxury-apartments": [
    {
      question: "What kitchen layouts work best for premium Delhi apartments?",
      answer: "For premium apartments in Delhi, L-shape and parallel layouts are the most popular — they make the most of a rectangular kitchen while maintaining a wide aisle. U-shape is a great option if your kitchen has three usable walls.",
    },
    {
      question: "What finishes are popular in premium Delhi apartments?",
      answer: "Acrylic and PU finishes are the top choices for premium apartments — they give a clean, high-gloss or satin look that photographs well and is easy to clean. Veneer is also popular for homeowners who prefer a warm, natural wood aesthetic.",
    },
    {
      question: "How long does modular kitchen installation take in a Delhi apartment?",
      answer: "For most apartment kitchens, installation takes 10–15 days total — 3–4 weeks of manufacturing, followed by 2–3 days on-site. The building's lift and common area permissions usually need to be arranged a day in advance.",
    },
    {
      question: "Do you handle society or RWA approvals for Delhi apartments?",
      answer: "We help with all the standard paperwork. Most RWAs in Delhi require a simple delivery permission form and a time-window for work. We coordinate directly with your society office and send our team during approved hours.",
    },
  ],

  "delhi-premium-mixed": [
    {
      question: "What modular kitchen styles are popular in Delhi right now?",
      answer: "In Delhi, the current preference is for clean modern kitchens — handleless shutters in acrylic or PU, a simple colour palette (white, grey, charcoal), and well-planned storage. Island kitchens have grown in popularity in South and West Delhi where independent houses are more common.",
    },
    {
      question: "Is it better to choose acrylic or laminate for a Delhi kitchen?",
      answer: "For most Delhi homes, acrylic gives a more premium finish while laminate offers better scratch resistance at a lower price. If your budget allows, acrylic or PU is a stronger long-term investment for resale value and daily satisfaction.",
    },
    {
      question: "How do I plan a modular kitchen for an older Delhi property?",
      answer: "Older Delhi properties often have non-standard dimensions, low lintels, or irregular plumbing points. Our designer specifically measures and documents these during the home visit to ensure the design works with your actual space — not a textbook kitchen layout.",
    },
    {
      question: "What countertop materials do you offer?",
      answer: "We offer granite, engineered quartz, and Corian countertops. Granite is the most popular in Delhi — it's hard-wearing, heat-resistant, and available in dozens of colours. Quartz is a premium choice with better stain resistance. A recommendation is included in your free design plan.",
    },
  ],

  "delhi-mid-apartments": [
    {
      question: "What is the best modular kitchen layout for a standard 2BHK in Delhi?",
      answer: "For a standard 2BHK kitchen — typically 70–100 sq ft — an L-shape layout gives the best balance of workspace, storage, and movement. If your kitchen is long and narrow, a parallel layout can pack in more cabinets while keeping the workflow efficient.",
    },
    {
      question: "How do I maximise storage in a compact Delhi apartment kitchen?",
      answer: "The biggest storage gains in compact kitchens come from tall units, full-height upper cabinets, and smart fittings like pull-outs, carousels, and drawer organisers. A well-designed 80 sq ft kitchen can comfortably hold everything a family of four needs.",
    },
    {
      question: "What is the most durable finish for an apartment kitchen in Delhi?",
      answer: "Laminate is the most durable, low-maintenance choice for apartment kitchens — it resists scratches, is easy to clean, and is available in hundreds of designs including wood-grain, stone, and solid colours. Acrylic gives a more premium look but shows fingerprints slightly more.",
    },
    {
      question: "How much does a modular kitchen cost for a Delhi 2BHK?",
      answer: "For a typical 2BHK kitchen in Delhi (80–120 sq ft), a laminate modular kitchen starts from around ₹1.5 lakh and a mid-range acrylic kitchen from ₹2.5 lakh. The final price depends on the number of cabinets, hardware choice, and countertop. A free visit gives you an exact quote.",
    },
  ],

  "delhi-mid-mixed": [
    {
      question: "What modular kitchen layouts do you recommend for Delhi homes?",
      answer: "The most popular layouts for Delhi homes are L-shape and parallel — they suit most Indian kitchen sizes (80–140 sq ft) and cooking styles. U-shape is excellent for larger kitchens. For compact homes, a straight layout with full-height cabinets maximises every inch.",
    },
    {
      question: "Is a modular kitchen worth it over a carpenter-made kitchen in Delhi?",
      answer: "Yes, for most Delhi homeowners. A modular kitchen delivers consistent quality (factory-made panels with precision CNC cutting), faster installation (2–4 days vs weeks), easier replacement of individual parts, and a cleaner finish. The total cost is often comparable to a high-quality carpenter kitchen.",
    },
    {
      question: "What warranty do modular kitchen cabinets come with?",
      answer: "We provide a 10-year structural warranty on cabinet carcasses and a 1-year warranty on hardware. The warranty covers manufacturing defects, delamination, and hardware malfunctions — not damage from misuse or water leaks.",
    },
    {
      question: "Can I see the kitchen design before confirming the order?",
      answer: "Absolutely. We provide a full 3D design plan with your chosen layout, materials, and colour after the free home visit. You approve the design and receive a written fixed quote before any payment is made.",
    },
  ],

  "delhi-budget": [
    {
      question: "What is the most affordable modular kitchen option in Delhi?",
      answer: "A laminate or PVC modular kitchen is the most affordable option — prices start from around ₹80,000 for a straight layout and ₹1.2–1.5 lakh for an L-shape kitchen. The carcass and installation are the same as a premium kitchen; you save on the shutter finish and hardware tier.",
    },
    {
      question: "Can I get a modular kitchen on a tight budget in Delhi?",
      answer: "Yes. A compact laminate kitchen with standard hinges and a basic granite countertop is well within reach for most Delhi families. We don't cut corners on the carcass, plywood quality, or installation — only the visible finishes and hardware fittings change with budget.",
    },
    {
      question: "Is PVC or laminate better for a budget modular kitchen?",
      answer: "Both are excellent budget options. Laminate offers more design choices and a better aesthetic; PVC is fully waterproof and ideal for kitchens near water-prone areas. For most Delhi apartments, laminate in a wood-grain or solid finish is the most popular affordable choice.",
    },
    {
      question: "Can I upgrade my modular kitchen later if my budget increases?",
      answer: "Yes — modular kitchen shutters (doors) can be replaced without changing the carcass underneath. You can upgrade from laminate to acrylic shutters in the future without rebuilding the whole kitchen. This makes an entry-level modular kitchen a smart long-term investment.",
    },
  ],

  "gurgaon-luxury": [
    {
      question: "What kitchen designs are popular in Gurgaon's premium sectors?",
      answer: "In Gurgaon's premium sectors and golf course areas, island kitchens and open-plan designs are the current preference — many luxury apartments have large, dedicated kitchen spaces that can accommodate an island counter with seating. Handleless acrylic and PU finishes in white or deep tones are the most requested.",
    },
    {
      question: "Do you work with Gurgaon apartment societies for installation?",
      answer: "Yes. We're familiar with the delivery and installation protocols of most major Gurgaon housing societies, including DLF, Ireo, Emaar, Bestech, and Tata Housing developments. Our team arranges all required permissions in advance and works within society time windows.",
    },
    {
      question: "What is the typical budget for a modular kitchen in Gurgaon's premium areas?",
      answer: "For premium apartments in Gurgaon, modular kitchen budgets typically range from ₹4 lakh to ₹12 lakh depending on size, material, and hardware. Island kitchens or those with full-height tall units can go higher. A free home visit gives you a precise figure.",
    },
    {
      question: "How soon can installation start after design approval in Gurgaon?",
      answer: "Manufacturing typically takes 3–4 weeks from design sign-off. Site installation then takes 2–4 days for most Gurgaon apartments. We schedule installation around your building's loading bay availability to avoid delays.",
    },
  ],

  "gurgaon-mid": [
    {
      question: "What modular kitchen layouts work well for Gurgaon apartments?",
      answer: "Most Gurgaon apartments (2BHK, 3BHK) have dedicated rectangular or L-shaped kitchens of 80–140 sq ft. L-shape and parallel layouts are the most popular — they use the available wall space efficiently and maintain a good working triangle.",
    },
    {
      question: "What finish is most popular for modular kitchens in Gurgaon?",
      answer: "Acrylic and laminate are the most popular choices in Gurgaon's residential sectors. Acrylic gives a premium glossy look; laminate is more practical and scratch-resistant. The choice typically comes down to personal preference and budget.",
    },
    {
      question: "Are there society restrictions for kitchen work in Gurgaon?",
      answer: "Most Gurgaon housing societies permit modular kitchen work during weekdays between 9am and 6pm. Some require prior permission for large deliveries. We handle all coordination with your society office and bring our teams during approved hours.",
    },
    {
      question: "What does installation involve for a Gurgaon flat?",
      answer: "Installation involves securing the cabinet carcasses to the wall, fitting shutters and hinges, placing the countertop, and making final adjustments. We protect your flooring and clean up each day. A standard Gurgaon flat kitchen is typically done in 2–3 days.",
    },
  ],

  "noida-premium": [
    {
      question: "What kitchen layouts are popular in Noida's premium housing societies?",
      answer: "In Noida's premium sectors and expressway corridors, L-shape kitchens with a breakfast counter, U-shape layouts, and island kitchens are all popular. Many luxury apartments here have dedicated, large kitchen spaces that suit a range of layout options.",
    },
    {
      question: "What finishes are preferred in Noida's high-end apartments?",
      answer: "PU finish and acrylic are the top choices for Noida's premium buyers — they deliver a furniture-grade satin or gloss finish that works well with the modern, neutral interiors common in expressway-corridor apartments. Veneer is also popular for homeowners wanting a warm wood look.",
    },
    {
      question: "How is delivery and installation managed in Noida high-rise societies?",
      answer: "We coordinate directly with your society's management office to schedule deliveries during permitted hours. Noida high-rise societies typically allow weekday deliveries from 9am–6pm. Our team arrives on the confirmed date with all materials pre-cut and ready to install.",
    },
    {
      question: "What payment structure do you follow for Noida projects?",
      answer: "We work on a milestone-based payment plan: 30% on design confirmation, 60% on material delivery, and 10% on installation completion. No advance payments are required before the design plan is approved and shared with you.",
    },
  ],

  "noida-mid": [
    {
      question: "What modular kitchen layouts are suitable for Noida apartments?",
      answer: "Most Noida apartments have rectangular kitchens of 80–120 sq ft. L-shape is the most popular layout — it uses corner space efficiently and works well with a single window. Parallel layouts work well in narrower kitchens and are increasingly popular in Noida's 2BHK segment.",
    },
    {
      question: "What is the most popular finish for modular kitchens in Noida?",
      answer: "Laminate and acrylic are the most common choices in Noida's residential sector. Laminate is chosen for its durability and design variety; acrylic is popular in newer apartments where the buyer wants a more premium kitchen finish within a reasonable budget.",
    },
    {
      question: "Do you serve all of Noida's sectors?",
      answer: "Yes — we serve the entire Noida and Greater Noida West belt, including all sector roads, expressway corridors, and Noida Extension. Our installation team is based locally, which means faster response times and no travel surcharges.",
    },
    {
      question: "What does the free home visit include in Noida?",
      answer: "Our designer visits your home, takes exact measurements, discusses your cooking habits and storage needs, and notes any structural considerations (low lintels, beam positions, plumbing points). You receive a full 3D design plan and written quote within 48 hours of the visit.",
    },
  ],

  "ghaziabad": [
    {
      question: "What is the most affordable modular kitchen option in Ghaziabad?",
      answer: "In Ghaziabad, laminate kitchens are the most popular value option — they're durable, easy to maintain, and available in a wide range of designs. A standard L-shape laminate kitchen for a 2BHK typically costs ₹1.2–2 lakh depending on size and hardware.",
    },
    {
      question: "Is EMI available for modular kitchens in Ghaziabad?",
      answer: "Yes, we offer flexible payment options including EMI so you can spread the cost over time. Ask our designer about the current available plans during your free home visit.",
    },
    {
      question: "What layouts work well for Ghaziabad apartments?",
      answer: "Most Ghaziabad apartments have straight or L-shaped kitchens of 60–100 sq ft. L-shape is the most popular because it provides good storage and counter space. Straight layouts are a great choice for smaller kitchens where a single wall is all you have to work with.",
    },
    {
      question: "Do you serve all areas of Ghaziabad?",
      answer: "Yes — we serve Ghaziabad city, Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Crossing Republik, and all surrounding areas. Installation is done by our local Ghaziabad team.",
    },
  ],

  "faridabad": [
    {
      question: "What is the typical modular kitchen budget in Faridabad?",
      answer: "In Faridabad, most homeowners spend ₹1 lakh to ₹3.5 lakh on a modular kitchen — with laminate kitchens being the most popular choice. Acrylic and PU finishes are available for buyers who want a more premium look within a moderate budget.",
    },
    {
      question: "Is EMI available for modular kitchens in Faridabad?",
      answer: "Yes, EMI plans are available so you can install the kitchen you want without the full upfront cost. Ask about available options during the free design consultation.",
    },
    {
      question: "What layouts do you recommend for Faridabad homes?",
      answer: "For Faridabad's predominantly builder-floor and apartment market, L-shape and straight layouts are the most practical. If your kitchen has more space, a parallel layout provides extra counter area. Our designer will recommend the best fit during the free home visit.",
    },
    {
      question: "Do you serve all parts of Faridabad?",
      answer: "Yes — we cover Old Faridabad, NIT, Sector 15–85, BPTP, Neharpar (Faridabad Greater), and all residential areas. Our local installation team ensures on-time delivery and installation.",
    },
  ],

  "default": [
    {
      question: "What materials are available for modular kitchen cabinets?",
      answer: "We offer all major shutter materials: laminate, acrylic, PU finish, membrane, veneer, PVC, glass, and stainless steel. The carcass is always moisture-resistant BWR plywood. Our designer will explain the pros, cons, and pricing of each option during the free home visit.",
    },
    {
      question: "How long does modular kitchen installation take?",
      answer: "Typically 2–4 days for on-site installation, after 3–4 weeks of factory manufacturing. Larger kitchens or those with tall units, islands, or complex layouts may take slightly longer.",
    },
    {
      question: "What warranty do you provide on a modular kitchen?",
      answer: "We provide a 10-year structural warranty on the cabinet carcass and a 1-year warranty on hardware and accessories. Our installation team does a full quality check before handover.",
    },
    {
      question: "Can I see the kitchen design before confirming the order?",
      answer: "Yes — we provide a detailed 3D design plan and written fixed quote after the free home visit. No payment is required until you've reviewed and approved the design.",
    },
  ],
};

// ─── Helper: layout suitability FAQ ─────────────────────────────────────────

function getLayoutFaq(slug: string): FaqEntry {
  const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
  if (layout) {
    return {
      question: `Is a ${layout.name.toLowerCase()} right for my home?`,
      answer: `A ${layout.name.toLowerCase()} is best for ${layout.bestFor.toLowerCase()}. It suits kitchens of roughly ${layout.minSqFt}–${layout.maxSqFt} sq ft. During the free home visit we confirm whether it fits your space and workflow.`,
    };
  }
  return {
    question: "Is this kitchen layout right for my home?",
    answer: "Our designer will assess your space during the free home visit and recommend the best layout for your kitchen size, cooking habits, and storage needs.",
  };
}

function getLayoutCostFaq(slug: string): FaqEntry {
  const layout = MODULAR_KITCHEN_LAYOUT_REGISTRY.find((l) => l.slug === slug);
  const toLakh = (n: number) => (n / 100000).toFixed(1);
  if (layout) {
    return {
      question: `How much does a ${layout.name.toLowerCase()} cost?`,
      answer: `A ${layout.name.toLowerCase()} typically ranges from ₹${toLakh(layout.costMin)} lakh to ₹${toLakh(layout.costMax)} lakh depending on the material and hardware you choose.`,
    };
  }
  return {
    question: "How much does this kitchen layout cost?",
    answer: "Costs depend on your kitchen size, chosen material, and hardware. Get a free design consultation for a precise fixed quote.",
  };
}

function getMaterialDurabilityFaq(slug: string): FaqEntry {
  const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
  if (mat) {
    return {
      question: `Is a ${mat.name.toLowerCase()} durable?`,
      answer: `${mat.name} offers ${mat.durability.replace("-", " ")} durability with ${mat.maintenance} maintenance. Its main strengths are ${mat.pros.join(", ").toLowerCase()}.`,
    };
  }
  return {
    question: "How durable is this kitchen material?",
    answer: "Durability varies by material. Our designer will explain the performance profile of each option during the free home visit.",
  };
}

function getMaterialCostFaq(slug: string): FaqEntry {
  const mat = MODULAR_KITCHEN_MATERIAL_REGISTRY.find((m) => m.slug === slug);
  if (mat) {
    return {
      question: `How much does a ${mat.name.toLowerCase()} cost per sq ft?`,
      answer: `${mat.name} shutters typically cost ₹${mat.costMin} to ₹${mat.costMax} per sq ft. The BWR plywood carcass and installation are additional and standard across all materials.`,
    };
  }
  return {
    question: "How much does this kitchen finish cost per sq ft?",
    answer: "Costs vary by material. Get a free design consultation for an exact quote based on your kitchen size and chosen finish.",
  };
}

// ─── Public builder ──────────────────────────────────────────────────────────

export function buildKitchenFaqFromProfile(
  locality: LocalityEntry,
  service: ServiceEntry,
  profile: Readonly<LocalityProfile>,
  pageType: "locality" | "layout" | "material" | "cost",
): KitchenFaqSectionData {
  const name = locality.name;
  const faqs: FaqEntry[] = [];

  // Q1 — always unique: cost + locality name
  if (pageType === "locality") {
    faqs.push({
      question: `How much does a modular kitchen cost in ${name}?`,
      answer: `Modular kitchens in ${name} start from around ₹80,000 for a compact straight kitchen and go up to ₹12 lakh or more for a large island kitchen with premium finishes. Most homes fall between ₹1.5 lakh and ₹5 lakh. Your final price depends on size, material, hardware, and appliances.`,
    });
  } else {
    faqs.push({
      question: "How much does a modular kitchen cost in Delhi NCR?",
      answer: "Modular kitchens start from around ₹80,000 for a compact straight kitchen and go up to ₹12 lakh or more for a large island kitchen with premium finishes. Most homes fall between ₹1.5 lakh and ₹5 lakh depending on size, material, hardware, and appliances.",
    });
  }

  // Q2–Q5 — from FAQ profile for locality pages; specific for layout/material/cost pages
  if (pageType === "locality") {
    const profileFaqs = FAQ_PROFILES[profile.faqProfile] ?? FAQ_PROFILES["default"];
    faqs.push(...profileFaqs);
  } else if (pageType === "layout") {
    faqs.push(
      {
        question: "What is the best material for modular kitchen cabinets?",
        answer: "There is no single best material — it depends on your budget and priorities. Laminate and PVC are the most affordable and durable, acrylic gives a bright high-gloss look, PU offers a premium paint-grade finish, and veneer brings a natural wood aesthetic. The carcass underneath is always moisture-resistant BWR plywood.",
      },
      {
        question: "How long does modular kitchen installation take?",
        answer: "Typically 2–4 days for installation after 3–4 weeks of manufacturing. Larger kitchens with islands or tall units may take a little longer.",
      },
      getLayoutFaq(locality.slug),
      getLayoutCostFaq(locality.slug),
    );
  } else if (pageType === "material") {
    faqs.push(
      {
        question: "What is the best material for modular kitchen cabinets?",
        answer: "There is no single best material — it depends on your budget and priorities. Laminate and PVC are the most affordable and durable, acrylic gives a bright high-gloss look, PU offers a premium paint-grade finish, and veneer brings a natural wood aesthetic.",
      },
      {
        question: "How long does modular kitchen installation take?",
        answer: "Typically 2–4 days for installation after 3–4 weeks of manufacturing. Larger kitchens with islands or tall units may take a little longer.",
      },
      getMaterialDurabilityFaq(locality.slug),
      getMaterialCostFaq(locality.slug),
    );
  } else {
    // cost page
    faqs.push(
      {
        question: "What is the best material for modular kitchen cabinets?",
        answer: "There is no single best material — laminate and PVC are affordable, acrylic gives a high-gloss look, PU offers a premium finish, and veneer provides natural wood aesthetics. The carcass is always moisture-resistant BWR plywood.",
      },
      {
        question: "How long does modular kitchen installation take?",
        answer: "Typically 2–4 days for installation after 3–4 weeks of manufacturing.",
      },
      {
        question: "What affects the final price of a modular kitchen?",
        answer: "The main cost drivers are kitchen size, shutter material, hardware brand, countertop (granite vs quartz), and any appliances or tall units. Layout complexity and accessories like pull-outs and corner units also add to the total.",
      },
      {
        question: "Can I get a modular kitchen on EMI?",
        answer: "Yes, we offer EMI options so you can spread the cost. Ask our designer about available plans during your free quote.",
      },
    );
  }

  // Q6 — always unique: free visit + locality name (locality pages only)
  if (pageType === "locality") {
    faqs.push({
      question: `Do you offer free home visits in ${name}?`,
      answer: `Yes. Our designer visits your home in ${name} at no cost to measure your kitchen, understand your needs, and prepare a design plan and fixed quote.`,
    });
  }

  return {
    id: `${service.slug}-${locality.slug}-kitchen-faq`,
    type: "kitchen-faq",
    version: "v1",
    props: {
      heading: "Frequently Asked Questions",
      faqs,
    },
  };
}
