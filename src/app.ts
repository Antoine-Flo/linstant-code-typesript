
// Static type checker
let a: number;
// let a: string;
// let a: any;
// a = "6";

// Type inference
// let b: number = 5;
let b = 5;

// Union types
let c: number | string;
c = 4;
c = "4";

// Literal types
let d: "gauche" | "droite";
// d = "gauche";


// Type assertion
const button = <HTMLButtonElement>document.querySelector('.btn');
// Liste des interfaces : https://developer.mozilla.org/en-US/docs/Web/API

// Arrays
let myArray: number[];
// let c: Array<number>;
myArray = [1, 2, 3];

// Tupels
let complexArray: [number, string];
complexArray = [4, "ok"];

// Multi type array
let multiArray: (string | number)[];
multiArray = [4, 5, "John", 4];

// Object
let myObject: {a: number, b: string}

myObject = {
    a: 5,
    b: "5"
}

// Interface
interface User {
    readonly name: string,
    age: number,
    employed?: boolean
}

// interface User {
//     photoUrl?: string
// }

let bob: User = {
    name: "Bob",
    age: 30
}

// Type
type Product = {
    id: string,
    photoUrl: string,
}

// type Product = {
// }

type stringOrNum = string | number;
let x: stringOrNum;
x = "4";


// Functions

function add(a: number, b: number): number {
    return a + b;
}

function greet(user : {name: string}): any {
    console.log(`Hello ${user.name}`);
}