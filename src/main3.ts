enum Color {
  red,
  green,
  blue,
}

console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);

let userInput;

userInput = Color.red;
console.log("in", userInput);
if (userInput == Color.red) {
  console.log("red");
}
console.log("out");

let myTuple: [string, number, boolean] = ["hello", 23, true];
console.log(myTuple);

myTuple.push(45);
console.log(myTuple);

// myTuple[3] = "world"; // This will cause a TypeScript error
// myTuple[1] = "world"; // This will cause a TypeScript error
