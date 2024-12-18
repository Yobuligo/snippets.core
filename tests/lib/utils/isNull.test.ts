import { expect } from "chai";
import { isNull } from "./../../../src/lib/utils/isNull";

describe("isNull", () => {
  it("Returns true if value is undefined", () => {
    expect(isNull(undefined)).true;
  });

  it("Returns true if value is null", () => {
    expect(isNull(null)).true;
  });

  it("Returns false if value is not undefined and not null", () => {
    expect(isNull(123)).false;
  });
});
