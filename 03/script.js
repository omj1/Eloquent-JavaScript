//3.01 Retunr smaller number
var min = function(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
console.log("smaller is:" + min(2,5));

//3.02 Recurency, check if number is Even
function isEven(i) {
  if (i === 0 ) {
    return true;
  } else if (i == 1) {
    return false;
  } else {
    return isEven(i - 2);
  }
}
console.log(isEven(2));
