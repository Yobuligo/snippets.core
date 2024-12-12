import { expect } from "chai";
import { IllegalArgumentError } from "./../../../../src/lib/core/errors/IllegalArgumentError";

describe("IllegalArgumentError", () => {
  it("Is instance of error", () => {
    expect(new IllegalArgumentError()).instanceOf(Error);
  });
});
