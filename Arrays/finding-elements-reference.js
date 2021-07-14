//Find kosulu saglayan ilk elementi doner.
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});

//FindIndex de calisacaktir.
const course = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(course);
