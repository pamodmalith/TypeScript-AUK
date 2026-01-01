import type { TUserData } from "./our-types";

const systemUsers: TUserData[] = [
  {
    name: "Alice",
    age: 25,
    city: "Colombo",
    username: "alice25",
    password: "password123",
  },
  {
    name: "Bob",
    age: 30,
    city: "Kandy",
    username: "bob30",
    password: "securePass",
  },
];

const userInputUserName = "bob30";
const userInputPassword = "securePass";

function loginUser(username: string, password: string) {
  if (systemUsers[0] && systemUsers[0].username == username) {
    console.log("user 0 found");
    if (systemUsers[0].password == password) {
      console.log("Login Success...");
    } else {
      console.log("Invalid Password");
    }
  } else if (systemUsers[1] && systemUsers[1].username == username) {
    console.log("user 1 found");
    if (systemUsers[1].password == password) {
      console.log("Login Success...");
    } else {
      console.log("Invalid Password");
    }
  } else if (systemUsers[2] && systemUsers[2].username == username) {
    console.log("user 2 found");
    if (systemUsers[2].password == password) {
      console.log("Login Success...");
    } else {
      console.log("Invalid Password");
    }
  } else {
    console.log("User not found");
  }
  console.log("------------------");
}

loginUser("bob30", "securePass");
loginUser("bob30", "wrongPass");
loginUser("wrongUser", "wrongPass");
