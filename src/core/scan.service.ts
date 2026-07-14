import {
  ScanContext,
  ScanDetector,
  ScanPipeline,
  ScanResult,
} from "@j3r3mcdev/lib-scan";
import { ScanMapper } from "./scan.mapper";

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
