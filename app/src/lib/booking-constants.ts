import { Sofa, BedDouble, RockingChair, TreePine, Armchair } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceKey = "sofa" | "recliner" | "bed" | "chair" | "polish";

export type ServiceInfo = {
  key: ServiceKey;
  label: string;
  icon: LucideIcon;
  description: string;
  startingPrice: number;
};

export const SERVICES: ServiceInfo[] = [
  {
    key: "sofa",
    label: "Sofa Repair",
    icon: Sofa,
    description: "Cushion re-stuffing, fabric replacement, frame & spring repair",
    startingPrice: 999,
  },
  {
    key: "recliner",
    label: "Recliner Repair",
    icon: Armchair,
    description: "Mechanism repair, leather restoration, motor fixing & overhaul",
    startingPrice: 1499,
  },
  {
    key: "bed",
    label: "Bed Repair",
    icon: BedDouble,
    description: "Headboard, slat replacement, frame reinforcement",
    startingPrice: 1199,
  },
  {
    key: "chair",
    label: "Chair Repair",
    icon: RockingChair,
    description: "Dining, office, wooden chairs — legs, re-upholstery",
    startingPrice: 599,
  },
  {
    key: "polish",
    label: "Wood Polish",
    icon: TreePine,
    description: "French polish, melamine, PU coating, scratch removal",
    startingPrice: 799,
  },
] as const;

export const SERVICE_MAP = Object.fromEntries(
  SERVICES.map((s) => [s.key, s])
) as Record<ServiceKey, ServiceInfo>;

export const TIME_SLOTS = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
] as const;

export const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  confirmed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  completed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};
