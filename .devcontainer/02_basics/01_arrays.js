//array

const myArray = [0,1,2,3,4,5]
//console.log(typeof(myArray));
//console.log(myArray[0]);

// const myHeros = ["shaktiman", "batman"]
// const myArray2 = new Array(1,2,3,34)
// console.log(myArray2[0]);

//array methods

// myArray.push(6)
// myArray.push(7) //push() method value add kore 
// myArray.pop() //only remove the last value from the array .. no need to put any number


// myArray.unshift(9) //start 9 at the array then other things
// myArray.shift() //remove 9 from starting or remove the frst element

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9)) ;//includes mean amra ques korte parbo like 9 include kina 

// const newArray = myArray.join() //join mean values will be in string form
// console.log(myArray);
// console.log(typeof(newArray));

//slice, splice

console.log("A", myArray);
const mynewArray1 = myArray.slice(1,3); //just index 1, 2 print korbe 
console.log(mynewArray1);
console.log("B",myArray);

const mynewArray2 = myArray.splice(1,3) //include index 1, 2, 3 print korbe
console.log("C", myArray);//splice er karone 1,2,3 chole jeye original array te just [0,4,5] thakbe
console.log(mynewArray2);