import { describe, it, expect, vi, beforeEach } from "vitest";
import { showError } from "./dom";
import fs from "fs";
import path from "path";
// initializing virtual dom for testing
const htmlDomPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDomPath).toString();
const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);
//clearing the document before each test so that does it not have spill over effect
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

it("should add and error paragraph to the id='errors' element", () => {
  showError("error");
  const errorElement = document.getElementById("errors");
  const errorPara = errorElement.firstElementChild;
  expect(errorPara).not.toBeNull();
});

it("should not contain error paragraph initially ", () => {
  const errorElement = document.getElementById("errors");
  const errorPara = errorElement.firstElementChild;
  expect(errorPara).toBeNull();
});

it("should output  the   provided message in the error element ", () => {
  const errorMessage = "error";
  showError(errorMessage);
  const errorElement = document.getElementById("errors");
  const errorPara = errorElement.firstElementChild;
  expect(errorPara.textContent).toBe(errorMessage);
});
