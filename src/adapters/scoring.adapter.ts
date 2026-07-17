import type { ScoringPayload, ScoringResponse } from "../types/index.js";

export class ScoringAdapter {
  constructor(private readonly baseUrl: string) {}

  async score(request: ScoringPayload): Promise<ScoringResponse> {
    // TODO: implémentation HTTP
    throw new Error("ScoringAdapter.score() not implemented");
  }
}
