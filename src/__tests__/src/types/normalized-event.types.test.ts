import { describe, it, expect } from "vitest";
import type { NormalizedEvent } from "../../../types/normalized-event.types";

describe("NormalizedEvent", () => {
  it("smoke test", () => {
    const evt: NormalizedEvent = {
      id: "evt-1",
      source: "scan",
      timestamp: Date.now(),
      metadata: {},
      sourceIp: "127.0.0.1",
      userAgent: "Vitest",
      service: "service-scan",
    };

    expect(evt.id).toBe("evt-1");
  });
});
