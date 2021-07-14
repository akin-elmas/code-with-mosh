let person = {
  firstName: "aelmss",
  lastName: "aezakmi",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "null";
} catch (e) {
  alert(e);
}
console.log(person);
