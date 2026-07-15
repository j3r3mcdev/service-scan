import { describe, it, expect } from "vitest";
import type {
  OrchestratorPayload,
  OrchestratorResponse,
} from "../../../types/orchestrator.types";
import type { ScanServiceResult } from "../../../types/scan-context.types";

describe("Orchestrator types", () => {
  it("smoke test", () => {
    const scan: ScanServiceResult = {
      result: {
        score: 10,
        severity: "low",
        findings: [],
        chains: [],
        timestamp: Date.now(),
      },
      context: {
        durationMs: 5,
        detectorCount: 0,
        adapterCount: 0,
      },
    };

    const payload: OrchestratorPayload = { scan };

    expect(payload.scan.result.score).toBe(10);
  });

  it("response smoke test", () => {
    const res: OrchestratorResponse = { accepted: true };
    expect(res.accepted).toBe(true);
  });
});
