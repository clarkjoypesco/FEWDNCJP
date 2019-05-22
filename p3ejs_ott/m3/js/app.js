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

const members = new Map();

members.set("Evelyn", 75.68);
members.set("Liam", 20.16);
members.set("Sophia", 0);
members.set("Marcus", 10.25);

console.log(members.has("Xavier"));
console.log(members.has("Marcus"));
console.log(members.get("Evelyn"));

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
iteratorObjForValues.next();

for (const member of members) {
  console.log(member);
}

/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const membro = new Map();

membro.set("Evelyn", 75.68);
membro.set("Liam", 20.16);
membro.set("Sophia", 0);
membro.set("Marcus", 10.25);

for (const member of membro) {
  member.join();
  console.log(member);
}
membro.forEach((value, key) => console.log(key, value));

//Weakmap

let book1 = { title: "Pride and Prejudice", author: "Jane Austen" };
let book2 = { title: "The Catcher in the Rye", author: "J.D. Salinger" };
let book3 = { title: "Gulliver’s Travels", author: "Jonathan Swift" };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
book1 = null;
console.log(library);

//Promises
// new Promise(function (resolve, reject) {
//   window.setTimeout(function createSundae(flavor = 'chocolate') {
//       const sundae = {};
//       // request ice cream
//       // get cone
//       // warm up ice cream scoop
//       // scoop generous portion into cone!
//       if ( /* iceCreamConeIsEmpty(flavor) */ ) {
//           reject(`Sorry, we're out of that flavor :-(`);
//       }

//       sundae.then(function(sundae) {
//         console.log(`Time to eat my delicious ${sundae}`);
//     }, function(msg) {
//         console.log(msg);
//         self.goCry(); // not a real method
//     });
//       resolve(sundae);
//   }, Math.random() * 2000);
// });

// var richard = { status: "looking for work" };
// var agent = new Proxy(richard, {});

// agent.status; // returns 'looking for work'

//Get Trap
/*
const richard = { status: "looking for work" };
const handler = {
  get(target, propName) {
    console.log(target); // the `richard` object, not `handler` and not `agent`
    console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
  }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
*/

// Accessing the Target object from inside the proxy
/*
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
}; 
const agent = new Proxy(richard, handler);
agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status
*/

// Having the proxy return info, directly
/*
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status; // returns the text `He's following many leads, so you should offer a contract as soon as possible!`
*/

// If we want to intercept calls to change properties, then the set trap needs to be used!

// The set trap is used for intercepting code that will change a property. The set trap receives:
// the object it proxies
// the property that is being set
// the new value for the proxy
/*
const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay
*/

// Proxies vs. ES5 Getter/Setter

// var obj = {
//   _age: 5,
//   _height: 4,
//   get age() {
//       console.log(`getting the "age" property`);
//       console.log(this._age);
//   },
//   get height() {
//       console.log(`getting the "height" property`);
//       console.log(this._height);
//   }
// };

// obj.age; // logs 'getting the "age" property' & 5
// obj.height; // logs 'getting the "height" property' & 4

// obj.weight = 120; // set a new property on the object
// obj.weight; // logs just 120

const proxyObj = new Proxy(
  { age: 5, height: 4 },
  {
    get(targetObj, property) {
      console.log(`getting the ${property} property`);
      console.log(targetObj[property]);
    }
  }
);

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4

proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120

//Generator and Iterator
//Pausable Functions

// function* getEmployee() {
//   console.log("the function has started");

//   const names = [
//     "Amanda",
//     "Diego",
//     "Farrin",
//     "James",
//     "Kagure",
//     "Kavita",
//     "Orit",
//     "Richard"
//   ];

//   for (const name of names) {
//     console.log(name);
//     yield;
//   }

//   console.log("the function has ended");
// }
// const generatorIterator = getEmployee();
// generatorIterator.next();

// function* getEmployee() {
//   console.log("the function has started");

//   const names = [
//     "Amanda",
//     "Diego",
//     "Farrin",
//     "James",
//     "Kagure",
//     "Kavita",
//     "Orit",
//     "Richard"
//   ];

//   for (const name of names) {
//     yield name;
//   }

//   console.log("the function has ended");
// }

// const generatorIterator = getEmployee();
// let result = generatorIterator.next();
// result.value; // is "Amanda"

// generatorIterator.next().value; // is "Diego"
// generatorIterator.next().value; // is "Farrin"

//Sending Data into or out of generator

// function* displayResponse() {
//   const response = yield;
//   console.log(`Your response is "${response}"!`);
// }

// const itrator = displayResponse();

// itrator.next(); // starts running the generator function
// itrator.next("Hello Udacity Student"); // send data into the generator
// // the line above logs to the console: Your response is "Hello Udacity Student"!

function* getEmployee() {
  const names = [
    "Amanda",
    "Diego",
    "Farrin",
    "James",
    "Kagure",
    "Kavita",
    "Orit",
    "Richard"
  ];
  const facts = [];

  for (const name of names) {
    // yield *out* each name AND store the returned data into the facts array
    facts.push(yield name);
  }

  return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join("\n");
