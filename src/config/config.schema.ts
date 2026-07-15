import type { ServiceScanConfig } from "./config.types";

export function validateConfig(
  config: Partial<ServiceScanConfig>,
): ServiceScanConfig {
  if (!config.orchestratorUrl) {
    throw new Error("Missing orchestratorUrl");
  }

  if (!config.scoringUrl) {
    throw new Error("Missing scoringUrl");
  }

  return {
    orchestratorUrl: config.orchestratorUrl,
    scoringUrl: config.scoringUrl,
    enableDebug: config.enableDebug ?? false,
  };
}
