import type { NormalizedEvent } from "./normalized-event.types.js";
import type {
  ScanDetector,
  ScanAdapter,
  ScanResult,
  ScanContext,
} from "@j3r3mcdev/lib-scan";

/**
 * Contexte d'exécution du pipeline de scan.
 * Ce contexte est interne au service-scan.
 */
export interface ScanExecutionContext {
  event: NormalizedEvent;
  detectors: ScanDetector[];
  adapters: ScanAdapter[];
  startedAt: number;
  correlationId?: string;
}

/**
 * Résultat enrichi du service-scan.
 */
export interface ScanServiceResult {
  result: ScanResult;
  context: {
    correlationId?: string;
    durationMs: number;
    detectorCount: number;
    adapterCount: number;
  };
}
