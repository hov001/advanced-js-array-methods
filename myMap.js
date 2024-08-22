const myMap = function (array) {};

const res = myMap([1, 2, 3], (item, idx) => {
  return item + idx;
});

console.log(res); // [1, 3, 5]
