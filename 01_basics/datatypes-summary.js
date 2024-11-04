//two types data ... primitive & nonprimitive based on how data stroed and access in the memory

// primitve----------------
// 7 categories : String, Number, Boolean , Null,  Undefined, Symbol, BigInt

//dynamic vs static : Static is value will be same and dynamic means value can be change
//JavaScript is a dynamic language and not static,
//which means that variables can hold values of different types during runtime.


//Reference type or nonprimitive------------
// Array, Objects, Functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
console.log(typeof(outsideTemp));

let userEmail;
console.log(userEmail);
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 333333333333333n;
console.log(bigNumber);
console.log(typeof(bigNumber));

//Array
const heros = ["shaktiman","nagraj", "doga"]

//object
let myObj = {
    name: "Kimti",
    age: 22,
}

//function
const myFunction = function(){
    console.log("hello world");
}

