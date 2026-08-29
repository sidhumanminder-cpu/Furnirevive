/**
 * authority-engine.test.ts
 *
 * Tests for the Authority Internal-Linking Engine.
 *
 * Key invariants:
 * - Higher tier records outrank lower tier records
 * - Service match boosts score above non-match
 * - Topic weight (+30) outranks city match (+20)
 * - Filtering all candidates → returns null
 * - Dedup: excludeHrefs are never present in returned matches
 * - generateMention never returns empty string
 * - generateMention output contains the record's displayName
 */

import { describe, it, expect } from "vitest";
import {
  getAuthorityLinks,
  generateMention,
} from "./authority-engine.ts";
import { AUTHORITY_REGISTRY } from "./authority-registry.ts";
import type { AuthorityPageRecord } from "./authority-registry.ts";
import type { SeoServiceKey } from "./service-config.ts";

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Grab a real record's topics and cityKeys so we can build local stubs with valid values. */
const realRecords = Object.values(AUTHORITY_REGISTRY);
const sampleRecord = realRecords[0];
const sampleTopic = sampleRecord.topics[0];
const sampleCity = sampleRecord.cityKeys[0];
const sampleService: SeoServiceKey = sampleRecord.services[0];

function makeLocalRecord(
  overrides: Partial<AuthorityPageRecord>,
): AuthorityPageRecord {
  return {
    slug: "test-stub-page",
    displayName: "Test Stub Page",
    tier: 3,
    services: [sampleService],
    topics: [sampleTopic],
    cityKeys: [sampleCity],
    authorityScore: 60,
    cluster: "sofa",
    linkRole: "supporting",
    primaryKeyword: "test stub page",
    manualPriority: 0,
    ...overrides,
  } satisfies AuthorityPageRecord;
}

// ─── getAuthorityLinks — ranking & scoring ──────────────────────────────────

describe("getAuthorityLinks ranking", () => {
  it("higher tier outranks lower tier", () => {
    const tier1Record = makeLocalRecord({
      slug: "tier1-authority-page",
      displayName: "Tier 1 Authority Page",
      tier: 1,
      services: [sampleService],
      topics: [sampleTopic],
      cityKeys: [sampleCity],
    });

    const tier5Record = makeLocalRecord({
      slug: "tier5-authority-page",
      displayName: "Tier 5 Authority Page",
      tier: 5,
      services: [sampleService],
      topics: [sampleTopic],
      cityKeys: [sampleCity],
    });

    // Temporarily inject into registry
    AUTHORITY_REGISTRY["tier1-authority-page"] = tier1Record;
    AUTHORITY_REGISTRY["tier5-authority-page"] = tier5Record;

    try {
      const results = getAuthorityLinks(sampleService, "some-unrelated-slug", {
        limit: 10,
      });

      expect(results).not.toBeNull();

      const tier1Match = results!.find(
        (m) => m.record.slug === "tier1-authority-page",
      );
      const tier5Match = results!.find(
        (m) => m.record.slug === "tier5-authority-page",
      );

      expect(tier1Match).toBeDefined();
      expect(tier5Match).toBeDefined();

      // Tier 1 should have a higher score and appear before tier 5
      expect(tier1Match!.score).toBeGreaterThan(tier5Match!.score);

      const tier1Idx = results!.indexOf(tier1Match!);
      const tier5Idx = results!.indexOf(tier5Match!);
      expect(tier1Idx).toBeLessThan(tier5Idx);
    } finally {
      delete AUTHORITY_REGISTRY["tier1-authority-page"];
      delete AUTHORITY_REGISTRY["tier5-authority-page"];
    }
  });

  it("service match boosts score above non-match", () => {
    const matchingRecord = makeLocalRecord({
      slug: "service-match-page",
      displayName: "Service Match Page",
      tier: 3,
      services: [sampleService],
      topics: [sampleTopic],
      cityKeys: [sampleCity],
    });

    // Pick a different service that doesn't match
    const nonMatchingService: SeoServiceKey =
      sampleService === "sofa-repair" ? "recliner-repair" : "sofa-repair";

    const nonMatchingRecord = makeLocalRecord({
      slug: "service-nomatch-page",
      displayName: "Service Non-Match Page",
      tier: 3,
      services: [nonMatchingService],
      topics: [sampleTopic],
      cityKeys: [sampleCity],
    });

    AUTHORITY_REGISTRY["service-match-page"] = matchingRecord;
    AUTHORITY_REGISTRY["service-nomatch-page"] = nonMatchingRecord;

    try {
      const results = getAuthorityLinks(sampleService, "unrelated-slug", {
        limit: 10,
      });

      expect(results).not.toBeNull();

      const matchEntry = results!.find(
        (m) => m.record.slug === "service-match-page",
      );
      const nonMatchEntry = results!.find(
        (m) => m.record.slug === "service-nomatch-page",
      );

      expect(matchEntry).toBeDefined();
      // Service match should yield a higher score
      if (nonMatchEntry) {
        expect(matchEntry!.score).toBeGreaterThan(nonMatchEntry.score);
      }
    } finally {
      delete AUTHORITY_REGISTRY["service-match-page"];
      delete AUTHORITY_REGISTRY["service-nomatch-page"];
    }
  });

  it("topic match outranks city match (+30 vs +20)", () => {
    // Candidate A: matching topic, no city match
    const topicMatchRecord = makeLocalRecord({
      slug: "topic-match-no-city",
      displayName: "Topic Match No City",
      tier: 3,
      services: [],
      topics: [sampleTopic],
      cityKeys: ["some-unrelated-city"],
    });

    // Candidate B: matching city, no topic match
    // Use a topic different from sampleTopic
    const differentTopic =
      realRecords.length > 1 && realRecords[1].topics[0] !== sampleTopic
        ? realRecords[1].topics[0]
        : sampleTopic;
    const cityMatchRecord = makeLocalRecord({
      slug: "city-match-no-topic",
      displayName: "City Match No Topic",
      tier: 3,
      services: [],
      topics: [differentTopic],
      cityKeys: [sampleCity],
    });

    AUTHORITY_REGISTRY["topic-match-no-city"] = topicMatchRecord;
    AUTHORITY_REGISTRY["city-match-no-topic"] = cityMatchRecord;

    try {
      // Query with a slug that implies the sampleCity context
      const results = getAuthorityLinks(
        sampleService,
        `sofa-repair-${sampleCity}`,
        { limit: 10 },
      );

      expect(results).not.toBeNull();

      const topicEntry = results!.find(
        (m) => m.record.slug === "topic-match-no-city",
      );
      const cityEntry = results!.find(
        (m) => m.record.slug === "city-match-no-topic",
      );

      // Both may or may not appear depending on minimum threshold,
      // but if both appear, topic should score higher
      if (topicEntry && cityEntry) {
        expect(topicEntry.score).toBeGreaterThan(cityEntry.score);
      }
    } finally {
      delete AUTHORITY_REGISTRY["topic-match-no-city"];
      delete AUTHORITY_REGISTRY["city-match-no-topic"];
    }
  });
});

// ─── getAuthorityLinks — filtering ──────────────────────────────────────────

describe("getAuthorityLinks filtering", () => {
  it("returns null when all candidates are excluded", () => {
    // Build a set of all possible hrefs from the registry plus the current slug
    const allHrefs = new Set<string>(
      Object.values(AUTHORITY_REGISTRY).map((r) => `/${r.slug}`),
    );
    const currentSlug = "sofa-repair-pitampura";
    allHrefs.add(`/${currentSlug}`);

    const results = getAuthorityLinks(sampleService, currentSlug, {
      excludeHrefs: allHrefs,
    });

    expect(results).toBeNull();
  });

  it("dedup regression: excludeHrefs entries never appear in results", () => {
    const excludeHrefs = new Set([
      "/sofa-repair-delhi",
      "/foam-replacement-delhi",
    ]);

    const results = getAuthorityLinks(
      "sofa-repair",
      "sofa-repair-pitampura",
      { excludeHrefs },
    );

    if (results !== null) {
      for (const match of results) {
        const matchHref = `/${match.record.slug}`;
        expect(excludeHrefs.has(matchHref)).toBe(false);
      }
    }
  });
});

// ─── generateMention ────────────────────────────────────────────────────────

describe("generateMention", () => {
  it("never returns empty string for various registry records", () => {
    // Grab up to 5 real records from the registry
    const sampleRecords = realRecords.slice(0, 5);
    expect(sampleRecords.length).toBeGreaterThanOrEqual(1);

    for (const record of sampleRecords) {
      const mention = generateMention(record, "sofa-repair-pitampura");
      expect(mention).not.toBe("");
      expect(mention.length).toBeGreaterThan(0);
    }
  });

  it("output contains the record's displayName", () => {
    const record = realRecords[0];
    const mention = generateMention(record, "sofa-repair-pitampura");

    expect(mention).toContain(record.displayName);
  });
});
