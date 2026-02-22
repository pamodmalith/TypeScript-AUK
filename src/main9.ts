interface Iobj<P> {
  name: P;
  age: number;
}

const users: Iobj<Iobj<string>[]>[] = [];

users.push({
  name: [
    {
      name: "Pamod",
      age: 20,
    },
    {
      name: "John",
      age: 30,
    },
  ],
  age: 50,
});

users.push({
  name: [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 35,
    },
  ],
  age: 60,
});

const userNameLenCal = <T extends { length: number }>(users: Iobj<T>[]) => {
  users.forEach((user) => {
    console.log(user.name.length);
  });
};

// console.dir(users, { depth: null });
userNameLenCal(users);
