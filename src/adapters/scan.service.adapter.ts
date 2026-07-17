import { loadLibScanDetectors } from "../core/scan.loader.js";
import { ScanMapper } from "../core/scan.mapper.js";
import { ScanService } from "../core/scan.service.js";
import { ApiScanContextMapper } from "../api/mappers/scan-context.mapper.js";

import type { ScanExecutionContext, ScanServiceResult } from "../types";

export class ScanServiceAdapter {
  private readonly service: ScanService;

  constructor() {
    const detectors = loadLibScanDetectors();
    const mapper = new ScanMapper();

    this.service = new ScanService(detectors, mapper);
  }

  async scan(exec: ScanExecutionContext): Promise<ScanServiceResult> {
    const context = ApiScanContextMapper.toScanContext(exec);

    const started = Date.now();
    const rawResult = this.service.run(context);
    const duration = Date.now() - started;

    return {
      result: rawResult,
      context: {
        correlationId: exec.correlationId,
        durationMs: duration,
        detectorCount: exec.detectors.length,
        adapterCount: exec.adapters.length,
      },
    };
  }
}
