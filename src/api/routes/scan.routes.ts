import type { IncomingMessage, ServerResponse } from "node:http";
import { ScanController } from "../controllers/scan.controller";

let controller: ScanController = new ScanController();

export function setScanController(instance: ScanController) {
  controller = instance;
}

export function registerScanRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === "POST" && req.url === "/scan") {
    return controller.handleScan(req, res);
  }

  res.writeHead(404);
  res.end("Not Found");
}
