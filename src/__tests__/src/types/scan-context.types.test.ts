import { describe, it, expect } from "vitest";
import type {
  ScanExecutionContext,
  ScanServiceResult,
} from "../../../types/scan-context.types";
import type {
  ScanDetector,
  ScanAdapter,
  ScanResult,
} from "@j3r3mcdev/lib-scan";
import type { NormalizedEvent } from "../../../types/normalized-event.types";

describe("ScanExecutionContext", () => {
  it("smoke test", () => {
    const event: NormalizedEvent = {
      id: "evt-1",
      source: "scan",
      timestamp: Date.now(),
      metadata: {},
      sourceIp: "1.1.1.1",
      userAgent: "UA",
      service: "service-scan",
    };

    const ctx: ScanExecutionContext = {
      event,
      detectors: [] as ScanDetector[],
      adapters: [] as ScanAdapter[],
      startedAt: Date.now(),
    };

    expect(ctx.event.id).toBe("evt-1");
  });
});

describe("ScanServiceResult", () => {
  it("smoke test", () => {
    const result: ScanResult = {
      score: 10,
      severity: "low",
      findings: [],
      chains: [],
      timestamp: Date.now(),
    };

    const svc: ScanServiceResult = {
      result,
      context: {
        durationMs: 5,
        detectorCount: 0,
        adapterCount: 0,
      },
    };

    expect(svc.result.score).toBe(10);
  });
});
