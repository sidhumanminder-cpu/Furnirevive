/**
 * SEO URL validation test — run via: npx vitest run scripts/validate-seo-urls.test.ts
 *
 * Exact cross-system duplicates = test FAILS (errors found)
 * Semantic duplicate candidates = test PASSES but prints warnings
 */

import { describe, it, expect } from "vitest";
import { validateCrossSystemUrls } from "../src/lib/registry/validate-registry.ts";

describe("Cross-system SEO URL validation", () => {
  const result = validateCrossSystemUrls();

  it("has no exact cross-system duplicate URLs (programmatic registry ∩ legacy batch)", () => {
    if (result.exactCrossSystemDuplicates.length > 0) {
      const list = result.exactCrossSystemDuplicates.map((d) => d.url).join("\n  ");
      throw new Error(`Found ${result.exactCrossSystemDuplicates.length} exact cross-system duplicate URL(s):\n  ${list}`);
    }
    expect(result.exactCrossSystemDuplicates).toHaveLength(0);
  });

  it("reports semantic duplicate candidates as warnings (not failures)", () => {
    if (result.semanticDuplicateCandidates.length > 0) {
      console.warn(
        `\n⚠ ${result.semanticDuplicateCandidates.length} semantic duplicate locality slug pair(s) detected:\n` +
          result.semanticDuplicateCandidates
            .map(
              (p) =>
                `  [${p.pattern}]\n    ${p.slugA}  ↔  ${p.slugB}\n    Affected URLs (${p.affectedUrls.length}): ${p.affectedUrls.slice(0, 4).join(", ")}${p.affectedUrls.length > 4 ? ` ... +${p.affectedUrls.length - 4} more` : ""}`
            )
            .join("\n")
      );
    }
    // Semantic duplicates are warnings only — do NOT fail the test
    expect(result.semanticDuplicateCandidates.length).toBeGreaterThanOrEqual(0);
  });
});
