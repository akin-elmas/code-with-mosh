let numbers = [1, -1, 2, 3];

let filtered = numbers.filter(function (value) {
  return value >= 0;
});

let items = filtered.map((n) => {
  return { value: n };
});

console.log(items);
