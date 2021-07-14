let numbers = [1, 2, 3];

// Tum elemanlar sarta uygunsa true
/* let allPositive = numbers.every(function (value) {
  return value >= 0;
}); */

// bir tane uygun bulursa true doner
let allPositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(allPositive);
