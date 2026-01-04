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
}

const user1 = new SystemUser("Alice", 25, "Colombo", "alice25", "password123");

console.log(user1);

user1.login();
user1.printOneToTen();
