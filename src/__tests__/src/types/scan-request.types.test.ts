import { describe, it, expect } from "vitest";
import type { ScanRequest } from "../../../types/scan-request.types";
import type { NormalizedEvent } from "../../../types/normalized-event.types";

describe("ScanRequest", () => {
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

    const req: ScanRequest = { event };

    expect(req.event.id).toBe("evt-1");
  });
});
