import { expect } from "chai";
import { NotImplementedError } from "./../../../../src/lib/core/errors/NotImplementedError";

describe("NotImplementedError", () => {
  it("Is instance of error", () => {
    expect(new NotImplementedError()).instanceOf(Error);
  });
});
