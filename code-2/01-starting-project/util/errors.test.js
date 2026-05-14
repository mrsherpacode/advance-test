import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("should contain the provided  statuscode,message  and data", () => {
    const textStatus = 11;
    const message = "hello";
    const data = { key: "text" };
    const textError = new HttpError(textStatus, message, data);
    expect(textError.statusCode).toBe(textStatus);
    expect(textError.message).toBe(message);
    expect(textError.data).toBe(data);
  });
});
describe("HttpError", () => {
  it("should return undefined if no data is provided", () => {
    const textStatus = 11;
    const message = "hello";
    const textError = new HttpError(textStatus, message);
    expect(textError.statusCode).toBe(textStatus);
    expect(textError.message).toBe(message);
    expect(textError.data).toBeUndefined();
  });
});

describe("ValidationError", () => {
  it("should contain the provide message ", () => {
    const message = "hello";
    const textError = new ValidationError(message);
    expect(textError.message).toBe(message);
  });
});
