import { describe, it, expect } from "vitest";
import type {
  OrchestratorRequest,
  OrchestratorPayload,
  OrchestratorResponse,
} from "../../../types/orchestrator.types";

describe("orchestrator.types", () => {
  it("OrchestratorPayload est assignable", () => {
    const payload: OrchestratorPayload = {
      type: "scan",
      data: { foo: "bar" },
    };

    expect(payload.type).toBe("scan");
  });

  it("OrchestratorRequest est assignable", () => {
    const req: OrchestratorRequest = {
      scanId: "123",
      payload: {
        type: "scan",
        data: {},
      },
    };

    expect(req.scanId).toBe("123");
  });

  it("OrchestratorResponse est assignable", () => {
    const res: OrchestratorResponse = {
      status: "accepted",
      orchestratorId: "orc-1",
      receivedAt: Date.now(),
    };

    expect(res.status).toBe("accepted");
  });
});
