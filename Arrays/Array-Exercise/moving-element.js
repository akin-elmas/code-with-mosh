let numbers = [1, 2, 3, 4];

let output = move(numbers, 0, 3);

console.log(output);

function move(array, index, offset) {
  let position = index + offset;
  if (position >= array.length) {
    console.log("Invalid offset");
    return;
  } else {
    let output = [...array];
    let element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
  }
}
