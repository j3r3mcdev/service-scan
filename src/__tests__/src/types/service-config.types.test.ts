import { describe, it, expect } from "vitest";
import type { ServiceConfig } from "../../../types/service-config.types";

describe("ServiceConfig", () => {
  it("smoke test", () => {
    const cfg: ServiceConfig = {
      serviceName: "service-scan",
      scoringEnabled: true,
      orchestratorEnabled: false,
      timeoutMs: 500,
    };

    expect(cfg.timeoutMs).toBe(500);
  });
});
