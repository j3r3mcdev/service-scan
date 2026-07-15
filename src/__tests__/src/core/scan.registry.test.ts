import { describe, it, expect } from "vitest";
import { ScanRegistry } from "../../../core/scan.registry";
import {
  ScanDetector,
  ScanRegistry as LibScanRegistry,
} from "@j3r3mcdev/lib-scan";

const makeDetector = (id: string): ScanDetector => ({
  id,
  name: `det-${id}`,
  description: "test",
  applies: () => true,
  execute: () => [],
});

describe("ScanRegistry", () => {
  it("enregistre un détecteur", () => {
    const registry = new ScanRegistry();
    const d = makeDetector("x");
    registry.registerDetector(d);
    expect(registry.listDetectors()).toContain(d);
  });

  it("récupère un détecteur existant", () => {
    const registry = new ScanRegistry();
    const d = makeDetector("abc");
    registry.registerDetector(d);
    expect(registry.getDetector("abc")).toBe(d);
  });

  it("throw si le détecteur n'existe pas", () => {
    const registry = new ScanRegistry();
    expect(() => registry.getDetector("unknown")).toThrow();
  });

  it("retourne une liste vide quand aucun détecteur n'est enregistré", () => {
    const registry = new ScanRegistry();
    expect(registry.listDetectors()).toEqual([]);
  });

  it("écrase un détecteur existant avec le même id", () => {
    const registry = new ScanRegistry();

    const d1 = makeDetector("x");
    const d2 = { ...makeDetector("x"), name: "new-detector" };

    registry.registerDetector(d1);
    registry.registerDetector(d2);

    const found = registry.getDetector("x");
    expect(found).toBe(d2);
    expect(found.name).toBe("new-detector");
  });

  it("retourne l'instance interne de LibScanRegistry", () => {
    const registry = new ScanRegistry();
    const lib = registry.getLibRegistry();

    expect(lib).toBeInstanceOf(LibScanRegistry);
  });
});
