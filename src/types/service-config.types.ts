/**
 * Configuration métier du service-scan.
 */
export interface ServiceConfig {
  serviceName: "service-scan";
  scoringEnabled: boolean;
  orchestratorEnabled: boolean;
  timeoutMs: number;
}
