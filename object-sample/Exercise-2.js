//let address = createAddress("istanbul", "3", 33);

// Factory
/* function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
} */

// Constructor
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let a23 = new Address("istanbul", "3", 33);

console.log(a23);
