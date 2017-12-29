//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
}

function subtractFive(num) {
  return num - 5;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if(x === y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if(num < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if(num > 50){
    return true;
  }
  return false;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  if(num % 2 === 0){
    return true;
  }
  return false;
}

function isOdd(num) {
  if(num % 2 === 0){
    return false;
  }
  return true;
}

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function raiseToPower(num, exponent) {
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  var round = Math.round(num);
  return round;
}

function roundUp(num) {
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  var combinedNames = firstName + ' ' + lastName;
  return combinedNames;
}

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  var triangleArea = (base * height) / 2;
  return triangleArea;
}

function getCircleArea(radius) {
  var circleArea = Math.PI * (radius * radius);
  return Math.round(circleArea);
}

function getRectangularPrismVolume(length, width, height) {
  var volume = length * width * height;
  return volume;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
