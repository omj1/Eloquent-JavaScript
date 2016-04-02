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

function findsamename(name) {
  var name2 = name;
  for (var i = 0; i < ancestry.length; i++ ) {
      if (ancestry[i].name == name2) {
      mother = ancestry[i].mother;
      bdaykid = ancestry[i].born;
      console.log(bdaykid);
    }
  }

  for (var j = 0; j < ancestry.length; j++ ) {
      if (ancestry[j].name == mother) {
      bdaymother = ancestry[j].born;
      console.log(ancestry[j].born);
    }
  }
  console.log(bdaykid - bdaymother);
}

findsamename("Daniel Haverbeke");
