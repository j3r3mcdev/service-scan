import { describe, it, expect } from "vitest";
import { validateConfig } from "../../../config";

describe("validateConfig", () => {
  it("valide une config correcte", () => {
    const cfg = validateConfig({
      orchestratorUrl: "http://orc",
      scoringUrl: "http://score",
    });

    expect(cfg.orchestratorUrl).toBe("http://orc");
  });

  it("throw si orchestratorUrl manquant", () => {
    expect(() => validateConfig({ scoringUrl: "x" })).toThrow();
  });

  it("throw si scoringUrl manquant", () => {
    expect(() => validateConfig({ orchestratorUrl: "x" })).toThrow();
  });
});
