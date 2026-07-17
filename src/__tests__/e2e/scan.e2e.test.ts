import { describe, it, expect } from "vitest";
import request from "supertest";
import { HttpServer } from "../../api";
import { setScanController } from "../../api";
import type { IncomingMessage, ServerResponse } from "node:http";

describe("HttpServer start/stop", () => {
  it("démarre et arrête correctement le serveur", async () => {
    const mockController = {
      handleScan: (req: IncomingMessage, res: ServerResponse) => {
        res.writeHead(200);
        res.end("OK");
      },
    };

    setScanController(mockController as any);

    const server = new HttpServer(0);

    server.start();

    const address = (server as any).server.address();
    const port = address.port;

    const response = await request(`http://localhost:${port}`)
      .post("/scan")
      .send({});

    expect(response.status).toBe(200);
    expect(response.text).toBe("OK");

    server.stop();
  });
});
