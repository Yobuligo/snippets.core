import { expect } from "chai";
import { IllegalStateError } from "./../../../../src/lib/core/errors/IllegalStateError";

describe("IllegalStateError", () => {
  it("Is instance of error", () => {
    expect(new IllegalStateError()).instanceOf(Error);
  });
});
