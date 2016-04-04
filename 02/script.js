//1.1
var piramide = "";
for (var i = 0; i < 7; i++) {
  piramide += "#";
  console.log(piramide);
}
//1.2
for (var i = 0; i <= 10; i++) {
  if ((i % 3) === 0) {
  console.log("Fizz");
} else   if ((i % 5) === 0) {
  console.log("Buzz");
} else {
  console.log(i);
}
}

//second part
for (var i = 0; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log("FizzBuz");
  }
  else {
  console.log(i);
}
}


//1.3
function chees(size) {
  var lista = "";
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      lista += " ";
    }
    for (var j = 0; j < size / 2; j++) {
      lista += "#";
      lista += " ";
    }
    lista += "\n";
  }
  console.log(lista);
}
chees(16);
