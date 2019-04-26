// Numbers
console.log(3 + 2.1);
// this is a single-line comment

/*
this is
a multi-line
comment
*/

/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(1 + 5 - 2);
console.log(48 + 2 - 8);

console.log("Hello," + " New York City");

/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */

var celsius = 12;
var fahrenheit = function(celsius) {
  var f = celsius * 1.8 + 32;
  return f;
};

console.log(fahrenheit(celsius));

var quote = "Stay awhile and listen!";
console.log(quote[6]); // should output w
