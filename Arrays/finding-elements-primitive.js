// Primitive Types
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

//old
console.log(numbers.indexOf(1) !== -1);
//new
console.log(numbers.includes(1));

// Reference Types