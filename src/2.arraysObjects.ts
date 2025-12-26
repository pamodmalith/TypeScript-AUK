// Arrays
{
  const myArray: number[] = [1, 2, 3, 4, 5]; // Array of numbers
  const nameArray: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings

  const mixedArray: (number | string)[] = [1, "Two", 3, "Four"]; // Array with mixed types
  const mixedArray2: number[] | string[] = [1, 2, 3]; // Array that can be either all numbers or all strings
  const mixedArray3: (number | string)[] | (boolean | number)[] = [
    true,
    false,
    1,
    0,
  ]; // Array that can be either mixed numbers and strings or mixed booleans and numbers

  console.log(nameArray[0]); // Accessing the first element of nameArray

  nameArray[0] = "Eve"; // Modifying the first element of nameArray
  console.log(nameArray[0]); // Accessing the first element of nameArray after modification

  console.log(myArray.length); // Getting the length of myArray

  console.log(mixedArray3);

  mixedArray3[4] = 42; // Adding a number to mixedArray3
  mixedArray3[5] = true; // Adding a number to mixedArray3
  console.log(mixedArray3);
}

// Objects
{
  interface TMyObj {
    name: string;
    age: number;
    isStudent?: boolean;
  } // Defining an object type with optional property

  const myObj: TMyObj = {
    name: "John",
    age: 21,
    isStudent: false,
  }; // Object with properties

  console.log(myObj.name); // Accessing the 'name' property

  myObj.age = 31; // Modifying the 'age' property
  console.log(myObj.age); // Accessing the 'age' property after modification

  myObj["isStudent"] = true; // Modifying the 'isStudent' property using bracket notation
  console.log(myObj["isStudent"]); // Accessing the 'isStudent' property using bracket notation
}
