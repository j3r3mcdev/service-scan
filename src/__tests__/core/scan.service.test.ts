import { describe, it, expect } from "vitest";
import { ScanService } from "../../core/scan.service";
import { ScanMapper } from "../../core/scan.mapper";
import { ScanDetector, ScanContext } from "@j3r3mcdev/lib-scan";

const context: ScanContext = {
  events: [],
  metadata: {},
  findings: [],
  chains: [],
};

const makeDetector = (
  applies: boolean,
  findings: any[] = [],
): ScanDetector => ({
  id: "det",
  name: "Detector",
  applies: () => applies,
  execute: () => findings,
});

describe("ScanService", () => {
  it("retourne un résultat vide si aucun détecteur n'est fourni", () => {
    const service = new ScanService([], new ScanMapper());
    const result = service.run(context);
    expect(result.findings).toEqual([]);
  });

  it("ignore les détecteurs dont applies() retourne false", () => {
    const d = makeDetector(false, [
      {
        id: "x",
        vulnerability: "xss",
        severity: "low",
        score: 1,
        evidence: [],
      },
    ]);

    const service = new ScanService([d], new ScanMapper());
    const result = service.run(context);

    expect(result.findings).toEqual([]);
  });

  it("collecte les findings des détecteurs valides", () => {
    const d = makeDetector(true, [
      {
        id: "x",
        vulnerability: "xss",
        severity: "high",
        score: 90,
        evidence: [],
      },
    ]);

    const service = new ScanService([d], new ScanMapper());
    const result = service.run(context);

    expect(result.findings.length).toBe(1);
    expect(result.findings[0].id).toBe("x");
  });
});
