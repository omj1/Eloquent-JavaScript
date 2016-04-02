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

// reduce method
var sum4 = [];
var x;
function sum(numbers, pos) {
  console.log(numbers);
  sum4.unshift(pos);
  return sum4;
}
console.log(sum3.reduce(sum));


var numbersi = [65, 44, 12, 4];
function getSum(total, num) {
    return total + num;
}
console.log(numbersi.reduce(getSum));
