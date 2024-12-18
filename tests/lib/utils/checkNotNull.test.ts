import { expect } from "chai";
import { checkNotNull } from "./../../../src/lib/utils/checkNotNull";

describe("checkNotNull", () => {
  it("Throws Error if value is undefined", () => {
    expect(() => checkNotNull(undefined)).throw(Error);
  });

  it("Throws Error if value is null", () => {
    expect(() => checkNotNull(null)).throw(Error);
  });

  it("Returns value if value is not null and not undefined", () => {
    const value = 123;
    expect(checkNotNull(value)).equal(value);
  });
});
