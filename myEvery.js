const myEvery = function (array, cb) {
  for (let idx = 0; idx < array.length; idx++) {
    if (!cb(array[idx], idx, array)) {
      return false;
    }
  }

  return true;
};

myEvery([1, 2, 3], (item) => item > 2); // true
