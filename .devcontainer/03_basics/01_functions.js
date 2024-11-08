
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

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result; //after return function will not print anything
}
const result = addTwoNumbers(3,5)
//console.log(result);

function loginUserMessage(username){
    if(username === undefined){ 
console.log("Please enter a username");
          return
    }
    return `${username} just logged in `  //`${}` evabe variable declear kora jay
}

//console.log(loginUserMessage("kimti"));
console.log(loginUserMessage());  //"" empty strinbg is a false value
