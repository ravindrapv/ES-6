// Use the let keyword in an example function
function Greet() {
  let name = `ravindra`;
  console.log(name);
}
Greet();

// Use the const keyword in an example function
function calculateCircleArea(radius) {
  const pi = Math.PI;
  const area = pi * radius * radius;
  console.log(`The area of the circle is ${area}`);
}

calculateCircleArea(5);

// Create an arrow function that finds the square of a number
const square = (num) => num * num;
console.log(square(5));

// Create an arrow function that adds two numbers
const sum = (a, b) => a + b;
console.log(sum(50, 50));

// Create a multi-line string and then split the string into the corresponding lines and print the lines
const multiLineString = `This is a
multi-line string.`;

const lines = multiLineString.split("\n");
lines.forEach((line) => console.log(line));

// Create a function that calculates the area of a circle. If the radius of the circle is not provided assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function
function calculateCircleArea(radius = 5) {
  const pi = Math.PI;
  const area = pi * radius * radius;
  console.log(`The area of the circle is ${area}`);
}

calculateCircleArea(10);
calculateCircleArea();

// The person object and string with name and location
const person = {
  name: "Harry Potter",
  location: "London",
};

const personString = `${person.name} is located in ${person.location}.`;
console.log(personString);

// 8. Array destructuring assignment

const names = ["ravindra", "venkata", "pv"];

const [secondName, firstName, lastname] = names;
console.log(`${firstName} ${secondName},${lastname}`);

//9. Object destructuring assignment in function body
function printPersonDetails(person) {
  const { name, location } = person;
  console.log(`Name: ${name}`);
  console.log(`Location: ${location}`);
}

printPersonDetails({ name: "venkat", location: "davangere" });

//example where a function argument which is an object is destructured inside the parantheses of the function
function greet(person) {
  const { name } = person;
  console.log(`Hello, ${name}`);
}

const personName = {
  name: "ravindra",
};

greet(person);

const user = {
  name: "pramod",
  location: "Bengaluru,karnataka",
  greet2() {
    console.log(
      `Hello, my name is ${this.name} and I live in ${this.location}`
    );
  },
};

user.greet2();

//sum function with rest perameter

function sumAdd(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

// Spread syntax to expand array and pass elements to sum function

const numbers = [1, 2, 3, 4, 5];
const sumResult = sumAdd(...numbers);
console.log(sumResult);

// Iterate through all values in an array using for..of loop

const arr = [1, 2, 3, 4, 5];

for (const number of arr) {
  console.log(number);
}

// Iterate through all keys of an object using Object.keys and values

const persons = {
  name: "ravi",
  age: 24,
  occupation: "Software Engineer",
};

const keys = Object.keys(persons);
for (const key of keys) {
  console.log(key);
}

const values = Object.values(persons);
for (const value of values) {
  console.log(value);
}

const entries = Object.entries(person);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
