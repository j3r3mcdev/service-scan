import type { ScanServiceResult } from "./scan-context.types";

/**
 * Payload envoyé à l'orchestrator.
 */
export interface OrchestratorPayload {
  scan: ScanServiceResult;
  correlationId?: string;
}

/**
 * Réponse de l'orchestrator (si besoin).
 */
export interface OrchestratorResponse {
  accepted: boolean;
  correlationId?: string;
}
