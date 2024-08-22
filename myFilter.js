const myFilter = function (array, cb) {
  const newArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    if (cb(array[idx], idx, array)) {
      newArray.push(array[idx]);
    }
  }

  return newArray;
};
