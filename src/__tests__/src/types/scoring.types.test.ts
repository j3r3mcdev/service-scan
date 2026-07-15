import { describe, it, expect } from "vitest";
import type {
  ScoringPayload,
  ScoringResponse,
} from "../../../types/scoring.types";
import type { ScanResult } from "@j3r3mcdev/lib-scan";

describe("Scoring types", () => {
  it("smoke test", () => {
    const result: ScanResult = {
      score: 99,
      severity: "high",
      findings: [],
      chains: [],
      timestamp: Date.now(),
    };

    const payload: ScoringPayload = {
      result,
      source: "service-scan",
    };

    expect(payload.result.score).toBe(99);
  });

  it("response smoke test", () => {
    const res: ScoringResponse = {
      score: 80,
      level: "critical",
    };

    expect(res.level).toBe("critical");
  });
});
