import { describe, it, expect } from "vitest";
import * as Adapters from "../../../adapters";

describe("adapters/index.ts", () => {
  it("expose les adapters", () => {
    expect(Adapters.OrchestratorAdapter).toBeDefined();
    expect(Adapters.ScoringAdapter).toBeDefined();
  });
});
