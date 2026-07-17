import { describe, it, expect, vi } from "vitest";
import { ScanServiceAdapter } from "../../../adapters/scan.service.adapter";
import { ApiScanContextMapper } from "../../../api/mappers/scan-context.mapper";
import { ScanService } from "../../../core/scan.service";
import { loadLibScanDetectors } from "../../../core/scan.loader";

import type {
  ScanDetector,
  ScanAdapter,
  NormalizedEvent,
  ScanResult,
  ScanContext,
  ScanFinding,
} from "@j3r3mcdev/lib-scan";

import type { ScanExecutionContext } from "../../../types";

// Mock loader
vi.mock("../../../core/scan.loader", () => ({
  loadLibScanDetectors: vi.fn(() => {
    const fakeDetector: ScanDetector = {
      id: "det-1",
      name: "FakeDetector",
      applies: vi.fn(() => true),
      execute: vi.fn(() => {
        const finding: ScanFinding = {
          id: "f1",
          vulnerability: "xss",
          severity: "low",
          score: 1,
          evidence: [],
        };
        return [finding];
      }),
    };
    return [fakeDetector];
  }),
}));

// Mock mapper API
vi.mock("../../../api/mappers/scan-context.mapper", () => ({
  ApiScanContextMapper: {
    toScanContext: vi.fn(() => ({
      events: [],
      metadata: {},
      findings: [],
      chains: [],
    })),
  },
}));

// Mock ScanService
vi.mock("../../../core/scan.service", () => {
  return {
    ScanService: class {
      constructor() {}

      run = vi.fn(() => {
        const result: ScanResult = {
          score: 42,
          severity: "low",
          findings: [],
          chains: [],
          timestamp: Date.now(),
          metadata: {},
        };
        return result;
      });
    },
  };
});

describe("ScanServiceAdapter", () => {
  it("scan() retourne un résultat formaté correctement", async () => {
    const adapter = new ScanServiceAdapter();

    const fakeDetector: ScanDetector = {
      id: "det-1",
      name: "FakeDetector",
      applies: vi.fn(() => true),
      execute: vi.fn(() => []),
    };

    const fakeAdapter: ScanAdapter = {
      id: "adapter-1",
      name: "FakeAdapter",
      transform: vi.fn((ctx: ScanContext) => ctx),
    };
    const exec: ScanExecutionContext = {
      correlationId: "abc",
      event: {
        id: "evt-1",
        source: "scan",
        timestamp: Date.now(),
        payload: "{}", // 🔥 doit être string
        metadata: {},
        sourceIp: "127.0.0.1",
        userAgent: "unit-test-agent",
        service: "service-scan", // 🔥 valeur obligatoire
      },
      detectors: [fakeDetector],
      adapters: [fakeAdapter],
      startedAt: Date.now(),
    };

    const result = await adapter.scan(exec);

    expect(ApiScanContextMapper.toScanContext).toHaveBeenCalledWith(exec);

    expect(result.result.score).toBe(42);
    expect(result.result.score).toBe(42);

    expect(result.result.score).toBe(42);
    expect(result.context.correlationId).toBe("abc");
    expect(result.context.detectorCount).toBe(1);
    expect(result.context.adapterCount).toBe(1);
    expect(typeof result.context.durationMs).toBe("number");
  });
});
