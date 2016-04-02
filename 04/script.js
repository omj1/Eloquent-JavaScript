//LIST
// function arrayToList(tablica) {
//   var lista = {};
//   for (var i = 0; i < tablica.length; i++) {
//     lista[i + 1] = tablica[i];
//   }
// console.log(lista);
// }
//
// arrayToList([1, 2, 3]);


//DEEP COMPARING
var x = {
  name: "name",
  surname: "something"
}
var y = {
  name: "name",
  surname: "something"
}
var dlugosca = 0;
var dlugoscb = 0;

function deepEqual(a, b) {

  if (typeof a == "object" && a != null && typeof b == "object" && b != null)  {
    liczeniewlasnosci(a, b);
  }
  else if (a !== b) {
    console.log("arguments are not equal");
  }
  else {
    console.log("arguments are equal");
  }
}

function liczeniewlasnosci(a, b) {
  for (var variable in a) {
    if (a.hasOwnProperty(variable)) {
      dlugosca += 1;
    }
  }
  for (var variable2 in b) {
    if (b.hasOwnProperty(variable)) {
      dlugoscb += 1;
    }
  }
  if (dlugosca != dlugoscb) {
    console.log("the numbers of properties are the same");
  } else {
    console.log(sprawdzaniewartosci(a, b));
  }
}
function sprawdzaniewartosci(a, b) {

  for (var i in a) {
    if (a[i] !== b[i]) {
      return ("value of properties is not the same");

    }
    else {
      sprawdzaniewartosci(a[i++], b[i++]);
    }
  }
  return ("DEEP COMPARING IS OK");
}

deepEqual(x, y);
