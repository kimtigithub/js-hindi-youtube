 const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Kimti"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { // nesting in objects
    email: "k@gmail.com",
    fullname : {
        userfullname : {
            firstname: "kanvisar",
            lastname: "kimti"
        }
    }
}
console.log(regularUser.fullname); //console.log(regularUser.fullname?.userfullname.firstname) ..? mane holo jodi fullname thake print kro 

const obj1  = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1 , obj2)

const obj3 = {...obj1,...obj2} //for spreading like a glass
console.log(obj3);

//when values come from database use this syntax

const users = [ //arrays with objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   //[1] means first value access
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));