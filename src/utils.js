
export const sort = intervals =>
intervals
  .map(i => i.sort((a, b) => a - b))
  .sort(([a, b], [c, d]) => a - c || b - d);

export const merge = intervals => {
let min, max;
return intervals.reduce((accumulator, current, index) => {
  // in the first iteration the accumulator is not an array of arrays (i.e [[x,y], [x,y]])
  // but rather an array of [x,y]
  if (index === 1) {
    // get the minimal calue of the two arrays
    min = current[0] < accumulator[0] ? current[0] : accumulator[0];
    max = current[1] > accumulator[1] ? current[1] : accumulator[1]; // the max value since it's already sorted

    return current[0] > accumulator[1] // (e.g [[1,2], [4,5]])
      ? [[...accumulator], [...current]] // the accumulator will be the combination of both
      : // otherwise merge into one array ranging from min -> max (e.g [1,5])
        [[min, max]];
  }

  // e.g if accu = [[1,2], [4,5]] and currnet = [7,8] => [[1,2], [4,5], [7,8]]
  if (max < current[0]) {
    // set max to the maximum value of the current since its any way sorted!
    max = current[1];

    return [...accumulator, current];
  }

  if (current[1] > max) max = current[1];
  accumulator[accumulator.length - 1][1] = max;
  return [...accumulator];
});
};
