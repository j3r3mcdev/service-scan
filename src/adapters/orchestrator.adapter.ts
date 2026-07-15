import type { OrchestratorRequest, OrchestratorResponse } from "../types";

export class OrchestratorAdapter {
  constructor(private readonly baseUrl: string) {}

  /**
   * Envoie une requête au orchestrator-service.
   */
  async send(request: OrchestratorRequest): Promise<OrchestratorResponse> {
    // TODO: implémentation HTTP réelle
    throw new Error("OrchestratorAdapter.send() not implemented");
  }
}
