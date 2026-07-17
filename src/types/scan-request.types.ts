import type { NormalizedEvent } from "./normalized-event.types.js";

/**
 * Payload d'entrée de l'API de scan.
 */
export interface ScanRequest {
  event: NormalizedEvent;
  correlationId?: string;
}

/**
 * Métadonnées de la requête de scan.
 */
export interface ScanRequestMeta {
  receivedAt: number;
  source: "http-api" | "internal" | "batch";
}
