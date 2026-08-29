export interface ComparisonOption {
  id: string;
  label: string;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  values: Record<string, "yes" | "no" | "partial">;
}

export const COMPARISON_OPTIONS: ComparisonOption[] = [
  { id: "modular", label: "Modular Kitchen" },
  { id: "carpenter", label: "Carpenter-Made" },
  { id: "semi-modular", label: "Semi-Modular" },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: "factory-precision",
    feature: "Factory CNC precision",
    values: { modular: "yes", carpenter: "no", "semi-modular": "partial" },
  },
  {
    id: "installation-time",
    feature: "Fast installation (2–4 days)",
    values: { modular: "yes", carpenter: "no", "semi-modular": "yes" },
  },
  {
    id: "finish-quality",
    feature: "Consistent finish quality",
    values: { modular: "yes", carpenter: "partial", "semi-modular": "partial" },
  },
  {
    id: "warranty",
    feature: "Structural warranty",
    values: { modular: "yes", carpenter: "no", "semi-modular": "partial" },
  },
  {
    id: "customisation",
    feature: "Full customisation",
    values: { modular: "yes", carpenter: "yes", "semi-modular": "partial" },
  },
  {
    id: "long-term-durability",
    feature: "Long-term durability",
    values: { modular: "yes", carpenter: "partial", "semi-modular": "partial" },
  },
  {
    id: "material-options",
    feature: "Wide material choice",
    values: { modular: "yes", carpenter: "partial", "semi-modular": "partial" },
  },
  {
    id: "premium-hardware",
    feature: "Premium hardware compatibility",
    values: { modular: "yes", carpenter: "no", "semi-modular": "partial" },
  },
];

export const COMPARISON_FOOTNOTE =
  "Modular kitchens are factory-manufactured with precision machinery, giving them a consistent finish, exact tolerances, and structural reliability that on-site carpentry cannot replicate. Unlike carpenter-made kitchens, every modular cabinet is built under quality control before it reaches your home — and backed by a written warranty.";
