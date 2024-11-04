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

//In computer science, 
//program optimization, 
//code optimization, 
//or software optimization is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources.
//optimistic- hopeful & confident about the future

//+++++++++++++++++++
//Stack memory used in  (primitive type) , means memory te copy pbo
// heap memory used in (non-primitive), means reference pabo original value er

let myYoutubename = "kanvisarkimtidotcom"

let anothername = myYoutubename
anothername = "kimmmm"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "Kimimoi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);