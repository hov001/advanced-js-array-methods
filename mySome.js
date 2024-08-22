const mySome = function (array, cb) {
  for (let idx = 0; idx < array.length; idx++) {
    if (cb(array[idx], idx, array)) return true;
  }

  return false;
};
