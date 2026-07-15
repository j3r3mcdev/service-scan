import { describe, it, expect } from "vitest";
import * as ServiceScan from "../../../index";

describe("src/index.ts", () => {
  it("expose core et types", () => {
    expect(ServiceScan).toBeDefined();
    expect(ServiceScan.core).toBeDefined();
    expect(ServiceScan.types).toBeDefined();
  });

  it("core et types sont des objets runtime", () => {
    expect(typeof ServiceScan.core).toBe("object");
    expect(typeof ServiceScan.types).toBe("object");
  });
});
