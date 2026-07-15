import type { ScanExecutionContext } from "../../types";
import type { ScanContext } from "@j3r3mcdev/lib-scan";

export class ApiScanContextMapper {
  static toScanContext(exec: ScanExecutionContext): ScanContext {
    return {
      events: [exec.event], // on enveloppe l’event dans un tableau
      metadata: {
        correlationId: exec.correlationId,
        startedAt: exec.startedAt,
      },
      findings: [], // pipeline les remplira
      chains: [], // pipeline les remplira
    };
  }
}
