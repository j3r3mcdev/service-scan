import { describe, it, expect } from "vitest";
import { ScoringAdapter } from "../../../adapters";
import type { ScoringPayload } from "../../../types";

describe("ScoringAdapter", () => {
  const adapter = new ScoringAdapter("http://localhost");

  it("instancie correctement", () => {
    expect(adapter).toBeDefined();
  });

  it("score() throw car non implémenté", async () => {
    const payload: ScoringPayload = {
      result: {
        score: 0,
        severity: "low",
        findings: [],
        chains: [],
        timestamp: Date.now(),
        metadata: {},
      },
      source: "service-scan",
    };

    await expect(adapter.score(payload)).rejects.toThrow(
      "ScoringAdapter.score() not implemented",
    );
  });
});
