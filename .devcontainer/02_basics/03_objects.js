// singleton (one object)
//Object.create


//object literals

const mySymbol = Symbol("key1")
const JsUser = {
    name: "Kimti",
    [mySymbol]: "key1", //alwyas symbol [] er moddhe likhte hbe 
    age: 18,
    location: "bangkok",
    email: "k@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser["email"])
console.log(JsUser[mySymbol]);

JsUser.email = "kim@gmail.com"
//Object.freeze(JsUser) //mane kono object freeze hoye thakbe .. kew change korte parbe na 
JsUser.email = "Kimti@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log( `Hello JS user, ${this.name}`)     //${} er moddhe variable likhte parbo
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());