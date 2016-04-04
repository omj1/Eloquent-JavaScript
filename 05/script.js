var tab1 = [[9, 3, 5], [1, 8, 5]],
tab2 = [[7, 8, 9], [7, 8, 9, 5]];


var tab3 = tab1.concat(tab2);

// forEach();
var sum3 = [];
tab3.forEach(function(number) {
  number.forEach(function(position) {
    // console.log(sum3);
    sum3.push(position);
  });
});
console.log(sum3);

// reduce method not working well
var sum4 = [];
var x;
function sum(numbers, pos) {
  // console.log(numbers);
  sum4.push(pos);
  return sum4;
}
console.log(sum3.reduce(sum));

//reduce metheod
var sum5 = [];
sum3.reduce(function(numbers, pos) { sum5.push(pos); }, 0);
console.log(sum5);


//diffrent in ages between mother and kid
var ancestry = JSON.parse(ANCESTRY_FILE);

var mother,
bdaykid,
bdaymother;

var findsamename = function(name) {
  var name2 = name;
  for (var i = 0; i < ancestry.length; i++ ) {
    if (ancestry[i].name == name2) {
      mother = ancestry[i].mother;
      bdaykid = ancestry[i].born;
    }
  }
  findmother(mother);
};

function findmother(findsamename) {
  for (var j = 0; j < ancestry.length; j++ ) {
    if (ancestry[j].name == findsamename) {
      bdaymother = ancestry[j].born;
    }
  }
  console.log(bdaykid - bdaymother);
}

findsamename("Daniel Haverbeke");


//average life time
var dane = {};
for (var i = 0; i < ancestry.length; i++ ) {
  var wiek = Math.ceil(ancestry[i].died / 100);
  age = ancestry[i].died - ancestry[i].born;
  prop = ["wiek" + wiek];
  if (!dane.hasOwnProperty(prop)){
    dane[prop] = [];
  }
  dane[prop].push(age);
}

for (var variable in dane) {
  var count = 0;
  var sumaprop = 0;
for (var k = 0; k < 6; k++){
  if (!isNaN(dane[variable][k])) {
  sumaprop += dane[variable][k];
  count += 1;
}
}

console.log(Math.round(sumaprop / count));
}

//every
var array8 = [2, 2, 2, 3, 2, 2];
function every(arg, arr) {
  for (var f = 0; f < arr.length; f++){
      if (arr[f] !== arg) {
      return false;
    }
  }
}
var result99 = every(2, array8);
if (result99 === undefined) {
    result99 = true;
}
console.log("every: " +result99);
//some
var array8 = [2, 2, 3, 4, 5, 7];
function some(arg, arr) {
  for (var f = 0; f < arr.length; f++){
      if (arr[f] == arg) {
      return true;
    }
  }
}
var result100 = some(6, array8);
if (result100 === undefined) {
    result100 = false;
}
console.log("some: " + result100);
