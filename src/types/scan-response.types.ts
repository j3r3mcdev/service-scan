import type { ScanResult } from "@j3r3mcdev/lib-scan";

/**
 * Payload de sortie de l'API de scan.
 */
export interface ScanResponse {
  result: ScanResult;
  correlationId?: string;
}

/**
 * Structure d'erreur standardisée pour l'API.
 */
export interface ScanErrorResponse {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  correlationId?: string;
}
