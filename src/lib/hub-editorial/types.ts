export type HubEditorial = {
  /** 2 paragraphs, 150-200 words in total */
  intro: string[];
  /** 4 blocks, one per sub-area of the zone */
  areaNotes: { title: string; body: string }[];
  /** 5 blocks about the service's common problems, written for the zone */
  problems: { title: string; body: string }[];
  /** 5 short steps: call, free inspection, fixed quote, repair, warranty */
  process: string[];
  /** 8 zone- and service-specific Q&As */
  faqs: { q: string; a: string }[];
};
