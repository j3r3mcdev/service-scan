import { describe, it, expect } from "vitest";
import { validateDetector } from "../../../core/utils/validate-rule";
import { ScanDetector } from "@j3r3mcdev/lib-scan";

const valid: ScanDetector = {
  id: "det",
  name: "Detector",
  description: "desc",
  applies: () => true,
  execute: () => [],
};

describe("validateDetector", () => {
  it("accepte un détecteur valide", () => {
    expect(() => validateDetector(valid)).not.toThrow();
  });

  it("rejette un détecteur null", () => {
    expect(() => validateDetector(null as any)).toThrow();
  });

  it("rejette un détecteur avec id non-string", () => {
    expect(() => validateDetector({ ...valid, id: 123 } as any)).toThrow();
  });

  it("rejette un détecteur avec name non-string", () => {
    expect(() => validateDetector({ ...valid, name: 123 } as any)).toThrow();
  });

  it("rejette un détecteur sans applies()", () => {
    expect(() =>
      validateDetector({ ...valid, applies: null } as any),
    ).toThrow();
  });

  it("rejette un détecteur sans execute()", () => {
    expect(() =>
      validateDetector({ ...valid, execute: null } as any),
    ).toThrow();
  });
});
