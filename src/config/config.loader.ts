import { validateConfig } from "./config.schema.js";
import type { ServiceScanConfig } from "./config.types.js";

export class ConfigLoader {
  static load(env: NodeJS.ProcessEnv): ServiceScanConfig {
    return validateConfig({
      orchestratorUrl: env.ORCHESTRATOR_URL,
      scoringUrl: env.SCORING_URL,
      enableDebug: env.DEBUG === "true",
    });
  }
}
