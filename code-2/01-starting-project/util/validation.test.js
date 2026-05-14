import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";
it("should  throw an error message if an empty string is provided as value", () => {
  const textInput = " ";
  const textError = () => validateNotEmpty(textInput);
  expect(textError).toThrow();
});

it("should  throw an error message if an empty string is provided as value", () => {
  const textInput = "   ";
  const textError = () => validateNotEmpty(textInput);
  expect(textError).toThrow();
});

it("should  throw an error message with a message if an empty string is provided as value", () => {
  const textInput = " ";
  const textError = "u should provide some value ";
  const errorMessage = () => validateNotEmpty(textInput, textError);
  expect(errorMessage).toThrow(textError);
});
