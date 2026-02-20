class SystemUser {
  constructor(
    private name: string,
    private age: number,
    private city: string,
    private username: string,
    private password: string
  ) {
    this.register();
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  login() {
    console.log("Login Success...");
  }

  register() {
    console.log("User Registered...");
  }

  printOneToTen(): void {
    let i = 1;
    while (i <= 10) {
      console.log(i);
      i++;
    }
  }

  forLoopExample(): void {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }

  arrayForLoopExample(): void {
    const fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  }
}

const user1 = new SystemUser("Alice", 25, "Colombo", "alice25", "password123");

// console.log(user1);

// user1.login();
// user1.printOneToTen();
// user1.forLoopExample();
// user1.arrayForLoopExample();

const user2 = {
  name: "Bob",
  age: 30,
  city: "New York",
  username: "bob30",
  password: "securePass",
  address1: "123 Main St",
  address2: "Apt 4B",
  address3: "New York, NY 10001",
};

const user2Keys = Object.keys(user2) as Array<keyof typeof user2>;
console.log(user2Keys);

let index = 0;
let fullAddress = "";

while (index < user2Keys.length) {
  const key = user2Keys[index];
  if (key && key.includes("address")) {
    fullAddress += " " + user2[key];
  }
  console.log(key);
  index++;
}
console.log(fullAddress);

// console.log(user2Keys);
for (let i = 0; i < user2Keys.length; i++) {
  // console.log(user2Keys[i]);
}

// for...of loop example
for (const key of user2Keys) {
  console.log(key);
}

// for...in loop example
for (const key in user2) {
  console.log(key);
}
