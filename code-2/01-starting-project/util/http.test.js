import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";
const responseData = { key: "some fake response data" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      reject("not a string");
    }
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

it("should convert the data to JSON before sending the request", async () => {
  const textData = { key: "some text " };
  let errorMessage;
  try {
    await sendDataRequest(textData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("not a string");
});

it("should throw an httpError if the response is not ok", () => {
  const textData = { key: "some text " };
  // implementing mockImplementationOnce just for once.
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testData = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(responseData);
          });
        },
      };
      resolve(testData);
    });
  });

  return expect(sendDataRequest(textData)).rejects.toBeInstanceOf(HttpError);
});
