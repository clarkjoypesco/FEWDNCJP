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

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements

// your code goes here
function IsMusician(musicians) {
  if (isNaN(musicians)) {
    return;
  } else if (musicians < 0) {
    return;
  } else {
    var logMusicians = "";

    switch (musicians) {
      case 4:
        logMusicians = "quartet";
        break;
      case 3:
        logMusicians = "trio";
        break;
      case 2:
        logMusicians = "duet";
        break;
      case 1:
        logMusicians = "solo";
        break;
      case 0:
        logMusicians = "not a group";
        break;
      default:
        logMusicians = "this is a large group";
        break;
    }
    return logMusicians;
  }
}
console.log(IsMusician(-1));
console.log(IsMusician(0));
console.log(IsMusician(1));
console.log(IsMusician(2));
console.log(IsMusician(3));
console.log(IsMusician(4));
console.log(IsMusician(5));

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "ballroom" && suspect == "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room == "gallery" && suspect == "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room == "dining room" && suspect == "Mr. Parkes") {
  weapon = "knife";
  solved = true;
}

if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.0;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log(`Your balance is $${balance.toFixed(2)}`);
  } else if (!isActive) {
    console.log("Your Account is no longer active!");
  } else if (balance == 0) {
    console.log("Your Account is empty!");
  } else {
    console.log("Your balance is negative!. Please Contact bank");
  }
} else {
  console.log("Thank You. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

// Add your code here

if (
  (flavor == "vanilla" || flavor == "chocolate") &&
  (vessel == "cone" || vessel == "bowl") &&
  (toppings == "sprinkles" || toppings == "peanuts")
) {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`
  );
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 *
 * Size   Width   Length    Sleeve
 * S	    18"	    28"	      8.13"
 * M	    20"	    29"	      8.38"
 * L	    22"	    30"	      8.63"
 * XL	    24"	    31"	      8.88"
 * 2XL	  26"	    33"	      9.63"
 * 3XL	  28"	    34"	      10.13"
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
// var shirtWidth = 23;
// var shirtLength = 30;
// var shirtSleeve = 8.71;

// Write your if/else code here
function SizeOfShirt(shirtWidth, shirtLength, shirtSleeve) {
  if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL");
  } else if (
    shirtWidth >= 26 &&
    shirtLength >= 33 &&
    (shirtSleeve >= 9.63 && shirtSleeve < 10.13)
  ) {
    console.log("2XL");
  } else if (
    shirtWidth >= 24 &&
    shirtLength >= 31 &&
    (shirtSleeve >= 8.88 && shirtSleeve < 9.63)
  ) {
    console.log("XL");
  } else if (
    shirtWidth >= 22 &&
    shirtLength >= 30 &&
    (shirtSleeve >= 8.63 && shirtSleeve < 8.88)
  ) {
    console.log("L");
  } else if (
    shirtWidth >= 20 &&
    shirtLength >= 29 &&
    (shirtSleeve >= 8.38 && shirtSleeve < 8.63)
  ) {
    console.log("M");
  } else if (
    shirtWidth >= 18 &&
    shirtLength >= 28 &&
    (shirtSleeve >= 8.13 && shirtSleeve < 8.38)
  ) {
    console.log("S");
  } else {
    console.log("N/A");
  }
}
SizeOfShirt(19, 28, 8.21);
SizeOfShirt(26, 33, 9.63);
SizeOfShirt(18, 29, 8.47);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;
var category = "";
// var category = /* your code goes here */

category = eatsPlants
  ? eatsAnimals
    ? "omnivore"
    : "herbivore"
  : eatsAnimals
  ? "carnivore"
  : "undefined";

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = 121201;
    break;
  case "a high school diploma":
    salary = 121201;
    break;

  case "an Associate's degree":
    salary = 121201;
    break;

  case "a Bachelor's degree":
    salary = 121201;
    break;

  case "a Master's degree":
    salary = 121201;
    break;

  case "a Professional degree":
    salary = 121201;
    break;

  case "a Doctoral degree":
    salary = 121201;
    break;
}
// "Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:

// Loop through the numbers 1 to 100
// If the number is divisible by 3, print "Fizz"
// If the number is divisible by 5, print "Buzz"
// If the number is divisible by both 3 and 5, print "FizzBuzz"
// If the number is not divisible by 3 or 5, print the number
var x = 1;
var logFizzBuzz = "";

while (x <= 100) {
  // check divisibility
  logFizzBuzz =
    x % 3 === 0
      ? x % 5 === 0
        ? "FizzBuzz"
        : "Fizz"
      : x % 5 == 0
      ? "Buzz"
      : `${x}`;
  // print Julia, James, or JuliaJames
  console.log(logFizzBuzz);
  // increment x
  x++;
}

/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var logJuliaJames = "";

while (x <= 20) {
  // check divisibility
  logJuliaJames =
    x % 3 === 0
      ? x % 5 === 0
        ? "JuliaJames"
        : "Julia"
      : x % 5 == 0
      ? "James"
      : `${x}`;
  // print Julia, James, or JuliaJames
  console.log(logJuliaJames);
  // increment x
  x++;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
  // check value of num
  // print lyrics using num
  // don't forget to check pluralization on the last line!
  // decrement num
  console.log(
    `${num} bottle of juice on the wall! ${num} ${(log =
      num <= 1
        ? "bottle"
        : "bottles")} of juice! Take one down, pass it around... ${num -
      1} ${(log = num - 1 <= 1 ? "bottle" : "bottles")} of juice on the wall!`
  );
  num--;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */
// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// your code goes here

var t = 60;
var liftoffLogs = "";
while (t >= 0) {
  switch (t) {
    case 50:
      liftoffLogs = "Orbiter transfers from ground to internal power";
      break;

    case 31:
      liftoffLogs = "Ground launch sequencer is go for auto sequence start";
      break;

    case 16:
      liftoffLogs = "Activate launch pad sound suppression system";
      break;

    case 10:
      liftoffLogs = "Activate main engine hydrogen burnoff system";
      break;

    case 6:
      liftoffLogs = "Main engine start";
      break;

    case 0:
      liftoffLogs = "Solid rocket booster ignition and liftoff!";
      break;

    default:
      liftoffLogs = `T-${t} seconds`;
      break;
  }
  console.log(liftoffLogs);
  t--;
}

/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
// var x = 9;
// while (x >= 1) {
//   console.log("hello " + x);
//   x = x - 1;
// }

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
  x = x - 1;
}

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 0; x < 10; x++) {
  console.log(x);
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
  console.log(k);
}

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var total = 1;
for (var y = 5; y > 0; y--) {
  total = y * total;

  console.log(total);
}

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for (var x = 0; x < 26; x++) {
  for (var y = 0; y < 100; y++) {
    console.log(`${x} - ${y}`);
  }
}

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here

function laugh() {
  return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function LaughManyTimes(num) {
  var ha = "";

  for (var i = num; i > 0; i--) {
    ha += "ha";
  }

  return ha;
}

console.log(LaughManyTimes(3));

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
  var log = "";
  for (var k = 1; k <= num; k++) {
    log += makeLine(k);
  }
  return log;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

/*
 * Programming Quiz: Laugh (5-4)
 */
/* finish the function expression */
var annonLaugh = function(num) {
  var ha = "";

  for (var i = num; i > 0; i--) {
    ha += "ha";
  }

  return ha;
};

console.log(annonLaugh(10));
/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here

var cry = function CryManyTimes() {
  return "bohoo!";
};

console.log(cry());

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", annonLaugh);

/*
 * Programming Quiz: NamiFamily (6-1)
 */

// your code goes here

var NamiFamily = ["Cj", "Joyce", "Mommy", "Daddy"];
console.log(NamiFamily);
/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];
console.log(prices);
// your code goes here
prices[0] = 3.56;
prices[2] = 95.32;
prices[6] = 2.0;
console.log(prices);

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(-2, 1, "Yellow", "Green");
console.log(rainbow);
// your code goes here
