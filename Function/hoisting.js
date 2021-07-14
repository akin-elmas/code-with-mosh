// this function is work
walk();

// this function is not a work
run();

// Js engines it moves all the function declaration to the top.
function walk() {
  console.log("walk");
}

// Anonymous Function Expression

let run = function () {
  console.log("run");
};
