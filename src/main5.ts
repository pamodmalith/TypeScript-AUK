class SystemUser {
  name: string;
  age: number;
  city: string;
  username: string;
  password: string;

  constructor(
    name: string,
    age: number,
    city: string,
    username: string,
    password: string
  ) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.username = username;
    this.password = password;
  }

  login() {
    console.log("Login Success...");
  }

  register() {
    console.log("User Registered...");
  }
}

const user1 = new SystemUser("Alice", 25, "Colombo", "alice25", "password123");

console.log(user1);
user1.login();
