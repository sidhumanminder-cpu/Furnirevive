/**
 * Tests for selectFaqs() from the content engine FAQ selector.
 *
 * Uses inline LocalityEntry fixtures (not from the real registry) to verify:
 * - Deterministic output
 * - Content depth tied to contentWeight
 * - No duplicate intent groups
 * - Answer variant stability
 */

import { describe, it, expect } from "vitest";
import { selectFaqs } from "@/lib/content-engine/faq-selector.ts";
import type { LocalityEntry } from "@/lib/registry/types.ts";

// ─── Test fixtures ──────────────────────────────────────────────────────────

function makeLocality(overrides: Partial<LocalityEntry> = {}): LocalityEntry {
  return {
    id: "loc_faq_test",
    slug: "green-park",
    name: "Green Park",
    cluster: "southDelhi",
    city: "delhi",
    propertyType: "established residential colony with DDA flats and independent houses",
    affluence: "mid-high",
    premiumLevel: 3,
    density: "medium",
    housingAge: "established",
    landmarks: ["Green Park Metro", "Deer Park"],
    nearby: ["Hauz Khas", "Safdarjung Enclave", "SDA", "IIT Delhi", "Malviya Nagar"],
    servicePriority: 4,
    contentVersion: 1,
    contentWeight: 90,
    searchPriority: 4,
    status: "published",
    ...overrides,
  };
}

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("selectFaqs", () => {
  describe("determinism", () => {
    it("calling selectFaqs twice with the same fixture returns identical output", () => {
      const locality = makeLocality({ contentWeight: 90 });
      const first = selectFaqs(locality, "sofa-repair");
      const second = selectFaqs(locality, "sofa-repair");

      expect(first).toEqual(second);
      expect(first).toHaveLength(second.length);

      // Same questions in same order
      for (let i = 0; i < first.length; i++) {
        expect(first[i].question).toBe(second[i].question);
        expect(first[i].answer).toBe(second[i].answer);
      }
    });

    it("determinism holds across different services", () => {
      const locality = makeLocality({ contentWeight: 70 });
      const first = selectFaqs(locality, "recliner-repair");
      const second = selectFaqs(locality, "recliner-repair");
      expect(first).toEqual(second);
    });
  });

  describe("content depth driven by contentWeight", () => {
    it("contentWeight 100 → returns 8 FAQs or fewer (if pool is smaller)", () => {
      const locality = makeLocality({ contentWeight: 100 });
      const faqs = selectFaqs(locality, "sofa-repair");
      expect(faqs.length).toBeLessThanOrEqual(8);
      expect(faqs.length).toBeGreaterThan(0);
    });

    it("contentWeight 90 → returns 7 or fewer", () => {
      const locality = makeLocality({ contentWeight: 90 });
      const faqs = selectFaqs(locality, "sofa-repair");
      expect(faqs.length).toBeLessThanOrEqual(7);
      expect(faqs.length).toBeGreaterThan(0);
    });

    it("contentWeight 70 → returns 6 or fewer", () => {
      const locality = makeLocality({ contentWeight: 70 });
      const faqs = selectFaqs(locality, "sofa-repair");
      expect(faqs.length).toBeLessThanOrEqual(6);
      expect(faqs.length).toBeGreaterThan(0);
    });

    it("contentWeight 50 → returns 5 or fewer", () => {
      const locality = makeLocality({ contentWeight: 50 });
      const faqs = selectFaqs(locality, "sofa-repair");
      expect(faqs.length).toBeLessThanOrEqual(5);
      expect(faqs.length).toBeGreaterThan(0);
    });

    it("higher contentWeight produces more or equal FAQs than lower", () => {
      const high = selectFaqs(makeLocality({ contentWeight: 100 }), "sofa-repair");
      const medHigh = selectFaqs(makeLocality({ contentWeight: 90 }), "sofa-repair");
      const med = selectFaqs(makeLocality({ contentWeight: 70 }), "sofa-repair");
      const low = selectFaqs(makeLocality({ contentWeight: 50 }), "sofa-repair");

      expect(high.length).toBeGreaterThanOrEqual(medHigh.length);
      expect(medHigh.length).toBeGreaterThanOrEqual(med.length);
      expect(med.length).toBeGreaterThanOrEqual(low.length);
    });
  });

  describe("answer variant driven by contentWeight % 3", () => {
    it("contentWeight 90: variant index is 0 (90 % 3 = 0)", () => {
      const locality = makeLocality({ contentWeight: 90 });
      const faqs = selectFaqs(locality, "sofa-repair");
      // We can't directly test which variant function is called, but we verify
      // the output is stable (the answer comes from variant 0)
      const faqsAgain = selectFaqs(locality, "sofa-repair");
      expect(faqs).toEqual(faqsAgain);
    });

    it("contentWeight 100: variant index is 1 (100 % 3 = 1)", () => {
      const locality = makeLocality({ contentWeight: 100 });
      const faqs = selectFaqs(locality, "sofa-repair");
      const faqsAgain = selectFaqs(locality, "sofa-repair");
      expect(faqs).toEqual(faqsAgain);
    });

    it("contentWeight 50: variant index is 2 (50 % 3 = 2)", () => {
      const locality = makeLocality({ contentWeight: 50 });
      const faqs = selectFaqs(locality, "sofa-repair");
      const faqsAgain = selectFaqs(locality, "sofa-repair");
      expect(faqs).toEqual(faqsAgain);
    });

    it("different contentWeights with different variant indices produce different answers", () => {
      // Weight 90 (variant 0) vs weight 100 (variant 1) should produce different answers
      // for the same questions (if any overlap)
      const faqs90 = selectFaqs(makeLocality({ contentWeight: 90 }), "sofa-repair");
      const faqs100 = selectFaqs(makeLocality({ contentWeight: 100 }), "sofa-repair");

      // Find any common questions (by question text)
      const questionsIn90 = new Set(faqs90.map((f) => f.question));
      const commonQuestions = faqs100.filter((f) => questionsIn90.has(f.question));

      if (commonQuestions.length > 0) {
        // For at least one common question, the answers should differ due to different variant
        const atLeastOneDifferent = commonQuestions.some((faq100) => {
          const matching90 = faqs90.find((f) => f.question === faq100.question);
          return matching90 && matching90.answer !== faq100.answer;
        });
        expect(atLeastOneDifferent).toBe(true);
      }
    });
  });

  describe("no duplicate intent groups", () => {
    it("no duplicate questions in output (proxy for unique intent groups)", () => {
      const locality = makeLocality({ contentWeight: 100 });
      const faqs = selectFaqs(locality, "sofa-repair");

      const uniqueQuestions = new Set(faqs.map((f) => f.question));
      expect(uniqueQuestions.size).toBe(faqs.length);
    });

    it("no duplicates with contentWeight 90", () => {
      const faqs = selectFaqs(makeLocality({ contentWeight: 90 }), "sofa-repair");
      const uniqueQuestions = new Set(faqs.map((f) => f.question));
      expect(uniqueQuestions.size).toBe(faqs.length);
    });

    it("no duplicates with contentWeight 50", () => {
      const faqs = selectFaqs(makeLocality({ contentWeight: 50 }), "sofa-repair");
      const uniqueQuestions = new Set(faqs.map((f) => f.question));
      expect(uniqueQuestions.size).toBe(faqs.length);
    });
  });

  describe("FAQ output shape", () => {
    it("each FAQ has question and answer as non-empty strings", () => {
      const faqs = selectFaqs(makeLocality({ contentWeight: 100 }), "sofa-repair");

      for (const faq of faqs) {
        expect(typeof faq.question).toBe("string");
        expect(faq.question.length).toBeGreaterThan(0);
        expect(typeof faq.answer).toBe("string");
        expect(faq.answer.length).toBeGreaterThan(0);
      }
    });

    it("questions contain locality name or related context", () => {
      const locality = makeLocality({ name: "Green Park" });
      const faqs = selectFaqs(locality, "sofa-repair");

      // At least some questions should mention the locality name
      const mentionsLocality = faqs.some(
        (f) => f.question.toLowerCase().includes("green park")
      );
      expect(mentionsLocality).toBe(true);
    });
  });
});
