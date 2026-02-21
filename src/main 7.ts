import type { TTestArray, TTestArray2 } from "./our-types.js";

const testArr: TTestArray = [1, 2, 3, 4, 5];

// testArr.forEach((value) => console.log(value));

const testArr2: TTestArray2 = ["Hello", "World", 10, 20];

const mappedTestArr2 = testArr2
  .map((value) => `${value} is a value in the array`)
  .join(", ");

// console.log(mappedTestArr2);

console.log(testArr2.join(", "));
