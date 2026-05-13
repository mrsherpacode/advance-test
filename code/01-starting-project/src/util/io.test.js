import { it, expect, vi } from "vitest";

import { promises as fs } from "fs";
import writeData from "./io";
// Mock testing to prevent side effects,Fast, isolates code
vi.mock("fs");
it("should execute  the writeFile method", () => {
  const fileDate = "TEST";
  const fileName = "test.txt";
  // // expect the writeFile method to  run successfully, this without mock testing
  // return expect(writeData(fileDate, fileName)).resolves.toBeUndefined();
  writeData(fileDate, fileName);
  // with mock testing and it tests weather the method is called or not
  expect(fs.writeFile).toBeCalled();
});
