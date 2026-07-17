import type { ScanResult } from "@j3r3mcdev/lib-scan";

export class ScanMapper {
  map(result: ScanResult): ScanResult {
    return { ...result };
  }
}
