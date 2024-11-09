// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log( `DB connected one`);
}());  //() () called iife ..global polution code theke remove korar jonno iife use kora hoy

( (name) => { //unnamed iife
    console.log( `DB connected two ${name}`);
} ) ('kimti') //passing parameter
