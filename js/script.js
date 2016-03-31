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
  name: "ktos",
  dwa: "cos"
}
var y = {
  name: "ktos",
  dwa: "cos"
}
var dlugosca = 0;
var dlugoscb = 0;

function deepEqual(a, b) {

  if (typeof a == "object" && a != null && typeof b == "object" && b != null)  {
    liczeniewlasnosci(a, b);
  }
  else if (a !== b) {
    console.log("podane argumenty nie sa rowne");
  }
  else {
    console.log("podane argumenty sa rowne");
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
    console.log("liczba wlasnosci nie jest rowna");
  } else {
    console.log(sprawdzaniewartosci(a, b));
  }
}
function sprawdzaniewartosci(a, b) {

  for (var i in a) {
    if (a[i] !== b[i]) {
      return ("wartosci nie sa rowne");

    }
    else {
      sprawdzaniewartosci(a[i++], b[i++]);
    }
  }
  return ("wartosci sa rowne");
}

deepEqual(x, y);
