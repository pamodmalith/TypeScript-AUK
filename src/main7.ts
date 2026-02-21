import type { TTestArray, TTestArray2 } from "./our-types.js";

const testArr: TTestArray = [1, 2, 3, 4, 5];

// testArr.forEach((value) => console.log(value));

const testArr2: TTestArray2 = ["Hello", "World", 10, 20, 30, 40, 50];

const mappedTestArr2 = testArr2
  .map((value) => `${value} is a value in the array`)
  .join(", ");

// console.log(mappedTestArr2);

console.log(testArr2.join(", "));

const a = testArr2.filter((value) => {
  if (typeof value === "number") {
    return value > 15;
  }
  return false;
});

console.log(a);

const b = testArr2.find((value) => {
  if (typeof value === "number") {
    return value > 15;
  }
  return false;
});

console.log(b);

const c = testArr2.some((value) => {
  if (typeof value === "number") {
    return value > 15;
  }
  return false;
});

console.log(c);

const d = testArr2.every((value) => {
  if (typeof value === "number") {
    return value > 15;
  }
  return false;
});

console.log(d);
