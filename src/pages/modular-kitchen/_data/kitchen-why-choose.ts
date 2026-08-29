export interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name (string, renderer imports it)
}

export const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    id: "free-design-consultation",
    title: "Free Design Consultation",
    description: "Our designer visits your home, takes measurements, and creates a detailed design plan with material options and layout drawings — completely free, before you commit.",
    icon: "Layers",
  },
  {
    id: "ten-year-warranty",
    title: "10-Year Structural Warranty",
    description: "Every cabinet carcass comes with a 10-year structural warranty. We stand behind our manufacturing quality — in writing.",
    icon: "ShieldCheck",
  },
  {
    id: "factory-precision",
    title: "Factory Precision, Not Carpenter-Made",
    description: "Cabinets are CNC-cut at our factory with sub-millimetre precision. You get consistent fit and finish that on-site carpentry simply cannot match.",
    icon: "Cpu",
  },
  {
    id: "premium-hardware",
    title: "Premium Hardware Options",
    description: "Choose from Blum, Hettich, Hafele, or Ebco hardware. Soft-close hinges, full-extension drawers, and lift-up systems as standard or upgrade options.",
    icon: "Settings2",
  },
  {
    id: "transparent-pricing",
    title: "Transparent, Fixed Pricing",
    description: "You receive a written, itemised quote before manufacturing begins. No hidden charges, no surprises at handover.",
    icon: "BadgeIndianRupee",
  },
  {
    id: "professional-installation",
    title: "Professional Installation & After-Sales",
    description: "Our certified installation team fits your kitchen in 2–4 days. Post-installation support for adjustments, hardware servicing, and warranty claims.",
    icon: "Wrench",
  },
];
