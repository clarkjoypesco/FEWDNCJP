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

console.log('The man whispered, "please speak to me."');
console.log(
  'The file located at "C:\\\\Desktop\\My Documents\\Roster\\names.txt" contains the names on the roster.'
);

console.log("Y" != "y");

/*
 * Programming Quiz: Favorite Food (2-3)
 */

console.log("Lechon Manok!");

/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "All STRINGS are CrEaTED Equal" == "All STRINGS are CrEaTED Equal";
console.log(answer);

/*
 * Programming Quiz: All Tied Up (2-5)
 */

var joke = 'Why couldn\'t the shoes go out and play?\nThey were all "tied" up!';
console.log(joke);

/*
 * Programming Quiz: Yosa Buson (2-6)
 */

var haiku = "Blowing from the west\nFallen leaves gather\nIn the east.";
console.log(haiku);

// calculating the square root of a negative number will return NaN
console.log(Math.sqrt(-10));

// trying to divide a string by 5 will return NaN
console.log("hello" / 5);

/*
 * Programming Quiz: Semicolons! (2-8)
 */

// your code goes here

var thingOne = "red";
var thingTwo = "blue";

console.log(thingOne + " " + thingTwo);

/*
 * Programming Quiz: What's my Name? (2-9)
 */

// your code goes here

var fullName = "CJ Pesco";

console.log(fullName);

/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;

var total = bill + tip;

console.log("Total Cost: $" + total.toFixed(2));

/*
 * Programming Quiz: MadLibs (2-11)
 *
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 *
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

// your code goes here

var madLib =
  "The Intro to JavaScript course is " +
  adjective1 +
  " James and Julia are so " +
  adjective2 +
  ". I cannot wait to work through the rest of this " +
  adjective3 +
  " content!";

console.log(madLib);
