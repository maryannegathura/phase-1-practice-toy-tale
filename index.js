// test-helpers.test.js

const { sum } = require("./helpers");

describe("sum function", () => {
  it("adds two positive numbers correctly", () => {
    expect(sum(5, 10)).toBe(15); // 5 + 10 should be 15
  });

  it("adds a positive and a negative number correctly", () => {
    expect(sum(5, -3)).toBe(2); // 5 + (-3) should be 2
  });

  it("adds two negative numbers correctly", () => {
    expect(sum(-8, -4)).toBe(-12); // -8 + (-4) should be -12
  });

  it("adds zero and a number correctly", () => {
    expect(sum(0, 7)).toBe(7); // 0 + 7 should be 7
  });
});
