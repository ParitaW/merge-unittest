import { merge } from "../src/merge";

describe("Merge function", () => {
  it("should merge three sorted arrays correctly", () => {
    const collection1 = [1, 2, 3, 4, 5];
    const collection2 = [6, 7, 8, 9, 10];
    const collection3 = [15, 14, 13, 12, 11];

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expected);
  });

  it("should handle empty arrays correctly", () => {
    const expected = [];
    const result = merge([], [], []);
    expect(result).toEqual(expected);
  });
});
