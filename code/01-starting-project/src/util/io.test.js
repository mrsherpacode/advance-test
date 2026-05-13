import { it, expect, vi } from "vitest";

import { promises as fs } from "fs";
import writeData from "./io";
// Mock testing to prevent side effects,Fast, isolates code
// Vitest creates the mock automatically.
vi.mock("fs");
// mock with custom behavior
vi.mock("path", () => {
  return {
    default: {
      join(...args) {
        return args[args.length - 1];
      },
    },
  };
});
it("should execute  the writeFile method", () => {
  const fileData = "TEST";
  const fileName = "test.txt";
  // // expect the writeFile method to  run successfully, this without mock testing
  writeData(fileData, fileName);
  return expect(writeData(fileData, fileName)).resolves.toBeUndefined();
  // with mock testing and it tests weather the method is called or not
  expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toHaveBeenLastCalledWith(fileName, fileData);
});
