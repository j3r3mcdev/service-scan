import * as LibScan from "@j3r3mcdev/lib-scan";

import { ScanDetector } from "@j3r3mcdev/lib-scan";

export const loadLibScanDetectors = (): ScanDetector[] => {
  const detectors: ScanDetector[] = [];

  for (const key of Object.keys(LibScan)) {
    const module = (LibScan as any)[key];

    // module peut être :
    // - un détecteur direct
    // - un module CJS avec .default
    const value = module?.default ?? module;

    if (
      value &&
      typeof value === "object" &&
      typeof value.id === "string" &&
      typeof value.name === "string" &&
      typeof value.applies === "function" &&
      typeof value.execute === "function"
    ) {
      detectors.push(value as ScanDetector);
    }
  }

  return detectors;
};
