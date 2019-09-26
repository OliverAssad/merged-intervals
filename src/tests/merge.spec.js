import { expect } from "chai";
import "deep-equal-in-any-order";
import { sort, merge } from "../utils";

describe("02: Merging overlaps of interval arrays ", function() {
  it("given only one interval nothing should happen ", () => {
    // arrange
    const input = [[1, 2]];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).deep.equal([1, 2]);
  });

  it("given unoverlapping interval returns no changes", () => {
    // arrange
    const input = [[1, 2], [3, 4]];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).to.have.lengthOf(2);
  });

  it("given overlapping intervals should result in a merged output", () => {
    // arrange
    const input = [[1, 2], [2, 4]];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).deep.equal([[1, 4]]);
  });

  it("given overlapping intervals and non overlapping should result in a merged output with overlaps", () => {
    // arrange
    const input = [[1, 2], [2, 4], [9, 20]];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).deep.equal([[1, 4], [9, 20]]);
  });

  it("given unordered intervals should result in ordered merged overlaps", () => {
    // arrange
    const input = [
      [1, 2],
      [8, 13],
      [5, 2],
      [2, 4],
      [3, 6],
      [19, 21],
      [3, 4],
      [9, 12]
    ];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).deep.equal([[1, 6], [8, 13], [19, 21]]);
  });

  it("given unordered intervals with duplicated should result in ordered merged overlaps", () => {
    // arrange
    const input = [
      [1, 2],
      [8, 12],
      [5, 2],
      [2, 4],
      [3, 6],
      [19, 21],
      [3, 4],
      [9, 10],
      [12, 13],
      [9, 12]
    ];

    // act
    const sorted = sort(input);
    const merged = merge(sorted);

    // assert
    expect(merged).deep.equal([[1, 6], [8, 13], [19, 21]]);
  });
});
