import { expect } from "chai";
import { NotSupportedError } from "./../../../../src/lib/core/errors/NotSupportedError";

describe("NotSupportedError", () => {
  it("Is instance of error", () => {
    expect(new NotSupportedError()).instanceOf(Error);
  });
});
