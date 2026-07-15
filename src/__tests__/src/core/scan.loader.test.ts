import { describe, it, expect, vi } from "vitest";

// 🔥 On MOCK complètement le module lib-scan
vi.mock("@j3r3mcdev/lib-scan", () => {
  return {
    VALID: {
      default: {
        id: "valid",
        name: "Valid Detector",
        applies: () => true,
        execute: () => [],
      },
    },
    NOT_OBJECT: 42,
    INCOMPLETE: { default: { id: "x", name: "bad" } },
    PARTIAL: { default: { id: "y", applies: () => true } },
  };
});

// Après le mock → on importe le loader
import { loadLibScanDetectors } from "../../../core/scan.loader";

describe("loadLibScanDetectors", () => {
  it("charge uniquement les détecteurs valides", () => {
    const detectors = loadLibScanDetectors();

    expect(detectors.length).toBe(1);
    expect(detectors[0].id).toBe("valid");
    expect(detectors[0].name).toBe("Valid Detector");
  });
});
