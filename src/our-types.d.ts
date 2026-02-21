export type userType = "admin" | "user" | "guest";

export type TUserData = {
  name: string;
  age: number;
  city: string;
  username: string;
  password: string;
};

export type TTestArray = number[];

type TTestArray2 = (string | number)[];

export type { TTestArray2 };
