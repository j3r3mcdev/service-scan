import http from "node:http";
import { registerScanRoutes } from "./routes/scan.routes.js";

export class HttpServer {
  private server: http.Server;

  constructor(private readonly port: number) {
    this.server = http.createServer((req, res) => {
      registerScanRoutes(req, res);
    });
  }

  start() {
    this.server.listen(this.port);
  }

  stop() {
    this.server.close();
  }
}
