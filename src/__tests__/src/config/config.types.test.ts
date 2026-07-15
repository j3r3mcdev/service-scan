import { describe, it, expect } from "vitest";
import type { ServiceScanConfig } from "../../../config";

describe("ServiceScanConfig", () => {
  it("type est assignable", () => {
    const cfg: ServiceScanConfig = {
      orchestratorUrl: "http://orc",
      scoringUrl: "http://score",
      enableDebug: true,
    };

    expect(cfg.orchestratorUrl).toBe("http://orc");
  });
});
