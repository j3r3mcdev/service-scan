import type {
  ScanContext,
  ScanDetector,
  ScanResult,
} from "@j3r3mcdev/lib-scan";

import { ScanPipeline } from "@j3r3mcdev/lib-scan";
import { ScanMapper } from "./scan.mapper.js";

export class ScanService {
  private readonly pipeline: ScanPipeline;

  constructor(
    detectors: ScanDetector[],
    private readonly mapper: ScanMapper,
  ) {
    this.pipeline = new ScanPipeline(detectors);
  }

  run(context: ScanContext): ScanResult {
    const raw = this.pipeline.run(context);
    return this.mapper.map(raw);
  }
}
