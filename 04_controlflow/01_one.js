//if statement

//if(condition){}
//if(false) mane next code execute hobe na

// const isUserloggedin = true
// if( 2 === '2'){ //=== type o check kore like one is number and another one is string so it won't be excute
//     console.log("executed");
// }

// const temparature = 41
// if(temparature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temparature is greater than 50");
// }

// const score = 200

// if(score > 100){
//    let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//  const balance = 1000

// if(balance > 500) console.log("test"), // implicit .. they count auto that here is {}scope , but don't use this code
// console.log("test2")


// if(balance < 500){
//     console.log("less than");
// }else if(balance < 750){
// console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
console.log("allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){ //can check multiple
    console.log("User logged in");
}