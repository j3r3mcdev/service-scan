import type { IncomingMessage, ServerResponse } from "node:http";
import { ScanController } from "../controllers/scan.controller";

let controller = new ScanController(); // ← on le rend remplaçable

export function _setController(mock: ScanController) {
  controller = mock;
}

export function registerScanRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === "POST" && req.url === "/scan") {
    return controller.handleScan(req, res);
  }

  res.writeHead(404);
  res.end("Not Found");
}
