const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  //console.log(key, circle[key]);
}

// Object keys anahtarlari dizi seklinde dondurur.
for (let key of Object.keys(circle)) {
  //console.log(key);
}
// entries key ve valuelari dizi seklinde dondurur.
for (let entry of Object.entries(circle)) {
  console.log(entry);
}
