import { describe, it, expect } from "vitest";
import { extractPostData } from "./posts";
describe("extractPostData", () => {
  const textTitle = "title";
  const textContent = "some content ";
  it("should extract  title and content  from the provided form data", () => {
    const formData = {
      title: textTitle,
      content: textContent,
      get(identifier) {
        return this[identifier];
      },
    };

    const data = extractPostData(formData);
    expect(data.title).toBe(textTitle);
    expect(data.content).toBe(textContent);
  });
});
