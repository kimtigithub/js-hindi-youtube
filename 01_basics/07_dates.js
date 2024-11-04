// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) //month start from 0 in js if we put single 0 .. if 01 it will start from jan
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-02-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // use this to make quiz app or real time app
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) //to get seconds

let newDate = new Date()
console.log(newDate.getDay());
//`${newdate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})