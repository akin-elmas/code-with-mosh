function start() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log(i);
}

start();
//normalde let ile tanimlansa console error verirdi block disi erisim ve 5 te dururdu
//vardan oturu hem accesible hemde 5 ide basti.

// var color = "red"
//window.color accessible

//let age =30;
//window.age // undefined
