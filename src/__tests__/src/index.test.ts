import { describe, it, expect } from "vitest";
import * as Types from "../../../src/types";

describe("src/types/index.ts", () => {
  it("le module existe et s'importe correctement", () => {
    expect(Types).toBeDefined();
  });

  it("le module est un objet runtime (même vide)", () => {
    expect(typeof Types).toBe("object");
  });
});
