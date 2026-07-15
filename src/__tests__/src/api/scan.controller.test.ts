import { describe, it, expect, vi } from "vitest";
import type { IncomingMessage, ServerResponse } from "node:http";
import { ScanController } from "../../../api/controllers/scan.controller";
import type { ScanServiceResult } from "../../../types";

vi.mock("../../../adapters/scan.service.adapter", () => {
  return {
    ScanServiceAdapter: vi.fn().mockImplementation(() => ({
      scan: vi.fn(
        async () =>
          ({
            result: {
              score: 42,
              severity: "medium",
              findings: [],
              chains: [],
              timestamp: Date.now(),
              metadata: {},
            },
            context: {
              correlationId: "corr-1",
              durationMs: 10,
              detectorCount: 0,
              adapterCount: 0,
            },
          }) satisfies ScanServiceResult,
      ),
    })),
  };
});

describe("ScanController", () => {
  it("instancie correctement", () => {
    const controller = new ScanController();
    expect(controller).toBeDefined();
  });

  it("handleScan lit le body, appelle l'adapter et renvoie le résultat", async () => {
    const controller = new ScanController();

    const req = {
      method: "POST",
      url: "/scan",
      on: vi.fn(),
    } as unknown as IncomingMessage;

    const writeHead = vi.fn();
    const end = vi.fn();
    const res = { writeHead, end } as unknown as ServerResponse;

    const body = {
      event: { id: "evt-1", type: "http", payload: {} },
      correlationId: "corr-1",
    };

    // simulate data/end
    const handlers: Record<string, (chunk?: Buffer) => void> = {};

    (req.on as unknown as ReturnType<typeof vi.fn>).mockImplementation(
      (event: string, cb: (chunk?: Buffer) => void) => {
        handlers[event] = cb;
      },
    );

    // attendre la fin du handler
    const done = new Promise<void>((resolve) => {
      end.mockImplementation(() => resolve());
    });

    controller.handleScan(req, res);

    handlers["data"](Buffer.from(JSON.stringify(body)));
    handlers["end"]();

    await done;

    // Vérification robuste
    expect(writeHead).toHaveBeenCalled();
    const [status, headers] = writeHead.mock.calls[0];

    expect(status).toBe(200);

    const contentType =
      headers["Content-Type"] ??
      headers["content-type"] ??
      headers["Content-type"];

    expect(contentType.toLowerCase()).toContain("application/json");

    const payload = JSON.parse(end.mock.calls[0][0] as string);
    expect(payload.result).toBeDefined();
    expect(payload.context.correlationId).toBe("corr-1");
  });
});
