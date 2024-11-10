const userEmail = "k@gmail.com"

if(userEmail){ //truthy value .. no need to compare 
    console.log("Got user email");
}else{
console.log("Don't have user email");
}

//falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN and except these values all are truthy value

//truthy value
// "0"cause this is string, 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15

val1 = null ?? 10 ?? 10 //first value assign hobe 
console.log(val1);

//Terniary operator
//condition ? true : false

const iceTeaPrice =  100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")