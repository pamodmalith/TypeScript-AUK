type TObj<T> = {
  name: T;
  age: number;
};

interface IObj<T, R> {
  name: T;
  age: R;
}

type Tarr<K> = K[];

const arr: Tarr<string> = ["Hello", "World"];

type TTuple<T, S, E, I> = [T, S, E, I];

const tuple: TTuple<string, number, { name: string }, boolean> = [
  "Pamod",
  20,
  { name: "pamod" },
  true,
];

console.log(tuple);

const obj: TObj<string> = {
  name: "John",
  age: 30,
};

console.log(obj);

const myFunc = <T, R>(a: T, b: R): R => {
  console.log(a, b);
  return b;
};

myFunc<string, number>("Hello", 42);
