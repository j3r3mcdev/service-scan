import type { IncomingMessage, ServerResponse } from "node:http";
import { ScanController } from "../controllers/scan.controller.js";

let controller: ScanController = new ScanController();

export function setScanController(instance: ScanController) {
  controller = instance;
}

export function registerScanRoutes(req: IncomingMessage, res: ServerResponse) {
  if (req.method === "POST" && req.url === "/scan") {
    return controller.handleScan(req, res);
  }

  if (req.method === "GET" && req.url === "/scan") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", message: "GET /scan works" }));
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"status":"healthy"}');
    return;
  }

  if (req.method === "GET" && req.url === "/log-test") {
    console.log("[service-scan] GET /log-test called");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"status":"ok"}');
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
}
