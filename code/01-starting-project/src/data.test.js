import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";
//  spies testing purpose is to test behavior without side effects:
describe("generateReportData", () => {
  it("should execute logFn if provided", () => {
    // vi.fn() is just an empty, observable function.
    // Logfn is replace by logger which is spy not  a real function
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toHaveBeenCalled();
  });
});
