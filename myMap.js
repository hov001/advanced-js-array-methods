const myMap = function (array, cb) {
  const newArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    const res = cb(array[idx], idx, array);

    newArray.push(res);
  }

  return newArray;
};

const res = myMap([1, 2, 3], (item, idx) => {
  return item + idx;
});

console.log(res); // [1, 3, 5]
