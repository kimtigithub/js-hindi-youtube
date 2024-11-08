
// function sayMyName(){ // function lekhar niom
//     console.log("H");
//     console.log("i");
//     console.log("k");   
// }

// //sayMyName()   //() -> eta lagano hole execution, 


// function addTwoNumbers(num1, num2){ //num1 num2 parameters
//     console.log(num1 + num2)
// }
// //addTwoNumbers(3,4);//when we call function and pass values these values are called arguments
// const result = addTwoNumbers(3,5);
// console.log(result);

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result; //after return function will not print anything
// }
// const result = addTwoNumbers(3,5)
// //console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){ 
// console.log("Please enter a username");
//           return
//     }
//     return `${username} just logged in `  //`${}` evabe variable declear kora jay
// }

// //console.log(loginUserMessage("kimti"));
// console.log(loginUserMessage());  //"" empty strinbg is a false value


//for shopping card situation 
function calculateCartPrice(val1, val2,...num1){ //rest operator in this case .. eta mane holo eksathe sob arguments array hoye output return korbe .. sudhu ekta korbe na 
 return num1  //val1, val2 200, 300 niye nibe . baki jei valugule thakbe ota num1 er value
}
//console.log(calculateCartPrice(200,300,500));

const user = { //object
    name: "kimti",
    prices: 199
}
//object k function e pass korar upay.........
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
//handleObject(user);
//direct o pass kora jay object
handleObject({
    username: "kim",
    price: 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray))