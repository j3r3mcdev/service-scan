import { describe, it, expect } from "vitest";
import { ConfigLoader } from "../../../config";

describe("ConfigLoader", () => {
  it("charge correctement une config valide", () => {
    const env = {
      ORCHESTRATOR_URL: "http://orc",
      SCORING_URL: "http://score",
      DEBUG: "true",
    };

    const cfg = ConfigLoader.load(env);
    expect(cfg.enableDebug).toBe(true);
  });

  it("throw si env invalide", () => {
    expect(() => ConfigLoader.load({})).toThrow();
  });
});
