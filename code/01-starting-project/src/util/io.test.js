import { it, expect } from "vitest";
import writeData from "./io";
it("should execute  the writeFile method", () => {
  const fileDate = "TEST";
  const fileName = "test.txt";
  // expect the writeFile method to  run successfully
  return expect(writeData(fileDate, fileName)).resolves.toBeUndefined();
});
