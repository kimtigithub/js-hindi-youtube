//var c = 100

//{}//its called scope

// if(true){ //if er moddhe ja ja likhbo ogulo block scope .. r er baierer sob global scope
//     let a = 10
//     const b = 20
//     var c = 30   
// }
// //console.log(a);
// //console.log(b);
// console.log(c);

// let a = 300;
// if(true){
//     let a = 10
//     console.log("iNner: ", a); //block scope
// }

// console.log(a);//global scope //output 300

//for loop er khetrew same thing// but console scope and code scope different..
//jotobar curly braces ashbe totobar scope ashbe


//nested scope-----------------
// function one(){  //function er mddhew function possible
//     const username = "Kimti"

//     function two(){ //two one er sob kichute access korte parbe but one parbe na.
// const website = "youtube"
// console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()

// if(true){
//     const username = "kimti"
//     if(username === "kimti"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//    console.log(website);
// }
//console.log(username);

//++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
 function addone(num){
 return num + 1
 }

 addTwo(5)//eta execute hobe na karon function declear kora hoyeche called hoisting
const addTwo = function(num){
    return num + 2
}
