/**
 * Decision Guide — Reupholster vs Replace
 *
 * Typed data only. No JSX. No rendering logic.
 * Helps users decide whether to reupholster existing furniture or buy new.
 */

export type DecisionRule = {
  condition: string;
  decision: "reupholster" | "replace";
  reason: string;
  icon: "check" | "x";
};

export type DecisionCategory = {
  heading: string;
  rules: DecisionRule[];
};

export const DECISION_CATEGORIES: DecisionCategory[] = [
  {
    heading: "Frame & Structure",
    rules: [
      {
        condition: "Solid hardwood frame (teak, sheesham, oak)",
        decision: "reupholster",
        reason: "Hardwood frames last 30–50 years. Reupholstering renews the sofa for a fraction of replacement cost.",
        icon: "check",
      },
      {
        condition: "Imported or designer sofa (Natuzzi, Nicoletti, etc.)",
        decision: "reupholster",
        reason: "Quality imported frames are far more valuable than cheap replacements. New fabric restores the original value.",
        icon: "check",
      },
      {
        condition: "Particle board or MDF frame (cheap new sofas)",
        decision: "replace",
        reason: "Particle board deteriorates within 3–5 years. Reupholstering won't extend the life significantly.",
        icon: "x",
      },
      {
        condition: "Frame is cracked, broken, or structurally unsound",
        decision: "replace",
        reason: "Structural repair adds significant cost. A new sofa is often more economical.",
        icon: "x",
      },
    ],
  },
  {
    heading: "Sentimental & Practical Value",
    rules: [
      {
        condition: "Antique, heirloom, or family furniture",
        decision: "reupholster",
        reason: "Irreplaceable pieces deserve restoration. Modern replicas can't match original quality or sentiment.",
        icon: "check",
      },
      {
        condition: "Custom-sized sofa that fits a specific space",
        decision: "reupholster",
        reason: "Replacing a custom piece involves new custom manufacturing. Reupholstery is faster and cheaper.",
        icon: "check",
      },
      {
        condition: "Generic mass-market sofa with no special value",
        decision: "replace",
        reason: "If the sofa has no structural or sentimental advantage, replacement may offer better value.",
        icon: "x",
      },
    ],
  },
  {
    heading: "Cost Comparison",
    rules: [
      {
        condition: "Reupholstery cost is less than 50% of replacement cost",
        decision: "reupholster",
        reason: "Significant savings while retaining a quality frame. Usually applies to premium sofas.",
        icon: "check",
      },
      {
        condition: "Reupholstery cost exceeds 80% of a comparable new sofa",
        decision: "replace",
        reason: "When costs are comparable, a new sofa with warranty may be preferable.",
        icon: "x",
      },
      {
        condition: "Sofa has foam that needs replacement + fabric change",
        decision: "reupholster",
        reason: "Combined foam + fabric service still costs 40–60% less than quality replacement.",
        icon: "check",
      },
    ],
  },
  {
    heading: "Condition & Age",
    rules: [
      {
        condition: "Fabric worn or faded, but sofa feels firm and supportive",
        decision: "reupholster",
        reason: "Good foam and frame — new fabric instantly transforms the sofa.",
        icon: "check",
      },
      {
        condition: "Cushions saggy and uncomfortable with worn fabric",
        decision: "reupholster",
        reason: "New high-density foam + fabric restores like-new comfort. More cost-effective than replacement.",
        icon: "check",
      },
      {
        condition: "Sofa is less than 2 years old with a good frame",
        decision: "reupholster",
        reason: "A nearly-new frame doesn't need replacing — reupholstery gives a fresh look at fraction of cost.",
        icon: "check",
      },
      {
        condition: "More than 15 years old with multiple repairs done",
        decision: "replace",
        reason: "Ageing frames may have hidden structural fatigue. Evaluate carefully before investing in reupholstery.",
        icon: "x",
      },
    ],
  },
];

export const DECISION_SUMMARY = {
  reupholster: {
    headline: "Reupholster if…",
    points: [
      "The frame is solid hardwood or quality imported material",
      "The sofa is custom-sized or has sentimental value",
      "Reupholstery costs less than 50–60% of replacement",
      "You want a different fabric, colour, or style",
      "The foam needs refreshing but the frame is sound",
    ],
  },
  replace: {
    headline: "Replace if…",
    points: [
      "The frame is particle board or structurally damaged",
      "Reupholstery costs are close to buying new",
      "The sofa is a cheap mass-market piece with no advantages",
      "Multiple structural repairs have already been done",
    ],
  },
};
