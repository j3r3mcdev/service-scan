import { describe, it, expect } from "vitest";
import * as api from "../../../api";

describe("api/index", () => {
  it("expose les modules", () => {
    expect(api).toBeDefined();
  });
});
