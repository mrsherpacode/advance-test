import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";
const responseData = { key: "some fake response data" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testData = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(responseData);
        });
      },
    };
    resolve(testData);
  });
});
// stopping global browser API fetch to mock it for testing
vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const textData = { key: "some text " };

  return expect(sendDataRequest(textData)).resolves.toEqual(responseData);
});
