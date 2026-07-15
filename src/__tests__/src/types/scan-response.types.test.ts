import { describe, it, expect } from "vitest";
import type { ScanResponse } from "../../../types/scan-response.types";
import type { ScanResult } from "@j3r3mcdev/lib-scan";

describe("ScanResponse", () => {
  it("smoke test", () => {
    const result: ScanResult = {
      score: 10,
      severity: "low",
      findings: [],
      chains: [],
      timestamp: Date.now(),
    };

    const res: ScanResponse = { result };

    expect(res.result.score).toBe(10);
  });
});
