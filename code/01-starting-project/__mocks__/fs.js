import { vi } from "vitest";
//Here, i'm using fake promises to mock  real promises and its imported in io.test.js file and used there.
export const promises = {
  writeFile: vi.fn((path, data) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
