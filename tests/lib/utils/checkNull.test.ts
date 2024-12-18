import { expect } from "chai";
import { checkNull } from "../../../src/lib/utils/checkNull";

describe("checkNull", () => {
  it("Throws error if value is not null", () => {
    expect(() => checkNull(123)).throw(Error);
  });

  it("Returns undefined if value is null", () => {
    expect(checkNull(null)).equal(undefined);
  });

  it("Returns undefined if value is undefined", () => {
    expect(checkNull(undefined)).equal(undefined);
  });
});
