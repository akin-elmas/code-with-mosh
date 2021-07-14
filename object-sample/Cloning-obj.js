const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

/* const another = {};
// old method
for (let key in circle) another[key] = circle[key];
console.log(another); */

// extra field
/* const another = Object.assign({
    color: 'yellow'
}, circle);
console.log(another);
 */

const another = { ...circle };
console.log(another);
