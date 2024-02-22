// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//const bigNumber=34544356643222342n

// Reference (Non Primitive)
// Array, Objects, Functions

const heros=["shaktiman", "irfaan", "allu"];
let myObj={
    name: "rishu",
    age: 22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof id);
