const myReduce = function (array, cb, initialValue) {
  let aggr = initialValue !== undefined ? initialValue : array[0];
  let start = initialValue !== undefined ? 0 : 1;

  while (start < array.length) {
    aggr = cb(aggr, array[start], start, array);

    start++;
  }

  return aggr;
};

console.log(myReduce([1, 2, 3], (acc, item) => acc + item)); // 6
console.log(myReduce([1, 2, 3], (acc, item) => acc + item, 5)); // 11
