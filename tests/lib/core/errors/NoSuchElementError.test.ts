import { expect } from "chai";
import { NoSuchElementError } from "./../../../../src/lib/core/errors/NoSuchElementError";

describe("NoSuchElementError", () => {
  it("Is instance of error", () => {
    expect(new NoSuchElementError()).instanceOf(Error);
  });
});
