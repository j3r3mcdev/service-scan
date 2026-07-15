import type { ScanResult } from "@j3r3mcdev/lib-scan";

/**
 * Payload envoyé au scoring engine.
 */
export interface ScoringPayload {
  result: ScanResult;
  correlationId?: string;
  source: "service-scan";
}

/**
 * Réponse du scoring engine.
 */
export interface ScoringResponse {
  score: number;
  level: "info" | "low" | "medium" | "high" | "critical";
  correlationId?: string;
}
