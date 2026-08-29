/**
 * Content Engine — Process Module
 *
 * Deterministic, side-effect-free. Produces a "How It Works" section
 * with 4 steps. Steps vary slightly by service. Domain data only.
 */

import type { LocalityEntry, ServiceEntry } from "@/lib/registry/types.ts";
import type { ProcessSectionData, ProcessStep } from "../types.ts";

const BASE_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book Online or Call",
    description: "Choose a convenient time slot via our booking form or call us directly. Same-day and next-day slots available.",
  },
  {
    step: 2,
    title: "Free Doorstep Inspection",
    description: "Our technician arrives at your home, inspects the furniture thoroughly, and gives you a fixed quote — no obligation.",
  },
  {
    step: 3,
    title: "Expert Repair On-Site",
    description: "Approved? We begin work immediately using professional tools and quality materials. Most repairs are completed in a single visit.",
  },
  {
    step: 4,
    title: "6-Month Warranty",
    description: "Every repair comes with a written 6-month warranty. If anything isn't right, we return and fix it free of charge.",
  },
];

const RECLINER_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book Online or Call",
    description: "Choose a convenient time slot via our booking form or call us directly. Same-day and next-day slots available.",
  },
  {
    step: 2,
    title: "Free Doorstep Inspection",
    description: "Our recliner specialist arrives, tests the mechanism or motor, identifies the fault, and provides a transparent fixed quote.",
  },
  {
    step: 3,
    title: "On-Site Mechanism Repair",
    description: "We carry recliner motors, mechanisms, and hardware on every visit. Most electric and manual recliner repairs are completed in 2–3 hours.",
  },
  {
    step: 4,
    title: "6-Month Warranty",
    description: "Every recliner repair includes a written 6-month warranty covering mechanism, motor, and frame work.",
  },
];

const UPHOLSTERY_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book & Choose Fabric",
    description: "Book a visit and browse 300+ fabric and leather swatches. Our specialist brings samples to your home.",
  },
  {
    step: 2,
    title: "Free Inspection & Quote",
    description: "We inspect the frame, foam, and current upholstery, then provide a detailed quote covering fabric, foam, and labour.",
  },
  {
    step: 3,
    title: "Full Reupholstery at Home",
    description: "Our craftsmen complete the full reupholstery at your doorstep — stripping, re-foaming, and re-covering in one visit.",
  },
  {
    step: 4,
    title: "6-Month Warranty",
    description: "All upholstery work is backed by a 6-month written warranty covering stitching, foam, and fabric quality.",
  },
];

function stepsForService(service: ServiceEntry): ProcessStep[] {
  if (service.slug === "recliner-repair") return RECLINER_STEPS;
  if (service.slug === "sofa-upholstery") return UPHOLSTERY_STEPS;
  return BASE_STEPS;
}

export function buildProcess(locality: LocalityEntry, service: ServiceEntry): ProcessSectionData {
  return {
    id: `${service.slug}-${locality.slug}-process`,
    type: "process",
    version: "v1",
    props: {
      heading: `How ${service.name} Works in ${locality.name}`,
      subheading: `Simple, transparent, and completed at your doorstep — here's what to expect when you book ${service.name.toLowerCase()} with FurniRevive.`,
      steps: stepsForService(service),
    },
  };
}
