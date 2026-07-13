import { describe, it, expect } from "vitest";
import { placeholder } from "../index";

describe("lib-scan placeholder", () => {
  it("should load the entrypoint correctly", () => {
    expect(placeholder).toBeDefined();
    expect(placeholder.status).toBe("ready");
  });
});
