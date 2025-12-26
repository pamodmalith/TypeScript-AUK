import type { userType } from "./our-types";

let fname: string = "Pamod";
let lname: string = "Malith";
let surname: string = `Theekshana`;

let fullname: string = `${fname} ${lname} ${surname}`;
console.log(`Full name is: ${fullname}`);

let userRole: userType = "user";
console.log(`User role is: ${userRole}`);

userRole = "admin";
console.log(`User role is: ${userRole}`);

// userRole = "superadmin"; // This will cause a TypeScript error

let isLoggedIn: boolean = false;
console.log(`Is user logged in? ${isLoggedIn}`);

isLoggedIn = true;
console.log(`Is user logged in? ${isLoggedIn}`);

let userAge: number = 25;
console.log(`User age is: ${userAge}`);

userAge = 26;
console.log(`User age is: ${userAge}`);

let userScore: number | string = 100;
console.log(`User score is: ${userScore}`);

userScore = "One Hundred";
console.log(`User score is: ${userScore}`);
