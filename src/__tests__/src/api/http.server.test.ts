import { describe, it, expect, vi } from "vitest";
import { HttpServer } from "../../../api";
import { registerScanRoutes } from "../../../api/routes/scan.routes";

// On mock uniquement registerScanRoutes
vi.mock("../../../api/routes/scan.routes", () => ({
  registerScanRoutes: vi.fn(),
}));

describe("HttpServer", () => {
  it("instancie correctement", () => {
    const server = new HttpServer(3000);
    expect(server).toBeDefined();
  });

  it("le serveur appelle registerScanRoutes pour chaque requête", () => {
    const server = new HttpServer(3000);

    // On récupère le handler interne sans mocker node:http
    const handler = (server as any).server._events.request;

    const req = {} as any;
    const res = {} as any;

    handler(req, res);

    expect(registerScanRoutes).toHaveBeenCalledWith(req, res);
  });
});
