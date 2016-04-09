//vectors
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (x2, y2) {
  var newx = this.x + x2;
  var newy = this.y + y2;
  return([newx, newy]);
};
Vector.prototype.minus = function (x2, y2) {
  var newx = this.x - x2;
  var newy = this.y - y2;
  return([newx, newy]);
};
Vector.prototype.length = function(x,y){
  var len = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  return(len);
};
var firstVector = new Vector(3,8);
var secondVector = new Vector(4,6);
console.log(firstVector.plus(3,3).toString());
console.log(firstVector.length(0,3));
