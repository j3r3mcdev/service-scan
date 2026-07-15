import { describe, it, expect } from "vitest";
import { ApiScanContextMapper } from "../../../api/mappers/scan-context.mapper";
import type { ScanExecutionContext } from "../../../types";

describe("ApiScanContextMapper.toScanContext", () => {
  it("mappe correctement un ScanExecutionContext vers ScanContext", () => {
    // 🔥 On bypass le typage strict
    const exec = {
      event: { foo: "bar" },
      correlationId: "corr-123",
      startedAt: 123456789,
      detectors: [],
      adapters: [],
    } as unknown as ScanExecutionContext;

    const ctx = ApiScanContextMapper.toScanContext(exec);

    expect(ctx).toEqual({
      events: [exec.event],
      metadata: {
        correlationId: "corr-123",
        startedAt: 123456789,
      },
      findings: [],
      chains: [],
    });
  });
});
