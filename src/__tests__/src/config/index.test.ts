import { describe, it, expect } from "vitest";
import * as config from "../../../config";

describe("config/index", () => {
  it("expose les modules", () => {
    expect(config).toBeDefined();
  });
});
