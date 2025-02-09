const sum = require("../sum");

test("Sum function should calculate sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
});

test("Sum function should calculate sum of two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
});

test("Sum function should calculate sum of a positive and a negative number", () => {
    expect(sum(5, -3)).toBe(2);
});

test("Sum function should return the same number when adding zero", () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
});

test("Sum function should handle decimal values", () => {
    expect(sum(1.5, 2.3)).toBeCloseTo(3.8); // using toBeCloseTo for floating point precision
});

test("Sum function should handle large numbers", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
});

test("Sum function should handle NaN values", () => {
    expect(sum(NaN, 5)).toBeNaN();
    expect(sum(5, NaN)).toBeNaN();
});

test("Sum function should handle Infinity values", () => {
    expect(sum(Infinity, 5)).toBe(Infinity);
    expect(sum(-Infinity, 5)).toBe(-Infinity);
});
