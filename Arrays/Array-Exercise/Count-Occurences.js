let numbers = [1, 2, 3, 4];

let count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
  /* let count = 0;
  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
    return count;
  } */
  return array.reduce((accumulator, current) => {
    let occurence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  });
}
