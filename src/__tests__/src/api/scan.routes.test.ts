import { describe, it, expect, vi } from "vitest";
import {
  registerScanRoutes,
  _setController,
} from "../../../api/routes/scan.routes";

describe("registerScanRoutes", () => {
  it("appelle handleScan pour POST /scan", () => {
    const mockController = {
      handleScan: vi.fn(),
    };

    _setController(mockController as any);

    const req = { method: "POST", url: "/scan" } as any;
    const res = { end: vi.fn(), writeHead: vi.fn() } as any;

    registerScanRoutes(req, res);

    expect(mockController.handleScan).toHaveBeenCalledWith(req, res);
  });

  it("retourne 404 pour toute autre route", () => {
    const req = { method: "GET", url: "/other" } as any;
    const res = { end: vi.fn(), writeHead: vi.fn() } as any;

    registerScanRoutes(req, res);

    expect(res.writeHead).toHaveBeenCalledWith(404);
    expect(res.end).toHaveBeenCalledWith("Not Found");
  });
});
