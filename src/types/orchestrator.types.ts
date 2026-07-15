export interface OrchestratorRequest {
  scanId: string;
  payload: OrchestratorPayload;
}

export interface OrchestratorPayload {
  type: string;
  data: unknown;
}

export interface OrchestratorResponse {
  status: "accepted" | "rejected";
  orchestratorId: string;
  receivedAt: number;
}
