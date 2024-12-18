import { expect } from "chai";
import { isNotNull } from "../../../src/lib/utils/isNotNull";

describe("isNotNull", () => {
  it("Returns true if the value is not undefined and not null", () => {
    expect(isNotNull(123)).true;
  });

  it("Returns false if value is undefined", () => {
    expect(isNotNull(undefined)).false;
  });

  it("Returns false if value is null", () => {
    expect(isNotNull(null)).false;
  });
});
