// Convert a function to an arrow function
// const upperizedNames = ["Farrin", "Kagure", "Asser"].map(function(name) {
//   return name.toUpperCase();
// });

const upperizedNames = ["Farrin", "Kagure", "Asser"].map(name =>
  name.toUpperCase()
);

const names = [
  "Afghanistan",
  "Aruba",
  "Bahamas",
  "Chile",
  "Fiji",
  "Gabon",
  "Luxembourg",
  "Nepal",
  "Singapore",
  "Uganda",
  "Zimbabwe"
];

// const longNames = names.filter(function(name) {
//   return name.length > 6;
// });

const longNames = names.filter(name => name.length > 6);

//Confusing Function - arrow function expressions in stored in variable
const greet = name => console.log(`Hello ${name}!`);
greet("Cj Pesco");

// empty parameter list requires parentheses
const sayHi = () => console.log("Hello Udacity Student!");
sayHi();

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) =>
  console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream("chocolate", "waffle");

const upperNames = ["Farrin", "Kagure", "Asser"].map(name =>
  name.toUpperCase()
);
const upperBlockNames = ["Farrin", "Kagure", "Asser"].map(name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
// 	return square * square;
// });

// console.log(...squares);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(square => square * square);

console.log(...squares);

//This and Arrow Functions

// constructor
// function IceCream() {
//   this.scoops = 0;
// }

// // adds scoop to ice cream
// IceCream.prototype.addScoop = function() {
//   setTimeout(function() {
//     this.scoops++;
//     console.log("scoop added!");
//   }, 500);
// };

// const dessert = new IceCream();
// dessert.addScoop();

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => {
    // an arrow function is passed to setTimeout
    this.scoops++;
    console.log("scoop added!" + this.scoops);
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

console.log(dessert.scoops);

function greets(name, greeting) {
  name = typeof name !== "undefined" ? name : "Student";
  greeting = typeof greeting !== "undefined" ? greeting : "Welcome";

  return `${greeting} ${name}!`;
}

greets(); // Welcome Student!
greets("James"); // Welcome James!
greets("Richard", "Howdy"); // Howdy Richard!

// ===============Default function parameters

function greetings(name = "Student", greeting = "Welcome") {
  return `${greeting} ${name}!`;
}

greetings(); // Welcome Student!
greetings("James"); // Welcome James!
greetings("Richard", "Howdy"); // Howdy Richard!

// function shippingLabel(name, address) {
//   name = (typeof name !== 'undefined') ? name : 'Richard';
//   address = (typeof address !== 'undefined') ?  address : 'Mountain View';
//   return `To: ${name} In: ${address}`;
// }

function shippingLabel(name = "Richard", address = "Mountain View") {
  return `To: ${name} In: ${address}`;
}

function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid

function houseDescriptor([houseColor = "green", shutterColors = ["red"]]) {
  return `I have a ${houseColor} house with ${shutterColors.join(
    " and "
  )} shutters`;
}

function createSundae({ scoops = 1, toppings = ["Hot Fudge"] } = {}) {
  const scoopText = scoops === 1 ? "scoop" : "scoops";
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(
    " and "
  )} toppings.`;
}

createSundae({ toppings: ["Hot Fudge", "Sprinkles", "Caramel"] });

/*
 * Programming Quiz: Using Default Function Parameters (2-2)
 Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:

floors = 1
color = 'red'
walls = 'brick'
The function should return the following if no arguments or any empty object is passed to the function.

Your house has 1 floor(s) with red brick walls.
 */

// your code goes here
function buildHouse({ floors = 1, color = "red", walls = "brick" } = {}) {
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({ floors: 3, color: "yellow" })); // Your house has 3 floor(s) with yellow brick walls.

// Class Preview
class Dessert {
  constructor(calories = 250) {
    this.calories = calories;
  }
}

class IceCreamCake extends Dessert {
  constructor(flavor, calories, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

// ES5 "Class" Recap
// function Plane(numEngines) {
//   this.numEngines = numEngines;
//   this.enginesActive = false;
// }

// methods "inherited" by all instances
// Plane.prototype.startEngines = function() {
//   console.log("starting engines...");
//   this.enginesActive = true;
// };

// const richardsPlane = new Plane(1);
// richardsPlane.startEngines();

// const jamesPlane = new Plane(4);
// jamesPlane.startEngines();

class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log("starting engines…");
    this.enginesActive = true;
  }
}

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();

class Tree {
  constructor(
    size = "10",
    leaves = { spring: "green", summer: "green", fall: "orange", winter: null }
  ) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === "spring") {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === "spring") {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason("fall");
myMaple.gatherSyrup();
myMaple.changeSeason("spring");

/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Vehicle's constructor function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.
 */

class Vehicle {
  constructor(color = "blue", wheels = 4, horn = "beep beep") {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}

// your code goes here

class Bicycle extends Vehicle {
  constructor(wheels, horn) {
    super(wheels, horn);
    this.wheels = 2;
    this.horn = "honk honk";
  }

  honkHorn() {
    super.honkHorn();
  }
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

//NEW BUILT INS

//Symbol

const sym1 = Symbol("apple");
console.log(sym1);

const sym2 = Symbol("banana");
const sym3 = Symbol("banana");
console.log(sym2 === sym3);

const bowl = {
  [Symbol("apple")]: { color: "red", weight: 136.078 },
  [Symbol("banana")]: { color: "yellow", weight: 183.15 },
  [Symbol("orange")]: { color: "orange", weight: 170.097 },
  [Symbol("banana")]: { color: "yellow", weight: 176.845 }
};
console.log(bowl);

//Iterator Protocol
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//Set

// const games = new Set();
// console.log(games);

const games = new Set([
  "Super Mario Bros.",
  "Banjo-Kazooie",
  "Mario Kart",
  "Super Mario Bros."
]);
console.log(games);

games.add("Banjo-Tooie");
games.add("Age of Empires");
games.delete("Super Mario Bros.");

console.log(games);
games.clear();
console.log(games);

const months = new Set([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]);
console.log(months.size);

console.log(months.has("September"));

console.log(months.values());

const iterator = months.values();
iterator.next();
iterator.next();

//Using For Of Loop in a Set
const colors = new Set([
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "brown",
  "black"
]);
for (const color of colors) {
  console.log(color);
}

/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */

const myFavoriteFlavors = new Set([
  "chocolate chip",
  "cookies and cream",
  "strawberry",
  "vanilla"
]);
console.log(myFavoriteFlavors);
console.log(myFavoriteFlavors.values());
myFavoriteFlavors.delete("strawberry");
console.log(myFavoriteFlavors.values());

//WeakSet

let student1 = { name: "James", age: 26, gender: "male" };
let student2 = { name: "Julia", age: 27, gender: "female" };
let student3 = { name: "Richard", age: 31, gender: "male" };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
student3 = null;

console.log(roster);

/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

const uniqueFlavors = new WeakSet();
let flavor1 = { flavor: "chocolate" };
let flavor2 = { name: "Mango Float", flavor: "mango", price: 149 };

uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);

//Maps
const employees = new Map();

employees.set("james.parkes@udacity.com", {
  firstName: "James",
  lastName: "Parkes",
  role: "Content Developer"
});

employees.set("julia@udacity.com", {
  firstName: "Julia",
  lastName: "Van Cleve",
  role: "Content Developer"
});
employees.set("richard@udacity.com", {
  firstName: "Richard",
  lastName: "Kalehoff",
  role: "Content Developer"
});

console.log(employees);

employees.delete("julia@udacity.com");
employees.delete("richard@udacity.com");
console.log(employees);

employees.clear();
console.log(employees);
