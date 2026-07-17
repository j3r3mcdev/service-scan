import type { ScanDetector } from "@j3r3mcdev/lib-scan";
import { ScanRegistry as LibScanRegistry } from "@j3r3mcdev/lib-scan";

export class ScanRegistry {
  private readonly registry = new LibScanRegistry();

  registerDetector(detector: ScanDetector): void {
    this.registry.registerDetector(detector);
  }

  getDetector(id: string): ScanDetector {
    return this.registry.getDetector(id);
  }

  listDetectors(): ScanDetector[] {
    return this.registry.listDetectors();
  }

  getLibRegistry(): LibScanRegistry {
    return this.registry;
  }
}
