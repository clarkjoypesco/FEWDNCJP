/*
Recall that arrays can store many different types of data, not just strings!
Below, create an array called `mixedArray` that contains:

* A number
* A string
* A boolean
* Another array

The order and length of the array are up to you; just be sure to include
at least one of each data type listed above.
*/

const fruits = [1, true, "orange", ["grape", "lychee"]];

/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/

const menu = {
  name: "Salted Caramel Ice Cream",
  price: 2.95,
  ingredients: ["butter", "ice cream", "salt", "sugar"]
};

console.log(menu.ingredients);

// Write an expression to access the last item in the following array:
const mileTimes = [7.5, 6.25, 10.6, 8.88];
var lastItem = mileTimes.pop();
console.log(lastItem);

// Write an expression to access the value of the population object's brazil property:
const populations = {
  china: 1379000000,
  brazil: 207700000,
  india: 1324000000,
  unitedStates: 323100000
};

console.log(populations.brazil);

// Write an expression that outputs how to say hello in Portuguese:
const greetings = {
  hello: {
    english: "hi",
    french: "bonjour",
    portuguese: "oi"
  },
  goodbye: {
    english: "bye",
    french: "au revoir",
    portuguese: "tchau"
  }
};

console.log(greetings["hello"].portuguese);

// Consider the following house object
// Write an expression to delete the numWindows property from house.
let house = {
  color: "green",
  numRooms: 4,
  numWindows: 8,
  forSale: false
};

delete house.numWindows;

// Write an expression to add a new hasGarage property to house. Set the value of the hasGarage property to true.
house.hasGarage = true;

// Write an expression that invokes the alerter() function in the following array, myArray:
const myArray = [
  function alerter() {
    alert("Hello!");
  }
];

// console.log(myArray[0]());

// Write an expression that invokes the function referenced by the bell object's ring property:
const bell = {
  color: "gold",
  ring: function() {
    console.log("Ring ring ring!");
  }
};

bell.ring();

// Let's make sure we're still on the same page! Write an expression that invokes the function referenced by the tree object's growOneFoot property:

const tree = {
  type: "redwood",
  leaves: "green",
  height: 80,
  age: 15,
  growOneFoot: function() {
    this.height += 1;
  }
};

tree.growOneFoot();
/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

const chameleon = {
  color: "pink",
  changeColor: function() {
    // this.color = this.color ? "green" : "pink";

    if (this.color == "pink") {
      this.color = "green";
    } else if (this.color == "green") {
      this.color = "pink";
    }
  }
};

console.log(chameleon);

// ========================================================
function whoThis() {
  this.trickyish = true;
}

whoThis();
// (what does the above expression output?)
// Undefined

// Write an expression using Object.keys() to extract the keys (i.e., property names) from the triangle object:

const triangle = {
  type: "polygon",
  sides: 3,
  sumOfAngles: 180,
  equilateral: true,
  equiangular: true
};

console.log(Object.keys(triangle));

/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/
function higherOrderFunction() {
  return function() {
    return 8;
  };
}
const highOrder = higherOrderFunction();
console.log(higherOrderFunction());
console.log(higherOrderFunction()());
console.log(highOrder());

function callAndAdd(n, callBackFunction) {
  return n + callBackFunction();
}

function returnsThree() {
  return 3;
}

console.log(callAndAdd(8, returnsThree));

// ==============================================================
function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isPositive(n) {
  return n > 0;
}

each([-2, 7, 11, -4, -10], isPositive);

// what if we want to check an entire array and log only the odd numbers within it?
// [1, 5, 2, 4, 6, 3]
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
});
// 1
// 5
// 3

const favoriteFlavors = ["cookie dough", "salted caramel", "toffee"];

favoriteFlavors.forEach(function(flavor) {
  console.log("I enjoy " + flavor + " ice cream");
});

// ==========================================
const names = ["David", "Richard", "Veronika"];

const nameLengths = names.map(function(name) {
  return name.length;
});

console.log(nameLengths);

/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 }
];

const albumSalesStrings = musicData.map(function(music) {
  return (
    music.name + " by " + music.artist + " sold " + music.sales + " copies"
  );
});

console.log(albumSalesStrings);

// Array's filter() method is similar to the map() method:

// It is called on an array
// It takes a function as an argument
// It returns a new array
// The difference is that the function passed to filter() is used as a test, and only items in the array that pass the test are included in the new array
// const names = ["David", "Richard", "Veronika"];

const shortNames = names.filter(function(name) {
  return name.length < 6;
});

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const results = musicData.filter(function(music) {
  return (music = music.name.length >= 10 && music.name.length <= 25);
});

console.log(results);

/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/

function expandArray() {
  let myArray = [1, 1, 1];

  return function() {
    myArray.push(1);
    return myArray;
  };
}
const expand = expandArray();

console.log(expand());

const button = document.getElementById("button");
button.addEventListener(
  "click",
  (function() {
    let count = 0;

    return function() {
      count += 1;

      if (count === 2) {
        alert("This alert appears every other press!");
        count = 0;
      }
    };
  })()
);

// function SoftwareDeveloper() {
//   this.favoriteLanguage = "JavaScript";
// }

// let engineer = new SoftwareDeveloper();
// let programmer = new SoftwareDeveloper();

// console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

// console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }

function SoftwareDeveloper(name) {
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}

let instructor = new SoftwareDeveloper("Andrew");

console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }

let teacher = new SoftwareDeveloper("Richard");

console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }

/*

Now it's your turn to create a constructor function. Declare a
`Sandwich` constructor function that takes three parameters:

1. `bread` (string) - the type of bread for the sandwich (e.g. "Wheat")
2. `meat` (array) - the meats to put on the sandwich
   (e.g. `[]` for a vegetarian sandwich!)
3. `vegetables` (array) - the vegetables to include in the sandwich

*/

function Sandwich(bread, meat, vegetables) {
  this.bread = bread;
  this.meat = meat;
  this.vegetables = vegetables;
}

let burger = new Sandwich("Breadloaf", "Bacon", ["Tomato", "Pichay", "Onions"]);

console.log(burger);

function Finch(name) {
  this.kingdom = "Animalia";
  this.name = name;
}

function Sparrow(name) {
  this.kingdom = "Animalia";
  this.name = name;
}

const atticus = new Finch("Atticus");
const jack = new Sparrow("Jack");

//Constructor Functions

//Using Call

const mockingbird = {
  title: "To Kill a Mockingbird",
  describe: function() {
    console.log(`${this.title} is a classic novel`);
  }
};

mockingbird.describe();

// 'To Kill a Mockingbird is a classic novel'

const pride = {
  title: "Pride and Prejudice"
};

mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

//Using Apply
function multiply(n1, n2) {
  return n1 * n2;
}

multiply.call(window, 3, 4);

// 12

multiply.apply(window, [3, 4]);

// 12

mockingbird.describe.apply(pride);

// 'Pride and Prejudice is a classic novel'

// Consider the following dave object, and the sayHello() function:

const dave = {
  name: "Dave"
};

function sayHello(message) {
  console.log(`${message}, ${this.name}. You're looking well today.`);
}

sayHello.apply(dave, ["How are you?"]);

// Write an expression that uses the call() method to produce the message: 'I'm Andrew and my favorite programming language is JavaScript.'

const andrew = {
  name: "Andrew"
};

function introduce(language) {
  console.log(
    `I'm ${this.name} and my favorite programming language is ${language}.`
  );
}
introduce.apply(andrew, ["JavaScript"]);

const dog = {
  age: 5,
  growOneYear: function() {
    this.age += 1;
  }
};

//using bind
function invokeTwice(cb) {
  cb();
  cb();
}

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow);

console.log(dog.age);
// 7

// Write an expression using bind() that allows us to "borrow" the displayName() method from driver for the car object to use.
this.name = "Hello";
const driver = {
  name: "Danica",
  displayName: function() {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: "Fusion"
};

// driver.displayName(driver.displayName.bind(driver));
// driver.displayName(driver.displayName.bind(car));
// driver.displayName.bind(car.name);
// driver.displayName.apply(car);
// var drive = driver.displayName;
// var boundDrive = drive.bind(car);
// boundDrive();
driver.displayName.bind(car)();

//==========PROTOTYPAL INHERITANCE

// function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }

function Dog(age, weight, name) {
  this.age = age;
  this.weight = weight;
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says woof!`);
};

dog1 = new Dog(2, 60, "Java");

dog2 = new Dog(4, 55, "Jodi");

dog1.bark();

dog2.bark();

//-----------has own property

function Phone() {
  this.operatingSystem = "Android";
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();

const own = myPhone.hasOwnProperty("operatingSystem");

console.log(own);
// true

const inherited = myPhone.hasOwnProperty("screenSize");

console.log(inherited);
// false

//-------------Is prototype of

const rodent = {
  favoriteFood: "cheese",
  hasTail: true
};

function Mouse() {
  this.favoriteFood = "cheese";
}

Mouse.prototype = rodent;

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

//--------------Object.getPrototypeOf()
const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }

//=========Constructor Property

function Longboard() {
  this.material = "bamboo";
}

const board = new Longboard();

console.log(board.constructor);

// function Longboard() {
//   this.material = 'bamboo';
// }
console.log(ralph.constructor);
// function Object() { [native code] }
