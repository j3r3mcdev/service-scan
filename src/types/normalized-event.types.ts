import type { NormalizedEvent as BaseNormalizedEvent } from "@j3r3mcdev/lib-scan";

/**
 * NormalizedEvent métier pour service-scan
 * Étend l'événement générique de la lib avec les champs nécessaires au pipeline.
 */
export interface NormalizedEvent extends BaseNormalizedEvent {
  sourceIp: string;
  userAgent: string;
  referer?: string;
  timestamp: number;
  requestId?: string;
  service: "service-scan";
}
