import { assert } from "mocha";
import { expect, should } from "chai";
import "deep-equal-in-any-order";
import { sort } from "../utils";

describe("01: Sorting the array before ", function() {
  it("given an unsorted interval will be sorted from min -> max ", () => {
    // arrange
    const input = [[1, 2], [3, 2]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted[0]).deep.equal([1, 2]);
    expect(sorted[1]).deep.equal([2, 3]);
  });

  it("given an unsorted interval of collection, will be ordered assendedly using the minimal value of the interval", () => {
    // arrange
    const input = [[3, 7], [1, 2], [19, 12], [4, 2]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted[0]).deep.equal([1, 2]);
    expect(sorted[1]).deep.equal([2, 4]);
    expect(sorted[2]).deep.equal([3, 7]);
    expect(sorted[3]).deep.equal([12, 19]);
  });

  it("given duplicates minivalue should sort the elements with the maximum value", () => {
    // arrange
    const input = [[3, 7], [3, 8], [3, 5]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted[0]).deep.equal([3, 5]);
    expect(sorted[1]).deep.equal([3, 7]);
    expect(sorted[2]).deep.equal([3, 8]);
  });

  it("given one interval only the array should return one interval only", () => {
    // arrange
    const input = [[1, 2]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted[0]).deep.equal([1, 2]);
  });

  it("given one insorted interval only the array should return a sorted interval only", () => {
    // arrange
    const input = [[1, 2]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted[0]).deep.equal([1, 2]);
  });

  it("given intervals with minus values should also be sorted", () => {
    // arrange
    const input = [[4, 5], [-1, 2]];

    // act
    const sorted = sort(input);

    // assert
    expect(sorted).deep.equal([[-1, 2], [4, 5]]);
  });
});
