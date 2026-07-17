import { describe, it, expect } from "vitest";
import { ScanMapper } from "../../../core/scan.mapper";
import type { ScanResult } from "@j3r3mcdev/lib-scan";

describe("ScanMapper", () => {
  const mapper = new ScanMapper();

  const sample: ScanResult = {
    score: 42,
    severity: "medium",
    findings: [],
    chains: [],
    timestamp: Date.now(),
    metadata: { a: 1 },
  };

  it("retourne un nouvel objet identique", () => {
    const mapped = mapper.map(sample);
    expect(mapped).toEqual(sample);
    expect(mapped).not.toBe(sample);
  });

  it("ne modifie pas les champs", () => {
    const mapped = mapper.map(sample);
    expect(mapped.score).toBe(42);
    expect(mapped.metadata).toEqual({ a: 1 });
  });
});
