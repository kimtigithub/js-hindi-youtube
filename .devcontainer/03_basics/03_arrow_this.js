// const user = { //object
// username : " kimti",
// price: 999,

// welcomeMessage: function(){
// console.log(`${this.username}, welcome to website`); //this means current context
// console.log(this);
//    }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "kimti"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "Kimti"
//     console.log(this.username);
// }

// +++++++ arrow function ++++++++
// const chai = () => { //() er mddhe parameter nibo .. => etai arrow function
//     let username = "kimti"
//     console.log(this);
// }
// chai()
//() => {} arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2 //implicit return mane kichu likhte hbe na emni mene nibe 
// console.log(addTwo(3,4));

const addTwo = (num1, num2) =>({ // object in arrow function
    username : "kimti"
})
console.log(addTwo(3,4))

const myArray = [2,5,3,7,8]
//myArray.forEach(() =>)