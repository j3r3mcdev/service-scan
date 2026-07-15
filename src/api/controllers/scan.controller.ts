import type { IncomingMessage, ServerResponse } from "node:http";
import { ScanServiceAdapter } from "../../adapters/scan.service.adapter";
import type { ScanExecutionContext } from "../../types";

export class ScanController {
  private readonly adapter = new ScanServiceAdapter();

  async handleScan(req: IncomingMessage, res: ServerResponse) {
    const chunks: Buffer[] = [];

    req.on("data", (c) => chunks.push(c));
    req.on("end", async () => {
      const body = JSON.parse(Buffer.concat(chunks).toString());

      const exec: ScanExecutionContext = {
        event: body.event,
        detectors: [],
        adapters: [],
        startedAt: Date.now(),
        correlationId: body.correlationId,
      };

      const result = await this.adapter.scan(exec);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    });
  }
}
