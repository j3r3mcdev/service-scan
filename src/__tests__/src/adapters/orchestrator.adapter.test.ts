import { describe, it, expect } from "vitest";
import { OrchestratorAdapter } from "../../../adapters";
import type { OrchestratorRequest } from "../../../types";

describe("OrchestratorAdapter", () => {
  const adapter = new OrchestratorAdapter("http://localhost");

  it("instancie correctement", () => {
    expect(adapter).toBeDefined();
  });

  it("send() throw car non implémenté", async () => {
    const req: OrchestratorRequest = {
      scanId: "123",
      payload: { type: "scan", data: {} },
    };

    await expect(adapter.send(req)).rejects.toThrow(
      "OrchestratorAdapter.send() not implemented",
    );
  });
});
