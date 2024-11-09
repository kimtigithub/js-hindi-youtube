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

let a = 300;
if(true){
    let a = 10
    console.log("iNner: ", a); //block scope
}

console.log(a);//global scope //output 300

//for loop er khetrew same thing// but console scope and code scope different..