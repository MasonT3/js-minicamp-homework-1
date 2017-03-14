/* Variable - A variable is an object that can hold any value that you give it,
 *  then whenever you use that variable, it uses the value that you gave it.
 * Strings - A string is multiple characters put together, any words are strings.
 * Functions - Functions are a block of code that do a certain thing, and can be
 *  called outside of it and it runs what is inside of it. Any variable created
 *  inside the function can not be used outside of it. Inside a function you give
 *  it a name and then have parentheses, in the parentheses you can give it an argument
 then when it receives input to what the variable is, it does what is inside the function.
 *  When you use the return it gives the answer of what you return (when invoked).
 * If statements - if statements you give a condition and if that condition is
 *  true it runs the code in the curly braces.
 * Boolean values - Boolean values can either be true or false.
 */

//Do not change any of the function names


function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if(str1.length === str2.length){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if (x===y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if(num < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if (num > 50){
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var difference = x - y;
  return difference;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var quotient = x / y;
  return quotient;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var modulus = x % y;
  return modulus;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 === 0){
    return true;
  }
  return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  var oddnum = num % 2;
  if (oddnum>0){
    return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  //code here
  return Math.pow(num, 2);
}

function cube(num) {
  //cube num and return the new value
  //code here
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  //round num and return it
  //code here
  return Math.round(num);
}

function roundUp(num) {
  //round num up and return it
  //code here
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var newstring = str + '!';
  return newstring;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  return 'Hello ' + name + '!';
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  return length * width;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  return .5 * base * height;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var roundedradius = Math.PI * Math.pow(radius, 2);
  return Math.round(roundedradius);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

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
