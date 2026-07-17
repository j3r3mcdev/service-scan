import type { ScanDetector } from "@j3r3mcdev/lib-scan";

export const validateDetector = (detector: ScanDetector): void => {
  if (!detector) throw new Error("Detector is null or undefined");

  if (!detector.id || typeof detector.id !== "string")
    throw new Error("Detector must have a valid id");

  if (!detector.name || typeof detector.name !== "string")
    throw new Error("Detector must have a valid name");

  if (typeof detector.applies !== "function")
    throw new Error("Detector.applies must be a function");

  if (typeof detector.execute !== "function")
    throw new Error("Detector.execute must be a function");
};
